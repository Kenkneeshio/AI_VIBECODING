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
"use strict";(()=>{var D0=Object.create;var Df=Object.defineProperty;var U0=Object.getOwnPropertyDescriptor;var F0=Object.getOwnPropertyNames;var O0=Object.getPrototypeOf,B0=Object.prototype.hasOwnProperty;var k0=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var z0=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of F0(t))!B0.call(i,s)&&s!==e&&Df(i,s,{get:()=>t[s],enumerable:!(n=U0(t,s))||n.enumerable});return i};var wa=(i,t,e)=>(e=i!=null?D0(O0(i)):{},z0(t||!i||!i.__esModule?Df(e,"default",{value:i,enumerable:!0}):e,i));var ha=k0((Xh,Yh)=>{(function(i,t){typeof Xh=="object"&&typeof Yh<"u"?Yh.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(Xh,(function(){"use strict";/**
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
    ***************************************************************************** */function i(G,S){var E={label:0,sent:function(){if(B[0]&1)throw B[1];return B[1]},trys:[],ops:[]},R,F,B,q;return q={next:X(0),throw:X(1),return:X(2)},typeof Symbol=="function"&&(q[Symbol.iterator]=function(){return this}),q;function X(rt){return function(Rt){return st([rt,Rt])}}function st(rt){if(R)throw new TypeError("Generator is already executing.");for(;E;)try{if(R=1,F&&(B=rt[0]&2?F.return:rt[0]?F.throw||((B=F.return)&&B.call(F),0):F.next)&&!(B=B.call(F,rt[1])).done)return B;switch(F=0,B&&(rt=[rt[0]&2,B.value]),rt[0]){case 0:case 1:B=rt;break;case 4:return E.label++,{value:rt[1],done:!1};case 5:E.label++,F=rt[1],rt=[0];continue;case 7:rt=E.ops.pop(),E.trys.pop();continue;default:if(B=E.trys,!(B=B.length>0&&B[B.length-1])&&(rt[0]===6||rt[0]===2)){E=0;continue}if(rt[0]===3&&(!B||rt[1]>B[0]&&rt[1]<B[3])){E.label=rt[1];break}if(rt[0]===6&&E.label<B[1]){E.label=B[1],B=rt;break}if(B&&E.label<B[2]){E.label=B[2],E.ops.push(rt);break}B[2]&&E.ops.pop(),E.trys.pop();continue}rt=S.call(G,E)}catch(Rt){rt=[6,Rt],F=0}finally{R=B=0}if(rt[0]&5)throw rt[1];return{value:rt[0]?rt[1]:void 0,done:!0}}}var t=(function(){function G(S,E){this.next=null,this.key=S,this.data=E,this.left=null,this.right=null}return G})();function e(G,S){return G>S?1:G<S?-1:0}function n(G,S,E){for(var R=new t(null,null),F=R,B=R;;){var q=E(G,S.key);if(q<0){if(S.left===null)break;if(E(G,S.left.key)<0){var X=S.left;if(S.left=X.right,X.right=S,S=X,S.left===null)break}B.left=S,B=S,S=S.left}else if(q>0){if(S.right===null)break;if(E(G,S.right.key)>0){var X=S.right;if(S.right=X.left,X.left=S,S=X,S.right===null)break}F.right=S,F=S,S=S.right}else break}return F.right=S.left,B.left=S.right,S.left=R.right,S.right=R.left,S}function s(G,S,E,R){var F=new t(G,S);if(E===null)return F.left=F.right=null,F;E=n(G,E,R);var B=R(G,E.key);return B<0?(F.left=E.left,F.right=E,E.left=null):B>=0&&(F.right=E.right,F.left=E,E.right=null),F}function r(G,S,E){var R=null,F=null;if(S){S=n(G,S,E);var B=E(S.key,G);B===0?(R=S.left,F=S.right):B<0?(F=S.right,S.right=null,R=S):(R=S.left,S.left=null,F=S)}return{left:R,right:F}}function o(G,S,E){return S===null?G:(G===null||(S=n(G.key,S,E),S.left=G),S)}function a(G,S,E,R,F){if(G){R(""+S+(E?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+F(G)+`
`);var B=S+(E?"    ":"\u2502   ");G.left&&a(G.left,B,!1,R,F),G.right&&a(G.right,B,!0,R,F)}}var c=(function(){function G(S){S===void 0&&(S=e),this._root=null,this._size=0,this._comparator=S}return G.prototype.insert=function(S,E){return this._size++,this._root=s(S,E,this._root,this._comparator)},G.prototype.add=function(S,E){var R=new t(S,E);this._root===null&&(R.left=R.right=null,this._size++,this._root=R);var F=this._comparator,B=n(S,this._root,F),q=F(S,B.key);return q===0?this._root=B:(q<0?(R.left=B.left,R.right=B,B.left=null):q>0&&(R.right=B.right,R.left=B,B.right=null),this._size++,this._root=R),this._root},G.prototype.remove=function(S){this._root=this._remove(S,this._root,this._comparator)},G.prototype._remove=function(S,E,R){var F;if(E===null)return null;E=n(S,E,R);var B=R(S,E.key);return B===0?(E.left===null?F=E.right:(F=n(S,E.left,R),F.right=E.right),this._size--,F):E},G.prototype.pop=function(){var S=this._root;if(S){for(;S.left;)S=S.left;return this._root=n(S.key,this._root,this._comparator),this._root=this._remove(S.key,this._root,this._comparator),{key:S.key,data:S.data}}return null},G.prototype.findStatic=function(S){for(var E=this._root,R=this._comparator;E;){var F=R(S,E.key);if(F===0)return E;F<0?E=E.left:E=E.right}return null},G.prototype.find=function(S){return this._root&&(this._root=n(S,this._root,this._comparator),this._comparator(S,this._root.key)!==0)?null:this._root},G.prototype.contains=function(S){for(var E=this._root,R=this._comparator;E;){var F=R(S,E.key);if(F===0)return!0;F<0?E=E.left:E=E.right}return!1},G.prototype.forEach=function(S,E){for(var R=this._root,F=[],B=!1;!B;)R!==null?(F.push(R),R=R.left):F.length!==0?(R=F.pop(),S.call(E,R),R=R.right):B=!0;return this},G.prototype.range=function(S,E,R,F){for(var B=[],q=this._comparator,X=this._root,st;B.length!==0||X;)if(X)B.push(X),X=X.left;else{if(X=B.pop(),st=q(X.key,E),st>0)break;if(q(X.key,S)>=0&&R.call(F,X))return this;X=X.right}return this},G.prototype.keys=function(){var S=[];return this.forEach(function(E){var R=E.key;return S.push(R)}),S},G.prototype.values=function(){var S=[];return this.forEach(function(E){var R=E.data;return S.push(R)}),S},G.prototype.min=function(){return this._root?this.minNode(this._root).key:null},G.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},G.prototype.minNode=function(S){if(S===void 0&&(S=this._root),S)for(;S.left;)S=S.left;return S},G.prototype.maxNode=function(S){if(S===void 0&&(S=this._root),S)for(;S.right;)S=S.right;return S},G.prototype.at=function(S){for(var E=this._root,R=!1,F=0,B=[];!R;)if(E)B.push(E),E=E.left;else if(B.length>0){if(E=B.pop(),F===S)return E;F++,E=E.right}else R=!0;return null},G.prototype.next=function(S){var E=this._root,R=null;if(S.right){for(R=S.right;R.left;)R=R.left;return R}for(var F=this._comparator;E;){var B=F(S.key,E.key);if(B===0)break;B<0?(R=E,E=E.left):E=E.right}return R},G.prototype.prev=function(S){var E=this._root,R=null;if(S.left!==null){for(R=S.left;R.right;)R=R.right;return R}for(var F=this._comparator;E;){var B=F(S.key,E.key);if(B===0)break;B<0?E=E.left:(R=E,E=E.right)}return R},G.prototype.clear=function(){return this._root=null,this._size=0,this},G.prototype.toList=function(){return f(this._root)},G.prototype.load=function(S,E,R){E===void 0&&(E=[]),R===void 0&&(R=!1);var F=S.length,B=this._comparator;if(R&&g(S,E,0,F-1,B),this._root===null)this._root=l(S,E,0,F),this._size=F;else{var q=d(this.toList(),u(S,E),B);F=this._size+F,this._root=h({head:q},0,F)}return this},G.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(G.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(G.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),G.prototype.toString=function(S){S===void 0&&(S=function(R){return String(R.key)});var E=[];return a(this._root,"",!0,function(R){return E.push(R)},S),E.join("")},G.prototype.update=function(S,E,R){var F=this._comparator,B=r(S,this._root,F),q=B.left,X=B.right;F(S,E)<0?X=s(E,R,X,F):q=s(E,R,q,F),this._root=o(q,X,F)},G.prototype.split=function(S){return r(S,this._root,this._comparator)},G.prototype[Symbol.iterator]=function(){var S,E,R;return i(this,function(F){switch(F.label){case 0:S=this._root,E=[],R=!1,F.label=1;case 1:return R?[3,6]:S===null?[3,2]:(E.push(S),S=S.left,[3,5]);case 2:return E.length===0?[3,4]:(S=E.pop(),[4,S]);case 3:return F.sent(),S=S.right,[3,5];case 4:R=!0,F.label=5;case 5:return[3,1];case 6:return[2]}})},G})();function l(G,S,E,R){var F=R-E;if(F>0){var B=E+Math.floor(F/2),q=G[B],X=S[B],st=new t(q,X);return st.left=l(G,S,E,B),st.right=l(G,S,B+1,R),st}return null}function u(G,S){for(var E=new t(null,null),R=E,F=0;F<G.length;F++)R=R.next=new t(G[F],S[F]);return R.next=null,E.next}function f(G){for(var S=G,E=[],R=!1,F=new t(null,null),B=F;!R;)S?(E.push(S),S=S.left):E.length>0?(S=B=B.next=E.pop(),S=S.right):R=!0;return B.next=null,F.next}function h(G,S,E){var R=E-S;if(R>0){var F=S+Math.floor(R/2),B=h(G,S,F),q=G.head;return q.left=B,G.head=G.head.next,q.right=h(G,F+1,E),q}return null}function d(G,S,E){for(var R=new t(null,null),F=R,B=G,q=S;B!==null&&q!==null;)E(B.key,q.key)<0?(F.next=B,B=B.next):(F.next=q,q=q.next),F=F.next;return B!==null?F.next=B:q!==null&&(F.next=q),R.next}function g(G,S,E,R,F){if(!(E>=R)){for(var B=G[E+R>>1],q=E-1,X=R+1;;){do q++;while(F(G[q],B)<0);do X--;while(F(G[X],B)>0);if(q>=X)break;var st=G[q];G[q]=G[X],G[X]=st,st=S[q],S[q]=S[X],S[X]=st}g(G,S,E,X,F),g(G,S,X+1,R,F)}}let y=(G,S)=>G.ll.x<=S.x&&S.x<=G.ur.x&&G.ll.y<=S.y&&S.y<=G.ur.y,p=(G,S)=>{if(S.ur.x<G.ll.x||G.ur.x<S.ll.x||S.ur.y<G.ll.y||G.ur.y<S.ll.y)return null;let E=G.ll.x<S.ll.x?S.ll.x:G.ll.x,R=G.ur.x<S.ur.x?G.ur.x:S.ur.x,F=G.ll.y<S.ll.y?S.ll.y:G.ll.y,B=G.ur.y<S.ur.y?G.ur.y:S.ur.y;return{ll:{x:E,y:F},ur:{x:R,y:B}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let x=m*m,M=(G,S)=>{if(-m<G&&G<m&&-m<S&&S<m)return 0;let E=G-S;return E*E<x*G*S?0:G<S?-1:1};class _{constructor(){this.reset()}reset(){this.xRounder=new v,this.yRounder=new v}round(S,E){return{x:this.xRounder.round(S),y:this.yRounder.round(E)}}}class v{constructor(){this.tree=new c,this.round(0)}round(S){let E=this.tree.add(S),R=this.tree.prev(E);if(R!==null&&M(E.key,R.key)===0)return this.tree.remove(S),R.key;let F=this.tree.next(E);return F!==null&&M(E.key,F.key)===0?(this.tree.remove(S),F.key):S}}let w=new _,A=11102230246251565e-32,b=134217729,I=(3+8*A)*A;function O(G,S,E,R,F){let B,q,X,st,rt=S[0],Rt=R[0],D=0,ot=0;Rt>rt==Rt>-rt?(B=rt,rt=S[++D]):(B=Rt,Rt=R[++ot]);let Q=0;if(D<G&&ot<E)for(Rt>rt==Rt>-rt?(q=rt+B,X=B-(q-rt),rt=S[++D]):(q=Rt+B,X=B-(q-Rt),Rt=R[++ot]),B=q,X!==0&&(F[Q++]=X);D<G&&ot<E;)Rt>rt==Rt>-rt?(q=B+rt,st=q-B,X=B-(q-st)+(rt-st),rt=S[++D]):(q=B+Rt,st=q-B,X=B-(q-st)+(Rt-st),Rt=R[++ot]),B=q,X!==0&&(F[Q++]=X);for(;D<G;)q=B+rt,st=q-B,X=B-(q-st)+(rt-st),rt=S[++D],B=q,X!==0&&(F[Q++]=X);for(;ot<E;)q=B+Rt,st=q-B,X=B-(q-st)+(Rt-st),Rt=R[++ot],B=q,X!==0&&(F[Q++]=X);return(B!==0||Q===0)&&(F[Q++]=B),Q}function C(G,S){let E=S[0];for(let R=1;R<G;R++)E+=S[R];return E}function U(G){return new Float64Array(G)}let H=(3+16*A)*A,N=(2+12*A)*A,k=(9+64*A)*A*A,z=U(4),W=U(8),tt=U(12),j=U(16),J=U(4);function at(G,S,E,R,F,B,q){let X,st,rt,Rt,D,ot,Q,wt,At,vt,Dt,Ot,fe,re,Me,we,gn,It,Ut=G-F,Wt=E-F,ie=S-B,_t=R-B;re=Ut*_t,ot=b*Ut,Q=ot-(ot-Ut),wt=Ut-Q,ot=b*_t,At=ot-(ot-_t),vt=_t-At,Me=wt*vt-(re-Q*At-wt*At-Q*vt),we=ie*Wt,ot=b*ie,Q=ot-(ot-ie),wt=ie-Q,ot=b*Wt,At=ot-(ot-Wt),vt=Wt-At,gn=wt*vt-(we-Q*At-wt*At-Q*vt),Dt=Me-gn,D=Me-Dt,z[0]=Me-(Dt+D)+(D-gn),Ot=re+Dt,D=Ot-re,fe=re-(Ot-D)+(Dt-D),Dt=fe-we,D=fe-Dt,z[1]=fe-(Dt+D)+(D-we),It=Ot+Dt,D=It-Ot,z[2]=Ot-(It-D)+(Dt-D),z[3]=It;let Ft=C(4,z),qt=N*q;if(Ft>=qt||-Ft>=qt||(D=G-Ut,X=G-(Ut+D)+(D-F),D=E-Wt,rt=E-(Wt+D)+(D-F),D=S-ie,st=S-(ie+D)+(D-B),D=R-_t,Rt=R-(_t+D)+(D-B),X===0&&st===0&&rt===0&&Rt===0)||(qt=k*q+I*Math.abs(Ft),Ft+=Ut*Rt+_t*X-(ie*rt+Wt*st),Ft>=qt||-Ft>=qt))return Ft;re=X*_t,ot=b*X,Q=ot-(ot-X),wt=X-Q,ot=b*_t,At=ot-(ot-_t),vt=_t-At,Me=wt*vt-(re-Q*At-wt*At-Q*vt),we=st*Wt,ot=b*st,Q=ot-(ot-st),wt=st-Q,ot=b*Wt,At=ot-(ot-Wt),vt=Wt-At,gn=wt*vt-(we-Q*At-wt*At-Q*vt),Dt=Me-gn,D=Me-Dt,J[0]=Me-(Dt+D)+(D-gn),Ot=re+Dt,D=Ot-re,fe=re-(Ot-D)+(Dt-D),Dt=fe-we,D=fe-Dt,J[1]=fe-(Dt+D)+(D-we),It=Ot+Dt,D=It-Ot,J[2]=Ot-(It-D)+(Dt-D),J[3]=It;let ce=O(4,z,4,J,W);re=Ut*Rt,ot=b*Ut,Q=ot-(ot-Ut),wt=Ut-Q,ot=b*Rt,At=ot-(ot-Rt),vt=Rt-At,Me=wt*vt-(re-Q*At-wt*At-Q*vt),we=ie*rt,ot=b*ie,Q=ot-(ot-ie),wt=ie-Q,ot=b*rt,At=ot-(ot-rt),vt=rt-At,gn=wt*vt-(we-Q*At-wt*At-Q*vt),Dt=Me-gn,D=Me-Dt,J[0]=Me-(Dt+D)+(D-gn),Ot=re+Dt,D=Ot-re,fe=re-(Ot-D)+(Dt-D),Dt=fe-we,D=fe-Dt,J[1]=fe-(Dt+D)+(D-we),It=Ot+Dt,D=It-Ot,J[2]=Ot-(It-D)+(Dt-D),J[3]=It;let Ee=O(ce,W,4,J,tt);re=X*Rt,ot=b*X,Q=ot-(ot-X),wt=X-Q,ot=b*Rt,At=ot-(ot-Rt),vt=Rt-At,Me=wt*vt-(re-Q*At-wt*At-Q*vt),we=st*rt,ot=b*st,Q=ot-(ot-st),wt=st-Q,ot=b*rt,At=ot-(ot-rt),vt=rt-At,gn=wt*vt-(we-Q*At-wt*At-Q*vt),Dt=Me-gn,D=Me-Dt,J[0]=Me-(Dt+D)+(D-gn),Ot=re+Dt,D=Ot-re,fe=re-(Ot-D)+(Dt-D),Dt=fe-we,D=fe-Dt,J[1]=fe-(Dt+D)+(D-we),It=Ot+Dt,D=It-Ot,J[2]=Ot-(It-D)+(Dt-D),J[3]=It;let ln=O(Ee,tt,4,J,j);return j[ln-1]}function Et(G,S,E,R,F,B){let q=(S-B)*(E-F),X=(G-F)*(R-B),st=q-X,rt=Math.abs(q+X);return Math.abs(st)>=H*rt?st:-at(G,S,E,R,F,B,rt)}let xt=(G,S)=>G.x*S.y-G.y*S.x,bt=(G,S)=>G.x*S.x+G.y*S.y,Pt=(G,S,E)=>{let R=Et(G.x,G.y,S.x,S.y,E.x,E.y);return R>0?-1:R<0?1:0},Lt=G=>Math.sqrt(bt(G,G)),L=(G,S,E)=>{let R={x:S.x-G.x,y:S.y-G.y},F={x:E.x-G.x,y:E.y-G.y};return xt(F,R)/Lt(F)/Lt(R)},Z=(G,S,E)=>{let R={x:S.x-G.x,y:S.y-G.y},F={x:E.x-G.x,y:E.y-G.y};return bt(F,R)/Lt(F)/Lt(R)},ct=(G,S,E)=>S.y===0?null:{x:G.x+S.x/S.y*(E-G.y),y:E},gt=(G,S,E)=>S.x===0?null:{x:E,y:G.y+S.y/S.x*(E-G.x)},lt=(G,S,E,R)=>{if(S.x===0)return gt(E,R,G.x);if(R.x===0)return gt(G,S,E.x);if(S.y===0)return ct(E,R,G.y);if(R.y===0)return ct(G,S,E.y);let F=xt(S,R);if(F==0)return null;let B={x:E.x-G.x,y:E.y-G.y},q=xt(B,S)/F,X=xt(B,R)/F,st=G.x+X*S.x,rt=E.x+q*R.x,Rt=G.y+X*S.y,D=E.y+q*R.y,ot=(st+rt)/2,Q=(Rt+D)/2;return{x:ot,y:Q}};class yt{static compare(S,E){let R=yt.comparePoints(S.point,E.point);return R!==0?R:(S.point!==E.point&&S.link(E),S.isLeft!==E.isLeft?S.isLeft?1:-1:K.compare(S.segment,E.segment))}static comparePoints(S,E){return S.x<E.x?-1:S.x>E.x?1:S.y<E.y?-1:S.y>E.y?1:0}constructor(S,E){S.events===void 0?S.events=[this]:S.events.push(this),this.point=S,this.isLeft=E}link(S){if(S.point===this.point)throw new Error("Tried to link already linked events");let E=S.point.events;for(let R=0,F=E.length;R<F;R++){let B=E[R];this.point.events.push(B),B.point=this.point}this.checkForConsuming()}checkForConsuming(){let S=this.point.events.length;for(let E=0;E<S;E++){let R=this.point.events[E];if(R.segment.consumedBy===void 0)for(let F=E+1;F<S;F++){let B=this.point.events[F];B.consumedBy===void 0&&R.otherSE.point.events===B.otherSE.point.events&&R.segment.consume(B.segment)}}}getAvailableLinkedEvents(){let S=[];for(let E=0,R=this.point.events.length;E<R;E++){let F=this.point.events[E];F!==this&&!F.segment.ringOut&&F.segment.isInResult()&&S.push(F)}return S}getLeftmostComparator(S){let E=new Map,R=F=>{let B=F.otherSE;E.set(F,{sine:L(this.point,S.point,B.point),cosine:Z(this.point,S.point,B.point)})};return(F,B)=>{E.has(F)||R(F),E.has(B)||R(B);let{sine:q,cosine:X}=E.get(F),{sine:st,cosine:rt}=E.get(B);return q>=0&&st>=0?X<rt?1:X>rt?-1:0:q<0&&st<0?X<rt?-1:X>rt?1:0:st<q?-1:st>q?1:0}}}let Mt=0;class K{static compare(S,E){let R=S.leftSE.point.x,F=E.leftSE.point.x,B=S.rightSE.point.x,q=E.rightSE.point.x;if(q<R)return 1;if(B<F)return-1;let X=S.leftSE.point.y,st=E.leftSE.point.y,rt=S.rightSE.point.y,Rt=E.rightSE.point.y;if(R<F){if(st<X&&st<rt)return 1;if(st>X&&st>rt)return-1;let D=S.comparePoint(E.leftSE.point);if(D<0)return 1;if(D>0)return-1;let ot=E.comparePoint(S.rightSE.point);return ot!==0?ot:-1}if(R>F){if(X<st&&X<Rt)return-1;if(X>st&&X>Rt)return 1;let D=E.comparePoint(S.leftSE.point);if(D!==0)return D;let ot=S.comparePoint(E.rightSE.point);return ot<0?1:ot>0?-1:1}if(X<st)return-1;if(X>st)return 1;if(B<q){let D=E.comparePoint(S.rightSE.point);if(D!==0)return D}if(B>q){let D=S.comparePoint(E.rightSE.point);if(D<0)return 1;if(D>0)return-1}if(B!==q){let D=rt-X,ot=B-R,Q=Rt-st,wt=q-F;if(D>ot&&Q<wt)return 1;if(D<ot&&Q>wt)return-1}return B>q?1:B<q||rt<Rt?-1:rt>Rt?1:S.id<E.id?-1:S.id>E.id?1:0}constructor(S,E,R,F){this.id=++Mt,this.leftSE=S,S.segment=this,S.otherSE=E,this.rightSE=E,E.segment=this,E.otherSE=S,this.rings=R,this.windings=F}static fromRing(S,E,R){let F,B,q,X=yt.comparePoints(S,E);if(X<0)F=S,B=E,q=1;else if(X>0)F=E,B=S,q=-1;else throw new Error(`Tried to create degenerate segment at [${S.x}, ${S.y}]`);let st=new yt(F,!0),rt=new yt(B,!1);return new K(st,rt,[R],[q])}replaceRightSE(S){this.rightSE=S,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let S=this.leftSE.point.y,E=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:S<E?S:E},ur:{x:this.rightSE.point.x,y:S>E?S:E}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(S){return S.x===this.leftSE.point.x&&S.y===this.leftSE.point.y||S.x===this.rightSE.point.x&&S.y===this.rightSE.point.y}comparePoint(S){if(this.isAnEndpoint(S))return 0;let E=this.leftSE.point,R=this.rightSE.point,F=this.vector();if(E.x===R.x)return S.x===E.x?0:S.x<E.x?1:-1;let B=(S.y-E.y)/F.y,q=E.x+B*F.x;if(S.x===q)return 0;let X=(S.x-E.x)/F.x,st=E.y+X*F.y;return S.y===st?0:S.y<st?-1:1}getIntersection(S){let E=this.bbox(),R=S.bbox(),F=p(E,R);if(F===null)return null;let B=this.leftSE.point,q=this.rightSE.point,X=S.leftSE.point,st=S.rightSE.point,rt=y(E,X)&&this.comparePoint(X)===0,Rt=y(R,B)&&S.comparePoint(B)===0,D=y(E,st)&&this.comparePoint(st)===0,ot=y(R,q)&&S.comparePoint(q)===0;if(Rt&&rt)return ot&&!D?q:!ot&&D?st:null;if(Rt)return D&&B.x===st.x&&B.y===st.y?null:B;if(rt)return ot&&q.x===X.x&&q.y===X.y?null:X;if(ot&&D)return null;if(ot)return q;if(D)return st;let Q=lt(B,this.vector(),X,S.vector());return Q===null||!y(F,Q)?null:w.round(Q.x,Q.y)}split(S){let E=[],R=S.events!==void 0,F=new yt(S,!0),B=new yt(S,!1),q=this.rightSE;this.replaceRightSE(B),E.push(B),E.push(F);let X=new K(F,q,this.rings.slice(),this.windings.slice());return yt.comparePoints(X.leftSE.point,X.rightSE.point)>0&&X.swapEvents(),yt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),R&&(F.checkForConsuming(),B.checkForConsuming()),E}swapEvents(){let S=this.rightSE;this.rightSE=this.leftSE,this.leftSE=S,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let E=0,R=this.windings.length;E<R;E++)this.windings[E]*=-1}consume(S){let E=this,R=S;for(;E.consumedBy;)E=E.consumedBy;for(;R.consumedBy;)R=R.consumedBy;let F=K.compare(E,R);if(F!==0){if(F>0){let B=E;E=R,R=B}if(E.prev===R){let B=E;E=R,R=B}for(let B=0,q=R.rings.length;B<q;B++){let X=R.rings[B],st=R.windings[B],rt=E.rings.indexOf(X);rt===-1?(E.rings.push(X),E.windings.push(st)):E.windings[rt]+=st}R.rings=null,R.windings=null,R.consumedBy=E,R.leftSE.consumedBy=E.leftSE,R.rightSE.consumedBy=E.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let S=this.prev.consumedBy||this.prev;this._beforeState=S.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let S=this.beforeState();this._afterState={rings:S.rings.slice(0),windings:S.windings.slice(0),multiPolys:[]};let E=this._afterState.rings,R=this._afterState.windings,F=this._afterState.multiPolys;for(let X=0,st=this.rings.length;X<st;X++){let rt=this.rings[X],Rt=this.windings[X],D=E.indexOf(rt);D===-1?(E.push(rt),R.push(Rt)):R[D]+=Rt}let B=[],q=[];for(let X=0,st=E.length;X<st;X++){if(R[X]===0)continue;let rt=E[X],Rt=rt.poly;if(q.indexOf(Rt)===-1)if(rt.isExterior)B.push(Rt);else{q.indexOf(Rt)===-1&&q.push(Rt);let D=B.indexOf(rt.poly);D!==-1&&B.splice(D,1)}}for(let X=0,st=B.length;X<st;X++){let rt=B[X].multiPoly;F.indexOf(rt)===-1&&F.push(rt)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let S=this.beforeState().multiPolys,E=this.afterState().multiPolys;switch(Vt.type){case"union":{let R=S.length===0,F=E.length===0;this._isInResult=R!==F;break}case"intersection":{let R,F;S.length<E.length?(R=S.length,F=E.length):(R=E.length,F=S.length),this._isInResult=F===Vt.numMultiPolys&&R<F;break}case"xor":{let R=Math.abs(S.length-E.length);this._isInResult=R%2===1;break}case"difference":{let R=F=>F.length===1&&F[0].isSubject;this._isInResult=R(S)!==R(E);break}default:throw new Error(`Unrecognized operation type found ${Vt.type}`)}return this._isInResult}}class dt{constructor(S,E,R){if(!Array.isArray(S)||S.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=E,this.isExterior=R,this.segments=[],typeof S[0][0]!="number"||typeof S[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let F=w.round(S[0][0],S[0][1]);this.bbox={ll:{x:F.x,y:F.y},ur:{x:F.x,y:F.y}};let B=F;for(let q=1,X=S.length;q<X;q++){if(typeof S[q][0]!="number"||typeof S[q][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let st=w.round(S[q][0],S[q][1]);st.x===B.x&&st.y===B.y||(this.segments.push(K.fromRing(B,st,this)),st.x<this.bbox.ll.x&&(this.bbox.ll.x=st.x),st.y<this.bbox.ll.y&&(this.bbox.ll.y=st.y),st.x>this.bbox.ur.x&&(this.bbox.ur.x=st.x),st.y>this.bbox.ur.y&&(this.bbox.ur.y=st.y),B=st)}(F.x!==B.x||F.y!==B.y)&&this.segments.push(K.fromRing(B,F,this))}getSweepEvents(){let S=[];for(let E=0,R=this.segments.length;E<R;E++){let F=this.segments[E];S.push(F.leftSE),S.push(F.rightSE)}return S}}class Tt{constructor(S,E){if(!Array.isArray(S))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new dt(S[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let R=1,F=S.length;R<F;R++){let B=new dt(S[R],this,!1);B.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=B.bbox.ll.x),B.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=B.bbox.ll.y),B.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=B.bbox.ur.x),B.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=B.bbox.ur.y),this.interiorRings.push(B)}this.multiPoly=E}getSweepEvents(){let S=this.exteriorRing.getSweepEvents();for(let E=0,R=this.interiorRings.length;E<R;E++){let F=this.interiorRings[E].getSweepEvents();for(let B=0,q=F.length;B<q;B++)S.push(F[B])}return S}}class St{constructor(S,E){if(!Array.isArray(S))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof S[0][0][0]=="number"&&(S=[S])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let R=0,F=S.length;R<F;R++){let B=new Tt(S[R],this);B.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=B.bbox.ll.x),B.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=B.bbox.ll.y),B.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=B.bbox.ur.x),B.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=B.bbox.ur.y),this.polys.push(B)}this.isSubject=E}getSweepEvents(){let S=[];for(let E=0,R=this.polys.length;E<R;E++){let F=this.polys[E].getSweepEvents();for(let B=0,q=F.length;B<q;B++)S.push(F[B])}return S}}class Ct{static factory(S){let E=[];for(let R=0,F=S.length;R<F;R++){let B=S[R];if(!B.isInResult()||B.ringOut)continue;let q=null,X=B.leftSE,st=B.rightSE,rt=[X],Rt=X.point,D=[];for(;q=X,X=st,rt.push(X),X.point!==Rt;)for(;;){let ot=X.getAvailableLinkedEvents();if(ot.length===0){let At=rt[0].point,vt=rt[rt.length-1].point;throw new Error(`Unable to complete output ring starting at [${At.x}, ${At.y}]. Last matching segment found ends at [${vt.x}, ${vt.y}].`)}if(ot.length===1){st=ot[0].otherSE;break}let Q=null;for(let At=0,vt=D.length;At<vt;At++)if(D[At].point===X.point){Q=At;break}if(Q!==null){let At=D.splice(Q)[0],vt=rt.splice(At.index);vt.unshift(vt[0].otherSE),E.push(new Ct(vt.reverse()));continue}D.push({index:rt.length,point:X.point});let wt=X.getLeftmostComparator(q);st=ot.sort(wt)[0].otherSE;break}E.push(new Ct(rt))}return E}constructor(S){this.events=S;for(let E=0,R=S.length;E<R;E++)S[E].segment.ringOut=this;this.poly=null}getGeom(){let S=this.events[0].point,E=[S];for(let rt=1,Rt=this.events.length-1;rt<Rt;rt++){let D=this.events[rt].point,ot=this.events[rt+1].point;Pt(D,S,ot)!==0&&(E.push(D),S=D)}if(E.length===1)return null;let R=E[0],F=E[1];Pt(R,S,F)===0&&E.shift(),E.push(E[0]);let B=this.isExteriorRing()?1:-1,q=this.isExteriorRing()?0:E.length-1,X=this.isExteriorRing()?E.length:-1,st=[];for(let rt=q;rt!=X;rt+=B)st.push([E[rt].x,E[rt].y]);return st}isExteriorRing(){if(this._isExteriorRing===void 0){let S=this.enclosingRing();this._isExteriorRing=S?!S.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let S=this.events[0];for(let F=1,B=this.events.length;F<B;F++){let q=this.events[F];yt.compare(S,q)>0&&(S=q)}let E=S.segment.prevInResult(),R=E?E.prevInResult():null;for(;;){if(!E)return null;if(!R)return E.ringOut;if(R.ringOut!==E.ringOut)return R.ringOut.enclosingRing()!==E.ringOut?E.ringOut:E.ringOut.enclosingRing();E=R.prevInResult(),R=E?E.prevInResult():null}}}class kt{constructor(S){this.exteriorRing=S,S.poly=this,this.interiorRings=[]}addInterior(S){this.interiorRings.push(S),S.poly=this}getGeom(){let S=[this.exteriorRing.getGeom()];if(S[0]===null)return null;for(let E=0,R=this.interiorRings.length;E<R;E++){let F=this.interiorRings[E].getGeom();F!==null&&S.push(F)}return S}}class Bt{constructor(S){this.rings=S,this.polys=this._composePolys(S)}getGeom(){let S=[];for(let E=0,R=this.polys.length;E<R;E++){let F=this.polys[E].getGeom();F!==null&&S.push(F)}return S}_composePolys(S){let E=[];for(let R=0,F=S.length;R<F;R++){let B=S[R];if(!B.poly)if(B.isExteriorRing())E.push(new kt(B));else{let q=B.enclosingRing();q.poly||E.push(new kt(q)),q.poly.addInterior(B)}}return E}}class Gt{constructor(S){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K.compare;this.queue=S,this.tree=new c(E),this.segments=[]}process(S){let E=S.segment,R=[];if(S.consumedBy)return S.isLeft?this.queue.remove(S.otherSE):this.tree.remove(E),R;let F=S.isLeft?this.tree.add(E):this.tree.find(E);if(!F)throw new Error(`Unable to find segment #${E.id} [${E.leftSE.point.x}, ${E.leftSE.point.y}] -> [${E.rightSE.point.x}, ${E.rightSE.point.y}] in SweepLine tree.`);let B=F,q=F,X,st;for(;X===void 0;)B=this.tree.prev(B),B===null?X=null:B.key.consumedBy===void 0&&(X=B.key);for(;st===void 0;)q=this.tree.next(q),q===null?st=null:q.key.consumedBy===void 0&&(st=q.key);if(S.isLeft){let rt=null;if(X){let D=X.getIntersection(E);if(D!==null&&(E.isAnEndpoint(D)||(rt=D),!X.isAnEndpoint(D))){let ot=this._splitSafely(X,D);for(let Q=0,wt=ot.length;Q<wt;Q++)R.push(ot[Q])}}let Rt=null;if(st){let D=st.getIntersection(E);if(D!==null&&(E.isAnEndpoint(D)||(Rt=D),!st.isAnEndpoint(D))){let ot=this._splitSafely(st,D);for(let Q=0,wt=ot.length;Q<wt;Q++)R.push(ot[Q])}}if(rt!==null||Rt!==null){let D=null;rt===null?D=Rt:Rt===null?D=rt:D=yt.comparePoints(rt,Rt)<=0?rt:Rt,this.queue.remove(E.rightSE),R.push(E.rightSE);let ot=E.split(D);for(let Q=0,wt=ot.length;Q<wt;Q++)R.push(ot[Q])}R.length>0?(this.tree.remove(E),R.push(S)):(this.segments.push(E),E.prev=X)}else{if(X&&st){let rt=X.getIntersection(st);if(rt!==null){if(!X.isAnEndpoint(rt)){let Rt=this._splitSafely(X,rt);for(let D=0,ot=Rt.length;D<ot;D++)R.push(Rt[D])}if(!st.isAnEndpoint(rt)){let Rt=this._splitSafely(st,rt);for(let D=0,ot=Rt.length;D<ot;D++)R.push(Rt[D])}}}this.tree.remove(E)}return R}_splitSafely(S,E){this.tree.remove(S);let R=S.rightSE;this.queue.remove(R);let F=S.split(E);return F.push(R),S.consumedBy===void 0&&this.tree.add(S),F}}let jt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,$=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class de{run(S,E,R){Vt.type=S,w.reset();let F=[new St(E,!0)];for(let D=0,ot=R.length;D<ot;D++)F.push(new St(R[D],!1));if(Vt.numMultiPolys=F.length,Vt.type==="difference"){let D=F[0],ot=1;for(;ot<F.length;)p(F[ot].bbox,D.bbox)!==null?ot++:F.splice(ot,1)}if(Vt.type==="intersection")for(let D=0,ot=F.length;D<ot;D++){let Q=F[D];for(let wt=D+1,At=F.length;wt<At;wt++)if(p(Q.bbox,F[wt].bbox)===null)return[]}let B=new c(yt.compare);for(let D=0,ot=F.length;D<ot;D++){let Q=F[D].getSweepEvents();for(let wt=0,At=Q.length;wt<At;wt++)if(B.insert(Q[wt]),B.size>jt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let q=new Gt(B),X=B.size,st=B.pop();for(;st;){let D=st.key;if(B.size===X){let Q=D.segment;throw new Error(`Unable to pop() ${D.isLeft?"left":"right"} SweepEvent [${D.point.x}, ${D.point.y}] from segment #${Q.id} [${Q.leftSE.point.x}, ${Q.leftSE.point.y}] -> [${Q.rightSE.point.x}, ${Q.rightSE.point.y}] from queue.`)}if(B.size>jt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(q.segments.length>$)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let ot=q.process(D);for(let Q=0,wt=ot.length;Q<wt;Q++){let At=ot[Q];At.consumedBy===void 0&&B.insert(At)}X=B.size,st=B.pop()}w.reset();let rt=Ct.factory(q.segments);return new Bt(rt).getGeom()}}let Vt=new de;var pt={union:function(G){for(var S=arguments.length,E=new Array(S>1?S-1:0),R=1;R<S;R++)E[R-1]=arguments[R];return Vt.run("union",G,E)},intersection:function(G){for(var S=arguments.length,E=new Array(S>1?S-1:0),R=1;R<S;R++)E[R-1]=arguments[R];return Vt.run("intersection",G,E)},xor:function(G){for(var S=arguments.length,E=new Array(S>1?S-1:0),R=1;R<S;R++)E[R-1]=arguments[R];return Vt.run("xor",G,E)},difference:function(G){for(var S=arguments.length,E=new Array(S>1?S-1:0),R=1;R<S;R++)E[R-1]=arguments[R];return Vt.run("difference",G,E)}};return pt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var bd=0,th=1,Md=2;var Hs=1,Sd=2,Dr=3,vs=0,Bn=1,sn=2,Ci=0,Ur=1,Yi=2,eh=3,nh=4,wd=5;var Gs=100,Ed=101,Td=102,Ad=103,Rd=104,Cd=200,Id=201,Pd=202,Ld=203,ih=204,sh=205,Nd=206,Dd=207,Ud=208,Fd=209,Od=210,Bd=211,kd=212,zd=213,Hd=214,tc=0,ec=1,nc=2,xr=3,ic=4,sc=5,rc=6,oc=7,Bc=0,Gd=1,Vd=2,mi=0,rh=1,oh=2,ah=3,qo=4,ch=5,lh=6,uh=7;var hh=300,_s=301,Vs=302,kc=303,zc=304,Zo=306,Us=1e3,wi=1001,ac=1002,fn=1003,Wd=1004;var $o=1005;var xn=1006,Hc=1007;var bs=1008;var Xn=1009,fh=1010,dh=1011,Fr=1012,Gc=1013,gi=1014,ri=1015,yi=1016,Vc=1017,Wc=1018,Or=1020,ph=35902,mh=35899,gh=1021,yh=1022,oi=1023,Ti=1026,Ms=1027,Xc=1028,Yc=1029,Ss=1030,qc=1031;var Zc=1033,jo=33776,Jo=33777,Ko=33778,Qo=33779,$c=35840,jc=35841,Jc=35842,Kc=35843,Qc=36196,tl=37492,el=37496,nl=37488,il=37489,ta=37490,sl=37491,rl=37808,ol=37809,al=37810,cl=37811,ll=37812,ul=37813,hl=37814,fl=37815,dl=37816,pl=37817,ml=37818,gl=37819,yl=37820,xl=37821,vl=36492,_l=36494,bl=36495,Ml=36283,Sl=36284,ea=36285,wl=36286;var mo=2300,cc=2301,Ka=2302,zu=2303,Hu=2400,Gu=2401,Vu=2402;var Xd=3200;var na=0,Yd=1,qi="",en="srgb",go="srgb-linear",yo="linear",Pe="srgb";var Qa=7680;var qd=519,Zd=512,$d=513,jd=514,El=515,Jd=516,Kd=517,Tl=518,Qd=519,xh=35044,kn=35048;var vh="300 es",di=2e3,vr=2001;function H0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function G0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tp(){let i=xo("canvas");return i.style.display="block",i}var Uf={},_r=null;function vo(...i){let t="THREE."+i.shift();_r?_r("log",t,...i):console.log(t,...i)}function ep(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ae(...i){i=ep(i);let t="THREE."+i.shift();if(_r)_r("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ue(...i){i=ep(i);let t="THREE."+i.shift();if(_r)_r("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ds(...i){let t=i.join(" ");t in Uf||(Uf[t]=!0,ae(...i))}function np(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ip={[tc]:ec,[nc]:rc,[ic]:oc,[xr]:sc,[ec]:tc,[rc]:nc,[oc]:ic,[sc]:xr},Ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=1234567,uo=Math.PI/180,br=180/Math.PI;function Ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function _h(i,t){return(i%t+t)%t}function V0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function W0(i,t,e){return i!==t?(e-i)/(t-i):0}function ho(i,t,e){return(1-e)*i+e*t}function X0(i,t,e,n){return ho(i,t,1-Math.exp(-e*n))}function Y0(i,t=1){return t-Math.abs(_h(i,t*2)-t)}function q0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Z0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function j0(i,t){return i+Math.random()*(t-i)}function J0(i){return i*(.5-Math.random())}function K0(i){i!==void 0&&(Ff=i);let t=Ff+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Q0(i){return i*uo}function ty(i){return i*br}function ey(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ny(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function iy(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sy(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oe={DEG2RAD:uo,RAD2DEG:br,generateUUID:Ei,clamp:pe,euclideanModulo:_h,mapLinear:V0,inverseLerp:W0,lerp:ho,damp:X0,pingpong:Y0,smoothstep:q0,smootherstep:Z0,randInt:$0,randFloat:j0,randFloatSpread:J0,seededRandom:K0,degToRad:Q0,radToDeg:ty,isPowerOfTwo:ey,ceilPowerOfTwo:ny,floorPowerOfTwo:iy,setQuaternionFromProperEuler:sy,normalize:De,denormalize:fi},Nt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(f!==y||c!==h||l!==d||u!==g){let p=c*h+l*d+u*g+f*y;p<0&&(h=-h,d=-d,g=-g,y=-y,p=-p);let m=1-a;if(p<.9995){let x=Math.acos(p),M=Math.sin(x);m=Math.sin(m*x)/M,a=Math.sin(a*x)/M,c=c*m+h*a,l=l*m+d*a,u=u*m+g*a,f=f*m+y*a}else{c=c*m+h*a,l=l*m+d*a,u=u*m+g*a,f=f*m+y*a;let x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Of.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Of.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pu.copy(this).projectOnVector(t),this.sub(pu)}reflect(t){return this.sub(pu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pu=new Y,Of=new dn,me=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],y=s[0],p=s[3],m=s[6],x=s[1],M=s[4],_=s[7],v=s[2],w=s[5],A=s[8];return r[0]=o*y+a*x+c*v,r[3]=o*p+a*M+c*w,r[6]=o*m+a*_+c*A,r[1]=l*y+u*x+f*v,r[4]=l*p+u*M+f*w,r[7]=l*m+u*_+f*A,r[2]=h*y+d*x+g*v,r[5]=h*p+d*M+g*w,r[8]=h*m+d*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*l-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=h*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mu.makeScale(t,e)),this}rotate(t){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mu.makeRotation(-t)),this}translate(t,e){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},mu=new me,Bf=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kf=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ry(){let i={enabled:!0,workingColorSpace:go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Pe&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pe&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[go]:{primaries:t,whitePoint:n,transfer:yo,toXYZ:Bf,fromXYZ:kf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:Pe,toXYZ:Bf,fromXYZ:kf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}var _e=ry();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var er,lc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{er===void 0&&(er=xo("canvas")),er.width=t.width,er.height=t.height;let s=er.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=er}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},oy=0,Mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gu(s[o].image)):r.push(gu(s[o]))}else r=gu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function gu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var ay=0,yu=new Y,On=class i extends Ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,s=wi,r=xn,o=bs,a=oi,c=Xn,l=i.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ei(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yu).x}get height(){return this.source.getSize(yu).y}get depth(){return this.source.getSize(yu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=hh;On.DEFAULT_ANISOTROPY=1;var Le=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,_=(d+1)/2,v=(m+1)/2,w=(u+h)/4,A=(f+y)/4,b=(g+p)/4;return M>_&&M>v?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=A/n):_>v?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=b/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=A/r,s=b/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-y)/x,this.z=(h-u)/x,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uc=class extends Ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new On(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_o=class extends On{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hc=class extends On{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var be=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,y,p)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/nr.setFromMatrixColumn(t,0).length(),r=1/nr.setFromMatrixColumn(t,1).length(),o=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,y=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-y*l,e[9]=-a*c,e[2]=y-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,y=l*f;e[0]=h+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,y=l*f;e[0]=h-y*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,y=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+y,e[1]=c*f,e[5]=y*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-y*f}else if(t.order==="XZY"){let h=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cy,t,ly)}lookAt(t,e,n){let s=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),is.crossVectors(n,qn),is.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),is.crossVectors(n,qn)),is.normalize(),Ea.crossVectors(qn,is),s[0]=is.x,s[4]=Ea.x,s[8]=qn.x,s[1]=is.y,s[5]=Ea.y,s[9]=qn.y,s[2]=is.z,s[6]=Ea.z,s[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],y=n[6],p=n[10],m=n[14],x=n[3],M=n[7],_=n[11],v=n[15],w=s[0],A=s[4],b=s[8],I=s[12],O=s[1],C=s[5],U=s[9],H=s[13],N=s[2],k=s[6],z=s[10],W=s[14],tt=s[3],j=s[7],J=s[11],at=s[15];return r[0]=o*w+a*O+c*N+l*tt,r[4]=o*A+a*C+c*k+l*j,r[8]=o*b+a*U+c*z+l*J,r[12]=o*I+a*H+c*W+l*at,r[1]=u*w+f*O+h*N+d*tt,r[5]=u*A+f*C+h*k+d*j,r[9]=u*b+f*U+h*z+d*J,r[13]=u*I+f*H+h*W+d*at,r[2]=g*w+y*O+p*N+m*tt,r[6]=g*A+y*C+p*k+m*j,r[10]=g*b+y*U+p*z+m*J,r[14]=g*I+y*H+p*W+m*at,r[3]=x*w+M*O+_*N+v*tt,r[7]=x*A+M*C+_*k+v*j,r[11]=x*b+M*U+_*z+v*J,r[15]=x*I+M*H+_*W+v*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],x=c*d-l*h,M=a*d-l*f,_=a*h-c*f,v=o*d-l*u,w=o*h-c*u,A=o*f-a*u;return e*(y*x-p*M+m*_)-n*(g*x-p*v+m*w)+s*(g*M-y*v+m*A)-r*(g*_-y*w+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],x=e*a-n*o,M=e*c-s*o,_=e*l-r*o,v=n*c-s*a,w=n*l-r*a,A=s*l-r*c,b=u*y-f*g,I=u*p-h*g,O=u*m-d*g,C=f*p-h*y,U=f*m-d*y,H=h*m-d*p,N=x*H-M*U+_*C+v*O-w*I+A*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(a*H-c*U+l*C)*k,t[1]=(s*U-n*H-r*C)*k,t[2]=(y*A-p*w+m*v)*k,t[3]=(h*w-f*A-d*v)*k,t[4]=(c*O-o*H-l*I)*k,t[5]=(e*H-s*O+r*I)*k,t[6]=(p*_-g*A-m*M)*k,t[7]=(u*A-h*_+d*M)*k,t[8]=(o*U-a*O+l*b)*k,t[9]=(n*O-e*U-r*b)*k,t[10]=(g*w-y*_+m*x)*k,t[11]=(f*_-u*w-d*x)*k,t[12]=(a*I-o*C-c*b)*k,t[13]=(e*C-n*I+s*b)*k,t[14]=(y*M-g*v-p*x)*k,t[15]=(u*v-f*M+h*x)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,y=o*u,p=o*f,m=a*f,x=c*l,M=c*u,_=c*f,v=n.x,w=n.y,A=n.z;return s[0]=(1-(y+m))*v,s[1]=(d+_)*v,s[2]=(g-M)*v,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(h+m))*w,s[6]=(p+x)*w,s[7]=0,s[8]=(g+M)*A,s[9]=(p-x)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=nr.set(s[0],s[1],s[2]).length(),a=nr.set(s[4],s[5],s[6]).length(),c=nr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),li.copy(this);let l=1/o,u=1/a,f=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=f,li.elements[9]*=f,li.elements[10]*=f,e.setFromRotationMatrix(li),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=di,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===di)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===vr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=di,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===di)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===vr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},nr=new Y,li=new be,cy=new Y(0,0,0),ly=new Y(1,1,1),is=new Y,Ea=new Y,qn=new Y,zf=new be,Hf=new dn,Ri=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},uy=0,Gf=new Y,ir=new dn,ki=new be,Ta=new Y,no=new Y,hy=new Y,fy=new dn,Vf=new Y(1,0,0),Wf=new Y(0,1,0),Xf=new Y(0,0,1),Yf={type:"added"},dy={type:"removed"},sr={type:"childadded",child:null},xu={type:"childremoved",child:null},Xe=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new Ri,n=new dn,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new me}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(Vf,t)}rotateY(t){return this.rotateOnAxis(Wf,t)}rotateZ(t){return this.rotateOnAxis(Xf,t)}translateOnAxis(t,e){return Gf.copy(t).applyQuaternion(this.quaternion),this.position.add(Gf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vf,t)}translateY(t){return this.translateOnAxis(Wf,t)}translateZ(t){return this.translateOnAxis(Xf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ta.copy(t):Ta.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(no,Ta,this.up):ki.lookAt(Ta,no,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(ki),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yf),sr.child=t,this.dispatchEvent(sr),sr.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dy),xu.child=t,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yf),sr.child=t,this.dispatchEvent(sr),sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,hy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,fy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xe.DEFAULT_UP=new Y(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function vu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=_h(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vu(o,r,t+1/3),this.g=vu(o,r,t),this.b=vu(o,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let n=sp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return _e.workingToColorSpace(An.copy(this),t),Math.round(pe(An.r*255,0,255))*65536+Math.round(pe(An.g*255,0,255))*256+Math.round(pe(An.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(An.copy(this),e);let n=An.r,s=An.g,r=An.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=en){_e.workingToColorSpace(An.copy(this),t);let e=An.r,n=An.g,s=An.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+e,ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ss),t.getHSL(Aa);let n=ho(ss.h,Aa.h,e),s=ho(ss.s,Aa.s,e),r=ho(ss.l,Aa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Yt;Yt.NAMES=sp;var bo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ls=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ui=new Y,zi=new Y,_u=new Y,Hi=new Y,rr=new Y,or=new Y,qf=new Y,bu=new Y,Mu=new Y,Su=new Y,wu=new Le,Eu=new Le,Tu=new Le,cs=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ui.subVectors(t,e),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ui.subVectors(s,e),zi.subVectors(n,e),_u.subVectors(t,e);let o=ui.dot(ui),a=ui.dot(zi),c=ui.dot(_u),l=zi.dot(zi),u=zi.dot(_u),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hi.x),c.addScaledVector(o,Hi.y),c.addScaledVector(a,Hi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return wu.setScalar(0),Eu.setScalar(0),Tu.setScalar(0),wu.fromBufferAttribute(t,e),Eu.fromBufferAttribute(t,n),Tu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wu,r.x),o.addScaledVector(Eu,r.y),o.addScaledVector(Tu,r.z),o}static isFrontFacing(t,e,n,s){return ui.subVectors(n,e),zi.subVectors(t,e),ui.cross(zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ui.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;rr.subVectors(s,n),or.subVectors(r,n),bu.subVectors(t,n);let c=rr.dot(bu),l=or.dot(bu);if(c<=0&&l<=0)return e.copy(n);Mu.subVectors(t,s);let u=rr.dot(Mu),f=or.dot(Mu);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(rr,o);Su.subVectors(t,r);let d=rr.dot(Su),g=or.dot(Su);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(or,a);let p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return qf.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(qf,a);let m=1/(p+y+h);return o=y*m,a=h*m,e.copy(n).addScaledVector(rr,o).addScaledVector(or,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oe=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(t.matrixWorld),this.union(Ra)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),Ca.subVectors(this.max,io),ar.subVectors(t.a,io),cr.subVectors(t.b,io),lr.subVectors(t.c,io),rs.subVectors(cr,ar),os.subVectors(lr,cr),Is.subVectors(ar,lr);let e=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Is.z,Is.y,rs.z,0,-rs.x,os.z,0,-os.x,Is.z,0,-Is.x,-rs.y,rs.x,0,-os.y,os.x,0,-Is.y,Is.x,0];return!Au(e,ar,cr,lr,Ca)||(e=[1,0,0,0,1,0,0,0,1],!Au(e,ar,cr,lr,Ca))?!1:(Ia.crossVectors(rs,os),e=[Ia.x,Ia.y,Ia.z],Au(e,ar,cr,lr,Ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],hi=new Y,Ra=new Oe,ar=new Y,cr=new Y,lr=new Y,rs=new Y,os=new Y,Is=new Y,io=new Y,Ca=new Y,Ia=new Y,Ps=new Y;function Au(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ps.fromArray(i,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),c=t.dot(Ps),l=e.dot(Ps),u=n.dot(Ps);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var tn=new Y,Pa=new Nt,my=0,Te=class extends Ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:my++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pa.fromBufferAttribute(this,e),Pa.applyMatrix3(t),this.setXY(e,Pa.x,Pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Mo=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var So=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},gy=new Oe,so=new Y,Ru=new Y,Wn=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gy.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);let e=so.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(so,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ru.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(Ru)),this.expandByPoint(so.copy(t.center).sub(Ru))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yy=0,ni=new be,Cu=new Xe,ur=new Y,Zn=new Oe,ro=new Oe,hn=new Y,he=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(H0(t)?So:Mo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,n){return ni.makeTranslation(t,e,n),this.applyMatrix4(ni),this}scale(t,e,n){return ni.makeScale(t,e,n),this.applyMatrix4(ni),this}lookAt(t){return Cu.lookAt(t),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Zn.min,ro.min),Zn.expandByPoint(hn),hn.addVectors(Zn.max,ro.max),Zn.expandByPoint(hn)):(Zn.expandByPoint(ro.min),Zn.expandByPoint(ro.max))}Zn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)hn.fromBufferAttribute(a,l),c&&(ur.fromBufferAttribute(t,l),hn.add(ur)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new Y,c[b]=new Y;let l=new Y,u=new Y,f=new Y,h=new Nt,d=new Nt,g=new Nt,y=new Y,p=new Y;function m(b,I,O){l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,O),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,O),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(C),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[b].add(y),a[I].add(y),a[O].add(y),c[b].add(p),c[I].add(p),c[O].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let b=0,I=x.length;b<I;++b){let O=x[b],C=O.start,U=O.count;for(let H=C,N=C+U;H<N;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let M=new Y,_=new Y,v=new Y,w=new Y;function A(b){v.fromBufferAttribute(s,b),w.copy(v);let I=a[b];M.copy(I),M.sub(v.multiplyScalar(v.dot(I))).normalize(),_.crossVectors(w,I);let C=_.dot(c[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,C)}for(let b=0,I=x.length;b<I;++b){let O=x[b],C=O.start,U=O.count;for(let H=C,N=C+U;H<N;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new Y,r=new Y,o=new Y,a=new Y,c=new Y,l=new Y,u=new Y,f=new Y;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),y=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let m=0;m<u;m++)h[g++]=l[d++]}return new Te(h,u,f)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xh,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Un=new Y,ii=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){vo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){vo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Iu=new Y,xy=new Y,vy=new me,$n=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Iu.subVectors(n,e).cross(xy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vy.getNormalMatrix(t),s=this.coplanarPoint(Iu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_y=0,pi=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Ur,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Vi=new Y,Pu=new Y,La=new Y,Na=new Y,Fs=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,e),Vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pu.copy(t).add(e).multiplyScalar(.5),La.copy(e).sub(t).normalize(),Na.copy(this.origin).sub(Pu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(La),a=Na.dot(this.direction),c=-Na.dot(La),l=Na.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pu).addScaledVector(La,h),d}intersectSphere(t,e){if(t.radius<0)return null;Vi.subVectors(t.center,this.origin);let n=Vi.dot(this.direction),s=Vi.dot(Vi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,y=e.y-o.y,p=e.z-o.z,m=n.x-o.x,x=n.y-o.y,M=n.z-o.z,_=Math.abs(c),v=Math.abs(l),w=Math.abs(u),A,b,I,O,C,U,H,N,k,z,W,tt;if(_>=v&&_>=w?(I=c,U=f,k=g,tt=m,c>=0?(A=l,b=u,O=h,C=d,H=y,N=p,z=x,W=M):(A=u,b=l,O=d,C=h,H=p,N=y,z=M,W=x)):v>=w?(I=l,U=h,k=y,tt=x,l>=0?(A=u,b=c,O=d,C=f,H=p,N=g,z=M,W=m):(A=c,b=u,O=f,C=d,H=g,N=p,z=m,W=M)):(I=u,U=d,k=p,tt=M,u>=0?(A=c,b=l,O=f,C=h,H=g,N=y,z=m,W=x):(A=l,b=c,O=h,C=f,H=y,N=g,z=x,W=m)),I===0)return null;let j=A/I,J=b/I,at=1/I,Et=O-j*U,xt=C-J*U,bt=H-j*k,Pt=N-J*k,Lt=z-j*tt,L=W-J*tt,Z=Lt*Pt-L*bt,ct=Et*L-xt*Lt,gt=bt*xt-Pt*Et;if(s){if(Z<0||ct<0||gt<0)return null}else if((Z<0||ct<0||gt<0)&&(Z>0||ct>0||gt>0))return null;let lt=Z+ct+gt;if(lt===0)return null;let yt=at*(Z*U+ct*k+gt*tt);return(lt>0?yt<0:yt>0)?null:this.at(yt/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zf=new be,Ls=new Fs,Da=new Wn,$f=new Y,Ua=new Y,Fa=new Y,Oa=new Y,Lu=new Y,Ba=new Y,jf=new Y,ka=new Y,le=class extends Xe{constructor(t=new he,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Lu.fromBufferAttribute(f,t),o?Ba.addScaledVector(Lu,u):Ba.addScaledVector(Lu.sub(e),u))}e.add(Ba)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(Da.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Da,$f)===null||Ls.origin.distanceToSquared($f)>(t.far-t.near)**2))&&(Zf.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(Zf),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=x,v=M;_<v;_+=3){let w=a.getX(_),A=a.getX(_+1),b=a.getX(_+2);s=za(this,m,t,n,l,u,f,w,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let x=a.getX(p),M=a.getX(p+1),_=a.getX(p+2);s=za(this,o,t,n,l,u,f,x,M,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let p=h[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let _=x,v=M;_<v;_+=3){let w=_,A=_+1,b=_+2;s=za(this,m,t,n,l,u,f,w,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let x=p,M=p+1,_=p+2;s=za(this,o,t,n,l,u,f,x,M,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function by(i,t,e,n,s,r,o,a){let c;if(t.side===Bn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===vs,a),c===null)return null;ka.copy(a),ka.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ka);return l<e.near||l>e.far?null:{distance:l,point:ka.clone(),object:i}}function za(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ua),i.getVertexPosition(c,Fa),i.getVertexPosition(l,Oa);let u=by(i,t,e,n,Ua,Fa,Oa,jf);if(u){let f=new Y;cs.getBarycoord(jf,Ua,Fa,Oa,f),s&&(u.uv=cs.getInterpolatedAttribute(s,a,c,l,f,new Nt)),r&&(u.uv1=cs.getInterpolatedAttribute(r,a,c,l,f,new Nt)),o&&(u.normal=cs.getInterpolatedAttribute(o,a,c,l,f,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new Y,materialIndex:0};cs.getNormal(Ua,Fa,Oa,h.normal),u.face=h,u.barycoord=f}return u}var Eo=class extends On{constructor(t=null,e=1,n=1,s,r,o,a,c,l=fn,u=fn,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hr=new be,Jf=new be,Ha=[],Kf=new Oe,My=new be,oo=new le,ao=new Wn,si=class extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,My)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),Kf.copy(t.boundingBox).applyMatrix4(hr),this.boundingBox.union(Kf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),ao.copy(t.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(ao)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),t.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),Jf.multiplyMatrices(n,hr),oo.matrixWorld=Jf,oo.raycast(t,Ha);for(let o=0,a=Ha.length;o<a;o++){let c=Ha[o];c.instanceId=r,c.object=this,e.push(c)}Ha.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eo(new Float32Array(s*this.count),s,this.count,Xc,ri));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new Wn,Sy=new Nt(.5,.5),Ga=new Y,Tr=class{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],x=r[12],M=r[13],_=r[14],v=r[15];if(s[0].setComponents(l-o,d-u,m-g,v-x).normalize(),s[1].setComponents(l+o,d+u,m+g,v+x).normalize(),s[2].setComponents(l+a,d+f,m+y,v+M).normalize(),s[3].setComponents(l-a,d-f,m-y,v-M).normalize(),n)s[4].setComponents(c,h,p,_).normalize(),s[5].setComponents(l-c,d-h,m-p,v-_).normalize();else if(s[4].setComponents(l-c,d-h,m-p,v-_).normalize(),e===di)s[5].setComponents(l+c,d+h,m+p,v+_).normalize();else if(e===vr)s[5].setComponents(c,h,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);let e=Sy.distanceTo(t.center);return Ns.radius=.7071067811865476+e,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ga.x=s.normal.x>0?t.max.x:t.min.x,Ga.y=s.normal.y>0?t.max.y:t.min.y,Ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fc=new Y,dc=new Y,Qf=new be,co=new Fs,Va=new Wn,Nu=new Y,td=new Y,pc=class extends Xe{constructor(t=new he,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)fc.fromBufferAttribute(e,s-1),dc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=fc.distanceTo(dc);t.setAttribute("lineDistance",new $t(n,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,t.ray.intersectsSphere(Va)===!1)return;Qf.copy(s).invert(),co.copy(t.ray).applyMatrix4(Qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=l){let m=u.getX(y),x=u.getX(y+1),M=Wa(this,t,co,c,m,x,y);M&&e.push(M)}if(this.isLineLoop){let y=u.getX(g-1),p=u.getX(d),m=Wa(this,t,co,c,y,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=l){let m=Wa(this,t,co,c,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=Wa(this,t,co,c,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(fc.fromBufferAttribute(a,s),dc.fromBufferAttribute(a,r),e.distanceSqToSegment(fc,dc,Nu,td)>n)return;Nu.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Nu);if(!(l<t.near||l>t.far))return{distance:l,point:td.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ed=new Y,nd=new Y,To=class extends pc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ed.fromBufferAttribute(e,s),nd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ed.distanceTo(nd);t.setAttribute("lineDistance",new $t(n,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Os=class extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},id=new be,Wu=new Fs,Xa=new Wn,Ya=new Y,Rr=class extends Xe{constructor(t=new he,e=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,t.ray.intersectsSphere(Xa)===!1)return;id.copy(s).invert(),Wu.copy(t.ray).applyMatrix4(id);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,y=d;g<y;g++){let p=l.getX(g);Ya.fromBufferAttribute(f,p),sd(Ya,p,c,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,y=d;g<y;g++)Ya.fromBufferAttribute(f,g),sd(Ya,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sd(i,t,e,n,s,r,o){let a=Wu.distanceSqToPoint(i);if(a<e){let c=new Y;Wu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ao=class extends On{constructor(t=[],e=_s,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cr=class extends On{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class extends On{constructor(t,e,n=gi,s,r,o,a=fn,c=fn,l,u=Ti,f=1){if(u!==Ti&&u!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},mc=class extends us{constructor(t,e=gi,n=_s,s,r,o=fn,a=fn,c,l=Ti){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ro=class extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ae=class i extends he{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function g(y,p,m,x,M,_,v,w,A,b,I){let O=_/A,C=v/b,U=_/2,H=v/2,N=w/2,k=A+1,z=b+1,W=0,tt=0,j=new Y;for(let J=0;J<z;J++){let at=J*C-H;for(let Et=0;Et<k;Et++){let xt=Et*O-U;j[y]=xt*x,j[p]=at*M,j[m]=N,l.push(j.x,j.y,j.z),j[y]=0,j[p]=0,j[m]=w>0?1:-1,u.push(j.x,j.y,j.z),f.push(Et/A),f.push(1-J/b),W+=1}}for(let J=0;J<b;J++)for(let at=0;at<A;at++){let Et=h+at+k*J,xt=h+at+k*(J+1),bt=h+(at+1)+k*(J+1),Pt=h+(at+1)+k*J;c.push(Et,xt,Pt),c.push(xt,bt,Pt),tt+=6}a.addGroup(d,tt,I),d+=tt,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Rn=class i extends he{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new Y,u=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},je=class i extends he{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,y=[],p=n/2,m=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(d,2));function x(){let _=new Y,v=new Y,w=0,A=(e-t)/n;for(let b=0;b<=r;b++){let I=[],O=b/r,C=O*(e-t)+t;for(let U=0;U<=s;U++){let H=U/s,N=H*c+a,k=Math.sin(N),z=Math.cos(N);v.x=C*k,v.y=-O*n+p,v.z=C*z,f.push(v.x,v.y,v.z),_.set(k,A,z).normalize(),h.push(_.x,_.y,_.z),d.push(H,1-O),I.push(g++)}y.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){let O=y[I][b],C=y[I+1][b],U=y[I+1][b+1],H=y[I][b+1];(t>0||I!==0)&&(u.push(O,C,H),w+=3),(e>0||I!==r-1)&&(u.push(C,U,H),w+=3)}l.addGroup(m,w,0),m+=w}function M(_){let v=g,w=new Nt,A=new Y,b=0,I=_===!0?t:e,O=_===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,p*O,0),h.push(0,O,0),d.push(.5,.5),g++;let C=g;for(let U=0;U<=s;U++){let N=U/s*c+a,k=Math.cos(N),z=Math.sin(N);A.x=I*z,A.y=p*O,A.z=I*k,f.push(A.x,A.y,A.z),h.push(0,O,0),w.x=k*.5+.5,w.y=z*.5*O+.5,d.push(w.x,w.y),g++}for(let U=0;U<s;U++){let H=v+U,N=C+U;_===!0?u.push(N,N+1,H):u.push(N+1,N,H),b+=3}l.addGroup(m,b,_===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Co=class i extends je{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gc=class i extends he{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let M=new Y,_=new Y,v=new Y;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],_),d(e[w+2],v),c(M,_,v,x)}function c(x,M,_,v){let w=v+1,A=[];for(let b=0;b<=w;b++){A[b]=[];let I=x.clone().lerp(_,b/w),O=M.clone().lerp(_,b/w),C=w-b;for(let U=0;U<=C;U++)U===0&&b===w?A[b][U]=I:A[b][U]=I.clone().lerp(O,U/C)}for(let b=0;b<w;b++)for(let I=0;I<2*(w-b)-1;I++){let O=Math.floor(I/2);I%2===0?(h(A[b][O+1]),h(A[b+1][O]),h(A[b][O])):(h(A[b][O+1]),h(A[b+1][O+1]),h(A[b+1][O]))}}function l(x){let M=new Y;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(x),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){let x=new Y;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let _=p(x)/2/Math.PI+.5,v=m(x)/Math.PI+.5;o.push(_,1-v)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){let M=o[x+0],_=o[x+2],v=o[x+4],w=Math.max(M,_,v),A=Math.min(M,_,v);w>.9&&A<.1&&(M<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),v<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function d(x,M){let _=x*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){let x=new Y,M=new Y,_=new Y,v=new Y,w=new Nt,A=new Nt,b=new Nt;for(let I=0,O=0;I<r.length;I+=9,O+=6){x.set(r[I+0],r[I+1],r[I+2]),M.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),w.set(o[O+0],o[O+1]),A.set(o[O+2],o[O+3]),b.set(o[O+4],o[O+5]),v.copy(x).add(M).add(_).divideScalar(3);let C=p(v);y(w,O+0,x,C),y(A,O+2,M,C),y(b,O+4,_,C)}}function y(x,M,_,v){v<0&&x.x===1&&(o[M]=x.x-1),_.x===0&&_.z===0&&(o[M]=v/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Io=class i extends gc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Nt:new Y);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Y,s=[],r=[],o=[],a=new Y,c=new be;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new Y)}r[0]=new Y,o[0]=new Y;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(pe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(pe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ir=class extends jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yc=class extends Ir{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var rd=new Y,od=new Y,Du=new bh,Uu=new bh,Fu=new bh,xc=class extends jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Y){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(od.subVectors(s[0],s[1]).add(s[0]),l=od);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(rd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=rd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Du.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,y,p),Uu.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,y,p),Fu.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&(Du.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Uu.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Fu.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Du.calc(c),Uu.calc(c),Fu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ad(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function wy(i,t){let e=1-i;return e*e*t}function Ey(i,t){return 2*(1-i)*i*t}function Ty(i,t){return i*i*t}function fo(i,t,e,n){return wy(i,t)+Ey(i,e)+Ty(i,n)}function Ay(i,t){let e=1-i;return e*e*e*t}function Ry(i,t){let e=1-i;return 3*e*e*i*t}function Cy(i,t){return 3*(1-i)*i*i*t}function Iy(i,t){return i*i*i*t}function po(i,t,e,n,s){return Ay(i,t)+Ry(i,e)+Cy(i,n)+Iy(i,s)}var Po=class extends jn{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(t,s.x,r.x,o.x,a.x),po(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vc=class extends jn{constructor(t=new Y,e=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(t,s.x,r.x,o.x,a.x),po(t,s.y,r.y,o.y,a.y),po(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lo=class extends jn{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_c=class extends jn{constructor(t=new Y,e=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Y){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends jn{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(t,s.x,r.x,o.x),fo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bc=class extends jn{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(t,s.x,r.x,o.x),fo(t,s.y,r.y,o.y),fo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(ad(a,c.x,l.x,u.x,f.x),ad(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},Xu=Object.freeze({__proto__:null,ArcCurve:yc,CatmullRomCurve3:xc,CubicBezierCurve:Po,CubicBezierCurve3:vc,EllipseCurve:Ir,LineCurve:Lo,LineCurve3:_c,QuadraticBezierCurve:No,QuadraticBezierCurve3:bc,SplineCurve:Do}),Mc=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Xu[s.type]().fromJSON(s))}return this}},Bs=class extends Mc{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Lo(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new No(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Po(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Do(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ir(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Jn=class extends Bs{constructor(t){super(t),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Bs().fromJSON(s))}return this}};function Py(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=rp(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Fy(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Uo(r,o,e,a,c,l,0),o}function rp(i,t,e,n,s){let r;if(s===qy(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=cd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=cd(o/n|0,i[o],i[o+1],r);return r&&Pr(r,r.next)&&(Oo(r),r=r.next),r}function ks(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pr(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Oo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Uo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hy(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Ny(i,n,s,r):Ly(i)){t.push(c.i,i.i,l.i),Oo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Dy(ks(i),t),Uo(i,t,e,n,s,r,2)):o===2&&Uy(i,t,e,n,s,r):Uo(ks(i),t,e,n,s,r,1);break}}}function Ly(i){let t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&lo(s,a,r,c,o,l,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ny(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ze(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),g=Math.min(u,f,h),y=Math.max(a,c,l),p=Math.max(u,f,h),m=Yu(d,g,t,e,n),x=Yu(y,p,t,e,n),M=i.prevZ,_=i.nextZ;for(;M&&M.z>=m&&_&&_.z<=x;){if(M.x>=d&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&lo(a,u,c,f,l,h,M.x,M.y)&&Ze(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&lo(a,u,c,f,l,h,_.x,_.y)&&Ze(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&lo(a,u,c,f,l,h,M.x,M.y)&&Ze(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&lo(a,u,c,f,l,h,_.x,_.y)&&Ze(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Dy(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Pr(n,s)&&ap(n,e,e.next,s)&&Fo(n,s)&&Fo(s,n)&&(t.push(n.i,e.i,s.i),Oo(e),Oo(e.next),e=i=s),e=e.next}while(e!==i);return ks(e)}function Uy(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wy(o,a)){let c=cp(o,a);o=ks(o,o.next),c=ks(c,c.next),Uo(o,t,e,n,s,r,0),Uo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Fy(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=rp(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Vy(l))}s.sort(Oy);for(let r=0;r<s.length;r++)e=By(s[r],e);return e}function Oy(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function By(i,t){let e=ky(i,t);if(!e)return t;let n=cp(e,i);return ks(n,n.next),ks(e,e.next)}function ky(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Pr(i,e))return e;do{if(Pr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&op(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Fo(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&zy(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function zy(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function Hy(i,t,e,n){let s=i;do s.z===0&&(s.z=Yu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gy(s)}function Gy(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Yu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function op(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function lo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&op(i,t,e,n,s,r,o,a)}function Wy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xy(i,t)&&(Fo(i,t)&&Fo(t,i)&&Yy(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||Pr(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pr(i,t){return i.x===t.x&&i.y===t.y}function ap(i,t,e,n){let s=Za(Ze(i,t,e)),r=Za(Ze(i,t,n)),o=Za(Ze(e,n,i)),a=Za(Ze(e,n,t));return!!(s!==r&&o!==a||s===0&&qa(i,e,t)||r===0&&qa(i,n,t)||o===0&&qa(e,i,n)||a===0&&qa(e,t,n))}function qa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Za(i){return i>0?1:i<0?-1:0}function Xy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ap(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fo(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function Yy(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cp(i,t){let e=qu(i.i,i.x,i.y),n=qu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function cd(i,t,e,n){let s=qu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Zu=class{static triangulate(t,e,n=2){return Py(t,e,n)}},Gn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ld(t),ud(n,t);let o=t.length;e.forEach(ld);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,ud(n,e[c]);let a=Zu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ld(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ud(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Xi=class i extends he{constructor(t=new Jn([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Zy,M,_=!1,v,w,A,b;if(m){M=m.getSpacedPoints(u),_=!0,h=!1;let K=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(u,K),w=new Y,A=new Y,b=new Y}h||(p=0,d=0,g=0,y=0);let I=a.extractPoints(l),O=I.shape,C=I.holes;if(!Gn.isClockWise(O)){O=O.reverse();for(let K=0,dt=C.length;K<dt;K++){let Tt=C[K];Gn.isClockWise(Tt)&&(C[K]=Tt.reverse())}}function H(K){let Tt=10000000000000001e-36,St=K[0];for(let Ct=1;Ct<=K.length;Ct++){let kt=Ct%K.length,Bt=K[kt],Gt=Bt.x-St.x,jt=Bt.y-St.y,$=Gt*Gt+jt*jt,de=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(St.x),Math.abs(St.y)),Vt=Tt*de*de;if($<=Vt){K.splice(kt,1),Ct--;continue}St=Bt}}H(O),C.forEach(H);let N=C.length,k=O;for(let K=0;K<N;K++){let dt=C[K];O=O.concat(dt)}function z(K,dt,Tt){return dt||ue("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(dt,Tt)}let W=O.length;function tt(K,dt,Tt){let St,Ct,kt,Bt=K.x-dt.x,Gt=K.y-dt.y,jt=Tt.x-K.x,$=Tt.y-K.y,de=Bt*Bt+Gt*Gt,Vt=Bt*$-Gt*jt;if(Math.abs(Vt)>Number.EPSILON){let V=Math.sqrt(de),T=Math.sqrt(jt*jt+$*$),nt=dt.x-Gt/V,ut=dt.y+Bt/V,pt=Tt.x-$/T,G=Tt.y+jt/T,S=((pt-nt)*$-(G-ut)*jt)/(Bt*$-Gt*jt);St=nt+Bt*S-K.x,Ct=ut+Gt*S-K.y;let E=St*St+Ct*Ct;if(E<=2)return new Nt(St,Ct);kt=Math.sqrt(E/2)}else{let V=!1;Bt>Number.EPSILON?jt>Number.EPSILON&&(V=!0):Bt<-Number.EPSILON?jt<-Number.EPSILON&&(V=!0):Math.sign(Gt)===Math.sign($)&&(V=!0),V?(St=-Gt,Ct=Bt,kt=Math.sqrt(de)):(St=Bt,Ct=Gt,kt=Math.sqrt(de/2))}return new Nt(St/kt,Ct/kt)}let j=[];for(let K=0,dt=k.length,Tt=dt-1,St=K+1;K<dt;K++,Tt++,St++)Tt===dt&&(Tt=0),St===dt&&(St=0),j[K]=tt(k[K],k[Tt],k[St]);let J=[],at,Et=j.concat();for(let K=0,dt=N;K<dt;K++){let Tt=C[K];at=[];for(let St=0,Ct=Tt.length,kt=Ct-1,Bt=St+1;St<Ct;St++,kt++,Bt++)kt===Ct&&(kt=0),Bt===Ct&&(Bt=0),at[St]=tt(Tt[St],Tt[kt],Tt[Bt]);J.push(at),Et=Et.concat(at)}let xt;if(p===0)xt=Gn.triangulateShape(k,C);else{let K=[],dt=[];for(let Tt=0;Tt<p;Tt++){let St=Tt/p,Ct=d*Math.cos(St*Math.PI/2),kt=g*Math.sin(St*Math.PI/2)+y;for(let Bt=0,Gt=k.length;Bt<Gt;Bt++){let jt=z(k[Bt],j[Bt],kt);ct(jt.x,jt.y,-Ct),St===0&&K.push(jt)}for(let Bt=0,Gt=N;Bt<Gt;Bt++){let jt=C[Bt];at=J[Bt];let $=[];for(let de=0,Vt=jt.length;de<Vt;de++){let V=z(jt[de],at[de],kt);ct(V.x,V.y,-Ct),St===0&&$.push(V)}St===0&&dt.push($)}}xt=Gn.triangulateShape(K,dt)}let bt=xt.length,Pt=g+y;for(let K=0;K<W;K++){let dt=h?z(O[K],Et[K],Pt):O[K];_?(A.copy(v.normals[0]).multiplyScalar(dt.x),w.copy(v.binormals[0]).multiplyScalar(dt.y),b.copy(M[0]).add(A).add(w),ct(b.x,b.y,b.z)):ct(dt.x,dt.y,0)}for(let K=1;K<=u;K++)for(let dt=0;dt<W;dt++){let Tt=h?z(O[dt],Et[dt],Pt):O[dt];_?(A.copy(v.normals[K]).multiplyScalar(Tt.x),w.copy(v.binormals[K]).multiplyScalar(Tt.y),b.copy(M[K]).add(A).add(w),ct(b.x,b.y,b.z)):ct(Tt.x,Tt.y,f/u*K)}for(let K=p-1;K>=0;K--){let dt=K/p,Tt=d*Math.cos(dt*Math.PI/2),St=g*Math.sin(dt*Math.PI/2)+y;for(let Ct=0,kt=k.length;Ct<kt;Ct++){let Bt=z(k[Ct],j[Ct],St);ct(Bt.x,Bt.y,f+Tt)}for(let Ct=0,kt=C.length;Ct<kt;Ct++){let Bt=C[Ct];at=J[Ct];for(let Gt=0,jt=Bt.length;Gt<jt;Gt++){let $=z(Bt[Gt],at[Gt],St);_?ct($.x,$.y+M[u-1].y,M[u-1].x+Tt):ct($.x,$.y,f+Tt)}}}Lt(),L();function Lt(){let K=s.length/3;if(h){let dt=0,Tt=W*dt;for(let St=0;St<bt;St++){let Ct=xt[St];gt(Ct[2]+Tt,Ct[1]+Tt,Ct[0]+Tt)}dt=u+p*2,Tt=W*dt;for(let St=0;St<bt;St++){let Ct=xt[St];gt(Ct[0]+Tt,Ct[1]+Tt,Ct[2]+Tt)}}else{for(let dt=0;dt<bt;dt++){let Tt=xt[dt];gt(Tt[2],Tt[1],Tt[0])}for(let dt=0;dt<bt;dt++){let Tt=xt[dt];gt(Tt[0]+W*u,Tt[1]+W*u,Tt[2]+W*u)}}n.addGroup(K,s.length/3-K,0)}function L(){let K=s.length/3,dt=0;Z(k,dt),dt+=k.length;for(let Tt=0,St=C.length;Tt<St;Tt++){let Ct=C[Tt];Z(Ct,dt),dt+=Ct.length}n.addGroup(K,s.length/3-K,1)}function Z(K,dt){let Tt=K.length;for(;--Tt>=0;){let St=Tt,Ct=Tt-1;Ct<0&&(Ct=K.length-1);for(let kt=0,Bt=u+p*2;kt<Bt;kt++){let Gt=W*kt,jt=W*(kt+1),$=dt+St+Gt,de=dt+Ct+Gt,Vt=dt+Ct+jt,V=dt+St+jt;lt($,de,Vt,V)}}}function ct(K,dt,Tt){c.push(K),c.push(dt),c.push(Tt)}function gt(K,dt,Tt){yt(K),yt(dt),yt(Tt);let St=s.length/3,Ct=x.generateTopUV(n,s,St-3,St-2,St-1);Mt(Ct[0]),Mt(Ct[1]),Mt(Ct[2])}function lt(K,dt,Tt,St){yt(K),yt(dt),yt(St),yt(dt),yt(Tt),yt(St);let Ct=s.length/3,kt=x.generateSideWallUV(n,s,Ct-6,Ct-3,Ct-2,Ct-1);Mt(kt[0]),Mt(kt[1]),Mt(kt[3]),Mt(kt[1]),Mt(kt[2]),Mt(kt[3])}function yt(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function Mt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $y(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xu[s.type]().fromJSON(s)),new i(n,t.options)}},Zy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Nt(r,o),new Nt(a,c),new Nt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Nt(o,1-c),new Nt(l,1-f),new Nt(h,1-g),new Nt(y,1-m)]:[new Nt(a,1-c),new Nt(u,1-f),new Nt(d,1-g),new Nt(p,1-m)]}};function $y(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bo=class i extends he{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new Y,h=new Nt,d=new Y,g=new Y,y=new Y,p=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let x=0;x<=e;x++){let M=n+x*u*s,_=Math.sin(M),v=Math.cos(M);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*_,f.y=t[w].y,f.z=t[w].x*v,o.push(f.x,f.y,f.z),h.x=x/e,h.y=w/(t.length-1),a.push(h.x,h.y);let A=c[3*w+0]*_,b=c[3*w+1],I=c[3*w+0]*v;l.push(A,b,I)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){let _=M+x*t.length,v=_,w=_+t.length,A=_+t.length+1,b=_+1;r.push(v,w,b),r.push(A,b,w)}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Cn=class i extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],y=[],p=[];for(let m=0;m<u;m++){let x=m*h-o;for(let M=0;M<l;M++){let _=M*f-r;g.push(_,-x,0),y.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){let M=x+l*m,_=x+l*(m+1),v=x+1+l*(m+1),w=x+1+l*m;d.push(M,_,w),d.push(_,v,w)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ko=class i extends he{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=t,h=(e-t)/s,d=new Y,g=new Nt;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let m=r+p/n*o;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let y=0;y<s;y++){let p=y*(n+1);for(let m=0;m<n;m++){let x=m+p,M=x,_=x+n+1,v=x+n+2,w=x+1;a.push(M,_,w),a.push(_,v,w)}}this.setIndex(a),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},hs=class i extends he{constructor(t=new Jn([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(r,3)),this.setAttribute("uv",new $t(o,2));function l(u){let f=s.length/3,h=u.extractPoints(e),d=h.shape,g=h.holes;Gn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let x=g[p];Gn.isClockWise(x)===!0&&(g[p]=x.reverse())}let y=Gn.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let x=g[p];d=d.concat(x)}for(let p=0,m=d.length;p<m;p++){let x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=y.length;p<m;p++){let x=y[p],M=x[0]+f,_=x[1]+f,v=x[2]+f;n.push(M,_,v),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return jy(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function jy(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Re=class i extends he{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new Y,h=new Y,d=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let x=[],M=m/n,_=o+M*a,v=t*Math.cos(_),w=Math.sqrt(t*t-v*v),A=0;m===0&&o===0?A=.5/e:m===n&&c===Math.PI&&(A=-.5/e);for(let b=0;b<=e;b++){let I=b/e,O=s+I*r;f.x=-w*Math.cos(O),f.y=v,f.z=w*Math.sin(O),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(I+A,1-M),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let M=u[m][x+1],_=u[m][x],v=u[m+1][x],w=u[m+1][x+1];(m!==0||o>0)&&d.push(M,_,w),(m!==n-1||c<Math.PI)&&d.push(_,v,w)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var In=class i extends he{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new Y,d=new Y,g=new Y;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let m=0;m<=s;m++){let x=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(m/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,x=(s+1)*(y-1)+p-1,M=(s+1)*(y-1)+p,_=(s+1)*y+p;c.push(m,x,_),c.push(x,M,_)}this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var zo=class extends he{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new Y,r=new Y;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let g=h,y=h+d;g<y;g+=3)for(let p=0;p<3;p++){let m=a.getX(g+p),x=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,x),hd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,f=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),hd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new $t(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function hd(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Ws(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(fd(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(fd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Pn(i){let t={};for(let e=0;e<i.length;e++){let n=Ws(i[e]);for(let s in n)t[s]=n[s]}return t}function fd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jy(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Zi={clone:Ws,merge:Pn},Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=Jy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new me().fromArray(s.value);break;case"m4":this.uniforms[n].value=new be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Sc=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ye=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Lr=class extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Bc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wc=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ec=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ou(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tc=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hu,endingEnd:Hu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gu:r=t,a=2*e-n;break;case Vu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gu:o=t,c=2*n-e;break;case Vu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-h*p+2*h*y-h*g,x=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*g+1,M=(-1-d)*p+(1.5+d)*y+.5*g,_=d*p-d*y;for(let v=0;v!==a;++v)r[v]=m*o[u+v]+x*o[l+v]+M*o[c+v]+_*o[f+v];return r}},Ac=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},Rc=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cc=class extends fs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),y=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*y+o[c+p]*g;return r}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let y=o[l+g],p=o[c+g],m=d*h+g*2,x=f[m],M=f[m+1],_=t*h+g*2,v=u[_],w=u[_+1],A=ex(n,e,x,v,s);r[g]=lp(A,y,M,w,p)}return r}};function lp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function tx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ex(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=lp(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=tx(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fr(e,this.TimeBufferType),this.values=fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fr(t.times,Array),values:fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ou(t.settings)&&(n.settings={inTangents:fr(t.settings.inTangents,Array),outTangents:fr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Cc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case cc:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break;case zu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ae("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return cc;case this.InterpolantFactoryMethodSmooth:return Ka;case this.InterpolantFactoryMethodBezier:return zu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ou(this.settings)&&(dd(this.settings.inTangents,t),dd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ue("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ue("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ue("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ue("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&G0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ue("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ka,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[h+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ou(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function dd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=cc;var ds=class extends Kn{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=mo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}};Ic.prototype.ValueTypeName="color";var Pc=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}};Pc.prototype.ValueTypeName="number";var Lc=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)dn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ho=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Lc(this.times,this.values,this.getValueSize(),t)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends Kn{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=mo;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends Kn{constructor(t,e,n,s){super(t,e,n,s)}};Nc.prototype.ValueTypeName="vector";var Dc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},up=new Dc,Uc=class{constructor(t){this.manager=t!==void 0?t:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},zs=class extends Nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Bu=new be,pd=new Y,md=new Y,Go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;pd.setFromMatrixPosition(t.matrixWorld),e.position.copy(pd),md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(md),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Bu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===vr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Bu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$a=new Y,ja=new dn,Si=new Y,Vo=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($a,ja,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,ja,Si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($a,ja,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,ja,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new Y,gd=new Nt,yd=new Nt,Fn=class extends Vo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,gd,yd),e.subVectors(yd,gd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $u=class extends Go{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}},Wo=class extends Nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $u}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ms=class extends Vo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ju=class extends Go{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new ju}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xo=class extends he{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var dr=-90,pr=1,Fc=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(dr,pr,t,e);s.layers=this.layers,this.add(s);let r=new Fn(dr,pr,t,e);r.layers=this.layers,this.add(r);let o=new Fn(dr,pr,t,e);o.layers=this.layers,this.add(o);let a=new Fn(dr,pr,t,e);a.layers=this.layers,this.add(a);let c=new Fn(dr,pr,t,e);c.layers=this.layers,this.add(c);let l=new Fn(dr,pr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Oc=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sh="\\[\\]\\.:\\/",nx=new RegExp("["+Sh+"]","g"),wh="[^"+Sh+"]",ix="[^"+Sh.replace("\\.","")+"]",sx=/((?:WC+[\/:])*)/.source.replace("WC",wh),rx=/(WCOD+)?/.source.replace("WCOD",ix),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),cx=new RegExp("^"+sx+rx+ox+ax+"$"),lx=["material","materials","bones","map"],Ju=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nx,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ue("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Ju;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g2=new Float32Array(1);var ys=class extends wo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var xd=new be,xs=class{constructor(t,e,n=0,s=1/0){this.ray=new Fs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xd),this}intersectObject(t,e=!0,n=[]){return Ku(t,this,n,e),n.sort(vd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ku(t[s],this,n,e);return n.sort(vd),n}};function vd(i,t){return i.distance-t.distance}function Ku(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ku(r[o],t,e,!0)}}var Qu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var _d=new Y,Ja=new Y,mr=new Y,gr=new Y,ku=new Y,ux=new Y,hx=new Y,Yo=class{constructor(t=new Y,e=new Y){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){_d.subVectors(t,this.start),Ja.subVectors(this.end,this.start);let n=Ja.dot(Ja);if(n===0)return 0;let r=Ja.dot(_d)/n;return e&&(r=pe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=ux,n=hx){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;mr.subVectors(l,a),gr.subVectors(u,c),ku.subVectors(a,c);let f=mr.dot(mr),h=gr.dot(gr),d=gr.dot(ku);if(f<=s&&h<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(f<=s)r=0,o=d/h,o=pe(o,0,1);else{let g=mr.dot(ku);if(h<=s)o=0,r=pe(-g/f,0,1);else{let y=mr.dot(gr),p=f*h-y*y;p!==0?r=pe((y*d-g*h)/p,0,1):r=0,o=(y*r+d)/h,o<0?(o=0,r=pe(-g/f,0,1)):o>1&&(o=1,r=pe((y-g)/f,0,1))}}return e.copy(a).addScaledVector(mr,r),n.copy(c).addScaledVector(gr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Eh(i,t,e,n){let s=fx(n);switch(e){case gh:return i*t;case Xc:return i*t/s.components*s.byteLength;case Yc:return i*t/s.components*s.byteLength;case Ss:return i*t*2/s.components*s.byteLength;case qc:return i*t*2/s.components*s.byteLength;case yh:return i*t*3/s.components*s.byteLength;case oi:return i*t*4/s.components*s.byteLength;case Zc:return i*t*4/s.components*s.byteLength;case jo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jc:case Kc:return Math.max(i,16)*Math.max(t,8)/4;case $c:case Jc:return Math.max(i,8)*Math.max(t,8)/2;case Qc:case tl:case nl:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:case ta:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vl:case _l:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fx(i){switch(i){case Xn:case fh:return{byteLength:1,components:1};case Fr:case dh:case yi:return{byteLength:2,components:1};case Vc:case Wc:return{byteLength:2,components:4};case gi:case Gc:case ri:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yx(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let y=f[d];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wx=`#ifdef USE_AOMAP
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
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx=`#ifdef USE_BATCHING
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
#endif`,Ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ix=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Px=`#ifdef USE_IRIDESCENCE
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
#endif`,Lx=`#ifdef USE_BUMPMAP
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
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hx=`#define PI 3.141592653589793
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
} // validated`,Gx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vx=`vec3 transformedNormal = objectNormal;
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
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rv=`#ifdef USE_GRADIENTMAP
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
}`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uv=`#ifdef USE_ENVMAP
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
#endif`,hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mv=`PhysicalMaterial material;
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
#endif`,gv=`uniform sampler2D dfgLUT;
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
}`,yv=`
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rv=`#if defined( USE_POINTS_UV )
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
#endif`,Cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`#ifdef USE_MORPHTARGETS
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
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hv=`#ifdef USE_NORMALMAP
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
#endif`,Gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i_=`float getShadowMask() {
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
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
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
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
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
}`,E_=`#if DEPTH_PACKING == 3200
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
}`,T_=`#define DISTANCE
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
}`,A_=`#define DISTANCE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,N_=`uniform vec3 diffuse;
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
}`,D_=`#define LAMBERT
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
}`,U_=`#define LAMBERT
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
}`,F_=`#define MATCAP
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
}`,O_=`#define MATCAP
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
}`,B_=`#define NORMAL
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
}`,k_=`#define NORMAL
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
}`,z_=`#define PHONG
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
}`,H_=`#define PHONG
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
}`,G_=`#define STANDARD
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
}`,V_=`#define STANDARD
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
}`,W_=`#define TOON
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
}`,X_=`#define TOON
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
}`,Y_=`uniform float size;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Z_=`#include <common>
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
}`,$_=`uniform vec3 color;
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
}`,j_=`uniform float rotation;
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
}`,J_=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:xx,alphahash_pars_fragment:vx,alphamap_fragment:_x,alphamap_pars_fragment:bx,alphatest_fragment:Mx,alphatest_pars_fragment:Sx,aomap_fragment:wx,aomap_pars_fragment:Ex,batching_pars_vertex:Tx,batching_vertex:Ax,begin_vertex:Rx,beginnormal_vertex:Cx,bsdfs:Ix,iridescence_fragment:Px,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Nx,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:Fx,color_fragment:Ox,color_pars_fragment:Bx,color_pars_vertex:kx,color_vertex:zx,common:Hx,cube_uv_reflection_fragment:Gx,defaultnormal_vertex:Vx,displacementmap_pars_vertex:Wx,displacementmap_vertex:Xx,emissivemap_fragment:Yx,emissivemap_pars_fragment:qx,colorspace_fragment:Zx,colorspace_pars_fragment:$x,envmap_fragment:jx,envmap_common_pars_fragment:Jx,envmap_pars_fragment:Kx,envmap_pars_vertex:Qx,envmap_physical_pars_fragment:uv,envmap_vertex:tv,fog_vertex:ev,fog_pars_vertex:nv,fog_fragment:iv,fog_pars_fragment:sv,gradientmap_pars_fragment:rv,lightmap_pars_fragment:ov,lights_lambert_fragment:av,lights_lambert_pars_fragment:cv,lights_pars_begin:lv,lights_toon_fragment:hv,lights_toon_pars_fragment:fv,lights_phong_fragment:dv,lights_phong_pars_fragment:pv,lights_physical_fragment:mv,lights_physical_pars_fragment:gv,lights_fragment_begin:yv,lights_fragment_maps:xv,lights_fragment_end:vv,lightprobes_pars_fragment:_v,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Mv,logdepthbuf_pars_vertex:Sv,logdepthbuf_vertex:wv,map_fragment:Ev,map_pars_fragment:Tv,map_particle_fragment:Av,map_particle_pars_fragment:Rv,metalnessmap_fragment:Cv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Pv,morphcolor_vertex:Lv,morphnormal_vertex:Nv,morphtarget_pars_vertex:Dv,morphtarget_vertex:Uv,normal_fragment_begin:Fv,normal_fragment_maps:Ov,normal_pars_fragment:Bv,normal_pars_vertex:kv,normal_vertex:zv,normalmap_pars_fragment:Hv,clearcoat_normal_fragment_begin:Gv,clearcoat_normal_fragment_maps:Vv,clearcoat_pars_fragment:Wv,iridescence_pars_fragment:Xv,opaque_fragment:Yv,packing:qv,premultiplied_alpha_fragment:Zv,project_vertex:$v,dithering_fragment:jv,dithering_pars_fragment:Jv,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Qv,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:e_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:o_,skinnormal_vertex:a_,specularmap_fragment:c_,specularmap_pars_fragment:l_,tonemapping_fragment:u_,tonemapping_pars_fragment:h_,transmission_fragment:f_,transmission_pars_fragment:d_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:y_,background_vert:x_,background_frag:v_,backgroundCube_vert:__,backgroundCube_frag:b_,cube_vert:M_,cube_frag:S_,depth_vert:w_,depth_frag:E_,distance_vert:T_,distance_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:I_,linedashed_frag:P_,meshbasic_vert:L_,meshbasic_frag:N_,meshlambert_vert:D_,meshlambert_frag:U_,meshmatcap_vert:F_,meshmatcap_frag:O_,meshnormal_vert:B_,meshnormal_frag:k_,meshphong_vert:z_,meshphong_frag:H_,meshphysical_vert:G_,meshphysical_frag:V_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:Y_,points_frag:q_,shadow_vert:Z_,shadow_frag:$_,sprite_vert:j_,sprite_frag:J_},Ht={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},zn={basic:{uniforms:Pn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Pn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Pn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Pn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Pn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Pn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Pn([Ht.points,Ht.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Pn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Pn([Ht.common,Ht.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Pn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Pn([Ht.sprite,Ht.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Pn([Ht.common,Ht.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Pn([Ht.lights,Ht.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};zn.physical={uniforms:Pn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Al={r:0,b:0,g:0},K_=new be,Np=new me;Np.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t,e,n,s,r){let o=new Yt(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let _=x.backgroundBlurriness>0;M=t.get(M,_)}return M}function g(x){let M=!1,_=d(x);_===null?p(o,a):_&&_.isColor&&(p(_,1),M=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,M){let _=d(M);_&&(_.isCubeTexture||_.mapping===Zo)?(l===void 0&&(l=new le(new Ae(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Ws(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Np),l.material.toneMapped=_e.getTransfer(_.colorSpace)!==Pe,(u!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new le(new Cn(2,2),new He({name:"BackgroundMaterial",uniforms:Ws(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=_e.getTransfer(_.colorSpace)!==Pe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Al,Mh(i)),e.buffers.color.setClear(Al.r,Al.g,Al.b,M,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:y,dispose:m}}function t1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(C,U,H,N,k){let z=!1,W=f(C,N,H,U);r!==W&&(r=W,l(r.object)),z=d(C,N,H,k),z&&g(C,N,H,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(C,U,H,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function f(C,U,H,N){let k=N.wireframe===!0,z=n[U.id];z===void 0&&(z={},n[U.id]=z);let W=C.isInstancedMesh===!0?C.id:0,tt=z[W];tt===void 0&&(tt={},z[W]=tt);let j=tt[H.id];j===void 0&&(j={},tt[H.id]=j);let J=j[k];return J===void 0&&(J=h(c()),j[k]=J),J}function h(C){let U=[],H=[],N=[];for(let k=0;k<e;k++)U[k]=0,H[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:N,object:C,attributes:{},index:null}}function d(C,U,H,N){let k=r.attributes,z=U.attributes,W=0,tt=H.getAttributes();for(let j in tt)if(tt[j].location>=0){let at=k[j],Et=z[j];if(Et===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),at===void 0||at.attribute!==Et||Et&&at.data!==Et.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function g(C,U,H,N){let k={},z=U.attributes,W=0,tt=H.getAttributes();for(let j in tt)if(tt[j].location>=0){let at=z[j];at===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(at=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(at=C.instanceColor));let Et={};Et.attribute=at,at&&at.data&&(Et.data=at.data),k[j]=Et,W++}r.attributes=k,r.attributesNum=W,r.index=N}function y(){let C=r.newAttributes;for(let U=0,H=C.length;U<H;U++)C[U]=0}function p(C){m(C,0)}function m(C,U){let H=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;H[C]=1,N[C]===0&&(i.enableVertexAttribArray(C),N[C]=1),k[C]!==U&&(i.vertexAttribDivisor(C,U),k[C]=U)}function x(){let C=r.newAttributes,U=r.enabledAttributes;for(let H=0,N=U.length;H<N;H++)U[H]!==C[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function M(C,U,H,N,k,z,W){W===!0?i.vertexAttribIPointer(C,U,H,k,z):i.vertexAttribPointer(C,U,H,N,k,z)}function _(C,U,H,N){y();let k=N.attributes,z=H.getAttributes(),W=U.defaultAttributeValues;for(let tt in z){let j=z[tt];if(j.location>=0){let J=k[tt];if(J===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),J!==void 0){let at=J.normalized,Et=J.itemSize,xt=t.get(J);if(xt===void 0)continue;let bt=xt.buffer,Pt=xt.type,Lt=xt.bytesPerElement,L=Pt===i.INT||Pt===i.UNSIGNED_INT||J.gpuType===Gc;if(J.isInterleavedBufferAttribute){let Z=J.data,ct=Z.stride,gt=J.offset;if(Z.isInstancedInterleavedBuffer){for(let lt=0;lt<j.locationSize;lt++)m(j.location+lt,Z.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let lt=0;lt<j.locationSize;lt++)p(j.location+lt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let lt=0;lt<j.locationSize;lt++)M(j.location+lt,Et/j.locationSize,Pt,at,ct*Lt,(gt+Et/j.locationSize*lt)*Lt,L)}else{if(J.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)m(j.location+Z,J.meshPerAttribute);C.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Z=0;Z<j.locationSize;Z++)p(j.location+Z);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let Z=0;Z<j.locationSize;Z++)M(j.location+Z,Et/j.locationSize,Pt,at,Et*Lt,Et/j.locationSize*Z*Lt,L)}}else if(W!==void 0){let at=W[tt];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(j.location,at);break;case 3:i.vertexAttrib3fv(j.location,at);break;case 4:i.vertexAttrib4fv(j.location,at);break;default:i.vertexAttrib1fv(j.location,at)}}}}x()}function v(){I();for(let C in n){let U=n[C];for(let H in U){let N=U[H];for(let k in N){let z=N[k];for(let W in z)u(z[W].object),delete z[W];delete N[k]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;let U=n[C.id];for(let H in U){let N=U[H];for(let k in N){let z=N[k];for(let W in z)u(z[W].object),delete z[W];delete N[k]}}delete n[C.id]}function A(C){for(let U in n){let H=n[U];for(let N in H){let k=H[N];if(k[C.id]===void 0)continue;let z=k[C.id];for(let W in z)u(z[W].object),delete z[W];delete k[C.id]}}}function b(C){for(let U in n){let H=n[U],N=C.isInstancedMesh===!0?C.id:0,k=H[N];if(k!==void 0){for(let z in k){let W=k[z];for(let tt in W)u(W[tt].object),delete W[tt];delete k[z]}delete H[N],Object.keys(H).length===0&&delete n[U]}}}function I(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:O,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function e1(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function n1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==oi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let b=A===yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Xn&&A!==ri&&!b&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(ae("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,maxSamples:v,samples:w}}function i1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new $n,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let x=r?0:n,M=x*4,_=m.clippingState||null;c.value=_,_=u(g,h,M,d);for(let v=0;v!==M;++v)_[v]=e[v];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=d+y*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,_=d;M!==y;++M,_+=4)o.copy(f[M]).applyMatrix4(x,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var kr=4,s1=6,r1=20,o1=256,ia=new ms,hp=new Yt,Th=null,Ah=0,Rh=0,Ch=!1,a1=new Y,Xs=new Y,Cl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=a1}=r;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:yi,format:oi,colorSpace:go,depthBuffer:!1},s=fp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=c1(r)),this._blurMaterial=u1(r,t,e),this._ggxMaterial=l1(r,t,e)}return s}_compileMaterial(t){let e=new le(new he,t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s,r){let c=new Fn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(hp),f.toneMapping=mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new Ae,new Be({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,m=!0):(p.color.copy(hp),m=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):_===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let v=this._cubeSize;Br(s,_*v,M>2?v:0,v,v),f.setRenderTarget(s),m&&f.render(y,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_s||t.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Br(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,y=this._sizeLods[n],p=3*y*(n>g-kr?n-g+kr:0),m=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Br(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(a,ia),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Br(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(a,ia)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-kr?s-this._lodMax+kr:0),h=4*(this._cubeSize-u);Br(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,ia)}};function c1(i){let t=[],e=[],n=i,s=i-kr+1+s1;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let m=0;m<f;m++){let x=m%3*2/3-1,M=m>2?0:-1,_=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];g.set(_,d*h*m);for(let v=0;v<h;v++){let w=u[v*2]*2-1,A=u[v*2+1]*2-1;m===0?Xs.set(1,A,w):m===1?Xs.set(-w,1,-A):m===2?Xs.set(-w,A,1):m===3?Xs.set(-1,A,-w):m===4?Xs.set(-w,-1,A):Xs.set(w,A,-1),Xs.toArray(y,(m*h+v)*d)}}let p=new he;p.setAttribute("position",new Te(g,d)),p.setAttribute("outputDirection",new Te(y,d)),e.push(new le(p,null)),n>kr&&n--}return{lodMeshes:e,sizeLods:t}}function fp(i,t,e){let n=new Vn(i,t,e);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function l1(i,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function u1(i,t,e){return new He({name:"SphericalGaussianBlur",defines:{SAMPLES:r1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function dp(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function pp(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Il=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ao(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Ci});r.uniforms.tEquirect.value=e;let o=new le(s,r),a=e.minFilter;return e.minFilter===bs&&(e.minFilter=xn),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function h1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===kc||d===zc)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Il(g.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===kc||d===zc,y=d===_s||d===Vs;if(g||y){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Cl(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let x=h.image;return g&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new Cl(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,d){return d===kc?h.mapping=_s:d===zc&&(h.mapping=Vs),h}function c(h){let d=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function f1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function d1(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,y=0;if(g===void 0)return;if(d!==null){let x=d.array;y=d.version;for(let M=0,_=x.length;M<_;M+=3){let v=x[M+0],w=x[M+1],A=x[M+2];h.push(v,w,w,A,A,v)}}else{let x=g.array;y=g.version;for(let M=0,_=x.length/3-1;M<_;M+=3){let v=M+0,w=M+1,A=M+2;h.push(v,w,w,A,A,v)}}let p=new(g.count>=65535?So:Mo)(h,1);p.version=y;let m=r.get(f);m&&t.remove(m),r.set(f,p)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function p1(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=h[p];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function m1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function g1(i,t,e){let n=new WeakMap,s=new Le;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let I=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let _=a.attributes.position.count*M,v=1;_>t.maxTextureSize&&(v=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*v*4*f),A=new _o(w,_,v,f);A.type=ri,A.needsUpdate=!0;let b=M*4;for(let O=0;O<f;O++){let C=p[O],U=m[O],H=x[O],N=_*v*4*O;for(let k=0;k<C.count;k++){let z=k*b;d===!0&&(s.fromBufferAttribute(C,k),w[N+z+0]=s.x,w[N+z+1]=s.y,w[N+z+2]=s.z,w[N+z+3]=0),g===!0&&(s.fromBufferAttribute(U,k),w[N+z+4]=s.x,w[N+z+5]=s.y,w[N+z+6]=s.z,w[N+z+7]=0),y===!0&&(s.fromBufferAttribute(H,k),w[N+z+8]=s.x,w[N+z+9]=s.y,w[N+z+10]=s.z,w[N+z+11]=H.itemSize===4?s.w:1)}}h={count:f,texture:A,size:new Nt(_,v)},n.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function y1(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var x1={[rh]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[qo]:"ACES_FILMIC_TONE_MAPPING",[lh]:"AGX_TONE_MAPPING",[uh]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};function v1(i,t,e,n,s,r){let o=new Vn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new he;l.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $t([0,2,0,0,2,0],2));let u=new Sc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new le(l,u),h=new ms(-1,1,1,-1,0,1),d=null,g=null,y=!1,p,m=null,x=[],M=!1;this.setSize=function(_,v){o.setSize(_,v),a!==null&&a.setSize(_,v),c!==null&&c.setSize(_,v);for(let w=0;w<x.length;w++){let A=x[w];A.setSize&&A.setSize(_,v)}},this.setEffects=function(_){x=_,M=x.length>0&&x[0].isRenderPass===!0;let v=o.width,w=o.height;x.length>0&&a===null&&(a=new Vn(v,w,{type:yi,depthBuffer:!1,stencilBuffer:!1}),c=new Vn(v,w,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let b=x[A];b.setSize&&b.setSize(v,w)}},this.begin=function(_,v){if(y||_.toneMapping===mi&&x.length===0)return!1;if(m=v,v!==null){let w=v.width,A=v.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return M===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=mi,!0},this.hasRenderPass=function(){return M},this.end=function(_,v){_.toneMapping=p,y=!0;let w=o,A=a;for(let b=0;b<x.length;b++){let I=x[b];I.enabled!==!1&&(I.render(_,A,w,v),I.needsSwap!==!1&&(w=A,A=A===a?c:a))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,u.defines={},_e.getTransfer(d)===Pe&&(u.defines.SRGB_TRANSFER="");let b=x1[g];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(m),_.render(f,h),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Dp=new On,Lh=new us(1,1),Up=new _o,Fp=new hc,Op=new Ao,mp=[],gp=[],yp=new Float32Array(16),xp=new Float32Array(9),vp=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=mp[s];if(r===void 0&&(r=new Float32Array(s),mp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nl(i,t){let e=gp[t];e===void 0&&(e=new Int32Array(t),gp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function M1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function S1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function w1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;vp.set(n),i.uniformMatrix2fv(this.addr,!1,vp),on(e,n)}}function E1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;xp.set(n),i.uniformMatrix3fv(this.addr,!1,xp),on(e,n)}}function T1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;yp.set(n),i.uniformMatrix4fv(this.addr,!1,yp),on(e,n)}}function A1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function C1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function I1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function P1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function L1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function N1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function D1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function U1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=e.isReversedDepthBuffer()?Tl:El,r=Lh):r=Dp,e.setTexture2D(t||r,s)}function F1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fp,s)}function O1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Op,s)}function B1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Up,s)}function k1(i){switch(i){case 5126:return _1;case 35664:return b1;case 35665:return M1;case 35666:return S1;case 35674:return w1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return I1;case 5125:return P1;case 36294:return L1;case 36295:return N1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return B1}}function z1(i,t){i.uniform1fv(this.addr,t)}function H1(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function G1(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function V1(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function W1(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function X1(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Y1(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function q1(i,t){i.uniform1iv(this.addr,t)}function Z1(i,t){i.uniform2iv(this.addr,t)}function $1(i,t){i.uniform3iv(this.addr,t)}function j1(i,t){i.uniform4iv(this.addr,t)}function J1(i,t){i.uniform1uiv(this.addr,t)}function K1(i,t){i.uniform2uiv(this.addr,t)}function Q1(i,t){i.uniform3uiv(this.addr,t)}function tb(i,t){i.uniform4uiv(this.addr,t)}function eb(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Lh:o=Dp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function nb(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Fp,r[o])}function ib(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Op,r[o])}function sb(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Up,r[o])}function rb(i){switch(i){case 5126:return z1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return W1;case 35675:return X1;case 35676:return Y1;case 5124:case 35670:return q1;case 35667:case 35671:return Z1;case 35668:case 35672:return $1;case 35669:case 35673:return j1;case 5125:return J1;case 36294:return K1;case 36295:return Q1;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return sb}}var Nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k1(e.type)}},Dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rb(e.type)}},Uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ih=/(\w+)(\])?(\[|\.)?/g;function _p(i,t){i.seq.push(t),i.map[t.id]=t}function ob(i,t,e){let n=i.name,s=n.length;for(Ih.lastIndex=0;;){let r=Ih.exec(n),o=Ih.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){_p(e,l===void 0?new Nh(a,i,t):new Dh(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Uh(a),_p(e,f)),e=f}}}var zr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);ob(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function bp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ab=37297,cb=0;function lb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Mp=new me;function ub(i){_e._getMatrix(Mp,_e.workingColorSpace,i);let t=`mat3( ${Mp.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case yo:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+lb(i.getShaderSource(t),a)}else return r}function hb(i,t){let e=ub(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var fb={[rh]:"Linear",[oh]:"Reinhard",[ah]:"Cineon",[qo]:"ACESFilmic",[lh]:"AgX",[uh]:"Neutral",[ch]:"Custom"};function db(i,t){let e=fb[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rl=new Y;function pb(){_e.getLuminanceCoefficients(Rl);let i=Rl.x.toFixed(4),t=Rl.y.toFixed(4),e=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function gb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ra(i){return i!==""}function wp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ep(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(i){return i.replace(xb,_b)}var vb=new Map;function _b(i,t){let e=ye[t];if(e===void 0){let n=vb.get(t);if(n!==void 0)e=ye[n],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fh(e)}var bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(i){return i.replace(bb,Mb)}function Mb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ap(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Sb={[Hs]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function wb(i){return Sb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Eb={[_s]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE",[Zo]:"ENVMAP_TYPE_CUBE_UV"};function Tb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Eb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ab={[Vs]:"ENVMAP_MODE_REFRACTION"};function Rb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ab[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cb={[Bc]:"ENVMAP_BLENDING_MULTIPLY",[Gd]:"ENVMAP_BLENDING_MIX",[Vd]:"ENVMAP_BLENDING_ADD"};function Ib(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cb[i.combine]||"ENVMAP_BLENDING_NONE"}function Pb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lb(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=wb(e),l=Tb(e),u=Rb(e),f=Ib(e),h=Pb(e),d=mb(e),g=gb(r),y=s.createProgram(),p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ra).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ra).join(`
`),m.length>0&&(m+=`
`)):(p=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),m=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?ye.tonemapping_pars_fragment:"",e.toneMapping!==mi?db("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,hb("linearToOutputTexel",e.outputColorSpace),pb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ra).join(`
`)),o=Fh(o),o=wp(o,e),o=Ep(o,e),a=Fh(a),a=wp(a,e),a=Ep(a,e),o=Tp(o),a=Tp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=x+p+o,_=x+m+a,v=bp(s,s.VERTEX_SHADER,M),w=bp(s,s.FRAGMENT_SHADER,_);s.attachShader(y,v),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(v)||"",N=s.getShaderInfoLog(w)||"",k=U.trim(),z=H.trim(),W=N.trim(),tt=!0,j=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,v,w);else{let J=Sp(s,v,"vertex"),at=Sp(s,w,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+J+`
`+at)}else k!==""?ae("WebGLProgram: Program Info Log:",k):(z===""||W==="")&&(j=!1);j&&(C.diagnostics={runnable:tt,programLog:k,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:m}})}s.deleteShader(v),s.deleteShader(w),b=new zr(s,y),I=yb(s,y)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let I;this.getAttributes=function(){return I===void 0&&A(this),I};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(y,ab)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cb++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=w,this}var Nb=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bh(t),e.set(t,n)),n}},Bh=class{constructor(t){this.id=Nb++,this.code=t,this.usedTimes=0}};function Db(i){return i===Ss||i===ta||i===ea}function Ub(i,t,e,n,s,r){let o=new Sr,a=new Oh,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function y(b,I,O,C,U,H){let N=C.fog,k=U.geometry,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?C.environment:null,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,tt=t.get(b.envMap||z,W),j=tt&&tt.mapping===Zo?tt.image.height:null,J=d[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&ae("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let at=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Et=at!==void 0?at.length:0,xt=0;k.morphAttributes.position!==void 0&&(xt=1),k.morphAttributes.normal!==void 0&&(xt=2),k.morphAttributes.color!==void 0&&(xt=3);let bt,Pt,Lt,L;if(J){let fe=zn[J];bt=fe.vertexShader,Pt=fe.fragmentShader}else{bt=b.vertexShader,Pt=b.fragmentShader;let fe=a.getVertexShaderStage(b),re=a.getFragmentShaderStage(b);a.update(b,fe,re),Lt=fe.id,L=re.id}let Z=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),gt=U.isInstancedMesh===!0,lt=U.isBatchedMesh===!0,yt=!!b.map,Mt=!!b.matcap,K=!!tt,dt=!!b.aoMap,Tt=!!b.lightMap,St=!!b.bumpMap&&b.wireframe===!1,Ct=!!b.normalMap,kt=!!b.displacementMap,Bt=!!b.emissiveMap,Gt=!!b.metalnessMap,jt=!!b.roughnessMap,$=b.anisotropy>0,de=b.clearcoat>0,Vt=b.dispersion>0,V=b.retroreflectivity>0,T=b.iridescence>0,nt=b.sheen>0,ut=b.transmission>0,pt=$&&!!b.anisotropyMap,G=de&&!!b.clearcoatMap,S=de&&!!b.clearcoatNormalMap,E=de&&!!b.clearcoatRoughnessMap,R=T&&!!b.iridescenceMap,F=T&&!!b.iridescenceThicknessMap,B=nt&&!!b.sheenColorMap,q=nt&&!!b.sheenRoughnessMap,X=!!b.specularMap,st=!!b.specularColorMap,rt=!!b.specularIntensityMap,Rt=ut&&!!b.transmissionMap,D=ut&&!!b.thicknessMap,ot=!!b.gradientMap,Q=!!b.alphaMap,wt=b.alphaTest>0,At=!!b.alphaHash,vt=!!b.extensions,Dt=mi;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let Ot={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:bt,fragmentShader:Pt,defines:b.defines,customVertexShaderID:Lt,customFragmentShaderID:L,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:lt,batchingColor:lt&&U._colorsTexture!==null,instancing:gt,instancingColor:gt&&U.instanceColor!==null,instancingMorph:gt&&U.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:yt,matcap:Mt,envMap:K,envMapMode:K&&tt.mapping,envMapCubeUVHeight:j,aoMap:dt,lightMap:Tt,bumpMap:St,normalMap:Ct,displacementMap:kt,emissiveMap:Bt,normalMapObjectSpace:Ct&&b.normalMapType===Yd,normalMapTangentSpace:Ct&&b.normalMapType===na,packedNormalMap:Ct&&b.normalMapType===na&&Db(b.normalMap.format),metalnessMap:Gt,roughnessMap:jt,anisotropy:$,anisotropyMap:pt,clearcoat:de,clearcoatMap:G,clearcoatNormalMap:S,clearcoatRoughnessMap:E,dispersion:Vt,retroreflection:V,iridescence:T,iridescenceMap:R,iridescenceThicknessMap:F,sheen:nt,sheenColorMap:B,sheenRoughnessMap:q,specularMap:X,specularColorMap:st,specularIntensityMap:rt,transmission:ut,transmissionMap:Rt,thicknessMap:D,gradientMap:ot,opaque:b.transparent===!1&&b.blending===Ur&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:wt,alphaHash:At,combine:b.combine,mapUv:yt&&g(b.map.channel),aoMapUv:dt&&g(b.aoMap.channel),lightMapUv:Tt&&g(b.lightMap.channel),bumpMapUv:St&&g(b.bumpMap.channel),normalMapUv:Ct&&g(b.normalMap.channel),displacementMapUv:kt&&g(b.displacementMap.channel),emissiveMapUv:Bt&&g(b.emissiveMap.channel),metalnessMapUv:Gt&&g(b.metalnessMap.channel),roughnessMapUv:jt&&g(b.roughnessMap.channel),anisotropyMapUv:pt&&g(b.anisotropyMap.channel),clearcoatMapUv:G&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:S&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:R&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:F&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:B&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:q&&g(b.sheenRoughnessMap.channel),specularMapUv:X&&g(b.specularMap.channel),specularColorMapUv:st&&g(b.specularColorMap.channel),specularIntensityMapUv:rt&&g(b.specularIntensityMap.channel),transmissionMapUv:Rt&&g(b.transmissionMap.channel),thicknessMapUv:D&&g(b.thicknessMap.channel),alphaMapUv:Q&&g(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ct||$),vertexNormals:!!k.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(yt||Q),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Ct===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ct,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:xt,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:yt&&b.map.isVideoTexture===!0&&_e.getTransfer(b.map.colorSpace)===Pe,decodeVideoTextureEmissive:Bt&&b.emissiveMap.isVideoTexture===!0&&_e.getTransfer(b.emissiveMap.colorSpace)===Pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sn,flipSided:b.side===Bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:vt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&b.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function p(b){let I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(let O in b.defines)I.push(O),I.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(m(I,b),x(I,b),I.push(i.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function m(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numSunLights),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numSunLightShadows),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function x(b,I){o.disableAll(),I.instancing&&o.enable(0),I.instancingColor&&o.enable(1),I.instancingMorph&&o.enable(2),I.matcap&&o.enable(3),I.envMap&&o.enable(4),I.normalMapObjectSpace&&o.enable(5),I.normalMapTangentSpace&&o.enable(6),I.clearcoat&&o.enable(7),I.iridescence&&o.enable(8),I.alphaTest&&o.enable(9),I.vertexColors&&o.enable(10),I.vertexAlphas&&o.enable(11),I.vertexUv1s&&o.enable(12),I.vertexUv2s&&o.enable(13),I.vertexUv3s&&o.enable(14),I.vertexTangents&&o.enable(15),I.anisotropy&&o.enable(16),I.alphaHash&&o.enable(17),I.batching&&o.enable(18),I.dispersion&&o.enable(19),I.retroreflection&&o.enable(24),I.batchingColor&&o.enable(20),I.gradientMap&&o.enable(21),I.packedNormalMap&&o.enable(22),I.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.reversedDepthBuffer&&o.enable(4),I.skinning&&o.enable(5),I.morphTargets&&o.enable(6),I.morphNormals&&o.enable(7),I.morphColors&&o.enable(8),I.premultipliedAlpha&&o.enable(9),I.shadowMapEnabled&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.decodeVideoTextureEmissive&&o.enable(20),I.alphaToCoverage&&o.enable(21),I.numLightProbeGrids>0&&o.enable(22),I.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function M(b){let I=d[b.type],O;if(I){let C=zn[I];O=Zi.clone(C.uniforms)}else O=b.uniforms;return O}function _(b,I){let O=u.get(I);return O!==void 0?++O.usedTimes:(O=new Lb(i,I,b,s),l.push(O),u.set(I,O)),O}function v(b){if(--b.usedTimes===0){let I=l.indexOf(b);l[I]=l[l.length-1],l.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){a.remove(b)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:M,acquireProgram:_,releaseProgram:v,releaseShaderCache:w,programs:l,dispose:A}}function Fb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ob(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Rp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,y,p,m){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:m},i[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=g,x.materialVariant=o(h),x.groupOrder=y,x.renderOrder=h.renderOrder,x.z=p,x.group=m),t++,x}function c(h,d,g,y,p,m,x){x.reversedDepth===!0&&(p=-p);let M=a(h,d,g,y,p,m);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):e.push(M)}function l(h,d,g,y,p,m){let x=a(h,d,g,y,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function u(h,d){e.length>1&&e.sort(h||Ob),n.length>1&&n.sort(d||Rp),s.length>1&&s.sort(d||Rp)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function Bb(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Cp,i.set(n,[o])):s>=r.length?(o=new Cp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new Yt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function zb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hb=0;function Gb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vb(i){let t=new kb,e=zb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Y);let s=new Y,r=new be,o=new be;function a(l){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,x=0,M=0,_=0,v=0,w=0,A=0,b=0,I=0,O=0;l.sort(Gb);for(let U=0,H=l.length;U<H;U++){let N=l[U],k=N.color,z=N.intensity,W=N.distance,tt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ss?tt=N.shadow.map.texture:tt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*z,f+=k.g*z,h+=k.b*z;else if(N.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(N.sh.coefficients[j],z);O++}else if(N.isSunLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,at=e.get(N);at.shadowIntensity=J.intensity,at.shadowBias=J.bias,at.shadowNormalBias=J.normalBias,at.shadowRadius=J.radius,at.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=tt;let Et=J.getViewportCount();for(let xt=0;xt<Et;xt++)n.sunShadowMatrix[y+xt]=J.getMatrix(xt),n.sunShadowCascade[y+xt]=J._cascadeData[xt];y+=Et,g++}n.sun[d]=j,d++}else if(N.isDirectionalLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,at=e.get(N);at.shadowIntensity=J.intensity,at.shadowBias=J.bias,at.shadowNormalBias=J.normalBias,at.shadowRadius=J.radius,at.shadowMapSize=J.mapSize,n.directionalShadow[p]=at,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=N.shadow.matrix,v++}n.directional[p]=j,p++}else if(N.isSpotLight){let j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(z),j.distance=W,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,n.spot[x]=j;let J=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,J.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[x]=J.matrix,N.castShadow){let at=e.get(N);at.shadowIntensity=J.intensity,at.shadowBias=J.bias,at.shadowNormalBias=J.normalBias,at.shadowRadius=J.radius,at.shadowMapSize=J.mapSize,n.spotShadow[x]=at,n.spotShadowMap[x]=tt,A++}x++}else if(N.isRectAreaLight){let j=t.get(N);j.color.copy(k).multiplyScalar(z),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=j,M++}else if(N.isPointLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){let J=N.shadow,at=e.get(N);at.shadowIntensity=J.intensity,at.shadowBias=J.bias,at.shadowNormalBias=J.normalBias,at.shadowRadius=J.radius,at.shadowMapSize=J.mapSize,at.shadowCameraNear=J.camera.near,at.shadowCameraFar=J.camera.far,n.pointShadow[m]=at,n.pointShadowMap[m]=tt,n.pointShadowMatrix[m]=N.shadow.matrix,w++}n.point[m]=j,m++}else if(N.isHemisphereLight){let j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(z),j.groundColor.copy(N.groundColor).multiplyScalar(z),n.hemi[_]=j,_++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let C=n.hash;(C.sunLength!==d||C.directionalLength!==p||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==M||C.hemiLength!==_||C.numSunShadows!==g||C.numDirectionalShadows!==v||C.numPointShadows!==w||C.numSpotShadows!==A||C.numSpotMaps!==b||C.numLightProbes!==O)&&(n.sun.length=d,n.directional.length=p,n.spot.length=x,n.rectArea.length=M,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=O,C.sunLength=d,C.directionalLength=p,C.pointLength=m,C.spotLength=x,C.rectAreaLength=M,C.hemiLength=_,C.numSunShadows=g,C.numDirectionalShadows=v,C.numPointShadows=w,C.numSpotShadows=A,C.numSpotMaps=b,C.numLightProbes=O,n.version=Hb++)}function c(l,u){let f=0,h=0,d=0,g=0,y=0,p=0,m=u.matrixWorldInverse;for(let x=0,M=l.length;x<M;x++){let _=l[x];if(_.isSunLight){let v=n.sun[f];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),f++}else if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let v=n.rectArea[y];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function Ip(i){let t=new Vb(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Wb(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ip(i),t.set(s,[a])):r>=o.length?(a=new Ip(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yb=`uniform sampler2D shadow_pass;
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
}`,qb=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Zb=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Pp=new be,sa=new Y,Ph=new Y;function $b(i,t,e){let n=new Tr,s=new Nt,r=new Nt,o=new Le,a=new wc,c=new Ec,l={},u=e.maxTextureSize,f={[vs]:Bn,[Bn]:vs,[sn]:sn},h=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Xb,fragmentShader:Yb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new le(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let m=this.type;this.render=function(w,A,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Sd&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);let I=i.getRenderTarget(),O=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ci),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=m!==this.type;H&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=w.length;N<k;N++){let z=w[N],W=z.shadow;if(W===void 0){ae("WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let tt=W.getFrameExtents();s.multiply(tt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,W.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=j,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Dr){if(z.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Vn(s.x,s.y,{format:Ss,type:yi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),W.map.texture.name=z.name+".shadowMap",W.map.depthTexture=new us(s.x,s.y,ri),W.map.depthTexture.name=z.name+".shadowMapDepth",W.map.depthTexture.format=Ti,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=fn,W.map.depthTexture.magFilter=fn}else z.isPointLight?(W.map=new Il(s.x),W.map.depthTexture=new mc(s.x,gi)):(W.map=new Vn(s.x,s.y),W.map.depthTexture=new us(s.x,s.y,gi)),W.map.depthTexture.name=z.name+".shadowMap",W.map.depthTexture.format=Ti,this.type===Hs?(W.map.depthTexture.compareFunction=j?Tl:El,W.map.depthTexture.minFilter=xn,W.map.depthTexture.magFilter=xn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=fn,W.map.depthTexture.magFilter=fn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();z.isPointLight!==!0&&W.updateMatrices(z,b);for(let at=0;at<J;at++){let Et=W.getCamera(at);if(z.isPointLight){let xt=W.camera,bt=W.matrix,Pt=z.distance||xt.far;Pt!==xt.far&&(xt.far=Pt,xt.updateProjectionMatrix()),sa.setFromMatrixPosition(z.matrixWorld),xt.position.copy(sa),Ph.copy(xt.position),Ph.add(qb[at]),xt.up.copy(Zb[at]),xt.lookAt(Ph),xt.updateMatrixWorld(),bt.makeTranslation(-sa.x,-sa.y,-sa.z),Pp.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Pp,xt.coordinateSystem,xt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,at),i.clear();else{at===0&&(i.setRenderTarget(W.map),i.clear());let xt=W.getViewport(at);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),U.viewport(o)}n=W.getFrustum(at),_(A,b,Et,z,this.type)}W.isPointLightShadow!==!0&&this.type===Dr&&x(W,b),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,O,C)};function x(w,A){let b=t.update(y);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Vn(s.x,s.y,{format:Ss,type:yi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,b,h,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,b,d,y,null)}function M(w,A,b,I){let O=null,C=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)O=C;else if(O=b.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=O.uuid,H=A.uuid,N=l[U];N===void 0&&(N={},l[U]=N);let k=N[H];k===void 0&&(k=O.clone(),N[H]=k,A.addEventListener("dispose",v)),O=k}if(O.visible=A.visible,O.wireframe=A.wireframe,I===Dr?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:f[A.side],O.alphaMap=A.alphaMap,O.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,O.map=A.map,O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.displacementMap=A.displacementMap,O.displacementScale=A.displacementScale,O.displacementBias=A.displacementBias,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,b.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let U=i.properties.get(O);U.light=b}return O}function _(w,A,b,I,O){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Dr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let H=t.update(w),N=w.material;if(Array.isArray(N)){let k=H.groups;for(let z=0,W=k.length;z<W;z++){let tt=k[z],j=N[tt.materialIndex];if(j&&j.visible){let J=M(w,j,I,O);w.onBeforeShadow(i,w,A,b,H,J,tt),i.renderBufferDirect(b,null,H,J,w,tt),w.onAfterShadow(i,w,A,b,H,J,tt)}}}else if(N.visible){let k=M(w,N,I,O);w.onBeforeShadow(i,w,A,b,H,k,null),i.renderBufferDirect(b,null,H,k,w,null),w.onAfterShadow(i,w,A,b,H,k,null)}}let U=w.children;for(let H=0,N=U.length;H<N;H++)_(U[H],A,b,I,O)}function v(w){w.target.removeEventListener("dispose",v);for(let b in l){let I=l[b],O=w.target.uuid;O in I&&(I[O].dispose(),delete I[O])}}}function jb(i,t){function e(){let D=!1,ot=new Le,Q=null,wt=new Le(0,0,0,0);return{setMask:function(At){Q!==At&&!D&&(i.colorMask(At,At,At,At),Q=At)},setLocked:function(At){D=At},setClear:function(At,vt,Dt,Ot,fe){fe===!0&&(At*=Ot,vt*=Ot,Dt*=Ot),ot.set(At,vt,Dt,Ot),wt.equals(ot)===!1&&(i.clearColor(At,vt,Dt,Ot),wt.copy(ot))},reset:function(){D=!1,Q=null,wt.set(-1,0,0,0)}}}function n(){let D=!1,ot=!1,Q=null,wt=null,At=null;return{setReversed:function(vt){if(ot!==vt){let Dt=t.get("EXT_clip_control");vt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ot=vt;let Ot=At;At=null,this.setClear(Ot)}},getReversed:function(){return ot},setTest:function(vt){vt?Z(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(vt){Q!==vt&&!D&&(i.depthMask(vt),Q=vt)},setFunc:function(vt){if(ot&&(vt=ip[vt]),wt!==vt){switch(vt){case tc:i.depthFunc(i.NEVER);break;case ec:i.depthFunc(i.ALWAYS);break;case nc:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case ic:i.depthFunc(i.EQUAL);break;case sc:i.depthFunc(i.GEQUAL);break;case rc:i.depthFunc(i.GREATER);break;case oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=vt}},setLocked:function(vt){D=vt},setClear:function(vt){At!==vt&&(At=vt,ot&&(vt=1-vt),i.clearDepth(vt))},reset:function(){D=!1,Q=null,wt=null,At=null,ot=!1}}}function s(){let D=!1,ot=null,Q=null,wt=null,At=null,vt=null,Dt=null,Ot=null,fe=null;return{setTest:function(re){D||(re?Z(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(re){ot!==re&&!D&&(i.stencilMask(re),ot=re)},setFunc:function(re,Me,we){(Q!==re||wt!==Me||At!==we)&&(i.stencilFunc(re,Me,we),Q=re,wt=Me,At=we)},setOp:function(re,Me,we){(vt!==re||Dt!==Me||Ot!==we)&&(i.stencilOp(re,Me,we),vt=re,Dt=Me,Ot=we)},setLocked:function(re){D=re},setClear:function(re){fe!==re&&(i.clearStencil(re),fe=re)},reset:function(){D=!1,ot=null,Q=null,wt=null,At=null,vt=null,Dt=null,Ot=null,fe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],y=null,p=!1,m=null,x=null,M=null,_=null,v=null,w=null,A=null,b=new Yt(0,0,0),I=0,O=!1,C=null,U=null,H=null,N=null,k=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,tt=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=tt>=1):j.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=tt>=2);let J=null,at={},Et=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),bt=new Le().fromArray(Et),Pt=new Le().fromArray(xt);function Lt(D,ot,Q,wt){let At=new Uint8Array(4),vt=i.createTexture();i.bindTexture(D,vt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<Q;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(ot+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return vt}let L={};L[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(xr),St(!1),Ct(th),Z(i.CULL_FACE),dt(Ci);function Z(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ct(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function gt(D,ot){return h[D]!==ot?(i.bindFramebuffer(D,ot),h[D]=ot,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function lt(D,ot){let Q=g,wt=!1;if(D){Q=d.get(ot),Q===void 0&&(Q=[],d.set(ot,Q));let At=D.textures;if(Q.length!==At.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Dt=At.length;vt<Dt;vt++)Q[vt]=i.COLOR_ATTACHMENT0+vt;Q.length=At.length,wt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,wt=!0);wt&&i.drawBuffers(Q)}function yt(D){return y!==D?(i.useProgram(D),y=D,!0):!1}let Mt={[Gs]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[Td]:i.FUNC_REVERSE_SUBTRACT};Mt[Ad]=i.MIN,Mt[Rd]=i.MAX;let K={[Cd]:i.ZERO,[Id]:i.ONE,[Pd]:i.SRC_COLOR,[ih]:i.SRC_ALPHA,[Od]:i.SRC_ALPHA_SATURATE,[Ud]:i.DST_COLOR,[Nd]:i.DST_ALPHA,[Ld]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[Fd]:i.ONE_MINUS_DST_COLOR,[Dd]:i.ONE_MINUS_DST_ALPHA,[Bd]:i.CONSTANT_COLOR,[kd]:i.ONE_MINUS_CONSTANT_COLOR,[zd]:i.CONSTANT_ALPHA,[Hd]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(D,ot,Q,wt,At,vt,Dt,Ot,fe,re){if(D===Ci){p===!0&&(ct(i.BLEND),p=!1);return}if(p===!1&&(Z(i.BLEND),p=!0),D!==wd){if(D!==m||re!==O){if((x!==Gs||v!==Gs)&&(i.blendEquation(i.FUNC_ADD),x=Gs,v=Gs),re)switch(D){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFunc(i.ONE,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ue("WebGLState: Invalid blending: ",D);break}else switch(D){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case eh:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",D);break}M=null,_=null,w=null,A=null,b.set(0,0,0),I=0,m=D,O=re}return}At=At||ot,vt=vt||Q,Dt=Dt||wt,(ot!==x||At!==v)&&(i.blendEquationSeparate(Mt[ot],Mt[At]),x=ot,v=At),(Q!==M||wt!==_||vt!==w||Dt!==A)&&(i.blendFuncSeparate(K[Q],K[wt],K[vt],K[Dt]),M=Q,_=wt,w=vt,A=Dt),(Ot.equals(b)===!1||fe!==I)&&(i.blendColor(Ot.r,Ot.g,Ot.b,fe),b.copy(Ot),I=fe),m=D,O=!1}function Tt(D,ot){D.side===sn?ct(i.CULL_FACE):Z(i.CULL_FACE);let Q=D.side===Bn;ot&&(Q=!Q),St(Q),D.blending===Ur&&D.transparent===!1?dt(Ci):dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let wt=D.stencilWrite;a.setTest(wt),wt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Bt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function Ct(D){D!==bd?(Z(i.CULL_FACE),D!==U&&(D===th?i.cullFace(i.BACK):D===Md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),U=D}function kt(D){D!==H&&(W&&i.lineWidth(D),H=D)}function Bt(D,ot,Q){D?(Z(i.POLYGON_OFFSET_FILL),(N!==ot||k!==Q)&&(N=ot,k=Q,o.getReversed()&&(ot=-ot),i.polygonOffset(ot,Q))):ct(i.POLYGON_OFFSET_FILL)}function Gt(D){D?Z(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function jt(D){D===void 0&&(D=i.TEXTURE0+z-1),J!==D&&(i.activeTexture(D),J=D)}function $(D,ot,Q){Q===void 0&&(J===null?Q=i.TEXTURE0+z-1:Q=J);let wt=at[Q];wt===void 0&&(wt={type:void 0,texture:void 0},at[Q]=wt),(wt.type!==D||wt.texture!==ot)&&(J!==Q&&(i.activeTexture(Q),J=Q),i.bindTexture(D,ot||L[D]),wt.type=D,wt.texture=ot)}function de(){let D=at[J];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function T(){try{i.texSubImage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function nt(){try{i.texSubImage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function pt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function G(){try{i.texStorage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function S(){try{i.texStorage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function E(){try{i.texImage2D(...arguments)}catch(D){ue("WebGLState:",D)}}function R(){try{i.texImage3D(...arguments)}catch(D){ue("WebGLState:",D)}}function F(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function B(D,ot){f[D]!==ot&&(i.pixelStorei(D,ot),f[D]=ot)}function q(D){bt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),bt.copy(D))}function X(D){Pt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Pt.copy(D))}function st(D,ot){let Q=l.get(ot);Q===void 0&&(Q=new WeakMap,l.set(ot,Q));let wt=Q.get(D);wt===void 0&&(wt=i.getUniformBlockIndex(ot,D.name),Q.set(D,wt))}function rt(D,ot){let wt=l.get(ot).get(D);c.get(ot)!==wt&&(i.uniformBlockBinding(ot,wt,D.__bindingPointIndex),c.set(ot,wt))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},J=null,at={},h={},d=new WeakMap,g=[],y=null,p=!1,m=null,x=null,M=null,_=null,v=null,w=null,A=null,b=new Yt(0,0,0),I=0,O=!1,C=null,U=null,H=null,N=null,k=null,bt.set(0,0,i.canvas.width,i.canvas.height),Pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ct,bindFramebuffer:gt,drawBuffers:lt,useProgram:yt,setBlending:dt,setMaterial:Tt,setFlipSided:St,setCullFace:Ct,setLineWidth:kt,setPolygonOffset:Bt,setScissorTest:Gt,activeTexture:jt,bindTexture:$,unbindTexture:de,compressedTexImage2D:Vt,compressedTexImage3D:V,texImage2D:E,texImage3D:R,pixelStorei:B,getParameter:F,updateUBOMapping:st,uniformBlockBinding:rt,texStorage2D:G,texStorage3D:S,texSubImage2D:T,texSubImage3D:nt,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:q,viewport:X,reset:Rt}}function Jb(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(V,T){return g?new OffscreenCanvas(V,T):xo("canvas")}function p(V,T,nt){let ut=1,pt=Vt(V);if((pt.width>nt||pt.height>nt)&&(ut=nt/Math.max(pt.width,pt.height)),ut<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let G=Math.floor(ut*pt.width),S=Math.floor(ut*pt.height);h===void 0&&(h=y(G,S));let E=T?y(G,S):h;return E.width=G,E.height=S,E.getContext("2d").drawImage(V,0,0,G,S),ae("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+G+"x"+S+")."),E}else return"data"in V&&ae("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),V;return V}function m(V){return V.generateMipmaps}function x(V){i.generateMipmap(V)}function M(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(V,T,nt,ut,pt,G=!1){if(V!==null){if(i[V]!==void 0)return i[V];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let S;ut&&(S=t.get("EXT_texture_norm16"),S||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let E=T;if(T===i.RED&&(nt===i.FLOAT&&(E=i.R32F),nt===i.HALF_FLOAT&&(E=i.R16F),nt===i.UNSIGNED_BYTE&&(E=i.R8),nt===i.UNSIGNED_SHORT&&S&&(E=S.R16_EXT),nt===i.SHORT&&S&&(E=S.R16_SNORM_EXT)),T===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(E=i.R8UI),nt===i.UNSIGNED_SHORT&&(E=i.R16UI),nt===i.UNSIGNED_INT&&(E=i.R32UI),nt===i.BYTE&&(E=i.R8I),nt===i.SHORT&&(E=i.R16I),nt===i.INT&&(E=i.R32I)),T===i.RG&&(nt===i.FLOAT&&(E=i.RG32F),nt===i.HALF_FLOAT&&(E=i.RG16F),nt===i.UNSIGNED_BYTE&&(E=i.RG8),nt===i.UNSIGNED_SHORT&&S&&(E=S.RG16_EXT),nt===i.SHORT&&S&&(E=S.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(E=i.RG8UI),nt===i.UNSIGNED_SHORT&&(E=i.RG16UI),nt===i.UNSIGNED_INT&&(E=i.RG32UI),nt===i.BYTE&&(E=i.RG8I),nt===i.SHORT&&(E=i.RG16I),nt===i.INT&&(E=i.RG32I)),T===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(E=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(E=i.RGB16UI),nt===i.UNSIGNED_INT&&(E=i.RGB32UI),nt===i.BYTE&&(E=i.RGB8I),nt===i.SHORT&&(E=i.RGB16I),nt===i.INT&&(E=i.RGB32I)),T===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(E=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(E=i.RGBA16UI),nt===i.UNSIGNED_INT&&(E=i.RGBA32UI),nt===i.BYTE&&(E=i.RGBA8I),nt===i.SHORT&&(E=i.RGBA16I),nt===i.INT&&(E=i.RGBA32I)),T===i.RGB&&(nt===i.UNSIGNED_SHORT&&S&&(E=S.RGB16_EXT),nt===i.SHORT&&S&&(E=S.RGB16_SNORM_EXT),nt===i.UNSIGNED_INT_5_9_9_9_REV&&(E=i.RGB9_E5),nt===i.UNSIGNED_INT_10F_11F_11F_REV&&(E=i.R11F_G11F_B10F)),T===i.RGBA){let R=G?yo:_e.getTransfer(pt);nt===i.FLOAT&&(E=i.RGBA32F),nt===i.HALF_FLOAT&&(E=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(E=R===Pe?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT&&S&&(E=S.RGBA16_EXT),nt===i.SHORT&&S&&(E=S.RGBA16_SNORM_EXT),nt===i.UNSIGNED_SHORT_4_4_4_4&&(E=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(E=i.RGB5_A1)}return(E===i.R16F||E===i.R32F||E===i.RG16F||E===i.RG32F||E===i.RGBA16F||E===i.RGBA32F)&&t.get("EXT_color_buffer_float"),E}function v(V,T){let nt;return V?T===null||T===gi||T===Or?nt=i.DEPTH24_STENCIL8:T===ri?nt=i.DEPTH32F_STENCIL8:T===Fr&&(nt=i.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gi||T===Or?nt=i.DEPTH_COMPONENT24:T===ri?nt=i.DEPTH_COMPONENT32F:T===Fr&&(nt=i.DEPTH_COMPONENT16),nt}function w(V,T){return m(V)===!0||V.isFramebufferTexture&&V.minFilter!==fn&&V.minFilter!==xn?Math.log2(Math.max(T.width,T.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?T.mipmaps.length:1}function A(V){let T=V.target;T.removeEventListener("dispose",A),I(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&f.delete(T)}function b(V){let T=V.target;T.removeEventListener("dispose",b),C(T)}function I(V){let T=n.get(V);if(T.__webglInit===void 0)return;let nt=V.source,ut=d.get(nt);if(ut){let pt=ut[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&O(V),Object.keys(ut).length===0&&d.delete(nt)}n.remove(V)}function O(V){let T=n.get(V);i.deleteTexture(T.__webglTexture);let nt=V.source,ut=d.get(nt);delete ut[T.__cacheKey],o.memory.textures--}function C(V){let T=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let pt=0;pt<T.__webglFramebuffer[ut].length;pt++)i.deleteFramebuffer(T.__webglFramebuffer[ut][pt]);else i.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)i.deleteFramebuffer(T.__webglFramebuffer[ut]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let nt=V.textures;for(let ut=0,pt=nt.length;ut<pt;ut++){let G=n.get(nt[ut]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(nt[ut])}n.remove(V)}let U=0;function H(){U=0}function N(){return U}function k(V){U=V}function z(){let V=U;return V>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,V}function W(V){let T=[];return T.push(V.wrapS),T.push(V.wrapT),T.push(V.wrapR||0),T.push(V.magFilter),T.push(V.minFilter),T.push(V.anisotropy),T.push(V.internalFormat),T.push(V.format),T.push(V.type),T.push(V.generateMipmaps),T.push(V.premultiplyAlpha),T.push(V.flipY),T.push(V.unpackAlignment),T.push(V.colorSpace),T.join()}function tt(V,T){let nt=n.get(V);if(V.isVideoTexture&&$(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&nt.__version!==V.version){let ut=V.image;if(ut===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(nt,V,T);return}}else V.isExternalTexture&&(nt.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+T)}function j(V,T){let nt=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&nt.__version!==V.version){ct(nt,V,T);return}else V.isExternalTexture&&(nt.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+T)}function J(V,T){let nt=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&nt.__version!==V.version){ct(nt,V,T);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+T)}function at(V,T){let nt=n.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&nt.__version!==V.version){gt(nt,V,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+T)}let Et={[Us]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[ac]:i.MIRRORED_REPEAT},xt={[fn]:i.NEAREST,[Wd]:i.NEAREST_MIPMAP_NEAREST,[$o]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Hc]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},bt={[Zd]:i.NEVER,[Qd]:i.ALWAYS,[$d]:i.LESS,[El]:i.LEQUAL,[jd]:i.EQUAL,[Tl]:i.GEQUAL,[Jd]:i.GREATER,[Kd]:i.NOTEQUAL};function Pt(V,T){if(T.type===ri&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===xn||T.magFilter===Hc||T.magFilter===$o||T.magFilter===bs||T.minFilter===xn||T.minFilter===Hc||T.minFilter===$o||T.minFilter===bs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,Et[T.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,Et[T.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,Et[T.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,xt[T.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,bt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fn||T.minFilter!==$o&&T.minFilter!==bs||T.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(V,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Lt(V,T){let nt=!1;V.__webglInit===void 0&&(V.__webglInit=!0,T.addEventListener("dispose",A));let ut=T.source,pt=d.get(ut);pt===void 0&&(pt={},d.set(ut,pt));let G=W(T);if(G!==V.__cacheKey){pt[G]===void 0&&(pt[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,nt=!0),pt[G].usedTimes++;let S=pt[V.__cacheKey];S!==void 0&&(pt[V.__cacheKey].usedTimes--,S.usedTimes===0&&O(T)),V.__cacheKey=G,V.__webglTexture=pt[G].texture}return nt}function L(V,T,nt){return Math.floor(Math.floor(V/nt)/T)}function Z(V,T,nt,ut){let G=V.updateRanges;if(G.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,nt,ut,T.data);else{G.sort((B,q)=>B.start-q.start);let S=0;for(let B=1;B<G.length;B++){let q=G[S],X=G[B],st=q.start+q.count,rt=L(X.start,T.width,4),Rt=L(q.start,T.width,4);X.start<=st+1&&rt===Rt&&L(X.start+X.count-1,T.width,4)===rt?q.count=Math.max(q.count,X.start+X.count-q.start):(++S,G[S]=X)}G.length=S+1;let E=e.getParameter(i.UNPACK_ROW_LENGTH),R=e.getParameter(i.UNPACK_SKIP_PIXELS),F=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let B=0,q=G.length;B<q;B++){let X=G[B],st=Math.floor(X.start/4),rt=Math.ceil(X.count/4),Rt=st%T.width,D=Math.floor(st/T.width),ot=rt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Rt,D,ot,Q,nt,ut,T.data)}V.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,E),e.pixelStorei(i.UNPACK_SKIP_PIXELS,R),e.pixelStorei(i.UNPACK_SKIP_ROWS,F)}}function ct(V,T,nt){let ut=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=i.TEXTURE_3D);let pt=Lt(V,T),G=T.source;e.bindTexture(ut,V.__webglTexture,i.TEXTURE0+nt);let S=n.get(G);if(G.version!==S.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+nt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Q=_e.getPrimaries(_e.workingColorSpace),wt=T.colorSpace===qi?null:_e.getPrimaries(T.colorSpace),At=T.colorSpace===qi||Q===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let R=p(T.image,!1,s.maxTextureSize);R=de(T,R);let F=r.convert(T.format,T.colorSpace),B=r.convert(T.type),q=_(T.internalFormat,F,B,T.normalized,T.colorSpace,T.isVideoTexture);Pt(ut,T);let X,st=T.mipmaps,rt=T.isVideoTexture!==!0,Rt=S.__version===void 0||pt===!0,D=G.dataReady,ot=w(T,R);if(T.isDepthTexture)q=v(T.format===Ms,T.type),Rt&&(rt?e.texStorage2D(i.TEXTURE_2D,1,q,R.width,R.height):e.texImage2D(i.TEXTURE_2D,0,q,R.width,R.height,0,F,B,null));else if(T.isDataTexture)if(st.length>0){rt&&Rt&&e.texStorage2D(i.TEXTURE_2D,ot,q,st[0].width,st[0].height);for(let Q=0,wt=st.length;Q<wt;Q++)X=st[Q],rt?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,X.width,X.height,F,B,X.data):e.texImage2D(i.TEXTURE_2D,Q,q,X.width,X.height,0,F,B,X.data);T.generateMipmaps=!1}else rt?(Rt&&e.texStorage2D(i.TEXTURE_2D,ot,q,R.width,R.height),D&&Z(T,R,F,B)):e.texImage2D(i.TEXTURE_2D,0,q,R.width,R.height,0,F,B,R.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,q,st[0].width,st[0].height,R.depth);for(let Q=0,wt=st.length;Q<wt;Q++)if(X=st[Q],T.format!==oi)if(F!==null)if(rt){if(D)if(T.layerUpdates.size>0){let At=Eh(X.width,X.height,T.format,T.type);for(let vt of T.layerUpdates){let Dt=X.data.subarray(vt*At/X.data.BYTES_PER_ELEMENT,(vt+1)*At/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,vt,X.width,X.height,1,F,Dt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,X.width,X.height,R.depth,F,X.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,q,X.width,X.height,R.depth,0,X.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,X.width,X.height,R.depth,F,B,X.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,q,X.width,X.height,R.depth,0,F,B,X.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{rt&&Rt&&e.texStorage2D(i.TEXTURE_2D,ot,q,st[0].width,st[0].height);for(let Q=0,wt=st.length;Q<wt;Q++)X=st[Q],T.format!==oi?F!==null?rt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,X.width,X.height,F,X.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,q,X.width,X.height,0,X.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,X.width,X.height,F,B,X.data):e.texImage2D(i.TEXTURE_2D,Q,q,X.width,X.height,0,F,B,X.data)}else if(T.isDataArrayTexture)if(rt){if(Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,q,R.width,R.height,R.depth),D)if(T.layerUpdates.size>0){let Q=Eh(R.width,R.height,T.format,T.type);for(let wt of T.layerUpdates){let At=R.data.subarray(wt*Q/R.data.BYTES_PER_ELEMENT,(wt+1)*Q/R.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,R.width,R.height,1,F,B,At)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,R.width,R.height,R.depth,F,B,R.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,R.width,R.height,R.depth,0,F,B,R.data);else if(T.isData3DTexture)rt?(Rt&&e.texStorage3D(i.TEXTURE_3D,ot,q,R.width,R.height,R.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,R.width,R.height,R.depth,F,B,R.data)):e.texImage3D(i.TEXTURE_3D,0,q,R.width,R.height,R.depth,0,F,B,R.data);else if(T.isFramebufferTexture){if(Rt)if(rt)e.texStorage2D(i.TEXTURE_2D,ot,q,R.width,R.height);else{let Q=R.width,wt=R.height;for(let At=0;At<ot;At++)e.texImage2D(i.TEXTURE_2D,At,q,Q,wt,0,F,B,null),Q>>=1,wt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),R.parentNode!==Q){Q.appendChild(R),f.add(T),Q.onpaint=wt=>{let At=wt.changedElements;for(let vt of f)At.includes(vt.image)&&(vt.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,R);else{let At=i.RGBA,vt=i.RGBA,Dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,vt,Dt,R)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(st.length>0){if(rt&&Rt){let Q=Vt(st[0]);e.texStorage2D(i.TEXTURE_2D,ot,q,Q.width,Q.height)}for(let Q=0,wt=st.length;Q<wt;Q++)X=st[Q],rt?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,F,B,X):e.texImage2D(i.TEXTURE_2D,Q,q,F,B,X);T.generateMipmaps=!1}else if(rt){if(Rt){let Q=Vt(R);e.texStorage2D(i.TEXTURE_2D,ot,q,Q.width,Q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,F,B,R)}else e.texImage2D(i.TEXTURE_2D,0,q,F,B,R);m(T)&&x(ut),S.__version=G.version,T.onUpdate&&T.onUpdate(T)}V.__version=T.version}function gt(V,T,nt){if(T.image.length!==6)return;let ut=Lt(V,T),pt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+nt);let G=n.get(pt);if(pt.version!==G.__version||ut===!0){e.activeTexture(i.TEXTURE0+nt);let S=_e.getPrimaries(_e.workingColorSpace),E=T.colorSpace===qi?null:_e.getPrimaries(T.colorSpace),R=T.colorSpace===qi||S===E?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);let F=T.isCompressedTexture||T.image[0].isCompressedTexture,B=T.image[0]&&T.image[0].isDataTexture,q=[];for(let vt=0;vt<6;vt++)!F&&!B?q[vt]=p(T.image[vt],!0,s.maxCubemapSize):q[vt]=B?T.image[vt].image:T.image[vt],q[vt]=de(T,q[vt]);let X=q[0],st=r.convert(T.format,T.colorSpace),rt=r.convert(T.type),Rt=_(T.internalFormat,st,rt,T.normalized,T.colorSpace),D=T.isVideoTexture!==!0,ot=G.__version===void 0||ut===!0,Q=pt.dataReady,wt=w(T,X);Pt(i.TEXTURE_CUBE_MAP,T);let At;if(F){D&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Rt,X.width,X.height);for(let vt=0;vt<6;vt++){At=q[vt].mipmaps;for(let Dt=0;Dt<At.length;Dt++){let Ot=At[Dt];T.format!==oi?st!==null?D?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Ot.width,Ot.height,st,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,Rt,Ot.width,Ot.height,0,Ot.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Ot.width,Ot.height,st,rt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,Rt,Ot.width,Ot.height,0,st,rt,Ot.data)}}}else{if(At=T.mipmaps,D&&ot){At.length>0&&wt++;let vt=Vt(q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Rt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(B){D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,q[vt].width,q[vt].height,st,rt,q[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Rt,q[vt].width,q[vt].height,0,st,rt,q[vt].data);for(let Dt=0;Dt<At.length;Dt++){let fe=At[Dt].image[vt].image;D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,fe.width,fe.height,st,rt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,Rt,fe.width,fe.height,0,st,rt,fe.data)}}else{D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,st,rt,q[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Rt,st,rt,q[vt]);for(let Dt=0;Dt<At.length;Dt++){let Ot=At[Dt];D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,st,rt,Ot.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,Rt,st,rt,Ot.image[vt])}}}m(T)&&x(i.TEXTURE_CUBE_MAP),G.__version=pt.version,T.onUpdate&&T.onUpdate(T)}V.__version=T.version}function lt(V,T,nt,ut,pt,G){let S=r.convert(nt.format,nt.colorSpace),E=r.convert(nt.type),R=_(nt.internalFormat,S,E,nt.normalized,nt.colorSpace),F=n.get(T),B=n.get(nt);if(B.__renderTarget=T,!F.__hasExternalTextures){let q=Math.max(1,T.width>>G),X=Math.max(1,T.height>>G);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,G,R,q,X,T.depth,0,S,E,null):e.texImage2D(pt,G,R,q,X,0,S,E,null)}e.bindFramebuffer(i.FRAMEBUFFER,V),jt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,pt,B.__webglTexture,0,Gt(T)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,pt,B.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(V,T,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,V),T.depthBuffer){let ut=T.depthTexture,pt=ut&&ut.isDepthTexture?ut.type:null,G=v(T.stencilBuffer,pt),S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;jt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(T),G,T.width,T.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(T),G,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,G,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,S,i.RENDERBUFFER,V)}else{let ut=T.textures;for(let pt=0;pt<ut.length;pt++){let G=ut[pt],S=r.convert(G.format,G.colorSpace),E=r.convert(G.type),R=_(G.internalFormat,S,E,G.normalized,G.colorSpace);jt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(T),R,T.width,T.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(T),R,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,R,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(V,T,nt){let ut=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,V),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pt=n.get(T.depthTexture);if(pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),pt.__webglTexture===void 0){pt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,T.depthTexture);let F=r.convert(T.depthTexture.format),B=r.convert(T.depthTexture.type),q;T.depthTexture.format===Ti?q=i.DEPTH_COMPONENT24:T.depthTexture.format===Ms&&(q=i.DEPTH24_STENCIL8);for(let X=0;X<6;X++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,q,T.width,T.height,0,F,B,null)}}else tt(T.depthTexture,0);let G=pt.__webglTexture,S=Gt(T),E=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+nt:i.TEXTURE_2D,R=T.depthTexture.format===Ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ti)jt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,E,G,0,S):i.framebufferTexture2D(i.FRAMEBUFFER,R,E,G,0);else if(T.depthTexture.format===Ms)jt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,E,G,0,S):i.framebufferTexture2D(i.FRAMEBUFFER,R,E,G,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(V){let T=n.get(V),nt=V.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==V.depthTexture){let ut=V.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){let pt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",pt)};ut.addEventListener("dispose",pt),T.__depthDisposeCallback=pt}T.__boundDepthTexture=ut}if(V.depthTexture&&!T.__autoAllocateDepthBuffer)if(nt)for(let ut=0;ut<6;ut++)Mt(T.__webglFramebuffer[ut],V,ut);else{let ut=V.texture.mipmaps;ut&&ut.length>0?Mt(T.__webglFramebuffer[0],V,0):Mt(T.__webglFramebuffer,V,0)}else if(nt){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=i.createRenderbuffer(),yt(T.__webglDepthbuffer[ut],V,!1);else{let pt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,G)}}else{let ut=V.texture.mipmaps;if(ut&&ut.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),yt(T.__webglDepthbuffer,V,!1);else{let pt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,G)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(V,T,nt){let ut=n.get(V);T!==void 0&&lt(ut.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&K(V)}function Tt(V){let T=V.texture,nt=n.get(V),ut=n.get(T);V.addEventListener("dispose",b);let pt=V.textures,G=V.isWebGLCubeRenderTarget===!0,S=pt.length>1;if(S||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=T.version,o.memory.textures++),G){nt.__webglFramebuffer=[];for(let E=0;E<6;E++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[E]=[];for(let R=0;R<T.mipmaps.length;R++)nt.__webglFramebuffer[E][R]=i.createFramebuffer()}else nt.__webglFramebuffer[E]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let E=0;E<T.mipmaps.length;E++)nt.__webglFramebuffer[E]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(S)for(let E=0,R=pt.length;E<R;E++){let F=n.get(pt[E]);F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture(),o.memory.textures++)}if(V.samples>0&&jt(V)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let E=0;E<pt.length;E++){let R=pt[E];nt.__webglColorRenderbuffer[E]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[E]);let F=r.convert(R.format,R.colorSpace),B=r.convert(R.type),q=_(R.internalFormat,F,B,R.normalized,R.colorSpace,V.isXRRenderTarget===!0),X=Gt(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,q,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+E,i.RENDERBUFFER,nt.__webglColorRenderbuffer[E])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(nt.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,T);for(let E=0;E<6;E++)if(T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)lt(nt.__webglFramebuffer[E][R],V,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+E,R);else lt(nt.__webglFramebuffer[E],V,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0);m(T)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(S){for(let E=0,R=pt.length;E<R;E++){let F=pt[E],B=n.get(F),q=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(q=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,B.__webglTexture),Pt(q,F),lt(nt.__webglFramebuffer,V,F,i.COLOR_ATTACHMENT0+E,q,0),m(F)&&x(q)}e.unbindTexture()}else{let E=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(E=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(E,ut.__webglTexture),Pt(E,T),T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)lt(nt.__webglFramebuffer[R],V,T,i.COLOR_ATTACHMENT0,E,R);else lt(nt.__webglFramebuffer,V,T,i.COLOR_ATTACHMENT0,E,0);m(T)&&x(E),e.unbindTexture()}V.depthBuffer&&K(V)}function St(V){let T=V.textures;for(let nt=0,ut=T.length;nt<ut;nt++){let pt=T[nt];if(m(pt)){let G=M(V),S=n.get(pt).__webglTexture;e.bindTexture(G,S),x(G),e.unbindTexture()}}}let Ct=[],kt=[];function Bt(V){if(V.samples>0){if(jt(V)===!1){let T=V.textures,nt=V.width,ut=V.height,pt=i.COLOR_BUFFER_BIT,G=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,S=n.get(V),E=T.length>1;if(E)for(let F=0;F<T.length;F++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer);let R=V.texture.mipmaps;R&&R.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let F=0;F<T.length;F++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),E){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,S.__webglColorRenderbuffer[F]);let B=n.get(T[F]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,nt,ut,0,0,nt,ut,pt,i.NEAREST),c===!0&&(Ct.length=0,kt.length=0,Ct.push(i.COLOR_ATTACHMENT0+F),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(Ct.push(G),kt.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),E)for(let F=0;F<T.length;F++){e.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,S.__webglColorRenderbuffer[F]);let B=n.get(T[F]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,B,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&c){let T=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Gt(V){return Math.min(s.maxSamples,V.samples)}function jt(V){let T=n.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $(V){let T=o.render.frame;u.get(V)!==T&&(u.set(V,T),V.update())}function de(V,T){let nt=V.colorSpace,ut=V.format,pt=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||nt!==go&&nt!==qi&&(_e.getTransfer(nt)===Pe?(ut!==oi||pt!==Xn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",nt)),T}function Vt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(l.width=V.naturalWidth||V.width,l.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(l.width=V.displayWidth,l.height=V.displayHeight):(l.width=V.width,l.height=V.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=tt,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=at,this.rebindTextures=dt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Kb(i,t){function e(n,s=qi){let r,o=_e.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return i.BYTE;if(n===dh)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Gc)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===yh)return i.RGB;if(n===oi)return i.RGBA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===Yc)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===qc)return i.RG_INTEGER;if(n===Zc)return i.RGBA_INTEGER;if(n===jo||n===Jo||n===Ko||n===Qo)if(o===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===jc||n===Jc||n===Kc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qc||n===tl||n===el||n===nl||n===il||n===ta||n===sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qc||n===tl)return o===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nl)return r.COMPRESSED_R11_EAC;if(n===il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rl||n===ol||n===al||n===cl||n===ll||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===gl||n===yl||n===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===_l||n===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return o===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===Sl||n===ea||n===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tM=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ro(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:Qb,fragmentShader:tM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends Ai{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new kh,m={},x=e.getContextAttributes(),M=null,_=null,v=[],w=[],A=new Nt,b=null,I=null,O=new Fn;O.viewport=new Le;let C=new Fn;C.viewport=new Le;let U=[O,C],H=new Oc,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let Z=v[L];return Z===void 0&&(Z=new wr,v[L]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(L){let Z=v[L];return Z===void 0&&(Z=new wr,v[L]=Z),Z.getGripSpace()},this.getHand=function(L){let Z=v[L];return Z===void 0&&(Z=new wr,v[L]=Z),Z.getHandSpace()};function z(L){let Z=w.indexOf(L.inputSource);if(Z===-1)return;let ct=v[Z];ct!==void 0&&(ct.update(L.inputSource,L.frame,l||o),ct.dispatchEvent({type:L.type,data:L.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",tt);for(let L=0;L<v.length;L++){let Z=w[L];Z!==null&&(w[L]=null,v[L].disconnect(Z))}N=null,k=null,p.reset();for(let L in m)delete m[L];if(t.setRenderTarget(M),d=null,h=null,f=null,s=null,_=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),I!==null){let L=I.camera;L.fov=I.fov,L.zoom=I.zoom,L.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",tt),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,gt=null,lt=null;x.depth&&(lt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=x.stencil?Ms:Ti,gt=x.stencil?Or:gi);let yt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(yt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Vn(h.textureWidth,h.textureHeight,{format:oi,type:Xn,depthTexture:new us(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ct={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Vn(d.framebufferWidth,d.framebufferHeight,{format:oi,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(L){for(let Z=0;Z<L.removed.length;Z++){let ct=L.removed[Z],gt=w.indexOf(ct);gt>=0&&(w[gt]=null,v[gt].disconnect(ct))}for(let Z=0;Z<L.added.length;Z++){let ct=L.added[Z],gt=w.indexOf(ct);if(gt===-1){for(let yt=0;yt<v.length;yt++)if(yt>=w.length){w.push(ct),gt=yt;break}else if(w[yt]===null){w[yt]=ct,gt=yt;break}if(gt===-1)break}let lt=v[gt];lt&&lt.connect(ct)}}let j=new Y,J=new Y;function at(L,Z,ct){j.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(ct.matrixWorld);let gt=j.distanceTo(J),lt=Z.projectionMatrix.elements,yt=ct.projectionMatrix.elements,Mt=lt[14]/(lt[10]-1),K=lt[14]/(lt[10]+1),dt=(lt[9]+1)/lt[5],Tt=(lt[9]-1)/lt[5],St=(lt[8]-1)/lt[0],Ct=(yt[8]+1)/yt[0],kt=Mt*St,Bt=Mt*Ct,Gt=gt/(-St+Ct),jt=Gt*-St;if(Z.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(jt),L.translateZ(Gt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),lt[10]===-1)L.projectionMatrix.copy(Z.projectionMatrix),L.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let $=Mt+Gt,de=K+Gt,Vt=kt-jt,V=Bt+(gt-jt),T=dt*K/de*$,nt=Tt*K/de*$;L.projectionMatrix.makePerspective(Vt,V,T,nt,$,de),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function Et(L,Z){Z===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(Z.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let Z=L.near,ct=L.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(ct=p.depthFar)),H.near=C.near=O.near=Z,H.far=C.far=O.far=ct,(N!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,k=H.far),H.layers.mask=L.layers.mask|6,O.layers.mask=H.layers.mask&-5,C.layers.mask=H.layers.mask&-3;let gt=L.parent,lt=H.cameras;Et(H,gt);for(let yt=0;yt<lt.length;yt++)Et(lt[yt],gt);lt.length===2?at(H,O,C):H.projectionMatrix.copy(O.projectionMatrix),I===null&&L.isPerspectiveCamera&&(I={camera:L,fov:L.fov,zoom:L.zoom}),xt(L,H,gt)};function xt(L,Z,ct){ct===null?L.matrix.copy(Z.matrixWorld):(L.matrix.copy(ct.matrixWorld),L.matrix.invert(),L.matrix.multiply(Z.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(Z.projectionMatrix),L.projectionMatrixInverse.copy(Z.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=br*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(L){c=L,h!==null&&(h.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(L){return m[L]};let bt=null;function Pt(L,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){let ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let gt=!1;ct.length!==H.cameras.length&&(H.cameras.length=0,gt=!0);for(let K=0;K<ct.length;K++){let dt=ct[K],Tt=null;if(d!==null)Tt=d.getViewport(dt);else{let Ct=f.getViewSubImage(h,dt);Tt=Ct.viewport,K===0&&(t.setRenderTargetTextures(_,Ct.colorTexture,Ct.depthStencilTexture),t.setRenderTarget(_))}let St=U[K];St===void 0&&(St=new Fn,St.layers.enable(K),St.viewport=new Le,U[K]=St),St.matrix.fromArray(dt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(dt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),K===0&&(H.matrix.copy(St.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),gt===!0&&H.cameras.push(St)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let K=f.getDepthInformation(ct[0]);K&&K.isValid&&K.texture&&p.init(K,s.renderState)}if(lt&&lt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let K=0;K<ct.length;K++){let dt=ct[K].camera;if(dt){let Tt=m[dt];Tt||(Tt=new Ro,m[dt]=Tt);let St=f.getCameraImage(dt);Tt.sourceTexture=St}}}}for(let ct=0;ct<v.length;ct++){let gt=w[ct],lt=v[ct];gt!==null&&lt!==void 0&&lt.update(gt,Z,l||o)}bt&&bt(L,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let Lt=new Lp;Lt.setAnimationLoop(Pt),this.setAnimationLoop=function(L){bt=L},this.dispose=function(){}}},eM=new be,Bp=new me;Bp.set(-1,0,0,0,1,0,0,0,1);function nM(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Mh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,M,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Bn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Bn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),M=x.envMap,_=x.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iM(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let w=v.program;n.uniformBlockBinding(_,w)}function l(_,v){let w=s[_.id];w===void 0&&(p(_),w=u(_),s[_.id]=w,_.addEventListener("dispose",x));let A=v.program;n.updateUBOMapping(_,A);let b=t.render.frame;r[_.id]!==b&&(h(_),r[_.id]=b)}function u(_){let v=f();_.__bindingPointIndex=v;let w=i.createBuffer(),A=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let v=s[_.id],w=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,I=w.length;b<I;b++){let O=w[b];if(Array.isArray(O))for(let C=0,U=O.length;C<U;C++)d(O[C],b,C,A);else d(O,b,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,v,w,A){if(y(_,v,w,A)===!0){let b=_.__offset,I=_.value;if(Array.isArray(I)){let O=0;for(let C=0;C<I.length;C++){let U=I[C],H=m(U);g(U,_.__data,O),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(O+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(I,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function g(_,v,w){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,w)}function y(_,v,w,A){let b=_.value,I=v+"_"+w;if(A[I]===void 0)return typeof b=="number"||typeof b=="boolean"?A[I]=b:ArrayBuffer.isView(b)?A[I]=b.slice():A[I]=b.clone(),!0;{let O=A[I];if(typeof b=="number"||typeof b=="boolean"){if(O!==b)return A[I]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(O.equals(b)===!1)return O.copy(b),!0}}return!1}function p(_){let v=_.uniforms,w=0,A=16;for(let I=0,O=v.length;I<O;I++){let C=Array.isArray(v[I])?v[I]:[v[I]];for(let U=0,H=C.length;U<H;U++){let N=C[U],k=Array.isArray(N.value)?N.value:[N.value];for(let z=0,W=k.length;z<W;z++){let tt=k[z],j=m(tt),J=w%A,at=J%j.boundary,Et=J+at;w+=at,Et!==0&&A-Et<j.storage&&(w+=A-Et),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=j.storage}}}let b=w%A;return b>0&&(w+=A-b),_.__size=w,_.__cache={},this}function m(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",_),v}function x(_){let v=_.target;v.removeEventListener("dispose",x);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function M(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function rM(){return Ii===null&&(Ii=new Eo(sM,16,16,Ss,yi),Ii.name="DFG_LUT",Ii.minFilter=xn,Ii.magFilter=xn,Ii.wrapS=wi,Ii.wrapT=wi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var Pl=class{constructor(t={}){let{canvas:e=tp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Xn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=d,p=new Set([Zc,qc,Yc]),m=new Set([Xn,gi,Fr,Or,Vc,Wc]),x=new Uint32Array(4),M=new Int32Array(4),_=new Y,v=null,w=null,A=[],b=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,C=!1,U=null,H=null,N=null,k=null;this._outputColorSpace=en;let z=0,W=0,tt=null,j=-1,J=null,at=new Le,Et=new Le,xt=null,bt=new Yt(0),Pt=0,Lt=e.width,L=e.height,Z=1,ct=null,gt=null,lt=new Le(0,0,Lt,L),yt=new Le(0,0,Lt,L),Mt=!1,K=new Tr,dt=!1,Tt=!1,St=new be,Ct=new Y,kt=new Le,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function jt(){return tt===null?Z:1}let $=n;function de(P,et){return e.getContext(P,et)}let Vt,V,T,nt,ut,pt,G,S,E,R,F,B,q,X,st,rt,Rt,D,ot,Q,wt,At,vt;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Me,!1),$===null){let et="webgl2";if($=de(et,P),$===null)throw de(et)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(P){throw e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Me,!1),ue("WebGLRenderer: "+P.message),P}function Dt(){Vt=new f1($),Vt.init(),wt=new Kb($,Vt),V=new n1($,Vt,t,wt),T=new jb($,Vt),V.reversedDepthBuffer&&h&&T.buffers.depth.setReversed(!0),H=$.createFramebuffer(),N=$.createFramebuffer(),k=$.createFramebuffer(),nt=new m1($),ut=new Fb,pt=new Jb($,Vt,T,ut,V,wt,nt),G=new h1(O),S=new yx($),At=new t1($,S),E=new d1($,S,nt,At),R=new y1($,E,S,At,nt),D=new g1($,V,pt),st=new i1(ut),F=new Ub(O,G,Vt,V,At,st),B=new nM(O,ut),q=new Bb,X=new Wb(Vt),Rt=new Q_(O,G,T,R,g,c),rt=new $b(O,R,V),vt=new iM($,nt,V,T),ot=new e1($,Vt,nt),Q=new p1($,Vt,nt),nt.programs=F.programs,O.capabilities=V,O.extensions=Vt,O.properties=ut,O.renderLists=q,O.shadowMap=rt,O.state=T,O.info=nt}y!==Xn&&(I=new v1(y,e.width,e.height,a,s,r));let Ot=new zh(O,$);this.xr=Ot,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let P=Vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(Lt,L,!1))},this.getSize=function(P){return P.set(Lt,L)},this.setSize=function(P,et,mt=!0){if(Ot.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=P,L=et,e.width=Math.floor(P*Z),e.height=Math.floor(et*Z),mt===!0&&(e.style.width=P+"px",e.style.height=et+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,P,et)},this.getDrawingBufferSize=function(P){return P.set(Lt*Z,L*Z).floor()},this.setDrawingBufferSize=function(P,et,mt){Lt=P,L=et,Z=mt,e.width=Math.floor(P*mt),e.height=Math.floor(et*mt),this.setViewport(0,0,P,et)},this.setEffects=function(P){if(y===Xn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let et=0;et<P.length;et++)if(P[et].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(at)},this.getViewport=function(P){return P.copy(lt)},this.setViewport=function(P,et,mt,ft){P.isVector4?lt.set(P.x,P.y,P.z,P.w):lt.set(P,et,mt,ft),T.viewport(at.copy(lt).multiplyScalar(Z).round())},this.getScissor=function(P){return P.copy(yt)},this.setScissor=function(P,et,mt,ft){P.isVector4?yt.set(P.x,P.y,P.z,P.w):yt.set(P,et,mt,ft),T.scissor(Et.copy(yt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(P){T.setScissorTest(Mt=P)},this.setOpaqueSort=function(P){ct=P},this.setTransparentSort=function(P){gt=P},this.getClearColor=function(P){return P.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(P=!0,et=!0,mt=!0){let ft=0;if(P){let ht=!1;if(tt!==null){let zt=tt.texture.format;ht=p.has(zt)}if(ht){let zt=tt.texture.type,Zt=m.has(zt),Xt=Rt.getClearColor(),Qt=Rt.getClearAlpha(),ne=Xt.r,ge=Xt.g,ve=Xt.b;Zt?(x[0]=ne,x[1]=ge,x[2]=ve,x[3]=Qt,$.clearBufferuiv($.COLOR,0,x)):(M[0]=ne,M[1]=ge,M[2]=ve,M[3]=Qt,$.clearBufferiv($.COLOR,0,M))}else ft|=$.COLOR_BUFFER_BIT}et&&(ft|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),mt&&(ft|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ft!==0&&$.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),U=P},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Me,!1),Rt.dispose(),q.dispose(),X.dispose(),ut.dispose(),G.dispose(),R.dispose(),At.dispose(),vt.dispose(),F.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",_t),Ot.removeEventListener("sessionend",Ft),qt.stop()};function fe(P){P.preventDefault(),vo("WebGLRenderer: Context Lost."),C=!0}function re(){vo("WebGLRenderer: Context Restored."),C=!1;let P=nt.autoReset,et=rt.enabled,mt=rt.autoUpdate,ft=rt.needsUpdate,ht=rt.type;Dt(),nt.autoReset=P,rt.enabled=et,rt.autoUpdate=mt,rt.needsUpdate=ft,rt.type=ht}function Me(P){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function we(P){let et=P.target;et.removeEventListener("dispose",we),gn(et)}function gn(P){It(P),ut.remove(P)}function It(P){let et=ut.get(P).programs;et!==void 0&&(et.forEach(function(mt){F.releaseProgram(mt)}),P.isShaderMaterial&&F.releaseShaderCache(P))}this.renderBufferDirect=function(P,et,mt,ft,ht,zt){et===null&&(et=Bt);let Zt=ht.isMesh&&ht.matrixWorld.determinantAffine()<0,Xt=Nn(P,et,mt,ft,ht);T.setMaterial(ft,Zt);let Qt=mt.index,ne=1;if(ft.wireframe===!0){if(Qt=E.getWireframeAttribute(mt),Qt===void 0)return;ne=2}let ge=mt.drawRange,ve=mt.attributes.position,te=ge.start*ne,Ie=(ge.start+ge.count)*ne;zt!==null&&(te=Math.max(te,zt.start*ne),Ie=Math.min(Ie,(zt.start+zt.count)*ne)),Qt!==null?(te=Math.max(te,0),Ie=Math.min(Ie,Qt.count)):ve!=null&&(te=Math.max(te,0),Ie=Math.min(Ie,ve.count));let Qe=Ie-te;if(Qe<0||Qe===1/0)return;At.setup(ht,ft,Xt,mt,Qt);let Ve,Fe=ot;if(Qt!==null&&(Ve=S.get(Qt),Fe=Q,Fe.setIndex(Ve)),ht.isMesh)ft.wireframe===!0?(T.setLineWidth(ft.wireframeLinewidth*jt()),Fe.setMode($.LINES)):Fe.setMode($.TRIANGLES);else if(ht.isLine){let En=ft.linewidth;En===void 0&&(En=1),T.setLineWidth(En*jt()),ht.isLineSegments?Fe.setMode($.LINES):ht.isLineLoop?Fe.setMode($.LINE_LOOP):Fe.setMode($.LINE_STRIP)}else ht.isPoints?Fe.setMode($.POINTS):ht.isSprite&&Fe.setMode($.TRIANGLES);if(ht.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))Fe.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else{let En=ht._multiDrawStarts,Jt=ht._multiDrawCounts,Dn=ht._multiDrawCount,Se=Qt?S.get(Qt).bytesPerElement:1,ei=ut.get(ft).currentProgram.getUniforms();for(let Mi=0;Mi<Dn;Mi++)ei.setValue($,"_gl_DrawID",Mi),Fe.render(En[Mi]/Se,Jt[Mi])}else if(ht.isInstancedMesh)Fe.renderInstances(te,Qe,ht.count);else if(mt.isInstancedBufferGeometry){let En=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Jt=Math.min(mt.instanceCount,En);Fe.renderInstances(te,Qe,Jt)}else Fe.render(te,Qe)};function Ut(P,et,mt,ft){U!==null&&P.isNodeMaterial&&U.setObject(ft,P),dt===!0&&st.setState(P,mt,!1),P.transparent===!0&&P.side===sn&&P.forceSinglePass===!1?(P.side=Bn,P.needsUpdate=!0,wn(P,et,ft),P.side=vs,P.needsUpdate=!0,wn(P,et,ft),P.side=sn):wn(P,et,ft)}this.compile=function(P,et,mt=null){mt===null&&(mt=P),U!==null&&U.renderStart(P,et,mt),w=X.get(mt),w.init(et),b.push(w),mt.traverseVisible(function(ht){ht.isLight&&ht.layers.test(et.layers)&&(w.pushLight(ht),ht.castShadow&&w.pushShadow(ht))}),P!==mt&&P.traverseVisible(function(ht){ht.isLight&&ht.layers.test(et.layers)&&(w.pushLight(ht),ht.castShadow&&w.pushShadow(ht))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Tt=this.localClippingEnabled,dt=st.init(this.clippingPlanes,Tt),dt===!0&&st.setGlobalState(this.clippingPlanes,et),U!==null&&rt.render(w.state.shadowsArray,mt,et);let ft=new Set;return P.traverse(function(ht){if(!(ht.isMesh||ht.isPoints||ht.isLine||ht.isSprite))return;let zt=ht.material;if(zt)if(Array.isArray(zt))for(let Zt=0;Zt<zt.length;Zt++){let Xt=zt[Zt];Ut(Xt,mt,et,ht),ft.add(Xt)}else Ut(zt,mt,et,ht),ft.add(zt)}),w=b.pop(),U!==null&&U.renderEnd(),ft},this.compileAsync=function(P,et,mt=null){let ft=this.compile(P,et,mt);return new Promise(ht=>{function zt(){if(ft.forEach(function(Zt){let Qt=ut.get(Zt).currentProgram;(Qt===void 0||Qt.isReady())&&ft.delete(Zt)}),ft.size===0){ht(P);return}setTimeout(zt,10)}Vt.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Wt=null;function ie(P){Wt&&Wt(P)}function _t(){qt.stop()}function Ft(){qt.start()}let qt=new Lp;qt.setAnimationLoop(ie),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(P){Wt=P,Ot.setAnimationLoop(P),P===null?qt.stop():qt.start()},Ot.addEventListener("sessionstart",_t),Ot.addEventListener("sessionend",Ft),this.render=function(P,et){if(et!==void 0&&et.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(P,et);let mt=Ot.enabled===!0&&Ot.isPresenting===!0,ft=I!==null&&(tt===null||mt)&&I.begin(O,tt);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(et),et=Ot.getCamera()),P.isScene===!0&&P.onBeforeRender(O,P,et,tt),w=X.get(P,b.length),w.init(et),w.state.textureUnits=pt.getTextureUnits(),b.push(w),St.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),K.setFromProjectionMatrix(St,di,et.reversedDepth),Tt=this.localClippingEnabled,dt=st.init(this.clippingPlanes,Tt),v=q.get(P,A.length),v.init(),A.push(v),Ot.enabled===!0&&Ot.isPresenting===!0){let Zt=O.xr.getDepthSensingMesh();Zt!==null&&ce(Zt,et,-1/0,O.sortObjects)}ce(P,et,0,O.sortObjects),v.finish(),U!==null&&U.updateLights(w.state.lightsArray),O.sortObjects===!0&&v.sort(ct,gt),Gt=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Gt&&Rt.addToRenderList(v,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&st.beginShadows();let ht=w.state.shadowsArray;if(rt.render(ht,P,et),dt===!0&&st.endShadows(),(ft&&I.hasRenderPass())===!1){let Zt=v.opaque,Xt=v.transmissive;if(w.setupLights(),et.isArrayCamera){let Qt=et.cameras;if(Xt.length>0)for(let ne=0,ge=Qt.length;ne<ge;ne++){let ve=Qt[ne];ln(Zt,Xt,P,ve)}Gt&&Rt.render(P);for(let ne=0,ge=Qt.length;ne<ge;ne++){let ve=Qt[ne];Ee(v,P,ve,ve.viewport)}}else Xt.length>0&&ln(Zt,Xt,P,et),Gt&&Rt.render(P),Ee(v,P,et)}tt!==null&&W===0&&(pt.updateMultisampleRenderTarget(tt),pt.updateRenderTargetMipmap(tt)),ft&&I.end(O),P.isScene===!0&&P.onAfterRender(O,P,et),At.resetDefaultState(),j=-1,J=null,b.pop(),b.length>0?(w=b[b.length-1],pt.setTextureUnits(w.state.textureUnits),dt===!0&&st.setGlobalState(O.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,U!==null&&U.renderEnd()};function ce(P,et,mt,ft){if(P.visible===!1)return;if(P.layers.test(et.layers)){if(P.isGroup)mt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(et);else if(P.isLightProbeGrid)w.pushLightProbeGrid(P);else if(P.isLight)w.pushLight(P),P.castShadow&&w.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(K)){ft&&kt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(St);let Zt=R.update(P),Xt=P.material;Xt.visible&&v.push(P,Zt,Xt,mt,kt.z,null,et)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(K))){let Zt=R.update(P),Xt=P.material;if(ft&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),kt.copy(P.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),kt.copy(Zt.boundingSphere.center)),kt.applyMatrix4(P.matrixWorld).applyMatrix4(St)),Array.isArray(Xt)){let Qt=Zt.groups;for(let ne=0,ge=Qt.length;ne<ge;ne++){let ve=Qt[ne],te=Xt[ve.materialIndex];te&&te.visible&&v.push(P,Zt,te,mt,kt.z,ve,et)}}else Xt.visible&&v.push(P,Zt,Xt,mt,kt.z,null,et)}}let zt=P.children;for(let Zt=0,Xt=zt.length;Zt<Xt;Zt++)ce(zt[Zt],et,mt,ft)}function Ee(P,et,mt,ft){let{opaque:ht,transmissive:zt,transparent:Zt}=P;w.setupLightsView(mt),dt===!0&&st.setGlobalState(O.clippingPlanes,mt),ft&&T.viewport(at.copy(ft)),ht.length>0&&Sn(ht,et,mt),zt.length>0&&Sn(zt,et,mt),Zt.length>0&&Sn(Zt,et,mt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function ln(P,et,mt,ft){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ft.id]===void 0){let te=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ft.id]=new Vn(1,1,{generateMipmaps:!0,type:te?yi:Xn,minFilter:bs,samples:Math.max(4,V.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let zt=w.state.transmissionRenderTarget[ft.id],Zt=ft.viewport||at;zt.setSize(Zt.z*O.transmissionResolutionScale,Zt.w*O.transmissionResolutionScale);let Xt=O.getRenderTarget(),Qt=O.getActiveCubeFace(),ne=O.getActiveMipmapLevel();O.setRenderTarget(zt),O.getClearColor(bt),Pt=O.getClearAlpha(),Pt<1&&O.setClearColor(16777215,.5),O.clear(),Gt&&Rt.render(mt);let ge=O.toneMapping;O.toneMapping=mi;let ve=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),w.setupLightsView(ft),dt===!0&&st.setGlobalState(O.clippingPlanes,ft),Sn(P,mt,ft),pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ie=0,Qe=et.length;Ie<Qe;Ie++){let Ve=et[Ie],{object:Fe,geometry:En,material:Jt,group:Dn}=Ve;if(Jt.side===sn&&Fe.layers.test(ft.layers)){let Se=Jt.side;Jt.side=Bn,Jt.needsUpdate=!0,Ce(Fe,mt,ft,En,Jt,Dn),Jt.side=Se,Jt.needsUpdate=!0,te=!0}}te===!0&&(pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt))}O.setRenderTarget(Xt,Qt,ne),O.setClearColor(bt,Pt),ve!==void 0&&(ft.viewport=ve),O.toneMapping=ge}function Sn(P,et,mt){let ft=et.isScene===!0?et.overrideMaterial:null;for(let ht=0,zt=P.length;ht<zt;ht++){let Zt=P[ht],{object:Xt,geometry:Qt,group:ne}=Zt,ge=Zt.material;ge.allowOverride===!0&&ft!==null&&(ge=ft),Xt.layers.test(mt.layers)&&Ce(Xt,et,mt,Qt,ge,ne)}}function Ce(P,et,mt,ft,ht,zt){U!==null&&ht.isNodeMaterial&&U.setObject(P,ht),P.onBeforeRender(O,et,mt,ft,ht,zt),P.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ht.onBeforeRender(O,et,mt,ft,P,zt),ht.transparent===!0&&ht.side===sn&&ht.forceSinglePass===!1?(ht.side=Bn,ht.needsUpdate=!0,O.renderBufferDirect(mt,et,ft,ht,P,zt),ht.side=vs,ht.needsUpdate=!0,O.renderBufferDirect(mt,et,ft,ht,P,zt),ht.side=sn):O.renderBufferDirect(mt,et,ft,ht,P,zt),P.onAfterRender(O,et,mt,ft,ht,zt)}function wn(P,et,mt){et.isScene!==!0&&(et=Bt);let ft=ut.get(P),ht=w.state.lights,zt=w.state.shadowsArray,Zt=ht.state.version,Xt=F.getParameters(P,ht.state,zt,et,mt,w.state.lightProbeGridArray),Qt=F.getProgramCacheKey(Xt),ne=ft.programs;ft.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?et.environment:null,ft.fog=et.fog;let ge=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ft.envMap=G.get(P.envMap||ft.environment,ge),ft.envMapRotation=ft.environment!==null&&P.envMap===null?et.environmentRotation:P.envMapRotation,ne===void 0&&(P.addEventListener("dispose",we),ne=new Map,ft.programs=ne);let ve=ne.get(Qt);if(ve!==void 0){if(ft.currentProgram===ve&&ft.lightsStateVersion===Zt)return yn(P,Xt),ve}else Xt.uniforms=F.getUniforms(P),U!==null&&P.isNodeMaterial&&U.build(P,mt,Xt),P.onBeforeCompile(Xt,O),ve=F.acquireProgram(Xt,Qt),ne.set(Qt,ve),ft.uniforms=Xt.uniforms;let te=ft.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(te.clippingPlanes=st.uniform),yn(P,Xt),ft.needsLights=nn(P),ft.lightsStateVersion=Zt,ft.needsLights&&(te.ambientLightColor.value=ht.state.ambient,te.lightProbe.value=ht.state.probe,te.sunLights.value=ht.state.sun,te.sunLightShadows.value=ht.state.sunShadow,te.directionalLights.value=ht.state.directional,te.directionalLightShadows.value=ht.state.directionalShadow,te.spotLights.value=ht.state.spot,te.spotLightShadows.value=ht.state.spotShadow,te.rectAreaLights.value=ht.state.rectArea,te.ltc_1.value=ht.state.rectAreaLTC1,te.ltc_2.value=ht.state.rectAreaLTC2,te.pointLights.value=ht.state.point,te.pointLightShadows.value=ht.state.pointShadow,te.hemisphereLights.value=ht.state.hemi,te.sunShadowMatrix.value=ht.state.sunShadowMatrix,te.sunShadowCascade.value=ht.state.sunShadowCascade,te.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,te.spotLightMatrix.value=ht.state.spotLightMatrix,te.spotLightMap.value=ht.state.spotLightMap,te.pointShadowMatrix.value=ht.state.pointShadowMatrix),ft.lightProbeGrid=w.state.lightProbeGridArray.length>0,ft.currentProgram=ve,ft.uniformsList=null,ve}function Ke(P){if(P.uniformsList===null){let et=P.currentProgram.getUniforms();P.uniformsList=zr.seqWithValue(et.seq,P.uniforms)}return P.uniformsList}function yn(P,et){let mt=ut.get(P);mt.outputColorSpace=et.outputColorSpace,mt.batching=et.batching,mt.batchingColor=et.batchingColor,mt.instancing=et.instancing,mt.instancingColor=et.instancingColor,mt.instancingMorph=et.instancingMorph,mt.skinning=et.skinning,mt.morphTargets=et.morphTargets,mt.morphNormals=et.morphNormals,mt.morphColors=et.morphColors,mt.morphTargetsCount=et.morphTargetsCount,mt.numClippingPlanes=et.numClippingPlanes,mt.numIntersection=et.numClipIntersection,mt.vertexAlphas=et.vertexAlphas,mt.vertexTangents=et.vertexTangents,mt.toneMapping=et.toneMapping}function Ne(P,et){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;_.setFromMatrixPosition(et.matrixWorld);for(let mt=0,ft=P.length;mt<ft;mt++){let ht=P[mt];if(ht.texture!==null&&ht.boundingBox.containsPoint(_))return ht}return null}function Nn(P,et,mt,ft,ht){et.isScene!==!0&&(et=Bt),pt.resetTextureUnits();let zt=et.fog,Zt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial?et.environment:null,Xt=tt===null?O.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:_e.workingColorSpace,Qt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial&&!ft.envMap||ft.isMeshPhongMaterial&&!ft.envMap,ne=G.get(ft.envMap||Zt,Qt),ge=ft.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,ve=!!mt.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),te=!!mt.morphAttributes.position,Ie=!!mt.morphAttributes.normal,Qe=!!mt.morphAttributes.color,Ve=mi;ft.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ve=O.toneMapping);let Fe=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,En=Fe!==void 0?Fe.length:0,Jt=ut.get(ft),Dn=w.state.lights;if(dt===!0&&(Tt===!0||P!==J)){let ze=P===J&&ft.id===j;st.setState(ft,P,ze)}let Se=!1;ft.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Dn.state.version||Jt.outputColorSpace!==Xt||ht.isBatchedMesh&&Jt.batching===!1||!ht.isBatchedMesh&&Jt.batching===!0||ht.isBatchedMesh&&Jt.batchingColor===!0&&ht._colorsTexture===null||ht.isBatchedMesh&&Jt.batchingColor===!1&&ht._colorsTexture!==null||ht.isInstancedMesh&&Jt.instancing===!1||!ht.isInstancedMesh&&Jt.instancing===!0||ht.isSkinnedMesh&&Jt.skinning===!1||!ht.isSkinnedMesh&&Jt.skinning===!0||ht.isInstancedMesh&&Jt.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&Jt.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&Jt.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&Jt.instancingMorph===!1&&ht.morphTexture!==null||Jt.envMap!==ne||ft.fog===!0&&Jt.fog!==zt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==st.numPlanes||Jt.numIntersection!==st.numIntersection)||Jt.vertexAlphas!==ge||Jt.vertexTangents!==ve||Jt.morphTargets!==te||Jt.morphNormals!==Ie||Jt.morphColors!==Qe||Jt.toneMapping!==Ve||Jt.morphTargetsCount!==En||!!Jt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Jt.__version=ft.version);let ei=Jt.currentProgram;Se===!0&&(ei=wn(ft,et,ht),U&&ft.isNodeMaterial&&U.onUpdateProgram(ft,ei,Jt));let Mi=!1,ts=!1,Qs=!1,Ue=ei.getUniforms(),Je=Jt.uniforms;if(T.useProgram(ei.program)&&(Mi=!0,ts=!0,Qs=!0),ft.id!==j&&(j=ft.id,ts=!0),Jt.needsLights){let ze=Ne(w.state.lightProbeGridArray,ht);Jt.lightProbeGrid!==ze&&(Jt.lightProbeGrid=ze,ts=!0)}if(Mi||J!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ue.setValue($,"projectionMatrix",P.projectionMatrix),Ue.setValue($,"viewMatrix",P.matrixWorldInverse);let ns=Ue.map.cameraPosition;ns!==void 0&&ns.setValue($,Ct.setFromMatrixPosition(P.matrixWorld)),V.logarithmicDepthBuffer&&Ue.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Ue.setValue($,"isOrthographic",P.isOrthographicCamera===!0),J!==P&&(J=P,ts=!0,Qs=!0)}if(Jt.needsLights&&(Dn.state.sunShadowMap.length>0&&Ue.setValue($,"sunShadowMap",Dn.state.sunShadowMap,pt),Dn.state.directionalShadowMap.length>0&&Ue.setValue($,"directionalShadowMap",Dn.state.directionalShadowMap,pt),Dn.state.spotShadowMap.length>0&&Ue.setValue($,"spotShadowMap",Dn.state.spotShadowMap,pt),Dn.state.pointShadowMap.length>0&&Ue.setValue($,"pointShadowMap",Dn.state.pointShadowMap,pt)),ht.isSkinnedMesh){Ue.setOptional($,ht,"bindMatrix"),Ue.setOptional($,ht,"bindMatrixInverse");let ze=ht.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Ue.setValue($,"boneTexture",ze.boneTexture,pt))}ht.isBatchedMesh&&(Ue.setOptional($,ht,"batchingTexture"),Ue.setValue($,"batchingTexture",ht._matricesTexture,pt),Ue.setOptional($,ht,"batchingIdTexture"),Ue.setValue($,"batchingIdTexture",ht._indirectTexture,pt),Ue.setOptional($,ht,"batchingColorTexture"),ht._colorsTexture!==null&&Ue.setValue($,"batchingColorTexture",ht._colorsTexture,pt));let es=mt.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&D.update(ht,mt,ei),(ts||Jt.receiveShadow!==ht.receiveShadow)&&(Jt.receiveShadow=ht.receiveShadow,Ue.setValue($,"receiveShadow",ht.receiveShadow)),(ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial)&&ft.envMap===null&&et.environment!==null&&(Je.envMapIntensity.value=et.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=rM()),ts){if(Ue.setValue($,"toneMappingExposure",O.toneMappingExposure),Jt.needsLights&&qe(Je,Qs),zt&&ft.fog===!0&&B.refreshFogUniforms(Je,zt),B.refreshMaterialUniforms(Je,ft,Z,L,w.state.transmissionRenderTarget[P.id]),Jt.needsLights&&Jt.lightProbeGrid){let ze=Jt.lightProbeGrid;Je.probesSH.value=ze.texture,Je.probesMin.value.copy(ze.boundingBox.min),Je.probesMax.value.copy(ze.boundingBox.max),Je.probesResolution.value.copy(ze.resolution)}zr.upload($,Ke(Jt),Je,pt)}if(ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(zr.upload($,Ke(Jt),Je,pt),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Ue.setValue($,"center",ht.center),Ue.setValue($,"modelViewMatrix",ht.modelViewMatrix),Ue.setValue($,"normalMatrix",ht.normalMatrix),Ue.setValue($,"modelMatrix",ht.matrixWorld),ft.uniformsGroups!==void 0){let ze=ft.uniformsGroups;for(let ns=0,tr=ze.length;ns<tr;ns++){let Nf=ze[ns];vt.update(Nf,ei),vt.bind(Nf,ei)}}return ei}function qe(P,et){P.ambientLightColor.needsUpdate=et,P.lightProbe.needsUpdate=et,P.sunLights.needsUpdate=et,P.sunLightShadows.needsUpdate=et,P.directionalLights.needsUpdate=et,P.directionalLightShadows.needsUpdate=et,P.pointLights.needsUpdate=et,P.pointLightShadows.needsUpdate=et,P.spotLights.needsUpdate=et,P.spotLightShadows.needsUpdate=et,P.rectAreaLights.needsUpdate=et,P.hemisphereLights.needsUpdate=et}function nn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(P,et,mt){let ft=ut.get(P);ft.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),ut.get(P.texture).__webglTexture=et,ut.get(P.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:mt,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,et){let mt=ut.get(P);mt.__webglFramebuffer=et,mt.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(P,et=0,mt=0){tt=P,z=et,W=mt;let ft=null,ht=!1,zt=!1;if(P){let Xt=ut.get(P);if(Xt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer($.FRAMEBUFFER,Xt.__webglFramebuffer),at.copy(P.viewport),Et.copy(P.scissor),xt=P.scissorTest,T.viewport(at),T.scissor(Et),T.setScissorTest(xt),j=-1;return}else if(Xt.__webglFramebuffer===void 0)pt.setupRenderTarget(P);else if(Xt.__hasExternalTextures)pt.rebindTextures(P,ut.get(P.texture).__webglTexture,ut.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let ge=P.depthTexture;if(Xt.__boundDepthTexture!==ge){if(ge!==null&&ut.has(ge)&&(P.width!==ge.image.width||P.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(P)}}let Qt=P.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(zt=!0);let ne=ut.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ne[et])?ft=ne[et][mt]:ft=ne[et],ht=!0):P.samples>0&&pt.useMultisampledRTT(P)===!1?ft=ut.get(P).__webglMultisampledFramebuffer:Array.isArray(ne)?ft=ne[mt]:ft=ne,at.copy(P.viewport),Et.copy(P.scissor),xt=P.scissorTest}else at.copy(lt).multiplyScalar(Z).floor(),Et.copy(yt).multiplyScalar(Z).floor(),xt=Mt;if(mt!==0&&(ft=H),T.bindFramebuffer($.FRAMEBUFFER,ft)&&T.drawBuffers(P,ft),T.viewport(at),T.scissor(Et),T.setScissorTest(xt),ht){let Xt=ut.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+et,Xt.__webglTexture,mt)}else if(zt){let Xt=et;for(let Qt=0;Qt<P.textures.length;Qt++){let ne=ut.get(P.textures[Qt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,mt,Xt)}}else if(P!==null&&mt!==0){let Xt=ut.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Xt.__webglTexture,mt)}j=-1};function un(P){let et=ut.get(P);return(et.__readFormat!==P.format||et.__readType!==P.type)&&(et.__readFormat=P.format,et.__readType=P.type,et.__formatReadable=V.textureFormatReadable(P.format),et.__typeReadable=V.textureTypeReadable(P.type)),et}this.readRenderTargetPixels=function(P,et,mt,ft,ht,zt,Zt,Xt=0){if(!(P&&P.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt){T.bindFramebuffer($.FRAMEBUFFER,Qt);try{let ne=P.textures[Xt],ge=ne.format,ve=ne.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xt);let te=un(ne);if(te.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(te.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=P.width-ft&&mt>=0&&mt<=P.height-ht&&$.readPixels(et,mt,ft,ht,wt.convert(ge),wt.convert(ve),zt)}finally{let ne=tt!==null?ut.get(tt).__webglFramebuffer:null;T.bindFramebuffer($.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(P,et,mt,ft,ht,zt,Zt,Xt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt)if(et>=0&&et<=P.width-ft&&mt>=0&&mt<=P.height-ht){T.bindFramebuffer($.FRAMEBUFFER,Qt);let ne=P.textures[Xt],ge=ne.format,ve=ne.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xt);let te=un(ne);if(te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Ie),$.bufferData($.PIXEL_PACK_BUFFER,zt.byteLength,$.STREAM_READ),$.readPixels(et,mt,ft,ht,wt.convert(ge),wt.convert(ve),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let Qe=tt!==null?ut.get(tt).__webglFramebuffer:null;T.bindFramebuffer($.FRAMEBUFFER,Qe);let Ve=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await np($,Ve,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Ie),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,zt),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(Ie),$.deleteSync(Ve),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,et=null,mt=0){let ft=Math.pow(2,-mt),ht=Math.floor(P.image.width*ft),zt=Math.floor(P.image.height*ft),Zt=et!==null?et.x:0,Xt=et!==null?et.y:0;pt.setTexture2D(P,0),$.copyTexSubImage2D($.TEXTURE_2D,mt,0,0,Zt,Xt,ht,zt),T.unbindTexture()},this.copyTextureToTexture=function(P,et,mt=null,ft=null,ht=0,zt=0){let Zt,Xt,Qt,ne,ge,ve,te,Ie,Qe,Ve=P.isCompressedTexture?P.mipmaps[zt]:P.image;if(mt!==null)Zt=mt.max.x-mt.min.x,Xt=mt.max.y-mt.min.y,Qt=mt.isBox3?mt.max.z-mt.min.z:1,ne=mt.min.x,ge=mt.min.y,ve=mt.isBox3?mt.min.z:0;else{let Je=Math.pow(2,-ht);Zt=Math.floor(Ve.width*Je),Xt=Math.floor(Ve.height*Je),P.isDataArrayTexture?Qt=Ve.depth:P.isData3DTexture?Qt=Math.floor(Ve.depth*Je):Qt=1,ne=0,ge=0,ve=0}ft!==null?(te=ft.x,Ie=ft.y,Qe=ft.z):(te=0,Ie=0,Qe=0);let Fe=wt.convert(et.format),En=wt.convert(et.type),Jt;et.isData3DTexture?(pt.setTexture3D(et,0),Jt=$.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(pt.setTexture2DArray(et,0),Jt=$.TEXTURE_2D_ARRAY):(pt.setTexture2D(et,0),Jt=$.TEXTURE_2D),T.activeTexture($.TEXTURE0),T.pixelStorei($.UNPACK_FLIP_Y_WEBGL,et.flipY),T.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),T.pixelStorei($.UNPACK_ALIGNMENT,et.unpackAlignment);let Dn=T.getParameter($.UNPACK_ROW_LENGTH),Se=T.getParameter($.UNPACK_IMAGE_HEIGHT),ei=T.getParameter($.UNPACK_SKIP_PIXELS),Mi=T.getParameter($.UNPACK_SKIP_ROWS),ts=T.getParameter($.UNPACK_SKIP_IMAGES);T.pixelStorei($.UNPACK_ROW_LENGTH,Ve.width),T.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ve.height),T.pixelStorei($.UNPACK_SKIP_PIXELS,ne),T.pixelStorei($.UNPACK_SKIP_ROWS,ge),T.pixelStorei($.UNPACK_SKIP_IMAGES,ve);let Qs=P.isDataArrayTexture||P.isData3DTexture,Ue=et.isDataArrayTexture||et.isData3DTexture;if(P.isDepthTexture){let Je=ut.get(P),es=ut.get(et),ze=ut.get(Je.__renderTarget),ns=ut.get(es.__renderTarget);T.bindFramebuffer($.READ_FRAMEBUFFER,ze.__webglFramebuffer),T.bindFramebuffer($.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let tr=0;tr<Qt;tr++)Qs&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ut.get(P).__webglTexture,ht,ve+tr),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ut.get(et).__webglTexture,zt,Qe+tr)),$.blitFramebuffer(ne,ge,Zt,Xt,te,Ie,Zt,Xt,$.DEPTH_BUFFER_BIT,$.NEAREST);T.bindFramebuffer($.READ_FRAMEBUFFER,null),T.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ht!==0||P.isRenderTargetTexture||ut.has(P)){let Je=ut.get(P),es=ut.get(et);T.bindFramebuffer($.READ_FRAMEBUFFER,N),T.bindFramebuffer($.DRAW_FRAMEBUFFER,k);for(let ze=0;ze<Qt;ze++)Qs?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Je.__webglTexture,ht,ve+ze):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Je.__webglTexture,ht),Ue?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,es.__webglTexture,zt,Qe+ze):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,es.__webglTexture,zt),ht!==0?$.blitFramebuffer(ne,ge,Zt,Xt,te,Ie,Zt,Xt,$.COLOR_BUFFER_BIT,$.NEAREST):Ue?$.copyTexSubImage3D(Jt,zt,te,Ie,Qe+ze,ne,ge,Zt,Xt):$.copyTexSubImage2D(Jt,zt,te,Ie,ne,ge,Zt,Xt);T.bindFramebuffer($.READ_FRAMEBUFFER,null),T.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ue?P.isDataTexture||P.isData3DTexture?$.texSubImage3D(Jt,zt,te,Ie,Qe,Zt,Xt,Qt,Fe,En,Ve.data):et.isCompressedArrayTexture?$.compressedTexSubImage3D(Jt,zt,te,Ie,Qe,Zt,Xt,Qt,Fe,Ve.data):$.texSubImage3D(Jt,zt,te,Ie,Qe,Zt,Xt,Qt,Fe,En,Ve):P.isDataTexture?$.texSubImage2D($.TEXTURE_2D,zt,te,Ie,Zt,Xt,Fe,En,Ve.data):P.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,zt,te,Ie,Ve.width,Ve.height,Fe,Ve.data):$.texSubImage2D($.TEXTURE_2D,zt,te,Ie,Zt,Xt,Fe,En,Ve);T.pixelStorei($.UNPACK_ROW_LENGTH,Dn),T.pixelStorei($.UNPACK_IMAGE_HEIGHT,Se),T.pixelStorei($.UNPACK_SKIP_PIXELS,ei),T.pixelStorei($.UNPACK_SKIP_ROWS,Mi),T.pixelStorei($.UNPACK_SKIP_IMAGES,ts),zt===0&&et.generateMipmaps&&$.generateMipmap(Jt),T.unbindTexture()},this.initRenderTarget=function(P){ut.get(P).__webglFramebuffer===void 0&&pt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?pt.setTextureCube(P,0):P.isData3DTexture?pt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?pt.setTexture2DArray(P,0):pt.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){z=0,W=0,tt=null,T.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};(function(i){"use strict";let t=Object.freeze([Object.freeze({key:"sky",label:"Sky strip"}),Object.freeze({key:"precipitation",label:"Rain, snow and hail"}),Object.freeze({key:"wind",label:"Wind effects"}),Object.freeze({key:"reflections",label:"Sun, moon and cloud reflections"}),Object.freeze({key:"trees",label:"Trees and palms"}),Object.freeze({key:"traffic",label:"Road traffic"}),Object.freeze({key:"sidewalk",label:"Walkers and cyclists"}),Object.freeze({key:"boats",label:"Boats"}),Object.freeze({key:"beachPlay",label:"Beach play"})]),e=new Set(t.map(({key:u})=>u)),n=new Set(["left","center","right"]),s=(u,f)=>u==="dockAlignment"?n.has(f):e.has(u)&&typeof f=="boolean",r=u=>n.has(u?.dockAlignment)?u.dockAlignment:"right";function o(u){return u===void 0||!!(u&&typeof u=="object"&&!Array.isArray(u)&&Object.entries(u).every(([f,h])=>s(f,h)))}function a(u,f){return u?.[f]!==!1}function c(u,f,h){if(!s(f,h)||h===(f==="dockAlignment"?r(u):a(u,f)))return u;let d={...u};return h===(f==="dockAlignment"?"right":!0)?delete d[f]:d[f]=h,Object.keys(d).length?d:void 0}function l(u,f){return a(f,"wind")?u:{...u,windSpeed:0,windBearing:void 0}}i.RoomcraftSceneSettings=Object.freeze({features:t,valid:o,enabled:a,withFeature:c,wind:l,dockAlignment:r})})(typeof window>"u"?globalThis:window);var oa=(typeof window>"u"?globalThis:window).RoomcraftSceneSettings,kp=oa.features,cA=oa.valid,xi=oa.enabled,Dl=oa.wind,zp=oa.dockAlignment;function Yn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new he,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Hp(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][h]);let g=Hp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Hp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Te(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){let y=u.getComponent(h,g);a.setComponent(h+f,g,y)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var aa=new Y;function ai(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;aa.copy(t),aa[n]=0,aa.normalize();let l=.5*o/(o+a),u=1-aa.angleTo(i)/c;return Math.sign(aa[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Ul=class i extends Ae{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new Y,l=new Y,u=new Y(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,y=new Y,p=.5/o;for(let m=0,x=0;m<f.length;m+=3,x+=2)switch(c.fromArray(f,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[m+0]=u.x*Math.sign(c.x)+l.x*r,f[m+1]=u.y*Math.sign(c.y)+l.y*r,f[m+2]=u.z*Math.sign(c.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/g)){case 0:y.set(1,0,0),d[x+0]=ai(y,l,"z","y",r,n),d[x+1]=1-ai(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),d[x+0]=1-ai(y,l,"z","y",r,n),d[x+1]=1-ai(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),d[x+0]=1-ai(y,l,"x","z",r,t),d[x+1]=ai(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),d[x+0]=1-ai(y,l,"x","z",r,t),d[x+1]=1-ai(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),d[x+0]=1-ai(y,l,"x","y",r,t),d[x+1]=1-ai(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),d[x+0]=ai(y,l,"x","y",r,t),d[x+1]=1-ai(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Gp=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),oM=Math.PI*2;function aM(){let i=new se,t=new Ae(1,1,1),e=new Re(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new Ye({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,f,h,d,g,y){let p=new le(c,typeof l=="string"?s(l):l);return p.position.set(u,f,h),p.scale.set(d,g,y),a.add(p),p}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let f=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),h=new le(Yn(f),l);h.castShadow=u.some(d=>d.castShadow),f.forEach(d=>d.dispose()),i.remove(...u),i.add(h)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function cM({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new Be({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:sn});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let d of[-1,1])t(i,s?"#deb181":"#aa785d",d*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",d*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let f=(a+c)/2,h=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(i,o,d,c,0,l,1.8,n),t(i,u,d,f,0,l*.17,h,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,d,f,g,l,h,l)}for(let d of[-n/2+l/2,n/2-l/2])t(i,o,0,c,d,e-l*2,1.8,l),t(i,u,0,f,d,e-l*2,h,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function lM({box:i,oval:t,root:e},n,s,r){let o=new se;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new se;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function uM(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new Be({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),f=new Be({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let y=(g*7%19/19-.5)*t*.83,p=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],y,n+3,p,r*(1+g%4*.34),.85,r*1.15)}for(let[g,y]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let m=p-1.5,x=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],g*t+m*r,n+3+(2+p*1.6)*Math.min(1.15,r),y*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);x.rotation.z=m*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((g,y)=>lM(i,y,r*(1.72-y*.17),g)),d=Array.from({length:5},(g,y)=>{let p=r*(.45+y%3*.18),m=c(o,f,0,0,0,p,p,p);return m.name="bubble-"+y,m});return g=>{for(let[y,{fish:p,tail:m}]of h.entries()){let x=g*(.43+y*.06)+y*2.07+.5,M=t*(.24+y*.036),_=e*(.17+y*.038);p.position.set(Math.cos(x)*M,n+10+y*3.65+Math.sin(x*1.7)*2.15,Math.sin(x)*_),p.rotation.y=-Math.atan2(Math.cos(x)*_,-Math.sin(x)*M),m.rotation.y=Math.sin(g*8.6+y)*.39}for(let[y,p]of d.entries()){let m=(g*.3+y/d.length)%1;p.position.set(t*.33+Math.sin(m*oM+y)*r,n+5+m*20,e*.23),p.visible=m>.08&&m<.94}}}function hM({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let h=0;h<16;h++)e(i,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*n*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let d=e(i,h%2?"#829468":"#a7ad78",-n*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(i,"#746462",(h/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new se;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,d)=>{let g=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),f=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let g=new se;g.position.set(d*a*2.1,-.7*a,h*a*1.42),l.add(g);let y=e(g,"#d29861",-.48*d*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);y.rotation.y=h*d*.28;for(let p of[-1,0,1])e(g,"#ecc297",(p*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);f.push({leg:g,side:h,front:d})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let d=h*.35+.7,g=Math.cos(d)*n*.13,y=Math.sin(d)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(h*3.6)*.25,y),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*n*.13);for(let[p,m]of u.entries()){let x=p+1;m.position.set(-(3.55+x*1.24)*a,-.19*x*a,Math.sin(h*1.75-x*.55)*x*a*.32)}for(let{leg:p,side:m,front:x}of f)p.rotation.y=Math.sin(h*3.6)*m*x*.31}}function Vp(i,t,e){if(!Object.hasOwn(Gp,i))return null;let n=Gp[i],s=aM(),r=n==="aquarium",{base:o,top:a}=cM(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?uM(s,t,e,o,a,c):hM(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,f){l(Math.max(0,f))}}}var Wp=`
  varying vec2 panelUv;
  void main() {
    panelUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,fM=`
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    vec2 uv = panelUv;
    float time = screenTime;
    vec3 sky = mix(vec3(0.95, 0.36, 0.32), vec3(0.20, 0.42, 0.73), smoothstep(0.37, 1.0, uv.y));
    vec2 sunCenter = vec2(0.65 + sin(time * 0.17) * 0.10, 0.68 + sin(time * 0.21) * 0.035);
    float sun = 1.0 - smoothstep(0.083, 0.108, length((uv - sunCenter) * vec2(1.62, 1.0)));
    vec3 art = mix(sky, vec3(0.99, 0.80, 0.38), sun);
    float ridge = 0.37 + 0.11 * (1.0 - abs(sin(uv.x * 8.0 + time * 0.20)))
      + 0.15 * (1.0 - abs(sin(uv.x * 15.0 - time * 0.14)));
    art = mix(art, vec3(0.23, 0.29, 0.50), 1.0 - smoothstep(ridge, ridge + 0.018, uv.y));
    float ripple = smoothstep(0.67, 0.97, sin(uv.y * 125.0 + uv.x * 20.0 - time * 2.8));
    vec3 water = mix(vec3(0.09, 0.39, 0.56), vec3(0.28, 0.76, 0.81), uv.y * 1.5);
    water = mix(water, vec3(0.68, 0.88, 0.85), ripple * 0.37);
    art = mix(water, art, smoothstep(0.30, 0.33, uv.y));
    float edge = 1.0 - smoothstep(0.45, 0.69, length(uv - 0.5));
    gl_FragColor = vec4(art * (0.58 + 0.42 * edge), 1.0);
    #include <colorspace_fragment>
  }
`,dM=`
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    float along = smoothstep(0.0, 0.22, panelUv.y) * (1.0 - smoothstep(0.78, 1.0, panelUv.y));
    float across = smoothstep(0.0, 0.84, panelUv.x) * (1.0 - smoothstep(0.92, 1.0, panelUv.x));
    float shimmer = 0.74 + 0.26 * sin(panelUv.y * 8.0 - screenTime * 0.7);
    vec3 tint = mix(vec3(0.20, 0.71, 0.81), vec3(0.66, 0.42, 0.78), shimmer * 0.65);
    gl_FragColor = vec4(tint, along * across * (0.32 + 0.17 * shimmer));
    #include <colorspace_fragment>
  }
`;function Xp(i,t,e){let n={value:0},s=new le(new Cn(e*.78,43),new He({uniforms:{screenTime:n},vertexShader:Wp,fragmentShader:fM}));s.name="storybook-tv-screen",s.position.set(-t*.155-.84,59,0),s.rotation.y=-Math.PI/2;let r=new le(new Cn(t*.27,e*.79),new He({uniforms:{screenTime:n},vertexShader:Wp,fragmentShader:dM,transparent:!0,depthWrite:!1,blending:Yi}));return r.name="storybook-tv-spill",r.position.set(-t*.325,28.08,0),r.rotation.x=-Math.PI/2,s.visible=r.visible=!1,i.root.add(s,r),i.animate=(o,a)=>{let c=o?.active===!0;s.visible=r.visible=c,c&&(n.value=Number.isFinite(a)?Math.max(0,Math.floor(a*12)/12):0)},i}var it=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),pM=Object.freeze({sage:it.sage,mint:it.aqua,sky:it.blue,peach:it.peach,coral:"#cf8979",lavender:it.lilac,butter:it.honey,cream:it.linen,white:it.cream,oak:it.oakLight,walnut:it.walnut,charcoal:"#505b68",brass:it.brass,terracotta:"#b97d63",forest:it.moss,blush:it.blush,teddy:"#aa8063",slate:"#9b9b9d"}),mM=new Set([it.oak,it.oakLight,it.walnut]),gM=new Set([it.sage,it.moss,it.linen,it.lilac,it.lilacLight,it.blush,it.peach,it.oatmeal,it.upholsteryShadow,it.denim]);function yM(i,t){let e=mM.has(i)?1:gM.has(i)?2:0,n=i===it.glass||i===it.darkGlass||i===it.blueWater,s=i===it.brass,r=i===it.steel||i===it.basinSteel,o=new Ye({color:i,roughness:s||r?.37:n?.33:i===it.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var Hh=class{constructor(t,e){this.root=new se,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,yM(e,this.grainDirection));let a=new le(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),f=u>.2?new Ul(s,r,o,2,u):new Ae(s,r,o);return this.part(f,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new je(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new Re(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new In(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Nt(l,u)),c=new Bo(a,24);return c.scale(s,r,o),this.part(c,it.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Yn(s);s.length>1&&s.forEach(a=>a.dispose());let o=new le(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Pi(i,t,e,n,s,r,o=it.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function ca(i,t,e,n,s,r,o,a){let c=o===it.linen?it.binding:it.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function xM(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?it.upholsteryShadow:it.moss,u=a?it.oatmeal:it.sage,f=o?t*.5:t,h=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,y=Math.min(t,e)*.1;if(Pi(i,d,g,f,h,5),i.box(d,5,g,f*.97,22,h*.98,l,8),r){let v=o?t*.52:t*.34,w=o?e*.38:e*.46,A=o?t*.22:-t*.32,b=o?c*e*.3:e*.25;Pi(i,A,b,v,w,5),i.box(A,5,b,v,22,w,l,8),i.box(A,25,b,v*.96,12,w*.9,n,5),o&&i.box(A,29,c*e*.464,v,26,y,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let v=e*.88/p;for(let w=0;w<p;w++){let A=-e*.44+v*(w+.5);i.box(d+y*.18,25,A,f*.76,12,v-3,n,5),i.box(d-f*.39,27,A,f*.22,31,v-1,u,8)}i.box(d,29,-c*e*.445,f*.88,20,y,u,6),ca(i,d+f*.13,35,-e*.31,f*.42,v*.49,a?it.sage:it.peach,-.18),ca(i,d+f*.12,35,e*.28,f*.4,v*.45,it.linen,.2)}else{let v=t*.8/p;for(let w=0;w<p;w++){let A=-t*.4+v*(w+.5);i.box(A,25,g+h*.08,v-3,12,h*.7,n,6),i.box(A,27,g-h*.39,v-1,31,h*.24,u,7)}for(let w of[-t*.442,t*.442])i.box(w,26,g,y,22,h*.89,u,6);ca(i,-t*.27,35,g-h*.15,t*.18,h*.34,it.peach,-.18),ca(i,t*.27,35,g-h*.12,t*.17,h*.33,it.linen,.2)}let m=o?f*.67:f*.19,x=o?e*.14:h*.58,M=o?d+f*.06:f*.32,_=o?e*.13:g+h*.1;i.box(M,37.1,_,m,1.7,x,it.lilacLight,.65);for(let v of[-1,1])i.box(M,38.82,_+v*x*.36,m*.9,.25,1.2,it.lilac);return 58}function vi(i,t,e,n,s,r,o,a=!1){let c=a?19:28;Pi(i,t,e,n,s,c,it.walnut),i.box(t,c,e,n*.9,7,s*.92,it.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,f=e-Math.cos(r)*s*.39;i.box(u,c+9,f,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function vM(i,t,e,n){let s=-e*.39;Pi(i,0,0,t,e,20,it.walnut),i.box(0,20,0,t*.9,6,e*.92,it.walnut,2),i.box(0,24,0,t*.83,6,e*.83,n,2.5);for(let r of[-1,1])i.box(t*.34*r,23,s,t*.075,18,e*.12,it.walnut,1.1);return i.box(0,37,s,t*.84,22,e*.22,n,4),59}function Fl(i,t,e,n,s){return s==="round"?(i.disc(0,0,0,t*(.13/.58),5,e*(.13/.58),it.walnut),i.disc(0,4,0,t*(.045/.58),31,e*(.045/.58),it.walnut,1.5),i.disc(0,33,0,t/2,8,e/2,n,.96),41):s==="classic"?(Pi(i,0,0,t*(.69/.79),e*(.49/.57),35),i.box(0,32,0,t*(.72/.79),6,e*(.5/.57),it.walnut,3),i.box(0,37,0,t,8,e,n,4),i.box(0,45,0,t*(.69/.79),1.4,e*(.14/.57),it.linen,.6),46.4):(Pi(i,0,0,t*(.69/.79),e*(.47/.56),34),i.box(0,33,0,t,8,e,n,3),i.box(0,41.1,0,t*(.55/.79),1.2,e*(.15/.56),it.linen,.5),42.3)}function _M(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return vi(i,0,-e*.39,t*.2,e*.23,0,it.denim),vi(i,0,e*.39,t*.2,e*.23,Math.PI,it.denim),vi(i,-t*.415,0,t*.17,e*.27,Math.PI/2,it.denim),vi(i,t*.415,0,t*.17,e*.27,-Math.PI/2,it.denim),Fl(i,t*.79,e*.57,it.oak,"classic");if(r)vi(i,0,-e*.37,t*.2,e*.2,0,it.sage),vi(i,0,e*.37,t*.2,e*.2,Math.PI,it.blush),vi(i,-t*.38,0,t*.2,e*.2,Math.PI/2,it.lilac),vi(i,t*.38,0,t*.2,e*.2,-Math.PI/2,it.honey),Fl(i,t*.58,e*.58,n,"round");else{let c=a?[-.28,.28]:[-.32,0,.32],l=[it.sage,it.blush,it.lilac,it.honey];for(let u=0;u<c.length;u++)for(let f of[-1,1])vi(i,t*c[u],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(u+(f<0?0:2))%l.length]);Fl(i,t*.79,e*.56,n,"styled")}return 42}function bM(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,it.ink,.5),i.box(t,e+1,n,s*.1,14,4,it.ink,1),i.box(t,e+12,n,s,25,6,it.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,it.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,it.blue,.2)}function MM(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,f=s?r/2:0;s&&i.box(l,37,f+.8,a,7,u-1.6,n,2.4),i.box(l,4,f,a*.81,34,u*.81,it.walnut,2.8);for(let h=0;h<3;h++){let d=6+h*9.7;i.box(l,d,f+u*.41,a*.74,8.4,2,it.oak,.7),i.box(l,d+3,f+u*.43,a*.26,2,2,it.brass,.5)}}return bM(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,it.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,it.peach),81}function Yp(i,t,e,n,s,r){let o=new Jn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,f=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new hs(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function SM(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Pi(i,0,0,t,e,6,it.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,it.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,it.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,it.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,it.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)ca(i,d,u+22,-e*.275,t*(f.length===2?.34:.49),e*.2,it.linen,d<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[d,g,y,p]of[[-.24,.12,1,it.cream],[.23,.27,.79,it.honey],[.08,.04,.57,it.cream],[-.1,.34,.62,it.honey]])Yp(i,t*d,u+30.8,e*g,h*y,p);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,u+30.71,e*.24,.85,.24,e*.33,it.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,u+30.72,e*d,t*.71,.24,.9,it.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,it.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let f of[-1,1])i.box(t*.45*u,4,e*.46*f,5,l,6,it.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let f=-3;f<=3;f++)i.box(t*.45*u,l-29,e*f*.105,3,20,3,n,.8)}return l}function wM(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Pi(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,it.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,it.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let f=0;f<l;f++){let h=t*.89/l,d=(a-8)/c,g=h*(f-(l-1)/2),y=5+u*d;i.box(g,y,e*.46,h-2,d-1.5,2.9,n,1),i.oval(g,y+d*.45,e*.51,2.2,1.7,2.2,it.brass)}return a+2}function EM(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,it.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,it.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,it.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?it.lilac:it.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,it.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?it.lilacLight:it.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,it.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,it.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,it.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Yp(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,it.cream);return 5}function TM(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])i.box(h*(t+s)/4,n-5,0,l,5,e,it.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,it.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,it.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,it.basinSteel);for(let h of[-1,1])i.box(h*s/2,n-4.5,o,u,5.25,r+u,it.steel,.4),i.box(0,n-4.5,o+h*r/2,s,5.25,u,it.steel,.4),i.disc(0,n-4.1,o+h*r/4,u,.6,u,it.darkGlass);i.box(0,n-4.5,o,s,4.85,u,it.steel,.4);let f=-s/2-u*1.15;i.disc(f,n,o,u*.8,u*2.9,u*.8,it.steel),i.box(f+u,n+u*2.5,o,u*2.8,u*.7,u,it.steel,.6)}function AM(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?it.sage:it.walnut,2.3),s?TM(i,t,e,r+2):i.box(0,r-3,0,t,5,e,it.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let f=c?2.2:t*.29,h=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(d,6,g,f,r*.67,h,a?it.moss:it.oak,.8),i.box(d,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,it.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,it.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let f=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,f,f,1,it.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,it.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,it.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,it.brass,1);return r+3}function RM(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,it.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,it.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,it.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,it.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,it.glass),i.disc(0,22,-e*.44,3.5,9,3.5,it.brass),i.box(0,30,-e*.4,5,3.7,e*.1,it.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,it.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,it.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,it.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,it.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,it.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,it.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,it.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,it.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,it.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,it.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,it.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,it.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,it.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,it.blush,1.7),36)}function CM(i,t,e,n,s){let r=n?it.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,it.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,it.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,it.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,it.linen,3.8),c+o*(n?.37:.28)}function IM(i,t,e){let s=[it.sage,it.peach,it.honey,it.lilac,it.blue,it.blush];Pi(i,0,0,t*.96,e*.96,22,it.sage),i.box(0,20,0,t*.94,7,e*.93,it.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function PM(i,t,e,n){let s=[it.linen,n,it.sand,it.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function LM(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,it.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,it.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,f=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,it.moss);f.rotation.z=-c/u,f.rotation.x=l/u;let h=n?it.sage:[it.blush,it.linen,it.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,h)}return s*(n?.82:.65)}function qp(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return Vp(t,e,n);let s=pM[t.split("-").at(-1)],r=new Hh(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=xM(r,e,n,s||(t==="sofa"?it.linen:it.sage),t);else{if(t==="tv")return r.box(0,2,0,e*.94,23,n*.98,it.walnut,3.5),r.box(0,24,0,e,4,n,it.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,it.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,it.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,it.darkGlass,.6),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,it.honey),Xp(r.finish(85),e,n);if(t==="table"||t.includes("dining-set"))o=_M(r,e,n,s||it.oakLight,t);else if(t==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(t)){let a=t==="diningTable"?"classic":t.includes("round-dining")?"round":"styled";o=Fl(r,e,n,s||(a==="classic"?it.oak:it.oakLight),a)}else if(t==="diningChair"||t.startsWith("living-dining-chair-"))o=vM(r,e,n,s||it.denim);else if(t==="desk"||t.includes("-desk-"))o=MM(r,e,n,s||it.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))vi(r,0,0,e,n,0,s||it.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){vi(r,0,0,e,n,0,s||it.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,it.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=SM(r,e,n,s||it.lilac,t);else if(t==="rug")o=EM(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=AM(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=RM(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=LM(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,it.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,it.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,it.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=wM(r,e,n,s||it.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Pi(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||it.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,it.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=CM(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=PM(r,e,n,s||it.sage);else if(t.startsWith("baby-activities-"))o=IM(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||it.peach),r.ring(0,a,0,a*.95,a*.95,1.2,it.linen),o=a*2}else return null}return r.finish(o)}var Kt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},ua=Math.PI,Gh=2*ua,NM=new Set(["unknown","unavailable"]),ci=(i,t,e)=>Math.max(t,Math.min(e,i)),la=(i,t)=>Number.isFinite(i)?ci(i,12,480):t,jp=.96,Jp=.09;function Kp(i,t,e){let n=la(i.w,42),s=la(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*Jp)<=s*jp/2}var xe=(i,t={})=>new Ye({color:i,roughness:.83,...t}),Vh=i=>String(i?.state??"unknown"),Ys=i=>!NM.has(Vh(i)),Vr=i=>Ys(i)&&(i.active===!0||i.state==="on"),DM=i=>Vr(i)?Number.isFinite(i.attributes?.brightness)?ci(i.attributes.brightness/255,0,1):1:0;function $i(i,t,e,n=0,s=0,r=0){let o=new le(t,e);return o.position.set(n,s,r),i.add(o),o}function mn(i,t,e,n,s,r=0,o=0,a=0){return $i(i,new Ae(t,e,n),s,r,o,a)}function Ln(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,f=l-e/2,h=new Jn;h.moveTo(u,f),h.lineTo(-u,f),h.lineTo(-u,-f),h.lineTo(u,-f),h.closePath();let d=new Xi(h,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-n/2),$i(i,d,s,r,o,a)}function an(i,t,e,n,s,r=0,o=0,a=0,c=16){return $i(i,new je(t,e,n,c),s,r,o,a)}function _i(i,t,e,n,s,r){return $i(i,new Re(t,10,7),e,n,s,r)}function Gr(i,t=0,e=0,n=0){let s=new se;return s.position.set(t,e,n),i.add(s),s}function UM(i,t,e=2.8){let n=new He({transparent:!0,depthWrite:!1,blending:Yi,uniforms:{strength:{value:0},tint:{value:new Yt(Kt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=$i(i,new Cn(2*t,2*t),n,0,e,0);return s.rotation.x=-ua/2,s.visible=!1,(r,o)=>{s.visible=r>0,n.uniforms.strength.value=r*.29,n.uniforms.tint.value.copy(o)}}function FM(i,t,e){let n=new se,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),f=Math.min(t,e),h=xe(Kt.honey),d=xe(Kt.ink),g=xe(Kt.brass,{roughness:.36,metalness:.42}),y=xe(Kt.cream,{emissive:Kt.warm,emissiveIntensity:0}),p=new Yt(Kt.warm),m=u?46:o?50:a?56:l?40:c?56:36,x=!a&&!c&&!l,M=x?ci(f*.68,15,46):ci(f*(a?1.72:1.35),38,110),_=UM(n,M,x?16.8:2.8);if(a){let v=f*(u?.19:.29);an(n,v,v*1.02,3,d,0,m+2),o&&an(n,1.7,1.7,13,h,0,m+9),an(n,v*.82,v,5,h,0,m-1.5),an(n,v*.92,v*.96,1.15,g,0,m+1.1);let w=_i(n,v*.83,y,0,m,0);w.scale.y=o?.88:.52}else if(l)Ln(n,f*.34,18,4,d,0,35,-4),an(n,f*.12,f*.11,14,h,0,37,3),_i(n,f*.21,y,0,m+3,3);else{let v=m-7,w=c?3:16,A=f*(c?.25:.3);if(an(n,A*.57,A*.67,4,d,0,w),an(n,2,2.9,v-w,h,0,(w+v)/2),c)_i(n,A*.81,y,0,m,0);else{let b=r==="bud_lamp"?12:9;an(n,A*.56,A,14,y,0,m,0,b),an(n,A,A*.99,1.2,g,0,m-6.7,0,b),an(n,A*.55,A*.58,1.1,g,0,m+7.1,0,b)}}return{root:n,anchorY:m+2,animate(v){let w=DM(v),A=v?.attributes?.rgb_color;if(Array.isArray(A)&&A.length===3&&A.every(Number.isFinite)){let[b,I,O]=A.map(C=>ci(C/255,0,1));p.setRGB(b,I,O,en)}else p.setHex(Kt.warm);_(w,p),y.emissiveIntensity=w*.88,y.emissive.copy(p),w>0?y.color.copy(p):y.color.setHex(Kt.cream)}}}function OM(i){let t=new Jn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Xi(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-ua/2)}function Zp(i,t,e,n){let s=new se,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=Gr(s,0,o,0);n&&(a.rotation.x=ua/2);let c=Gr(a,0,-1,0),l=xe(Kt.cream),u=xe(Kt.ink),f=/(?:white|cream)$/.test(i.type)?Kt.oat:/(?:forest|sage)$/.test(i.type)?Kt.sage:Kt.honey,h=xe(f),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;an(a,r*.18,r*.2,6,u),an(a,r*.174,r*.176,1.4,xe(Kt.brass,{roughness:.36,metalness:.42}),0,3.4),an(a,r*.15,r*.17,2.6,l,0,4.9);let g=OM(r);for(let y=0;y<d;y++){let p=Gr(c);p.rotation.y=y/d*Gh,$i(p,g,h)}if(n){Ln(s,r*1.66,6,r*1.02,u,0,3),mn(s,r*.3,11,6,l,0,10);let y=$i(s,new In(r,2.6,6,24),l,0,o,3);y.rotation.z=.04;for(let p=-1;p<=1;p++){let m=p*r*.5;an(s,.68,.68,2*Math.sqrt(r*r-m*m),u,m,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(y,p=0){let m=Number.isFinite(y?.attributes?.percentage)?ci(y.attributes.percentage/100,.12,1):.64;c.rotation.y=Vr(y)?p*Gh*m%Gh:0}}}function BM(i,t){let e=new se,n=t.mountY??39,s=Gr(e,0,n),r=ci(i*.72,17,27);Ln(s,r,31,5,xe(Kt.ink),0,0,-.5),Ln(s,r-1.9,29,4.4,xe(Kt.cream),0,.3,1);let o=xe(Kt.oat,{emissive:Kt.warm,emissiveIntensity:0}),a=Ln(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let f=xe(Kt.teal,{emissive:Kt.mint,emissiveIntensity:0});return _i(s,1.85,f,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=Ys(l)?Vr(l)?-.16:.16:0,o.emissiveIntensity=Vr(l)?.42:0;let f=l?.presence==="on";for(let h=0;h<c.length;h++){let d=f?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(f?Kt.mint:Kt.teal),c[h].material.emissiveIntensity=f?.75+d*1.9:0,c[h].scale.setScalar(f?1+d*.18:1)}}}}function $p(i,t,e,n=31){let s=new se,r=36.5,o=Math.max(12,i-6),a=xe(Kt.oat);if(t){let h=xe(Kt.glass,{roughness:.32});mn(s,o,n,3.2,h,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])mn(s,3.2,n+2,7.5,a,g,r);let d=r+n/2;mn(s,o,1.8,7,h,0,d+.35);for(let g of[-4.25,4.25])mn(s,o+2,3.2,1.5,a,0,d,g);mn(s,o+3,3.8,11,a,0,r-n/2,1.4),mn(s,o,1.35,.5,xe(Kt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=xe(Kt.cream),l=r+n/2-1;Ln(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,d)=>mn(s,o-5,n/8-.45,3,c,0,l-d*(n/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(h,d,g,y=!1){let p=Wh(h),m=p===null?y?0:f:1-p;y||(f=m);let x=Number.isFinite(h?.attributes?.current_tilt_position)?ci(h.attributes.current_tilt_position/100,0,1):0;for(let M=0;M<u.length;M++){let _=ci(m*u.length-M,0,1);u[M].visible=_>.02,u[M].scale.y=_,u[M].rotation.x=x*.9}}}}function Wh(i){return Ys(i)?Number.isFinite(i.attributes?.current_position)?ci(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function kM(i,t){let e=new se,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=xe(Kt.oat),l=xe(Kt.cream),u=xe(Kt.plum),f=[xe(Kt.tile),xe(Kt.paleTile)],h=xe(Kt.dark);mn(e,i,5,t*jp,l,0,2.5,t*Jp),mn(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let C of[-i*.42,i*.42])mn(e,i*.09,o+4,n,c,C,(o+4)/2),Ln(e,i*.1,o+4,5,l,C,(o+4)/2,r+1,1.5);let d=new Jn;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let g=new Xi(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),$i(e,g,u,0,o+4);let y=i*.49,p=Math.atan2(a,y),m=Math.hypot(a,y),x=(n+11)/8,M=[[],[]];for(let C of[-1,1])for(let U=0;U<8;U++){let H=-r-5.5+(U+.5)*x,N=new Ae(m*.97,2.2,x-.62);N.rotateZ(-C*p),N.translate(C*y*.5,o+5.65+a*.5,H),M[U%2].push(N)}M.forEach((C,U)=>{$i(e,Yn(C),f[U]),C.forEach(H=>H.dispose())}),Ln(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),mn(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),mn(e,s,o,1.5,h,0,o/2+4,r-4);for(let C of e.children)C.isMesh&&(C.castShadow=!0);let _=xe(Kt.mint),v=xe(Kt.sage),A=(o-3)/6,b=Array.from({length:6},(C,U)=>{let H=Gr(e,0,o-(U+.5)*A+2,r+.5);return Ln(H,s-2,A-.7,3.4,_,0,0,0,1.2),mn(H,s*.91,.68,.7,v,0,A*.23,1.8),U===5&&Ln(H,s*.13,2,2.2,l,0,0,2.3,.55),H}),I=xe(Kt.gold,{emissive:Kt.ember,emissiveIntensity:0});_i(e,3.7,I,i*.422,o*.73,r+4.5);let O=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(C,U=0,H,N=!1){let z=Wh(C)??(N?0:O);N||(O=z),_.color.setHex(Ys(C)?Kt.mint:Kt.muted),v.color.setHex(Ys(C)?Kt.sage:Kt.muted);let W=(1-z)*b.length;b.forEach((j,J)=>{let at=ci(W-J,0,1);j.visible=at>.02,j.scale.y=at,j.position.y=o-(J+at/2)*A+2});let tt=["opening","closing"].includes(Vh(C));I.emissiveIntensity=tt?.55+(.5+.5*Math.cos(U*6)):0}}}function zM(i){let t=new se,e=46,n=xe(Kt.cream),s=xe(Kt.honey),r=Math.min(i*.86,88),o=Gr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])mn(t,3.4,e,5,n,c,e/2);mn(t,r+4,3,5,n,0,e),Ln(o,r-2,e-4,4,s,r/2,e/2,0,2),_i(o,2.2,xe(Kt.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,f=!1){let d=Wh(c)??(f?0:a);f||(a=d),o.rotation.y=-1.32*d,s.color.setHex(Ys(c)?Kt.honey:Kt.muted)}}}function HM(i,t,e){let n=new se,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=ci(t*.85,23,126),a=xe(Kt.dark,{emissive:Kt.mint,emissiveIntensity:0});if(Ln(n,o,s?25:18,8,xe(Kt.cream),0,r,0),s){Ln(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])_i(n,1.35,xe(Kt.oat),o*c,r-7,4.3)}else mn(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",f=Ys(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Kt.warm:Kt.glass),a.emissiveIntensity=f?1.15:Vr(c)?.25:0}}}function GM(i,t,e){let n=new se,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=xe(Kt.cream),c=xe(r?Kt.glass:Kt.sage),l=xe(Kt.teal,{emissive:Kt.mint,emissiveIntensity:0}),u=o-1;if(an(n,s*.46,s*.5,4,xe(Kt.ink),0,2),r){let d=_i(n,s/2,c,0,13,0);d.scale.y=22/s,an(n,s*.19,s*.22,3.5,a,0,u)}else{Ln(n,s,24,s*.82,c,0,15,0,5),Ln(n,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)mn(n,s*.66,1.2,1.1,l,0,u+2,d*3.5)}_i(n,1.6,l,s*.18,u-2,s*.31);let f=xe(Kt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(d,g)=>_i(n,2.1+g*.6,f,0,u+3,0));return{root:n,anchorY:u,animate(d,g=0){let y=Vr(d);l.emissiveIntensity=y?1.6:0;for(let p=0;p<h.length;p++){h[p].visible=y;let m=(g*.68+p/h.length)%1;h[p].position.set(Math.sin(m*ua)*3.1,u+4+m*14,0),h[p].scale.setScalar(.7+m*.62)}}}}function VM(i,t){let e=new se,n=Math.min(i,t)*.42,s=.72;e.scale.setScalar(s);let r=xe(Kt.sage,{emissive:Kt.mint,emissiveIntensity:0}),o=xe(Kt.ink);an(e,n,n*.95,7,o,0,4.6),an(e,n*.96,n,5.5,xe(Kt.cream),0,10.2),an(e,n*.28,n*.33,4,xe(Kt.oat),0,14,-n*.23);for(let c of[-.27,.27])_i(e,n*.105,o,n*c,10,n*.88);let a=Ln(e,n*.68,1.2,2.5,r,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03*s,animate(c,l=0,u=!1){let f=["cleaning","returning"].includes(Vh(c));a.material.emissiveIntensity=f?u?.6+.5*Math.cos(l*6):.3:0}}}function Qp(i,t={}){let e=la(i.w,42),n=la(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?BM(e,t):s==="garageDoor"?kM(e,n):s==="door"||r==="door"?zM(e):s==="window"?$p(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?$p(la(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?HM(i,e,t):s==="airPurifier"||s==="humidifier"?GM(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?VM(e,n):s==="windowFan"?Zp(i,e,n,!0):r==="fan"||/^fans-/.test(s)?Zp(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?FM(i,e,n):null}var rm=wa(ha(),1),{difference:om,union:am}=rm.default,kl=18,Qn=.001,Li=(i,t)=>i[0]*t[0]+i[1]*t[1],qs=(i,t)=>i[0]*t[1]-i[1]*t[0],Ni=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ge=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],Hl=([i,t])=>[-t,i],tm=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Ol=i=>i.map(({x:t,y:e})=>[t,e]),ji=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],cm=i=>i.length?am(...i):[];function zl(i,t,e,n=0){let s=Ni(t,i),r=Math.hypot(...s);if(r<Qn)return null;let o=s.map(u=>u/r),a=Hl(o),c=Ge(i,o,-n),l=Ge(t,o,n);return ji([Ge(c,a,e),Ge(l,a,e),Ge(l,a,-e),Ge(c,a,-e)])}function Bl(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function em(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=Ni(n,t),r=Math.hypot(...s);return r>Qn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function WM(i,t,e,n){if(Math.abs(Li(i.tangent,t.tangent))<.9999)return null;let s=Hl(i.tangent),[r,o]=[t.start,t.end].map(y=>Ni(y,i.start)),a=Li(r,s);if(Math.abs(a)<.1||Math.abs(a)>kl||Math.abs(a-Li(o,s))>.1)return null;let c=[Li(r,i.tangent),Li(o,i.tangent)].sort((y,p)=>y-p),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let f=Ge(i.start,i.tangent,(l+u)/2),h=Math.sign(a);if(!Bl(e,Ge(f,s,-h))||!Bl(n,Ge(f,s,a+h))||Bl(e,Ge(f,s,a/2))||Bl(n,Ge(f,s,a/2)))return null;let d=Ge(i.start,i.tangent,l),g=Ge(i.start,i.tangent,u);return ji([Ge(d,s,-h*.05),Ge(g,s,-h*.05),Ge(g,s,a+h*.05),Ge(d,s,a+h*.05)])}function lm(i){let t=[],e=[];for(let n of[...i].reverse()){let s=cm(n.polygons);if(!s.length)continue;let r=t.length?om(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?am(t,s):s}return{footprint:t,regions:e.reverse()}}function Wr(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function qh(i,t,e=!1){let n=i.map(h=>({surface:h.surface,points:Ol(h.points),polygons:[ji(Ol(h.points))],outdoor:e&&Wr(h)})),s=[];for(let[h,d]of n.entries())for(let g of n.slice(h+1))for(let y of em(d.points))for(let p of em(g.points)){let m=WM(y,p,d.points,g.points);m&&s.push({surface:d.surface,polygons:[m],outdoor:d.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:d,stepBottom:g,deckBottom:y,northDeck:p,southDeck:m,recess:x}=t;r.push({surface:"patio",polygons:[ji(Ol(p)),ji(Ol(m)),ji(tm(h,g,d+1,y))]}),x.x2>x.x1&&x.z2>x.z1&&o.push({surface:"oak",polygons:[ji(tm(x.x1,x.z1,x.x2,x.z2))]})}let a=[...s,...n],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=lm([...l,...c]),f=t||e?cm(c.flatMap(h=>h.polygons)):[];return{...u,foundation:f}}function XM(i,t,e,n){let s=qs(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=Ge(i,Hl(t),r),a=Ge(i,Hl(e),-r),c=qs(Ni(a,o),e)/s,l=Ge(o,t,c);return Math.hypot(...Ni(l,i))>n*2.5?ji([i,o,a]):ji([i,o,l,a])}function nm(i,t){let e=qs(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=Ni(t.point,i.point);return[qs(n,t.tangent)/e,qs(n,i.tangent)/e]}function YM(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=Ni(r.point,s.point);if(Math.hypot(...o)>kl)continue;let a=nm(s,r);a&&a.every(c=>c>=-kl&&c<=Qn)?e.push({a:s,b:r,center:Ge(s.point,s.tangent,a[0])}):!a&&Li(s.tangent,r.tangent)<0&&Li(o,s.tangent)<=Qn&&Li(o,r.tangent)>=-Qn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=nm(s,o);if(!a)continue;let[c,l]=a;c<-kl||c>=-Qn||l<=Qn||l>=r.length-Qn||r.openings.some(({start:u,end:f})=>l>=u&&l<=f)||e.push({a:s,center:Ge(s.point,s.tangent,c)})}}return e}function im({a:i,b:t,center:e},n){return e?[zl(i.point,e,n,.1),t&&zl(t.point,e,n,.1),t&&XM(e,i.tangent,t.tangent,n)].filter(Boolean):[zl(i.point,t.point,n,.1)].filter(Boolean)}function um(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function qM(i,t){return um(i).flatMap(([e,n])=>{let s=Ni(n,e),r=Math.hypot(...s);if(r<Qn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Ni(a,e),u=Ni(c,e);if(Math.abs(qs(l,o))>Qn||Math.abs(qs(u,o))>Qn)return[];let[f,h]=[Li(l,o),Li(u,o)].sort((y,p)=>y-p),d=Math.max(0,f),g=Math.min(r,h);return g-d>Qn?[[Ge(e,o,d),Ge(e,o,g)]]:[]})})}function sm(i,t){return t?.length?om(i,t):i}function hm(i,t,e,n){let s=[],r=(c,l,u,f,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:f,priority:h})};for(let c of i){let{palette:[l,u,f]}=c,h=[c.x1,c.y1],d=[c.dx,c.dz],g=(x,M,_,v,w,A,b)=>{M-x>Qn&&r(zl(Ge(h,d,x),Ge(h,d,M),w/2),_,v,A,b)},y=c.openings.length?n:0,p=(x,M)=>{g(x,M,y,e,t,l,2),g(x,M,e-1,e+2,t+3,u,1)};y&&g(0,c.length,0,y,t,l,2);let m=0;for(let x of c.openings)p(m,x.start),m=Math.max(m,x.end);p(m,c.length),g(0,c.length,0,3,t+3,f,1)}for(let c of YM(i)){let[l,u,f]=c.a.wall.palette;for(let h of im(c,t/2))r(h,0,e,l,2);for(let h of im(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],f=new Map,h=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:g}of h.sort((y,p)=>y.priority-p.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(g);return{...lm([...f.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:f},h)=>{let d=um(l);return c.map(g=>({...g,bottom:u,top:f,faces:{top:sm(g.polygons,a[h+1]?.footprint),bottom:u===0?[]:sm(g.polygons,a[h-1]?.footprint),sides:qM(g.polygons,d)}}))})}var ZM=new Map([["partlycloudy",.32],["cloudy",.84],["windy-variant",.7],["fog",.95],["snowy",.82],["snowy-rainy",.92],["hail",.94],["rainy",.88],["pouring",.97],["lightning",.91],["lightning-rainy",.98]]),$M=(i,t,e)=>Math.min(e,Math.max(t,i)),fm=i=>i*Math.PI/180;function Zs(i,t,e){let n=$M((i-t)/(e-t),0,1);return n*n*(3-2*n)}function Ji(i={}){let{sunElevation:t,sunAzimuth:e,sunRising:n,condition:s,night:r,cloudCoverage:o}=i,a=Number.isFinite(t)&&Math.abs(t)<=90?t:r||s==="clear-night"?-18:38,c=Number.isFinite(e)&&e>=0&&e<=360?e%360:void 0,l=typeof n=="boolean"?n:c!==void 0&&c<180,u=a<19&&a>-12,f=c??(u?l?90:270:150),h=Math.max(ZM.get(s)??0,Number.isFinite(o)&&o>=0&&o<=100?o/100:0);return{elevation:a,azimuth:f,rising:l,cloud:h,phase:u?l?"sunrise":"sunset":a<=-12?"night":"day",daylight:Zs(a,-10,18),twilight:Zs(a,-12,-3)*(1-Zs(a,3,19)),lowSun:Zs(a,-1,4)*(1-Zs(a,9,33)),disc:Zs(a,-.9,.8),east:Math.sin(fm(f)),north:Math.cos(fm(f))}}function dm(){let i,t,e=0;function n(s){let r=Zs(s-e,0,.8);if(!i||r>=1)return t;let o=(t.azimuth-i.azimuth+540)%360-180;return Ji({sunElevation:i.elevation+(t.elevation-i.elevation)*r,sunAzimuth:(i.azimuth+o*r+360)%360,sunRising:t.rising,cloudCoverage:(i.cloud+(t.cloud-i.cloud)*r)*100})}return(s,r,o=!1)=>!t||o||!Number.isFinite(r)||r<e?(i=void 0,t=s,e=Number.isFinite(r)?r:0,t):((s.elevation!==t.elevation||s.azimuth!==t.azimuth||s.rising!==t.rising||s.cloud!==t.cloud)&&(i=n(r),t=s,e=r),n(r))}var jM=3,JM={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},Zh=Object.fromEntries(Object.entries(JM).map(([i,t])=>[i,t.map(e=>new Yt(e))])),KM={sunrise:["#f6bfc2","#947b96","#ffd29d","#f0c7b7","#767d9c"],sunset:["#f1ad90","#8d647a","#ffaf71","#eab290","#80677f"]},QM=Object.fromEntries(Object.entries(KM).map(([i,t])=>[i,t.map(e=>new Yt(e))])),{clamp:tS,lerp:Xr,smoothstep:eS}=oe;function pm(i,t,e){i.toneMapping=qo,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=Hs,i.shadowMap.autoUpdate=!1;let n=new zs("#fff4e5","#897e91",1.13),s=new gs("#fff0d4",2.15),r=new gs("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,f=(c+l)/2;s.position.set(u-610,1150,f-490),s.target.position.set(u,0,f),r.position.set(u+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:jM},()=>new Wo("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let g=[],y,p,m,x=!0,M=new Yt,_=new Yt;function v(){for(let b of t.children)b.isMesh&&(b.receiveShadow=!0,b.geometry.computeBoundingBox(),b.castShadow=b.geometry.boundingBox.max.y+b.position.y>-99)}function w(b,I){let O=/(light|lamp|sconce)/i.test(b.type),C=!I.animate||O;I.root.traverse(U=>{!U.isMesh||U.material.transparent||U.material.isShaderMaterial||(U.receiveShadow=!0,U.castShadow||=C)}),O&&b.entityId&&g.push({item:b,object:I})}function A(b,I,O,C=!1){let{elevation:U,azimuth:H,rising:N,daylight:k,twilight:z,lowSun:W,cloud:tt}=b.solar??Ji(b),j=tS(U,-12,35),J=`${N}:${Math.round(j*4)}:${Math.round(tt*32)}`,at=eS(U,-.85,9);if(J!==y){let Pt=[n.color,n.groundColor,s.color,O.color,t.background],Lt=QM[N?"sunrise":"sunset"];for(let[L,Z]of Pt.entries()){_.lerpColors(Zh.clear[L],Zh.overcast[L],tt),Z.lerpColors(Zh.night[L],_,k);let ct=L===2?W*.76:z*(L===4?.55:.43);Z.lerp(Lt[L],ct*(1-tt*.73))}n.intensity=Xr(.63,1.13+tt*.17,k)+z*.17,s.intensity=.23+at*Xr(1.91,.48,tt)*Xr(.46,1,k),r.intensity=Xr(.17,.23,k)+z*.08,s.shadow.intensity=at*Xr(.83,.21,tt),y=J,m=void 0}let Et=Math.round(H/2)*2,xt=Math.max(10,Math.round(U)),bt=`${Et}:${xt}`;if(at>0&&bt!==p){let Pt=oe.degToRad(Et),Lt=oe.degToRad(xt),L=Math.cos(Lt)*1600;s.position.set(u+Math.sin(Pt)*L,Math.sin(Lt)*1600,f-Math.cos(Pt)*L),p=bt,x=!0}if(m!==I||C){let Pt=g.flatMap(({item:Lt,object:L})=>{let Z=I[Lt.id];if(Z?.state!=="on")return[];let ct=Number.isFinite(Z.attributes?.brightness)?oe.clamp(Z.attributes.brightness/255,0,1):1;return ct>0?[{object:L,power:ct,color:Z.attributes?.rgb_color}]:[]}).sort((Lt,L)=>L.power-Lt.power);for(let[Lt,L]of d.entries()){let Z=Pt[Lt];if(!Z){L.intensity=0;continue}let{object:ct,power:gt,color:lt}=Z;Array.isArray(lt)&&lt.length===3&&lt.every(Number.isFinite)?(M.setRGB(...lt.map(Mt=>oe.clamp(Mt/255,0,1)),en),L.color.copy(M)):L.color.set("#ffd5a2"),L.position.copy(ct.root.position),L.position.y+=Math.max(18,(ct.anchorY-9)*ct.root.scale.y),L.intensity=gt*Xr(2350,1250,k)}m=I}(x||C&&at>0)&&(i.shadowMap.needsUpdate=!0,x=!1)}return{markStructure:v,register:w,update:A,dispose:()=>s.shadow.dispose()}}var bi=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),Gl=65,nS=88,Vl=4400,iS=1900,mm=-111,Yr=Object.freeze({default:bi("Default",0,0),top:bi("Top down",0,0),high:bi("High angle",0,15),dollhouse:bi("Dollhouse",2,30),corner:bi("Corner",45,40),north:bi("From north",180,42),east:bi("From east",90,42),south:bi("From south",0,42),west:bi("From west",270,42),waterfront:bi("Waterfront",0,15),free:bi("Free view",0,25)});function gm(i,t=!1){let e=Object.entries(Yr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function Ki(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(Yr,t.preset)?t.preset:"top",n=Yr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth,r=e==="free"||e==="default"?nS:Gl;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?oe.clamp(t.tilt,0,r):n.tilt,zoom:Number.isFinite(t.zoom)?oe.clamp(t.zoom,.6,2.5):n.zoom}}function ym(i){let t=Ki(i);return{...t,preset:"free",tilt:t.tilt||Yr.free.tilt}}function $h(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:Ki(i)}function jh(i){return Ki({...$h(i),preset:"default"})}function xm(i){if(i<=Gl)return null;let t=oe.smoothstep(i,Gl,84);return{near:oe.lerp(3530,2680,t),far:oe.lerp(4260,3690,t)}}function vm(i,t){let e=Math.max(.4,t/1536*.68),n=oe.clamp;return{w:Math.round(n((i?.w||170)*e,58,216)),h:Math.round(n((i?.h||110)*e,44,152))}}function _m(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>$h(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return $h(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function bm(i,t,e,n,s="top",{focus:r,demoZoom:o}={}){let a=Ki(s);if(a.preset==="waterfront"&&t?.waterfront&&(t=t.waterfront),![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let c=oe.degToRad(a.azimuth),l=oe.degToRad(a.tilt),u=new Y((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),f=new Y(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));i.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),i.position.copy(u).addScaledVector(f,iS),i.lookAt(u),i.updateMatrixWorld(!0);let h=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),d=new Oe,g=new Y;for(let w of[t.minX-37,t.maxX+37]){for(let A of[t.minZ-53,t.maxZ+36])for(let b of[mm,h])d.expandByPoint(g.set(w,b,A).applyMatrix4(i.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&d.expandByPoint(g.set(w,-106,t.sceneryMinZ-8).applyMatrix4(i.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let w=(d.max.y-d.min.y)*.025;d.min.y-=w,d.max.y+=w}let y=e/n,p=Math.max((d.max.x-d.min.x)/2,(d.max.y-d.min.y)/2*y),m=p/y,x=(d.min.x+d.max.x)/2,M=(d.min.y+d.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:w,y:A}=g.set(r.x,r.y,r.z).applyMatrix4(i.matrixWorldInverse),b=Number.isFinite(r.weight)?oe.clamp(r.weight,0,1):1;x=oe.lerp(x,w,b),M=oe.lerp(M,A,b)}i.left=x-p,i.right=x+p,i.bottom=M-m,i.top=M+m,i.zoom=Number.isFinite(o)?oe.clamp(o,.6,4.5):a.zoom;let _=i.position.y+(M-m/i.zoom)*i.up.y,v=a.tilt>Gl?Math.max(0,(mm+24-_)/f.y):0;return v>0&&(i.position.addScaledVector(f,v),i.updateMatrixWorld(!0)),i.far=Vl+v,i.updateProjectionMatrix(),a}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Legacy dining set",icon:"\u25B0",w:165,h:108,group:"living",legacy:!0},{type:"diningTable",label:"Dining table",icon:"\u25B0",w:136,h:62,group:"living"},{type:"diningChair",label:"Dining chair",icon:"\u25D2",w:34,h:26,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=L=>typeof L=="string"&&L.startsWith("ui"),o=L=>String(L??"").toLowerCase(),a=L=>o(L).split(".")[0],c=L=>typeof L=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(L),l=L=>L.type==="window"?"wall":L.mount||"floor",u=L=>L?.type==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(L?.type),f=L=>L?.type==="diningChair"||/^living-dining-chair-/.test(L?.type),h=L=>f(L)||["chair","armchair","stool"].includes(L?.type)||/-(?:desk-chair|acorn-armchair|floor-chair)-/.test(L?.type),d=L=>Number(L.toFixed(6)),g=L=>(L%360+360)%360;function y(L){let Z=L.type==="table",ct=/^living-(petal|round|rectangular)-dining-set-/.exec(L.type);if(!Z&&!ct)return;let gt=ct?.[1],lt=Z?"diningTable":L.type.replace("-dining-set-","-dining-table-"),yt=Ct=>Z?"diningChair":`living-dining-chair-${Ct}`,{w:Mt,h:K}=L;if(Z||gt==="round"){let[Ct,kt,Bt,Gt,jt]=Z?[.39,.415,.2,.23,.27]:[.37,.38,.2,.2,.2];return{tableType:lt,w:(Z?.79:.58)*Mt,h:(Z?.57:.58)*K,tableHeight:Z?46.4:41,chairs:[[0,-K*Ct,Mt*Bt,K*Gt,0,yt("sage")],[Mt*kt,0,K*jt,Mt*(Z?.17:Bt),90,yt("butter")],[0,K*Ct,Mt*Bt,K*Gt,180,yt("blush")],[-Mt*kt,0,K*jt,Mt*(Z?.17:Bt),270,yt("lavender")]]}}let dt=gt==="rectangular",Tt=dt?[-.32,0,.32]:[-.28,.28],St=[["sage","blush","lavender"],["lavender","butter","sage"]];return{tableType:lt,w:.79*Mt,h:.56*K,tableHeight:42.3,chairs:[-1,1].flatMap((Ct,kt)=>Tt.map((Bt,Gt)=>[Mt*Bt,K*.37*Ct,Mt*(dt?.15:.19),K*.23,kt*180,yt(St[kt][Gt])]))}}function p(L){if(!Array.isArray(L?.items))return L;let Z=new Set(L.items.map(yt=>yt.id)),ct=L.items.filter(h),gt=!1,lt=L.items.flatMap(yt=>{let Mt=y(yt);if(!Mt||![yt.x,yt.y,yt.w,yt.h,yt.rotation].every(Number.isFinite)||yt.w<=0||yt.h<=0)return[yt];gt=!0;let K=yt.rotation*Math.PI/180,dt=Math.cos(K),Tt=Math.sin(K),St=Number.isFinite(yt.modelHeight)?yt.modelHeight:void 0,Ct={...yt,type:Mt.tableType,w:d(Mt.w),h:d(Mt.h),...St===void 0?{}:{modelHeight:Math.max(6,d(St*Mt.tableHeight/59))}};return[...Mt.chairs.flatMap(([Bt,Gt,jt,$,de,Vt],V)=>{let T=d(yt.x+Bt*dt-Gt*Tt),nt=d(yt.y+Bt*Tt+Gt*dt),ut=Math.max(8,Math.min(jt,$)*.52);if(ct.some(R=>Math.hypot(R.x-T,R.y-nt)<=ut))return[];let pt=`${yt.id}-chair-${V+1}`,G=pt,S=2;for(;Z.has(G);)G=`${pt}-${S++}`;Z.add(G);let E={id:G,type:Vt,name:`Dining chair ${V+1}`,x:T,y:nt,w:d(jt),h:d($),rotation:g(yt.rotation+de),entityId:"",...St===void 0?{}:{modelHeight:St},...Number.isFinite(yt.zIndex)?{zIndex:yt.zIndex}:{}};return ct.push(E),[E]}),Ct]});return gt?{...L,items:lt}:L}function m(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function x(L,Z,ct){return!(!L||!Z||!ct||L.type===ct.type||ct.legacy||s.has(L.type)||r(L.type)||s.has(ct.type)||r(ct.type)||l(Z)!==l(ct)||L.entityId&&!M(L.entityId,ct))}function M(L,Z){return!c(L)||typeof Z?.type!="string"||Z.legacy||r(Z.type)||Z.type==="stairs"||Z.type==="window"?!1:Z.type==="cameraThumbnail"?a(L)==="camera":Z.type==="garageDoor"?a(L)==="cover":a(L)!=="camera"}function _(L,Z){let ct=a(L.entity_id),gt=o(L.name+" "+L.entity_id),lt={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},yt=K=>{if(K.type==="controlZone")return!0;if(ct==="camera")return K.type==="cameraThumbnail";if(ct==="cover")return/garage/.test(gt)&&K.type==="garageDoor";if(ct==="climate")return K.type==="thermostat";if(ct==="binary_sensor"&&/presence|occupancy/.test(gt))return K.type==="presenceSwitch";if(lt[ct]?.includes(K.group)||/humidifier/.test(gt)&&K.type==="humidifier"||/purifier/.test(gt)&&K.type==="airPurifier")return!0;if(ct==="switch"){if(/fan/.test(gt))return K.group==="fans"||K.type==="windowFan";if(/light|lamp/.test(gt))return K.group==="lighting"}return!1},Mt=Z.filter(K=>M(L.entity_id,K));return{recommended:Mt.filter(yt),available:Mt}}function v(L){return L&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(L.type)&&!r(L.type)}function w(L,Z,ct,gt){if(!["w","h"].includes(Z)||!Number.isFinite(ct))return null;let lt=L.type==="cameraThumbnail"?40:12,yt=L.type==="cameraThumbnail"||c(L.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!gt)return{[Z]:Math.min(yt[Z],Math.max(lt,ct))};let Mt=Math.min(yt.w/L.w,yt.h/L.h),K=Math.min(Mt,Math.max(lt/L.w,lt/L.h)),dt=Math.min(Mt,Math.max(K,ct/L[Z]));return{w:Math.round(L.w*dt*10)/10,h:Math.round(L.h*dt*10)/10}}let A=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),b=new Set(["lamp","tableLamp","humidifier","plant"]),I=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),O=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,C=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,U=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function H(L){let Z=L?.type??"";return u(L)||A.has(Z)||O.test(Z)?"surface":b.has(Z)||L?.lightForm==="bud_lamp"||Z.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function N(L){let Z=L.type==="humidifier"?.37:L.type==="plant"?.23:.2;return Math.min(L.w,L.h)*Z}function k(L,Z=!1){let{type:ct,w:gt,h:lt}=L;if(u(L))return[[0,0,gt,lt]];if(ct==="desk"||ct.startsWith("bedroom-corner-desk-"))return[[0,-.33*lt,gt,.34*lt],[-.41*gt,.17*lt,.18*gt,.66*lt],[.41*gt,.17*lt,.18*gt,.66*lt]];if(!Z&&(ct==="sofa"||ct.startsWith("living-cloud-sofa-")))return lt>gt?[[-.25*gt,0,.5*gt,lt],[.22*gt,(ct==="sofa"?.3:-.3)*lt,.52*gt,.38*lt]]:[[0,-.215*lt,gt,.57*lt],[-.32*gt,.25*lt,.34*gt,.46*lt]];if(Z){if(ct.startsWith("living-round-dining-"))return[[0,0,.58*gt,.58*lt]];if(ct==="table"||/-dining-set-/.test(ct))return[[0,0,.79*gt,.56*lt]];if(ct.includes("-desk-"))return[[0,0,gt,.85*lt]]}if(!Z&&H(L)==="tabletop"){let yt=2*N(L);return[[0,0,yt,yt]]}return[[0,0,gt*.95,lt*.95]]}function z(L,Z){if(![L?.x,L?.y,L?.w,L?.h].every(Number.isFinite)||L.w<=0||L.h<=0)return[];let ct=(Number.isFinite(L.rotation)?L.rotation:0)*Math.PI/180,gt=[Math.cos(ct),Math.sin(ct)],lt=[-gt[1],gt[0]];return k(L,Z).map(([yt,Mt,K,dt])=>({x:L.x+yt*gt[0]+Mt*lt[0],y:L.y+yt*gt[1]+Mt*lt[1],u:gt,v:lt,width:K/2,height:dt/2}))}let W=(L,Z,ct)=>L*ct[0]+Z*ct[1];function tt(L,Z){let ct=Z.type.startsWith("living-round-dining-"),gt=z(Z,!0),lt=N(L)*.9;return U.every(([yt,Mt])=>gt.some(K=>{let dt=L.x+yt*lt-K.x,Tt=L.y+Mt*lt-K.y,St=Math.abs(W(dt,Tt,K.u))/K.width,Ct=Math.abs(W(dt,Tt,K.v))/K.height;return ct?Math.hypot(St,Ct)<=1:St<=1&&Ct<=1}))}function j(L){return f(L)||H(L)!=="floor"||I.has(L.type)||C.test(L.type)?z(L,!1):[]}function J(L){return H(L)==="tabletop"||L.type==="rug"||L.type.startsWith("baby-mats-")?[]:["chair","stool","tv"].includes(L.type)||/(?:desk-chair|toy-storage|fireplace|floor-chair)/.test(L.type)||L.type.startsWith("pets-")?z(L,!1):j(L)}function at(L,Z){let ct=(gt,lt)=>gt.width*Math.abs(W(...gt.u,lt))+gt.height*Math.abs(W(...gt.v,lt));return Math.min(...[L.u,L.v,Z.u,Z.v].map(gt=>ct(L,gt)+ct(Z,gt)-Math.abs(W(L.x-Z.x,L.y-Z.y,gt))))}function Et(L,Z){let[ct]=z(L,!1),[gt]=z(Z,!0);if(!ct||!gt||at(ct,gt)<=0)return!1;let lt=[ct.x-gt.x,ct.y-gt.y],yt=W(...lt,gt.u)/gt.width,Mt=W(...lt,gt.v)/gt.height,K=Z.type.startsWith("living-round-dining-"),dt;if(K){if(Math.hypot(yt,Mt)<1)return!1;dt=-W(...lt,ct.v)/Math.hypot(...lt)}else{let Bt=Math.abs(yt)>=1,Gt=Math.abs(Mt)>=1;if(Bt===Gt)return!1;dt=-Math.sign(Bt?yt:Mt)*W(...ct.v,Bt?gt.u:gt.v)}if(dt<.8)return!1;let Tt=Z.type==="diningTable",St=Tt?46.4:K?41:42.3,Ct=(Z.modelHeight??St)*(Tt?32:33)/St;return(L.modelHeight??59)*30/59<Ct}function xt(L,Z,ct,gt){let lt=0;for(let K of ct)for(let dt of gt)lt=Math.max(lt,at(K,dt));if(lt<=2)return lt;let yt=H(L),Mt=H(Z);return yt==="tabletop"&&Mt==="surface"&&tt(L,Z)||yt==="surface"&&Mt==="tabletop"&&tt(Z,L)||f(L)&&u(Z)&&Et(L,Z)||u(L)&&f(Z)&&Et(Z,L)?0:lt}function bt(L,Z,ct){let gt=j(L);if(!gt.length)return;let lt=ct?j(ct):[],yt,Mt=2;for(let K of Z){if(K.id===L.id)continue;let dt=j(K),Tt=xt(L,K,gt,dt);Tt<=Mt||lt.length&&Tt<=xt(ct,K,lt,dt)+.02||(yt=K,Mt=Tt)}return yt}function Pt(L){let Z=L.filter(Mt=>H(Mt)==="surface"),ct=Z.filter(u),gt=new Set,lt=new Map,yt=new Map;for(let Mt of L){let K=f(Mt);if(!K&&H(Mt)!=="tabletop")continue;let dt=K?ct.find(St=>Et(Mt,St)):Z.find(St=>tt(Mt,St));if(!dt)continue;gt.add(Mt.id);let Tt=K?yt:lt;Tt.has(dt.id)||Tt.set(dt.id,[]),Tt.get(dt.id).push(Mt)}return gt.size?L.flatMap(Mt=>gt.has(Mt.id)?[]:[...yt.get(Mt.id)??[],Mt,...lt.get(Mt.id)??[]]):L}function Lt(L,Z,ct){let gt=L.ownerDocument,lt=(nt,ut,pt={})=>{let G=gt.createElement(nt);ut&&(G.textContent=ut);for(let[S,E]of Object.entries(pt))G.setAttribute(S,E);return G},yt=lt("dialog","",{class:"model-library","aria-label":"Objects and models"}),Mt=lt("header"),K=lt("h2","Objects & models"),dt=lt("button","Close",{type:"button"});Mt.append(K,dt);let Tt=lt("div","",{class:"model-library-filters"}),St=lt("select","",{"aria-label":"Object library section"});for(let[nt,ut]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])St.append(lt("option",ut,{value:nt}));let Ct=lt("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});Tt.append(St,Ct);let kt=lt("div","",{class:"model-library-context"}),Bt=lt("p","",{role:"status",class:"model-library-status"}),Gt=lt("div","",{class:"model-library-list"});yt.append(Mt,Tt,kt,Bt,Gt);let jt=lt("style");jt.textContent=`
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
    `,L.append(jt,yt);let $,de=!1,Vt=(nt,ut)=>{let pt=lt("button",nt,{type:"button"});return pt.addEventListener("click",ut),pt};function V(nt){$=nt,de=!1,St.value="catalog",Ct.value="",T(),Ct.focus()}function T(){let{templates:nt,paletteGroups:ut}=m(),pt=new Map(nt.map(q=>[q.type,q])),G=new Map(ut),{items:S,entities:E}=Z(),R=o(Ct.value).trim(),F=(...q)=>R.split(/\s+/).every(X=>o(q.join(" ")).includes(X)),B=[];if(kt.replaceChildren(),$&&(kt.append(lt("strong",$.item?.name||$.entity?.name||$.entity?.entity_id)),$.entity&&kt.append(Vt(de?"Suggested models":"All compatible models",()=>{de=!de,T()})),kt.append(Vt("Cancel mapping",()=>{St.value=$.entity?"devices":"placed",$=void 0,Ct.value="",T()}))),St.value==="placed")for(let q of S){let X=pt.get(q.type);if(!F(q.name,X?.label,q.type,q.entityId))continue;let st=[q.w,q.h,q.modelHeight].filter(Number.isFinite).join(" \xD7 "),rt=[X?.label||q.type,st&&st+" plan px",q.entityId].filter(Boolean).join(" \xB7 "),Rt=[Vt("Edit",()=>ct({kind:"edit",itemId:q.id}))];nt.some(D=>x(q,X,D))&&Rt.push(Vt("Change model",()=>V({item:q}))),B.push([q.name||X?.label||q.type,rt,Rt])}else if(St.value==="devices"){let q=new Map;for(let X of S)X.entityId&&!q.has(X.entityId)&&q.set(X.entityId,X);for(let X of E){if(!c(X.entity_id)||!F(X.name,X.entity_id,X.area))continue;let st=q.get(X.entity_id),rt=[X.entity_id,X.area,st?"On plan \xB7 "+st.name:"Available to map"].filter(Boolean).join(" \xB7 ");B.push([X.name||X.entity_id,rt,[st?Vt("Edit mapped object",()=>ct({kind:"edit",itemId:st.id})):Vt("Choose model",()=>V({entity:X}))]])}}else{let q=nt.filter(X=>!X.legacy);if($?.item&&(q=nt.filter(X=>x($.item,pt.get($.item.type),X))),$?.entity){let X=_($.entity,nt);q=de?X.available:X.recommended}for(let X of q){let st=G.get(X.group)||X.group;if(!F(X.label,X.type,X.tags,st))continue;let rt=$?.item?{kind:"replace",itemId:$.item.id,modelId:X.type}:{kind:"place",modelId:X.type,...$?.entity?{entityId:$.entity.entity_id}:{}};B.push([X.label,st+" \xB7 "+X.w+" \xD7 "+X.h+" plan px",[Vt($?"Use model":"Place",()=>ct(rt))]])}}Gt.replaceChildren();for(let[q,X,st]of B.slice(0,48)){let rt=lt("div","",{class:"model-library-row"}),Rt=lt("div");Rt.append(lt("strong",q),lt("small",X));let D=lt("div","",{class:"model-library-actions"});D.append(...st),rt.append(Rt,D),Gt.append(rt)}Bt.textContent=B.length>48?"Showing 48 of "+B.length+". Search to narrow the list.":B.length?B.length+(B.length===1?" result":" results"):St.value==="devices"&&!E.length?"Connect to Home Assistant to list devices.":"No matches."}return St.addEventListener("change",()=>{$=void 0,Ct.value="",T()}),Ct.addEventListener("input",T),dt.addEventListener("click",()=>yt.close()),{open(nt="placed"){$=void 0,de=!1,St.value=nt,Ct.value="",T(),yt.open||yt.showModal()},get isOpen(){return yt.open},close(){yt.open&&yt.close()}}}i.RoomcraftModels=Object.freeze({catalog:m,canMap:M,canReplace:x,suggestions:_,supportsHeight:v,resizeFootprint:w,splitDiningFurniture:p,placementRole:H,walkingObstacleBoxes:J,blockingPlacement:bt,orderMountedObjects:Pt,mount:Lt,handoffKey:n})})(typeof window>"u"?globalThis:window);function Mm(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Oe().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var sS=i=>Math.max(0,Math.min(1,i)),Jh=(i,t)=>i?.x===t?.x&&i?.y===t?.y;function fa({allowsPoint:i,allowsRoute:t,duration:e=.32,maximumDistance:n=125}){let s,r,o=0,a=0,c=0,l=0,u=0,f,h,d;function g(x,M){s=r=x,o=M,a=0}function y(x,M=!1){if(l=x,!s||x<c)return null;M&&(a=0);let _=a>0?sS((x-o)/a):1,v=r.x+(s.x-r.x)*_,w=r.y+(s.y-r.y)*_;return i(v,w)?{x:v,y:w,progress:_,heading:u,current:Jh(f,s),walking:!M&&_<1&&Math.hypot(s.x-r.x,s.y-r.y)>2}:(g(s,x),c=x+.24,null)}function p(x,M,{observation:_,reduceMotion:v=!1}={}){if(!Number.isFinite(x?.x)||!Number.isFinite(x?.y)||!i(x.x,x.y))return!1;if(Jh(x,f)&&_===h)return!0;if(f=x,h=_,!s)return g(x,M),!0;let w=y(M,v)??s,A=Math.hypot(x.x-w.x,x.y-w.y);return Jh(x,s)?d=null:A<=n&&t(w.x,w.y,x.x,x.y)?(d=null,r=w,s=x,o=M,a=v?0:e,A>1&&(u=Math.atan2(x.x-r.x,x.y-r.y))):d&&Math.hypot(x.x-d.x,x.y-d.y)<=48&&t(d.x,d.y,x.x,x.y)?(g(x,M),c=M+.24,d=null):d=x,!0}function m(){s=r=f=d=void 0,h=void 0,c=u=0}return{observe:p,sample:y,clear:m,get hasPosition(){return!!s},get pendingReacquisition(){return!!s&&c>l}}}var rS=/(?:sofa|loveseat|chaise)-/,oS=/-desk-/;function ws(i,t,e,n,s,r,o){return{x:i,z:t,surface:e,yaw:n,width:s,depth:r,pose:o}}function aS(i,t,e){let n=i==="sofa"||i.includes("cloud-sofa"),s=n&&e>t,r=i.includes("loveseat")||i.includes("chaise")?2:3,o=[];if(s){let a=e*.88/r,c=t*.38;for(let u=0;u<r;u++){let f=-.44*e+a*(u+.5);o.push(ws(-.25*t+.018*Math.min(t,e),f,37,Math.PI/2,a-3,c,"lounge"))}let l=i==="sofa"?1:-1;o.push(ws(.22*t,l*.3*e,37,l>0?Math.PI:0,.48*t,.34*e,"lounge"))}else{let a=n?.57*e:e,c=n?-.215*e:0,l=.8*t/r;for(let u=0;u<r;u++)o.push(ws(-.4*t+l*(u+.5),c+a*.08,37,0,l-3,a*.7,"lounge"));n&&o.push(ws(-.32*t,.25*e,37,0,.33*t,.42*e,"lounge"))}return o}function cS(i,t){let{x:e,z:n,angle:s}=i,r=-Math.sin(s),o=Math.cos(s);return t.some(({x:a,z:c,item:l})=>{let u=a-e,f=c-n,h=Math.min(104,Math.max(50,Math.min(l.w,l.h)*.58));return Math.hypot(u,f)<=h&&u*r+f*o>=-8})}function lS(i,t){let{type:e,w:n,h:s}=i.item;if(e==="sofa"||rS.test(e))return aS(e,n,s);if(e==="diningChair"||e.startsWith("living-dining-chair-"))return[ws(0,0,30,0,n*.83,s*.83,"dining")];if(e==="chair"||e==="stool"||e.includes("desk-chair")){let r=e.includes("desk-chair")||cS(i,t)?"desk":"idle";return[ws(0,0,e==="stool"?32:41,0,n*.83,s*.83,r)]}if(e==="armchair"||e.includes("acorn-armchair"))return[ws(0,0,32,0,n*.65,s*.76,"lounge")];if(e==="bedroomBench"){let r=n>=58?2:1;return Array.from({length:r},(o,a)=>ws((a-(r-1)/2)*n*.44,0,34.2,0,n*.87/r,s*.91,"bench"))}return[]}function Sm(i,t,e){let n=i.filter(({item:r})=>r.type==="desk"||oS.test(r.type)),s=[];for(let r of i){let{item:o,x:a,z:c,baseY:l,angle:u}=r,f=t.get(o.id)?.root;if(!f||l!==0)continue;let h=Math.sin(u),d=Math.cos(u);for(let[g,y]of lS(r,n).entries()){if(y.width<12||y.depth<11)continue;let p=a+y.x*d-y.z*h,m=c+y.x*h+y.z*d;if(e(p,m)<7)continue;let M=y.yaw-u,_=f.position.y+y.surface*f.scale.y;_<10||_>84||s.push({id:`${o.id}:${g}`,itemId:o.id,x:p,z:m,y:_,heading:M,forwardX:Math.sin(M),forwardZ:Math.cos(M),pose:y.pose,reach:Math.min(42,Math.max(18,y.depth*.48+8)),behind:Math.max(7,y.depth*.32),width:y.width,depth:y.depth})}}return s}function wm(i,t,e,n,s=1){let r=t-i.x,o=e-i.z;return Math.hypot(r,o)>i.reach*s||r*i.forwardX+o*i.forwardZ<-i.behind?!1:!n||n(t,e,i.x,i.z)}function Em(){let i,t,e,n;function s(o,a){let c=o.expiresAt;!Number.isFinite(c)||c<=e||((!i||c-e>3100||Math.hypot(o.x-i.x,o.y-i.y)>10)&&(i=o,t=c),e=c,n=a)}function r(o,a,c){return!!(i&&e-t>=1200&&c-n<=3100/1e3&&Math.hypot(o-i.x,a-i.y)<=10)}return{observe:s,ready:r}}var uS=24,Kh=17.5,hS=.42,fS=8.9,da=[{role:"papa",scale:[1.26,1.25,1.22],radius:20,sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],radius:18,sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],radius:16,sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}],dS={idle:{lean:.03,tilt:0,thighs:-1.3,shins:1.16,hands:[-.43,-.4],fidget:.1,pace:2.1},lounge:{lean:-.13,tilt:.07,thighs:-1.16,shins:.92,hands:[-.22,-.14],fidget:.13,pace:1.8},dining:{lean:.06,tilt:.02,thighs:-1.34,shins:1.26,hands:[-.61,-.51],fidget:.14,pace:2.8},desk:{lean:.16,tilt:0,thighs:-1.26,shins:1.18,hands:[-.98,-.92],fidget:.12,pace:6.3},bench:{lean:.04,tilt:-.09,thighs:-1.28,shins:1.1,hands:[-.35,-.56],fidget:.22,pace:3.3}},Wl=(i,t,e)=>i+(t-i)*e,pS=i=>Math.min(1,Math.max(0,i)),mS=(i,t)=>Math.atan2(Math.sin(i-t),Math.cos(i-t));function pa(i,t=.12){return new Ye({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function gS(i,t,e,n=0,s=0){let r=!e&&t%4.8<.13;i.head.rotation.x=-.62+n+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.y=s,i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let o of i.eyes)o.scale.y=r?.15:.87}function Qh(i,t=()=>0,{supportsRoute:e,floorClearance:n,allowsBodyPoint:s,allowsBodyRoute:r,seats:o=[]}={}){let a=new se;a.name="tracked-people",i.add(a);let c,l=new Map,u=da.map(()=>[]),f=!1,h=!1,d=0,g=!1;function y(){return{sphere:new Re(1,12,8),disc:new Rn(1,24).rotateX(-Math.PI/2),groundRing:new ko(13.8,Kh,32).rotateX(-Math.PI/2),glasses:new In(1,.14,6,16),palette:da.map(({sweater:C,trim:U,skin:H,hair:N})=>Object.fromEntries(Object.entries({sweater:C,trim:U,skin:H,hair:N}).map(([k,z])=>[k,pa(z)]))),ink:pa("#423c50",.09),cheek:pa("#d78383"),shoes:pa("#514656"),white:pa("#fff1dc"),shadow:new Be({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new Be({color:"#fff1cd",depthTest:!1,depthWrite:!1,toneMapped:!1})}}function p(C){c??=y();let{role:U,scale:H,radius:N}=da[C],{sweater:k,trim:z,skin:W,hair:tt}=c.palette[C],j=U==="baby",J=new se;J.name=`radar-avatar-${U}`;let at=new se;at.name="radar-avatar-pose";let Et=new se,xt=new se,bt=[],Pt=[],Lt=[];a.add(J),J.add(at),at.add(Et),Et.scale.set(...H);let L=(lt,yt,Mt,K,dt,Tt,St,Ct)=>{let kt=new le(c.sphere,yt);return kt.position.set(Mt,K,dt),kt.scale.set(Tt,St,Ct),lt.add(kt),kt},Z=new le(c.disc,c.shadow);Z.position.y=.13,Z.scale.set(19,1,19),J.add(Z);let ct=new le(c.groundRing,c.groundMark);ct.name="radar-track-mark",ct.renderOrder=-1,a.add(ct),L(Et,k,0,15,0,j?8.2:7.1,8.3,5.4),j?(L(Et,z,0,17.5,4.8,4.9,4.1,1.15),L(Et,c.white,0,17.4,5.9,1.5,1.5,.35)):(L(Et,z,0,20.7,2.4,5.8,2.2,4),L(Et,z,U==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let lt of[-1,1]){let yt=new se;yt.position.set(lt*3.4,10.3,.1),Et.add(yt);let Mt=new se;Mt.position.y=-4.65,yt.add(Mt);let K=j?k:c.ink;L(yt,K,0,-2.35,0,2.65,3.25,2.6),L(Mt,K,0,-1.6,0,2.4,3.1,2.4),L(Mt,j?z:c.shoes,0,-3.5,1.25,3.1,2.1,4),L(Mt,c.white,0,-4.15,3.25,2.75,1.1,2),Lt.push({thigh:yt,shin:Mt});let dt=new se;dt.position.set(lt*6.25,19.1,0),Et.add(dt),L(dt,k,lt*.9,-3.7,.15,2.75,5.3,2.7),L(dt,W,lt*1.3,-7.8,.5,2.3,2.6,2.2),Pt.push(dt)}xt.position.set(0,j?26:27.2,0),j&&xt.scale.set(1.16,1.17,1.12),Et.add(xt),L(xt,tt,0,1.3,-1.65,9.2,9.65,8.6),L(xt,W,0,0,1.9,8.65,8.45,7.5);let gt=L(xt,tt,-2.1,7.3,4.25,6.4,3.4,4.35);if(gt.rotation.z=U==="papa"?-.27:.22,U==="mama"&&(L(xt,tt,-6.7,-1.9,-3.8,3.6,8.1,5.2),L(xt,tt,6.2,-1.7,-3.9,3.3,7.6,5.4),L(xt,tt,2.8,10.4,-2.5,5.1,5.1,5.1),L(xt,z,4.4,8.7,2.2,2.8,1.1,1.1)),j){L(xt,tt,-7.3,6.7,-2,3.35,3.7,3.5),L(xt,tt,7.3,6.7,-2,3.35,3.7,3.5);let lt=L(xt,z,.9,10,4.2,2.5,1.45,1.25),yt=L(xt,z,4.1,10,4.2,2.5,1.45,1.25);lt.rotation.z=-.4,yt.rotation.z=.4,L(xt,c.white,2.5,9.8,5.1,1.15,1.2,1)}for(let lt of[-1,1])if(L(xt,W,lt*8.2,-.15,1.1,1.85,2.4,1.75),bt.push(L(xt,c.ink,lt*3,1.2,8.95,.85,.87,.52)),L(xt,c.cheek,lt*5.05,-1.25,7.95,1.18,.62,.52),U==="papa"){let yt=new le(c.glasses,c.ink);yt.position.set(lt*3.1,1.25,9.15),yt.scale.set(2.5,2.15,1.55),xt.add(yt)}return U==="papa"&&L(xt,c.ink,0,1.6,9.35,1.1,.28,.35),L(xt,c.ink,0,-1.95,9.15,1.38,.45,.38),{root:J,groundMark:ct,poseRoot:at,body:Et,head:xt,arms:Pt,legs:Lt,eyes:bt,radius:N,styleIndex:C,baby:j}}let m=(C,U)=>Number.isFinite(t(C,U))&&(!n||n(C,U)>0),x=(C,U,H,N)=>m(C,U)&&(!n||n(C,U)>=H)&&(s?.(C,U,H,N)??!0),M=(C,U,H,N,k,z)=>(e?.(C,U,H,N,k)??!0)&&(r?.(C,U,H,N,k,z)??!0);function _(C,U,H,N,k=1){return C.width>=N*1.35&&C.depth>=N*.82&&x(C.x,C.z,N,C.itemId)&&wm(C,U,H,(z,W,tt,j)=>M(z,W,tt,j,N,C.itemId),k)}function v(C,U,H,N){let k,z=1/0;for(let W of o){let tt=Math.hypot(C-W.x,U-W.z);tt>=z||N.has(W.id)||!_(W,C,U,H)||(k=W,z=tt)}return k}function w(C,U,H,N){if(C.seat!==U&&(C.seat=U,C.poseAt=d),!U)return 0;if(h||!x(H,N,C.character.radius)||!x(U.x,U.z,C.character.radius)||!M(H,N,U.x,U.z,C.character.radius))return 1;let k=pS((d-C.poseAt)/hS);return k*k*(3-2*k)}function A(C,U,H){let{character:N,seat:k}=C,{x:z,y:W,heading:tt,walking:j,progress:J}=U,at=t(z,W),Et=Math.cos(tt),xt=Math.sin(tt),bt=(k?k.x-z:0)*H,Pt=(k?k.z-W:0)*H,Lt=dS[k?.pose??"idle"],L=k?k.y-at-fS*da[N.styleIndex].scale[1]:0;N.root.position.set(z,at,W),N.root.rotation.y=tt,N.poseRoot.position.set(bt*Et-Pt*xt,L*H,bt*xt+Pt*Et),N.poseRoot.rotation.y=k?mS(k.heading,tt)*H:0,N.poseRoot.userData.pose=H>0?k.pose:"standing";let Z=Math.floor(Math.max(0,d-C.born)*16)/16+.7+N.styleIndex*.62,ct=Math.floor(J*12)/12*Math.PI*4,gt=j?Math.sin(ct)*.56:0,lt=j?Math.abs(Math.sin(ct))*1.9:(1+Math.sin(Z*4.7))*.47,yt=.19*(1+Math.sin(Z*2.6));N.body.position.y=h?0:Wl(lt*(N.baby?1.5:1),yt,H),N.body.rotation.x=Lt.lean*H;let Mt=h?0:j?gt*.15:Math.sin(Z*2.8)*.045;N.body.rotation.z=Wl(Mt,Lt.tilt,H);for(let dt=0;dt<2;dt++){let Tt=dt===0?-1:1,St=j?-gt*Tt:h?0:Math.sin(Z*3.1+dt)*.09,Ct=h?0:Math.sin(Z*Lt.pace+dt*2.6)*Lt.fidget,kt=h?0:Math.sin(Z*2.7+dt)*.035;N.arms[dt].rotation.x=Wl(St,Lt.hands[dt]+Ct,H),N.legs[dt].thigh.rotation.x=Wl(gt*Tt,Lt.thighs+kt,H),N.legs[dt].shin.rotation.x=(Lt.shins+kt*2)*H}let K=h||k?.pose==="desk"?0:Math.sin(Z*1.08)*.13*H;gS(N,Z,h,Lt.lean*.45*H,K)}function b(C,U=f,H=!0){d=Number.isFinite(C)?C:d,h=U||f,g=!1;let N=[],k=new Set;for(let z of l.values()){let{character:W}=z,{x:tt,y:j}=z.point,J=t(tt,j),at=n?.(tt,j)??Kh;W.groundMark.visible=Number.isFinite(J)&&at>0,W.groundMark.visible&&(W.groundMark.position.set(tt,J+.26,j),W.groundMark.scale.setScalar(Math.min(1,at/Kh)));let Et=z.motion.sample(d,h);z.bodyReported&&Et?.current&&(z.bodySuppressed=!1);let xt=z.bodyReported&&!z.bodySuppressed?Et:null,bt=H&&(!z.bodyReported||xt?.current&&!xt.walking)&&z.dwell.ready(tt,j,d);z.seat&&(bt&&_(z.seat,tt,j,W.radius,1.18)?k.add(z.seat.id):z.seat=void 0),N.push({track:z,standing:xt,ready:bt})}for(let{track:z,standing:W,ready:tt}of N){let{character:j,point:J}=z,at=tt?z.seat??v(J.x,J.y,j.radius,k):void 0;at&&k.add(at.id);let Et=w(z,at,J.x,J.y),xt=at?{x:J.x,y:J.y,heading:W?.heading??at.heading,walking:!1,progress:1}:W;j.root.visible=!!xt,xt&&A(z,xt,Et),g||=j.root.visible||j.groundMark.visible}}function I(C,U,{reduceMotion:H=!1}={}){f=H;let N=Number.isFinite(U)?U:d,k=new Map;for(let W of Array.isArray(C)?C:[])if(!(typeof W?.id!="string"||!W.id||W.id.length>256||!Number.isFinite(W.x)||!Number.isFinite(W.y)||k.has(W.id)||!m(W.x,W.y))&&(k.set(W.id,W),k.size===uS))break;for(let[W,tt]of l)k.has(W)||(tt.character.root.visible=!1,tt.character.groundMark.visible=!1,u[tt.character.styleIndex].push(tt.character),l.delete(W));let z=da.map(()=>0);for(let{character:W}of l.values())z[W.styleIndex]++;for(let W of[...k.keys()].filter(tt=>!l.has(tt)).sort()){let tt=z.indexOf(Math.min(...z));z[tt]++;let j=u[tt].pop()??p(tt),J=fa({allowsPoint:(at,Et)=>x(at,Et,j.radius),allowsRoute:(at,Et,xt,bt)=>M(at,Et,xt,bt,j.radius)});l.set(W,{character:j,motion:J,dwell:Em(),born:N,poseAt:N})}for(let[W,tt]of k){let j=l.get(W);j.point=tt,j.bodyReported=j.motion.observe(tt,N,{observation:tt.expiresAt,reduceMotion:H}),j.bodyReported||(j.bodySuppressed=!0),o.length&&j.dwell.observe(tt,N)}b(N,H)}function O(){if(a.removeFromParent(),!!c){for(let C of[c.ink,c.cheek,c.shoes,c.white,c.shadow,c.groundMark])C.dispose();for(let C of c.palette)for(let U of Object.values(C))U.dispose();c.sphere.dispose(),c.disc.dispose(),c.groundRing.dispose(),c.glasses.dispose(),a.clear();for(let C of u)C.length=0;l.clear(),c=void 0}}return{setTracks:I,render:b,dispose:O,setVisible(C){a.visible=C},get hasMotion(){return!h&&l.size>0},get hasVisibleTracks(){return g},get hasPendingReacquisition(){return[...l.values()].some(({motion:C})=>C.pendingReacquisition)}}}var Am=wa(ha(),1);var $s=1e-7;function Tm(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var Xl=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),Es=(i,t,e)=>e>=Math.min(i,t)-$s&&e<=Math.max(i,t)+$s;function yS([i,t,e,n],s,r,o,a){let c=Xl(i,t,e,n,s,r),l=Xl(i,t,e,n,o,a),u=Xl(s,r,o,a,i,t),f=Xl(s,r,o,a,e,n);return Math.abs(c)<$s&&Es(i,e,s)&&Es(t,n,r)||Math.abs(l)<$s&&Es(i,e,o)&&Es(t,n,a)||Math.abs(u)<$s&&Es(s,o,i)&&Es(r,a,t)||Math.abs(f)<$s&&Es(s,o,e)&&Es(r,a,n)?!0:c>0!=l>0&&u>0!=f>0}function ma(i,t,e,n,s,r){let o=s-e,a=r-n,c=o*o+a*a,l=c?Math.max(0,Math.min(1,((i-e)*o+(t-n)*a)/c)):0;return(i-e-l*o)**2+(t-n-l*a)**2}function Rm(i,t,e,n,s,r){if(yS(i,t,e,n,s))return!0;if(!r)return!1;let[o,a,c,l]=i;return Math.min(ma(t,e,...i),ma(n,s,...i),ma(o,a,t,e,n,s),ma(c,l,t,e,n,s))<r}function tf(i,t){let e=t.filter(n=>n.bottom===0).flatMap(n=>n.polygons);return i.length&&e.length?Am.default.difference(i,e):i}function ef(i){let t=typeof window>"u"?globalThis:window,e=i.flatMap(({item:r,x:o,z:a,angle:c})=>t.RoomcraftModels.walkingObstacleBoxes({...r,x:o,y:a,rotation:c*180/Math.PI}).map(l=>{let{width:u,height:f,u:h,v:d}=l;return{...l,id:r.id,extentX:Math.abs(h[0])*u+Math.abs(d[0])*f,extentZ:Math.abs(h[1])*u+Math.abs(d[1])*f,edges:[[-u,-f,u,-f],[u,-f,u,f],[u,f,-u,f],[-u,f,-u,-f]]}}));function n(r,o,a,c,l=0,u){let f=Math.max(0,l)**2;return e.some(h=>{if(h.id===u||Math.min(r,a)>h.x+h.extentX+l||Math.max(r,a)<h.x-h.extentX-l||Math.min(o,c)>h.y+h.extentZ+l||Math.max(o,c)<h.y-h.extentZ-l)return!1;let d=r-h.x,g=o-h.y,y=a-h.x,p=c-h.y,m=d*h.u[0]+g*h.u[1],x=d*h.v[0]+g*h.v[1],M=y*h.u[0]+p*h.u[1],_=y*h.v[0]+p*h.v[1],v=(w,A)=>Math.abs(w)<=h.width&&Math.abs(A)<=h.height;return v(m,x)||v(M,_)||h.edges.some(w=>Rm(w,m,x,M,_,f))})}return{blocksPoint:(r,o,a,c)=>n(r,o,r,o,a,c),blocksRoute:n}}function ga(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>Tm(a,r,o)&&!c.some(l=>Tm(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let c of t)a=Math.min(a,ma(r,o,...c));return Math.sqrt(a)}function s(r,o,a,c,l=0){let u=Math.max(0,l-$s)**2;return e(r,o)&&e(a,c)&&!t.some(f=>Rm(f,r,o,a,c,u))}return{contains:e,clearance:n,supportsRoute:s}}var Cm=new Oe,Yl=new Y,qr=class extends Xo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new $t(t,3)),this.setAttribute("uv",new $t(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ys(e,6,1);return this.setAttribute("instanceStart",new ii(n,3,0)),this.setAttribute("instanceEnd",new ii(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ys(e,6,1);return this.setAttribute("instanceColorStart",new ii(n,3,0)),this.setAttribute("instanceColorEnd",new ii(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new zo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Cm.setFromBufferAttribute(e),this.boundingBox.union(Cm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Yl.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Yl)),Yl.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};zn.line={uniforms:Zi.merge([Ht.common,Ht.fog,Ht.line]),vertexShader:`
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
		`};var Ts=class extends He{constructor(t){super({type:"LineMaterial",uniforms:Zi.clone(zn.line.uniforms),vertexShader:zn.line.vertexShader,fragmentShader:zn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var nf=new Le,Im=new Y,Pm=new Y,vn=new Le,_n=new Le,Di=new Le,sf=new Y,rf=new be,bn=new Yo,Lm=new Y,ql=new Oe,Zl=new Wn,Ui=new Le,Fi,js;function Nm(i,t,e){return Ui.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Ui.multiplyScalar(1/Ui.w),Ui.x=js/e.width,Ui.y=js/e.height,Ui.applyMatrix4(i.projectionMatrixInverse),Ui.multiplyScalar(1/Ui.w),Math.abs(Math.max(Ui.x,Ui.y))}function xS(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){bn.start.fromBufferAttribute(s,a),bn.end.fromBufferAttribute(r,a),bn.applyMatrix4(e);let l=new Y,u=new Y;Fi.distanceSqToSegment(bn.start,bn.end,u,l),u.distanceTo(l)<js*.5&&t.push({point:u,pointOnLine:l,distance:Fi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function vS(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),f=-t.near;Fi.at(1,Di),Di.w=1,Di.applyMatrix4(t.matrixWorldInverse),Di.applyMatrix4(n),Di.multiplyScalar(1/Di.w),Di.x*=r.x/2,Di.y*=r.y/2,Di.z=0,sf.copy(Di),rf.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(vn.fromBufferAttribute(c,h),_n.fromBufferAttribute(l,h),vn.w=1,_n.w=1,vn.applyMatrix4(rf),_n.applyMatrix4(rf),vn.z>f&&_n.z>f)continue;if(vn.z>f){let M=vn.z-_n.z,_=(vn.z-f)/M;vn.lerp(_n,_)}else if(_n.z>f){let M=_n.z-vn.z,_=(_n.z-f)/M;_n.lerp(vn,_)}vn.applyMatrix4(n),_n.applyMatrix4(n),vn.multiplyScalar(1/vn.w),_n.multiplyScalar(1/_n.w),vn.x*=r.x/2,vn.y*=r.y/2,_n.x*=r.x/2,_n.y*=r.y/2,bn.start.copy(vn),bn.start.z=0,bn.end.copy(_n),bn.end.z=0;let y=bn.closestPointToPointParameter(sf,!0);bn.at(y,Lm);let p=oe.lerp(vn.z,_n.z,y),m=p>=-1&&p<=1,x=sf.distanceTo(Lm)<js*.5;if(m&&x){bn.start.fromBufferAttribute(c,h),bn.end.fromBufferAttribute(l,h),bn.start.applyMatrix4(o),bn.end.applyMatrix4(o);let M=new Y,_=new Y;Fi.distanceSqToSegment(bn.start,bn.end,_,M),e.push({point:_,pointOnLine:M,distance:Fi.origin.distanceTo(_),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var $l=class extends le{constructor(t=new qr,e=new Ts({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Im.fromBufferAttribute(e,o),Pm.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Im.distanceTo(Pm);let r=new ys(s,2,1);return t.setAttribute("instanceDistanceStart",new ii(r,1,0)),t.setAttribute("instanceDistanceEnd",new ii(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Fi=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;js=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Zl.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=js*.5;else{let f=Math.max(s.near,Zl.distanceToPoint(Fi.origin));l=Nm(s,f,c.resolution)}if(Zl.radius+=l,Fi.intersectsSphere(Zl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ql.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=js*.5;else{let f=Math.max(s.near,ql.distanceToPoint(Fi.origin));u=Nm(s,f,c.resolution)}ql.expandByScalar(u),Fi.intersectsBox(ql)!==!1&&(n?xS(this,e):vS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(nf),this.material.uniforms.resolution.value.set(nf.z,nf.w))}};var Zr=class extends qr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var jl=class extends $l{constructor(t=new Zr,e=new Ts({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var Dm="#ffce84",_S="#a8f5ff",of="#10242e";function Jl(i,t,e){return new Ts({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function Kl(i,t,e,n){let s=new Zr;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new jl(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function Um(i,t,e,n){let s=new he().setFromPoints(t.map(({x:o,y:a})=>new Y(o,.5,a)));s.setIndex(Gn.triangulateShape(t.map(({x:o,y:a})=>new Nt(o,a)),[]).flat());let r=new le(s,e);r.renderOrder=n,i.add(r)}function Fm(){let i=new ls,t={side:sn,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new Be({...t,color:Dm,opacity:.13}),n=new Be({...t,color:of,opacity:.95}),s=Jl(of,4.6,{opacity:.8}),r=Jl(Dm,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=Jl(of,3.5,{...o,opacity:.65}),c=Jl(_S,1.7,{...o,opacity:.9});function l({origin:h,forward:d}){let g=(p,m=0)=>({x:h.x+d.x*p-d.y*m,y:h.y+d.y*p+d.x*m}),y=Array.from({length:28},(p,m)=>{let x=m/28*Math.PI*2;return g(10*Math.cos(x),10*Math.sin(x))});Kl(i,[g(10),g(56)],[s,r],5),Kl(i,[g(45,-7),g(56),g(45,7)],[s,r],5),Um(i,y,n,7),Kl(i,[...y,y[0]],[s,r],8)}function u(h){for(let g of new Set(i.children.map(y=>y.geometry)))g.dispose();i.clear();let d=new Map;for(let g of h){let{points:y,kind:p,id:m,origin:x,forward:M}=g;if(y.length<3)continue;let _=p==="nominal";_&&Um(i,y,e,0),Kl(i,[...y,y[0]],_?[s,r]:[a,c],_?3:1),x&&M&&d.set(m,g)}for(let g of d.values())l(g)}function f(){u([]);for(let h of[e,n,s,r,a,c])h.dispose()}return{scene:i,setZones:u,dispose:f}}var Bm=wa(ha(),1);var bS=4096,MS=.18,SS=new Yt("#465fc4"),Om=new Yt("#cc548d"),wS=new Yt("#ffd572");function ES(i,t,e){let n=e*.48,s=n*.83;return[[i-s,t-n],[i+s,t-n],[i+n,t-s],[i+n,t+s],[i+s,t+n],[i-s,t+n],[i-n,t+s],[i-n,t-s],[i-s,t-n]]}function TS({x:i,y:t,corners:e},n){return!Array.isArray(e)||e.length!==4||!e.every(s=>Array.isArray(s)&&s.length===2&&s.every(Number.isFinite))?ES(i,t,n):[...e,e[0]]}function AS(i,t,e,n,s){let[r,...o]=e.map(l=>l.slice(0,-1).map(([u,f])=>new Nt(u,f))),a=Gn.triangulateShape(r,o),c=[r,...o].flat();for(let l of a)for(let u of l){let{x:f,y:h}=c[u];i.push(f,MS,h),t.push(n.r,n.g,n.b,s)}return a.length>0}function RS(i,t,e){let{cells:n,cellSize:s}=e??{};if(!Array.isArray(n)||!Number.isFinite(s)||s<=0||s>200)return null;let r=n.slice(0,bS).filter(f=>[f?.x,f?.y,f?.hits].every(Number.isFinite)&&f.hits>0&&t.contains(f.x,f.y));if(!r.length)return null;let o=r.reduce((f,{hits:h})=>Math.max(f,h),0),a=[],c=[],l=0;for(let f of r){let h=Math.sqrt(f.hits/o),d=h<.55?SS.clone().lerp(Om,h/.55):Om.clone().lerp(wS,(h-.55)/.45),g=!1;for(let y of Bm.default.intersection([TS(f,s)],i))g=AS(a,c,y,d,.36+h*.42)||g;g&&l++}if(!l)return null;let u=new he;return u.setAttribute("position",new $t(a,3)),u.setAttribute("color",new $t(c,4)),{geometry:u,drawn:l}}function km(i){let t=new se;t.name="Roomcraft radar heat map";let e=ga(i),n=new Be({vertexColors:!0,side:sn,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}),s;function r(c){s&&(t.remove(s),s.geometry.dispose(),s=void 0);let l=RS(i,e,c);return l?(s=new le(l.geometry,n),t.add(s),l.drawn):0}function o(){r(null),n.dispose()}function a(c){n.opacity=Number.isFinite(c)?oe.clamp(c,.25,1):1}return{root:t,setHistory:r,setOpacity:a,dispose:o}}var CS=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),IS=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),zm={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},$r=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"],sunrise:["#a9aa9e","#71aaa8","#536f9b","#d9dce8","#e5b7bc","#ffe0ae"],sunset:["#b3a08f","#7296a1","#635879","#f0cbc4","#d39a9b","#ffae80"]}).map(([i,t])=>[i,t.map(e=>new Yt(e))])),af={sunrise:["#efad92","#8baac6"].map(i=>new Yt(i)),sunset:["#e58968","#907fa6"].map(i=>new Yt(i))},Hm=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:ya,smoothstep:PS}=oe;function LS({shoreline:i,farZ:t,focusX:e}){let n=[],s=[],r=[];for(let[a,{x:c,z:l}]of i.entries()){let u=a*2;n.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new he;return o.setAttribute("position",new $t(n,3)),o.setAttribute("uv",new $t(s,2)),o.setIndex(r),o}var NS=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  #include <fog_pars_vertex>

  void main() {
    coastPoint = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    vec4 mvPosition = viewMatrix * worldPoint;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,DS=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  uniform float waterTime;
  uniform float rain;
  uniform float fog;
  uniform float reflectedWind;
  uniform float roughness;
  uniform float cloudCover;
  uniform float bodyVisibility;
  uniform float solarBand;
  uniform float moon;
  uniform vec2 moonLight;
  uniform vec2 bodyPosition;
  uniform vec2 solarPosition;
  uniform vec3 shoreTint;
  uniform vec3 shallowTint;
  uniform vec3 deepTint;
  uniform vec3 foamTint;
  uniform vec3 cloudTint;
  uniform vec3 bodyTint;
  uniform vec3 solarWarmTint;
  uniform vec3 solarCoolTint;
  #include <fog_pars_fragment>

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
      float reflectionEdge = (1.0 - smoothstep(550.0, 785.0, abs(coastPoint.x)))
        * (1.0 - smoothstep(540.0, 685.0, offshore));
      vec2 rippleOffset = vec2(rippleA * 4.5, rippleB * 3.8) * roughness;
      vec2 mirror = coastPoint + rippleOffset + vec2(toCamera.x, -toCamera.z) * 18.0;
      // The twilight band follows the local bearing even when the sun's disc is below the horizon.
      if (solarBand > 0.0) {
        float along = mirror.y - solarPosition.y;
        float spread = mix(62.0, 168.0, smoothstep(-35.0, 145.0, along));
        float sunward = mirror.x - solarPosition.x - clamp(along, -45.0, 165.0) * solarPosition.x * 0.0021;
        float falloff = (1.0 - smoothstep(42.0, 270.0, abs(along))) * reflectionEdge;
        float ribbon = exp(-1.82 * (sunward / spread) * (sunward / spread));
        float coolEdge = smoothstep(36.0, 260.0, abs(sunward));
        color = mix(color, solarCoolTint, solarBand * falloff * coolEdge * (0.14 + depth * 0.14));
        color = mix(color, solarWarmTint, solarBand * falloff * ribbon * (0.24 + waveLight * 0.25));
      }
      float drift = sin(waterTime * 0.064) * 26.0 + reflectedWind;
      float nearCloud = cloud(mirror, vec2(-186.0 + drift, 49.0), 1.32);
      float farCloud = cloud(mirror, vec2(182.0 + drift * 0.74, 69.0), 1.18);
      float bank = softEllipse(mirror, vec2(drift, 72.0), vec2(372.0, 62.0), 0.86);
      float clouds = max(max(nearCloud, farCloud * 0.9) * cloudCover, bank * max(0.0, cloudCover - 0.5));
      color = mix(color, cloudTint, clouds * reflectionEdge * (0.66 + slant * 0.12));

      if (bodyVisibility > 0.0) {
        vec2 bodyDistance = mirror - bodyPosition;
        if (abs(bodyDistance.x) < 126.0 && abs(bodyDistance.y) < 73.0) {
          float lowSolar = solarBand * (1.0 - moon);
          vec2 disc = bodyDistance / vec2(33.0 + lowSolar * 6.0, 14.0 + slant * 5.0 - lowSolar * 2.5);
          float discRadius = dot(disc, disc);
          float hemisphere = sqrt(max(0.0, 1.0 - discRadius));
          float terminator = disc.x * moonLight.x + hemisphere * moonLight.y;
          float dayCore = 1.0 - smoothstep(0.25, 1.12, discRadius);
          float moonCore = (1.0 - smoothstep(0.57, 1.08, discRadius)) * smoothstep(-0.13, 0.18, terminator);
          float core = mix(dayCore * (0.79 + 0.15 * rippleA), moonCore, moon);
          float glow = softEllipse(bodyDistance, vec2(0.0), vec2(78.0, 36.0), 0.96);

          // Shallow, staggered crests scatter the reflection along a tapered path toward shore.
          float towardShore = -bodyDistance.y;
          float pathWidth = mix(24.0, 55.0 + slant * 12.0 + lowSolar * 8.0, smoothstep(0.0, 38.0, towardShore));
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
    #include <fog_fragment>
  }
`;function Gm({y:i,farZ:t,shoreline:e,focusX:n}){let s={...Zi.clone(Ht.fog),waterTime:{value:0},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},solarBand:{value:0},moon:{value:0},moonLight:{value:new Nt(0,1)},bodyPosition:{value:new Nt},solarPosition:{value:new Nt},solarWarmTint:{value:af.sunrise[0]},solarCoolTint:{value:af.sunrise[1]}};for(let[c,l]of Hm.entries())s[l]={value:$r.clear[c].clone()};let r=new He({uniforms:s,vertexShader:NS,fragmentShader:DS,toneMapped:!1,fog:!0}),o=new le(LS({shoreline:e,farZ:t,focusX:n}),r);o.name="Ocean and shore wash",o.position.set(n,i,t);function a(c,l={}){let{night:u,daylightKnown:f,condition:h,moonPhase:d,moonAzimuth:g,moonElevation:y,skyProgress:p,windSpeed:m,windBearing:x,reduceMotion:M,reflections:_=!0}=l,v=l.solar??Ji(l),w=CS.has(h),A=$r[w?"overcast":"clear"],b=v.phase==="sunset"||v.rising===!1?"sunset":"sunrise",I=Math.max(v.twilight,v.lowSun);for(let[Et,xt]of Hm.entries())s[xt].value.lerpColors($r.night[Et],A[Et],v.daylight).lerp($r[b][Et],I*(w?.24:.46));let O=Object.hasOwn(zm,d)?zm[d]:void 0,C=f||Number.isFinite(l.sunElevation)||h==="sunny",U=C?v.disc*(.97-v.cloud*.42):0,H=(u||v.phase==="night")&&O!==void 0?.93*(1-PS(v.elevation,-12,-3)):0,N=H>U;N?s.bodyTint.value.copy($r.night[5]):s.bodyTint.value.lerp($r[b][5],I*.52);let k=IS.has(h),z=Number.isFinite(c)&&!M?c:0;s.waterTime.value=z,s.rain.value=k?1:0,s.fog.value=h==="fog"?1:0;let W=Number.isFinite(m)?ya(m/18,0,1):0,tt=Number.isFinite(x)?-Math.sin(oe.degToRad(x)):1;s.reflectedWind.value=Math.sin(z*.09)*tt*W*24;let j=k||h==="windy"||h==="windy-variant";s.roughness.value=1+Math.max(j?.65:0,W*.65),s.cloudCover.value=_?w?.94:h==="partlycloudy"?.64:u?.32:.24:0,s.bodyVisibility.value=!_||w?0:Math.max(H,U),s.solarBand.value=_&&C?I*(w?.3:1-v.cloud*.48):0,[s.solarWarmTint.value,s.solarCoolTint.value]=af[b],s.moon.value=N?1:0,s.solarPosition.value.set(v.east*154,38+ya(v.elevation/75,0,1)*20);let J=Number.isFinite(p)?ya(p,0,1):void 0,at=J===void 0?void 0:oe.lerp(-145,145,J);if(N){s.moonLight.value.set(Math.sin(O),Math.cos(O));let Et=at??(Number.isFinite(g)?ya((g-180)*1.08,-180,180):46+Math.sin(z*.014)*27),xt=Number.isFinite(y)?32+ya(y/75,0,1)*24:42;s.bodyPosition.value.set(Et,xt)}else s.bodyPosition.value.copy(s.solarPosition.value)}return{mesh:o,update:a}}var Ql=26,US=92,jr=4,FS=18,OS=188;function Wm(i){let{minZ:t,maxZ:e}=i.houseBounds,n=t-(e-t)*.11-46,s=i.editableStructure?1/0:t-146,r=Math.min(i.bounds.minZ,n,s)-FS,o=r-2*Ql-US;return{nearZ:r,farZ:o,sceneryMinZ:o-OS}}function Xm(i,{nearZ:t,farZ:e},n,s,r){let o=e+Ql,a=t-Ql,c=(o+a)/2,l=r-s/2,u=r+s/2,f=(h,d,g,y)=>i.box(s,g,d-h,y,r,n+g/2,(h+d)/2);f(o,a,1.2,"#73767c"),f(o,o+3.4,1.4,"#656b71"),f(a-3.4,a,1.4,"#656b71");for(let[h,d,g,y]of[[e,o,o-jr,e],[a,t,a,a+jr]]){f(h,d,5,"#c0b6a7"),f(g,g+jr,6.2,"#d0c3b0");let p=Ql-jr;for(let m=l+36;m<u;m+=72)i.box(1.15,.18,p,"#a69c91",m,n+5.04,y+p/2)}for(let h=l+36;h+17<u;h+=72)i.box(34,.2,2.8,"#e9ce91",h,n+1.24,c);return{centerX:r,width:s,surfaceY:n+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+jr,maxZ:t,surfaceY:n+5},{minZ:e,maxZ:o-jr,surfaceY:n+5}]}}function cf(i,t,e,n){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new he;o.setAttribute("position",new $t(s,3)),o.setIndex(r),o.computeVertexNormals(),i.add(o,n,0,0,0)}function BS(i,t,e,n,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new Co(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,f=Math.sin(r+c*1.62)*s*.21;i.add(l,c%2?a:o,t+u,n+s*.46,e+f)}}function kS(i,t,e,n,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*n,u=e+o,f=s+.1;i.ball(a,c,13,"#d7bd94",l,f,u),i.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,f+.5,u+4);for(let[h,d,g]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])BS(i,l+a*h,u+d,f+c*.75,g,h*7)}}function zS(i,t,e,n){let o=e-13.5+.6;i.box(19,2.5,27,"#ac987e",t,n+1.28,o);for(let a=0;a<7;a++)i.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,n+2.6,e-1.25-a*3.8);for(let a of[-1,1])i.box(.9,.8,27+.6,"#b4a086",t+a*19/2,n+2.8,o)}function HS(i,t,e,n,s,r,o){i.box(1.4,16.6,1.4,"#b5a08a",t,n+16.6/2,e),i.ball(1.6,.95,1.6,r,t,n+16.6+3.6,e);for(let u=0;u<8;u++){let f=(p,m,x)=>[Math.cos(p)*m,x,Math.sin(p)*m],h=o+u*2*Math.PI/8,d=o+(u+1)*2*Math.PI/8,g=[[0,16.6+3.4,0],f(h,16*.54,16.6+2.1),f(d,16*.54,16.6+2.1),f(h,16,16.6-.55),f(d,16,16.6-.55),f(h,16,16.6-2),f(d,16,16.6-2)],y=new he;y.setAttribute("position",new $t(g.flat(),3)),y.setAttribute("uv",new $t(g.flatMap(([p,,m])=>[p/32+.5,m/32+.5]),2)),y.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),y.computeVertexNormals(),i.add(y,u%2?r:s,t,n,e)}}function Vm(i,t,e,n,s,r){let o=(f,h)=>[t+f*Math.cos(r)+h*Math.sin(r),e-f*Math.sin(r)+h*Math.cos(r)],a=(f,h,d,g,y,p,m)=>{let[x,M]=o(y,m);i.box(f,h,d,g,x,n+p,M,r)};for(let f of[-1,1])a(1.1,1.2,18,"#988679",f*4.5,2.15,0),a(1,2.1,1.2,"#988679",f*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Ae(8.4,.85,8);u.rotateX(-Math.PI/6),i.add(u,s,c,n+4.4,l,r)}function GS(i,t,e,n,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*n,f=e+o;HS(i,u,f,s,a,c,l),Vm(i,u-13,f-15,s,c,l-.17),Vm(i,u+14,f-14,s,a,l+.12),i.box(8.6,.22,15,"#e9cda5",u+23,s+.99,f+7,l*2)}}function Ym(i,{farZ:t},e,{minX:n,maxX:s},r=6200,o=(n+s)/2){let a=(n+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,m)=>{let x=l+r*m/c,M=x-a,_=t-108+14*Math.cos((M+110)*.006)+7*Math.sin((M-90)*.013);return{x,z:_}}),f=u.map(({x:p})=>[p,e+.28,t+.4]),h=u.map(({x:p,z:m})=>[p,e+.71,m+22]),d=u.map(({x:p,z:m})=>[p,e+.44,m+6]),g=u.map(({x:p,z:m})=>[p,e+.17,m-31]);cf(i,f,h,"#e3cba0"),cf(i,h,d,"#dbbd92"),cf(i,d,g,"#c8a47e");let y=Math.max(940,s-n);kS(i,a,t,y,e);for(let p of[-1,1])zS(i,a+p*y*.245,t,e);return GS(i,a,t,y,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:Oi}=oe,ee={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},qm=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],VS=new Map(qm.map(i=>[i.id,i])),Zm=[{id:"teal-semi",label:"Teal semi with box trailer",length:119,width:29,paint:"#61978e",roof:"#9bc0a8",trailer:"#eadcbd",stripe:"#83a89c"},{id:"coral-reefer",label:"Coral semi with refrigerated trailer",length:122,width:29,paint:"#b97c76",roof:"#e2ad95",trailer:"#e4e5d8",stripe:"#7298a7",refrigerated:!0}],WS=new Map(Zm.map(i=>[i.id,i])),$m=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],jm=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],XS=new Map($m.map(i=>[i.id,i])),YS=new Map(jm.map(i=>[i.id,i])),Jm=({id:i,label:t,length:e,width:n,detail:s})=>Object.freeze({id:i,label:t,length:e,width:s==="food"?n+2:n}),tu=Object.freeze([...qm,...Zm,...$m].map(Jm)),eu=Object.freeze(jm.map(Jm));function qS(i){let t=new he;return t.setAttribute("position",new $t(i.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function nu(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Yt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Te(a,3)),r}),e=Yn(t);for(let n of t)n.dispose();return e.computeBoundingBox(),e}function xa(i,t){let e=i.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),n=[],s=(i.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;n.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)n.push(0,o,o+1,s,s+o+1,s+o);let r=new he;return r.setAttribute("position",new $t(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function ZS(i){let t=[],e=(z,W)=>t.push([z,W]),n=(z,W,tt,j,J,at,Et)=>e(new Ae(j,J,at).translate(z,W,tt),Et),s=(z,W)=>e(qS(z),W),r=(z,W,tt,j,J,at,Et)=>{let xt=[[W,j,at],[tt,j,at],[tt,J,at],[W,J,at]];s(z>0?xt:xt.reverse(),Et)},{width:o,tire:a,body:c,roof:l,detail:u}=i,f=i.length-2.8,h=f*.5,d=o*.435,g=a*.78,y=8.25+a*.52,p=y-(u==="sports"||u==="convertible"?1.8:.75);e(xa([[-h,d*.76,y-1.6],[-h+2.4,d*.93,y-.2],[-h+6.2,d,y],[h-6.2,d,y-.24],[h-2.4,d*.92,p+.35],[h,d*.75,p]],g),c);let m=g+.95;for(let z of[-1,1])n(z*(h-.22),m,0,1.42,1.58,d*1.57,ee.bumper),n(z*(h+.05),m+.82,0,1.08,.95,4.5,ee.plate);n(h+.1,p-2.8,0,.65,1.2,d*.64,ee.grille),n(h+.38,p-2.62,0,.24,.35,d*.55,ee.rim);for(let z of[-1,1]){n(0,g+1.3,z*(d+.04),f*.53,.9,.34,ee.bumper);for(let W of[-.323,.323]){let tt=f*W,j=z*(d+.05);e(new je(a,a,2.9,10).rotateX(Math.PI/2).translate(tt,a,j),ee.tire),e(new Rn(a*.57,8).rotateY(z<0?Math.PI:0).translate(tt,a,j+z*1.46),ee.rim),e(new Rn(a*.28,6).rotateY(z<0?Math.PI:0).translate(tt,a,j+z*1.48),ee.hub)}}let[x,M,_,v]=i.cabin.map(z=>f*z),w=y-.35,A=i.height-1.25,b=d*.88,I=b*(i.windows>2||u==="camper"||u==="delivery"?.94:.79),O=z=>Oi(b,I,z),C=z=>Oi(w,A,z),U=(z,W,tt,j=0)=>[Oi(Oi(x,M,W),Oi(v,_,W),z),C(W),tt*(O(W)+j)];function H(z,W,tt,j,J=.2,at=.85,Et=.08){let xt=[U(W,J,z,Et),U(tt,J,z,Et),U(tt,at,z,Et),U(W,at,z,Et)];s(z>0?xt:xt.reverse(),j)}function N(z,W,tt,j,J,at,Et=0){let[xt,bt]=z>0?[v,_]:[x,M],Pt=(L,Z)=>[Oi(xt,bt,Z)+z*Et,C(Z),L*O(Z)],Lt=[Pt(tt,j),Pt(W,j),Pt(W,J),Pt(tt,J)];s(z>0?Lt:Lt.reverse(),at)}function k(z){N(z,-.81,.81,.16,.88,ee.window,.08),N(z,-.72,.73,.23,.82,ee.glass,.13),N(z,-.67,.64,.67,.75,ee.glassGlow,.18)}if(u==="convertible"){N(1,-.88,.88,0,1,l,.08),k(1),n((x+_)/2,w+.2,0,(_-x)*.96,1.05,b*1.92,ee.window);for(let z of[-1,1])n(x+5.7,w+2.35,z*b*.43,7.7,2.5,5.6,ee.upholstery),n(x+2.2,w+3.7,z*b*.43,2,5.2,6,ee.tan)}else{for(let J of[-1,1])H(J,0,1,c,0,1,0);N(1,-1,1,0,1,c),N(-1,-1,1,0,1,c),k(1),["delivery","cargo","food"].includes(u)||k(-1);let z=(_+M)/2,W=_-M+.38;n(z,A+.34,0,W,.84,I*2.05,l),u==="bubble"&&n(z,A+.79,0,W*.88,.52,I*1.67,l),u==="sunroof"&&(n(z,A+.82,0,W*.48,.24,I*1.12,ee.window),n(z-W*.12,A+.98,0,.65,.18,I,ee.glassGlow));let tt=i.windows??2,j=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:tt},(J,at)=>[(at+.16)/tt,(at+.86)/tt]);for(let J of[-1,1])for(let[at,Et]of j)H(J,at,Et,ee.window),H(J,at+.011,Et-.009,ee.glass,.29,.79,.13),H(J,at+.023,Et-.025,ee.glassGlow,.64,.72,.18)}for(let z of[-1,1])n(v-3,w+1.05,z*(d+.2),3.2,1.8,1.75,l),n(Oi(x,v,.36),y-1.45,z*(d+.1),2.8,.46,.24,ee.rim);return{add:e,box:n,sideFace:r,glazingSide:H,bodyParts:t,recipe:i,length:f,outer:d,shoulder:y,nose:h,frontY:p}}function $S(i,t){let{length:e,outer:n,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=i,l=-e*.454,u=e*.105,f=r.height-.4,h=u-l;o(xa([[l,n*.93,f-.7],[l+1.6,n,f],[u-1.6,n,f],[u,n*.93,f-.7]],s-.8),t),a((l+u)/2,f+.1,0,h-3.5,.28,n*1.6,r.roof);for(let d of[-1,1]){let g=d*(n+.1);c(d,l+3,u-3,s+1.6,s+2.45,g,r.body)}for(let d of[-.4,0,.4])a(l-.13,(s+f)/2,n*d,.26,f-s-3.1,.4,ee.rim);return{rear:l,front:u,top:f}}function jS(i){let{recipe:t,box:e,sideFace:n,glazingSide:s,length:r,outer:o,shoulder:a}=i,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let f=l+.5;for(let h of[-1,1])e(r*-.18,f,h*o*.51,r*.3,.85,.83,ee.roofRail);if(c==="trail"){for(let h of[-.29,-.07])e(r*h,f+.55,0,1.05,.75,o*1.18,ee.roofRail);e(r*-.18,f+1.1,0,r*.17,1.65,o*.78,ee.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,ee.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let f=r*-.25;e(f,a+.22,0,r*.35,.42,o*1.43,ee.wood);for(let h of[-1,1])e(f,a+.93,h*o*.84,r*.34,2.28,1.72,u),e(f,a+.48,h*o*.38,r*.33,.25,.4,ee.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,ee.tan)}else if(c==="cargo"||c==="food"){let{rear:f,front:h}=$S(i,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let d=a+7;n(1,f+5.5,h-4.5,d,d+8.4,o+.19,ee.window),e((f+h)/2,d,o+.75,h-f-9.5,.75,2.65,ee.wood);for(let g=0;g<7;g++)e(Oi(f+6,h-4.5,g/6),d+8.6,o+1.4,2.5,1.05,2.75,g%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let f of[-1,1])c==="delivery"?(s(f,.1,.61,"#e5d6e4",.28,.65,.12),s(f,.18,.54,"#b39cc2",.43,.49,.18)):(s(f,.09,.61,"#456575",.29,.68,.12),s(f,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,f*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let f of[-1,1])e(0,a-1.05,f*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,ee.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function lf(i,t,e){return[{role:"body",geometry:nu(i),material:new Ye({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new Ye({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new Ye({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function JS({length:i,width:t,paint:e,roof:n,trailer:s,stripe:r,refrigerated:o}){let a=[],c=(p,m)=>a.push([p,m]),l=(p,m,x,M,_,v,w)=>c(new Ae(M,_,v).translate(p,m,x),w),u=-i/2+1.3,f=i/2-1.3,h=14,d=t/2-1.15,g=d-.7;c(xa([[u,d-1.2,32],[u+2,d,34],[h-2,d,34],[h,d-1,32]],10.2),s),c(xa([[17,g-1,18],[21,g,22],[45,g,22],[f-4,g-1,16],[f,g-2,14]],7),e),c(xa([[27,g-1,28],[31,g-.7,32],[42,g-.7,31],[47,g-1.6,26]],16),n),l(48,23.6,0,.9,6.8,g*1.5,ee.window),l(48.55,25.8,0,.22,.8,g*1.4,ee.glassGlow),l(f+.27,11,0,.56,5.9,9,ee.grille),l(f+.61,8.6,0,.55,1.12,g*1.55,ee.rim),l(u-.32,10.6,0,.62,1.2,2*d-3,ee.bumper),l(h+2.8,9.1,0,10,1.5,12,ee.bumper);for(let p of[-1,1]){l((u+h)/2,15,p*d,h-u-5,2.1,.39,r),l((u+h)/2,26,p*(d+.06),h-u-10,.32,.3,"#f6edd3"),l(40,25,p*(g-.5),7.8,5.25,.32,ee.window),l(47,21,p*(g+.2),2.1,2.1,1.5,e),l(35,9.5,p*(g+.25),7.2,.85,1.12,ee.rim),l(u-.1,22,p*d*.41,.48,13.2,.51,ee.rim);for(let m of[u+9,u+19,23,32,f-8.2]){let x=p*(d-1.42);c(new je(4.35,4.35,2.8,8).rotateX(Math.PI/2).translate(m,4.35,x),ee.tire),c(new Rn(2.47,6).rotateY(p<0?Math.PI:0).translate(m,4.35,x+p*1.41),ee.hub)}}o&&(l(h+1.2,27,0,2.6,7.9,8.8,"#eee5ce"),l(h+2.55,27.8,0,.2,3.9,6.4,r));let y=(p,m)=>nu([-1,1].map(x=>[new Ae(.42,1.3,3.1).translate(p,m,x*(d-3.7)),"#ffffff"]));return lf(a,y(f+.38,12.25),y(u-.54,12.4))}function Km(i,t){let{style:e,length:n,paint:s,trim:r,jacket:o,helmet:a}=i,c=[],l=(bt,Pt)=>c.push([bt,Pt]),u=(bt,Pt,Lt)=>l(new Ae(...Lt).translate(...Pt),bt),f=(bt,Pt,Lt,L=0)=>l(new Re(1,8,5).scale(...Lt).rotateZ(L).translate(...Pt),bt);function h(bt,Pt,Lt,L){let Z=new Y(...Pt),ct=new Y(...Lt),gt=new Y().subVectors(ct,Z),lt=new dn().setFromUnitVectors(new Y(0,1,0),gt.clone().normalize());l(new je(L,L,gt.length(),5,1,!0).applyQuaternion(lt).translate(...Z.lerp(ct,.5).toArray()),bt)}let d=t?1:.75,g=n*(t?.132:.15),y=-n*(e==="longtail"?.309:.326),p=n*.326,m=[n*-.024,g+d*1.25,0],x=[n*(e==="cruiser"?-.16:-.115),n*(e==="trail"?.4:e==="cruiser"?.327:.369),0],M=e==="road"||e==="racer",_=[n*(M?.234:.204),x[1]+(M?.5:3.7)*d,0],v=d*(t?2.2:1.36),w=d*(t?1.04:.65),A=d*(t?.9:.65),b=e!=="road";for(let bt of[y,p]){l(new In(g-w,w,4,12).translate(bt,g,0),ee.tire),b&&l(new In(g+d*.37,d*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(bt,g,0),s);for(let Pt of[0,Math.PI/3,Math.PI*2/3]){let Lt=g-w*1.35,L=Math.cos(Pt)*Lt,Z=Math.sin(Pt)*Lt;h(ee.rim,[bt-L,g-Z,0],[bt+L,g+Z,0],d*.23)}l(new je(d*1.05,d*1.05,v,8).rotateX(Math.PI/2).translate(bt,g,0),ee.hub)}let I=[y,g,0];h(s,I,x,A),h(s,I,m,A),h(s,x,m,A),h(s,m,_,A);let O=e==="basket"||e==="scooter"?[_[0]*.7,m[1]+d*2.65,0]:_;h(s,x,O,A),O!==_&&h(s,O,_,A);for(let bt of[-1,1])h(ee.rim,[_[0],_[1]-d*2.3,bt*v*.38],[p,g,bt*v*.45],A*.7);u(ee.bumper,[x[0]-.25,x[1]+d*.4,0],[d*(t?7.1:4.8),d*1.08,d*3.15]);let C=d*(t?5.05:4.75),U=_[0]+(M?d*1.85:-d*.8),H=_[1]+(M?-d*.6:d*.25);for(let bt of[-1,1]){let Pt=[U,H,bt*C];h(ee.rim,_,Pt,d*.47),h(ee.tire,[U+d*.6,H,bt*C*.82],Pt,d*.63)}if(t){u(ee.bumper,[m[0]+.4,m[1]+1.05,0],[6.4,4.9,5.4]);let bt=e==="scooter"?[_[0]+2.1,x[1]-2.3,0]:[x[0]+5.5,x[1]+.7,0],Pt=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(f(s,bt,Pt,e==="scooter"?.34:-.18),u(r,[bt[0]+.8,bt[1]+.15,Pt[2]*.87],[Pt[0]*1.18,1,.8]),u(r,[bt[0]+.8,bt[1]+.15,-Pt[2]*.87],[Pt[0]*1.18,1,.8]),e==="racer")f(ee.window,[_[0]+2,_[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[y+1.75,x[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,g*2.1+1.05,0],[7.25,.82,3.65]),u(ee.rim,[y+1.55,x[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")f(s,[y+3.7,x[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[m[0],g+1.1,0],[8.2,1.22,6.2]);else for(let Lt of[-1,1])h(ee.rim,[y-2.2,g+2.1,Lt*2.8],[m[0]+4.5,g+.45,Lt*3.25],.79)}else{let bt=e==="longtail"?[y+1.1,g*2.05+1.8,0]:[p-.98,_[1]-1.55,0];e==="basket"||e==="longtail"?(u(ee.wood,bt,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[bt[0],bt[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(ee.tan,[bt[0],bt[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[y+1.65,g+1.05,2],[4.2,3.4,1.85]),u(ee.roofRail,[y+1.6,g*2.05+.45,0],[5.3,.66,4.3]))}let N=[x[0]-d*.38,x[1]+d*2.05,0],k=[N[0]+(M?3.05:1.05)*d,N[1]+d*3.75,0],z=[k[0]+(M?3.35:.95)*d,k[1]+(M?3.1:4.85)*d,0],W=M?-.57:-.22;f(o,k,[d*2.6,d*4.15,d*3],W),f(a,z,[d*2.94,d*2.68,d*2.62]),f(ee.window,[z[0]+d*2.1,z[1]-d*.4,0],[d*1.08,d*1.05,d*2.2]),(e==="commuter"||e==="trail")&&u(r,[k[0]-d*2.1,k[1]+d*.6,0],[d*1.9,d*3.3,d*3.5]);let tt="#4b4e63",j="#e2b491";for(let bt of[-1,1]){let Pt=[k[0]+d*1.1,k[1]+d*1.65,bt*d*2.43],Lt=[Oi(Pt[0],U,.48),Oi(Pt[1],H,.52)-d,bt*d*3.48],L=[U,H,bt*C*.93];h(o,Pt,Lt,d*.95),h(o,Lt,L,d*.76),u(j,L,[d*1.5,d*1.11,d*1.09]);let Z=t?0:bt*d*1.35,ct=[N[0]+d*(t?4.3:4.9)+Z,N[1]-d*3.5,bt*d*2.64],gt=[m[0]+d*(e==="scooter"?2.65:.35)+Z,m[1]+d*.27-Z,bt*d*2.5];h(tt,[N[0],N[1],bt*d*1.86],ct,d*1.12),h(tt,ct,gt,d*.88),u(ee.tire,[gt[0]+d*.25,gt[1],gt[2]],[d*2.15,d*.95,d*1.42])}let J=d*(t?1.34:.84),at=[p+d*.58,g*(t?2.3:2.18),0],Et=[y-d*.56,g*(t?2.18:2.02),0];h(ee.bumper,[p,g+d*1.5,0],at,d*.58),h(ee.bumper,[y,g*1.6,0],Et,d*.46);let xt=bt=>nu([[new Re(J,6,4).scale(.53,.78,1).translate(...bt),"#ffffff"]]);return lf(c,xt(at),xt(Et))}function Qm(i){let t=XS.get(i);if(t)return Km(t,!0);let e=WS.get(i);if(e)return JS(e);let n=VS.get(i);if(!n)return null;let s=ZS(n);jS(s);let{outer:r,nose:o,frontY:a,shoulder:c,bodyParts:l}=s,u=(f,h)=>nu([-1,1].map(d=>[new Ae(1.48,1.8,r*.35).translate(f*(o+.19),h,d*r*.63),"#ffffff"]));return lf(l,u(1,a-1.75),u(-1,c-2.65))}function tg(i){let t=YS.get(i);return t?Km(t,!1):null}var eg=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),Qi={stride:4,crossingSeconds:3.2},KS=242,ng=12,ig=.38,ag=new Map(tu.map(i=>[i.id,i])),sg=["seafoam-sedan","blue-wagon","butter-compact","ruby-motorcycle","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","teal-semi","indigo-motorcycle"].map(i=>ag.get(i)),QS=new Yt("#fff1cf"),tw=new Yt("#db514c");function ew(i){i.computeBoundingBox();let t=i.boundingBox;if(t.max.z-t.min.z<5)return[t.getCenter(new Y)];let e=(t.min.z+t.max.z)/2,n=[new Oe,new Oe],s=new Y,r=i.attributes.position;for(let o=0;o<r.count;o++)s.fromBufferAttribute(r,o),n[+(s.z>=e)].expandByPoint(s);return n.map(o=>o.getCenter(new Y))}var nw=`
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      opacity *= exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      opacity *= 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #endif
`;function rg(i){let t={...Zi.clone(Ht.fog),lightStrength:{value:1}};return new He({fog:!0,uniforms:t,transparent:!0,depthWrite:!1,blending:Yi,toneMapped:!1,vertexShader:`
      varying vec2 lightUv;
      ${i?"varying vec3 tint;":""}
      #include <fog_pars_vertex>
      void main() {
        lightUv = uv;
        ${i?`
          tint = instanceColor;
          vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mvPosition.xy += position.xy * vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz));
        `:"vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);"}
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,fragmentShader:`
      varying vec2 lightUv;
      uniform float lightStrength;
      ${i?"varying vec3 tint;":""}
      #include <fog_pars_fragment>
      void main() {
        ${i?`
          float radius = length(lightUv * 2.0 - 1.0);
          float bloom = 1.0 - smoothstep(0.06, 0.96, radius);
          float center = 1.0 - smoothstep(0.10, 0.38, radius);
          float opacity = bloom * bloom * 0.43 + center * 0.39;
          vec3 color = tint;
        `:`
          float along = lightUv.x;
          float width = mix(0.23, 1.0, smoothstep(0.02, 0.76, along));
          float softEdge = 1.0 - smoothstep(width * 0.22, width, abs(lightUv.y * 2.0 - 1.0));
          float falloff = smoothstep(0.0, 0.09, along) * pow(1.0 - along, 1.42);
          float opacity = softEdge * falloff * 0.39;
          vec3 color = vec3(1.0, 0.80, 0.53);
        `}
        ${nw}
        gl_FragColor = vec4(color, clamp(opacity * lightStrength, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `})}function iw({index:i,lane:t}){let e=Math.floor(i/Qi.stride),n=i%Qi.stride;return sg[(2*(e+n)+t)%sg.length]}function og({centerX:i,width:t,lanes:e}){let n=t-60,s=i-n/2,r=Math.max(1,ng*Math.round(n/(ng*KS))),o=n/r,a=e.map((y,p)=>Array.from({length:r},(m,x)=>({z:y,lane:p,index:x,x:s,offset:o*(x+.25+(r===1&&p?.5:0))}))),c=0,l,u,f,h=!1,d=[];function g(y,p,m,x=!1){let M=p?.severity==="ambient"?Qi:eg.get(p?.severity),_=Number.isFinite(l)&&Number.isFinite(y)?oe.clamp(y-l,0,.25):0;if(l=y,M!==u){h=!!(u&&M&&(M===Qi||u===Qi));let A=Math.min(r,M?.stride??1),b=M===Qi?Math.floor(A/2):1;d=M?a.flatMap((I,O)=>I.filter(({index:C})=>C%A===O*b%A)):[],u=M}if(!M)return f=void 0,d;let v=p.speedFactor,w=M===Qi?o*Math.min(r,Qi.stride)/(2*Qi.crossingSeconds):Number.isFinite(v)&&v>0?eg.get("clear").speed*oe.clamp(v,.22,1):M.speed;if(x)c=!m&&Number.isFinite(y)?Math.max(0,y)*w:0;else if(!m)if(h&&f!==void 0){let A=Math.exp(-_/ig),b=f-w;c+=_*w+b*ig*(1-A),f=w+b*A,h=Math.abs(f-w)>.1}else c+=_*w,f=w;c%=n;for(let A of d){let b=(A.offset+c)%n;A.x=s+(A.lane?n-b:b)}return d}return{capacity:r*e.length,update:g}}function cg(i){let t=new se,e=og(i),n,s=new Map;function r(x,M,_=e.capacity){let v=new si(x,M,_);return v.count=0,v.frustumCulled=!1,v.instanceMatrix.setUsage(kn),v}let o=r(new Rn(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new Be({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1})),a=r(new Cn(1,2).rotateX(-Math.PI/2).translate(.5,.16,0),rg(!1),e.capacity*2);a.name="road-headlight-beams";let c=r(new Cn(1,1),rg(!0),e.capacity*4);c.name="road-lamp-halos",a.visible=c.visible=!1,t.add(o,a,c);let l=new Xe,u=Math.abs(i.lanes[0]-i.lanes[1])/2,f,h=1;t.visible=!1;function d(x,M){for(let{mesh:_,role:v}of x.layers)v==="headlamp"&&(_.material.emissiveIntensity=M?2.45*h:.26),v==="taillamp"&&(_.material.emissiveIntensity=M?1.13*h:.28)}function g(x){if(s.has(x.id))return s.get(x.id);let M=new se;M.name=`vehicle-${x.id}`;let _=Qm(x.id).map(({geometry:A,material:b,role:I})=>({mesh:r(A,b),role:I}));M.add(..._.map(({mesh:A})=>A)),t.add(M);let v=A=>ew(_.find(b=>b.role===A).mesh.geometry),w={group:M,layers:_,headlamps:v("headlamp"),taillamps:v("taillamp"),count:0};return d(w,f),s.set(x.id,w),w}function y(x,M,_,v,w){let A=w?12.4:8.6;l.position.set(M.x+_*(v.x+(w?1.1:-1)),i.surfaceY+v.y+.8,M.z+_*v.z),l.scale.set(A,A,1),l.updateMatrix(),c.setMatrixAt(x,l.matrix),c.setColorAt(x,w?QS:tw)}function p(x,M,{reduceMotion:_=!1,night:v=!1,transientTelemetry:w=!1,headlightBrightness:A=1}={}){w&&(n??=og(i));let I=(w?n:e).update(x,M,_,w);if(t.visible=I.length>0,a.visible=c.visible=v&&t.visible,a.count=c.count=0,!t.visible)return;let O=Number.isFinite(A)?oe.clamp(A,.35,1.6):1;if(v!==f||O!==h){f=v,h=O,a.material.uniforms.lightStrength.value=O,c.material.uniforms.lightStrength.value=O;for(let N of s.values())d(N,v)}for(let N of s.values())N.count=0;let C=ag.get(M?.vehicleStyle),U=0,H=0;for(let[N,k]of I.entries()){let z=C??iw(k),W=g(z);l.position.set(k.x,i.surfaceY,k.z),l.rotation.y=k.lane?Math.PI:0,l.scale.set(1,1,1),l.updateMatrix();for(let{mesh:J}of W.layers)J.setMatrixAt(W.count,l.matrix);if(W.count++,l.scale.set(z.length*.55,1,z.width*.62),l.updateMatrix(),o.setMatrixAt(N,l.matrix),!v)continue;let tt=k.lane?-1:1,j=oe.clamp(z.length*1.1,53,86);for(let J of W.headlamps){let at=Math.max(5,Math.min(16,u-Math.abs(J.z)-1));l.position.set(k.x+tt*(J.x+1),i.surfaceY,k.z+tt*J.z),l.scale.set(j,1,at),l.updateMatrix(),a.setMatrixAt(U++,l.matrix),y(H++,k,tt,J,!0)}for(let J of W.taillamps)y(H++,k,tt,J,!1)}v&&(a.count=U,c.count=H,a.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0),o.count=I.length,o.instanceMatrix.needsUpdate=!0;for(let{group:N,layers:k,count:z}of s.values()){N.visible=z>0;for(let{mesh:W}of k)W.count=z,z&&(W.instanceMatrix.needsUpdate=!0)}}function m(){t.traverse(x=>{x.isInstancedMesh&&(x.dispose(),x.geometry.dispose(),x.material.dispose())}),t.clear()}return{root:t,update:p,dispose:m}}var lg=22,ug=63,sw=525,rw=1100,ow=22,aw=75,uf=75,cw=105,lw=54,uw=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],hg=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],hw=(i,t)=>(i%t+t)%t;function fw(i){let t=i.width-aw*2,e=[],n=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(i.centerX))return{walkers:e,cyclists:n,sample:()=>({walkers:e,cyclists:n})};let s=i.centerX-t/2,r=Math.max(1,Math.round(t/sw)),o=Math.max(1,Math.round(t/rw)),a=t/r,c=t/o;for(let[p,m]of(i.sidewalks??[]).entries()){let{minZ:x,maxZ:M,surfaceY:_}=m,v=M-x;if(![x,M,_].every(Number.isFinite)||v<=0)continue;let w=p%2?-1:1,A=Math.min(1,v/ow),b=x+v*(w>0?.25:.75),I=x+v*(w>0?.76:.24);for(let O=0;O<r;O++){let C=hg[(O+p*2)%hg.length],U=t/2+(O+p*.42)*a-35,H=`sidewalk-walk-${p}-${O}`;for(let[N,[k,z]]of C.entries())e.push({id:`${H}-${N}`,groupId:H,style:k,child:z<.8,offset:U-w*13.2*N,scale:A*z,direction:w,y:_,z:b+w*.62*(N%2),phase:O*.91+p*.8+N*2.1})}for(let O=0;O<o;O++)n.push({id:`sidewalk-bike-${p}-${O}`,style:eu[(O+p*2)%eu.length],offset:t/2+(O+p*.65)*c,scale:A,direction:w,y:_,z:I,phase:O*1.7+p})}let l=t/lg,u=t/ug,f=l+uf+u+cw,h=Math.max(0,l/2-lw),d=[-1,1].map(p=>e.find(m=>m.direction===p&&!m.child)).filter(Boolean),g=[-1,1].map(p=>n.find(m=>m.direction===p)).filter(Boolean);function y(p=0,m=!1,{night:x=!1,activity:M}={}){let _=Number.isFinite(p)?Math.max(0,p):0;if(M==="overnight")return{walkers:[],cyclists:[]};if(x||M==="evening"){if(m)return{walkers:[],cyclists:[]};let w=Math.floor((_+h)/f),A=(_+h)%f,b=A>=l+uf,I=b?A-l-uf:A,O=b?g:d,C=b?u:l;if(I>=C||!O.length)return{walkers:[],cyclists:[]};let U=O[(w+1)%O.length],H=I/C*t,N=s+(U.direction>0?H:t-H),k={...U,x:N,gait:I*(b?7:10)+U.phase};return b?{walkers:[],cyclists:[k]}:{walkers:[k],cyclists:[]}}let v=(w,A,b)=>w.map(I=>({...I,x:s+hw(I.offset+I.direction*A*_,t),gait:m?0:_*b+I.phase}));return{walkers:v(e,lg,10),cyclists:v(n,ug,7)}}return{walkers:e,cyclists:n,sample:y}}var iu={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function fg(i,t,e){let{shirt:n,trim:s,pants:r,skin:o,hair:a,accessory:c}=uw[i.style],l=t?0:Math.sin(i.gait),u=Math.abs(l)*.69,f=h=>h+u;e(n,0,f(10.45),0,2.95,4.3,3.4),e(r,-.1,f(7.25),0,2.6,1.7,3.04),e(s,1.1,f(13.35),0,2.14,.69,2.55),e(s,2.68,f(10.4),-.7,.41,.86,1);for(let h of[-1,1]){let d=l*h,g=d*3,y=Math.max(0,d)*1.35;e(r,g*.45,4.5+y*.42+u*.32,h*1.51,1.19,3.2,1.25,-.48*d),e(iu.shoe,.77+g,1.11+y,h*1.52,2.17,.99,1.34),e(iu.sole,1.38+g,.49+y,h*1.52,1.64,.43,1.32),e(n,-d*1.07,f(10.16),h*3.15,1.23,2.87,1.15,.38*d),e(o,-d*2.16,f(7.7),h*3.31,.98,1.1,.95)}e(a,-.67,f(17.25),0,4.17,4.32,3.82),e(o,1.05,f(16.63),0,3.76,3.75,3.41),e(a,1.12,f(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,f(16.54),0,.64,.63,.66);for(let h of[-1,1])e(o,.36,f(16.69),h*3.47,1.02,1.07,.64),e(iu.ink,4.18,f(17.25),h*1.35,.34,.47,.43),e(iu.blush,3.76,f(16.21),h*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,f(19.68),.72,1.98,1.89,1.89),e(s,-3.51,f(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(n,-.5,f(20.2),0,3.72,1.97,3.45),e(s,2.72,f(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,f(10.2),0,1.48,2.89,2.63),e(n,-4.01,f(10.65),0,.46,1.28,1.77)),c==="curls")for(let h of[-1,1])e(a,-.9,f(18.52),h*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,f(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,f(21.05),2.67,1.51,.92,.65,-.47))}function dg(i){let t=fw(i),e=new se;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let n=new Xe;function s(m,x,M,_){let v=new si(x,M,_);return v.name=m,v.frustumCulled=!1,v.instanceMatrix.setUsage(kn),e.add(v),v}let r=new Map,o=0;for(let m of t.walkers)fg(m,!0,x=>{o++,r.has(x)||r.set(x,new Yt(x))});let a=s("sidewalk-walkers",new Re(1,9,6),new Ye({color:"#fff",roughness:.81}),o),c=s("sidewalk-contact-shadows",new Rn(1,16).rotateX(-Math.PI/2),new Be({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),l=new Map(eu.map(m=>{let x=t.cyclists.filter(M=>M.style.id===m.id).length;return[m.id,x?tg(m.id).map(({geometry:M,material:_,role:v})=>({role:v,mesh:s(`sidewalk-bicycle-${m.id}-${v}`,M,_,x)})):[]]})),u,f=0,h,d,g;function y(m,{reduceMotion:x=!1,night:M=!1,transientTelemetry:_=!1,activity:v}={}){let w=M||v==="evening"||v==="overnight";if(w!==u){for(let k of l.values())for(let{role:z,mesh:W}of k)z==="headlamp"&&(W.material.emissiveIntensity=w?1.05:.16),z==="taillamp"&&(W.material.emissiveIntensity=w?.75:.18);u=w}if(!_){let k=Number.isFinite(h)&&Number.isFinite(m)?oe.clamp(m-h,0,.25):0;x||(f+=k),h=m}let A=_?x?0:m:f;if(d?.time===A&&d?.reduceMotion===x&&d?.transientTelemetry===_&&d?.night===M&&d?.activity===v)return;d={time:A,reduceMotion:x,transientTelemetry:_,night:M,activity:v};let b=t.sample(A,x,{night:M,activity:v}),I=b.walkers.length===t.walkers.length?"day":b.walkers[0]?.id,O=I!==g;g=I;let C=0,U=0;function H(k,z,W){n.position.set(k.x,k.y+.065,k.z),n.rotation.set(0,0,0),n.scale.set(z*k.scale,1,W*k.scale),n.updateMatrix(),c.setMatrixAt(U++,n.matrix)}for(let k of b.walkers){let{direction:z,scale:W}=k,tt=z>0?0:Math.PI;fg(k,x,(j,J,at,Et,xt,bt,Pt,Lt=0)=>{n.position.set(k.x+J*W*z,k.y+at*W,k.z+Et*W*z),n.rotation.set(0,tt,Lt),n.scale.set(xt*W,bt*W,Pt*W),n.updateMatrix(),O&&a.setColorAt(C,r.get(j)),a.setMatrixAt(C++,n.matrix)}),H(k,5.32,4.1)}let N=new Map;for(let k of b.cyclists){let z=N.get(k.style.id)??0;n.position.set(k.x,k.y,k.z),n.rotation.set(0,k.direction>0?0:Math.PI,0),x||n.rotateX(Math.sin(k.gait)*.028),n.scale.setScalar(k.scale),n.updateMatrix();for(let{mesh:W}of l.get(k.style.id))W.setMatrixAt(z,n.matrix);N.set(k.style.id,z+1),H(k,k.style.length*.52,k.style.width*.58)}for(let[k,z]of l)for(let{mesh:W}of z)W.count=N.get(k)??0,W.instanceMatrix.needsUpdate=!0;a.count=C,c.count=U,O&&a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0}function p(){for(let m of e.children)m.dispose(),m.geometry.dispose(),m.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:y,dispose:p}}var _a=Math.PI*2,{clamp:su,lerp:Rs}=oe,dw=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),pw=188,mw=490,gw=175,va=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],yw=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7},{id:"jet-ski",name:"Lagoon jet ski",length:30,beam:12.2,paint:"#438e90",deck:"#e7b768",center:514,radius:46,offshore:72,drift:6,period:16,start:.47,wake:.96,wakeSeconds:3.7},{id:"cruise-ship",name:"Pearl cruise ship",length:149,beam:41,paint:"#436b84",deck:"#e9c79d",center:76,radius:201,offshore:286,drift:23,period:148,start:1.53,wake:.56,wakeSeconds:8}];function Jr(i,t){let e=0,n=i.length-1;for(;n-e>1;){let o=e+n>>1;t<i[o].x?n=o:e=o}let s=i[e],r=i[n];return Rs(s.z,r.z,su((t-s.x)/(r.x-s.x),0,1))}function mg(i){if(!Array.isArray(i?.shoreline)||i.shoreline.length<2||![i.y,i.farZ,i.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:n}=i,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:yw.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=su(n+o.center,s+c,r-c);function u(f){let h=l+Math.cos(f)*a,d=Math.max(e+65,Jr(t,h)-o.offshore-Math.sin(f)*o.drift);return{x:h,z:d}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*_a/12);if(Jr(t,c)-l<o.length/2+8)return!1}return!0})}function xw(i,t=mg(i)){if(!t.length)return()=>null;let{shoreline:e,farZ:n}=i,s=e[0].x+120,r=e.at(-1).x-120,o=r-s;if(o<120)return()=>null;function a(u,f,h,d){let g=o/f,y=g+h,p=u.flatMap(x=>{let M=t.find(v=>v.id===x);if(!M)return[];let _=[1,-1].map(v=>({...M,start:0,period:g,point(w){let A=M.length*.55,b=su((v>0?s:r)+v*o*w/_a,e[0].x+A+8,e.at(-1).x-A-8),I=Math.min(Jr(e,b),Jr(e,b-A),Jr(e,b+A)),O=Math.max(n+65,I-M.offshore-Math.sin(w*2)*M.drift*.55);return{x:b,z:O}}}));for(let v=0;v<=20;v++){let{x:w,z:A}=_[0].point(v*_a/20);if(Jr(e,w)-A<M.length/2+8)return[]}return[_]});if(!p.length)return()=>null;let m=d(g,y);return x=>{let M=(Number.isFinite(x)?Math.max(0,x):0)+m,_=M%y;if(_>=g)return null;let v=Math.floor(M/y);return{route:p[v%p.length][v%2],elapsed:_}}}let c=a(["cabin","fishing"],37,pw,u=>Math.max(0,u/2-42)),l=a(["fishing"],29,mw,(u,f)=>f-gw);return(u,f)=>(f==="overnight"?l:c)(u)}function gg(i,t,e=.003){let n=i.point(t-e),s=i.point(t+e);return Math.atan2(n.z-s.z,s.x-n.x)}function vw(i,t,{condition:e}={}){let n=Number.isFinite(t)?t:0,s=i.start+n*_a/i.period,{x:r,z:o}=i.point(s),a=n*1.24+i.start*3,c=i.id==="jet-ski"?1.9:i.id==="cruise-ship"?.55:1,l=(dw.has(e)?1.55:1)*c;return{x:r,z:o,angle:s,yaw:gg(i,s),heave:Math.sin(a)*.55*l,pitch:Math.cos(a*.89)*.017*l,roll:Math.sin(a*.74+.4)*.031*l}}function yg(i,t){let e=new he;return e.setAttribute("position",new $t(i.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function xg(i){return yg(i,i.length===3?[0,1,2]:[0,1,2,0,2,3])}function Kr(i,t,e,n,s=1){let r=va.flatMap(([l,u])=>{let f=l*i,h=t*u*s/2;return[[f,n,-h*.58],[f,n,h*.58],[f,e-.9,h],[f,e,h*.88],[f,e,-h*.88],[f,e-.9,-h]]}),o=[],a=6,c=(va.length-1)*a;for(let l=0;l<c;l+=a)for(let u=0;u<a;u++){let f=(u+1)%a;o.push(l+u,l+u+a,l+f+a,l+u,l+f+a,l+f)}for(let l=1;l<a-1;l++)o.push(0,l,l+1,c,c+l+1,c+l);return yg(r,o)}function _w(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Yt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new Te(c,3)),r}),e=Yn(t);for(let n of t)n.dispose();return e}function ke(i,t,e,n,s,r){return new Ae(i,t,e).translate(n,s,r)}function $e(i,t,e,n,s,r,o=0){return new Re(1,12,7).scale(i/2,t/2,e/2).rotateZ(o).translate(n,s,r)}function cn(i,t,e){let n=new Y(...i),s=new Y(...t).sub(n),r=new dn().setFromUnitVectors(new Y(0,1,0),s.clone().normalize());return new je(e,e,s.length(),6).applyQuaternion(r).translate(...n.addScaledVector(s,.5).toArray())}function pg(i,t,e,n,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let f=Rs(Rs(t[0],e[0],l),n[0],u),h=Rs(Rs(t[1],e[1],l),n[1],u),d=Rs(Rs(t[2],e[2],l),n[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[f,h,d]};for(let l=0;l<o.length-1;l++){let u=o[l],f=o[l+1];for(let h=0;h<a;h++){let d=h/a,g=(h+1)/a,y=[c(d,u),c(g,u),c(g,f)];f<1&&y.push(c(d,f)),i.push([xg(y),r[l]])}}}function bw(i){let t=[3,43,0];i.push([cn([3,4,0],t,.9),"#c6a983"],[cn([3,11,0],[-25,10,-13],.6),"#c6a983"],[cn([28,5,0],t,.33),"#d7c5a8"],[cn([-25,5,0],t,.28),"#d7c5a8"],[ke(15,1.9,10,-13,5.4,0),"#a8886e"],[ke(9,1.5,7.5,-13,6.35,0),"#62797b"]),pg(i,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),pg(i,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function Mw(i){i.push([ke(28,8.5,17,-7,9.1,0),"#f1e5cc"],[ke(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[ke(9,.75,7,-9,15.5,0),"#8aa5a5"],[ke(9,2.2,11,-24,5.9,0),"#bc9472"],[xg([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[cn([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])i.push([ke(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);i.push([cn([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[cn([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function Sw(i){i.push([ke(15,6.1,13,6,7.9,0),"#e4d7ad"],[ke(17,1.4,14,6,11.65,0),"#71968e"],[ke(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[ke(9,3.4,7,-8,6.8,2.6),"#d7a674"],[ke(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[cn([-19,5,-5],[-28,16,-7],.45),"#907459"],[cn([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])i.push([ke(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new In(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function ww(i){i.push([$e(15.9,5.4,9,4.7,3.1,0,-.07),"#52a7a6"],[$e(11.3,4.9,5.1,4.4,4.6,0,-.33),"#e5ae68"],[$e(5.1,2.4,3.15,8.7,6.02,0,-.43),"#f5d591"],[$e(3.4,2.5,3.26,3.25,6.15,0,-.3),"#426575"],[$e(12.8,3.45,5.9,-4.45,4.76,0,.11),"#40535c"],[ke(5.8,.54,5.4,-11.3,2.88,0),"#7bb3a7"],[cn([2.9,5.7,0],[1.9,9.7,0],.52),"#69685d"],[cn([2.16,9.57,-3.35],[2.16,9.57,3.35],.4),"#53616a"],[$e(5.6,3.4,5.7,-3.8,6.35,0),"#5c738b"],[$e(6.06,7.3,5.45,-1.34,10.1,0,-.48),"#db7e59"],[$e(4.85,5.4,4.54,.02,11.1,0,-.48),"#efb36c"],[$e(4.84,5.2,4.82,1.37,15.38,0,-.15),"#f5dfaf"],[$e(2.34,2.04,4.67,2.55,15.37,0,-.12),"#4f637a"],[$e(.81,1.36,3.45,3.48,15.63,0,-.14),"#8eafb5"]);for(let t of[-1,1]){let e=t*3.01;i.push([$e(13.7,.75,1.52,-4.45,3.18,t*4.19),"#59646b"],[$e(6.2,2.32,1.64,-3.75,6.18,e,-.33),"#627a92"],[$e(4.25,1.52,1.44,-5.88,4.5,t*3.78,.86),"#51657a"],[$e(3.45,1.11,1.48,-5.58,3.43,t*4.05),"#334951"],[cn([-.87,11.64,t*2.02],[1.79,9.65,e],.79),"#d68868"],[$e(1.51,1.36,1.34,1.92,9.7,t*3.21),"#c98161"])}}function Ew(i,{length:t,beam:e}){let n="#f2e9d8",s="#fff3dc",r="#557788",o="#9fbdbe";i.push([ke(109,6.6,29.1,-4,10.27,0),n],[ke(110.2,1.15,31.3,-4,13.75,0),s],[ke(92,5.1,26.2,-3.5,16.7,0),n],[ke(94.7,1.02,28.1,-3.8,19.42,0),s],[ke(66.2,4.5,21.8,2.8,21.9,0),n],[ke(69.7,.91,24.7,2.9,24.44,0),s],[Kr(29,24,26.77,20.72,.86).translate(31,0,0),n],[Kr(30.3,25,25.6,23.86,.92).translate(31,0,0),r],[Kr(28.9,23,27.12,26.39,.9).translate(31,0,0),s],[ke(23.6,.76,15.3,-24.9,25,0),"#d6b18d"],[ke(19.4,.49,11.1,-24.9,25.51,0),"#81b9b5"],[ke(15.1,.16,8.7,-25.8,25.82,0),"#62a9b4"],[ke(12,.14,1.05,-24.6,25.9,2.82),"#a7d6cc"],[$e(12,2.13,8.2,15.4,25.76,0),"#dfe6d8"],[cn([27,27,0],[26.5,35.4,0],.58),"#e5e4d8"],[cn([24.1,33,-3.6],[24.1,33,3.6],.41),"#e5e4d8"],[$e(4.21,3.29,3.84,13.4,27.8,0),"#e9e9d9"],[$e(3.57,2.86,3.35,9.6,27.12,5.6),"#dedfce"]);for(let a of[-5.9,5.9])i.push([cn([1,24.8,a],[-1.47,34,a],2.51),"#dfa179"],[cn([-.94,32,a],[-1.62,34.62,a],2.55),"#9d5c54"],[$e(4.4,.46,4.62,-1.65,34.66,a),"#514e59"]);for(let a of[-1,1]){for(let[c,l,u,f]of[[101,10.86,14.67,6.4],[89,17.18,13.17,6.2],[61,22.1,10.97,5.9]])for(let h=-c/2;h<=c/2;h+=f)i.push([ke(3.61,2.05,.26,h,l,a*u),r],[ke(3.6,.33,.3,h,l+.61,a*u),o]);for(let c of[-42,-29,-16,-3,10,23])i.push([ke(9.3,.88,2.81,c,13.1,a*14.61),"#b5af9e"],[$e(10.53,2.75,3.83,c,13.37,a*15.49),"#dc9164"],[$e(9.12,1.04,3,c,14.33,a*15.49),"#f0c285"]);for(let c of[-56,-43,-30,-17,-4,9,22,35,48,57]){let l=c/t,u=va.findIndex(([p])=>p>=l),[f,h]=va[u-1],[d,g]=va[u],y=Rs(h,g,(l-f)/(d-f))*e/2;i.push([$e(2.1,1.74,.62,c,5,a*(y-.08)),"#78969e"])}i.push([cn([-46,19.95,a*13.74],[42,19.95,a*13.74],.4),o],[cn([-27,24.95,a*11.67],[26,24.95,a*11.67],.34),o],[cn([49,8.13,a*15.2],[67,8.13,a*5.1],.43),s])}}function Tw(i,t){let{id:e,length:n,beam:s,paint:r,deck:o}=i,a=new se;a.name=i.name;let c=e==="jet-ski"?1.76:e==="cruise-ship"?6.1:3.7,u=[[Kr(n,s,c,e==="jet-ski"?-1.32:e==="cruise-ship"?-4.92:-2.5),r],[Kr(n,s,c+.82,c-.15,1.018),"#f4e4c9"],[Kr(n*.92,s,c+1.05,c+.74,.83),o]];return e==="sailboat"?bw(u):e==="cabin"?Mw(u):e==="jet-ski"?ww(u):e==="cruise-ship"?Ew(u,i):Sw(u),a.add(new le(_w(u),t)),a}var As=12,Aw=new Yt("#def5e9");function Rw(i,t){let n=As*3*2,s=new he,r=new Te(new Float32Array(n*3),3).setUsage(kn),o=new Float32Array(n*4),a=[];for(let f=0;f<3;f++)for(let h=0;h<As;h++){let d=(f*As+h)*2,g=h/(As-1),y=Math.pow(Math.sin((.1+.9*g)*Math.PI),1.15)*(1-.4*g);for(let p=0;p<2;p++)Aw.toArray(o,(d+p)*4),o[(d+p)*4+3]=i.wake*y*(f===1?.22:.76);h<As-1&&a.push(d,d+2,d+1,d+1,d+2,d+3)}s.setAttribute("position",r),s.setAttribute("color",new Te(o,4)),s.setIndex(a);let c=new Be({vertexColors:!0,side:sn,transparent:!0,depthWrite:!1,opacity:.82}),l=new le(s,c);l.name=i.name+" wake",l.frustumCulled=!1;function u({angle:f},h,d=i){let y=(i.wakeSeconds??(i.id==="cabin"?4.1:6))*_a/d.period;for(let p=0;p<As;p++){let m=p/(As-1),x=f-y*m,M=gg(d,x),{x:_,z:v}=d.point(x),w=Math.cos(M),A=Math.sin(M),b=i.length*.48,I=_-w*b,O=v+A*b;for(let C=0;C<3;C++){let U=(C-1)*i.beam*(.19+m*.62),H=(C===1?1.85:.62)*(1+m*.55);for(let N=0;N<2;N++){let k=U+(N?H:-H);r.setXYZ((C*As+p)*2+N,I+A*k,t+.14,O+w*k)}}}r.needsUpdate=!0,c.opacity=h?.44:.82}return{mesh:l,update:u}}function vg(i){let t=new se;t.name="Coastal boats";let e=new Ye({vertexColors:!0,side:sn,roughness:.73}),n=mg(i),s=xw(i,n),r=new Re(1.35,8,6),o=["#ff896b","#8bf0b4","#fff1c4"].map(d=>new Be({color:d,toneMapped:!1})),a=n.map(d=>{let g=Tw(d,e),y=Rw(d,i.y),p;if(d.id==="cabin"||d.id==="fishing"){p=new se,p.name=`${d.name} running lights`;for(let[m,x]of[[.33,6.5,-.27],[.33,6.5,.27],[-.36,6.7,0]].entries()){let M=new le(r,o[m]);M.position.set(x[0]*d.length,x[1],x[2]*d.beam),p.add(M)}g.add(p)}return t.add(y.mesh,g),{route:d,hull:g,wake:y,lights:p}}),c=0,l,u=!1;function f(d,{reduceMotion:g=!1,night:y=!1,condition:p,transientTelemetry:m=!1,activity:x}={}){if(u)return;let M=Number.isFinite(d)?d:void 0;!m&&!g&&M!==void 0&&l!==void 0&&(c+=su(M-l,0,.25)),l=m?void 0:M;let _=m?g?0:M??0:c,v=y||x==="evening"||x==="overnight",w=v&&!g?s(_,x):null;for(let{route:A,hull:b,wake:I,lights:O}of a){let C=!v||w?.route.id===A.id;if(b.visible=C,I.mesh.visible=C,O&&(O.visible=v&&C),!C)continue;let U=w?.route??A,H=vw(U,w?.elapsed??_,{condition:p});b.position.set(H.x,i.y+H.heave,H.z),b.rotation.set(H.roll,H.yaw,H.pitch,"YXZ"),I.update(H,v,U)}}function h(){if(!u){u=!0;for(let{hull:d,wake:g}of a)d.children[0].geometry.dispose(),g.mesh.geometry.dispose(),g.mesh.material.dispose();e.dispose(),r.dispose();for(let d of o)d.dispose();t.clear()}}return f(0),{root:t,update:f,dispose:h}}var Cw=26,Iw=39,Pw=2.25,ru=2*Math.PI,Lw=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function Qr(i,t){let e=i.findIndex(r=>r.x>=t);if(e<1)return i[e===0?0:i.length-1].z;let n=i[e-1],s=i[e];return oe.lerp(n.z,s.z,(t-n.x)/(s.x-n.x))}function Nw(i,t){let{shoreline:e,focusX:n,y:s}=i??{},r=t?.farZ;if(![n,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,f){let h=l-u,d=l+u,g=e.filter(w=>w.x>h&&w.x<d).map(w=>w.z),y=Math.max(Qr(e,h),Qr(e,d),...g)+Cw,p=r-Iw;if(p-y<19)return null;let m=Math.min(f,(p-y)/2),x=(p+y)/2,M=Qr(e,l)+22,_=oe.clamp((r+.4-x)/(r+.4-M),0,1),v=s-.77+_*.43;return{x:l,y:v,z:x,halfWidth:u,halfDepth:m}}let a=o(n-72,46,18),c=o(n+68,27,15);return a||c?{court:a,castle:c}:null}function _g(i,t=0,e=!1){let n=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(i.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=i.court,f=n/Pw,h=f%1,d=Math.floor(f)%2?1:-1,g=Math.sin(Math.PI*h),y=u-16,p=Math.min(3.3,l*.22);r={x:o+d*y*(1-2*h),y:a+20.9+g*15.7,z:c+Math.sin(ru*h)*p,rotation:n*2.6,ground:a};for(let m of[-1,1]){let M=1-Math.min(1,(m!==d?1-h:h)/.24),_=e?.32:M*M;s.push({kind:"player",style:m<0?0:1,scale:1,yaw:-m*Math.PI/2,x:o+m*(y+6-_*2),y:a+_*1.65,ground:a,z:c+m*p*(.65+g*.35),reach:_,swing:Math.sin(n*3.15+m*.9)*.42})}}if(i.castle){let{x:o,y:a,z:c}=i.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(n*4.8),swing:e?0:Math.cos(n*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(n*2.5+.9),swing:e?0:Math.cos(n*2.5+.9)*.35})}return{actors:s,ball:r}}function Dw(i,t,e,n,s){let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new Yt(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Te(a,3)),r.translate(e,n,s)}function ou(i,t){let e=[],n=(c,l,u,f,h)=>e.push(Dw(c,l,u,f,h));t({add:n,box:(c,l,u,f,h,d,g)=>n(new Ae(c,l,u),f,h,d,g),cylinder:(c,l,u,f,h,d,g)=>n(new je(c,l,u,12),f,h,d,g)});let o=Yn(e);for(let c of e)c.dispose();let a=new Ye({vertexColors:!0,roughness:.86});i.add(new le(o,a))}function Uw({x:i,y:t,z:e,halfWidth:n,halfDepth:s}){let r=new se;r.name="beach-volleyball-court",r.position.set(i,t,e);let o=s-1;return ou(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",f="#f4e4bb";for(let h of[-1,1])a(n*2,.1,.56,l,0,.14,h*s),a(.56,.1,s*2,l,h*n,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,h*o),c(.93,.93,1.1,l,0,18.9,h*o),c(.85,.85,.76,f,0,20.48,h*o),a(.76,.54,o*2,f,0,h<0?10.1:19.5,0);for(let h=1;h<5;h++)a(.23,.23,o*2,u,0,10.2+h*1.83,0);for(let h=1;h<12;h++)a(.22,9.25,.24,u,0,14.8,o*(h/6-1))}),r}function Fw({x:i,y:t,z:e}){let n=new se;return n.name="beach-sandcastle",n.position.set(i,t,e),ou(n,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new Re(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new Re(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let f of[-1,1]){let h=f*6.15;o(2.44,3.35,7.9,a,h,4.05,-.8),o(2.66,2.52,1.03,c,h,8.03,-.8);for(let[d,g]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,h+d,8.99,-.8+g);r(1.07,.94,.3,l,h,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new he;u.setAttribute("position",new $t([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new In(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new Ae(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new Re(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),n}function Ow(){let i=new Re(3.25,24,12),t=i.toNonIndexed();i.dispose();let e=t.attributes.position,n=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new Yt(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=f=>(e[f](o)+e[f](o+1)+e[f](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/ru*n.length)%n.length,u=Math.abs(a("getY"))>2.85?n[1]:n[l];for(let f=0;f<3;f++)u.toArray(s,(o+f)*3)}t.setAttribute("color",new Te(s,3));let r=new le(t,new Ye({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function hf(i,t){let{skin:e,hair:n,shirt:s,shorts:r,trim:o,style:a}=Lw[i.style],c=i.kind==="beachgoer",l=i.kind==="surfer",u=i.kind==="builder"||c,f=c?9.25:u?7.8:l?10.7:12.2,h=f+(c?5.9:u?5.8:6.1),d=l?i.swing*.95:u?i.reach*1.15+.65:0,g=l?i.swing*.22:c?.11:u?.24:0;t(s,0,f,d*.43,3.72,4.1,2.85,g),t(r,0,f-3.4,0,3.34,1.65,2.8),t(o,0,f-1.95,2.45,3.03,.48,.59);for(let y of[-1,1]){if(l){t(r,y*2.45,5.35,1.26,1.58,2.66,1.49,.67,y*.4),t(e,y*3.76,2.93,.86,1.25,2.45,1.16,-.31,y*.17),t(e,y*4.13,1.01,.5,1.64,.73,1.27,0,y*.07);let p=f+1.2+y*i.swing*1.65;t(e,y*5.26,p,-.1,1.05,3.35,1.06,.22,-y*(1.08+y*i.swing*.28)),t(e,y*8.07,p+.43,.29,1.36,.96,1.02)}else if(c){let p=y<0?i.reach:.23;t(r,y*1.72,5,2.2,1.55,2.7,1.48,1.27),t(e,y*1.82,2.75,4.13,1.17,2.57,1.14,-.16),t(o,y*1.93,.92,5.06,1.25,.72,1.74),t(e,y*3.98,f-.3+p,1.15,1.02,2.45,1.05,-.62-p*.37),t(e,y*3.5,f-1.2+p*1.8,3.17,1.11,1.14,1.13),y<0&&t("#e7c8a1",-3.5,f-.18+p*1.8,3.82,.86,1.19,.86)}else{let p=u?.8:y*i.swing;t(r,y*1.65,u?3.5:6.4,p,1.55,2.3,1.49,u?.8:0),t(e,y*1.68,u?1.72:3.1,u?2.08:p,1.16,2.13,1.16),t(e,y*1.75,1.02,.88+p,1.28,.76,2.08);let m=u?f+.45:f+1.5+i.reach*2.1,x=u?2.4+i.reach*1.72:i.reach*.8,M=u?-.78-i.reach*.27:.12+i.reach*.62;t(e,y*(4.13-i.reach*.46),m,x,1.04,3.7,1.05,M,y*(u?.1:.24+i.reach*.55)),t(e,y*(4.1-i.reach*.53),m+(u?-1.65:i.reach*5.55-2.92),x+(u?2.7:i.reach*1.9),1.14,1.15,1.13)}t(e,y*3.48,h,d+.4,.84,.99,.78),t("#493a41",y*1.46,h+.38,d+3.41,.43,.47,.34),t("#c98878",y*2.22,h-.45,d+3.05,.54,.27,.26)}t(n,0,h+.64,d-.53,3.81,4.12,3.64),t(e,0,h,d+.72,3.25,3.29,2.89),t(e,0,h-.22,d+3.59,.53,.54,.59),t("#9b6b66",0,h-1.19,d+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,h+3.48,d+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,h+2.78,d+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(n,-.99,h+2.39,d+1.53,2.47,1.23,2.37),t(a==="bun"?n:o,2,h+3.23,d-1.66,1.41,1.43,1.39))}function ff(i,t,e,n,s=!1){let r=0;for(let f of t)hf(f,()=>r++);let o=new si(new Re(1,10,7),new Ye({color:"#fff",roughness:.76}),r);o.name=e,o.frustumCulled=!1,o.instanceMatrix.setUsage(kn),i.add(o);let a=n?new si(new Rn(1,20).rotateX(-Math.PI/2),new Be({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),t.length+Number(s)):null;a&&(a.name=n,a.frustumCulled=!1,a.instanceMatrix.setUsage(kn),i.add(a));let c=0,l=new Map;for(let f of t)hf(f,h=>{l.has(h)||l.set(h,new Yt(h)),o.setColorAt(c++,l.get(h))});let u=new Xe;return function(h,d){let g=0,y=0,p=(m,x,M,_,v)=>{a&&(u.position.set(m,x+.16,M),u.rotation.set(0,0,0),u.scale.set(_,1,v),u.updateMatrix(),a.setMatrixAt(y++,u.matrix))};for(let m of h){let{scale:x,yaw:M}=m,_=Math.cos(M),v=Math.sin(M);hf(m,(w,A,b,I,O,C,U,H=0,N=0)=>{u.position.set(m.x+x*(A*_+I*v),m.y+b*x,m.z+x*(-A*v+I*_)),u.rotation.set(0,M,0),u.rotateX(H),u.rotateZ(N),u.scale.set(x*O,x*C,x*U),u.updateMatrix(),o.setMatrixAt(g++,u.matrix)}),p(m.x,m.ground,m.z,5.25*x,4.47*x)}d&&p(d.x,d.ground,d.z,2.82,2.52),o.instanceMatrix.needsUpdate=!0,a&&(a.instanceMatrix.needsUpdate=!0)}}function Bw(i){let t=new se;t.name="beach-day-activities";let e=i.court?Uw(i.court):null,n=i.castle?Fw(i.castle):null,s=e?Ow():null;e&&t.add(e,s),n&&t.add(n);let r=ff(t,_g(i).actors,"beach-recreation-figures","beach-play-contact-shadows",!!s);return{group:t,render(o,a){let c=_g(i,o,a);if(r(c.actors,c.ball),!s)return;let{x:l,y:u,z:f,rotation:h}=c.ball;s.position.set(l,u,f),s.rotation.set(.25,h*.59,h)}}}function kw(i){let t=new se;t.name=`beach-surfboard-${i+1}`;let e=i?"#e5ac55":"#d57565",n=i?"#4d8f92":"#f3e5be";return ou(t,({add:s})=>{let r=(o,a,c,l,u,f,h)=>s(new Re(1,16,8).scale(l,u,f),h,o,a,c);r(0,.22,0,12.9,.78,3.61,"#e9dfc8"),r(.26,.63,0,12.68,.69,3.38,e),r(.45,1.23,0,10.08,.125,.91,n),r(-4.51,1.17,0,2.67,.14,2.47,i?"#e8dfbe":"#759f9d");for(let o=0;o<5;o++){let a=o/4;r(-9.8-a*15.1,-.39,(o%2?-1:1)*(2.6-a*1.58),2.86-a*1.1,.095,.92-a*.5,o%2?"#a4d7cc":"#e5f3de")}r(-17.4,-.44,.24,6.5,.082,.38,"#c4e5d8")}),t}function zw(i){let t=new se;t.name="beach-morning-surfers";let{shoreline:e,focusX:n,y:s,farZ:r}=i,o=[{offset:-82,radius:37,depth:49,drift:13,period:20,phase:.55,style:0,scale:.9},{offset:75,radius:34,depth:58,drift:14,period:22,phase:2.17,style:1,scale:.91}].filter(({offset:u,radius:f,depth:h,drift:d})=>{let g=n+u,y=g-f-26,p=g+f+26;return y>=e[0].x&&p<=e.at(-1).x&&Math.min(Qr(e,y),Qr(e,p),...e.filter(m=>m.x>y&&m.x<p).map(m=>m.z))-h-d-26>r});if(!o.length)return{group:t,render(){}};let a=o.map((u,f)=>kw(f));t.add(...a);function c(u){return o.map(({offset:f,radius:h,depth:d,drift:g,period:y,phase:p,style:m,scale:x})=>{let M=u%y/y*ru+p,_=n+f+h*Math.sin(M),v=Qr(e,_)-d+g*Math.cos(M),w=Math.atan2(g*Math.sin(M),h*Math.cos(M)),A=Math.sin(M*2+p);return{kind:"surfer",style:m,scale:x,yaw:w,x:_,z:v,y:s+1.7+A*.3,swing:Math.cos(M*2+p)*.5,swell:A}})}let l=ff(t,c(0),"beach-surfers");return{group:t,render(u){let f=c(u);for(let[h,{x:d,y:g,z:y,yaw:p,swell:m}]of f.entries())a[h].position.set(d,g-1.24,y),a[h].rotation.set(0,p,0),a[h].rotateX(m*.075),a[h].rotateZ(-m*.027);l(f)}}}var ba=["#e7713c","#ef9251","#e97e44","#f2a954","#f7b35d","#ffcf79","#ffde91","#ffb34e","#fbc86e","#ffd281","#ffbd72"];function Hw(i,t){let e=new se;return e.name=`beach-firepit-${t+1}`,e.position.set(i.x,i.y,i.z),ou(e,({add:n,box:s})=>{n(new Re(1,14,6).scale(7.15,.51,6.72),"#80605a",0,.14,0);for(let r=0;r<11;r++){let o=r*ru/11,a=["#ab8b78","#a39288","#bb9c84"][r%3];n(new Io(1).scale(1.91,1.25,1.57).rotateY(o),a,Math.cos(o)*6.82,1.05,Math.sin(o)*6.19)}for(let[r,o,a]of[[.43,1.33,"#9b6147"],[1.42,2.1,"#79473c"],[-.89,2.58,"#a36a4a"]])n(new je(1.15,1.38,9.1,7).rotateZ(Math.PI/2).rotateY(r),a,0,o,0);for(let[r,o]of[[-1,1.25],[1,-1.25]])n(new je(2.2,2.61,13.9,8).rotateX(Math.PI/2),"#a67e60",r*16.5,2.48,o),n(new je(1.61,1.77,.15,8).rotateX(Math.PI/2),"#dab18b",r*16.5,2.48,o+7.01),s(4.84,.83,5.8,t?"#c98673":"#7ea8a1",r*16.23,4.68,o)}),e}function Gw(i){let t=new se;t.name="beach-evening-bonfires";let e=[i.court??i.castle];t.add(...e.map(Hw));function n(l){let{x:u,y:f,z:h}=e[0];return[{kind:"beachgoer",style:0,scale:.95,yaw:Math.PI/2,x:u-16.23,y:f,ground:f,z:h+1.25,reach:.36+Math.sin(l*1.42-1.35)*.27}]}let s=ff(t,n(0),"beach-bonfire-figures","beach-bonfire-contact-shadows"),r=new si(new Re(1,9,7),new Be({toneMapped:!1}),e.length*ba.length);r.name="beach-bonfire-flames",r.frustumCulled=!1,r.instanceMatrix.setUsage(kn);for(let l=0;l<r.count;l++)r.setColorAt(l,new Yt(ba[l%ba.length]));let o=new He({uniforms:{warmth:{value:.86},tint:{value:new Yt("#ffad5f")}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),a=new si(new Rn(1,28).rotateX(-Math.PI/2),o,e.length);a.name="beach-bonfire-sand-glow",a.frustumCulled=!1;let c=new Xe;for(let[l,{x:u,y:f,z:h,halfDepth:d}]of e.entries())c.position.set(u,f+.19,h),c.scale.set(23,1,Math.min(19,d+1)),c.updateMatrix(),a.setMatrixAt(l,c.matrix);return a.instanceMatrix.needsUpdate=!0,t.add(a,r),{group:t,render(l){s(n(l));for(let[u,{x:f,y:h,z:d}]of e.entries()){let g=u*1.71;for(let y=0;y<ba.length;y++){let p=l*4.5+y*2.39+g,m=Math.sin(p)*.5+.5,x=y*2.39+g;if(y<7){let M=y<5?2.05:.78,_=y<5?3.18+m*1.58:2.78+m*1.09;c.position.set(f+Math.cos(x)*M,h+_+1.05,d+Math.sin(x)*M),c.rotation.set(Math.sin(x)*.2,x,Math.cos(x)*.24),c.scale.set(1.21+m*.54,_,1.18+m*.46)}else{let M=(l*(.32+y*.019)+y*.234+g)%1,_=.79*(1-M)+.13;c.position.set(f+Math.cos(x+M)*(2.45+M*6.2),h+8.8+M*15,d+Math.sin(x+M)*(1.74+M*4.4)),c.rotation.set(0,0,.2),c.scale.set(_,_*1.33,_)}c.updateMatrix(),r.setMatrixAt(u*ba.length+y,c.matrix)}}r.instanceMatrix.needsUpdate=!0,o.uniforms.warmth.value=.83+Math.sin(l*5.25)*.11}}}function bg(i,t){let e=new se;e.name="beach-play";let n=Nw(i,t);if(!n)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s={morning:zw(i),day:Bw(n),evening:Gw(n)};e.add(...Object.values(s).map(({group:h})=>h));let r,o=0,a,c,l;function u(h,{reduceMotion:d=!1,transientTelemetry:g=!1,activity:y="day",night:p=!1}={}){let m=y==="overnight"?y:p?"evening":Object.hasOwn(s,y)?y:"day";if(!g){let M=Number.isFinite(r)&&Number.isFinite(h)?oe.clamp(h-r,0,.25):0;d||(o+=M),r=h}let x=d?.96:g?Number.isFinite(h)?Math.max(0,h):0:o;if(!(x===a&&d===c&&m===l)){if(a=x,c=d,m!==l){for(let[M,{group:_}]of Object.entries(s))_.visible=m===M;l=m}s[m]?.render(x,d)}}u(0);function f(){e.traverse(h=>{h.isMesh&&(h.isInstancedMesh&&h.dispose(),h.geometry.dispose(),h.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:u,dispose:f}}var Vw=new Y(0,-1,0),Ww=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],df=.01;function Mg(i){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(i)}function wg(i){return!i.isMesh||!i.geometry?!1:(Array.isArray(i.material)?i.material:[i.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function Xw(i){i.updateWorldMatrix(!0,!0);let t=[];i.traverseVisible(a=>{if(!wg(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let n=new Oe;for(let a of t)a.min.y<=e+df&&n.union(a);let s=n.getCenter(new Y),r=n.getSize(new Y),o=e-i.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-i.position.x,centerZ:s.z-i.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function Yw(i,t){let{type:e}=i;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"||e==="diningTable"?[44.65,46.45]:e.includes("dining-set")||e.includes("dining-table-")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function qw(i,t){let[e,n]=Yw(i.item,t);if(![e,n,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new Oe().setFromObject(s);return r.isEmpty()?null:{placement:i,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:n*s.scale.y}}function Sg(i,t){let e=t?.[i.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:i}function Eg(i,t){return i.intersectObject(t,!0).find(e=>wg(e.object))}function Tg(i,{low:t,high:e}){return i?.face?.normal.y>=.92&&i.point.y>=t&&i.point.y<=e}function Zw(i,t,e,n,s,r){let o=t.x+e.centerX-n.x,a=t.z+e.centerZ-n.z,{bounds:c,probe:l,rootY:u}=i;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let f=-1/0;for(let[h,d]of Ww){r.set(o+h*e.radiusX,c.max.y+1,a+d*e.radiusZ),s.set(r,Vw);let g=Eg(s,l);if(!Tg(g,i))return null;f=Math.max(f,g.point.y)}return u+f}function Ag(i,t){let e=[],n=[];for(let c of i){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=Mg(c.item);if(u==="surface"){let f=qw(c,l);f&&e.push(f)}else if(u==="tabletop"){let f=Xw(l.root);f&&n.push({placement:c,foot:f})}}let s=new xs,r=new Y;function o(c){let l=new Map;for(let{placement:u,foot:f}of n){let h=Sg(u,c),d=null,g=u.baseY,y=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let m=Sg(p.placement,c),x=Zw(p,h,f,m,s,r);if(x===null||x<=u.baseY||x<g-df)continue;let M=p.placement.item.id,_=Math.hypot(h.x-m.x,h.z-m.z);Math.abs(x-g)<df&&(_>y||_===y&&M>d)||(d=M,g=x,y=_)}l.set(u.item.id,{y:g-f.bottom,supportId:d})}return l}function a(c,l){if(Mg({type:c})!=="tabletop")return null;let u=new xs(void 0,void 0,l.near,l.far),f=new Y,h;for(let d of e){let{x:g,z:y}=d.placement;f.copy(l.ray.origin).sub(r.set(g,d.rootY,y)),u.set(f,l.ray.direction);let p=Eg(u,d.probe);p&&(!h||p.distance<h.hit.distance||p.distance===h.hit.distance&&d.placement.item.id<h.surface.placement.item.id)&&(h={hit:p,surface:d,x:g,z:y})}return!h||!Tg(h.hit,h.surface)?null:{x:h.x+h.hit.point.x,y:h.z+h.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:au,sin:Ks,cos:cu}=Math,Bi=au*2,$w=new Y(0,1,0),Js=["#86684f","#9a7c5b","#735844"],pf=["#92745a","#ac8f69","#785c49"],mf=["#537759","#6b8a55","#849a58","#a0ab63"],gf=["#3e6251","#4d7056","#61815d","#789365"],yf=["#4a6653","#567552","#6b8659","#819863"],jw=["#517553","#64845a","#799660","#98a869"],Jw=["#617d69","#72917a","#8ea17e","#a7b08a"],Kw=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],Rg=240,Qw=new Set(["windy","windy-variant"]),Ma=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function Cg(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Hn(i,t,e){return[cu(i)*t,e,Ks(i)*t]}function Mn(i,[t,e,n]){return[i[0]+t,i[1]+e,i[2]+n]}function tE(i,t,e,n,s){let r=(c,l)=>i.add(c,l,t,e,n);function o(c,l,u,f,h,d=7){let g=new Y(...l),y=new Y(...u),p=y.clone().sub(g),m=new dn().setFromUnitVectors($w,p.clone().normalize()),x=new je(h,f,p.length(),d),M=g.lerp(y,.5);r(x.applyQuaternion(m).translate(M.x,M.y,M.z),c)}function a(c,l,u,f=.13,h=6){let d=new Re(1,9,h),g=d.getAttribute("position"),y=s()*Bi;for(let p=0;p<g.count;p++){let m=g.getX(p),x=g.getY(p),M=g.getZ(p),_=1+f*(Ks(m*5.8+x*3.2+M*2.1+y)*.7+cu(M*7.8-x*2.2+y)*.3);g.setXYZ(p,m*_*u[0],x*_*u[1],M*_*u[2])}d.computeVertexNormals(),r(d.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function xf(i,t,e,n,s,r,o){let a=[cu(e),Ks(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=i.positions.length/3;for(let[f,[h,d]]of l.entries()){let g=s*d,y=t[0]+h*n*a[0],p=t[1]+Ks(h*au)*r-o*h*h,m=t[2]+h*n*a[1];for(let M of[-1,0,1])i.positions.push(y+M*g*c[0],p+(M===0?g*.29:0),m+M*g*c[1]),i.uvs.push((M+1)*.5,h);if(f===0)continue;let x=u+(f-1)*3;for(let M of[0,1]){let _=x+M;i.indices.push(_,_+1,_+3,_+1,_+4,_+3)}}}function eE(i,t,e){let n=new he;n.setAttribute("position",new $t(e.positions,3)),n.setAttribute("uv",new $t(e.uvs,2)),n.setIndex(e.indices),n.computeVertexNormals(),i(n,t)}function nE(i,t,e,n){let{draw:s,branch:r,crown:o,random:a}=i,c=t*(n?.063:.125),l=y=>Hn(e,c*y*y,t*y*(n?.85:.86)),u=y=>t*(n?.029:.024)*(1-.53*y),f=n?5:6;for(let y=0;y<f;y++){let p=y/f,m=(y+1)/f;r(pf[0],l(p),l(m),u(p),u(m),9)}for(let y=1;y<=13;y++){let p=y*.067;r(pf[y%3?1:2],l(p-.0045),l(p+.0045),u(p)*1.04,u(p)*1.04,9)}let h=l(1);o(mf[0],h,[t*.045,t*.036,t*.048],.08,5);for(let y=0;y<4;y++)o(pf[2],Mn(h,Hn(e+y*Bi/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let d=mf.map(()=>({positions:[],uvs:[],indices:[]})),g=n?9:10;for(let y=0;y<g;y++){let p=e+y*Bi/g+(a()-.5)*.18,m=y%3===0,x=t*((m?.35:.29)+(a()-.5)*.07),M=t*(m?.026:.077),_=t*(m?.072:.025);if(xf(d[(y+1)%4],h,p,x,t*.012,M,_),n){let v=Mn(h,Hn(p,x*.43,M*.7));for(let w=-3;w<=3;w++)xf(d[(y+w+4)%4],v,p+w*.19,x*(.58-Math.abs(w)*.055),t*(.016-Math.abs(w)*.0018),M*.32,_*.84)}else for(let v=0;v<7;v++){let w=.19+v*.104,A=Mn(h,Hn(p,x*w,Ks(w*au)*M-_*w*w));for(let b of[-1,1])xf(d[(y+v+(b>0?1:0))%4],A,p+b*(.83-w*.37),t*(.095-w*.048),t*(.0095-w*.003),t*.014,t*.025)}}for(let[y,p]of d.entries())eE(s,mf[y],p)}function vf(i,t,e,n,s=.84){let{branch:r}=i,o=a=>Hn(e,t*n*(a*a+.16*Ks(au*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(Js[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*Bi/4;r(Js[2],Hn(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(Js[1],Hn(c,t*.039,t*.025),Mn(o(.36),Hn(c,t*.031,0)),t*.004,t*.002,4)}return o}function iE(i,t,e){let{crown:n,random:s}=i,r=vf(i,t,e,.018,.94);n(gf[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let f=0;f<u;f++){let h=e+f*Bi/u+o*2.5,d=Mn(r(o),Hn(h,t*a,t*((s()-.5)*.035)));n(gf[(f+u)%4],d,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}n(gf[2],Mn(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function sE(i,t,e){let{branch:n,crown:s,random:r}=i,o=vf(i,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let f=e+u*Bi/l+a*7+(r()-.5)*.22,h=o(a),d=Mn(h,Hn(f,t*c,t*(.02+r()*.028)));n(Js[1],h,d,t*.017,t*.0037,6);let g=Mn(d,[0,t*.029,0]);s(yf[u%3],g,[t*c*.46,t*.054,t*c*.45],.21,5),s(yf[(u+2)%4],Mn(g,Hn(f-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(yf[3],Mn(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function rE(i,t,e,n){let{branch:s,crown:r,random:o}=i,a=n==="olive",c=n==="jacaranda",l=a?Jw:c?Kw:jw,u=vf(i,t,e,a?.1:.034,a?.78:.84),f=a?5:6;for(let d=0;d<f;d++){let g=e+d*Bi/f+(o()-.5)*.33,y=u(.46+o()*.12),p=t*(.16+o()*.07),m=Mn(y,Hn(g,t*.12,p*.58)),x=Mn(y,Hn(g+.16,t*(.19+o()*.052),p));s(Js[1],y,m,t*.026,t*.016,7),s(Js[0],m,x,t*.0165,t*.0045,6);let M=t*(.092+o()*.03);r(l[d%2],Mn(x,[0,t*.024,0]),[M,t*(a?.064:.104),M*.87],.21,5);for(let _ of[-1,1]){let v=Mn(x,Hn(g+_*1.18,t*.055,t*.05));s(Js[0],m,v,t*.012,t*.003,5);let w=t*(.063+o()*.027);r(l[c?2+(d+(_>0?1:0))%3:1+d%3],Mn(v,[0,t*.022,0]),[w,w*(a?.63:.88),w*.91],.21,5)}}let h=Mn(u(1),[0,t*.023,0]);r(l[2],h,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),Mn(h,Hn(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function Ig(i,t,e){let n=Math.imul(Math.round(i*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:n}function Pg(i,t){return Number.isFinite(t)?oe.clamp(t,32,200):Ma[i].height}function oE(i,{kind:t,x:e,z:n,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn(Ma,t)||![e,n,s].every(Number.isFinite))return!1;let a=Pg(t,r),c=Cg(Ig(e,n,o)),l=c()*Bi,u=tE(i,e,s,n,c);return t==="fan-palm"||t==="date-palm"?nE(u,a,l,t==="fan-palm"):t==="cypress"?iE(u,a,l):t==="shore-pine"?sE(u,a,l):rE(u,a,l,t),!0}function aE(i=0,t={}){let{windSpeed:e,windBearing:n,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?oe.clamp(e,0,22):Qw.has(r)?6:0,a=Number.isFinite(n)?(n%360+360)%360:270,c=oe.degToRad(a),l=Number.isFinite(i)?Math.max(0,i)%Rg:0;return{x:-Ks(c),z:cu(c),phase:Bi*l/Rg,strength:s?0:o*.0048}}var cE=`
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
`;function Lg(i){let t=new Set,e={roomcraftTreeDirection:{value:new Nt(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function n(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${cE}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:f}=o;if(!Object.hasOwn(Ma,a))return!1;let h=Pg(a,c),d=Cg(Ig(l,u,f))()*Bi;return oE({add(g,y,...p){let m=g.getAttribute("position"),x=new Float32Array(m.count*3);for(let M=0;M<m.count;M++)x[M*3]=m.getY(M)/h,x[M*3+1]=h,x[M*3+2]=d;g.setAttribute("roomcraftTreeWind",new Te(x,3)),n(i.material(y)),i.add(g,y,...p)}},o)}function r(o,a){let c=aE(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var to=Math.PI/180,Sf=14,Gg=56,lE=21,ti=-111,Cs=-108,Vg=14,uE=28,Sa=28,Ng={minX:0,maxX:1536,minZ:0,maxZ:1024},_f={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},bf={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},hE=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),fE=new Set(["snowy","snowy-rainy"]),Dg={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42};function fu(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function hu(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function Wg(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function Xg(i,t,e,n){let s=i.some(o=>hu(o,e-t.dz*23,n+t.dx*23));return i.some(o=>hu(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function dE(i,t,e){if(!Object.hasOwn(Dg,e.type))return null;let n=Wg(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):Xg(i,s,r,o),l=(Sf/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(Dg[e.type],Gg-8)}}function Ug(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function Fg(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function pE(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function Og(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function lu(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function Yg(i){return Object.hasOwn(bf,i.finish)?bf[i.finish]:bf.graphite}function mE(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function Bg(i,t,e){let[n,s]=mE(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=oe.clamp(s/i.item.h+.5,0,1);return Cs-Cs*r}function uu(i,t,e){return hu(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?oe.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=Sf/2})}function gE(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(f=>uu(f,n,s)),o=t.some(f=>Wr(f)&&uu(f,n,s)&&uu(f,i.x1,i.y1)&&uu(f,i.x2,i.y2)),a=r?0:ti,c=a;if(!o)for(let f of e){let h=Bg(f,i.x1,i.y1),d=Bg(f,i.x2,i.y2);if(h!==null&&d!==null){a=h,c=d;break}}let[,l,u]=Yg(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/uE)))}}function wf(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(v=>v?.points?.length>=3&&v.points.every(w=>Number.isFinite(w?.x)&&Number.isFinite(w?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(v=>!Wr(v)):e,s=i.walls.map(Ug).filter(Boolean),r=s.filter(v=>v.kind!=="fence"),o=i.items.filter(v=>typeof v?.id=="string"&&typeof v.type=="string"&&[v.x,v.y,v.w,v.h].every(Number.isFinite)&&v.w>0&&v.h>0),a=Og(),c=Og(),l=(v,w)=>lu(a,v,w);for(let v of e)for(let w of v.points)l(w.x,w.y);for(let v of s)l(v.x1,v.y1),l(v.x2,v.y2);for(let v of n)for(let w of v.points)lu(c,w.x,w.y);for(let v of r)lu(c,v.x1,v.y1),lu(c,v.x2,v.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:Ng},f=new Map(r.map(v=>[v.id,v])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(v=>f.has(v))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[u.minX-10,f.get("w4").y2]].map(([v,w])=>({x:v,y:w})),southDeck:[[u.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([v,w])=>({x:v,y:w})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(v=>h?!(v.id==="w3"&&Fg(v,[400,408,342,468]))&&!(v.id==="w7"&&Fg(v,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:v,x2:w,z1:A}=h.recess;if(w>v){let b=[[v,f.get("w12").y2,v,A],[v,A,w,A]];for(let[I,O]of b.entries()){if(d.some(z=>pE(z,O)))continue;let[C,U,H,N]=O,k=Ug({id:`reference-recess-${I}`,x1:C,y1:U,x2:H,y2:N});k&&d.push(k)}}}let g=new Map;for(let v of o.filter(w=>w.type==="window")){let w=Wg(d,v.x,v.y,(v.rotation||0)*to);if(!w||w.distance>27)continue;let{wall:A,t:b,centerX:I,centerZ:O}=w,C=Math.max(1,b-v.w/2+1),U=Math.min(A.length-1,b+v.w/2-1);if(U-C<14)continue;A.openings.push({start:C,end:U});let H=Xg(n,A,I,O),N=A.angle+(H<0?Math.PI:0),k=(C+U)/2;g.set(v.id,{x:A.x1+k*A.dx,z:A.y1+k*A.dz,angle:N,window:{...v,w:U-C+2,rotation:N/to}})}let y=o.filter(v=>v.type==="garageDoor"),p=o.map(v=>{let w=v.type==="cameraThumbnail"&&y.some(k=>RE(v,k))?ti:Zg(v.type),A=v.type==="controlZone"&&(v.visualKind==="window"||v.entityId?.startsWith("cover.")),b=g.get(v.id)??dE(n,d,v);if(A){let k=52;for(let z of g.values()){let W=Math.hypot(z.x-v.x,z.z-v.y);W<k&&(b=z,k=W)}}let I=b?.x??v.x,O=b?.z??v.y,C=b?.angle??(Number.isFinite(v.rotation)?v.rotation*to:0),U=v.type==="stairs"?1536:300,H=Math.min(U,(Math.abs(Math.cos(C))*v.w+Math.abs(Math.sin(C))*v.h)/2),N=Math.min(U,(Math.abs(Math.sin(C))*v.w+Math.abs(Math.cos(C))*v.h)/2);return l(I-H,O-N),l(I+H,O+N),{item:v,x:I,z:O,baseY:w,angle:C,window:b?.window,mountY:b?.mountY,isBlind:A}});for(let v of d)v.openings.sort((w,A)=>w.start-A.start||w.end-A.end);let m=p.filter(({item:v})=>v.type==="stairs").map(v=>{let{item:w,x:A,z:b,angle:I}=v,O=Number.isInteger(w.steps)&&w.steps>=2&&w.steps<=40?w.steps:Vg,C=Math.min(46,Math.max(12,w.w*.47)),U=-w.h/2-C;for(let H of[-w.w/2,w.w/2])l(A+H*Math.cos(I)-U*Math.sin(I),b+H*Math.sin(I)+U*Math.cos(I));return{...v,steps:O,apronDepth:C}}),x=s.filter(v=>v.kind==="fence").map(v=>gE(v,e,m)),M=qh(e,h,t),_=hm(d.map(v=>({...v,palette:Yg(v)})),Sf,Gg,lE);return Number.isFinite(a.minX)||Object.assign(a,Ng),{rooms:e,walls:d,fences:x,stairs:m,placements:p,bounds:a,houseBounds:u,reference:h,floorStructure:M,wallStructure:_,editableStructure:t}}function kg(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function Ef([i,...t]){let e=kg(new Jn,i);return e.holes=t.map(n=>kg(new Bs,n)),e}function yE(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=fu(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let f=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let h=30+u*47%181;s.fillRect(h,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=c()*256,y=f+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(g,y),s.quadraticCurveTo(g+p/2,y+c()*2-1,g+p,y),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new Cr(n);return l.colorSpace=en,l.wrapS=l.wrapT=Us,l}function Mf(i){let t=new Map,e=new be,n=new dn,s=new Y,r=new Y(0,1,0),o=new Y(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new Lr({color:d})),a.get(d));function l(d,g,y,p,m,x=0){n.setFromAxisAngle(r,x),e.compose(s.set(y,p,m),n,o),d.applyMatrix4(e);let M=c(g);t.has(M)||t.set(M,[]),t.get(M).push(d)}function u(d,g,y,p,m,x,M,_=0){d>0&&g>0&&y>0&&l(new Ae(d,g,y),p,m,x,M,_)}function f(d,g,y,p,m,x,M){let _=new Re(1,9,6);_.scale(d,g,y),l(_,p,m,x,M)}function h(){for(let[d,g]of t){let y=Yn(g);if(!y){for(let p of g)i.add(new le(p,d));continue}i.add(new le(y,d));for(let p of g)p.dispose()}t.clear()}return{add:l,ball:f,box:u,material:c,finish:h}}function xE(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(_f,r)?r:"oak";if(!s.has(a)){let c=_f[a],l=yE(n,c,141+Object.keys(_f).indexOf(a)*977);s.set(a,new Lr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new hs(Ef(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,u.getX(d)/248,u.getZ(d)/248);let h=new le(l,s.get(a));h.receiveShadow=!0,i.add(h)}}for(let r of e.floorStructure.footprint)zg(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)zg(t,r,ti-1,-22,"#a18e84",!0)}function vE(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new Te(e,1))}return i}function zg(i,t,e,n,s,r=!1){let o=new Xi(Ef(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(vE(o),s,0,e,0)}function _E(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,f,t,f,0)}let r=new he;return r.setAttribute("position",new $t(e,3)),r.setAttribute("uv",new $t(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function Hg(i,t){let e=new hs(Ef(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function bE(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(Hg(o,!1),r,0,s,0);for(let o of e.bottom)i.add(Hg(o,!0),r,0,n,0);e.sides.length&&i.add(_E(e.sides,s-n),r,0,n,0)}}function ME(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:f,posts:h,color:d,postColor:g}=n,y=l-c,p=new Ae(Math.hypot(u,y),5,7);p.rotateZ(Math.atan2(y,u)),i.add(p,d,(s+o)/2,(c+l)/2+Sa,(r+a)/2,-f);for(let m=0;m<=h;m++){let x=m/h,M=oe.lerp(s,o,x),_=oe.lerp(r,a,x),v=oe.lerp(c,l,x),w=[M,v,_].map(A=>Math.round(A*1e3)).join(",");e.has(w)||(e.add(w),i.box(5,Sa,5,g,M,v+Sa/2,_,-f))}}}function qg(i,t,e,n,s=0,r=0){let o=e/n,a=-Cs/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let f=r-e/2+o*u,h=u===n-1?0:Cs+(u+1)*a,d=h-3;i.box(t,d-ti,o,"#a98075",s,(ti+d)/2,f+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,f+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,d+3.35/2,f+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,d+3.4/2,f+l/2)}}function SE({item:i,steps:t,apronDepth:e}){let n=new se,s=Mf(n);qg(s,i.w,i.h,t);let r=Cs-ti;return s.box(i.w,r,e,"#c8b79e",0,ti+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:Cs/2}}function wE(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=Vg,u=r-s,f=u/l,h=Cs,d=-h/l;qg(i,a,u,l,c,(s+r)/2);for(let _=0;_<l;_++){let v=s+f*(_+.5),w=h+(_+1)*d;i.box(5,24,5,"#9f8183",e+4,w+12,v)}let g=f*(l-1),y=d*(l-1),p=new Ae(7,5,Math.hypot(g,y)+5);p.rotateX(-Math.atan2(y,g)),i.add(p,"#896e79",e+4,24-y/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[m,x]=o,M=Math.max(2,Math.ceil((x.x-m.x)/28));i.box(x.x-m.x,5,7,"#896e79",(x.x+m.x)/2,28,m.y);for(let _=0;_<=M;_++)i.box(5,28,5,"#9f8183",m.x+(x.x-m.x)*_/M,14,m.y)}function EE(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=fu(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let f=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new Cr(t);return s.wrapS=s.wrapT=Us,s.repeat.set(15,10),s.colorSpace=en,s.anisotropy=4,s}function TE(i,t,e,n){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=fu(150741);if(!t.editableStructure){let g=Math.min(90,c*.18),y=t.reference?t.reference.left+g/2:s+g/2;i.box(g,4,115,"#c7baa4",y,-109,o-88);for(let p=0;p<5;p++)i.box(g*.85,1.8,13,"#dbceba",y,-106,o-137+p*20)}let f=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[g,y]of f){let p=s+g*c,m=o+y*l,x=21+u()*24;i.ball(x*.94,9,x*.67,"#6d886a",p,-104,m),i.ball(x*.82,x*.57,x*.69,"#819b76",p+3,-98,m);for(let M=0;M<8;M++){let _=M*2.39996,v=(.2+u()*.5)*x,w=x*(.28+u()*.2),A=["#94ad7f","#a6ba88","#8da878","#bad09c"][M%4];i.ball(w*1.15,w*.8,w,A,p+Math.cos(_)*v,-93+12*u(),m+Math.sin(_)*v*.75)}for(let M=0;M<5;M++){let _=M%2?"#e6c4b1":"#fae6a4",v=p+(u()-.5)*x*1.14,w=m+x*(.62+u()*.43);i.ball(2.3,4.6,2.3,"#819765",v,-106,w),i.ball(3.9,1.8,3.3,_,v,-101.5,w),i.ball(1.2,.9,1.2,"#cb9c57",v,-100.3,w)}}let h=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],d=t.placements.filter(({item:g})=>g.type==="garageDoor"||g.type==="stairs");for(let[g,[y,p,m,x]]of h.entries()){let M=x*Ma[y].radius+7,_=s+p*c,v=o+m*l,w=v<o?-1:1,A=_<(s+r)/2?-1:1;for(let[b,I]of[[0,0],[A*(M+20),0],[0,w*(M+20)]]){let O=_+b,C=v+I;if(!(C-M<=e.nearZ||O+M>s&&O-M<r&&C+M>o&&C-M<a||d.some(H=>{let N=O-H.x,k=C-H.z,z=N*Math.cos(H.angle)+k*Math.sin(H.angle),W=-N*Math.sin(H.angle)+k*Math.cos(H.angle);return Math.abs(z)<H.item.w/2+M&&Math.abs(W)<H.item.h*.6+M}))){n.add({kind:y,x:O,z:C,groundY:ti,height:x,seed:7229+g*101});break}}}for(let[g,y,p,m]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])n.add({kind:y,x:s+p*c,z:e.farZ-m,groundY:ti+.68,seed:g})}function AE(i,t,e){let n=fu(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(M,_)=>!(o&&M>=o.x1&&M<=o.x2&&_>=o.z1&&_<=o.z2)&&!t.rooms.some(v=>(!t.editableStructure||!Wr(v))&&hu(v,M,_)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let M=0;M<210;M++){let _=s.minX-70+(s.maxX-s.minX+140)*n(),v=c+l*n(),w=n()*180,A=8+n()*8,b=112+n()*34;a(_,v)&&r.push({x:_,z:v,phase:w,length:A,speed:b})}let u=new Float32Array(r.length*6),f=new Float32Array(r.length*3),h=new Float32Array(r.length*3),d=new he,g=new he,y=new he;d.setAttribute("position",new Te(u,3).setUsage(kn)),g.setAttribute("position",new Te(f,3).setUsage(kn)),y.setAttribute("position",new Te(h,3).setUsage(kn));let p=new To(d,new Ar({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),m=new Rr(g,new Os({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),x=new Rr(y,new Os({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));return p.frustumCulled=m.frustumCulled=x.frustumCulled=!1,i.add(p,m,x),(M,{condition:_,windSpeed:v,windBearing:w})=>{p.visible=hE.has(_);let A=_==="pouring"||_==="lightning-rainy";if(p.material.opacity=A?.5:.34,m.visible=fE.has(_),x.visible=_==="hail",p.visible||m.visible||x.visible){let b=Number.isFinite(w)?w*to:285*to,I=oe.clamp(v??6,0,22)*.028;for(let[O,C]of r.entries()){let U=65-(C.phase+M*C.speed*(A?1.3:1))%170,H=65-(C.phase+M*20)%170,N=65-(C.phase+M*C.speed*1.55)%170,k=O*6;u.set([C.x,U,C.z,C.x+C.length*I*Math.sin(b),U+C.length,C.z-C.length*I*Math.cos(b)],k),f.set([C.x+Math.sin(M+O)*6,H,C.z],O*3),h.set([C.x,N,C.z],O*3)}d.attributes.position.needsUpdate=p.visible,g.attributes.position.needsUpdate=m.visible,y.attributes.position.needsUpdate=x.visible}}}function Zg(i){return i==="garageDoor"?ti:0}function RE(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*to,r=Math.cos(s),o=Math.sin(s);return Kp(t,e*r+n*o,-e*o+n*r)}function CE(i,t,e,n){let s=new Y,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let f of l){s.set(...f).project(t);let h=(s.x+1)*e/2,d=(1-s.y)*n/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:f,y2:h,base1:d,base2:g})=>o([[l,d,u],[l,d+Sa,u],[f,g,h],[f,g+Sa,h]])),c=i.stairs.map(({x:l,z:u,angle:f,item:h,apronDepth:d})=>{let g=Math.cos(f),y=Math.sin(f),p=[];for(let m of[-h.w/2,h.w/2])for(let[x,M]of[[-h.h/2-d,Cs],[h.h/2,0]])p.push([l+m*g-x*y,M,u+m*y+x*g]);return o(p)});return[...a,...c]}function IE(i){let{floorStructure:t,wallStructure:e}=i,n=i.editableStructure?t.foundation:qh(i.rooms.filter(s=>!Wr(s)),i.reference,!0).foundation;return{home:ga(tf(n,e)),vacuum:ga(tf(t.footprint,e))}}function $g(i,t){let e=wf(t),n=new Pl({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});try{return n.resetState(),PE(i,t,e,n)}catch(s){throw jg(n),s}}function jg(i){try{i.getContext().isContextLost()||i.resetState()}finally{i.dispose()}}function PE(i,t,e,n){let s=t.sceneSettings,r={},o=new ls;o.background=new Yt("#d7dfcd");let a=new bo(o.background),c=new ms(-800,800,450,-450,1,Vl),{minX:l,maxX:u,minZ:f,maxZ:h}=e.bounds,d=new Ye({color:"#e8e8d2",map:EE(i.ownerDocument),roughness:.95}),g;d.onBeforeCompile=({uniforms:It})=>{g=It.dfgLUT};let y=new le(new Cn(6200,4200),d);y.rotation.x=-Math.PI/2,y.position.set((l+u)/2,ti,(f+h)/2),o.add(y);let p=Mf(o),m=Mf(o),x=Lg(m),M=Wm(e),_=Xm(p,M,ti,y.geometry.parameters.width,y.position.x),v,{water:w}=Ym(p,M,ti,e.houseBounds,y.geometry.parameters.width,y.position.x),A=w.shoreline.reduce((It,Ut)=>Math.abs(Ut.x-w.focusX)<Math.abs(It.x-w.focusX)?Ut:It),b={road:{x:_.centerX,y:_.surfaceY+8,z:(_.lanes[0]+_.lanes[1])/2},coast:{x:w.focusX+16,y:w.y,z:A.z-36},beach:{x:w.focusX,y:w.y+8,z:A.z+37}};TE(p,e,M,x),wE(p,e),xE(o,p,e,i.ownerDocument),bE(p,e),ME(p,e.fences),p.finish();let I=o.children.length;m.finish();let O=o.children.slice(I),C=o.children.filter(It=>It.isMesh),U=pm(n,o,e.bounds),H=dm();U.markStructure();let N=new Cn(16e4,16e4),{position:k,uv:z}=N.attributes;for(let It=0;It<z.count;It++)z.setXY(It,k.getX(It)/y.geometry.parameters.width+.5,k.getY(It)/y.geometry.parameters.height+.5);let W=new le(N,d);W.name="Horizon foreground",W.rotation.copy(y.rotation),W.position.copy(y.position),W.position.y-=.12,W.receiveShadow=!0,W.visible=!1,o.add(W);let tt=Gm(w),j=dg(_),J=vg(w),at=bg(w,M);o.add(tt.mesh,j.root,J.root,at.root);let Et=AE(o,e,M.sceneryMinZ),xt=e.floorStructure.footprint,{home:bt,vacuum:Pt}=IE(e),Lt=(It,Ut)=>bt.contains(It,Ut)?0:null,L=new ls,Z=Fm(),ct=km(xt);o.add(ct.root);let gt=new zs("#fff5e1","#c9bfd7",1.8),lt=new gs("#fff1d8",1.65);lt.position.set(-4,9,6),L.add(gt,lt);let yt=new Map,Mt=new Map,K=new Map,dt=new Map(e.stairs.map(It=>[It.item.id,It]));for(let It of e.placements){let{item:Ut,x:Wt,z:ie,baseY:_t,angle:Ft,window:qt,mountY:ce,isBlind:Ee}=It,ln=Ut.type==="window"&&qt?qt:Ut,Sn=dt.get(Ut.id),Ce=Sn?SE(Sn):Qp(ln,{window:Ee?qt:void 0,mountY:ce})??qp(ln);if(Ce){let wn=Mm(Ut,Ce.root);if(Ce.root.position.set(Wt,_t+wn,ie),Ce.root.rotation.y=-Ft,Ce.floorRadius){let Ke=Ce.floorRadius,yn=(Nn,qe)=>Pt.clearance(Nn,qe)>=Ke,Ne=(Nn,qe,nn,un)=>Pt.supportsRoute(Nn,qe,nn,un,Ke);Ce.dockFits=yn(Wt,ie),Ce.root.name=Ut.id,Ce.liveMotion=fa({allowsPoint:yn,allowsRoute:Ne,duration:.42}),Ce.demoMotion=fa({allowsPoint:yn,allowsRoute:Ne,duration:0})}o.add(Ce.root),Mt.set(Ut.id,Ce),Ut.type==="garageDoor"&&K.set(Ce.root,Ut.id),U.register(Ut,Ce)}yt.set(Ut.id,{x:Wt,z:ie,baseY:_t,rootY:Ce?.root.position.y,object:Ce})}let Tt=e.placements.filter(({item:It,baseY:Ut})=>Ut===0&&Mt.has(It.id)),St=ef(Tt),Ct=St,kt={supportsRoute:(It,Ut,Wt,ie,_t=Math.min(11,bt.clearance(It,Ut),bt.clearance(Wt,ie)))=>bt.supportsRoute(It,Ut,Wt,ie,_t),floorClearance:bt.clearance,allowsBodyPoint:(It,Ut,Wt,ie)=>!Ct.blocksPoint(It,Ut,Wt,ie),allowsBodyRoute:(It,Ut,Wt,ie,_t,Ft)=>!Ct.blocksRoute(It,Ut,Wt,ie,_t,Ft)},Bt=Qh(L,Lt,{...kt,seats:Sm(e.placements,Mt,bt.clearance)}),Gt,jt=Bt,$=Ag(e.placements,Mt),de=$.resolve(),Vt=de,V,T=!1,nt={...e.bounds,sceneryMinZ:M.sceneryMinZ,waterfront:{minX:w.focusX-475,maxX:w.focusX+605,minZ:A.z-352,maxZ:A.z+88}};for(let It of e.placements){let Ut=Mt.get(It.item.id);if(!Ut)continue;let Wt=de.get(It.item.id);if(Wt&&(Ut.root.position.y=Wt.y),Ut.root.scale.y!==1||Wt?.supportId){let{max:ie}=new Oe().setFromObject(Ut.root);Number.isFinite(ie.y)&&(nt.maxY=Math.max(nt.maxY??92,ie.y))}}let ut=new Y,pt=!1,G=0,S=0,E=Ki(),R,F=new xs,B=new $n(new Y(0,1,0),0),q=new Y,X=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function st(){bm(c,nt,G,S,E,R);let It=xm(E.tilt);if(o.fog=It?a:null,W.visible=!!It,It){let Ut=c.far-Vl;a.near=It.near+Ut,a.far=It.far+Ut}}function rt(It,Ut){if(pt||It<1||Ut<1||It===G&&Ut===S)return;G=It,S=Ut;let Wt=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(Wt,1.5,Math.sqrt(27e5/(It*Ut)))),n.setSize(It,Ut,!1),st()}function Rt(It,Ut){return E=Ki(It),R=Ut,!pt&&G>0&&S>0&&st(),D()}function D(){return{...E}}function ot(It){if(typeof It=="string"){if(Object.hasOwn(b,It))return{...b[It]};let Ut=yt.get(It);if(!Ut)return null;let{x:Wt,z:ie,baseY:_t,object:Ft}=Ut;return Ft?{x:Wt,y:Ft.root.position.y+(Ft.anchorY??0)*Ft.root.scale.y,z:ie}:{x:Wt,y:_t+6,z:ie}}return[It?.x,It?.y].every(Number.isFinite)?{x:It.x,y:(Lt(It.x,It.y)??0)+22,z:It.y}:null}function Q(It,Ut){return pt||!Number.isFinite(It)||!Number.isFinite(Ut)||G<=0||S<=0?!1:(F.setFromCamera(new Nt(It/G*2-1,1-Ut/S*2),c),!0)}function wt(It,Ut,Wt,{preferTabletop:ie=!1}={}){if(!Q(It,Ut))return null;if(ie){let _t=$.projectTabletop(Wt,F);if(_t)return _t}return B.constant=-Zg(Wt),F.ray.intersectPlane(B,q)?{x:q.x,y:q.z}:null}function At(It,Ut){if(!K.size||!Q(It,Ut))return null;let Wt=[];for(let _t of K.keys())_t.traverseVisible(Ft=>{Ft.isMesh&&Wt.push(Ft)});let ie=F.intersectObjects(Wt,!1)[0];if(!ie||F.intersectObjects(C,!1).some(_t=>_t.distance<ie.distance-.01))return null;for(let _t=ie.object;_t;_t=_t.parent)if(K.has(_t))return K.get(_t);return null}function vt(It=!1){ct.root.visible=!It&&E.preset!=="waterfront",n.render(o,c);let Ut=(It||r.showAvatars!==!1)&&E.preset!=="waterfront"&&jt?.hasVisibleTracks,Wt=!It&&E.preset!=="waterfront"&&Z.scene.children.length>0;if(!(!Ut&&!Wt)){n.autoClear=!1;try{Ut&&n.render(L,c),Wt&&(n.clearDepth(),n.render(Z.scene,c))}finally{n.autoClear=!0}}}function Dt(It={}){r=It,s={...t.sceneSettings,...It.features},ct.setOpacity(It.heatMapOpacity)}function Ot(It,Ut,Wt=!1){let ie=Ut.beachActivity??(Ut.night?"overnight":"day"),_t={reduceMotion:Ut.reduceMotion===!0,night:Ut.night===!0,condition:Ut.condition,transientTelemetry:Wt,activity:ie};j.root.visible=ie!=="overnight"&&(Wt||xi(s,"sidewalk")),J.root.visible=Wt||xi(s,"boats"),at.root.visible=Wt||xi(s,"beachPlay"),j.root.visible&&j.update(It,_t),J.root.visible&&J.update(It,_t),at.root.visible&&at.update(It,_t);let Ft=Wt||xi(s,"trees");for(let qt of O)qt.visible=Ft;Ft&&x.update(It,Ut),tt.update(It,Wt||xi(s,"reflections")?Ut:{...Ut,reflections:!1})}function fe(It=0,Ut={},Wt={},{animateTelemetry:ie=!0,showTelemetryPosition:_t=!0,draftPositions:Ft,transientTelemetry:qt=!1}={}){if(pt||G<1||S<1)return;qt||(Wt=Dl(Wt,s));let ce=Wt.reduceMotion===!0,Ee=!ce&&Number.isFinite(It)?It:0,ln=Ji(Wt);Wt={...Wt,solar:qt?ln:H(ln,Ee,ce)};let Sn=ie?Ee:0,Ce=qt||xi(s,"traffic");Ce&&!v&&Wt.traffic&&(v=cg(_),o.add(v.root)),v&&(v.root.visible=Ce,Ce&&v.update(It,Wt.traffic,{reduceMotion:ce,night:Wt.night===!0,transientTelemetry:qt,headlightBrightness:qt?1:r.headlightBrightness})),Et(Sn,qt||xi(s,"precipitation")?Wt:{}),Ot(It,Wt,qt);let wn=V!==Ft;wn&&(V=Ft,Vt=Ft?$.resolve(Ft):de,Ct=Ft?ef(Tt.map(yn=>{let Ne=Ft[yn.item.id]?.position;return Ne?{...yn,x:Ne.x,z:Ne.y}:yn})):St),T=!1;for(let[yn,Ne]of Mt){let Nn=Ut[yn]??X,{visible:qe,position:nn}=Ne.root,un=Ft?.[yn]?.position,P=!1;if(Ne.floorRadius&&_t&&!un){let ht=qt?Ne.demoMotion:Ne.liveMotion;!qt&&Ne.demoMotion.hasPosition&&Ne.demoMotion.clear();let zt=ht.observe(Nn.position,It,{observation:Nn.positionObservedAt,reduceMotion:ce});!zt&&Nn.state==="docked"&&ht.clear();let Zt=ht.sample(It,ce);un=Zt,P=zt&&Zt?.current===!0,Ne.root.visible=!!(Zt||!ht.hasPosition&&Ne.dockFits)}else Ne.floorRadius&&(Ne.root.visible=!0);let et=yt.get(yn),mt=un?.x??et.x,ft=un?.y??et.z;T||=!!(Ne.floorRadius&&(qe!==Ne.root.visible||nn.x!==mt||nn.z!==ft)),Ne.root.position.x=mt,Ne.root.position.y=Vt.get(yn)?.y??et.rootY,Ne.root.position.z=ft,Ne.animate?.(Nn,Ne.ambientMotion?Ee:Sn,P,qt)}U.update(Wt,Ut,d,wn),o.fog&&a.color.copy(o.background);let Ke=qt?Gt:Bt;jt!==Ke&&(jt?.setVisible(!1),qt||Gt?.setTracks([],0),jt=Ke,jt?.setVisible(!0)),jt?.render(It,ce,!Ft&&(qt||r.seatedPoses!==!1)),vt(qt)}function re(It,Ut,Wt={}){pt||(Wt.transientTelemetry?(!Gt&&It?.length&&(Gt=Qh(L,Lt,kt),Gt.setVisible(!1)),Gt?.setTracks(It,Ut,Wt)):Bt.setTracks(It,Ut,Wt))}function Me(It){if(E.preset==="waterfront")return null;let Ut=yt.get(It);if(!Ut||G<1||S<1)return null;let{x:Wt,z:ie,baseY:_t,object:Ft}=Ut;if(Ft){if(!Ft.root.visible)return null;ut.set(Ft.anchorOffset?.x||0,Ft.anchorY||0,Ft.anchorOffset?.z||0),Ft.root.localToWorld(ut)}else ut.set(Wt,_t+6,ie);return ut.project(c),{x:(ut.x+1)/2,y:(1-ut.y)/2}}function we(){if(pt)return;pt=!0,Bt.dispose(),Gt?.dispose(),Z.dispose(),ct.dispose(),v?.dispose(),j.dispose(),J.dispose(),at.dispose();let It=new Set,Ut=new Set,Wt=new Set;o.traverse(ie=>{ie.geometry&&It.add(ie.geometry);for(let _t of Array.isArray(ie.material)?ie.material:[ie.material])if(_t){Ut.add(_t);for(let Ft of Object.values(_t))Ft?.isTexture&&Wt.add(Ft)}});for(let ie of Wt)ie.dispose();for(let ie of It)ie.dispose();for(let ie of Ut)ie.dispose();U.dispose(),g?.value?.dispose(),jg(n)}return{resize:rt,render:fe,anchor:Me,setView:Rt,getView:D,getDemoFocus:ot,projectToPlan:wt,pickGarage:At,exteriorClearance:()=>CE(e,c,G,S),dispose:we,hasAmbientMotion:!0,setPeople:re,setDisplaySettings:Dt,setDetectionZones:Z.setZones,setHeatMap:ct.setHistory,get trackedControlChanged(){return T},get hasPendingReacquisition(){return Bt.hasPendingReacquisition||[...Mt.values()].some(It=>It.liveMotion?.pendingReacquisition)},canPlacePerson:(It,Ut)=>bt.clearance(It,Ut)>0,get hasPeopleMotion(){return jt?.hasMotion??!1}}}var Jg=.35,du=7.5,LE=8;function Kg(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,m]=s.values();return Math.hypot(p.x-m.x,p.y-m.y)};function a(p,m){let x=Ki({...p,...m});(x.azimuth!==p.azimuth||x.tilt!==p.tilt||x.zoom!==p.zoom)&&e(x)}function c(p){i.hasPointerCapture(p)&&i.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!n(p))return;let m=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!m||!s.values().next().value.touch))){try{i.setPointerCapture(p.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:m}),p.preventDefault()}}function f(p){let m=s.get(p.pointerId);if(!m)return;let x=r();if(!x){l();return}let M=s.size===2,_=M?o():0,v={x:p.clientX,y:p.clientY,touch:m.touch};if(s.set(p.pointerId,v),p.preventDefault(),M){let w=o();Math.min(_,w)>=LE&&a(x,{zoom:x.zoom*w/_});return}a(x,{azimuth:x.azimuth-(v.x-m.x)*Jg,tilt:x.tilt+(v.y-m.y)*Jg})}function h(p){s.delete(p.pointerId)&&c(p.pointerId)}function d(p){let m=r();if(!m||!Number.isFinite(p.deltaY)||!p.deltaY)return;let x=p.deltaMode===1?16:p.deltaMode===2?i.clientHeight:1,M=Math.max(-350,Math.min(350,p.deltaY*x));p.preventDefault(),p.stopPropagation(),a(m,{zoom:m.zoom*Math.exp(-M*.002)})}function g(p){let m=r();if(!m||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let x;switch(p.key){case"ArrowLeft":x={azimuth:m.azimuth-du};break;case"ArrowRight":x={azimuth:m.azimuth+du};break;case"ArrowUp":x={tilt:m.tilt-du};break;case"ArrowDown":x={tilt:m.tilt+du};break;case"+":case"=":x={zoom:m.zoom*1.1};break;case"-":x={zoom:m.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(m,x)}let y=[["pointerdown",u],["pointermove",f],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",d,{passive:!1}],["keydown",g]];for(let[p,m,x]of y)i.addEventListener(p,m,x);return{cancel:l,dispose(){l();for(let[p,m,x]of y)i.removeEventListener(p,m,x)}}}var KR=1200*1e3,QR=new Map([["s",1/60],["min",1],["h",60]]);var NE="roomcraft.traffic-vehicle-style.v1";function Qg(i){try{let t=i.localStorage.getItem(NE);return tu.some(({id:e})=>e===t)?t:""}catch{return""}}var rC=1200*1e3,oC=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function t0(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],f=u.length>0,h=f?5:3,d,g,y=1/0;for(let m=0;m<=h&&(f||!d);m++)for(let[x,M]of m===0?s.slice(0,1):s.slice(1)){let _=o(a.x+x*m*34,c/2,t-c/2),v=o(a.y+M*m*34,l/2,e-l/2);if(n.some(b=>Math.abs(_-b.x)<(c+b.w)/2+2&&Math.abs(v-b.y)<(l+b.h)/2+2))continue;if(m<=3&&!d&&(d={...a,x:_,y:v,w:c,h:l}),!f)break;if(u.some(b=>_+c/2>b.left&&_-c/2<b.right&&v+l/2>b.top&&v-l/2<b.bottom))continue;let A=Math.hypot(_-a.x,v-a.y);A<y&&(g={...a,x:_,y:v,w:c,h:l},y=A)}let p=g??d;p&&n.push(p)}return n}var s0=wa(ha(),1),e0="roomcraft-presence-v1",n0=4500,r0=/^sensor\.[a-z0-9_]+$/,DE=4,Tf=1536,Af=1024,UE=[[[0,0],[Tf,0],[Tf,Af],[0,Af],[0,0]]],i0=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],FE=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...i0.map(([i,t])=>[t,i]),...i0.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function o0(i,t){return i>=0&&i<=Tf&&t>=0&&t<=Af}function a0([i,t,e,n,s,r],o,a){return{x:i*o+t*a+e,y:n*o+s*a+r}}function c0(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function OE(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function l0(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!c0(s))continue;let[,r,o,,a,c]=s,l=FE.get(n.presenceTrackProfile),u=Math.hypot(r,a),f=o0(o,c)?{origin:{x:o,y:c},forward:{x:r/u,y:a/u}}:{},h=t.length;for(let[d,g]of[["configured",OE(n.presenceTrackZone)],["nominal",l?.ring]]){if(!g)continue;let y=g.map(([p,m])=>{let x=a0(s,p,m);return[x.x,x.y]});for(let[p]of s0.default.intersection([y],UE))t.push({id:n.id,kind:d,points:p.slice(0,-1).map(([m,x])=>({x:m,y:x})),...f,...d==="nominal"?{rangeMeters:l.rangeMeters}:{}})}if(t.length>h&&++e===12)break}return t}function BE(i={},t=[]){let e={};for(let n of new Set(t)){if(!r0.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==e0)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,DE):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:e0,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function u0(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!r0.test(o||"")||s.has(o)||!c0(a))continue;s.add(o);let c=BE(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!(!Number.isFinite(l)||l>e+1e3||e-l>=n0))for(let f of u){let{x:h,y:d}=a0(a,f.x,f.y);o0(h,d)&&n.push({id:o+":"+f.id,x:h,y:d,expiresAt:l+n0})}}return n}var Rf=new Map([["sunny",["Sunny","clear","cirrus"]],["clear-night",["Clear night","clear","cirrus"]],["partlycloudy",["Partly cloudy","partial","cumulus"]],["cloudy",["Cloudy","clouds","stratus"]],["rainy",["Rain","rain","nimbostratus"]],["pouring",["Heavy rain","rain","nimbostratus"]],["lightning",["Thunderstorms","thunder","cumulonimbus"]],["lightning-rainy",["Thunderstorms","storm","cumulonimbus"]],["snowy",["Snow","snow","stratus"]],["snowy-rainy",["Sleet","sleet","nimbostratus"]],["hail",["Hail","sleet","cumulonimbus"]],["fog",["Fog","fog","fog"]],["windy",["Windy","wind","cirrus"]],["windy-variant",["Windy and cloudy","wind-clouds","altocumulus"]],["exceptional",["Unusual weather","unknown","none"]]]),f0=new Set(["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]),d0=Object.freeze([...Rf].map(([i,[t]])=>Object.freeze({id:i,label:i==="lightning-rainy"?"Thunderstorms with rain":t}))),p0=Object.freeze([...f0]),h0=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function m0(i={},t=!1){let{condition:e,daylightKnown:n,night:s,moonPhase:r,temperature:o,unit:a,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:f,moonElevation:h,windSpeed:d,windBearing:g,cloudCoverage:y}=i;if(t)return{label:"Weather offline",sky:"unknown",effect:"unknown",cloud:"none",moon:"",reading:"",windReading:""};let[p,m,x]=Rf.get(e)||["Weather unavailable","unknown","none"],M=n?s:e==="clear-night",_=n?!s:e==="sunny",v=Number.isFinite(d)&&d>=0?d:void 0,w=Number.isFinite(g)?(g%360+360)%360:void 0,A=w===void 0?"":h0[Math.round(w/22.5)%h0.length],b=v===void 0?"":v===0?"Calm wind":`Wind ${A?`from ${A} at `:""}${Math.round(v*10)/10} m/s`;return{label:p,sky:M?"night":_?"day":"unknown",effect:m,cloud:x,moon:M&&f0.has(r)?r:"",reading:Rf.has(e)&&Number.isFinite(o)?`${Math.round(o)}${a||"\xB0"}`:"",windSpeed:v,windBearing:w,windReading:b,cloudCoverage:Number.isFinite(y)&&y>=0&&y<=100?y:void 0,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:f,moonElevation:h}}var kE=[["dipper",[[7,9],[27,15],[46,22],[63,28],[93,23],[89,42],[65,43]],"M7 9L27 15 46 22 63 28 93 23 89 42 65 43 63 28"],["cassiopeia",[[8,35],[28,17],[47,31],[67,10],[91,24]],"M8 35L28 17 47 31 67 10 91 24"],["orion",[[30,6],[68,8],[44,25],[50,28],[56,31],[29,46],[67,47]],"M30 6L44 25 50 28 56 31 68 8M44 25L29 46M56 31L67 47"]],zE=kE.map(([i,t,e])=>`
  <svg class="coastal-constellation coastal-${i}" viewBox="0 0 100 52" focusable="false">
    <path d="${e}"/>
    ${t.map(([n,s],r)=>`<circle cx="${n}" cy="${s}" r="${r%3===0?2.15:1.55}"/>`).join("")}
  </svg>`).join(""),HE=["#c2d7ed","#e4edff","#fff0d2"];function g0(i,t){let e=t?11939:30391,n=()=>(e=e*48271%2147483647)/2147483647;return Array.from({length:i},(s,r)=>{let o=1+(r+n())*98/i,a=5+n()*79,c=t?.85+r%3*.18:.48+r%4*.12;return`radial-gradient(circle at ${o.toFixed(1)}% ${a.toFixed(1)}%,${HE[r%3]} 0 ${c.toFixed(2)}px,transparent ${(c+.6).toFixed(2)}px)`}).join(",")}var _0=`
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <span class="coastal-twilight"></span>
    <div class="coastal-stars">
      <span class="coastal-star-field"></span>
      <span class="coastal-star-sparkle"></span>
      ${zE}
      <span class="coastal-meteor coastal-meteor-first"></span>
      <span class="coastal-meteor coastal-meteor-second"></span>
    </div>
    <span class="coastal-orb coastal-moon"></span>
    <span class="coastal-cloud coastal-cloud-high"></span>
    <span class="coastal-cloud coastal-cloud-left"></span>
    <span class="coastal-cloud coastal-cloud-right"></span>
    <span class="coastal-orb coastal-sun"></span>
    <span class="coastal-cloud coastal-cloud-bank"></span>
    <span class="coastal-horizon-haze"></span>
    <span class="coastal-lightning"></span>
  </div>`,eo=(i,t,e)=>Math.max(t,Math.min(e,i)),y0=i=>Number.isFinite(i)&&Math.abs(i)<=90,Cf=i=>Number.isFinite(i)&&i>=0&&i<=360,If=75,x0=i=>76-58*eo(i/If,0,1),b0=i=>50+38*i,GE=i=>b0(Math.sin(i*Math.PI/180)),VE=new Map([["waxing_crescent",[1,.48]],["first_quarter",[1,0]],["waxing_gibbous",[1,-.48]],["waning_crescent",[-1,.48]],["last_quarter",[-1,0]],["waning_gibbous",[-1,-.48]]]);function WE(i,t){let e=[];for(let[n,s,r]of[[1,0,1],[t,16,-1]])for(let o=0;o<=16;o++){let a=(s+o*r)*Math.PI/16,c=50+i*50*Math.sin(a)*n,l=50-50*Math.cos(a);e.push(`${c.toFixed(2)}% ${l.toFixed(2)}%`)}return`polygon(${e.join(",")})`}var XE=new Map([...VE].map(([i,t])=>[i,WE(...t)])),YE=new Map([["clear",1],["wind",.9],["partial",.66],["wind-clouds",.43]]);function qE(i,t,e,n,s,r,o){let c=(i==="night"&&!t?YE.get(e)??0:0)*eo(1-(n??0)/80,0,1);if(o||c<.55||e!=="clear"&&e!=="wind")return{starOpacity:c,meteor:"off",meteorProgress:0,meteorOpacity:0};if(s===void 0&&r===void 0)return{starOpacity:c,meteor:"live",meteorProgress:0,meteorOpacity:0};let l=r===void 0?(s%58-12)/1.4:(r-.36)/.29,u=eo(l,0,1),f=Math.min(1,u*5,(1-u)*2)*.9;return{starOpacity:c,meteor:"sample",meteorProgress:u,meteorOpacity:f}}function ZE(i={},t=!1){let e=m0(i,t),{sky:n,effect:s,cloud:r,moon:o,sunElevation:a,sunAzimuth:c,moonElevation:l,moonAzimuth:u,windSpeed:f,windBearing:h,cloudCoverage:d}=e,g=Ji(t?{}:i),{phase:y}=g,{skyTimeSeconds:p,skyProgress:m,reduceMotion:x=!1}=t?{}:i,M=y0(a),_=y==="sunrise"||y==="sunset",v=Number.isFinite(p)&&!x?Math.max(0,p):void 0,w=Number.isFinite(m)&&!x?eo(m,0,1):void 0,A=w===void 0?void 0:Math.sin(w*Math.PI)*If,b=w??(v===void 0?void 0:.5-.5*Math.cos(v*Math.PI/480)),I=M?g.elevation:A??g.elevation,O=Cf(c)||w===void 0?b0(g.east):83-66*w,C=Cf(u)?GE(u):b===void 0?55:18+64*b,U=b===void 0?38:Math.sin(b*Math.PI)*If,H=x0(y0(l)?l:U),N=!t&&!x&&!Cf(u)&&w===void 0&&v===void 0?"ambient":"fixed",k=h===void 0?void 0:h*Math.PI/180,z=k===void 0?9:-Math.sin(k)*12,W=k===void 0?-2:Math.cos(k)*4,tt=f===void 0?s==="wind"||s==="wind-clouds"?2.5:1:f===0?0:eo(f*.25,.32,4.8),j=d===void 0?1:eo(d/52,0,1);return{sky:n,effect:s,cloud:r,moon:o,light:_?"twilight":"regular",clock:v,reduceMotion:x,moonMotion:N,sunX:O,sunY:x0(I),moonX:C,moonY:H,solarPhase:n==="unknown"?"unknown":y,solarDaylight:g.daylight,solarDisc:g.disc,solarCloud:g.cloud,twilightGlow:g.twilight*(1-.42*g.cloud),horizonHaze:g.twilight*(.34+.2*g.cloud),moonOutline:XE.get(o)||"circle(50%)",windX:z,windY:W,cloudSpeed:tt,cloudOpacity:j,...qE(n,_,s,d,v,w,x)}}function M0(i,t,e=!1){let n=ZE(t,e),{sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,clock:u,reduceMotion:f,cloudSpeed:h,cloudOpacity:d,solarPhase:g,solarDaylight:y,solarDisc:p,solarCloud:m,twilightGlow:x,horizonHaze:M,starOpacity:_,meteor:v,meteorProgress:w,meteorOpacity:A}=n,b={sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,skyClock:u===void 0?"live":"sample",windCalm:String(h===0),skyReduced:String(f),solarPhase:g,stars:_>0?"visible":"hidden",meteor:v};for(let[O,C]of Object.entries(b))i.dataset[O]!==C&&(i.dataset[O]=C);let I={"--coastal-sun-x":`${n.sunX.toFixed(2)}%`,"--coastal-sun-y":`${n.sunY.toFixed(2)}%`,"--coastal-solar-x":`${n.sunX.toFixed(2)}%`,"--coastal-daylight":`${(y*100).toFixed(2)}%`,"--coastal-solar-disc":p.toFixed(3),"--coastal-solar-cloud":m.toFixed(3),"--coastal-twilight-glow":x.toFixed(3),"--coastal-twilight-color":`${(x*100).toFixed(2)}%`,"--coastal-horizon-haze":M.toFixed(3),"--coastal-moon-x":`${n.moonX.toFixed(2)}%`,"--coastal-moon-y":`${n.moonY.toFixed(2)}%`,"--coastal-moon-outline":n.moonOutline,"--coastal-wind-x":`${n.windX.toFixed(3)}vw`,"--coastal-wind-y":`${n.windY.toFixed(3)}px`,"--coastal-wind-speed":String(h||1),"--coastal-cloud-cover":String(d),"--coastal-clock":`${(u??0).toFixed(3)}s`,"--coastal-star-opacity":_.toFixed(3),"--coastal-meteor-progress":w.toFixed(3),"--coastal-meteor-opacity":A.toFixed(3)};for(let[O,C]of Object.entries(I))i.style.getPropertyValue(O)!==C&&i.style.setProperty(O,C)}var v0=`{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`,S0=`
  .coastal-sky {
    position:relative; isolation:isolate; overflow:hidden; pointer-events:none;
    box-sizing:border-box; height:clamp(54px,7dvh,72px); width:100%;
    border-bottom:3px solid var(--coastal-seam);
    background:linear-gradient(180deg,#7c99ab,#abc0c8 62%,#d2dad7);
    --coastal-day-top:#5b9bc2; --coastal-day-mid:#a0c8dc; --coastal-day-low:#d1e1e6;
    --coastal-night-top:#142843; --coastal-night-mid:#293e5b; --coastal-night-low:#526980;
    --coastal-seam:#426b80; --coastal-cloud-top:#f9f6ea; --coastal-cloud-bottom:#c5d1d6;
    --coastal-orb-size:clamp(27px,4.1dvh,42px);
  }
  .coastal-sky:is([data-sky=day],[data-sky=night]) {
    background:linear-gradient(180deg,
      color-mix(in srgb,var(--coastal-day-top) var(--coastal-daylight,100%),var(--coastal-night-top)),
      color-mix(in srgb,var(--coastal-day-mid) var(--coastal-daylight,100%),var(--coastal-night-mid)) 62%,
      color-mix(in srgb,var(--coastal-day-low) var(--coastal-daylight,100%),var(--coastal-night-low)));
  }
  .coastal-sky[hidden] {display:none}
  .coastal-sky[data-sky=night] {
    --coastal-seam:#839aab; --coastal-cloud-top:#a2b2cb; --coastal-cloud-bottom:#4a5f7e;
  }
  .coastal-sky:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) {
    --coastal-day-top:#779caf; --coastal-day-mid:#a3bac4; --coastal-day-low:#c9d5d3;
  }
  .coastal-sky[data-sky=day]:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) {
    --coastal-seam:#526e7b; --coastal-cloud-top:#eef1ee; --coastal-cloud-bottom:#adbfca;
  }
  .coastal-sky:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-day-top:#506b85; --coastal-day-mid:#8299ab; --coastal-day-low:#a2b4bb;
    --coastal-night-top:#233550; --coastal-night-mid:#3b4c65; --coastal-night-low:#617184;
  }
  .coastal-sky[data-sky=day]:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-seam:#3d596d; --coastal-cloud-top:#c8d3dc; --coastal-cloud-bottom:#8a9eb0;
  }
  .coastal-sky[data-sky=night]:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-seam:#9aabb5; --coastal-cloud-top:#97a9bb; --coastal-cloud-bottom:#546880;
  }
  .coastal-sky[data-solar-phase=sunrise] {
    --coastal-twilight-top:#515d83; --coastal-twilight-mid:#a2a7bd; --coastal-twilight-low:#e4b6a8;
    --coastal-horizon-gold:#ffe3ad; --coastal-horizon-peach:#f7b08aa9; --coastal-twilight-seam:#b78580;
    --coastal-haze-tint:#ffe6d0; --coastal-cloud-warm-top:#fff0d8; --coastal-cloud-warm-low:#b497ae;
    --coastal-warm-sun-core:#fff7d5; --coastal-warm-sun-rim:#fbc082;
  }
  .coastal-sky[data-solar-phase=sunset] {
    --coastal-twilight-top:#524163; --coastal-twilight-mid:#ad768b; --coastal-twilight-low:#e4a085;
    --coastal-horizon-gold:#ffd088; --coastal-horizon-peach:#ff9c69ac; --coastal-twilight-seam:#ac6b70;
    --coastal-haze-tint:#ffd0ae; --coastal-cloud-warm-top:#ffdbb8; --coastal-cloud-warm-low:#9d718a;
    --coastal-warm-sun-core:#fff1b8; --coastal-warm-sun-rim:#f99565;
  }
  .coastal-sky[data-light=twilight] {
    border-bottom-color:color-mix(in srgb,
      var(--coastal-twilight-seam) var(--coastal-twilight-color,0%),var(--coastal-seam));
  }
  .coastal-twilight, .coastal-horizon-haze {position:absolute;inset:0}
  .coastal-twilight {
    opacity:var(--coastal-twilight-glow,0);
    background:
      radial-gradient(ellipse 35% 130% at var(--coastal-solar-x,50%) 111%,
        var(--coastal-horizon-gold) 0, var(--coastal-horizon-peach) 32%, transparent 93%),
      linear-gradient(180deg,var(--coastal-twilight-top),var(--coastal-twilight-mid) 58%,var(--coastal-twilight-low));
    transition:opacity 1.4s ease;
  }
  .coastal-horizon-haze {
    inset:45% -2% 0; opacity:var(--coastal-horizon-haze,0);
    background:radial-gradient(ellipse 51% 124% at var(--coastal-solar-x,50%) 88%,
      var(--coastal-haze-tint),transparent 94%);
    mask-image:
      radial-gradient(ellipse 48% 11% at 54% 76%,#000 40%,transparent 100%),
      radial-gradient(ellipse 40% 10% at 20% 43%,#000 24%,transparent 100%),
      radial-gradient(ellipse 43% 13% at 77% 58%,#000 34%,transparent 100%);
    transition:opacity 1.4s ease;
  }
  .coastal-stars {
    display:none; position:absolute; inset:0; opacity:var(--coastal-star-opacity,0);
    transition:opacity 1.2s ease;
  }
  .coastal-sky[data-stars=visible] .coastal-stars {display:block}
  .coastal-star-field, .coastal-star-sparkle {position:absolute;inset:0}
  .coastal-star-field {
    opacity:.67;
    background:${g0(39,!1)},
      radial-gradient(ellipse 31% 97% at 34% 0%,#b0c3f522,transparent 100%);
  }
  .coastal-star-sparkle {
    opacity:.85;
    background:${g0(13,!0)};
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
    transition:left 1.3s ease,top 1.3s ease,opacity 1.3s ease;
  }
  .coastal-sky:is([data-sky=day],[data-light=twilight]) .coastal-sun {
    display:block; left:var(--coastal-sun-x,52%);
    top:clamp(calc(var(--coastal-orb-size) / 2 + 3px),var(--coastal-sun-y,43%),calc(100% - var(--coastal-orb-size) / 2 - 3px));
    opacity:calc(var(--coastal-solar-disc,1) * (1 - .82 * var(--coastal-solar-cloud,0)));
    --coastal-sun-inner:color-mix(in srgb,var(--coastal-warm-sun-core,#fff8d4) var(--coastal-twilight-color,0%),#fff8d4);
    --coastal-sun-outer:color-mix(in srgb,var(--coastal-warm-sun-rim,#fadd96) var(--coastal-twilight-color,0%),#fadd96);
    background:radial-gradient(circle at 38% 31%,var(--coastal-sun-inner),var(--coastal-sun-outer) 88%);
    box-shadow:0 0 9px 3px color-mix(in srgb,var(--coastal-sun-inner) 57%,transparent),
      0 0 23px 7px color-mix(in srgb,var(--coastal-sun-outer) 42%,transparent);
  }
  .coastal-sky[data-light=twilight] .coastal-sun {
    top:calc(var(--coastal-sun-y,76%) + (1 - var(--coastal-solar-disc,0)) * var(--coastal-orb-size) * .66);
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
  .coastal-sky:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) .coastal-moon {opacity:.48}
  .coastal-sky:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) .coastal-moon {opacity:.17}
  .coastal-cloud {
    position:absolute; top:var(--cloud-y); left:var(--cloud-x); width:var(--cloud-width); height:var(--cloud-height);
    opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1));
    background:linear-gradient(180deg,
      color-mix(in srgb,var(--coastal-cloud-warm-top,var(--coastal-cloud-top)) var(--coastal-twilight-color,0%),var(--coastal-cloud-top)),
      color-mix(in srgb,var(--coastal-cloud-warm-low,var(--coastal-cloud-bottom)) var(--coastal-twilight-color,0%),var(--coastal-cloud-bottom)) 95%);
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
  .coastal-sky[data-sky-clock=sample] :is(.coastal-orb,.coastal-twilight,.coastal-horizon-haze) {transition:none}
  .coastal-sky[data-sky-clock=sample] .coastal-lightning {animation:none;opacity:.85}
  .coastal-sky:is([data-sky-clock=sample],[data-meteor=sample]) .coastal-star-sparkle {animation:none}
  .coastal-sky[data-wind-calm=true] .coastal-cloud {animation:none}
  @keyframes coastal-drift ${v0}
  @keyframes coastal-sampled-drift ${v0}
  @keyframes coastal-distant-lightning {0%,74%,87%,100%{opacity:0}80%{opacity:.69}}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-sky
    :is(.coastal-cloud,.coastal-orb,.coastal-lightning,.coastal-stars,.coastal-star-sparkle,.coastal-twilight,.coastal-horizon-haze),
  .coastal-sky[data-sky-reduced=true]
    :is(.coastal-cloud,.coastal-orb,.coastal-lightning,.coastal-stars,.coastal-star-sparkle,.coastal-twilight,.coastal-horizon-haze) {animation:none;transition:none}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-sky .coastal-meteor,
  .coastal-sky[data-sky-reduced=true] .coastal-meteor {display:none}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-lightning,
  .coastal-sky[data-sky-reduced=true] .coastal-lightning {opacity:.66}
  @media (prefers-reduced-motion:reduce) {
    .coastal-sky :is(.coastal-cloud,.coastal-orb,.coastal-lightning,.coastal-stars,.coastal-star-sparkle,.coastal-twilight,.coastal-horizon-haze) {animation:none;transition:none}
    .coastal-sky[data-meteor] .coastal-meteor {display:none}
    .coastal-lightning {opacity:.66}
  }
  @media (max-height:600px) and (orientation:landscape) {
    .coastal-sky {height:clamp(38px,8.5dvh,48px);--coastal-orb-size:25px}
  }
`;var $E=2500,Pf=Object.freeze({condition:"sunny",daylightKnown:!0,night:!1,sunElevation:40,sunAzimuth:160,traffic:Object.freeze({severity:"ambient"})}),w0={dawn:[-6,92,!0,"overnight"],sunrise:[2,99,!0,"morning"],morning:[19,114,!0,"morning"],day:[40,160,!0,"day"],sunset:[2,253,!1,"day"],dusk:[-6,265,!1,"evening"],night:[-16,290,!1,"evening"],overnight:[-30,290,!1,"overnight"]},jE=i=>i.replaceAll("_"," ").replace(/^./,t=>t.toUpperCase());function JE({condition:i,daylight:t,moonPhase:e,windSpeed:n,windBearing:s}){let r=i==="clear-night"&&(t==="morning"||t==="day")?"night":t,[o,a,c,l]=w0[r]??w0.day,u=o<-.83;return{...Pf,condition:i,night:u,sunElevation:o,sunAzimuth:a,moonPhase:e,windSpeed:n,windBearing:s,sunRising:c,beachActivity:l}}function E0(i,t,{api:e,viewport:n,bridge:s,onChange:r}){let o=i.getElementById("sceneSettingsDialog"),a=i.getElementById("sceneSettingsButton"),c=i.getElementById("sceneFeatures"),l=i.getElementById("sceneDockAlignment"),u=i.getElementById("scenePreviewMode"),f=i.getElementById("scenePreviewMotion"),h=i.getElementById("scenePreviewSource"),d=i.getElementById("scenePreviewWeather"),g=i.createElement("style");g.textContent=S0,i.head.append(g);let y=i.createElement("template");y.innerHTML=_0.trim();let p=y.content.firstElementChild;p.hidden=!0,n.before(p);try{f.checked=t.localStorage.getItem("roomcraft.reduce-motion.v1")!=="true"}catch{}let m=kp.map(({key:bt,label:Pt})=>{let Lt=i.createElement("label");Lt.className="scene-feature";let L=i.createElement("input");return L.type="checkbox",L.addEventListener("change",()=>e.setSceneSetting(bt,L.checked)),Lt.append(L,Pt),c.append(Lt),{key:bt,input:L}});function x(bt,Pt){let Lt=i.createElement("label");return Lt.textContent=bt,Lt.append(Pt),d.append(Lt),Pt.addEventListener("change",r),Pt}function M(bt,Pt,Lt){let L=i.createElement("select");return L.replaceChildren(...Pt.map(([Z,ct])=>new t.Option(ct,Z))),L.value=Lt,x(bt,L)}function _(bt,Pt,Lt,L,Z){let ct=i.createElement("input");return Object.assign(ct,{type:"number",min:Pt,max:Lt,step:L,value:Z}),x(bt,ct)}let v=M("Weather",d0.map(({id:bt,label:Pt})=>[bt,Pt]),"sunny"),w=M("Time of day",[["dawn","Dawn"],["sunrise","Sunrise"],["morning","Morning"],["day","Day"],["sunset","Sunset"],["dusk","Dusk"],["night","Evening"],["overnight","Overnight"]],"day"),A=M("Moon phase",p0.map(bt=>[bt,jE(bt)]),"full_moon"),b=_("Wind speed (m/s)",0,30,1,4),I=_("Wind from (degrees)",0,360,1,270),O,C,U=!1,H=!1,N=!1,k,z=!1,W=()=>{o.open||o.showModal()},tt=()=>e.setSceneSetting("dockAlignment",l.value),j=()=>{d.hidden=u.value!=="custom",xt(),r()};a.addEventListener("click",W),l.addEventListener("change",tt),u.addEventListener("change",j),f.addEventListener("change",r);function J(){return u.value!=="custom"}function at(){let bt=H?J()?z?"Live appearance from Home Assistant.":O||e.getPreview?.()?.environment?"Showing the last available dashboard appearance.":"Connect to Home Assistant to match the dashboard appearance.":"Preview changes stay in this Studio tab.":"Choose a 3D view to see the preview.";h.textContent!==bt&&(h.textContent=bt)}async function Et(){if(!H||!J()||!s||U||N)return;U=!0;let bt=!1;try{let Pt=await s.request("LOOK_GET");if(N)return;if(bt=z!==!!Pt?.environment,z=!!Pt?.environment,z){let Lt=JSON.stringify(Pt);Lt!==C&&(O=Pt,C=Lt,bt=!0)}}catch{bt=z,z=!1}finally{U=!1,!N&&H&&J()&&bt&&r()}}function xt(){H&&J()&&s&&!i.hidden?k===void 0&&(k=t.setInterval(Et,$E),Et()):k!==void 0&&(t.clearInterval(k),k=void 0)}return i.addEventListener("visibilitychange",xt),{open:W,motionEnabled:()=>f.checked,sync(bt,Pt,Lt=!1){H=bt,xt();for(let{key:gt,input:lt}of m)lt.checked=xi(Pt,gt);l.value=zp(Pt),at();let L=O??e.getPreview?.(),Z=J()?L?.environment??Pf:JE({condition:v.value,daylight:w.value,moonPhase:A.value,windSpeed:Math.min(30,Math.max(0,b.valueAsNumber||0)),windBearing:Math.min(360,Math.max(0,I.valueAsNumber||0))}),ct={...Z,traffic:{...Z.traffic??Pf.traffic,vehicleStyle:Qg(t)}};return p.hidden=!H||!xi(Pt,"sky"),p.hidden||M0(p,{...Dl(ct,Pt),reduceMotion:Lt}),{states:L?.states??{},environment:ct}},dispose(){N=!0,H=!1,xt(),i.removeEventListener("visibilitychange",xt),a.removeEventListener("click",W),l.removeEventListener("change",tt),u.removeEventListener("change",j),f.removeEventListener("change",r),o.close();for(let{input:bt}of m)bt.parentElement.remove();d.replaceChildren(),p.remove(),g.remove()}}}var KE={radar:[32,12],plan:[20,8]};function Lf(i){return i.reduce((e,n)=>[e[0]+n.x,e[1]+n.y],[0,0]).map(e=>e/i.length)}function QE(i,[t,e]){let[n,s]=Lf(i),r=0,o=0,a=0;for(let{x:f,y:h}of i){let d=f-n,g=h-s;r+=d*d,o+=g*g,a+=d*g}let c=Math.hypot(r-o,2*a),l=Math.sqrt((r+o+c)/(2*i.length)),u=Math.sqrt(Math.max(0,(r+o-c)/(2*i.length)));return l>=t&&u>=e&&u>=l*.1}function C0([i,t,e,n,s,r],{radar:o,plan:a}){return Math.hypot(i*o.x+t*o.y+e-a.x,n*o.x+s*o.y+r-a.y)}function T0(i,t){let e=t?-1:1,[n,s]=Lf(i.map(({radar:p})=>p)),[r,o]=Lf(i.map(({plan:p})=>p)),a=0,c=0,l=0;for(let{radar:p,plan:m}of i){let x=e*(p.x-n),M=p.y-s,_=m.x-r,v=m.y-o;a+=_*x+v*M,c+=v*x-_*M,l+=x*x+M*M}let u=a/l,f=c/l,h=r-e*u*n+f*s,d=o-e*f*n-u*s,g=[e*u,-f,h,e*f,u,d],y=i.map(p=>C0(g,p));return{transform:g,errors:y,flipped:t,scale:Math.hypot(u,f),squared:y.reduce((p,m)=>p+m*m,0)}}function A0(i){let t=T0(i,!1),e=T0(i,!0);return e.squared<t.squared?e:t}function t2({radar:i,plan:t}={}){return[i?.x,i?.y,t?.x,t?.y].every(Number.isFinite)&&Math.abs(i.x)<=600&&Math.abs(i.y)<=600&&t.x>=0&&t.x<=1536&&t.y>=0&&t.y<=1024}function R0(i){return Object.entries(KE).every(([t,e])=>QE(i.map(n=>n[t]),e))}function I0(i){if(!Array.isArray(i)||i.length<3||i.length>12||!i.every(l=>l&&t2(l)))return{error:"Use 3\u201312 valid pairs of radar centimetres and plan coordinates."};if(!R0(i))return{error:"Choose survey points spread across the area, including one well off the line between the others."};let t=A0(i),e=t.scale*100;if(e<8||e>600)return{error:"The fitted scale is outside the supported range. Check the radar units and matched plan points."};let n;if(i.length>3){n=0;for(let[l,u]of i.entries()){let f=i.filter((d,g)=>l!==g);if(!R0(f))return{error:"Spread the survey points so that three or more still cover the area when any one point is removed."};let h=A0(f);if(h.scale*100<8||h.scale*100>600)return{error:"The fitted scale changes too much when a point is withheld. Check which radar report matches each point."};n=Math.max(n,C0(h.transform,u)/h.scale)}}let{transform:s,errors:r,flipped:o,scale:a,squared:c}=t;return{transform:s,pixelsPerMetre:e,flipped:o,origin:{x:s[2],y:s[5]},rmsCm:Math.sqrt(c/i.length)/a,maxErrorCm:Math.max(...r)/a,...n===void 0?{}:{validationCm:n}}}var e2=3,n2=11,i2=12,P0=/^sensor\.[a-z0-9_]+$/,L0=i=>i.slice().sort((t,e)=>t-e)[Math.floor(i.length/2)];async function s2(i,t,e=Date.now,n=()=>!0){let s=e(),r=[],o=new Set,a;for(let c=0;c<n2&&n();c++){if(c&&await t(700),!n())return{error:"Capture canceled."};let l=await i(),{observed_at:u,tracks:f}=l?.attributes??{};if(!Number.isFinite(u)||u<s-500||u>e()+1e3||o.has(u))continue;if(o.add(u),f?.length>1)return{error:"More than one radar target was detected. Clear the room and try again."};if(l.state!=="1"||f?.length!==1)continue;let{id:h,x:d,y:g}=f[0];if(![d,g].every(p=>Number.isFinite(p)&&Math.abs(p)<=800))continue;if(a!==void 0&&h!==a)return{error:"The radar switched targets. Stay still and try again."};if(a=h,r.push({x:d,y:g}),r.length<e2)continue;let y={x:L0(r.map(p=>p.x)),y:L0(r.map(p=>p.y))};return r.some(p=>Math.hypot(p.x-y.x,p.y-y.y)>40)?{error:"These readings moved too far apart. Hold still on the marked spot and try again."}:{point:y}}return{error:"Too few fresh position reports. Check the radar reporting state and try a spot closer to the switch."}}function r2(i,t,e,n,s,r){let o=i.getContext("2d");if(!o||!t)return;o.fillStyle="#e8eddf",o.fillRect(0,0,i.width,i.height);for(let c of t.rooms)o.beginPath(),c.points.forEach(({x:l,y:u},f)=>f?o.lineTo(l,u):o.moveTo(l,u)),o.closePath(),o.fillStyle=c.outdoor||c.surface==="patio"?"#d8dfca":"#f6e7cc",o.strokeStyle="#c9b496",o.lineWidth=4,o.fill(),o.stroke();for(let c of t.items)/sofa|sectional|diningTable|desk|counter|worktop|bed/i.test(c.type)&&(o.save(),o.translate(c.x,c.y),o.rotate(c.rotation*Math.PI/180),o.fillStyle="#c8b095",o.fillRect(-c.w/2,-c.h/2,c.w,c.h),o.restore());o.lineWidth=9,o.strokeStyle="#4f6159";for(let c of t.walls)o.beginPath(),o.moveTo(c.x1,c.y1),o.lineTo(c.x2,c.y2),o.stroke();o.textAlign="center",o.font="bold 25px sans-serif",o.fillStyle="#40473a";for(let c of t.rooms)c.label&&o.fillText(c.name,c.label.x,c.label.y,250);let a=(c,l,u)=>{c&&(o.beginPath(),o.arc(c.x,c.y,19,0,2*Math.PI),o.fillStyle=l,o.fill(),o.fillStyle="#fff",o.fillText(u,c.x,c.y+8))};a(e,"#714985","R"),s.forEach(({plan:c,radar:l},u)=>{if(r?.transform){let[f,h,d,g,y,p]=r.transform,m=f*l.x+h*l.y+d,x=g*l.x+y*l.y+p;o.strokeStyle="#ae5339",o.lineWidth=5,o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(m,x),o.stroke(),o.beginPath(),o.arc(m,x,9,0,2*Math.PI),o.stroke()}a(c,"#376555",String(u+1))}),a(n,"#855f2f","+")}function N0(i,t,{api:e,bridge:n}){let s=i.getElementById("radarCalibrationDialog");if(!s)return null;let r=i.getElementById("radarCalibrationPlan"),o=C=>s.querySelector(`[data-survey="${C}"]`),a=o("x"),c=o("y"),l=o("distance"),u=o("status"),f=o("quality"),h=o("points"),d=o("capture"),g=o("undo"),y=o("apply"),p=C=>new Promise(U=>t.setTimeout(U,C)),m,x,M,_,v=[],w=0,A=!1;function b(){_=v.length>=3?I0(v):void 0,d.disabled=A||!M||!n?.request||!P0.test(x?.presenceTrackEntityId??"")||v.length>=i2,g.disabled=A||!v.length,y.disabled=A||!_?.transform;let C=v.map(({plan:H},N)=>{let k=i.createElement("li");return k.textContent=`Point ${N+1} \xB7 ${H.x}, ${H.y}`,k});h.replaceChildren(...C);let U=_?.error??"";if(_?.transform){let{pixelsPerMetre:H,rmsCm:N,maxErrorCm:k,validationCm:z,origin:W}=_;U=`${H.toFixed(1)} plan px/m \xB7 ${Math.round(N)} cm fit error \xB7 ${Math.round(k)} cm worst point.`,Number.isFinite(z)?U+=` Independent check ${Math.round(z)} cm.`:U+=" Add a fourth point to check the result.";let tt=Math.hypot(W.x-x.x,W.y-x.y)*100/H;if(tt>40&&(U+=` Fitted sensor origin is ${Math.round(tt)} cm from its map marker.`),l.valueAsNumber>0){let[j,J]=v,at=Math.hypot(j.plan.x-J.plan.x,j.plan.y-J.plan.y)/l.valueAsNumber;U+=` Tape measure gives ${at.toFixed(1)} plan px/m between points 1 and 2.`}}f.textContent=U,r2(r,m,x,M,v,_)}function I(){let C=a.valueAsNumber,U=c.valueAsNumber;M=Number.isFinite(C)&&Number.isFinite(U)&&C>=0&&C<=r.width&&U>=0&&U<=r.height?{x:Math.round(C),y:Math.round(U)}:void 0,b()}function O(C){if(!C.target.closest?.("[data-radar-calibration]"))return;let U=e.getSelection();m=e.getProject(),x=U?.kind==="item"?m.items.find(H=>H.id===U.id&&H.type==="presenceSwitch"):null,x&&(w++,v=[],M=void 0,A=!1,a.value=c.value=l.value="",u.textContent=n?.request?P0.test(x.presenceTrackEntityId??"")?"Choose a location to begin.":"Link a radar targets entity first.":"Open Studio from Home Assistant to capture live radar points.",s.showModal(),b())}return i.addEventListener("click",O),r.addEventListener("click",C=>{if(A)return;let U=r.getBoundingClientRect();a.value=Math.round((C.clientX-U.left)*r.width/U.width),c.value=Math.round((C.clientY-U.top)*r.height/U.height),I()}),a.addEventListener("input",I),c.addEventListener("input",I),l.addEventListener("input",b),d.addEventListener("click",async()=>{if(d.disabled)return;A=!0;let C=w,U=x.presenceTrackEntityId,H=M;u.textContent="Waiting for three fresh reports. Hold still on the chosen point.",b();let N;try{N=await s2(async()=>(await n.request("TRACK_GET",[U]))?.[U],p,Date.now,()=>C===w&&s.open)}catch{N={error:"Home Assistant could not read the radar. Check the connection and retry."}}C!==w||!s.open||(A=!1,N.point&&(v.push({plan:H,radar:N.point}),a.value=c.value="",M=void 0),u.textContent=N.error??`Captured point ${v.length}. Choose another location.`,b())}),g.addEventListener("click",()=>{v.pop(),b()}),y.addEventListener("click",()=>{_?.transform&&(e.setRadarCalibration(x.id,x.presenceTrackEntityId,_.transform)?s.close():u.textContent="The radar source changed. Reopen calibration for the current sensor.")}),s.addEventListener("close",()=>{w++}),{dispose(){w++,i.removeEventListener("click",O),s.open&&s.close()}}}var o2=22,a2=5,c2=1e3/12,l2=1e3,u2=12;function h2(i,t,e){let n=t0(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:u,y:f,w:o,h:a});c.sort((u,f)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(u=>n.every(f=>Math.abs(u.x-f.x)>=(u.w+f.w)/2+2||Math.abs(u.y-f.y)>=(u.h+f.h)/2+2));l&&n.push(l)}return n}function f2(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function d2(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=u<=o2;return!f&&(a.type==="garageDoor"||!f2(a,e))?[]:[{item:a,index:c,distance:u,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function p2(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;gm(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),f=i.getElementById("sceneDefaultStatus"),h=_m(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,y=N0(i,t,{api:e,bridge:g}),p=E0(i,t,{api:e,viewport:s,bridge:g,onChange:()=>{Vt(N?.item&&N.position?{[N.item.id]:{position:N.position}}:void 0)}}),m=i.createElement("div");m.className="scene-selection",m.setAttribute("aria-hidden","true"),Object.assign(m.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(m);let x=i.createElement("div");x.className="scene-placeholders",Object.assign(x.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(x);let M=i.createElementNS("http://www.w3.org/2000/svg","svg");M.classList.add("scene-placeholder-leaders"),M.setAttribute("aria-hidden","true"),Object.assign(M.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(M,x);let _=new Map,v=i.getElementById("miniHelp"),w=v?.textContent,A=n.getAttribute("aria-label")??"Editable three-dimensional home view",b,I,O,C=jh(null),U=r.value,H="default",N,k,z,W=-1/0,tt=0,j,J=!1,at=!1,Et=null,xt=!1,bt=[],Pt=[],Lt="",L=0,Z,ct=!1,gt={},lt={key:"",scene:null,reduceMotion:!1},yt={id:null,scene:null},Mt=()=>U!=="plan",K=()=>U==="free",dt=()=>d?.matches===!0||!p.motionEnabled(),Tt=()=>n.getBoundingClientRect(),St=_t=>{let Ft=Tt();return{x:_t.clientX-Ft.left,y:_t.clientY-Ft.top}};function Ct(_t){e.showStatus?.(_t)}function kt(){if(!(!J&&(b?.hasAmbientMotion||b?.hasPeopleMotion)&&Mt()&&!i.hidden&&!dt())){t.cancelAnimationFrame(z),z=void 0;return}z===void 0&&(z=t.requestAnimationFrame(Ft=>{if(z=void 0,Ft-W>=c2-1){W=Ft,tt=Ft/1e3;try{j&&b.render(tt,...j)}catch{S()}}kt()}))}function Bt(_t=!0){let Ft=Mt()?b:null,qt=dt(),ce=Gt()?u0(bt,gt):[],Ee=JSON.stringify(ce);Ee===lt.key&&Ft===lt.scene&&qt===lt.reduceMotion||(lt={key:Ee,scene:Ft,reduceMotion:qt},Ft&&(Ft.setPeople(ce,(t.performance?.now()??0)/1e3,{reduceMotion:qt}),_t&&Vt()),e.setPersonPreview?.(Ft?[]:ce))}function Gt(){return!!(g?.request&&Pt.length&&!J&&!i.hidden)}async function jt(_t=!0){if(_t&&Bt(),ct||!Gt())return;ct=!0;let Ft=L;try{let qt=await g.request("TRACK_GET",Pt);Ft===L&&Gt()&&(gt=qt&&typeof qt=="object"?qt:{},Bt())}catch{Ft===L&&(gt={},Bt())}finally{ct=!1}}function $(){Gt()?Z===void 0&&(Z=t.setInterval(jt,l2),jt(!1)):Z!==void 0&&(t.clearInterval(Z),Z=void 0,L++,gt={})}function de(_t){bt=_t.filter(ce=>ce.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ce.presenceTrackEntityId)&&Array.isArray(ce.presenceTrackTransform));let Ft=[...new Set(bt.map(ce=>ce.presenceTrackEntityId))].slice(0,u2),qt=Ft.join(",");qt!==Lt&&(Lt=qt,Pt=Ft,L++,gt={}),$()}function Vt(_t){if(kt(),!b||!Mt())return;let{width:Ft,height:qt}=Tt();if(!Ft||!qt)return;b.resize(Ft,qt);let ce=e.getSelection(),Ee=ce?.kind==="item"?ce.id:null;if(yt.scene!==b||yt.id!==Ee){let qe=I.items.find(nn=>nn.id===Ee);b.setDetectionZones(qe?l0([qe]):[]),yt={id:Ee,scene:b}}let ln=dt(),Sn=p.sync(!0,I.sceneSettings,ln),Ce=Object.create(null);for(let qe of I.items){let nn=Sn.states[qe.id];nn&&nn.entityId===qe.entityId&&(Ce[qe.id]=nn)}if(j=[Ce,{...Sn.environment,reduceMotion:ln},{showTelemetryPosition:!1,draftPositions:_t}],b.render(tt,...j),K())return;let wn=[];for(let[qe,nn]of _){let un=b.anchor(qe);if(nn.hidden=!un,un){let P=I.items.find(mt=>mt.id===qe),et=P?.type==="cameraThumbnail"?vm(P,Ft):{w:96,h:44};wn.push({id:qe,marker:nn,x:un.x*Ft,y:un.y*qt,...et})}}let Ke=h2(wn,Ft,qt),yn=new Set(Ke.map(qe=>qe.id)),Ne=[];for(let qe of Ke){let{marker:nn,x:un,y:P,w:et,h:mt,id:ft}=qe;Object.assign(nn.style,{left:`${un}px`,top:`${P}px`,width:`${et}px`,height:`${mt}px`});let ht=wn.find(zt=>zt.id===ft);if(Math.hypot(ht.x-un,ht.y-P)>8){let zt=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[Zt,Xt]of Object.entries({x1:ht.x,y1:ht.y,x2:un,y2:P}))zt.setAttribute(Zt,Xt);zt.setAttribute("stroke","#6f816b"),zt.setAttribute("stroke-width","1"),zt.setAttribute("stroke-dasharray","3 3"),Ne.push(zt)}}for(let[qe,nn]of _)nn.hidden=!yn.has(qe);M.replaceChildren(...Ne);let Nn=ce?.kind==="item"?b.anchor(ce.id):null;m.style.display=Nn?"block":"none",Nn&&(m.style.left=`${Nn.x*Ft}px`,m.style.top=`${Nn.y*qt}px`)}function V(){if(!N)return;let _t=N;N=void 0;try{n.releasePointerCapture(_t.pointerId)}catch{}_t.item&&Vt({[_t.item.id]:{position:{x:_t.item.x,y:_t.item.y}}})}function T(){a&&(a.hidden=!Mt());for(let _t of Object.values(o))_t&&(_t.disabled=!Mt());l&&(l.hidden=!b||!K(),l.disabled=xt),u&&(u.hidden=!b||!Mt()||!Et,u.disabled=xt)}function nt(_t){f&&(f.textContent=_t)}function ut(){at=!0,nt("")}function pt(){n.tabIndex=K()?0:-1,n.style.cursor=K()?"grab":"",n.setAttribute("aria-label",K()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":A)}function G(_t,{initial:Ft=!1}={}){Ft||(ut(),_t==="default"&&(at=!1)),st.cancel(),V();let qt=b?.getView()??C,ce=Object.hasOwn(Yr,_t)?_t:"plan";ce!=="plan"&&e.useSelectTool?.(),U=ce,Mt()&&!K()&&(H=U),r.value=U,n.hidden=!Mt(),pt();let Ee=Mt()&&!K();if(x.style.display=Ee?"block":"none",M.style.display=Ee?"block":"none",Ee||(m.style.display="none"),v&&(K()?v.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":v.textContent=Mt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":w),s.classList.toggle("scene-3d",Mt()),T(),!Mt()){E(),kt(),p.sync(!1,e.getProject().sceneSettings),Ct("Plan view \xB7 edit rooms, walls, floors and objects");return}let ln=U==="default"?jh(Et):K()?ym(qt):{preset:U};C=b?b.setView(ln):ln,E(),b&&Ct(K()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function S(){st.cancel(),b?.dispose(),b=void 0,O=void 0,U="plan",kt(),r.value=U,n.hidden=!0,p.sync(!1,e.getProject().sceneSettings),pt(),x.style.display="none",M.style.display="none",v&&(v.textContent=w),s.classList.remove("scene-3d"),m.style.display="none",T(),Bt(!1),Ct("3D view is unavailable on this screen. Plan view is ready.")}function E(){if(J)return;let _t=e.getProject();if(de(_t.items),!Mt()){p.sync(!1,_t.sceneSettings),Bt();return}let Ft=JSON.stringify(_t);try{if(!b||Ft!==O){V(),b&&(C=b.getView()),b?.dispose(),b=void 0,I=_t,b=$g(n,I),b.setView(C),O=Ft,_.clear(),x.replaceChildren();for(let qt of I.items.filter(ce=>ce.type==="cameraThumbnail"||ce.type.startsWith("ui"))){let ce=i.createElement("button");ce.type="button",ce.className="scene-placeholder",ce.textContent=qt.name||(qt.type==="cameraThumbnail"?"Camera":"Interface"),ce.setAttribute("aria-label",`Select ${ce.textContent}`),Object.assign(ce.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ce.addEventListener("pointerdown",Ee=>rt(Ee,qt.id)),ce.addEventListener("click",Ee=>{!K()&&Ee.detail===0&&(e.selectItem(qt.id),Vt())}),_.set(qt.id,ce),x.append(ce)}}T(),Bt(!1),Vt()}catch{S()}}function R(_t){!b||!Mt()||(ut(),V(),b.setView(_t(b.getView())),C=b.getView(),Vt())}let F=()=>E(),B=()=>{let _t=e.getTool();Mt()&&_t!=="select"?G("plan"):K()&&e.hasPlacement()?G(H):Mt()&&Vt()},q=()=>G(r.value),X=()=>{t.cancelAnimationFrame(k),k=t.requestAnimationFrame(()=>Vt())},st=Kg(n,{getView:()=>K()?b?.getView():null,onChange:_t=>{!b||!K()||(ut(),C=b.setView(_t),X())}}),rt=(_t,Ft=null)=>{if(!Mt()||K()||!b||_t.button!==0||N)return;_t.preventDefault(),_t.stopPropagation();let qt=St(_t);if(e.hasPlacement()){let Ke=b.projectToPlan(qt.x,qt.y,e.getPlacementType(),{preferTabletop:!0});Ke&&e.placeAt(Ke.x,Ke.y),E();return}let{width:ce,height:Ee}=Tt(),ln=new Map(I.items.map(Ke=>[Ke.id,b.anchor(Ke.id)])),Sn=Ft??b.pickGarage(qt.x,qt.y),Ce=Sn?I.items.find(Ke=>Ke.id===Sn):d2(I.items,qt,b.projectToPlan(qt.x,qt.y),ln,ce,Ee);if(e.selectItem(Ce?.id??null),!Ce){Vt();return}let wn=b.projectToPlan(qt.x,qt.y,Ce.type);wn&&(N={item:{...Ce},startScreen:qt,startPlan:wn,pointerId:_t.pointerId},n.setPointerCapture(_t.pointerId),Vt())},Rt=_t=>{if(!Mt()||K()||(_t.stopPropagation(),!N||N.pointerId!==_t.pointerId||!b))return;let Ft=St(_t);if(!N.moved&&Math.hypot(Ft.x-N.startScreen.x,Ft.y-N.startScreen.y)<a2)return;let qt=b.projectToPlan(Ft.x,Ft.y,N.item.type);if(!qt)return;N.moved=!0;let ce={x:N.item.x+qt.x-N.startPlan.x,y:N.item.y+qt.y-N.startPlan.y},Ee=e.moveItemWarning?.(N.item.id,ce.x,ce.y);if(Ee){Ee!==N.warning&&Ct(Ee),N.warning=Ee;return}N.warning&&Ct(`Moving ${N.item.name||"object"}`),N.warning=void 0,N.position=ce,Vt({[N.item.id]:{position:N.position}})},D=_t=>{if(!Mt()||K()||(_t.stopPropagation(),!N||N.pointerId!==_t.pointerId))return;let Ft=N;N=void 0;try{n.releasePointerCapture(_t.pointerId)}catch{}Ft.moved&&Ft.position?(e.moveItem(Ft.item.id,Ft.position.x,Ft.position.y),E()):Vt()},ot=_t=>{K()||(N?.pointerId===_t.pointerId&&V(),_t.stopPropagation())},Q=_t=>{!Mt()||K()||(_t.preventDefault(),_t.stopPropagation(),R(Ft=>({...Ft,zoom:Ft.zoom*(_t.deltaY<0?1.1:1/1.1)})))},wt=_t=>{K()&&_t.target===n&&(_t.key==="Delete"||_t.key==="Backspace")&&(_t.preventDefault(),_t.stopImmediatePropagation()),_t.key==="Escape"&&N&&(_t.preventDefault(),_t.stopImmediatePropagation(),V())},At=_t=>{_t.preventDefault(),S()},vt=()=>R(_t=>({..._t,azimuth:_t.azimuth-15})),Dt=()=>R(_t=>({..._t,azimuth:_t.azimuth+15})),Ot=()=>R(_t=>({..._t,zoom:_t.zoom/1.2})),fe=()=>R(_t=>({..._t,zoom:_t.zoom*1.2})),re=()=>G("top"),Me=()=>{Bt(!1),Vt()},we=()=>{$(),Bt(),kt()};i.addEventListener("visibilitychange",we),d?.addEventListener("change",Me);async function gn(){xt=!0,T();try{Et=await h.read(),!J&&!at&&G("default",{initial:!0})}catch{J||nt("Saved view unavailable")}finally{xt=!1,J||T()}}async function It(_t){if(!(!b||!Mt()||xt)){xt=!0,nt("Saving view\u2026"),T();try{if(await h.write(_t),J)return;Et=_t,_t||G("default"),nt(_t?"Default view saved":"Top down is the default")}catch{J||nt("Could not save default view")}finally{xt=!1,J||T()}}}let Ut=()=>{K()&&b&&It(b.getView())},Wt=()=>It(null);o.left?.addEventListener("click",vt),o.right?.addEventListener("click",Dt),o.out?.addEventListener("click",Ot),o.in?.addEventListener("click",fe),c?.addEventListener("click",re),l?.addEventListener("click",Ut),u?.addEventListener("click",Wt),r.addEventListener("change",q),n.addEventListener("pointerdown",rt),n.addEventListener("pointermove",Rt),n.addEventListener("pointerup",D),n.addEventListener("pointercancel",ot),n.addEventListener("lostpointercapture",ot),n.addEventListener("wheel",Q,{passive:!1}),n.addEventListener("webglcontextlost",At),t.addEventListener("keydown",wt,!0),t.addEventListener("roomcraft-editor-change",F),t.addEventListener("roomcraft-editor-tool",B);let ie=new t.ResizeObserver(X);ie.observe(s),G(U,{initial:!0});try{(t.location.hash==="#scene-settings"||g&&t.parent.location.hash==="#scene-settings")&&p.open()}catch{}return gn(),{getView:()=>b?.getView()??{...C},setView:G,dispose(){J=!0,kt(),$(),i.removeEventListener("visibilitychange",we),d?.removeEventListener("change",Me),V(),st.dispose(),U="plan",pt(),ie.disconnect(),t.cancelAnimationFrame(k),b?.dispose(),b=void 0,m.remove(),x.remove(),M.remove(),p.dispose(),y?.dispose(),v&&(v.textContent=w),o.left?.removeEventListener("click",vt),o.right?.removeEventListener("click",Dt),o.out?.removeEventListener("click",Ot),o.in?.removeEventListener("click",fe),c?.removeEventListener("click",re),l?.removeEventListener("click",Ut),u?.removeEventListener("click",Wt),r.removeEventListener("change",q),n.removeEventListener("pointerdown",rt),n.removeEventListener("pointermove",Rt),n.removeEventListener("pointerup",D),n.removeEventListener("pointercancel",ot),n.removeEventListener("lostpointercapture",ot),n.removeEventListener("wheel",Q),n.removeEventListener("webglcontextlost",At),t.removeEventListener("keydown",wt,!0),t.removeEventListener("roomcraft-editor-change",F),t.removeEventListener("roomcraft-editor-tool",B)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=wf,p2(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
