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
"use strict";(()=>{var wg=Object.create;var Lf=Object.defineProperty;var Eg=Object.getOwnPropertyDescriptor;var Tg=Object.getOwnPropertyNames;var Ag=Object.getPrototypeOf,Rg=Object.prototype.hasOwnProperty;var Cg=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Ig=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Tg(t))!Rg.call(i,s)&&s!==e&&Lf(i,s,{get:()=>t[s],enumerable:!(n=Eg(t,s))||n.enumerable});return i};var Sa=(i,t,e)=>(e=i!=null?wg(Ag(i)):{},Ig(t||!i||!i.__esModule?Lf(e,"default",{value:i,enumerable:!0}):e,i));var ua=Cg((Gh,Vh)=>{(function(i,t){typeof Gh=="object"&&typeof Vh<"u"?Vh.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(Gh,(function(){"use strict";/**
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
    ***************************************************************************** */function i(z,w){var E={label:0,sent:function(){if(L[0]&1)throw L[1];return L[1]},trys:[],ops:[]},R,F,L,V;return V={next:q(0),throw:q(1),return:q(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function q(ot){return function(At){return at([ot,At])}}function at(ot){if(R)throw new TypeError("Generator is already executing.");for(;E;)try{if(R=1,F&&(L=ot[0]&2?F.return:ot[0]?F.throw||((L=F.return)&&L.call(F),0):F.next)&&!(L=L.call(F,ot[1])).done)return L;switch(F=0,L&&(ot=[ot[0]&2,L.value]),ot[0]){case 0:case 1:L=ot;break;case 4:return E.label++,{value:ot[1],done:!1};case 5:E.label++,F=ot[1],ot=[0];continue;case 7:ot=E.ops.pop(),E.trys.pop();continue;default:if(L=E.trys,!(L=L.length>0&&L[L.length-1])&&(ot[0]===6||ot[0]===2)){E=0;continue}if(ot[0]===3&&(!L||ot[1]>L[0]&&ot[1]<L[3])){E.label=ot[1];break}if(ot[0]===6&&E.label<L[1]){E.label=L[1],L=ot;break}if(L&&E.label<L[2]){E.label=L[2],E.ops.push(ot);break}L[2]&&E.ops.pop(),E.trys.pop();continue}ot=w.call(z,E)}catch(At){ot=[6,At],F=0}finally{R=L=0}if(ot[0]&5)throw ot[1];return{value:ot[0]?ot[1]:void 0,done:!0}}}var t=(function(){function z(w,E){this.next=null,this.key=w,this.data=E,this.left=null,this.right=null}return z})();function e(z,w){return z>w?1:z<w?-1:0}function n(z,w,E){for(var R=new t(null,null),F=R,L=R;;){var V=E(z,w.key);if(V<0){if(w.left===null)break;if(E(z,w.left.key)<0){var q=w.left;if(w.left=q.right,q.right=w,w=q,w.left===null)break}L.left=w,L=w,w=w.left}else if(V>0){if(w.right===null)break;if(E(z,w.right.key)>0){var q=w.right;if(w.right=q.left,q.left=w,w=q,w.right===null)break}F.right=w,F=w,w=w.right}else break}return F.right=w.left,L.left=w.right,w.left=R.right,w.right=R.left,w}function s(z,w,E,R){var F=new t(z,w);if(E===null)return F.left=F.right=null,F;E=n(z,E,R);var L=R(z,E.key);return L<0?(F.left=E.left,F.right=E,E.left=null):L>=0&&(F.right=E.right,F.left=E,E.right=null),F}function r(z,w,E){var R=null,F=null;if(w){w=n(z,w,E);var L=E(w.key,z);L===0?(R=w.left,F=w.right):L<0?(F=w.right,w.right=null,R=w):(R=w.left,w.left=null,F=w)}return{left:R,right:F}}function o(z,w,E){return w===null?z:(z===null||(w=n(z.key,w,E),w.left=z),w)}function a(z,w,E,R,F){if(z){R(""+w+(E?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+F(z)+`
`);var L=w+(E?"    ":"\u2502   ");z.left&&a(z.left,L,!1,R,F),z.right&&a(z.right,L,!0,R,F)}}var c=(function(){function z(w){w===void 0&&(w=e),this._root=null,this._size=0,this._comparator=w}return z.prototype.insert=function(w,E){return this._size++,this._root=s(w,E,this._root,this._comparator)},z.prototype.add=function(w,E){var R=new t(w,E);this._root===null&&(R.left=R.right=null,this._size++,this._root=R);var F=this._comparator,L=n(w,this._root,F),V=F(w,L.key);return V===0?this._root=L:(V<0?(R.left=L.left,R.right=L,L.left=null):V>0&&(R.right=L.right,R.left=L,L.right=null),this._size++,this._root=R),this._root},z.prototype.remove=function(w){this._root=this._remove(w,this._root,this._comparator)},z.prototype._remove=function(w,E,R){var F;if(E===null)return null;E=n(w,E,R);var L=R(w,E.key);return L===0?(E.left===null?F=E.right:(F=n(w,E.left,R),F.right=E.right),this._size--,F):E},z.prototype.pop=function(){var w=this._root;if(w){for(;w.left;)w=w.left;return this._root=n(w.key,this._root,this._comparator),this._root=this._remove(w.key,this._root,this._comparator),{key:w.key,data:w.data}}return null},z.prototype.findStatic=function(w){for(var E=this._root,R=this._comparator;E;){var F=R(w,E.key);if(F===0)return E;F<0?E=E.left:E=E.right}return null},z.prototype.find=function(w){return this._root&&(this._root=n(w,this._root,this._comparator),this._comparator(w,this._root.key)!==0)?null:this._root},z.prototype.contains=function(w){for(var E=this._root,R=this._comparator;E;){var F=R(w,E.key);if(F===0)return!0;F<0?E=E.left:E=E.right}return!1},z.prototype.forEach=function(w,E){for(var R=this._root,F=[],L=!1;!L;)R!==null?(F.push(R),R=R.left):F.length!==0?(R=F.pop(),w.call(E,R),R=R.right):L=!0;return this},z.prototype.range=function(w,E,R,F){for(var L=[],V=this._comparator,q=this._root,at;L.length!==0||q;)if(q)L.push(q),q=q.left;else{if(q=L.pop(),at=V(q.key,E),at>0)break;if(V(q.key,w)>=0&&R.call(F,q))return this;q=q.right}return this},z.prototype.keys=function(){var w=[];return this.forEach(function(E){var R=E.key;return w.push(R)}),w},z.prototype.values=function(){var w=[];return this.forEach(function(E){var R=E.data;return w.push(R)}),w},z.prototype.min=function(){return this._root?this.minNode(this._root).key:null},z.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},z.prototype.minNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.left;)w=w.left;return w},z.prototype.maxNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.right;)w=w.right;return w},z.prototype.at=function(w){for(var E=this._root,R=!1,F=0,L=[];!R;)if(E)L.push(E),E=E.left;else if(L.length>0){if(E=L.pop(),F===w)return E;F++,E=E.right}else R=!0;return null},z.prototype.next=function(w){var E=this._root,R=null;if(w.right){for(R=w.right;R.left;)R=R.left;return R}for(var F=this._comparator;E;){var L=F(w.key,E.key);if(L===0)break;L<0?(R=E,E=E.left):E=E.right}return R},z.prototype.prev=function(w){var E=this._root,R=null;if(w.left!==null){for(R=w.left;R.right;)R=R.right;return R}for(var F=this._comparator;E;){var L=F(w.key,E.key);if(L===0)break;L<0?E=E.left:(R=E,E=E.right)}return R},z.prototype.clear=function(){return this._root=null,this._size=0,this},z.prototype.toList=function(){return h(this._root)},z.prototype.load=function(w,E,R){E===void 0&&(E=[]),R===void 0&&(R=!1);var F=w.length,L=this._comparator;if(R&&g(w,E,0,F-1,L),this._root===null)this._root=l(w,E,0,F),this._size=F;else{var V=d(this.toList(),u(w,E),L);F=this._size+F,this._root=f({head:V},0,F)}return this},z.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(z.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(z.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),z.prototype.toString=function(w){w===void 0&&(w=function(R){return String(R.key)});var E=[];return a(this._root,"",!0,function(R){return E.push(R)},w),E.join("")},z.prototype.update=function(w,E,R){var F=this._comparator,L=r(w,this._root,F),V=L.left,q=L.right;F(w,E)<0?q=s(E,R,q,F):V=s(E,R,V,F),this._root=o(V,q,F)},z.prototype.split=function(w){return r(w,this._root,this._comparator)},z.prototype[Symbol.iterator]=function(){var w,E,R;return i(this,function(F){switch(F.label){case 0:w=this._root,E=[],R=!1,F.label=1;case 1:return R?[3,6]:w===null?[3,2]:(E.push(w),w=w.left,[3,5]);case 2:return E.length===0?[3,4]:(w=E.pop(),[4,w]);case 3:return F.sent(),w=w.right,[3,5];case 4:R=!0,F.label=5;case 5:return[3,1];case 6:return[2]}})},z})();function l(z,w,E,R){var F=R-E;if(F>0){var L=E+Math.floor(F/2),V=z[L],q=w[L],at=new t(V,q);return at.left=l(z,w,E,L),at.right=l(z,w,L+1,R),at}return null}function u(z,w){for(var E=new t(null,null),R=E,F=0;F<z.length;F++)R=R.next=new t(z[F],w[F]);return R.next=null,E.next}function h(z){for(var w=z,E=[],R=!1,F=new t(null,null),L=F;!R;)w?(E.push(w),w=w.left):E.length>0?(w=L=L.next=E.pop(),w=w.right):R=!0;return L.next=null,F.next}function f(z,w,E){var R=E-w;if(R>0){var F=w+Math.floor(R/2),L=f(z,w,F),V=z.head;return V.left=L,z.head=z.head.next,V.right=f(z,F+1,E),V}return null}function d(z,w,E){for(var R=new t(null,null),F=R,L=z,V=w;L!==null&&V!==null;)E(L.key,V.key)<0?(F.next=L,L=L.next):(F.next=V,V=V.next),F=F.next;return L!==null?F.next=L:V!==null&&(F.next=V),R.next}function g(z,w,E,R,F){if(!(E>=R)){for(var L=z[E+R>>1],V=E-1,q=R+1;;){do V++;while(F(z[V],L)<0);do q--;while(F(z[q],L)>0);if(V>=q)break;var at=z[V];z[V]=z[q],z[q]=at,at=w[V],w[V]=w[q],w[q]=at}g(z,w,E,q,F),g(z,w,q+1,R,F)}}let y=(z,w)=>z.ll.x<=w.x&&w.x<=z.ur.x&&z.ll.y<=w.y&&w.y<=z.ur.y,p=(z,w)=>{if(w.ur.x<z.ll.x||z.ur.x<w.ll.x||w.ur.y<z.ll.y||z.ur.y<w.ll.y)return null;let E=z.ll.x<w.ll.x?w.ll.x:z.ll.x,R=z.ur.x<w.ur.x?z.ur.x:w.ur.x,F=z.ll.y<w.ll.y?w.ll.y:z.ll.y,L=z.ur.y<w.ur.y?z.ur.y:w.ur.y;return{ll:{x:E,y:F},ur:{x:R,y:L}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let x=m*m,M=(z,w)=>{if(-m<z&&z<m&&-m<w&&w<m)return 0;let E=z-w;return E*E<x*z*w?0:z<w?-1:1};class v{constructor(){this.reset()}reset(){this.xRounder=new b,this.yRounder=new b}round(w,E){return{x:this.xRounder.round(w),y:this.yRounder.round(E)}}}class b{constructor(){this.tree=new c,this.round(0)}round(w){let E=this.tree.add(w),R=this.tree.prev(E);if(R!==null&&M(E.key,R.key)===0)return this.tree.remove(w),R.key;let F=this.tree.next(E);return F!==null&&M(E.key,F.key)===0?(this.tree.remove(w),F.key):w}}let S=new v,A=11102230246251565e-32,_=134217729,C=(3+8*A)*A;function D(z,w,E,R,F){let L,V,q,at,ot=w[0],At=R[0],N=0,st=0;At>ot==At>-ot?(L=ot,ot=w[++N]):(L=At,At=R[++st]);let J=0;if(N<z&&st<E)for(At>ot==At>-ot?(V=ot+L,q=L-(V-ot),ot=w[++N]):(V=At+L,q=L-(V-At),At=R[++st]),L=V,q!==0&&(F[J++]=q);N<z&&st<E;)At>ot==At>-ot?(V=L+ot,at=V-L,q=L-(V-at)+(ot-at),ot=w[++N]):(V=L+At,at=V-L,q=L-(V-at)+(At-at),At=R[++st]),L=V,q!==0&&(F[J++]=q);for(;N<z;)V=L+ot,at=V-L,q=L-(V-at)+(ot-at),ot=w[++N],L=V,q!==0&&(F[J++]=q);for(;st<E;)V=L+At,at=V-L,q=L-(V-at)+(At-at),At=R[++st],L=V,q!==0&&(F[J++]=q);return(L!==0||J===0)&&(F[J++]=L),J}function I(z,w){let E=w[0];for(let R=1;R<z;R++)E+=w[R];return E}function U(z){return new Float64Array(z)}let k=(3+16*A)*A,O=(2+12*A)*A,Y=(9+64*A)*A*A,W=U(4),Z=U(8),ct=U(12),nt=U(16),it=U(4);function et(z,w,E,R,F,L,V){let q,at,ot,At,N,st,J,wt,Et,xt,Ft,ht,It,Ut,Yt,te,fe,me,Ue=z-F,Ve=E-F,Ze=w-L,Lt=R-L;Ut=Ue*Lt,st=_*Ue,J=st-(st-Ue),wt=Ue-J,st=_*Lt,Et=st-(st-Lt),xt=Lt-Et,Yt=wt*xt-(Ut-J*Et-wt*Et-J*xt),te=Ze*Ve,st=_*Ze,J=st-(st-Ze),wt=Ze-J,st=_*Ve,Et=st-(st-Ve),xt=Ve-Et,fe=wt*xt-(te-J*Et-wt*Et-J*xt),Ft=Yt-fe,N=Yt-Ft,W[0]=Yt-(Ft+N)+(N-fe),ht=Ut+Ft,N=ht-Ut,It=Ut-(ht-N)+(Ft-N),Ft=It-te,N=It-Ft,W[1]=It-(Ft+N)+(N-te),me=ht+Ft,N=me-ht,W[2]=ht-(me-N)+(Ft-N),W[3]=me;let Ht=I(4,W),ie=O*V;if(Ht>=ie||-Ht>=ie||(N=z-Ue,q=z-(Ue+N)+(N-F),N=E-Ve,ot=E-(Ve+N)+(N-F),N=w-Ze,at=w-(Ze+N)+(N-L),N=R-Lt,At=R-(Lt+N)+(N-L),q===0&&at===0&&ot===0&&At===0)||(ie=Y*V+C*Math.abs(Ht),Ht+=Ue*At+Lt*q-(Ze*ot+Ve*at),Ht>=ie||-Ht>=ie))return Ht;Ut=q*Lt,st=_*q,J=st-(st-q),wt=q-J,st=_*Lt,Et=st-(st-Lt),xt=Lt-Et,Yt=wt*xt-(Ut-J*Et-wt*Et-J*xt),te=at*Ve,st=_*at,J=st-(st-at),wt=at-J,st=_*Ve,Et=st-(st-Ve),xt=Ve-Et,fe=wt*xt-(te-J*Et-wt*Et-J*xt),Ft=Yt-fe,N=Yt-Ft,it[0]=Yt-(Ft+N)+(N-fe),ht=Ut+Ft,N=ht-Ut,It=Ut-(ht-N)+(Ft-N),Ft=It-te,N=It-Ft,it[1]=It-(Ft+N)+(N-te),me=ht+Ft,N=me-ht,it[2]=ht-(me-N)+(Ft-N),it[3]=me;let ue=D(4,W,4,it,Z);Ut=Ue*At,st=_*Ue,J=st-(st-Ue),wt=Ue-J,st=_*At,Et=st-(st-At),xt=At-Et,Yt=wt*xt-(Ut-J*Et-wt*Et-J*xt),te=Ze*ot,st=_*Ze,J=st-(st-Ze),wt=Ze-J,st=_*ot,Et=st-(st-ot),xt=ot-Et,fe=wt*xt-(te-J*Et-wt*Et-J*xt),Ft=Yt-fe,N=Yt-Ft,it[0]=Yt-(Ft+N)+(N-fe),ht=Ut+Ft,N=ht-Ut,It=Ut-(ht-N)+(Ft-N),Ft=It-te,N=It-Ft,it[1]=It-(Ft+N)+(N-te),me=ht+Ft,N=me-ht,it[2]=ht-(me-N)+(Ft-N),it[3]=me;let be=D(ue,Z,4,it,ct);Ut=q*At,st=_*q,J=st-(st-q),wt=q-J,st=_*At,Et=st-(st-At),xt=At-Et,Yt=wt*xt-(Ut-J*Et-wt*Et-J*xt),te=at*ot,st=_*at,J=st-(st-at),wt=at-J,st=_*ot,Et=st-(st-ot),xt=ot-Et,fe=wt*xt-(te-J*Et-wt*Et-J*xt),Ft=Yt-fe,N=Yt-Ft,it[0]=Yt-(Ft+N)+(N-fe),ht=Ut+Ft,N=ht-Ut,It=Ut-(ht-N)+(Ft-N),Ft=It-te,N=It-Ft,it[1]=It-(Ft+N)+(N-te),me=ht+Ft,N=me-ht,it[2]=ht-(me-N)+(Ft-N),it[3]=me;let Se=D(be,ct,4,it,nt);return nt[Se-1]}function Pt(z,w,E,R,F,L){let V=(w-L)*(E-F),q=(z-F)*(R-L),at=V-q,ot=Math.abs(V+q);return Math.abs(at)>=k*ot?at:-et(z,w,E,R,F,L,ot)}let Ct=(z,w)=>z.x*w.y-z.y*w.x,Rt=(z,w)=>z.x*w.x+z.y*w.y,Tt=(z,w,E)=>{let R=Pt(z.x,z.y,w.x,w.y,E.x,E.y);return R>0?-1:R<0?1:0},X=z=>Math.sqrt(Rt(z,z)),H=(z,w,E)=>{let R={x:w.x-z.x,y:w.y-z.y},F={x:E.x-z.x,y:E.y-z.y};return Ct(F,R)/X(F)/X(R)},$=(z,w,E)=>{let R={x:w.x-z.x,y:w.y-z.y},F={x:E.x-z.x,y:E.y-z.y};return Rt(F,R)/X(F)/X(R)},rt=(z,w,E)=>w.y===0?null:{x:z.x+w.x/w.y*(E-z.y),y:E},mt=(z,w,E)=>w.x===0?null:{x:E,y:z.y+w.y/w.x*(E-z.x)},pt=(z,w,E,R)=>{if(w.x===0)return mt(E,R,z.x);if(R.x===0)return mt(z,w,E.x);if(w.y===0)return rt(E,R,z.y);if(R.y===0)return rt(z,w,E.y);let F=Ct(w,R);if(F==0)return null;let L={x:E.x-z.x,y:E.y-z.y},V=Ct(L,w)/F,q=Ct(L,R)/F,at=z.x+q*w.x,ot=E.x+V*R.x,At=z.y+q*w.y,N=E.y+V*R.y,st=(at+ot)/2,J=(At+N)/2;return{x:st,y:J}};class bt{static compare(w,E){let R=bt.comparePoints(w.point,E.point);return R!==0?R:(w.point!==E.point&&w.link(E),w.isLeft!==E.isLeft?w.isLeft?1:-1:lt.compare(w.segment,E.segment))}static comparePoints(w,E){return w.x<E.x?-1:w.x>E.x?1:w.y<E.y?-1:w.y>E.y?1:0}constructor(w,E){w.events===void 0?w.events=[this]:w.events.push(this),this.point=w,this.isLeft=E}link(w){if(w.point===this.point)throw new Error("Tried to link already linked events");let E=w.point.events;for(let R=0,F=E.length;R<F;R++){let L=E[R];this.point.events.push(L),L.point=this.point}this.checkForConsuming()}checkForConsuming(){let w=this.point.events.length;for(let E=0;E<w;E++){let R=this.point.events[E];if(R.segment.consumedBy===void 0)for(let F=E+1;F<w;F++){let L=this.point.events[F];L.consumedBy===void 0&&R.otherSE.point.events===L.otherSE.point.events&&R.segment.consume(L.segment)}}}getAvailableLinkedEvents(){let w=[];for(let E=0,R=this.point.events.length;E<R;E++){let F=this.point.events[E];F!==this&&!F.segment.ringOut&&F.segment.isInResult()&&w.push(F)}return w}getLeftmostComparator(w){let E=new Map,R=F=>{let L=F.otherSE;E.set(F,{sine:H(this.point,w.point,L.point),cosine:$(this.point,w.point,L.point)})};return(F,L)=>{E.has(F)||R(F),E.has(L)||R(L);let{sine:V,cosine:q}=E.get(F),{sine:at,cosine:ot}=E.get(L);return V>=0&&at>=0?q<ot?1:q>ot?-1:0:V<0&&at<0?q<ot?-1:q>ot?1:0:at<V?-1:at>V?1:0}}}let Mt=0;class lt{static compare(w,E){let R=w.leftSE.point.x,F=E.leftSE.point.x,L=w.rightSE.point.x,V=E.rightSE.point.x;if(V<R)return 1;if(L<F)return-1;let q=w.leftSE.point.y,at=E.leftSE.point.y,ot=w.rightSE.point.y,At=E.rightSE.point.y;if(R<F){if(at<q&&at<ot)return 1;if(at>q&&at>ot)return-1;let N=w.comparePoint(E.leftSE.point);if(N<0)return 1;if(N>0)return-1;let st=E.comparePoint(w.rightSE.point);return st!==0?st:-1}if(R>F){if(q<at&&q<At)return-1;if(q>at&&q>At)return 1;let N=E.comparePoint(w.leftSE.point);if(N!==0)return N;let st=w.comparePoint(E.rightSE.point);return st<0?1:st>0?-1:1}if(q<at)return-1;if(q>at)return 1;if(L<V){let N=E.comparePoint(w.rightSE.point);if(N!==0)return N}if(L>V){let N=w.comparePoint(E.rightSE.point);if(N<0)return 1;if(N>0)return-1}if(L!==V){let N=ot-q,st=L-R,J=At-at,wt=V-F;if(N>st&&J<wt)return 1;if(N<st&&J>wt)return-1}return L>V?1:L<V||ot<At?-1:ot>At?1:w.id<E.id?-1:w.id>E.id?1:0}constructor(w,E,R,F){this.id=++Mt,this.leftSE=w,w.segment=this,w.otherSE=E,this.rightSE=E,E.segment=this,E.otherSE=w,this.rings=R,this.windings=F}static fromRing(w,E,R){let F,L,V,q=bt.comparePoints(w,E);if(q<0)F=w,L=E,V=1;else if(q>0)F=E,L=w,V=-1;else throw new Error(`Tried to create degenerate segment at [${w.x}, ${w.y}]`);let at=new bt(F,!0),ot=new bt(L,!1);return new lt(at,ot,[R],[V])}replaceRightSE(w){this.rightSE=w,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let w=this.leftSE.point.y,E=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:w<E?w:E},ur:{x:this.rightSE.point.x,y:w>E?w:E}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(w){return w.x===this.leftSE.point.x&&w.y===this.leftSE.point.y||w.x===this.rightSE.point.x&&w.y===this.rightSE.point.y}comparePoint(w){if(this.isAnEndpoint(w))return 0;let E=this.leftSE.point,R=this.rightSE.point,F=this.vector();if(E.x===R.x)return w.x===E.x?0:w.x<E.x?1:-1;let L=(w.y-E.y)/F.y,V=E.x+L*F.x;if(w.x===V)return 0;let q=(w.x-E.x)/F.x,at=E.y+q*F.y;return w.y===at?0:w.y<at?-1:1}getIntersection(w){let E=this.bbox(),R=w.bbox(),F=p(E,R);if(F===null)return null;let L=this.leftSE.point,V=this.rightSE.point,q=w.leftSE.point,at=w.rightSE.point,ot=y(E,q)&&this.comparePoint(q)===0,At=y(R,L)&&w.comparePoint(L)===0,N=y(E,at)&&this.comparePoint(at)===0,st=y(R,V)&&w.comparePoint(V)===0;if(At&&ot)return st&&!N?V:!st&&N?at:null;if(At)return N&&L.x===at.x&&L.y===at.y?null:L;if(ot)return st&&V.x===q.x&&V.y===q.y?null:q;if(st&&N)return null;if(st)return V;if(N)return at;let J=pt(L,this.vector(),q,w.vector());return J===null||!y(F,J)?null:S.round(J.x,J.y)}split(w){let E=[],R=w.events!==void 0,F=new bt(w,!0),L=new bt(w,!1),V=this.rightSE;this.replaceRightSE(L),E.push(L),E.push(F);let q=new lt(F,V,this.rings.slice(),this.windings.slice());return bt.comparePoints(q.leftSE.point,q.rightSE.point)>0&&q.swapEvents(),bt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),R&&(F.checkForConsuming(),L.checkForConsuming()),E}swapEvents(){let w=this.rightSE;this.rightSE=this.leftSE,this.leftSE=w,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let E=0,R=this.windings.length;E<R;E++)this.windings[E]*=-1}consume(w){let E=this,R=w;for(;E.consumedBy;)E=E.consumedBy;for(;R.consumedBy;)R=R.consumedBy;let F=lt.compare(E,R);if(F!==0){if(F>0){let L=E;E=R,R=L}if(E.prev===R){let L=E;E=R,R=L}for(let L=0,V=R.rings.length;L<V;L++){let q=R.rings[L],at=R.windings[L],ot=E.rings.indexOf(q);ot===-1?(E.rings.push(q),E.windings.push(at)):E.windings[ot]+=at}R.rings=null,R.windings=null,R.consumedBy=E,R.leftSE.consumedBy=E.leftSE,R.rightSE.consumedBy=E.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let w=this.prev.consumedBy||this.prev;this._beforeState=w.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let w=this.beforeState();this._afterState={rings:w.rings.slice(0),windings:w.windings.slice(0),multiPolys:[]};let E=this._afterState.rings,R=this._afterState.windings,F=this._afterState.multiPolys;for(let q=0,at=this.rings.length;q<at;q++){let ot=this.rings[q],At=this.windings[q],N=E.indexOf(ot);N===-1?(E.push(ot),R.push(At)):R[N]+=At}let L=[],V=[];for(let q=0,at=E.length;q<at;q++){if(R[q]===0)continue;let ot=E[q],At=ot.poly;if(V.indexOf(At)===-1)if(ot.isExterior)L.push(At);else{V.indexOf(At)===-1&&V.push(At);let N=L.indexOf(ot.poly);N!==-1&&L.splice(N,1)}}for(let q=0,at=L.length;q<at;q++){let ot=L[q].multiPoly;F.indexOf(ot)===-1&&F.push(ot)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let w=this.beforeState().multiPolys,E=this.afterState().multiPolys;switch(Vt.type){case"union":{let R=w.length===0,F=E.length===0;this._isInResult=R!==F;break}case"intersection":{let R,F;w.length<E.length?(R=w.length,F=E.length):(R=E.length,F=w.length),this._isInResult=F===Vt.numMultiPolys&&R<F;break}case"xor":{let R=Math.abs(w.length-E.length);this._isInResult=R%2===1;break}case"difference":{let R=F=>F.length===1&&F[0].isSubject;this._isInResult=R(w)!==R(E);break}default:throw new Error(`Unrecognized operation type found ${Vt.type}`)}return this._isInResult}}class _t{constructor(w,E,R){if(!Array.isArray(w)||w.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=E,this.isExterior=R,this.segments=[],typeof w[0][0]!="number"||typeof w[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let F=S.round(w[0][0],w[0][1]);this.bbox={ll:{x:F.x,y:F.y},ur:{x:F.x,y:F.y}};let L=F;for(let V=1,q=w.length;V<q;V++){if(typeof w[V][0]!="number"||typeof w[V][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let at=S.round(w[V][0],w[V][1]);at.x===L.x&&at.y===L.y||(this.segments.push(lt.fromRing(L,at,this)),at.x<this.bbox.ll.x&&(this.bbox.ll.x=at.x),at.y<this.bbox.ll.y&&(this.bbox.ll.y=at.y),at.x>this.bbox.ur.x&&(this.bbox.ur.x=at.x),at.y>this.bbox.ur.y&&(this.bbox.ur.y=at.y),L=at)}(F.x!==L.x||F.y!==L.y)&&this.segments.push(lt.fromRing(L,F,this))}getSweepEvents(){let w=[];for(let E=0,R=this.segments.length;E<R;E++){let F=this.segments[E];w.push(F.leftSE),w.push(F.rightSE)}return w}}class vt{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new _t(w[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let R=1,F=w.length;R<F;R++){let L=new _t(w[R],this,!1);L.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=L.bbox.ll.x),L.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=L.bbox.ll.y),L.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=L.bbox.ur.x),L.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=L.bbox.ur.y),this.interiorRings.push(L)}this.multiPoly=E}getSweepEvents(){let w=this.exteriorRing.getSweepEvents();for(let E=0,R=this.interiorRings.length;E<R;E++){let F=this.interiorRings[E].getSweepEvents();for(let L=0,V=F.length;L<V;L++)w.push(F[L])}return w}}class St{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof w[0][0][0]=="number"&&(w=[w])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let R=0,F=w.length;R<F;R++){let L=new vt(w[R],this);L.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=L.bbox.ll.x),L.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=L.bbox.ll.y),L.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=L.bbox.ur.x),L.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=L.bbox.ur.y),this.polys.push(L)}this.isSubject=E}getSweepEvents(){let w=[];for(let E=0,R=this.polys.length;E<R;E++){let F=this.polys[E].getSweepEvents();for(let L=0,V=F.length;L<V;L++)w.push(F[L])}return w}}class Nt{static factory(w){let E=[];for(let R=0,F=w.length;R<F;R++){let L=w[R];if(!L.isInResult()||L.ringOut)continue;let V=null,q=L.leftSE,at=L.rightSE,ot=[q],At=q.point,N=[];for(;V=q,q=at,ot.push(q),q.point!==At;)for(;;){let st=q.getAvailableLinkedEvents();if(st.length===0){let Et=ot[0].point,xt=ot[ot.length-1].point;throw new Error(`Unable to complete output ring starting at [${Et.x}, ${Et.y}]. Last matching segment found ends at [${xt.x}, ${xt.y}].`)}if(st.length===1){at=st[0].otherSE;break}let J=null;for(let Et=0,xt=N.length;Et<xt;Et++)if(N[Et].point===q.point){J=Et;break}if(J!==null){let Et=N.splice(J)[0],xt=ot.splice(Et.index);xt.unshift(xt[0].otherSE),E.push(new Nt(xt.reverse()));continue}N.push({index:ot.length,point:q.point});let wt=q.getLeftmostComparator(V);at=st.sort(wt)[0].otherSE;break}E.push(new Nt(ot))}return E}constructor(w){this.events=w;for(let E=0,R=w.length;E<R;E++)w[E].segment.ringOut=this;this.poly=null}getGeom(){let w=this.events[0].point,E=[w];for(let ot=1,At=this.events.length-1;ot<At;ot++){let N=this.events[ot].point,st=this.events[ot+1].point;Tt(N,w,st)!==0&&(E.push(N),w=N)}if(E.length===1)return null;let R=E[0],F=E[1];Tt(R,w,F)===0&&E.shift(),E.push(E[0]);let L=this.isExteriorRing()?1:-1,V=this.isExteriorRing()?0:E.length-1,q=this.isExteriorRing()?E.length:-1,at=[];for(let ot=V;ot!=q;ot+=L)at.push([E[ot].x,E[ot].y]);return at}isExteriorRing(){if(this._isExteriorRing===void 0){let w=this.enclosingRing();this._isExteriorRing=w?!w.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let w=this.events[0];for(let F=1,L=this.events.length;F<L;F++){let V=this.events[F];bt.compare(w,V)>0&&(w=V)}let E=w.segment.prevInResult(),R=E?E.prevInResult():null;for(;;){if(!E)return null;if(!R)return E.ringOut;if(R.ringOut!==E.ringOut)return R.ringOut.enclosingRing()!==E.ringOut?E.ringOut:E.ringOut.enclosingRing();E=R.prevInResult(),R=E?E.prevInResult():null}}}class Ot{constructor(w){this.exteriorRing=w,w.poly=this,this.interiorRings=[]}addInterior(w){this.interiorRings.push(w),w.poly=this}getGeom(){let w=[this.exteriorRing.getGeom()];if(w[0]===null)return null;for(let E=0,R=this.interiorRings.length;E<R;E++){let F=this.interiorRings[E].getGeom();F!==null&&w.push(F)}return w}}class Bt{constructor(w){this.rings=w,this.polys=this._composePolys(w)}getGeom(){let w=[];for(let E=0,R=this.polys.length;E<R;E++){let F=this.polys[E].getGeom();F!==null&&w.push(F)}return w}_composePolys(w){let E=[];for(let R=0,F=w.length;R<F;R++){let L=w[R];if(!L.poly)if(L.isExteriorRing())E.push(new Ot(L));else{let V=L.enclosingRing();V.poly||E.push(new Ot(V)),V.poly.addInterior(L)}}return E}}class $t{constructor(w){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:lt.compare;this.queue=w,this.tree=new c(E),this.segments=[]}process(w){let E=w.segment,R=[];if(w.consumedBy)return w.isLeft?this.queue.remove(w.otherSE):this.tree.remove(E),R;let F=w.isLeft?this.tree.add(E):this.tree.find(E);if(!F)throw new Error(`Unable to find segment #${E.id} [${E.leftSE.point.x}, ${E.leftSE.point.y}] -> [${E.rightSE.point.x}, ${E.rightSE.point.y}] in SweepLine tree.`);let L=F,V=F,q,at;for(;q===void 0;)L=this.tree.prev(L),L===null?q=null:L.key.consumedBy===void 0&&(q=L.key);for(;at===void 0;)V=this.tree.next(V),V===null?at=null:V.key.consumedBy===void 0&&(at=V.key);if(w.isLeft){let ot=null;if(q){let N=q.getIntersection(E);if(N!==null&&(E.isAnEndpoint(N)||(ot=N),!q.isAnEndpoint(N))){let st=this._splitSafely(q,N);for(let J=0,wt=st.length;J<wt;J++)R.push(st[J])}}let At=null;if(at){let N=at.getIntersection(E);if(N!==null&&(E.isAnEndpoint(N)||(At=N),!at.isAnEndpoint(N))){let st=this._splitSafely(at,N);for(let J=0,wt=st.length;J<wt;J++)R.push(st[J])}}if(ot!==null||At!==null){let N=null;ot===null?N=At:At===null?N=ot:N=bt.comparePoints(ot,At)<=0?ot:At,this.queue.remove(E.rightSE),R.push(E.rightSE);let st=E.split(N);for(let J=0,wt=st.length;J<wt;J++)R.push(st[J])}R.length>0?(this.tree.remove(E),R.push(w)):(this.segments.push(E),E.prev=q)}else{if(q&&at){let ot=q.getIntersection(at);if(ot!==null){if(!q.isAnEndpoint(ot)){let At=this._splitSafely(q,ot);for(let N=0,st=At.length;N<st;N++)R.push(At[N])}if(!at.isAnEndpoint(ot)){let At=this._splitSafely(at,ot);for(let N=0,st=At.length;N<st;N++)R.push(At[N])}}}this.tree.remove(E)}return R}_splitSafely(w,E){this.tree.remove(w);let R=w.rightSE;this.queue.remove(R);let F=w.split(E);return F.push(R),w.consumedBy===void 0&&this.tree.add(w),F}}let Gt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,j=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class oe{run(w,E,R){Vt.type=w,S.reset();let F=[new St(E,!0)];for(let N=0,st=R.length;N<st;N++)F.push(new St(R[N],!1));if(Vt.numMultiPolys=F.length,Vt.type==="difference"){let N=F[0],st=1;for(;st<F.length;)p(F[st].bbox,N.bbox)!==null?st++:F.splice(st,1)}if(Vt.type==="intersection")for(let N=0,st=F.length;N<st;N++){let J=F[N];for(let wt=N+1,Et=F.length;wt<Et;wt++)if(p(J.bbox,F[wt].bbox)===null)return[]}let L=new c(bt.compare);for(let N=0,st=F.length;N<st;N++){let J=F[N].getSweepEvents();for(let wt=0,Et=J.length;wt<Et;wt++)if(L.insert(J[wt]),L.size>Gt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let V=new $t(L),q=L.size,at=L.pop();for(;at;){let N=at.key;if(L.size===q){let J=N.segment;throw new Error(`Unable to pop() ${N.isLeft?"left":"right"} SweepEvent [${N.point.x}, ${N.point.y}] from segment #${J.id} [${J.leftSE.point.x}, ${J.leftSE.point.y}] -> [${J.rightSE.point.x}, ${J.rightSE.point.y}] from queue.`)}if(L.size>Gt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(V.segments.length>j)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let st=V.process(N);for(let J=0,wt=st.length;J<wt;J++){let Et=st[J];Et.consumedBy===void 0&&L.insert(Et)}q=L.size,at=L.pop()}S.reset();let ot=Nt.factory(V.segments);return new Bt(ot).getGeom()}}let Vt=new oe;var gt={union:function(z){for(var w=arguments.length,E=new Array(w>1?w-1:0),R=1;R<w;R++)E[R-1]=arguments[R];return Vt.run("union",z,E)},intersection:function(z){for(var w=arguments.length,E=new Array(w>1?w-1:0),R=1;R<w;R++)E[R-1]=arguments[R];return Vt.run("intersection",z,E)},xor:function(z){for(var w=arguments.length,E=new Array(w>1?w-1:0),R=1;R<w;R++)E[R-1]=arguments[R];return Vt.run("xor",z,E)},difference:function(z){for(var w=arguments.length,E=new Array(w>1?w-1:0),R=1;R<w;R++)E[R-1]=arguments[R];return Vt.run("difference",z,E)}};return gt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var _d=0,Ju=1,vd=2;var ks=1,bd=2,Dr=3,gs=0,Nn=1,rn=2,Ti=0,Ur=1,zs=2,Ku=3,Qu=4,Md=5;var Hs=100,Sd=101,wd=102,Ed=103,Td=104,Ad=200,Rd=201,Cd=202,Id=203,th=204,eh=205,Pd=206,Ld=207,Nd=208,Dd=209,Ud=210,Fd=211,Od=212,Bd=213,kd=214,Qa=0,tc=1,ec=2,xr=3,nc=4,ic=5,sc=6,rc=7,Oc=0,zd=1,Hd=2,fi=0,nh=1,ih=2,sh=3,Yo=4,rh=5,oh=6,ah=7;var ch=300,ys=301,Gs=302,Bc=303,kc=304,qo=306,Ns=1e3,bi=1001,oc=1002,hn=1003,Gd=1004;var Zo=1005;var mn=1006,zc=1007;var xs=1008;var Hn=1009,lh=1010,uh=1011,Fr=1012,Hc=1013,di=1014,ni=1015,pi=1016,Gc=1017,Vc=1018,Or=1020,hh=35902,fh=35899,dh=1021,ph=1022,ii=1023,Si=1026,_s=1027,Wc=1028,Xc=1029,vs=1030,Yc=1031;var qc=1033,$o=33776,jo=33777,Jo=33778,Ko=33779,Zc=35840,$c=35841,jc=35842,Jc=35843,Kc=36196,Qc=37492,tl=37496,el=37488,nl=37489,Qo=37490,il=37491,sl=37808,rl=37809,ol=37810,al=37811,cl=37812,ll=37813,ul=37814,hl=37815,fl=37816,dl=37817,pl=37818,ml=37819,gl=37820,yl=37821,xl=36492,_l=36494,vl=36495,bl=36283,Ml=36284,ta=36285,Sl=36286;var po=2300,ac=2301,Ja=2302,Ou=2303,Bu=2400,ku=2401,zu=2402;var Vd=3200;var ea=0,Wd=1,Wi="",en="srgb",mo="srgb-linear",go="linear",Ce="srgb";var Ka=7680;var Xd=519,Yd=512,qd=513,Zd=514,wl=515,$d=516,jd=517,El=518,Jd=519,mh=35044,Dn=35048;var gh="300 es",ui=2e3,_r=2001;function Pg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=yo("canvas");return i.style.display="block",i}var Nf={},vr=null;function xo(...i){let t="THREE."+i.shift();vr?vr("log",t,...i):console.log(t,...i)}function Qd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function re(...i){i=Qd(i);let t="THREE."+i.shift();if(vr)vr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=Qd(i);let t="THREE."+i.shift();if(vr)vr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ls(...i){let t=i.join(" ");t in Nf||(Nf[t]=!0,re(...i))}function tp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ep={[Qa]:tc,[ec]:sc,[nc]:rc,[xr]:ic,[tc]:Qa,[sc]:ec,[rc]:nc,[ic]:xr},wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=1234567,lo=Math.PI/180,br=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function yh(i,t){return(i%t+t)%t}function Ng(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Dg(i,t,e){return i!==t?(e-i)/(t-i):0}function uo(i,t,e){return(1-e)*i+e*t}function Ug(i,t,e,n){return uo(i,t,1-Math.exp(-e*n))}function Fg(i,t=1){return t-Math.abs(yh(i,t*2)-t)}function Og(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zg(i,t){return i+Math.random()*(t-i)}function Hg(i){return i*(.5-Math.random())}function Gg(i){i!==void 0&&(Df=i);let t=Df+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vg(i){return i*lo}function Wg(i){return i*br}function Xg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Yg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zg(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var le={DEG2RAD:lo,RAD2DEG:br,generateUUID:Mi,clamp:de,euclideanModulo:yh,mapLinear:Ng,inverseLerp:Dg,lerp:uo,damp:Ug,pingpong:Fg,smoothstep:Og,smootherstep:Bg,randInt:kg,randFloat:zg,randFloatSpread:Hg,seededRandom:Gg,degToRad:Vg,radToDeg:Wg,isPowerOfTwo:Xg,ceilPowerOfTwo:Yg,floorPowerOfTwo:qg,setQuaternionFromProperEuler:Zg,normalize:Pe,denormalize:li},Dt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(h!==y||c!==f||l!==d||u!==g){let p=c*f+l*d+u*g+h*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let m=1-a;if(p<.9995){let x=Math.acos(p),M=Math.sin(x);m=Math.sin(m*x)/M,a=Math.sin(a*x)/M,c=c*m+f*a,l=l*m+d*a,u=u*m+g*a,h=h*m+y*a}else{c=c*m+f*a,l=l*m+d*a,u=u*m+g*a,h=h*m+y*a;let x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hu.copy(this).projectOnVector(t),this.sub(hu)}reflect(t){return this.sub(hu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hu=new G,Uf=new fn,pe=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],y=s[0],p=s[3],m=s[6],x=s[1],M=s[4],v=s[7],b=s[2],S=s[5],A=s[8];return r[0]=o*y+a*x+c*b,r[3]=o*p+a*M+c*S,r[6]=o*m+a*v+c*A,r[1]=l*y+u*x+h*b,r[4]=l*p+u*M+h*S,r[7]=l*m+u*v+h*A,r[2]=f*y+d*x+g*b,r[5]=f*p+d*M+g*S,r[8]=f*m+d*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(s*l-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fu.makeScale(t,e)),this}rotate(t){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fu.makeRotation(-t)),this}translate(t,e){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fu=new pe,Ff=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $g(){let i={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mo]:{primaries:t,whitePoint:n,transfer:go,toXYZ:Ff,fromXYZ:Of,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:Ff,fromXYZ:Of,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}var ve=$g();function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var er,cc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{er===void 0&&(er=yo("canvas")),er.width=t.width,er.height=t.height;let s=er.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=er}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jg=0,Mr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(du(s[o].image)):r.push(du(s[o]))}else r=du(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function du(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var Jg=0,pu=new G,Ln=class i extends wi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bi,s=bi,r=mn,o=xs,a=ii,c=Hn,l=i.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Mi(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pu).x}get height(){return this.source.getSize(pu).y}get depth(){return this.source.getSize(pu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=ch;Ln.DEFAULT_ANISOTROPY=1;var Ie=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,v=(d+1)/2,b=(m+1)/2,S=(u+f)/4,A=(h+y)/4,_=(g+p)/4;return M>v&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=A/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=_/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-y)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lc=class extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ln(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends lc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_o=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var uc=class extends Ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Me=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,y,p)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/nr.setFromMatrixColumn(t,0).length(),r=1/nr.setFromMatrixColumn(t,1).length(),o=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,g=l*u,y=l*h;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,g=l*u,y=l*h;e[0]=f-y*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*h,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+y,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kg,t,Qg)}lookAt(t,e,n){let s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ts.crossVectors(n,Vn),ts.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ts.crossVectors(n,Vn)),ts.normalize(),wa.crossVectors(Vn,ts),s[0]=ts.x,s[4]=wa.x,s[8]=Vn.x,s[1]=ts.y,s[5]=wa.y,s[9]=Vn.y,s[2]=ts.z,s[6]=wa.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],y=n[6],p=n[10],m=n[14],x=n[3],M=n[7],v=n[11],b=n[15],S=s[0],A=s[4],_=s[8],C=s[12],D=s[1],I=s[5],U=s[9],k=s[13],O=s[2],Y=s[6],W=s[10],Z=s[14],ct=s[3],nt=s[7],it=s[11],et=s[15];return r[0]=o*S+a*D+c*O+l*ct,r[4]=o*A+a*I+c*Y+l*nt,r[8]=o*_+a*U+c*W+l*it,r[12]=o*C+a*k+c*Z+l*et,r[1]=u*S+h*D+f*O+d*ct,r[5]=u*A+h*I+f*Y+d*nt,r[9]=u*_+h*U+f*W+d*it,r[13]=u*C+h*k+f*Z+d*et,r[2]=g*S+y*D+p*O+m*ct,r[6]=g*A+y*I+p*Y+m*nt,r[10]=g*_+y*U+p*W+m*it,r[14]=g*C+y*k+p*Z+m*et,r[3]=x*S+M*D+v*O+b*ct,r[7]=x*A+M*I+v*Y+b*nt,r[11]=x*_+M*U+v*W+b*it,r[15]=x*C+M*k+v*Z+b*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],x=c*d-l*f,M=a*d-l*h,v=a*f-c*h,b=o*d-l*u,S=o*f-c*u,A=o*h-a*u;return e*(y*x-p*M+m*v)-n*(g*x-p*b+m*S)+s*(g*M-y*b+m*A)-r*(g*v-y*S+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],x=e*a-n*o,M=e*c-s*o,v=e*l-r*o,b=n*c-s*a,S=n*l-r*a,A=s*l-r*c,_=u*y-h*g,C=u*p-f*g,D=u*m-d*g,I=h*p-f*y,U=h*m-d*y,k=f*m-d*p,O=x*k-M*U+v*I+b*D-S*C+A*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/O;return t[0]=(a*k-c*U+l*I)*Y,t[1]=(s*U-n*k-r*I)*Y,t[2]=(y*A-p*S+m*b)*Y,t[3]=(f*S-h*A-d*b)*Y,t[4]=(c*D-o*k-l*C)*Y,t[5]=(e*k-s*D+r*C)*Y,t[6]=(p*v-g*A-m*M)*Y,t[7]=(u*A-f*v+d*M)*Y,t[8]=(o*U-a*D+l*_)*Y,t[9]=(n*D-e*U-r*_)*Y,t[10]=(g*S-y*v+m*x)*Y,t[11]=(h*v-u*S-d*x)*Y,t[12]=(a*C-o*I-c*_)*Y,t[13]=(e*I-n*C+s*_)*Y,t[14]=(y*M-g*b-p*x)*Y,t[15]=(u*b-h*M+f*x)*Y,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,y=o*u,p=o*h,m=a*h,x=c*l,M=c*u,v=c*h,b=n.x,S=n.y,A=n.z;return s[0]=(1-(y+m))*b,s[1]=(d+v)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(f+m))*S,s[6]=(p+x)*S,s[7]=0,s[8]=(g+M)*A,s[9]=(p-x)*A,s[10]=(1-(f+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=nr.set(s[0],s[1],s[2]).length(),a=nr.set(s[4],s[5],s[6]).length(),c=nr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let l=1/o,u=1/a,h=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,e.setFromRotationMatrix(oi),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=ui,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===ui)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===_r)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ui,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===ui)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===_r)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},nr=new G,oi=new Me,Kg=new G(0,0,0),Qg=new G(1,1,1),ts=new G,wa=new G,Vn=new G,Bf=new Me,kf=new fn,Ei=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kf.setFromEuler(this),this.setFromQuaternion(kf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ty=0,zf=new G,ir=new fn,Oi=new Me,Ea=new G,eo=new G,ey=new G,ny=new fn,Hf=new G(1,0,0),Gf=new G(0,1,0),Vf=new G(0,0,1),Wf={type:"added"},iy={type:"removed"},sr={type:"childadded",child:null},mu={type:"childremoved",child:null},He=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Ei,n=new fn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new pe}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(Hf,t)}rotateY(t){return this.rotateOnAxis(Gf,t)}rotateZ(t){return this.rotateOnAxis(Vf,t)}translateOnAxis(t,e){return zf.copy(t).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hf,t)}translateY(t){return this.translateOnAxis(Gf,t)}translateZ(t){return this.translateOnAxis(Vf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ea.copy(t):Ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(eo,Ea,this.up):Oi.lookAt(Ea,eo,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Oi),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wf),sr.child=t,this.dispatchEvent(sr),sr.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iy),mu.child=t,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wf),sr.child=t,this.dispatchEvent(sr),sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,ey),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,ny,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new G(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},sy={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function gu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=yh(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=gu(o,r,t+1/3),this.g=gu(o,r,t),this.b=gu(o,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let n=np[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ve.workingToColorSpace(wn.copy(this),t),Math.round(de(wn.r*255,0,255))*65536+Math.round(de(wn.g*255,0,255))*256+Math.round(de(wn.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(wn.copy(this),e);let n=wn.r,s=wn.g,r=wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(wn.copy(this),e),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=en){ve.workingToColorSpace(wn.copy(this),t);let e=wn.r,n=wn.g,s=wn.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(Ta);let n=uo(es.h,Ta.h,e),s=uo(es.s,Ta.s,e),r=uo(es.l,Ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Xt;Xt.NAMES=np;var vo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},os=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new G,Bi=new G,yu=new G,ki=new G,rr=new G,or=new G,Xf=new G,xu=new G,_u=new G,vu=new G,bu=new Ie,Mu=new Ie,Su=new Ie,rs=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ai.subVectors(s,e),Bi.subVectors(n,e),yu.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Bi),c=ai.dot(yu),l=Bi.dot(Bi),u=Bi.dot(yu),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ki.x),c.addScaledVector(o,ki.y),c.addScaledVector(a,ki.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return bu.setScalar(0),Mu.setScalar(0),Su.setScalar(0),bu.fromBufferAttribute(t,e),Mu.fromBufferAttribute(t,n),Su.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bu,r.x),o.addScaledVector(Mu,r.y),o.addScaledVector(Su,r.z),o}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),Bi.subVectors(t,e),ai.cross(Bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ai.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;rr.subVectors(s,n),or.subVectors(r,n),xu.subVectors(t,n);let c=rr.dot(xu),l=or.dot(xu);if(c<=0&&l<=0)return e.copy(n);_u.subVectors(t,s);let u=rr.dot(_u),h=or.dot(_u);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(rr,o);vu.subVectors(t,r);let d=rr.dot(vu),g=or.dot(vu);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(or,a);let p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Xf.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Xf,a);let m=1/(p+y+f);return o=y*m,a=f*m,e.copy(n).addScaledVector(rr,o).addScaledVector(or,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},We=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),Ra.subVectors(this.max,no),ar.subVectors(t.a,no),cr.subVectors(t.b,no),lr.subVectors(t.c,no),ns.subVectors(cr,ar),is.subVectors(lr,cr),Rs.subVectors(ar,lr);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Rs.z,Rs.y,ns.z,0,-ns.x,is.z,0,-is.x,Rs.z,0,-Rs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Rs.y,Rs.x,0];return!wu(e,ar,cr,lr,Ra)||(e=[1,0,0,0,1,0,0,0,1],!wu(e,ar,cr,lr,Ra))?!1:(Ca.crossVectors(ns,is),e=[Ca.x,Ca.y,Ca.z],wu(e,ar,cr,lr,Ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zi=[new G,new G,new G,new G,new G,new G,new G,new G],ci=new G,Aa=new We,ar=new G,cr=new G,lr=new G,ns=new G,is=new G,Rs=new G,no=new G,Ra=new G,Ca=new G,Cs=new G;function wu(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cs.fromArray(i,r);let a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),c=t.dot(Cs),l=e.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var tn=new G,Ia=new Dt,ry=0,Ee=class extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ry++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ia.fromBufferAttribute(this,e),Ia.applyMatrix3(t),this.setXY(e,Ia.x,Ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var bo=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Mo=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},oy=new We,io=new G,Eu=new G,zn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):oy.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);let e=io.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(io,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(Eu)),this.expandByPoint(io.copy(t.center).sub(Eu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ay=0,Qn=new Me,Tu=new He,ur=new G,Wn=new We,so=new We,un=new G,he=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pg(t)?Mo:bo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return Tu.lookAt(t),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Wn.min,so.min),Wn.expandByPoint(un),un.addVectors(Wn.max,so.max),Wn.expandByPoint(un)):(Wn.expandByPoint(so.min),Wn.expandByPoint(so.max))}Wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)un.fromBufferAttribute(a,l),c&&(ur.fromBufferAttribute(t,l),un.add(ur)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ee(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new G,c[_]=new G;let l=new G,u=new G,h=new G,f=new Dt,d=new Dt,g=new Dt,y=new G,p=new G;function m(_,C,D){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,D),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,D),u.sub(l),h.sub(l),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[_].add(y),a[C].add(y),a[D].add(y),c[_].add(p),c[C].add(p),c[D].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,C=x.length;_<C;++_){let D=x[_],I=D.start,U=D.count;for(let k=I,O=I+U;k<O;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let M=new G,v=new G,b=new G,S=new G;function A(_){b.fromBufferAttribute(s,_),S.copy(b);let C=a[_];M.copy(C),M.sub(b.multiplyScalar(b.dot(C))).normalize(),v.crossVectors(S,C);let I=v.dot(c[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,C=x.length;_<C;++_){let D=x[_],I=D.start,U=D.count;for(let k=I,O=I+U;k<O;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,h=new G;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let m=0;m<u;m++)f[g++]=l[d++]}return new Ee(f,u,h)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},So=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},In=new G,ti=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){xo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Au=new G,cy=new G,ly=new pe,Xn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Au.subVectors(n,e).cross(cy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Au),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ly.getNormalMatrix(t),s=this.coplanarPoint(Au).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},uy=0,hi=class extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Ur,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=eh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Hi=new G,Ru=new G,Pa=new G,La=new G,Ds=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ru.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),La.copy(this.origin).sub(Ru);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Pa),a=La.dot(this.direction),c=-La.dot(Pa),l=La.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ru).addScaledVector(Pa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,y=e.y-o.y,p=e.z-o.z,m=n.x-o.x,x=n.y-o.y,M=n.z-o.z,v=Math.abs(c),b=Math.abs(l),S=Math.abs(u),A,_,C,D,I,U,k,O,Y,W,Z,ct;if(v>=b&&v>=S?(C=c,U=h,Y=g,ct=m,c>=0?(A=l,_=u,D=f,I=d,k=y,O=p,W=x,Z=M):(A=u,_=l,D=d,I=f,k=p,O=y,W=M,Z=x)):b>=S?(C=l,U=f,Y=y,ct=x,l>=0?(A=u,_=c,D=d,I=h,k=p,O=g,W=M,Z=m):(A=c,_=u,D=h,I=d,k=g,O=p,W=m,Z=M)):(C=u,U=d,Y=p,ct=M,u>=0?(A=c,_=l,D=h,I=f,k=g,O=y,W=m,Z=x):(A=l,_=c,D=f,I=h,k=y,O=g,W=x,Z=m)),C===0)return null;let nt=A/C,it=_/C,et=1/C,Pt=D-nt*U,Ct=I-it*U,Rt=k-nt*Y,Tt=O-it*Y,X=W-nt*ct,H=Z-it*ct,$=X*Tt-H*Rt,rt=Pt*H-Ct*X,mt=Rt*Ct-Tt*Pt;if(s){if($<0||rt<0||mt<0)return null}else if(($<0||rt<0||mt<0)&&($>0||rt>0||mt>0))return null;let pt=$+rt+mt;if(pt===0)return null;let bt=et*($*U+rt*Y+mt*ct);return(pt>0?bt<0:bt>0)?null:this.at(bt/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yf=new Me,Is=new Ds,Na=new zn,qf=new G,Da=new G,Ua=new G,Fa=new G,Cu=new G,Oa=new G,Zf=new G,Ba=new G,ce=class extends He{constructor(t=new he,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Cu.fromBufferAttribute(h,t),o?Oa.addScaledVector(Cu,u):Oa.addScaledVector(Cu.sub(e),u))}e.add(Oa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),Is.copy(t.ray).recast(t.near),!(Na.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Na,qf)===null||Is.origin.distanceToSquared(qf)>(t.far-t.near)**2))&&(Yf.copy(r).invert(),Is.copy(t.ray).applyMatrix4(Yf),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Is)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,b=M;v<b;v+=3){let S=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);s=ka(this,m,t,n,l,u,h,S,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let x=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);s=ka(this,o,t,n,l,u,h,x,M,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,b=M;v<b;v+=3){let S=v,A=v+1,_=v+2;s=ka(this,m,t,n,l,u,h,S,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let x=p,M=p+1,v=p+2;s=ka(this,o,t,n,l,u,h,x,M,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function hy(i,t,e,n,s,r,o,a){let c;if(t.side===Nn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===gs,a),c===null)return null;Ba.copy(a),Ba.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ba);return l<e.near||l>e.far?null:{distance:l,point:Ba.clone(),object:i}}function ka(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Da),i.getVertexPosition(c,Ua),i.getVertexPosition(l,Fa);let u=hy(i,t,e,n,Da,Ua,Fa,Zf);if(u){let h=new G;rs.getBarycoord(Zf,Da,Ua,Fa,h),s&&(u.uv=rs.getInterpolatedAttribute(s,a,c,l,h,new Dt)),r&&(u.uv1=rs.getInterpolatedAttribute(r,a,c,l,h,new Dt)),o&&(u.normal=rs.getInterpolatedAttribute(o,a,c,l,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new G,materialIndex:0};rs.getNormal(Da,Ua,Fa,f.normal),u.face=f,u.barycoord=h}return u}var wo=class extends Ln{constructor(t=null,e=1,n=1,s,r,o,a,c,l=hn,u=hn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hr=new Me,$f=new Me,za=[],jf=new We,fy=new Me,ro=new ce,oo=new zn,ei=class extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new We),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),jf.copy(t.boundingBox).applyMatrix4(hr),this.boundingBox.union(jf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),oo.copy(t.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),$f.multiplyMatrices(n,hr),ro.matrixWorld=$f,ro.raycast(t,za);for(let o=0,a=za.length;o<a;o++){let c=za[o];c.instanceId=r,c.object=this,e.push(c)}za.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wo(new Float32Array(s*this.count),s,this.count,Wc,ni));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ps=new zn,dy=new Dt(.5,.5),Ha=new G,Tr=class{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],x=r[12],M=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-o,d-u,m-g,b-x).normalize(),s[1].setComponents(l+o,d+u,m+g,b+x).normalize(),s[2].setComponents(l+a,d+h,m+y,b+M).normalize(),s[3].setComponents(l-a,d-h,m-y,b-M).normalize(),n)s[4].setComponents(c,f,p,v).normalize(),s[5].setComponents(l-c,d-f,m-p,b-v).normalize();else if(s[4].setComponents(l-c,d-f,m-p,b-v).normalize(),e===ui)s[5].setComponents(l+c,d+f,m+p,b+v).normalize();else if(e===_r)s[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);let e=dy.distanceTo(t.center);return Ps.radius=.7071067811865476+e,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ha.x=s.normal.x>0?t.max.x:t.min.x,Ha.y=s.normal.y>0?t.max.y:t.min.y,Ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},hc=new G,fc=new G,Jf=new Me,ao=new Ds,Ga=new zn,Iu=new G,Kf=new G,dc=class extends He{constructor(t=new he,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)hc.fromBufferAttribute(e,s-1),fc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=hc.distanceTo(fc);t.setAttribute("lineDistance",new Zt(n,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,t.ray.intersectsSphere(Ga)===!1)return;Jf.copy(s).invert(),ao.copy(t.ray).applyMatrix4(Jf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=l){let m=u.getX(y),x=u.getX(y+1),M=Va(this,t,ao,c,m,x,y);M&&e.push(M)}if(this.isLineLoop){let y=u.getX(g-1),p=u.getX(d),m=Va(this,t,ao,c,y,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=l){let m=Va(this,t,ao,c,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=Va(this,t,ao,c,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Va(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(hc.fromBufferAttribute(a,s),fc.fromBufferAttribute(a,r),e.distanceSqToSegment(hc,fc,Iu,Kf)>n)return;Iu.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Iu);if(!(l<t.near||l>t.far))return{distance:l,point:Kf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Qf=new G,td=new G,Eo=class extends dc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Qf.fromBufferAttribute(e,s),td.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qf.distanceTo(td);t.setAttribute("lineDistance",new Zt(n,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Us=class extends hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ed=new Me,Hu=new Ds,Wa=new zn,Xa=new G,Rr=class extends He{constructor(t=new he,e=new Us){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,t.ray.intersectsSphere(Wa)===!1)return;ed.copy(s).invert(),Hu.copy(t.ray).applyMatrix4(ed);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let p=l.getX(g);Xa.fromBufferAttribute(h,p),nd(Xa,p,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Xa.fromBufferAttribute(h,g),nd(Xa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nd(i,t,e,n,s,r,o){let a=Hu.distanceSqToPoint(i);if(a<e){let c=new G;Hu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var To=class extends Ln{constructor(t=[],e=ys,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cr=class extends Ln{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var as=class extends Ln{constructor(t,e,n=di,s,r,o,a=hn,c=hn,l,u=Si,h=1){if(u!==Si&&u!==_s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pc=class extends as{constructor(t,e=di,n=ys,s,r,o=hn,a=hn,c,l=Si){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ao=class extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Te=class i extends he{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function g(y,p,m,x,M,v,b,S,A,_,C){let D=v/A,I=b/_,U=v/2,k=b/2,O=S/2,Y=A+1,W=_+1,Z=0,ct=0,nt=new G;for(let it=0;it<W;it++){let et=it*I-k;for(let Pt=0;Pt<Y;Pt++){let Ct=Pt*D-U;nt[y]=Ct*x,nt[p]=et*M,nt[m]=O,l.push(nt.x,nt.y,nt.z),nt[y]=0,nt[p]=0,nt[m]=S>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Pt/A),h.push(1-it/_),Z+=1}}for(let it=0;it<_;it++)for(let et=0;et<A;et++){let Pt=f+et+Y*it,Ct=f+et+Y*(it+1),Rt=f+(et+1)+Y*(it+1),Tt=f+(et+1)+Y*it;c.push(Pt,Ct,Tt),c.push(Ct,Rt,Tt),ct+=6}a.addGroup(d,ct,C),d+=ct,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var En=class i extends he{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new G,u=new Dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$e=class i extends he{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,y=[],p=n/2,m=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function x(){let v=new G,b=new G,S=0,A=(e-t)/n;for(let _=0;_<=r;_++){let C=[],D=_/r,I=D*(e-t)+t;for(let U=0;U<=s;U++){let k=U/s,O=k*c+a,Y=Math.sin(O),W=Math.cos(O);b.x=I*Y,b.y=-D*n+p,b.z=I*W,h.push(b.x,b.y,b.z),v.set(Y,A,W).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-D),C.push(g++)}y.push(C)}for(let _=0;_<s;_++)for(let C=0;C<r;C++){let D=y[C][_],I=y[C+1][_],U=y[C+1][_+1],k=y[C][_+1];(t>0||C!==0)&&(u.push(D,I,k),S+=3),(e>0||C!==r-1)&&(u.push(I,U,k),S+=3)}l.addGroup(m,S,0),m+=S}function M(v){let b=g,S=new Dt,A=new G,_=0,C=v===!0?t:e,D=v===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,p*D,0),f.push(0,D,0),d.push(.5,.5),g++;let I=g;for(let U=0;U<=s;U++){let O=U/s*c+a,Y=Math.cos(O),W=Math.sin(O);A.x=C*W,A.y=p*D,A.z=C*Y,h.push(A.x,A.y,A.z),f.push(0,D,0),S.x=Y*.5+.5,S.y=W*.5*D+.5,d.push(S.x,S.y),g++}for(let U=0;U<s;U++){let k=b+U,O=I+U;v===!0?u.push(O,O+1,k):u.push(O+1,O,k),_+=3}l.addGroup(m,_,v===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ro=class i extends $e{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mc=class i extends he{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let M=new G,v=new G,b=new G;for(let S=0;S<e.length;S+=3)d(e[S+0],M),d(e[S+1],v),d(e[S+2],b),c(M,v,b,x)}function c(x,M,v,b){let S=b+1,A=[];for(let _=0;_<=S;_++){A[_]=[];let C=x.clone().lerp(v,_/S),D=M.clone().lerp(v,_/S),I=S-_;for(let U=0;U<=I;U++)U===0&&_===S?A[_][U]=C:A[_][U]=C.clone().lerp(D,U/I)}for(let _=0;_<S;_++)for(let C=0;C<2*(S-_)-1;C++){let D=Math.floor(C/2);C%2===0?(f(A[_][D+1]),f(A[_+1][D]),f(A[_][D])):(f(A[_][D+1]),f(A[_+1][D+1]),f(A[_+1][D]))}}function l(x){let M=new G;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){let x=new G;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let v=p(x)/2/Math.PI+.5,b=m(x)/Math.PI+.5;o.push(v,1-b)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){let M=o[x+0],v=o[x+2],b=o[x+4],S=Math.max(M,v,b),A=Math.min(M,v,b);S>.9&&A<.1&&(M<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,M){let v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){let x=new G,M=new G,v=new G,b=new G,S=new Dt,A=new Dt,_=new Dt;for(let C=0,D=0;C<r.length;C+=9,D+=6){x.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),S.set(o[D+0],o[D+1]),A.set(o[D+2],o[D+3]),_.set(o[D+4],o[D+5]),b.copy(x).add(M).add(v).divideScalar(3);let I=p(b);y(S,D+0,x,I),y(A,D+2,M,I),y(_,D+4,v,I)}}function y(x,M,v,b){b<0&&x.x===1&&(o[M]=x.x-1),v.x===0&&v.z===0&&(o[M]=b/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Co=class i extends mc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Dt:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,c=new Me;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(de(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(de(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ir=class extends Yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gc=class extends Ir{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var id=new G,sd=new G,Pu=new xh,Lu=new xh,Nu=new xh,yc=class extends Yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(sd.subVectors(s[0],s[1]).add(s[0]),l=sd);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(id.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=id),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Pu.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,y,p),Lu.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,y,p),Nu.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&(Pu.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Lu.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Nu.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Pu.calc(c),Lu.calc(c),Nu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function rd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function py(i,t){let e=1-i;return e*e*t}function my(i,t){return 2*(1-i)*i*t}function gy(i,t){return i*i*t}function ho(i,t,e,n){return py(i,t)+my(i,e)+gy(i,n)}function yy(i,t){let e=1-i;return e*e*e*t}function xy(i,t){let e=1-i;return 3*e*e*i*t}function _y(i,t){return 3*(1-i)*i*i*t}function vy(i,t){return i*i*i*t}function fo(i,t,e,n,s){return yy(i,t)+xy(i,e)+_y(i,n)+vy(i,s)}var Io=class extends Yn{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xc=class extends Yn{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y),fo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends Yn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_c=class extends Yn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Yn{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vc=class extends Yn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y),ho(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(rd(a,c.x,l.x,u.x,h.x),rd(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},Gu=Object.freeze({__proto__:null,ArcCurve:gc,CatmullRomCurve3:yc,CubicBezierCurve:Io,CubicBezierCurve3:xc,EllipseCurve:Ir,LineCurve:Po,LineCurve3:_c,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:vc,SplineCurve:No}),bc=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Gu[s.type]().fromJSON(s))}return this}},Fs=class extends bc{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Po(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Lo(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Io(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s),new Dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new No(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ir(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},qn=class extends Fs{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Fs().fromJSON(s))}return this}};function by(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ip(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Ty(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,h=c;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Do(r,o,e,a,c,l,0),o}function ip(i,t,e,n,s){let r;if(s===Oy(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=od(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=od(o/n|0,i[o],i[o+1],r);return r&&Pr(r,r.next)&&(Fo(r),r=r.next),r}function Os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pr(e,e.next)||Ye(e.prev,e,e.next)===0)){if(Fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Do(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Py(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Sy(i,n,s,r):My(i)){t.push(c.i,i.i,l.i),Fo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=wy(Os(i),t),Do(i,t,e,n,s,r,2)):o===2&&Ey(i,t,e,n,s,r):Do(Os(i),t,e,n,s,r,1);break}}}function My(i){let t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&co(s,a,r,c,o,l,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ye(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(u,h,f),y=Math.max(a,c,l),p=Math.max(u,h,f),m=Vu(d,g,t,e,n),x=Vu(y,p,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=x;){if(M.x>=d&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&co(a,u,c,h,l,f,M.x,M.y)&&Ye(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&co(a,u,c,h,l,f,v.x,v.y)&&Ye(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&co(a,u,c,h,l,f,M.x,M.y)&&Ye(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&co(a,u,c,h,l,f,v.x,v.y)&&Ye(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wy(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Pr(n,s)&&rp(n,e,e.next,s)&&Uo(n,s)&&Uo(s,n)&&(t.push(n.i,e.i,s.i),Fo(e),Fo(e.next),e=i=s),e=e.next}while(e!==i);return Os(e)}function Ey(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dy(o,a)){let c=op(o,a);o=Os(o,o.next),c=Os(c,c.next),Do(o,t,e,n,s,r,0),Do(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ty(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=ip(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ny(l))}s.sort(Ay);for(let r=0;r<s.length;r++)e=Ry(s[r],e);return e}function Ay(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ry(i,t){let e=Cy(i,t);if(!e)return t;let n=op(e,i);return Os(n,n.next),Os(e,e.next)}function Cy(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Pr(i,e))return e;do{if(Pr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&sp(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);Uo(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Iy(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Iy(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function Py(i,t,e,n){let s=i;do s.z===0&&(s.z=Vu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ly(s)}function Ly(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Vu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ny(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function sp(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function co(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&sp(i,t,e,n,s,r,o,a)}function Dy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Uy(i,t)&&(Uo(i,t)&&Uo(t,i)&&Fy(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||Pr(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pr(i,t){return i.x===t.x&&i.y===t.y}function rp(i,t,e,n){let s=qa(Ye(i,t,e)),r=qa(Ye(i,t,n)),o=qa(Ye(e,n,i)),a=qa(Ye(e,n,t));return!!(s!==r&&o!==a||s===0&&Ya(i,e,t)||r===0&&Ya(i,n,t)||o===0&&Ya(e,i,n)||a===0&&Ya(e,t,n))}function Ya(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qa(i){return i>0?1:i<0?-1:0}function Uy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Uo(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function Fy(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function op(i,t){let e=Wu(i.i,i.x,i.y),n=Wu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function od(i,t,e,n){let s=Wu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Oy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Xu=class{static triangulate(t,e,n=2){return by(t,e,n)}},Bn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ad(t),cd(n,t);let o=t.length;e.forEach(ad);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,cd(n,e[c]);let a=Xu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ad(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function cd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vi=class i extends he{constructor(t=new qn([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:By,M,v=!1,b,S,A,_;if(m){M=m.getSpacedPoints(u),v=!0,f=!1;let lt=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(u,lt),S=new G,A=new G,_=new G}f||(p=0,d=0,g=0,y=0);let C=a.extractPoints(l),D=C.shape,I=C.holes;if(!Bn.isClockWise(D)){D=D.reverse();for(let lt=0,_t=I.length;lt<_t;lt++){let vt=I[lt];Bn.isClockWise(vt)&&(I[lt]=vt.reverse())}}function k(lt){let vt=10000000000000001e-36,St=lt[0];for(let Nt=1;Nt<=lt.length;Nt++){let Ot=Nt%lt.length,Bt=lt[Ot],$t=Bt.x-St.x,Gt=Bt.y-St.y,j=$t*$t+Gt*Gt,oe=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(St.x),Math.abs(St.y)),Vt=vt*oe*oe;if(j<=Vt){lt.splice(Ot,1),Nt--;continue}St=Bt}}k(D),I.forEach(k);let O=I.length,Y=D;for(let lt=0;lt<O;lt++){let _t=I[lt];D=D.concat(_t)}function W(lt,_t,vt){return _t||ae("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(_t,vt)}let Z=D.length;function ct(lt,_t,vt){let St,Nt,Ot,Bt=lt.x-_t.x,$t=lt.y-_t.y,Gt=vt.x-lt.x,j=vt.y-lt.y,oe=Bt*Bt+$t*$t,Vt=Bt*j-$t*Gt;if(Math.abs(Vt)>Number.EPSILON){let B=Math.sqrt(oe),T=Math.sqrt(Gt*Gt+j*j),tt=_t.x-$t/B,ut=_t.y+Bt/B,gt=vt.x-j/T,z=vt.y+Gt/T,w=((gt-tt)*j-(z-ut)*Gt)/(Bt*j-$t*Gt);St=tt+Bt*w-lt.x,Nt=ut+$t*w-lt.y;let E=St*St+Nt*Nt;if(E<=2)return new Dt(St,Nt);Ot=Math.sqrt(E/2)}else{let B=!1;Bt>Number.EPSILON?Gt>Number.EPSILON&&(B=!0):Bt<-Number.EPSILON?Gt<-Number.EPSILON&&(B=!0):Math.sign($t)===Math.sign(j)&&(B=!0),B?(St=-$t,Nt=Bt,Ot=Math.sqrt(oe)):(St=Bt,Nt=$t,Ot=Math.sqrt(oe/2))}return new Dt(St/Ot,Nt/Ot)}let nt=[];for(let lt=0,_t=Y.length,vt=_t-1,St=lt+1;lt<_t;lt++,vt++,St++)vt===_t&&(vt=0),St===_t&&(St=0),nt[lt]=ct(Y[lt],Y[vt],Y[St]);let it=[],et,Pt=nt.concat();for(let lt=0,_t=O;lt<_t;lt++){let vt=I[lt];et=[];for(let St=0,Nt=vt.length,Ot=Nt-1,Bt=St+1;St<Nt;St++,Ot++,Bt++)Ot===Nt&&(Ot=0),Bt===Nt&&(Bt=0),et[St]=ct(vt[St],vt[Ot],vt[Bt]);it.push(et),Pt=Pt.concat(et)}let Ct;if(p===0)Ct=Bn.triangulateShape(Y,I);else{let lt=[],_t=[];for(let vt=0;vt<p;vt++){let St=vt/p,Nt=d*Math.cos(St*Math.PI/2),Ot=g*Math.sin(St*Math.PI/2)+y;for(let Bt=0,$t=Y.length;Bt<$t;Bt++){let Gt=W(Y[Bt],nt[Bt],Ot);rt(Gt.x,Gt.y,-Nt),St===0&&lt.push(Gt)}for(let Bt=0,$t=O;Bt<$t;Bt++){let Gt=I[Bt];et=it[Bt];let j=[];for(let oe=0,Vt=Gt.length;oe<Vt;oe++){let B=W(Gt[oe],et[oe],Ot);rt(B.x,B.y,-Nt),St===0&&j.push(B)}St===0&&_t.push(j)}}Ct=Bn.triangulateShape(lt,_t)}let Rt=Ct.length,Tt=g+y;for(let lt=0;lt<Z;lt++){let _t=f?W(D[lt],Pt[lt],Tt):D[lt];v?(A.copy(b.normals[0]).multiplyScalar(_t.x),S.copy(b.binormals[0]).multiplyScalar(_t.y),_.copy(M[0]).add(A).add(S),rt(_.x,_.y,_.z)):rt(_t.x,_t.y,0)}for(let lt=1;lt<=u;lt++)for(let _t=0;_t<Z;_t++){let vt=f?W(D[_t],Pt[_t],Tt):D[_t];v?(A.copy(b.normals[lt]).multiplyScalar(vt.x),S.copy(b.binormals[lt]).multiplyScalar(vt.y),_.copy(M[lt]).add(A).add(S),rt(_.x,_.y,_.z)):rt(vt.x,vt.y,h/u*lt)}for(let lt=p-1;lt>=0;lt--){let _t=lt/p,vt=d*Math.cos(_t*Math.PI/2),St=g*Math.sin(_t*Math.PI/2)+y;for(let Nt=0,Ot=Y.length;Nt<Ot;Nt++){let Bt=W(Y[Nt],nt[Nt],St);rt(Bt.x,Bt.y,h+vt)}for(let Nt=0,Ot=I.length;Nt<Ot;Nt++){let Bt=I[Nt];et=it[Nt];for(let $t=0,Gt=Bt.length;$t<Gt;$t++){let j=W(Bt[$t],et[$t],St);v?rt(j.x,j.y+M[u-1].y,M[u-1].x+vt):rt(j.x,j.y,h+vt)}}}X(),H();function X(){let lt=s.length/3;if(f){let _t=0,vt=Z*_t;for(let St=0;St<Rt;St++){let Nt=Ct[St];mt(Nt[2]+vt,Nt[1]+vt,Nt[0]+vt)}_t=u+p*2,vt=Z*_t;for(let St=0;St<Rt;St++){let Nt=Ct[St];mt(Nt[0]+vt,Nt[1]+vt,Nt[2]+vt)}}else{for(let _t=0;_t<Rt;_t++){let vt=Ct[_t];mt(vt[2],vt[1],vt[0])}for(let _t=0;_t<Rt;_t++){let vt=Ct[_t];mt(vt[0]+Z*u,vt[1]+Z*u,vt[2]+Z*u)}}n.addGroup(lt,s.length/3-lt,0)}function H(){let lt=s.length/3,_t=0;$(Y,_t),_t+=Y.length;for(let vt=0,St=I.length;vt<St;vt++){let Nt=I[vt];$(Nt,_t),_t+=Nt.length}n.addGroup(lt,s.length/3-lt,1)}function $(lt,_t){let vt=lt.length;for(;--vt>=0;){let St=vt,Nt=vt-1;Nt<0&&(Nt=lt.length-1);for(let Ot=0,Bt=u+p*2;Ot<Bt;Ot++){let $t=Z*Ot,Gt=Z*(Ot+1),j=_t+St+$t,oe=_t+Nt+$t,Vt=_t+Nt+Gt,B=_t+St+Gt;pt(j,oe,Vt,B)}}}function rt(lt,_t,vt){c.push(lt),c.push(_t),c.push(vt)}function mt(lt,_t,vt){bt(lt),bt(_t),bt(vt);let St=s.length/3,Nt=x.generateTopUV(n,s,St-3,St-2,St-1);Mt(Nt[0]),Mt(Nt[1]),Mt(Nt[2])}function pt(lt,_t,vt,St){bt(lt),bt(_t),bt(St),bt(_t),bt(vt),bt(St);let Nt=s.length/3,Ot=x.generateSideWallUV(n,s,Nt-6,Nt-3,Nt-2,Nt-1);Mt(Ot[0]),Mt(Ot[1]),Mt(Ot[3]),Mt(Ot[1]),Mt(Ot[2]),Mt(Ot[3])}function bt(lt){s.push(c[lt*3+0]),s.push(c[lt*3+1]),s.push(c[lt*3+2])}function Mt(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ky(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gu[s.type]().fromJSON(s)),new i(n,t.options)}},By={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Dt(r,o),new Dt(a,c),new Dt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Dt(o,1-c),new Dt(l,1-h),new Dt(f,1-g),new Dt(y,1-m)]:[new Dt(a,1-c),new Dt(u,1-h),new Dt(d,1-g),new Dt(p,1-m)]}};function ky(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Oo=class i extends he{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=de(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new G,f=new Dt,d=new G,g=new G,y=new G,p=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let x=0;x<=e;x++){let M=n+x*u*s,v=Math.sin(M),b=Math.cos(M);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*v,h.y=t[S].y,h.z=t[S].x*b,o.push(h.x,h.y,h.z),f.x=x/e,f.y=S/(t.length-1),a.push(f.x,f.y);let A=c[3*S+0]*v,_=c[3*S+1],C=c[3*S+0]*b;l.push(A,_,C)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){let v=M+x*t.length,b=v,S=v+t.length,A=v+t.length+1,_=v+1;r.push(b,S,_),r.push(A,_,S)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Zn=class i extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],y=[],p=[];for(let m=0;m<u;m++){let x=m*f-o;for(let M=0;M<l;M++){let v=M*h-r;g.push(v,-x,0),y.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){let M=x+l*m,v=x+l*(m+1),b=x+1+l*(m+1),S=x+1+l*m;d.push(M,v,S),d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Bo=class i extends he{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=t,f=(e-t)/s,d=new G,g=new Dt;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let m=r+p/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let y=0;y<s;y++){let p=y*(n+1);for(let m=0;m<n;m++){let x=m+p,M=x,v=x+n+1,b=x+n+2,S=x+1;a.push(M,v,S),a.push(v,b,S)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},cs=class i extends he{constructor(t=new qn([new Dt(0,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function l(u){let h=s.length/3,f=u.extractPoints(e),d=f.shape,g=f.holes;Bn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let x=g[p];Bn.isClockWise(x)===!0&&(g[p]=x.reverse())}let y=Bn.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let x=g[p];d=d.concat(x)}for(let p=0,m=d.length;p<m;p++){let x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=y.length;p<m;p++){let x=y[p],M=x[0]+h,v=x[1]+h,b=x[2]+h;n.push(M,v,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return zy(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function zy(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ae=class i extends he{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new G,f=new G,d=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let x=[],M=m/n,v=o+M*a,b=t*Math.cos(v),S=Math.sqrt(t*t-b*b),A=0;m===0&&o===0?A=.5/e:m===n&&c===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let C=_/e,D=s+C*r;h.x=-S*Math.cos(D),h.y=b,h.z=S*Math.sin(D),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(C+A,1-M),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let M=u[m][x+1],v=u[m][x],b=u[m+1][x],S=u[m+1][x+1];(m!==0||o>0)&&d.push(M,v,S),(m!==n-1||c<Math.PI)&&d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tn=class i extends he{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],h=[],f=new G,d=new G,g=new G;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let m=0;m<=s;m++){let x=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),g.subVectors(d,f).normalize(),u.push(g.x,g.y,g.z),h.push(m/s),h.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,x=(s+1)*(y-1)+p-1,M=(s+1)*(y-1)+p,v=(s+1)*y+p;c.push(m,x,v),c.push(x,M,v)}this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ko=class extends he{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new G,r=new G;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],f=h.start,d=h.count;for(let g=f,y=f+d;g<y;g+=3)for(let p=0;p<3;p++){let m=a.getX(g+p),x=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,x),ld(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,h=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),ld(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Zt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function ld(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ud(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ud(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function An(i){let t={};for(let e=0;e<i.length;e++){let n=Vs(i[e]);for(let s in n)t[s]=n[s]}return t}function ud(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hy(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _h(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var Ws={clone:Vs,merge:An},Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Hy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Mc=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ge=class extends hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Lr=class extends hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Oc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Sc=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wc=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Du(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ec=class extends ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ku:r=t,a=2*e-n;break;case zu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ku:o=t,c=2*n-e;break;case zu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,x=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,M=(-1-d)*p+(1.5+d)*y+.5*g,v=d*p-d*y;for(let b=0;b!==a;++b)r[b]=m*o[u+b]+x*o[l+b]+M*o[c+b]+v*o[h+b];return r}},Tc=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Ac=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rc=class extends ls{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-e)/(s-e),y=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*y+o[c+p]*g;return r}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let y=o[l+g],p=o[c+g],m=d*f+g*2,x=h[m],M=h[m+1],v=t*f+g*2,b=u[v],S=u[v+1],A=Xy(n,e,x,b,s);r[g]=ap(A,y,M,S,p)}return r}};function ap(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Wy(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Xy(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=ap(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Wy(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var $n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fr(e,this.TimeBufferType),this.values=fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fr(t.times,Array),values:fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Du(t.settings)&&(n.settings={inTangents:fr(t.settings.inTangents,Array),outTangents:fr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Rc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case po:e=this.InterpolantFactoryMethodDiscrete;break;case ac:e=this.InterpolantFactoryMethodLinear;break;case Ja:e=this.InterpolantFactoryMethodSmooth;break;case Ou:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return ac;case this.InterpolantFactoryMethodSmooth:return Ja;case this.InterpolantFactoryMethodBezier:return Ou}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Du(this.settings)&&(hd(this.settings.inTangents,t),hd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ae("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ae("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Lg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ae("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ja,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let y=e[h+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Du(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=ac;var us=class extends $n{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=po;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Cc.prototype.ValueTypeName="color";var Ic=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Ic.prototype.ValueTypeName="number";var Pc=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)fn.slerpFlat(r,0,o,l-a,o,l,c);return r}},zo=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Pc(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends $n{constructor(t,e,n){super(t,e,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=po;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends $n{constructor(t,e,n,s){super(t,e,n,s)}};Lc.prototype.ValueTypeName="vector";var Nc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cp=new Nc,Dc=class{constructor(t){this.manager=t!==void 0?t:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Bs=class extends Nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Uu=new Me,fd=new G,dd=new G,Ho=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;fd.setFromMatrixPosition(t.matrixWorld),e.position.copy(fd),dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Uu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===_r||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Uu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Za=new G,$a=new fn,vi=new G,Go=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Za,$a,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,$a,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Za,$a,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,$a,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new G,pd=new Dt,md=new Dt,Pn=class extends Go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,pd,md),e.subVectors(md,pd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Yu=class extends Ho{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}},Vo=class extends Nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},fs=class extends Go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qu=class extends Ho{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends Nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new qu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Wo=class extends he{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var dr=-90,pr=1,Uc=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(dr,pr,t,e);s.layers=this.layers,this.add(s);let r=new Pn(dr,pr,t,e);r.layers=this.layers,this.add(r);let o=new Pn(dr,pr,t,e);o.layers=this.layers,this.add(o);let a=new Pn(dr,pr,t,e);a.layers=this.layers,this.add(a);let c=new Pn(dr,pr,t,e);c.layers=this.layers,this.add(c);let l=new Pn(dr,pr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fc=class extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var vh="\\[\\]\\.:\\/",Yy=new RegExp("["+vh+"]","g"),bh="[^"+vh+"]",qy="[^"+vh.replace("\\.","")+"]",Zy=/((?:WC+[\/:])*)/.source.replace("WC",bh),$y=/(WCOD+)?/.source.replace("WCOD",qy),jy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),Jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Ky=new RegExp("^"+Zy+$y+jy+Jy+"$"),Qy=["material","materials","bones","map"],Zu=class{constructor(t,e,n){let s=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yy,"")}static parseTrackName(t){let e=Ky.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Zu;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t2=new Float32Array(1);var ps=class extends So{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var gd=new Me,ms=class{constructor(t,e,n=0,s=1/0){this.ray=new Ds(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gd),this}intersectObject(t,e=!0,n=[]){return $u(t,this,n,e),n.sort(yd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$u(t[s],this,n,e);return n.sort(yd),n}};function yd(i,t){return i.distance-t.distance}function $u(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$u(r[o],t,e,!0)}}var ju=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var xd=new G,ja=new G,mr=new G,gr=new G,Fu=new G,tx=new G,ex=new G,Xo=class{constructor(t=new G,e=new G){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){xd.subVectors(t,this.start),ja.subVectors(this.end,this.start);let n=ja.dot(ja);if(n===0)return 0;let r=ja.dot(xd)/n;return e&&(r=de(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=tx,n=ex){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;mr.subVectors(l,a),gr.subVectors(u,c),Fu.subVectors(a,c);let h=mr.dot(mr),f=gr.dot(gr),d=gr.dot(Fu);if(h<=s&&f<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(h<=s)r=0,o=d/f,o=de(o,0,1);else{let g=mr.dot(Fu);if(f<=s)o=0,r=de(-g/h,0,1);else{let y=mr.dot(gr),p=h*f-y*y;p!==0?r=de((y*d-g*f)/p,0,1):r=0,o=(y*r+d)/f,o<0?(o=0,r=de(-g/h,0,1)):o>1&&(o=1,r=de((y-g)/h,0,1))}}return e.copy(a).addScaledVector(mr,r),n.copy(c).addScaledVector(gr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Mh(i,t,e,n){let s=nx(n);switch(e){case dh:return i*t;case Wc:return i*t/s.components*s.byteLength;case Xc:return i*t/s.components*s.byteLength;case vs:return i*t*2/s.components*s.byteLength;case Yc:return i*t*2/s.components*s.byteLength;case ph:return i*t*3/s.components*s.byteLength;case ii:return i*t*4/s.components*s.byteLength;case qc:return i*t*4/s.components*s.byteLength;case $o:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $c:case Jc:return Math.max(i,16)*Math.max(t,8)/4;case Zc:case jc:return Math.max(i,8)*Math.max(t,8)/2;case Kc:case Qc:case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:case Qo:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xl:case _l:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case bl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ta:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nx(i){switch(i){case Hn:case lh:return{byteLength:1,components:1};case Fr:case uh:case pi:return{byteLength:2,components:1};case Gc:case Vc:return{byteLength:2,components:4};case di:case Hc:case ni:return{byteLength:4,components:1};case hh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ip(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ax(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],y=h[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let y=h[d];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
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
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
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
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nx=`vec3 transformedNormal = objectNormal;
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
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",kx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
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
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,t_=`#ifdef USE_ENVMAP
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
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,o_=`uniform sampler2D dfgLUT;
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
}`,a_=`
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x_=`#if defined( USE_POINTS_UV )
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
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q_=`float getShadowMask() {
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
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,j_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#ifdef USE_TRANSMISSION
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
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
}`,mv=`#if DEPTH_PACKING == 3200
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
}`,gv=`#define DISTANCE
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
}`,yv=`#define DISTANCE
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 diffuse;
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
}`,wv=`#define LAMBERT
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
}`,Ev=`#define LAMBERT
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
}`,Tv=`#define MATCAP
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
}`,Av=`#define MATCAP
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
}`,Rv=`#define NORMAL
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
}`,Cv=`#define NORMAL
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
}`,Iv=`#define PHONG
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
}`,Pv=`#define PHONG
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
}`,Lv=`#define STANDARD
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
}`,Nv=`#define STANDARD
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
}`,Dv=`#define TOON
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
}`,Uv=`#define TOON
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
}`,Fv=`uniform float size;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Bv=`#include <common>
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
}`,kv=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:cx,alphahash_pars_fragment:lx,alphamap_fragment:ux,alphamap_pars_fragment:hx,alphatest_fragment:fx,alphatest_pars_fragment:dx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:yx,begin_vertex:xx,beginnormal_vertex:_x,bsdfs:vx,iridescence_fragment:bx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:wx,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:Tx,color_fragment:Ax,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:Ix,common:Px,cube_uv_reflection_fragment:Lx,defaultnormal_vertex:Nx,displacementmap_pars_vertex:Dx,displacementmap_vertex:Ux,emissivemap_fragment:Fx,emissivemap_pars_fragment:Ox,colorspace_fragment:Bx,colorspace_pars_fragment:kx,envmap_fragment:zx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Gx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:t_,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:Yx,fog_fragment:qx,fog_pars_fragment:Zx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:jx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:Kx,lights_pars_begin:Qx,lights_toon_fragment:e_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:s_,lights_physical_fragment:r_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:c_,lights_fragment_end:l_,lightprobes_pars_fragment:u_,logdepthbuf_fragment:h_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:p_,map_fragment:m_,map_pars_fragment:g_,map_particle_fragment:y_,map_particle_pars_fragment:x_,metalnessmap_fragment:__,metalnessmap_pars_fragment:v_,morphinstance_vertex:b_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:w_,morphtarget_vertex:E_,normal_fragment_begin:T_,normal_fragment_maps:A_,normal_pars_fragment:R_,normal_pars_vertex:C_,normal_vertex:I_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:N_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:U_,opaque_fragment:F_,packing:O_,premultiplied_alpha_fragment:B_,project_vertex:k_,dithering_fragment:z_,dithering_pars_fragment:H_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:W_,shadowmap_pars_vertex:X_,shadowmap_vertex:Y_,shadowmask_pars_fragment:q_,skinbase_vertex:Z_,skinning_pars_vertex:$_,skinning_vertex:j_,skinnormal_vertex:J_,specularmap_fragment:K_,specularmap_pars_fragment:Q_,tonemapping_fragment:tv,tonemapping_pars_fragment:ev,transmission_fragment:nv,transmission_pars_fragment:iv,uv_pars_fragment:sv,uv_pars_vertex:rv,uv_vertex:ov,worldpos_vertex:av,background_vert:cv,background_frag:lv,backgroundCube_vert:uv,backgroundCube_frag:hv,cube_vert:fv,cube_frag:dv,depth_vert:pv,depth_frag:mv,distance_vert:gv,distance_frag:yv,equirect_vert:xv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:bv,meshbasic_vert:Mv,meshbasic_frag:Sv,meshlambert_vert:wv,meshlambert_frag:Ev,meshmatcap_vert:Tv,meshmatcap_frag:Av,meshnormal_vert:Rv,meshnormal_frag:Cv,meshphong_vert:Iv,meshphong_frag:Pv,meshphysical_vert:Lv,meshphysical_frag:Nv,meshtoon_vert:Dv,meshtoon_frag:Uv,points_vert:Fv,points_frag:Ov,shadow_vert:Bv,shadow_frag:kv,sprite_vert:zv,sprite_frag:Hv},kt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Un={basic:{uniforms:An([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:An([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:An([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:An([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:An([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:An([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:An([kt.points,kt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:An([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:An([kt.common,kt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:An([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:An([kt.sprite,kt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:An([kt.common,kt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:An([kt.lights,kt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Un.physical={uniforms:An([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Tl={r:0,b:0,g:0},Gv=new Me,Pp=new pe;Pp.set(-1,0,0,0,1,0,0,0,1);function Vv(i,t,e,n,s,r){let o=new Xt(0),a=s===!0?0:1,c,l,u=null,h=0,f=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let v=x.backgroundBlurriness>0;M=t.get(M,v)}return M}function g(x){let M=!1,v=d(x);v===null?p(o,a):v&&v.isColor&&(p(v,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,M){let v=d(M);v&&(v.isCubeTexture||v.mapping===qo)?(l===void 0&&(l=new ce(new Te(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Vs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Pp),l.material.toneMapped=ve.getTransfer(v.colorSpace)!==Ce,(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ce(new Zn(2,2),new Xe({name:"BackgroundMaterial",uniforms:Vs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ve.getTransfer(v.colorSpace)!==Ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Tl,_h(i)),e.buffers.color.setClear(Tl.r,Tl.g,Tl.b,M,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:y,dispose:m}}function Wv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(I,U,k,O,Y){let W=!1,Z=h(I,O,k,U);r!==Z&&(r=Z,l(r.object)),W=d(I,O,k,Y),W&&g(I,O,k,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(I,U,k,O),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,U,k,O){let Y=O.wireframe===!0,W=n[U.id];W===void 0&&(W={},n[U.id]=W);let Z=I.isInstancedMesh===!0?I.id:0,ct=W[Z];ct===void 0&&(ct={},W[Z]=ct);let nt=ct[k.id];nt===void 0&&(nt={},ct[k.id]=nt);let it=nt[Y];return it===void 0&&(it=f(c()),nt[Y]=it),it}function f(I){let U=[],k=[],O=[];for(let Y=0;Y<e;Y++)U[Y]=0,k[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:O,object:I,attributes:{},index:null}}function d(I,U,k,O){let Y=r.attributes,W=U.attributes,Z=0,ct=k.getAttributes();for(let nt in ct)if(ct[nt].location>=0){let et=Y[nt],Pt=W[nt];if(Pt===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(Pt=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(Pt=I.instanceColor)),et===void 0||et.attribute!==Pt||Pt&&et.data!==Pt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==O}function g(I,U,k,O){let Y={},W=U.attributes,Z=0,ct=k.getAttributes();for(let nt in ct)if(ct[nt].location>=0){let et=W[nt];et===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let Pt={};Pt.attribute=et,et&&et.data&&(Pt.data=et.data),Y[nt]=Pt,Z++}r.attributes=Y,r.attributesNum=Z,r.index=O}function y(){let I=r.newAttributes;for(let U=0,k=I.length;U<k;U++)I[U]=0}function p(I){m(I,0)}function m(I,U){let k=r.newAttributes,O=r.enabledAttributes,Y=r.attributeDivisors;k[I]=1,O[I]===0&&(i.enableVertexAttribArray(I),O[I]=1),Y[I]!==U&&(i.vertexAttribDivisor(I,U),Y[I]=U)}function x(){let I=r.newAttributes,U=r.enabledAttributes;for(let k=0,O=U.length;k<O;k++)U[k]!==I[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function M(I,U,k,O,Y,W,Z){Z===!0?i.vertexAttribIPointer(I,U,k,Y,W):i.vertexAttribPointer(I,U,k,O,Y,W)}function v(I,U,k,O){y();let Y=O.attributes,W=k.getAttributes(),Z=U.defaultAttributeValues;for(let ct in W){let nt=W[ct];if(nt.location>=0){let it=Y[ct];if(it===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),it!==void 0){let et=it.normalized,Pt=it.itemSize,Ct=t.get(it);if(Ct===void 0)continue;let Rt=Ct.buffer,Tt=Ct.type,X=Ct.bytesPerElement,H=Tt===i.INT||Tt===i.UNSIGNED_INT||it.gpuType===Hc;if(it.isInterleavedBufferAttribute){let $=it.data,rt=$.stride,mt=it.offset;if($.isInstancedInterleavedBuffer){for(let pt=0;pt<nt.locationSize;pt++)m(nt.location+pt,$.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pt=0;pt<nt.locationSize;pt++)p(nt.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let pt=0;pt<nt.locationSize;pt++)M(nt.location+pt,Pt/nt.locationSize,Tt,et,rt*X,(mt+Pt/nt.locationSize*pt)*X,H)}else{if(it.isInstancedBufferAttribute){for(let $=0;$<nt.locationSize;$++)m(nt.location+$,it.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let $=0;$<nt.locationSize;$++)p(nt.location+$);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let $=0;$<nt.locationSize;$++)M(nt.location+$,Pt/nt.locationSize,Tt,et,Pt*X,Pt/nt.locationSize*$*X,H)}}else if(Z!==void 0){let et=Z[ct];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(nt.location,et);break;case 3:i.vertexAttrib3fv(nt.location,et);break;case 4:i.vertexAttrib4fv(nt.location,et);break;default:i.vertexAttrib1fv(nt.location,et)}}}}x()}function b(){C();for(let I in n){let U=n[I];for(let k in U){let O=U[k];for(let Y in O){let W=O[Y];for(let Z in W)u(W[Z].object),delete W[Z];delete O[Y]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let k in U){let O=U[k];for(let Y in O){let W=O[Y];for(let Z in W)u(W[Z].object),delete W[Z];delete O[Y]}}delete n[I.id]}function A(I){for(let U in n){let k=n[U];for(let O in k){let Y=k[O];if(Y[I.id]===void 0)continue;let W=Y[I.id];for(let Z in W)u(W[Z].object),delete W[Z];delete Y[I.id]}}}function _(I){for(let U in n){let k=n[U],O=I.isInstancedMesh===!0?I.id:0,Y=k[O];if(Y!==void 0){for(let W in Y){let Z=Y[W];for(let ct in Z)u(Z[ct].object),delete Z[ct];delete Y[W]}delete k[O],Object.keys(k).length===0&&delete n[U]}}}function C(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function Xv(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Yv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ii&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Hn&&A!==ni&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(re("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:S}}function qv(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Xn,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let x=r?0:n,M=x*4,v=m.clippingState||null;c.value=v,v=u(g,f,M,d);for(let b=0;b!==M;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=d+y*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=d;M!==y;++M,v+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var kr=4,Zv=6,$v=20,jv=256,na=new fs,lp=new Xt,Sh=null,wh=0,Eh=0,Th=!1,Jv=new G,Xs=new G,Rl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Jv}=r;Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sh,wh,Eh),this._renderer.xr.enabled=Th,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:pi,format:ii,colorSpace:mo,depthBuffer:!1},s=up(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kv(r)),this._blurMaterial=tb(r,t,e),this._ggxMaterial=Qv(r,t,e)}return s}_compileMaterial(t){let e=new ce(new he,t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,s,r){let c=new Pn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(lp),h.toneMapping=fi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new Te,new Oe({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,m=!0):(p.color.copy(lp),m=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let b=this._cubeSize;Br(s,v*b,M>2?b:0,b,b),h.setRenderTarget(s),m&&h.render(y,c),h.render(t,c)}h.toneMapping=d,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ys||t.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Br(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,na)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:g}=this,y=this._sizeLods[n],p=3*y*(n>g-kr?n-g+kr:0),m=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Br(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(a,na),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Br(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(a,na)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-kr?s-this._lodMax+kr:0),f=4*(this._cubeSize-u);Br(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(c,na)}};function Kv(i){let t=[],e=[],n=i,s=i-kr+1+Zv;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,g=new Float32Array(d*f*h),y=new Float32Array(d*f*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,M=m>2?0:-1,v=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];g.set(v,d*f*m);for(let b=0;b<f;b++){let S=u[b*2]*2-1,A=u[b*2+1]*2-1;m===0?Xs.set(1,A,S):m===1?Xs.set(-S,1,-A):m===2?Xs.set(-S,A,1):m===3?Xs.set(-1,A,-S):m===4?Xs.set(-S,-1,A):Xs.set(S,A,-1),Xs.toArray(y,(m*f+b)*d)}}let p=new he;p.setAttribute("position",new Ee(g,d)),p.setAttribute("outputDirection",new Ee(y,d)),e.push(new ce(p,null)),n>kr&&n--}return{lodMeshes:e,sizeLods:t}}function up(i,t,e){let n=new kn(i,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qv(i,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function tb(i,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:$v,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hp(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function fp(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cl=class extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new To(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:Ti});r.uniforms.tEquirect.value=e;let o=new ce(s,r),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=mn),new Uc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function eb(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Bc||d===kc)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Cl(g.height);return y.fromEquirectangularTexture(i,f),t.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===Bc||d===kc,y=d===ys||d===Gs;if(g||y){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Rl(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let x=f.image;return g&&x&&x.height>0||y&&x&&c(x)?(n===null&&(n=new Rl(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===Bc?f.mapping=ys:d===kc&&(f.mapping=Gs),f}function c(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function nb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function ib(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,g=h.attributes.position,y=0;if(g===void 0)return;if(d!==null){let x=d.array;y=d.version;for(let M=0,v=x.length;M<v;M+=3){let b=x[M+0],S=x[M+1],A=x[M+2];f.push(b,S,S,A,A,b)}}else{let x=g.array;y=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){let b=M+0,S=M+1,A=M+2;f.push(b,S,S,A,A,b)}}let p=new(g.count>=65535?Mo:bo)(f,1);p.version=y;let m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function sb(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function rb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ob(i,t,e){let n=new WeakMap,s=new Ie;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let C=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*b*4*h),A=new _o(S,v,b,h);A.type=ni,A.needsUpdate=!0;let _=M*4;for(let D=0;D<h;D++){let I=p[D],U=m[D],k=x[D],O=v*b*4*D;for(let Y=0;Y<I.count;Y++){let W=Y*_;d===!0&&(s.fromBufferAttribute(I,Y),S[O+W+0]=s.x,S[O+W+1]=s.y,S[O+W+2]=s.z,S[O+W+3]=0),g===!0&&(s.fromBufferAttribute(U,Y),S[O+W+4]=s.x,S[O+W+5]=s.y,S[O+W+6]=s.z,S[O+W+7]=0),y===!0&&(s.fromBufferAttribute(k,Y),S[O+W+8]=s.x,S[O+W+9]=s.y,S[O+W+10]=s.z,S[O+W+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Dt(v,b)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ab(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var cb={[nh]:"LINEAR_TONE_MAPPING",[ih]:"REINHARD_TONE_MAPPING",[sh]:"CINEON_TONE_MAPPING",[Yo]:"ACES_FILMIC_TONE_MAPPING",[oh]:"AGX_TONE_MAPPING",[ah]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function lb(i,t,e,n,s,r){let o=new kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new he;l.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let u=new Mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ce(l,u),f=new fs(-1,1,1,-1,0,1),d=null,g=null,y=!1,p,m=null,x=[],M=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),c!==null&&c.setSize(v,b);for(let S=0;S<x.length;S++){let A=x[S];A.setSize&&A.setSize(v,b)}},this.setEffects=function(v){x=v,M=x.length>0&&x[0].isRenderPass===!0;let b=o.width,S=o.height;x.length>0&&a===null&&(a=new kn(b,S,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new kn(b,S,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let _=x[A];_.setSize&&_.setSize(b,S)}},this.begin=function(v,b){if(y||v.toneMapping===fi&&x.length===0)return!1;if(m=b,b!==null){let S=b.width,A=b.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return M===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=fi,!0},this.hasRenderPass=function(){return M},this.end=function(v,b){v.toneMapping=p,y=!0;let S=o,A=a;for(let _=0;_<x.length;_++){let C=x[_];C.enabled!==!1&&(C.render(v,A,S,b),C.needsSwap!==!1&&(S=A,A=A===a?c:a))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,u.defines={},ve.getTransfer(d)===Ce&&(u.defines.SRGB_TRANSFER="");let _=cb[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(h,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Lp=new Ln,Ch=new as(1,1),Np=new _o,Dp=new uc,Up=new To,dp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),yp=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=dp[s];if(r===void 0&&(r=new Float32Array(s),dp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ll(i,t){let e=pp[t];e===void 0&&(e=new Int32Array(t),pp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ub(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function fb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function db(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function pb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;yp.set(n),i.uniformMatrix2fv(this.addr,!1,yp),an(e,n)}}function mb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;gp.set(n),i.uniformMatrix3fv(this.addr,!1,gp),an(e,n)}}function gb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;mp.set(n),i.uniformMatrix4fv(this.addr,!1,mp),an(e,n)}}function yb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function _b(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function vb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function bb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function Sb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function wb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function Eb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ch.compareFunction=e.isReversedDepthBuffer()?El:wl,r=Ch):r=Lp,e.setTexture2D(t||r,s)}function Tb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Dp,s)}function Ab(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Up,s)}function Rb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Np,s)}function Cb(i){switch(i){case 5126:return ub;case 35664:return hb;case 35665:return fb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return yb;case 35667:case 35671:return xb;case 35668:case 35672:return _b;case 35669:case 35673:return vb;case 5125:return bb;case 36294:return Mb;case 36295:return Sb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Rb}}function Ib(i,t){i.uniform1fv(this.addr,t)}function Pb(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function Lb(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function Nb(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Db(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ub(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fb(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ob(i,t){i.uniform1iv(this.addr,t)}function Bb(i,t){i.uniform2iv(this.addr,t)}function kb(i,t){i.uniform3iv(this.addr,t)}function zb(i,t){i.uniform4iv(this.addr,t)}function Hb(i,t){i.uniform1uiv(this.addr,t)}function Gb(i,t){i.uniform2uiv(this.addr,t)}function Vb(i,t){i.uniform3uiv(this.addr,t)}function Wb(i,t){i.uniform4uiv(this.addr,t)}function Xb(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ch:o=Lp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Yb(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Dp,r[o])}function qb(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Up,r[o])}function Zb(i,t,e){let n=this.cache,s=t.length,r=Ll(e,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Np,r[o])}function $b(i){switch(i){case 5126:return Ib;case 35664:return Pb;case 35665:return Lb;case 35666:return Nb;case 35674:return Db;case 35675:return Ub;case 35676:return Fb;case 5124:case 35670:return Ob;case 35667:case 35671:return Bb;case 35668:case 35672:return kb;case 35669:case 35673:return zb;case 5125:return Hb;case 36294:return Gb;case 36295:return Vb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Zb}}var Ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cb(e.type)}},Ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$b(e.type)}},Lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ah=/(\w+)(\])?(\[|\.)?/g;function xp(i,t){i.seq.push(t),i.map[t.id]=t}function jb(i,t,e){let n=i.name,s=n.length;for(Ah.lastIndex=0;;){let r=Ah.exec(n),o=Ah.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){xp(e,l===void 0?new Ih(a,i,t):new Ph(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Lh(a),xp(e,h)),e=h}}}var zr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);jb(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function _p(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jb=37297,Kb=0;function Qb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var vp=new pe;function t1(i){ve._getMatrix(vp,ve.workingColorSpace,i);let t=`mat3( ${vp.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case go:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Qb(i.getShaderSource(t),a)}else return r}function e1(i,t){let e=t1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var n1={[nh]:"Linear",[ih]:"Reinhard",[sh]:"Cineon",[Yo]:"ACESFilmic",[oh]:"AgX",[ah]:"Neutral",[rh]:"Custom"};function i1(i,t){let e=n1[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Al=new G;function s1(){ve.getLuminanceCoefficients(Al);let i=Al.x.toFixed(4),t=Al.y.toFixed(4),e=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function o1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function sa(i){return i!==""}function Mp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var c1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(i){return i.replace(c1,u1)}var l1=new Map;function u1(i,t){let e=ye[t];if(e===void 0){let n=l1.get(t);if(n!==void 0)e=ye[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nh(e)}var h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(i){return i.replace(h1,f1)}function f1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ep(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var d1={[ks]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function p1(i){return d1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m1={[ys]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE_UV"};function g1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":m1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var y1={[Gs]:"ENVMAP_MODE_REFRACTION"};function x1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":y1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _1={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[zd]:"ENVMAP_BLENDING_MIX",[Hd]:"ENVMAP_BLENDING_ADD"};function v1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_1[i.combine]||"ENVMAP_BLENDING_NONE"}function b1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function M1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=p1(e),l=g1(e),u=x1(e),h=v1(e),f=b1(e),d=r1(e),g=o1(r),y=s.createProgram(),p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sa).join(`
`),m.length>0&&(m+=`
`)):(p=[Ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),m=[Ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?ye.tonemapping_pars_fragment:"",e.toneMapping!==fi?i1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,e1("linearToOutputTexel",e.outputColorSpace),s1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sa).join(`
`)),o=Nh(o),o=Mp(o,e),o=Sp(o,e),a=Nh(a),a=Mp(a,e),a=Sp(a,e),o=wp(o),a=wp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=x+p+o,v=x+m+a,b=_p(s,s.VERTEX_SHADER,M),S=_p(s,s.FRAGMENT_SHADER,v);s.attachShader(y,b),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(S)||"",Y=U.trim(),W=k.trim(),Z=O.trim(),ct=!0,nt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,S);else{let it=bp(s,b,"vertex"),et=bp(s,S,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+it+`
`+et)}else Y!==""?re("WebGLProgram: Program Info Log:",Y):(W===""||Z==="")&&(nt=!1);nt&&(I.diagnostics={runnable:ct,programLog:Y,vertexShader:{log:W,prefix:p},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(b),s.deleteShader(S),_=new zr(s,y),C=a1(s,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,Jb)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kb++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=S,this}var S1=0,Dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uh(t),e.set(t,n)),n}},Uh=class{constructor(t){this.id=S1++,this.code=t,this.usedTimes=0}};function w1(i){return i===vs||i===Qo||i===ta}function E1(i,t,e,n,s,r){let o=new Sr,a=new Dh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,C,D,I,U,k){let O=I.fog,Y=U.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ct=t.get(_.envMap||W,Z),nt=ct&&ct.mapping===qo?ct.image.height:null,it=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&re("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let et=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pt=et!==void 0?et.length:0,Ct=0;Y.morphAttributes.position!==void 0&&(Ct=1),Y.morphAttributes.normal!==void 0&&(Ct=2),Y.morphAttributes.color!==void 0&&(Ct=3);let Rt,Tt,X,H;if(it){let It=Un[it];Rt=It.vertexShader,Tt=It.fragmentShader}else{Rt=_.vertexShader,Tt=_.fragmentShader;let It=a.getVertexShaderStage(_),Ut=a.getFragmentShaderStage(_);a.update(_,It,Ut),X=It.id,H=Ut.id}let $=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),mt=U.isInstancedMesh===!0,pt=U.isBatchedMesh===!0,bt=!!_.map,Mt=!!_.matcap,lt=!!ct,_t=!!_.aoMap,vt=!!_.lightMap,St=!!_.bumpMap&&_.wireframe===!1,Nt=!!_.normalMap,Ot=!!_.displacementMap,Bt=!!_.emissiveMap,$t=!!_.metalnessMap,Gt=!!_.roughnessMap,j=_.anisotropy>0,oe=_.clearcoat>0,Vt=_.dispersion>0,B=_.retroreflectivity>0,T=_.iridescence>0,tt=_.sheen>0,ut=_.transmission>0,gt=j&&!!_.anisotropyMap,z=oe&&!!_.clearcoatMap,w=oe&&!!_.clearcoatNormalMap,E=oe&&!!_.clearcoatRoughnessMap,R=T&&!!_.iridescenceMap,F=T&&!!_.iridescenceThicknessMap,L=tt&&!!_.sheenColorMap,V=tt&&!!_.sheenRoughnessMap,q=!!_.specularMap,at=!!_.specularColorMap,ot=!!_.specularIntensityMap,At=ut&&!!_.transmissionMap,N=ut&&!!_.thicknessMap,st=!!_.gradientMap,J=!!_.alphaMap,wt=_.alphaTest>0,Et=!!_.alphaHash,xt=!!_.extensions,Ft=fi;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let ht={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:Rt,fragmentShader:Tt,defines:_.defines,customVertexShaderID:X,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:pt,batchingColor:pt&&U._colorsTexture!==null,instancing:mt,instancingColor:mt&&U.instanceColor!==null,instancingMorph:mt&&U.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:bt,matcap:Mt,envMap:lt,envMapMode:lt&&ct.mapping,envMapCubeUVHeight:nt,aoMap:_t,lightMap:vt,bumpMap:St,normalMap:Nt,displacementMap:Ot,emissiveMap:Bt,normalMapObjectSpace:Nt&&_.normalMapType===Wd,normalMapTangentSpace:Nt&&_.normalMapType===ea,packedNormalMap:Nt&&_.normalMapType===ea&&w1(_.normalMap.format),metalnessMap:$t,roughnessMap:Gt,anisotropy:j,anisotropyMap:gt,clearcoat:oe,clearcoatMap:z,clearcoatNormalMap:w,clearcoatRoughnessMap:E,dispersion:Vt,retroreflection:B,iridescence:T,iridescenceMap:R,iridescenceThicknessMap:F,sheen:tt,sheenColorMap:L,sheenRoughnessMap:V,specularMap:q,specularColorMap:at,specularIntensityMap:ot,transmission:ut,transmissionMap:At,thicknessMap:N,gradientMap:st,opaque:_.transparent===!1&&_.blending===Ur&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:wt,alphaHash:Et,combine:_.combine,mapUv:bt&&g(_.map.channel),aoMapUv:_t&&g(_.aoMap.channel),lightMapUv:vt&&g(_.lightMap.channel),bumpMapUv:St&&g(_.bumpMap.channel),normalMapUv:Nt&&g(_.normalMap.channel),displacementMapUv:Ot&&g(_.displacementMap.channel),emissiveMapUv:Bt&&g(_.emissiveMap.channel),metalnessMapUv:$t&&g(_.metalnessMap.channel),roughnessMapUv:Gt&&g(_.roughnessMap.channel),anisotropyMapUv:gt&&g(_.anisotropyMap.channel),clearcoatMapUv:z&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:R&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:F&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:L&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(_.sheenRoughnessMap.channel),specularMapUv:q&&g(_.specularMap.channel),specularColorMapUv:at&&g(_.specularColorMap.channel),specularIntensityMapUv:ot&&g(_.specularIntensityMap.channel),transmissionMapUv:At&&g(_.transmissionMap.channel),thicknessMapUv:N&&g(_.thicknessMap.channel),alphaMapUv:J&&g(_.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Nt||j),vertexNormals:!!Y.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(bt||J),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||Y.attributes.normal===void 0&&Nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:rt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ct,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:bt&&_.map.isVideoTexture===!0&&ve.getTransfer(_.map.colorSpace)===Ce,decodeVideoTextureEmissive:Bt&&_.emissiveMap.isVideoTexture===!0&&ve.getTransfer(_.emissiveMap.colorSpace)===Ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===rn,flipSided:_.side===Nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&_.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)C.push(D),C.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(C,_),x(C,_),C.push(i.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function m(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function x(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let C=d[_.type],D;if(C){let I=Un[C];D=Ws.clone(I.uniforms)}else D=_.uniforms;return D}function v(_,C){let D=u.get(C);return D!==void 0?++D.usedTimes:(D=new M1(i,C,_,s),l.push(D),u.set(C,D)),D}function b(_){if(--_.usedTimes===0){let C=l.indexOf(_);l[C]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:M,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:A}}function T1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function A1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ap(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,y,p,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=g,x.materialVariant=o(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=p,x.group=m),t++,x}function c(f,d,g,y,p,m,x){x.reversedDepth===!0&&(p=-p);let M=a(f,d,g,y,p,m);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):e.push(M)}function l(f,d,g,y,p,m){let x=a(f,d,g,y,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||A1),n.length>1&&n.sort(d||Tp),s.length>1&&s.sort(d||Tp)}function h(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function R1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ap,i.set(n,[o])):s>=r.length?(o=new Ap,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function C1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Xt};break;case"SpotLight":e={position:new G,direction:new G,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function I1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var P1=0;function L1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N1(i){let t=new C1,e=I1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new Me,o=new Me;function a(l){let u=0,h=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,x=0,M=0,v=0,b=0,S=0,A=0,_=0,C=0,D=0;l.sort(L1);for(let U=0,k=l.length;U<k;U++){let O=l[U],Y=O.color,W=O.intensity,Z=O.distance,ct=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===vs?ct=O.shadow.map.texture:ct=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=Y.r*W,h+=Y.g*W,f+=Y.b*W;else if(O.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(O.sh.coefficients[nt],W);D++}else if(O.isSunLight){let nt=t.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let it=O.shadow,et=e.get(O);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=ct;let Pt=it.getViewportCount();for(let Ct=0;Ct<Pt;Ct++)n.sunShadowMatrix[y+Ct]=it.getMatrix(Ct),n.sunShadowCascade[y+Ct]=it._cascadeData[Ct];y+=Pt,g++}n.sun[d]=nt,d++}else if(O.isDirectionalLight){let nt=t.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let it=O.shadow,et=e.get(O);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize=it.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=ct,n.directionalShadowMatrix[p]=O.shadow.matrix,b++}n.directional[p]=nt,p++}else if(O.isSpotLight){let nt=t.get(O);nt.position.setFromMatrixPosition(O.matrixWorld),nt.color.copy(Y).multiplyScalar(W),nt.distance=Z,nt.coneCos=Math.cos(O.angle),nt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),nt.decay=O.decay,n.spot[x]=nt;let it=O.shadow;if(O.map&&(n.spotLightMap[_]=O.map,_++,it.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[x]=it.matrix,O.castShadow){let et=e.get(O);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize=it.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=ct,A++}x++}else if(O.isRectAreaLight){let nt=t.get(O);nt.color.copy(Y).multiplyScalar(W),nt.halfWidth.set(O.width*.5,0,0),nt.halfHeight.set(0,O.height*.5,0),n.rectArea[M]=nt,M++}else if(O.isPointLight){let nt=t.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity),nt.distance=O.distance,nt.decay=O.decay,O.castShadow){let it=O.shadow,et=e.get(O);et.shadowIntensity=it.intensity,et.shadowBias=it.bias,et.shadowNormalBias=it.normalBias,et.shadowRadius=it.radius,et.shadowMapSize=it.mapSize,et.shadowCameraNear=it.camera.near,et.shadowCameraFar=it.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=ct,n.pointShadowMatrix[m]=O.shadow.matrix,S++}n.point[m]=nt,m++}else if(O.isHemisphereLight){let nt=t.get(O);nt.skyColor.copy(O.color).multiplyScalar(W),nt.groundColor.copy(O.groundColor).multiplyScalar(W),n.hemi[v]=nt,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==M||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==D)&&(n.sun.length=d,n.directional.length=p,n.spot.length=x,n.rectArea.length=M,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-C,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,I.sunLength=d,I.directionalLength=p,I.pointLength=m,I.spotLength=x,I.rectAreaLength=M,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=D,n.version=P1++)}function c(l,u){let h=0,f=0,d=0,g=0,y=0,p=0,m=u.matrixWorldInverse;for(let x=0,M=l.length;x<M;x++){let v=l[x];if(v.isSunLight){let b=n.sun[h];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(v.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function Rp(i){let t=new N1(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function D1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Rp(i),t.set(s,[a])):r>=o.length?(a=new Rp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var U1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F1=`uniform sampler2D shadow_pass;
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
}`,O1=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],B1=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Cp=new Me,ia=new G,Rh=new G;function k1(i,t,e){let n=new Tr,s=new Dt,r=new Dt,o=new Ie,a=new Sc,c=new wc,l={},u=e.maxTextureSize,h={[gs]:Nn,[Nn]:gs,[rn]:rn},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:U1,fragmentShader:F1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ce(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let m=this.type;this.render=function(S,A,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===bd&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);let C=i.getRenderTarget(),D=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ti),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=m!==this.type;k&&A.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Y=>Y.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Y=S.length;O<Y;O++){let W=S[O],Z=W.shadow;if(Z===void 0){re("WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ct=Z.getFrameExtents();s.multiply(ct),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ct.x),s.x=r.x*ct.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ct.y),s.y=r.y*ct.y,Z.mapSize.y=r.y));let nt=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=nt,Z.map===null||k===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Dr){if(W.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new kn(s.x,s.y,{format:vs,type:pi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),Z.map.texture.name=W.name+".shadowMap",Z.map.depthTexture=new as(s.x,s.y,ni),Z.map.depthTexture.name=W.name+".shadowMapDepth",Z.map.depthTexture.format=Si,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=hn,Z.map.depthTexture.magFilter=hn}else W.isPointLight?(Z.map=new Cl(s.x),Z.map.depthTexture=new pc(s.x,di)):(Z.map=new kn(s.x,s.y),Z.map.depthTexture=new as(s.x,s.y,di)),Z.map.depthTexture.name=W.name+".shadowMap",Z.map.depthTexture.format=Si,this.type===ks?(Z.map.depthTexture.compareFunction=nt?El:wl,Z.map.depthTexture.minFilter=mn,Z.map.depthTexture.magFilter=mn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=hn,Z.map.depthTexture.magFilter=hn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let it=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();W.isPointLight!==!0&&Z.updateMatrices(W,_);for(let et=0;et<it;et++){let Pt=Z.getCamera(et);if(W.isPointLight){let Ct=Z.camera,Rt=Z.matrix,Tt=W.distance||Ct.far;Tt!==Ct.far&&(Ct.far=Tt,Ct.updateProjectionMatrix()),ia.setFromMatrixPosition(W.matrixWorld),Ct.position.copy(ia),Rh.copy(Ct.position),Rh.add(O1[et]),Ct.up.copy(B1[et]),Ct.lookAt(Rh),Ct.updateMatrixWorld(),Rt.makeTranslation(-ia.x,-ia.y,-ia.z),Cp.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Cp,Ct.coordinateSystem,Ct.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,et),i.clear();else{et===0&&(i.setRenderTarget(Z.map),i.clear());let Ct=Z.getViewport(et);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),U.viewport(o)}n=Z.getFrustum(et),v(A,_,Pt,W,this.type)}Z.isPointLightShadow!==!0&&this.type===Dr&&x(Z,_),Z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(C,D,I)};function x(S,A){let _=t.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new kn(s.x,s.y,{format:vs,type:pi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,_,f,y,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,_,d,y,null)}function M(S,A,_,C){let D=null,I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)D=I;else if(D=_.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=D.uuid,k=A.uuid,O=l[U];O===void 0&&(O={},l[U]=O);let Y=O[k];Y===void 0&&(Y=D.clone(),O[k]=Y,A.addEventListener("dispose",b)),D=Y}if(D.visible=A.visible,D.wireframe=A.wireframe,C===Dr?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:h[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let U=i.properties.get(D);U.light=_}return D}function v(S,A,_,C,D){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&D===Dr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let k=t.update(S),O=S.material;if(Array.isArray(O)){let Y=k.groups;for(let W=0,Z=Y.length;W<Z;W++){let ct=Y[W],nt=O[ct.materialIndex];if(nt&&nt.visible){let it=M(S,nt,C,D);S.onBeforeShadow(i,S,A,_,k,it,ct),i.renderBufferDirect(_,null,k,it,S,ct),S.onAfterShadow(i,S,A,_,k,it,ct)}}}else if(O.visible){let Y=M(S,O,C,D);S.onBeforeShadow(i,S,A,_,k,Y,null),i.renderBufferDirect(_,null,k,Y,S,null),S.onAfterShadow(i,S,A,_,k,Y,null)}}let U=S.children;for(let k=0,O=U.length;k<O;k++)v(U[k],A,_,C,D)}function b(S){S.target.removeEventListener("dispose",b);for(let _ in l){let C=l[_],D=S.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function z1(i,t){function e(){let N=!1,st=new Ie,J=null,wt=new Ie(0,0,0,0);return{setMask:function(Et){J!==Et&&!N&&(i.colorMask(Et,Et,Et,Et),J=Et)},setLocked:function(Et){N=Et},setClear:function(Et,xt,Ft,ht,It){It===!0&&(Et*=ht,xt*=ht,Ft*=ht),st.set(Et,xt,Ft,ht),wt.equals(st)===!1&&(i.clearColor(Et,xt,Ft,ht),wt.copy(st))},reset:function(){N=!1,J=null,wt.set(-1,0,0,0)}}}function n(){let N=!1,st=!1,J=null,wt=null,Et=null;return{setReversed:function(xt){if(st!==xt){let Ft=t.get("EXT_clip_control");xt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),st=xt;let ht=Et;Et=null,this.setClear(ht)}},getReversed:function(){return st},setTest:function(xt){xt?$(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(xt){J!==xt&&!N&&(i.depthMask(xt),J=xt)},setFunc:function(xt){if(st&&(xt=ep[xt]),wt!==xt){switch(xt){case Qa:i.depthFunc(i.NEVER);break;case tc:i.depthFunc(i.ALWAYS);break;case ec:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case nc:i.depthFunc(i.EQUAL);break;case ic:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=xt}},setLocked:function(xt){N=xt},setClear:function(xt){Et!==xt&&(Et=xt,st&&(xt=1-xt),i.clearDepth(xt))},reset:function(){N=!1,J=null,wt=null,Et=null,st=!1}}}function s(){let N=!1,st=null,J=null,wt=null,Et=null,xt=null,Ft=null,ht=null,It=null;return{setTest:function(Ut){N||(Ut?$(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Ut){st!==Ut&&!N&&(i.stencilMask(Ut),st=Ut)},setFunc:function(Ut,Yt,te){(J!==Ut||wt!==Yt||Et!==te)&&(i.stencilFunc(Ut,Yt,te),J=Ut,wt=Yt,Et=te)},setOp:function(Ut,Yt,te){(xt!==Ut||Ft!==Yt||ht!==te)&&(i.stencilOp(Ut,Yt,te),xt=Ut,Ft=Yt,ht=te)},setLocked:function(Ut){N=Ut},setClear:function(Ut){It!==Ut&&(i.clearStencil(Ut),It=Ut)},reset:function(){N=!1,st=null,J=null,wt=null,Et=null,xt=null,Ft=null,ht=null,It=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,x=null,M=null,v=null,b=null,S=null,A=null,_=new Xt(0,0,0),C=0,D=!1,I=null,U=null,k=null,O=null,Y=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ct=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Z=ct>=1):nt.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Z=ct>=2);let it=null,et={},Pt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Rt=new Ie().fromArray(Pt),Tt=new Ie().fromArray(Ct);function X(N,st,J,wt){let Et=new Uint8Array(4),xt=i.createTexture();i.bindTexture(N,xt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<J;Ft++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(st+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return xt}let H={};H[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(xr),St(!1),Nt(Ju),$(i.CULL_FACE),_t(Ti);function $(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function rt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function mt(N,st){return f[N]!==st?(i.bindFramebuffer(N,st),f[N]=st,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=st),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=st),!0):!1}function pt(N,st){let J=g,wt=!1;if(N){J=d.get(st),J===void 0&&(J=[],d.set(st,J));let Et=N.textures;if(J.length!==Et.length||J[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Ft=Et.length;xt<Ft;xt++)J[xt]=i.COLOR_ATTACHMENT0+xt;J.length=Et.length,wt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,wt=!0);wt&&i.drawBuffers(J)}function bt(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let Mt={[Hs]:i.FUNC_ADD,[Sd]:i.FUNC_SUBTRACT,[wd]:i.FUNC_REVERSE_SUBTRACT};Mt[Ed]=i.MIN,Mt[Td]=i.MAX;let lt={[Ad]:i.ZERO,[Rd]:i.ONE,[Cd]:i.SRC_COLOR,[th]:i.SRC_ALPHA,[Ud]:i.SRC_ALPHA_SATURATE,[Nd]:i.DST_COLOR,[Pd]:i.DST_ALPHA,[Id]:i.ONE_MINUS_SRC_COLOR,[eh]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Ld]:i.ONE_MINUS_DST_ALPHA,[Fd]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[Bd]:i.CONSTANT_ALPHA,[kd]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(N,st,J,wt,Et,xt,Ft,ht,It,Ut){if(N===Ti){p===!0&&(rt(i.BLEND),p=!1);return}if(p===!1&&($(i.BLEND),p=!0),N!==Md){if(N!==m||Ut!==D){if((x!==Hs||b!==Hs)&&(i.blendEquation(i.FUNC_ADD),x=Hs,b=Hs),Ut)switch(N){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFunc(i.ONE,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",N);break}else switch(N){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ku:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qu:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",N);break}M=null,v=null,S=null,A=null,_.set(0,0,0),C=0,m=N,D=Ut}return}Et=Et||st,xt=xt||J,Ft=Ft||wt,(st!==x||Et!==b)&&(i.blendEquationSeparate(Mt[st],Mt[Et]),x=st,b=Et),(J!==M||wt!==v||xt!==S||Ft!==A)&&(i.blendFuncSeparate(lt[J],lt[wt],lt[xt],lt[Ft]),M=J,v=wt,S=xt,A=Ft),(ht.equals(_)===!1||It!==C)&&(i.blendColor(ht.r,ht.g,ht.b,It),_.copy(ht),C=It),m=N,D=!1}function vt(N,st){N.side===rn?rt(i.CULL_FACE):$(i.CULL_FACE);let J=N.side===Nn;st&&(J=!J),St(J),N.blending===Ur&&N.transparent===!1?_t(Ti):_t(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let wt=N.stencilWrite;a.setTest(wt),wt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function Nt(N){N!==_d?($(i.CULL_FACE),N!==U&&(N===Ju?i.cullFace(i.BACK):N===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),U=N}function Ot(N){N!==k&&(Z&&i.lineWidth(N),k=N)}function Bt(N,st,J){N?($(i.POLYGON_OFFSET_FILL),(O!==st||Y!==J)&&(O=st,Y=J,o.getReversed()&&(st=-st),i.polygonOffset(st,J))):rt(i.POLYGON_OFFSET_FILL)}function $t(N){N?$(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function Gt(N){N===void 0&&(N=i.TEXTURE0+W-1),it!==N&&(i.activeTexture(N),it=N)}function j(N,st,J){J===void 0&&(it===null?J=i.TEXTURE0+W-1:J=it);let wt=et[J];wt===void 0&&(wt={type:void 0,texture:void 0},et[J]=wt),(wt.type!==N||wt.texture!==st)&&(it!==J&&(i.activeTexture(J),it=J),i.bindTexture(N,st||H[N]),wt.type=N,wt.texture=st)}function oe(){let N=et[it];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function T(){try{i.texSubImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function tt(){try{i.texSubImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function z(){try{i.texStorage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function w(){try{i.texStorage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function E(){try{i.texImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function R(){try{i.texImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function F(N){return h[N]!==void 0?h[N]:i.getParameter(N)}function L(N,st){h[N]!==st&&(i.pixelStorei(N,st),h[N]=st)}function V(N){Rt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Rt.copy(N))}function q(N){Tt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Tt.copy(N))}function at(N,st){let J=l.get(st);J===void 0&&(J=new WeakMap,l.set(st,J));let wt=J.get(N);wt===void 0&&(wt=i.getUniformBlockIndex(st,N.name),J.set(N,wt))}function ot(N,st){let wt=l.get(st).get(N);c.get(st)!==wt&&(i.uniformBlockBinding(st,wt,N.__bindingPointIndex),c.set(st,wt))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},it=null,et={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,x=null,M=null,v=null,b=null,S=null,A=null,_=new Xt(0,0,0),C=0,D=!1,I=null,U=null,k=null,O=null,Y=null,Rt.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:rt,bindFramebuffer:mt,drawBuffers:pt,useProgram:bt,setBlending:_t,setMaterial:vt,setFlipSided:St,setCullFace:Nt,setLineWidth:Ot,setPolygonOffset:Bt,setScissorTest:$t,activeTexture:Gt,bindTexture:j,unbindTexture:oe,compressedTexImage2D:Vt,compressedTexImage3D:B,texImage2D:E,texImage3D:R,pixelStorei:L,getParameter:F,updateUBOMapping:at,uniformBlockBinding:ot,texStorage2D:z,texStorage3D:w,texSubImage2D:T,texSubImage3D:tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:V,viewport:q,reset:At}}function H1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Dt,u=new WeakMap,h=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(B,T){return g?new OffscreenCanvas(B,T):yo("canvas")}function p(B,T,tt){let ut=1,gt=Vt(B);if((gt.width>tt||gt.height>tt)&&(ut=tt/Math.max(gt.width,gt.height)),ut<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let z=Math.floor(ut*gt.width),w=Math.floor(ut*gt.height);f===void 0&&(f=y(z,w));let E=T?y(z,w):f;return E.width=z,E.height=w,E.getContext("2d").drawImage(B,0,0,z,w),re("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+z+"x"+w+")."),E}else return"data"in B&&re("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),B;return B}function m(B){return B.generateMipmaps}function x(B){i.generateMipmap(B)}function M(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(B,T,tt,ut,gt,z=!1){if(B!==null){if(i[B]!==void 0)return i[B];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let w;ut&&(w=t.get("EXT_texture_norm16"),w||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let E=T;if(T===i.RED&&(tt===i.FLOAT&&(E=i.R32F),tt===i.HALF_FLOAT&&(E=i.R16F),tt===i.UNSIGNED_BYTE&&(E=i.R8),tt===i.UNSIGNED_SHORT&&w&&(E=w.R16_EXT),tt===i.SHORT&&w&&(E=w.R16_SNORM_EXT)),T===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(E=i.R8UI),tt===i.UNSIGNED_SHORT&&(E=i.R16UI),tt===i.UNSIGNED_INT&&(E=i.R32UI),tt===i.BYTE&&(E=i.R8I),tt===i.SHORT&&(E=i.R16I),tt===i.INT&&(E=i.R32I)),T===i.RG&&(tt===i.FLOAT&&(E=i.RG32F),tt===i.HALF_FLOAT&&(E=i.RG16F),tt===i.UNSIGNED_BYTE&&(E=i.RG8),tt===i.UNSIGNED_SHORT&&w&&(E=w.RG16_EXT),tt===i.SHORT&&w&&(E=w.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(E=i.RG8UI),tt===i.UNSIGNED_SHORT&&(E=i.RG16UI),tt===i.UNSIGNED_INT&&(E=i.RG32UI),tt===i.BYTE&&(E=i.RG8I),tt===i.SHORT&&(E=i.RG16I),tt===i.INT&&(E=i.RG32I)),T===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(E=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(E=i.RGB16UI),tt===i.UNSIGNED_INT&&(E=i.RGB32UI),tt===i.BYTE&&(E=i.RGB8I),tt===i.SHORT&&(E=i.RGB16I),tt===i.INT&&(E=i.RGB32I)),T===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(E=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(E=i.RGBA16UI),tt===i.UNSIGNED_INT&&(E=i.RGBA32UI),tt===i.BYTE&&(E=i.RGBA8I),tt===i.SHORT&&(E=i.RGBA16I),tt===i.INT&&(E=i.RGBA32I)),T===i.RGB&&(tt===i.UNSIGNED_SHORT&&w&&(E=w.RGB16_EXT),tt===i.SHORT&&w&&(E=w.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(E=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(E=i.R11F_G11F_B10F)),T===i.RGBA){let R=z?go:ve.getTransfer(gt);tt===i.FLOAT&&(E=i.RGBA32F),tt===i.HALF_FLOAT&&(E=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(E=R===Ce?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&w&&(E=w.RGBA16_EXT),tt===i.SHORT&&w&&(E=w.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(E=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(E=i.RGB5_A1)}return(E===i.R16F||E===i.R32F||E===i.RG16F||E===i.RG32F||E===i.RGBA16F||E===i.RGBA32F)&&t.get("EXT_color_buffer_float"),E}function b(B,T){let tt;return B?T===null||T===di||T===Or?tt=i.DEPTH24_STENCIL8:T===ni?tt=i.DEPTH32F_STENCIL8:T===Fr&&(tt=i.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===di||T===Or?tt=i.DEPTH_COMPONENT24:T===ni?tt=i.DEPTH_COMPONENT32F:T===Fr&&(tt=i.DEPTH_COMPONENT16),tt}function S(B,T){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==hn&&B.minFilter!==mn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function A(B){let T=B.target;T.removeEventListener("dispose",A),C(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function _(B){let T=B.target;T.removeEventListener("dispose",_),I(T)}function C(B){let T=n.get(B);if(T.__webglInit===void 0)return;let tt=B.source,ut=d.get(tt);if(ut){let gt=ut[T.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&D(B),Object.keys(ut).length===0&&d.delete(tt)}n.remove(B)}function D(B){let T=n.get(B);i.deleteTexture(T.__webglTexture);let tt=B.source,ut=d.get(tt);delete ut[T.__cacheKey],o.memory.textures--}function I(B){let T=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let gt=0;gt<T.__webglFramebuffer[ut].length;gt++)i.deleteFramebuffer(T.__webglFramebuffer[ut][gt]);else i.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)i.deleteFramebuffer(T.__webglFramebuffer[ut]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let tt=B.textures;for(let ut=0,gt=tt.length;ut<gt;ut++){let z=n.get(tt[ut]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(tt[ut])}n.remove(B)}let U=0;function k(){U=0}function O(){return U}function Y(B){U=B}function W(){let B=U;return B>=s.maxTextures&&re("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,B}function Z(B){let T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function ct(B,T){let tt=n.get(B);if(B.isVideoTexture&&j(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&tt.__version!==B.version){let ut=B.image;if(ut===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(tt,B,T);return}}else B.isExternalTexture&&(tt.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+T)}function nt(B,T){let tt=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&tt.__version!==B.version){rt(tt,B,T);return}else B.isExternalTexture&&(tt.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+T)}function it(B,T){let tt=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&tt.__version!==B.version){rt(tt,B,T);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+T)}function et(B,T){let tt=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&tt.__version!==B.version){mt(tt,B,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+T)}let Pt={[Ns]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},Ct={[hn]:i.NEAREST,[Gd]:i.NEAREST_MIPMAP_NEAREST,[Zo]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[zc]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},Rt={[Yd]:i.NEVER,[Jd]:i.ALWAYS,[qd]:i.LESS,[wl]:i.LEQUAL,[Zd]:i.EQUAL,[El]:i.GEQUAL,[$d]:i.GREATER,[jd]:i.NOTEQUAL};function Tt(B,T){if(T.type===ni&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mn||T.magFilter===zc||T.magFilter===Zo||T.magFilter===xs||T.minFilter===mn||T.minFilter===zc||T.minFilter===Zo||T.minFilter===xs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,Pt[T.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,Pt[T.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,Pt[T.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,Ct[T.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,Ct[T.minFilter]),T.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,Rt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hn||T.minFilter!==Zo&&T.minFilter!==xs||T.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function X(B,T){let tt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",A));let ut=T.source,gt=d.get(ut);gt===void 0&&(gt={},d.set(ut,gt));let z=Z(T);if(z!==B.__cacheKey){gt[z]===void 0&&(gt[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),gt[z].usedTimes++;let w=gt[B.__cacheKey];w!==void 0&&(gt[B.__cacheKey].usedTimes--,w.usedTimes===0&&D(T)),B.__cacheKey=z,B.__webglTexture=gt[z].texture}return tt}function H(B,T,tt){return Math.floor(Math.floor(B/tt)/T)}function $(B,T,tt,ut){let z=B.updateRanges;if(z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,tt,ut,T.data);else{z.sort((L,V)=>L.start-V.start);let w=0;for(let L=1;L<z.length;L++){let V=z[w],q=z[L],at=V.start+V.count,ot=H(q.start,T.width,4),At=H(V.start,T.width,4);q.start<=at+1&&ot===At&&H(q.start+q.count-1,T.width,4)===ot?V.count=Math.max(V.count,q.start+q.count-V.start):(++w,z[w]=q)}z.length=w+1;let E=e.getParameter(i.UNPACK_ROW_LENGTH),R=e.getParameter(i.UNPACK_SKIP_PIXELS),F=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let L=0,V=z.length;L<V;L++){let q=z[L],at=Math.floor(q.start/4),ot=Math.ceil(q.count/4),At=at%T.width,N=Math.floor(at/T.width),st=ot,J=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,At),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,At,N,st,J,tt,ut,T.data)}B.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,E),e.pixelStorei(i.UNPACK_SKIP_PIXELS,R),e.pixelStorei(i.UNPACK_SKIP_ROWS,F)}}function rt(B,T,tt){let ut=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=i.TEXTURE_3D);let gt=X(B,T),z=T.source;e.bindTexture(ut,B.__webglTexture,i.TEXTURE0+tt);let w=n.get(z);if(z.version!==w.__version||gt===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let J=ve.getPrimaries(ve.workingColorSpace),wt=T.colorSpace===Wi?null:ve.getPrimaries(T.colorSpace),Et=T.colorSpace===Wi||J===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let R=p(T.image,!1,s.maxTextureSize);R=oe(T,R);let F=r.convert(T.format,T.colorSpace),L=r.convert(T.type),V=v(T.internalFormat,F,L,T.normalized,T.colorSpace,T.isVideoTexture);Tt(ut,T);let q,at=T.mipmaps,ot=T.isVideoTexture!==!0,At=w.__version===void 0||gt===!0,N=z.dataReady,st=S(T,R);if(T.isDepthTexture)V=b(T.format===_s,T.type),At&&(ot?e.texStorage2D(i.TEXTURE_2D,1,V,R.width,R.height):e.texImage2D(i.TEXTURE_2D,0,V,R.width,R.height,0,F,L,null));else if(T.isDataTexture)if(at.length>0){ot&&At&&e.texStorage2D(i.TEXTURE_2D,st,V,at[0].width,at[0].height);for(let J=0,wt=at.length;J<wt;J++)q=at[J],ot?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,q.width,q.height,F,L,q.data):e.texImage2D(i.TEXTURE_2D,J,V,q.width,q.height,0,F,L,q.data);T.generateMipmaps=!1}else ot?(At&&e.texStorage2D(i.TEXTURE_2D,st,V,R.width,R.height),N&&$(T,R,F,L)):e.texImage2D(i.TEXTURE_2D,0,V,R.width,R.height,0,F,L,R.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,V,at[0].width,at[0].height,R.depth);for(let J=0,wt=at.length;J<wt;J++)if(q=at[J],T.format!==ii)if(F!==null)if(ot){if(N)if(T.layerUpdates.size>0){let Et=Mh(q.width,q.height,T.format,T.type);for(let xt of T.layerUpdates){let Ft=q.data.subarray(xt*Et/q.data.BYTES_PER_ELEMENT,(xt+1)*Et/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,xt,q.width,q.height,1,F,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,q.width,q.height,R.depth,F,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,V,q.width,q.height,R.depth,0,q.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,q.width,q.height,R.depth,F,L,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,V,q.width,q.height,R.depth,0,F,L,q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ot&&At&&e.texStorage2D(i.TEXTURE_2D,st,V,at[0].width,at[0].height);for(let J=0,wt=at.length;J<wt;J++)q=at[J],T.format!==ii?F!==null?ot?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,q.width,q.height,F,q.data):e.compressedTexImage2D(i.TEXTURE_2D,J,V,q.width,q.height,0,q.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,q.width,q.height,F,L,q.data):e.texImage2D(i.TEXTURE_2D,J,V,q.width,q.height,0,F,L,q.data)}else if(T.isDataArrayTexture)if(ot){if(At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,V,R.width,R.height,R.depth),N)if(T.layerUpdates.size>0){let J=Mh(R.width,R.height,T.format,T.type);for(let wt of T.layerUpdates){let Et=R.data.subarray(wt*J/R.data.BYTES_PER_ELEMENT,(wt+1)*J/R.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,R.width,R.height,1,F,L,Et)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,R.width,R.height,R.depth,F,L,R.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,V,R.width,R.height,R.depth,0,F,L,R.data);else if(T.isData3DTexture)ot?(At&&e.texStorage3D(i.TEXTURE_3D,st,V,R.width,R.height,R.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,R.width,R.height,R.depth,F,L,R.data)):e.texImage3D(i.TEXTURE_3D,0,V,R.width,R.height,R.depth,0,F,L,R.data);else if(T.isFramebufferTexture){if(At)if(ot)e.texStorage2D(i.TEXTURE_2D,st,V,R.width,R.height);else{let J=R.width,wt=R.height;for(let Et=0;Et<st;Et++)e.texImage2D(i.TEXTURE_2D,Et,V,J,wt,0,F,L,null),J>>=1,wt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),R.parentNode!==J){J.appendChild(R),h.add(T),J.onpaint=wt=>{let Et=wt.changedElements;for(let xt of h)Et.includes(xt.image)&&(xt.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,R);else{let Et=i.RGBA,xt=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,xt,Ft,R)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(at.length>0){if(ot&&At){let J=Vt(at[0]);e.texStorage2D(i.TEXTURE_2D,st,V,J.width,J.height)}for(let J=0,wt=at.length;J<wt;J++)q=at[J],ot?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,F,L,q):e.texImage2D(i.TEXTURE_2D,J,V,F,L,q);T.generateMipmaps=!1}else if(ot){if(At){let J=Vt(R);e.texStorage2D(i.TEXTURE_2D,st,V,J.width,J.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,F,L,R)}else e.texImage2D(i.TEXTURE_2D,0,V,F,L,R);m(T)&&x(ut),w.__version=z.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function mt(B,T,tt){if(T.image.length!==6)return;let ut=X(B,T),gt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+tt);let z=n.get(gt);if(gt.version!==z.__version||ut===!0){e.activeTexture(i.TEXTURE0+tt);let w=ve.getPrimaries(ve.workingColorSpace),E=T.colorSpace===Wi?null:ve.getPrimaries(T.colorSpace),R=T.colorSpace===Wi||w===E?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);let F=T.isCompressedTexture||T.image[0].isCompressedTexture,L=T.image[0]&&T.image[0].isDataTexture,V=[];for(let xt=0;xt<6;xt++)!F&&!L?V[xt]=p(T.image[xt],!0,s.maxCubemapSize):V[xt]=L?T.image[xt].image:T.image[xt],V[xt]=oe(T,V[xt]);let q=V[0],at=r.convert(T.format,T.colorSpace),ot=r.convert(T.type),At=v(T.internalFormat,at,ot,T.normalized,T.colorSpace),N=T.isVideoTexture!==!0,st=z.__version===void 0||ut===!0,J=gt.dataReady,wt=S(T,q);Tt(i.TEXTURE_CUBE_MAP,T);let Et;if(F){N&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,At,q.width,q.height);for(let xt=0;xt<6;xt++){Et=V[xt].mipmaps;for(let Ft=0;Ft<Et.length;Ft++){let ht=Et[Ft];T.format!==ii?at!==null?N?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,0,0,ht.width,ht.height,at,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,At,ht.width,ht.height,0,ht.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,0,0,ht.width,ht.height,at,ot,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,At,ht.width,ht.height,0,at,ot,ht.data)}}}else{if(Et=T.mipmaps,N&&st){Et.length>0&&wt++;let xt=Vt(V[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,At,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(L){N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,V[xt].width,V[xt].height,at,ot,V[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,At,V[xt].width,V[xt].height,0,at,ot,V[xt].data);for(let Ft=0;Ft<Et.length;Ft++){let It=Et[Ft].image[xt].image;N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,0,0,It.width,It.height,at,ot,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,At,It.width,It.height,0,at,ot,It.data)}}else{N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,at,ot,V[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,At,at,ot,V[xt]);for(let Ft=0;Ft<Et.length;Ft++){let ht=Et[Ft];N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,0,0,at,ot,ht.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,At,at,ot,ht.image[xt])}}}m(T)&&x(i.TEXTURE_CUBE_MAP),z.__version=gt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function pt(B,T,tt,ut,gt,z){let w=r.convert(tt.format,tt.colorSpace),E=r.convert(tt.type),R=v(tt.internalFormat,w,E,tt.normalized,tt.colorSpace),F=n.get(T),L=n.get(tt);if(L.__renderTarget=T,!F.__hasExternalTextures){let V=Math.max(1,T.width>>z),q=Math.max(1,T.height>>z);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,z,R,V,q,T.depth,0,w,E,null):e.texImage2D(gt,z,R,V,q,0,w,E,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),Gt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,gt,L.__webglTexture,0,$t(T)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,gt,L.__webglTexture,z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(B,T,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,B),T.depthBuffer){let ut=T.depthTexture,gt=ut&&ut.isDepthTexture?ut.type:null,z=b(T.stencilBuffer,gt),w=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(T),z,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(T),z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,w,i.RENDERBUFFER,B)}else{let ut=T.textures;for(let gt=0;gt<ut.length;gt++){let z=ut[gt],w=r.convert(z.format,z.colorSpace),E=r.convert(z.type),R=v(z.internalFormat,w,E,z.normalized,z.colorSpace);Gt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(T),R,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(T),R,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,R,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(B,T,tt){let ut=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let gt=n.get(T.depthTexture);if(gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),gt.__webglTexture===void 0){gt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,T.depthTexture);let F=r.convert(T.depthTexture.format),L=r.convert(T.depthTexture.type),V;T.depthTexture.format===Si?V=i.DEPTH_COMPONENT24:T.depthTexture.format===_s&&(V=i.DEPTH24_STENCIL8);for(let q=0;q<6;q++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,V,T.width,T.height,0,F,L,null)}}else ct(T.depthTexture,0);let z=gt.__webglTexture,w=$t(T),E=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,R=T.depthTexture.format===_s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Si)Gt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,E,z,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,R,E,z,0);else if(T.depthTexture.format===_s)Gt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,E,z,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,R,E,z,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(B){let T=n.get(B),tt=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){let ut=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){let gt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",gt)};ut.addEventListener("dispose",gt),T.__depthDisposeCallback=gt}T.__boundDepthTexture=ut}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(tt)for(let ut=0;ut<6;ut++)Mt(T.__webglFramebuffer[ut],B,ut);else{let ut=B.texture.mipmaps;ut&&ut.length>0?Mt(T.__webglFramebuffer[0],B,0):Mt(T.__webglFramebuffer,B,0)}else if(tt){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=i.createRenderbuffer(),bt(T.__webglDepthbuffer[ut],B,!1);else{let gt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,z)}}else{let ut=B.texture.mipmaps;if(ut&&ut.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),bt(T.__webglDepthbuffer,B,!1);else{let gt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(B,T,tt){let ut=n.get(B);T!==void 0&&pt(ut.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&lt(B)}function vt(B){let T=B.texture,tt=n.get(B),ut=n.get(T);B.addEventListener("dispose",_);let gt=B.textures,z=B.isWebGLCubeRenderTarget===!0,w=gt.length>1;if(w||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=T.version,o.memory.textures++),z){tt.__webglFramebuffer=[];for(let E=0;E<6;E++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[E]=[];for(let R=0;R<T.mipmaps.length;R++)tt.__webglFramebuffer[E][R]=i.createFramebuffer()}else tt.__webglFramebuffer[E]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let E=0;E<T.mipmaps.length;E++)tt.__webglFramebuffer[E]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(w)for(let E=0,R=gt.length;E<R;E++){let F=n.get(gt[E]);F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&Gt(B)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let E=0;E<gt.length;E++){let R=gt[E];tt.__webglColorRenderbuffer[E]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[E]);let F=r.convert(R.format,R.colorSpace),L=r.convert(R.type),V=v(R.internalFormat,F,L,R.normalized,R.colorSpace,B.isXRRenderTarget===!0),q=$t(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,V,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+E,i.RENDERBUFFER,tt.__webglColorRenderbuffer[E])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(tt.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,T);for(let E=0;E<6;E++)if(T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)pt(tt.__webglFramebuffer[E][R],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+E,R);else pt(tt.__webglFramebuffer[E],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+E,0);m(T)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(w){for(let E=0,R=gt.length;E<R;E++){let F=gt[E],L=n.get(F),V=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(V=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,L.__webglTexture),Tt(V,F),pt(tt.__webglFramebuffer,B,F,i.COLOR_ATTACHMENT0+E,V,0),m(F)&&x(V)}e.unbindTexture()}else{let E=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(E=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(E,ut.__webglTexture),Tt(E,T),T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)pt(tt.__webglFramebuffer[R],B,T,i.COLOR_ATTACHMENT0,E,R);else pt(tt.__webglFramebuffer,B,T,i.COLOR_ATTACHMENT0,E,0);m(T)&&x(E),e.unbindTexture()}B.depthBuffer&&lt(B)}function St(B){let T=B.textures;for(let tt=0,ut=T.length;tt<ut;tt++){let gt=T[tt];if(m(gt)){let z=M(B),w=n.get(gt).__webglTexture;e.bindTexture(z,w),x(z),e.unbindTexture()}}}let Nt=[],Ot=[];function Bt(B){if(B.samples>0){if(Gt(B)===!1){let T=B.textures,tt=B.width,ut=B.height,gt=i.COLOR_BUFFER_BIT,z=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,w=n.get(B),E=T.length>1;if(E)for(let F=0;F<T.length;F++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer);let R=B.texture.mipmaps;R&&R.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let F=0;F<T.length;F++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),E){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,w.__webglColorRenderbuffer[F]);let L=n.get(T[F]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,gt,i.NEAREST),c===!0&&(Nt.length=0,Ot.length=0,Nt.push(i.COLOR_ATTACHMENT0+F),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Nt.push(z),Ot.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),E)for(let F=0;F<T.length;F++){e.bindFramebuffer(i.FRAMEBUFFER,w.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,w.__webglColorRenderbuffer[F]);let L=n.get(T[F]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&c){let T=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function $t(B){return Math.min(s.maxSamples,B.samples)}function Gt(B){let T=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function j(B){let T=o.render.frame;u.get(B)!==T&&(u.set(B,T),B.update())}function oe(B,T){let tt=B.colorSpace,ut=B.format,gt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||tt!==mo&&tt!==Wi&&(ve.getTransfer(tt)===Ce?(ut!==ii||gt!==Hn)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",tt)),T}function Vt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.getTextureUnits=O,this.setTextureUnits=Y,this.setTexture2D=ct,this.setTexture2DArray=nt,this.setTexture3D=it,this.setTextureCube=et,this.rebindTextures=_t,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function G1(i,t){function e(n,s=Wi){let r,o=ve.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lh)return i.BYTE;if(n===uh)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===ph)return i.RGB;if(n===ii)return i.RGBA;if(n===Si)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Wc)return i.RED;if(n===Xc)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===qc)return i.RGBA_INTEGER;if(n===$o||n===jo||n===Jo||n===Ko)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zc||n===$c||n===jc||n===Jc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kc||n===Qc||n===tl||n===el||n===nl||n===Qo||n===il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kc||n===Qc)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===el)return r.COMPRESSED_R11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qo)return r.COMPRESSED_RG11_EAC;if(n===il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===gl||n===yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xl||n===_l||n===vl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xl)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===Ml||n===ta||n===Sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var V1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W1=`
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

}`,Fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ao(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:V1,fragmentShader:W1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends wi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new Fh,m={},x=e.getContextAttributes(),M=null,v=null,b=[],S=[],A=new Dt,_=null,C=null,D=new Pn;D.viewport=new Ie;let I=new Pn;I.viewport=new Ie;let U=[D,I],k=new Fc,O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=b[H];return $===void 0&&($=new wr,b[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=b[H];return $===void 0&&($=new wr,b[H]=$),$.getGripSpace()},this.getHand=function(H){let $=b[H];return $===void 0&&($=new wr,b[H]=$),$.getHandSpace()};function W(H){let $=S.indexOf(H.inputSource);if($===-1)return;let rt=b[$];rt!==void 0&&(rt.update(H.inputSource,H.frame,l||o),rt.dispatchEvent({type:H.type,data:H.inputSource}))}function Z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ct);for(let H=0;H<b.length;H++){let $=S[H];$!==null&&(S[H]=null,b[H].disconnect($))}O=null,Y=null,p.reset();for(let H in m)delete m[H];if(t.setRenderTarget(M),d=null,f=null,h=null,s=null,v=null,X.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),C!==null){let H=C.camera;H.fov=C.fov,H.zoom=C.zoom,H.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ct),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,mt=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?_s:Si,mt=x.stencil?Or:di);let bt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new kn(f.textureWidth,f.textureHeight,{format:ii,type:Hn,depthTexture:new as(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new kn(d.framebufferWidth,d.framebufferHeight,{format:ii,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ct(H){for(let $=0;$<H.removed.length;$++){let rt=H.removed[$],mt=S.indexOf(rt);mt>=0&&(S[mt]=null,b[mt].disconnect(rt))}for(let $=0;$<H.added.length;$++){let rt=H.added[$],mt=S.indexOf(rt);if(mt===-1){for(let bt=0;bt<b.length;bt++)if(bt>=S.length){S.push(rt),mt=bt;break}else if(S[bt]===null){S[bt]=rt,mt=bt;break}if(mt===-1)break}let pt=b[mt];pt&&pt.connect(rt)}}let nt=new G,it=new G;function et(H,$,rt){nt.setFromMatrixPosition($.matrixWorld),it.setFromMatrixPosition(rt.matrixWorld);let mt=nt.distanceTo(it),pt=$.projectionMatrix.elements,bt=rt.projectionMatrix.elements,Mt=pt[14]/(pt[10]-1),lt=pt[14]/(pt[10]+1),_t=(pt[9]+1)/pt[5],vt=(pt[9]-1)/pt[5],St=(pt[8]-1)/pt[0],Nt=(bt[8]+1)/bt[0],Ot=Mt*St,Bt=Mt*Nt,$t=mt/(-St+Nt),Gt=$t*-St;if($.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Gt),H.translateZ($t),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),pt[10]===-1)H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let j=Mt+$t,oe=lt+$t,Vt=Ot-Gt,B=Bt+(mt-Gt),T=_t*lt/oe*j,tt=vt*lt/oe*j;H.projectionMatrix.makePerspective(Vt,B,T,tt,j,oe),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Pt(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let $=H.near,rt=H.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(rt=p.depthFar)),k.near=I.near=D.near=$,k.far=I.far=D.far=rt,(O!==k.near||Y!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),O=k.near,Y=k.far),k.layers.mask=H.layers.mask|6,D.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;let mt=H.parent,pt=k.cameras;Pt(k,mt);for(let bt=0;bt<pt.length;bt++)Pt(pt[bt],mt);pt.length===2?et(k,D,I):k.projectionMatrix.copy(D.projectionMatrix),C===null&&H.isPerspectiveCamera&&(C={camera:H,fov:H.fov,zoom:H.zoom}),Ct(H,k,mt)};function Ct(H,$,rt){rt===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(rt.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=br*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(H){return m[H]};let Rt=null;function Tt(H,$){if(u=$.getViewerPose(l||o),g=$,u!==null){let rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let mt=!1;rt.length!==k.cameras.length&&(k.cameras.length=0,mt=!0);for(let lt=0;lt<rt.length;lt++){let _t=rt[lt],vt=null;if(d!==null)vt=d.getViewport(_t);else{let Nt=h.getViewSubImage(f,_t);vt=Nt.viewport,lt===0&&(t.setRenderTargetTextures(v,Nt.colorTexture,Nt.depthStencilTexture),t.setRenderTarget(v))}let St=U[lt];St===void 0&&(St=new Pn,St.layers.enable(lt),St.viewport=new Ie,U[lt]=St),St.matrix.fromArray(_t.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(_t.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(vt.x,vt.y,vt.width,vt.height),lt===0&&(k.matrix.copy(St.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),mt===!0&&k.cameras.push(St)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let lt=h.getDepthInformation(rt[0]);lt&&lt.isValid&&lt.texture&&p.init(lt,s.renderState)}if(pt&&pt.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let lt=0;lt<rt.length;lt++){let _t=rt[lt].camera;if(_t){let vt=m[_t];vt||(vt=new Ao,m[_t]=vt);let St=h.getCameraImage(_t);vt.sourceTexture=St}}}}for(let rt=0;rt<b.length;rt++){let mt=S[rt],pt=b[rt];mt!==null&&pt!==void 0&&pt.update(mt,$,l||o)}Rt&&Rt(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let X=new Ip;X.setAnimationLoop(Tt),this.setAnimationLoop=function(H){Rt=H},this.dispose=function(){}}},X1=new Me,Fp=new pe;Fp.set(-1,0,0,0,1,0,0,0,1);function Y1(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_h(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),M=x.envMap,v=x.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(X1.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Fp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let S=b.program;n.uniformBlockBinding(v,S)}function l(v,b){let S=s[v.id];S===void 0&&(p(v),S=u(v),s[v.id]=S,v.addEventListener("dispose",x));let A=b.program;n.updateUBOMapping(v,A);let _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function u(v){let b=h();v.__bindingPointIndex=b;let S=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,C=S.length;_<C;_++){let D=S[_];if(Array.isArray(D))for(let I=0,U=D.length;I<U;I++)d(D[I],_,I,A);else d(D,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,b,S,A){if(y(v,b,S,A)===!0){let _=v.__offset,C=v.value;if(Array.isArray(C)){let D=0;for(let I=0;I<C.length;I++){let U=C[I],k=m(U);g(U,v.__data,D),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(D+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,b,S){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,S)}function y(v,b,S,A){let _=v.value,C=b+"_"+S;if(A[C]===void 0)return typeof _=="number"||typeof _=="boolean"?A[C]=_:ArrayBuffer.isView(_)?A[C]=_.slice():A[C]=_.clone(),!0;{let D=A[C];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return A[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function p(v){let b=v.uniforms,S=0,A=16;for(let C=0,D=b.length;C<D;C++){let I=Array.isArray(b[C])?b[C]:[b[C]];for(let U=0,k=I.length;U<k;U++){let O=I[U],Y=Array.isArray(O.value)?O.value:[O.value];for(let W=0,Z=Y.length;W<Z;W++){let ct=Y[W],nt=m(ct),it=S%A,et=it%nt.boundary,Pt=it+et;S+=et,Pt!==0&&A-Pt<nt.storage&&(S+=A-Pt),O.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=nt.storage}}}let _=S%A;return _>0&&(S+=A-_),v.__size=S,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):re("WebGLRenderer: Unsupported uniform value type.",v),b}function x(v){let b=v.target;b.removeEventListener("dispose",x);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function M(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:M}}var Z1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function $1(){return Ai===null&&(Ai=new wo(Z1,16,16,vs,pi),Ai.name="DFG_LUT",Ai.minFilter=mn,Ai.magFilter=mn,Ai.wrapS=bi,Ai.wrapT=bi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var Il=class{constructor(t={}){let{canvas:e=Kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Hn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=d,p=new Set([qc,Yc,Xc]),m=new Set([Hn,di,Fr,Or,Gc,Vc]),x=new Uint32Array(4),M=new Int32Array(4),v=new G,b=null,S=null,A=[],_=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,I=!1,U=null,k=null,O=null,Y=null;this._outputColorSpace=en;let W=0,Z=0,ct=null,nt=-1,it=null,et=new Ie,Pt=new Ie,Ct=null,Rt=new Xt(0),Tt=0,X=e.width,H=e.height,$=1,rt=null,mt=null,pt=new Ie(0,0,X,H),bt=new Ie(0,0,X,H),Mt=!1,lt=new Tr,_t=!1,vt=!1,St=new Me,Nt=new G,Ot=new Ie,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function Gt(){return ct===null?$:1}let j=n;function oe(P,K){return e.getContext(P,K)}let Vt,B,T,tt,ut,gt,z,w,E,R,F,L,V,q,at,ot,At,N,st,J,wt,Et,xt;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Yt,!1),j===null){let K="webgl2";if(j=oe(K,P),j===null)throw oe(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(P){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Yt,!1),ae("WebGLRenderer: "+P.message),P}function Ft(){Vt=new nb(j),Vt.init(),wt=new G1(j,Vt),B=new Yv(j,Vt,t,wt),T=new z1(j,Vt),B.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),k=j.createFramebuffer(),O=j.createFramebuffer(),Y=j.createFramebuffer(),tt=new rb(j),ut=new T1,gt=new H1(j,Vt,T,ut,B,wt,tt),z=new eb(D),w=new ax(j),Et=new Wv(j,w),E=new ib(j,w,tt,Et),R=new ab(j,E,w,Et,tt),N=new ob(j,B,gt),at=new qv(ut),F=new E1(D,z,Vt,B,Et,at),L=new Y1(D,ut),V=new R1,q=new D1(Vt),At=new Vv(D,z,T,R,g,c),ot=new k1(D,R,B),xt=new q1(j,tt,B,T),st=new Xv(j,Vt,tt),J=new sb(j,Vt,tt),tt.programs=F.programs,D.capabilities=B,D.extensions=Vt,D.properties=ut,D.renderLists=V,D.shadowMap=ot,D.state=T,D.info=tt}y!==Hn&&(C=new lb(y,e.width,e.height,a,s,r));let ht=new Oh(D,j);this.xr=ht,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let P=Vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(P){P!==void 0&&($=P,this.setSize(X,H,!1))},this.getSize=function(P){return P.set(X,H)},this.setSize=function(P,K,yt=!0){if(ht.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,H=K,e.width=Math.floor(P*$),e.height=Math.floor(K*$),yt===!0&&(e.style.width=P+"px",e.style.height=K+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(X*$,H*$).floor()},this.setDrawingBufferSize=function(P,K,yt){X=P,H=K,$=yt,e.width=Math.floor(P*yt),e.height=Math.floor(K*yt),this.setViewport(0,0,P,K)},this.setEffects=function(P){if(y===Hn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let K=0;K<P.length;K++)if(P[K].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(et)},this.getViewport=function(P){return P.copy(pt)},this.setViewport=function(P,K,yt,dt){P.isVector4?pt.set(P.x,P.y,P.z,P.w):pt.set(P,K,yt,dt),T.viewport(et.copy(pt).multiplyScalar($).round())},this.getScissor=function(P){return P.copy(bt)},this.setScissor=function(P,K,yt,dt){P.isVector4?bt.set(P.x,P.y,P.z,P.w):bt.set(P,K,yt,dt),T.scissor(Pt.copy(bt).multiplyScalar($).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(P){T.setScissorTest(Mt=P)},this.setOpaqueSort=function(P){rt=P},this.setTransparentSort=function(P){mt=P},this.getClearColor=function(P){return P.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,yt=!0){let dt=0;if(P){let ft=!1;if(ct!==null){let zt=ct.texture.format;ft=p.has(zt)}if(ft){let zt=ct.texture.type,qt=m.has(zt),Wt=At.getClearColor(),Kt=At.getClearAlpha(),ne=Wt.r,ge=Wt.g,_e=Wt.b;qt?(x[0]=ne,x[1]=ge,x[2]=_e,x[3]=Kt,j.clearBufferuiv(j.COLOR,0,x)):(M[0]=ne,M[1]=ge,M[2]=_e,M[3]=Kt,j.clearBufferiv(j.COLOR,0,M))}else dt|=j.COLOR_BUFFER_BIT}K&&(dt|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),yt&&(dt|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),dt!==0&&j.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),U=P},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Yt,!1),At.dispose(),V.dispose(),q.dispose(),ut.dispose(),z.dispose(),R.dispose(),Et.dispose(),xt.dispose(),F.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Lt),ht.removeEventListener("sessionend",Ht),ie.stop()};function It(P){P.preventDefault(),xo("WebGLRenderer: Context Lost."),I=!0}function Ut(){xo("WebGLRenderer: Context Restored."),I=!1;let P=tt.autoReset,K=ot.enabled,yt=ot.autoUpdate,dt=ot.needsUpdate,ft=ot.type;Ft(),tt.autoReset=P,ot.enabled=K,ot.autoUpdate=yt,ot.needsUpdate=dt,ot.type=ft}function Yt(P){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function te(P){let K=P.target;K.removeEventListener("dispose",te),fe(K)}function fe(P){me(P),ut.remove(P)}function me(P){let K=ut.get(P).programs;K!==void 0&&(K.forEach(function(yt){F.releaseProgram(yt)}),P.isShaderMaterial&&F.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,yt,dt,ft,zt){K===null&&(K=Bt);let qt=ft.isMesh&&ft.matrixWorld.determinantAffine()<0,Wt=Fi(P,K,yt,dt,ft);T.setMaterial(dt,qt);let Kt=yt.index,ne=1;if(dt.wireframe===!0){if(Kt=E.getWireframeAttribute(yt),Kt===void 0)return;ne=2}let ge=yt.drawRange,_e=yt.attributes.position,Qt=ge.start*ne,Re=(ge.start+ge.count)*ne;zt!==null&&(Qt=Math.max(Qt,zt.start*ne),Re=Math.min(Re,(zt.start+zt.count)*ne)),Kt!==null?(Qt=Math.max(Qt,0),Re=Math.min(Re,Kt.count)):_e!=null&&(Qt=Math.max(Qt,0),Re=Math.min(Re,_e.count));let Qe=Re-Qt;if(Qe<0||Qe===1/0)return;Et.setup(ft,dt,Wt,yt,Kt);let ke,Ne=st;if(Kt!==null&&(ke=w.get(Kt),Ne=J,Ne.setIndex(ke)),ft.isMesh)dt.wireframe===!0?(T.setLineWidth(dt.wireframeLinewidth*Gt()),Ne.setMode(j.LINES)):Ne.setMode(j.TRIANGLES);else if(ft.isLine){let Mn=dt.linewidth;Mn===void 0&&(Mn=1),T.setLineWidth(Mn*Gt()),ft.isLineSegments?Ne.setMode(j.LINES):ft.isLineLoop?Ne.setMode(j.LINE_LOOP):Ne.setMode(j.LINE_STRIP)}else ft.isPoints?Ne.setMode(j.POINTS):ft.isSprite&&Ne.setMode(j.TRIANGLES);if(ft.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))Ne.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{let Mn=ft._multiDrawStarts,jt=ft._multiDrawCounts,Cn=ft._multiDrawCount,we=Kt?w.get(Kt).bytesPerElement:1,Kn=ut.get(dt).currentProgram.getUniforms();for(let _i=0;_i<Cn;_i++)Kn.setValue(j,"_gl_DrawID",_i),Ne.render(Mn[_i]/we,jt[_i])}else if(ft.isInstancedMesh)Ne.renderInstances(Qt,Qe,ft.count);else if(yt.isInstancedBufferGeometry){let Mn=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,jt=Math.min(yt.instanceCount,Mn);Ne.renderInstances(Qt,Qe,jt)}else Ne.render(Qt,Qe)};function Ue(P,K,yt,dt){U!==null&&P.isNodeMaterial&&U.setObject(dt,P),_t===!0&&at.setState(P,yt,!1),P.transparent===!0&&P.side===rn&&P.forceSinglePass===!1?(P.side=Nn,P.needsUpdate=!0,bn(P,K,dt),P.side=gs,P.needsUpdate=!0,bn(P,K,dt),P.side=rn):bn(P,K,dt)}this.compile=function(P,K,yt=null){yt===null&&(yt=P),U!==null&&U.renderStart(P,K,yt),S=q.get(yt),S.init(K),_.push(S),yt.traverseVisible(function(ft){ft.isLight&&ft.layers.test(K.layers)&&(S.pushLight(ft),ft.castShadow&&S.pushShadow(ft))}),P!==yt&&P.traverseVisible(function(ft){ft.isLight&&ft.layers.test(K.layers)&&(S.pushLight(ft),ft.castShadow&&S.pushShadow(ft))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),vt=this.localClippingEnabled,_t=at.init(this.clippingPlanes,vt),_t===!0&&at.setGlobalState(this.clippingPlanes,K),U!==null&&ot.render(S.state.shadowsArray,yt,K);let dt=new Set;return P.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;let zt=ft.material;if(zt)if(Array.isArray(zt))for(let qt=0;qt<zt.length;qt++){let Wt=zt[qt];Ue(Wt,yt,K,ft),dt.add(Wt)}else Ue(zt,yt,K,ft),dt.add(zt)}),S=_.pop(),U!==null&&U.renderEnd(),dt},this.compileAsync=function(P,K,yt=null){let dt=this.compile(P,K,yt);return new Promise(ft=>{function zt(){if(dt.forEach(function(qt){let Kt=ut.get(qt).currentProgram;(Kt===void 0||Kt.isReady())&&dt.delete(qt)}),dt.size===0){ft(P);return}setTimeout(zt,10)}Vt.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Ve=null;function Ze(P){Ve&&Ve(P)}function Lt(){ie.stop()}function Ht(){ie.start()}let ie=new Ip;ie.setAnimationLoop(Ze),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(P){Ve=P,ht.setAnimationLoop(P),P===null?ie.stop():ie.start()},ht.addEventListener("sessionstart",Lt),ht.addEventListener("sessionend",Ht),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(P,K);let yt=ht.enabled===!0&&ht.isPresenting===!0,dt=C!==null&&(ct===null||yt)&&C.begin(D,ct);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(K),K=ht.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,K,ct),S=q.get(P,_.length),S.init(K),S.state.textureUnits=gt.getTextureUnits(),_.push(S),St.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),lt.setFromProjectionMatrix(St,ui,K.reversedDepth),vt=this.localClippingEnabled,_t=at.init(this.clippingPlanes,vt),b=V.get(P,A.length),b.init(),A.push(b),ht.enabled===!0&&ht.isPresenting===!0){let qt=D.xr.getDepthSensingMesh();qt!==null&&ue(qt,K,-1/0,D.sortObjects)}ue(P,K,0,D.sortObjects),b.finish(),U!==null&&U.updateLights(S.state.lightsArray),D.sortObjects===!0&&b.sort(rt,mt),$t=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,$t&&At.addToRenderList(b,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&at.beginShadows();let ft=S.state.shadowsArray;if(ot.render(ft,P,K),_t===!0&&at.endShadows(),(dt&&C.hasRenderPass())===!1){let qt=b.opaque,Wt=b.transmissive;if(S.setupLights(),K.isArrayCamera){let Kt=K.cameras;if(Wt.length>0)for(let ne=0,ge=Kt.length;ne<ge;ne++){let _e=Kt[ne];Se(qt,Wt,P,_e)}$t&&At.render(P);for(let ne=0,ge=Kt.length;ne<ge;ne++){let _e=Kt[ne];be(b,P,_e,_e.viewport)}}else Wt.length>0&&Se(qt,Wt,P,K),$t&&At.render(P),be(b,P,K)}ct!==null&&Z===0&&(gt.updateMultisampleRenderTarget(ct),gt.updateRenderTargetMipmap(ct)),dt&&C.end(D),P.isScene===!0&&P.onAfterRender(D,P,K),Et.resetDefaultState(),nt=-1,it=null,_.pop(),_.length>0?(S=_[_.length-1],gt.setTextureUnits(S.state.textureUnits),_t===!0&&at.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,U!==null&&U.renderEnd()};function ue(P,K,yt,dt){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)yt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLightProbeGrid)S.pushLightProbeGrid(P);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(lt)){dt&&Ot.setFromMatrixPosition(P.matrixWorld).applyMatrix4(St);let qt=R.update(P),Wt=P.material;Wt.visible&&b.push(P,qt,Wt,yt,Ot.z,null,K)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(lt))){let qt=R.update(P),Wt=P.material;if(dt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ot.copy(P.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Ot.copy(qt.boundingSphere.center)),Ot.applyMatrix4(P.matrixWorld).applyMatrix4(St)),Array.isArray(Wt)){let Kt=qt.groups;for(let ne=0,ge=Kt.length;ne<ge;ne++){let _e=Kt[ne],Qt=Wt[_e.materialIndex];Qt&&Qt.visible&&b.push(P,qt,Qt,yt,Ot.z,_e,K)}}else Wt.visible&&b.push(P,qt,Wt,yt,Ot.z,null,K)}}let zt=P.children;for(let qt=0,Wt=zt.length;qt<Wt;qt++)ue(zt[qt],K,yt,dt)}function be(P,K,yt,dt){let{opaque:ft,transmissive:zt,transparent:qt}=P;S.setupLightsView(yt),_t===!0&&at.setGlobalState(D.clippingPlanes,yt),dt&&T.viewport(et.copy(dt)),ft.length>0&&nn(ft,K,yt),zt.length>0&&nn(zt,K,yt),qt.length>0&&nn(qt,K,yt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Se(P,K,yt,dt){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[dt.id]===void 0){let Qt=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[dt.id]=new kn(1,1,{generateMipmaps:!0,type:Qt?pi:Hn,minFilter:xs,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let zt=S.state.transmissionRenderTarget[dt.id],qt=dt.viewport||et;zt.setSize(qt.z*D.transmissionResolutionScale,qt.w*D.transmissionResolutionScale);let Wt=D.getRenderTarget(),Kt=D.getActiveCubeFace(),ne=D.getActiveMipmapLevel();D.setRenderTarget(zt),D.getClearColor(Rt),Tt=D.getClearAlpha(),Tt<1&&D.setClearColor(16777215,.5),D.clear(),$t&&At.render(yt);let ge=D.toneMapping;D.toneMapping=fi;let _e=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),S.setupLightsView(dt),_t===!0&&at.setGlobalState(D.clippingPlanes,dt),nn(P,yt,dt),gt.updateMultisampleRenderTarget(zt),gt.updateRenderTargetMipmap(zt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Re=0,Qe=K.length;Re<Qe;Re++){let ke=K[Re],{object:Ne,geometry:Mn,material:jt,group:Cn}=ke;if(jt.side===rn&&Ne.layers.test(dt.layers)){let we=jt.side;jt.side=Nn,jt.needsUpdate=!0,vn(Ne,yt,dt,Mn,jt,Cn),jt.side=we,jt.needsUpdate=!0,Qt=!0}}Qt===!0&&(gt.updateMultisampleRenderTarget(zt),gt.updateRenderTargetMipmap(zt))}D.setRenderTarget(Wt,Kt,ne),D.setClearColor(Rt,Tt),_e!==void 0&&(dt.viewport=_e),D.toneMapping=ge}function nn(P,K,yt){let dt=K.isScene===!0?K.overrideMaterial:null;for(let ft=0,zt=P.length;ft<zt;ft++){let qt=P[ft],{object:Wt,geometry:Kt,group:ne}=qt,ge=qt.material;ge.allowOverride===!0&&dt!==null&&(ge=dt),Wt.layers.test(yt.layers)&&vn(Wt,K,yt,Kt,ge,ne)}}function vn(P,K,yt,dt,ft,zt){U!==null&&ft.isNodeMaterial&&U.setObject(P,ft),P.onBeforeRender(D,K,yt,dt,ft,zt),P.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ft.onBeforeRender(D,K,yt,dt,P,zt),ft.transparent===!0&&ft.side===rn&&ft.forceSinglePass===!1?(ft.side=Nn,ft.needsUpdate=!0,D.renderBufferDirect(yt,K,dt,ft,P,zt),ft.side=gs,ft.needsUpdate=!0,D.renderBufferDirect(yt,K,dt,ft,P,zt),ft.side=rn):D.renderBufferDirect(yt,K,dt,ft,P,zt),P.onAfterRender(D,K,yt,dt,ft,zt)}function bn(P,K,yt){K.isScene!==!0&&(K=Bt);let dt=ut.get(P),ft=S.state.lights,zt=S.state.shadowsArray,qt=ft.state.version,Wt=F.getParameters(P,ft.state,zt,K,yt,S.state.lightProbeGridArray),Kt=F.getProgramCacheKey(Wt),ne=dt.programs;dt.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?K.environment:null,dt.fog=K.fog;let ge=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;dt.envMap=z.get(P.envMap||dt.environment,ge),dt.envMapRotation=dt.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,ne===void 0&&(P.addEventListener("dispose",te),ne=new Map,dt.programs=ne);let _e=ne.get(Kt);if(_e!==void 0){if(dt.currentProgram===_e&&dt.lightsStateVersion===qt)return As(P,Wt),_e}else Wt.uniforms=F.getUniforms(P),U!==null&&P.isNodeMaterial&&U.build(P,yt,Wt),P.onBeforeCompile(Wt,D),_e=F.acquireProgram(Wt,Kt),ne.set(Kt,_e),dt.uniforms=Wt.uniforms;let Qt=dt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qt.clippingPlanes=at.uniform),As(P,Wt),dt.needsLights=sn(P),dt.lightsStateVersion=qt,dt.needsLights&&(Qt.ambientLightColor.value=ft.state.ambient,Qt.lightProbe.value=ft.state.probe,Qt.sunLights.value=ft.state.sun,Qt.sunLightShadows.value=ft.state.sunShadow,Qt.directionalLights.value=ft.state.directional,Qt.directionalLightShadows.value=ft.state.directionalShadow,Qt.spotLights.value=ft.state.spot,Qt.spotLightShadows.value=ft.state.spotShadow,Qt.rectAreaLights.value=ft.state.rectArea,Qt.ltc_1.value=ft.state.rectAreaLTC1,Qt.ltc_2.value=ft.state.rectAreaLTC2,Qt.pointLights.value=ft.state.point,Qt.pointLightShadows.value=ft.state.pointShadow,Qt.hemisphereLights.value=ft.state.hemi,Qt.sunShadowMatrix.value=ft.state.sunShadowMatrix,Qt.sunShadowCascade.value=ft.state.sunShadowCascade,Qt.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,Qt.spotLightMatrix.value=ft.state.spotLightMatrix,Qt.spotLightMap.value=ft.state.spotLightMap,Qt.pointShadowMatrix.value=ft.state.pointShadowMatrix),dt.lightProbeGrid=S.state.lightProbeGridArray.length>0,dt.currentProgram=_e,dt.uniformsList=null,_e}function je(P){if(P.uniformsList===null){let K=P.currentProgram.getUniforms();P.uniformsList=zr.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function As(P,K){let yt=ut.get(P);yt.outputColorSpace=K.outputColorSpace,yt.batching=K.batching,yt.batchingColor=K.batchingColor,yt.instancing=K.instancing,yt.instancingColor=K.instancingColor,yt.instancingMorph=K.instancingMorph,yt.skinning=K.skinning,yt.morphTargets=K.morphTargets,yt.morphNormals=K.morphNormals,yt.morphColors=K.morphColors,yt.morphTargetsCount=K.morphTargetsCount,yt.numClippingPlanes=K.numClippingPlanes,yt.numIntersection=K.numClipIntersection,yt.vertexAlphas=K.vertexAlphas,yt.vertexTangents=K.vertexTangents,yt.toneMapping=K.toneMapping}function ji(P,K){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;v.setFromMatrixPosition(K.matrixWorld);for(let yt=0,dt=P.length;yt<dt;yt++){let ft=P[yt];if(ft.texture!==null&&ft.boundingBox.containsPoint(v))return ft}return null}function Fi(P,K,yt,dt,ft){K.isScene!==!0&&(K=Bt),gt.resetTextureUnits();let zt=K.fog,qt=dt.isMeshStandardMaterial||dt.isMeshLambertMaterial||dt.isMeshPhongMaterial?K.environment:null,Wt=ct===null?D.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ve.workingColorSpace,Kt=dt.isMeshStandardMaterial||dt.isMeshLambertMaterial&&!dt.envMap||dt.isMeshPhongMaterial&&!dt.envMap,ne=z.get(dt.envMap||qt,Kt),ge=dt.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,_e=!!yt.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),Qt=!!yt.morphAttributes.position,Re=!!yt.morphAttributes.normal,Qe=!!yt.morphAttributes.color,ke=fi;dt.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ke=D.toneMapping);let Ne=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,Mn=Ne!==void 0?Ne.length:0,jt=ut.get(dt),Cn=S.state.lights;if(_t===!0&&(vt===!0||P!==it)){let Fe=P===it&&dt.id===nt;at.setState(dt,P,Fe)}let we=!1;dt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Cn.state.version||jt.outputColorSpace!==Wt||ft.isBatchedMesh&&jt.batching===!1||!ft.isBatchedMesh&&jt.batching===!0||ft.isBatchedMesh&&jt.batchingColor===!0&&ft._colorsTexture===null||ft.isBatchedMesh&&jt.batchingColor===!1&&ft._colorsTexture!==null||ft.isInstancedMesh&&jt.instancing===!1||!ft.isInstancedMesh&&jt.instancing===!0||ft.isSkinnedMesh&&jt.skinning===!1||!ft.isSkinnedMesh&&jt.skinning===!0||ft.isInstancedMesh&&jt.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&jt.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&jt.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&jt.instancingMorph===!1&&ft.morphTexture!==null||jt.envMap!==ne||dt.fog===!0&&jt.fog!==zt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==at.numPlanes||jt.numIntersection!==at.numIntersection)||jt.vertexAlphas!==ge||jt.vertexTangents!==_e||jt.morphTargets!==Qt||jt.morphNormals!==Re||jt.morphColors!==Qe||jt.toneMapping!==ke||jt.morphTargetsCount!==Mn||!!jt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,jt.__version=dt.version);let Kn=jt.currentProgram;we===!0&&(Kn=bn(dt,K,ft),U&&dt.isNodeMaterial&&U.onUpdateProgram(dt,Kn,jt));let _i=!1,Ji=!1,Qs=!1,Le=Kn.getUniforms(),Ke=jt.uniforms;if(T.useProgram(Kn.program)&&(_i=!0,Ji=!0,Qs=!0),dt.id!==nt&&(nt=dt.id,Ji=!0),jt.needsLights){let Fe=ji(S.state.lightProbeGridArray,ft);jt.lightProbeGrid!==Fe&&(jt.lightProbeGrid=Fe,Ji=!0)}if(_i||it!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Le.setValue(j,"projectionMatrix",P.projectionMatrix),Le.setValue(j,"viewMatrix",P.matrixWorldInverse);let Qi=Le.map.cameraPosition;Qi!==void 0&&Qi.setValue(j,Nt.setFromMatrixPosition(P.matrixWorld)),B.logarithmicDepthBuffer&&Le.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Le.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),it!==P&&(it=P,Ji=!0,Qs=!0)}if(jt.needsLights&&(Cn.state.sunShadowMap.length>0&&Le.setValue(j,"sunShadowMap",Cn.state.sunShadowMap,gt),Cn.state.directionalShadowMap.length>0&&Le.setValue(j,"directionalShadowMap",Cn.state.directionalShadowMap,gt),Cn.state.spotShadowMap.length>0&&Le.setValue(j,"spotShadowMap",Cn.state.spotShadowMap,gt),Cn.state.pointShadowMap.length>0&&Le.setValue(j,"pointShadowMap",Cn.state.pointShadowMap,gt)),ft.isSkinnedMesh){Le.setOptional(j,ft,"bindMatrix"),Le.setOptional(j,ft,"bindMatrixInverse");let Fe=ft.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Le.setValue(j,"boneTexture",Fe.boneTexture,gt))}ft.isBatchedMesh&&(Le.setOptional(j,ft,"batchingTexture"),Le.setValue(j,"batchingTexture",ft._matricesTexture,gt),Le.setOptional(j,ft,"batchingIdTexture"),Le.setValue(j,"batchingIdTexture",ft._indirectTexture,gt),Le.setOptional(j,ft,"batchingColorTexture"),ft._colorsTexture!==null&&Le.setValue(j,"batchingColorTexture",ft._colorsTexture,gt));let Ki=yt.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&N.update(ft,yt,Kn),(Ji||jt.receiveShadow!==ft.receiveShadow)&&(jt.receiveShadow=ft.receiveShadow,Le.setValue(j,"receiveShadow",ft.receiveShadow)),(dt.isMeshStandardMaterial||dt.isMeshLambertMaterial||dt.isMeshPhongMaterial)&&dt.envMap===null&&K.environment!==null&&(Ke.envMapIntensity.value=K.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=$1()),Ji){if(Le.setValue(j,"toneMappingExposure",D.toneMappingExposure),jt.needsLights&&Je(Ke,Qs),zt&&dt.fog===!0&&L.refreshFogUniforms(Ke,zt),L.refreshMaterialUniforms(Ke,dt,$,H,S.state.transmissionRenderTarget[P.id]),jt.needsLights&&jt.lightProbeGrid){let Fe=jt.lightProbeGrid;Ke.probesSH.value=Fe.texture,Ke.probesMin.value.copy(Fe.boundingBox.min),Ke.probesMax.value.copy(Fe.boundingBox.max),Ke.probesResolution.value.copy(Fe.resolution)}zr.upload(j,je(jt),Ke,gt)}if(dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(zr.upload(j,je(jt),Ke,gt),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Le.setValue(j,"center",ft.center),Le.setValue(j,"modelViewMatrix",ft.modelViewMatrix),Le.setValue(j,"normalMatrix",ft.normalMatrix),Le.setValue(j,"modelMatrix",ft.matrixWorld),dt.uniformsGroups!==void 0){let Fe=dt.uniformsGroups;for(let Qi=0,tr=Fe.length;Qi<tr;Qi++){let Pf=Fe[Qi];xt.update(Pf,Kn),xt.bind(Pf,Kn)}}return Kn}function Je(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.sunLights.needsUpdate=K,P.sunLightShadows.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function sn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(P,K,yt){let dt=ut.get(P);dt.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),ut.get(P.texture).__webglTexture=K,ut.get(P.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:yt,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){let yt=ut.get(P);yt.__webglFramebuffer=K,yt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,yt=0){ct=P,W=K,Z=yt;let dt=null,ft=!1,zt=!1;if(P){let Wt=ut.get(P);if(Wt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(j.FRAMEBUFFER,Wt.__webglFramebuffer),et.copy(P.viewport),Pt.copy(P.scissor),Ct=P.scissorTest,T.viewport(et),T.scissor(Pt),T.setScissorTest(Ct),nt=-1;return}else if(Wt.__webglFramebuffer===void 0)gt.setupRenderTarget(P);else if(Wt.__hasExternalTextures)gt.rebindTextures(P,ut.get(P.texture).__webglTexture,ut.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let ge=P.depthTexture;if(Wt.__boundDepthTexture!==ge){if(ge!==null&&ut.has(ge)&&(P.width!==ge.image.width||P.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(P)}}let Kt=P.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(zt=!0);let ne=ut.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ne[K])?dt=ne[K][yt]:dt=ne[K],ft=!0):P.samples>0&&gt.useMultisampledRTT(P)===!1?dt=ut.get(P).__webglMultisampledFramebuffer:Array.isArray(ne)?dt=ne[yt]:dt=ne,et.copy(P.viewport),Pt.copy(P.scissor),Ct=P.scissorTest}else et.copy(pt).multiplyScalar($).floor(),Pt.copy(bt).multiplyScalar($).floor(),Ct=Mt;if(yt!==0&&(dt=k),T.bindFramebuffer(j.FRAMEBUFFER,dt)&&T.drawBuffers(P,dt),T.viewport(et),T.scissor(Pt),T.setScissorTest(Ct),ft){let Wt=ut.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+K,Wt.__webglTexture,yt)}else if(zt){let Wt=K;for(let Kt=0;Kt<P.textures.length;Kt++){let ne=ut.get(P.textures[Kt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Kt,ne.__webglTexture,yt,Wt)}}else if(P!==null&&yt!==0){let Wt=ut.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Wt.__webglTexture,yt)}nt=-1};function On(P){let K=ut.get(P);return(K.__readFormat!==P.format||K.__readType!==P.type)&&(K.__readFormat=P.format,K.__readType=P.type,K.__formatReadable=B.textureFormatReadable(P.format),K.__typeReadable=B.textureTypeReadable(P.type)),K}this.readRenderTargetPixels=function(P,K,yt,dt,ft,zt,qt,Wt=0){if(!(P&&P.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){T.bindFramebuffer(j.FRAMEBUFFER,Kt);try{let ne=P.textures[Wt],ge=ne.format,_e=ne.type;P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Wt);let Qt=On(ne);if(Qt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-dt&&yt>=0&&yt<=P.height-ft&&j.readPixels(K,yt,dt,ft,wt.convert(ge),wt.convert(_e),zt)}finally{let ne=ct!==null?ut.get(ct).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(P,K,yt,dt,ft,zt,qt,Wt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt)if(K>=0&&K<=P.width-dt&&yt>=0&&yt<=P.height-ft){T.bindFramebuffer(j.FRAMEBUFFER,Kt);let ne=P.textures[Wt],ge=ne.format,_e=ne.type;P.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Wt);let Qt=On(ne);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Re),j.bufferData(j.PIXEL_PACK_BUFFER,zt.byteLength,j.STREAM_READ),j.readPixels(K,yt,dt,ft,wt.convert(ge),wt.convert(_e),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let Qe=ct!==null?ut.get(ct).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,Qe);let ke=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await tp(j,ke,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Re),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,zt),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Re),j.deleteSync(ke),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,yt=0){let dt=Math.pow(2,-yt),ft=Math.floor(P.image.width*dt),zt=Math.floor(P.image.height*dt),qt=K!==null?K.x:0,Wt=K!==null?K.y:0;gt.setTexture2D(P,0),j.copyTexSubImage2D(j.TEXTURE_2D,yt,0,0,qt,Wt,ft,zt),T.unbindTexture()},this.copyTextureToTexture=function(P,K,yt=null,dt=null,ft=0,zt=0){let qt,Wt,Kt,ne,ge,_e,Qt,Re,Qe,ke=P.isCompressedTexture?P.mipmaps[zt]:P.image;if(yt!==null)qt=yt.max.x-yt.min.x,Wt=yt.max.y-yt.min.y,Kt=yt.isBox3?yt.max.z-yt.min.z:1,ne=yt.min.x,ge=yt.min.y,_e=yt.isBox3?yt.min.z:0;else{let Ke=Math.pow(2,-ft);qt=Math.floor(ke.width*Ke),Wt=Math.floor(ke.height*Ke),P.isDataArrayTexture?Kt=ke.depth:P.isData3DTexture?Kt=Math.floor(ke.depth*Ke):Kt=1,ne=0,ge=0,_e=0}dt!==null?(Qt=dt.x,Re=dt.y,Qe=dt.z):(Qt=0,Re=0,Qe=0);let Ne=wt.convert(K.format),Mn=wt.convert(K.type),jt;K.isData3DTexture?(gt.setTexture3D(K,0),jt=j.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(gt.setTexture2DArray(K,0),jt=j.TEXTURE_2D_ARRAY):(gt.setTexture2D(K,0),jt=j.TEXTURE_2D),T.activeTexture(j.TEXTURE0),T.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),T.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),T.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment);let Cn=T.getParameter(j.UNPACK_ROW_LENGTH),we=T.getParameter(j.UNPACK_IMAGE_HEIGHT),Kn=T.getParameter(j.UNPACK_SKIP_PIXELS),_i=T.getParameter(j.UNPACK_SKIP_ROWS),Ji=T.getParameter(j.UNPACK_SKIP_IMAGES);T.pixelStorei(j.UNPACK_ROW_LENGTH,ke.width),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ke.height),T.pixelStorei(j.UNPACK_SKIP_PIXELS,ne),T.pixelStorei(j.UNPACK_SKIP_ROWS,ge),T.pixelStorei(j.UNPACK_SKIP_IMAGES,_e);let Qs=P.isDataArrayTexture||P.isData3DTexture,Le=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){let Ke=ut.get(P),Ki=ut.get(K),Fe=ut.get(Ke.__renderTarget),Qi=ut.get(Ki.__renderTarget);T.bindFramebuffer(j.READ_FRAMEBUFFER,Fe.__webglFramebuffer),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let tr=0;tr<Kt;tr++)Qs&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ut.get(P).__webglTexture,ft,_e+tr),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ut.get(K).__webglTexture,zt,Qe+tr)),j.blitFramebuffer(ne,ge,qt,Wt,Qt,Re,qt,Wt,j.DEPTH_BUFFER_BIT,j.NEAREST);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ft!==0||P.isRenderTargetTexture||ut.has(P)){let Ke=ut.get(P),Ki=ut.get(K);T.bindFramebuffer(j.READ_FRAMEBUFFER,O),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,Y);for(let Fe=0;Fe<Kt;Fe++)Qs?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ke.__webglTexture,ft,_e+Fe):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ke.__webglTexture,ft),Le?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ki.__webglTexture,zt,Qe+Fe):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ki.__webglTexture,zt),ft!==0?j.blitFramebuffer(ne,ge,qt,Wt,Qt,Re,qt,Wt,j.COLOR_BUFFER_BIT,j.NEAREST):Le?j.copyTexSubImage3D(jt,zt,Qt,Re,Qe+Fe,ne,ge,qt,Wt):j.copyTexSubImage2D(jt,zt,Qt,Re,ne,ge,qt,Wt);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Le?P.isDataTexture||P.isData3DTexture?j.texSubImage3D(jt,zt,Qt,Re,Qe,qt,Wt,Kt,Ne,Mn,ke.data):K.isCompressedArrayTexture?j.compressedTexSubImage3D(jt,zt,Qt,Re,Qe,qt,Wt,Kt,Ne,ke.data):j.texSubImage3D(jt,zt,Qt,Re,Qe,qt,Wt,Kt,Ne,Mn,ke):P.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,zt,Qt,Re,qt,Wt,Ne,Mn,ke.data):P.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,zt,Qt,Re,ke.width,ke.height,Ne,ke.data):j.texSubImage2D(j.TEXTURE_2D,zt,Qt,Re,qt,Wt,Ne,Mn,ke);T.pixelStorei(j.UNPACK_ROW_LENGTH,Cn),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,we),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Kn),T.pixelStorei(j.UNPACK_SKIP_ROWS,_i),T.pixelStorei(j.UNPACK_SKIP_IMAGES,Ji),zt===0&&K.generateMipmaps&&j.generateMipmap(jt),T.unbindTexture()},this.initRenderTarget=function(P){ut.get(P).__webglFramebuffer===void 0&&gt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?gt.setTextureCube(P,0):P.isData3DTexture?gt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?gt.setTexture2DArray(P,0):gt.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){W=0,Z=0,ct=null,T.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};(function(i){"use strict";let t=Object.freeze([Object.freeze({key:"sky",label:"Sky strip"}),Object.freeze({key:"precipitation",label:"Rain, snow and hail"}),Object.freeze({key:"wind",label:"Wind effects"}),Object.freeze({key:"reflections",label:"Sun, moon and cloud reflections"}),Object.freeze({key:"trees",label:"Trees and palms"}),Object.freeze({key:"traffic",label:"Road traffic"}),Object.freeze({key:"sidewalk",label:"Walkers and cyclists"}),Object.freeze({key:"boats",label:"Boats"}),Object.freeze({key:"beachPlay",label:"Beach play"})]),e=new Set(t.map(({key:u})=>u)),n=new Set(["left","center","right"]),s=(u,h)=>u==="dockAlignment"?n.has(h):e.has(u)&&typeof h=="boolean",r=u=>n.has(u?.dockAlignment)?u.dockAlignment:"right";function o(u){return u===void 0||!!(u&&typeof u=="object"&&!Array.isArray(u)&&Object.entries(u).every(([h,f])=>s(h,f)))}function a(u,h){return u?.[h]!==!1}function c(u,h,f){if(!s(h,f)||f===(h==="dockAlignment"?r(u):a(u,h)))return u;let d={...u};return f===(h==="dockAlignment"?"right":!0)?delete d[h]:d[h]=f,Object.keys(d).length?d:void 0}function l(u,h){return a(h,"wind")?u:{...u,windSpeed:0,windBearing:void 0}}i.RoomcraftSceneSettings=Object.freeze({features:t,valid:o,enabled:a,withFeature:c,wind:l,dockAlignment:r})})(typeof window>"u"?globalThis:window);var ra=(typeof window>"u"?globalThis:window).RoomcraftSceneSettings,Op=ra.features,Y3=ra.valid,mi=ra.enabled,Nl=ra.wind,Bp=ra.dockAlignment;function Gn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new he,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=kp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let g=kp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function kp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Ee(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let y=u.getComponent(f,g);a.setComponent(f+h,g,y)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var oa=new G;function si(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;oa.copy(t),oa[n]=0,oa.normalize();let l=.5*o/(o+a),u=1-oa.angleTo(i)/c;return Math.sign(oa[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Dl=class i extends Te{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new G,l=new G,u=new G(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,y=new G,p=.5/o;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(c.fromArray(h,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),h[m+0]=u.x*Math.sign(c.x)+l.x*r,h[m+1]=u.y*Math.sign(c.y)+l.y*r,h[m+2]=u.z*Math.sign(c.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/g)){case 0:y.set(1,0,0),d[x+0]=si(y,l,"z","y",r,n),d[x+1]=1-si(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),d[x+0]=1-si(y,l,"z","y",r,n),d[x+1]=1-si(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),d[x+0]=1-si(y,l,"x","z",r,t),d[x+1]=si(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),d[x+0]=1-si(y,l,"x","z",r,t),d[x+1]=1-si(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),d[x+0]=1-si(y,l,"x","y",r,t),d[x+1]=1-si(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),d[x+0]=si(y,l,"x","y",r,t),d[x+1]=1-si(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var zp=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),j1=Math.PI*2;function J1(){let i=new se,t=new Te(1,1,1),e=new Ae(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new Ge({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,h,f,d,g,y){let p=new ce(c,typeof l=="string"?s(l):l);return p.position.set(u,h,f),p.scale.set(d,g,y),a.add(p),p}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let h=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),f=new ce(Gn(h),l);f.castShadow=u.some(d=>d.castShadow),h.forEach(d=>d.dispose()),i.remove(...u),i.add(f)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function K1({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new Oe({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:rn});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let d of[-1,1])t(i,s?"#deb181":"#aa785d",d*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",d*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let h=(a+c)/2,f=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(i,o,d,c,0,l,1.8,n),t(i,u,d,h,0,l*.17,f,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,d,h,g,l,f,l)}for(let d of[-n/2+l/2,n/2-l/2])t(i,o,0,c,d,e-l*2,1.8,l),t(i,u,0,h,d,e-l*2,f,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function Q1({box:i,oval:t,root:e},n,s,r){let o=new se;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new se;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function tM(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new Oe({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),h=new Oe({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let y=(g*7%19/19-.5)*t*.83,p=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],y,n+3,p,r*(1+g%4*.34),.85,r*1.15)}for(let[g,y]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let m=p-1.5,x=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],g*t+m*r,n+3+(2+p*1.6)*Math.min(1.15,r),y*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);x.rotation.z=m*.22}let f=["#e99660","#ecc56d","#bc92b8"].map((g,y)=>Q1(i,y,r*(1.72-y*.17),g)),d=Array.from({length:5},(g,y)=>{let p=r*(.45+y%3*.18),m=c(o,h,0,0,0,p,p,p);return m.name="bubble-"+y,m});return g=>{for(let[y,{fish:p,tail:m}]of f.entries()){let x=g*(.43+y*.06)+y*2.07+.5,M=t*(.24+y*.036),v=e*(.17+y*.038);p.position.set(Math.cos(x)*M,n+10+y*3.65+Math.sin(x*1.7)*2.15,Math.sin(x)*v),p.rotation.y=-Math.atan2(Math.cos(x)*v,-Math.sin(x)*M),m.rotation.y=Math.sin(g*8.6+y)*.39}for(let[y,p]of d.entries()){let m=(g*.3+y/d.length)%1;p.position.set(t*.33+Math.sin(m*j1+y)*r,n+5+m*20,e*.23),p.visible=m>.08&&m<.94}}}function eM({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let f=0;f<16;f++)e(i,f%2?"#a98467":"#e1c491",(f*11%17/17-.5)*n*.81,r+3,(f*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let f=0;f<5;f++){let d=e(i,f%2?"#829468":"#a7ad78",-n*.37+f*a,r+6+f%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(f-2)*.24}for(let f=0;f<7;f++)t(i,"#746462",(f/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new se;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(f,d)=>{let g=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),h=[];for(let f of[-1,1]){e(l,"#463946",5.15*a,1.34*a,f*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let g=new se;g.position.set(d*a*2.1,-.7*a,f*a*1.42),l.add(g);let y=e(g,"#d29861",-.48*d*a,-.13*a,f*1.12*a,.66*a,.54*a,1.43*a);y.rotation.y=f*d*.28;for(let p of[-1,0,1])e(g,"#ecc297",(p*.42+.5)*a,-.55*a,f*2.28*a,.55*a,.22*a,.23*a);h.push({leg:g,side:f,front:d})}}for(let f=0;f<6;f++)e(l,"#96664f",(f%3-1)*2.2*a,1.88*a,(f<3?-.66:.66)*a,.66*a,.25*a,.46*a);return f=>{let d=f*.35+.7,g=Math.cos(d)*n*.13,y=Math.sin(d)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(f*3.6)*.25,y),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*n*.13);for(let[p,m]of u.entries()){let x=p+1;m.position.set(-(3.55+x*1.24)*a,-.19*x*a,Math.sin(f*1.75-x*.55)*x*a*.32)}for(let{leg:p,side:m,front:x}of h)p.rotation.y=Math.sin(f*3.6)*m*x*.31}}function Hp(i,t,e){if(!Object.hasOwn(zp,i))return null;let n=zp[i],s=J1(),r=n==="aquarium",{base:o,top:a}=K1(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?tM(s,t,e,o,a,c):eM(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,h){l(Math.max(0,h))}}}var Gp=`
  varying vec2 panelUv;
  void main() {
    panelUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,nM=`
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
`,iM=`
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
`;function Vp(i,t,e){let n={value:0},s=new ce(new Zn(e*.78,43),new Xe({uniforms:{screenTime:n},vertexShader:Gp,fragmentShader:nM}));s.name="storybook-tv-screen",s.position.set(-t*.155-.84,59,0),s.rotation.y=-Math.PI/2;let r=new ce(new Zn(t*.27,e*.79),new Xe({uniforms:{screenTime:n},vertexShader:Gp,fragmentShader:iM,transparent:!0,depthWrite:!1,blending:zs}));return r.name="storybook-tv-spill",r.position.set(-t*.325,28.08,0),r.rotation.x=-Math.PI/2,s.visible=r.visible=!1,i.root.add(s,r),i.animate=(o,a)=>{let c=o?.active===!0;s.visible=r.visible=c,c&&(n.value=Number.isFinite(a)?Math.max(0,Math.floor(a*12)/12):0)},i}var Q=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),sM=Object.freeze({sage:Q.sage,mint:Q.aqua,sky:Q.blue,peach:Q.peach,coral:"#cf8979",lavender:Q.lilac,butter:Q.honey,cream:Q.linen,white:Q.cream,oak:Q.oakLight,walnut:Q.walnut,charcoal:"#505b68",brass:Q.brass,terracotta:"#b97d63",forest:Q.moss,blush:Q.blush,teddy:"#aa8063",slate:"#9b9b9d"}),rM=new Set([Q.oak,Q.oakLight,Q.walnut]),oM=new Set([Q.sage,Q.moss,Q.linen,Q.lilac,Q.lilacLight,Q.blush,Q.peach,Q.oatmeal,Q.upholsteryShadow,Q.denim]);function aM(i,t){let e=rM.has(i)?1:oM.has(i)?2:0,n=i===Q.glass||i===Q.darkGlass||i===Q.blueWater,s=i===Q.brass,r=i===Q.steel||i===Q.basinSteel,o=new Ge({color:i,roughness:s||r?.37:n?.33:i===Q.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var Bh=class{constructor(t,e){this.root=new se,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,aM(e,this.grainDirection));let a=new ce(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),h=u>.2?new Dl(s,r,o,2,u):new Te(s,r,o);return this.part(h,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new $e(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new Ae(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new Tn(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Dt(l,u)),c=new Oo(a,24);return c.scale(s,r,o),this.part(c,Q.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Gn(s);s.length>1&&s.forEach(a=>a.dispose());let o=new ce(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Ri(i,t,e,n,s,r,o=Q.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function aa(i,t,e,n,s,r,o,a){let c=o===Q.linen?Q.binding:Q.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function cM(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?Q.upholsteryShadow:Q.moss,u=a?Q.oatmeal:Q.sage,h=o?t*.5:t,f=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,y=Math.min(t,e)*.1;if(Ri(i,d,g,h,f,5),i.box(d,5,g,h*.97,22,f*.98,l,8),r){let b=o?t*.52:t*.34,S=o?e*.38:e*.46,A=o?t*.22:-t*.32,_=o?c*e*.3:e*.25;Ri(i,A,_,b,S,5),i.box(A,5,_,b,22,S,l,8),i.box(A,25,_,b*.96,12,S*.9,n,5),o&&i.box(A,29,c*e*.464,b,26,y,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let b=e*.88/p;for(let S=0;S<p;S++){let A=-e*.44+b*(S+.5);i.box(d+y*.18,25,A,h*.76,12,b-3,n,5),i.box(d-h*.39,27,A,h*.22,31,b-1,u,8)}i.box(d,29,-c*e*.445,h*.88,20,y,u,6),aa(i,d+h*.13,35,-e*.31,h*.42,b*.49,a?Q.sage:Q.peach,-.18),aa(i,d+h*.12,35,e*.28,h*.4,b*.45,Q.linen,.2)}else{let b=t*.8/p;for(let S=0;S<p;S++){let A=-t*.4+b*(S+.5);i.box(A,25,g+f*.08,b-3,12,f*.7,n,6),i.box(A,27,g-f*.39,b-1,31,f*.24,u,7)}for(let S of[-t*.442,t*.442])i.box(S,26,g,y,22,f*.89,u,6);aa(i,-t*.27,35,g-f*.15,t*.18,f*.34,Q.peach,-.18),aa(i,t*.27,35,g-f*.12,t*.17,f*.33,Q.linen,.2)}let m=o?h*.67:h*.19,x=o?e*.14:f*.58,M=o?d+h*.06:h*.32,v=o?e*.13:g+f*.1;i.box(M,37.1,v,m,1.7,x,Q.lilacLight,.65);for(let b of[-1,1])i.box(M,38.82,v+b*x*.36,m*.9,.25,1.2,Q.lilac);return 58}function gi(i,t,e,n,s,r,o,a=!1){let c=a?19:28;Ri(i,t,e,n,s,c,Q.walnut),i.box(t,c,e,n*.9,7,s*.92,Q.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,h=e-Math.cos(r)*s*.39;i.box(u,c+9,h,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function lM(i,t,e,n){let s=-e*.39;Ri(i,0,0,t,e,20,Q.walnut),i.box(0,20,0,t*.9,6,e*.92,Q.walnut,2),i.box(0,24,0,t*.83,6,e*.83,n,2.5);for(let r of[-1,1])i.box(t*.34*r,23,s,t*.075,18,e*.12,Q.walnut,1.1);return i.box(0,37,s,t*.84,22,e*.22,n,4),59}function Ul(i,t,e,n,s){return s==="round"?(i.disc(0,0,0,t*(.13/.58),5,e*(.13/.58),Q.walnut),i.disc(0,4,0,t*(.045/.58),31,e*(.045/.58),Q.walnut,1.5),i.disc(0,33,0,t/2,8,e/2,n,.96),41):s==="classic"?(Ri(i,0,0,t*(.69/.79),e*(.49/.57),35),i.box(0,32,0,t*(.72/.79),6,e*(.5/.57),Q.walnut,3),i.box(0,37,0,t,8,e,n,4),i.box(0,45,0,t*(.69/.79),1.4,e*(.14/.57),Q.linen,.6),46.4):(Ri(i,0,0,t*(.69/.79),e*(.47/.56),34),i.box(0,33,0,t,8,e,n,3),i.box(0,41.1,0,t*(.55/.79),1.2,e*(.15/.56),Q.linen,.5),42.3)}function uM(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return gi(i,0,-e*.39,t*.2,e*.23,0,Q.denim),gi(i,0,e*.39,t*.2,e*.23,Math.PI,Q.denim),gi(i,-t*.415,0,t*.17,e*.27,Math.PI/2,Q.denim),gi(i,t*.415,0,t*.17,e*.27,-Math.PI/2,Q.denim),Ul(i,t*.79,e*.57,Q.oak,"classic");if(r)gi(i,0,-e*.37,t*.2,e*.2,0,Q.sage),gi(i,0,e*.37,t*.2,e*.2,Math.PI,Q.blush),gi(i,-t*.38,0,t*.2,e*.2,Math.PI/2,Q.lilac),gi(i,t*.38,0,t*.2,e*.2,-Math.PI/2,Q.honey),Ul(i,t*.58,e*.58,n,"round");else{let c=a?[-.28,.28]:[-.32,0,.32],l=[Q.sage,Q.blush,Q.lilac,Q.honey];for(let u=0;u<c.length;u++)for(let h of[-1,1])gi(i,t*c[u],e*.37*h,t*(a?.19:.15),e*.23,h<0?0:Math.PI,l[(u+(h<0?0:2))%l.length]);Ul(i,t*.79,e*.56,n,"styled")}return 42}function hM(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,Q.ink,.5),i.box(t,e+1,n,s*.1,14,4,Q.ink,1),i.box(t,e+12,n,s,25,6,Q.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,Q.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,Q.blue,.2)}function fM(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,h=s?r/2:0;s&&i.box(l,37,h+.8,a,7,u-1.6,n,2.4),i.box(l,4,h,a*.81,34,u*.81,Q.walnut,2.8);for(let f=0;f<3;f++){let d=6+f*9.7;i.box(l,d,h+u*.41,a*.74,8.4,2,Q.oak,.7),i.box(l,d+3,h+u*.43,a*.26,2,2,Q.brass,.5)}}return hM(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,Q.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,Q.peach),81}function Wp(i,t,e,n,s,r){let o=new qn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,h=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...h):o.lineTo(...h)}o.closePath();let a=new cs(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function dM(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Ri(i,0,0,t,e,6,Q.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,Q.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,Q.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,Q.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,Q.lilacLight,1);let h=t>=145?[-t*.2,t*.2]:[0];for(let d of h)aa(i,d,u+22,-e*.275,t*(h.length===2?.34:.49),e*.2,Q.linen,d<0?-.04:.04);let f=Math.min(t,e)*.045;for(let[d,g,y,p]of[[-.24,.12,1,Q.cream],[.23,.27,.79,Q.honey],[.08,.04,.57,Q.cream],[-.1,.34,.62,Q.honey]])Wp(i,t*d,u+30.8,e*g,f*y,p);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,u+30.71,e*.24,.85,.24,e*.33,Q.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,u+30.72,e*d,t*.71,.24,.9,Q.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,Q.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let h of[-1,1])i.box(t*.45*u,4,e*.46*h,5,l,6,Q.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let h=-3;h<=3;h++)i.box(t*.45*u,l-29,e*h*.105,3,20,3,n,.8)}return l}function pM(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Ri(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,Q.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,Q.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let h=0;h<l;h++){let f=t*.89/l,d=(a-8)/c,g=f*(h-(l-1)/2),y=5+u*d;i.box(g,y,e*.46,f-2,d-1.5,2.9,n,1),i.oval(g,y+d*.45,e*.51,2.2,1.7,2.2,Q.brass)}return a+2}function mM(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,Q.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,Q.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,Q.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?Q.lilac:Q.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,Q.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?Q.lilacLight:Q.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,Q.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,Q.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,Q.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Wp(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,Q.cream);return 5}function gM(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let f of[-1,1])i.box(f*(t+s)/4,n-5,0,l,5,e,Q.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,Q.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,Q.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,Q.basinSteel);for(let f of[-1,1])i.box(f*s/2,n-4.5,o,u,5.25,r+u,Q.steel,.4),i.box(0,n-4.5,o+f*r/2,s,5.25,u,Q.steel,.4),i.disc(0,n-4.1,o+f*r/4,u,.6,u,Q.darkGlass);i.box(0,n-4.5,o,s,4.85,u,Q.steel,.4);let h=-s/2-u*1.15;i.disc(h,n,o,u*.8,u*2.9,u*.8,Q.steel),i.box(h+u,n+u*2.5,o,u*2.8,u*.7,u,Q.steel,.6)}function yM(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?Q.sage:Q.walnut,2.3),s?gM(i,t,e,r+2):i.box(0,r-3,0,t,5,e,Q.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let h=c?2.2:t*.29,f=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(d,6,g,h,r*.67,f,a?Q.moss:Q.oak,.8),i.box(d,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,Q.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,Q.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let h=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,h,h,1,Q.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,Q.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,Q.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,Q.brass,1);return r+3}function xM(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,Q.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,Q.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,Q.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,Q.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,Q.glass),i.disc(0,22,-e*.44,3.5,9,3.5,Q.brass),i.box(0,30,-e*.4,5,3.7,e*.1,Q.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,Q.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,Q.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,Q.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,Q.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,Q.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,Q.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,Q.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,Q.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,Q.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,Q.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,Q.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,Q.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,Q.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,Q.blush,1.7),36)}function _M(i,t,e,n,s){let r=n?Q.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,Q.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,Q.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,Q.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,Q.linen,3.8),c+o*(n?.37:.28)}function vM(i,t,e){let s=[Q.sage,Q.peach,Q.honey,Q.lilac,Q.blue,Q.blush];Ri(i,0,0,t*.96,e*.96,22,Q.sage),i.box(0,20,0,t*.94,7,e*.93,Q.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function bM(i,t,e,n){let s=[Q.linen,n,Q.sand,Q.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function MM(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,Q.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,Q.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,h=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,Q.moss);h.rotation.z=-c/u,h.rotation.x=l/u;let f=n?Q.sage:[Q.blush,Q.linen,Q.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,f)}return s*(n?.82:.65)}function Xp(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return Hp(t,e,n);let s=sM[t.split("-").at(-1)],r=new Bh(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=cM(r,e,n,s||(t==="sofa"?Q.linen:Q.sage),t);else{if(t==="tv")return r.box(0,2,0,e*.94,23,n*.98,Q.walnut,3.5),r.box(0,24,0,e,4,n,Q.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,Q.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,Q.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,Q.darkGlass,.6),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,Q.honey),Vp(r.finish(85),e,n);if(t==="table"||t.includes("dining-set"))o=uM(r,e,n,s||Q.oakLight,t);else if(t==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(t)){let a=t==="diningTable"?"classic":t.includes("round-dining")?"round":"styled";o=Ul(r,e,n,s||(a==="classic"?Q.oak:Q.oakLight),a)}else if(t==="diningChair"||t.startsWith("living-dining-chair-"))o=lM(r,e,n,s||Q.denim);else if(t==="desk"||t.includes("-desk-"))o=fM(r,e,n,s||Q.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))gi(r,0,0,e,n,0,s||Q.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){gi(r,0,0,e,n,0,s||Q.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,Q.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=dM(r,e,n,s||Q.lilac,t);else if(t==="rug")o=mM(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=yM(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=xM(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=MM(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,Q.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,Q.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,Q.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=pM(r,e,n,s||Q.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Ri(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||Q.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,Q.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=_M(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=bM(r,e,n,s||Q.sage);else if(t.startsWith("baby-activities-"))o=vM(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||Q.peach),r.ring(0,a,0,a*.95,a*.95,1.2,Q.linen),o=a*2}else return null}return r.finish(o)}var Jt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},la=Math.PI,kh=2*la,SM=new Set(["unknown","unavailable"]),ri=(i,t,e)=>Math.max(t,Math.min(e,i)),ca=(i,t)=>Number.isFinite(i)?ri(i,12,480):t,Zp=.96,$p=.09;function jp(i,t,e){let n=ca(i.w,42),s=ca(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*$p)<=s*Zp/2}var xe=(i,t={})=>new Ge({color:i,roughness:.83,...t}),zh=i=>String(i?.state??"unknown"),Ys=i=>!SM.has(zh(i)),Vr=i=>Ys(i)&&(i.active===!0||i.state==="on"),wM=i=>Vr(i)?Number.isFinite(i.attributes?.brightness)?ri(i.attributes.brightness/255,0,1):1:0;function Xi(i,t,e,n=0,s=0,r=0){let o=new ce(t,e);return o.position.set(n,s,r),i.add(o),o}function pn(i,t,e,n,s,r=0,o=0,a=0){return Xi(i,new Te(t,e,n),s,r,o,a)}function Rn(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,h=l-e/2,f=new qn;f.moveTo(u,h),f.lineTo(-u,h),f.lineTo(-u,-h),f.lineTo(u,-h),f.closePath();let d=new Vi(f,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-n/2),Xi(i,d,s,r,o,a)}function cn(i,t,e,n,s,r=0,o=0,a=0,c=16){return Xi(i,new $e(t,e,n,c),s,r,o,a)}function yi(i,t,e,n,s,r){return Xi(i,new Ae(t,10,7),e,n,s,r)}function Gr(i,t=0,e=0,n=0){let s=new se;return s.position.set(t,e,n),i.add(s),s}function EM(i,t,e=2.8){let n=new Xe({transparent:!0,depthWrite:!1,blending:zs,uniforms:{strength:{value:0},tint:{value:new Xt(Jt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=Xi(i,new Zn(2*t,2*t),n,0,e,0);return s.rotation.x=-la/2,s.visible=!1,(r,o)=>{s.visible=r>0,n.uniforms.strength.value=r*.29,n.uniforms.tint.value.copy(o)}}function TM(i,t,e){let n=new se,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),h=Math.min(t,e),f=xe(Jt.honey),d=xe(Jt.ink),g=xe(Jt.brass,{roughness:.36,metalness:.42}),y=xe(Jt.cream,{emissive:Jt.warm,emissiveIntensity:0}),p=new Xt(Jt.warm),m=u?46:o?50:a?56:l?40:c?56:36,x=!a&&!c&&!l,M=x?ri(h*.68,15,46):ri(h*(a?1.72:1.35),38,110),v=EM(n,M,x?16.8:2.8);if(a){let b=h*(u?.19:.29);cn(n,b,b*1.02,3,d,0,m+2),o&&cn(n,1.7,1.7,13,f,0,m+9),cn(n,b*.82,b,5,f,0,m-1.5),cn(n,b*.92,b*.96,1.15,g,0,m+1.1);let S=yi(n,b*.83,y,0,m,0);S.scale.y=o?.88:.52}else if(l)Rn(n,h*.34,18,4,d,0,35,-4),cn(n,h*.12,h*.11,14,f,0,37,3),yi(n,h*.21,y,0,m+3,3);else{let b=m-7,S=c?3:16,A=h*(c?.25:.3);if(cn(n,A*.57,A*.67,4,d,0,S),cn(n,2,2.9,b-S,f,0,(S+b)/2),c)yi(n,A*.81,y,0,m,0);else{let _=r==="bud_lamp"?12:9;cn(n,A*.56,A,14,y,0,m,0,_),cn(n,A,A*.99,1.2,g,0,m-6.7,0,_),cn(n,A*.55,A*.58,1.1,g,0,m+7.1,0,_)}}return{root:n,anchorY:m+2,animate(b){let S=wM(b),A=b?.attributes?.rgb_color;if(Array.isArray(A)&&A.length===3&&A.every(Number.isFinite)){let[_,C,D]=A.map(I=>ri(I/255,0,1));p.setRGB(_,C,D,en)}else p.setHex(Jt.warm);v(S,p),y.emissiveIntensity=S*.88,y.emissive.copy(p),S>0?y.color.copy(p):y.color.setHex(Jt.cream)}}}function AM(i){let t=new qn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Vi(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-la/2)}function Yp(i,t,e,n){let s=new se,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=Gr(s,0,o,0);n&&(a.rotation.x=la/2);let c=Gr(a,0,-1,0),l=xe(Jt.cream),u=xe(Jt.ink),h=/(?:white|cream)$/.test(i.type)?Jt.oat:/(?:forest|sage)$/.test(i.type)?Jt.sage:Jt.honey,f=xe(h),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;cn(a,r*.18,r*.2,6,u),cn(a,r*.174,r*.176,1.4,xe(Jt.brass,{roughness:.36,metalness:.42}),0,3.4),cn(a,r*.15,r*.17,2.6,l,0,4.9);let g=AM(r);for(let y=0;y<d;y++){let p=Gr(c);p.rotation.y=y/d*kh,Xi(p,g,f)}if(n){Rn(s,r*1.66,6,r*1.02,u,0,3),pn(s,r*.3,11,6,l,0,10);let y=Xi(s,new Tn(r,2.6,6,24),l,0,o,3);y.rotation.z=.04;for(let p=-1;p<=1;p++){let m=p*r*.5;cn(s,.68,.68,2*Math.sqrt(r*r-m*m),u,m,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(y,p=0){let m=Number.isFinite(y?.attributes?.percentage)?ri(y.attributes.percentage/100,.12,1):.64;c.rotation.y=Vr(y)?p*kh*m%kh:0}}}function RM(i,t){let e=new se,n=t.mountY??39,s=Gr(e,0,n),r=ri(i*.72,17,27);Rn(s,r,31,5,xe(Jt.ink),0,0,-.5),Rn(s,r-1.9,29,4.4,xe(Jt.cream),0,.3,1);let o=xe(Jt.oat,{emissive:Jt.warm,emissiveIntensity:0}),a=Rn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let h=xe(Jt.teal,{emissive:Jt.mint,emissiveIntensity:0});return yi(s,1.85,h,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=Ys(l)?Vr(l)?-.16:.16:0,o.emissiveIntensity=Vr(l)?.42:0;let h=l?.presence==="on";for(let f=0;f<c.length;f++){let d=h?.5+.5*Math.cos(u*5-f*1.23):0;c[f].material.color.setHex(h?Jt.mint:Jt.teal),c[f].material.emissiveIntensity=h?.75+d*1.9:0,c[f].scale.setScalar(h?1+d*.18:1)}}}}function qp(i,t,e,n=31){let s=new se,r=36.5,o=Math.max(12,i-6),a=xe(Jt.oat);if(t){let f=xe(Jt.glass,{roughness:.32});pn(s,o,n,3.2,f,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])pn(s,3.2,n+2,7.5,a,g,r);let d=r+n/2;pn(s,o,1.8,7,f,0,d+.35);for(let g of[-4.25,4.25])pn(s,o+2,3.2,1.5,a,0,d,g);pn(s,o+3,3.8,11,a,0,r-n/2,1.4),pn(s,o,1.35,.5,xe(Jt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=xe(Jt.cream),l=r+n/2-1;Rn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(f,d)=>pn(s,o-5,n/8-.45,3,c,0,l-d*(n/8),6.9)),h=0;return{root:s,anchorY:r+1.5,animate(f,d,g,y=!1){let p=Hh(f),m=p===null?y?0:h:1-p;y||(h=m);let x=Number.isFinite(f?.attributes?.current_tilt_position)?ri(f.attributes.current_tilt_position/100,0,1):0;for(let M=0;M<u.length;M++){let v=ri(m*u.length-M,0,1);u[M].visible=v>.02,u[M].scale.y=v,u[M].rotation.x=x*.9}}}}function Hh(i){return Ys(i)?Number.isFinite(i.attributes?.current_position)?ri(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function CM(i,t){let e=new se,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=xe(Jt.oat),l=xe(Jt.cream),u=xe(Jt.plum),h=[xe(Jt.tile),xe(Jt.paleTile)],f=xe(Jt.dark);pn(e,i,5,t*Zp,l,0,2.5,t*$p),pn(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let I of[-i*.42,i*.42])pn(e,i*.09,o+4,n,c,I,(o+4)/2),Rn(e,i*.1,o+4,5,l,I,(o+4)/2,r+1,1.5);let d=new qn;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let g=new Vi(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),Xi(e,g,u,0,o+4);let y=i*.49,p=Math.atan2(a,y),m=Math.hypot(a,y),x=(n+11)/8,M=[[],[]];for(let I of[-1,1])for(let U=0;U<8;U++){let k=-r-5.5+(U+.5)*x,O=new Te(m*.97,2.2,x-.62);O.rotateZ(-I*p),O.translate(I*y*.5,o+5.65+a*.5,k),M[U%2].push(O)}M.forEach((I,U)=>{Xi(e,Gn(I),h[U]),I.forEach(k=>k.dispose())}),Rn(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),pn(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),pn(e,s,o,1.5,f,0,o/2+4,r-4);for(let I of e.children)I.isMesh&&(I.castShadow=!0);let v=xe(Jt.mint),b=xe(Jt.sage),A=(o-3)/6,_=Array.from({length:6},(I,U)=>{let k=Gr(e,0,o-(U+.5)*A+2,r+.5);return Rn(k,s-2,A-.7,3.4,v,0,0,0,1.2),pn(k,s*.91,.68,.7,b,0,A*.23,1.8),U===5&&Rn(k,s*.13,2,2.2,l,0,0,2.3,.55),k}),C=xe(Jt.gold,{emissive:Jt.ember,emissiveIntensity:0});yi(e,3.7,C,i*.422,o*.73,r+4.5);let D=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(I,U=0,k,O=!1){let W=Hh(I)??(O?0:D);O||(D=W),v.color.setHex(Ys(I)?Jt.mint:Jt.muted),b.color.setHex(Ys(I)?Jt.sage:Jt.muted);let Z=(1-W)*_.length;_.forEach((nt,it)=>{let et=ri(Z-it,0,1);nt.visible=et>.02,nt.scale.y=et,nt.position.y=o-(it+et/2)*A+2});let ct=["opening","closing"].includes(zh(I));C.emissiveIntensity=ct?.55+(.5+.5*Math.cos(U*6)):0}}}function IM(i){let t=new se,e=46,n=xe(Jt.cream),s=xe(Jt.honey),r=Math.min(i*.86,88),o=Gr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])pn(t,3.4,e,5,n,c,e/2);pn(t,r+4,3,5,n,0,e),Rn(o,r-2,e-4,4,s,r/2,e/2,0,2),yi(o,2.2,xe(Jt.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,h=!1){let d=Hh(c)??(h?0:a);h||(a=d),o.rotation.y=-1.32*d,s.color.setHex(Ys(c)?Jt.honey:Jt.muted)}}}function PM(i,t,e){let n=new se,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=ri(t*.85,23,126),a=xe(Jt.dark,{emissive:Jt.mint,emissiveIntensity:0});if(Rn(n,o,s?25:18,8,xe(Jt.cream),0,r,0),s){Rn(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])yi(n,1.35,xe(Jt.oat),o*c,r-7,4.3)}else pn(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",h=Ys(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Jt.warm:Jt.glass),a.emissiveIntensity=h?1.15:Vr(c)?.25:0}}}function LM(i,t,e){let n=new se,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=xe(Jt.cream),c=xe(r?Jt.glass:Jt.sage),l=xe(Jt.teal,{emissive:Jt.mint,emissiveIntensity:0}),u=o-1;if(cn(n,s*.46,s*.5,4,xe(Jt.ink),0,2),r){let d=yi(n,s/2,c,0,13,0);d.scale.y=22/s,cn(n,s*.19,s*.22,3.5,a,0,u)}else{Rn(n,s,24,s*.82,c,0,15,0,5),Rn(n,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)pn(n,s*.66,1.2,1.1,l,0,u+2,d*3.5)}yi(n,1.6,l,s*.18,u-2,s*.31);let h=xe(Jt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),f=Array.from({length:3},(d,g)=>yi(n,2.1+g*.6,h,0,u+3,0));return{root:n,anchorY:u,animate(d,g=0){let y=Vr(d);l.emissiveIntensity=y?1.6:0;for(let p=0;p<f.length;p++){f[p].visible=y;let m=(g*.68+p/f.length)%1;f[p].position.set(Math.sin(m*la)*3.1,u+4+m*14,0),f[p].scale.setScalar(.7+m*.62)}}}}function NM(i,t){let e=new se,n=Math.min(i,t)*.42,s=.72;e.scale.setScalar(s);let r=xe(Jt.sage,{emissive:Jt.mint,emissiveIntensity:0}),o=xe(Jt.ink);cn(e,n,n*.95,7,o,0,4.6),cn(e,n*.96,n,5.5,xe(Jt.cream),0,10.2),cn(e,n*.28,n*.33,4,xe(Jt.oat),0,14,-n*.23);for(let c of[-.27,.27])yi(e,n*.105,o,n*c,10,n*.88);let a=Rn(e,n*.68,1.2,2.5,r,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03*s,animate(c,l=0,u=!1){let h=["cleaning","returning"].includes(zh(c));a.material.emissiveIntensity=h?u?.6+.5*Math.cos(l*6):.3:0}}}function Jp(i,t={}){let e=ca(i.w,42),n=ca(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?RM(e,t):s==="garageDoor"?CM(e,n):s==="door"||r==="door"?IM(e):s==="window"?qp(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?qp(ca(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?PM(i,e,t):s==="airPurifier"||s==="humidifier"?LM(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?NM(e,n):s==="windowFan"?Yp(i,e,n,!0):r==="fan"||/^fans-/.test(s)?Yp(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?TM(i,e,n):null}var im=Sa(ua(),1),{difference:sm,union:rm}=im.default,Bl=18,jn=.001,Ci=(i,t)=>i[0]*t[0]+i[1]*t[1],qs=(i,t)=>i[0]*t[1]-i[1]*t[0],Ii=(i,t)=>[i[0]-t[0],i[1]-t[1]],Be=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],zl=([i,t])=>[-t,i],Kp=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Fl=i=>i.map(({x:t,y:e})=>[t,e]),Yi=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],om=i=>i.length?rm(...i):[];function kl(i,t,e,n=0){let s=Ii(t,i),r=Math.hypot(...s);if(r<jn)return null;let o=s.map(u=>u/r),a=zl(o),c=Be(i,o,-n),l=Be(t,o,n);return Yi([Be(c,a,e),Be(l,a,e),Be(l,a,-e),Be(c,a,-e)])}function Ol(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function Qp(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=Ii(n,t),r=Math.hypot(...s);return r>jn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function DM(i,t,e,n){if(Math.abs(Ci(i.tangent,t.tangent))<.9999)return null;let s=zl(i.tangent),[r,o]=[t.start,t.end].map(y=>Ii(y,i.start)),a=Ci(r,s);if(Math.abs(a)<.1||Math.abs(a)>Bl||Math.abs(a-Ci(o,s))>.1)return null;let c=[Ci(r,i.tangent),Ci(o,i.tangent)].sort((y,p)=>y-p),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let h=Be(i.start,i.tangent,(l+u)/2),f=Math.sign(a);if(!Ol(e,Be(h,s,-f))||!Ol(n,Be(h,s,a+f))||Ol(e,Be(h,s,a/2))||Ol(n,Be(h,s,a/2)))return null;let d=Be(i.start,i.tangent,l),g=Be(i.start,i.tangent,u);return Yi([Be(d,s,-f*.05),Be(g,s,-f*.05),Be(g,s,a+f*.05),Be(d,s,a+f*.05)])}function am(i){let t=[],e=[];for(let n of[...i].reverse()){let s=om(n.polygons);if(!s.length)continue;let r=t.length?sm(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?rm(t,s):s}return{footprint:t,regions:e.reverse()}}function Wr(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Wh(i,t,e=!1){let n=i.map(f=>({surface:f.surface,points:Fl(f.points),polygons:[Yi(Fl(f.points))],outdoor:e&&Wr(f)})),s=[];for(let[f,d]of n.entries())for(let g of n.slice(f+1))for(let y of Qp(d.points))for(let p of Qp(g.points)){let m=DM(y,p,d.points,g.points);m&&s.push({surface:d.surface,polygons:[m],outdoor:d.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:f,deckEdge:d,stepBottom:g,deckBottom:y,northDeck:p,southDeck:m,recess:x}=t;r.push({surface:"patio",polygons:[Yi(Fl(p)),Yi(Fl(m)),Yi(Kp(f,g,d+1,y))]}),x.x2>x.x1&&x.z2>x.z1&&o.push({surface:"oak",polygons:[Yi(Kp(x.x1,x.z1,x.x2,x.z2))]})}let a=[...s,...n],c=[...o,...a.filter(f=>!f.outdoor)],l=[...r,...a.filter(f=>f.outdoor)],u=am([...l,...c]),h=t||e?om(c.flatMap(f=>f.polygons)):[];return{...u,foundation:h}}function UM(i,t,e,n){let s=qs(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=Be(i,zl(t),r),a=Be(i,zl(e),-r),c=qs(Ii(a,o),e)/s,l=Be(o,t,c);return Math.hypot(...Ii(l,i))>n*2.5?Yi([i,o,a]):Yi([i,o,l,a])}function tm(i,t){let e=qs(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=Ii(t.point,i.point);return[qs(n,t.tangent)/e,qs(n,i.tangent)/e]}function FM(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=Ii(r.point,s.point);if(Math.hypot(...o)>Bl)continue;let a=tm(s,r);a&&a.every(c=>c>=-Bl&&c<=jn)?e.push({a:s,b:r,center:Be(s.point,s.tangent,a[0])}):!a&&Ci(s.tangent,r.tangent)<0&&Ci(o,s.tangent)<=jn&&Ci(o,r.tangent)>=-jn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=tm(s,o);if(!a)continue;let[c,l]=a;c<-Bl||c>=-jn||l<=jn||l>=r.length-jn||r.openings.some(({start:u,end:h})=>l>=u&&l<=h)||e.push({a:s,center:Be(s.point,s.tangent,c)})}}return e}function em({a:i,b:t,center:e},n){return e?[kl(i.point,e,n,.1),t&&kl(t.point,e,n,.1),t&&UM(e,i.tangent,t.tangent,n)].filter(Boolean):[kl(i.point,t.point,n,.1)].filter(Boolean)}function cm(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function OM(i,t){return cm(i).flatMap(([e,n])=>{let s=Ii(n,e),r=Math.hypot(...s);if(r<jn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Ii(a,e),u=Ii(c,e);if(Math.abs(qs(l,o))>jn||Math.abs(qs(u,o))>jn)return[];let[h,f]=[Ci(l,o),Ci(u,o)].sort((y,p)=>y-p),d=Math.max(0,h),g=Math.min(r,f);return g-d>jn?[[Be(e,o,d),Be(e,o,g)]]:[]})})}function nm(i,t){return t?.length?sm(i,t):i}function lm(i,t,e,n){let s=[],r=(c,l,u,h,f=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:h,priority:f})};for(let c of i){let{palette:[l,u,h]}=c,f=[c.x1,c.y1],d=[c.dx,c.dz],g=(x,M,v,b,S,A,_)=>{M-x>jn&&r(kl(Be(f,d,x),Be(f,d,M),S/2),v,b,A,_)},y=c.openings.length?n:0,p=(x,M)=>{g(x,M,y,e,t,l,2),g(x,M,e-1,e+2,t+3,u,1)};y&&g(0,c.length,0,y,t,l,2);let m=0;for(let x of c.openings)p(m,x.start),m=Math.max(m,x.end);p(m,c.length),g(0,c.length,0,3,t+3,h,1)}for(let c of FM(i)){let[l,u,h]=c.a.wall.palette;for(let f of em(c,t/2))r(f,0,e,l,2);for(let f of em(c,(t+3)/2))r(f,e-1,e+2,u,1),r(f,0,3,h,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],h=new Map,f=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:g}of f.sort((y,p)=>y.priority-p.priority))h.has(d)||h.set(d,{surface:d,polygons:[]}),h.get(d).polygons.push(g);return{...am([...h.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:h},f)=>{let d=cm(l);return c.map(g=>({...g,bottom:u,top:h,faces:{top:nm(g.polygons,a[f+1]?.footprint),bottom:u===0?[]:nm(g.polygons,a[f-1]?.footprint),sides:OM(g.polygons,d)}}))})}var BM=new Map([["partlycloudy",.32],["cloudy",.84],["windy-variant",.7],["fog",.95],["snowy",.82],["snowy-rainy",.92],["hail",.94],["rainy",.88],["pouring",.97],["lightning",.91],["lightning-rainy",.98]]),kM=(i,t,e)=>Math.min(e,Math.max(t,i)),um=i=>i*Math.PI/180;function Zs(i,t,e){let n=kM((i-t)/(e-t),0,1);return n*n*(3-2*n)}function qi(i={}){let{sunElevation:t,sunAzimuth:e,sunRising:n,condition:s,night:r,cloudCoverage:o}=i,a=Number.isFinite(t)&&Math.abs(t)<=90?t:r||s==="clear-night"?-18:38,c=Number.isFinite(e)&&e>=0&&e<=360?e%360:void 0,l=typeof n=="boolean"?n:c!==void 0&&c<180,u=a<19&&a>-12,h=c??(u?l?90:270:150),f=Math.max(BM.get(s)??0,Number.isFinite(o)&&o>=0&&o<=100?o/100:0);return{elevation:a,azimuth:h,rising:l,cloud:f,phase:u?l?"sunrise":"sunset":a<=-12?"night":"day",daylight:Zs(a,-10,18),twilight:Zs(a,-12,-3)*(1-Zs(a,3,19)),lowSun:Zs(a,-1,4)*(1-Zs(a,9,33)),disc:Zs(a,-.9,.8),east:Math.sin(um(h)),north:Math.cos(um(h))}}function hm(){let i,t,e=0;function n(s){let r=Zs(s-e,0,.8);if(!i||r>=1)return t;let o=(t.azimuth-i.azimuth+540)%360-180;return qi({sunElevation:i.elevation+(t.elevation-i.elevation)*r,sunAzimuth:(i.azimuth+o*r+360)%360,sunRising:t.rising,cloudCoverage:(i.cloud+(t.cloud-i.cloud)*r)*100})}return(s,r,o=!1)=>!t||o||!Number.isFinite(r)||r<e?(i=void 0,t=s,e=Number.isFinite(r)?r:0,t):((s.elevation!==t.elevation||s.azimuth!==t.azimuth||s.rising!==t.rising||s.cloud!==t.cloud)&&(i=n(r),t=s,e=r),n(r))}var zM=3,HM={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},Xh=Object.fromEntries(Object.entries(HM).map(([i,t])=>[i,t.map(e=>new Xt(e))])),GM={sunrise:["#f6bfc2","#947b96","#ffd29d","#f0c7b7","#767d9c"],sunset:["#f1ad90","#8d647a","#ffaf71","#eab290","#80677f"]},VM=Object.fromEntries(Object.entries(GM).map(([i,t])=>[i,t.map(e=>new Xt(e))])),{clamp:WM,lerp:Xr,smoothstep:XM}=le;function fm(i,t,e){i.toneMapping=Yo,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=ks,i.shadowMap.autoUpdate=!1;let n=new Bs("#fff4e5","#897e91",1.13),s=new ds("#fff0d4",2.15),r=new ds("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,h=(c+l)/2;s.position.set(u-610,1150,h-490),s.target.position.set(u,0,h),r.position.set(u+290,410,h+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let f=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-f,right:f,top:f,bottom:-f,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:zM},()=>new Vo("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let g=[],y,p,m,x=!0,M=new Xt,v=new Xt;function b(){for(let _ of t.children)_.isMesh&&(_.receiveShadow=!0,_.geometry.computeBoundingBox(),_.castShadow=_.geometry.boundingBox.max.y+_.position.y>-99)}function S(_,C){let D=/(light|lamp|sconce)/i.test(_.type),I=!C.animate||D;C.root.traverse(U=>{!U.isMesh||U.material.transparent||U.material.isShaderMaterial||(U.receiveShadow=!0,U.castShadow||=I)}),D&&_.entityId&&g.push({item:_,object:C})}function A(_,C,D,I=!1){let{elevation:U,azimuth:k,rising:O,daylight:Y,twilight:W,lowSun:Z,cloud:ct}=_.solar??qi(_),nt=WM(U,-12,35),it=`${O}:${Math.round(nt*4)}:${Math.round(ct*32)}`,et=XM(U,-.85,9);if(it!==y){let Tt=[n.color,n.groundColor,s.color,D.color,t.background],X=VM[O?"sunrise":"sunset"];for(let[H,$]of Tt.entries()){v.lerpColors(Xh.clear[H],Xh.overcast[H],ct),$.lerpColors(Xh.night[H],v,Y);let rt=H===2?Z*.76:W*(H===4?.55:.43);$.lerp(X[H],rt*(1-ct*.73))}n.intensity=Xr(.63,1.13+ct*.17,Y)+W*.17,s.intensity=.23+et*Xr(1.91,.48,ct)*Xr(.46,1,Y),r.intensity=Xr(.17,.23,Y)+W*.08,s.shadow.intensity=et*Xr(.83,.21,ct),y=it,m=void 0}let Pt=Math.round(k/2)*2,Ct=Math.max(10,Math.round(U)),Rt=`${Pt}:${Ct}`;if(et>0&&Rt!==p){let Tt=le.degToRad(Pt),X=le.degToRad(Ct),H=Math.cos(X)*1600;s.position.set(u+Math.sin(Tt)*H,Math.sin(X)*1600,h-Math.cos(Tt)*H),p=Rt,x=!0}if(m!==C||I){let Tt=g.flatMap(({item:X,object:H})=>{let $=C[X.id];if($?.state!=="on")return[];let rt=Number.isFinite($.attributes?.brightness)?le.clamp($.attributes.brightness/255,0,1):1;return rt>0?[{object:H,power:rt,color:$.attributes?.rgb_color}]:[]}).sort((X,H)=>H.power-X.power);for(let[X,H]of d.entries()){let $=Tt[X];if(!$){H.intensity=0;continue}let{object:rt,power:mt,color:pt}=$;Array.isArray(pt)&&pt.length===3&&pt.every(Number.isFinite)?(M.setRGB(...pt.map(Mt=>le.clamp(Mt/255,0,1)),en),H.color.copy(M)):H.color.set("#ffd5a2"),H.position.copy(rt.root.position),H.position.y+=Math.max(18,(rt.anchorY-9)*rt.root.scale.y),H.intensity=mt*Xr(2350,1250,Y)}m=C}(x||I&&et>0)&&(i.shadowMap.needsUpdate=!0,x=!1)}return{markStructure:b,register:S,update:A,dispose:()=>s.shadow.dispose()}}var xi=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),Hl=65,YM=88,Gl=4400,qM=1900,dm=-111,Yr=Object.freeze({default:xi("Default",0,0),top:xi("Top down",0,0),high:xi("High angle",0,15),dollhouse:xi("Dollhouse",2,30),corner:xi("Corner",45,40),north:xi("From north",180,42),east:xi("From east",90,42),south:xi("From south",0,42),west:xi("From west",270,42),waterfront:xi("Waterfront",0,15),free:xi("Free view",0,25)});function pm(i,t=!1){let e=Object.entries(Yr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function Zi(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(Yr,t.preset)?t.preset:"top",n=Yr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth,r=e==="free"||e==="default"?YM:Hl;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?le.clamp(t.tilt,0,r):n.tilt,zoom:Number.isFinite(t.zoom)?le.clamp(t.zoom,.6,2.5):n.zoom}}function mm(i){let t=Zi(i);return{...t,preset:"free",tilt:t.tilt||Yr.free.tilt}}function Yh(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:Zi(i)}function qh(i){return Zi({...Yh(i),preset:"default"})}function gm(i){if(i<=Hl)return null;let t=le.smoothstep(i,Hl,84);return{near:le.lerp(3530,2680,t),far:le.lerp(4260,3690,t)}}function ym(i,t){let e=Math.max(.4,t/1536*.68),n=le.clamp;return{w:Math.round(n((i?.w||170)*e,58,216)),h:Math.round(n((i?.h||110)*e,44,152))}}function xm(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>Yh(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return Yh(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function _m(i,t,e,n,s="top",{focus:r,demoZoom:o}={}){let a=Zi(s);if(a.preset==="waterfront"&&t?.waterfront&&(t=t.waterfront),![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let c=le.degToRad(a.azimuth),l=le.degToRad(a.tilt),u=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),h=new G(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));i.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),i.position.copy(u).addScaledVector(h,qM),i.lookAt(u),i.updateMatrixWorld(!0);let f=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),d=new We,g=new G;for(let S of[t.minX-37,t.maxX+37]){for(let A of[t.minZ-53,t.maxZ+36])for(let _ of[dm,f])d.expandByPoint(g.set(S,_,A).applyMatrix4(i.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&d.expandByPoint(g.set(S,-106,t.sceneryMinZ-8).applyMatrix4(i.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let S=(d.max.y-d.min.y)*.025;d.min.y-=S,d.max.y+=S}let y=e/n,p=Math.max((d.max.x-d.min.x)/2,(d.max.y-d.min.y)/2*y),m=p/y,x=(d.min.x+d.max.x)/2,M=(d.min.y+d.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:S,y:A}=g.set(r.x,r.y,r.z).applyMatrix4(i.matrixWorldInverse),_=Number.isFinite(r.weight)?le.clamp(r.weight,0,1):1;x=le.lerp(x,S,_),M=le.lerp(M,A,_)}i.left=x-p,i.right=x+p,i.bottom=M-m,i.top=M+m,i.zoom=Number.isFinite(o)?le.clamp(o,.6,4.5):a.zoom;let v=i.position.y+(M-m/i.zoom)*i.up.y,b=a.tilt>Hl?Math.max(0,(dm+24-v)/h.y):0;return b>0&&(i.position.addScaledVector(h,b),i.updateMatrixWorld(!0)),i.far=Gl+b,i.updateProjectionMatrix(),a}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Legacy dining set",icon:"\u25B0",w:165,h:108,group:"living",legacy:!0},{type:"diningTable",label:"Dining table",icon:"\u25B0",w:136,h:62,group:"living"},{type:"diningChair",label:"Dining chair",icon:"\u25D2",w:34,h:26,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=X=>typeof X=="string"&&X.startsWith("ui"),o=X=>String(X??"").toLowerCase(),a=X=>o(X).split(".")[0],c=X=>typeof X=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(X),l=X=>X.type==="window"?"wall":X.mount||"floor",u=X=>X?.type==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(X?.type),h=X=>X?.type==="diningChair"||/^living-dining-chair-/.test(X?.type),f=X=>h(X)||["chair","armchair","stool"].includes(X?.type)||/-(?:desk-chair|acorn-armchair|floor-chair)-/.test(X?.type),d=X=>Number(X.toFixed(6)),g=X=>(X%360+360)%360;function y(X){let H=X.type==="table",$=/^living-(petal|round|rectangular)-dining-set-/.exec(X.type);if(!H&&!$)return;let rt=$?.[1],mt=H?"diningTable":X.type.replace("-dining-set-","-dining-table-"),pt=St=>H?"diningChair":`living-dining-chair-${St}`,{w:bt,h:Mt}=X;if(H||rt==="round"){let[St,Nt,Ot,Bt,$t]=H?[.39,.415,.2,.23,.27]:[.37,.38,.2,.2,.2];return{tableType:mt,w:(H?.79:.58)*bt,h:(H?.57:.58)*Mt,tableHeight:H?46.4:41,chairs:[[0,-Mt*St,bt*Ot,Mt*Bt,0,pt("sage")],[bt*Nt,0,Mt*$t,bt*(H?.17:Ot),90,pt("butter")],[0,Mt*St,bt*Ot,Mt*Bt,180,pt("blush")],[-bt*Nt,0,Mt*$t,bt*(H?.17:Ot),270,pt("lavender")]]}}let lt=rt==="rectangular",_t=lt?[-.32,0,.32]:[-.28,.28],vt=[["sage","blush","lavender"],["lavender","butter","sage"]];return{tableType:mt,w:.79*bt,h:.56*Mt,tableHeight:42.3,chairs:[-1,1].flatMap((St,Nt)=>_t.map((Ot,Bt)=>[bt*Ot,Mt*.37*St,bt*(lt?.15:.19),Mt*.23,Nt*180,pt(vt[Nt][Bt])]))}}function p(X){if(!Array.isArray(X?.items))return X;let H=new Set(X.items.map(pt=>pt.id)),$=X.items.filter(f),rt=!1,mt=X.items.flatMap(pt=>{let bt=y(pt);if(!bt||![pt.x,pt.y,pt.w,pt.h,pt.rotation].every(Number.isFinite)||pt.w<=0||pt.h<=0)return[pt];rt=!0;let Mt=pt.rotation*Math.PI/180,lt=Math.cos(Mt),_t=Math.sin(Mt),vt=Number.isFinite(pt.modelHeight)?pt.modelHeight:void 0,St={...pt,type:bt.tableType,w:d(bt.w),h:d(bt.h),...vt===void 0?{}:{modelHeight:Math.max(6,d(vt*bt.tableHeight/59))}};return[...bt.chairs.flatMap(([Ot,Bt,$t,Gt,j,oe],Vt)=>{let B=d(pt.x+Ot*lt-Bt*_t),T=d(pt.y+Ot*_t+Bt*lt),tt=Math.max(8,Math.min($t,Gt)*.52);if($.some(E=>Math.hypot(E.x-B,E.y-T)<=tt))return[];let ut=`${pt.id}-chair-${Vt+1}`,gt=ut,z=2;for(;H.has(gt);)gt=`${ut}-${z++}`;H.add(gt);let w={id:gt,type:oe,name:`Dining chair ${Vt+1}`,x:B,y:T,w:d($t),h:d(Gt),rotation:g(pt.rotation+j),entityId:"",...vt===void 0?{}:{modelHeight:vt},...Number.isFinite(pt.zIndex)?{zIndex:pt.zIndex}:{}};return $.push(w),[w]}),St]});return rt?{...X,items:mt}:X}function m(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function x(X,H,$){return!(!X||!H||!$||X.type===$.type||$.legacy||s.has(X.type)||r(X.type)||s.has($.type)||r($.type)||l(H)!==l($)||X.entityId&&!M(X.entityId,$))}function M(X,H){return!c(X)||typeof H?.type!="string"||H.legacy||r(H.type)||H.type==="stairs"||H.type==="window"?!1:H.type==="cameraThumbnail"?a(X)==="camera":H.type==="garageDoor"?a(X)==="cover":a(X)!=="camera"}function v(X,H){let $=a(X.entity_id),rt=o(X.name+" "+X.entity_id),mt={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},pt=Mt=>{if(Mt.type==="controlZone")return!0;if($==="camera")return Mt.type==="cameraThumbnail";if($==="cover")return/garage/.test(rt)&&Mt.type==="garageDoor";if($==="climate")return Mt.type==="thermostat";if($==="binary_sensor"&&/presence|occupancy/.test(rt))return Mt.type==="presenceSwitch";if(mt[$]?.includes(Mt.group)||/humidifier/.test(rt)&&Mt.type==="humidifier"||/purifier/.test(rt)&&Mt.type==="airPurifier")return!0;if($==="switch"){if(/fan/.test(rt))return Mt.group==="fans"||Mt.type==="windowFan";if(/light|lamp/.test(rt))return Mt.group==="lighting"}return!1},bt=H.filter(Mt=>M(X.entity_id,Mt));return{recommended:bt.filter(pt),available:bt}}function b(X){return X&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(X.type)&&!r(X.type)}function S(X,H,$,rt){if(!["w","h"].includes(H)||!Number.isFinite($))return null;let mt=X.type==="cameraThumbnail"?40:12,pt=X.type==="cameraThumbnail"||c(X.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!rt)return{[H]:Math.min(pt[H],Math.max(mt,$))};let bt=Math.min(pt.w/X.w,pt.h/X.h),Mt=Math.min(bt,Math.max(mt/X.w,mt/X.h)),lt=Math.min(bt,Math.max(Mt,$/X[H]));return{w:Math.round(X.w*lt*10)/10,h:Math.round(X.h*lt*10)/10}}let A=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),_=new Set(["lamp","tableLamp","humidifier","plant"]),C=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),D=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,I=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,U=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function k(X){let H=X?.type??"";return u(X)||A.has(H)||D.test(H)?"surface":_.has(H)||X?.lightForm==="bud_lamp"||H.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function O(X){let H=X.type==="humidifier"?.37:X.type==="plant"?.23:.2;return Math.min(X.w,X.h)*H}function Y(X,H=!1){let{type:$,w:rt,h:mt}=X;if(u(X))return[[0,0,rt,mt]];if($==="desk"||$.startsWith("bedroom-corner-desk-"))return[[0,-.33*mt,rt,.34*mt],[-.41*rt,.17*mt,.18*rt,.66*mt],[.41*rt,.17*mt,.18*rt,.66*mt]];if(!H&&($==="sofa"||$.startsWith("living-cloud-sofa-")))return mt>rt?[[-.25*rt,0,.5*rt,mt],[.22*rt,($==="sofa"?.3:-.3)*mt,.52*rt,.38*mt]]:[[0,-.215*mt,rt,.57*mt],[-.32*rt,.25*mt,.34*rt,.46*mt]];if(H){if($.startsWith("living-round-dining-"))return[[0,0,.58*rt,.58*mt]];if($==="table"||/-dining-set-/.test($))return[[0,0,.79*rt,.56*mt]];if($.includes("-desk-"))return[[0,0,rt,.85*mt]]}if(!H&&k(X)==="tabletop"){let pt=2*O(X);return[[0,0,pt,pt]]}return[[0,0,rt*.95,mt*.95]]}function W(X,H){if(![X?.x,X?.y,X?.w,X?.h].every(Number.isFinite)||X.w<=0||X.h<=0)return[];let $=(Number.isFinite(X.rotation)?X.rotation:0)*Math.PI/180,rt=[Math.cos($),Math.sin($)],mt=[-rt[1],rt[0]];return Y(X,H).map(([pt,bt,Mt,lt])=>({x:X.x+pt*rt[0]+bt*mt[0],y:X.y+pt*rt[1]+bt*mt[1],u:rt,v:mt,width:Mt/2,height:lt/2}))}let Z=(X,H,$)=>X*$[0]+H*$[1];function ct(X,H){let $=H.type.startsWith("living-round-dining-"),rt=W(H,!0),mt=O(X)*.9;return U.every(([pt,bt])=>rt.some(Mt=>{let lt=X.x+pt*mt-Mt.x,_t=X.y+bt*mt-Mt.y,vt=Math.abs(Z(lt,_t,Mt.u))/Mt.width,St=Math.abs(Z(lt,_t,Mt.v))/Mt.height;return $?Math.hypot(vt,St)<=1:vt<=1&&St<=1}))}function nt(X){return h(X)||k(X)!=="floor"||C.has(X.type)||I.test(X.type)?W(X,!1):[]}function it(X,H){let $=(rt,mt)=>rt.width*Math.abs(Z(...rt.u,mt))+rt.height*Math.abs(Z(...rt.v,mt));return Math.min(...[X.u,X.v,H.u,H.v].map(rt=>$(X,rt)+$(H,rt)-Math.abs(Z(X.x-H.x,X.y-H.y,rt))))}function et(X,H){let[$]=W(X,!1),[rt]=W(H,!0);if(!$||!rt||it($,rt)<=0)return!1;let mt=[$.x-rt.x,$.y-rt.y],pt=Z(...mt,rt.u)/rt.width,bt=Z(...mt,rt.v)/rt.height,Mt=H.type.startsWith("living-round-dining-"),lt;if(Mt){if(Math.hypot(pt,bt)<1)return!1;lt=-Z(...mt,$.v)/Math.hypot(...mt)}else{let Ot=Math.abs(pt)>=1,Bt=Math.abs(bt)>=1;if(Ot===Bt)return!1;lt=-Math.sign(Ot?pt:bt)*Z(...$.v,Ot?rt.u:rt.v)}if(lt<.8)return!1;let _t=H.type==="diningTable",vt=_t?46.4:Mt?41:42.3,St=(H.modelHeight??vt)*(_t?32:33)/vt;return(X.modelHeight??59)*30/59<St}function Pt(X,H,$,rt){let mt=0;for(let Mt of $)for(let lt of rt)mt=Math.max(mt,it(Mt,lt));if(mt<=2)return mt;let pt=k(X),bt=k(H);return pt==="tabletop"&&bt==="surface"&&ct(X,H)||pt==="surface"&&bt==="tabletop"&&ct(H,X)||h(X)&&u(H)&&et(X,H)||u(X)&&h(H)&&et(H,X)?0:mt}function Ct(X,H,$){let rt=nt(X);if(!rt.length)return;let mt=$?nt($):[],pt,bt=2;for(let Mt of H){if(Mt.id===X.id)continue;let lt=nt(Mt),_t=Pt(X,Mt,rt,lt);_t<=bt||mt.length&&_t<=Pt($,Mt,mt,lt)+.02||(pt=Mt,bt=_t)}return pt}function Rt(X){let H=X.filter(bt=>k(bt)==="surface"),$=H.filter(u),rt=new Set,mt=new Map,pt=new Map;for(let bt of X){let Mt=h(bt);if(!Mt&&k(bt)!=="tabletop")continue;let lt=Mt?$.find(vt=>et(bt,vt)):H.find(vt=>ct(bt,vt));if(!lt)continue;rt.add(bt.id);let _t=Mt?pt:mt;_t.has(lt.id)||_t.set(lt.id,[]),_t.get(lt.id).push(bt)}return rt.size?X.flatMap(bt=>rt.has(bt.id)?[]:[...pt.get(bt.id)??[],bt,...mt.get(bt.id)??[]]):X}function Tt(X,H,$){let rt=X.ownerDocument,mt=(T,tt,ut={})=>{let gt=rt.createElement(T);tt&&(gt.textContent=tt);for(let[z,w]of Object.entries(ut))gt.setAttribute(z,w);return gt},pt=mt("dialog","",{class:"model-library","aria-label":"Objects and models"}),bt=mt("header"),Mt=mt("h2","Objects & models"),lt=mt("button","Close",{type:"button"});bt.append(Mt,lt);let _t=mt("div","",{class:"model-library-filters"}),vt=mt("select","",{"aria-label":"Object library section"});for(let[T,tt]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])vt.append(mt("option",tt,{value:T}));let St=mt("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});_t.append(vt,St);let Nt=mt("div","",{class:"model-library-context"}),Ot=mt("p","",{role:"status",class:"model-library-status"}),Bt=mt("div","",{class:"model-library-list"});pt.append(bt,_t,Nt,Ot,Bt);let $t=mt("style");$t.textContent=`
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
    `,X.append($t,pt);let Gt,j=!1,oe=(T,tt)=>{let ut=mt("button",T,{type:"button"});return ut.addEventListener("click",tt),ut};function Vt(T){Gt=T,j=!1,vt.value="catalog",St.value="",B(),St.focus()}function B(){let{templates:T,paletteGroups:tt}=m(),ut=new Map(T.map(L=>[L.type,L])),gt=new Map(tt),{items:z,entities:w}=H(),E=o(St.value).trim(),R=(...L)=>E.split(/\s+/).every(V=>o(L.join(" ")).includes(V)),F=[];if(Nt.replaceChildren(),Gt&&(Nt.append(mt("strong",Gt.item?.name||Gt.entity?.name||Gt.entity?.entity_id)),Gt.entity&&Nt.append(oe(j?"Suggested models":"All compatible models",()=>{j=!j,B()})),Nt.append(oe("Cancel mapping",()=>{vt.value=Gt.entity?"devices":"placed",Gt=void 0,St.value="",B()}))),vt.value==="placed")for(let L of z){let V=ut.get(L.type);if(!R(L.name,V?.label,L.type,L.entityId))continue;let q=[L.w,L.h,L.modelHeight].filter(Number.isFinite).join(" \xD7 "),at=[V?.label||L.type,q&&q+" plan px",L.entityId].filter(Boolean).join(" \xB7 "),ot=[oe("Edit",()=>$({kind:"edit",itemId:L.id}))];T.some(At=>x(L,V,At))&&ot.push(oe("Change model",()=>Vt({item:L}))),F.push([L.name||V?.label||L.type,at,ot])}else if(vt.value==="devices"){let L=new Map;for(let V of z)V.entityId&&!L.has(V.entityId)&&L.set(V.entityId,V);for(let V of w){if(!c(V.entity_id)||!R(V.name,V.entity_id,V.area))continue;let q=L.get(V.entity_id),at=[V.entity_id,V.area,q?"On plan \xB7 "+q.name:"Available to map"].filter(Boolean).join(" \xB7 ");F.push([V.name||V.entity_id,at,[q?oe("Edit mapped object",()=>$({kind:"edit",itemId:q.id})):oe("Choose model",()=>Vt({entity:V}))]])}}else{let L=T.filter(V=>!V.legacy);if(Gt?.item&&(L=T.filter(V=>x(Gt.item,ut.get(Gt.item.type),V))),Gt?.entity){let V=v(Gt.entity,T);L=j?V.available:V.recommended}for(let V of L){let q=gt.get(V.group)||V.group;if(!R(V.label,V.type,V.tags,q))continue;let at=Gt?.item?{kind:"replace",itemId:Gt.item.id,modelId:V.type}:{kind:"place",modelId:V.type,...Gt?.entity?{entityId:Gt.entity.entity_id}:{}};F.push([V.label,q+" \xB7 "+V.w+" \xD7 "+V.h+" plan px",[oe(Gt?"Use model":"Place",()=>$(at))]])}}Bt.replaceChildren();for(let[L,V,q]of F.slice(0,48)){let at=mt("div","",{class:"model-library-row"}),ot=mt("div");ot.append(mt("strong",L),mt("small",V));let At=mt("div","",{class:"model-library-actions"});At.append(...q),at.append(ot,At),Bt.append(at)}Ot.textContent=F.length>48?"Showing 48 of "+F.length+". Search to narrow the list.":F.length?F.length+(F.length===1?" result":" results"):vt.value==="devices"&&!w.length?"Connect to Home Assistant to list devices.":"No matches."}return vt.addEventListener("change",()=>{Gt=void 0,St.value="",B()}),St.addEventListener("input",B),lt.addEventListener("click",()=>pt.close()),{open(T="placed"){Gt=void 0,j=!1,vt.value=T,St.value="",B(),pt.open||pt.showModal()},get isOpen(){return pt.open},close(){pt.open&&pt.close()}}}i.RoomcraftModels=Object.freeze({catalog:m,canMap:M,canReplace:x,suggestions:v,supportsHeight:b,resizeFootprint:S,splitDiningFurniture:p,placementRole:k,blockingPlacement:Ct,orderMountedObjects:Rt,mount:Tt,handoffKey:n})})(typeof window>"u"?globalThis:window);function vm(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new We().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var ZM=i=>Math.max(0,Math.min(1,i)),Zh=(i,t)=>i?.x===t?.x&&i?.y===t?.y;function ha({allowsPoint:i,allowsRoute:t,duration:e=.32,maximumDistance:n=125}){let s,r,o=0,a=0,c=0,l=0,u=0,h,f,d;function g(x,M){s=r=x,o=M,a=0}function y(x,M=!1){if(l=x,!s||x<c)return null;M&&(a=0);let v=a>0?ZM((x-o)/a):1,b=r.x+(s.x-r.x)*v,S=r.y+(s.y-r.y)*v;return i(b,S)?{x:b,y:S,progress:v,heading:u,current:Zh(h,s),walking:!M&&v<1&&Math.hypot(s.x-r.x,s.y-r.y)>2}:(g(s,x),c=x+.24,null)}function p(x,M,{observation:v,reduceMotion:b=!1}={}){if(!Number.isFinite(x?.x)||!Number.isFinite(x?.y)||!i(x.x,x.y))return!1;if(Zh(x,h)&&v===f)return!0;if(h=x,f=v,!s)return g(x,M),!0;let S=y(M,b)??s,A=Math.hypot(x.x-S.x,x.y-S.y);return Zh(x,s)?d=null:A<=n&&t(S.x,S.y,x.x,x.y)?(d=null,r=S,s=x,o=M,a=b?0:e,A>1&&(u=Math.atan2(x.x-r.x,x.y-r.y))):d&&Math.hypot(x.x-d.x,x.y-d.y)<=48&&t(d.x,d.y,x.x,x.y)?(g(x,M),c=M+.24,d=null):d=x,!0}function m(){s=r=h=d=void 0,f=void 0,c=u=0}return{observe:p,sample:y,clear:m,get hasPosition(){return!!s},get pendingReacquisition(){return!!s&&c>l}}}var $M=/(?:sofa|loveseat|chaise)-/,jM=/-desk-/;function bs(i,t,e,n,s,r,o){return{x:i,z:t,surface:e,yaw:n,width:s,depth:r,pose:o}}function JM(i,t,e){let n=i==="sofa"||i.includes("cloud-sofa"),s=n&&e>t,r=i.includes("loveseat")||i.includes("chaise")?2:3,o=[];if(s){let a=e*.88/r,c=t*.38;for(let u=0;u<r;u++){let h=-.44*e+a*(u+.5);o.push(bs(-.25*t+.018*Math.min(t,e),h,37,Math.PI/2,a-3,c,"lounge"))}let l=i==="sofa"?1:-1;o.push(bs(.22*t,l*.3*e,37,l>0?Math.PI:0,.48*t,.34*e,"lounge"))}else{let a=n?.57*e:e,c=n?-.215*e:0,l=.8*t/r;for(let u=0;u<r;u++)o.push(bs(-.4*t+l*(u+.5),c+a*.08,37,0,l-3,a*.7,"lounge"));n&&o.push(bs(-.32*t,.25*e,37,0,.33*t,.42*e,"lounge"))}return o}function KM(i,t){let{x:e,z:n,angle:s}=i,r=-Math.sin(s),o=Math.cos(s);return t.some(({x:a,z:c,item:l})=>{let u=a-e,h=c-n,f=Math.min(104,Math.max(50,Math.min(l.w,l.h)*.58));return Math.hypot(u,h)<=f&&u*r+h*o>=-8})}function QM(i,t){let{type:e,w:n,h:s}=i.item;if(e==="sofa"||$M.test(e))return JM(e,n,s);if(e==="diningChair"||e.startsWith("living-dining-chair-"))return[bs(0,0,30,0,n*.83,s*.83,"dining")];if(e==="chair"||e==="stool"||e.includes("desk-chair")){let r=e.includes("desk-chair")||KM(i,t)?"desk":"idle";return[bs(0,0,e==="stool"?32:41,0,n*.83,s*.83,r)]}if(e==="armchair"||e.includes("acorn-armchair"))return[bs(0,0,32,0,n*.65,s*.76,"lounge")];if(e==="bedroomBench"){let r=n>=58?2:1;return Array.from({length:r},(o,a)=>bs((a-(r-1)/2)*n*.44,0,34.2,0,n*.87/r,s*.91,"bench"))}return[]}function bm(i,t,e){let n=i.filter(({item:r})=>r.type==="desk"||jM.test(r.type)),s=[];for(let r of i){let{item:o,x:a,z:c,baseY:l,angle:u}=r,h=t.get(o.id)?.root;if(!h||l!==0)continue;let f=Math.sin(u),d=Math.cos(u);for(let[g,y]of QM(r,n).entries()){if(y.width<12||y.depth<11)continue;let p=a+y.x*d-y.z*f,m=c+y.x*f+y.z*d,x=e(p,m);if(x<7)continue;let M=y.yaw-u,v=h.position.y+y.surface*h.scale.y;v<10||v>84||s.push({id:`${o.id}:${g}`,x:p,z:m,y:v,heading:M,forwardX:Math.sin(M),forwardZ:Math.cos(M),pose:y.pose,reach:Math.min(42,Math.max(18,y.depth*.48+8)),behind:Math.max(7,y.depth*.32),fit:Math.min(1,y.width/24,y.depth/17,x/24)})}}return s}function $h(i,t,e,n,s=1){let r=t-i.x,o=e-i.z;return Math.hypot(r,o)>i.reach*s||r*i.forwardX+o*i.forwardZ<-i.behind?!1:!n||n(t,e,i.x,i.z)}function Mm(){let i,t,e,n;function s(o,a){let c=o.expiresAt;!Number.isFinite(c)||c<=e||((!i||c-e>3100||Math.hypot(o.x-i.x,o.y-i.y)>10)&&(i=o,t=c),e=c,n=a)}function r(o,a,c){return!!(i&&e-t>=1200&&c-n<=3100/1e3&&Math.hypot(o-i.x,a-i.y)<=10)}return{observe:s,ready:r}}var tS=24,eS=24,nS=.42,iS=.24,sS=8.9,fa=[{role:"papa",scale:[1.26,1.25,1.22],sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}],rS={idle:{lean:.03,tilt:0,thighs:-1.3,shins:1.16,hands:[-.43,-.4],fidget:.1,pace:2.1},lounge:{lean:-.13,tilt:.07,thighs:-1.16,shins:.92,hands:[-.22,-.14],fidget:.13,pace:1.8},dining:{lean:.06,tilt:.02,thighs:-1.34,shins:1.26,hands:[-.61,-.51],fidget:.14,pace:2.8},desk:{lean:.16,tilt:0,thighs:-1.26,shins:1.18,hands:[-.98,-.92],fidget:.12,pace:6.3},bench:{lean:.04,tilt:-.09,thighs:-1.28,shins:1.1,hands:[-.35,-.56],fidget:.22,pace:3.3}},da=(i,t,e)=>i+(t-i)*e,oS=i=>Math.min(1,Math.max(0,i)),aS=(i,t)=>Math.atan2(Math.sin(i-t),Math.cos(i-t));function pa(i,t=.12){return new Ge({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function cS(i,t,e,n=0,s=0){let r=!e&&t%4.8<.13;i.head.rotation.x=-.62+n+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.y=s,i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let o of i.eyes)o.scale.y=r?.15:.87}function jh(i,t=()=>0,{supportsRoute:e,floorClearance:n,seats:s=[]}={}){let r=new se;r.name="tracked-people",i.add(r);let o,a=new Map,c=fa.map(()=>[]),l=!1,u=!1,h=0,f=!1;function d(){return{sphere:new Ae(1,12,8),disc:new En(1,24).rotateX(-Math.PI/2),groundRing:new Bo(13.8,17.5,32).rotateX(-Math.PI/2),glasses:new Tn(1,.14,6,16),palette:fa.map(({sweater:S,trim:A,skin:_,hair:C})=>Object.fromEntries(Object.entries({sweater:S,trim:A,skin:_,hair:C}).map(([D,I])=>[D,pa(I)]))),ink:pa("#423c50",.09),cheek:pa("#d78383"),shoes:pa("#514656"),white:pa("#fff1dc"),shadow:new Oe({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new Oe({color:"#fff1cd",depthWrite:!1,toneMapped:!1})}}function g(S){o??=d();let{role:A,scale:_}=fa[S],{sweater:C,trim:D,skin:I,hair:U}=o.palette[S],k=A==="baby",O=new se;O.name=`radar-avatar-${A}`;let Y=new se;Y.name="radar-avatar-pose";let W=new se,Z=new se,ct=[],nt=[],it=[];r.add(O),O.add(Y),Y.add(W),W.scale.set(..._);let et=(Tt,X,H,$,rt,mt,pt,bt)=>{let Mt=new ce(o.sphere,X);return Mt.position.set(H,$,rt),Mt.scale.set(mt,pt,bt),Tt.add(Mt),Mt},Pt=new ce(o.disc,o.shadow);Pt.position.y=.13,Pt.scale.set(19,1,19),O.add(Pt);let Ct=new ce(o.groundRing,o.groundMark);Ct.position.y=.26,O.add(Ct),et(W,C,0,15,0,k?8.2:7.1,8.3,5.4),k?(et(W,D,0,17.5,4.8,4.9,4.1,1.15),et(W,o.white,0,17.4,5.9,1.5,1.5,.35)):(et(W,D,0,20.7,2.4,5.8,2.2,4),et(W,D,A==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let Tt of[-1,1]){let X=new se;X.position.set(Tt*3.4,10.3,.1),W.add(X);let H=new se;H.position.y=-4.65,X.add(H);let $=k?C:o.ink;et(X,$,0,-2.35,0,2.65,3.25,2.6),et(H,$,0,-1.6,0,2.4,3.1,2.4),et(H,k?D:o.shoes,0,-3.5,1.25,3.1,2.1,4),et(H,o.white,0,-4.15,3.25,2.75,1.1,2),it.push({thigh:X,shin:H});let rt=new se;rt.position.set(Tt*6.25,19.1,0),W.add(rt),et(rt,C,Tt*.9,-3.7,.15,2.75,5.3,2.7),et(rt,I,Tt*1.3,-7.8,.5,2.3,2.6,2.2),nt.push(rt)}Z.position.set(0,k?26:27.2,0),k&&Z.scale.set(1.16,1.17,1.12),W.add(Z),et(Z,U,0,1.3,-1.65,9.2,9.65,8.6),et(Z,I,0,0,1.9,8.65,8.45,7.5);let Rt=et(Z,U,-2.1,7.3,4.25,6.4,3.4,4.35);if(Rt.rotation.z=A==="papa"?-.27:.22,A==="mama"&&(et(Z,U,-6.7,-1.9,-3.8,3.6,8.1,5.2),et(Z,U,6.2,-1.7,-3.9,3.3,7.6,5.4),et(Z,U,2.8,10.4,-2.5,5.1,5.1,5.1),et(Z,D,4.4,8.7,2.2,2.8,1.1,1.1)),k){et(Z,U,-7.3,6.7,-2,3.35,3.7,3.5),et(Z,U,7.3,6.7,-2,3.35,3.7,3.5);let Tt=et(Z,D,.9,10,4.2,2.5,1.45,1.25),X=et(Z,D,4.1,10,4.2,2.5,1.45,1.25);Tt.rotation.z=-.4,X.rotation.z=.4,et(Z,o.white,2.5,9.8,5.1,1.15,1.2,1)}for(let Tt of[-1,1])if(et(Z,I,Tt*8.2,-.15,1.1,1.85,2.4,1.75),ct.push(et(Z,o.ink,Tt*3,1.2,8.95,.85,.87,.52)),et(Z,o.cheek,Tt*5.05,-1.25,7.95,1.18,.62,.52),A==="papa"){let X=new ce(o.glasses,o.ink);X.position.set(Tt*3.1,1.25,9.15),X.scale.set(2.5,2.15,1.55),Z.add(X)}return A==="papa"&&et(Z,o.ink,0,1.6,9.35,1.1,.28,.35),et(Z,o.ink,0,-1.95,9.15,1.38,.45,.38),{root:O,poseRoot:Y,body:W,head:Z,arms:nt,legs:it,eyes:ct,styleIndex:S,baby:k}}let y=(S,A)=>Number.isFinite(t(S,A))&&(!n||n(S,A)>0);function p(S,A,_){let C,D=1/0;for(let I of s){let U=Math.hypot(S-I.x,A-I.z);U>=D||_.has(I.id)||!$h(I,S,A,e)||(C=I,D=U)}return C}function m(S,A){let _=Math.max(0,h-S.poseAt);!S.seat&&A&&(S.seat=A,_=0),S.poseAt=h;let C=A?_/nS:-_/iS;S.seatAmount=u?+!!A:oS(S.seatAmount+C),!A&&!S.seatAmount&&(S.seat=void 0)}function x(S,A){let{character:_,seat:C,seatAmount:D}=S,{x:I,y:U,heading:k,walking:O,progress:Y}=A,W=t(I,U),Z=n?Math.min(1,n(I,U)/eS):1,ct=D*D*(3-2*D),nt=Math.cos(k),it=Math.sin(k),et=(C?C.x-I:0)*ct,Pt=(C?C.z-U:0)*ct,Ct=rS[C?.pose??"idle"],Rt=C?.fit??Z,Tt=C?C.y-W-sS*fa[_.styleIndex].scale[1]*Rt:0;_.root.position.set(I,W,U),_.root.rotation.y=k,_.root.scale.setScalar(Z),_.poseRoot.position.set((et*nt-Pt*it)/Z,Tt*ct/Z,(et*it+Pt*nt)/Z),_.poseRoot.scale.setScalar(da(Z,Rt,ct)/Z),_.poseRoot.rotation.y=C?aS(C.heading,k)*ct:0,_.poseRoot.userData.pose=ct>0?C.pose:"standing";let X=Math.floor(Math.max(0,h-S.born)*16)/16+.7+_.styleIndex*.62,H=Math.floor(Y*12)/12*Math.PI*4,$=O?Math.sin(H)*.56:0,rt=O?Math.abs(Math.sin(H))*1.9:(1+Math.sin(X*4.7))*.47,mt=.19*(1+Math.sin(X*2.6));_.body.position.y=u?0:da(rt*(_.baby?1.5:1),mt,ct),_.body.rotation.x=Ct.lean*ct;let pt=u?0:O?$*.15:Math.sin(X*2.8)*.045;_.body.rotation.z=da(pt,Ct.tilt,ct);for(let Mt=0;Mt<2;Mt++){let lt=Mt===0?-1:1,_t=O?-$*lt:u?0:Math.sin(X*3.1+Mt)*.09,vt=u?0:Math.sin(X*Ct.pace+Mt*2.6)*Ct.fidget,St=u?0:Math.sin(X*2.7+Mt)*.035;_.arms[Mt].rotation.x=da(_t,Ct.hands[Mt]+vt,ct),_.legs[Mt].thigh.rotation.x=da($*lt,Ct.thighs+St,ct),_.legs[Mt].shin.rotation.x=(Ct.shins+St*2)*ct}let bt=u||C?.pose==="desk"?0:Math.sin(X*1.08)*.13*ct;cS(_,X,u,Ct.lean*.45*ct,bt)}function M(S,A=l,_=!0){h=Number.isFinite(S)?S:h,u=A||l,f=!1;let C=[],D=new Set;for(let I of a.values()){let{character:U}=I,k=I.motion.sample(h,u);if(U.root.visible=!!k,!k){I.seat=void 0,I.seatAmount=0,I.poseAt=h;continue}f=!0;let{x:O,y:Y,current:W}=k,Z=_&&W&&I.dwell.ready(O,Y,h);I.seat&&(_&&$h(I.seat,O,Y,e,1.18)?D.add(I.seat.id):(I.seat=void 0,I.seatAmount=0)),C.push({track:I,sample:k,ready:Z})}for(let{track:I,sample:U,ready:k}of C){let O=k?I.seat??p(U.x,U.y,D):void 0;O&&D.add(O.id),m(I,O),x(I,U)}}function v(S,A,{reduceMotion:_=!1}={}){l=_;let C=Number.isFinite(A)?A:h,D=new Map;for(let U of Array.isArray(S)?S:[])if(!(typeof U?.id!="string"||!U.id||U.id.length>256||!Number.isFinite(U.x)||!Number.isFinite(U.y)||D.has(U.id)||!y(U.x,U.y))&&(D.set(U.id,U),D.size===tS))break;for(let[U,k]of a)D.has(U)||(k.character.root.visible=!1,c[k.character.styleIndex].push(k.character),a.delete(U));let I=fa.map(()=>0);for(let{character:U}of a.values())I[U.styleIndex]++;for(let U of[...D.keys()].filter(k=>!a.has(k)).sort()){let k=I.indexOf(Math.min(...I));I[k]++;let O=c[k].pop()??g(k),Y=ha({allowsPoint:y,allowsRoute:e??(()=>!0)});a.set(U,{character:O,motion:Y,dwell:Mm(),born:C,poseAt:C,seatAmount:0})}for(let[U,k]of D){let{motion:O,dwell:Y}=a.get(U);O.observe(k,C,{observation:k.expiresAt,reduceMotion:_}),s.length&&Y.observe(k,C)}M(C,_)}function b(){if(r.removeFromParent(),!!o){for(let S of[o.ink,o.cheek,o.shoes,o.white,o.shadow,o.groundMark])S.dispose();for(let S of o.palette)for(let A of Object.values(S))A.dispose();o.sphere.dispose(),o.disc.dispose(),o.groundRing.dispose(),o.glasses.dispose(),r.clear();for(let S of c)S.length=0;a.clear(),o=void 0}}return{setTracks:v,render:M,dispose:b,setVisible(S){r.visible=S},get hasMotion(){return!u&&a.size>0},get hasVisibleTracks(){return f},get hasPendingReacquisition(){return[...a.values()].some(({motion:S})=>S.pendingReacquisition)}}}var wm=Sa(ua(),1),$s=1e-7;function Sm(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var Vl=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),Ms=(i,t,e)=>e>=Math.min(i,t)-$s&&e<=Math.max(i,t)+$s;function lS([i,t,e,n],s,r,o,a){let c=Vl(i,t,e,n,s,r),l=Vl(i,t,e,n,o,a),u=Vl(s,r,o,a,i,t),h=Vl(s,r,o,a,e,n);return Math.abs(c)<$s&&Ms(i,e,s)&&Ms(t,n,r)||Math.abs(l)<$s&&Ms(i,e,o)&&Ms(t,n,a)||Math.abs(u)<$s&&Ms(s,o,i)&&Ms(r,a,t)||Math.abs(h)<$s&&Ms(s,o,e)&&Ms(r,a,n)?!0:c>0!=l>0&&u>0!=h>0}function ma(i,t,e,n,s,r){let o=s-e,a=r-n,c=o*o+a*a,l=c?Math.max(0,Math.min(1,((i-e)*o+(t-n)*a)/c)):0;return(i-e-l*o)**2+(t-n-l*a)**2}function uS(i,t,e,n,s,r){if(lS(i,t,e,n,s))return!0;if(!r)return!1;let[o,a,c,l]=i;return Math.min(ma(t,e,...i),ma(n,s,...i),ma(o,a,t,e,n,s),ma(c,l,t,e,n,s))<r}function Jh(i,t){let e=t.filter(n=>n.bottom===0).flatMap(n=>n.polygons);return i.length&&e.length?wm.default.difference(i,e):i}function ga(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>Sm(a,r,o)&&!c.some(l=>Sm(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let c of t)a=Math.min(a,ma(r,o,...c));return Math.sqrt(a)}function s(r,o,a,c,l=0){let u=Math.max(0,l-$s)**2;return e(r,o)&&e(a,c)&&!t.some(h=>uS(h,r,o,a,c,u))}return{contains:e,clearance:n,supportsRoute:s}}var Em=new We,Wl=new G,qr=class extends Wo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Zt(t,3)),this.setAttribute("uv",new Zt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ps(e,6,1);return this.setAttribute("instanceStart",new ti(n,3,0)),this.setAttribute("instanceEnd",new ti(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ps(e,6,1);return this.setAttribute("instanceColorStart",new ti(n,3,0)),this.setAttribute("instanceColorEnd",new ti(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ko(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Em.setFromBufferAttribute(e),this.boundingBox.union(Em))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Wl.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Wl)),Wl.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};kt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Dt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Un.line={uniforms:Ws.merge([kt.common,kt.fog,kt.line]),vertexShader:`
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
		`};var Ss=class extends Xe{constructor(t){super({type:"LineMaterial",uniforms:Ws.clone(Un.line.uniforms),vertexShader:Un.line.vertexShader,fragmentShader:Un.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Kh=new Ie,Tm=new G,Am=new G,gn=new Ie,yn=new Ie,Pi=new Ie,Qh=new G,tf=new Me,xn=new Xo,Rm=new G,Xl=new We,Yl=new zn,Li=new Ie,Ni,js;function Cm(i,t,e){return Li.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Li.multiplyScalar(1/Li.w),Li.x=js/e.width,Li.y=js/e.height,Li.applyMatrix4(i.projectionMatrixInverse),Li.multiplyScalar(1/Li.w),Math.abs(Math.max(Li.x,Li.y))}function hS(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){xn.start.fromBufferAttribute(s,a),xn.end.fromBufferAttribute(r,a),xn.applyMatrix4(e);let l=new G,u=new G;Ni.distanceSqToSegment(xn.start,xn.end,u,l),u.distanceTo(l)<js*.5&&t.push({point:u,pointOnLine:l,distance:Ni.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function fS(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-t.near;Ni.at(1,Pi),Pi.w=1,Pi.applyMatrix4(t.matrixWorldInverse),Pi.applyMatrix4(n),Pi.multiplyScalar(1/Pi.w),Pi.x*=r.x/2,Pi.y*=r.y/2,Pi.z=0,Qh.copy(Pi),tf.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(gn.fromBufferAttribute(c,f),yn.fromBufferAttribute(l,f),gn.w=1,yn.w=1,gn.applyMatrix4(tf),yn.applyMatrix4(tf),gn.z>h&&yn.z>h)continue;if(gn.z>h){let M=gn.z-yn.z,v=(gn.z-h)/M;gn.lerp(yn,v)}else if(yn.z>h){let M=yn.z-gn.z,v=(yn.z-h)/M;yn.lerp(gn,v)}gn.applyMatrix4(n),yn.applyMatrix4(n),gn.multiplyScalar(1/gn.w),yn.multiplyScalar(1/yn.w),gn.x*=r.x/2,gn.y*=r.y/2,yn.x*=r.x/2,yn.y*=r.y/2,xn.start.copy(gn),xn.start.z=0,xn.end.copy(yn),xn.end.z=0;let y=xn.closestPointToPointParameter(Qh,!0);xn.at(y,Rm);let p=le.lerp(gn.z,yn.z,y),m=p>=-1&&p<=1,x=Qh.distanceTo(Rm)<js*.5;if(m&&x){xn.start.fromBufferAttribute(c,f),xn.end.fromBufferAttribute(l,f),xn.start.applyMatrix4(o),xn.end.applyMatrix4(o);let M=new G,v=new G;Ni.distanceSqToSegment(xn.start,xn.end,v,M),e.push({point:v,pointOnLine:M,distance:Ni.origin.distanceTo(v),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var ql=class extends ce{constructor(t=new qr,e=new Ss({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Tm.fromBufferAttribute(e,o),Am.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Tm.distanceTo(Am);let r=new ps(s,2,1);return t.setAttribute("instanceDistanceStart",new ti(r,1,0)),t.setAttribute("instanceDistanceEnd",new ti(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ni=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;js=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Yl.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=js*.5;else{let h=Math.max(s.near,Yl.distanceToPoint(Ni.origin));l=Cm(s,h,c.resolution)}if(Yl.radius+=l,Ni.intersectsSphere(Yl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Xl.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=js*.5;else{let h=Math.max(s.near,Xl.distanceToPoint(Ni.origin));u=Cm(s,h,c.resolution)}Xl.expandByScalar(u),Ni.intersectsBox(Xl)!==!1&&(n?hS(this,e):fS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Kh),this.material.uniforms.resolution.value.set(Kh.z,Kh.w))}};var Zr=class extends qr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var Zl=class extends ql{constructor(t=new Zr,e=new Ss({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var Im="#ffce84",dS="#a8f5ff",ef="#10242e";function $l(i,t,e){return new Ss({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function jl(i,t,e,n){let s=new Zr;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new Zl(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function Pm(i,t,e,n){let s=new he().setFromPoints(t.map(({x:o,y:a})=>new G(o,.5,a)));s.setIndex(Bn.triangulateShape(t.map(({x:o,y:a})=>new Dt(o,a)),[]).flat());let r=new ce(s,e);r.renderOrder=n,i.add(r)}function Lm(){let i=new os,t={side:rn,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new Oe({...t,color:Im,opacity:.13}),n=new Oe({...t,color:ef,opacity:.95}),s=$l(ef,4.6,{opacity:.8}),r=$l(Im,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=$l(ef,3.5,{...o,opacity:.65}),c=$l(dS,1.7,{...o,opacity:.9});function l({origin:f,forward:d}){let g=(p,m=0)=>({x:f.x+d.x*p-d.y*m,y:f.y+d.y*p+d.x*m}),y=Array.from({length:28},(p,m)=>{let x=m/28*Math.PI*2;return g(10*Math.cos(x),10*Math.sin(x))});jl(i,[g(10),g(56)],[s,r],5),jl(i,[g(45,-7),g(56),g(45,7)],[s,r],5),Pm(i,y,n,7),jl(i,[...y,y[0]],[s,r],8)}function u(f){for(let g of new Set(i.children.map(y=>y.geometry)))g.dispose();i.clear();let d=new Map;for(let g of f){let{points:y,kind:p,id:m,origin:x,forward:M}=g;if(y.length<3)continue;let v=p==="nominal";v&&Pm(i,y,e,0),jl(i,[...y,y[0]],v?[s,r]:[a,c],v?3:1),x&&M&&d.set(m,g)}for(let g of d.values())l(g)}function h(){u([]);for(let f of[e,n,s,r,a,c])f.dispose()}return{scene:i,setZones:u,dispose:h}}var Dm=Sa(ua(),1);var pS=4096,mS=.18,gS=new Xt("#465fc4"),Nm=new Xt("#cc548d"),yS=new Xt("#ffd572");function xS(i,t,e){let n=e*.48,s=n*.83;return[[i-s,t-n],[i+s,t-n],[i+n,t-s],[i+n,t+s],[i+s,t+n],[i-s,t+n],[i-n,t+s],[i-n,t-s],[i-s,t-n]]}function _S(i,t,e,n,s){let[r,...o]=e.map(l=>l.slice(0,-1).map(([u,h])=>new Dt(u,h))),a=Bn.triangulateShape(r,o),c=[r,...o].flat();for(let l of a)for(let u of l){let{x:h,y:f}=c[u];i.push(h,mS,f),t.push(n.r,n.g,n.b,s)}return a.length>0}function vS(i,t,e){let{cells:n,cellSize:s}=e??{};if(!Array.isArray(n)||!Number.isFinite(s)||s<=0||s>200)return null;let r=n.slice(0,pS).filter(h=>[h?.x,h?.y,h?.hits].every(Number.isFinite)&&h.hits>0&&t.contains(h.x,h.y));if(!r.length)return null;let o=r.reduce((h,{hits:f})=>Math.max(h,f),0),a=[],c=[],l=0;for(let{x:h,y:f,hits:d}of r){let g=Math.sqrt(d/o),y=g<.55?gS.clone().lerp(Nm,g/.55):Nm.clone().lerp(yS,(g-.55)/.45),p=!1;for(let m of Dm.default.intersection([xS(h,f,s)],i))p=_S(a,c,m,y,.36+g*.42)||p;p&&l++}if(!l)return null;let u=new he;return u.setAttribute("position",new Zt(a,3)),u.setAttribute("color",new Zt(c,4)),{geometry:u,drawn:l}}function Um(i){let t=new se;t.name="Roomcraft radar heat map";let e=ga(i),n=new Oe({vertexColors:!0,side:rn,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}),s;function r(a){s&&(t.remove(s),s.geometry.dispose(),s=void 0);let c=vS(i,e,a);return c?(s=new ce(c.geometry,n),t.add(s),c.drawn):0}function o(){r(null),n.dispose()}return{root:t,setHistory:r,dispose:o}}var bS=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),MS=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),Fm={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},$r=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"],sunrise:["#a9aa9e","#71aaa8","#536f9b","#d9dce8","#e5b7bc","#ffe0ae"],sunset:["#b3a08f","#7296a1","#635879","#f0cbc4","#d39a9b","#ffae80"]}).map(([i,t])=>[i,t.map(e=>new Xt(e))])),nf={sunrise:["#efad92","#8baac6"].map(i=>new Xt(i)),sunset:["#e58968","#907fa6"].map(i=>new Xt(i))},Om=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:ya,smoothstep:SS}=le;function wS({shoreline:i,farZ:t,focusX:e}){let n=[],s=[],r=[];for(let[a,{x:c,z:l}]of i.entries()){let u=a*2;n.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new he;return o.setAttribute("position",new Zt(n,3)),o.setAttribute("uv",new Zt(s,2)),o.setIndex(r),o}var ES=`
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
`,TS=`
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
`;function Bm({y:i,farZ:t,shoreline:e,focusX:n}){let s={...Ws.clone(kt.fog),waterTime:{value:0},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},solarBand:{value:0},moon:{value:0},moonLight:{value:new Dt(0,1)},bodyPosition:{value:new Dt},solarPosition:{value:new Dt},solarWarmTint:{value:nf.sunrise[0]},solarCoolTint:{value:nf.sunrise[1]}};for(let[c,l]of Om.entries())s[l]={value:$r.clear[c].clone()};let r=new Xe({uniforms:s,vertexShader:ES,fragmentShader:TS,toneMapped:!1,fog:!0}),o=new ce(wS({shoreline:e,farZ:t,focusX:n}),r);o.name="Ocean and shore wash",o.position.set(n,i,t);function a(c,l={}){let{night:u,daylightKnown:h,condition:f,moonPhase:d,moonAzimuth:g,moonElevation:y,skyProgress:p,windSpeed:m,windBearing:x,reduceMotion:M,reflections:v=!0}=l,b=l.solar??qi(l),S=bS.has(f),A=$r[S?"overcast":"clear"],_=b.phase==="sunset"||b.rising===!1?"sunset":"sunrise",C=Math.max(b.twilight,b.lowSun);for(let[Pt,Ct]of Om.entries())s[Ct].value.lerpColors($r.night[Pt],A[Pt],b.daylight).lerp($r[_][Pt],C*(S?.24:.46));let D=Object.hasOwn(Fm,d)?Fm[d]:void 0,I=h||Number.isFinite(l.sunElevation)||f==="sunny",U=I?b.disc*(.97-b.cloud*.42):0,k=(u||b.phase==="night")&&D!==void 0?.93*(1-SS(b.elevation,-12,-3)):0,O=k>U;O?s.bodyTint.value.copy($r.night[5]):s.bodyTint.value.lerp($r[_][5],C*.52);let Y=MS.has(f),W=Number.isFinite(c)&&!M?c:0;s.waterTime.value=W,s.rain.value=Y?1:0,s.fog.value=f==="fog"?1:0;let Z=Number.isFinite(m)?ya(m/18,0,1):0,ct=Number.isFinite(x)?-Math.sin(le.degToRad(x)):1;s.reflectedWind.value=Math.sin(W*.09)*ct*Z*24;let nt=Y||f==="windy"||f==="windy-variant";s.roughness.value=1+Math.max(nt?.65:0,Z*.65),s.cloudCover.value=v?S?.94:f==="partlycloudy"?.64:u?.32:.24:0,s.bodyVisibility.value=!v||S?0:Math.max(k,U),s.solarBand.value=v&&I?C*(S?.3:1-b.cloud*.48):0,[s.solarWarmTint.value,s.solarCoolTint.value]=nf[_],s.moon.value=O?1:0,s.solarPosition.value.set(b.east*154,38+ya(b.elevation/75,0,1)*20);let it=Number.isFinite(p)?ya(p,0,1):void 0,et=it===void 0?void 0:le.lerp(-145,145,it);if(O){s.moonLight.value.set(Math.sin(D),Math.cos(D));let Pt=et??(Number.isFinite(g)?ya((g-180)*1.08,-180,180):46+Math.sin(W*.014)*27),Ct=Number.isFinite(y)?32+ya(y/75,0,1)*24:42;s.bodyPosition.value.set(Pt,Ct)}else s.bodyPosition.value.copy(s.solarPosition.value)}return{mesh:o,update:a}}var Jl=26,AS=92,jr=4,RS=18,CS=188;function zm(i){let{minZ:t,maxZ:e}=i.houseBounds,n=t-(e-t)*.11-46,s=i.editableStructure?1/0:t-146,r=Math.min(i.bounds.minZ,n,s)-RS,o=r-2*Jl-AS;return{nearZ:r,farZ:o,sceneryMinZ:o-CS}}function Hm(i,{nearZ:t,farZ:e},n,s,r){let o=e+Jl,a=t-Jl,c=(o+a)/2,l=r-s/2,u=r+s/2,h=(f,d,g,y)=>i.box(s,g,d-f,y,r,n+g/2,(f+d)/2);h(o,a,1.2,"#73767c"),h(o,o+3.4,1.4,"#656b71"),h(a-3.4,a,1.4,"#656b71");for(let[f,d,g,y]of[[e,o,o-jr,e],[a,t,a,a+jr]]){h(f,d,5,"#c0b6a7"),h(g,g+jr,6.2,"#d0c3b0");let p=Jl-jr;for(let m=l+36;m<u;m+=72)i.box(1.15,.18,p,"#a69c91",m,n+5.04,y+p/2)}for(let f=l+36;f+17<u;f+=72)i.box(34,.2,2.8,"#e9ce91",f,n+1.24,c);return{centerX:r,width:s,surfaceY:n+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+jr,maxZ:t,surfaceY:n+5},{minZ:e,maxZ:o-jr,surfaceY:n+5}]}}function sf(i,t,e,n){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new he;o.setAttribute("position",new Zt(s,3)),o.setIndex(r),o.computeVertexNormals(),i.add(o,n,0,0,0)}function IS(i,t,e,n,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new Ro(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,h=Math.sin(r+c*1.62)*s*.21;i.add(l,c%2?a:o,t+u,n+s*.46,e+h)}}function PS(i,t,e,n,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*n,u=e+o,h=s+.1;i.ball(a,c,13,"#d7bd94",l,h,u),i.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,h+.5,u+4);for(let[f,d,g]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])IS(i,l+a*f,u+d,h+c*.75,g,f*7)}}function LS(i,t,e,n){let o=e-13.5+.6;i.box(19,2.5,27,"#ac987e",t,n+1.28,o);for(let a=0;a<7;a++)i.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,n+2.6,e-1.25-a*3.8);for(let a of[-1,1])i.box(.9,.8,27+.6,"#b4a086",t+a*19/2,n+2.8,o)}function NS(i,t,e,n,s,r,o){i.box(1.4,16.6,1.4,"#b5a08a",t,n+16.6/2,e),i.ball(1.6,.95,1.6,r,t,n+16.6+3.6,e);for(let u=0;u<8;u++){let h=(p,m,x)=>[Math.cos(p)*m,x,Math.sin(p)*m],f=o+u*2*Math.PI/8,d=o+(u+1)*2*Math.PI/8,g=[[0,16.6+3.4,0],h(f,16*.54,16.6+2.1),h(d,16*.54,16.6+2.1),h(f,16,16.6-.55),h(d,16,16.6-.55),h(f,16,16.6-2),h(d,16,16.6-2)],y=new he;y.setAttribute("position",new Zt(g.flat(),3)),y.setAttribute("uv",new Zt(g.flatMap(([p,,m])=>[p/32+.5,m/32+.5]),2)),y.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),y.computeVertexNormals(),i.add(y,u%2?r:s,t,n,e)}}function km(i,t,e,n,s,r){let o=(h,f)=>[t+h*Math.cos(r)+f*Math.sin(r),e-h*Math.sin(r)+f*Math.cos(r)],a=(h,f,d,g,y,p,m)=>{let[x,M]=o(y,m);i.box(h,f,d,g,x,n+p,M,r)};for(let h of[-1,1])a(1.1,1.2,18,"#988679",h*4.5,2.15,0),a(1,2.1,1.2,"#988679",h*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Te(8.4,.85,8);u.rotateX(-Math.PI/6),i.add(u,s,c,n+4.4,l,r)}function DS(i,t,e,n,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*n,h=e+o;NS(i,u,h,s,a,c,l),km(i,u-13,h-15,s,c,l-.17),km(i,u+14,h-14,s,a,l+.12),i.box(8.6,.22,15,"#e9cda5",u+23,s+.99,h+7,l*2)}}function Gm(i,{farZ:t},e,{minX:n,maxX:s},r=6200,o=(n+s)/2){let a=(n+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,m)=>{let x=l+r*m/c,M=x-a,v=t-108+14*Math.cos((M+110)*.006)+7*Math.sin((M-90)*.013);return{x,z:v}}),h=u.map(({x:p})=>[p,e+.28,t+.4]),f=u.map(({x:p,z:m})=>[p,e+.71,m+22]),d=u.map(({x:p,z:m})=>[p,e+.44,m+6]),g=u.map(({x:p,z:m})=>[p,e+.17,m-31]);sf(i,h,f,"#e3cba0"),sf(i,f,d,"#dbbd92"),sf(i,d,g,"#c8a47e");let y=Math.max(940,s-n);PS(i,a,t,y,e);for(let p of[-1,1])LS(i,a+p*y*.245,t,e);return DS(i,a,t,y,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:Di}=le,ee={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},Vm=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],US=new Map(Vm.map(i=>[i.id,i])),Wm=[{id:"teal-semi",label:"Teal semi with box trailer",length:119,width:29,paint:"#61978e",roof:"#9bc0a8",trailer:"#eadcbd",stripe:"#83a89c"},{id:"coral-reefer",label:"Coral semi with refrigerated trailer",length:122,width:29,paint:"#b97c76",roof:"#e2ad95",trailer:"#e4e5d8",stripe:"#7298a7",refrigerated:!0}],FS=new Map(Wm.map(i=>[i.id,i])),Xm=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],Ym=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],OS=new Map(Xm.map(i=>[i.id,i])),BS=new Map(Ym.map(i=>[i.id,i])),qm=({id:i,label:t,length:e,width:n,detail:s})=>Object.freeze({id:i,label:t,length:e,width:s==="food"?n+2:n}),Kl=Object.freeze([...Vm,...Wm,...Xm].map(qm)),Ql=Object.freeze(Ym.map(qm));function kS(i){let t=new he;return t.setAttribute("position",new Zt(i.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function tu(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Xt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Ee(a,3)),r}),e=Gn(t);for(let n of t)n.dispose();return e.computeBoundingBox(),e}function xa(i,t){let e=i.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),n=[],s=(i.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;n.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)n.push(0,o,o+1,s,s+o+1,s+o);let r=new he;return r.setAttribute("position",new Zt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function zS(i){let t=[],e=(W,Z)=>t.push([W,Z]),n=(W,Z,ct,nt,it,et,Pt)=>e(new Te(nt,it,et).translate(W,Z,ct),Pt),s=(W,Z)=>e(kS(W),Z),r=(W,Z,ct,nt,it,et,Pt)=>{let Ct=[[Z,nt,et],[ct,nt,et],[ct,it,et],[Z,it,et]];s(W>0?Ct:Ct.reverse(),Pt)},{width:o,tire:a,body:c,roof:l,detail:u}=i,h=i.length-2.8,f=h*.5,d=o*.435,g=a*.78,y=8.25+a*.52,p=y-(u==="sports"||u==="convertible"?1.8:.75);e(xa([[-f,d*.76,y-1.6],[-f+2.4,d*.93,y-.2],[-f+6.2,d,y],[f-6.2,d,y-.24],[f-2.4,d*.92,p+.35],[f,d*.75,p]],g),c);let m=g+.95;for(let W of[-1,1])n(W*(f-.22),m,0,1.42,1.58,d*1.57,ee.bumper),n(W*(f+.05),m+.82,0,1.08,.95,4.5,ee.plate);n(f+.1,p-2.8,0,.65,1.2,d*.64,ee.grille),n(f+.38,p-2.62,0,.24,.35,d*.55,ee.rim);for(let W of[-1,1]){n(0,g+1.3,W*(d+.04),h*.53,.9,.34,ee.bumper);for(let Z of[-.323,.323]){let ct=h*Z,nt=W*(d+.05);e(new $e(a,a,2.9,10).rotateX(Math.PI/2).translate(ct,a,nt),ee.tire),e(new En(a*.57,8).rotateY(W<0?Math.PI:0).translate(ct,a,nt+W*1.46),ee.rim),e(new En(a*.28,6).rotateY(W<0?Math.PI:0).translate(ct,a,nt+W*1.48),ee.hub)}}let[x,M,v,b]=i.cabin.map(W=>h*W),S=y-.35,A=i.height-1.25,_=d*.88,C=_*(i.windows>2||u==="camper"||u==="delivery"?.94:.79),D=W=>Di(_,C,W),I=W=>Di(S,A,W),U=(W,Z,ct,nt=0)=>[Di(Di(x,M,Z),Di(b,v,Z),W),I(Z),ct*(D(Z)+nt)];function k(W,Z,ct,nt,it=.2,et=.85,Pt=.08){let Ct=[U(Z,it,W,Pt),U(ct,it,W,Pt),U(ct,et,W,Pt),U(Z,et,W,Pt)];s(W>0?Ct:Ct.reverse(),nt)}function O(W,Z,ct,nt,it,et,Pt=0){let[Ct,Rt]=W>0?[b,v]:[x,M],Tt=(H,$)=>[Di(Ct,Rt,$)+W*Pt,I($),H*D($)],X=[Tt(ct,nt),Tt(Z,nt),Tt(Z,it),Tt(ct,it)];s(W>0?X:X.reverse(),et)}function Y(W){O(W,-.81,.81,.16,.88,ee.window,.08),O(W,-.72,.73,.23,.82,ee.glass,.13),O(W,-.67,.64,.67,.75,ee.glassGlow,.18)}if(u==="convertible"){O(1,-.88,.88,0,1,l,.08),Y(1),n((x+v)/2,S+.2,0,(v-x)*.96,1.05,_*1.92,ee.window);for(let W of[-1,1])n(x+5.7,S+2.35,W*_*.43,7.7,2.5,5.6,ee.upholstery),n(x+2.2,S+3.7,W*_*.43,2,5.2,6,ee.tan)}else{for(let it of[-1,1])k(it,0,1,c,0,1,0);O(1,-1,1,0,1,c),O(-1,-1,1,0,1,c),Y(1),["delivery","cargo","food"].includes(u)||Y(-1);let W=(v+M)/2,Z=v-M+.38;n(W,A+.34,0,Z,.84,C*2.05,l),u==="bubble"&&n(W,A+.79,0,Z*.88,.52,C*1.67,l),u==="sunroof"&&(n(W,A+.82,0,Z*.48,.24,C*1.12,ee.window),n(W-Z*.12,A+.98,0,.65,.18,C,ee.glassGlow));let ct=i.windows??2,nt=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:ct},(it,et)=>[(et+.16)/ct,(et+.86)/ct]);for(let it of[-1,1])for(let[et,Pt]of nt)k(it,et,Pt,ee.window),k(it,et+.011,Pt-.009,ee.glass,.29,.79,.13),k(it,et+.023,Pt-.025,ee.glassGlow,.64,.72,.18)}for(let W of[-1,1])n(b-3,S+1.05,W*(d+.2),3.2,1.8,1.75,l),n(Di(x,b,.36),y-1.45,W*(d+.1),2.8,.46,.24,ee.rim);return{add:e,box:n,sideFace:r,glazingSide:k,bodyParts:t,recipe:i,length:h,outer:d,shoulder:y,nose:f,frontY:p}}function HS(i,t){let{length:e,outer:n,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=i,l=-e*.454,u=e*.105,h=r.height-.4,f=u-l;o(xa([[l,n*.93,h-.7],[l+1.6,n,h],[u-1.6,n,h],[u,n*.93,h-.7]],s-.8),t),a((l+u)/2,h+.1,0,f-3.5,.28,n*1.6,r.roof);for(let d of[-1,1]){let g=d*(n+.1);c(d,l+3,u-3,s+1.6,s+2.45,g,r.body)}for(let d of[-.4,0,.4])a(l-.13,(s+h)/2,n*d,.26,h-s-3.1,.4,ee.rim);return{rear:l,front:u,top:h}}function GS(i){let{recipe:t,box:e,sideFace:n,glazingSide:s,length:r,outer:o,shoulder:a}=i,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let h=l+.5;for(let f of[-1,1])e(r*-.18,h,f*o*.51,r*.3,.85,.83,ee.roofRail);if(c==="trail"){for(let f of[-.29,-.07])e(r*f,h+.55,0,1.05,.75,o*1.18,ee.roofRail);e(r*-.18,h+1.1,0,r*.17,1.65,o*.78,ee.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,ee.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let h=r*-.25;e(h,a+.22,0,r*.35,.42,o*1.43,ee.wood);for(let f of[-1,1])e(h,a+.93,f*o*.84,r*.34,2.28,1.72,u),e(h,a+.48,f*o*.38,r*.33,.25,.4,ee.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,ee.tan)}else if(c==="cargo"||c==="food"){let{rear:h,front:f}=HS(i,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let d=a+7;n(1,h+5.5,f-4.5,d,d+8.4,o+.19,ee.window),e((h+f)/2,d,o+.75,f-h-9.5,.75,2.65,ee.wood);for(let g=0;g<7;g++)e(Di(h+6,f-4.5,g/6),d+8.6,o+1.4,2.5,1.05,2.75,g%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let h of[-1,1])c==="delivery"?(s(h,.1,.61,"#e5d6e4",.28,.65,.12),s(h,.18,.54,"#b39cc2",.43,.49,.18)):(s(h,.09,.61,"#456575",.29,.68,.12),s(h,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,h*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let h of[-1,1])e(0,a-1.05,h*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,ee.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function rf(i,t,e){return[{role:"body",geometry:tu(i),material:new Ge({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new Ge({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new Ge({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function VS({length:i,width:t,paint:e,roof:n,trailer:s,stripe:r,refrigerated:o}){let a=[],c=(p,m)=>a.push([p,m]),l=(p,m,x,M,v,b,S)=>c(new Te(M,v,b).translate(p,m,x),S),u=-i/2+1.3,h=i/2-1.3,f=14,d=t/2-1.15,g=d-.7;c(xa([[u,d-1.2,32],[u+2,d,34],[f-2,d,34],[f,d-1,32]],10.2),s),c(xa([[17,g-1,18],[21,g,22],[45,g,22],[h-4,g-1,16],[h,g-2,14]],7),e),c(xa([[27,g-1,28],[31,g-.7,32],[42,g-.7,31],[47,g-1.6,26]],16),n),l(48,23.6,0,.9,6.8,g*1.5,ee.window),l(48.55,25.8,0,.22,.8,g*1.4,ee.glassGlow),l(h+.27,11,0,.56,5.9,9,ee.grille),l(h+.61,8.6,0,.55,1.12,g*1.55,ee.rim),l(u-.32,10.6,0,.62,1.2,2*d-3,ee.bumper),l(f+2.8,9.1,0,10,1.5,12,ee.bumper);for(let p of[-1,1]){l((u+f)/2,15,p*d,f-u-5,2.1,.39,r),l((u+f)/2,26,p*(d+.06),f-u-10,.32,.3,"#f6edd3"),l(40,25,p*(g-.5),7.8,5.25,.32,ee.window),l(47,21,p*(g+.2),2.1,2.1,1.5,e),l(35,9.5,p*(g+.25),7.2,.85,1.12,ee.rim),l(u-.1,22,p*d*.41,.48,13.2,.51,ee.rim);for(let m of[u+9,u+19,23,32,h-8.2]){let x=p*(d-1.42);c(new $e(4.35,4.35,2.8,8).rotateX(Math.PI/2).translate(m,4.35,x),ee.tire),c(new En(2.47,6).rotateY(p<0?Math.PI:0).translate(m,4.35,x+p*1.41),ee.hub)}}o&&(l(f+1.2,27,0,2.6,7.9,8.8,"#eee5ce"),l(f+2.55,27.8,0,.2,3.9,6.4,r));let y=(p,m)=>tu([-1,1].map(x=>[new Te(.42,1.3,3.1).translate(p,m,x*(d-3.7)),"#ffffff"]));return rf(a,y(h+.38,12.25),y(u-.54,12.4))}function Zm(i,t){let{style:e,length:n,paint:s,trim:r,jacket:o,helmet:a}=i,c=[],l=(Rt,Tt)=>c.push([Rt,Tt]),u=(Rt,Tt,X)=>l(new Te(...X).translate(...Tt),Rt),h=(Rt,Tt,X,H=0)=>l(new Ae(1,8,5).scale(...X).rotateZ(H).translate(...Tt),Rt);function f(Rt,Tt,X,H){let $=new G(...Tt),rt=new G(...X),mt=new G().subVectors(rt,$),pt=new fn().setFromUnitVectors(new G(0,1,0),mt.clone().normalize());l(new $e(H,H,mt.length(),5,1,!0).applyQuaternion(pt).translate(...$.lerp(rt,.5).toArray()),Rt)}let d=t?1:.75,g=n*(t?.132:.15),y=-n*(e==="longtail"?.309:.326),p=n*.326,m=[n*-.024,g+d*1.25,0],x=[n*(e==="cruiser"?-.16:-.115),n*(e==="trail"?.4:e==="cruiser"?.327:.369),0],M=e==="road"||e==="racer",v=[n*(M?.234:.204),x[1]+(M?.5:3.7)*d,0],b=d*(t?2.2:1.36),S=d*(t?1.04:.65),A=d*(t?.9:.65),_=e!=="road";for(let Rt of[y,p]){l(new Tn(g-S,S,4,12).translate(Rt,g,0),ee.tire),_&&l(new Tn(g+d*.37,d*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(Rt,g,0),s);for(let Tt of[0,Math.PI/3,Math.PI*2/3]){let X=g-S*1.35,H=Math.cos(Tt)*X,$=Math.sin(Tt)*X;f(ee.rim,[Rt-H,g-$,0],[Rt+H,g+$,0],d*.23)}l(new $e(d*1.05,d*1.05,b,8).rotateX(Math.PI/2).translate(Rt,g,0),ee.hub)}let C=[y,g,0];f(s,C,x,A),f(s,C,m,A),f(s,x,m,A),f(s,m,v,A);let D=e==="basket"||e==="scooter"?[v[0]*.7,m[1]+d*2.65,0]:v;f(s,x,D,A),D!==v&&f(s,D,v,A);for(let Rt of[-1,1])f(ee.rim,[v[0],v[1]-d*2.3,Rt*b*.38],[p,g,Rt*b*.45],A*.7);u(ee.bumper,[x[0]-.25,x[1]+d*.4,0],[d*(t?7.1:4.8),d*1.08,d*3.15]);let I=d*(t?5.05:4.75),U=v[0]+(M?d*1.85:-d*.8),k=v[1]+(M?-d*.6:d*.25);for(let Rt of[-1,1]){let Tt=[U,k,Rt*I];f(ee.rim,v,Tt,d*.47),f(ee.tire,[U+d*.6,k,Rt*I*.82],Tt,d*.63)}if(t){u(ee.bumper,[m[0]+.4,m[1]+1.05,0],[6.4,4.9,5.4]);let Rt=e==="scooter"?[v[0]+2.1,x[1]-2.3,0]:[x[0]+5.5,x[1]+.7,0],Tt=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(h(s,Rt,Tt,e==="scooter"?.34:-.18),u(r,[Rt[0]+.8,Rt[1]+.15,Tt[2]*.87],[Tt[0]*1.18,1,.8]),u(r,[Rt[0]+.8,Rt[1]+.15,-Tt[2]*.87],[Tt[0]*1.18,1,.8]),e==="racer")h(ee.window,[v[0]+2,v[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[y+1.75,x[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,g*2.1+1.05,0],[7.25,.82,3.65]),u(ee.rim,[y+1.55,x[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")h(s,[y+3.7,x[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[m[0],g+1.1,0],[8.2,1.22,6.2]);else for(let X of[-1,1])f(ee.rim,[y-2.2,g+2.1,X*2.8],[m[0]+4.5,g+.45,X*3.25],.79)}else{let Rt=e==="longtail"?[y+1.1,g*2.05+1.8,0]:[p-.98,v[1]-1.55,0];e==="basket"||e==="longtail"?(u(ee.wood,Rt,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[Rt[0],Rt[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(ee.tan,[Rt[0],Rt[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[y+1.65,g+1.05,2],[4.2,3.4,1.85]),u(ee.roofRail,[y+1.6,g*2.05+.45,0],[5.3,.66,4.3]))}let O=[x[0]-d*.38,x[1]+d*2.05,0],Y=[O[0]+(M?3.05:1.05)*d,O[1]+d*3.75,0],W=[Y[0]+(M?3.35:.95)*d,Y[1]+(M?3.1:4.85)*d,0],Z=M?-.57:-.22;h(o,Y,[d*2.6,d*4.15,d*3],Z),h(a,W,[d*2.94,d*2.68,d*2.62]),h(ee.window,[W[0]+d*2.1,W[1]-d*.4,0],[d*1.08,d*1.05,d*2.2]),(e==="commuter"||e==="trail")&&u(r,[Y[0]-d*2.1,Y[1]+d*.6,0],[d*1.9,d*3.3,d*3.5]);let ct="#4b4e63",nt="#e2b491";for(let Rt of[-1,1]){let Tt=[Y[0]+d*1.1,Y[1]+d*1.65,Rt*d*2.43],X=[Di(Tt[0],U,.48),Di(Tt[1],k,.52)-d,Rt*d*3.48],H=[U,k,Rt*I*.93];f(o,Tt,X,d*.95),f(o,X,H,d*.76),u(nt,H,[d*1.5,d*1.11,d*1.09]);let $=t?0:Rt*d*1.35,rt=[O[0]+d*(t?4.3:4.9)+$,O[1]-d*3.5,Rt*d*2.64],mt=[m[0]+d*(e==="scooter"?2.65:.35)+$,m[1]+d*.27-$,Rt*d*2.5];f(ct,[O[0],O[1],Rt*d*1.86],rt,d*1.12),f(ct,rt,mt,d*.88),u(ee.tire,[mt[0]+d*.25,mt[1],mt[2]],[d*2.15,d*.95,d*1.42])}let it=d*(t?1.34:.84),et=[p+d*.58,g*(t?2.3:2.18),0],Pt=[y-d*.56,g*(t?2.18:2.02),0];f(ee.bumper,[p,g+d*1.5,0],et,d*.58),f(ee.bumper,[y,g*1.6,0],Pt,d*.46);let Ct=Rt=>tu([[new Ae(it,6,4).scale(.53,.78,1).translate(...Rt),"#ffffff"]]);return rf(c,Ct(et),Ct(Pt))}function $m(i){let t=OS.get(i);if(t)return Zm(t,!0);let e=FS.get(i);if(e)return VS(e);let n=US.get(i);if(!n)return null;let s=zS(n);GS(s);let{outer:r,nose:o,frontY:a,shoulder:c,bodyParts:l}=s,u=(h,f)=>tu([-1,1].map(d=>[new Te(1.48,1.8,r*.35).translate(h*(o+.19),f,d*r*.63),"#ffffff"]));return rf(l,u(1,a-1.75),u(-1,c-2.65))}function jm(i){let t=BS.get(i);return t?Zm(t,!1):null}var Jm=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),$i={stride:4,crossingSeconds:3.2},WS=242,Km=12,Qm=.38,n0=new Map(Kl.map(i=>[i.id,i])),t0=["seafoam-sedan","blue-wagon","butter-compact","ruby-motorcycle","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","teal-semi","indigo-motorcycle"].map(i=>n0.get(i));function XS({index:i,lane:t}){let e=Math.floor(i/$i.stride),n=i%$i.stride;return t0[(2*(e+n)+t)%t0.length]}function e0({centerX:i,width:t,lanes:e}){let n=t-60,s=i-n/2,r=Math.max(1,Km*Math.round(n/(Km*WS))),o=n/r,a=e.map((y,p)=>Array.from({length:r},(m,x)=>({z:y,lane:p,index:x,x:s,offset:o*(x+.25+(r===1&&p?.5:0))}))),c=0,l,u,h,f=!1,d=[];function g(y,p,m,x=!1){let M=p?.severity==="ambient"?$i:Jm.get(p?.severity),v=Number.isFinite(l)&&Number.isFinite(y)?le.clamp(y-l,0,.25):0;if(l=y,M!==u){f=!!(u&&M&&(M===$i||u===$i));let A=Math.min(r,M?.stride??1),_=M===$i?Math.floor(A/2):1;d=M?a.flatMap((C,D)=>C.filter(({index:I})=>I%A===D*_%A)):[],u=M}if(!M)return h=void 0,d;let b=p.speedFactor,S=M===$i?o*Math.min(r,$i.stride)/(2*$i.crossingSeconds):Number.isFinite(b)&&b>0?Jm.get("clear").speed*le.clamp(b,.22,1):M.speed;if(x)c=!m&&Number.isFinite(y)?Math.max(0,y)*S:0;else if(!m)if(f&&h!==void 0){let A=Math.exp(-v/Qm),_=h-S;c+=v*S+_*Qm*(1-A),h=S+_*A,f=Math.abs(h-S)>.1}else c+=v*S,h=S;c%=n;for(let A of d){let _=(A.offset+c)%n;A.x=s+(A.lane?n-_:_)}return d}return{capacity:r*e.length,update:g}}function i0(i){let t=new se,e=e0(i),n,s=new Map;function r(d,g){let y=new ei(d,g,e.capacity);return y.count=0,y.frustumCulled=!1,y.instanceMatrix.setUsage(Dn),y}let o=r(new En(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new Oe({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1}));t.add(o);let a=new He,c;t.visible=!1;function l(d,g){for(let{mesh:y,role:p}of d.layers)p==="headlamp"&&(y.material.emissiveIntensity=g?1.65:.26),p==="taillamp"&&(y.material.emissiveIntensity=g?.91:.28)}function u(d){if(s.has(d.id))return s.get(d.id);let g=new se;g.name=`vehicle-${d.id}`;let y=$m(d.id).map(({geometry:m,material:x,role:M})=>({mesh:r(m,x),role:M}));g.add(...y.map(({mesh:m})=>m)),t.add(g);let p={group:g,layers:y,count:0};return l(p,c),s.set(d.id,p),p}function h(d,g,{reduceMotion:y=!1,night:p=!1,transientTelemetry:m=!1}={}){m&&(n??=e0(i));let M=(m?n:e).update(d,g,y,m);if(t.visible=M.length>0,!t.visible)return;if(p!==c){c=p;for(let b of s.values())l(b,p)}for(let b of s.values())b.count=0;let v=n0.get(g?.vehicleStyle);for(let[b,S]of M.entries()){let A=v??XS(S),_=u(A);a.position.set(S.x,i.surfaceY,S.z),a.rotation.y=S.lane?Math.PI:0,a.scale.set(1,1,1),a.updateMatrix();for(let{mesh:C}of _.layers)C.setMatrixAt(_.count,a.matrix);_.count++,a.scale.set(A.length*.55,1,A.width*.62),a.updateMatrix(),o.setMatrixAt(b,a.matrix)}o.count=M.length,o.instanceMatrix.needsUpdate=!0;for(let{group:b,layers:S,count:A}of s.values()){b.visible=A>0;for(let{mesh:_}of S)_.count=A,A&&(_.instanceMatrix.needsUpdate=!0)}}function f(){t.traverse(d=>{d.isInstancedMesh&&(d.dispose(),d.geometry.dispose(),d.material.dispose())}),t.clear()}return{root:t,update:h,dispose:f}}var YS=22,qS=63,ZS=525,$S=1100,jS=22,JS=75,KS=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],s0=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],QS=(i,t)=>(i%t+t)%t;function tw(i){let t=i.width-JS*2,e=[],n=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(i.centerX))return{walkers:e,cyclists:n,sample:()=>({walkers:e,cyclists:n})};let s=i.centerX-t/2,r=Math.max(1,Math.round(t/ZS)),o=Math.max(1,Math.round(t/$S)),a=t/r,c=t/o;for(let[u,h]of(i.sidewalks??[]).entries()){let{minZ:f,maxZ:d,surfaceY:g}=h,y=d-f;if(![f,d,g].every(Number.isFinite)||y<=0)continue;let p=u%2?-1:1,m=Math.min(1,y/jS),x=f+y*(p>0?.25:.75),M=f+y*(p>0?.76:.24);for(let v=0;v<r;v++){let b=s0[(v+u*2)%s0.length],S=t/2+(v+u*.42)*a-35,A=`sidewalk-walk-${u}-${v}`;for(let[_,[C,D]]of b.entries())e.push({id:`${A}-${_}`,groupId:A,style:C,child:D<.8,offset:S-p*13.2*_,scale:m*D,direction:p,y:g,z:x+p*.62*(_%2),phase:v*.91+u*.8+_*2.1})}for(let v=0;v<o;v++)n.push({id:`sidewalk-bike-${u}-${v}`,style:Ql[(v+u*2)%Ql.length],offset:t/2+(v+u*.65)*c,scale:m,direction:p,y:g,z:M,phase:v*1.7+u})}function l(u=0,h=!1){let f=Number.isFinite(u)?Math.max(0,u):0,d=(g,y,p)=>g.map(m=>({...m,x:s+QS(m.offset+m.direction*y*f,t),gait:h?0:f*p+m.phase}));return{walkers:d(e,YS,10),cyclists:d(n,qS,7)}}return{walkers:e,cyclists:n,sample:l}}var eu={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function of(i,t,e){let{shirt:n,trim:s,pants:r,skin:o,hair:a,accessory:c}=KS[i.style],l=t?0:Math.sin(i.gait),u=Math.abs(l)*.69,h=f=>f+u;e(n,0,h(10.45),0,2.95,4.3,3.4),e(r,-.1,h(7.25),0,2.6,1.7,3.04),e(s,1.1,h(13.35),0,2.14,.69,2.55),e(s,2.68,h(10.4),-.7,.41,.86,1);for(let f of[-1,1]){let d=l*f,g=d*3,y=Math.max(0,d)*1.35;e(r,g*.45,4.5+y*.42+u*.32,f*1.51,1.19,3.2,1.25,-.48*d),e(eu.shoe,.77+g,1.11+y,f*1.52,2.17,.99,1.34),e(eu.sole,1.38+g,.49+y,f*1.52,1.64,.43,1.32),e(n,-d*1.07,h(10.16),f*3.15,1.23,2.87,1.15,.38*d),e(o,-d*2.16,h(7.7),f*3.31,.98,1.1,.95)}e(a,-.67,h(17.25),0,4.17,4.32,3.82),e(o,1.05,h(16.63),0,3.76,3.75,3.41),e(a,1.12,h(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,h(16.54),0,.64,.63,.66);for(let f of[-1,1])e(o,.36,h(16.69),f*3.47,1.02,1.07,.64),e(eu.ink,4.18,h(17.25),f*1.35,.34,.47,.43),e(eu.blush,3.76,h(16.21),f*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,h(19.68),.72,1.98,1.89,1.89),e(s,-3.51,h(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(n,-.5,h(20.2),0,3.72,1.97,3.45),e(s,2.72,h(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,h(10.2),0,1.48,2.89,2.63),e(n,-4.01,h(10.65),0,.46,1.28,1.77)),c==="curls")for(let f of[-1,1])e(a,-.9,h(18.52),f*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,h(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,h(21.05),2.67,1.51,.92,.65,-.47))}function r0(i){let t=tw(i),e=new se;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let n=new He;function s(m,x,M,v){let b=new ei(x,M,v);return b.name=m,b.frustumCulled=!1,b.instanceMatrix.setUsage(Dn),e.add(b),b}let r=new Map,o=0;for(let m of t.walkers)of(m,!0,x=>{o++,r.has(x)||r.set(x,new Xt(x))});let a=s("sidewalk-walkers",new Ae(1,9,6),new Ge({color:"#fff",roughness:.81}),o),c=0;for(let m of t.walkers)of(m,!0,x=>a.setColorAt(c++,r.get(x)));let l=s("sidewalk-contact-shadows",new En(1,16).rotateX(-Math.PI/2),new Oe({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),u=new Map(Ql.map(m=>{let x=t.cyclists.filter(M=>M.style.id===m.id).length;return[m.id,x?jm(m.id).map(({geometry:M,material:v,role:b})=>({role:b,mesh:s(`sidewalk-bicycle-${m.id}-${b}`,M,v,x)})):[]]})),h,f=0,d,g;function y(m,{reduceMotion:x=!1,night:M=!1,transientTelemetry:v=!1}={}){if(M!==h){for(let I of u.values())for(let{role:U,mesh:k}of I)U==="headlamp"&&(k.material.emissiveIntensity=M?1.05:.16),U==="taillamp"&&(k.material.emissiveIntensity=M?.75:.18);h=M}if(!v){let I=Number.isFinite(d)&&Number.isFinite(m)?le.clamp(m-d,0,.25):0;x||(f+=I),d=m}let b=v?x?0:m:f;if(g?.time===b&&g?.reduceMotion===x&&g?.transientTelemetry===v)return;g={time:b,reduceMotion:x,transientTelemetry:v};let S=t.sample(b,x),A=0,_=0;function C(I,U,k){n.position.set(I.x,I.y+.065,I.z),n.rotation.set(0,0,0),n.scale.set(U*I.scale,1,k*I.scale),n.updateMatrix(),l.setMatrixAt(_++,n.matrix)}for(let I of S.walkers){let{direction:U,scale:k}=I,O=U>0?0:Math.PI;of(I,x,(Y,W,Z,ct,nt,it,et,Pt=0)=>{n.position.set(I.x+W*k*U,I.y+Z*k,I.z+ct*k*U),n.rotation.set(0,O,Pt),n.scale.set(nt*k,it*k,et*k),n.updateMatrix(),a.setMatrixAt(A++,n.matrix)}),C(I,5.32,4.1)}let D=new Map;for(let I of S.cyclists){let U=D.get(I.style.id)??0;n.position.set(I.x,I.y,I.z),n.rotation.set(0,I.direction>0?0:Math.PI,0),x||n.rotateX(Math.sin(I.gait)*.028),n.scale.setScalar(I.scale),n.updateMatrix();for(let{mesh:k}of u.get(I.style.id))k.setMatrixAt(U,n.matrix);D.set(I.style.id,U+1),C(I,I.style.length*.52,I.style.width*.58)}for(let I of u.values())for(let{mesh:U}of I)U.instanceMatrix.needsUpdate=!0;a.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0}function p(){for(let m of e.children)m.dispose(),m.geometry.dispose(),m.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:y,dispose:p}}var af=Math.PI*2,{clamp:cf,lerp:Es}=le,ew=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),_a=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],nw=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7},{id:"jet-ski",name:"Lagoon jet ski",length:30,beam:12.2,paint:"#438e90",deck:"#e7b768",center:514,radius:46,offshore:72,drift:6,period:16,start:.47,wake:.96,wakeSeconds:3.7},{id:"cruise-ship",name:"Pearl cruise ship",length:149,beam:41,paint:"#436b84",deck:"#e9c79d",center:76,radius:201,offshore:286,drift:23,period:148,start:1.53,wake:.56,wakeSeconds:8}];function o0(i,t){let e=0,n=i.length-1;for(;n-e>1;){let o=e+n>>1;t<i[o].x?n=o:e=o}let s=i[e],r=i[n];return Es(s.z,r.z,cf((t-s.x)/(r.x-s.x),0,1))}function iw(i){if(!Array.isArray(i?.shoreline)||i.shoreline.length<2||![i.y,i.farZ,i.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:n}=i,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:nw.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=cf(n+o.center,s+c,r-c);function u(h){let f=l+Math.cos(h)*a,d=Math.max(e+65,o0(t,f)-o.offshore-Math.sin(h)*o.drift);return{x:f,z:d}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*af/12);if(o0(t,c)-l<o.length/2+8)return!1}return!0})}function c0(i,t,e=.003){let n=i.point(t-e),s=i.point(t+e);return Math.atan2(n.z-s.z,s.x-n.x)}function sw(i,t,{condition:e}={}){let n=Number.isFinite(t)?t:0,s=i.start+n*af/i.period,{x:r,z:o}=i.point(s),a=n*1.24+i.start*3,c=i.id==="jet-ski"?1.9:i.id==="cruise-ship"?.55:1,l=(ew.has(e)?1.55:1)*c;return{x:r,z:o,angle:s,yaw:c0(i,s),heave:Math.sin(a)*.55*l,pitch:Math.cos(a*.89)*.017*l,roll:Math.sin(a*.74+.4)*.031*l}}function l0(i,t){let e=new he;return e.setAttribute("position",new Zt(i.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function u0(i){return l0(i,i.length===3?[0,1,2]:[0,1,2,0,2,3])}function Jr(i,t,e,n,s=1){let r=_a.flatMap(([l,u])=>{let h=l*i,f=t*u*s/2;return[[h,n,-f*.58],[h,n,f*.58],[h,e-.9,f],[h,e,f*.88],[h,e,-f*.88],[h,e-.9,-f]]}),o=[],a=6,c=(_a.length-1)*a;for(let l=0;l<c;l+=a)for(let u=0;u<a;u++){let h=(u+1)%a;o.push(l+u,l+u+a,l+h+a,l+u,l+h+a,l+h)}for(let l=1;l<a-1;l++)o.push(0,l,l+1,c,c+l+1,c+l);return l0(r,o)}function rw(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Xt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new Ee(c,3)),r}),e=Gn(t);for(let n of t)n.dispose();return e}function De(i,t,e,n,s,r){return new Te(i,t,e).translate(n,s,r)}function qe(i,t,e,n,s,r,o=0){return new Ae(1,12,7).scale(i/2,t/2,e/2).rotateZ(o).translate(n,s,r)}function ln(i,t,e){let n=new G(...i),s=new G(...t).sub(n),r=new fn().setFromUnitVectors(new G(0,1,0),s.clone().normalize());return new $e(e,e,s.length(),6).applyQuaternion(r).translate(...n.addScaledVector(s,.5).toArray())}function a0(i,t,e,n,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let h=Es(Es(t[0],e[0],l),n[0],u),f=Es(Es(t[1],e[1],l),n[1],u),d=Es(Es(t[2],e[2],l),n[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[h,f,d]};for(let l=0;l<o.length-1;l++){let u=o[l],h=o[l+1];for(let f=0;f<a;f++){let d=f/a,g=(f+1)/a,y=[c(d,u),c(g,u),c(g,h)];h<1&&y.push(c(d,h)),i.push([u0(y),r[l]])}}}function ow(i){let t=[3,43,0];i.push([ln([3,4,0],t,.9),"#c6a983"],[ln([3,11,0],[-25,10,-13],.6),"#c6a983"],[ln([28,5,0],t,.33),"#d7c5a8"],[ln([-25,5,0],t,.28),"#d7c5a8"],[De(15,1.9,10,-13,5.4,0),"#a8886e"],[De(9,1.5,7.5,-13,6.35,0),"#62797b"]),a0(i,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),a0(i,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function aw(i){i.push([De(28,8.5,17,-7,9.1,0),"#f1e5cc"],[De(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[De(9,.75,7,-9,15.5,0),"#8aa5a5"],[De(9,2.2,11,-24,5.9,0),"#bc9472"],[u0([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[ln([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])i.push([De(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);i.push([ln([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[ln([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function cw(i){i.push([De(15,6.1,13,6,7.9,0),"#e4d7ad"],[De(17,1.4,14,6,11.65,0),"#71968e"],[De(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[De(9,3.4,7,-8,6.8,2.6),"#d7a674"],[De(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[ln([-19,5,-5],[-28,16,-7],.45),"#907459"],[ln([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])i.push([De(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new Tn(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function lw(i){i.push([qe(15.9,5.4,9,4.7,3.1,0,-.07),"#52a7a6"],[qe(11.3,4.9,5.1,4.4,4.6,0,-.33),"#e5ae68"],[qe(5.1,2.4,3.15,8.7,6.02,0,-.43),"#f5d591"],[qe(3.4,2.5,3.26,3.25,6.15,0,-.3),"#426575"],[qe(12.8,3.45,5.9,-4.45,4.76,0,.11),"#40535c"],[De(5.8,.54,5.4,-11.3,2.88,0),"#7bb3a7"],[ln([2.9,5.7,0],[1.9,9.7,0],.52),"#69685d"],[ln([2.16,9.57,-3.35],[2.16,9.57,3.35],.4),"#53616a"],[qe(5.6,3.4,5.7,-3.8,6.35,0),"#5c738b"],[qe(6.06,7.3,5.45,-1.34,10.1,0,-.48),"#db7e59"],[qe(4.85,5.4,4.54,.02,11.1,0,-.48),"#efb36c"],[qe(4.84,5.2,4.82,1.37,15.38,0,-.15),"#f5dfaf"],[qe(2.34,2.04,4.67,2.55,15.37,0,-.12),"#4f637a"],[qe(.81,1.36,3.45,3.48,15.63,0,-.14),"#8eafb5"]);for(let t of[-1,1]){let e=t*3.01;i.push([qe(13.7,.75,1.52,-4.45,3.18,t*4.19),"#59646b"],[qe(6.2,2.32,1.64,-3.75,6.18,e,-.33),"#627a92"],[qe(4.25,1.52,1.44,-5.88,4.5,t*3.78,.86),"#51657a"],[qe(3.45,1.11,1.48,-5.58,3.43,t*4.05),"#334951"],[ln([-.87,11.64,t*2.02],[1.79,9.65,e],.79),"#d68868"],[qe(1.51,1.36,1.34,1.92,9.7,t*3.21),"#c98161"])}}function uw(i,{length:t,beam:e}){let n="#f2e9d8",s="#fff3dc",r="#557788",o="#9fbdbe";i.push([De(109,6.6,29.1,-4,10.27,0),n],[De(110.2,1.15,31.3,-4,13.75,0),s],[De(92,5.1,26.2,-3.5,16.7,0),n],[De(94.7,1.02,28.1,-3.8,19.42,0),s],[De(66.2,4.5,21.8,2.8,21.9,0),n],[De(69.7,.91,24.7,2.9,24.44,0),s],[Jr(29,24,26.77,20.72,.86).translate(31,0,0),n],[Jr(30.3,25,25.6,23.86,.92).translate(31,0,0),r],[Jr(28.9,23,27.12,26.39,.9).translate(31,0,0),s],[De(23.6,.76,15.3,-24.9,25,0),"#d6b18d"],[De(19.4,.49,11.1,-24.9,25.51,0),"#81b9b5"],[De(15.1,.16,8.7,-25.8,25.82,0),"#62a9b4"],[De(12,.14,1.05,-24.6,25.9,2.82),"#a7d6cc"],[qe(12,2.13,8.2,15.4,25.76,0),"#dfe6d8"],[ln([27,27,0],[26.5,35.4,0],.58),"#e5e4d8"],[ln([24.1,33,-3.6],[24.1,33,3.6],.41),"#e5e4d8"],[qe(4.21,3.29,3.84,13.4,27.8,0),"#e9e9d9"],[qe(3.57,2.86,3.35,9.6,27.12,5.6),"#dedfce"]);for(let a of[-5.9,5.9])i.push([ln([1,24.8,a],[-1.47,34,a],2.51),"#dfa179"],[ln([-.94,32,a],[-1.62,34.62,a],2.55),"#9d5c54"],[qe(4.4,.46,4.62,-1.65,34.66,a),"#514e59"]);for(let a of[-1,1]){for(let[c,l,u,h]of[[101,10.86,14.67,6.4],[89,17.18,13.17,6.2],[61,22.1,10.97,5.9]])for(let f=-c/2;f<=c/2;f+=h)i.push([De(3.61,2.05,.26,f,l,a*u),r],[De(3.6,.33,.3,f,l+.61,a*u),o]);for(let c of[-42,-29,-16,-3,10,23])i.push([De(9.3,.88,2.81,c,13.1,a*14.61),"#b5af9e"],[qe(10.53,2.75,3.83,c,13.37,a*15.49),"#dc9164"],[qe(9.12,1.04,3,c,14.33,a*15.49),"#f0c285"]);for(let c of[-56,-43,-30,-17,-4,9,22,35,48,57]){let l=c/t,u=_a.findIndex(([p])=>p>=l),[h,f]=_a[u-1],[d,g]=_a[u],y=Es(f,g,(l-h)/(d-h))*e/2;i.push([qe(2.1,1.74,.62,c,5,a*(y-.08)),"#78969e"])}i.push([ln([-46,19.95,a*13.74],[42,19.95,a*13.74],.4),o],[ln([-27,24.95,a*11.67],[26,24.95,a*11.67],.34),o],[ln([49,8.13,a*15.2],[67,8.13,a*5.1],.43),s])}}function hw(i,t){let{id:e,length:n,beam:s,paint:r,deck:o}=i,a=new se;a.name=i.name;let c=e==="jet-ski"?1.76:e==="cruise-ship"?6.1:3.7,u=[[Jr(n,s,c,e==="jet-ski"?-1.32:e==="cruise-ship"?-4.92:-2.5),r],[Jr(n,s,c+.82,c-.15,1.018),"#f4e4c9"],[Jr(n*.92,s,c+1.05,c+.74,.83),o]];return e==="sailboat"?ow(u):e==="cabin"?aw(u):e==="jet-ski"?lw(u):e==="cruise-ship"?uw(u,i):cw(u),a.add(new ce(rw(u),t)),a}var ws=12,fw=new Xt("#def5e9");function dw(i,t){let n=ws*3*2,s=new he,r=new Ee(new Float32Array(n*3),3).setUsage(Dn),o=new Float32Array(n*4),a=[];for(let h=0;h<3;h++)for(let f=0;f<ws;f++){let d=(h*ws+f)*2,g=f/(ws-1),y=Math.pow(Math.sin((.1+.9*g)*Math.PI),1.15)*(1-.4*g);for(let p=0;p<2;p++)fw.toArray(o,(d+p)*4),o[(d+p)*4+3]=i.wake*y*(h===1?.22:.76);f<ws-1&&a.push(d,d+2,d+1,d+1,d+2,d+3)}s.setAttribute("position",r),s.setAttribute("color",new Ee(o,4)),s.setIndex(a);let c=new Oe({vertexColors:!0,side:rn,transparent:!0,depthWrite:!1,opacity:.82}),l=new ce(s,c);l.name=i.name+" wake",l.frustumCulled=!1;function u({angle:h},f){let g=(i.wakeSeconds??(i.id==="cabin"?4.1:6))*af/i.period;for(let y=0;y<ws;y++){let p=y/(ws-1),m=h-g*p,x=c0(i,m),{x:M,z:v}=i.point(m),b=Math.cos(x),S=Math.sin(x),A=i.length*.48,_=M-b*A,C=v+S*A;for(let D=0;D<3;D++){let I=(D-1)*i.beam*(.19+p*.62),U=(D===1?1.85:.62)*(1+p*.55);for(let k=0;k<2;k++){let O=I+(k?U:-U);r.setXYZ((D*ws+y)*2+k,_+S*O,t+.14,C+b*O)}}}r.needsUpdate=!0,c.opacity=f?.44:.82}return{mesh:l,update:u}}function h0(i){let t=new se;t.name="Coastal boats";let e=new Ge({vertexColors:!0,side:rn,roughness:.73}),n=iw(i).map(l=>{let u=hw(l,e),h=dw(l,i.y);return t.add(h.mesh,u),{route:l,hull:u,wake:h}}),s=0,r,o=!1;function a(l,{reduceMotion:u=!1,night:h=!1,condition:f,transientTelemetry:d=!1,activity:g}={}){if(o)return;let y=Number.isFinite(l)?l:void 0;!d&&!u&&y!==void 0&&r!==void 0&&(s+=cf(y-r,0,.25)),r=d?void 0:y;let p=d?u?0:y??0:s;for(let{route:m,hull:x,wake:M}of n){let v=m.id!=="jet-ski"||g!=="overnight";if(x.visible=v,M.mesh.visible=v,!v)continue;let b=sw(m,p,{condition:f});x.position.set(b.x,i.y+b.heave,b.z),x.rotation.set(b.roll,b.yaw,b.pitch,"YXZ"),M.update(b,h)}}function c(){if(!o){o=!0;for(let{hull:l,wake:u}of n)l.children[0].geometry.dispose(),u.mesh.geometry.dispose(),u.mesh.material.dispose();e.dispose(),t.clear()}}return a(0),{root:t,update:a,dispose:c}}var pw=26,mw=39,gw=2.25,nu=2*Math.PI,yw=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function Kr(i,t){let e=i.findIndex(r=>r.x>=t);if(e<1)return i[e===0?0:i.length-1].z;let n=i[e-1],s=i[e];return le.lerp(n.z,s.z,(t-n.x)/(s.x-n.x))}function xw(i,t){let{shoreline:e,focusX:n,y:s}=i??{},r=t?.farZ;if(![n,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,h){let f=l-u,d=l+u,g=e.filter(S=>S.x>f&&S.x<d).map(S=>S.z),y=Math.max(Kr(e,f),Kr(e,d),...g)+pw,p=r-mw;if(p-y<19)return null;let m=Math.min(h,(p-y)/2),x=(p+y)/2,M=Kr(e,l)+22,v=le.clamp((r+.4-x)/(r+.4-M),0,1),b=s-.77+v*.43;return{x:l,y:b,z:x,halfWidth:u,halfDepth:m}}let a=o(n-72,46,18),c=o(n+68,27,15);return a||c?{court:a,castle:c}:null}function f0(i,t=0,e=!1){let n=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(i.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=i.court,h=n/gw,f=h%1,d=Math.floor(h)%2?1:-1,g=Math.sin(Math.PI*f),y=u-16,p=Math.min(3.3,l*.22);r={x:o+d*y*(1-2*f),y:a+20.9+g*15.7,z:c+Math.sin(nu*f)*p,rotation:n*2.6,ground:a};for(let m of[-1,1]){let M=1-Math.min(1,(m!==d?1-f:f)/.24),v=e?.32:M*M;s.push({kind:"player",style:m<0?0:1,scale:1,yaw:-m*Math.PI/2,x:o+m*(y+6-v*2),y:a+v*1.65,ground:a,z:c+m*p*(.65+g*.35),reach:v,swing:Math.sin(n*3.15+m*.9)*.42})}}if(i.castle){let{x:o,y:a,z:c}=i.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(n*4.8),swing:e?0:Math.cos(n*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(n*2.5+.9),swing:e?0:Math.cos(n*2.5+.9)*.35})}return{actors:s,ball:r}}function _w(i,t,e,n,s){let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new Xt(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Ee(a,3)),r.translate(e,n,s)}function iu(i,t){let e=[],n=(c,l,u,h,f)=>e.push(_w(c,l,u,h,f));t({add:n,box:(c,l,u,h,f,d,g)=>n(new Te(c,l,u),h,f,d,g),cylinder:(c,l,u,h,f,d,g)=>n(new $e(c,l,u,12),h,f,d,g)});let o=Gn(e);for(let c of e)c.dispose();let a=new Ge({vertexColors:!0,roughness:.86});i.add(new ce(o,a))}function vw({x:i,y:t,z:e,halfWidth:n,halfDepth:s}){let r=new se;r.name="beach-volleyball-court",r.position.set(i,t,e);let o=s-1;return iu(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",h="#f4e4bb";for(let f of[-1,1])a(n*2,.1,.56,l,0,.14,f*s),a(.56,.1,s*2,l,f*n,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,f*o),c(.93,.93,1.1,l,0,18.9,f*o),c(.85,.85,.76,h,0,20.48,f*o),a(.76,.54,o*2,h,0,f<0?10.1:19.5,0);for(let f=1;f<5;f++)a(.23,.23,o*2,u,0,10.2+f*1.83,0);for(let f=1;f<12;f++)a(.22,9.25,.24,u,0,14.8,o*(f/6-1))}),r}function bw({x:i,y:t,z:e}){let n=new se;return n.name="beach-sandcastle",n.position.set(i,t,e),iu(n,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new Ae(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new Ae(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let h of[-1,1]){let f=h*6.15;o(2.44,3.35,7.9,a,f,4.05,-.8),o(2.66,2.52,1.03,c,f,8.03,-.8);for(let[d,g]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,f+d,8.99,-.8+g);r(1.07,.94,.3,l,f,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new he;u.setAttribute("position",new Zt([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new Tn(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new Te(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new Ae(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),n}function Mw(){let i=new Ae(3.25,24,12),t=i.toNonIndexed();i.dispose();let e=t.attributes.position,n=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new Xt(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=h=>(e[h](o)+e[h](o+1)+e[h](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/nu*n.length)%n.length,u=Math.abs(a("getY"))>2.85?n[1]:n[l];for(let h=0;h<3;h++)u.toArray(s,(o+h)*3)}t.setAttribute("color",new Ee(s,3));let r=new ce(t,new Ge({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function lf(i,t){let{skin:e,hair:n,shirt:s,shorts:r,trim:o,style:a}=yw[i.style],c=i.kind==="beachgoer",l=i.kind==="surfer",u=i.kind==="builder"||c,h=c?9.25:u?7.8:l?10.7:12.2,f=h+(c?5.9:u?5.8:6.1),d=l?i.swing*.95:u?i.reach*1.15+.65:0,g=l?i.swing*.22:c?.11:u?.24:0;t(s,0,h,d*.43,3.72,4.1,2.85,g),t(r,0,h-3.4,0,3.34,1.65,2.8),t(o,0,h-1.95,2.45,3.03,.48,.59);for(let y of[-1,1]){if(l){t(r,y*2.45,5.35,1.26,1.58,2.66,1.49,.67,y*.4),t(e,y*3.76,2.93,.86,1.25,2.45,1.16,-.31,y*.17),t(e,y*4.13,1.01,.5,1.64,.73,1.27,0,y*.07);let p=h+1.2+y*i.swing*1.65;t(e,y*5.26,p,-.1,1.05,3.35,1.06,.22,-y*(1.08+y*i.swing*.28)),t(e,y*8.07,p+.43,.29,1.36,.96,1.02)}else if(c){let p=y<0?i.reach:.23;t(r,y*1.72,5,2.2,1.55,2.7,1.48,1.27),t(e,y*1.82,2.75,4.13,1.17,2.57,1.14,-.16),t(o,y*1.93,.92,5.06,1.25,.72,1.74),t(e,y*3.98,h-.3+p,1.15,1.02,2.45,1.05,-.62-p*.37),t(e,y*3.5,h-1.2+p*1.8,3.17,1.11,1.14,1.13),y<0&&t("#e7c8a1",-3.5,h-.18+p*1.8,3.82,.86,1.19,.86)}else{let p=u?.8:y*i.swing;t(r,y*1.65,u?3.5:6.4,p,1.55,2.3,1.49,u?.8:0),t(e,y*1.68,u?1.72:3.1,u?2.08:p,1.16,2.13,1.16),t(e,y*1.75,1.02,.88+p,1.28,.76,2.08);let m=u?h+.45:h+1.5+i.reach*2.1,x=u?2.4+i.reach*1.72:i.reach*.8,M=u?-.78-i.reach*.27:.12+i.reach*.62;t(e,y*(4.13-i.reach*.46),m,x,1.04,3.7,1.05,M,y*(u?.1:.24+i.reach*.55)),t(e,y*(4.1-i.reach*.53),m+(u?-1.65:i.reach*5.55-2.92),x+(u?2.7:i.reach*1.9),1.14,1.15,1.13)}t(e,y*3.48,f,d+.4,.84,.99,.78),t("#493a41",y*1.46,f+.38,d+3.41,.43,.47,.34),t("#c98878",y*2.22,f-.45,d+3.05,.54,.27,.26)}t(n,0,f+.64,d-.53,3.81,4.12,3.64),t(e,0,f,d+.72,3.25,3.29,2.89),t(e,0,f-.22,d+3.59,.53,.54,.59),t("#9b6b66",0,f-1.19,d+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,f+3.48,d+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,f+2.78,d+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(n,-.99,f+2.39,d+1.53,2.47,1.23,2.37),t(a==="bun"?n:o,2,f+3.23,d-1.66,1.41,1.43,1.39))}function uf(i,t,e,n,s=!1){let r=0;for(let h of t)lf(h,()=>r++);let o=new ei(new Ae(1,10,7),new Ge({color:"#fff",roughness:.76}),r);o.name=e,o.frustumCulled=!1,o.instanceMatrix.setUsage(Dn),i.add(o);let a=n?new ei(new En(1,20).rotateX(-Math.PI/2),new Oe({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),t.length+Number(s)):null;a&&(a.name=n,a.frustumCulled=!1,a.instanceMatrix.setUsage(Dn),i.add(a));let c=0,l=new Map;for(let h of t)lf(h,f=>{l.has(f)||l.set(f,new Xt(f)),o.setColorAt(c++,l.get(f))});let u=new He;return function(f,d){let g=0,y=0,p=(m,x,M,v,b)=>{a&&(u.position.set(m,x+.16,M),u.rotation.set(0,0,0),u.scale.set(v,1,b),u.updateMatrix(),a.setMatrixAt(y++,u.matrix))};for(let m of f){let{scale:x,yaw:M}=m,v=Math.cos(M),b=Math.sin(M);lf(m,(S,A,_,C,D,I,U,k=0,O=0)=>{u.position.set(m.x+x*(A*v+C*b),m.y+_*x,m.z+x*(-A*b+C*v)),u.rotation.set(0,M,0),u.rotateX(k),u.rotateZ(O),u.scale.set(x*D,x*I,x*U),u.updateMatrix(),o.setMatrixAt(g++,u.matrix)}),p(m.x,m.ground,m.z,5.25*x,4.47*x)}d&&p(d.x,d.ground,d.z,2.82,2.52),o.instanceMatrix.needsUpdate=!0,a&&(a.instanceMatrix.needsUpdate=!0)}}function Sw(i){let t=new se;t.name="beach-day-activities";let e=i.court?vw(i.court):null,n=i.castle?bw(i.castle):null,s=e?Mw():null;e&&t.add(e,s),n&&t.add(n);let r=uf(t,f0(i).actors,"beach-recreation-figures","beach-play-contact-shadows",!!s);return{group:t,render(o,a){let c=f0(i,o,a);if(r(c.actors,c.ball),!s)return;let{x:l,y:u,z:h,rotation:f}=c.ball;s.position.set(l,u,h),s.rotation.set(.25,f*.59,f)}}}function ww(i){let t=new se;t.name=`beach-surfboard-${i+1}`;let e=i?"#e5ac55":"#d57565",n=i?"#4d8f92":"#f3e5be";return iu(t,({add:s})=>{let r=(o,a,c,l,u,h,f)=>s(new Ae(1,16,8).scale(l,u,h),f,o,a,c);r(0,.22,0,12.9,.78,3.61,"#e9dfc8"),r(.26,.63,0,12.68,.69,3.38,e),r(.45,1.23,0,10.08,.125,.91,n),r(-4.51,1.17,0,2.67,.14,2.47,i?"#e8dfbe":"#759f9d");for(let o=0;o<5;o++){let a=o/4;r(-9.8-a*15.1,-.39,(o%2?-1:1)*(2.6-a*1.58),2.86-a*1.1,.095,.92-a*.5,o%2?"#a4d7cc":"#e5f3de")}r(-17.4,-.44,.24,6.5,.082,.38,"#c4e5d8")}),t}function Ew(i){let t=new se;t.name="beach-morning-surfers";let{shoreline:e,focusX:n,y:s,farZ:r}=i,o=[{offset:-82,radius:37,depth:49,drift:13,period:20,phase:.55,style:0,scale:.9},{offset:75,radius:34,depth:58,drift:14,period:22,phase:2.17,style:1,scale:.91}].filter(({offset:u,radius:h,depth:f,drift:d})=>{let g=n+u,y=g-h-26,p=g+h+26;return y>=e[0].x&&p<=e.at(-1).x&&Math.min(Kr(e,y),Kr(e,p),...e.filter(m=>m.x>y&&m.x<p).map(m=>m.z))-f-d-26>r});if(!o.length)return{group:t,render(){}};let a=o.map((u,h)=>ww(h));t.add(...a);function c(u){return o.map(({offset:h,radius:f,depth:d,drift:g,period:y,phase:p,style:m,scale:x})=>{let M=u%y/y*nu+p,v=n+h+f*Math.sin(M),b=Kr(e,v)-d+g*Math.cos(M),S=Math.atan2(g*Math.sin(M),f*Math.cos(M)),A=Math.sin(M*2+p);return{kind:"surfer",style:m,scale:x,yaw:S,x:v,z:b,y:s+1.7+A*.3,swing:Math.cos(M*2+p)*.5,swell:A}})}let l=uf(t,c(0),"beach-surfers");return{group:t,render(u){let h=c(u);for(let[f,{x:d,y:g,z:y,yaw:p,swell:m}]of h.entries())a[f].position.set(d,g-1.24,y),a[f].rotation.set(0,p,0),a[f].rotateX(m*.075),a[f].rotateZ(-m*.027);l(h)}}}var va=["#e7713c","#ef9251","#e97e44","#f2a954","#f7b35d","#ffcf79","#ffde91","#ffb34e","#fbc86e","#ffd281","#ffbd72"];function Tw(i,t){let e=new se;return e.name=`beach-firepit-${t+1}`,e.position.set(i.x,i.y,i.z),iu(e,({add:n,box:s})=>{n(new Ae(1,14,6).scale(7.15,.51,6.72),"#80605a",0,.14,0);for(let r=0;r<11;r++){let o=r*nu/11,a=["#ab8b78","#a39288","#bb9c84"][r%3];n(new Co(1).scale(1.91,1.25,1.57).rotateY(o),a,Math.cos(o)*6.82,1.05,Math.sin(o)*6.19)}for(let[r,o,a]of[[.43,1.33,"#9b6147"],[1.42,2.1,"#79473c"],[-.89,2.58,"#a36a4a"]])n(new $e(1.15,1.38,9.1,7).rotateZ(Math.PI/2).rotateY(r),a,0,o,0);for(let[r,o]of[[-1,1.25],[1,-1.25]])n(new $e(2.2,2.61,13.9,8).rotateX(Math.PI/2),"#a67e60",r*16.5,2.48,o),n(new $e(1.61,1.77,.15,8).rotateX(Math.PI/2),"#dab18b",r*16.5,2.48,o+7.01),s(4.84,.83,5.8,t?"#c98673":"#7ea8a1",r*16.23,4.68,o)}),e}function Aw(i){let t=new se;t.name="beach-evening-bonfires";let e=[i.court,i.castle].filter(Boolean);t.add(...e.map(Tw));function n(l){return e.flatMap(({x:u,y:h,z:f},d)=>[-1,1].map(g=>({kind:"beachgoer",style:d*2+ +(g>0),scale:g>0&&d===1?.82:.95,yaw:-g*Math.PI/2,x:u+g*16.23,y:h,ground:h,z:f-g*1.25,reach:.36+Math.sin(l*1.42+d*1.78+g*1.35)*.27})))}let s=uf(t,n(0),"beach-bonfire-figures","beach-bonfire-contact-shadows"),r=new ei(new Ae(1,9,7),new Oe({toneMapped:!1}),e.length*va.length);r.name="beach-bonfire-flames",r.frustumCulled=!1,r.instanceMatrix.setUsage(Dn);for(let l=0;l<r.count;l++)r.setColorAt(l,new Xt(va[l%va.length]));let o=new Xe({uniforms:{warmth:{value:.86},tint:{value:new Xt("#ffad5f")}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),a=new ei(new En(1,28).rotateX(-Math.PI/2),o,e.length);a.name="beach-bonfire-sand-glow",a.frustumCulled=!1;let c=new He;for(let[l,{x:u,y:h,z:f,halfDepth:d}]of e.entries())c.position.set(u,h+.19,f),c.scale.set(23,1,Math.min(19,d+1)),c.updateMatrix(),a.setMatrixAt(l,c.matrix);return a.instanceMatrix.needsUpdate=!0,t.add(a,r),{group:t,render(l){s(n(l));for(let[u,{x:h,y:f,z:d}]of e.entries()){let g=u*1.71;for(let y=0;y<va.length;y++){let p=l*4.5+y*2.39+g,m=Math.sin(p)*.5+.5,x=y*2.39+g;if(y<7){let M=y<5?2.05:.78,v=y<5?3.18+m*1.58:2.78+m*1.09;c.position.set(h+Math.cos(x)*M,f+v+1.05,d+Math.sin(x)*M),c.rotation.set(Math.sin(x)*.2,x,Math.cos(x)*.24),c.scale.set(1.21+m*.54,v,1.18+m*.46)}else{let M=(l*(.32+y*.019)+y*.234+g)%1,v=.79*(1-M)+.13;c.position.set(h+Math.cos(x+M)*(2.45+M*6.2),f+8.8+M*15,d+Math.sin(x+M)*(1.74+M*4.4)),c.rotation.set(0,0,.2),c.scale.set(v,v*1.33,v)}c.updateMatrix(),r.setMatrixAt(u*va.length+y,c.matrix)}}r.instanceMatrix.needsUpdate=!0,o.uniforms.warmth.value=.83+Math.sin(l*5.25)*.11}}}function d0(i,t){let e=new se;e.name="beach-play";let n=xw(i,t);if(!n)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s={morning:Ew(i),day:Sw(n),evening:Aw(n)};e.add(...Object.values(s).map(({group:f})=>f));let r,o=0,a,c,l;function u(f,{reduceMotion:d=!1,transientTelemetry:g=!1,activity:y="day"}={}){let p=Object.hasOwn(s,y)||y==="overnight"?y:"day";if(!g){let x=Number.isFinite(r)&&Number.isFinite(f)?le.clamp(f-r,0,.25):0;d||(o+=x),r=f}let m=d?.96:g?Number.isFinite(f)?Math.max(0,f):0:o;if(!(m===a&&d===c&&p===l)){if(a=m,c=d,p!==l){for(let[x,{group:M}]of Object.entries(s))M.visible=p===x;l=p}s[p]?.render(m,d)}}u(0);function h(){e.traverse(f=>{f.isMesh&&(f.isInstancedMesh&&f.dispose(),f.geometry.dispose(),f.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:u,dispose:h}}var Rw=new G(0,-1,0),Cw=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],hf=.01;function p0(i){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(i)}function g0(i){return!i.isMesh||!i.geometry?!1:(Array.isArray(i.material)?i.material:[i.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function Iw(i){i.updateWorldMatrix(!0,!0);let t=[];i.traverseVisible(a=>{if(!g0(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let n=new We;for(let a of t)a.min.y<=e+hf&&n.union(a);let s=n.getCenter(new G),r=n.getSize(new G),o=e-i.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-i.position.x,centerZ:s.z-i.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function Pw(i,t){let{type:e}=i;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"||e==="diningTable"?[44.65,46.45]:e.includes("dining-set")||e.includes("dining-table-")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function Lw(i,t){let[e,n]=Pw(i.item,t);if(![e,n,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new We().setFromObject(s);return r.isEmpty()?null:{placement:i,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:n*s.scale.y}}function m0(i,t){let e=t?.[i.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:i}function y0(i,t){return i.intersectObject(t,!0).find(e=>g0(e.object))}function x0(i,{low:t,high:e}){return i?.face?.normal.y>=.92&&i.point.y>=t&&i.point.y<=e}function Nw(i,t,e,n,s,r){let o=t.x+e.centerX-n.x,a=t.z+e.centerZ-n.z,{bounds:c,probe:l,rootY:u}=i;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let h=-1/0;for(let[f,d]of Cw){r.set(o+f*e.radiusX,c.max.y+1,a+d*e.radiusZ),s.set(r,Rw);let g=y0(s,l);if(!x0(g,i))return null;h=Math.max(h,g.point.y)}return u+h}function _0(i,t){let e=[],n=[];for(let c of i){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=p0(c.item);if(u==="surface"){let h=Lw(c,l);h&&e.push(h)}else if(u==="tabletop"){let h=Iw(l.root);h&&n.push({placement:c,foot:h})}}let s=new ms,r=new G;function o(c){let l=new Map;for(let{placement:u,foot:h}of n){let f=m0(u,c),d=null,g=u.baseY,y=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let m=m0(p.placement,c),x=Nw(p,f,h,m,s,r);if(x===null||x<=u.baseY||x<g-hf)continue;let M=p.placement.item.id,v=Math.hypot(f.x-m.x,f.z-m.z);Math.abs(x-g)<hf&&(v>y||v===y&&M>d)||(d=M,g=x,y=v)}l.set(u.item.id,{y:g-h.bottom,supportId:d})}return l}function a(c,l){if(p0({type:c})!=="tabletop")return null;let u=new ms(void 0,void 0,l.near,l.far),h=new G,f;for(let d of e){let{x:g,z:y}=d.placement;h.copy(l.ray.origin).sub(r.set(g,d.rootY,y)),u.set(h,l.ray.direction);let p=y0(u,d.probe);p&&(!f||p.distance<f.hit.distance||p.distance===f.hit.distance&&d.placement.item.id<f.surface.placement.item.id)&&(f={hit:p,surface:d,x:g,z:y})}return!f||!x0(f.hit,f.surface)?null:{x:f.x+f.hit.point.x,y:f.z+f.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:su,sin:Ks,cos:ru}=Math,Ui=su*2,Dw=new G(0,1,0),Js=["#86684f","#9a7c5b","#735844"],ff=["#92745a","#ac8f69","#785c49"],df=["#537759","#6b8a55","#849a58","#a0ab63"],pf=["#3e6251","#4d7056","#61815d","#789365"],mf=["#4a6653","#567552","#6b8659","#819863"],Uw=["#517553","#64845a","#799660","#98a869"],Fw=["#617d69","#72917a","#8ea17e","#a7b08a"],Ow=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],v0=240,Bw=new Set(["windy","windy-variant"]),ba=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function b0(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Fn(i,t,e){return[ru(i)*t,e,Ks(i)*t]}function _n(i,[t,e,n]){return[i[0]+t,i[1]+e,i[2]+n]}function kw(i,t,e,n,s){let r=(c,l)=>i.add(c,l,t,e,n);function o(c,l,u,h,f,d=7){let g=new G(...l),y=new G(...u),p=y.clone().sub(g),m=new fn().setFromUnitVectors(Dw,p.clone().normalize()),x=new $e(f,h,p.length(),d),M=g.lerp(y,.5);r(x.applyQuaternion(m).translate(M.x,M.y,M.z),c)}function a(c,l,u,h=.13,f=6){let d=new Ae(1,9,f),g=d.getAttribute("position"),y=s()*Ui;for(let p=0;p<g.count;p++){let m=g.getX(p),x=g.getY(p),M=g.getZ(p),v=1+h*(Ks(m*5.8+x*3.2+M*2.1+y)*.7+ru(M*7.8-x*2.2+y)*.3);g.setXYZ(p,m*v*u[0],x*v*u[1],M*v*u[2])}d.computeVertexNormals(),r(d.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function gf(i,t,e,n,s,r,o){let a=[ru(e),Ks(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=i.positions.length/3;for(let[h,[f,d]]of l.entries()){let g=s*d,y=t[0]+f*n*a[0],p=t[1]+Ks(f*su)*r-o*f*f,m=t[2]+f*n*a[1];for(let M of[-1,0,1])i.positions.push(y+M*g*c[0],p+(M===0?g*.29:0),m+M*g*c[1]),i.uvs.push((M+1)*.5,f);if(h===0)continue;let x=u+(h-1)*3;for(let M of[0,1]){let v=x+M;i.indices.push(v,v+1,v+3,v+1,v+4,v+3)}}}function zw(i,t,e){let n=new he;n.setAttribute("position",new Zt(e.positions,3)),n.setAttribute("uv",new Zt(e.uvs,2)),n.setIndex(e.indices),n.computeVertexNormals(),i(n,t)}function Hw(i,t,e,n){let{draw:s,branch:r,crown:o,random:a}=i,c=t*(n?.063:.125),l=y=>Fn(e,c*y*y,t*y*(n?.85:.86)),u=y=>t*(n?.029:.024)*(1-.53*y),h=n?5:6;for(let y=0;y<h;y++){let p=y/h,m=(y+1)/h;r(ff[0],l(p),l(m),u(p),u(m),9)}for(let y=1;y<=13;y++){let p=y*.067;r(ff[y%3?1:2],l(p-.0045),l(p+.0045),u(p)*1.04,u(p)*1.04,9)}let f=l(1);o(df[0],f,[t*.045,t*.036,t*.048],.08,5);for(let y=0;y<4;y++)o(ff[2],_n(f,Fn(e+y*Ui/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let d=df.map(()=>({positions:[],uvs:[],indices:[]})),g=n?9:10;for(let y=0;y<g;y++){let p=e+y*Ui/g+(a()-.5)*.18,m=y%3===0,x=t*((m?.35:.29)+(a()-.5)*.07),M=t*(m?.026:.077),v=t*(m?.072:.025);if(gf(d[(y+1)%4],f,p,x,t*.012,M,v),n){let b=_n(f,Fn(p,x*.43,M*.7));for(let S=-3;S<=3;S++)gf(d[(y+S+4)%4],b,p+S*.19,x*(.58-Math.abs(S)*.055),t*(.016-Math.abs(S)*.0018),M*.32,v*.84)}else for(let b=0;b<7;b++){let S=.19+b*.104,A=_n(f,Fn(p,x*S,Ks(S*su)*M-v*S*S));for(let _ of[-1,1])gf(d[(y+b+(_>0?1:0))%4],A,p+_*(.83-S*.37),t*(.095-S*.048),t*(.0095-S*.003),t*.014,t*.025)}}for(let[y,p]of d.entries())zw(s,df[y],p)}function yf(i,t,e,n,s=.84){let{branch:r}=i,o=a=>Fn(e,t*n*(a*a+.16*Ks(su*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(Js[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*Ui/4;r(Js[2],Fn(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(Js[1],Fn(c,t*.039,t*.025),_n(o(.36),Fn(c,t*.031,0)),t*.004,t*.002,4)}return o}function Gw(i,t,e){let{crown:n,random:s}=i,r=yf(i,t,e,.018,.94);n(pf[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let h=0;h<u;h++){let f=e+h*Ui/u+o*2.5,d=_n(r(o),Fn(f,t*a,t*((s()-.5)*.035)));n(pf[(h+u)%4],d,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}n(pf[2],_n(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function Vw(i,t,e){let{branch:n,crown:s,random:r}=i,o=yf(i,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let h=e+u*Ui/l+a*7+(r()-.5)*.22,f=o(a),d=_n(f,Fn(h,t*c,t*(.02+r()*.028)));n(Js[1],f,d,t*.017,t*.0037,6);let g=_n(d,[0,t*.029,0]);s(mf[u%3],g,[t*c*.46,t*.054,t*c*.45],.21,5),s(mf[(u+2)%4],_n(g,Fn(h-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(mf[3],_n(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function Ww(i,t,e,n){let{branch:s,crown:r,random:o}=i,a=n==="olive",c=n==="jacaranda",l=a?Fw:c?Ow:Uw,u=yf(i,t,e,a?.1:.034,a?.78:.84),h=a?5:6;for(let d=0;d<h;d++){let g=e+d*Ui/h+(o()-.5)*.33,y=u(.46+o()*.12),p=t*(.16+o()*.07),m=_n(y,Fn(g,t*.12,p*.58)),x=_n(y,Fn(g+.16,t*(.19+o()*.052),p));s(Js[1],y,m,t*.026,t*.016,7),s(Js[0],m,x,t*.0165,t*.0045,6);let M=t*(.092+o()*.03);r(l[d%2],_n(x,[0,t*.024,0]),[M,t*(a?.064:.104),M*.87],.21,5);for(let v of[-1,1]){let b=_n(x,Fn(g+v*1.18,t*.055,t*.05));s(Js[0],m,b,t*.012,t*.003,5);let S=t*(.063+o()*.027);r(l[c?2+(d+(v>0?1:0))%3:1+d%3],_n(b,[0,t*.022,0]),[S,S*(a?.63:.88),S*.91],.21,5)}}let f=_n(u(1),[0,t*.023,0]);r(l[2],f,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),_n(f,Fn(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function M0(i,t,e){let n=Math.imul(Math.round(i*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:n}function S0(i,t){return Number.isFinite(t)?le.clamp(t,32,200):ba[i].height}function Xw(i,{kind:t,x:e,z:n,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn(ba,t)||![e,n,s].every(Number.isFinite))return!1;let a=S0(t,r),c=b0(M0(e,n,o)),l=c()*Ui,u=kw(i,e,s,n,c);return t==="fan-palm"||t==="date-palm"?Hw(u,a,l,t==="fan-palm"):t==="cypress"?Gw(u,a,l):t==="shore-pine"?Vw(u,a,l):Ww(u,a,l,t),!0}function Yw(i=0,t={}){let{windSpeed:e,windBearing:n,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?le.clamp(e,0,22):Bw.has(r)?6:0,a=Number.isFinite(n)?(n%360+360)%360:270,c=le.degToRad(a),l=Number.isFinite(i)?Math.max(0,i)%v0:0;return{x:-Ks(c),z:ru(c),phase:Ui*l/v0,strength:s?0:o*.0048}}var qw=`
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
`;function w0(i){let t=new Set,e={roomcraftTreeDirection:{value:new Dt(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function n(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${qw}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:h}=o;if(!Object.hasOwn(ba,a))return!1;let f=S0(a,c),d=b0(M0(l,u,h))()*Ui;return Xw({add(g,y,...p){let m=g.getAttribute("position"),x=new Float32Array(m.count*3);for(let M=0;M<m.count;M++)x[M*3]=m.getY(M)/f,x[M*3+1]=f,x[M*3+2]=d;g.setAttribute("roomcraftTreeWind",new Ee(x,3)),n(i.material(y)),i.add(g,y,...p)}},o)}function r(o,a){let c=Yw(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var Qr=Math.PI/180,bf=14,D0=56,Zw=21,Jn=-111,Ts=-108,U0=14,$w=28,Ma=28,E0={minX:0,maxX:1536,minZ:0,maxZ:1024},xf={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},_f={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},jw=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),Jw=new Set(["snowy","snowy-rainy"]),T0={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42};function lu(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function cu(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function F0(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function O0(i,t,e,n){let s=i.some(o=>cu(o,e-t.dz*23,n+t.dx*23));return i.some(o=>cu(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function Kw(i,t,e){if(!Object.hasOwn(T0,e.type))return null;let n=F0(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):O0(i,s,r,o),l=(bf/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(T0[e.type],D0-8)}}function A0(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function R0(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function Qw(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function C0(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function ou(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function B0(i){return Object.hasOwn(_f,i.finish)?_f[i.finish]:_f.graphite}function tE(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function I0(i,t,e){let[n,s]=tE(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=le.clamp(s/i.item.h+.5,0,1);return Ts-Ts*r}function au(i,t,e){return cu(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?le.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=bf/2})}function eE(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(h=>au(h,n,s)),o=t.some(h=>Wr(h)&&au(h,n,s)&&au(h,i.x1,i.y1)&&au(h,i.x2,i.y2)),a=r?0:Jn,c=a;if(!o)for(let h of e){let f=I0(h,i.x1,i.y1),d=I0(h,i.x2,i.y2);if(f!==null&&d!==null){a=f,c=d;break}}let[,l,u]=B0(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/$w)))}}function Mf(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(b=>b?.points?.length>=3&&b.points.every(S=>Number.isFinite(S?.x)&&Number.isFinite(S?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(b=>!Wr(b)):e,s=i.walls.map(A0).filter(Boolean),r=s.filter(b=>b.kind!=="fence"),o=i.items.filter(b=>typeof b?.id=="string"&&typeof b.type=="string"&&[b.x,b.y,b.w,b.h].every(Number.isFinite)&&b.w>0&&b.h>0),a=C0(),c=C0(),l=(b,S)=>ou(a,b,S);for(let b of e)for(let S of b.points)l(S.x,S.y);for(let b of s)l(b.x1,b.y1),l(b.x2,b.y2);for(let b of n)for(let S of b.points)ou(c,S.x,S.y);for(let b of r)ou(c,b.x1,b.y1),ou(c,b.x2,b.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:E0},h=new Map(r.map(b=>[b.id,b])),f=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(b=>h.has(b))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,h.get("w1").y1+57],[h.get("w2").x1,h.get("w1").y1+57],[h.get("w3").x1,h.get("w3").y1],[h.get("w3").x2,h.get("w3").y2],[u.minX-10,h.get("w4").y2]].map(([b,S])=>({x:b,y:S})),southDeck:[[u.minX-10,h.get("w6").y1],[h.get("w7").x1,h.get("w7").y1],[h.get("w7").x2,h.get("w7").y2],[h.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([b,S])=>({x:b,y:S})),recess:{x1:h.get("w12").x2,x2:h.get("w18").x1,z1:Math.min(h.get("w11").y2,h.get("w12").y2),z2:h.get("w13").y2}}:null,d=r.filter(b=>f?!(b.id==="w3"&&R0(b,[400,408,342,468]))&&!(b.id==="w7"&&R0(b,[248,590,302,651])):!0);if(f){l(f.left,f.stepTop),l(f.deckEdge,f.deckBottom);let{x1:b,x2:S,z1:A}=f.recess;if(S>b){let _=[[b,h.get("w12").y2,b,A],[b,A,S,A]];for(let[C,D]of _.entries()){if(d.some(W=>Qw(W,D)))continue;let[I,U,k,O]=D,Y=A0({id:`reference-recess-${C}`,x1:I,y1:U,x2:k,y2:O});Y&&d.push(Y)}}}let g=new Map;for(let b of o.filter(S=>S.type==="window")){let S=F0(d,b.x,b.y,(b.rotation||0)*Qr);if(!S||S.distance>27)continue;let{wall:A,t:_,centerX:C,centerZ:D}=S,I=Math.max(1,_-b.w/2+1),U=Math.min(A.length-1,_+b.w/2-1);if(U-I<14)continue;A.openings.push({start:I,end:U});let k=O0(n,A,C,D),O=A.angle+(k<0?Math.PI:0),Y=(I+U)/2;g.set(b.id,{x:A.x1+Y*A.dx,z:A.y1+Y*A.dz,angle:O,window:{...b,w:U-I+2,rotation:O/Qr}})}let y=o.filter(b=>b.type==="garageDoor"),p=o.map(b=>{let S=b.type==="cameraThumbnail"&&y.some(Y=>dE(b,Y))?Jn:z0(b.type),A=b.type==="controlZone"&&(b.visualKind==="window"||b.entityId?.startsWith("cover.")),_=g.get(b.id)??Kw(n,d,b);if(A){let Y=52;for(let W of g.values()){let Z=Math.hypot(W.x-b.x,W.z-b.y);Z<Y&&(_=W,Y=Z)}}let C=_?.x??b.x,D=_?.z??b.y,I=_?.angle??(Number.isFinite(b.rotation)?b.rotation*Qr:0),U=b.type==="stairs"?1536:300,k=Math.min(U,(Math.abs(Math.cos(I))*b.w+Math.abs(Math.sin(I))*b.h)/2),O=Math.min(U,(Math.abs(Math.sin(I))*b.w+Math.abs(Math.cos(I))*b.h)/2);return l(C-k,D-O),l(C+k,D+O),{item:b,x:C,z:D,baseY:S,angle:I,window:_?.window,mountY:_?.mountY,isBlind:A}});for(let b of d)b.openings.sort((S,A)=>S.start-A.start||S.end-A.end);let m=p.filter(({item:b})=>b.type==="stairs").map(b=>{let{item:S,x:A,z:_,angle:C}=b,D=Number.isInteger(S.steps)&&S.steps>=2&&S.steps<=40?S.steps:U0,I=Math.min(46,Math.max(12,S.w*.47)),U=-S.h/2-I;for(let k of[-S.w/2,S.w/2])l(A+k*Math.cos(C)-U*Math.sin(C),_+k*Math.sin(C)+U*Math.cos(C));return{...b,steps:D,apronDepth:I}}),x=s.filter(b=>b.kind==="fence").map(b=>eE(b,e,m)),M=Wh(e,f,t),v=lm(d.map(b=>({...b,palette:B0(b)})),bf,D0,Zw);return Number.isFinite(a.minX)||Object.assign(a,E0),{rooms:e,walls:d,fences:x,stairs:m,placements:p,bounds:a,houseBounds:u,reference:f,floorStructure:M,wallStructure:v,editableStructure:t}}function P0(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function Sf([i,...t]){let e=P0(new qn,i);return e.holes=t.map(n=>P0(new Fs,n)),e}function nE(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=lu(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let h=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,h,256,32),s.globalAlpha=.48,s.fillRect(0,h,256,1.2);let f=30+u*47%181;s.fillRect(f,h,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=c()*256,y=h+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(g,y),s.quadraticCurveTo(g+p/2,y+c()*2-1,g+p,y),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let h=0;h<8;h++)s.globalAlpha=c()*.14,s.fillRect(h*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(h*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new Cr(n);return l.colorSpace=en,l.wrapS=l.wrapT=Ns,l}function vf(i){let t=new Map,e=new Me,n=new fn,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new Lr({color:d})),a.get(d));function l(d,g,y,p,m,x=0){n.setFromAxisAngle(r,x),e.compose(s.set(y,p,m),n,o),d.applyMatrix4(e);let M=c(g);t.has(M)||t.set(M,[]),t.get(M).push(d)}function u(d,g,y,p,m,x,M,v=0){d>0&&g>0&&y>0&&l(new Te(d,g,y),p,m,x,M,v)}function h(d,g,y,p,m,x,M){let v=new Ae(1,9,6);v.scale(d,g,y),l(v,p,m,x,M)}function f(){for(let[d,g]of t){let y=Gn(g);if(!y){for(let p of g)i.add(new ce(p,d));continue}i.add(new ce(y,d));for(let p of g)p.dispose()}t.clear()}return{add:l,ball:h,box:u,material:c,finish:f}}function iE(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(xf,r)?r:"oak";if(!s.has(a)){let c=xf[a],l=nE(n,c,141+Object.keys(xf).indexOf(a)*977);s.set(a,new Lr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new cs(Sf(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),h=l.getAttribute("uv");for(let d=0;d<h.count;d++)h.setXY(d,u.getX(d)/248,u.getZ(d)/248);let f=new ce(l,s.get(a));f.receiveShadow=!0,i.add(f)}}for(let r of e.floorStructure.footprint)L0(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)L0(t,r,Jn-1,-22,"#a18e84",!0)}function sE(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new Ee(e,1))}return i}function L0(i,t,e,n,s,r=!1){let o=new Vi(Sf(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(sE(o),s,0,e,0)}function rE(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,h=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,h,t,h,0)}let r=new he;return r.setAttribute("position",new Zt(e,3)),r.setAttribute("uv",new Zt(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function N0(i,t){let e=new cs(Sf(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function oE(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(N0(o,!1),r,0,s,0);for(let o of e.bottom)i.add(N0(o,!0),r,0,n,0);e.sides.length&&i.add(rE(e.sides,s-n),r,0,n,0)}}function aE(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:h,posts:f,color:d,postColor:g}=n,y=l-c,p=new Te(Math.hypot(u,y),5,7);p.rotateZ(Math.atan2(y,u)),i.add(p,d,(s+o)/2,(c+l)/2+Ma,(r+a)/2,-h);for(let m=0;m<=f;m++){let x=m/f,M=le.lerp(s,o,x),v=le.lerp(r,a,x),b=le.lerp(c,l,x),S=[M,b,v].map(A=>Math.round(A*1e3)).join(",");e.has(S)||(e.add(S),i.box(5,Ma,5,g,M,b+Ma/2,v,-h))}}}function k0(i,t,e,n,s=0,r=0){let o=e/n,a=-Ts/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let h=r-e/2+o*u,f=u===n-1?0:Ts+(u+1)*a,d=f-3;i.box(t,d-Jn,o,"#a98075",s,(Jn+d)/2,h+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,f-1.5,h+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,d+3.35/2,h+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,d+3.4/2,h+l/2)}}function cE({item:i,steps:t,apronDepth:e}){let n=new se,s=vf(n);k0(s,i.w,i.h,t);let r=Ts-Jn;return s.box(i.w,r,e,"#c8b79e",0,Jn+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:Ts/2}}function lE(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=U0,u=r-s,h=u/l,f=Ts,d=-f/l;k0(i,a,u,l,c,(s+r)/2);for(let v=0;v<l;v++){let b=s+h*(v+.5),S=f+(v+1)*d;i.box(5,24,5,"#9f8183",e+4,S+12,b)}let g=h*(l-1),y=d*(l-1),p=new Te(7,5,Math.hypot(g,y)+5);p.rotateX(-Math.atan2(y,g)),i.add(p,"#896e79",e+4,24-y/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,f-1.5,s-40);let[m,x]=o,M=Math.max(2,Math.ceil((x.x-m.x)/28));i.box(x.x-m.x,5,7,"#896e79",(x.x+m.x)/2,28,m.y);for(let v=0;v<=M;v++)i.box(5,28,5,"#9f8183",m.x+(x.x-m.x)*v/M,14,m.y)}function uE(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=lu(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let h=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);h.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),h.addColorStop(1,"#b1c3a000"),e.fillStyle=h,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new Cr(t);return s.wrapS=s.wrapT=Ns,s.repeat.set(15,10),s.colorSpace=en,s.anisotropy=4,s}function hE(i,t,e,n){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=lu(150741);if(!t.editableStructure){let g=Math.min(90,c*.18),y=t.reference?t.reference.left+g/2:s+g/2;i.box(g,4,115,"#c7baa4",y,-109,o-88);for(let p=0;p<5;p++)i.box(g*.85,1.8,13,"#dbceba",y,-106,o-137+p*20)}let h=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[g,y]of h){let p=s+g*c,m=o+y*l,x=21+u()*24;i.ball(x*.94,9,x*.67,"#6d886a",p,-104,m),i.ball(x*.82,x*.57,x*.69,"#819b76",p+3,-98,m);for(let M=0;M<8;M++){let v=M*2.39996,b=(.2+u()*.5)*x,S=x*(.28+u()*.2),A=["#94ad7f","#a6ba88","#8da878","#bad09c"][M%4];i.ball(S*1.15,S*.8,S,A,p+Math.cos(v)*b,-93+12*u(),m+Math.sin(v)*b*.75)}for(let M=0;M<5;M++){let v=M%2?"#e6c4b1":"#fae6a4",b=p+(u()-.5)*x*1.14,S=m+x*(.62+u()*.43);i.ball(2.3,4.6,2.3,"#819765",b,-106,S),i.ball(3.9,1.8,3.3,v,b,-101.5,S),i.ball(1.2,.9,1.2,"#cb9c57",b,-100.3,S)}}let f=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],d=t.placements.filter(({item:g})=>g.type==="garageDoor"||g.type==="stairs");for(let[g,[y,p,m,x]]of f.entries()){let M=x*ba[y].radius+7,v=s+p*c,b=o+m*l,S=b<o?-1:1,A=v<(s+r)/2?-1:1;for(let[_,C]of[[0,0],[A*(M+20),0],[0,S*(M+20)]]){let D=v+_,I=b+C;if(!(I-M<=e.nearZ||D+M>s&&D-M<r&&I+M>o&&I-M<a||d.some(k=>{let O=D-k.x,Y=I-k.z,W=O*Math.cos(k.angle)+Y*Math.sin(k.angle),Z=-O*Math.sin(k.angle)+Y*Math.cos(k.angle);return Math.abs(W)<k.item.w/2+M&&Math.abs(Z)<k.item.h*.6+M}))){n.add({kind:y,x:D,z:I,groundY:Jn,height:x,seed:7229+g*101});break}}}for(let[g,y,p,m]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])n.add({kind:y,x:s+p*c,z:e.farZ-m,groundY:Jn+.68,seed:g})}function fE(i,t,e){let n=lu(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(M,v)=>!(o&&M>=o.x1&&M<=o.x2&&v>=o.z1&&v<=o.z2)&&!t.rooms.some(b=>(!t.editableStructure||!Wr(b))&&cu(b,M,v)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let M=0;M<210;M++){let v=s.minX-70+(s.maxX-s.minX+140)*n(),b=c+l*n(),S=n()*180,A=8+n()*8,_=112+n()*34;a(v,b)&&r.push({x:v,z:b,phase:S,length:A,speed:_})}let u=new Float32Array(r.length*6),h=new Float32Array(r.length*3),f=new Float32Array(r.length*3),d=new he,g=new he,y=new he;d.setAttribute("position",new Ee(u,3).setUsage(Dn)),g.setAttribute("position",new Ee(h,3).setUsage(Dn)),y.setAttribute("position",new Ee(f,3).setUsage(Dn));let p=new Eo(d,new Ar({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),m=new Rr(g,new Us({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),x=new Rr(y,new Us({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));return p.frustumCulled=m.frustumCulled=x.frustumCulled=!1,i.add(p,m,x),(M,{condition:v,windSpeed:b,windBearing:S})=>{p.visible=jw.has(v);let A=v==="pouring"||v==="lightning-rainy";if(p.material.opacity=A?.5:.34,m.visible=Jw.has(v),x.visible=v==="hail",p.visible||m.visible||x.visible){let _=Number.isFinite(S)?S*Qr:285*Qr,C=le.clamp(b??6,0,22)*.028;for(let[D,I]of r.entries()){let U=65-(I.phase+M*I.speed*(A?1.3:1))%170,k=65-(I.phase+M*20)%170,O=65-(I.phase+M*I.speed*1.55)%170,Y=D*6;u.set([I.x,U,I.z,I.x+I.length*C*Math.sin(_),U+I.length,I.z-I.length*C*Math.cos(_)],Y),h.set([I.x+Math.sin(M+D)*6,k,I.z],D*3),f.set([I.x,O,I.z],D*3)}d.attributes.position.needsUpdate=p.visible,g.attributes.position.needsUpdate=m.visible,y.attributes.position.needsUpdate=x.visible}}}function z0(i){return i==="garageDoor"?Jn:0}function dE(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*Qr,r=Math.cos(s),o=Math.sin(s);return jp(t,e*r+n*o,-e*o+n*r)}function pE(i,t,e,n){let s=new G,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let h of l){s.set(...h).project(t);let f=(s.x+1)*e/2,d=(1-s.y)*n/2;u.left=Math.min(u.left,f-r),u.right=Math.max(u.right,f+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:h,y2:f,base1:d,base2:g})=>o([[l,d,u],[l,d+Ma,u],[h,g,f],[h,g+Ma,f]])),c=i.stairs.map(({x:l,z:u,angle:h,item:f,apronDepth:d})=>{let g=Math.cos(h),y=Math.sin(h),p=[];for(let m of[-f.w/2,f.w/2])for(let[x,M]of[[-f.h/2-d,Ts],[f.h/2,0]])p.push([l+m*g-x*y,M,u+m*y+x*g]);return o(p)});return[...a,...c]}function mE(i){let{floorStructure:t,wallStructure:e}=i,n=i.editableStructure?t.foundation:Wh(i.rooms.filter(s=>!Wr(s)),i.reference,!0).foundation;return{home:ga(Jh(n,e)),vacuum:ga(Jh(t.footprint,e))}}function H0(i,t){let e=Mf(t),n=t.sceneSettings,s=new Il({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});s.resetState();let r=new os;r.background=new Xt("#d7dfcd");let o=new vo(r.background),a=new fs(-800,800,450,-450,1,Gl),{minX:c,maxX:l,minZ:u,maxZ:h}=e.bounds,f=new Ge({color:"#e8e8d2",map:uE(i.ownerDocument),roughness:.95}),d=new ce(new Zn(6200,4200),f);d.rotation.x=-Math.PI/2,d.position.set((c+l)/2,Jn,(u+h)/2),r.add(d);let g=vf(r),y=vf(r),p=w0(y),m=zm(e),x=Hm(g,m,Jn,d.geometry.parameters.width,d.position.x),M,{water:v}=Gm(g,m,Jn,e.houseBounds,d.geometry.parameters.width,d.position.x),b=v.shoreline.reduce((ht,It)=>Math.abs(It.x-v.focusX)<Math.abs(ht.x-v.focusX)?It:ht),S={road:{x:x.centerX,y:x.surfaceY+8,z:(x.lanes[0]+x.lanes[1])/2},coast:{x:v.focusX+16,y:v.y,z:b.z-36},beach:{x:v.focusX,y:v.y+8,z:b.z+37}};hE(g,e,m,p),lE(g,e),iE(r,g,e,i.ownerDocument),oE(g,e),aE(g,e.fences),g.finish();let A=r.children.length;y.finish();let _=r.children.slice(A),C=r.children.filter(ht=>ht.isMesh),D=fm(s,r,e.bounds),I=hm();D.markStructure();let U=new Zn(16e4,16e4),{position:k,uv:O}=U.attributes;for(let ht=0;ht<O.count;ht++)O.setXY(ht,k.getX(ht)/d.geometry.parameters.width+.5,k.getY(ht)/d.geometry.parameters.height+.5);let Y=new ce(U,f);Y.name="Horizon foreground",Y.rotation.copy(d.rotation),Y.position.copy(d.position),Y.position.y-=.12,Y.receiveShadow=!0,Y.visible=!1,r.add(Y);let W=Bm(v),Z=r0(x),ct=h0(v),nt=d0(v,m);r.add(W.mesh,Z.root,ct.root,nt.root);let it=fE(r,e,m.sceneryMinZ),et=e.floorStructure.footprint,{home:Pt,vacuum:Ct}=mE(e),Rt=(ht,It)=>Pt.contains(ht,It)?0:null,Tt=new os,X=Lm(),H=Um(et);r.add(H.root);let $=new Bs("#fff5e1","#c9bfd7",1.8),rt=new ds("#fff1d8",1.65);rt.position.set(-4,9,6),Tt.add($,rt);let mt={supportsRoute:(ht,It,Ut,Yt)=>Pt.supportsRoute(ht,It,Ut,Yt,Math.min(11,Pt.clearance(ht,It),Pt.clearance(Ut,Yt))),floorClearance:Pt.clearance},pt=new Map,bt=new Map,Mt=new Map,lt=new Map(e.stairs.map(ht=>[ht.item.id,ht]));for(let ht of e.placements){let{item:It,x:Ut,z:Yt,baseY:te,angle:fe,window:me,mountY:Ue,isBlind:Ve}=ht,Ze=It.type==="window"&&me?me:It,Lt=lt.get(It.id),Ht=Lt?cE(Lt):Jp(Ze,{window:Ve?me:void 0,mountY:Ue})??Xp(Ze);if(Ht){let ie=vm(It,Ht.root);if(Ht.root.position.set(Ut,te+ie,Yt),Ht.root.rotation.y=-fe,Ht.floorRadius){let ue=Ht.floorRadius,be=(nn,vn)=>Ct.clearance(nn,vn)>=ue,Se=(nn,vn,bn,je)=>Ct.supportsRoute(nn,vn,bn,je,ue);Ht.dockFits=be(Ut,Yt),Ht.root.name=It.id,Ht.liveMotion=ha({allowsPoint:be,allowsRoute:Se,duration:.42}),Ht.demoMotion=ha({allowsPoint:be,allowsRoute:Se,duration:0})}r.add(Ht.root),bt.set(It.id,Ht),It.type==="garageDoor"&&Mt.set(Ht.root,It.id),D.register(It,Ht)}pt.set(It.id,{x:Ut,z:Yt,baseY:te,rootY:Ht?.root.position.y,object:Ht})}let _t=jh(Tt,Rt,{...mt,seats:bm(e.placements,bt,Pt.clearance)}),vt,St=_t,Nt=_0(e.placements,bt),Ot=Nt.resolve(),Bt=Ot,$t,Gt=!1,j={...e.bounds,sceneryMinZ:m.sceneryMinZ,waterfront:{minX:v.focusX-475,maxX:v.focusX+605,minZ:b.z-352,maxZ:b.z+88}};for(let ht of e.placements){let It=bt.get(ht.item.id);if(!It)continue;let Ut=Ot.get(ht.item.id);if(Ut&&(It.root.position.y=Ut.y),It.root.scale.y!==1||Ut?.supportId){let{max:Yt}=new We().setFromObject(It.root);Number.isFinite(Yt.y)&&(j.maxY=Math.max(j.maxY??92,Yt.y))}}let oe=new G,Vt=!1,B=0,T=0,tt=Zi(),ut,gt=new ms,z=new Xn(new G(0,1,0),0),w=new G,E=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function R(){_m(a,j,B,T,tt,ut);let ht=gm(tt.tilt);if(r.fog=ht?o:null,Y.visible=!!ht,ht){let It=a.far-Gl;o.near=ht.near+It,o.far=ht.far+It}}function F(ht,It){if(Vt||ht<1||It<1||ht===B&&It===T)return;B=ht,T=It;let Ut=i.ownerDocument.defaultView?.devicePixelRatio||1;s.setPixelRatio(Math.min(Ut,1.5,Math.sqrt(27e5/(ht*It)))),s.setSize(ht,It,!1),R()}function L(ht,It){return tt=Zi(ht),ut=It,!Vt&&B>0&&T>0&&R(),V()}function V(){return{...tt}}function q(ht){if(typeof ht=="string"){if(Object.hasOwn(S,ht))return{...S[ht]};let It=pt.get(ht);if(!It)return null;let{x:Ut,z:Yt,baseY:te,object:fe}=It;return fe?{x:Ut,y:fe.root.position.y+(fe.anchorY??0)*fe.root.scale.y,z:Yt}:{x:Ut,y:te+6,z:Yt}}return[ht?.x,ht?.y].every(Number.isFinite)?{x:ht.x,y:(Rt(ht.x,ht.y)??0)+22,z:ht.y}:null}function at(ht,It){return Vt||!Number.isFinite(ht)||!Number.isFinite(It)||B<=0||T<=0?!1:(gt.setFromCamera(new Dt(ht/B*2-1,1-It/T*2),a),!0)}function ot(ht,It,Ut,{preferTabletop:Yt=!1}={}){if(!at(ht,It))return null;if(Yt){let te=Nt.projectTabletop(Ut,gt);if(te)return te}return z.constant=-z0(Ut),gt.ray.intersectPlane(z,w)?{x:w.x,y:w.z}:null}function At(ht,It){if(!Mt.size||!at(ht,It))return null;let Ut=[];for(let te of Mt.keys())te.traverseVisible(fe=>{fe.isMesh&&Ut.push(fe)});let Yt=gt.intersectObjects(Ut,!1)[0];if(!Yt||gt.intersectObjects(C,!1).some(te=>te.distance<Yt.distance-.01))return null;for(let te=Yt.object;te;te=te.parent)if(Mt.has(te))return Mt.get(te);return null}function N(ht=!1){H.root.visible=!ht&&tt.preset!=="waterfront",s.render(r,a);let It=!ht&&X.scene.children.length>0;if(!(!St?.hasVisibleTracks&&!It)){s.autoClear=!1;try{s.clearDepth(),It&&s.render(X.scene,a),St?.hasVisibleTracks&&s.render(Tt,a)}finally{s.autoClear=!0}}}function st(ht,It,Ut=!1){let Yt=It.beachActivity??(It.night?"overnight":"day"),te={reduceMotion:It.reduceMotion===!0,night:It.night===!0,condition:It.condition,transientTelemetry:Ut,activity:Yt};Z.root.visible=Yt!=="overnight"&&(Ut||mi(n,"sidewalk")),ct.root.visible=Ut||mi(n,"boats"),nt.root.visible=Ut||mi(n,"beachPlay"),Z.root.visible&&Z.update(ht,te),ct.root.visible&&ct.update(ht,te),nt.root.visible&&nt.update(ht,te);let fe=Ut||mi(n,"trees");for(let me of _)me.visible=fe;fe&&p.update(ht,It),W.update(ht,Ut||mi(n,"reflections")?It:{...It,reflections:!1})}function J(ht=0,It={},Ut={},{animateTelemetry:Yt=!0,showTelemetryPosition:te=!0,draftPositions:fe,transientTelemetry:me=!1}={}){if(Vt||B<1||T<1)return;me||(Ut=Nl(Ut,n));let Ue=Ut.reduceMotion===!0,Ve=!Ue&&Number.isFinite(ht)?ht:0,Ze=qi(Ut);Ut={...Ut,solar:me?Ze:I(Ze,Ve,Ue)};let Lt=Yt?Ve:0,Ht=me||mi(n,"traffic");Ht&&!M&&Ut.traffic&&(M=i0(x),r.add(M.root)),M&&(M.root.visible=Ht,Ht&&M.update(ht,Ut.traffic,{reduceMotion:Ue,night:Ut.night===!0,transientTelemetry:me})),it(Lt,me||mi(n,"precipitation")?Ut:{}),st(ht,Ut,me);let ie=$t!==fe;ie&&($t=fe,Bt=fe?Nt.resolve(fe):Ot),Gt=!1;for(let[be,Se]of bt){let nn=It[be]??E,{visible:vn,position:bn}=Se.root,je=fe?.[be]?.position,As=!1;if(Se.floorRadius&&te&&!je){let sn=me?Se.demoMotion:Se.liveMotion;!me&&Se.demoMotion.hasPosition&&Se.demoMotion.clear();let On=sn.observe(nn.position,ht,{observation:nn.positionObservedAt,reduceMotion:Ue});!On&&nn.state==="docked"&&sn.clear();let P=sn.sample(ht,Ue);je=P,As=On&&P?.current===!0,Se.root.visible=!!(P||!sn.hasPosition&&Se.dockFits)}else Se.floorRadius&&(Se.root.visible=!0);let ji=pt.get(be),Fi=je?.x??ji.x,Je=je?.y??ji.z;Gt||=!!(Se.floorRadius&&(vn!==Se.root.visible||bn.x!==Fi||bn.z!==Je)),Se.root.position.x=Fi,Se.root.position.y=Bt.get(be)?.y??ji.rootY,Se.root.position.z=Je,Se.animate?.(nn,Se.ambientMotion?Ve:Lt,As,me)}D.update(Ut,It,f,ie),r.fog&&o.color.copy(r.background);let ue=me?vt:_t;St!==ue&&(St?.setVisible(!1),me||vt?.setTracks([],0),St=ue,St?.setVisible(!0)),St?.render(ht,Ue,!fe),N(me)}function wt(ht,It,Ut={}){Vt||(Ut.transientTelemetry?(!vt&&ht?.length&&(vt=jh(Tt,Rt,mt),vt.setVisible(!1)),vt?.setTracks(ht,It,Ut)):_t.setTracks(ht,It,Ut))}function Et(ht){if(tt.preset==="waterfront")return null;let It=pt.get(ht);if(!It||B<1||T<1)return null;let{x:Ut,z:Yt,baseY:te,object:fe}=It;if(fe){if(!fe.root.visible)return null;oe.set(fe.anchorOffset?.x||0,fe.anchorY||0,fe.anchorOffset?.z||0),fe.root.localToWorld(oe)}else oe.set(Ut,te+6,Yt);return oe.project(a),{x:(oe.x+1)/2,y:(1-oe.y)/2}}function xt(){if(Vt)return;Vt=!0,_t.dispose(),vt?.dispose(),X.dispose(),H.dispose(),M?.dispose(),Z.dispose(),ct.dispose(),nt.dispose();let ht=new Set,It=new Set,Ut=new Set;r.traverse(Yt=>{Yt.geometry&&ht.add(Yt.geometry);for(let te of Array.isArray(Yt.material)?Yt.material:[Yt.material])if(te){It.add(te);for(let fe of Object.values(te))fe?.isTexture&&Ut.add(fe)}});for(let Yt of Ut)Yt.dispose();for(let Yt of ht)Yt.dispose();for(let Yt of It)Yt.dispose();D.dispose(),s.dispose()}return{resize:F,render:J,anchor:Et,setView:L,getView:V,getDemoFocus:q,projectToPlan:ot,pickGarage:At,exteriorClearance:()=>pE(e,a,B,T),dispose:xt,hasAmbientMotion:!0,setPeople:wt,setDetectionZones:X.setZones,setHeatMap:H.setHistory,get trackedControlChanged(){return Gt},get hasPendingReacquisition(){return _t.hasPendingReacquisition||[...bt.values()].some(ht=>ht.liveMotion?.pendingReacquisition)},canPlacePerson:(ht,It)=>Pt.clearance(ht,It)>0,get hasPeopleMotion(){return St?.hasMotion??!1}}}var G0=.35,uu=7.5,gE=8;function V0(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,m]=s.values();return Math.hypot(p.x-m.x,p.y-m.y)};function a(p,m){let x=Zi({...p,...m});(x.azimuth!==p.azimuth||x.tilt!==p.tilt||x.zoom!==p.zoom)&&e(x)}function c(p){i.hasPointerCapture(p)&&i.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!n(p))return;let m=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!m||!s.values().next().value.touch))){try{i.setPointerCapture(p.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:m}),p.preventDefault()}}function h(p){let m=s.get(p.pointerId);if(!m)return;let x=r();if(!x){l();return}let M=s.size===2,v=M?o():0,b={x:p.clientX,y:p.clientY,touch:m.touch};if(s.set(p.pointerId,b),p.preventDefault(),M){let S=o();Math.min(v,S)>=gE&&a(x,{zoom:x.zoom*S/v});return}a(x,{azimuth:x.azimuth-(b.x-m.x)*G0,tilt:x.tilt+(b.y-m.y)*G0})}function f(p){s.delete(p.pointerId)&&c(p.pointerId)}function d(p){let m=r();if(!m||!Number.isFinite(p.deltaY)||!p.deltaY)return;let x=p.deltaMode===1?16:p.deltaMode===2?i.clientHeight:1,M=Math.max(-350,Math.min(350,p.deltaY*x));p.preventDefault(),p.stopPropagation(),a(m,{zoom:m.zoom*Math.exp(-M*.002)})}function g(p){let m=r();if(!m||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let x;switch(p.key){case"ArrowLeft":x={azimuth:m.azimuth-uu};break;case"ArrowRight":x={azimuth:m.azimuth+uu};break;case"ArrowUp":x={tilt:m.tilt-uu};break;case"ArrowDown":x={tilt:m.tilt+uu};break;case"+":case"=":x={zoom:m.zoom*1.1};break;case"-":x={zoom:m.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(m,x)}let y=[["pointerdown",u],["pointermove",h],["pointerup",f],["pointercancel",f],["lostpointercapture",f],["wheel",d,{passive:!1}],["keydown",g]];for(let[p,m,x]of y)i.addEventListener(p,m,x);return{cancel:l,dispose(){l();for(let[p,m,x]of y)i.removeEventListener(p,m,x)}}}var UR=1200*1e3,FR=new Map([["s",1/60],["min",1],["h",60]]);var yE="roomcraft.traffic-vehicle-style.v1";function W0(i){try{let t=i.localStorage.getItem(yE);return Kl.some(({id:e})=>e===t)?t:""}catch{return""}}var GR=1200*1e3,VR=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function X0(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],h=u.length>0,f=h?5:3,d,g,y=1/0;for(let m=0;m<=f&&(h||!d);m++)for(let[x,M]of m===0?s.slice(0,1):s.slice(1)){let v=o(a.x+x*m*34,c/2,t-c/2),b=o(a.y+M*m*34,l/2,e-l/2);if(n.some(_=>Math.abs(v-_.x)<(c+_.w)/2+2&&Math.abs(b-_.y)<(l+_.h)/2+2))continue;if(m<=3&&!d&&(d={...a,x:v,y:b,w:c,h:l}),!h)break;if(u.some(_=>v+c/2>_.left&&v-c/2<_.right&&b+l/2>_.top&&b-l/2<_.bottom))continue;let A=Math.hypot(v-a.x,b-a.y);A<y&&(g={...a,x:v,y:b,w:c,h:l},y=A)}let p=g??d;p&&n.push(p)}return n}var $0=Sa(ua(),1),Y0="roomcraft-presence-v1",q0=4500,j0=/^sensor\.[a-z0-9_]+$/,xE=4,wf=1536,Ef=1024,_E=[[[0,0],[wf,0],[wf,Ef],[0,Ef],[0,0]]],Z0=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],vE=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...Z0.map(([i,t])=>[t,i]),...Z0.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function J0(i,t){return i>=0&&i<=wf&&t>=0&&t<=Ef}function K0(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function bE(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function Q0(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!K0(s))continue;let[r,o,a,c,l,u]=s,h=vE.get(n.presenceTrackProfile),f=Math.hypot(o,l),d=J0(a,u)?{origin:{x:a,y:u},forward:{x:o/f,y:l/f}}:{},g=t.length;for(let[y,p]of[["configured",bE(n.presenceTrackZone)],["nominal",h?.ring]]){if(!p)continue;let m=p.map(([x,M])=>[r*x+o*M+a,c*x+l*M+u]);for(let[x]of $0.default.intersection([m],_E))t.push({id:n.id,kind:y,points:x.slice(0,-1).map(([M,v])=>({x:M,y:v})),...d,...y==="nominal"?{rangeMeters:h.rangeMeters}:{}})}if(t.length>g&&++e===12)break}return t}function ME(i={},t=[]){let e={};for(let n of new Set(t)){if(!j0.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==Y0)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,xE):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:Y0,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function tg(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!j0.test(o||"")||s.has(o)||!K0(a))continue;s.add(o);let c=ME(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=q0)continue;let[h,f,d,g,y,p]=a;for(let m of u){let x=h*m.x+f*m.y+d,M=g*m.x+y*m.y+p;J0(x,M)&&n.push({id:o+":"+m.id,x,y:M,expiresAt:l+q0})}}return n}var Tf=new Map([["sunny",["Sunny","clear","cirrus"]],["clear-night",["Clear night","clear","cirrus"]],["partlycloudy",["Partly cloudy","partial","cumulus"]],["cloudy",["Cloudy","clouds","stratus"]],["rainy",["Rain","rain","nimbostratus"]],["pouring",["Heavy rain","rain","nimbostratus"]],["lightning",["Thunderstorms","thunder","cumulonimbus"]],["lightning-rainy",["Thunderstorms","storm","cumulonimbus"]],["snowy",["Snow","snow","stratus"]],["snowy-rainy",["Sleet","sleet","nimbostratus"]],["hail",["Hail","sleet","cumulonimbus"]],["fog",["Fog","fog","fog"]],["windy",["Windy","wind","cirrus"]],["windy-variant",["Windy and cloudy","wind-clouds","altocumulus"]],["exceptional",["Unusual weather","unknown","none"]]]),ng=new Set(["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]),ig=Object.freeze([...Tf].map(([i,[t]])=>Object.freeze({id:i,label:i==="lightning-rainy"?"Thunderstorms with rain":t}))),sg=Object.freeze([...ng]),eg=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function rg(i={},t=!1){let{condition:e,daylightKnown:n,night:s,moonPhase:r,temperature:o,unit:a,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:h,moonElevation:f,windSpeed:d,windBearing:g,cloudCoverage:y}=i;if(t)return{label:"Weather offline",sky:"unknown",effect:"unknown",cloud:"none",moon:"",reading:"",windReading:""};let[p,m,x]=Tf.get(e)||["Weather unavailable","unknown","none"],M=n?s:e==="clear-night",v=n?!s:e==="sunny",b=Number.isFinite(d)&&d>=0?d:void 0,S=Number.isFinite(g)?(g%360+360)%360:void 0,A=S===void 0?"":eg[Math.round(S/22.5)%eg.length],_=b===void 0?"":b===0?"Calm wind":`Wind ${A?`from ${A} at `:""}${Math.round(b*10)/10} m/s`;return{label:p,sky:M?"night":v?"day":"unknown",effect:m,cloud:x,moon:M&&ng.has(r)?r:"",reading:Tf.has(e)&&Number.isFinite(o)?`${Math.round(o)}${a||"\xB0"}`:"",windSpeed:b,windBearing:S,windReading:_,cloudCoverage:Number.isFinite(y)&&y>=0&&y<=100?y:void 0,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:h,moonElevation:f}}var SE=[["dipper",[[7,9],[27,15],[46,22],[63,28],[93,23],[89,42],[65,43]],"M7 9L27 15 46 22 63 28 93 23 89 42 65 43 63 28"],["cassiopeia",[[8,35],[28,17],[47,31],[67,10],[91,24]],"M8 35L28 17 47 31 67 10 91 24"],["orion",[[30,6],[68,8],[44,25],[50,28],[56,31],[29,46],[67,47]],"M30 6L44 25 50 28 56 31 68 8M44 25L29 46M56 31L67 47"]],wE=SE.map(([i,t,e])=>`
  <svg class="coastal-constellation coastal-${i}" viewBox="0 0 100 52" focusable="false">
    <path d="${e}"/>
    ${t.map(([n,s],r)=>`<circle cx="${n}" cy="${s}" r="${r%3===0?2.15:1.55}"/>`).join("")}
  </svg>`).join(""),EE=["#c2d7ed","#e4edff","#fff0d2"];function og(i,t){let e=t?11939:30391,n=()=>(e=e*48271%2147483647)/2147483647;return Array.from({length:i},(s,r)=>{let o=1+(r+n())*98/i,a=5+n()*79,c=t?.85+r%3*.18:.48+r%4*.12;return`radial-gradient(circle at ${o.toFixed(1)}% ${a.toFixed(1)}%,${EE[r%3]} 0 ${c.toFixed(2)}px,transparent ${(c+.6).toFixed(2)}px)`}).join(",")}var ug=`
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <span class="coastal-twilight"></span>
    <div class="coastal-stars">
      <span class="coastal-star-field"></span>
      <span class="coastal-star-sparkle"></span>
      ${wE}
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
  </div>`,to=(i,t,e)=>Math.max(t,Math.min(e,i)),ag=i=>Number.isFinite(i)&&Math.abs(i)<=90,Af=i=>Number.isFinite(i)&&i>=0&&i<=360,Rf=75,cg=i=>76-58*to(i/Rf,0,1),hg=i=>50+38*i,TE=i=>hg(Math.sin(i*Math.PI/180)),AE=new Map([["waxing_crescent",[1,.48]],["first_quarter",[1,0]],["waxing_gibbous",[1,-.48]],["waning_crescent",[-1,.48]],["last_quarter",[-1,0]],["waning_gibbous",[-1,-.48]]]);function RE(i,t){let e=[];for(let[n,s,r]of[[1,0,1],[t,16,-1]])for(let o=0;o<=16;o++){let a=(s+o*r)*Math.PI/16,c=50+i*50*Math.sin(a)*n,l=50-50*Math.cos(a);e.push(`${c.toFixed(2)}% ${l.toFixed(2)}%`)}return`polygon(${e.join(",")})`}var CE=new Map([...AE].map(([i,t])=>[i,RE(...t)])),IE=new Map([["clear",1],["wind",.9],["partial",.66],["wind-clouds",.43]]);function PE(i,t,e,n,s,r,o){let c=(i==="night"&&!t?IE.get(e)??0:0)*to(1-(n??0)/80,0,1);if(o||c<.55||e!=="clear"&&e!=="wind")return{starOpacity:c,meteor:"off",meteorProgress:0,meteorOpacity:0};if(s===void 0&&r===void 0)return{starOpacity:c,meteor:"live",meteorProgress:0,meteorOpacity:0};let l=r===void 0?(s%58-12)/1.4:(r-.36)/.29,u=to(l,0,1),h=Math.min(1,u*5,(1-u)*2)*.9;return{starOpacity:c,meteor:"sample",meteorProgress:u,meteorOpacity:h}}function LE(i={},t=!1){let e=rg(i,t),{sky:n,effect:s,cloud:r,moon:o,sunElevation:a,sunAzimuth:c,moonElevation:l,moonAzimuth:u,windSpeed:h,windBearing:f,cloudCoverage:d}=e,g=qi(t?{}:i),{phase:y}=g,{skyTimeSeconds:p,skyProgress:m,reduceMotion:x=!1}=t?{}:i,M=ag(a),v=y==="sunrise"||y==="sunset",b=Number.isFinite(p)&&!x?Math.max(0,p):void 0,S=Number.isFinite(m)&&!x?to(m,0,1):void 0,A=S===void 0?void 0:Math.sin(S*Math.PI)*Rf,_=S??(b===void 0?void 0:.5-.5*Math.cos(b*Math.PI/480)),C=M?g.elevation:A??g.elevation,D=Af(c)||S===void 0?hg(g.east):83-66*S,I=Af(u)?TE(u):_===void 0?55:18+64*_,U=_===void 0?38:Math.sin(_*Math.PI)*Rf,k=cg(ag(l)?l:U),O=!t&&!x&&!Af(u)&&S===void 0&&b===void 0?"ambient":"fixed",Y=f===void 0?void 0:f*Math.PI/180,W=Y===void 0?9:-Math.sin(Y)*12,Z=Y===void 0?-2:Math.cos(Y)*4,ct=h===void 0?s==="wind"||s==="wind-clouds"?2.5:1:h===0?0:to(h*.25,.32,4.8),nt=d===void 0?1:to(d/52,0,1);return{sky:n,effect:s,cloud:r,moon:o,light:v?"twilight":"regular",clock:b,reduceMotion:x,moonMotion:O,sunX:D,sunY:cg(C),moonX:I,moonY:k,solarPhase:n==="unknown"?"unknown":y,solarDaylight:g.daylight,solarDisc:g.disc,solarCloud:g.cloud,twilightGlow:g.twilight*(1-.42*g.cloud),horizonHaze:g.twilight*(.34+.2*g.cloud),moonOutline:CE.get(o)||"circle(50%)",windX:W,windY:Z,cloudSpeed:ct,cloudOpacity:nt,...PE(n,v,s,d,b,S,x)}}function fg(i,t,e=!1){let n=LE(t,e),{sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,clock:u,reduceMotion:h,cloudSpeed:f,cloudOpacity:d,solarPhase:g,solarDaylight:y,solarDisc:p,solarCloud:m,twilightGlow:x,horizonHaze:M,starOpacity:v,meteor:b,meteorProgress:S,meteorOpacity:A}=n,_={sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,skyClock:u===void 0?"live":"sample",windCalm:String(f===0),skyReduced:String(h),solarPhase:g,stars:v>0?"visible":"hidden",meteor:b};for(let[D,I]of Object.entries(_))i.dataset[D]!==I&&(i.dataset[D]=I);let C={"--coastal-sun-x":`${n.sunX.toFixed(2)}%`,"--coastal-sun-y":`${n.sunY.toFixed(2)}%`,"--coastal-solar-x":`${n.sunX.toFixed(2)}%`,"--coastal-daylight":`${(y*100).toFixed(2)}%`,"--coastal-solar-disc":p.toFixed(3),"--coastal-solar-cloud":m.toFixed(3),"--coastal-twilight-glow":x.toFixed(3),"--coastal-twilight-color":`${(x*100).toFixed(2)}%`,"--coastal-horizon-haze":M.toFixed(3),"--coastal-moon-x":`${n.moonX.toFixed(2)}%`,"--coastal-moon-y":`${n.moonY.toFixed(2)}%`,"--coastal-moon-outline":n.moonOutline,"--coastal-wind-x":`${n.windX.toFixed(3)}vw`,"--coastal-wind-y":`${n.windY.toFixed(3)}px`,"--coastal-wind-speed":String(f||1),"--coastal-cloud-cover":String(d),"--coastal-clock":`${(u??0).toFixed(3)}s`,"--coastal-star-opacity":v.toFixed(3),"--coastal-meteor-progress":S.toFixed(3),"--coastal-meteor-opacity":A.toFixed(3)};for(let[D,I]of Object.entries(C))i.style.getPropertyValue(D)!==I&&i.style.setProperty(D,I)}var lg=`{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`,dg=`
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
    background:${og(39,!1)},
      radial-gradient(ellipse 31% 97% at 34% 0%,#b0c3f522,transparent 100%);
  }
  .coastal-star-sparkle {
    opacity:.85;
    background:${og(13,!0)};
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
  @keyframes coastal-drift ${lg}
  @keyframes coastal-sampled-drift ${lg}
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
`;var NE=2500,Cf=Object.freeze({condition:"sunny",daylightKnown:!0,night:!1,sunElevation:40,sunAzimuth:160,traffic:Object.freeze({severity:"ambient"})}),pg={dawn:[-6,92,!0,"overnight"],sunrise:[2,99,!0,"morning"],morning:[19,114,!0,"morning"],day:[40,160,!0,"day"],sunset:[2,253,!1,"day"],dusk:[-6,265,!1,"evening"],night:[-16,290,!1,"evening"],overnight:[-30,290,!1,"overnight"]},DE=i=>i.replaceAll("_"," ").replace(/^./,t=>t.toUpperCase());function UE({condition:i,daylight:t,moonPhase:e,windSpeed:n,windBearing:s}){let r=i==="clear-night"&&(t==="morning"||t==="day")?"night":t,[o,a,c,l]=pg[r]??pg.day,u=o<-.83;return{...Cf,condition:i,night:u,sunElevation:o,sunAzimuth:a,moonPhase:e,windSpeed:n,windBearing:s,sunRising:c,beachActivity:l}}function mg(i,t,{api:e,viewport:n,bridge:s,onChange:r}){let o=i.getElementById("sceneSettingsDialog"),a=i.getElementById("sceneSettingsButton"),c=i.getElementById("sceneFeatures"),l=i.getElementById("sceneDockAlignment"),u=i.getElementById("scenePreviewMode"),h=i.getElementById("scenePreviewMotion"),f=i.getElementById("scenePreviewSource"),d=i.getElementById("scenePreviewWeather"),g=i.createElement("style");g.textContent=dg,i.head.append(g);let y=i.createElement("template");y.innerHTML=ug.trim();let p=y.content.firstElementChild;p.hidden=!0,n.before(p);try{h.checked=t.localStorage.getItem("roomcraft.reduce-motion.v1")!=="true"}catch{}let m=Op.map(({key:Rt,label:Tt})=>{let X=i.createElement("label");X.className="scene-feature";let H=i.createElement("input");return H.type="checkbox",H.addEventListener("change",()=>e.setSceneSetting(Rt,H.checked)),X.append(H,Tt),c.append(X),{key:Rt,input:H}});function x(Rt,Tt){let X=i.createElement("label");return X.textContent=Rt,X.append(Tt),d.append(X),Tt.addEventListener("change",r),Tt}function M(Rt,Tt,X){let H=i.createElement("select");return H.replaceChildren(...Tt.map(([$,rt])=>new t.Option(rt,$))),H.value=X,x(Rt,H)}function v(Rt,Tt,X,H,$){let rt=i.createElement("input");return Object.assign(rt,{type:"number",min:Tt,max:X,step:H,value:$}),x(Rt,rt)}let b=M("Weather",ig.map(({id:Rt,label:Tt})=>[Rt,Tt]),"sunny"),S=M("Time of day",[["dawn","Dawn"],["sunrise","Sunrise"],["morning","Morning"],["day","Day"],["sunset","Sunset"],["dusk","Dusk"],["night","Evening"],["overnight","Overnight"]],"day"),A=M("Moon phase",sg.map(Rt=>[Rt,DE(Rt)]),"full_moon"),_=v("Wind speed (m/s)",0,30,1,4),C=v("Wind from (degrees)",0,360,1,270),D,I,U=!1,k=!1,O=!1,Y,W=!1,Z=()=>{o.open||o.showModal()},ct=()=>e.setSceneSetting("dockAlignment",l.value),nt=()=>{d.hidden=u.value!=="custom",Ct(),r()};a.addEventListener("click",Z),l.addEventListener("change",ct),u.addEventListener("change",nt),h.addEventListener("change",r);function it(){return u.value!=="custom"}function et(){let Rt=k?it()?W?"Live appearance from Home Assistant.":D||e.getPreview?.()?.environment?"Showing the last available dashboard appearance.":"Connect to Home Assistant to match the dashboard appearance.":"Preview changes stay in this Studio tab.":"Choose a 3D view to see the preview.";f.textContent!==Rt&&(f.textContent=Rt)}async function Pt(){if(!k||!it()||!s||U||O)return;U=!0;let Rt=!1;try{let Tt=await s.request("LOOK_GET");if(O)return;if(Rt=W!==!!Tt?.environment,W=!!Tt?.environment,W){let X=JSON.stringify(Tt);X!==I&&(D=Tt,I=X,Rt=!0)}}catch{Rt=W,W=!1}finally{U=!1,!O&&k&&it()&&Rt&&r()}}function Ct(){k&&it()&&s&&!i.hidden?Y===void 0&&(Y=t.setInterval(Pt,NE),Pt()):Y!==void 0&&(t.clearInterval(Y),Y=void 0)}return i.addEventListener("visibilitychange",Ct),{open:Z,motionEnabled:()=>h.checked,sync(Rt,Tt,X=!1){k=Rt,Ct();for(let{key:mt,input:pt}of m)pt.checked=mi(Tt,mt);l.value=Bp(Tt),et();let H=D??e.getPreview?.(),$=it()?H?.environment??Cf:UE({condition:b.value,daylight:S.value,moonPhase:A.value,windSpeed:Math.min(30,Math.max(0,_.valueAsNumber||0)),windBearing:Math.min(360,Math.max(0,C.valueAsNumber||0))}),rt={...$,traffic:{...$.traffic??Cf.traffic,vehicleStyle:W0(t)}};return p.hidden=!k||!mi(Tt,"sky"),p.hidden||fg(p,{...Nl(rt,Tt),reduceMotion:X}),{states:H?.states??{},environment:rt}},dispose(){O=!0,k=!1,Ct(),i.removeEventListener("visibilitychange",Ct),a.removeEventListener("click",Z),l.removeEventListener("change",ct),u.removeEventListener("change",nt),h.removeEventListener("change",r),o.close();for(let{input:Rt}of m)Rt.parentElement.remove();d.replaceChildren(),p.remove(),g.remove()}}}var FE={radar:[32,12],plan:[20,8]};function If(i){return i.reduce((e,n)=>[e[0]+n.x,e[1]+n.y],[0,0]).map(e=>e/i.length)}function OE(i,[t,e]){let[n,s]=If(i),r=0,o=0,a=0;for(let{x:h,y:f}of i){let d=h-n,g=f-s;r+=d*d,o+=g*g,a+=d*g}let c=Math.hypot(r-o,2*a),l=Math.sqrt((r+o+c)/(2*i.length)),u=Math.sqrt(Math.max(0,(r+o-c)/(2*i.length)));return l>=t&&u>=e&&u>=l*.1}function _g([i,t,e,n,s,r],{radar:o,plan:a}){return Math.hypot(i*o.x+t*o.y+e-a.x,n*o.x+s*o.y+r-a.y)}function gg(i,t){let e=t?-1:1,[n,s]=If(i.map(({radar:p})=>p)),[r,o]=If(i.map(({plan:p})=>p)),a=0,c=0,l=0;for(let{radar:p,plan:m}of i){let x=e*(p.x-n),M=p.y-s,v=m.x-r,b=m.y-o;a+=v*x+b*M,c+=b*x-v*M,l+=x*x+M*M}let u=a/l,h=c/l,f=r-e*u*n+h*s,d=o-e*h*n-u*s,g=[e*u,-h,f,e*h,u,d],y=i.map(p=>_g(g,p));return{transform:g,errors:y,flipped:t,scale:Math.hypot(u,h),squared:y.reduce((p,m)=>p+m*m,0)}}function yg(i){let t=gg(i,!1),e=gg(i,!0);return e.squared<t.squared?e:t}function BE({radar:i,plan:t}={}){return[i?.x,i?.y,t?.x,t?.y].every(Number.isFinite)&&Math.abs(i.x)<=600&&Math.abs(i.y)<=600&&t.x>=0&&t.x<=1536&&t.y>=0&&t.y<=1024}function xg(i){return Object.entries(FE).every(([t,e])=>OE(i.map(n=>n[t]),e))}function vg(i){if(!Array.isArray(i)||i.length<3||i.length>12||!i.every(l=>l&&BE(l)))return{error:"Use 3\u201312 valid pairs of radar centimetres and plan coordinates."};if(!xg(i))return{error:"Choose survey points spread across the area, including one well off the line between the others."};let t=yg(i),e=t.scale*100;if(e<8||e>600)return{error:"The fitted scale is outside the supported range. Check the radar units and matched plan points."};let n;if(i.length>3){n=0;for(let[l,u]of i.entries()){let h=i.filter((d,g)=>l!==g);if(!xg(h))return{error:"Spread the survey points so that three or more still cover the area when any one point is removed."};let f=yg(h);if(f.scale*100<8||f.scale*100>600)return{error:"The fitted scale changes too much when a point is withheld. Check which radar report matches each point."};n=Math.max(n,_g(f.transform,u)/f.scale)}}let{transform:s,errors:r,flipped:o,scale:a,squared:c}=t;return{transform:s,pixelsPerMetre:e,flipped:o,origin:{x:s[2],y:s[5]},rmsCm:Math.sqrt(c/i.length)/a,maxErrorCm:Math.max(...r)/a,...n===void 0?{}:{validationCm:n}}}var kE=3,zE=11,HE=12,bg=/^sensor\.[a-z0-9_]+$/,Mg=i=>i.slice().sort((t,e)=>t-e)[Math.floor(i.length/2)];async function GE(i,t,e=Date.now,n=()=>!0){let s=e(),r=[],o=new Set,a;for(let c=0;c<zE&&n();c++){if(c&&await t(700),!n())return{error:"Capture canceled."};let l=await i(),{observed_at:u,tracks:h}=l?.attributes??{};if(!Number.isFinite(u)||u<s-500||u>e()+1e3||o.has(u))continue;if(o.add(u),h?.length>1)return{error:"More than one radar target was detected. Clear the room and try again."};if(l.state!=="1"||h?.length!==1)continue;let{id:f,x:d,y:g}=h[0];if(![d,g].every(p=>Number.isFinite(p)&&Math.abs(p)<=800))continue;if(a!==void 0&&f!==a)return{error:"The radar switched targets. Stay still and try again."};if(a=f,r.push({x:d,y:g}),r.length<kE)continue;let y={x:Mg(r.map(p=>p.x)),y:Mg(r.map(p=>p.y))};return r.some(p=>Math.hypot(p.x-y.x,p.y-y.y)>40)?{error:"These readings moved too far apart. Hold still on the marked spot and try again."}:{point:y}}return{error:"Too few fresh position reports. Check the radar reporting state and try a spot closer to the switch."}}function VE(i,t,e,n,s,r){let o=i.getContext("2d");if(!o||!t)return;o.fillStyle="#e8eddf",o.fillRect(0,0,i.width,i.height);for(let c of t.rooms)o.beginPath(),c.points.forEach(({x:l,y:u},h)=>h?o.lineTo(l,u):o.moveTo(l,u)),o.closePath(),o.fillStyle=c.outdoor||c.surface==="patio"?"#d8dfca":"#f6e7cc",o.strokeStyle="#c9b496",o.lineWidth=4,o.fill(),o.stroke();for(let c of t.items)/sofa|sectional|diningTable|desk|counter|worktop|bed/i.test(c.type)&&(o.save(),o.translate(c.x,c.y),o.rotate(c.rotation*Math.PI/180),o.fillStyle="#c8b095",o.fillRect(-c.w/2,-c.h/2,c.w,c.h),o.restore());o.lineWidth=9,o.strokeStyle="#4f6159";for(let c of t.walls)o.beginPath(),o.moveTo(c.x1,c.y1),o.lineTo(c.x2,c.y2),o.stroke();o.textAlign="center",o.font="bold 25px sans-serif",o.fillStyle="#40473a";for(let c of t.rooms)c.label&&o.fillText(c.name,c.label.x,c.label.y,250);let a=(c,l,u)=>{c&&(o.beginPath(),o.arc(c.x,c.y,19,0,2*Math.PI),o.fillStyle=l,o.fill(),o.fillStyle="#fff",o.fillText(u,c.x,c.y+8))};a(e,"#714985","R"),s.forEach(({plan:c,radar:l},u)=>{if(r?.transform){let[h,f,d,g,y,p]=r.transform,m=h*l.x+f*l.y+d,x=g*l.x+y*l.y+p;o.strokeStyle="#ae5339",o.lineWidth=5,o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(m,x),o.stroke(),o.beginPath(),o.arc(m,x,9,0,2*Math.PI),o.stroke()}a(c,"#376555",String(u+1))}),a(n,"#855f2f","+")}function Sg(i,t,{api:e,bridge:n}){let s=i.getElementById("radarCalibrationDialog");if(!s)return null;let r=i.getElementById("radarCalibrationPlan"),o=I=>s.querySelector(`[data-survey="${I}"]`),a=o("x"),c=o("y"),l=o("distance"),u=o("status"),h=o("quality"),f=o("points"),d=o("capture"),g=o("undo"),y=o("apply"),p=I=>new Promise(U=>t.setTimeout(U,I)),m,x,M,v,b=[],S=0,A=!1;function _(){v=b.length>=3?vg(b):void 0,d.disabled=A||!M||!n?.request||!bg.test(x?.presenceTrackEntityId??"")||b.length>=HE,g.disabled=A||!b.length,y.disabled=A||!v?.transform;let I=b.map(({plan:k},O)=>{let Y=i.createElement("li");return Y.textContent=`Point ${O+1} \xB7 ${k.x}, ${k.y}`,Y});f.replaceChildren(...I);let U=v?.error??"";if(v?.transform){let{pixelsPerMetre:k,rmsCm:O,maxErrorCm:Y,validationCm:W,origin:Z}=v;U=`${k.toFixed(1)} plan px/m \xB7 ${Math.round(O)} cm fit error \xB7 ${Math.round(Y)} cm worst point.`,Number.isFinite(W)?U+=` Independent check ${Math.round(W)} cm.`:U+=" Add a fourth point to check the result.";let ct=Math.hypot(Z.x-x.x,Z.y-x.y)*100/k;if(ct>40&&(U+=` Fitted sensor origin is ${Math.round(ct)} cm from its map marker.`),l.valueAsNumber>0){let[nt,it]=b,et=Math.hypot(nt.plan.x-it.plan.x,nt.plan.y-it.plan.y)/l.valueAsNumber;U+=` Tape measure gives ${et.toFixed(1)} plan px/m between points 1 and 2.`}}h.textContent=U,VE(r,m,x,M,b,v)}function C(){let I=a.valueAsNumber,U=c.valueAsNumber;M=Number.isFinite(I)&&Number.isFinite(U)&&I>=0&&I<=r.width&&U>=0&&U<=r.height?{x:Math.round(I),y:Math.round(U)}:void 0,_()}function D(I){if(!I.target.closest?.("[data-radar-calibration]"))return;let U=e.getSelection();m=e.getProject(),x=U?.kind==="item"?m.items.find(k=>k.id===U.id&&k.type==="presenceSwitch"):null,x&&(S++,b=[],M=void 0,A=!1,a.value=c.value=l.value="",u.textContent=n?.request?bg.test(x.presenceTrackEntityId??"")?"Choose a location to begin.":"Link a radar targets entity first.":"Open Studio from Home Assistant to capture live radar points.",s.showModal(),_())}return i.addEventListener("click",D),r.addEventListener("click",I=>{if(A)return;let U=r.getBoundingClientRect();a.value=Math.round((I.clientX-U.left)*r.width/U.width),c.value=Math.round((I.clientY-U.top)*r.height/U.height),C()}),a.addEventListener("input",C),c.addEventListener("input",C),l.addEventListener("input",_),d.addEventListener("click",async()=>{if(d.disabled)return;A=!0;let I=S,U=x.presenceTrackEntityId,k=M;u.textContent="Waiting for three fresh reports. Hold still on the chosen point.",_();let O;try{O=await GE(async()=>(await n.request("TRACK_GET",[U]))?.[U],p,Date.now,()=>I===S&&s.open)}catch{O={error:"Home Assistant could not read the radar. Check the connection and retry."}}I!==S||!s.open||(A=!1,O.point&&(b.push({plan:k,radar:O.point}),a.value=c.value="",M=void 0),u.textContent=O.error??`Captured point ${b.length}. Choose another location.`,_())}),g.addEventListener("click",()=>{b.pop(),_()}),y.addEventListener("click",()=>{v?.transform&&(e.setRadarCalibration(x.id,x.presenceTrackEntityId,v.transform)?s.close():u.textContent="The radar source changed. Reopen calibration for the current sensor.")}),s.addEventListener("close",()=>{S++}),{dispose(){S++,i.removeEventListener("click",D),s.open&&s.close()}}}var WE=22,XE=5,YE=1e3/12,qE=1e3,ZE=12;function $E(i,t,e){let n=X0(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let h=a/2;h<=e-a/2;h+=a+4)c.push({...r,x:u,y:h,w:o,h:a});c.sort((u,h)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(h.x-r.x,h.y-r.y));let l=c.find(u=>n.every(h=>Math.abs(u.x-h.x)>=(u.w+h.w)/2+2||Math.abs(u.y-h.y)>=(u.h+h.h)/2+2));l&&n.push(l)}return n}function jE(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function JE(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),h=u<=WE;return!h&&(a.type==="garageDoor"||!jE(a,e))?[]:[{item:a,index:c,distance:u,near:h,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function KE(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;pm(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),h=i.getElementById("sceneDefaultStatus"),f=xm(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,y=Sg(i,t,{api:e,bridge:g}),p=mg(i,t,{api:e,viewport:s,bridge:g,onChange:()=>{Vt(O?.item&&O.position?{[O.item.id]:{position:O.position}}:void 0)}}),m=i.createElement("div");m.className="scene-selection",m.setAttribute("aria-hidden","true"),Object.assign(m.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(m);let x=i.createElement("div");x.className="scene-placeholders",Object.assign(x.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(x);let M=i.createElementNS("http://www.w3.org/2000/svg","svg");M.classList.add("scene-placeholder-leaders"),M.setAttribute("aria-hidden","true"),Object.assign(M.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(M,x);let v=new Map,b=i.getElementById("miniHelp"),S=b?.textContent,A=n.getAttribute("aria-label")??"Editable three-dimensional home view",_,C,D,I=qh(null),U=r.value,k="default",O,Y,W,Z=-1/0,ct=0,nt,it=!1,et=!1,Pt=null,Ct=!1,Rt=[],Tt=[],X="",H=0,$,rt=!1,mt={},pt={key:"",scene:null,reduceMotion:!1},bt={id:null,scene:null},Mt=()=>U!=="plan",lt=()=>U==="free",_t=()=>d?.matches===!0||!p.motionEnabled(),vt=()=>n.getBoundingClientRect(),St=Lt=>{let Ht=vt();return{x:Lt.clientX-Ht.left,y:Lt.clientY-Ht.top}};function Nt(Lt){e.showStatus?.(Lt)}function Ot(){if(!(!it&&(_?.hasAmbientMotion||_?.hasPeopleMotion)&&Mt()&&!i.hidden&&!_t())){t.cancelAnimationFrame(W),W=void 0;return}W===void 0&&(W=t.requestAnimationFrame(Ht=>{if(W=void 0,Ht-Z>=YE-1){Z=Ht,ct=Ht/1e3;try{nt&&_.render(ct,...nt)}catch{w()}}Ot()}))}function Bt(Lt=!0){let Ht=Mt()?_:null,ie=_t(),ue=$t()?tg(Rt,mt):[],be=JSON.stringify(ue);be===pt.key&&Ht===pt.scene&&ie===pt.reduceMotion||(pt={key:be,scene:Ht,reduceMotion:ie},Ht&&(Ht.setPeople(ue,(t.performance?.now()??0)/1e3,{reduceMotion:ie}),Lt&&Vt()),e.setPersonPreview?.(Ht?[]:ue))}function $t(){return!!(g?.request&&Tt.length&&!it&&!i.hidden)}async function Gt(Lt=!0){if(Lt&&Bt(),rt||!$t())return;rt=!0;let Ht=H;try{let ie=await g.request("TRACK_GET",Tt);Ht===H&&$t()&&(mt=ie&&typeof ie=="object"?ie:{},Bt())}catch{Ht===H&&(mt={},Bt())}finally{rt=!1}}function j(){$t()?$===void 0&&($=t.setInterval(Gt,qE),Gt(!1)):$!==void 0&&(t.clearInterval($),$=void 0,H++,mt={})}function oe(Lt){Rt=Lt.filter(ue=>ue.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ue.presenceTrackEntityId)&&Array.isArray(ue.presenceTrackTransform));let Ht=[...new Set(Rt.map(ue=>ue.presenceTrackEntityId))].slice(0,ZE),ie=Ht.join(",");ie!==X&&(X=ie,Tt=Ht,H++,mt={}),j()}function Vt(Lt){if(Ot(),!_||!Mt())return;let{width:Ht,height:ie}=vt();if(!Ht||!ie)return;_.resize(Ht,ie);let ue=e.getSelection(),be=ue?.kind==="item"?ue.id:null;if(bt.scene!==_||bt.id!==be){let Je=C.items.find(sn=>sn.id===be);_.setDetectionZones(Je?Q0([Je]):[]),bt={id:be,scene:_}}let Se=_t(),nn=p.sync(!0,C.sceneSettings,Se),vn=Object.create(null);for(let Je of C.items){let sn=nn.states[Je.id];sn&&sn.entityId===Je.entityId&&(vn[Je.id]=sn)}if(nt=[vn,{...nn.environment,reduceMotion:Se},{showTelemetryPosition:!1,draftPositions:Lt}],_.render(ct,...nt),lt())return;let bn=[];for(let[Je,sn]of v){let On=_.anchor(Je);if(sn.hidden=!On,On){let P=C.items.find(yt=>yt.id===Je),K=P?.type==="cameraThumbnail"?ym(P,Ht):{w:96,h:44};bn.push({id:Je,marker:sn,x:On.x*Ht,y:On.y*ie,...K})}}let je=$E(bn,Ht,ie),As=new Set(je.map(Je=>Je.id)),ji=[];for(let Je of je){let{marker:sn,x:On,y:P,w:K,h:yt,id:dt}=Je;Object.assign(sn.style,{left:`${On}px`,top:`${P}px`,width:`${K}px`,height:`${yt}px`});let ft=bn.find(zt=>zt.id===dt);if(Math.hypot(ft.x-On,ft.y-P)>8){let zt=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[qt,Wt]of Object.entries({x1:ft.x,y1:ft.y,x2:On,y2:P}))zt.setAttribute(qt,Wt);zt.setAttribute("stroke","#6f816b"),zt.setAttribute("stroke-width","1"),zt.setAttribute("stroke-dasharray","3 3"),ji.push(zt)}}for(let[Je,sn]of v)sn.hidden=!As.has(Je);M.replaceChildren(...ji);let Fi=ue?.kind==="item"?_.anchor(ue.id):null;m.style.display=Fi?"block":"none",Fi&&(m.style.left=`${Fi.x*Ht}px`,m.style.top=`${Fi.y*ie}px`)}function B(){if(!O)return;let Lt=O;O=void 0;try{n.releasePointerCapture(Lt.pointerId)}catch{}Lt.item&&Vt({[Lt.item.id]:{position:{x:Lt.item.x,y:Lt.item.y}}})}function T(){a&&(a.hidden=!Mt());for(let Lt of Object.values(o))Lt&&(Lt.disabled=!Mt());l&&(l.hidden=!_||!lt(),l.disabled=Ct),u&&(u.hidden=!_||!Mt()||!Pt,u.disabled=Ct)}function tt(Lt){h&&(h.textContent=Lt)}function ut(){et=!0,tt("")}function gt(){n.tabIndex=lt()?0:-1,n.style.cursor=lt()?"grab":"",n.setAttribute("aria-label",lt()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":A)}function z(Lt,{initial:Ht=!1}={}){Ht||(ut(),Lt==="default"&&(et=!1)),at.cancel(),B();let ie=_?.getView()??I,ue=Object.hasOwn(Yr,Lt)?Lt:"plan";ue!=="plan"&&e.useSelectTool?.(),U=ue,Mt()&&!lt()&&(k=U),r.value=U,n.hidden=!Mt(),gt();let be=Mt()&&!lt();if(x.style.display=be?"block":"none",M.style.display=be?"block":"none",be||(m.style.display="none"),b&&(lt()?b.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":b.textContent=Mt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":S),s.classList.toggle("scene-3d",Mt()),T(),!Mt()){E(),Ot(),p.sync(!1,e.getProject().sceneSettings),Nt("Plan view \xB7 edit rooms, walls, floors and objects");return}let Se=U==="default"?qh(Pt):lt()?mm(ie):{preset:U};I=_?_.setView(Se):Se,E(),_&&Nt(lt()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function w(){at.cancel(),_?.dispose(),_=void 0,D=void 0,U="plan",Ot(),r.value=U,n.hidden=!0,p.sync(!1,e.getProject().sceneSettings),gt(),x.style.display="none",M.style.display="none",b&&(b.textContent=S),s.classList.remove("scene-3d"),m.style.display="none",T(),Bt(!1),Nt("3D view is unavailable on this screen. Plan view is ready.")}function E(){if(it)return;let Lt=e.getProject();if(oe(Lt.items),!Mt()){p.sync(!1,Lt.sceneSettings),Bt();return}let Ht=JSON.stringify(Lt);try{if(!_||Ht!==D){B(),_&&(I=_.getView()),_?.dispose(),_=void 0,C=Lt,_=H0(n,C),_.setView(I),D=Ht,v.clear(),x.replaceChildren();for(let ie of C.items.filter(ue=>ue.type==="cameraThumbnail"||ue.type.startsWith("ui"))){let ue=i.createElement("button");ue.type="button",ue.className="scene-placeholder",ue.textContent=ie.name||(ie.type==="cameraThumbnail"?"Camera":"Interface"),ue.setAttribute("aria-label",`Select ${ue.textContent}`),Object.assign(ue.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ue.addEventListener("pointerdown",be=>ot(be,ie.id)),ue.addEventListener("click",be=>{!lt()&&be.detail===0&&(e.selectItem(ie.id),Vt())}),v.set(ie.id,ue),x.append(ue)}}T(),Bt(!1),Vt()}catch{w()}}function R(Lt){!_||!Mt()||(ut(),B(),_.setView(Lt(_.getView())),I=_.getView(),Vt())}let F=()=>E(),L=()=>{let Lt=e.getTool();Mt()&&Lt!=="select"?z("plan"):lt()&&e.hasPlacement()?z(k):Mt()&&Vt()},V=()=>z(r.value),q=()=>{t.cancelAnimationFrame(Y),Y=t.requestAnimationFrame(()=>Vt())},at=V0(n,{getView:()=>lt()?_?.getView():null,onChange:Lt=>{!_||!lt()||(ut(),I=_.setView(Lt),q())}}),ot=(Lt,Ht=null)=>{if(!Mt()||lt()||!_||Lt.button!==0||O)return;Lt.preventDefault(),Lt.stopPropagation();let ie=St(Lt);if(e.hasPlacement()){let je=_.projectToPlan(ie.x,ie.y,e.getPlacementType(),{preferTabletop:!0});je&&e.placeAt(je.x,je.y),E();return}let{width:ue,height:be}=vt(),Se=new Map(C.items.map(je=>[je.id,_.anchor(je.id)])),nn=Ht??_.pickGarage(ie.x,ie.y),vn=nn?C.items.find(je=>je.id===nn):JE(C.items,ie,_.projectToPlan(ie.x,ie.y),Se,ue,be);if(e.selectItem(vn?.id??null),!vn){Vt();return}let bn=_.projectToPlan(ie.x,ie.y,vn.type);bn&&(O={item:{...vn},startScreen:ie,startPlan:bn,pointerId:Lt.pointerId},n.setPointerCapture(Lt.pointerId),Vt())},At=Lt=>{if(!Mt()||lt()||(Lt.stopPropagation(),!O||O.pointerId!==Lt.pointerId||!_))return;let Ht=St(Lt);if(!O.moved&&Math.hypot(Ht.x-O.startScreen.x,Ht.y-O.startScreen.y)<XE)return;let ie=_.projectToPlan(Ht.x,Ht.y,O.item.type);if(!ie)return;O.moved=!0;let ue={x:O.item.x+ie.x-O.startPlan.x,y:O.item.y+ie.y-O.startPlan.y},be=e.moveItemWarning?.(O.item.id,ue.x,ue.y);if(be){be!==O.warning&&Nt(be),O.warning=be;return}O.warning&&Nt(`Moving ${O.item.name||"object"}`),O.warning=void 0,O.position=ue,Vt({[O.item.id]:{position:O.position}})},N=Lt=>{if(!Mt()||lt()||(Lt.stopPropagation(),!O||O.pointerId!==Lt.pointerId))return;let Ht=O;O=void 0;try{n.releasePointerCapture(Lt.pointerId)}catch{}Ht.moved&&Ht.position?(e.moveItem(Ht.item.id,Ht.position.x,Ht.position.y),E()):Vt()},st=Lt=>{lt()||(O?.pointerId===Lt.pointerId&&B(),Lt.stopPropagation())},J=Lt=>{!Mt()||lt()||(Lt.preventDefault(),Lt.stopPropagation(),R(Ht=>({...Ht,zoom:Ht.zoom*(Lt.deltaY<0?1.1:1/1.1)})))},wt=Lt=>{lt()&&Lt.target===n&&(Lt.key==="Delete"||Lt.key==="Backspace")&&(Lt.preventDefault(),Lt.stopImmediatePropagation()),Lt.key==="Escape"&&O&&(Lt.preventDefault(),Lt.stopImmediatePropagation(),B())},Et=Lt=>{Lt.preventDefault(),w()},xt=()=>R(Lt=>({...Lt,azimuth:Lt.azimuth-15})),Ft=()=>R(Lt=>({...Lt,azimuth:Lt.azimuth+15})),ht=()=>R(Lt=>({...Lt,zoom:Lt.zoom/1.2})),It=()=>R(Lt=>({...Lt,zoom:Lt.zoom*1.2})),Ut=()=>z("top"),Yt=()=>{Bt(!1),Vt()},te=()=>{j(),Bt(),Ot()};i.addEventListener("visibilitychange",te),d?.addEventListener("change",Yt);async function fe(){Ct=!0,T();try{Pt=await f.read(),!it&&!et&&z("default",{initial:!0})}catch{it||tt("Saved view unavailable")}finally{Ct=!1,it||T()}}async function me(Lt){if(!(!_||!Mt()||Ct)){Ct=!0,tt("Saving view\u2026"),T();try{if(await f.write(Lt),it)return;Pt=Lt,Lt||z("default"),tt(Lt?"Default view saved":"Top down is the default")}catch{it||tt("Could not save default view")}finally{Ct=!1,it||T()}}}let Ue=()=>{lt()&&_&&me(_.getView())},Ve=()=>me(null);o.left?.addEventListener("click",xt),o.right?.addEventListener("click",Ft),o.out?.addEventListener("click",ht),o.in?.addEventListener("click",It),c?.addEventListener("click",Ut),l?.addEventListener("click",Ue),u?.addEventListener("click",Ve),r.addEventListener("change",V),n.addEventListener("pointerdown",ot),n.addEventListener("pointermove",At),n.addEventListener("pointerup",N),n.addEventListener("pointercancel",st),n.addEventListener("lostpointercapture",st),n.addEventListener("wheel",J,{passive:!1}),n.addEventListener("webglcontextlost",Et),t.addEventListener("keydown",wt,!0),t.addEventListener("roomcraft-editor-change",F),t.addEventListener("roomcraft-editor-tool",L);let Ze=new t.ResizeObserver(q);Ze.observe(s),z(U,{initial:!0});try{(t.location.hash==="#scene-settings"||g&&t.parent.location.hash==="#scene-settings")&&p.open()}catch{}return fe(),{getView:()=>_?.getView()??{...I},setView:z,dispose(){it=!0,Ot(),j(),i.removeEventListener("visibilitychange",te),d?.removeEventListener("change",Yt),B(),at.dispose(),U="plan",gt(),Ze.disconnect(),t.cancelAnimationFrame(Y),_?.dispose(),_=void 0,m.remove(),x.remove(),M.remove(),p.dispose(),y?.dispose(),b&&(b.textContent=S),o.left?.removeEventListener("click",xt),o.right?.removeEventListener("click",Ft),o.out?.removeEventListener("click",ht),o.in?.removeEventListener("click",It),c?.removeEventListener("click",Ut),l?.removeEventListener("click",Ue),u?.removeEventListener("click",Ve),r.removeEventListener("change",V),n.removeEventListener("pointerdown",ot),n.removeEventListener("pointermove",At),n.removeEventListener("pointerup",N),n.removeEventListener("pointercancel",st),n.removeEventListener("lostpointercapture",st),n.removeEventListener("wheel",J),n.removeEventListener("webglcontextlost",Et),t.removeEventListener("keydown",wt,!0),t.removeEventListener("roomcraft-editor-change",F),t.removeEventListener("roomcraft-editor-tool",L)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=Mf,KE(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
