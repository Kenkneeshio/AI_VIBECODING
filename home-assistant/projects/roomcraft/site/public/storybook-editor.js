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
"use strict";(()=>{var ly=Object.create;var Jf=Object.defineProperty;var uy=Object.getOwnPropertyDescriptor;var hy=Object.getOwnPropertyNames;var fy=Object.getPrototypeOf,dy=Object.prototype.hasOwnProperty;var py=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var my=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of hy(t))!dy.call(n,s)&&s!==e&&Jf(n,s,{get:()=>t[s],enumerable:!(i=uy(t,s))||i.enumerable});return n};var lo=(n,t,e)=>(e=n!=null?ly(fy(n)):{},my(t||!n||!n.__esModule?Jf(e,"default",{value:n,enumerable:!0}):e,n));var $r=py((Kh,Jh)=>{(function(n,t){typeof Kh=="object"&&typeof Jh<"u"?Jh.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis<"u"?globalThis:n||self,n.polygonClipping=t())})(Kh,(function(){"use strict";/**
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
    ***************************************************************************** */function n(V,w){var E={label:0,sent:function(){if(U[0]&1)throw U[1];return U[1]},trys:[],ops:[]},R,F,U,Q;return Q={next:$(0),throw:$(1),return:$(2)},typeof Symbol=="function"&&(Q[Symbol.iterator]=function(){return this}),Q;function $(lt){return function(Rt){return ut([lt,Rt])}}function ut(lt){if(R)throw new TypeError("Generator is already executing.");for(;E;)try{if(R=1,F&&(U=lt[0]&2?F.return:lt[0]?F.throw||((U=F.return)&&U.call(F),0):F.next)&&!(U=U.call(F,lt[1])).done)return U;switch(F=0,U&&(lt=[lt[0]&2,U.value]),lt[0]){case 0:case 1:U=lt;break;case 4:return E.label++,{value:lt[1],done:!1};case 5:E.label++,F=lt[1],lt=[0];continue;case 7:lt=E.ops.pop(),E.trys.pop();continue;default:if(U=E.trys,!(U=U.length>0&&U[U.length-1])&&(lt[0]===6||lt[0]===2)){E=0;continue}if(lt[0]===3&&(!U||lt[1]>U[0]&&lt[1]<U[3])){E.label=lt[1];break}if(lt[0]===6&&E.label<U[1]){E.label=U[1],U=lt;break}if(U&&E.label<U[2]){E.label=U[2],E.ops.push(lt);break}U[2]&&E.ops.pop(),E.trys.pop();continue}lt=w.call(V,E)}catch(Rt){lt=[6,Rt],F=0}finally{R=U=0}if(lt[0]&5)throw lt[1];return{value:lt[0]?lt[1]:void 0,done:!0}}}var t=(function(){function V(w,E){this.next=null,this.key=w,this.data=E,this.left=null,this.right=null}return V})();function e(V,w){return V>w?1:V<w?-1:0}function i(V,w,E){for(var R=new t(null,null),F=R,U=R;;){var Q=E(V,w.key);if(Q<0){if(w.left===null)break;if(E(V,w.left.key)<0){var $=w.left;if(w.left=$.right,$.right=w,w=$,w.left===null)break}U.left=w,U=w,w=w.left}else if(Q>0){if(w.right===null)break;if(E(V,w.right.key)>0){var $=w.right;if(w.right=$.left,$.left=w,w=$,w.right===null)break}F.right=w,F=w,w=w.right}else break}return F.right=w.left,U.left=w.right,w.left=R.right,w.right=R.left,w}function s(V,w,E,R){var F=new t(V,w);if(E===null)return F.left=F.right=null,F;E=i(V,E,R);var U=R(V,E.key);return U<0?(F.left=E.left,F.right=E,E.left=null):U>=0&&(F.right=E.right,F.left=E,E.right=null),F}function r(V,w,E){var R=null,F=null;if(w){w=i(V,w,E);var U=E(w.key,V);U===0?(R=w.left,F=w.right):U<0?(F=w.right,w.right=null,R=w):(R=w.left,w.left=null,F=w)}return{left:R,right:F}}function o(V,w,E){return w===null?V:(V===null||(w=i(V.key,w,E),w.left=V),w)}function a(V,w,E,R,F){if(V){R(""+w+(E?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+F(V)+`
`);var U=w+(E?"    ":"\u2502   ");V.left&&a(V.left,U,!1,R,F),V.right&&a(V.right,U,!0,R,F)}}var c=(function(){function V(w){w===void 0&&(w=e),this._root=null,this._size=0,this._comparator=w}return V.prototype.insert=function(w,E){return this._size++,this._root=s(w,E,this._root,this._comparator)},V.prototype.add=function(w,E){var R=new t(w,E);this._root===null&&(R.left=R.right=null,this._size++,this._root=R);var F=this._comparator,U=i(w,this._root,F),Q=F(w,U.key);return Q===0?this._root=U:(Q<0?(R.left=U.left,R.right=U,U.left=null):Q>0&&(R.right=U.right,R.left=U,U.right=null),this._size++,this._root=R),this._root},V.prototype.remove=function(w){this._root=this._remove(w,this._root,this._comparator)},V.prototype._remove=function(w,E,R){var F;if(E===null)return null;E=i(w,E,R);var U=R(w,E.key);return U===0?(E.left===null?F=E.right:(F=i(w,E.left,R),F.right=E.right),this._size--,F):E},V.prototype.pop=function(){var w=this._root;if(w){for(;w.left;)w=w.left;return this._root=i(w.key,this._root,this._comparator),this._root=this._remove(w.key,this._root,this._comparator),{key:w.key,data:w.data}}return null},V.prototype.findStatic=function(w){for(var E=this._root,R=this._comparator;E;){var F=R(w,E.key);if(F===0)return E;F<0?E=E.left:E=E.right}return null},V.prototype.find=function(w){return this._root&&(this._root=i(w,this._root,this._comparator),this._comparator(w,this._root.key)!==0)?null:this._root},V.prototype.contains=function(w){for(var E=this._root,R=this._comparator;E;){var F=R(w,E.key);if(F===0)return!0;F<0?E=E.left:E=E.right}return!1},V.prototype.forEach=function(w,E){for(var R=this._root,F=[],U=!1;!U;)R!==null?(F.push(R),R=R.left):F.length!==0?(R=F.pop(),w.call(E,R),R=R.right):U=!0;return this},V.prototype.range=function(w,E,R,F){for(var U=[],Q=this._comparator,$=this._root,ut;U.length!==0||$;)if($)U.push($),$=$.left;else{if($=U.pop(),ut=Q($.key,E),ut>0)break;if(Q($.key,w)>=0&&R.call(F,$))return this;$=$.right}return this},V.prototype.keys=function(){var w=[];return this.forEach(function(E){var R=E.key;return w.push(R)}),w},V.prototype.values=function(){var w=[];return this.forEach(function(E){var R=E.data;return w.push(R)}),w},V.prototype.min=function(){return this._root?this.minNode(this._root).key:null},V.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},V.prototype.minNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.left;)w=w.left;return w},V.prototype.maxNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.right;)w=w.right;return w},V.prototype.at=function(w){for(var E=this._root,R=!1,F=0,U=[];!R;)if(E)U.push(E),E=E.left;else if(U.length>0){if(E=U.pop(),F===w)return E;F++,E=E.right}else R=!0;return null},V.prototype.next=function(w){var E=this._root,R=null;if(w.right){for(R=w.right;R.left;)R=R.left;return R}for(var F=this._comparator;E;){var U=F(w.key,E.key);if(U===0)break;U<0?(R=E,E=E.left):E=E.right}return R},V.prototype.prev=function(w){var E=this._root,R=null;if(w.left!==null){for(R=w.left;R.right;)R=R.right;return R}for(var F=this._comparator;E;){var U=F(w.key,E.key);if(U===0)break;U<0?E=E.left:(R=E,E=E.right)}return R},V.prototype.clear=function(){return this._root=null,this._size=0,this},V.prototype.toList=function(){return h(this._root)},V.prototype.load=function(w,E,R){E===void 0&&(E=[]),R===void 0&&(R=!1);var F=w.length,U=this._comparator;if(R&&m(w,E,0,F-1,U),this._root===null)this._root=l(w,E,0,F),this._size=F;else{var Q=d(this.toList(),u(w,E),U);F=this._size+F,this._root=f({head:Q},0,F)}return this},V.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(V.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(V.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),V.prototype.toString=function(w){w===void 0&&(w=function(R){return String(R.key)});var E=[];return a(this._root,"",!0,function(R){return E.push(R)},w),E.join("")},V.prototype.update=function(w,E,R){var F=this._comparator,U=r(w,this._root,F),Q=U.left,$=U.right;F(w,E)<0?$=s(E,R,$,F):Q=s(E,R,Q,F),this._root=o(Q,$,F)},V.prototype.split=function(w){return r(w,this._root,this._comparator)},V.prototype[Symbol.iterator]=function(){var w,E,R;return n(this,function(F){switch(F.label){case 0:w=this._root,E=[],R=!1,F.label=1;case 1:return R?[3,6]:w===null?[3,2]:(E.push(w),w=w.left,[3,5]);case 2:return E.length===0?[3,4]:(w=E.pop(),[4,w]);case 3:return F.sent(),w=w.right,[3,5];case 4:R=!0,F.label=5;case 5:return[3,1];case 6:return[2]}})},V})();function l(V,w,E,R){var F=R-E;if(F>0){var U=E+Math.floor(F/2),Q=V[U],$=w[U],ut=new t(Q,$);return ut.left=l(V,w,E,U),ut.right=l(V,w,U+1,R),ut}return null}function u(V,w){for(var E=new t(null,null),R=E,F=0;F<V.length;F++)R=R.next=new t(V[F],w[F]);return R.next=null,E.next}function h(V){for(var w=V,E=[],R=!1,F=new t(null,null),U=F;!R;)w?(E.push(w),w=w.left):E.length>0?(w=U=U.next=E.pop(),w=w.right):R=!0;return U.next=null,F.next}function f(V,w,E){var R=E-w;if(R>0){var F=w+Math.floor(R/2),U=f(V,w,F),Q=V.head;return Q.left=U,V.head=V.head.next,Q.right=f(V,F+1,E),Q}return null}function d(V,w,E){for(var R=new t(null,null),F=R,U=V,Q=w;U!==null&&Q!==null;)E(U.key,Q.key)<0?(F.next=U,U=U.next):(F.next=Q,Q=Q.next),F=F.next;return U!==null?F.next=U:Q!==null&&(F.next=Q),R.next}function m(V,w,E,R,F){if(!(E>=R)){for(var U=V[E+R>>1],Q=E-1,$=R+1;;){do Q++;while(F(V[Q],U)<0);do $--;while(F(V[$],U)>0);if(Q>=$)break;var ut=V[Q];V[Q]=V[$],V[$]=ut,ut=w[Q],w[Q]=w[$],w[$]=ut}m(V,w,E,$,F),m(V,w,$+1,R,F)}}let y=(V,w)=>V.ll.x<=w.x&&w.x<=V.ur.x&&V.ll.y<=w.y&&w.y<=V.ur.y,p=(V,w)=>{if(w.ur.x<V.ll.x||V.ur.x<w.ll.x||w.ur.y<V.ll.y||V.ur.y<w.ll.y)return null;let E=V.ll.x<w.ll.x?w.ll.x:V.ll.x,R=V.ur.x<w.ur.x?V.ur.x:w.ur.x,F=V.ll.y<w.ll.y?w.ll.y:V.ll.y,U=V.ur.y<w.ur.y?V.ur.y:w.ur.y;return{ll:{x:E,y:F},ur:{x:R,y:U}}},g=Number.EPSILON;g===void 0&&(g=Math.pow(2,-52));let x=g*g,v=(V,w)=>{if(-g<V&&V<g&&-g<w&&w<g)return 0;let E=V-w;return E*E<x*V*w?0:V<w?-1:1};class b{constructor(){this.reset()}reset(){this.xRounder=new _,this.yRounder=new _}round(w,E){return{x:this.xRounder.round(w),y:this.yRounder.round(E)}}}class _{constructor(){this.tree=new c,this.round(0)}round(w){let E=this.tree.add(w),R=this.tree.prev(E);if(R!==null&&v(E.key,R.key)===0)return this.tree.remove(w),R.key;let F=this.tree.next(E);return F!==null&&v(E.key,F.key)===0?(this.tree.remove(w),F.key):w}}let S=new b,C=11102230246251565e-32,M=134217729,A=(3+8*C)*C;function D(V,w,E,R,F){let U,Q,$,ut,lt=w[0],Rt=R[0],I=0,J=0;Rt>lt==Rt>-lt?(U=lt,lt=w[++I]):(U=Rt,Rt=R[++J]);let tt=0;if(I<V&&J<E)for(Rt>lt==Rt>-lt?(Q=lt+U,$=U-(Q-lt),lt=w[++I]):(Q=Rt+U,$=U-(Q-Rt),Rt=R[++J]),U=Q,$!==0&&(F[tt++]=$);I<V&&J<E;)Rt>lt==Rt>-lt?(Q=U+lt,ut=Q-U,$=U-(Q-ut)+(lt-ut),lt=w[++I]):(Q=U+Rt,ut=Q-U,$=U-(Q-ut)+(Rt-ut),Rt=R[++J]),U=Q,$!==0&&(F[tt++]=$);for(;I<V;)Q=U+lt,ut=Q-U,$=U-(Q-ut)+(lt-ut),lt=w[++I],U=Q,$!==0&&(F[tt++]=$);for(;J<E;)Q=U+Rt,ut=Q-U,$=U-(Q-ut)+(Rt-ut),Rt=R[++J],U=Q,$!==0&&(F[tt++]=$);return(U!==0||tt===0)&&(F[tt++]=U),tt}function N(V,w){let E=w[0];for(let R=1;R<V;R++)E+=w[R];return E}function O(V){return new Float64Array(V)}let B=(3+16*C)*C,L=(2+12*C)*C,k=(9+64*C)*C*C,H=O(4),W=O(8),et=O(12),K=O(16),Z=O(4);function nt(V,w,E,R,F,U,Q){let $,ut,lt,Rt,I,J,tt,wt,Et,vt,Ut,kt,le,re,Se,Ee,on,$e,an=V-F,cn=E-F,Pt=w-U,Ht=R-U;re=an*Ht,J=M*an,tt=J-(J-an),wt=an-tt,J=M*Ht,Et=J-(J-Ht),vt=Ht-Et,Se=wt*vt-(re-tt*Et-wt*Et-tt*vt),Ee=Pt*cn,J=M*Pt,tt=J-(J-Pt),wt=Pt-tt,J=M*cn,Et=J-(J-cn),vt=cn-Et,on=wt*vt-(Ee-tt*Et-wt*Et-tt*vt),Ut=Se-on,I=Se-Ut,H[0]=Se-(Ut+I)+(I-on),kt=re+Ut,I=kt-re,le=re-(kt-I)+(Ut-I),Ut=le-Ee,I=le-Ut,H[1]=le-(Ut+I)+(I-Ee),$e=kt+Ut,I=$e-kt,H[2]=kt-($e-I)+(Ut-I),H[3]=$e;let gt=N(4,H),Dt=L*Q;if(gt>=Dt||-gt>=Dt||(I=V-an,$=V-(an+I)+(I-F),I=E-cn,lt=E-(cn+I)+(I-F),I=w-Pt,ut=w-(Pt+I)+(I-U),I=R-Ht,Rt=R-(Ht+I)+(I-U),$===0&&ut===0&&lt===0&&Rt===0)||(Dt=k*Q+A*Math.abs(gt),gt+=an*Rt+Ht*$-(Pt*lt+cn*ut),gt>=Dt||-gt>=Dt))return gt;re=$*Ht,J=M*$,tt=J-(J-$),wt=$-tt,J=M*Ht,Et=J-(J-Ht),vt=Ht-Et,Se=wt*vt-(re-tt*Et-wt*Et-tt*vt),Ee=ut*cn,J=M*ut,tt=J-(J-ut),wt=ut-tt,J=M*cn,Et=J-(J-cn),vt=cn-Et,on=wt*vt-(Ee-tt*Et-wt*Et-tt*vt),Ut=Se-on,I=Se-Ut,Z[0]=Se-(Ut+I)+(I-on),kt=re+Ut,I=kt-re,le=re-(kt-I)+(Ut-I),Ut=le-Ee,I=le-Ut,Z[1]=le-(Ut+I)+(I-Ee),$e=kt+Ut,I=$e-kt,Z[2]=kt-($e-I)+(Ut-I),Z[3]=$e;let Vt=D(4,H,4,Z,W);re=an*Rt,J=M*an,tt=J-(J-an),wt=an-tt,J=M*Rt,Et=J-(J-Rt),vt=Rt-Et,Se=wt*vt-(re-tt*Et-wt*Et-tt*vt),Ee=Pt*lt,J=M*Pt,tt=J-(J-Pt),wt=Pt-tt,J=M*lt,Et=J-(J-lt),vt=lt-Et,on=wt*vt-(Ee-tt*Et-wt*Et-tt*vt),Ut=Se-on,I=Se-Ut,Z[0]=Se-(Ut+I)+(I-on),kt=re+Ut,I=kt-re,le=re-(kt-I)+(Ut-I),Ut=le-Ee,I=le-Ut,Z[1]=le-(Ut+I)+(I-Ee),$e=kt+Ut,I=$e-kt,Z[2]=kt-($e-I)+(Ut-I),Z[3]=$e;let Zt=D(Vt,W,4,Z,et);re=$*Rt,J=M*$,tt=J-(J-$),wt=$-tt,J=M*Rt,Et=J-(J-Rt),vt=Rt-Et,Se=wt*vt-(re-tt*Et-wt*Et-tt*vt),Ee=ut*lt,J=M*ut,tt=J-(J-ut),wt=ut-tt,J=M*lt,Et=J-(J-lt),vt=lt-Et,on=wt*vt-(Ee-tt*Et-wt*Et-tt*vt),Ut=Se-on,I=Se-Ut,Z[0]=Se-(Ut+I)+(I-on),kt=re+Ut,I=kt-re,le=re-(kt-I)+(Ut-I),Ut=le-Ee,I=le-Ut,Z[1]=le-(Ut+I)+(I-Ee),$e=kt+Ut,I=$e-kt,Z[2]=kt-($e-I)+(Ut-I),Z[3]=$e;let fe=D(Zt,et,4,Z,K);return K[fe-1]}function Tt(V,w,E,R,F,U){let Q=(w-U)*(E-F),$=(V-F)*(R-U),ut=Q-$,lt=Math.abs(Q+$);return Math.abs(ut)>=B*lt?ut:-nt(V,w,E,R,F,U,lt)}let At=(V,w)=>V.x*w.y-V.y*w.x,Mt=(V,w)=>V.x*w.x+V.y*w.y,_t=(V,w,E)=>{let R=Tt(V.x,V.y,w.x,w.y,E.x,E.y);return R>0?-1:R<0?1:0},Lt=V=>Math.sqrt(Mt(V,V)),ot=(V,w,E)=>{let R={x:w.x-V.x,y:w.y-V.y},F={x:E.x-V.x,y:E.y-V.y};return At(F,R)/Lt(F)/Lt(R)},ht=(V,w,E)=>{let R={x:w.x-V.x,y:w.y-V.y},F={x:E.x-V.x,y:E.y-V.y};return Mt(F,R)/Lt(F)/Lt(R)},St=(V,w,E)=>w.y===0?null:{x:V.x+w.x/w.y*(E-V.y),y:E},zt=(V,w,E)=>w.x===0?null:{x:E,y:V.y+w.y/w.x*(E-V.x)},Ot=(V,w,E,R)=>{if(w.x===0)return zt(E,R,V.x);if(R.x===0)return zt(V,w,E.x);if(w.y===0)return St(E,R,V.y);if(R.y===0)return St(V,w,E.y);let F=At(w,R);if(F==0)return null;let U={x:E.x-V.x,y:E.y-V.y},Q=At(U,w)/F,$=At(U,R)/F,ut=V.x+$*w.x,lt=E.x+Q*R.x,Rt=V.y+$*w.y,I=E.y+Q*R.y,J=(ut+lt)/2,tt=(Rt+I)/2;return{x:J,y:tt}};class q{static compare(w,E){let R=q.comparePoints(w.point,E.point);return R!==0?R:(w.point!==E.point&&w.link(E),w.isLeft!==E.isLeft?w.isLeft?1:-1:X.compare(w.segment,E.segment))}static comparePoints(w,E){return w.x<E.x?-1:w.x>E.x?1:w.y<E.y?-1:w.y>E.y?1:0}constructor(w,E){w.events===void 0?w.events=[this]:w.events.push(this),this.point=w,this.isLeft=E}link(w){if(w.point===this.point)throw new Error("Tried to link already linked events");let E=w.point.events;for(let R=0,F=E.length;R<F;R++){let U=E[R];this.point.events.push(U),U.point=this.point}this.checkForConsuming()}checkForConsuming(){let w=this.point.events.length;for(let E=0;E<w;E++){let R=this.point.events[E];if(R.segment.consumedBy===void 0)for(let F=E+1;F<w;F++){let U=this.point.events[F];U.consumedBy===void 0&&R.otherSE.point.events===U.otherSE.point.events&&R.segment.consume(U.segment)}}}getAvailableLinkedEvents(){let w=[];for(let E=0,R=this.point.events.length;E<R;E++){let F=this.point.events[E];F!==this&&!F.segment.ringOut&&F.segment.isInResult()&&w.push(F)}return w}getLeftmostComparator(w){let E=new Map,R=F=>{let U=F.otherSE;E.set(F,{sine:ot(this.point,w.point,U.point),cosine:ht(this.point,w.point,U.point)})};return(F,U)=>{E.has(F)||R(F),E.has(U)||R(U);let{sine:Q,cosine:$}=E.get(F),{sine:ut,cosine:lt}=E.get(U);return Q>=0&&ut>=0?$<lt?1:$>lt?-1:0:Q<0&&ut<0?$<lt?-1:$>lt?1:0:ut<Q?-1:ut>Q?1:0}}}let yt=0;class X{static compare(w,E){let R=w.leftSE.point.x,F=E.leftSE.point.x,U=w.rightSE.point.x,Q=E.rightSE.point.x;if(Q<R)return 1;if(U<F)return-1;let $=w.leftSE.point.y,ut=E.leftSE.point.y,lt=w.rightSE.point.y,Rt=E.rightSE.point.y;if(R<F){if(ut<$&&ut<lt)return 1;if(ut>$&&ut>lt)return-1;let I=w.comparePoint(E.leftSE.point);if(I<0)return 1;if(I>0)return-1;let J=E.comparePoint(w.rightSE.point);return J!==0?J:-1}if(R>F){if($<ut&&$<Rt)return-1;if($>ut&&$>Rt)return 1;let I=E.comparePoint(w.leftSE.point);if(I!==0)return I;let J=w.comparePoint(E.rightSE.point);return J<0?1:J>0?-1:1}if($<ut)return-1;if($>ut)return 1;if(U<Q){let I=E.comparePoint(w.rightSE.point);if(I!==0)return I}if(U>Q){let I=w.comparePoint(E.rightSE.point);if(I<0)return 1;if(I>0)return-1}if(U!==Q){let I=lt-$,J=U-R,tt=Rt-ut,wt=Q-F;if(I>J&&tt<wt)return 1;if(I<J&&tt>wt)return-1}return U>Q?1:U<Q||lt<Rt?-1:lt>Rt?1:w.id<E.id?-1:w.id>E.id?1:0}constructor(w,E,R,F){this.id=++yt,this.leftSE=w,w.segment=this,w.otherSE=E,this.rightSE=E,E.segment=this,E.otherSE=w,this.rings=R,this.windings=F}static fromRing(w,E,R){let F,U,Q,$=q.comparePoints(w,E);if($<0)F=w,U=E,Q=1;else if($>0)F=E,U=w,Q=-1;else throw new Error(`Tried to create degenerate segment at [${w.x}, ${w.y}]`);let ut=new q(F,!0),lt=new q(U,!1);return new X(ut,lt,[R],[Q])}replaceRightSE(w){this.rightSE=w,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let w=this.leftSE.point.y,E=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:w<E?w:E},ur:{x:this.rightSE.point.x,y:w>E?w:E}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(w){return w.x===this.leftSE.point.x&&w.y===this.leftSE.point.y||w.x===this.rightSE.point.x&&w.y===this.rightSE.point.y}comparePoint(w){if(this.isAnEndpoint(w))return 0;let E=this.leftSE.point,R=this.rightSE.point,F=this.vector();if(E.x===R.x)return w.x===E.x?0:w.x<E.x?1:-1;let U=(w.y-E.y)/F.y,Q=E.x+U*F.x;if(w.x===Q)return 0;let $=(w.x-E.x)/F.x,ut=E.y+$*F.y;return w.y===ut?0:w.y<ut?-1:1}getIntersection(w){let E=this.bbox(),R=w.bbox(),F=p(E,R);if(F===null)return null;let U=this.leftSE.point,Q=this.rightSE.point,$=w.leftSE.point,ut=w.rightSE.point,lt=y(E,$)&&this.comparePoint($)===0,Rt=y(R,U)&&w.comparePoint(U)===0,I=y(E,ut)&&this.comparePoint(ut)===0,J=y(R,Q)&&w.comparePoint(Q)===0;if(Rt&&lt)return J&&!I?Q:!J&&I?ut:null;if(Rt)return I&&U.x===ut.x&&U.y===ut.y?null:U;if(lt)return J&&Q.x===$.x&&Q.y===$.y?null:$;if(J&&I)return null;if(J)return Q;if(I)return ut;let tt=Ot(U,this.vector(),$,w.vector());return tt===null||!y(F,tt)?null:S.round(tt.x,tt.y)}split(w){let E=[],R=w.events!==void 0,F=new q(w,!0),U=new q(w,!1),Q=this.rightSE;this.replaceRightSE(U),E.push(U),E.push(F);let $=new X(F,Q,this.rings.slice(),this.windings.slice());return q.comparePoints($.leftSE.point,$.rightSE.point)>0&&$.swapEvents(),q.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),R&&(F.checkForConsuming(),U.checkForConsuming()),E}swapEvents(){let w=this.rightSE;this.rightSE=this.leftSE,this.leftSE=w,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let E=0,R=this.windings.length;E<R;E++)this.windings[E]*=-1}consume(w){let E=this,R=w;for(;E.consumedBy;)E=E.consumedBy;for(;R.consumedBy;)R=R.consumedBy;let F=X.compare(E,R);if(F!==0){if(F>0){let U=E;E=R,R=U}if(E.prev===R){let U=E;E=R,R=U}for(let U=0,Q=R.rings.length;U<Q;U++){let $=R.rings[U],ut=R.windings[U],lt=E.rings.indexOf($);lt===-1?(E.rings.push($),E.windings.push(ut)):E.windings[lt]+=ut}R.rings=null,R.windings=null,R.consumedBy=E,R.leftSE.consumedBy=E.leftSE,R.rightSE.consumedBy=E.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let w=this.prev.consumedBy||this.prev;this._beforeState=w.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let w=this.beforeState();this._afterState={rings:w.rings.slice(0),windings:w.windings.slice(0),multiPolys:[]};let E=this._afterState.rings,R=this._afterState.windings,F=this._afterState.multiPolys;for(let $=0,ut=this.rings.length;$<ut;$++){let lt=this.rings[$],Rt=this.windings[$],I=E.indexOf(lt);I===-1?(E.push(lt),R.push(Rt)):R[I]+=Rt}let U=[],Q=[];for(let $=0,ut=E.length;$<ut;$++){if(R[$]===0)continue;let lt=E[$],Rt=lt.poly;if(Q.indexOf(Rt)===-1)if(lt.isExterior)U.push(Rt);else{Q.indexOf(Rt)===-1&&Q.push(Rt);let I=U.indexOf(lt.poly);I!==-1&&U.splice(I,1)}}for(let $=0,ut=U.length;$<ut;$++){let lt=U[$].multiPoly;F.indexOf(lt)===-1&&F.push(lt)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let w=this.beforeState().multiPolys,E=this.afterState().multiPolys;switch(qt.type){case"union":{let R=w.length===0,F=E.length===0;this._isInResult=R!==F;break}case"intersection":{let R,F;w.length<E.length?(R=w.length,F=E.length):(R=E.length,F=w.length),this._isInResult=F===qt.numMultiPolys&&R<F;break}case"xor":{let R=Math.abs(w.length-E.length);this._isInResult=R%2===1;break}case"difference":{let R=F=>F.length===1&&F[0].isSubject;this._isInResult=R(w)!==R(E);break}default:throw new Error(`Unrecognized operation type found ${qt.type}`)}return this._isInResult}}class j{constructor(w,E,R){if(!Array.isArray(w)||w.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=E,this.isExterior=R,this.segments=[],typeof w[0][0]!="number"||typeof w[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let F=S.round(w[0][0],w[0][1]);this.bbox={ll:{x:F.x,y:F.y},ur:{x:F.x,y:F.y}};let U=F;for(let Q=1,$=w.length;Q<$;Q++){if(typeof w[Q][0]!="number"||typeof w[Q][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let ut=S.round(w[Q][0],w[Q][1]);ut.x===U.x&&ut.y===U.y||(this.segments.push(X.fromRing(U,ut,this)),ut.x<this.bbox.ll.x&&(this.bbox.ll.x=ut.x),ut.y<this.bbox.ll.y&&(this.bbox.ll.y=ut.y),ut.x>this.bbox.ur.x&&(this.bbox.ur.x=ut.x),ut.y>this.bbox.ur.y&&(this.bbox.ur.y=ut.y),U=ut)}(F.x!==U.x||F.y!==U.y)&&this.segments.push(X.fromRing(U,F,this))}getSweepEvents(){let w=[];for(let E=0,R=this.segments.length;E<R;E++){let F=this.segments[E];w.push(F.leftSE),w.push(F.rightSE)}return w}}class st{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new j(w[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let R=1,F=w.length;R<F;R++){let U=new j(w[R],this,!1);U.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=U.bbox.ll.x),U.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=U.bbox.ll.y),U.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=U.bbox.ur.x),U.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=U.bbox.ur.y),this.interiorRings.push(U)}this.multiPoly=E}getSweepEvents(){let w=this.exteriorRing.getSweepEvents();for(let E=0,R=this.interiorRings.length;E<R;E++){let F=this.interiorRings[E].getSweepEvents();for(let U=0,Q=F.length;U<Q;U++)w.push(F[U])}return w}}class ct{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof w[0][0][0]=="number"&&(w=[w])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let R=0,F=w.length;R<F;R++){let U=new st(w[R],this);U.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=U.bbox.ll.x),U.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=U.bbox.ll.y),U.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=U.bbox.ur.x),U.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=U.bbox.ur.y),this.polys.push(U)}this.isSubject=E}getSweepEvents(){let w=[];for(let E=0,R=this.polys.length;E<R;E++){let F=this.polys[E].getSweepEvents();for(let U=0,Q=F.length;U<Q;U++)w.push(F[U])}return w}}class dt{static factory(w){let E=[];for(let R=0,F=w.length;R<F;R++){let U=w[R];if(!U.isInResult()||U.ringOut)continue;let Q=null,$=U.leftSE,ut=U.rightSE,lt=[$],Rt=$.point,I=[];for(;Q=$,$=ut,lt.push($),$.point!==Rt;)for(;;){let J=$.getAvailableLinkedEvents();if(J.length===0){let Et=lt[0].point,vt=lt[lt.length-1].point;throw new Error(`Unable to complete output ring starting at [${Et.x}, ${Et.y}]. Last matching segment found ends at [${vt.x}, ${vt.y}].`)}if(J.length===1){ut=J[0].otherSE;break}let tt=null;for(let Et=0,vt=I.length;Et<vt;Et++)if(I[Et].point===$.point){tt=Et;break}if(tt!==null){let Et=I.splice(tt)[0],vt=lt.splice(Et.index);vt.unshift(vt[0].otherSE),E.push(new dt(vt.reverse()));continue}I.push({index:lt.length,point:$.point});let wt=$.getLeftmostComparator(Q);ut=J.sort(wt)[0].otherSE;break}E.push(new dt(lt))}return E}constructor(w){this.events=w;for(let E=0,R=w.length;E<R;E++)w[E].segment.ringOut=this;this.poly=null}getGeom(){let w=this.events[0].point,E=[w];for(let lt=1,Rt=this.events.length-1;lt<Rt;lt++){let I=this.events[lt].point,J=this.events[lt+1].point;_t(I,w,J)!==0&&(E.push(I),w=I)}if(E.length===1)return null;let R=E[0],F=E[1];_t(R,w,F)===0&&E.shift(),E.push(E[0]);let U=this.isExteriorRing()?1:-1,Q=this.isExteriorRing()?0:E.length-1,$=this.isExteriorRing()?E.length:-1,ut=[];for(let lt=Q;lt!=$;lt+=U)ut.push([E[lt].x,E[lt].y]);return ut}isExteriorRing(){if(this._isExteriorRing===void 0){let w=this.enclosingRing();this._isExteriorRing=w?!w.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let w=this.events[0];for(let F=1,U=this.events.length;F<U;F++){let Q=this.events[F];q.compare(w,Q)>0&&(w=Q)}let E=w.segment.prevInResult(),R=E?E.prevInResult():null;for(;;){if(!E)return null;if(!R)return E.ringOut;if(R.ringOut!==E.ringOut)return R.ringOut.enclosingRing()!==E.ringOut?E.ringOut:E.ringOut.enclosingRing();E=R.prevInResult(),R=E?E.prevInResult():null}}}class Ct{constructor(w){this.exteriorRing=w,w.poly=this,this.interiorRings=[]}addInterior(w){this.interiorRings.push(w),w.poly=this}getGeom(){let w=[this.exteriorRing.getGeom()];if(w[0]===null)return null;for(let E=0,R=this.interiorRings.length;E<R;E++){let F=this.interiorRings[E].getGeom();F!==null&&w.push(F)}return w}}class It{constructor(w){this.rings=w,this.polys=this._composePolys(w)}getGeom(){let w=[];for(let E=0,R=this.polys.length;E<R;E++){let F=this.polys[E].getGeom();F!==null&&w.push(F)}return w}_composePolys(w){let E=[];for(let R=0,F=w.length;R<F;R++){let U=w[R];if(!U.poly)if(U.isExteriorRing())E.push(new Ct(U));else{let Q=U.enclosingRing();Q.poly||E.push(new Ct(Q)),Q.poly.addInterior(U)}}return E}}class Nt{constructor(w){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X.compare;this.queue=w,this.tree=new c(E),this.segments=[]}process(w){let E=w.segment,R=[];if(w.consumedBy)return w.isLeft?this.queue.remove(w.otherSE):this.tree.remove(E),R;let F=w.isLeft?this.tree.add(E):this.tree.find(E);if(!F)throw new Error(`Unable to find segment #${E.id} [${E.leftSE.point.x}, ${E.leftSE.point.y}] -> [${E.rightSE.point.x}, ${E.rightSE.point.y}] in SweepLine tree.`);let U=F,Q=F,$,ut;for(;$===void 0;)U=this.tree.prev(U),U===null?$=null:U.key.consumedBy===void 0&&($=U.key);for(;ut===void 0;)Q=this.tree.next(Q),Q===null?ut=null:Q.key.consumedBy===void 0&&(ut=Q.key);if(w.isLeft){let lt=null;if($){let I=$.getIntersection(E);if(I!==null&&(E.isAnEndpoint(I)||(lt=I),!$.isAnEndpoint(I))){let J=this._splitSafely($,I);for(let tt=0,wt=J.length;tt<wt;tt++)R.push(J[tt])}}let Rt=null;if(ut){let I=ut.getIntersection(E);if(I!==null&&(E.isAnEndpoint(I)||(Rt=I),!ut.isAnEndpoint(I))){let J=this._splitSafely(ut,I);for(let tt=0,wt=J.length;tt<wt;tt++)R.push(J[tt])}}if(lt!==null||Rt!==null){let I=null;lt===null?I=Rt:Rt===null?I=lt:I=q.comparePoints(lt,Rt)<=0?lt:Rt,this.queue.remove(E.rightSE),R.push(E.rightSE);let J=E.split(I);for(let tt=0,wt=J.length;tt<wt;tt++)R.push(J[tt])}R.length>0?(this.tree.remove(E),R.push(w)):(this.segments.push(E),E.prev=$)}else{if($&&ut){let lt=$.getIntersection(ut);if(lt!==null){if(!$.isAnEndpoint(lt)){let Rt=this._splitSafely($,lt);for(let I=0,J=Rt.length;I<J;I++)R.push(Rt[I])}if(!ut.isAnEndpoint(lt)){let Rt=this._splitSafely(ut,lt);for(let I=0,J=Rt.length;I<J;I++)R.push(Rt[I])}}}this.tree.remove(E)}return R}_splitSafely(w,E){this.tree.remove(w);let R=w.rightSE;this.queue.remove(R);let F=w.split(E);return F.push(R),w.consumedBy===void 0&&this.tree.add(w),F}}let Bt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,Y=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class ie{run(w,E,R){qt.type=w,S.reset();let F=[new ct(E,!0)];for(let I=0,J=R.length;I<J;I++)F.push(new ct(R[I],!1));if(qt.numMultiPolys=F.length,qt.type==="difference"){let I=F[0],J=1;for(;J<F.length;)p(F[J].bbox,I.bbox)!==null?J++:F.splice(J,1)}if(qt.type==="intersection")for(let I=0,J=F.length;I<J;I++){let tt=F[I];for(let wt=I+1,Et=F.length;wt<Et;wt++)if(p(tt.bbox,F[wt].bbox)===null)return[]}let U=new c(q.compare);for(let I=0,J=F.length;I<J;I++){let tt=F[I].getSweepEvents();for(let wt=0,Et=tt.length;wt<Et;wt++)if(U.insert(tt[wt]),U.size>Bt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let Q=new Nt(U),$=U.size,ut=U.pop();for(;ut;){let I=ut.key;if(U.size===$){let tt=I.segment;throw new Error(`Unable to pop() ${I.isLeft?"left":"right"} SweepEvent [${I.point.x}, ${I.point.y}] from segment #${tt.id} [${tt.leftSE.point.x}, ${tt.leftSE.point.y}] -> [${tt.rightSE.point.x}, ${tt.rightSE.point.y}] from queue.`)}if(U.size>Bt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(Q.segments.length>Y)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let J=Q.process(I);for(let tt=0,wt=J.length;tt<wt;tt++){let Et=J[tt];Et.consumedBy===void 0&&U.insert(Et)}$=U.size,ut=U.pop()}S.reset();let lt=dt.factory(Q.segments);return new It(lt).getGeom()}}let qt=new ie;var xt={union:function(V){for(var w=arguments.length,E=new Array(w>1?w-1:0),R=1;R<w;R++)E[R-1]=arguments[R];return qt.run("union",V,E)},intersection:function(V){for(var w=arguments.length,E=new Array(w>1?w-1:0),R=1;R<w;R++)E[R-1]=arguments[R];return qt.run("intersection",V,E)},xor:function(V){for(var w=arguments.length,E=new Array(w>1?w-1:0),R=1;R<w;R++)E[R-1]=arguments[R];return qt.run("xor",V,E)},difference:function(V){for(var w=arguments.length,E=new Array(w>1?w-1:0),R=1;R<w;R++)E[R-1]=arguments[R];return qt.run("difference",V,E)}};return xt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Bd=0,uh=1,zd=2;var Ws=1,Hd=2,zr=3,Ms=0,Un=1,Qe=2,Li=0,Hr=1,$i=2,hh=3,fh=4,Gd=5;var Xs=100,Vd=101,Wd=102,Xd=103,qd=104,Yd=200,$d=201,Zd=202,jd=203,dh=204,ph=205,Kd=206,Jd=207,Qd=208,tp=209,ep=210,np=211,ip=212,sp=213,rp=214,uc=0,hc=1,fc=2,Mr=3,dc=4,pc=5,Sr=6,mc=7,Xc=0,op=1,ap=2,mi=0,mh=1,gh=2,yh=3,sa=4,xh=5,bh=6,vh=7;var _h=300,Ss=301,qs=302,qc=303,Yc=304,ra=306,ks=1e3,Ti=1001,gc=1002,mn=1003,cp=1004;var oa=1005;var bn=1006,$c=1007;var ws=1008;var Wn=1009,Mh=1010,Sh=1011,Gr=1012,Zc=1013,gi=1014,ii=1015,yi=1016,jc=1017,Kc=1018,Vr=1020,wh=35902,Eh=35899,Th=1021,Ah=1022,si=1023,Ri=1026,Es=1027,Jc=1028,Qc=1029,Ts=1030,tl=1031;var el=1033,aa=33776,ca=33777,la=33778,ua=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,cl=37496,ll=37488,ul=37489,ha=37490,hl=37491,fl=37808,dl=37809,pl=37810,ml=37811,gl=37812,yl=37813,xl=37814,bl=37815,vl=37816,_l=37817,Ml=37818,Sl=37819,wl=37820,El=37821,Tl=36492,Al=36494,Rl=36495,Cl=36283,Il=36284,fa=36285,Pl=36286;var So=2300,yc=2301,cc=2302,Ku=2303,Ju=2400,Qu=2401,th=2402;var lp=3200;var da=0,up=1,Zi="",rn="srgb",wo="srgb-linear",Eo="linear",Ie="srgb";var lc=7680;var hp=519,fp=512,dp=513,pp=514,Ll=515,mp=516,gp=517,Nl=518,yp=519,Rh=35044,kn=35048;var Ch="300 es",fi=2e3,wr=2001;function gy(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function yy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xp(){let n=To("canvas");return n.style.display="block",n}var Qf={},Er=null;function Ao(...n){let t="THREE."+n.shift();Er?Er("log",t,...n):console.log(t,...n)}function bp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ae(...n){n=bp(n);let t="THREE."+n.shift();if(Er)Er("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ue(...n){n=bp(n);let t="THREE."+n.shift();if(Er)Er("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Us(...n){let t=n.join(" ");t in Qf||(Qf[t]=!0,ae(...n))}function vp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var _p={[uc]:hc,[fc]:Sr,[dc]:mc,[Mr]:pc,[hc]:uc,[Sr]:fc,[mc]:dc,[pc]:Mr},Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=1234567,bo=Math.PI/180,Tr=180/Math.PI;function Ai(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function de(n,t,e){return Math.max(t,Math.min(e,n))}function Ih(n,t){return(n%t+t)%t}function xy(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function by(n,t,e){return n!==t?(e-n)/(t-n):0}function vo(n,t,e){return(1-e)*n+e*t}function vy(n,t,e,i){return vo(n,t,1-Math.exp(-e*i))}function _y(n,t=1){return t-Math.abs(Ih(n,t*2)-t)}function My(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Sy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function wy(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ey(n,t){return n+Math.random()*(t-n)}function Ty(n){return n*(.5-Math.random())}function Ay(n){n!==void 0&&(td=n);let t=td+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ry(n){return n*bo}function Cy(n){return n*Tr}function Iy(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Py(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ly(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ny(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*d,a*u,a*l);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oe={DEG2RAD:bo,RAD2DEG:Tr,generateUUID:Ai,clamp:de,euclideanModulo:Ih,mapLinear:xy,inverseLerp:by,lerp:vo,damp:vy,pingpong:_y,smoothstep:My,smootherstep:Sy,randInt:wy,randFloat:Ey,randFloatSpread:Ty,seededRandom:Ay,degToRad:Ry,radToDeg:Cy,isPowerOfTwo:Iy,ceilPowerOfTwo:Py,floorPowerOfTwo:Ly,setQuaternionFromProperEuler:Ny,normalize:Le,denormalize:hi},Ft=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],m=r[o+2],y=r[o+3];if(h!==y||c!==f||l!==d||u!==m){let p=c*f+l*d+u*m+h*y;p<0&&(f=-f,d=-d,m=-m,y=-y,p=-p);let g=1-a;if(p<.9995){let x=Math.acos(p),v=Math.sin(x);g=Math.sin(g*x)/v,a=Math.sin(a*x)/v,c=c*g+f*a,l=l*g+d*a,u=u*g+m*a,h=h*g+y*a}else{c=c*g+f*a,l=l*g+d*a,u=u*g+m*a,h=h*g+y*a;let x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+c*d-l*f,t[e+1]=c*m+u*f+l*h-a*d,t[e+2]=l*m+u*d+a*f-c*h,t[e+3]=u*m-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ed.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Eu.copy(this).projectOnVector(t),this.sub(Eu)}reflect(t){return this.sub(Eu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eu=new G,ed=new gn,pe=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],m=i[8],y=s[0],p=s[3],g=s[6],x=s[1],v=s[4],b=s[7],_=s[2],S=s[5],C=s[8];return r[0]=o*y+a*x+c*_,r[3]=o*p+a*v+c*S,r[6]=o*g+a*b+c*C,r[1]=l*y+u*x+h*_,r[4]=l*p+u*v+h*S,r[7]=l*g+u*b+h*C,r[2]=f*y+d*x+m*_,r[5]=f*p+d*v+m*S,r[8]=f*g+d*b+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,m=e*h+i*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=h*y,t[1]=(s*l-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=f*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tu.makeScale(t,e)),this}rotate(t){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tu.makeRotation(-t)),this}translate(t,e){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Tu=new pe,nd=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dy(){let n={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ie&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ie&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wo]:{primaries:t,whitePoint:i,transfer:Eo,toXYZ:nd,fromXYZ:id,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:Ie,toXYZ:nd,fromXYZ:id,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var _e=Dy();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var rr,xc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rr===void 0&&(rr=To("canvas")),rr.width=t.width,rr.height=t.height;let s=rr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=rr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=To("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qi(e[i]/255)*255):e[i]=qi(e[i]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fy=0,Ar=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Au(s[o].image)):r.push(Au(s[o]))}else r=Au(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Au(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var Uy=0,Ru=new G,Fn=class n extends Ci{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ti,s=Ti,r=bn,o=ws,a=si,c=Wn,l=n.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ai(),this.name="",this.source=new Ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ru).x}get height(){return this.source.getSize(Ru).y}get depth(){return this.source.getSize(Ru).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=_h;Fn.DEFAULT_ANISOTROPY=1;var Pe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],y=c[2],p=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,b=(d+1)/2,_=(g+1)/2,S=(u+f)/4,C=(h+y)/4,M=(m+p)/4;return v>b&&v>_?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=S/i,r=C/i):b>_?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=M/s):_<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),i=C/r,s=M/r),this.set(i,s,r,e),this}let x=Math.sqrt((p-m)*(p-m)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(h-y)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bc=class extends Ci{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Fn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ar(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends bc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ro=class extends Fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vc=class extends Fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Me=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,c,l,u,h,f,d,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,f,d,m,y,p)}set(t,e,i,s,r,o,a,c,l,u,h,f,d,m,y,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/or.setFromMatrixColumn(t,0).length(),r=1/or.setFromMatrixColumn(t,1).length(),o=1/or.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,y=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+m*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,m=l*u,y=l*h;e[0]=f+y*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,m=l*u,y=l*h;e[0]=f-y*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,y=a*h;e[0]=c*u,e[4]=m*l-d,e[8]=f*l+y,e[1]=c*h,e[5]=y*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,m=a*c,y=a*l;e[0]=c*u,e[4]=y-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+m,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*c,d=o*l,m=a*c,y=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+y,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ky,t,Oy)}lookAt(t,e,i){let s=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),cs.crossVectors(i,qn),cs.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),cs.crossVectors(i,qn)),cs.normalize(),Fa.crossVectors(qn,cs),s[0]=cs.x,s[4]=Fa.x,s[8]=qn.x,s[1]=cs.y,s[5]=Fa.y,s[9]=qn.y,s[2]=cs.z,s[6]=Fa.z,s[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],m=i[2],y=i[6],p=i[10],g=i[14],x=i[3],v=i[7],b=i[11],_=i[15],S=s[0],C=s[4],M=s[8],A=s[12],D=s[1],N=s[5],O=s[9],B=s[13],L=s[2],k=s[6],H=s[10],W=s[14],et=s[3],K=s[7],Z=s[11],nt=s[15];return r[0]=o*S+a*D+c*L+l*et,r[4]=o*C+a*N+c*k+l*K,r[8]=o*M+a*O+c*H+l*Z,r[12]=o*A+a*B+c*W+l*nt,r[1]=u*S+h*D+f*L+d*et,r[5]=u*C+h*N+f*k+d*K,r[9]=u*M+h*O+f*H+d*Z,r[13]=u*A+h*B+f*W+d*nt,r[2]=m*S+y*D+p*L+g*et,r[6]=m*C+y*N+p*k+g*K,r[10]=m*M+y*O+p*H+g*Z,r[14]=m*A+y*B+p*W+g*nt,r[3]=x*S+v*D+b*L+_*et,r[7]=x*C+v*N+b*k+_*K,r[11]=x*M+v*O+b*H+_*Z,r[15]=x*A+v*B+b*W+_*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],y=t[7],p=t[11],g=t[15],x=c*d-l*f,v=a*d-l*h,b=a*f-c*h,_=o*d-l*u,S=o*f-c*u,C=o*h-a*u;return e*(y*x-p*v+g*b)-i*(m*x-p*_+g*S)+s*(m*v-y*_+g*C)-r*(m*b-y*S+p*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],y=t[13],p=t[14],g=t[15],x=e*a-i*o,v=e*c-s*o,b=e*l-r*o,_=i*c-s*a,S=i*l-r*a,C=s*l-r*c,M=u*y-h*m,A=u*p-f*m,D=u*g-d*m,N=h*p-f*y,O=h*g-d*y,B=f*g-d*p,L=x*B-v*O+b*N+_*D-S*A+C*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return t[0]=(a*B-c*O+l*N)*k,t[1]=(s*O-i*B-r*N)*k,t[2]=(y*C-p*S+g*_)*k,t[3]=(f*S-h*C-d*_)*k,t[4]=(c*D-o*B-l*A)*k,t[5]=(e*B-s*D+r*A)*k,t[6]=(p*b-m*C-g*v)*k,t[7]=(u*C-f*b+d*v)*k,t[8]=(o*O-a*D+l*M)*k,t[9]=(i*D-e*O-r*M)*k,t[10]=(m*S-y*b+g*x)*k,t[11]=(h*b-u*S-d*x)*k,t[12]=(a*A-o*N-c*M)*k,t[13]=(e*N-i*A+s*M)*k,t[14]=(y*v-m*_-p*x)*k,t[15]=(u*_-h*v+f*x)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,m=r*h,y=o*u,p=o*h,g=a*h,x=c*l,v=c*u,b=c*h,_=i.x,S=i.y,C=i.z;return s[0]=(1-(y+g))*_,s[1]=(d+b)*_,s[2]=(m-v)*_,s[3]=0,s[4]=(d-b)*S,s[5]=(1-(f+g))*S,s[6]=(p+x)*S,s[7]=0,s[8]=(m+v)*C,s[9]=(p-x)*C,s[10]=(1-(f+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=or.set(s[0],s[1],s[2]).length(),a=or.set(s[4],s[5],s[6]).length(),c=or.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ci.copy(this);let l=1/o,u=1/a,h=1/c;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,e.setFromRotationMatrix(ci),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=fi,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),m,y;if(c)m=r/(o-r),y=o*r/(o-r);else if(a===fi)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===wr)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=fi,c=!1){let l=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),m,y;if(c)m=1/(o-r),y=o/(o-r);else if(a===fi)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===wr)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},or=new G,ci=new Me,ky=new G(0,0,0),Oy=new G(1,1,1),cs=new G,Fa=new G,qn=new G,sd=new Me,rd=new gn,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return sd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rd.setFromEuler(this),this.setFromQuaternion(rd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},By=0,od=new G,ar=new gn,Hi=new Me,Ua=new G,uo=new G,zy=new G,Hy=new gn,ad=new G(1,0,0),cd=new G(0,1,0),ld=new G(0,0,1),ud={type:"added"},Gy={type:"removed"},cr={type:"childadded",child:null},Cu={type:"childremoved",child:null},Ve=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new G,e=new Ii,i=new gn,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new pe}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(ad,t)}rotateY(t){return this.rotateOnAxis(cd,t)}rotateZ(t){return this.rotateOnAxis(ld,t)}translateOnAxis(t,e){return od.copy(t).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ad,t)}translateY(t){return this.translateOnAxis(cd,t)}translateZ(t){return this.translateOnAxis(ld,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ua.copy(t):Ua.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(uo,Ua,this.up):Hi.lookAt(Ua,uo,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Hi),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ud),cr.child=t,this.dispatchEvent(cr),cr.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gy),Cu.child=t,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ud),cr.child=t,this.dispatchEvent(cr),cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,t,zy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,Hy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new G(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vy={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),g=this._getHandJoint(l,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Iu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var $t=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=_e.workingColorSpace){if(t=Ih(t,1),e=de(e,0,1),i=de(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Iu(o,r,t+1/3),this.g=Iu(o,r,t),this.b=Iu(o,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let i=Mp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return _e.workingToColorSpace(Tn.copy(this),t),Math.round(de(Tn.r*255,0,255))*65536+Math.round(de(Tn.g*255,0,255))*256+Math.round(de(Tn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(Tn.copy(this),e);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(Tn.copy(this),e),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=rn){_e.workingToColorSpace(Tn.copy(this),t);let e=Tn.r,i=Tn.g,s=Tn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+e,ls.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ls),t.getHSL(ka);let i=vo(ls.h,ka.h,e),s=vo(ls.s,ka.s,e),r=vo(ls.l,ka.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new $t;$t.NAMES=Mp;var Co=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new G,Gi=new G,Pu=new G,Vi=new G,lr=new G,ur=new G,hd=new G,Lu=new G,Nu=new G,Du=new G,Fu=new Pe,Uu=new Pe,ku=new Pe,ds=class n{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),Gi.subVectors(i,e),Pu.subVectors(t,e);let o=li.dot(li),a=li.dot(Gi),c=li.dot(Pu),l=Gi.dot(Gi),u=Gi.dot(Pu),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(o,Vi.y),c.addScaledVector(a,Vi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Fu.setScalar(0),Uu.setScalar(0),ku.setScalar(0),Fu.fromBufferAttribute(t,e),Uu.fromBufferAttribute(t,i),ku.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Fu,r.x),o.addScaledVector(Uu,r.y),o.addScaledVector(ku,r.z),o}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),Gi.subVectors(t,e),li.cross(Gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),li.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;lr.subVectors(s,i),ur.subVectors(r,i),Lu.subVectors(t,i);let c=lr.dot(Lu),l=ur.dot(Lu);if(c<=0&&l<=0)return e.copy(i);Nu.subVectors(t,s);let u=lr.dot(Nu),h=ur.dot(Nu);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(lr,o);Du.subVectors(t,r);let d=lr.dot(Du),m=ur.dot(Du);if(m>=0&&d<=m)return e.copy(r);let y=d*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(ur,a);let p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return hd.subVectors(r,s),a=(h-u)/(h-u+(d-m)),e.copy(s).addScaledVector(hd,a);let g=1/(p+y+f);return o=y*g,a=f*g,e.copy(i).addScaledVector(lr,o).addScaledVector(ur,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ue=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(t.matrixWorld),this.union(Oa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ho),Ba.subVectors(this.max,ho),hr.subVectors(t.a,ho),fr.subVectors(t.b,ho),dr.subVectors(t.c,ho),us.subVectors(fr,hr),hs.subVectors(dr,fr),Ls.subVectors(hr,dr);let e=[0,-us.z,us.y,0,-hs.z,hs.y,0,-Ls.z,Ls.y,us.z,0,-us.x,hs.z,0,-hs.x,Ls.z,0,-Ls.x,-us.y,us.x,0,-hs.y,hs.x,0,-Ls.y,Ls.x,0];return!Ou(e,hr,fr,dr,Ba)||(e=[1,0,0,0,1,0,0,0,1],!Ou(e,hr,fr,dr,Ba))?!1:(za.crossVectors(us,hs),e=[za.x,za.y,za.z],Ou(e,hr,fr,dr,Ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new G,new G,new G,new G,new G,new G,new G,new G],ui=new G,Oa=new Ue,hr=new G,fr=new G,dr=new G,us=new G,hs=new G,Ls=new G,ho=new G,Ba=new G,za=new G,Ns=new G;function Ou(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ns.fromArray(n,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=t.dot(Ns),l=e.dot(Ns),u=i.dot(Ns);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var sn=new G,Ha=new Ft,Wy=0,Te=class extends Ci{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ha.fromBufferAttribute(this,e),Ha.applyMatrix3(t),this.setXY(e,Ha.x,Ha.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=class extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Po=class extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var jt=class extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xy=new Ue,fo=new G,Bu=new G,Vn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xy.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fo.subVectors(t,this.center);let e=fo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fo.copy(t.center).add(Bu)),this.expandByPoint(fo.copy(t.center).sub(Bu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qy=0,ti=new Me,zu=new Ve,pr=new G,Yn=new Ue,po=new Ue,pn=new G,he=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gy(t)?Po:Io)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return zu.lookAt(t),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];po.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Yn.min,po.min),Yn.expandByPoint(pn),pn.addVectors(Yn.max,po.max),Yn.expandByPoint(pn)):(Yn.expandByPoint(po.min),Yn.expandByPoint(po.max))}Yn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)pn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(pn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)pn.fromBufferAttribute(a,l),c&&(pr.fromBufferAttribute(t,l),pn.add(pr)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Te(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let M=0;M<i.count;M++)a[M]=new G,c[M]=new G;let l=new G,u=new G,h=new G,f=new Ft,d=new Ft,m=new Ft,y=new G,p=new G;function g(M,A,D){l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,D),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),u.sub(l),h.sub(l),d.sub(f),m.sub(f);let N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(N),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(N),a[M].add(y),a[A].add(y),a[D].add(y),c[M].add(p),c[A].add(p),c[D].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let M=0,A=x.length;M<A;++M){let D=x[M],N=D.start,O=D.count;for(let B=N,L=N+O;B<L;B+=3)g(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let v=new G,b=new G,_=new G,S=new G;function C(M){_.fromBufferAttribute(s,M),S.copy(_);let A=a[M];v.copy(A),v.sub(_.multiplyScalar(_.dot(A))).normalize(),b.crossVectors(S,A);let N=b.dot(c[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,N)}for(let M=0,A=x.length;M<A;++M){let D=x[M],N=D.start,O=D.count;for(let B=N,L=N+O;B<L;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,h=new G;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,m=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let g=0;g<u;g++)f[m++]=l[d++]}return new Te(f,u,h)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rh,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Nn=new G,ei=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.applyMatrix4(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.applyNormalMatrix(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Nn.fromBufferAttribute(this,e),Nn.transformDirection(t),this.setXYZ(e,Nn.x,Nn.y,Nn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hu=new G,Yy=new G,$y=new pe,$n=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Hu.subVectors(i,e).cross(Yy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Hu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||$y.getNormalMatrix(t),s=this.coplanarPoint(Hu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zy=0,di=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Hr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=ph,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lc,this.stencilZFail=lc,this.stencilZPass=lc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $n().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xi=new G,Gu=new G,Ga=new G,Va=new G,Os=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Gu.copy(t).add(e).multiplyScalar(.5),Ga.copy(e).sub(t).normalize(),Va.copy(this.origin).sub(Gu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ga),a=Va.dot(this.direction),c=-Va.dot(Ga),l=Va.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=r*u,h>=0)if(f>=-m)if(f<=m){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Gu).addScaledVector(Ga,f),d}intersectSphere(t,e){if(t.radius<0)return null;Xi.subVectors(t.center,this.origin);let i=Xi.dot(this.direction),s=Xi.dot(Xi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,y=e.y-o.y,p=e.z-o.z,g=i.x-o.x,x=i.y-o.y,v=i.z-o.z,b=Math.abs(c),_=Math.abs(l),S=Math.abs(u),C,M,A,D,N,O,B,L,k,H,W,et;if(b>=_&&b>=S?(A=c,O=h,k=m,et=g,c>=0?(C=l,M=u,D=f,N=d,B=y,L=p,H=x,W=v):(C=u,M=l,D=d,N=f,B=p,L=y,H=v,W=x)):_>=S?(A=l,O=f,k=y,et=x,l>=0?(C=u,M=c,D=d,N=h,B=p,L=m,H=v,W=g):(C=c,M=u,D=h,N=d,B=m,L=p,H=g,W=v)):(A=u,O=d,k=p,et=v,u>=0?(C=c,M=l,D=h,N=f,B=m,L=y,H=g,W=x):(C=l,M=c,D=f,N=h,B=y,L=m,H=x,W=g)),A===0)return null;let K=C/A,Z=M/A,nt=1/A,Tt=D-K*O,At=N-Z*O,Mt=B-K*k,_t=L-Z*k,Lt=H-K*et,ot=W-Z*et,ht=Lt*_t-ot*Mt,St=Tt*ot-At*Lt,zt=Mt*At-_t*Tt;if(s){if(ht<0||St<0||zt<0)return null}else if((ht<0||St<0||zt<0)&&(ht>0||St>0||zt>0))return null;let Ot=ht+St+zt;if(Ot===0)return null;let q=nt*(ht*O+St*k+zt*et);return(Ot>0?q<0:q>0)?null:this.at(q/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fd=new Me,Ds=new Os,Wa=new Vn,dd=new G,Xa=new G,qa=new G,Ya=new G,Vu=new G,$a=new G,pd=new G,Za=new G,ce=class extends Ve{constructor(t=new he,e=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Vu.fromBufferAttribute(h,t),o?$a.addScaledVector(Vu,u):$a.addScaledVector(Vu.sub(e),u))}e.add($a)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Ds.copy(t.ray).recast(t.near),!(Wa.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Wa,dd)===null||Ds.origin.distanceToSquared(dd)>(t.far-t.near)**2))&&(fd.copy(r).invert(),Ds.copy(t.ray).applyMatrix4(fd),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ds)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){let p=f[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,_=v;b<_;b+=3){let S=a.getX(b),C=a.getX(b+1),M=a.getX(b+2);s=ja(this,g,t,i,l,u,h,S,C,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let x=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);s=ja(this,o,t,i,l,u,h,x,v,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){let p=f[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,_=v;b<_;b+=3){let S=b,C=b+1,M=b+2;s=ja(this,g,t,i,l,u,h,S,C,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let x=p,v=p+1,b=p+2;s=ja(this,o,t,i,l,u,h,x,v,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function jy(n,t,e,i,s,r,o,a){let c;if(t.side===Un?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Ms,a),c===null)return null;Za.copy(a),Za.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Za);return l<e.near||l>e.far?null:{distance:l,point:Za.clone(),object:n}}function ja(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Xa),n.getVertexPosition(c,qa),n.getVertexPosition(l,Ya);let u=jy(n,t,e,i,Xa,qa,Ya,pd);if(u){let h=new G;ds.getBarycoord(pd,Xa,qa,Ya,h),s&&(u.uv=ds.getInterpolatedAttribute(s,a,c,l,h,new Ft)),r&&(u.uv1=ds.getInterpolatedAttribute(r,a,c,l,h,new Ft)),o&&(u.normal=ds.getInterpolatedAttribute(o,a,c,l,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new G,materialIndex:0};ds.getNormal(Xa,qa,Ya,f.normal),u.face=f,u.barycoord=h}return u}var No=class extends Fn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=mn,u=mn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ir=class extends Te{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},mr=new Me,md=new Me,Ka=[],gd=new Ue,Ky=new Me,mo=new ce,go=new Vn,ni=class extends ce{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ir(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ky)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,mr),gd.copy(t.boundingBox).applyMatrix4(mr),this.boundingBox.union(gd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,mr),go.copy(t.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(go)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(i),t.ray.intersectsSphere(go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),md.multiplyMatrices(i,mr),mo.matrixWorld=md,mo.raycast(t,Ka);for(let o=0,a=Ka.length;o<a;o++){let c=Ka[o];c.instanceId=r,c.object=this,e.push(c)}Ka.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new No(new Float32Array(s*this.count),s,this.count,Jc,ii));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fs=new Vn,Jy=new Ft(.5,.5),Ja=new G,Pr=class{constructor(t=new $n,e=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],y=r[9],p=r[10],g=r[11],x=r[12],v=r[13],b=r[14],_=r[15];if(s[0].setComponents(l-o,d-u,g-m,_-x).normalize(),s[1].setComponents(l+o,d+u,g+m,_+x).normalize(),s[2].setComponents(l+a,d+h,g+y,_+v).normalize(),s[3].setComponents(l-a,d-h,g-y,_-v).normalize(),i)s[4].setComponents(c,f,p,b).normalize(),s[5].setComponents(l-c,d-f,g-p,_-b).normalize();else if(s[4].setComponents(l-c,d-f,g-p,_-b).normalize(),e===fi)s[5].setComponents(l+c,d+f,g+p,_+b).normalize();else if(e===wr)s[5].setComponents(c,f,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);let e=Jy.distanceTo(t.center);return Fs.radius=.7071067811865476+e,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ja.x=s.normal.x>0?t.max.x:t.min.x,Ja.y=s.normal.y>0?t.max.y:t.min.y,Ja.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_c=new G,Mc=new G,yd=new Me,yo=new Os,Qa=new Vn,Wu=new G,xd=new G,Sc=class extends Ve{constructor(t=new he,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)_c.fromBufferAttribute(e,s-1),Mc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=_c.distanceTo(Mc);t.setAttribute("lineDistance",new jt(i,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,t.ray.intersectsSphere(Qa)===!1)return;yd.copy(s).invert(),yo.copy(t.ray).applyMatrix4(yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=l){let g=u.getX(y),x=u.getX(y+1),v=tc(this,t,yo,c,g,x,y);v&&e.push(v)}if(this.isLineLoop){let y=u.getX(m-1),p=u.getX(d),g=tc(this,t,yo,c,y,p,m-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=l){let g=tc(this,t,yo,c,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=tc(this,t,yo,c,m-1,d,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function tc(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(_c.fromBufferAttribute(a,s),Mc.fromBufferAttribute(a,r),e.distanceSqToSegment(_c,Mc,Wu,xd)>i)return;Wu.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Wu);if(!(l<t.near||l>t.far))return{distance:l,point:xd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var bd=new G,vd=new G,Do=class extends Sc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)bd.fromBufferAttribute(e,s),vd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bd.distanceTo(vd);t.setAttribute("lineDistance",new jt(i,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Bs=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_d=new Me,eh=new Os,ec=new Vn,nc=new G,Nr=class extends Ve{constructor(t=new he,e=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(s),ec.radius+=r,t.ray.intersectsSphere(ec)===!1)return;_d.copy(s).invert(),eh.copy(t.ray).applyMatrix4(_d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,y=d;m<y;m++){let p=l.getX(m);nc.fromBufferAttribute(h,p),Md(nc,p,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,y=d;m<y;m++)nc.fromBufferAttribute(h,m),Md(nc,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Md(n,t,e,i,s,r,o){let a=eh.distanceSqToPoint(n);if(a<e){let c=new G;eh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fo=class extends Fn{constructor(t=[],e=Ss,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dr=class extends Fn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends Fn{constructor(t,e,i=gi,s,r,o,a=mn,c=mn,l,u=Ri,h=1){if(u!==Ri&&u!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ar(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},wc=class extends ps{constructor(t,e=gi,i=Ss,s,r,o=mn,a=mn,c,l=Ri){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Uo=class extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ae=class n extends he{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function m(y,p,g,x,v,b,_,S,C,M,A){let D=b/C,N=_/M,O=b/2,B=_/2,L=S/2,k=C+1,H=M+1,W=0,et=0,K=new G;for(let Z=0;Z<H;Z++){let nt=Z*N-B;for(let Tt=0;Tt<k;Tt++){let At=Tt*D-O;K[y]=At*x,K[p]=nt*v,K[g]=L,l.push(K.x,K.y,K.z),K[y]=0,K[p]=0,K[g]=S>0?1:-1,u.push(K.x,K.y,K.z),h.push(Tt/C),h.push(1-Z/M),W+=1}}for(let Z=0;Z<M;Z++)for(let nt=0;nt<C;nt++){let Tt=f+nt+k*Z,At=f+nt+k*(Z+1),Mt=f+(nt+1)+k*(Z+1),_t=f+(nt+1)+k*Z;c.push(Tt,At,_t),c.push(At,Mt,_t),et+=6}a.addGroup(d,et,A),d+=et,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var An=class n extends he{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new G,u=new Ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=i+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},We=class n extends he{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,y=[],p=i/2,g=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(d,2));function x(){let b=new G,_=new G,S=0,C=(e-t)/i;for(let M=0;M<=r;M++){let A=[],D=M/r,N=D*(e-t)+t;for(let O=0;O<=s;O++){let B=O/s,L=B*c+a,k=Math.sin(L),H=Math.cos(L);_.x=N*k,_.y=-D*i+p,_.z=N*H,h.push(_.x,_.y,_.z),b.set(k,C,H).normalize(),f.push(b.x,b.y,b.z),d.push(B,1-D),A.push(m++)}y.push(A)}for(let M=0;M<s;M++)for(let A=0;A<r;A++){let D=y[A][M],N=y[A+1][M],O=y[A+1][M+1],B=y[A][M+1];(t>0||A!==0)&&(u.push(D,N,B),S+=3),(e>0||A!==r-1)&&(u.push(N,O,B),S+=3)}l.addGroup(g,S,0),g+=S}function v(b){let _=m,S=new Ft,C=new G,M=0,A=b===!0?t:e,D=b===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,p*D,0),f.push(0,D,0),d.push(.5,.5),m++;let N=m;for(let O=0;O<=s;O++){let L=O/s*c+a,k=Math.cos(L),H=Math.sin(L);C.x=A*H,C.y=p*D,C.z=A*k,h.push(C.x,C.y,C.z),f.push(0,D,0),S.x=k*.5+.5,S.y=H*.5*D+.5,d.push(S.x,S.y),m++}for(let O=0;O<s;O++){let B=_+O,L=N+O;b===!0?u.push(L,L+1,B):u.push(L+1,L,B),M+=3}l.addGroup(g,M,b===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ko=class n extends We{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oo=class n extends he{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new G,b=new G,_=new G;for(let S=0;S<e.length;S+=3)d(e[S+0],v),d(e[S+1],b),d(e[S+2],_),c(v,b,_,x)}function c(x,v,b,_){let S=_+1,C=[];for(let M=0;M<=S;M++){C[M]=[];let A=x.clone().lerp(b,M/S),D=v.clone().lerp(b,M/S),N=S-M;for(let O=0;O<=N;O++)O===0&&M===S?C[M][O]=A:C[M][O]=A.clone().lerp(D,O/N)}for(let M=0;M<S;M++)for(let A=0;A<2*(S-M)-1;A++){let D=Math.floor(A/2);A%2===0?(f(C[M][D+1]),f(C[M+1][D]),f(C[M][D])):(f(C[M][D+1]),f(C[M+1][D+1]),f(C[M+1][D]))}}function l(x){let v=new G;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(x),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function u(){let x=new G;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let b=p(x)/2/Math.PI+.5,_=g(x)/Math.PI+.5;o.push(b,1-_)}m(),h()}function h(){for(let x=0;x<o.length;x+=6){let v=o[x+0],b=o[x+2],_=o[x+4],S=Math.max(v,b,_),C=Math.min(v,b,_);S>.9&&C<.1&&(v<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),_<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,v){let b=x*3;v.x=t[b+0],v.y=t[b+1],v.z=t[b+2]}function m(){let x=new G,v=new G,b=new G,_=new G,S=new Ft,C=new Ft,M=new Ft;for(let A=0,D=0;A<r.length;A+=9,D+=6){x.set(r[A+0],r[A+1],r[A+2]),v.set(r[A+3],r[A+4],r[A+5]),b.set(r[A+6],r[A+7],r[A+8]),S.set(o[D+0],o[D+1]),C.set(o[D+2],o[D+3]),M.set(o[D+4],o[D+5]),_.copy(x).add(v).add(b).divideScalar(3);let N=p(_);y(S,D+0,x,N),y(C,D+2,v,N),y(M,D+4,b,N)}}function y(x,v,b,_){_<0&&x.x===1&&(o[v]=x.x-1),b.x===0&&b.z===0&&(o[v]=_/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},Bo=class n extends Oo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Ft:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new G,s=[],r=[],o=[],a=new G,c=new Me;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new G)}r[0]=new G,o[0]=new G;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(de(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(de(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fr=class extends Zn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ft){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ec=class extends Fr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ph(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Sd=new G,wd=new G,Xu=new Ph,qu=new Ph,Yu=new Ph,zs=class extends Zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new G){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(wd.subVectors(s[0],s[1]).add(s[0]),l=wd);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Sd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Sd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),Xu.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,m,y,p),qu.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,m,y,p),Yu.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,m,y,p)}else this.curveType==="catmullrom"&&(Xu.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),qu.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Yu.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Xu.calc(c),qu.calc(c),Yu.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ed(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function Qy(n,t){let e=1-n;return e*e*t}function tx(n,t){return 2*(1-n)*n*t}function ex(n,t){return n*n*t}function _o(n,t,e,i){return Qy(n,t)+tx(n,e)+ex(n,i)}function nx(n,t){let e=1-n;return e*e*e*t}function ix(n,t){let e=1-n;return 3*e*e*n*t}function sx(n,t){return 3*(1-n)*n*n*t}function rx(n,t){return n*n*n*t}function Mo(n,t,e,i,s){return nx(n,t)+ix(n,e)+sx(n,i)+rx(n,s)}var zo=class extends Zn{constructor(t=new Ft,e=new Ft,i=new Ft,s=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ft){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(t,s.x,r.x,o.x,a.x),Mo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tc=class extends Zn{constructor(t=new G,e=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new G){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(t,s.x,r.x,o.x,a.x),Mo(t,s.y,r.y,o.y,a.y),Mo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends Zn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ac=class extends Zn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Zn{constructor(t=new Ft,e=new Ft,i=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ft){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(_o(t,s.x,r.x,o.x),_o(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Zn{constructor(t=new G,e=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new G){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(_o(t,s.x,r.x,o.x),_o(t,s.y,r.y,o.y),_o(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wo=class extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Ed(a,c.x,l.x,u.x,h.x),Ed(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Ft().fromArray(s))}return this}},Rc=Object.freeze({__proto__:null,ArcCurve:Ec,CatmullRomCurve3:zs,CubicBezierCurve:zo,CubicBezierCurve3:Tc,EllipseCurve:Fr,LineCurve:Ho,LineCurve3:Ac,QuadraticBezierCurve:Go,QuadraticBezierCurve3:Vo,SplineCurve:Wo}),Cc=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Rc[s.type]().fromJSON(s))}return this}},Hs=class extends Cc{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ho(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Go(this.currentPoint.clone(),new Ft(t,e),new Ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new zo(this.currentPoint.clone(),new Ft(t,e),new Ft(i,s),new Ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Wo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new Fr(t,e,i,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ln=class extends Hs{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Hs().fromJSON(s))}return this}};function ox(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Sp(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=hx(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let u=a,h=c;for(let f=e;f<s;f+=e){let d=n[f],m=n[f+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>h&&(h=m)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Xo(r,o,e,a,c,l,0),o}function Sp(n,t,e,i,s){let r;if(s===Mx(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Td(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Td(o/i|0,n[o],n[o+1],r);return r&&Ur(r,r.next)&&(Yo(r),r=r.next),r}function Gs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ur(e,e.next)||qe(e.prev,e,e.next)===0)){if(Yo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Xo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&gx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?cx(n,i,s,r):ax(n)){t.push(c.i,n.i,l.i),Yo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=lx(Gs(n),t),Xo(n,t,e,i,s,r,2)):o===2&&ux(n,t,e,i,s,r):Xo(Gs(n),t,e,i,s,r,1);break}}}function ax(n){let t=n.prev,e=n,i=n.next;if(qe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),h=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&xo(s,a,r,c,o,l,m.x,m.y)&&qe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function cx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(qe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(u,h,f),y=Math.max(a,c,l),p=Math.max(u,h,f),g=nh(d,m,t,e,i),x=nh(y,p,t,e,i),v=n.prevZ,b=n.nextZ;for(;v&&v.z>=g&&b&&b.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&xo(a,u,c,h,l,f,v.x,v.y)&&qe(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=y&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&xo(a,u,c,h,l,f,b.x,b.y)&&qe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&xo(a,u,c,h,l,f,v.x,v.y)&&qe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=x;){if(b.x>=d&&b.x<=y&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&xo(a,u,c,h,l,f,b.x,b.y)&&qe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function lx(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Ur(i,s)&&Ep(i,e,e.next,s)&&qo(i,s)&&qo(s,i)&&(t.push(i.i,e.i,s.i),Yo(e),Yo(e.next),e=n=s),e=e.next}while(e!==n);return Gs(e)}function ux(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bx(o,a)){let c=Tp(o,a);o=Gs(o,o.next),c=Gs(c,c.next),Xo(o,t,e,i,s,r,0),Xo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function hx(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Sp(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(xx(l))}s.sort(fx);for(let r=0;r<s.length;r++)e=dx(s[r],e);return e}function fx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function dx(n,t){let e=px(n,t);if(!e)return t;let i=Tp(e,n);return Gs(i,i.next),Gs(e,e.next)}function px(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Ur(n,e))return e;do{if(Ur(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&wp(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let h=Math.abs(s-e.y)/(i-e.x);qo(e,n)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&mx(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function mx(n,t){return qe(n.prev,n,t.prev)<0&&qe(t.next,n,n.next)<0}function gx(n,t,e,i){let s=n;do s.z===0&&(s.z=nh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,yx(s)}function yx(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function nh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function xx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function wp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function xo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&wp(n,t,e,i,s,r,o,a)}function bx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!vx(n,t)&&(qo(n,t)&&qo(t,n)&&_x(n,t)&&(qe(n.prev,n,t.prev)||qe(n,t.prev,t))||Ur(n,t)&&qe(n.prev,n,n.next)>0&&qe(t.prev,t,t.next)>0)}function qe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ur(n,t){return n.x===t.x&&n.y===t.y}function Ep(n,t,e,i){let s=sc(qe(n,t,e)),r=sc(qe(n,t,i)),o=sc(qe(e,i,n)),a=sc(qe(e,i,t));return!!(s!==r&&o!==a||s===0&&ic(n,e,t)||r===0&&ic(n,i,t)||o===0&&ic(e,n,i)||a===0&&ic(e,t,i))}function ic(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function sc(n){return n>0?1:n<0?-1:0}function vx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ep(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function qo(n,t){return qe(n.prev,n,n.next)<0?qe(n,t,n.next)>=0&&qe(n,n.prev,t)>=0:qe(n,t,n.prev)<0||qe(n,n.next,t)<0}function _x(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Tp(n,t){let e=ih(n.i,n.x,n.y),i=ih(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Td(n,t,e,i){let s=ih(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Yo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ih(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var sh=class{static triangulate(t,e,i=2){return ox(t,e,i)}},Hn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Ad(t),Rd(i,t);let o=t.length;e.forEach(Ad);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Rd(i,e[c]);let a=sh.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ad(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Rd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var pi=class n extends he{constructor(t=new ln([new Ft(.5,.5),new Ft(-.5,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Sx,v,b=!1,_,S,C,M;if(g){v=g.getSpacedPoints(u),b=!0,f=!1;let X=g.isCatmullRomCurve3?g.closed:!1;_=g.computeFrenetFrames(u,X),S=new G,C=new G,M=new G}f||(p=0,d=0,m=0,y=0);let A=a.extractPoints(l),D=A.shape,N=A.holes;if(!Hn.isClockWise(D)){D=D.reverse();for(let X=0,j=N.length;X<j;X++){let st=N[X];Hn.isClockWise(st)&&(N[X]=st.reverse())}}function B(X){let st=10000000000000001e-36,ct=X[0];for(let dt=1;dt<=X.length;dt++){let Ct=dt%X.length,It=X[Ct],Nt=It.x-ct.x,Bt=It.y-ct.y,Y=Nt*Nt+Bt*Bt,ie=Math.max(Math.abs(It.x),Math.abs(It.y),Math.abs(ct.x),Math.abs(ct.y)),qt=st*ie*ie;if(Y<=qt){X.splice(Ct,1),dt--;continue}ct=It}}B(D),N.forEach(B);let L=N.length,k=D;for(let X=0;X<L;X++){let j=N[X];D=D.concat(j)}function H(X,j,st){return j||ue("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(j,st)}let W=D.length;function et(X,j,st){let ct,dt,Ct,It=X.x-j.x,Nt=X.y-j.y,Bt=st.x-X.x,Y=st.y-X.y,ie=It*It+Nt*Nt,qt=It*Y-Nt*Bt;if(Math.abs(qt)>Number.EPSILON){let z=Math.sqrt(ie),T=Math.sqrt(Bt*Bt+Y*Y),it=j.x-Nt/z,ft=j.y+It/z,xt=st.x-Y/T,V=st.y+Bt/T,w=((xt-it)*Y-(V-ft)*Bt)/(It*Y-Nt*Bt);ct=it+It*w-X.x,dt=ft+Nt*w-X.y;let E=ct*ct+dt*dt;if(E<=2)return new Ft(ct,dt);Ct=Math.sqrt(E/2)}else{let z=!1;It>Number.EPSILON?Bt>Number.EPSILON&&(z=!0):It<-Number.EPSILON?Bt<-Number.EPSILON&&(z=!0):Math.sign(Nt)===Math.sign(Y)&&(z=!0),z?(ct=-Nt,dt=It,Ct=Math.sqrt(ie)):(ct=It,dt=Nt,Ct=Math.sqrt(ie/2))}return new Ft(ct/Ct,dt/Ct)}let K=[];for(let X=0,j=k.length,st=j-1,ct=X+1;X<j;X++,st++,ct++)st===j&&(st=0),ct===j&&(ct=0),K[X]=et(k[X],k[st],k[ct]);let Z=[],nt,Tt=K.concat();for(let X=0,j=L;X<j;X++){let st=N[X];nt=[];for(let ct=0,dt=st.length,Ct=dt-1,It=ct+1;ct<dt;ct++,Ct++,It++)Ct===dt&&(Ct=0),It===dt&&(It=0),nt[ct]=et(st[ct],st[Ct],st[It]);Z.push(nt),Tt=Tt.concat(nt)}let At;if(p===0)At=Hn.triangulateShape(k,N);else{let X=[],j=[];for(let st=0;st<p;st++){let ct=st/p,dt=d*Math.cos(ct*Math.PI/2),Ct=m*Math.sin(ct*Math.PI/2)+y;for(let It=0,Nt=k.length;It<Nt;It++){let Bt=H(k[It],K[It],Ct);St(Bt.x,Bt.y,-dt),ct===0&&X.push(Bt)}for(let It=0,Nt=L;It<Nt;It++){let Bt=N[It];nt=Z[It];let Y=[];for(let ie=0,qt=Bt.length;ie<qt;ie++){let z=H(Bt[ie],nt[ie],Ct);St(z.x,z.y,-dt),ct===0&&Y.push(z)}ct===0&&j.push(Y)}}At=Hn.triangulateShape(X,j)}let Mt=At.length,_t=m+y;for(let X=0;X<W;X++){let j=f?H(D[X],Tt[X],_t):D[X];b?(C.copy(_.normals[0]).multiplyScalar(j.x),S.copy(_.binormals[0]).multiplyScalar(j.y),M.copy(v[0]).add(C).add(S),St(M.x,M.y,M.z)):St(j.x,j.y,0)}for(let X=1;X<=u;X++)for(let j=0;j<W;j++){let st=f?H(D[j],Tt[j],_t):D[j];b?(C.copy(_.normals[X]).multiplyScalar(st.x),S.copy(_.binormals[X]).multiplyScalar(st.y),M.copy(v[X]).add(C).add(S),St(M.x,M.y,M.z)):St(st.x,st.y,h/u*X)}for(let X=p-1;X>=0;X--){let j=X/p,st=d*Math.cos(j*Math.PI/2),ct=m*Math.sin(j*Math.PI/2)+y;for(let dt=0,Ct=k.length;dt<Ct;dt++){let It=H(k[dt],K[dt],ct);St(It.x,It.y,h+st)}for(let dt=0,Ct=N.length;dt<Ct;dt++){let It=N[dt];nt=Z[dt];for(let Nt=0,Bt=It.length;Nt<Bt;Nt++){let Y=H(It[Nt],nt[Nt],ct);b?St(Y.x,Y.y+v[u-1].y,v[u-1].x+st):St(Y.x,Y.y,h+st)}}}Lt(),ot();function Lt(){let X=s.length/3;if(f){let j=0,st=W*j;for(let ct=0;ct<Mt;ct++){let dt=At[ct];zt(dt[2]+st,dt[1]+st,dt[0]+st)}j=u+p*2,st=W*j;for(let ct=0;ct<Mt;ct++){let dt=At[ct];zt(dt[0]+st,dt[1]+st,dt[2]+st)}}else{for(let j=0;j<Mt;j++){let st=At[j];zt(st[2],st[1],st[0])}for(let j=0;j<Mt;j++){let st=At[j];zt(st[0]+W*u,st[1]+W*u,st[2]+W*u)}}i.addGroup(X,s.length/3-X,0)}function ot(){let X=s.length/3,j=0;ht(k,j),j+=k.length;for(let st=0,ct=N.length;st<ct;st++){let dt=N[st];ht(dt,j),j+=dt.length}i.addGroup(X,s.length/3-X,1)}function ht(X,j){let st=X.length;for(;--st>=0;){let ct=st,dt=st-1;dt<0&&(dt=X.length-1);for(let Ct=0,It=u+p*2;Ct<It;Ct++){let Nt=W*Ct,Bt=W*(Ct+1),Y=j+ct+Nt,ie=j+dt+Nt,qt=j+dt+Bt,z=j+ct+Bt;Ot(Y,ie,qt,z)}}}function St(X,j,st){c.push(X),c.push(j),c.push(st)}function zt(X,j,st){q(X),q(j),q(st);let ct=s.length/3,dt=x.generateTopUV(i,s,ct-3,ct-2,ct-1);yt(dt[0]),yt(dt[1]),yt(dt[2])}function Ot(X,j,st,ct){q(X),q(j),q(ct),q(j),q(st),q(ct);let dt=s.length/3,Ct=x.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);yt(Ct[0]),yt(Ct[1]),yt(Ct[3]),yt(Ct[1]),yt(Ct[2]),yt(Ct[3])}function q(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function yt(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return wx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Rc[s.type]().fromJSON(s)),new n(i,t.options)}},Sx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new Ft(r,o),new Ft(a,c),new Ft(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],y=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ft(o,1-c),new Ft(l,1-h),new Ft(f,1-m),new Ft(y,1-g)]:[new Ft(a,1-c),new Ft(u,1-h),new Ft(d,1-m),new Ft(p,1-g)]}};function wx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $o=class n extends Oo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Zo=class n extends he{constructor(t=[new Ft(0,-.5),new Ft(.5,0),new Ft(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=de(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new G,f=new Ft,d=new G,m=new G,y=new G,p=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-p,d.z=g*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:p=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(m)}for(let x=0;x<=e;x++){let v=i+x*u*s,b=Math.sin(v),_=Math.cos(v);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*b,h.y=t[S].y,h.z=t[S].x*_,o.push(h.x,h.y,h.z),f.x=x/e,f.y=S/(t.length-1),a.push(f.x,f.y);let C=c[3*S+0]*b,M=c[3*S+1],A=c[3*S+0]*_;l.push(C,M,A)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let b=v+x*t.length,_=b,S=b+t.length,C=b+t.length+1,M=b+1;r.push(_,S,M),r.push(C,M,S)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Rn=class n extends he{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],m=[],y=[],p=[];for(let g=0;g<u;g++){let x=g*f-o;for(let v=0;v<l;v++){let b=v*h-r;m.push(b,-x,0),y.push(0,0,1),p.push(v/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){let v=x+l*g,b=x+l*(g+1),_=x+1+l*(g+1),S=x+1+l*g;d.push(v,b,S),d.push(b,_,S)}this.setIndex(d),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},jo=class n extends he{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=t,f=(e-t)/s,d=new G,m=new Ft;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let g=r+p/i*o;d.x=h*Math.cos(g),d.y=h*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let y=0;y<s;y++){let p=y*(i+1);for(let g=0;g<i;g++){let x=g+p,v=x,b=x+i+1,_=x+i+2,S=x+1;a.push(v,b,S),a.push(b,_,S)}}this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Pi=class n extends he{constructor(t=new ln([new Ft(0,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(o,2));function l(u){let h=s.length/3,f=u.extractPoints(e),d=f.shape,m=f.holes;Hn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){let x=m[p];Hn.isClockWise(x)===!0&&(m[p]=x.reverse())}let y=Hn.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){let x=m[p];d=d.concat(x)}for(let p=0,g=d.length;p<g;p++){let x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,g=y.length;p<g;p++){let x=y[p],v=x[0]+h,b=x[1]+h,_=x[2]+h;i.push(v,b,_),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ex(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Ex(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Re=class n extends he{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new G,f=new G,d=[],m=[],y=[],p=[];for(let g=0;g<=i;g++){let x=[],v=g/i,b=o+v*a,_=t*Math.cos(b),S=Math.sqrt(t*t-_*_),C=0;g===0&&o===0?C=.5/e:g===i&&c===Math.PI&&(C=-.5/e);for(let M=0;M<=e;M++){let A=M/e,D=s+A*r;h.x=-S*Math.cos(D),h.y=_,h.z=S*Math.sin(D),m.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(A+C,1-v),x.push(l++)}u.push(x)}for(let g=0;g<i;g++)for(let x=0;x<e;x++){let v=u[g][x+1],b=u[g][x],_=u[g+1][x],S=u[g+1][x+1];(g!==0||o>0)&&d.push(v,b,S),(g!==i-1||c<Math.PI)&&d.push(b,_,S)}this.setIndex(d),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cn=class n extends he{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],h=[],f=new G,d=new G,m=new G;for(let y=0;y<=i;y++){let p=o+y/i*a;for(let g=0;g<=s;g++){let x=g/s*r;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(g/s),h.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let g=(s+1)*y+p-1,x=(s+1)*(y-1)+p-1,v=(s+1)*(y-1)+p,b=(s+1)*y+p;c.push(g,x,b),c.push(x,v,b)}this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var kr=class n extends he{constructor(t=new Vo(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new G,c=new G,l=new Ft,u=new G,h=[],f=[],d=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(d,2));function y(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),x(),g()}function p(v){u=t.getPointAt(v/e,u);let b=o.normals[v],_=o.binormals[v];for(let S=0;S<=s;S++){let C=S/s*Math.PI*2,M=Math.sin(C),A=-Math.cos(C);c.x=A*b.x+M*_.x,c.y=A*b.y+M*_.y,c.z=A*b.z+M*_.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let b=1;b<=s;b++){let _=(s+1)*(v-1)+(b-1),S=(s+1)*v+(b-1),C=(s+1)*v+b,M=(s+1)*(v-1)+b;m.push(_,S,M),m.push(S,C,M)}}function x(){for(let v=0;v<=e;v++)for(let b=0;b<=s;b++)l.x=v/e,l.y=b/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Rc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Ko=class extends he{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new G,r=new G;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],f=h.start,d=h.count;for(let m=f,y=f+d;m<y;m+=3)for(let p=0;p<3;p++){let g=a.getX(m+p),x=a.getX(m+(p+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,x),Cd(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,h=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Cd(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new jt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Cd(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function Ys(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Id(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Id(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function In(n){let t={};for(let e=0;e<n.length;e++){let i=Ys(n[e]);for(let s in i)t[s]=i[s]}return t}function Id(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Tx(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Lh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var ji={clone:Ys,merge:In},Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=Tx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new $t().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ic=class extends Be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xe=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Or=class extends di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Pc=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lc=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function $u(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ms=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nc=class extends ms{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qu:r=t,a=2*e-i;break;case th:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Qu:o=t,c=2*i-e;break;case th:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-e)/(s-e),y=m*m,p=y*m,g=-f*p+2*f*y-f*m,x=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*m+1,v=(-1-d)*p+(1.5+d)*y+.5*m,b=d*p-d*y;for(let _=0;_!==a;++_)r[_]=g*o[u+_]+x*o[l+_]+v*o[c+_]+b*o[h+_];return r}},Dc=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Fc=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Uc=class extends ms{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-e)/(s-e),y=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*y+o[c+p]*m;return r}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let y=o[l+m],p=o[c+m],g=d*f+m*2,x=h[g],v=h[g+1],b=t*f+m*2,_=u[b],S=u[b+1],C=Ix(i,e,x,_,s);r[m]=Ap(C,y,v,S,p)}return r}};function Ap(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Cx(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ix(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Ap(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Cx(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var jn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gr(e,this.TimeBufferType),this.values=gr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:gr(t.times,Array),values:gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),$u(t.settings)&&(i.settings={inTangents:gr(t.settings.inTangents,Array),outTangents:gr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Uc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case So:e=this.InterpolantFactoryMethodDiscrete;break;case yc:e=this.InterpolantFactoryMethodLinear;break;case cc:e=this.InterpolantFactoryMethodSmooth;break;case Ku:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ae("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return cc;case this.InterpolantFactoryMethodBezier:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;$u(this.settings)&&(Pd(this.settings.inTangents,t),Pd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ue("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ue("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){ue("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ue("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&yy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ue("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===cc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*i,f=h-i,d=h+i;for(let m=0;m!==i;++m){let y=e[h+m];if(y!==e[f+m]||y!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,$u(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=yc;var gs=class extends jn{constructor(t,e,i){super(t,e,i)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=So;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends jn{constructor(t,e,i,s){super(t,e,i,s)}};kc.prototype.ValueTypeName="color";var Oc=class extends jn{constructor(t,e,i,s){super(t,e,i,s)}};Oc.prototype.ValueTypeName="number";var Bc=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)gn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Jo=class extends jn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Bc(this.times,this.values,this.getValueSize(),t)}};Jo.prototype.ValueTypeName="quaternion";Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends jn{constructor(t,e,i){super(t,e,i)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=So;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends jn{constructor(t,e,i,s){super(t,e,i,s)}};zc.prototype.ValueTypeName="vector";var Hc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rp=new Hc,Gc=class{constructor(t){this.manager=t!==void 0?t:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Vs=class extends Br{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Zu=new Me,Ld=new G,Nd=new G,Qo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ld.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ld),Nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Zu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===wr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Zu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rc=new G,oc=new gn,Ei=new G,ta=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(rc,oc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,oc,Ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(rc,oc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,oc,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new G,Dd=new Ft,Fd=new Ft,Dn=class extends ta{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,e){return this.getViewBounds(t,Dd,Fd),e.subVectors(Fd,Dd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rh=class extends Qo{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}},ea=class extends Br{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xs=class extends ta{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},oh=class extends Qo{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends Br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new oh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var na=class extends he{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var yr=-90,xr=1,Vc=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(yr,xr,t,e);s.layers=this.layers,this.add(s);let r=new Dn(yr,xr,t,e);r.layers=this.layers,this.add(r);let o=new Dn(yr,xr,t,e);o.layers=this.layers,this.add(o);let a=new Dn(yr,xr,t,e);a.layers=this.layers,this.add(a);let c=new Dn(yr,xr,t,e);c.layers=this.layers,this.add(c);let l=new Dn(yr,xr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Wc=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Nh="\\[\\]\\.:\\/",Px=new RegExp("["+Nh+"]","g"),Dh="[^"+Nh+"]",Lx="[^"+Nh.replace("\\.","")+"]",Nx=/((?:WC+[\/:])*)/.source.replace("WC",Dh),Dx=/(WCOD+)?/.source.replace("WCOD",Lx),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),Ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),kx=new RegExp("^"+Nx+Dx+Fx+Ux+"$"),Ox=["material","materials","bones","map"],ah=class{constructor(t,e,i){let s=i||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Px,"")}static parseTrackName(t){let e=kx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ox.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ue("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=ah;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rT=new Float32Array(1);var vs=class extends Lo{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Ud=new Me,_s=class{constructor(t,e,i=0,s=1/0){this.ray=new Os(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ud.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ud),this}intersectObject(t,e=!0,i=[]){return ch(t,this,i,e),i.sort(kd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ch(t[s],this,i,e);return i.sort(kd),i}};function kd(n,t){return n.distance-t.distance}function ch(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ch(r[o],t,e,!0)}}var lh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var Od=new G,ac=new G,br=new G,vr=new G,ju=new G,Bx=new G,zx=new G,ia=class{constructor(t=new G,e=new G){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Od.subVectors(t,this.start),ac.subVectors(this.end,this.start);let i=ac.dot(ac);if(i===0)return 0;let r=ac.dot(Od)/i;return e&&(r=de(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Bx,i=zx){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;br.subVectors(l,a),vr.subVectors(u,c),ju.subVectors(a,c);let h=br.dot(br),f=vr.dot(vr),d=vr.dot(ju);if(h<=s&&f<=s)return e.copy(a),i.copy(c),e.sub(i),e.dot(e);if(h<=s)r=0,o=d/f,o=de(o,0,1);else{let m=br.dot(ju);if(f<=s)o=0,r=de(-m/h,0,1);else{let y=br.dot(vr),p=h*f-y*y;p!==0?r=de((y*d-m*f)/p,0,1):r=0,o=(y*r+d)/f,o<0?(o=0,r=de(-m/h,0,1)):o>1&&(o=1,r=de((y-m)/h,0,1))}}return e.copy(a).addScaledVector(br,r),i.copy(c).addScaledVector(vr,o),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Fh(n,t,e,i){let s=Hx(i);switch(e){case Th:return n*t;case Jc:return n*t/s.components*s.byteLength;case Qc:return n*t/s.components*s.byteLength;case Ts:return n*t*2/s.components*s.byteLength;case tl:return n*t*2/s.components*s.byteLength;case Ah:return n*t*3/s.components*s.byteLength;case si:return n*t*4/s.components*s.byteLength;case el:return n*t*4/s.components*s.byteLength;case aa:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case la:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(n,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(n,8)*Math.max(t,8)/2;case ol:case al:case ll:case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cl:case ha:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Tl:case Al:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Cl:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*8;case fa:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hx(n){switch(n){case Wn:case Mh:return{byteLength:1,components:1};case Gr:case Sh:case yi:return{byteLength:2,components:1};case jc:case Kc:return{byteLength:2,components:4};case gi:case Zc:case ii:return{byteLength:4,components:1};case wh:case Eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function qx(n){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],y=h[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let y=h[d];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$x=`#ifdef USE_ALPHAHASH
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
#endif`,Zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qx=`#ifdef USE_AOMAP
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
#endif`,tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eb=`#ifdef USE_BATCHING
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
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ob=`#ifdef USE_IRIDESCENCE
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
#endif`,ab=`#ifdef USE_BUMPMAP
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gb=`#define PI 3.141592653589793
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
} // validated`,yb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xb=`vec3 transformedNormal = objectNormal;
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
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ob=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bb=`#ifdef USE_ENVMAP
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
#endif`,zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wb=`PhysicalMaterial material;
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
#endif`,Xb=`uniform sampler2D dfgLUT;
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
}`,qb=`
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i1=`#if defined( USE_POINTS_UV )
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
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`#ifdef USE_MORPHTARGETS
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
#endif`,u1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,g1=`#ifdef USE_NORMALMAP
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
#endif`,y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L1=`float getShadowMask() {
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
}`,N1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
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
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,G1=`#ifdef USE_TRANSMISSION
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$1=`uniform sampler2D t2D;
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`#include <common>
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
}`,tv=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,nv=`#define DISTANCE
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`uniform float scale;
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,cv=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,uv=`#define LAMBERT
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
}`,hv=`#define MATCAP
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
}`,fv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,pv=`#define NORMAL
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
}`,mv=`#define PHONG
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
}`,gv=`#define PHONG
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
}`,yv=`#define STANDARD
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
}`,xv=`#define STANDARD
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
}`,bv=`#define TOON
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
}`,vv=`#define TOON
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
}`,_v=`uniform float size;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,wv=`uniform vec3 color;
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
}`,Ev=`uniform float rotation;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Yx,alphahash_pars_fragment:$x,alphamap_fragment:Zx,alphamap_pars_fragment:jx,alphatest_fragment:Kx,alphatest_pars_fragment:Jx,aomap_fragment:Qx,aomap_pars_fragment:tb,batching_pars_vertex:eb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:sb,bsdfs:rb,iridescence_fragment:ob,bumpmap_pars_fragment:ab,clipping_planes_fragment:cb,clipping_planes_pars_fragment:lb,clipping_planes_pars_vertex:ub,clipping_planes_vertex:hb,color_fragment:fb,color_pars_fragment:db,color_pars_vertex:pb,color_vertex:mb,common:gb,cube_uv_reflection_fragment:yb,defaultnormal_vertex:xb,displacementmap_pars_vertex:bb,displacementmap_vertex:vb,emissivemap_fragment:_b,emissivemap_pars_fragment:Mb,colorspace_fragment:Sb,colorspace_pars_fragment:wb,envmap_fragment:Eb,envmap_common_pars_fragment:Tb,envmap_pars_fragment:Ab,envmap_pars_vertex:Rb,envmap_physical_pars_fragment:Bb,envmap_vertex:Cb,fog_vertex:Ib,fog_pars_vertex:Pb,fog_fragment:Lb,fog_pars_fragment:Nb,gradientmap_pars_fragment:Db,lightmap_pars_fragment:Fb,lights_lambert_fragment:Ub,lights_lambert_pars_fragment:kb,lights_pars_begin:Ob,lights_toon_fragment:zb,lights_toon_pars_fragment:Hb,lights_phong_fragment:Gb,lights_phong_pars_fragment:Vb,lights_physical_fragment:Wb,lights_physical_pars_fragment:Xb,lights_fragment_begin:qb,lights_fragment_maps:Yb,lights_fragment_end:$b,lightprobes_pars_fragment:Zb,logdepthbuf_fragment:jb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Jb,logdepthbuf_vertex:Qb,map_fragment:t1,map_pars_fragment:e1,map_particle_fragment:n1,map_particle_pars_fragment:i1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:r1,morphinstance_vertex:o1,morphcolor_vertex:a1,morphnormal_vertex:c1,morphtarget_pars_vertex:l1,morphtarget_vertex:u1,normal_fragment_begin:h1,normal_fragment_maps:f1,normal_pars_fragment:d1,normal_pars_vertex:p1,normal_vertex:m1,normalmap_pars_fragment:g1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:v1,opaque_fragment:_1,packing:M1,premultiplied_alpha_fragment:S1,project_vertex:w1,dithering_fragment:E1,dithering_pars_fragment:T1,roughnessmap_fragment:A1,roughnessmap_pars_fragment:R1,shadowmap_pars_fragment:C1,shadowmap_pars_vertex:I1,shadowmap_vertex:P1,shadowmask_pars_fragment:L1,skinbase_vertex:N1,skinning_pars_vertex:D1,skinning_vertex:F1,skinnormal_vertex:U1,specularmap_fragment:k1,specularmap_pars_fragment:O1,tonemapping_fragment:B1,tonemapping_pars_fragment:z1,transmission_fragment:H1,transmission_pars_fragment:G1,uv_pars_fragment:V1,uv_pars_vertex:W1,uv_vertex:X1,worldpos_vertex:q1,background_vert:Y1,background_frag:$1,backgroundCube_vert:Z1,backgroundCube_frag:j1,cube_vert:K1,cube_frag:J1,depth_vert:Q1,depth_frag:tv,distance_vert:ev,distance_frag:nv,equirect_vert:iv,equirect_frag:sv,linedashed_vert:rv,linedashed_frag:ov,meshbasic_vert:av,meshbasic_frag:cv,meshlambert_vert:lv,meshlambert_frag:uv,meshmatcap_vert:hv,meshmatcap_frag:fv,meshnormal_vert:dv,meshnormal_frag:pv,meshphong_vert:mv,meshphong_frag:gv,meshphysical_vert:yv,meshphysical_frag:xv,meshtoon_vert:bv,meshtoon_frag:vv,points_vert:_v,points_frag:Mv,shadow_vert:Sv,shadow_frag:wv,sprite_vert:Ev,sprite_frag:Tv},Gt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},On={basic:{uniforms:In([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:In([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:In([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:In([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:In([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new $t(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:In([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:In([Gt.points,Gt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:In([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:In([Gt.common,Gt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:In([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:In([Gt.sprite,Gt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:In([Gt.common,Gt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:In([Gt.lights,Gt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};On.physical={uniforms:In([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var Dl={r:0,b:0,g:0},Av=new Me,Kp=new pe;Kp.set(-1,0,0,0,1,0,0,0,1);function Rv(n,t,e,i,s,r){let o=new $t(0),a=s===!0?0:1,c,l,u=null,h=0,f=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let b=x.backgroundBlurriness>0;v=t.get(v,b)}return v}function m(x){let v=!1,b=d(x);b===null?p(o,a):b&&b.isColor&&(p(b,1),v=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(x,v){let b=d(v);b&&(b.isCubeTexture||b.mapping===ra)?(l===void 0&&(l=new ce(new Ae(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:Ys(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(v.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kp),l.material.toneMapped=_e.getTransfer(b.colorSpace)!==Ie,(u!==b||h!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ce(new Rn(2,2),new Be({name:"BackgroundMaterial",uniforms:Ys(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_e.getTransfer(b.colorSpace)!==Ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Dl,Lh(n)),e.buffers.color.setClear(Dl.r,Dl.g,Dl.b,v,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),a=v,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:y,dispose:g}}function Cv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(N,O,B,L,k){let H=!1,W=h(N,L,B,O);r!==W&&(r=W,l(r.object)),H=d(N,L,B,k),H&&m(N,L,B,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,b(N,O,B,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,O,B,L){let k=L.wireframe===!0,H=i[O.id];H===void 0&&(H={},i[O.id]=H);let W=N.isInstancedMesh===!0?N.id:0,et=H[W];et===void 0&&(et={},H[W]=et);let K=et[B.id];K===void 0&&(K={},et[B.id]=K);let Z=K[k];return Z===void 0&&(Z=f(c()),K[k]=Z),Z}function f(N){let O=[],B=[],L=[];for(let k=0;k<e;k++)O[k]=0,B[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:L,object:N,attributes:{},index:null}}function d(N,O,B,L){let k=r.attributes,H=O.attributes,W=0,et=B.getAttributes();for(let K in et)if(et[K].location>=0){let nt=k[K],Tt=H[K];if(Tt===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Tt=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Tt=N.instanceColor)),nt===void 0||nt.attribute!==Tt||Tt&&nt.data!==Tt.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function m(N,O,B,L){let k={},H=O.attributes,W=0,et=B.getAttributes();for(let K in et)if(et[K].location>=0){let nt=H[K];nt===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor));let Tt={};Tt.attribute=nt,nt&&nt.data&&(Tt.data=nt.data),k[K]=Tt,W++}r.attributes=k,r.attributesNum=W,r.index=L}function y(){let N=r.newAttributes;for(let O=0,B=N.length;O<B;O++)N[O]=0}function p(N){g(N,0)}function g(N,O){let B=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;B[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),k[N]!==O&&(n.vertexAttribDivisor(N,O),k[N]=O)}function x(){let N=r.newAttributes,O=r.enabledAttributes;for(let B=0,L=O.length;B<L;B++)O[B]!==N[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function v(N,O,B,L,k,H,W){W===!0?n.vertexAttribIPointer(N,O,B,k,H):n.vertexAttribPointer(N,O,B,L,k,H)}function b(N,O,B,L){y();let k=L.attributes,H=B.getAttributes(),W=O.defaultAttributeValues;for(let et in H){let K=H[et];if(K.location>=0){let Z=k[et];if(Z===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),Z!==void 0){let nt=Z.normalized,Tt=Z.itemSize,At=t.get(Z);if(At===void 0)continue;let Mt=At.buffer,_t=At.type,Lt=At.bytesPerElement,ot=_t===n.INT||_t===n.UNSIGNED_INT||Z.gpuType===Zc;if(Z.isInterleavedBufferAttribute){let ht=Z.data,St=ht.stride,zt=Z.offset;if(ht.isInstancedInterleavedBuffer){for(let Ot=0;Ot<K.locationSize;Ot++)g(K.location+Ot,ht.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ot=0;Ot<K.locationSize;Ot++)p(K.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let Ot=0;Ot<K.locationSize;Ot++)v(K.location+Ot,Tt/K.locationSize,_t,nt,St*Lt,(zt+Tt/K.locationSize*Ot)*Lt,ot)}else{if(Z.isInstancedBufferAttribute){for(let ht=0;ht<K.locationSize;ht++)g(K.location+ht,Z.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ht=0;ht<K.locationSize;ht++)p(K.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let ht=0;ht<K.locationSize;ht++)v(K.location+ht,Tt/K.locationSize,_t,nt,Tt*Lt,Tt/K.locationSize*ht*Lt,ot)}}else if(W!==void 0){let nt=W[et];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(K.location,nt);break;case 3:n.vertexAttrib3fv(K.location,nt);break;case 4:n.vertexAttrib4fv(K.location,nt);break;default:n.vertexAttrib1fv(K.location,nt)}}}}x()}function _(){A();for(let N in i){let O=i[N];for(let B in O){let L=O[B];for(let k in L){let H=L[k];for(let W in H)u(H[W].object),delete H[W];delete L[k]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;let O=i[N.id];for(let B in O){let L=O[B];for(let k in L){let H=L[k];for(let W in H)u(H[W].object),delete H[W];delete L[k]}}delete i[N.id]}function C(N){for(let O in i){let B=i[O];for(let L in B){let k=B[L];if(k[N.id]===void 0)continue;let H=k[N.id];for(let W in H)u(H[W].object),delete H[W];delete k[N.id]}}}function M(N){for(let O in i){let B=i[O],L=N.isInstancedMesh===!0?N.id:0,k=B[L];if(k!==void 0){for(let H in k){let W=k[H];for(let et in W)u(W[et].object),delete W[et];delete k[H]}delete B[L],Object.keys(B).length===0&&delete i[O]}}}function A(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:D,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function Iv(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Pv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==si&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let M=C===yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Wn&&C!==ii&&!M&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(ae("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:b,maxSamples:_,samples:S}}function Lv(n){let t=this,e=null,i=0,s=!1,r=!1,o=new $n,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,g=n.get(h);if(!s||m===null||m.length===0||r&&!p)r?u(null):l();else{let x=r?0:i,v=x*4,b=g.clippingState||null;c.value=b,b=u(m,f,v,d);for(let _=0;_!==v;++_)b[_]=e[_];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,m){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=c.value,m!==!0||p===null){let g=d+y*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,b=d;v!==y;++v,b+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Xr=4,Nv=6,Dv=20,Fv=256,pa=new xs,Cp=new $t,Uh=null,kh=0,Oh=0,Bh=!1,Uv=new G,$s=new G,Ul=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Uv}=r;Uh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,kh,Oh),this._renderer.xr.enabled=Bh,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:yi,format:si,colorSpace:wo,depthBuffer:!1},s=Ip(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kv(r)),this._blurMaterial=Bv(r,t,e),this._ggxMaterial=Ov(r,t,e)}return s}_compileMaterial(t){let e=new ce(new he,t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,i,s,r){let c=new Dn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Cp),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new Ae,new Ne({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,g=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,g=!0):(p.color.copy(Cp),g=!0);for(let v=0;v<6;v++){let b=v%3;b===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):b===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));let _=this._cubeSize;Wr(s,b*_,v>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(y,c),h.render(t,c)}h.toneMapping=d,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ss||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Wr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,pa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:m}=this,y=this._sizeLods[i],p=3*y*(i>m-Xr?i-m+Xr:0),g=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,Wr(r,p,g,3*y,2*y),s.setRenderTarget(r),s.render(a,pa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,Wr(t,p,g,3*y,2*y),s.setRenderTarget(t),s.render(a,pa)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Xr?s-this._lodMax+Xr:0),f=4*(this._cubeSize-u);Wr(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(c,pa)}};function kv(n){let t=[],e=[],i=n,s=n-Xr+1+Nv;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,m=new Float32Array(d*f*h),y=new Float32Array(d*f*h);for(let g=0;g<h;g++){let x=g%3*2/3-1,v=g>2?0:-1,b=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];m.set(b,d*f*g);for(let _=0;_<f;_++){let S=u[_*2]*2-1,C=u[_*2+1]*2-1;g===0?$s.set(1,C,S):g===1?$s.set(-S,1,-C):g===2?$s.set(-S,C,1):g===3?$s.set(-1,C,-S):g===4?$s.set(-S,-1,C):$s.set(S,C,-1),$s.toArray(y,(g*f+_)*d)}}let p=new he;p.setAttribute("position",new Te(m,d)),p.setAttribute("outputDirection",new Te(y,d)),e.push(new ce(p,null)),i>Xr&&i--}return{lodMeshes:e,sizeLods:t}}function Ip(n,t,e){let i=new Gn(n,t,e);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ov(n,t,e){return new Be({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Bv(n,t,e){return new Be({name:"SphericalGaussianBlur",defines:{SAMPLES:Dv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pp(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Lp(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var kl=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Fo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:Li});r.uniforms.tEquirect.value=e;let o=new ce(s,r),a=e.minFilter;return e.minFilter===ws&&(e.minFilter=bn),new Vc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function zv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===qc||d===Yc)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let y=new kl(m.height);return y.fromEquirectangularTexture(n,f),t.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===qc||d===Yc,y=d===Ss||d===qs;if(m||y){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new Ul(n)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let x=f.image;return m&&x&&x.height>0||y&&x&&c(x)?(i===null&&(i=new Ul(n)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===qc?f.mapping=Ss:d===Yc&&(f.mapping=qs),f}function c(f){let d=0,m=6;for(let y=0;y<m;y++)f[y]!==void 0&&d++;return d===m}function l(f){let d=f.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Hv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Us("WebGLRenderer: "+i+" extension not supported."),s}}}function Gv(n,t,e,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,m=h.attributes.position,y=0;if(m===void 0)return;if(d!==null){let x=d.array;y=d.version;for(let v=0,b=x.length;v<b;v+=3){let _=x[v+0],S=x[v+1],C=x[v+2];f.push(_,S,S,C,C,_)}}else{let x=m.array;y=m.version;for(let v=0,b=x.length/3-1;v<b;v+=3){let _=v+0,S=v+1,C=v+2;f.push(_,S,S,C,C,_)}}let p=new(m.count>=65535?Po:Io)(f,1);p.version=y;let g=r.get(h);g&&t.remove(g),r.set(h,p)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Vv(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,r,h*o),e.update(f,i,1)}function l(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*o,d),e.update(f,i,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Wv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Xv(n,t,e){let i=new WeakMap,s=new Pe;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let A=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let b=a.attributes.position.count*v,_=1;b>t.maxTextureSize&&(_=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let S=new Float32Array(b*_*4*h),C=new Ro(S,b,_,h);C.type=ii,C.needsUpdate=!0;let M=v*4;for(let D=0;D<h;D++){let N=p[D],O=g[D],B=x[D],L=b*_*4*D;for(let k=0;k<N.count;k++){let H=k*M;d===!0&&(s.fromBufferAttribute(N,k),S[L+H+0]=s.x,S[L+H+1]=s.y,S[L+H+2]=s.z,S[L+H+3]=0),m===!0&&(s.fromBufferAttribute(O,k),S[L+H+4]=s.x,S[L+H+5]=s.y,S[L+H+6]=s.z,S[L+H+7]=0),y===!0&&(s.fromBufferAttribute(B,k),S[L+H+8]=s.x,S[L+H+9]=s.y,S[L+H+10]=s.z,S[L+H+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new Ft(b,_)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function qv(n,t,e,i,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Yv={[mh]:"LINEAR_TONE_MAPPING",[gh]:"REINHARD_TONE_MAPPING",[yh]:"CINEON_TONE_MAPPING",[sa]:"ACES_FILMIC_TONE_MAPPING",[bh]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[xh]:"CUSTOM_TONE_MAPPING"};function $v(n,t,e,i,s,r){let o=new Gn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new he;l.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new jt([0,2,0,0,2,0],2));let u=new Ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ce(l,u),f=new xs(-1,1,1,-1,0,1),d=null,m=null,y=!1,p,g=null,x=[],v=!1;this.setSize=function(b,_){o.setSize(b,_),a!==null&&a.setSize(b,_),c!==null&&c.setSize(b,_);for(let S=0;S<x.length;S++){let C=x[S];C.setSize&&C.setSize(b,_)}},this.setEffects=function(b){x=b,v=x.length>0&&x[0].isRenderPass===!0;let _=o.width,S=o.height;x.length>0&&a===null&&(a=new Gn(_,S,{type:yi,depthBuffer:!1,stencilBuffer:!1}),c=new Gn(_,S,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<x.length;C++){let M=x[C];M.setSize&&M.setSize(_,S)}},this.begin=function(b,_){if(y||b.toneMapping===mi&&x.length===0)return!1;if(g=_,_!==null){let S=_.width,C=_.height;(o.width!==S||o.height!==C)&&this.setSize(S,C)}return v===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=mi,!0},this.hasRenderPass=function(){return v},this.end=function(b,_){b.toneMapping=p,y=!0;let S=o,C=a;for(let M=0;M<x.length;M++){let A=x[M];A.enabled!==!1&&(A.render(b,C,S,_),A.needsSwap!==!1&&(S=C,C=C===a?c:a))}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,u.defines={},_e.getTransfer(d)===Ie&&(u.defines.SRGB_TRANSFER="");let M=Yv[m];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(g),b.render(h,f),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Jp=new Fn,Gh=new ps(1,1),Qp=new Ro,tm=new vc,em=new Fo,Np=[],Dp=[],Fp=new Float32Array(16),Up=new Float32Array(9),kp=new Float32Array(4);function Yr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Np[s];if(r===void 0&&(r=new Float32Array(s),Np[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function un(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function zl(n,t){let e=Dp[t];e===void 0&&(e=new Int32Array(t),Dp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function Kv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function Jv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function Qv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(un(e,i))return;kp.set(i),n.uniformMatrix2fv(this.addr,!1,kp),hn(e,i)}}function t_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(un(e,i))return;Up.set(i),n.uniformMatrix3fv(this.addr,!1,Up),hn(e,i)}}function e_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(un(e,i))return;Fp.set(i),n.uniformMatrix4fv(this.addr,!1,Fp),hn(e,i)}}function n_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function i_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function s_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function r_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function o_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function u_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gh.compareFunction=e.isReversedDepthBuffer()?Nl:Ll,r=Gh):r=Jp,e.setTexture2D(t||r,s)}function h_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||tm,s)}function f_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||em,s)}function d_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Qp,s)}function p_(n){switch(n){case 5126:return Zv;case 35664:return jv;case 35665:return Kv;case 35666:return Jv;case 35674:return Qv;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return c_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return d_}}function m_(n,t){n.uniform1fv(this.addr,t)}function g_(n,t){let e=Yr(t,this.size,2);n.uniform2fv(this.addr,e)}function y_(n,t){let e=Yr(t,this.size,3);n.uniform3fv(this.addr,e)}function x_(n,t){let e=Yr(t,this.size,4);n.uniform4fv(this.addr,e)}function b_(n,t){let e=Yr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function v_(n,t){let e=Yr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function __(n,t){let e=Yr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function M_(n,t){n.uniform1iv(this.addr,t)}function S_(n,t){n.uniform2iv(this.addr,t)}function w_(n,t){n.uniform3iv(this.addr,t)}function E_(n,t){n.uniform4iv(this.addr,t)}function T_(n,t){n.uniform1uiv(this.addr,t)}function A_(n,t){n.uniform2uiv(this.addr,t)}function R_(n,t){n.uniform3uiv(this.addr,t)}function C_(n,t){n.uniform4uiv(this.addr,t)}function I_(n,t,e){let i=this.cache,s=t.length,r=zl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gh:o=Jp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function P_(n,t,e){let i=this.cache,s=t.length,r=zl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tm,r[o])}function L_(n,t,e){let i=this.cache,s=t.length,r=zl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||em,r[o])}function N_(n,t,e){let i=this.cache,s=t.length,r=zl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qp,r[o])}function D_(n){switch(n){case 5126:return m_;case 35664:return g_;case 35665:return y_;case 35666:return x_;case 35674:return b_;case 35675:return v_;case 35676:return __;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return w_;case 35669:case 35673:return E_;case 5125:return T_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return N_}}var Vh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=p_(e.type)}},Wh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D_(e.type)}},Xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},zh=/(\w+)(\])?(\[|\.)?/g;function Op(n,t){n.seq.push(t),n.map[t.id]=t}function F_(n,t,e){let i=n.name,s=i.length;for(zh.lastIndex=0;;){let r=zh.exec(i),o=zh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Op(e,l===void 0?new Vh(a,n,t):new Wh(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Xh(a),Op(e,h)),e=h}}}var qr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);F_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Bp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var U_=37297,k_=0;function O_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var zp=new pe;function B_(n){_e._getMatrix(zp,_e.workingColorSpace,n);let t=`mat3( ${zp.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(n)){case Eo:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+O_(n.getShaderSource(t),a)}else return r}function z_(n,t){let e=B_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var H_={[mh]:"Linear",[gh]:"Reinhard",[yh]:"Cineon",[sa]:"ACESFilmic",[bh]:"AgX",[vh]:"Neutral",[xh]:"Custom"};function G_(n,t){let e=H_[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Fl=new G;function V_(){_e.getLuminanceCoefficients(Fl);let n=Fl.x.toFixed(4),t=Fl.y.toFixed(4),e=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function X_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function q_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ga(n){return n!==""}function Gp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(n){return n.replace(Y_,Z_)}var $_=new Map;function Z_(n,t){let e=xe[t];if(e===void 0){let i=$_.get(t);if(i!==void 0)e=xe[i],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qh(e)}var j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(n){return n.replace(j_,K_)}function K_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var J_={[Ws]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function Q_(n){return J_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tM={[Ss]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function eM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":tM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var nM={[qs]:"ENVMAP_MODE_REFRACTION"};function iM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":nM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sM={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[op]:"ENVMAP_BLENDING_MIX",[ap]:"ENVMAP_BLENDING_ADD"};function rM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sM[n.combine]||"ENVMAP_BLENDING_NONE"}function oM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function aM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Q_(e),l=eM(e),u=iM(e),h=rM(e),f=oM(e),d=W_(e),m=X_(r),y=s.createProgram(),p,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ga).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ga).join(`
`),g.length>0&&(g+=`
`)):(p=[Xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),g=[Xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?xe.tonemapping_pars_fragment:"",e.toneMapping!==mi?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),V_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),o=qh(o),o=Gp(o,e),o=Vp(o,e),a=qh(a),a=Gp(a,e),a=Vp(a,e),o=Wp(o),a=Wp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+p+o,b=x+g+a,_=Bp(s,s.VERTEX_SHADER,v),S=Bp(s,s.FRAGMENT_SHADER,b);s.attachShader(y,_),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(N){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(_)||"",L=s.getShaderInfoLog(S)||"",k=O.trim(),H=B.trim(),W=L.trim(),et=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,_,S);else{let Z=Hp(s,_,"vertex"),nt=Hp(s,S,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+Z+`
`+nt)}else k!==""?ae("WebGLProgram: Program Info Log:",k):(H===""||W==="")&&(K=!1);K&&(N.diagnostics={runnable:et,programLog:k,vertexShader:{log:H,prefix:p},fragmentShader:{log:W,prefix:g}})}s.deleteShader(_),s.deleteShader(S),M=new qr(s,y),A=q_(s,y)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,U_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=_,this.fragmentShader=S,this}var cM=0,Yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new $h(t),e.set(t,i)),i}},$h=class{constructor(t){this.id=cM++,this.code=t,this.usedTimes=0}};function lM(n){return n===Ts||n===ha||n===fa}function uM(n,t,e,i,s,r){let o=new Rr,a=new Yh,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function y(M,A,D,N,O,B){let L=N.fog,k=O.geometry,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,et=t.get(M.envMap||H,W),K=et&&et.mapping===ra?et.image.height:null,Z=d[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&ae("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Tt=nt!==void 0?nt.length:0,At=0;k.morphAttributes.position!==void 0&&(At=1),k.morphAttributes.normal!==void 0&&(At=2),k.morphAttributes.color!==void 0&&(At=3);let Mt,_t,Lt,ot;if(Z){let le=On[Z];Mt=le.vertexShader,_t=le.fragmentShader}else{Mt=M.vertexShader,_t=M.fragmentShader;let le=a.getVertexShaderStage(M),re=a.getFragmentShaderStage(M);a.update(M,le,re),Lt=le.id,ot=re.id}let ht=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),zt=O.isInstancedMesh===!0,Ot=O.isBatchedMesh===!0,q=!!M.map,yt=!!M.matcap,X=!!et,j=!!M.aoMap,st=!!M.lightMap,ct=!!M.bumpMap&&M.wireframe===!1,dt=!!M.normalMap,Ct=!!M.displacementMap,It=!!M.emissiveMap,Nt=!!M.metalnessMap,Bt=!!M.roughnessMap,Y=M.anisotropy>0,ie=M.clearcoat>0,qt=M.dispersion>0,z=M.retroreflectivity>0,T=M.iridescence>0,it=M.sheen>0,ft=M.transmission>0,xt=Y&&!!M.anisotropyMap,V=ie&&!!M.clearcoatMap,w=ie&&!!M.clearcoatNormalMap,E=ie&&!!M.clearcoatRoughnessMap,R=T&&!!M.iridescenceMap,F=T&&!!M.iridescenceThicknessMap,U=it&&!!M.sheenColorMap,Q=it&&!!M.sheenRoughnessMap,$=!!M.specularMap,ut=!!M.specularColorMap,lt=!!M.specularIntensityMap,Rt=ft&&!!M.transmissionMap,I=ft&&!!M.thicknessMap,J=!!M.gradientMap,tt=!!M.alphaMap,wt=M.alphaTest>0,Et=!!M.alphaHash,vt=!!M.extensions,Ut=mi;M.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ut=n.toneMapping);let kt={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Mt,fragmentShader:_t,defines:M.defines,customVertexShaderID:Lt,customFragmentShaderID:ot,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&O._colorsTexture!==null,instancing:zt,instancingColor:zt&&O.instanceColor!==null,instancingMorph:zt&&O.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:q,matcap:yt,envMap:X,envMapMode:X&&et.mapping,envMapCubeUVHeight:K,aoMap:j,lightMap:st,bumpMap:ct,normalMap:dt,displacementMap:Ct,emissiveMap:It,normalMapObjectSpace:dt&&M.normalMapType===up,normalMapTangentSpace:dt&&M.normalMapType===da,packedNormalMap:dt&&M.normalMapType===da&&lM(M.normalMap.format),metalnessMap:Nt,roughnessMap:Bt,anisotropy:Y,anisotropyMap:xt,clearcoat:ie,clearcoatMap:V,clearcoatNormalMap:w,clearcoatRoughnessMap:E,dispersion:qt,retroreflection:z,iridescence:T,iridescenceMap:R,iridescenceThicknessMap:F,sheen:it,sheenColorMap:U,sheenRoughnessMap:Q,specularMap:$,specularColorMap:ut,specularIntensityMap:lt,transmission:ft,transmissionMap:Rt,thicknessMap:I,gradientMap:J,opaque:M.transparent===!1&&M.blending===Hr&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:wt,alphaHash:Et,combine:M.combine,mapUv:q&&m(M.map.channel),aoMapUv:j&&m(M.aoMap.channel),lightMapUv:st&&m(M.lightMap.channel),bumpMapUv:ct&&m(M.bumpMap.channel),normalMapUv:dt&&m(M.normalMap.channel),displacementMapUv:Ct&&m(M.displacementMap.channel),emissiveMapUv:It&&m(M.emissiveMap.channel),metalnessMapUv:Nt&&m(M.metalnessMap.channel),roughnessMapUv:Bt&&m(M.roughnessMap.channel),anisotropyMapUv:xt&&m(M.anisotropyMap.channel),clearcoatMapUv:V&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:w&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:R&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:F&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:U&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Q&&m(M.sheenRoughnessMap.channel),specularMapUv:$&&m(M.specularMap.channel),specularColorMapUv:ut&&m(M.specularColorMap.channel),specularIntensityMapUv:lt&&m(M.specularIntensityMap.channel),transmissionMapUv:Rt&&m(M.transmissionMap.channel),thicknessMapUv:I&&m(M.thicknessMap.channel),alphaMapUv:tt&&m(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(dt||Y),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(q||tt),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&dt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:St,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:At,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:q&&M.map.isVideoTexture===!0&&_e.getTransfer(M.map.colorSpace)===Ie,decodeVideoTextureEmissive:It&&M.emissiveMap.isVideoTexture===!0&&_e.getTransfer(M.emissiveMap.colorSpace)===Ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qe,flipSided:M.side===Un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:vt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&M.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function p(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)A.push(D),A.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(g(A,M),x(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function g(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function v(M){let A=d[M.type],D;if(A){let N=On[A];D=ji.clone(N.uniforms)}else D=M.uniforms;return D}function b(M,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new aM(n,A,M,s),l.push(D),u.set(A,D)),D}function _(M){if(--M.usedTimes===0){let A=l.indexOf(M);l[A]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function S(M){a.remove(M)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:_,releaseShaderCache:S,programs:l,dispose:C}}function hM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function fM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function qp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,y,p,g){let x=n[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:g},n[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=m,x.materialVariant=o(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=p,x.group=g),t++,x}function c(f,d,m,y,p,g,x){x.reversedDepth===!0&&(p=-p);let v=a(f,d,m,y,p,g);m.transmission>0?i.push(v):m.transparent===!0?s.push(v):e.push(v)}function l(f,d,m,y,p,g){let x=a(f,d,m,y,p,g);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||fM),i.length>1&&i.sort(d||qp),s.length>1&&s.sort(d||qp)}function h(){for(let f=t,d=n.length;f<d;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function dM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Yp,n.set(i,[o])):s>=r.length?(o=new Yp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function pM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new $t};break;case"SpotLight":e={position:new G,direction:new G,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function mM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var gM=0;function yM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xM(n){let t=new pM,e=mM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);let s=new G,r=new Me,o=new Me;function a(l){let u=0,h=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,m=0,y=0,p=0,g=0,x=0,v=0,b=0,_=0,S=0,C=0,M=0,A=0,D=0;l.sort(yM);for(let O=0,B=l.length;O<B;O++){let L=l[O],k=L.color,H=L.intensity,W=L.distance,et=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ts?et=L.shadow.map.texture:et=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=k.r*H,h+=k.g*H,f+=k.b*H;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],H);D++}else if(L.isSunLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,nt=e.get(L);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[m]=nt,i.sunShadowMap[m]=et;let Tt=Z.getViewportCount();for(let At=0;At<Tt;At++)i.sunShadowMatrix[y+At]=Z.getMatrix(At),i.sunShadowCascade[y+At]=Z._cascadeData[At];y+=Tt,m++}i.sun[d]=K,d++}else if(L.isDirectionalLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,nt=e.get(L);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,i.directionalShadow[p]=nt,i.directionalShadowMap[p]=et,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=K,p++}else if(L.isSpotLight){let K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(k).multiplyScalar(H),K.distance=W,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[x]=K;let Z=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,Z.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=Z.matrix,L.castShadow){let nt=e.get(L);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,i.spotShadow[x]=nt,i.spotShadowMap[x]=et,C++}x++}else if(L.isRectAreaLight){let K=t.get(L);K.color.copy(k).multiplyScalar(H),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=K,v++}else if(L.isPointLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let Z=L.shadow,nt=e.get(L);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,nt.shadowCameraNear=Z.camera.near,nt.shadowCameraFar=Z.camera.far,i.pointShadow[g]=nt,i.pointShadowMap[g]=et,i.pointShadowMatrix[g]=L.shadow.matrix,S++}i.point[g]=K,g++}else if(L.isHemisphereLight){let K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(H),K.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[b]=K,b++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Gt.LTC_FLOAT_1,i.rectAreaLTC2=Gt.LTC_FLOAT_2):(i.rectAreaLTC1=Gt.LTC_HALF_1,i.rectAreaLTC2=Gt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let N=i.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==v||N.hemiLength!==b||N.numSunShadows!==m||N.numDirectionalShadows!==_||N.numPointShadows!==S||N.numSpotShadows!==C||N.numSpotMaps!==M||N.numLightProbes!==D)&&(i.sun.length=d,i.directional.length=p,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=b,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=D,N.sunLength=d,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=v,N.hemiLength=b,N.numSunShadows=m,N.numDirectionalShadows=_,N.numPointShadows=S,N.numSpotShadows=C,N.numSpotMaps=M,N.numLightProbes=D,i.version=gM++)}function c(l,u){let h=0,f=0,d=0,m=0,y=0,p=0,g=u.matrixWorldInverse;for(let x=0,v=l.length;x<v;x++){let b=l[x];if(b.isSunLight){let _=i.sun[h];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),h++}else if(b.isDirectionalLight){let _=i.directional[f];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(b.isSpotLight){let _=i.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let _=i.rectArea[y];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:i}}function $p(n){let t=new xM(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function bM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new $p(n),t.set(s,[a])):r>=o.length?(a=new $p(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
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
}`,MM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],SM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Zp=new Me,ma=new G,Hh=new G;function wM(n,t,e){let i=new Pr,s=new Ft,r=new Ft,o=new Pe,a=new Pc,c=new Lc,l={},u=e.maxTextureSize,h={[Ms]:Un,[Un]:Ms,[Qe]:Qe},f=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:vM,fragmentShader:_M}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new he;m.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ce(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let g=this.type;this.render=function(S,C,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Hd&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ws);let A=n.getRenderTarget(),D=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Li),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=g!==this.type;B&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=S.length;L<k;L++){let H=S[L],W=H.shadow;if(W===void 0){ae("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let et=W.getFrameExtents();s.multiply(et),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,W.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=K,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===zr){if(H.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Gn(s.x,s.y,{format:Ts,type:yi,minFilter:bn,magFilter:bn,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new ps(s.x,s.y,ii),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=Ri,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn}else H.isPointLight?(W.map=new kl(s.x),W.map.depthTexture=new wc(s.x,gi)):(W.map=new Gn(s.x,s.y),W.map.depthTexture=new ps(s.x,s.y,gi)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=Ri,this.type===Ws?(W.map.depthTexture.compareFunction=K?Nl:Ll,W.map.depthTexture.minFilter=bn,W.map.depthTexture.magFilter=bn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();H.isPointLight!==!0&&W.updateMatrices(H,M);for(let nt=0;nt<Z;nt++){let Tt=W.getCamera(nt);if(H.isPointLight){let At=W.camera,Mt=W.matrix,_t=H.distance||At.far;_t!==At.far&&(At.far=_t,At.updateProjectionMatrix()),ma.setFromMatrixPosition(H.matrixWorld),At.position.copy(ma),Hh.copy(At.position),Hh.add(MM[nt]),At.up.copy(SM[nt]),At.lookAt(Hh),At.updateMatrixWorld(),Mt.makeTranslation(-ma.x,-ma.y,-ma.z),Zp.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Zp,At.coordinateSystem,At.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(W.map),n.clear());let At=W.getViewport(nt);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),O.viewport(o)}i=W.getFrustum(nt),b(C,M,Tt,H,this.type)}W.isPointLightShadow!==!0&&this.type===zr&&x(W,M),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(A,D,N)};function x(S,C){let M=t.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Gn(s.x,s.y,{format:Ts,type:yi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(C,null,M,f,y,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(C,null,M,d,y,null)}function v(S,C,M,A){let D=null,N=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)D=N;else if(D=M.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=D.uuid,B=C.uuid,L=l[O];L===void 0&&(L={},l[O]=L);let k=L[B];k===void 0&&(k=D.clone(),L[B]=k,C.addEventListener("dispose",_)),D=k}if(D.visible=C.visible,D.wireframe=C.wireframe,A===zr?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:h[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,M.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let O=n.properties.get(D);O.light=M}return D}function b(S,C,M,A,D){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&D===zr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let B=t.update(S),L=S.material;if(Array.isArray(L)){let k=B.groups;for(let H=0,W=k.length;H<W;H++){let et=k[H],K=L[et.materialIndex];if(K&&K.visible){let Z=v(S,K,A,D);S.onBeforeShadow(n,S,C,M,B,Z,et),n.renderBufferDirect(M,null,B,Z,S,et),S.onAfterShadow(n,S,C,M,B,Z,et)}}}else if(L.visible){let k=v(S,L,A,D);S.onBeforeShadow(n,S,C,M,B,k,null),n.renderBufferDirect(M,null,B,k,S,null),S.onAfterShadow(n,S,C,M,B,k,null)}}let O=S.children;for(let B=0,L=O.length;B<L;B++)b(O[B],C,M,A,D)}function _(S){S.target.removeEventListener("dispose",_);for(let M in l){let A=l[M],D=S.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function EM(n,t){function e(){let I=!1,J=new Pe,tt=null,wt=new Pe(0,0,0,0);return{setMask:function(Et){tt!==Et&&!I&&(n.colorMask(Et,Et,Et,Et),tt=Et)},setLocked:function(Et){I=Et},setClear:function(Et,vt,Ut,kt,le){le===!0&&(Et*=kt,vt*=kt,Ut*=kt),J.set(Et,vt,Ut,kt),wt.equals(J)===!1&&(n.clearColor(Et,vt,Ut,kt),wt.copy(J))},reset:function(){I=!1,tt=null,wt.set(-1,0,0,0)}}}function i(){let I=!1,J=!1,tt=null,wt=null,Et=null;return{setReversed:function(vt){if(J!==vt){let Ut=t.get("EXT_clip_control");vt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),J=vt;let kt=Et;Et=null,this.setClear(kt)}},getReversed:function(){return J},setTest:function(vt){vt?ht(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(vt){tt!==vt&&!I&&(n.depthMask(vt),tt=vt)},setFunc:function(vt){if(J&&(vt=_p[vt]),wt!==vt){switch(vt){case uc:n.depthFunc(n.NEVER);break;case hc:n.depthFunc(n.ALWAYS);break;case fc:n.depthFunc(n.LESS);break;case Mr:n.depthFunc(n.LEQUAL);break;case dc:n.depthFunc(n.EQUAL);break;case pc:n.depthFunc(n.GEQUAL);break;case Sr:n.depthFunc(n.GREATER);break;case mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=vt}},setLocked:function(vt){I=vt},setClear:function(vt){Et!==vt&&(Et=vt,J&&(vt=1-vt),n.clearDepth(vt))},reset:function(){I=!1,tt=null,wt=null,Et=null,J=!1}}}function s(){let I=!1,J=null,tt=null,wt=null,Et=null,vt=null,Ut=null,kt=null,le=null;return{setTest:function(re){I||(re?ht(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(re){J!==re&&!I&&(n.stencilMask(re),J=re)},setFunc:function(re,Se,Ee){(tt!==re||wt!==Se||Et!==Ee)&&(n.stencilFunc(re,Se,Ee),tt=re,wt=Se,Et=Ee)},setOp:function(re,Se,Ee){(vt!==re||Ut!==Se||kt!==Ee)&&(n.stencilOp(re,Se,Ee),vt=re,Ut=Se,kt=Ee)},setLocked:function(re){I=re},setClear:function(re){le!==re&&(n.clearStencil(re),le=re)},reset:function(){I=!1,J=null,tt=null,wt=null,Et=null,vt=null,Ut=null,kt=null,le=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],y=null,p=!1,g=null,x=null,v=null,b=null,_=null,S=null,C=null,M=new $t(0,0,0),A=0,D=!1,N=null,O=null,B=null,L=null,k=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,et=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=et>=1):K.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=et>=2);let Z=null,nt={},Tt=n.getParameter(n.SCISSOR_BOX),At=n.getParameter(n.VIEWPORT),Mt=new Pe().fromArray(Tt),_t=new Pe().fromArray(At);function Lt(I,J,tt,wt){let Et=new Uint8Array(4),vt=n.createTexture();n.bindTexture(I,vt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<tt;Ut++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(J+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return vt}let ot={};ot[n.TEXTURE_2D]=Lt(n.TEXTURE_2D,n.TEXTURE_2D,1),ot[n.TEXTURE_CUBE_MAP]=Lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[n.TEXTURE_2D_ARRAY]=Lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ot[n.TEXTURE_3D]=Lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(Mr),ct(!1),dt(uh),ht(n.CULL_FACE),j(Li);function ht(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function St(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function zt(I,J){return f[I]!==J?(n.bindFramebuffer(I,J),f[I]=J,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=J),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=J),!0):!1}function Ot(I,J){let tt=m,wt=!1;if(I){tt=d.get(J),tt===void 0&&(tt=[],d.set(J,tt));let Et=I.textures;if(tt.length!==Et.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Ut=Et.length;vt<Ut;vt++)tt[vt]=n.COLOR_ATTACHMENT0+vt;tt.length=Et.length,wt=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,wt=!0);wt&&n.drawBuffers(tt)}function q(I){return y!==I?(n.useProgram(I),y=I,!0):!1}let yt={[Xs]:n.FUNC_ADD,[Vd]:n.FUNC_SUBTRACT,[Wd]:n.FUNC_REVERSE_SUBTRACT};yt[Xd]=n.MIN,yt[qd]=n.MAX;let X={[Yd]:n.ZERO,[$d]:n.ONE,[Zd]:n.SRC_COLOR,[dh]:n.SRC_ALPHA,[ep]:n.SRC_ALPHA_SATURATE,[Qd]:n.DST_COLOR,[Kd]:n.DST_ALPHA,[jd]:n.ONE_MINUS_SRC_COLOR,[ph]:n.ONE_MINUS_SRC_ALPHA,[tp]:n.ONE_MINUS_DST_COLOR,[Jd]:n.ONE_MINUS_DST_ALPHA,[np]:n.CONSTANT_COLOR,[ip]:n.ONE_MINUS_CONSTANT_COLOR,[sp]:n.CONSTANT_ALPHA,[rp]:n.ONE_MINUS_CONSTANT_ALPHA};function j(I,J,tt,wt,Et,vt,Ut,kt,le,re){if(I===Li){p===!0&&(St(n.BLEND),p=!1);return}if(p===!1&&(ht(n.BLEND),p=!0),I!==Gd){if(I!==g||re!==D){if((x!==Xs||_!==Xs)&&(n.blendEquation(n.FUNC_ADD),x=Xs,_=Xs),re)switch(I){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $i:n.blendFunc(n.ONE,n.ONE);break;case hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ue("WebGLState: Invalid blending: ",I);break}else switch(I){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hh:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",I);break}v=null,b=null,S=null,C=null,M.set(0,0,0),A=0,g=I,D=re}return}Et=Et||J,vt=vt||tt,Ut=Ut||wt,(J!==x||Et!==_)&&(n.blendEquationSeparate(yt[J],yt[Et]),x=J,_=Et),(tt!==v||wt!==b||vt!==S||Ut!==C)&&(n.blendFuncSeparate(X[tt],X[wt],X[vt],X[Ut]),v=tt,b=wt,S=vt,C=Ut),(kt.equals(M)===!1||le!==A)&&(n.blendColor(kt.r,kt.g,kt.b,le),M.copy(kt),A=le),g=I,D=!1}function st(I,J){I.side===Qe?St(n.CULL_FACE):ht(n.CULL_FACE);let tt=I.side===Un;J&&(tt=!tt),ct(tt),I.blending===Hr&&I.transparent===!1?j(Li):j(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let wt=I.stencilWrite;a.setTest(wt),wt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),It(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(I){N!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),N=I)}function dt(I){I!==Bd?(ht(n.CULL_FACE),I!==O&&(I===uh?n.cullFace(n.BACK):I===zd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),O=I}function Ct(I){I!==B&&(W&&n.lineWidth(I),B=I)}function It(I,J,tt){I?(ht(n.POLYGON_OFFSET_FILL),(L!==J||k!==tt)&&(L=J,k=tt,o.getReversed()&&(J=-J),n.polygonOffset(J,tt))):St(n.POLYGON_OFFSET_FILL)}function Nt(I){I?ht(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function Bt(I){I===void 0&&(I=n.TEXTURE0+H-1),Z!==I&&(n.activeTexture(I),Z=I)}function Y(I,J,tt){tt===void 0&&(Z===null?tt=n.TEXTURE0+H-1:tt=Z);let wt=nt[tt];wt===void 0&&(wt={type:void 0,texture:void 0},nt[tt]=wt),(wt.type!==I||wt.texture!==J)&&(Z!==tt&&(n.activeTexture(tt),Z=tt),n.bindTexture(I,J||ot[I]),wt.type=I,wt.texture=J)}function ie(){let I=nt[Z];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function qt(){try{n.compressedTexImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function T(){try{n.texSubImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function it(){try{n.texSubImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function ft(){try{n.compressedTexSubImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function xt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function V(){try{n.texStorage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function w(){try{n.texStorage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function E(){try{n.texImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function R(){try{n.texImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function F(I){return h[I]!==void 0?h[I]:n.getParameter(I)}function U(I,J){h[I]!==J&&(n.pixelStorei(I,J),h[I]=J)}function Q(I){Mt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Mt.copy(I))}function $(I){_t.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),_t.copy(I))}function ut(I,J){let tt=l.get(J);tt===void 0&&(tt=new WeakMap,l.set(J,tt));let wt=tt.get(I);wt===void 0&&(wt=n.getUniformBlockIndex(J,I.name),tt.set(I,wt))}function lt(I,J){let wt=l.get(J).get(I);c.get(J)!==wt&&(n.uniformBlockBinding(J,wt,I.__bindingPointIndex),c.set(J,wt))}function Rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Z=null,nt={},f={},d=new WeakMap,m=[],y=null,p=!1,g=null,x=null,v=null,b=null,_=null,S=null,C=null,M=new $t(0,0,0),A=0,D=!1,N=null,O=null,B=null,L=null,k=null,Mt.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:St,bindFramebuffer:zt,drawBuffers:Ot,useProgram:q,setBlending:j,setMaterial:st,setFlipSided:ct,setCullFace:dt,setLineWidth:Ct,setPolygonOffset:It,setScissorTest:Nt,activeTexture:Bt,bindTexture:Y,unbindTexture:ie,compressedTexImage2D:qt,compressedTexImage3D:z,texImage2D:E,texImage3D:R,pixelStorei:U,getParameter:F,updateUBOMapping:ut,uniformBlockBinding:lt,texStorage2D:V,texStorage3D:w,texSubImage2D:T,texSubImage3D:it,compressedTexSubImage2D:ft,compressedTexSubImage3D:xt,scissor:Q,viewport:$,reset:Rt}}function TM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(z,T){return m?new OffscreenCanvas(z,T):To("canvas")}function p(z,T,it){let ft=1,xt=qt(z);if((xt.width>it||xt.height>it)&&(ft=it/Math.max(xt.width,xt.height)),ft<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let V=Math.floor(ft*xt.width),w=Math.floor(ft*xt.height);f===void 0&&(f=y(V,w));let E=T?y(V,w):f;return E.width=V,E.height=w,E.getContext("2d").drawImage(z,0,0,V,w),ae("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+V+"x"+w+")."),E}else return"data"in z&&ae("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),z;return z}function g(z){return z.generateMipmaps}function x(z){n.generateMipmap(z)}function v(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(z,T,it,ft,xt,V=!1){if(z!==null){if(n[z]!==void 0)return n[z];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let w;ft&&(w=t.get("EXT_texture_norm16"),w||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let E=T;if(T===n.RED&&(it===n.FLOAT&&(E=n.R32F),it===n.HALF_FLOAT&&(E=n.R16F),it===n.UNSIGNED_BYTE&&(E=n.R8),it===n.UNSIGNED_SHORT&&w&&(E=w.R16_EXT),it===n.SHORT&&w&&(E=w.R16_SNORM_EXT)),T===n.RED_INTEGER&&(it===n.UNSIGNED_BYTE&&(E=n.R8UI),it===n.UNSIGNED_SHORT&&(E=n.R16UI),it===n.UNSIGNED_INT&&(E=n.R32UI),it===n.BYTE&&(E=n.R8I),it===n.SHORT&&(E=n.R16I),it===n.INT&&(E=n.R32I)),T===n.RG&&(it===n.FLOAT&&(E=n.RG32F),it===n.HALF_FLOAT&&(E=n.RG16F),it===n.UNSIGNED_BYTE&&(E=n.RG8),it===n.UNSIGNED_SHORT&&w&&(E=w.RG16_EXT),it===n.SHORT&&w&&(E=w.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(it===n.UNSIGNED_BYTE&&(E=n.RG8UI),it===n.UNSIGNED_SHORT&&(E=n.RG16UI),it===n.UNSIGNED_INT&&(E=n.RG32UI),it===n.BYTE&&(E=n.RG8I),it===n.SHORT&&(E=n.RG16I),it===n.INT&&(E=n.RG32I)),T===n.RGB_INTEGER&&(it===n.UNSIGNED_BYTE&&(E=n.RGB8UI),it===n.UNSIGNED_SHORT&&(E=n.RGB16UI),it===n.UNSIGNED_INT&&(E=n.RGB32UI),it===n.BYTE&&(E=n.RGB8I),it===n.SHORT&&(E=n.RGB16I),it===n.INT&&(E=n.RGB32I)),T===n.RGBA_INTEGER&&(it===n.UNSIGNED_BYTE&&(E=n.RGBA8UI),it===n.UNSIGNED_SHORT&&(E=n.RGBA16UI),it===n.UNSIGNED_INT&&(E=n.RGBA32UI),it===n.BYTE&&(E=n.RGBA8I),it===n.SHORT&&(E=n.RGBA16I),it===n.INT&&(E=n.RGBA32I)),T===n.RGB&&(it===n.UNSIGNED_SHORT&&w&&(E=w.RGB16_EXT),it===n.SHORT&&w&&(E=w.RGB16_SNORM_EXT),it===n.UNSIGNED_INT_5_9_9_9_REV&&(E=n.RGB9_E5),it===n.UNSIGNED_INT_10F_11F_11F_REV&&(E=n.R11F_G11F_B10F)),T===n.RGBA){let R=V?Eo:_e.getTransfer(xt);it===n.FLOAT&&(E=n.RGBA32F),it===n.HALF_FLOAT&&(E=n.RGBA16F),it===n.UNSIGNED_BYTE&&(E=R===Ie?n.SRGB8_ALPHA8:n.RGBA8),it===n.UNSIGNED_SHORT&&w&&(E=w.RGBA16_EXT),it===n.SHORT&&w&&(E=w.RGBA16_SNORM_EXT),it===n.UNSIGNED_SHORT_4_4_4_4&&(E=n.RGBA4),it===n.UNSIGNED_SHORT_5_5_5_1&&(E=n.RGB5_A1)}return(E===n.R16F||E===n.R32F||E===n.RG16F||E===n.RG32F||E===n.RGBA16F||E===n.RGBA32F)&&t.get("EXT_color_buffer_float"),E}function _(z,T){let it;return z?T===null||T===gi||T===Vr?it=n.DEPTH24_STENCIL8:T===ii?it=n.DEPTH32F_STENCIL8:T===Gr&&(it=n.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gi||T===Vr?it=n.DEPTH_COMPONENT24:T===ii?it=n.DEPTH_COMPONENT32F:T===Gr&&(it=n.DEPTH_COMPONENT16),it}function S(z,T){return g(z)===!0||z.isFramebufferTexture&&z.minFilter!==mn&&z.minFilter!==bn?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function C(z){let T=z.target;T.removeEventListener("dispose",C),A(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function M(z){let T=z.target;T.removeEventListener("dispose",M),N(T)}function A(z){let T=i.get(z);if(T.__webglInit===void 0)return;let it=z.source,ft=d.get(it);if(ft){let xt=ft[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(z),Object.keys(ft).length===0&&d.delete(it)}i.remove(z)}function D(z){let T=i.get(z);n.deleteTexture(T.__webglTexture);let it=z.source,ft=d.get(it);delete ft[T.__cacheKey],o.memory.textures--}function N(z){let T=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let xt=0;xt<T.__webglFramebuffer[ft].length;xt++)n.deleteFramebuffer(T.__webglFramebuffer[ft][xt]);else n.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)n.deleteFramebuffer(T.__webglFramebuffer[ft]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let it=z.textures;for(let ft=0,xt=it.length;ft<xt;ft++){let V=i.get(it[ft]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(it[ft])}i.remove(z)}let O=0;function B(){O=0}function L(){return O}function k(z){O=z}function H(){let z=O;return z>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,z}function W(z){let T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function et(z,T){let it=i.get(z);if(z.isVideoTexture&&Y(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&it.__version!==z.version){let ft=z.image;if(ft===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{St(it,z,T);return}}else z.isExternalTexture&&(it.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,it.__webglTexture,n.TEXTURE0+T)}function K(z,T){let it=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&it.__version!==z.version){St(it,z,T);return}else z.isExternalTexture&&(it.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,it.__webglTexture,n.TEXTURE0+T)}function Z(z,T){let it=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&it.__version!==z.version){St(it,z,T);return}e.bindTexture(n.TEXTURE_3D,it.__webglTexture,n.TEXTURE0+T)}function nt(z,T){let it=i.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&it.__version!==z.version){zt(it,z,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture,n.TEXTURE0+T)}let Tt={[ks]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[gc]:n.MIRRORED_REPEAT},At={[mn]:n.NEAREST,[cp]:n.NEAREST_MIPMAP_NEAREST,[oa]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[$c]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},Mt={[fp]:n.NEVER,[yp]:n.ALWAYS,[dp]:n.LESS,[Ll]:n.LEQUAL,[pp]:n.EQUAL,[Nl]:n.GEQUAL,[mp]:n.GREATER,[gp]:n.NOTEQUAL};function _t(z,T){if(T.type===ii&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===bn||T.magFilter===$c||T.magFilter===oa||T.magFilter===ws||T.minFilter===bn||T.minFilter===$c||T.minFilter===oa||T.minFilter===ws)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,Tt[T.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,Tt[T.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,Tt[T.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,At[T.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,At[T.minFilter]),T.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,Mt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mn||T.minFilter!==oa&&T.minFilter!==ws||T.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");n.texParameterf(z,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Lt(z,T){let it=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",C));let ft=T.source,xt=d.get(ft);xt===void 0&&(xt={},d.set(ft,xt));let V=W(T);if(V!==z.__cacheKey){xt[V]===void 0&&(xt[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,it=!0),xt[V].usedTimes++;let w=xt[z.__cacheKey];w!==void 0&&(xt[z.__cacheKey].usedTimes--,w.usedTimes===0&&D(T)),z.__cacheKey=V,z.__webglTexture=xt[V].texture}return it}function ot(z,T,it){return Math.floor(Math.floor(z/it)/T)}function ht(z,T,it,ft){let V=z.updateRanges;if(V.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,it,ft,T.data);else{V.sort((U,Q)=>U.start-Q.start);let w=0;for(let U=1;U<V.length;U++){let Q=V[w],$=V[U],ut=Q.start+Q.count,lt=ot($.start,T.width,4),Rt=ot(Q.start,T.width,4);$.start<=ut+1&&lt===Rt&&ot($.start+$.count-1,T.width,4)===lt?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++w,V[w]=$)}V.length=w+1;let E=e.getParameter(n.UNPACK_ROW_LENGTH),R=e.getParameter(n.UNPACK_SKIP_PIXELS),F=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let U=0,Q=V.length;U<Q;U++){let $=V[U],ut=Math.floor($.start/4),lt=Math.ceil($.count/4),Rt=ut%T.width,I=Math.floor(ut/T.width),J=lt,tt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Rt,I,J,tt,it,ft,T.data)}z.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,E),e.pixelStorei(n.UNPACK_SKIP_PIXELS,R),e.pixelStorei(n.UNPACK_SKIP_ROWS,F)}}function St(z,T,it){let ft=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=n.TEXTURE_3D);let xt=Lt(z,T),V=T.source;e.bindTexture(ft,z.__webglTexture,n.TEXTURE0+it);let w=i.get(V);if(V.version!==w.__version||xt===!0){if(e.activeTexture(n.TEXTURE0+it),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let tt=_e.getPrimaries(_e.workingColorSpace),wt=T.colorSpace===Zi?null:_e.getPrimaries(T.colorSpace),Et=T.colorSpace===Zi||tt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let R=p(T.image,!1,s.maxTextureSize);R=ie(T,R);let F=r.convert(T.format,T.colorSpace),U=r.convert(T.type),Q=b(T.internalFormat,F,U,T.normalized,T.colorSpace,T.isVideoTexture);_t(ft,T);let $,ut=T.mipmaps,lt=T.isVideoTexture!==!0,Rt=w.__version===void 0||xt===!0,I=V.dataReady,J=S(T,R);if(T.isDepthTexture)Q=_(T.format===Es,T.type),Rt&&(lt?e.texStorage2D(n.TEXTURE_2D,1,Q,R.width,R.height):e.texImage2D(n.TEXTURE_2D,0,Q,R.width,R.height,0,F,U,null));else if(T.isDataTexture)if(ut.length>0){lt&&Rt&&e.texStorage2D(n.TEXTURE_2D,J,Q,ut[0].width,ut[0].height);for(let tt=0,wt=ut.length;tt<wt;tt++)$=ut[tt],lt?I&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,$.width,$.height,F,U,$.data):e.texImage2D(n.TEXTURE_2D,tt,Q,$.width,$.height,0,F,U,$.data);T.generateMipmaps=!1}else lt?(Rt&&e.texStorage2D(n.TEXTURE_2D,J,Q,R.width,R.height),I&&ht(T,R,F,U)):e.texImage2D(n.TEXTURE_2D,0,Q,R.width,R.height,0,F,U,R.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){lt&&Rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,J,Q,ut[0].width,ut[0].height,R.depth);for(let tt=0,wt=ut.length;tt<wt;tt++)if($=ut[tt],T.format!==si)if(F!==null)if(lt){if(I)if(T.layerUpdates.size>0){let Et=Fh($.width,$.height,T.format,T.type);for(let vt of T.layerUpdates){let Ut=$.data.subarray(vt*Et/$.data.BYTES_PER_ELEMENT,(vt+1)*Et/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,vt,$.width,$.height,1,F,Ut)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,$.width,$.height,R.depth,F,$.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Q,$.width,$.height,R.depth,0,$.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,$.width,$.height,R.depth,F,U,$.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Q,$.width,$.height,R.depth,0,F,U,$.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{lt&&Rt&&e.texStorage2D(n.TEXTURE_2D,J,Q,ut[0].width,ut[0].height);for(let tt=0,wt=ut.length;tt<wt;tt++)$=ut[tt],T.format!==si?F!==null?lt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,$.width,$.height,F,$.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Q,$.width,$.height,0,$.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?I&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,$.width,$.height,F,U,$.data):e.texImage2D(n.TEXTURE_2D,tt,Q,$.width,$.height,0,F,U,$.data)}else if(T.isDataArrayTexture)if(lt){if(Rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,J,Q,R.width,R.height,R.depth),I)if(T.layerUpdates.size>0){let tt=Fh(R.width,R.height,T.format,T.type);for(let wt of T.layerUpdates){let Et=R.data.subarray(wt*tt/R.data.BYTES_PER_ELEMENT,(wt+1)*tt/R.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,wt,R.width,R.height,1,F,U,Et)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,R.width,R.height,R.depth,F,U,R.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,R.width,R.height,R.depth,0,F,U,R.data);else if(T.isData3DTexture)lt?(Rt&&e.texStorage3D(n.TEXTURE_3D,J,Q,R.width,R.height,R.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,R.width,R.height,R.depth,F,U,R.data)):e.texImage3D(n.TEXTURE_3D,0,Q,R.width,R.height,R.depth,0,F,U,R.data);else if(T.isFramebufferTexture){if(Rt)if(lt)e.texStorage2D(n.TEXTURE_2D,J,Q,R.width,R.height);else{let tt=R.width,wt=R.height;for(let Et=0;Et<J;Et++)e.texImage2D(n.TEXTURE_2D,Et,Q,tt,wt,0,F,U,null),tt>>=1,wt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let tt=n.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),R.parentNode!==tt){tt.appendChild(R),h.add(T),tt.onpaint=wt=>{let Et=wt.changedElements;for(let vt of h)Et.includes(vt.image)&&(vt.needsUpdate=!0)},tt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,R);else{let Et=n.RGBA,vt=n.RGBA,Ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Et,vt,Ut,R)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ut.length>0){if(lt&&Rt){let tt=qt(ut[0]);e.texStorage2D(n.TEXTURE_2D,J,Q,tt.width,tt.height)}for(let tt=0,wt=ut.length;tt<wt;tt++)$=ut[tt],lt?I&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,F,U,$):e.texImage2D(n.TEXTURE_2D,tt,Q,F,U,$);T.generateMipmaps=!1}else if(lt){if(Rt){let tt=qt(R);e.texStorage2D(n.TEXTURE_2D,J,Q,tt.width,tt.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,F,U,R)}else e.texImage2D(n.TEXTURE_2D,0,Q,F,U,R);g(T)&&x(ft),w.__version=V.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function zt(z,T,it){if(T.image.length!==6)return;let ft=Lt(z,T),xt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+it);let V=i.get(xt);if(xt.version!==V.__version||ft===!0){e.activeTexture(n.TEXTURE0+it);let w=_e.getPrimaries(_e.workingColorSpace),E=T.colorSpace===Zi?null:_e.getPrimaries(T.colorSpace),R=T.colorSpace===Zi||w===E?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);let F=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let vt=0;vt<6;vt++)!F&&!U?Q[vt]=p(T.image[vt],!0,s.maxCubemapSize):Q[vt]=U?T.image[vt].image:T.image[vt],Q[vt]=ie(T,Q[vt]);let $=Q[0],ut=r.convert(T.format,T.colorSpace),lt=r.convert(T.type),Rt=b(T.internalFormat,ut,lt,T.normalized,T.colorSpace),I=T.isVideoTexture!==!0,J=V.__version===void 0||ft===!0,tt=xt.dataReady,wt=S(T,$);_t(n.TEXTURE_CUBE_MAP,T);let Et;if(F){I&&J&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Rt,$.width,$.height);for(let vt=0;vt<6;vt++){Et=Q[vt].mipmaps;for(let Ut=0;Ut<Et.length;Ut++){let kt=Et[Ut];T.format!==si?ut!==null?I?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut,0,0,kt.width,kt.height,ut,kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut,Rt,kt.width,kt.height,0,kt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut,0,0,kt.width,kt.height,ut,lt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut,Rt,kt.width,kt.height,0,ut,lt,kt.data)}}}else{if(Et=T.mipmaps,I&&J){Et.length>0&&wt++;let vt=qt(Q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Rt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(U){I?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Q[vt].width,Q[vt].height,ut,lt,Q[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Rt,Q[vt].width,Q[vt].height,0,ut,lt,Q[vt].data);for(let Ut=0;Ut<Et.length;Ut++){let le=Et[Ut].image[vt].image;I?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut+1,0,0,le.width,le.height,ut,lt,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut+1,Rt,le.width,le.height,0,ut,lt,le.data)}}else{I?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ut,lt,Q[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Rt,ut,lt,Q[vt]);for(let Ut=0;Ut<Et.length;Ut++){let kt=Et[Ut];I?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut+1,0,0,ut,lt,kt.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ut+1,Rt,ut,lt,kt.image[vt])}}}g(T)&&x(n.TEXTURE_CUBE_MAP),V.__version=xt.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function Ot(z,T,it,ft,xt,V){let w=r.convert(it.format,it.colorSpace),E=r.convert(it.type),R=b(it.internalFormat,w,E,it.normalized,it.colorSpace),F=i.get(T),U=i.get(it);if(U.__renderTarget=T,!F.__hasExternalTextures){let Q=Math.max(1,T.width>>V),$=Math.max(1,T.height>>V);xt===n.TEXTURE_3D||xt===n.TEXTURE_2D_ARRAY?e.texImage3D(xt,V,R,Q,$,T.depth,0,w,E,null):e.texImage2D(xt,V,R,Q,$,0,w,E,null)}e.bindFramebuffer(n.FRAMEBUFFER,z),Bt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,xt,U.__webglTexture,0,Nt(T)):(xt===n.TEXTURE_2D||xt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,xt,U.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function q(z,T,it){if(n.bindRenderbuffer(n.RENDERBUFFER,z),T.depthBuffer){let ft=T.depthTexture,xt=ft&&ft.isDepthTexture?ft.type:null,V=_(T.stencilBuffer,xt),w=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Bt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(T),V,T.width,T.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(T),V,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,V,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,z)}else{let ft=T.textures;for(let xt=0;xt<ft.length;xt++){let V=ft[xt],w=r.convert(V.format,V.colorSpace),E=r.convert(V.type),R=b(V.internalFormat,w,E,V.normalized,V.colorSpace);Bt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt(T),R,T.width,T.height):it?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt(T),R,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,R,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(z,T,it){let ft=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let xt=i.get(T.depthTexture);if(xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,T.depthTexture.addEventListener("dispose",C)),xt.__webglTexture===void 0){xt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,xt.__webglTexture),_t(n.TEXTURE_CUBE_MAP,T.depthTexture);let F=r.convert(T.depthTexture.format),U=r.convert(T.depthTexture.type),Q;T.depthTexture.format===Ri?Q=n.DEPTH_COMPONENT24:T.depthTexture.format===Es&&(Q=n.DEPTH24_STENCIL8);for(let $=0;$<6;$++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Q,T.width,T.height,0,F,U,null)}}else et(T.depthTexture,0);let V=xt.__webglTexture,w=Nt(T),E=ft?n.TEXTURE_CUBE_MAP_POSITIVE_X+it:n.TEXTURE_2D,R=T.depthTexture.format===Es?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ri)Bt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,E,V,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,R,E,V,0);else if(T.depthTexture.format===Es)Bt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,R,E,V,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,R,E,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function X(z){let T=i.get(z),it=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){let ft=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){let xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",xt)};ft.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=ft}if(z.depthTexture&&!T.__autoAllocateDepthBuffer)if(it)for(let ft=0;ft<6;ft++)yt(T.__webglFramebuffer[ft],z,ft);else{let ft=z.texture.mipmaps;ft&&ft.length>0?yt(T.__webglFramebuffer[0],z,0):yt(T.__webglFramebuffer,z,0)}else if(it){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=n.createRenderbuffer(),q(T.__webglDepthbuffer[ft],z,!1);else{let xt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=T.__webglDepthbuffer[ft];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,V)}}else{let ft=z.texture.mipmaps;if(ft&&ft.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),q(T.__webglDepthbuffer,z,!1);else{let xt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,V)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function j(z,T,it){let ft=i.get(z);T!==void 0&&Ot(ft.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),it!==void 0&&X(z)}function st(z){let T=z.texture,it=i.get(z),ft=i.get(T);z.addEventListener("dispose",M);let xt=z.textures,V=z.isWebGLCubeRenderTarget===!0,w=xt.length>1;if(w||(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=T.version,o.memory.textures++),V){it.__webglFramebuffer=[];for(let E=0;E<6;E++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[E]=[];for(let R=0;R<T.mipmaps.length;R++)it.__webglFramebuffer[E][R]=n.createFramebuffer()}else it.__webglFramebuffer[E]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let E=0;E<T.mipmaps.length;E++)it.__webglFramebuffer[E]=n.createFramebuffer()}else it.__webglFramebuffer=n.createFramebuffer();if(w)for(let E=0,R=xt.length;E<R;E++){let F=i.get(xt[E]);F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture(),o.memory.textures++)}if(z.samples>0&&Bt(z)===!1){it.__webglMultisampledFramebuffer=n.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let E=0;E<xt.length;E++){let R=xt[E];it.__webglColorRenderbuffer[E]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,it.__webglColorRenderbuffer[E]);let F=r.convert(R.format,R.colorSpace),U=r.convert(R.type),Q=b(R.internalFormat,F,U,R.normalized,R.colorSpace,z.isXRRenderTarget===!0),$=Nt(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,Q,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+E,n.RENDERBUFFER,it.__webglColorRenderbuffer[E])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(it.__webglDepthRenderbuffer=n.createRenderbuffer(),q(it.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),_t(n.TEXTURE_CUBE_MAP,T);for(let E=0;E<6;E++)if(T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)Ot(it.__webglFramebuffer[E][R],z,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,R);else Ot(it.__webglFramebuffer[E],z,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0);g(T)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(w){for(let E=0,R=xt.length;E<R;E++){let F=xt[E],U=i.get(F),Q=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Q=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,U.__webglTexture),_t(Q,F),Ot(it.__webglFramebuffer,z,F,n.COLOR_ATTACHMENT0+E,Q,0),g(F)&&x(Q)}e.unbindTexture()}else{let E=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(E=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(E,ft.__webglTexture),_t(E,T),T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)Ot(it.__webglFramebuffer[R],z,T,n.COLOR_ATTACHMENT0,E,R);else Ot(it.__webglFramebuffer,z,T,n.COLOR_ATTACHMENT0,E,0);g(T)&&x(E),e.unbindTexture()}z.depthBuffer&&X(z)}function ct(z){let T=z.textures;for(let it=0,ft=T.length;it<ft;it++){let xt=T[it];if(g(xt)){let V=v(z),w=i.get(xt).__webglTexture;e.bindTexture(V,w),x(V),e.unbindTexture()}}}let dt=[],Ct=[];function It(z){if(z.samples>0){if(Bt(z)===!1){let T=z.textures,it=z.width,ft=z.height,xt=n.COLOR_BUFFER_BIT,V=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,w=i.get(z),E=T.length>1;if(E)for(let F=0;F<T.length;F++)e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer);let R=z.texture.mipmaps;R&&R.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let F=0;F<T.length;F++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xt|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xt|=n.STENCIL_BUFFER_BIT)),E){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,w.__webglColorRenderbuffer[F]);let U=i.get(T[F]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,U,0)}n.blitFramebuffer(0,0,it,ft,0,0,it,ft,xt,n.NEAREST),c===!0&&(dt.length=0,Ct.length=0,dt.push(n.COLOR_ATTACHMENT0+F),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(dt.push(V),Ct.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ct)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),E)for(let F=0;F<T.length;F++){e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,w.__webglColorRenderbuffer[F]);let U=i.get(T[F]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,U,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&c){let T=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Nt(z){return Math.min(s.maxSamples,z.samples)}function Bt(z){let T=i.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Y(z){let T=o.render.frame;u.get(z)!==T&&(u.set(z,T),z.update())}function ie(z,T){let it=z.colorSpace,ft=z.format,xt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||it!==wo&&it!==Zi&&(_e.getTransfer(it)===Ie?(ft!==si||xt!==Wn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",it)),T}function qt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(l.width=z.naturalWidth||z.width,l.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(l.width=z.displayWidth,l.height=z.displayHeight):(l.width=z.width,l.height=z.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=nt,this.rebindTextures=j,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function AM(n,t){function e(i,s=Zi){let r,o=_e.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===Gr)return n.UNSIGNED_SHORT;if(i===Zc)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===Th)return n.ALPHA;if(i===Ah)return n.RGB;if(i===si)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===Jc)return n.RED;if(i===Qc)return n.RED_INTEGER;if(i===Ts)return n.RG;if(i===tl)return n.RG_INTEGER;if(i===el)return n.RGBA_INTEGER;if(i===aa||i===ca||i===la||i===ua)if(o===Ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ol||i===al||i===cl||i===ll||i===ul||i===ha||i===hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ol||i===al)return o===Ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ll)return r.COMPRESSED_R11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ha)return r.COMPRESSED_RG11_EAC;if(i===hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fl||i===dl||i===pl||i===ml||i===gl||i===yl||i===xl||i===bl||i===vl||i===_l||i===Ml||i===Sl||i===wl||i===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ml)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===El)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tl||i===Al||i===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Tl)return o===Ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cl||i===Il||i===fa||i===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var RM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
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

}`,Zh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Uo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Be({vertexShader:RM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new Rn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends Ci{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null,y=typeof XRWebGLBinding<"u",p=new Zh,g={},x=e.getContextAttributes(),v=null,b=null,_=[],S=[],C=new Ft,M=null,A=null,D=new Dn;D.viewport=new Pe;let N=new Dn;N.viewport=new Pe;let O=[D,N],B=new Wc,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let ht=_[ot];return ht===void 0&&(ht=new Cr,_[ot]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(ot){let ht=_[ot];return ht===void 0&&(ht=new Cr,_[ot]=ht),ht.getGripSpace()},this.getHand=function(ot){let ht=_[ot];return ht===void 0&&(ht=new Cr,_[ot]=ht),ht.getHandSpace()};function H(ot){let ht=S.indexOf(ot.inputSource);if(ht===-1)return;let St=_[ht];St!==void 0&&(St.update(ot.inputSource,ot.frame,l||o),St.dispatchEvent({type:ot.type,data:ot.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",et);for(let ot=0;ot<_.length;ot++){let ht=S[ot];ht!==null&&(S[ot]=null,_[ot].disconnect(ht))}L=null,k=null,p.reset();for(let ot in g)delete g[ot];if(t.setRenderTarget(v),d=null,f=null,h=null,s=null,b=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(C.width,C.height,!1),A!==null){let ot=A.camera;ot.fov=A.fov,ot.zoom=A.zoom,ot.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,i.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,i.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ot){l=ot},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",et),x.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,zt=null,Ot=null;x.depth&&(Ot=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=x.stencil?Es:Ri,zt=x.stencil?Vr:gi);let q={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(q),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Gn(f.textureWidth,f.textureHeight,{format:si,type:Wn,depthTexture:new ps(f.textureWidth,f.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let St={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Gn(d.framebufferWidth,d.framebufferHeight,{format:si,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(ot){for(let ht=0;ht<ot.removed.length;ht++){let St=ot.removed[ht],zt=S.indexOf(St);zt>=0&&(S[zt]=null,_[zt].disconnect(St))}for(let ht=0;ht<ot.added.length;ht++){let St=ot.added[ht],zt=S.indexOf(St);if(zt===-1){for(let q=0;q<_.length;q++)if(q>=S.length){S.push(St),zt=q;break}else if(S[q]===null){S[q]=St,zt=q;break}if(zt===-1)break}let Ot=_[zt];Ot&&Ot.connect(St)}}let K=new G,Z=new G;function nt(ot,ht,St){K.setFromMatrixPosition(ht.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);let zt=K.distanceTo(Z),Ot=ht.projectionMatrix.elements,q=St.projectionMatrix.elements,yt=Ot[14]/(Ot[10]-1),X=Ot[14]/(Ot[10]+1),j=(Ot[9]+1)/Ot[5],st=(Ot[9]-1)/Ot[5],ct=(Ot[8]-1)/Ot[0],dt=(q[8]+1)/q[0],Ct=yt*ct,It=yt*dt,Nt=zt/(-ct+dt),Bt=Nt*-ct;if(ht.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(Bt),ot.translateZ(Nt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Ot[10]===-1)ot.projectionMatrix.copy(ht.projectionMatrix),ot.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let Y=yt+Nt,ie=X+Nt,qt=Ct-Bt,z=It+(zt-Bt),T=j*X/ie*Y,it=st*X/ie*Y;ot.projectionMatrix.makePerspective(qt,z,T,it,Y,ie),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function Tt(ot,ht){ht===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(ht.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let ht=ot.near,St=ot.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(St=p.depthFar)),B.near=N.near=D.near=ht,B.far=N.far=D.far=St,(L!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,k=B.far),B.layers.mask=ot.layers.mask|6,D.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let zt=ot.parent,Ot=B.cameras;Tt(B,zt);for(let q=0;q<Ot.length;q++)Tt(Ot[q],zt);Ot.length===2?nt(B,D,N):B.projectionMatrix.copy(D.projectionMatrix),A===null&&ot.isPerspectiveCamera&&(A={camera:ot,fov:ot.fov,zoom:ot.zoom}),At(ot,B,zt)};function At(ot,ht,St){St===null?ot.matrix.copy(ht.matrixWorld):(ot.matrix.copy(St.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(ht.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(ht.projectionMatrix),ot.projectionMatrixInverse.copy(ht.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Tr*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ot){c=ot,f!==null&&(f.fixedFoveation=ot),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ot)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(ot){return g[ot]};let Mt=null;function _t(ot,ht){if(u=ht.getViewerPose(l||o),m=ht,u!==null){let St=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let zt=!1;St.length!==B.cameras.length&&(B.cameras.length=0,zt=!0);for(let X=0;X<St.length;X++){let j=St[X],st=null;if(d!==null)st=d.getViewport(j);else{let dt=h.getViewSubImage(f,j);st=dt.viewport,X===0&&(t.setRenderTargetTextures(b,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(b))}let ct=O[X];ct===void 0&&(ct=new Dn,ct.layers.enable(X),ct.viewport=new Pe,O[X]=ct),ct.matrix.fromArray(j.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(j.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(st.x,st.y,st.width,st.height),X===0&&(B.matrix.copy(ct.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),zt===!0&&B.cameras.push(ct)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let X=h.getDepthInformation(St[0]);X&&X.isValid&&X.texture&&p.init(X,s.renderState)}if(Ot&&Ot.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let X=0;X<St.length;X++){let j=St[X].camera;if(j){let st=g[j];st||(st=new Uo,g[j]=st);let ct=h.getCameraImage(j);st.sourceTexture=ct}}}}for(let St=0;St<_.length;St++){let zt=S[St],Ot=_[St];zt!==null&&Ot!==void 0&&Ot.update(zt,ht,l||o)}Mt&&Mt(ot,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),m=null}let Lt=new jp;Lt.setAnimationLoop(_t),this.setAnimationLoop=function(ot){Mt=ot},this.dispose=function(){}}},IM=new Me,nm=new pe;nm.set(-1,0,0,0,1,0,0,0,1);function PM(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Lh(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,x,v,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,x,v):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Un&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Un&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let x=t.get(g),v=x.envMap,b=x.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(IM.makeRotationFromEuler(b)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(nm),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,x,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function LM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){let S=_.program;i.uniformBlockBinding(b,S)}function l(b,_){let S=s[b.id];S===void 0&&(p(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",x));let C=_.program;i.updateUBOMapping(b,C);let M=t.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function u(b){let _=h();b.__bindingPointIndex=_;let S=n.createBuffer(),C=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let _=s[b.id],S=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let M=0,A=S.length;M<A;M++){let D=S[M];if(Array.isArray(D))for(let N=0,O=D.length;N<O;N++)d(D[N],M,N,C);else d(D,M,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,_,S,C){if(y(b,_,S,C)===!0){let M=b.__offset,A=b.value;if(Array.isArray(A)){let D=0;for(let N=0;N<A.length;N++){let O=A[N],B=g(O);m(O,b.__data,D),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,b.__data)}}function m(b,_,S){typeof b=="number"||typeof b=="boolean"?_[0]=b:b.isMatrix3?(_[0]=b.elements[0],_[1]=b.elements[1],_[2]=b.elements[2],_[3]=0,_[4]=b.elements[3],_[5]=b.elements[4],_[6]=b.elements[5],_[7]=0,_[8]=b.elements[6],_[9]=b.elements[7],_[10]=b.elements[8],_[11]=0):ArrayBuffer.isView(b)?_.set(new b.constructor(b.buffer,b.byteOffset,_.length)):b.toArray(_,S)}function y(b,_,S,C){let M=b.value,A=_+"_"+S;if(C[A]===void 0)return typeof M=="number"||typeof M=="boolean"?C[A]=M:ArrayBuffer.isView(M)?C[A]=M.slice():C[A]=M.clone(),!0;{let D=C[A];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return C[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(D.equals(M)===!1)return D.copy(M),!0}}return!1}function p(b){let _=b.uniforms,S=0,C=16;for(let A=0,D=_.length;A<D;A++){let N=Array.isArray(_[A])?_[A]:[_[A]];for(let O=0,B=N.length;O<B;O++){let L=N[O],k=Array.isArray(L.value)?L.value:[L.value];for(let H=0,W=k.length;H<W;H++){let et=k[H],K=g(et),Z=S%C,nt=Z%K.boundary,Tt=Z+nt;S+=nt,Tt!==0&&C-Tt<K.storage&&(S+=C-Tt),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=K.storage}}}let M=S%C;return M>0&&(S+=C-M),b.__size=S,b.__cache={},this}function g(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(_.boundary=16,_.storage=b.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",b),_}function x(b){let _=b.target;_.removeEventListener("dispose",x);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function v(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:v}}var NM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function DM(){return Ni===null&&(Ni=new No(NM,16,16,Ts,yi),Ni.name="DFG_LUT",Ni.minFilter=bn,Ni.magFilter=bn,Ni.wrapS=Ti,Ni.wrapT=Ti,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Ol=class{constructor(t={}){let{canvas:e=xp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Wn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=d,p=new Set([el,tl,Qc]),g=new Set([Wn,gi,Gr,Vr,jc,Kc]),x=new Uint32Array(4),v=new Int32Array(4),b=new G,_=null,S=null,C=[],M=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,N=!1,O=null,B=null,L=null,k=null;this._outputColorSpace=rn;let H=0,W=0,et=null,K=-1,Z=null,nt=new Pe,Tt=new Pe,At=null,Mt=new $t(0),_t=0,Lt=e.width,ot=e.height,ht=1,St=null,zt=null,Ot=new Pe(0,0,Lt,ot),q=new Pe(0,0,Lt,ot),yt=!1,X=new Pr,j=!1,st=!1,ct=new Me,dt=new G,Ct=new Pe,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Bt(){return et===null?ht:1}let Y=i;function ie(P,rt){return e.getContext(P,rt)}let qt,z,T,it,ft,xt,V,w,E,R,F,U,Q,$,ut,lt,Rt,I,J,tt,wt,Et,vt;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Se,!1),Y===null){let rt="webgl2";if(Y=ie(rt,P),Y===null)throw ie(rt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(P){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),ue("WebGLRenderer: "+P.message),P}function Ut(){qt=new Hv(Y),qt.init(),wt=new AM(Y,qt),z=new Pv(Y,qt,t,wt),T=new EM(Y,qt),z.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),B=Y.createFramebuffer(),L=Y.createFramebuffer(),k=Y.createFramebuffer(),it=new Wv(Y),ft=new hM,xt=new TM(Y,qt,T,ft,z,wt,it),V=new zv(D),w=new qx(Y),Et=new Cv(Y,w),E=new Gv(Y,w,it,Et),R=new qv(Y,E,w,Et,it),I=new Xv(Y,z,xt),ut=new Lv(ft),F=new uM(D,V,qt,z,Et,ut),U=new PM(D,ft),Q=new dM,$=new bM(qt),Rt=new Rv(D,V,T,R,m,c),lt=new wM(D,R,z),vt=new LM(Y,it,z,T),J=new Iv(Y,qt,it),tt=new Vv(Y,qt,it),it.programs=F.programs,D.capabilities=z,D.extensions=qt,D.properties=ft,D.renderLists=Q,D.shadowMap=lt,D.state=T,D.info=it}y!==Wn&&(A=new $v(y,e.width,e.height,a,s,r));let kt=new jh(D,Y);this.xr=kt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let P=qt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=qt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(P){P!==void 0&&(ht=P,this.setSize(Lt,ot,!1))},this.getSize=function(P){return P.set(Lt,ot)},this.setSize=function(P,rt,bt=!0){if(kt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=P,ot=rt,e.width=Math.floor(P*ht),e.height=Math.floor(rt*ht),bt===!0&&(e.style.width=P+"px",e.style.height=rt+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,P,rt)},this.getDrawingBufferSize=function(P){return P.set(Lt*ht,ot*ht).floor()},this.setDrawingBufferSize=function(P,rt,bt){Lt=P,ot=rt,ht=bt,e.width=Math.floor(P*bt),e.height=Math.floor(rt*bt),this.setViewport(0,0,P,rt)},this.setEffects=function(P){if(y===Wn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let rt=0;rt<P.length;rt++)if(P[rt].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(nt)},this.getViewport=function(P){return P.copy(Ot)},this.setViewport=function(P,rt,bt,pt){P.isVector4?Ot.set(P.x,P.y,P.z,P.w):Ot.set(P,rt,bt,pt),T.viewport(nt.copy(Ot).multiplyScalar(ht).round())},this.getScissor=function(P){return P.copy(q)},this.setScissor=function(P,rt,bt,pt){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,rt,bt,pt),T.scissor(Tt.copy(q).multiplyScalar(ht).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(P){T.setScissorTest(yt=P)},this.setOpaqueSort=function(P){St=P},this.setTransparentSort=function(P){zt=P},this.getClearColor=function(P){return P.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(P=!0,rt=!0,bt=!0){let pt=0;if(P){let mt=!1;if(et!==null){let Wt=et.texture.format;mt=p.has(Wt)}if(mt){let Wt=et.texture.type,Yt=g.has(Wt),Xt=Rt.getClearColor(),Kt=Rt.getClearAlpha(),te=Xt.r,me=Xt.g,ve=Xt.b;Yt?(x[0]=te,x[1]=me,x[2]=ve,x[3]=Kt,Y.clearBufferuiv(Y.COLOR,0,x)):(v[0]=te,v[1]=me,v[2]=ve,v[3]=Kt,Y.clearBufferiv(Y.COLOR,0,v))}else pt|=Y.COLOR_BUFFER_BIT}rt&&(pt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),bt&&(pt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pt!==0&&Y.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),O=P},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),Rt.dispose(),Q.dispose(),$.dispose(),ft.dispose(),V.dispose(),R.dispose(),Et.dispose(),vt.dispose(),F.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Ht),kt.removeEventListener("sessionend",gt),Dt.stop()};function le(P){P.preventDefault(),Ao("WebGLRenderer: Context Lost."),N=!0}function re(){Ao("WebGLRenderer: Context Restored."),N=!1;let P=it.autoReset,rt=lt.enabled,bt=lt.autoUpdate,pt=lt.needsUpdate,mt=lt.type;Ut(),it.autoReset=P,lt.enabled=rt,lt.autoUpdate=bt,lt.needsUpdate=pt,lt.type=mt}function Se(P){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ee(P){let rt=P.target;rt.removeEventListener("dispose",Ee),on(rt)}function on(P){$e(P),ft.remove(P)}function $e(P){let rt=ft.get(P).programs;rt!==void 0&&(rt.forEach(function(bt){F.releaseProgram(bt)}),P.isShaderMaterial&&F.releaseShaderCache(P))}this.renderBufferDirect=function(P,rt,bt,pt,mt,Wt){rt===null&&(rt=It);let Yt=mt.isMesh&&mt.matrixWorld.determinantAffine()<0,Xt=Si(P,rt,bt,pt,mt);T.setMaterial(pt,Yt);let Kt=bt.index,te=1;if(pt.wireframe===!0){if(Kt=E.getWireframeAttribute(bt),Kt===void 0)return;te=2}let me=bt.drawRange,ve=bt.attributes.position,ee=me.start*te,Ce=(me.start+me.count)*te;Wt!==null&&(ee=Math.max(ee,Wt.start*te),Ce=Math.min(Ce,(Wt.start+Wt.count)*te)),Kt!==null?(ee=Math.max(ee,0),Ce=Math.min(Ce,Kt.count)):ve!=null&&(ee=Math.max(ee,0),Ce=Math.min(Ce,ve.count));let nn=Ce-ee;if(nn<0||nn===1/0)return;Et.setup(mt,pt,Xt,bt,Kt);let He,Fe=J;if(Kt!==null&&(He=w.get(Kt),Fe=tt,Fe.setIndex(He)),mt.isMesh)pt.wireframe===!0?(T.setLineWidth(pt.wireframeLinewidth*Bt()),Fe.setMode(Y.LINES)):Fe.setMode(Y.TRIANGLES);else if(mt.isLine){let wn=pt.linewidth;wn===void 0&&(wn=1),T.setLineWidth(wn*Bt()),mt.isLineSegments?Fe.setMode(Y.LINES):mt.isLineLoop?Fe.setMode(Y.LINE_LOOP):Fe.setMode(Y.LINE_STRIP)}else mt.isPoints?Fe.setMode(Y.POINTS):mt.isSprite&&Fe.setMode(Y.TRIANGLES);if(mt.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))Fe.renderMultiDraw(mt._multiDrawStarts,mt._multiDrawCounts,mt._multiDrawCount);else{let wn=mt._multiDrawStarts,Jt=mt._multiDrawCounts,Ln=mt._multiDrawCount,we=Kt?w.get(Kt).bytesPerElement:1,Qn=ft.get(pt).currentProgram.getUniforms();for(let wi=0;wi<Ln;wi++)Qn.setValue(Y,"_gl_DrawID",wi),Fe.render(wn[wi]/we,Jt[wi])}else if(mt.isInstancedMesh)Fe.renderInstances(ee,nn,mt.count);else if(bt.isInstancedBufferGeometry){let wn=bt._maxInstanceCount!==void 0?bt._maxInstanceCount:1/0,Jt=Math.min(bt.instanceCount,wn);Fe.renderInstances(ee,nn,Jt)}else Fe.render(ee,nn)};function an(P,rt,bt,pt){O!==null&&P.isNodeMaterial&&O.setObject(pt,P),j===!0&&ut.setState(P,bt,!1),P.transparent===!0&&P.side===Qe&&P.forceSinglePass===!1?(P.side=Un,P.needsUpdate=!0,dn(P,rt,pt),P.side=Ms,P.needsUpdate=!0,dn(P,rt,pt),P.side=Qe):dn(P,rt,pt)}this.compile=function(P,rt,bt=null){bt===null&&(bt=P),O!==null&&O.renderStart(P,rt,bt),S=$.get(bt),S.init(rt),M.push(S),bt.traverseVisible(function(mt){mt.isLight&&mt.layers.test(rt.layers)&&(S.pushLight(mt),mt.castShadow&&S.pushShadow(mt))}),P!==bt&&P.traverseVisible(function(mt){mt.isLight&&mt.layers.test(rt.layers)&&(S.pushLight(mt),mt.castShadow&&S.pushShadow(mt))}),S.setupLights(),O!==null&&O.updateLights(S.state.lightsArray),st=this.localClippingEnabled,j=ut.init(this.clippingPlanes,st),j===!0&&ut.setGlobalState(this.clippingPlanes,rt),O!==null&&lt.render(S.state.shadowsArray,bt,rt);let pt=new Set;return P.traverse(function(mt){if(!(mt.isMesh||mt.isPoints||mt.isLine||mt.isSprite))return;let Wt=mt.material;if(Wt)if(Array.isArray(Wt))for(let Yt=0;Yt<Wt.length;Yt++){let Xt=Wt[Yt];an(Xt,bt,rt,mt),pt.add(Xt)}else an(Wt,bt,rt,mt),pt.add(Wt)}),S=M.pop(),O!==null&&O.renderEnd(),pt},this.compileAsync=function(P,rt,bt=null){let pt=this.compile(P,rt,bt);return new Promise(mt=>{function Wt(){if(pt.forEach(function(Yt){let Kt=ft.get(Yt).currentProgram;(Kt===void 0||Kt.isReady())&&pt.delete(Yt)}),pt.size===0){mt(P);return}setTimeout(Wt,10)}qt.get("KHR_parallel_shader_compile")!==null?Wt():setTimeout(Wt,10)})};let cn=null;function Pt(P){cn&&cn(P)}function Ht(){Dt.stop()}function gt(){Dt.start()}let Dt=new jp;Dt.setAnimationLoop(Pt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(P){cn=P,kt.setAnimationLoop(P),P===null?Dt.stop():Dt.start()},kt.addEventListener("sessionstart",Ht),kt.addEventListener("sessionend",gt),this.render=function(P,rt){if(rt!==void 0&&rt.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(P,rt);let bt=kt.enabled===!0&&kt.isPresenting===!0,pt=A!==null&&(et===null||bt)&&A.begin(D,et);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(rt),rt=kt.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,rt,et),S=$.get(P,M.length),S.init(rt),S.state.textureUnits=xt.getTextureUnits(),M.push(S),ct.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),X.setFromProjectionMatrix(ct,fi,rt.reversedDepth),st=this.localClippingEnabled,j=ut.init(this.clippingPlanes,st),_=Q.get(P,C.length),_.init(),C.push(_),kt.enabled===!0&&kt.isPresenting===!0){let Yt=D.xr.getDepthSensingMesh();Yt!==null&&Vt(Yt,rt,-1/0,D.sortObjects)}Vt(P,rt,0,D.sortObjects),_.finish(),O!==null&&O.updateLights(S.state.lightsArray),D.sortObjects===!0&&_.sort(St,zt),Nt=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,Nt&&Rt.addToRenderList(_,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&ut.beginShadows();let mt=S.state.shadowsArray;if(lt.render(mt,P,rt),j===!0&&ut.endShadows(),(pt&&A.hasRenderPass())===!1){let Yt=_.opaque,Xt=_.transmissive;if(S.setupLights(),rt.isArrayCamera){let Kt=rt.cameras;if(Xt.length>0)for(let te=0,me=Kt.length;te<me;te++){let ve=Kt[te];fe(Yt,Xt,P,ve)}Nt&&Rt.render(P);for(let te=0,me=Kt.length;te<me;te++){let ve=Kt[te];Zt(_,P,ve,ve.viewport)}}else Xt.length>0&&fe(Yt,Xt,P,rt),Nt&&Rt.render(P),Zt(_,P,rt)}et!==null&&W===0&&(xt.updateMultisampleRenderTarget(et),xt.updateRenderTargetMipmap(et)),pt&&A.end(D),P.isScene===!0&&P.onAfterRender(D,P,rt),Et.resetDefaultState(),K=-1,Z=null,M.pop(),M.length>0?(S=M[M.length-1],xt.setTextureUnits(S.state.textureUnits),j===!0&&ut.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?_=C[C.length-1]:_=null,O!==null&&O.renderEnd()};function Vt(P,rt,bt,pt){if(P.visible===!1)return;if(P.layers.test(rt.layers)){if(P.isGroup)bt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(rt);else if(P.isLightProbeGrid)S.pushLightProbeGrid(P);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(X)){pt&&Ct.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ct);let Yt=R.update(P),Xt=P.material;Xt.visible&&_.push(P,Yt,Xt,bt,Ct.z,null,rt)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(X))){let Yt=R.update(P),Xt=P.material;if(pt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ct.copy(P.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),Ct.copy(Yt.boundingSphere.center)),Ct.applyMatrix4(P.matrixWorld).applyMatrix4(ct)),Array.isArray(Xt)){let Kt=Yt.groups;for(let te=0,me=Kt.length;te<me;te++){let ve=Kt[te],ee=Xt[ve.materialIndex];ee&&ee.visible&&_.push(P,Yt,ee,bt,Ct.z,ve,rt)}}else Xt.visible&&_.push(P,Yt,Xt,bt,Ct.z,null,rt)}}let Wt=P.children;for(let Yt=0,Xt=Wt.length;Yt<Xt;Yt++)Vt(Wt[Yt],rt,bt,pt)}function Zt(P,rt,bt,pt){let{opaque:mt,transmissive:Wt,transparent:Yt}=P;S.setupLightsView(bt),j===!0&&ut.setGlobalState(D.clippingPlanes,bt),pt&&T.viewport(nt.copy(pt)),mt.length>0&&Ze(mt,rt,bt),Wt.length>0&&Ze(Wt,rt,bt),Yt.length>0&&Ze(Yt,rt,bt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function fe(P,rt,bt,pt){if((bt.isScene===!0?bt.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[pt.id]===void 0){let ee=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[pt.id]=new Gn(1,1,{generateMipmaps:!0,type:ee?yi:Wn,minFilter:ws,samples:Math.max(4,z.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Wt=S.state.transmissionRenderTarget[pt.id],Yt=pt.viewport||nt;Wt.setSize(Yt.z*D.transmissionResolutionScale,Yt.w*D.transmissionResolutionScale);let Xt=D.getRenderTarget(),Kt=D.getActiveCubeFace(),te=D.getActiveMipmapLevel();D.setRenderTarget(Wt),D.getClearColor(Mt),_t=D.getClearAlpha(),_t<1&&D.setClearColor(16777215,.5),D.clear(),Nt&&Rt.render(bt);let me=D.toneMapping;D.toneMapping=mi;let ve=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),S.setupLightsView(pt),j===!0&&ut.setGlobalState(D.clippingPlanes,pt),Ze(P,bt,pt),xt.updateMultisampleRenderTarget(Wt),xt.updateRenderTargetMipmap(Wt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ce=0,nn=rt.length;Ce<nn;Ce++){let He=rt[Ce],{object:Fe,geometry:wn,material:Jt,group:Ln}=He;if(Jt.side===Qe&&Fe.layers.test(pt.layers)){let we=Jt.side;Jt.side=Un,Jt.needsUpdate=!0,zn(Fe,bt,pt,wn,Jt,Ln),Jt.side=we,Jt.needsUpdate=!0,ee=!0}}ee===!0&&(xt.updateMultisampleRenderTarget(Wt),xt.updateRenderTargetMipmap(Wt))}D.setRenderTarget(Xt,Kt,te),D.setClearColor(Mt,_t),ve!==void 0&&(pt.viewport=ve),D.toneMapping=me}function Ze(P,rt,bt){let pt=rt.isScene===!0?rt.overrideMaterial:null;for(let mt=0,Wt=P.length;mt<Wt;mt++){let Yt=P[mt],{object:Xt,geometry:Kt,group:te}=Yt,me=Yt.material;me.allowOverride===!0&&pt!==null&&(me=pt),Xt.layers.test(bt.layers)&&zn(Xt,rt,bt,Kt,me,te)}}function zn(P,rt,bt,pt,mt,Wt){O!==null&&mt.isNodeMaterial&&O.setObject(P,mt),P.onBeforeRender(D,rt,bt,pt,mt,Wt),P.modelViewMatrix.multiplyMatrices(bt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),mt.onBeforeRender(D,rt,bt,pt,P,Wt),mt.transparent===!0&&mt.side===Qe&&mt.forceSinglePass===!1?(mt.side=Un,mt.needsUpdate=!0,D.renderBufferDirect(bt,rt,pt,mt,P,Wt),mt.side=Ms,mt.needsUpdate=!0,D.renderBufferDirect(bt,rt,pt,mt,P,Wt),mt.side=Qe):D.renderBufferDirect(bt,rt,pt,mt,P,Wt),P.onAfterRender(D,rt,bt,pt,mt,Wt)}function dn(P,rt,bt){rt.isScene!==!0&&(rt=It);let pt=ft.get(P),mt=S.state.lights,Wt=S.state.shadowsArray,Yt=mt.state.version,Xt=F.getParameters(P,mt.state,Wt,rt,bt,S.state.lightProbeGridArray),Kt=F.getProgramCacheKey(Xt),te=pt.programs;pt.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?rt.environment:null,pt.fog=rt.fog;let me=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;pt.envMap=V.get(P.envMap||pt.environment,me),pt.envMapRotation=pt.environment!==null&&P.envMap===null?rt.environmentRotation:P.envMapRotation,te===void 0&&(P.addEventListener("dispose",Ee),te=new Map,pt.programs=te);let ve=te.get(Kt);if(ve!==void 0){if(pt.currentProgram===ve&&pt.lightsStateVersion===Yt)return be(P,Xt),ve}else Xt.uniforms=F.getUniforms(P),O!==null&&P.isNodeMaterial&&O.build(P,bt,Xt),P.onBeforeCompile(Xt,D),ve=F.acquireProgram(Xt,Kt),te.set(Kt,ve),pt.uniforms=Xt.uniforms;let ee=pt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ee.clippingPlanes=ut.uniform),be(P,Xt),pt.needsLights=ge(P),pt.lightsStateVersion=Yt,pt.needsLights&&(ee.ambientLightColor.value=mt.state.ambient,ee.lightProbe.value=mt.state.probe,ee.sunLights.value=mt.state.sun,ee.sunLightShadows.value=mt.state.sunShadow,ee.directionalLights.value=mt.state.directional,ee.directionalLightShadows.value=mt.state.directionalShadow,ee.spotLights.value=mt.state.spot,ee.spotLightShadows.value=mt.state.spotShadow,ee.rectAreaLights.value=mt.state.rectArea,ee.ltc_1.value=mt.state.rectAreaLTC1,ee.ltc_2.value=mt.state.rectAreaLTC2,ee.pointLights.value=mt.state.point,ee.pointLightShadows.value=mt.state.pointShadow,ee.hemisphereLights.value=mt.state.hemi,ee.sunShadowMatrix.value=mt.state.sunShadowMatrix,ee.sunShadowCascade.value=mt.state.sunShadowCascade,ee.directionalShadowMatrix.value=mt.state.directionalShadowMatrix,ee.spotLightMatrix.value=mt.state.spotLightMatrix,ee.spotLightMap.value=mt.state.spotLightMap,ee.pointShadowMatrix.value=mt.state.pointShadowMatrix),pt.lightProbeGrid=S.state.lightProbeGridArray.length>0,pt.currentProgram=ve,pt.uniformsList=null,ve}function Pn(P){if(P.uniformsList===null){let rt=P.currentProgram.getUniforms();P.uniformsList=qr.seqWithValue(rt.seq,P.uniforms)}return P.uniformsList}function be(P,rt){let bt=ft.get(P);bt.outputColorSpace=rt.outputColorSpace,bt.batching=rt.batching,bt.batchingColor=rt.batchingColor,bt.instancing=rt.instancing,bt.instancingColor=rt.instancingColor,bt.instancingMorph=rt.instancingMorph,bt.skinning=rt.skinning,bt.morphTargets=rt.morphTargets,bt.morphNormals=rt.morphNormals,bt.morphColors=rt.morphColors,bt.morphTargetsCount=rt.morphTargetsCount,bt.numClippingPlanes=rt.numClippingPlanes,bt.numIntersection=rt.numClipIntersection,bt.vertexAlphas=rt.vertexAlphas,bt.vertexTangents=rt.vertexTangents,bt.toneMapping=rt.toneMapping}function ss(P,rt){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(rt.matrixWorld);for(let bt=0,pt=P.length;bt<pt;bt++){let mt=P[bt];if(mt.texture!==null&&mt.boundingBox.containsPoint(b))return mt}return null}function Si(P,rt,bt,pt,mt){rt.isScene!==!0&&(rt=It),xt.resetTextureUnits();let Wt=rt.fog,Yt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial?rt.environment:null,Xt=et===null?D.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:_e.workingColorSpace,Kt=pt.isMeshStandardMaterial||pt.isMeshLambertMaterial&&!pt.envMap||pt.isMeshPhongMaterial&&!pt.envMap,te=V.get(pt.envMap||Yt,Kt),me=pt.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,ve=!!bt.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),ee=!!bt.morphAttributes.position,Ce=!!bt.morphAttributes.normal,nn=!!bt.morphAttributes.color,He=mi;pt.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(He=D.toneMapping);let Fe=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,wn=Fe!==void 0?Fe.length:0,Jt=ft.get(pt),Ln=S.state.lights;if(j===!0&&(st===!0||P!==Z)){let Oe=P===Z&&pt.id===K;ut.setState(pt,P,Oe)}let we=!1;pt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ln.state.version||Jt.outputColorSpace!==Xt||mt.isBatchedMesh&&Jt.batching===!1||!mt.isBatchedMesh&&Jt.batching===!0||mt.isBatchedMesh&&Jt.batchingColor===!0&&mt._colorsTexture===null||mt.isBatchedMesh&&Jt.batchingColor===!1&&mt._colorsTexture!==null||mt.isInstancedMesh&&Jt.instancing===!1||!mt.isInstancedMesh&&Jt.instancing===!0||mt.isSkinnedMesh&&Jt.skinning===!1||!mt.isSkinnedMesh&&Jt.skinning===!0||mt.isInstancedMesh&&Jt.instancingColor===!0&&mt.instanceColor===null||mt.isInstancedMesh&&Jt.instancingColor===!1&&mt.instanceColor!==null||mt.isInstancedMesh&&Jt.instancingMorph===!0&&mt.morphTexture===null||mt.isInstancedMesh&&Jt.instancingMorph===!1&&mt.morphTexture!==null||Jt.envMap!==te||pt.fog===!0&&Jt.fog!==Wt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==ut.numPlanes||Jt.numIntersection!==ut.numIntersection)||Jt.vertexAlphas!==me||Jt.vertexTangents!==ve||Jt.morphTargets!==ee||Jt.morphNormals!==Ce||Jt.morphColors!==nn||Jt.toneMapping!==He||Jt.morphTargetsCount!==wn||!!Jt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Jt.__version=pt.version);let Qn=Jt.currentProgram;we===!0&&(Qn=dn(pt,rt,mt),O&&pt.isNodeMaterial&&O.onUpdateProgram(pt,Qn,Jt));let wi=!1,rs=!1,ir=!1,De=Qn.getUniforms(),Je=Jt.uniforms;if(T.useProgram(Qn.program)&&(wi=!0,rs=!0,ir=!0),pt.id!==K&&(K=pt.id,rs=!0),Jt.needsLights){let Oe=ss(S.state.lightProbeGridArray,mt);Jt.lightProbeGrid!==Oe&&(Jt.lightProbeGrid=Oe,rs=!0)}if(wi||Z!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),De.setValue(Y,"projectionMatrix",P.projectionMatrix),De.setValue(Y,"viewMatrix",P.matrixWorldInverse);let as=De.map.cameraPosition;as!==void 0&&as.setValue(Y,dt.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&De.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&De.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),Z!==P&&(Z=P,rs=!0,ir=!0)}if(Jt.needsLights&&(Ln.state.sunShadowMap.length>0&&De.setValue(Y,"sunShadowMap",Ln.state.sunShadowMap,xt),Ln.state.directionalShadowMap.length>0&&De.setValue(Y,"directionalShadowMap",Ln.state.directionalShadowMap,xt),Ln.state.spotShadowMap.length>0&&De.setValue(Y,"spotShadowMap",Ln.state.spotShadowMap,xt),Ln.state.pointShadowMap.length>0&&De.setValue(Y,"pointShadowMap",Ln.state.pointShadowMap,xt)),mt.isSkinnedMesh){De.setOptional(Y,mt,"bindMatrix"),De.setOptional(Y,mt,"bindMatrixInverse");let Oe=mt.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),De.setValue(Y,"boneTexture",Oe.boneTexture,xt))}mt.isBatchedMesh&&(De.setOptional(Y,mt,"batchingTexture"),De.setValue(Y,"batchingTexture",mt._matricesTexture,xt),De.setOptional(Y,mt,"batchingIdTexture"),De.setValue(Y,"batchingIdTexture",mt._indirectTexture,xt),De.setOptional(Y,mt,"batchingColorTexture"),mt._colorsTexture!==null&&De.setValue(Y,"batchingColorTexture",mt._colorsTexture,xt));let os=bt.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&I.update(mt,bt,Qn),(rs||Jt.receiveShadow!==mt.receiveShadow)&&(Jt.receiveShadow=mt.receiveShadow,De.setValue(Y,"receiveShadow",mt.receiveShadow)),(pt.isMeshStandardMaterial||pt.isMeshLambertMaterial||pt.isMeshPhongMaterial)&&pt.envMap===null&&rt.environment!==null&&(Je.envMapIntensity.value=rt.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=DM()),rs){if(De.setValue(Y,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&en(Je,ir),Wt&&pt.fog===!0&&U.refreshFogUniforms(Je,Wt),U.refreshMaterialUniforms(Je,pt,ht,ot,S.state.transmissionRenderTarget[P.id]),Jt.needsLights&&Jt.lightProbeGrid){let Oe=Jt.lightProbeGrid;Je.probesSH.value=Oe.texture,Je.probesMin.value.copy(Oe.boundingBox.min),Je.probesMax.value.copy(Oe.boundingBox.max),Je.probesResolution.value.copy(Oe.resolution)}qr.upload(Y,Pn(Jt),Je,xt)}if(pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(qr.upload(Y,Pn(Jt),Je,xt),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&De.setValue(Y,"center",mt.center),De.setValue(Y,"modelViewMatrix",mt.modelViewMatrix),De.setValue(Y,"normalMatrix",mt.normalMatrix),De.setValue(Y,"modelMatrix",mt.matrixWorld),pt.uniformsGroups!==void 0){let Oe=pt.uniformsGroups;for(let as=0,sr=Oe.length;as<sr;as++){let Kf=Oe[as];vt.update(Kf,Qn),vt.bind(Kf,Qn)}}return Qn}function en(P,rt){P.ambientLightColor.needsUpdate=rt,P.lightProbe.needsUpdate=rt,P.sunLights.needsUpdate=rt,P.sunLightShadows.needsUpdate=rt,P.directionalLights.needsUpdate=rt,P.directionalLightShadows.needsUpdate=rt,P.pointLights.needsUpdate=rt,P.pointLightShadows.needsUpdate=rt,P.spotLights.needsUpdate=rt,P.spotLightShadows.needsUpdate=rt,P.rectAreaLights.needsUpdate=rt,P.hemisphereLights.needsUpdate=rt}function ge(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(P,rt,bt){let pt=ft.get(P);pt.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,pt.__autoAllocateDepthBuffer===!1&&(pt.__useRenderToTexture=!1),ft.get(P.texture).__webglTexture=rt,ft.get(P.depthTexture).__webglTexture=pt.__autoAllocateDepthBuffer?void 0:bt,pt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,rt){let bt=ft.get(P);bt.__webglFramebuffer=rt,bt.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(P,rt=0,bt=0){et=P,H=rt,W=bt;let pt=null,mt=!1,Wt=!1;if(P){let Xt=ft.get(P);if(Xt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(Y.FRAMEBUFFER,Xt.__webglFramebuffer),nt.copy(P.viewport),Tt.copy(P.scissor),At=P.scissorTest,T.viewport(nt),T.scissor(Tt),T.setScissorTest(At),K=-1;return}else if(Xt.__webglFramebuffer===void 0)xt.setupRenderTarget(P);else if(Xt.__hasExternalTextures)xt.rebindTextures(P,ft.get(P.texture).__webglTexture,ft.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let me=P.depthTexture;if(Xt.__boundDepthTexture!==me){if(me!==null&&ft.has(me)&&(P.width!==me.image.width||P.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(P)}}let Kt=P.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Wt=!0);let te=ft.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(te[rt])?pt=te[rt][bt]:pt=te[rt],mt=!0):P.samples>0&&xt.useMultisampledRTT(P)===!1?pt=ft.get(P).__webglMultisampledFramebuffer:Array.isArray(te)?pt=te[bt]:pt=te,nt.copy(P.viewport),Tt.copy(P.scissor),At=P.scissorTest}else nt.copy(Ot).multiplyScalar(ht).floor(),Tt.copy(q).multiplyScalar(ht).floor(),At=yt;if(bt!==0&&(pt=B),T.bindFramebuffer(Y.FRAMEBUFFER,pt)&&T.drawBuffers(P,pt),T.viewport(nt),T.scissor(Tt),T.setScissorTest(At),mt){let Xt=ft.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Xt.__webglTexture,bt)}else if(Wt){let Xt=rt;for(let Kt=0;Kt<P.textures.length;Kt++){let te=ft.get(P.textures[Kt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Kt,te.__webglTexture,bt,Xt)}}else if(P!==null&&bt!==0){let Xt=ft.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Xt.__webglTexture,bt)}K=-1};function je(P){let rt=ft.get(P);return(rt.__readFormat!==P.format||rt.__readType!==P.type)&&(rt.__readFormat=P.format,rt.__readType=P.type,rt.__formatReadable=z.textureFormatReadable(P.format),rt.__typeReadable=z.textureTypeReadable(P.type)),rt}this.readRenderTargetPixels=function(P,rt,bt,pt,mt,Wt,Yt,Xt=0){if(!(P&&P.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=ft.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Yt!==void 0&&(Kt=Kt[Yt]),Kt){T.bindFramebuffer(Y.FRAMEBUFFER,Kt);try{let te=P.textures[Xt],me=te.format,ve=te.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Xt);let ee=je(te);if(ee.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=P.width-pt&&bt>=0&&bt<=P.height-mt&&Y.readPixels(rt,bt,pt,mt,wt.convert(me),wt.convert(ve),Wt)}finally{let te=et!==null?ft.get(et).__webglFramebuffer:null;T.bindFramebuffer(Y.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(P,rt,bt,pt,mt,Wt,Yt,Xt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=ft.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Yt!==void 0&&(Kt=Kt[Yt]),Kt)if(rt>=0&&rt<=P.width-pt&&bt>=0&&bt<=P.height-mt){T.bindFramebuffer(Y.FRAMEBUFFER,Kt);let te=P.textures[Xt],me=te.format,ve=te.type;P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Xt);let ee=je(te);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ce),Y.bufferData(Y.PIXEL_PACK_BUFFER,Wt.byteLength,Y.STREAM_READ),Y.readPixels(rt,bt,pt,mt,wt.convert(me),wt.convert(ve),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let nn=et!==null?ft.get(et).__webglFramebuffer:null;T.bindFramebuffer(Y.FRAMEBUFFER,nn);let He=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await vp(Y,He,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ce),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Wt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Ce),Y.deleteSync(He),Wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,rt=null,bt=0){let pt=Math.pow(2,-bt),mt=Math.floor(P.image.width*pt),Wt=Math.floor(P.image.height*pt),Yt=rt!==null?rt.x:0,Xt=rt!==null?rt.y:0;xt.setTexture2D(P,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,bt,0,0,Yt,Xt,mt,Wt),T.unbindTexture()},this.copyTextureToTexture=function(P,rt,bt=null,pt=null,mt=0,Wt=0){let Yt,Xt,Kt,te,me,ve,ee,Ce,nn,He=P.isCompressedTexture?P.mipmaps[Wt]:P.image;if(bt!==null)Yt=bt.max.x-bt.min.x,Xt=bt.max.y-bt.min.y,Kt=bt.isBox3?bt.max.z-bt.min.z:1,te=bt.min.x,me=bt.min.y,ve=bt.isBox3?bt.min.z:0;else{let Je=Math.pow(2,-mt);Yt=Math.floor(He.width*Je),Xt=Math.floor(He.height*Je),P.isDataArrayTexture?Kt=He.depth:P.isData3DTexture?Kt=Math.floor(He.depth*Je):Kt=1,te=0,me=0,ve=0}pt!==null?(ee=pt.x,Ce=pt.y,nn=pt.z):(ee=0,Ce=0,nn=0);let Fe=wt.convert(rt.format),wn=wt.convert(rt.type),Jt;rt.isData3DTexture?(xt.setTexture3D(rt,0),Jt=Y.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(xt.setTexture2DArray(rt,0),Jt=Y.TEXTURE_2D_ARRAY):(xt.setTexture2D(rt,0),Jt=Y.TEXTURE_2D),T.activeTexture(Y.TEXTURE0),T.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,rt.flipY),T.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),T.pixelStorei(Y.UNPACK_ALIGNMENT,rt.unpackAlignment);let Ln=T.getParameter(Y.UNPACK_ROW_LENGTH),we=T.getParameter(Y.UNPACK_IMAGE_HEIGHT),Qn=T.getParameter(Y.UNPACK_SKIP_PIXELS),wi=T.getParameter(Y.UNPACK_SKIP_ROWS),rs=T.getParameter(Y.UNPACK_SKIP_IMAGES);T.pixelStorei(Y.UNPACK_ROW_LENGTH,He.width),T.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,He.height),T.pixelStorei(Y.UNPACK_SKIP_PIXELS,te),T.pixelStorei(Y.UNPACK_SKIP_ROWS,me),T.pixelStorei(Y.UNPACK_SKIP_IMAGES,ve);let ir=P.isDataArrayTexture||P.isData3DTexture,De=rt.isDataArrayTexture||rt.isData3DTexture;if(P.isDepthTexture){let Je=ft.get(P),os=ft.get(rt),Oe=ft.get(Je.__renderTarget),as=ft.get(os.__renderTarget);T.bindFramebuffer(Y.READ_FRAMEBUFFER,Oe.__webglFramebuffer),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let sr=0;sr<Kt;sr++)ir&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ft.get(P).__webglTexture,mt,ve+sr),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ft.get(rt).__webglTexture,Wt,nn+sr)),Y.blitFramebuffer(te,me,Yt,Xt,ee,Ce,Yt,Xt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);T.bindFramebuffer(Y.READ_FRAMEBUFFER,null),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(mt!==0||P.isRenderTargetTexture||ft.has(P)){let Je=ft.get(P),os=ft.get(rt);T.bindFramebuffer(Y.READ_FRAMEBUFFER,L),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,k);for(let Oe=0;Oe<Kt;Oe++)ir?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Je.__webglTexture,mt,ve+Oe):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Je.__webglTexture,mt),De?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,os.__webglTexture,Wt,nn+Oe):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,os.__webglTexture,Wt),mt!==0?Y.blitFramebuffer(te,me,Yt,Xt,ee,Ce,Yt,Xt,Y.COLOR_BUFFER_BIT,Y.NEAREST):De?Y.copyTexSubImage3D(Jt,Wt,ee,Ce,nn+Oe,te,me,Yt,Xt):Y.copyTexSubImage2D(Jt,Wt,ee,Ce,te,me,Yt,Xt);T.bindFramebuffer(Y.READ_FRAMEBUFFER,null),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else De?P.isDataTexture||P.isData3DTexture?Y.texSubImage3D(Jt,Wt,ee,Ce,nn,Yt,Xt,Kt,Fe,wn,He.data):rt.isCompressedArrayTexture?Y.compressedTexSubImage3D(Jt,Wt,ee,Ce,nn,Yt,Xt,Kt,Fe,He.data):Y.texSubImage3D(Jt,Wt,ee,Ce,nn,Yt,Xt,Kt,Fe,wn,He):P.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Wt,ee,Ce,Yt,Xt,Fe,wn,He.data):P.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Wt,ee,Ce,He.width,He.height,Fe,He.data):Y.texSubImage2D(Y.TEXTURE_2D,Wt,ee,Ce,Yt,Xt,Fe,wn,He);T.pixelStorei(Y.UNPACK_ROW_LENGTH,Ln),T.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,we),T.pixelStorei(Y.UNPACK_SKIP_PIXELS,Qn),T.pixelStorei(Y.UNPACK_SKIP_ROWS,wi),T.pixelStorei(Y.UNPACK_SKIP_IMAGES,rs),Wt===0&&rt.generateMipmaps&&Y.generateMipmap(Jt),T.unbindTexture()},this.initRenderTarget=function(P){ft.get(P).__webglFramebuffer===void 0&&xt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?xt.setTextureCube(P,0):P.isData3DTexture?xt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?xt.setTexture2DArray(P,0):xt.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){H=0,W=0,et=null,T.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var m0=lo($r(),1);(function(n){"use strict";let t=Object.freeze([Object.freeze({key:"sky",label:"Sky strip"}),Object.freeze({key:"precipitation",label:"Rain, snow and hail"}),Object.freeze({key:"wind",label:"Wind effects"}),Object.freeze({key:"reflections",label:"Sun, moon and cloud reflections"}),Object.freeze({key:"trees",label:"Trees and palms"}),Object.freeze({key:"traffic",label:"Road traffic"}),Object.freeze({key:"sidewalk",label:"Walkers and cyclists"}),Object.freeze({key:"boats",label:"Boats"}),Object.freeze({key:"beachPlay",label:"Beach play"})]),e=new Set(t.map(({key:u})=>u)),i=new Set(["left","center","right"]),s=(u,h)=>u==="dockAlignment"?i.has(h):e.has(u)&&typeof h=="boolean",r=u=>i.has(u?.dockAlignment)?u.dockAlignment:"right";function o(u){return u===void 0||!!(u&&typeof u=="object"&&!Array.isArray(u)&&Object.entries(u).every(([h,f])=>s(h,f)))}function a(u,h){return u?.[h]!==!1}function c(u,h,f){if(!s(h,f)||f===(h==="dockAlignment"?r(u):a(u,h)))return u;let d={...u};return f===(h==="dockAlignment"?"right":!0)?delete d[h]:d[h]=f,Object.keys(d).length?d:void 0}function l(u,h){return a(h,"wind")?u:{...u,windSpeed:0,windBearing:void 0}}n.RoomcraftSceneSettings=Object.freeze({features:t,valid:o,enabled:a,withFeature:c,wind:l,dockAlignment:r})})(typeof window>"u"?globalThis:window);var ya=(typeof window>"u"?globalThis:window).RoomcraftSceneSettings,im=ya.features,ZA=ya.valid,xi=ya.enabled,Hl=ya.wind,sm=ya.dockAlignment;function Xn(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new he,l=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=rm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let m=rm(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function rm(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Te(o,e,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<e;m++){let y=u.getComponent(f,m);a.setComponent(f+h,m,y)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var xa=new G;function ri(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;xa.copy(t),xa[i]=0,xa.normalize();let l=.5*o/(o+a),u=1-xa.angleTo(n)/c;return Math.sign(xa[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Gl=class n extends Ae{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new G,l=new G,u=new G(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,y=new G,p=.5/o;for(let g=0,x=0;g<h.length;g+=3,x+=2)switch(c.fromArray(h,g),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),h[g+0]=u.x*Math.sign(c.x)+l.x*r,h[g+1]=u.y*Math.sign(c.y)+l.y*r,h[g+2]=u.z*Math.sign(c.z)+l.z*r,f[g+0]=l.x,f[g+1]=l.y,f[g+2]=l.z,Math.floor(g/m)){case 0:y.set(1,0,0),d[x+0]=ri(y,l,"z","y",r,i),d[x+1]=1-ri(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),d[x+0]=1-ri(y,l,"z","y",r,i),d[x+1]=1-ri(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),d[x+0]=1-ri(y,l,"x","z",r,t),d[x+1]=ri(y,l,"z","x",r,i);break;case 3:y.set(0,-1,0),d[x+0]=1-ri(y,l,"x","z",r,t),d[x+1]=1-ri(y,l,"z","x",r,i);break;case 4:y.set(0,0,1),d[x+0]=1-ri(y,l,"x","y",r,t),d[x+1]=1-ri(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),d[x+0]=ri(y,l,"x","y",r,t),d[x+1]=1-ri(y,l,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var om=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),FM=Math.PI*2;function UM(){let n=new se,t=new Ae(1,1,1),e=new Re(1,12,8),i=new Map;function s(a){return i.has(a)||i.set(a,new Xe({color:a,roughness:.83})),i.get(a)}function r(a,c,l,u,h,f,d,m,y){let p=new ce(c,typeof l=="string"?s(l):l);return p.position.set(u,h,f),p.scale.set(d,m,y),a.add(p),p}function o(){let a=new Map;for(let l of n.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let h=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),f=new ce(Xn(h),l);f.castShadow=u.some(d=>d.castShadow),h.forEach(d=>d.dispose()),n.remove(...u),n.add(f)}let c=new Set;n.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:n,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function kM({root:n,box:t},e,i,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,i*.065),u=new Ne({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:Qe});t(n,o,0,1.8,0,e*.91,3.6,i*.88),t(n,r,0,14,0,e*.95,21,i*.93).castShadow=!0;for(let d of[-1,1])t(n,s?"#deb181":"#aa785d",d*e*.232,14,i*.469,e*.448,17,i*.021),t(n,"#c8a378",d*e*.072,14.5,i*.492,e*.047,1.25,i*.016);t(n,o,0,a,0,e,3,i).castShadow=!0;let h=(a+c)/2,f=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(n,o,d,c,0,l,1.8,i),t(n,u,d,h,0,l*.17,f,i-l*2);for(let m of[-i/2+l/2,i/2-l/2])t(n,o,d,h,m,l,f,l)}for(let d of[-i/2+l/2,i/2-l/2])t(n,o,0,c,d,e-l*2,1.8,l),t(n,u,0,h,d,e-l*2,f,l*.17);return t(n,o,0,c+1.5,-i*.325,e*.77,2.7,i*.105),t(n,s?"#cde8d3":"#eed59e",0,c+.42,-i*.265,e*.72,.7,i*.016),{base:a,top:c}}function OM({box:n,oval:t,root:e},i,s,r){let o=new se;o.name="fish-"+i,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new se;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),n(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function BM(n,t,e,i,s,r){let{root:o,box:a,oval:c}=n,l=s-4,u=new Ne({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),h=new Ne({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,i+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let m=0;m<18;m++){let y=(m*7%19/19-.5)*t*.83,p=(m*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][m%3],y,i+3,p,r*(1+m%4*.34),.85,r*1.15)}for(let[m,y]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let g=p-1.5,x=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],m*t+g*r,i+3+(2+p*1.6)*Math.min(1.15,r),y*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);x.rotation.z=g*.22}let f=["#e99660","#ecc56d","#bc92b8"].map((m,y)=>OM(n,y,r*(1.72-y*.17),m)),d=Array.from({length:5},(m,y)=>{let p=r*(.45+y%3*.18),g=c(o,h,0,0,0,p,p,p);return g.name="bubble-"+y,g});return m=>{for(let[y,{fish:p,tail:g}]of f.entries()){let x=m*(.43+y*.06)+y*2.07+.5,v=t*(.24+y*.036),b=e*(.17+y*.038);p.position.set(Math.cos(x)*v,i+10+y*3.65+Math.sin(x*1.7)*2.15,Math.sin(x)*b),p.rotation.y=-Math.atan2(Math.cos(x)*b,-Math.sin(x)*v),g.rotation.y=Math.sin(m*8.6+y)*.39}for(let[y,p]of d.entries()){let g=(m*.3+y/d.length)%1;p.position.set(t*.33+Math.sin(g*FM+y)*r,i+5+g*20,e*.23),p.visible=g>.08&&g<.94}}}function zM({root:n,box:t,oval:e},i,s,r,o,a){t(n,"#d4a675",0,r+2.15,0,i*.93,1.6,s*.9);for(let f=0;f<16;f++)e(n,f%2?"#a98467":"#e1c491",(f*11%17/17-.5)*i*.81,r+3,(f*5%17/17-.5)*s*.76,a*1.5,.66,a);e(n,"#a07c66",-i*.29,r+4.5,-s*.13,i*.15,4.7,s*.19),e(n,"#c8a17c",-i*.29,r+7.1,-s*.17,i*.135,4.8,s*.154),e(n,"#624b45",-i*.29,r+4,-s*.011,i*.069,2.5,s*.063),e(n,"#e8c99b",i*.29,r+3.6,-s*.16,i*.1,2.2,s*.16),e(n,"#89ad9e",i*.29,r+5.1,-s*.16,i*.075,.9,s*.115);let c=t(n,"#936b52",i*.11,r+4,-s*.24,i*.27,2.6,s*.083);c.rotation.y=.25;for(let f=0;f<5;f++){let d=e(n,f%2?"#829468":"#a7ad78",-i*.37+f*a,r+6+f%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(f-2)*.24}for(let f=0;f<7;f++)t(n,"#746462",(f/6-.5)*i*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new se;l.name="gecko",n.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(f,d)=>{let m=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*m,1.13*m,1.3*m)}),h=[];for(let f of[-1,1]){e(l,"#463946",5.15*a,1.34*a,f*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let m=new se;m.position.set(d*a*2.1,-.7*a,f*a*1.42),l.add(m);let y=e(m,"#d29861",-.48*d*a,-.13*a,f*1.12*a,.66*a,.54*a,1.43*a);y.rotation.y=f*d*.28;for(let p of[-1,0,1])e(m,"#ecc297",(p*.42+.5)*a,-.55*a,f*2.28*a,.55*a,.22*a,.23*a);h.push({leg:m,side:f,front:d})}}for(let f=0;f<6;f++)e(l,"#96664f",(f%3-1)*2.2*a,1.88*a,(f<3?-.66:.66)*a,.66*a,.25*a,.46*a);return f=>{let d=f*.35+.7,m=Math.cos(d)*i*.13,y=Math.sin(d)*s*.09+s*.139;l.position.set(m,r+5.1+Math.sin(f*3.6)*.25,y),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*i*.13);for(let[p,g]of u.entries()){let x=p+1;g.position.set(-(3.55+x*1.24)*a,-.19*x*a,Math.sin(f*1.75-x*.55)*x*a*.32)}for(let{leg:p,side:g,front:x}of h)p.rotation.y=Math.sin(f*3.6)*g*x*.31}}function am(n,t,e){if(!Object.hasOwn(om,n))return null;let i=om[n],s=UM(),r=i==="aquarium",{base:o,top:a}=kM(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?BM(s,t,e,o,a,c):zM(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,h){l(Math.max(0,h))}}}var cm=`
  varying vec2 panelUv;
  void main() {
    panelUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,HM=`
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
`,GM=`
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
`;function lm(n,t,e){let i={value:0},s=new ce(new Rn(e*.78,43),new Be({uniforms:{screenTime:i},vertexShader:cm,fragmentShader:HM}));s.name="storybook-tv-screen",s.position.set(-t*.155-.84,59,0),s.rotation.y=-Math.PI/2;let r=new ce(new Rn(t*.27,e*.79),new Be({uniforms:{screenTime:i},vertexShader:cm,fragmentShader:GM,transparent:!0,depthWrite:!1,blending:$i}));return r.name="storybook-tv-spill",r.position.set(-t*.325,28.08,0),r.rotation.x=-Math.PI/2,s.visible=r.visible=!1,n.root.add(s,r),n.animate=(o,a)=>{let c=o?.active===!0;s.visible=r.visible=c,c&&(i.value=Number.isFinite(a)?Math.max(0,Math.floor(a*12)/12):0)},n}(()=>{"use strict";let n=[["baby-toys","Baby toys"],["baby-activities","Baby activities"],["baby-mats","Play mats"],["baby-safety","Colorful safety walls & gates"],["climbing","Soft climbing blocks"],["fireplace","Fireplace & shelves"],["balcony","Balcony plant sets"],["fans","Ceiling fans"],["cleaning","Robot vacuums"],["toy-storage","Toy storage"],["play-furniture","Play furniture"],["pets","Pets"]],t={sage:["Sage","#9bb599","#dce8cc","#f5edcf","#5b755e"],mint:["Mint","#95c8b5","#d6eee0","#f5f9e9","#4f8b7c"],sky:["Sky blue","#98c5d7","#d5ebf0","#f5f8f2","#557e91"],peach:["Peach","#e4ac94","#f6d5ba","#fff2dc","#ad7569"],coral:["Coral","#d58e7e","#f5c5ad","#ffe5d0","#9a5d55"],lavender:["Lavender","#b6a8cf","#e4ddf0","#f6eff6","#756b9b"],butter:["Butter yellow","#e2c681","#f4e3af","#fff6dc","#a58a4e"],cream:["Cream","#e2d5bd","#f5eada","#fff9ec","#998972"],white:["Warm white","#e8e9de","#f8f8ee","#ffffff","#929990"],oak:["Oak","#bd8b62","#e2b786","#f5dfb7","#74523c"],walnut:["Walnut","#906347","#bb865c","#ebc69a","#513a2d"],charcoal:["Charcoal","#39464d","#657680","#d6e0d6","#1d292f"],brass:["Brass","#c9a872","#e9d3a2","#fff2d0","#7f6744"],terracotta:["Terracotta","#b87859","#dba27b","#f1d3af","#744b3a"],forest:["Forest green","#668a63","#a3bb80","#e5e7bc","#355d45"],blush:["Blush","#dbb2a9","#f1d6cc","#fff1e4","#a67b79"],rainbow:["Multicolor","#e7ab9d","#9cc8bd","#edd18b","#6d7591"],teddy:["Teddy brown","#a98263","#cfab84","#ead5ae","#654c3d"],slate:["Soft gray","#929491","#bdc0bd","#f1f0e9","#55595b"]},e=[],i={"baby-toys":"\u25C9","baby-activities":"\u2726","baby-mats":"\u25A6","baby-safety":"\u25A5",climbing:"\u25B0",fireplace:"\u25A4",balcony:"\u2740",fans:"\u2733",cleaning:"\u25C9","toy-storage":"\u25A5","play-furniture":"\u25A3",pets:"\u25C7",living:"\u273F",bedroom:"\u263E",lighting:"\u2726"},s={"baby-safety":"safety wall",fireplace:"fireplace shelfs",fans:"seiling fan",cleaning:"robot vaccum"};function r(l,u,h,f,d,m,y,p,g={}){for(let x=0;x<p.length;x++){let v=p[x],b=t[v];if(!b)throw new Error("Unknown inventory color: "+v);let _=`${l}-${f}-${v}`;e.push({type:_,label:`${d} \xB7 ${b[0]}`,icon:i[l],w:m,h:y,group:l,artFamily:u,form:h,palette:{base:b[1],accent:b[2],detail:b[3],dark:b[4]},tags:`${g.tags||""} ${s[l]||""}`.trim(),...g.collectionId?{collectionId:g.collectionId}:{},...g.seriesId?{seriesId:g.seriesId}:{},...g.designId?{designId:g.designId}:{},...g.designLabel?{designLabel:g.designLabel}:{},...g.sizeId?{sizeId:g.sizeId}:{},...g.sizeLabel?{sizeLabel:g.sizeLabel}:{},...g.material?{material:g.material}:{},...g.seriesId?{finishId:v,finishLabel:b[0]}:{},...g.legacy?{legacy:!0}:{},...g.atlas&&x===0?{atlas:g.atlas}:{},...g.mount?{mount:g.mount}:{},...g.visualKind?{visualKind:g.visualKind}:{},...g.lightForm?{lightForm:g.lightForm}:{},...g.renderLayer?{renderLayer:g.renderLayer}:{}})}}r("baby-toys","softToy","ball","soft-ball","Soft play ball",48,48,["sage","peach","sky","butter"],{tags:"8 month baby roll"}),r("baby-toys","softToy","texturedBall","sensory-ball","Textured sensory ball",48,48,["sky","mint","lavender","coral"],{atlas:"sensoryBall",tags:"8 month baby sensory"}),r("baby-toys","softToy","book","cloth-book","Cloth crinkle book",61,48,["sage","peach","sky"],{tags:"baby fabric book"}),r("baby-toys","softToy","book","board-book","Chunky board book",59,45,["butter","mint"],{tags:"baby books"}),r("baby-toys","softToy","cups","stacking-cups","Large stacking cups",70,56,["peach","sage","sky","lavender"],{tags:"baby nesting cups"}),r("baby-toys","softToy","rings","stacking-rings","Large stacking rings",68,68,["rainbow","butter","mint","coral"],{atlas:"stackRings",tags:"baby stacker"}),r("baby-toys","softToy","blocks","soft-blocks","Soft fabric blocks",88,70,["sage","sky","peach","lavender"],{tags:"large baby blocks"}),r("baby-toys","softToy","plush","plush-bear","Plush bear",58,65,["teddy","cream","blush"],{atlas:"plushBear",tags:"baby stuffed animal"}),r("baby-toys","softToy","photoBunnyPlush","bunny-plush","Soft bunny plush",58,70,["cream"],{tags:"photo 1977 living room baby stuffed animal rabbit"}),r("baby-toys","softToy","teether","teething-ring","Large teething ring",48,48,["mint","butter"],{tags:"baby silicone"}),r("baby-activities","activityToy","playGym","play-gym","Floor play gym",160,126,["sage","peach","sky"],{atlas:"playGym",tags:"baby activity arch"}),r("baby-activities","activityToy","photoWoodArch","wooden-play-arch","Wooden hanging-toy play arch",140,100,["oak"],{tags:"photo 1977 living room baby gym natural wood dangling toys"}),r("baby-activities","activityToy","photoActivityTable","colorful-activity-table","Colorful activity table",118,90,["rainbow"],{tags:"photo 1977 living room baby sensory music table"}),r("baby-activities","activityToy","activityCube","activity-cube","Activity cube",74,74,["oak","sky","mint"],{atlas:"activityCube",tags:"baby activity"}),r("baby-activities","activityToy","activityBoard","activity-board","Large activity board",124,60,["oak","sage","sky"],{atlas:"activityBoard",tags:"baby sensory board"}),r("baby-activities","activityToy","mirror","floor-mirror","Unbreakable play mirror",98,70,["cream","sage"],{tags:"baby floor mirror"}),r("baby-activities","activityToy","tunnel","fabric-tunnel","Soft fabric crawl tunnel",130,74,["sky","butter"],{tags:"baby crawl"}),r("baby-activities","activityToy","sensoryBasket","sensory-basket","Sensory play basket",73,65,["oak","mint"],{tags:"baby toys basket"}),r("baby-activities","activityToy","largeRattle","large-rattle","Large handled rattle",56,42,["peach","sage"],{tags:"baby grasp"}),r("baby-mats","playMat","tummy","tummy-mat","Tummy-time mat",182,130,["sage","peach","sky","butter"],{tags:"baby soft floor mat"}),r("baby-mats","playMat","foam","foam-mat","Large foam play mat",215,155,["rainbow","cream","mint","lavender","coral"],{atlas:"mat",tags:"baby floor padded"}),r("baby-mats","playMat","photoLeafMat","leaf-play-mat","Gray leaf play mat",240,170,["slate"],{tags:"photo 1977 living room baby quilted patterned padded mat"}),r("baby-mats","playMat","photoCheckerMat","checker-puzzle-mat","Brown checker puzzle mat",210,140,["cream"],{tags:"photo 1977 living room baby foam tile checkerboard"}),r("baby-mats","playMat","puzzle","puzzle-mat","Interlocking play mat",205,155,["sage","sky","butter","peach"],{tags:"baby padded puzzle"}),r("baby-mats","playMat","round","round-mat","Round quilted play mat",160,160,["cream","blush","mint"],{tags:"baby floor rug"}),r("baby-safety","paddedPanel","wall","padded-wall","Padded safety wall",156,29,["sage","mint","sky","peach","lavender","butter"],{atlas:"wallPanels",mount:"wall",tags:"color padded wall panel"}),r("baby-safety","paddedPanel","quilted","quilted-wall","Quilted wall panel",146,30,["cream","sky","blush","sage"],{mount:"wall",tags:"color soft wall"}),r("baby-safety","paddedPanel","folding","folding-wall","Folding play barrier",174,34,["sage","peach","lavender"],{tags:"baby color safety wall"}),r("baby-safety","paddedPanel","playpen","playpen","Panel playpen",182,143,["cream","sage","sky"],{tags:"baby enclosure"}),r("baby-safety","paddedPanel","photoPlayYard","rainbow-play-yard","Multicolor bear-panel play yard",320,225,["rainbow"],{tags:"photo 1977 living room baby safety enclosure playpen fence"}),r("baby-safety","paddedPanel","photoBearPanel","bear-panel","Bear-face play yard panel",94,34,["blush","white","mint","butter","sky","lavender"],{tags:"photo 1977 living room baby colorful modular safety gate fence panel"}),r("baby-safety","paddedPanel","gate","stair-gate","Hardware-mounted stair gate",112,29,["white","oak","charcoal"],{atlas:"babyGate",tags:"top of stairs second floor baby gate"}),r("baby-safety","paddedPanel","guard","fireplace-guard","Fireplace barrier",158,35,["charcoal","cream"],{tags:"fireplace baby screen guard"}),r("climbing","foamBlock","cube","foam-cube","Large foam cube",76,76,["sage","sky","peach","butter"],{tags:"soft climbing baby"}),r("climbing","foamBlock","wedge","foam-wedge","Foam climbing wedge",122,81,["rainbow","peach","sage","sky","lavender"],{atlas:"foamWedge",tags:"soft climbing ramp"}),r("climbing","foamBlock","steps","foam-steps","Foam step set",130,102,["rainbow","sage","butter","sky","peach"],{atlas:"foamSteps",tags:"soft climbing blocks"}),r("climbing","foamBlock","ramp","foam-ramp","Gentle foam ramp",157,91,["mint","peach","lavender"],{tags:"soft climbing"}),r("climbing","foamBlock","arch","foam-arch","Foam crawling arch",126,105,["rainbow","sky","sage","butter"],{atlas:"foamArch",tags:"soft climbing"}),r("climbing","foamBlock","tunnel","foam-tunnel","Foam crawl tunnel",155,112,["sage","peach","lavender"],{tags:"soft play climbing"}),r("fireplace","fireplace","mantel","fireplace-mantel","Fireplace mantel",180,64,["oak","walnut","white"],{atlas:"fireplace",tags:"hearth fireplace shelf"}),r("fireplace","fireplace","photoTiledMantel","white-tile-mantel","White mantel with dark tile hearth",180,95,["white"],{tags:"photo 1977 living room fireplace stone tile surround"}),r("fireplace","fireplace","hearth","fireplace-hearth","Stone fireplace hearth",169,87,["cream","charcoal","terracotta"],{tags:"fireplace insert"}),r("fireplace","fireplace","screen","fireplace-screen","Fireplace screen",172,31,["charcoal","brass"],{tags:"fireplace guard"}),r("fireplace","shelf","floating","floating-shelf","Floating mantel shelf",162,40,["oak","walnut","white","charcoal"],{tags:"fireplace wall shelf"}),r("fireplace","shelf","corner","corner-shelf","Corner display shelf",108,108,["oak","white"],{tags:"fireplace shelves"}),r("fireplace","shelf","anchored","anchored-bookcase","Anchored book display shelf",87,152,["oak","white"],{tags:"anchored shelves bookcase"}),r("fireplace","shelf","photoToyShelf","toy-side-shelf","Fireplace side toy shelf",85,130,["oak"],{tags:"photo 1977 living room toy display shelving"}),r("balcony","planterSet","rail","rail-planters","Balcony rail planter set",179,53,["forest","terracotta","white","charcoal"],{atlas:"balconyPlants",tags:"balcony flowers plant set"}),r("balcony","planterSet","cluster","pot-cluster","Balcony pot cluster",137,100,["terracotta","cream","sage","charcoal"],{tags:"balcony plant set"}),r("balcony","planterSet","herbs","herb-trio","Balcony herb trio",133,60,["sage","terracotta","white"],{tags:"balcony plant set herbs"}),r("balcony","planterSet","hanging","hanging-plants","Hanging basket pair",113,77,["forest","terracotta","cream"],{tags:"balcony plant set"}),r("balcony","planterSet","vertical","vertical-garden","Vertical balcony garden",83,160,["forest","sage","walnut"],{tags:"balcony plant set"}),r("balcony","planterSet","tall","tall-planters","Tall balcony planter set",138,119,["forest","terracotta","charcoal"],{tags:"balcony plant set"}),r("fans","ceilingFan","three","three-blade-fan","Three-blade ceiling fan",150,150,["oak","white","charcoal"],{atlas:"ceilingFan",tags:"ceiling fan"}),r("fans","ceilingFan","four","four-blade-fan","Four-blade ceiling fan",155,155,["white","walnut","brass"],{tags:"ceiling fan"}),r("fans","ceilingFan","five","five-blade-fan","Five-blade ceiling fan",160,160,["oak","white","charcoal"],{tags:"ceiling fan"}),r("fans","ceilingFan","light","fan-light","Ceiling fan with light",158,158,["white","brass"],{tags:"ceiling fan light"}),r("fans","ceilingFan","palm","palm-fan","Palm-leaf ceiling fan",168,168,["forest"],{tags:"ceiling fan"}),r("cleaning","robotVacuum","round","round-robot-vac","Round robot vacuum",58,58,["white","charcoal","sage","brass"],{atlas:"robotVacuum",tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","docked","docked-robot-vac","Robot vacuum with dock",76,58,["white","charcoal"],{tags:"robot vacuum cleaner charging compact"}),r("cleaning","robotVacuum","mop","robot-mop","Robot vacuum mop",60,60,["white","charcoal"],{tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","slim","slim-robot-vac","Slim robot vacuum",66,50,["white","charcoal"],{tags:"robot vacuum cleaner compact"}),r("toy-storage","storage","basket","toy-basket","Woven toy basket",85,76,["oak","cream","sage"],{tags:"baby toy storage"}),r("toy-storage","storage","bin","soft-toy-bin","Soft toy bin",84,74,["sage","peach","sky"],{tags:"baby toy storage"}),r("toy-storage","storage","cubby","low-cubby","Low toy cubby",136,67,["oak","white"],{tags:"baby toy storage shelf"}),r("play-furniture","playFurniture","softPouf","soft-pouf","Soft play pouf",79,79,["sage","peach","lavender"],{tags:"baby soft seat"}),r("play-furniture","playFurniture","photoBearChair","bear-floor-chair","Teddy bear toddler floor chair",86,85,["teddy"],{tags:"photo 1977 living room baby bear armchair"}),r("play-furniture","playFurniture","photoBolster","gray-bolster","Long gray floor bolster",126,43,["slate"],{tags:"photo 1977 living room baby soft support pillow"}),r("play-furniture","playFurniture","lowTable","low-play-table","Low play table",127,79,["oak","white"],{tags:"baby play furniture"}),r("play-furniture","playFurniture","lowShelf","low-play-shelf","Low play shelf",129,52,["oak","white"],{tags:"baby play furniture"}),r("pets","habitat","aquarium","fish-aquarium","Fish aquarium",122,66,["oak"],{tags:"fish tank pet habitat swimming bubbles animated freshwater planted glass"}),r("pets","habitat","terrarium","lizard-terrarium","Lizard terrarium",116,72,["walnut"],{tags:"lizard tank pet habitat gecko vivarium desert sand glass animated"});let o="detailed realistic crafted miniature dollhouse warm original material-rich",a=(l,u,h,f,d,m)=>({collectionId:"crafted-miniature-v1",seriesId:l,designId:u,designLabel:h,sizeId:f,sizeLabel:d,material:m});r("living","cuteFurniture","cloudSofa","cloud-sofa","Tailored sectional sofa",175,120,["blush","mint"],{...a("sofa","sectional","Sectional","three-seat","3 seat","upholstery"),tags:`${o} sofa couch sectional stitched piping`}),r("living","cuteFurniture","tailoredSofa","tailored-sofa","Tailored three-seat sofa",170,88,["sage","cream","charcoal"],{...a("sofa","tailored","Tailored sofa","three-seat","3 seat","upholstery"),tags:`${o} sofa couch three seat stitched upholstery`}),r("living","cuteFurniture","tailoredLoveseat","tailored-loveseat","Tailored loveseat",126,86,["blush","sage"],{...a("sofa","tailored","Tailored sofa","loveseat","Loveseat","upholstery"),tags:`${o} sofa couch loveseat two seat stitched upholstery`}),r("living","cuteFurniture","chaiseSofa","upholstered-chaise","Upholstered chaise",88,148,["cream","lavender"],{...a("sofa","chaise","Chaise lounge","chaise","Chaise","upholstery"),tags:`${o} sofa chaise lounge stitched upholstery`}),r("living","cuteFurniture","petalDining","petal-dining-set","Oval four-seat dining set",168,112,["oak","cream"],{...a("dining","oval","Oval dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs upholstered beveled wood`}),r("living","cuteFurniture","roundDining","round-dining-set","Round four-seat dining set",142,142,["oak","walnut"],{...a("dining","round","Round dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs round pedestal wood`}),r("living","cuteFurniture","rectDining","rectangular-dining-set","Rectangular six-seat dining set",205,122,["oak","white"],{...a("dining","rectangular","Rectangular dining","six-seat","6 seat","wood"),legacy:!0,tags:`${o} dining table six chairs rectangular wood`}),r("living","cuteFurniture","petalDiningTable","petal-dining-table","Petal dining table",132.72,62.72,["oak","cream"],{...a("dining-table","oval","Rounded dining table","four-seat","4 seats fit","wood"),tags:`${o} dining table beveled wood tabletop`}),r("living","cuteFurniture","roundDiningTable","round-dining-table","Round pedestal dining table",82.36,82.36,["oak","walnut"],{...a("dining-table","round","Round pedestal","four-seat","4 seats fit","wood"),tags:`${o} dining table round pedestal wood tabletop`}),r("living","cuteFurniture","rectDiningTable","rectangular-dining-table","Rectangular dining table",161.95,68.32,["oak","white"],{...a("dining-table","rectangular","Rectangular dining table","six-seat","6 seats fit","wood"),tags:`${o} dining table rectangular wood tabletop`}),r("living","cuteFurniture","diningChair","dining-chair","Upholstered dining chair",34,26,["sage","blush","lavender","butter"],{...a("dining-chair","upholstered","Upholstered chair","standard","Standard","upholstery"),tags:`${o} dining chair seat upholstered wood`}),r("living","cuteFurniture","acornChair","acorn-armchair","Piped reading armchair",88,88,["teddy","sage","blush"],{...a("armchair","piped","Piped armchair","standard","Standard","upholstery"),tags:`${o} armchair reading seat upholstered piping`}),r("living","cuteFurniture","lilyCoffee","lily-coffee-table","Beveled oval coffee table",110,70,["oak","white"],{...a("coffee-table","oval","Oval top","standard","Standard","wood"),tags:`${o} coffee table beveled wood joinery`}),r("living","cuteFurniture","bubbleSide","bubble-side-table","Stone-top side table",58,58,["mint","butter"],{...a("side-table","stone","Stone top","standard","Standard","stone"),tags:`${o} round side table stone pedestal`}),r("bedroom","cuteFurniture","moonBed","moon-bed","Moon-quilt queen bed",210,185,["lavender","sky","cream"],{...a("bed","moon-quilt","Moon quilt","queen","Queen","upholstery"),tags:`${o} bedroom bed queen quilted upholstered moon embroidery`}),r("bedroom","cuteFurniture","cribBed","crafted-crib","Slatted crib",92,142,["cream","sage"],{...a("bed","crib","Slatted crib","crib","Crib","wood"),tags:`${o} bedroom baby crib slatted fitted mattress`}),r("bedroom","cuteFurniture","toddlerBed","crafted-toddler-bed","Low toddler bed",105,158,["sky","blush"],{...a("bed","toddler","Low toddler","toddler","Toddler","upholstery"),tags:`${o} bedroom toddler bed low guard rail`}),r("bedroom","cuteFurniture","platformBed","platform-bed-twin","Low platform twin bed",120,196,["oak","walnut","white"],{...a("bed","platform","Low platform","twin","Twin","wood"),tags:`${o} bedroom bed twin low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-full","Low platform full bed",158,198,["oak","walnut","white"],{...a("bed","platform","Low platform","full","Full","wood"),tags:`${o} bedroom bed full double low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-queen","Low platform queen bed",188,205,["oak","walnut","white"],{...a("bed","platform","Low platform","queen","Queen","wood"),tags:`${o} bedroom bed queen low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-king","Low platform king bed",226,205,["oak","walnut","white"],{...a("bed","platform","Low platform","king","King","wood"),tags:`${o} bedroom bed king low platform wood`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-full","Arched upholstered full bed",158,198,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","full","Full","upholstery"),tags:`${o} bedroom bed full double arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-queen","Arched upholstered queen bed",188,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","queen","Queen","upholstery"),tags:`${o} bedroom bed queen arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-king","Arched upholstered king bed",226,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","king","King","upholstery"),tags:`${o} bedroom bed king arched headboard tufted`}),r("bedroom","cuteFurniture","storageBed","storage-bed-full","Drawer storage full bed",158,198,["oak","walnut"],{...a("bed","storage","Drawer storage","full","Full","wood"),tags:`${o} bedroom bed full double storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-queen","Drawer storage queen bed",188,205,["oak","walnut"],{...a("bed","storage","Drawer storage","queen","Queen","wood"),tags:`${o} bedroom bed queen storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-king","Drawer storage king bed",226,205,["oak","walnut"],{...a("bed","storage","Drawer storage","king","King","wood"),tags:`${o} bedroom bed king storage drawers wood`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-queen","Four-poster canopy queen bed",188,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","queen","Queen","wood metal"),tags:`${o} bedroom bed queen four poster canopy`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-king","Four-poster canopy king bed",226,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","king","King","wood metal"),tags:`${o} bedroom bed king four poster canopy`}),r("bedroom","cuteFurniture","daybed","upholstered-daybed","Upholstered twin daybed",196,105,["sage","cream"],{...a("bed","daybed","Upholstered daybed","twin","Twin","upholstery"),tags:`${o} bedroom bed twin daybed sofa bolsters`}),r("bedroom","cuteFurniture","bunkBed","slatted-bunk-bed","Slatted twin bunk bed",120,196,["oak","white"],{...a("bed","bunk","Slatted bunk","twin","Twin bunk","wood"),tags:`${o} bedroom bed twin bunk ladder rails`}),r("bedroom","cuteFurniture","sproutDesk","sprout-desk","Crafted writing desk",180,84,["sage","oak"],{...a("desk","writing","Writing desk","compact","Compact","wood"),tags:`${o} office study desk writing wood drawers`}),r("bedroom","cuteFurniture","cornerDesk","corner-desk","Corner workstation",190,146,["sage","oak"],{...a("desk","corner","Corner workstation","large","Large","wood"),tags:`${o} office study desk corner return drawers`}),r("bedroom","cuteFurniture","secretaryDesk","secretary-desk","Secretary writing desk",110,78,["oak","walnut"],{...a("desk","secretary","Secretary desk","compact","Compact","wood"),tags:`${o} office study desk secretary cubbies wood`}),r("bedroom","cuteFurniture","starNightstand","star-nightstand","Brass-knob nightstand",58,56,["butter","lavender"],{...a("nightstand","two-drawer","Two drawer","standard","Standard","wood"),tags:`${o} bedside table brass knob drawer`}),r("bedroom","cuteFurniture","honeyDresser","honey-dresser","Six-drawer dresser",125,60,["oak","peach"],{...a("dresser","six-drawer","Six drawer","wide","Wide","wood"),tags:`${o} bedroom storage dresser drawers joinery`}),r("bedroom","cuteFurniture","storyBookcase","story-bookcase","Framed bookcase",64,156,["oak","mint"],{...a("bookcase","framed","Framed bookcase","tall","Tall","wood"),tags:`${o} book shelf storage joinery`}),r("lighting","cuteLight","budLamp","bud-table-lamp","Pleated ceramic table lamp",48,52,["mint","blush","butter"],{...a("table-light","pleated-ceramic","Pleated ceramic","table","Table","ceramic brass fabric"),tags:`${o} lamp desk bedside pleated shade ceramic`,visualKind:"light",lightForm:"bud_lamp"}),r("lighting","cuteLight","cloudFloorLamp","cloud-floor-lamp","Linen globe floor lamp",58,94,["cream","sky"],{...a("floor-light","linen-globe","Linen globe","floor","Floor","brass linen"),tags:`${o} standing floor lamp linen globe`,visualKind:"light",lightForm:"cloud_floor_lamp"}),r("lighting","cuteLight","bloomCeiling","bloom-ceiling-light","Faceted glass ceiling light",60,60,["white","butter","mint"],{...a("ceiling-light","faceted-flush","Faceted flush mount","ceiling","Ceiling","glass brass"),tags:`${o} ceiling lamp faceted frosted glass flush mount`,visualKind:"light",lightForm:"bloom_ceiling",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","starPendant","star-pendant","Faceted glass pendant",72,72,["lavender","butter"],{...a("pendant-light","faceted-glass","Faceted glass","ceiling","Ceiling","glass brass"),tags:`${o} ceiling pendant faceted glass`,visualKind:"light",lightForm:"star_pendant",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","acornSconce","acorn-wall-sconce","Fluted brass wall sconce",38,50,["oak","cream"],{...a("wall-light","fluted-brass","Fluted brass","wall","Wall","brass glass"),tags:`${o} wall light fluted brass glass`,visualKind:"light",lightForm:"acorn_sconce",mount:"wall"});let c=Object.fromEntries(e.map(l=>[l.type,l]));(typeof window>"u"?globalThis:window).RoomcraftInventory={groups:n,templates:e,byType:c}})();var ba="#f7efdc",VM="#cfa373",um="#625145",WM="#b9dbe1",Qh=["#5a815f","#779d69","#a4b379"],oi=["#dc9f9d","#a9baa2","#e3c076","#9db7cf","#bba6cd"];function hm(n,t,e,i,s,r){let o=r?t*.4:e*.39,a=(l,u)=>r?new G(l*o,u,0):new G(0,u,l*o),c=new zs([a(-1,3),a(-.66,i*.75),a(0,i),a(.66,i*.75),a(1,3)]);n.part(new kr(c,16,Math.max(.15,Math.min(t,e)*.021),6,!1),s,0,0,0)}function XM(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=o*.29;if(s==="ball"||s==="texturedBall"){if(n.oval(0,a,0,a,a,a,r.base),s==="ball"){n.ring(0,a,0,a*.99,a*.99,a*.044,r.accent);let c=n.ring(0,a,0,a*.99,a*.99,a*.037,r.detail);c.rotation.z=Math.PI/2}else for(let c=0;c<22;c++){let l=(c+.5)/22,u=Math.sqrt(1-l**2)*a*.97,h=c*2.39996;n.oval(Math.sin(h)*u,a*(1+l),Math.cos(h)*u,a*.105,a*.105,a*.105,r.accent)}return a*2.2}if(s==="book"){let c=i.includes("board-book");for(let l of[-1,1]){let u=l*t*.224;n.box(u,1,0,t*.42,3.1,e*.77,r.dark,c?.8:1.5),n.box(u,3.8,0,t*.385,2.1,e*.73,ba,.8),n.oval(u,6.05,-e*.1,t*.1,.45,e*.14,l<0?r.base:r.accent);for(let h of[0,1])n.box(u,6,e*(.1+.075*h),t*(.23-h*.04),.45,.65,r.dark,.18);if(!c)for(let h of[-1,1])n.oval(u+l*t*.19,2.8,h*e*.3,t*.055,1.6,e*.06,r.accent)}return n.box(0,1.9,0,t*.035,4,e*.78,r.base,.8),7}if(s==="cups"||s==="rings"){let c=s==="cups",l=o*(c?.088:.066);n.disc(0,0,0,a*1.14,l*.55,a*1.14,r.dark,.9);for(let u=0;u<5;u++){let h=a*(1-u*.15),f=l*(u+.55),d=[r.base,r.accent,r.detail,oi[2],oi[3]][u];c?(n.disc(0,f-.6,0,h*.91,l,h*.91,d,.91),n.ring(0,f+l*.9,0,h*.88,h*.88,l*.12,u%2?ba:d)):n.ring(0,f+l*.36,0,h,h,l*.39,d)}return n.oval(0,l*5.46,0,a*.18,l*.55,a*.18,c?r.accent:r.dark),l*6.1}if(s==="blocks"){for(let c=0;c<3;c++){let l=(c-1)*t*.25,u=(c%2-.5)*e*.29,h=(c-1)*.17;n.box(l,0,u,t*.23,o*.24,e*.31,[r.base,r.accent,oi[2]][c],o*.038,h),n.box(l,o*.239,u,t*.14,.7,e*.19,ba,.35,h)}return o*.26}n.ring(0,a*.32,0,a,a*.88,a*.27,r.base);for(let c=0;c<9;c++){let l=c*Math.PI*2/9;n.oval(Math.cos(l)*a,a*.66,Math.sin(l)*a*.88,a*.12,a*.095,a*.12,r.accent)}return a*.8}function qM(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=r*.32;if(i==="tunnel"){let u=Math.min(t*.37,e*.42),h=new We(u,u,e*.83,18,1,!0,-Math.PI/2,Math.PI);h.rotateX(-Math.PI/2);let f=n.part(h,s.base,0,2.2,0);f.material.side=Qe;for(let d=0;d<5;d++){let m=Array.from({length:9},(y,p)=>{let g=Math.PI*p/8;return new G(Math.cos(g)*u,2.2+Math.sin(g)*u,(d-2)*e*.2)});n.part(new kr(new zs(m),15,Math.max(.15,r*.017),6,!1),s.accent,0,0,0)}return n.box(0,0,0,u*2,2.3,e*.85,s.dark,1.1),u+r*.017+2.2}if(i==="playGym"||i==="photoWoodArch"){i==="playGym"&&(n.box(0,.5,0,t*.95,2.5,e*.88,s.accent,4),hm(n,t,e,o,s.base,!1)),hm(n,t,e,o,i==="photoWoodArch"?VM:s.base,!0);for(let u of[-1,1])n.box(t*.38*u,0,0,t*.11,4,e*.4,s.dark,1.6);for(let u=-1;u<=1;u++){let h=u*t*.16,f=o*(u?.94:.99),d=o*(.59+u*.045);n.box(h,d,0,1,f-d,1,ba),n.oval(h,d,0,r*.053,r*.057,r*.049,oi[u+2])}return o+2}if(i==="mirror"){n.box(0,0,0,t*.86,4,e*.71,s.dark,2.4);let u=n.box(0,3,-e*.06,t*.75,o*.7,e*.2,s.base,3),h=n.box(0,5.1,e*.035,t*.64,o*.53,2.2,WM,.8);return u.rotation.x=h.rotation.x=-.21,o*.75+3}if(i==="largeRattle")return n.ring(-t*.19,3,0,r*.25,r*.24,r*.055,s.accent),n.box(t*.06,2,0,t*.26,2.9,e*.16,s.dark,1.2),n.oval(t*.26,r*.14,0,r*.25,r*.14,r*.24,s.base),r*.29;if(i==="sensoryBasket"){n.disc(0,0,0,t*.39,o*.55,e*.38,s.base,.74),n.disc(0,o*.52,0,t*.35,1.2,e*.34,s.dark);for(let u=1;u<=3;u++)n.ring(0,o*u*.17,0,t*(.29+u*.034),e*(.28+u*.035),.8,s.accent);for(let u=0;u<4;u++)n.oval(t*(u%2?.16:-.15),o*.67,e*(u<2?-.14:.14),r*.12,r*.12,r*.12,oi[u]);return o+3}let a=i==="photoActivityTable",l=a?o:i==="activityBoard"?o*.2:o*.72;if(a)for(let u of[-.32,.32])for(let h of[-.29,.29])n.box(t*u,0,e*h,t*.105,l,e*.125,oi[h<0?3:1],2.6);else n.box(0,0,0,t*.83,l+1,e*.83,s.base,2.8);n.box(0,l,0,t*.94,Math.max(2.5,r*.057),e*.91,s.accent,2.6);for(let u=0;u<6;u++){let h=t*(.25*(u%3)-.25),f=e*(u<3?-.2:.2),d=l+r*.056;u%3===1?n.box(h,d,f,t*.105,r*.05,e*.15,oi[u%oi.length],1.4,.24):n.disc(h,d,f,r*.081,r*(.044+u*.007),r*.072,oi[u%oi.length],.87)}return l+r*.14}function YM(n,t,e,{form:i,palette:s}){if(i==="round"){n.disc(0,.35,0,t*.48,2.1,e*.48,s.base);for(let u of[.32,.43])n.ring(0,2.53,0,t*u,e*u,.37,s.accent);return 3}if(["tummy","photoLeafMat"].includes(i)){n.box(0,.5,0,t*.97,2.3,e*.95,s.dark,1),n.box(0,1.5,0,t*.95,1.75,e*.93,s.base,.7);for(let u of[-.29,0,.29])for(let h of[-.34,-.12,.12,.34]){let f=n.oval(t*h,3.3,e*u,t*.041,.22,e*.095,s.accent);f.rotation.y=h<0?-.49:.49}return 3.6}let o=i==="photoCheckerMat",a=o?["#e3d3bc","#776056","#c0a083","#776056"]:[s.base,s.accent,s.detail,s.base],c=Math.min(t,e)*.008,l=i==="foam"?4:5;n.box(0,.25,0,t*.99,1,e*.99,s.dark,.5);for(let u=0;u<4;u++)for(let h=0;h<l;h++){let f=t*((h+.5)/l-.5),d=e*((u+.5)/4-.5),m=a[(u+(o?h:h*3))%4];n.box(f,.9,d,t/l-c,2.2,e/4-c,m,.6),i==="puzzle"&&u<3&&n.disc(f,2.6,d+e/8,t*.026,.49,e*.026,m)}return 3.4}function $M(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="tall",a=i==="rail",c=i==="vertical",l=i==="hanging";if(a&&(n.box(0,1,0,t*.92,r*.22,e*.53,s.base,2),n.box(0,r*.22,0,t*.85,2,e*.45,um,.8)),c){for(let f of[-1,1])n.box(t*.37*f,0,-e*.29,t*.065,r*.79,e*.07,s.dark,1.2);for(let f=0;f<3;f++)n.box(0,r*(.16+.26*f),-e*.11,t*.84,2.8,e*.41,s.accent,1.2)}let u=o||l?[-.25,.25]:[-.3,0,.3],h=0;return u.forEach((f,d)=>{let m=t*f,y=c?-e*.1:e*(i==="cluster"?d===1?.21:-.11:0),p=Math.min(t*.142,e*.265,r*(o?.22:.18)),g=c?r*(.19+.26*d):l?r*.41:0,x=a?r*.25:p*(o?1.7:.87);a||(n.disc(m,g,y,p,x,p,s.base,.68),n.ring(m,g+x,y,p*.95,p*.95,.8,s.accent),n.disc(m,g+x-.72,y,p*.86,1,p*.86,um));for(let v=0;v<7;v++){let b=v*2.39996+d,_=p*(.41+v%3*.24),S=p*((o?1.9:1.04)+v%3*.26),C=Math.cos(b)*_,M=Math.sin(b)*_,A=n.oval(m+C*.47,g+x+S*.46,y+M*.47,.7,S*.48,.7,Qh[0]);A.rotation.z=-Math.atan2(C,S),A.rotation.x=Math.atan2(M,S);let D=n.oval(m+C,g+x+S,y+M,p*.39,p*.13,p*.6,Qh[v%Qh.length]);D.rotation.y=b,a&&v%3===0&&n.oval(m+C,g+x+S+1.1,y+M,p*.18,p*.13,p*.19,oi[(v+d)%oi.length]),h=Math.max(h,g+x+S+p*.2)}if(l){for(let v of[-1,1]){let b=n.box(m+v*p*.48,g+x+r*.24,y,.72,r*.53,.72,ba);b.rotation.z=v*.36}h=Math.max(h,g+x+r*.53)}}),h}var ZM={softToy:XM,activityToy:qM,playMat:YM,planterSet:$M};function fm(n,t,e,i){let s=ZM[i.artFamily];return s?.(n,t,e,i)}(n=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Legacy dining set",icon:"\u25B0",w:165,h:108,group:"living",legacy:!0},{type:"diningTable",label:"Dining table",icon:"\u25B0",w:136,h:62,group:"living"},{type:"diningChair",label:"Dining chair",icon:"\u25D2",w:34,h:26,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor",mount:"wall"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor",mount:"wall"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],i="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=q=>typeof q=="string"&&q.startsWith("ui"),o=q=>String(q??"").toLowerCase(),a=q=>o(q).split(".")[0],c=q=>typeof q=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(q),l=q=>q.type==="window"?"wall":q.mount||"floor",u=q=>q?.type==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(q?.type),h=q=>q?.type==="diningChair"||/^living-dining-chair-/.test(q?.type),f=q=>h(q)||["chair","armchair","stool"].includes(q?.type)||/-(?:desk-chair|acorn-armchair|floor-chair)-/.test(q?.type),d=q=>Number(q.toFixed(6)),m=q=>(q%360+360)%360;function y(q){let yt=q.type==="table",X=/^living-(petal|round|rectangular)-dining-set-/.exec(q.type);if(!yt&&!X)return;let j=X?.[1],st=yt?"diningTable":q.type.replace("-dining-set-","-dining-table-"),ct=Y=>yt?"diningChair":`living-dining-chair-${Y}`,{w:dt,h:Ct}=q;if(yt||j==="round"){let[Y,ie,qt,z,T]=yt?[.39,.415,.2,.23,.27]:[.37,.38,.2,.2,.2];return{tableType:st,w:(yt?.79:.58)*dt,h:(yt?.57:.58)*Ct,tableHeight:yt?46.4:41,chairs:[[0,-Ct*Y,dt*qt,Ct*z,0,ct("sage")],[dt*ie,0,Ct*T,dt*(yt?.17:qt),90,ct("butter")],[0,Ct*Y,dt*qt,Ct*z,180,ct("blush")],[-dt*ie,0,Ct*T,dt*(yt?.17:qt),270,ct("lavender")]]}}let It=j==="rectangular",Nt=It?[-.32,0,.32]:[-.28,.28],Bt=[["sage","blush","lavender"],["lavender","butter","sage"]];return{tableType:st,w:.79*dt,h:.56*Ct,tableHeight:42.3,chairs:[-1,1].flatMap((Y,ie)=>Nt.map((qt,z)=>[dt*qt,Ct*.37*Y,dt*(It?.15:.19),Ct*.23,ie*180,ct(Bt[ie][z])]))}}function p(q){if(!Array.isArray(q?.items))return q;let yt=new Set(q.items.map(ct=>ct.id)),X=q.items.filter(f),j=!1,st=q.items.flatMap(ct=>{let dt=y(ct);if(!dt||![ct.x,ct.y,ct.w,ct.h,ct.rotation].every(Number.isFinite)||ct.w<=0||ct.h<=0)return[ct];j=!0;let Ct=ct.rotation*Math.PI/180,It=Math.cos(Ct),Nt=Math.sin(Ct),Bt=Number.isFinite(ct.modelHeight)?ct.modelHeight:void 0,Y={...ct,type:dt.tableType,w:d(dt.w),h:d(dt.h),...Bt===void 0?{}:{modelHeight:Math.max(6,d(Bt*dt.tableHeight/59))}};return[...dt.chairs.flatMap(([qt,z,T,it,ft,xt],V)=>{let w=d(ct.x+qt*It-z*Nt),E=d(ct.y+qt*Nt+z*It),R=Math.max(8,Math.min(T,it)*.52);if(X.some(ut=>Math.hypot(ut.x-w,ut.y-E)<=R))return[];let F=`${ct.id}-chair-${V+1}`,U=F,Q=2;for(;yt.has(U);)U=`${F}-${Q++}`;yt.add(U);let $={id:U,type:xt,name:`Dining chair ${V+1}`,x:w,y:E,w:d(T),h:d(it),rotation:m(ct.rotation+ft),entityId:"",...Bt===void 0?{}:{modelHeight:Bt},...Number.isFinite(ct.zIndex)?{zIndex:ct.zIndex}:{}};return X.push($),[$]}),Y]});return j?{...q,items:st}:q}function g(){return{templates:[...t,...n.RoomcraftInventory?.templates||[]],paletteGroups:[...n.RoomcraftInventory?.groups||[],...e]}}function x(q,yt,X){return!(!q||!yt||!X||q.type===X.type||X.legacy||s.has(q.type)||r(q.type)||s.has(X.type)||r(X.type)||l(yt)!==l(X)||q.entityId&&!v(q.entityId,X))}function v(q,yt){return!c(q)||typeof yt?.type!="string"||yt.legacy||r(yt.type)||yt.type==="stairs"?!1:yt.type==="cameraThumbnail"?a(q)==="camera":yt.type==="garageDoor"||yt.type==="window"?["cover","binary_sensor","switch"].includes(a(q)):a(q)!=="camera"}function b(q,yt,X){if(!q||q.entityId||!v(yt,X))return!1;let j=q.type==="cameraThumbnail"?40:12,{x:st,y:ct,w:dt,h:Ct}=q;return st>=0&&st<=1536&&ct>=0&&ct<=1024&&dt>=j&&dt<=1536&&Ct>=j&&Ct<=1024}function _(q,yt){let X=a(q.entity_id),j=o(q.name+" "+q.entity_id),st=j.replaceAll("_"," "),ct={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},dt=It=>{if(It.type==="controlZone")return!0;if(X==="camera")return It.type==="cameraThumbnail";if(X==="cover")return It.type===(/garage/.test(j)?"garageDoor":"window");if(X==="climate")return It.type==="thermostat";if(X==="media_player"&&/\btv\b|television/.test(st))return It.type==="tv";if(X==="binary_sensor"){if(/presence|occupancy/.test(j))return It.type==="presenceSwitch";if(/garage/.test(j))return It.type==="garageDoor";if(/window|blind|shade/.test(j))return It.type==="window"}if(ct[X]?.includes(It.group)||/humidifier/.test(j)&&It.type==="humidifier"||/purifier/.test(j)&&It.type==="airPurifier")return!0;if(X==="switch"){if(/light|lamp/.test(j))return It.group==="lighting";if(/fan/.test(j))return It.group==="fans"||It.type==="windowFan"}return!1},Ct=yt.filter(It=>v(q.entity_id,It));return{recommended:Ct.filter(dt),available:Ct}}function S(q){let yt=new Map;for(let X of q){let j=[[X.entityId,"primary"],[X.tapEntityId,"Tap target"],[X.holdEntityId,"Hold target"],[X.presenceEntityId,"Presence sensor"],[X.presenceTrackEntityId,"Radar targets"],[X.vacuumMapEntityId,"Map camera"],[X.imageEntityId,"Event image"],...Array.isArray(X.eventEntityIds)?X.eventEntityIds.map(st=>[st,"Camera event"]):[]];for(let[st,ct]of j)c(st)&&(yt.has(st)||yt.set(st,[]),yt.get(st).push({item:X,role:ct}))}return yt}function C(q){return q&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(q.type)&&!r(q.type)}function M(q,yt,X,j){if(!["w","h"].includes(yt)||!Number.isFinite(X))return null;let st=q.type==="cameraThumbnail"?40:12,ct=q.type==="cameraThumbnail"||c(q.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!j)return{[yt]:Math.min(ct[yt],Math.max(st,X))};let dt=Math.min(ct.w/q.w,ct.h/q.h),Ct=Math.min(dt,Math.max(st/q.w,st/q.h)),It=Math.min(dt,Math.max(Ct,X/q[yt]));return{w:Math.round(q.w*It*10)/10,h:Math.round(q.h*It*10)/10}}function A(q,yt,X,j){if(![yt,X,q?.w,q?.h].every(Number.isFinite)||q.w<=0||q.h<=0)return null;if(!j)return{...M(q,"w",yt,!1),...M(q,"h",X,!1)};let st=(yt*q.w+X*q.h)/(q.w**2+q.h**2);return M(q,"w",st*q.w,!0)}let D=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),N=new Set(["lamp","tableLamp","humidifier","plant"]),O=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),B=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,L=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,k=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function H(q,yt,X){if(q==="playpen"||q==="photoPlayYard"){let Nt=Math.min(yt,X)*.055;return[[0,-(X-Nt)/2,yt-Nt,Nt,0],[0,(X-Nt)/2,yt-Nt,Nt,0],[-(yt-Nt)/2,0,X-Nt,Nt,Math.PI/2],[(yt-Nt)/2,0,X-Nt,Nt,Math.PI/2]]}let j=q==="folding",st=j?4:3,ct=Math.min(j?39:29,yt*.28),dt=yt/st,Ct=Math.min(X*(j?.5:.73),ct*.6),It=j?Math.min(.18,Ct/dt*.85):0;return Array.from({length:st},(Nt,Bt)=>[-yt/2+dt*(Bt+.5),0,dt,Ct,Bt%2?-It:It])}function W(q){let{w:yt,h:X}=q,j=n.RoomcraftInventory?.byType?.[q.type];if(j?.artFamily==="foamBlock"){let dt=Math.min(1.4,Math.min(yt,X)*.021);if(["arch","tunnel","wedge","ramp"].includes(j.form)){let Ct=X*(j.form==="tunnel"?.83:.73);return[[0,0,yt*.91+2*dt,Ct+2.08*dt]]}return[[0,0,yt*(j.form==="steps"?.99:.96),X*.96]]}if(j?.form==="softPouf")return[[0,0,yt*.97,X*.97]];if(j?.form==="photoBolster")return[[0,0,yt*.96,X*.94]];if(j?.artFamily!=="paddedPanel")return null;let st=j.form;if(st==="photoBearPanel")return[[0,0,yt,X*.49]];if(st==="gate"||st==="guard"){let dt=Math.min(X*.55,Math.min(37,yt*.32)*.28);return[[0,0,yt*.99,dt],[-yt*.46,0,yt*.08,X*.73],[yt*.46,0,yt*.08,X*.73]]}let ct=st==="playpen"||st==="photoPlayYard";return H(st,yt,X).map(([dt,Ct,It,Nt,Bt])=>[dt,Ct,It*(ct?1:.955),Nt*(ct?.5:1.28),Bt])}function et(q){let yt=q?.type??"";return u(q)||D.has(yt)||B.test(yt)?"surface":N.has(yt)||q?.lightForm==="bud_lamp"||yt.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function K(q){let yt=q.type==="humidifier"?.37:q.type==="plant"?.23:.2;return Math.min(q.w,q.h)*yt}function Z(q,yt=!1){let{type:X,w:j,h:st}=q;if(u(q))return[[0,0,j,st]];if(X==="desk"||X.startsWith("bedroom-corner-desk-"))return[[0,-.33*st,j,.34*st],[-.41*j,.17*st,.18*j,.66*st],[.41*j,.17*st,.18*j,.66*st]];if(!yt&&(X==="sofa"||X.startsWith("living-cloud-sofa-")))return st>j?[[-.25*j,0,.5*j,st],[.22*j,(X==="sofa"?.3:-.3)*st,.52*j,.38*st]]:[[0,-.215*st,j,.57*st],[-.32*j,.25*st,.34*j,.46*st]];if(yt){if(X.startsWith("living-round-dining-"))return[[0,0,.58*j,.58*st]];if(X==="table"||/-dining-set-/.test(X))return[[0,0,.79*j,.56*st]];if(X.includes("-desk-"))return[[0,0,j,.85*st]]}if(!yt&&et(q)==="tabletop"){let ct=2*K(q);return[[0,0,ct,ct]]}return[[0,0,j*.95,st*.95]]}function nt(q,yt,X){if(![q?.x,q?.y,q?.w,q?.h].every(Number.isFinite)||q.w<=0||q.h<=0)return[];let j=(Number.isFinite(q.rotation)?q.rotation:0)*Math.PI/180,st=Math.cos(j),ct=Math.sin(j);return(X??Z(q,yt)).map(([dt,Ct,It,Nt,Bt=0])=>{let Y=[Math.cos(j+Bt),Math.sin(j+Bt)];return{x:q.x+dt*st-Ct*ct,y:q.y+dt*ct+Ct*st,u:Y,v:[-Y[1],Y[0]],width:It/2,height:Nt/2}})}let Tt=(q,yt,X)=>q*X[0]+yt*X[1];function At(q,yt){let X=yt.type.startsWith("living-round-dining-"),j=nt(yt,!0),st=K(q)*.9;return k.every(([ct,dt])=>j.some(Ct=>{let It=q.x+ct*st-Ct.x,Nt=q.y+dt*st-Ct.y,Bt=Math.abs(Tt(It,Nt,Ct.u))/Ct.width,Y=Math.abs(Tt(It,Nt,Ct.v))/Ct.height;return X?Math.hypot(Bt,Y)<=1:Bt<=1&&Y<=1}))}function Mt(q){let yt=W(q);return yt?nt(q,!1,yt):h(q)||et(q)!=="floor"||O.has(q.type)||L.test(q.type)?nt(q,!1):[]}function _t(q){return et(q)==="tabletop"||q.type==="rug"||q.type.startsWith("baby-mats-")?[]:["chair","stool","tv"].includes(q.type)||/(?:desk-chair|toy-storage|fireplace|floor-chair)/.test(q.type)||q.type.startsWith("pets-")?nt(q,!1):Mt(q)}function Lt(q,yt){let X=(j,st)=>j.width*Math.abs(Tt(...j.u,st))+j.height*Math.abs(Tt(...j.v,st));return Math.min(...[q.u,q.v,yt.u,yt.v].map(j=>X(q,j)+X(yt,j)-Math.abs(Tt(q.x-yt.x,q.y-yt.y,j))))}function ot(q,yt){let[X]=nt(q,!1),[j]=nt(yt,!0);if(!X||!j||Lt(X,j)<=0)return!1;let st=[X.x-j.x,X.y-j.y],ct=Tt(...st,j.u)/j.width,dt=Tt(...st,j.v)/j.height,Ct=yt.type.startsWith("living-round-dining-"),It;if(Ct){if(Math.hypot(ct,dt)<1)return!1;It=-Tt(...st,X.v)/Math.hypot(...st)}else{let qt=Math.abs(ct)>=1,z=Math.abs(dt)>=1;if(qt===z)return!1;It=-Math.sign(qt?ct:dt)*Tt(...X.v,qt?j.u:j.v)}if(It<.8)return!1;let Nt=yt.type==="diningTable",Bt=Nt?46.4:Ct?41:42.3,Y=(yt.modelHeight??Bt)*(Nt?32:33)/Bt;return(q.modelHeight??59)*30/59<Y}function ht(q,yt,X,j){let st=0;for(let Ct of X)for(let It of j)st=Math.max(st,Lt(Ct,It));if(st<=2)return st;let ct=et(q),dt=et(yt);return ct==="tabletop"&&dt==="surface"&&At(q,yt)||ct==="surface"&&dt==="tabletop"&&At(yt,q)||h(q)&&u(yt)&&ot(q,yt)||u(q)&&h(yt)&&ot(yt,q)?0:st}function St(q,yt,X){let j=Mt(q);if(!j.length)return;let st=X?Mt(X):[],ct,dt=2;for(let Ct of yt){if(Ct.id===q.id)continue;let It=Mt(Ct),Nt=ht(q,Ct,j,It);Nt<=dt||st.length&&Nt<=ht(X,Ct,st,It)+.02||(ct=Ct,dt=Nt)}return ct}function zt(q){let yt=q.filter(dt=>et(dt)==="surface"),X=yt.filter(u),j=new Set,st=new Map,ct=new Map;for(let dt of q){let Ct=h(dt);if(!Ct&&et(dt)!=="tabletop")continue;let It=Ct?X.find(Bt=>ot(dt,Bt)):yt.find(Bt=>At(dt,Bt));if(!It)continue;j.add(dt.id);let Nt=Ct?ct:st;Nt.has(It.id)||Nt.set(It.id,[]),Nt.get(It.id).push(dt)}return j.size?q.flatMap(dt=>j.has(dt.id)?[]:[...ct.get(dt.id)??[],dt,...st.get(dt.id)??[]]):q}function Ot(q,yt,X){let j=q.ownerDocument,st=(E,R,F={})=>{let U=j.createElement(E);R&&(U.textContent=R);for(let[Q,$]of Object.entries(F))U.setAttribute(Q,$);return U},ct=st("dialog","",{class:"model-library","aria-label":"Objects and models"}),dt=st("header"),Ct=st("h2","Objects & models"),It=st("button","Close",{type:"button"});dt.append(Ct,It);let Nt=st("div","",{class:"model-library-filters"}),Bt=st("select","",{"aria-label":"Object library section"});for(let[E,R]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])Bt.append(st("option",R,{value:E}));let Y=st("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});Nt.append(Bt,Y);let ie=st("div","",{class:"model-library-context"}),qt=st("p","",{role:"status",class:"model-library-status"}),z=st("div","",{class:"model-library-list"});ct.append(dt,Nt,ie,qt,z);let T=st("style");T.textContent=`
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
    `,q.append(T,ct);let it,ft=!1,xt=(E,R)=>{let F=st("button",E,{type:"button"});return F.addEventListener("click",R),F};function V(E){it=E,ft=!1,Bt.value=E.existing?"placed":"catalog",Y.value="",w(),Y.focus()}function w(){let{templates:E,paletteGroups:R}=g(),F=new Map(E.map(I=>[I.type,I])),U=new Map(R),{items:Q,entities:$}=yt(),ut=o(Y.value).trim(),lt=(...I)=>ut.split(/\s+/).every(J=>o(I.join(" ")).includes(J)),Rt=[];if(ie.replaceChildren(),it&&(ie.append(st("strong",it.item?.name||it.entity?.name||it.entity?.entity_id)),it.entity&&(ie.append(xt(it.existing?"Choose a new model":"Bind existing object",()=>{V({entity:it.entity,existing:!it.existing})})),it.existing||ie.append(xt(ft?"Suggested models":"All compatible models",()=>{ft=!ft,w()}))),ie.append(xt("Cancel mapping",()=>{Bt.value=it.entity?"devices":"placed",it=void 0,Y.value="",w()}))),Bt.value==="placed")for(let I of Q){let J=F.get(I.type);if(!lt(I.name,J?.label,I.type,I.entityId))continue;let tt=[I.w,I.h,I.modelHeight].filter(Number.isFinite).join(" \xD7 "),wt=[J?.label||I.type,tt&&tt+" plan px",I.entityId].filter(Boolean).join(" \xB7 "),Et;if(it?.existing){if(!b(I,it.entity.entity_id,J))continue;Et=[xt("Bind to this object",()=>X({kind:"bind",itemId:I.id,entityId:it.entity.entity_id}))]}else Et=[xt("Edit",()=>X({kind:"edit",itemId:I.id}))],E.some(vt=>x(I,J,vt))&&Et.push(xt("Change model",()=>V({item:I})));Rt.push([I.name||J?.label||I.type,wt,Et])}else if(Bt.value==="devices"){let I=S(Q);for(let J of $){if(!c(J.entity_id)||!lt(J.name,J.entity_id,J.area))continue;let tt=I.get(J.entity_id)||[],wt=tt.find(kt=>kt.role==="primary"),Et=tt.map(({item:kt,role:le})=>le==="primary"?kt.name:le+" for "+kt.name),vt=[J.entity_id,J.area,...Et].filter(Boolean).join(" \xB7 "),Ut=tt.length?[xt(wt?"Edit mapped object":"Edit linked object",()=>X({kind:"edit",itemId:(wt||tt[0]).item.id}))]:[];E.some(kt=>v(J.entity_id,kt))&&Ut.push(xt(wt?"Map again":"Map to object",()=>V({entity:J,existing:Q.some(kt=>b(kt,J.entity_id,F.get(kt.type)))}))),Rt.push([J.name||J.entity_id,vt,Ut])}}else{let I=E.filter(J=>!J.legacy);if(it?.item&&(I=E.filter(J=>x(it.item,F.get(it.item.type),J))),it?.entity){let J=_(it.entity,E);I=ft?J.available:J.recommended}for(let J of I){let tt=U.get(J.group)||J.group;if(!lt(J.label,J.type,J.tags,tt))continue;let wt=it?.item?{kind:"replace",itemId:it.item.id,modelId:J.type}:{kind:"place",modelId:J.type,...it?.entity?{entityId:it.entity.entity_id}:{}};Rt.push([J.label,tt+" \xB7 "+J.w+" \xD7 "+J.h+" plan px",[xt(it?"Use model":"Place",()=>X(wt))]])}}z.replaceChildren();for(let[I,J,tt]of Rt.slice(0,48)){let wt=st("div","",{class:"model-library-row"}),Et=st("div");Et.append(st("strong",I),st("small",J));let vt=st("div","",{class:"model-library-actions"});vt.append(...tt),wt.append(Et,vt),z.append(wt)}qt.textContent=Rt.length>48?"Showing 48 of "+Rt.length+". Search to narrow the list.":Rt.length?Rt.length+(Rt.length===1?" result":" results"):Bt.value==="devices"&&!$.length?"Connect to Home Assistant to list devices.":it?.existing&&!ut?"No compatible unbound objects. Choose a new model instead.":"No matches."}return Bt.addEventListener("change",()=>{it=void 0,Y.value="",w()}),Y.addEventListener("input",w),It.addEventListener("click",()=>ct.close()),{open(E="placed"){it=void 0,ft=!1,Bt.value=E,Y.value="",w(),ct.open||ct.showModal()},get isOpen(){return ct.open},close(){ct.open&&ct.close()}}}n.RoomcraftModels=Object.freeze({catalog:g,canMap:v,canBind:b,canReplace:x,suggestions:_,supportsHeight:C,resizeFootprint:M,resizeCornerFootprint:A,splitDiningFurniture:p,placementRole:et,specialtyBarrierSections:H,walkingObstacleBoxes:_t,blockingPlacement:St,orderMountedObjects:zt,mount:Ot,handoffKey:i})})(typeof window>"u"?globalThis:window);var dm=["#e9a1ad","#f4eee0","#b7cf84","#e8d081","#80b7ce","#b993c7"],jM=["#e9ad9c","#e2cb87","#9db9a3"],pm=["#725746","#8d6b55","#65534b","#91755f"],KM=new Set(["wedge","ramp","arch","tunnel"]);function tf(n,t,e,i,s,r,o,a=0){let c=new pi(t,{depth:e,curveSegments:10,steps:1,bevelEnabled:a>0,bevelSize:a,bevelThickness:a,bevelSegments:2});return c.translate(0,0,-e/2),n.part(c,i,s,r,o)}function mm(n,t,e,i){let s=Math.cos(i),r=Math.sin(i),o=(a,c)=>[t+a*s+c*r,e-a*r+c*s];return{box(a,c,l,u,h,f,d,m=0){let[y,p]=o(a,l);n.box(y,c,p,u,h,f,d,m,i)},bead(a,c,l,u,h){let[f,d]=o(a,l);n.oval(f,c,d,u,u,u,h)}}}function gm(n,t,e,i,s,r,o,a,c){let l=mm(n,t,e,i),u=o*.43,h=r*.1,f=s*.4;l.box(0,r-h,0,s*.98,h,u,a,h*.43),l.box(0,0,0,s*.99,h,u,a,h*.34);for(let d of[-1,1])l.box(d*f,h*.65,0,s*.17,r*.83,u,a,3),l.box(d*s*.475,r*.3,0,s*.055,r*.17,u*1.14,c,1.4),l.box(d*s*.23,r*.17,0,s*.1,r*.55,u*.84,a,2.1),l.bead(d*s*.088,r*.61,u*.33,Math.min(r,s)*.05,a),l.bead(d*s*.043,r*.53,u*.49,Math.min(r,s)*.018,c);l.box(0,r*.27,0,s*.2,r*.46,u*.96,a,3.4),l.box(0,r*.43,u*.52,s*.088,r*.066,u*.15,c,1.3)}function JM(n,t,e,i,s){let r=Math.min(38,Math.min(t,e)*.3),{specialtyBarrierSections:o}=(typeof window>"u"?globalThis:window).RoomcraftModels;for(let[a,[c,l,u,h,f]]of o("playpen",t,e).entries()){let d=a>=2?3:4,m=u/d;for(let y=0;y<d;y++){let p=-m*(d-1)/2+y*m,g=s?dm[(y+a*2)%dm.length]:y%2?i.accent:i.base;gm(n,c+p*Math.cos(f),l+p*Math.sin(f),-f,m,r,h,g,"#c1b9b0")}}return r}function QM(n,t,e,{form:i,palette:s}){if(i==="photoPlayYard"||i==="playpen")return JM(n,t,e,s,i==="photoPlayYard");if(i==="photoBearPanel"){let u=Math.min(37,t*.42);return gm(n,0,0,0,t,u,e,s.base,s.dark),u}if(i==="gate"||i==="guard"){let u=Math.min(37,t*.32),h=Math.min(e*.55,u*.28);for(let d of[-1,1])n.box(d*t*.46,0,0,t*.07,u,h,s.dark,1.5),n.box(d*t*.46,u*.08,0,t*.08,u*.08,e*.73,s.base,1.4);for(let d of[u*.11,u*.88])n.box(0,d,0,t*.88,u*.085,h*.74,s.accent,1.2);let f=i==="guard"?13:8;for(let d=0;d<f;d++){let m=t*(.79*d/(f-1)-.395);n.box(m,u*.16,0,t*.027,u*.77,h*.47,s.base,.8)}return n.box(t*.39,u*.74,h*.3,t*.09,u*.11,h*.53,s.detail,1.7),u}let r=i==="folding",o=Math.min(r?39:29,t*.28),a=[s.base,s.accent,s.detail],{specialtyBarrierSections:c}=(typeof window>"u"?globalThis:window).RoomcraftModels,l=c(i,t,e);for(let[u,[h,f,d,m,y]]of l.entries()){let p=mm(n,h,f,-y);if(p.box(0,0,0,d*.955,o,m,s.dark,3.7),p.box(0,o*.07,m*.14,d*.87,o*.86,m*.87,a[u%3],3.4),i==="quilted")for(let g of[-.26,0,.26])p.box(g*d,o*.16,m*.59,d*.22,o*.67,m*.09,s.base,2.6);r&&u<l.length-1&&p.box(d*.48,o*.38,0,d*.09,o*.24,m*.92,s.dark,1.2)}return o}function tS(n,t,e,i){let s=new ln;return e?(s.moveTo(-n/2,0),s.lineTo(-n/2,t*.34),s.bezierCurveTo(-n/2,t*1.18,n/2,t*1.18,n/2,t*.34),s.lineTo(n/2,0),s.lineTo(n*.29,0),s.lineTo(n*.29,t*.32),s.bezierCurveTo(n*.29,t*.83,-n*.29,t*.83,-n*.29,t*.32),s.lineTo(-n*.29,0)):(s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(n/2,t),s.lineTo(-n/2,t*(i?.18:.08))),s.closePath(),s}function eS(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=i.endsWith("-rainbow")?jM:[r.accent,r.base,r.dark];if(s==="steps"){let l=Math.min(44,o*.48),u=t/3;for(let h=0;h<3;h++){let f=u*(h-1),d=l*(h+1)/3;n.box(f,0,0,u*.98,d,e*.94,a[h],3.7),n.box(f,d*.86,0,u*.96,d*.055,e*.945,r.detail,1.1)}return l}if(KM.has(s)){let l=s==="arch"||s==="tunnel",u=s==="ramp",h=Math.min(l?53:u?28:44,o*(l?.65:u?.32:.49)),f=tS(t*.91,h,l,u),d=Math.min(1.4,o*.021),m=s==="tunnel"?e*.83:e*.73;tf(n,f,m,a[1],0,d,0,d);for(let y of[-1,1])tf(n,f,d,a[y<0?0:2],0,d,y*m*.5,d*.54);return h+d*2}let c=Math.min(46,o*.62);return n.box(0,0,0,t*.95,c,e*.95,r.base,5),n.box(0,c*.08,0,t*.959,c*.07,e*.959,r.dark,1.8),n.box(0,c*.87,0,t*.955,c*.055,e*.955,r.accent,1.5),c}function nS(n,t,e,i){let s=Math.min(38,t*.35),r=Math.min(e*.31,t*.065);n.box(0,2,0,t*.95,s*.92,r*.35,"#33343a",2);for(let o of[-.47,.47])n.box(t*o,0,0,t*.035,s,r,i.dark,1.8),n.box(t*o,0,0,t*.068,s*.08,e*.74,i.dark,1.3);for(let o=-5;o<=5;o++)n.box(t*o*.077,2,r*.25,t*.008,s*.85,r*.15,i.accent,.42);for(let o of[.06,.28,.51,.74,.96])n.box(0,s*o,r*.3,t*.93,s*(o===.96?.06:.027),r*.21,i.base,.55);return s}function iS(n,t,e,{form:i,palette:s}){if(i==="screen")return nS(n,t,e,s);let r=i==="photoTiledMantel",o=i!=="hearth",a=Math.min(o?54:39,t*.37),c=e*.16,l=r?"#e6ded0":s.base,u=o?s.accent:s.dark,h=t*.59,f=a*.57;n.box(0,0,e*.05,t*.96,a*.09,e*.83,l,2.6),n.box(0,a*.08,-e*.28,t*.87,a*.81,e*.27,s.dark,2.2),n.box(0,a*.09,-e*.12,h,f,e*.12,"#29272b",1.7);for(let d of[-1,1])n.box(d*t*.383,a*.08,-c,t*.135,a*.78,e*.35,l,2.7),n.box(d*t*.3,a*.11,-c*.03,t*.014,f,e*.04,"#bc925f",.75);if(n.box(0,a*.65,-c,t*.78,a*.2,e*.35,l,2.6),r||!o){let d=t*.095;for(let m=-4;m<=4;m++)n.box(m*d,a*.68,-e*.014,d*.94,a*.146,e*.077,r?pm[(m+4)%pm.length]:s.accent,1)}n.box(0,a*.84,-e*.14,t*.9,a*.09,e*.43,u,2.1),n.box(0,a*.93,-e*.12,t*.99,a*.075,e*.51,r?"#f3ece3":s.detail,1.8);for(let d=-1;d<=1;d++)n.box(d*t*.11,a*(.13+Math.abs(d)*.02),e*.03,t*.25,a*.065,e*.1,d?"#785141":"#ad7e5b",1.7,d*.36);return a}function sS(n,t,e,{form:i,palette:s}){let r=Math.min(t,e);if(i==="photoBolster"){let a=Math.min(25,r*.62);n.box(0,0,0,t*.96,a,e*.91,s.base,a*.37);for(let c of[-1,1])n.box(c*t*.39,a*.12,0,t*.017,a*.78,e*.94,s.accent,2.3);return a}let o=Math.min(31,r*.41);return n.disc(0,0,0,t*.43,o*.17,e*.43,s.dark,.94),n.oval(0,o*.48,0,t*.48,o*.47,e*.48,s.base),n.ring(0,o*.4,0,t*.477,e*.477,Math.min(1.1,r*.025),s.accent),n.oval(0,o*.82,0,t*.26,o*.1,e*.26,s.accent),o}function rS(n,t,e,i,s){let r=i==="mirror",o=Math.min(r?45:39,Math.max(6,e*.66)),a=Number.isFinite(s)?Math.max(0,s-o/2):0,c=Math.min(5.5,e*.27),l=c*.56;n.box(0,a,0,t*.95,o,c,r?"#8b6b54":"#694e3e",2.7),n.box(0,a+o*.065,l,t*.89,o*.87,c*.26,r?"#d8b88e":"#ead8b8",1.4);let u=t*.81,h=o*.73,f=a+o*.14;n.box(0,f,l*1.31,u,h,c*.16,r?"#a7c4ce":"#c4d3b6",1.15);let d=new ln;return r?(d.moveTo(-u*.45,0),d.lineTo(-u*.19,0),d.lineTo(u*.14,h),d.lineTo(-u*.02,h)):(d.moveTo(-u/2,0),d.lineTo(-u/2,h*.19),d.quadraticCurveTo(-u*.28,h*.86,-u*.07,h*.4),d.quadraticCurveTo(u*.24,h*.18,u/2,h*.48),d.lineTo(u/2,0)),d.closePath(),tf(n,d,c*.035,r?"#e5eff0":"#759899",0,f,l*1.49),r||n.oval(u*.28,f+h*.76,l*1.51,h*.1,h*.1,c*.045,"#f0cb8c"),a+o}function ym(n,t,e,i,{mountY:s}={}){switch(i?.artFamily){case"paddedPanel":return QM(n,t,e,i);case"foamBlock":return eS(n,t,e,i);case"fireplace":return iS(n,t,e,i);case"playFurniture":if(i.form==="softPouf"||i.form==="photoBolster")return sS(n,t,e,i);break;default:if(i?.type==="artwork"||i?.type==="mirror")return rS(n,t,e,i.type,s)}}var at=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),oS=Object.freeze({sage:at.sage,mint:at.aqua,sky:at.blue,peach:at.peach,coral:"#cf8979",lavender:at.lilac,butter:at.honey,cream:at.linen,white:at.cream,oak:at.oakLight,walnut:at.walnut,charcoal:"#505b68",brass:at.brass,terracotta:"#b97d63",forest:at.moss,blush:at.blush,teddy:"#aa8063",slate:"#9b9b9d"}),aS=new Set([at.oak,at.oakLight,at.walnut]),cS=new Set([at.sage,at.moss,at.linen,at.lilac,at.lilacLight,at.blush,at.peach,at.oatmeal,at.upholsteryShadow,at.denim]);function lS(n,t){let e=aS.has(n)?1:cS.has(n)?2:0,i=n===at.glass||n===at.darkGlass||n===at.blueWater,s=n===at.brass,r=n===at.steel||n===at.basinSteel,o=new Xe({color:n,roughness:s||r?.37:i?.33:n===at.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var ef=class{constructor(t,e){this.root=new se,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,i,s,r,o=0){this.materials.has(e)||this.materials.set(e,lS(e,this.grainDirection));let a=new ce(t,this.materials.get(e));return a.position.set(i,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,i,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),h=u>.2?new Gl(s,r,o,2,u):new Ae(s,r,o);return this.part(h,a,t,e+r/2,i,l)}disc(t,e,i,s,r,o,a,c=1){let l=new We(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,i)}oval(t,e,i,s,r,o,a){let c=new Re(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,i)}ring(t,e,i,s,r,o,a){let c=new Cn(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,i)}basin(t,e,i,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Ft(l,u)),c=new Zo(a,24);return c.scale(s,r,o),this.part(c,at.ceramic,t,e,i)}finish(t){let e=new Map;for(let i of[...this.root.children]){let s=i.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),i.updateMatrix(),r.applyMatrix4(i.matrix),e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(r),this.root.remove(i)}for(let[i,s]of e){let r=s.length===1?s[0]:Xn(s);s.length>1&&s.forEach(a=>a.dispose());let o=new ce(r,i);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Ki(n,t,e,i,s,r,o=at.walnut){let a=Math.min(4.5,i*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])n.disc(t+i*c,0,e+s*l,a,r,a,o,.68)}function va(n,t,e,i,s,r,o,a){let c=o===at.linen?at.binding:at.blush;n.box(t,e,i,s,8,r,c,3.2,a),n.box(t,e+2.1,i,s-2.6,7.4,r-2.6,o,3.2,a)}function uS(n,t,e,i,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?at.upholsteryShadow:at.moss,u=a?at.oatmeal:at.sage,h=o?t*.5:t,f=r&&!o?e*.57:e,d=o?-t*.25:0,m=r&&!o?-e*.215:0,y=Math.min(t,e)*.1;if(Ki(n,d,m,h,f,5),n.box(d,5,m,h*.97,22,f*.98,l,8),r){let _=o?t*.52:t*.34,S=o?e*.38:e*.46,C=o?t*.22:-t*.32,M=o?c*e*.3:e*.25;Ki(n,C,M,_,S,5),n.box(C,5,M,_,22,S,l,8),n.box(C,25,M,_*.96,12,S*.9,i,5),o&&n.box(C,29,c*e*.464,_,26,y,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let _=e*.88/p;for(let S=0;S<p;S++){let C=-e*.44+_*(S+.5);n.box(d+y*.18,25,C,h*.76,12,_-3,i,5),n.box(d-h*.39,27,C,h*.22,31,_-1,u,8)}n.box(d,29,-c*e*.445,h*.88,20,y,u,6),va(n,d+h*.13,35,-e*.31,h*.42,_*.49,a?at.sage:at.peach,-.18),va(n,d+h*.12,35,e*.28,h*.4,_*.45,at.linen,.2)}else{let _=t*.8/p;for(let S=0;S<p;S++){let C=-t*.4+_*(S+.5);n.box(C,25,m+f*.08,_-3,12,f*.7,i,6),n.box(C,27,m-f*.39,_-1,31,f*.24,u,7)}for(let S of[-t*.442,t*.442])n.box(S,26,m,y,22,f*.89,u,6);va(n,-t*.27,35,m-f*.15,t*.18,f*.34,at.peach,-.18),va(n,t*.27,35,m-f*.12,t*.17,f*.33,at.linen,.2)}let g=o?h*.67:h*.19,x=o?e*.14:f*.58,v=o?d+h*.06:h*.32,b=o?e*.13:m+f*.1;n.box(v,37.1,b,g,1.7,x,at.lilacLight,.65);for(let _ of[-1,1])n.box(v,38.82,b+_*x*.36,g*.9,.25,1.2,at.lilac);return 58}function bi(n,t,e,i,s,r,o,a=!1){let c=a?19:28;Ki(n,t,e,i,s,c,at.walnut),n.box(t,c,e,i*.9,7,s*.92,at.walnut,2),n.box(t,c+5,e,i*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?i:s)*.39,h=e-Math.cos(r)*s*.39;n.box(u,c+9,h,l?s*.2:i*.84,22,l?s*.82:s*.22,o,4)}function hS(n,t,e,i){let s=-e*.39;Ki(n,0,0,t,e,20,at.walnut),n.box(0,20,0,t*.9,6,e*.92,at.walnut,2),n.box(0,24,0,t*.83,6,e*.83,i,2.5);for(let r of[-1,1])n.box(t*.34*r,23,s,t*.075,18,e*.12,at.walnut,1.1);return n.box(0,37,s,t*.84,22,e*.22,i,4),59}function Vl(n,t,e,i,s){return s==="round"?(n.disc(0,0,0,t*(.13/.58),5,e*(.13/.58),at.walnut),n.disc(0,4,0,t*(.045/.58),31,e*(.045/.58),at.walnut,1.5),n.disc(0,33,0,t/2,8,e/2,i,.96),41):s==="classic"?(Ki(n,0,0,t*(.69/.79),e*(.49/.57),35),n.box(0,32,0,t*(.72/.79),6,e*(.5/.57),at.walnut,3),n.box(0,37,0,t,8,e,i,4),n.box(0,45,0,t*(.69/.79),1.4,e*(.14/.57),at.linen,.6),46.4):(Ki(n,0,0,t*(.69/.79),e*(.47/.56),34),n.box(0,33,0,t,8,e,i,3),n.box(0,41.1,0,t*(.55/.79),1.2,e*(.15/.56),at.linen,.5),42.3)}function fS(n,t,e,i,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return bi(n,0,-e*.39,t*.2,e*.23,0,at.denim),bi(n,0,e*.39,t*.2,e*.23,Math.PI,at.denim),bi(n,-t*.415,0,t*.17,e*.27,Math.PI/2,at.denim),bi(n,t*.415,0,t*.17,e*.27,-Math.PI/2,at.denim),Vl(n,t*.79,e*.57,at.oak,"classic");if(r)bi(n,0,-e*.37,t*.2,e*.2,0,at.sage),bi(n,0,e*.37,t*.2,e*.2,Math.PI,at.blush),bi(n,-t*.38,0,t*.2,e*.2,Math.PI/2,at.lilac),bi(n,t*.38,0,t*.2,e*.2,-Math.PI/2,at.honey),Vl(n,t*.58,e*.58,i,"round");else{let c=a?[-.28,.28]:[-.32,0,.32],l=[at.sage,at.blush,at.lilac,at.honey];for(let u=0;u<c.length;u++)for(let h of[-1,1])bi(n,t*c[u],e*.37*h,t*(a?.19:.15),e*.23,h<0?0:Math.PI,l[(u+(h<0?0:2))%l.length]);Vl(n,t*.79,e*.56,i,"styled")}return 42}function dS(n,t,e,i,s,r){n.box(t,e,i,s*.31,2,r*.5,at.ink,.5),n.box(t,e+1,i,s*.1,14,4,at.ink,1),n.box(t,e+12,i,s,25,6,at.ink,2),n.box(t,e+14,i+3.1,s*.91,21,1,at.glass,.4),n.box(t-s*.25,e+28,i+3.7,s*.28,2,.5,at.blue,.2)}function pS(n,t,e,i,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;n.box(0,37,o,t,7,r,i,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,h=s?r/2:0;s&&n.box(l,37,h+.8,a,7,u-1.6,i,2.4),n.box(l,4,h,a*.81,34,u*.81,at.walnut,2.8);for(let f=0;f<3;f++){let d=6+f*9.7;n.box(l,d,h+u*.41,a*.74,8.4,2,at.oak,.7),n.box(l,d+3,h+u*.43,a*.26,2,2,at.brass,.5)}}return dS(n,-t*.02,44,o-r*.22,t*.28,r*.43),n.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,at.linen,.6),n.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,at.peach),81}function xm(n,t,e,i,s,r){let o=new ln;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,h=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...h):o.lineTo(...h)}o.closePath();let a=new Pi(o);a.rotateX(-Math.PI/2),n.part(a,r,t,e,i)}function mS(n,t,e,i,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Ki(n,0,0,t,e,6,at.walnut);let c=r?[6,55]:[6];for(let u of c){n.box(0,u,0,t*.97,15,e*.98,at.walnut,5),n.box(0,u+12,0,t*.9,11,e*.92,at.linen,4),n.box(0,u+21.6,e*.15,t*.89,5,e*.62,at.lilac,2.5),n.box(0,u+23.7,e*.15,t*.877,7,e*.605,i,3.4),n.box(0,u+28,-e*.11,t*.88,3,e*.071,at.lilacLight,1);let h=t>=145?[-t*.2,t*.2]:[0];for(let d of h)va(n,d,u+22,-e*.275,t*(h.length===2?.34:.49),e*.2,at.linen,d<0?-.04:.04);let f=Math.min(t,e)*.045;for(let[d,m,y,p]of[[-.24,.12,1,at.cream],[.23,.27,.79,at.honey],[.08,.04,.57,at.cream],[-.1,.34,.62,at.honey]])xm(n,t*d,u+30.8,e*m,f*y,p);for(let d of[-.32,-.17,0,.17,.32])n.box(t*d,u+30.71,e*.24,.85,.24,e*.33,at.lilacLight,0);for(let d of[.09,.195,.3,.405])n.box(0,u+30.72,e*d,t*.71,.24,.9,at.lilacLight,0)}let l=r||a?93:52;if(n.box(0,4,-e*.46,t*.95,l-4,e*.083,at.walnut,6),n.box(0,18,-e*.417,t*.89,l-23,e*.055,i,4),o||r||a)for(let u of[-1,1]){for(let h of[-1,1])n.box(t*.45*u,4,e*.46*h,5,l,6,at.walnut,2);if(n.box(t*.45*u,l-9,0,5,5,e*.89,i,1.5),o||r)for(let h=-3;h<=3;h++)n.box(t*.45*u,l-29,e*h*.105,3,20,3,i,.8)}return l}function gS(n,t,e,i,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Ki(n,0,0,t,e,5),n.box(0,5,0,t*.96,a-6,e*.9,at.walnut,3),n.box(0,a-2,0,t,4,e,i,1.7),n.box(0,a-3.7,0,t*.985,1.5,e*.967,at.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let h=0;h<l;h++){let f=t*.89/l,d=(a-8)/c,m=f*(h-(l-1)/2),y=5+u*d;n.box(m,y,e*.46,f-2,d-1.5,2.9,i,1),n.oval(m,y+d*.45,e*.51,2.2,1.7,2.2,at.brass)}return a+2}function yS(n,t,e,i){if(i==="office-round")return n.disc(0,1,0,t*.5,2.2,e*.5,at.moss),n.disc(0,3.2,0,t*.46,.7,e*.46,at.sage),n.ring(0,3.9,0,t*.4,e*.4,.6,at.linen),4;let s=i==="bedroom-floral";n.box(0,1,0,t,2.4,e,s?at.lilac:at.blush,1),n.box(0,3.5,0,t*.91,.8,e*.91,at.linen),n.box(0,4.3,0,t*.86,.5,e*.86,s?at.lilacLight:at.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)n.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,at.linen);for(let r of[-1,1])n.box(r*t*.398,4.84,0,.6,.32,e*.797,at.linen),n.box(0,4.84,r*e*.398,t*.797,.32,.6,at.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])xm(n,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,at.cream);return 5}function xS(n,t,e,i){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let f of[-1,1])n.box(f*(t+s)/4,i-5,0,l,5,e,at.linen);n.box(0,i-5,(a-e/2)/2,s,5,a+e/2,at.linen),n.box(0,i-5,(c+e/2)/2,s,5,e/2-c,at.linen);let u=Math.min(2.6,s*.1);n.box(0,i-4.88,o,s,.72,r,at.basinSteel);for(let f of[-1,1])n.box(f*s/2,i-4.5,o,u,5.25,r+u,at.steel,.4),n.box(0,i-4.5,o+f*r/2,s,5.25,u,at.steel,.4),n.disc(0,i-4.1,o+f*r/4,u,.6,u,at.darkGlass);n.box(0,i-4.5,o,s,4.85,u,at.steel,.4);let h=-s/2-u*1.15;n.disc(h,i,o,u*.8,u*2.9,u*.8,at.steel),n.box(h+u,i+u*2.5,o,u*2.8,u*.7,u,at.steel,.6)}function bS(n,t,e,i,s=!1){let r=i==="doubleVanity"?32:35,o=i==="kitchenWorktop",a=i==="doubleVanity";n.box(0,1,0,t*.91,r-4,e*.93,a?at.sage:at.walnut,2.3),s?xS(n,t,e,r+2):n.box(0,r-3,0,t,5,e,at.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let h=c?2.2:t*.29,f=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,m=c?e*.3*u:e*.47*l;n.box(d,6,m,h,r*.67,f,a?at.moss:at.oak,.8),n.box(d,r*.63,m,c?3.2:t*.08,2.6,c?e*.05:3.2,at.honey,.7)}if(o){n.box(0,r+2,0,t*.84,2.5,e*.72,at.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let h=Math.min(t,e)*(l<0?.12:.092);n.ring(t*l,r+4.8,e*u,h,h,1,at.glass)}}if(a)for(let l of[-t*.24,t*.24])n.basin(l,r+1.9,0,t*.16,5.5,e*.36),n.oval(l,r+3.48,0,2.1,.52,2.1,at.brass),n.disc(l,r+2,-e*.32,2.6,8,2.6,at.brass),n.box(l,r+8.4,-e*.22,4,3,e*.2,at.brass,1);return r+3}function vS(n,t,e,i){if(i==="tub"){n.box(0,0,0,t*.95,19,e*.95,at.ceramic,6),n.box(0,18,0,t*.85,3,e*.86,at.blueWater,1.3);for(let s of[-1,1])n.box(s*t*.44,17,0,t*.11,7,e*.94,at.cream,2.6),n.box(0,17,s*e*.43,t*.82,7,e*.12,at.cream,2.6);return n.disc(0,21,-e*.31,2.4,.9,2.4,at.glass),n.disc(0,22,-e*.44,3.5,9,3.5,at.brass),n.box(0,30,-e*.4,5,3.7,e*.1,at.brass,1.3),n.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,at.aqua,.08),34}return i==="toilet"?(n.disc(0,0,e*.12,t*.28,11,e*.29,at.ceramic,.65),n.disc(0,10,e*.12,t*.43,5,e*.34,at.cream,.81),n.disc(0,15,e*.12,t*.34,1,e*.27,at.linen),n.box(0,4,-e*.32,t*.92,22,e*.31,at.ceramic,4.2),n.box(0,25,-e*.32,t*.93,3,e*.32,at.cream,1.3),n.disc(t*.25,28,-e*.32,2.1,1.1,2.1,at.honey),29):(n.box(-t*.15,0,-e*.14,t*.65,24,e*.58,at.sage,3.8),n.box(-t*.15,23,-e*.14,t*.76,4,e*.68,at.cream,1.6),n.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),n.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,at.brass),n.disc(-t*.15,27,-e*.34,2.5,8,2.5,at.brass),n.box(-t*.15,33,-e*.31,4.7,3,e*.1,at.brass,1.1),n.box(t*.34,2,e*.12,t*.22,17,e*.73,at.walnut,2.1),n.box(t*.34,19,e*.18,t*.24,4.7,e*.34,at.blush,1.7),36)}function _S(n,t,e,i,s){let r=i?at.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);n.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),n.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])n.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(i?.19:.1),e*.093,r),n.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,at.ink),n.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),n.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,at.blush);return n.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,at.ink),s&&n.box(0,8,e*.17,t*.57,9,e*.49,at.linen,3.8),c+o*(i?.37:.28)}function MS(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="bin",a=r*(o?.31:.35);if(o||i==="basket"){if(o)n.box(0,0,0,t*.81,a,e*.81,s.base,r*.07),n.box(0,a-.8,0,t*.83,2.5,e*.83,s.accent,r*.075),n.box(0,a+1.2,0,t*.74,1,e*.73,s.dark,r*.06),n.box(0,a*.63,e*.409,t*.26,a*.2,1.1,s.detail,1.2);else{n.disc(0,0,0,t*.43,a,e*.42,s.base,.79),n.disc(0,a-.35,0,t*.393,.8,e*.38,s.dark);for(let y=0;y<=5;y++)n.ring(0,a*(.13+y*.16),0,t*(.35+y*.016),e*(.34+y*.016),.74,y%2?s.accent:s.base)}for(let y=0;y<3;y++){let p=(y-1)*t*.22,g=[at.sage,at.honey,at.lilac][y];n.box(p,a+.95,(y%2-.5)*e*.16,t*.16,r*(.13+.03*y),e*.21,g,2,y*.27)}return a+r*.22}let c=i==="cubby"||i==="lowShelf",l=Math.max(13,Math.min(54,r*(c?.49:.72))),u=Math.max(2,e*.75),h=s.base;if(i==="floating"){n.box(0,l,0,t*.94,3.4,u,h,1.2);for(let y of[-1,1])n.box(y*t*.3,l-7,-u*.38,4,7,u*.2,s.dark,.8);return l+4}let f=c?2:3,d=c?3:2,m=l/(f-1);for(let y of[-1,1])n.box(t*.45*y,0,0,t*.065,l+3.3,u,h,1);n.box(0,0,-u*.44,t*.88,l,e*.08,s.dark,.65);for(let y=0;y<f;y++)if(n.box(0,y*m,0,t*.94,3.1,u,h,1),y!==f-1)for(let p=0;p<d;p++){let g=t*((p+.5)/d-.5)*.84;if(c)n.box(g,y*m+3.2,e*.05,t*.205,m*.45,e*.52,[at.sage,at.blush,at.linen][p],1.7);else for(let x=0;x<4;x++)n.box(g+t*(.047*x-.07),y*m+3.15,e*.11,t*.038,m*(.41+x%3*.085),e*.31,[at.lilac,at.sage,at.honey,at.blush][x],.65)}return l+3.2}function SS(n,t,e,i){let s=Math.min(t,e),r=s*(i?.33:.25);n.disc(0,0,0,r,r*.85,r,at.peach,.72),n.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,at.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(i?.55:.44)+o%2*s*.08,h=n.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,at.moss);h.rotation.z=-c/u,h.rotation.x=l/u;let f=i?at.sage:[at.blush,at.linen,at.honey][o%3];n.oval(c,u,l,s*.13,s*(i?.18:.085),s*.11,f)}return s*(i?.82:.65)}function bm(n,t={}){let{type:e,w:i,h:s}=n||{};if(typeof e!="string"||!Number.isFinite(i)||!Number.isFinite(s)||i<1||s<1)return null;if(e.startsWith("pets-"))return am(e,i,s);let r=oS[e.split("-").at(-1)],o=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e]??{type:e},a=new ef(i,s),c=ym(a,i,s,o,t);if(c===void 0&&!["plush","photoBunnyPlush"].includes(o.form)&&(c=fm(a,i,s,o)),c!==void 0)return a.finish(c);if(e==="sofa"||/(?:sofa|loveseat|chaise)-/.test(e))c=uS(a,i,s,r||(e==="sofa"?at.linen:at.sage),e);else{if(e==="tv")return a.box(0,2,0,i*.94,23,s*.98,at.walnut,3.5),a.box(0,24,0,i,4,s,at.oakLight,1.5),a.box(0,28,0,i*.4,6,s*.32,at.ink,1.4),a.box(0,33,0,i*.29,52,s*.89,at.ink,2.5),a.box(-i*.155,36,0,1.6,46,s*.84,at.darkGlass,.6),a.oval(-i*.173,35,s*.34,1.2,1.2,1.2,at.honey),lm(a.finish(85),i,s);if(e==="table"||e.includes("dining-set"))c=fS(a,i,s,r||at.oakLight,e);else if(e==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(e)){let l=e==="diningTable"?"classic":e.includes("round-dining")?"round":"styled";c=Vl(a,i,s,r||(l==="classic"?at.oak:at.oakLight),l)}else if(e==="diningChair"||e.startsWith("living-dining-chair-"))c=hS(a,i,s,r||at.denim);else if(e==="desk"||e.includes("-desk-"))c=pS(a,i,s,r||at.oakLight,e==="desk"||e.includes("corner-desk"));else if(e==="chair"||e==="stool"||e.includes("desk-chair"))bi(a,0,0,i,s,0,r||at.lilac,e==="stool"),c=e==="stool"?50:60;else if(e==="armchair"||e.includes("acorn-armchair")){bi(a,0,0,i,s,0,r||at.lilac,!0);for(let l of[-1,1])a.box(l*i*.37,16,0,i*.19,25,s*.83,at.lilac,6.5);c=51}else if(e==="bed"||/(?:bed|crib)-/.test(e))c=mS(a,i,s,r||at.lilac,e);else if(e==="rug")c=yS(a,i,s,n.rugStyle);else if(e==="counter"||e==="kitchenWorktop"||e==="doubleVanity")c=bS(a,i,s,e,e==="counter"&&n.id==="i7");else if(e==="tub"||e==="toilet"||e==="bathFixtures")c=vS(a,i,s,e);else if(e==="plant"||e==="floorPlant")c=SS(a,i,s,e!=="plant");else if(e==="wallUnit")a.box(0,48,0,i,17,s*.62,at.linen,4),a.box(0,51,s*.32,i*.89,4,1.8,at.ink,.6),a.box(-i*.34,56,s*.32,i*.11,2.1,2.1,at.blue,.7),c=65;else if(["storage","shelf"].includes(o.artFamily)||o.form==="lowShelf")c=MS(a,i,s,o);else if(/dresser|nightstand|bookcase|storageCabinet/.test(e))c=gS(a,i,s,r||at.oakLight,e);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(e)){let l=e==="bedroomBench"?26:30;Ki(a,0,0,i,s,l-4),a.box(0,l-5,0,i,8,s,r||at.oakLight,3.4),e==="bedroomBench"&&a.box(0,l+2,0,i*.87,6.2,s*.91,at.lilacLight,2.6),c=l+8}else if(e.includes("bunny-plush")||e.includes("plush-bear")||e.includes("bear-floor-chair"))c=_S(a,i,s,e.includes("bunny"),e.includes("floor-chair"));else return null}return a.finish(c)}var Qt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Ma=Math.PI,nf=2*Ma,wS=new Set(["unknown","unavailable"]),ai=(n,t,e)=>Math.max(t,Math.min(e,n)),_a=(n,t)=>Number.isFinite(n)?ai(n,12,480):t,Mm=.96,Sm=.09;function wm(n,t,e){let i=_a(n.w,42),s=_a(n.h,42);return Math.abs(t)<=i/2&&Math.abs(e-s*Sm)<=s*Mm/2}var ye=(n,t={})=>new Xe({color:n,roughness:.83,...t}),sf=n=>String(n?.state??"unknown"),Zs=n=>!wS.has(sf(n)),jr=n=>Zs(n)&&(n.active===!0||n.state==="on"),ES=n=>jr(n)?Number.isFinite(n.attributes?.brightness)?ai(n.attributes.brightness/255,0,1):1:0,Wl=n=>(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[n];function _i(n,t,e,i=0,s=0,r=0){let o=new ce(t,e);return o.position.set(i,s,r),n.add(o),o}function tn(n,t,e,i,s,r=0,o=0,a=0){return _i(n,new Ae(t,e,i),s,r,o,a)}function xn(n,t,e,i,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,i/3),u=l-t/2,h=l-e/2,f=new ln;f.moveTo(u,h),f.lineTo(-u,h),f.lineTo(-u,-h),f.lineTo(u,-h),f.closePath();let d=new pi(f,{depth:i-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-i/2),_i(n,d,s,r,o,a)}function Ke(n,t,e,i,s,r=0,o=0,a=0,c=16){return _i(n,new We(t,e,i,c),s,r,o,a)}function vi(n,t,e,i,s,r){return _i(n,new Re(t,10,7),e,i,s,r)}function Zr(n,t=0,e=0,i=0){let s=new se;return s.position.set(t,e,i),n.add(s),s}function TS(n,t,e=2.8){let i=new Be({transparent:!0,depthWrite:!1,blending:$i,uniforms:{strength:{value:0},tint:{value:new $t(Qt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=_i(n,new Rn(2*t,2*t),i,0,e,0);return s.rotation.x=-Ma/2,s.visible=!1,(r,o)=>{s.visible=r>0,i.uniforms.strength.value=r*.29,i.uniforms.tint.value.copy(o)}}function AS(n,t,e,i){let s=new se,r=n.type,o=Wl(r),a=String(n.lightForm??o?.lightForm??""),c=r==="pendantLight"||a==="star_pendant",l=r==="ceilingLight"||c||a==="bloom_ceiling",u=r==="floorLamp"||a==="cloud_floor_lamp",h=r==="wallSconce"||a==="acorn_sconce",f=l&&/fan light/i.test(n.name??""),d=Math.min(t,e),m=o?.palette,y=new $t(m?.detail??Qt.cream),p=ye(m?.base??Qt.honey,{roughness:.53}),g=ye(m?.dark??Qt.ink),x=ye(Qt.brass,{roughness:.36,metalness:.42}),v=ye(y,{emissive:Qt.warm,emissiveIntensity:0}),b=new $t(Qt.warm),_=f?46:c?50:l?56:h?i.mountY??40:u?56:36,S=!l&&!u&&!h,C=S?ai(d*.68,15,46):ai(d*(l?1.72:1.35),38,110),M=TS(s,C,S?16.8:2.8);if(l){let A=d*(f?.19:.29);if(Ke(s,A,A*1.02,3,g,0,_+2),c&&Ke(s,1.7,1.7,13,p,0,_+9),Ke(s,A*.82,A,5,p,0,_-1.5),Ke(s,A*.92,A*.96,1.15,x,0,_+1.1),a==="star_pendant"||a==="bloom_ceiling"){let D=_i(s,new $o(A*.96,0),v,0,_,0);D.scale.y=c?1.03:.56}else{let D=vi(s,A*.83,v,0,_,0);D.scale.y=c?.88:.52}}else if(h)xn(s,d*.34,18,4,g,0,_-5,-4),Ke(s,d*.12,d*.11,14,p,0,_-3,3),a==="acorn_sconce"?(Ke(s,d*.15,d*.22,13,v,0,_+4,3,10),Ke(s,d*.22,d*.218,1.2,x,0,_-2.3,3,10)):vi(s,d*.21,v,0,_+3,3);else{let A=_-7,D=u?3:16,N=d*(u?.25:.3);if(Ke(s,N*.57,N*.67,4,g,0,D),Ke(s,2,2.9,A-D,p,0,(D+A)/2),u)vi(s,N*.81,v,0,_,0);else{let O=a==="bud_lamp"?12:9;if(a==="bud_lamp"){let B=new We(N*.56,N,14,O*2),L=B.attributes.position;for(let k=0;k<L.count;k++){let H=L.getX(k),W=L.getZ(k);Math.round(Math.atan2(H,W)*O/Math.PI)%2&&L.setXYZ(k,H*.92,L.getY(k),W*.92)}B.computeVertexNormals(),_i(s,B,v,0,_,0)}else Ke(s,N*.56,N,14,v,0,_,0,O);Ke(s,N,N*.99,1.2,x,0,_-6.7,0,O),Ke(s,N*.55,N*.58,1.1,x,0,_+7.1,0,O)}}return{root:s,anchorY:_+2,animate(A){let D=ES(A),N=A?.attributes?.rgb_color;if(Array.isArray(N)&&N.length===3&&N.every(Number.isFinite)){let[O,B,L]=N.map(k=>ai(k/255,0,1));b.setRGB(O,B,L,rn)}else b.setHex(Qt.warm);M(D,b),v.emissiveIntensity=D*.88,v.emissive.copy(b),D>0?v.color.copy(b):v.color.copy(y)}}}function RS(n,t){let e=new ln;e.moveTo(n*.1,-n*.061),t?(e.bezierCurveTo(n*.42,-n*.15,n*.76,-n*.42,n,-.024*n),e.bezierCurveTo(n*.87,n*.25,n*.49,n*.28,n*.1,n*.063)):(e.bezierCurveTo(n*.39,-n*.094,n*.62,-n*.16,n*.88,-n*.14),e.bezierCurveTo(n*1.01,-n*.11,n*1.03,n*.07,n*.88,n*.13),e.bezierCurveTo(n*.62,n*.2,n*.42,n*.13,n*.1,n*.063)),e.closePath();let i=new pi(e,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return i.translate(0,0,-.9),i.rotateX(-Ma/2)}function vm(n,t,e,i){let s=new se,r=Math.min(t,e)*(i?.37:.46),o=i?r+11:59,a=Zr(s,0,o,0);i&&(a.rotation.x=Ma/2);let c=Zr(a,0,-1,0);c.name="Fan blades";let l=Wl(n.type),u=l?.form==="palm",h=ye(l?.palette.accent??Qt.cream),f=ye(l?.palette.dark??Qt.ink),d=l?.palette.base??(/(?:white|cream)$/.test(n.type)?Qt.oat:/(?:forest|sage)$/.test(n.type)?Qt.sage:Qt.honey),m=ye(d),y=u?ye(l.palette.accent):null,p=i||/three-blade/.test(n.type)?3:/four-blade/.test(n.type)?4:5;Ke(a,r*.18,r*.2,6,f),Ke(a,r*.174,r*.176,1.4,ye(Qt.brass,{roughness:.36,metalness:.42}),0,3.4),Ke(a,r*.15,r*.17,2.6,h,0,4.9);let g=RS(r,u);for(let x=0;x<p;x++){let v=Zr(c);if(v.rotation.y=x/p*nf,_i(v,g,m),y){tn(v,r*.72,.5,.55,y,r*.52,1.45);for(let b=0;b<4;b++)for(let _ of[-1,1]){let S=tn(v,r*(.1+.025*b),.46,.48,y,r*(.45+.11*b),1.39,_*r*.043);S.rotation.y=_*.68}}}if(i){xn(s,r*1.66,6,r*1.02,f,0,3),tn(s,r*.3,11,6,h,0,10);let x=_i(s,new Cn(r,2.6,6,24),h,0,o,3);x.rotation.z=.04;for(let v=-1;v<=1;v++){let b=v*r*.5;Ke(s,.68,.68,2*Math.sqrt(r*r-b*b),f,b,o,5,6)}}return{root:s,anchorY:o,...i?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,v=0){let b=Number.isFinite(x?.attributes?.percentage)?ai(x.attributes.percentage/100,.12,1):.64;c.rotation.y=jr(x)?v*nf*b%nf:0}}}function CS(n,t){let e=new se,i=t.mountY??39,s=Zr(e,0,i),r=ai(n*.72,17,27);xn(s,r,31,5,ye(Qt.ink),0,0,-.5),xn(s,r-1.9,29,4.4,ye(Qt.cream),0,.3,1);let o=ye(Qt.oat,{emissive:Qt.warm,emissiveIntensity:0}),a=xn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let h=ye(Qt.teal,{emissive:Qt.mint,emissiveIntensity:0});return vi(s,1.85,h,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:i,animate(l,u=0){a.rotation.x=Zs(l)?jr(l)?-.16:.16:0,o.emissiveIntensity=jr(l)?.42:0;let h=l?.presence==="on";for(let f=0;f<c.length;f++){let d=h?.5+.5*Math.cos(u*5-f*1.23):0;c[f].material.color.setHex(h?Qt.mint:Qt.teal),c[f].material.emissiveIntensity=h?.75+d*1.9:0,c[f].scale.setScalar(h?1+d*.18:1)}}}}function _m(n,t,e,i=31){let s=new se,r=36.5,o=Math.max(12,n-6),a=ye(Qt.oat);if(t){let f=ye(Qt.glass,{roughness:.32});tn(s,o,i,3.2,f,0,r,0);for(let m of[-o/2+1.6,0,o/2-1.6])tn(s,3.2,i+2,7.5,a,m,r);let d=r+i/2;tn(s,o,1.8,7,f,0,d+.35);for(let m of[-4.25,4.25])tn(s,o+2,3.2,1.5,a,0,d,m);tn(s,o+3,3.8,11,a,0,r-i/2,1.4),tn(s,o,1.35,.5,ye(Qt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=ye(Qt.cream),l=r+i/2-1;xn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(f,d)=>tn(s,o-5,i/8-.45,3,c,0,l-d*(i/8),6.9)),h=0;return{root:s,anchorY:r+1.5,animate(f,d,m,y=!1){let p=rf(f),g=p===null?y?0:h:1-p;y||(h=g);let x=Number.isFinite(f?.attributes?.current_tilt_position)?ai(f.attributes.current_tilt_position/100,0,1):0;for(let v=0;v<u.length;v++){let b=ai(g*u.length-v,0,1);u[v].visible=b>.02,u[v].scale.y=b,u[v].rotation.x=x*.9}}}}function rf(n){return Zs(n)?Number.isFinite(n.attributes?.current_position)?ai(n.attributes.current_position/100,0,1):["open","on"].includes(n.state)?1:["closed","off"].includes(n.state)?0:null:null}function IS(n,t){let e=new se,i=t*.72,s=n*.74,r=i/2,o=Math.min(48,n*.38),a=Math.min(23,n*.19),c=ye(Qt.oat),l=ye(Qt.cream),u=ye(Qt.plum),h=[ye(Qt.tile),ye(Qt.paleTile)],f=ye(Qt.dark);tn(e,n,5,t*Mm,l,0,2.5,t*Sm),tn(e,n*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let N of[-n*.42,n*.42])tn(e,n*.09,o+4,i,c,N,(o+4)/2),xn(e,n*.1,o+4,5,l,N,(o+4)/2,r+1,1.5);let d=new ln;d.moveTo(-n*.49,0),d.lineTo(n*.49,0),d.lineTo(0,a),d.closePath();let m=new pi(d,{depth:i+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});m.translate(0,0,-r-5.5),_i(e,m,u,0,o+4);let y=n*.49,p=Math.atan2(a,y),g=Math.hypot(a,y),x=(i+11)/8,v=[[],[]];for(let N of[-1,1])for(let O=0;O<8;O++){let B=-r-5.5+(O+.5)*x,L=new Ae(g*.97,2.2,x-.62);L.rotateZ(-N*p),L.translate(N*y*.5,o+5.65+a*.5,B),v[O%2].push(L)}v.forEach((N,O)=>{_i(e,Xn(N),h[O]),N.forEach(B=>B.dispose())}),xn(e,4,4.5,i+12,u,0,o+a+5.6,0,1.5),tn(e,n*.95,3.5,3.5,l,0,o+4,r+5.5),tn(e,s,o,1.5,f,0,o/2+4,r-4);for(let N of e.children)N.isMesh&&(N.castShadow=!0);let b=ye(Qt.mint),_=ye(Qt.sage),C=(o-3)/6,M=Array.from({length:6},(N,O)=>{let B=Zr(e,0,o-(O+.5)*C+2,r+.5);return xn(B,s-2,C-.7,3.4,b,0,0,0,1.2),tn(B,s*.91,.68,.7,_,0,C*.23,1.8),O===5&&xn(B,s*.13,2,2.2,l,0,0,2.3,.55),B}),A=ye(Qt.gold,{emissive:Qt.ember,emissiveIntensity:0});vi(e,3.7,A,n*.422,o*.73,r+4.5);let D=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(N,O=0,B,L=!1){let H=rf(N)??(L?0:D);L||(D=H),b.color.setHex(Zs(N)?Qt.mint:Qt.muted),_.color.setHex(Zs(N)?Qt.sage:Qt.muted);let W=(1-H)*M.length;M.forEach((K,Z)=>{let nt=ai(W-Z,0,1);K.visible=nt>.02,K.scale.y=nt,K.position.y=o-(Z+nt/2)*C+2});let et=["opening","closing"].includes(sf(N));A.emissiveIntensity=et?.55+(.5+.5*Math.cos(O*6)):0}}}function PS(n){let t=new se,e=46,i=ye(Qt.cream),s=ye(Qt.honey),r=Math.min(n*.86,88),o=Zr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])tn(t,3.4,e,5,i,c,e/2);tn(t,r+4,3,5,i,0,e),xn(o,r-2,e-4,4,s,r/2,e/2,0,2),vi(o,2.2,ye(Qt.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,h=!1){let d=rf(c)??(h?0:a);h||(a=d),o.rotation.y=-1.32*d,s.color.setHex(Zs(c)?Qt.honey:Qt.muted)}}}function LS(n,t,e){let i=new se,s=n.type!=="wallUnit",r=e.mountY??(s?42:48),o=ai(t*.85,23,126),a=ye(Qt.dark,{emissive:Qt.mint,emissiveIntensity:0});if(xn(i,o,s?25:18,8,ye(Qt.cream),0,r,0),s){xn(i,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])vi(i,1.35,ye(Qt.oat),o*c,r-7,4.3)}else tn(i,o*.89,2.2,.7,a,0,r-4,4.2);return{root:i,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",h=Zs(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Qt.warm:Qt.glass),a.emissiveIntensity=h?1.15:jr(c)?.25:0}}}function NS(n,t,e){let i=new se,s=Math.min(t,e)*.74,r=n.type==="humidifier",o=r?25:30,a=ye(Qt.cream),c=ye(r?Qt.glass:Qt.sage),l=ye(Qt.teal,{emissive:Qt.mint,emissiveIntensity:0}),u=o-1;if(Ke(i,s*.46,s*.5,4,ye(Qt.ink),0,2),r){let d=vi(i,s/2,c,0,13,0);d.scale.y=22/s,Ke(i,s*.19,s*.22,3.5,a,0,u)}else{xn(i,s,24,s*.82,c,0,15,0,5),xn(i,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)tn(i,s*.66,1.2,1.1,l,0,u+2,d*3.5)}vi(i,1.6,l,s*.18,u-2,s*.31);let h=ye(Qt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),f=Array.from({length:3},(d,m)=>vi(i,2.1+m*.6,h,0,u+3,0));return{root:i,anchorY:u,animate(d,m=0){let y=jr(d);l.emissiveIntensity=y?1.6:0;for(let p=0;p<f.length;p++){f[p].visible=y;let g=(m*.68+p/f.length)%1;f[p].position.set(Math.sin(g*Ma)*3.1,u+4+g*14,0),f[p].scale.setScalar(.7+g*.62)}}}}function DS(n,t,e){let i=new se,s=Wl(n.type),r=s?.form,o=Math.min(t,e)*.42,a=.72;i.scale.setScalar(a);let c=ye(Qt.sage,{emissive:Qt.mint,emissiveIntensity:0}),l=ye(s?.palette.dark??Qt.ink),u=ye(s?.palette.base??Qt.cream,{roughness:.46}),h=r==="slim"?1.22:1,f=Ke(i,o,o*.95,r==="slim"?4.8:7,l,0,4.6),d=Ke(i,o*.96,o,r==="slim"?3.6:5.5,u,0,r==="slim"?8.4:10.2);f.scale.x=d.scale.x=h,Ke(i,o*.28,o*.33,4,ye(Qt.oat),0,14,-o*.23);for(let p of[-.27,.27])vi(i,o*.105,l,o*p,10,o*.88);let m=xn(i,o*.68,1.2,2.5,c,0,13.2,o*.36);if(r==="mop"){let p=ye(s.palette.accent);for(let g of[-1,1])Ke(i,o*.39,o*.4,2.1,p,g*o*.45,1.8,o*.51)}let y;if(r==="docked"){y=new se,y.name="Vacuum charging dock";let p=ye(s.palette.accent);xn(y,o*1.36,1.8,o*.95,l,0,1.2,-o*.59,.4),xn(y,o*1.36,o*.53,o*.35,p,0,o*.3,-o*.94,1.4),tn(y,o*.5,.9,.9,l,0,o*.41,-o*.75)}return{root:i,dock:y,anchorY:12,floorRadius:o*1.03*a*h,animate(p,g=0,x=!1){let v=["cleaning","returning"].includes(sf(p));m.material.emissiveIntensity=v?x?.6+.5*Math.cos(g*6):.3:0}}}function of(n){return n.type==="controlZone"&&(n.visualKind==="window"||(!n.visualKind||n.visualKind==="auto")&&typeof n.entityId=="string"&&n.entityId.startsWith("cover."))}function Em(n,t={}){let e=_a(n.w,42),i=_a(n.h,42),s=String(n.type??""),r=n.visualKind;return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?CS(e,t):s==="garageDoor"?IS(e,i):s==="door"||r==="door"?PS(e):s==="window"?_m(e,!0,!!n.entityId):s==="controlZone"?of(n)?_m(_a(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?LS(n,e,t):s==="airPurifier"||s==="humidifier"?NS(n,e,i):r==="vacuum"||/^cleaning-.*robot/.test(s)?DS(n,e,i):s==="windowFan"?vm(n,e,i,!0):r==="fan"||/^fans-/.test(s)?vm(n,e,i,!1):r==="light"||n.lightForm||Wl(s)?.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?AS(n,e,i,t):null}var Pm=lo($r(),1),{difference:Lm,union:Nm}=Pm.default,Yl=18,Kn=.001,Di=(n,t)=>n[0]*t[0]+n[1]*t[1],js=(n,t)=>n[0]*t[1]-n[1]*t[0],Fi=(n,t)=>[n[0]-t[0],n[1]-t[1]],ze=(n,t,e)=>[n[0]+t[0]*e,n[1]+t[1]*e],Zl=([n,t])=>[-t,n],Tm=(n,t,e,i)=>[[n,t],[e,t],[e,i],[n,i]],Xl=n=>n.map(({x:t,y:e})=>[t,e]),Ji=n=>[n.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],Dm=n=>n.length?Nm(...n):[];function $l(n,t,e,i=0){let s=Fi(t,n),r=Math.hypot(...s);if(r<Kn)return null;let o=s.map(u=>u/r),a=Zl(o),c=ze(n,o,-i),l=ze(t,o,i);return Ji([ze(c,a,e),ze(l,a,e),ze(l,a,-e),ze(c,a,-e)])}function ql(n,t){let[e,i]=t,s=!1;for(let r=0,o=n.length-1;r<n.length;o=r++){let[a,c]=n[r],[l,u]=n[o];c>i!=u>i&&e<(l-a)*(i-c)/(u-c)+a&&(s=!s)}return s}function Am(n){return n.flatMap((t,e)=>{let i=n[(e+1)%n.length],s=Fi(i,t),r=Math.hypot(...s);return r>Kn?[{start:t,end:i,length:r,tangent:s.map(o=>o/r)}]:[]})}function FS(n,t,e,i){if(Math.abs(Di(n.tangent,t.tangent))<.9999)return null;let s=Zl(n.tangent),[r,o]=[t.start,t.end].map(y=>Fi(y,n.start)),a=Di(r,s);if(Math.abs(a)<.1||Math.abs(a)>Yl||Math.abs(a-Di(o,s))>.1)return null;let c=[Di(r,n.tangent),Di(o,n.tangent)].sort((y,p)=>y-p),l=Math.max(0,c[0]),u=Math.min(n.length,c[1]);if(u-l<8)return null;let h=ze(n.start,n.tangent,(l+u)/2),f=Math.sign(a);if(!ql(e,ze(h,s,-f))||!ql(i,ze(h,s,a+f))||ql(e,ze(h,s,a/2))||ql(i,ze(h,s,a/2)))return null;let d=ze(n.start,n.tangent,l),m=ze(n.start,n.tangent,u);return Ji([ze(d,s,-f*.05),ze(m,s,-f*.05),ze(m,s,a+f*.05),ze(d,s,a+f*.05)])}function Fm(n){let t=[],e=[];for(let i of[...n].reverse()){let s=Dm(i.polygons);if(!s.length)continue;let r=t.length?Lm(s,t):s;r.length&&e.push({surface:i.surface,polygons:r}),t=t.length?Nm(t,s):s}return{footprint:t,regions:e.reverse()}}function Kr(n){return n.outdoor===!0||n.outdoor!==!1&&n.surface==="patio"}function af(n,t,e=!1){let i=n.map(f=>({surface:f.surface,points:Xl(f.points),polygons:[Ji(Xl(f.points))],outdoor:e&&Kr(f)})),s=[];for(let[f,d]of i.entries())for(let m of i.slice(f+1))for(let y of Am(d.points))for(let p of Am(m.points)){let g=FS(y,p,d.points,m.points);g&&s.push({surface:d.surface,polygons:[g],outdoor:d.outdoor||m.outdoor})}let r=[],o=[];if(t){let{left:f,deckEdge:d,stepBottom:m,deckBottom:y,northDeck:p,southDeck:g,recess:x}=t;r.push({surface:"patio",polygons:[Ji(Xl(p)),Ji(Xl(g)),Ji(Tm(f,m,d+1,y))]}),x.x2>x.x1&&x.z2>x.z1&&o.push({surface:"oak",polygons:[Ji(Tm(x.x1,x.z1,x.x2,x.z2))]})}let a=[...s,...i],c=[...o,...a.filter(f=>!f.outdoor)],l=[...r,...a.filter(f=>f.outdoor)],u=Fm([...l,...c]),h=t||e?Dm(c.flatMap(f=>f.polygons)):[];return{...u,foundation:h}}function US(n,t,e,i){let s=js(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-i,o=ze(n,Zl(t),r),a=ze(n,Zl(e),-r),c=js(Fi(a,o),e)/s,l=ze(o,t,c);return Math.hypot(...Fi(l,n))>i*2.5?Ji([n,o,a]):Ji([n,o,l,a])}function Rm(n,t){let e=js(n.tangent,t.tangent);if(Math.abs(e)<.13)return null;let i=Fi(t.point,n.point);return[js(i,t.tangent)/e,js(i,n.tangent)/e]}function kS(n){let t=n.flatMap(i=>[{wall:i,point:[i.x1,i.y1],tangent:[i.dx,i.dz]},{wall:i,point:[i.x2,i.y2],tangent:[-i.dx,-i.dz]}]),e=[];for(let[i,s]of t.entries()){for(let r of t.slice(i+1)){if(s.wall===r.wall)continue;let o=Fi(r.point,s.point);if(Math.hypot(...o)>Yl)continue;let a=Rm(s,r);a&&a.every(c=>c>=-Yl&&c<=Kn)?e.push({a:s,b:r,center:ze(s.point,s.tangent,a[0])}):!a&&Di(s.tangent,r.tangent)<0&&Di(o,s.tangent)<=Kn&&Di(o,r.tangent)>=-Kn&&e.push({a:s,b:r})}for(let r of n){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=Rm(s,o);if(!a)continue;let[c,l]=a;c<-Yl||c>=-Kn||l<=Kn||l>=r.length-Kn||r.openings.some(({start:u,end:h})=>l>=u&&l<=h)||e.push({a:s,center:ze(s.point,s.tangent,c)})}}return e}function Cm({a:n,b:t,center:e},i){return e?[$l(n.point,e,i,.1),t&&$l(t.point,e,i,.1),t&&US(e,n.tangent,t.tangent,i)].filter(Boolean):[$l(n.point,t.point,i,.1)].filter(Boolean)}function Um(n){return n.flatMap(t=>t.flatMap(e=>e.slice(1).map((i,s)=>[e[s],i])))}function OS(n,t){return Um(n).flatMap(([e,i])=>{let s=Fi(i,e),r=Math.hypot(...s);if(r<Kn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Fi(a,e),u=Fi(c,e);if(Math.abs(js(l,o))>Kn||Math.abs(js(u,o))>Kn)return[];let[h,f]=[Di(l,o),Di(u,o)].sort((y,p)=>y-p),d=Math.max(0,h),m=Math.min(r,f);return m-d>Kn?[[ze(e,o,d),ze(e,o,m)]]:[]})})}function Im(n,t){return t?.length?Lm(n,t):n}function km(n,t,e,i){let s=[],r=(c,l,u,h,f=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:h,priority:f})};for(let c of n){let{palette:[l,u,h]}=c,f=[c.x1,c.y1],d=[c.dx,c.dz],m=(x,v,b,_,S,C,M)=>{v-x>Kn&&r($l(ze(f,d,x),ze(f,d,v),S/2),b,_,C,M)},y=c.openings.length?i:0,p=(x,v)=>{m(x,v,y,e,t,l,2),m(x,v,e-1,e+2,t+3,u,1)};y&&m(0,c.length,0,y,t,l,2);let g=0;for(let x of c.openings)p(g,x.start),g=Math.max(g,x.end);p(g,c.length),m(0,c.length,0,3,t+3,h,1)}for(let c of kS(n)){let[l,u,h]=c.a.wall.palette;for(let f of Cm(c,t/2))r(f,0,e,l,2);for(let f of Cm(c,(t+3)/2))r(f,e-1,e+2,u,1),r(f,0,3,h,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],h=new Map,f=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:m}of f.sort((y,p)=>y.priority-p.priority))h.has(d)||h.set(d,{surface:d,polygons:[]}),h.get(d).polygons.push(m);return{...Fm([...h.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:h},f)=>{let d=Um(l);return c.map(m=>({...m,bottom:u,top:h,faces:{top:Im(m.polygons,a[f+1]?.footprint),bottom:u===0?[]:Im(m.polygons,a[f-1]?.footprint),sides:OS(m.polygons,d)}}))})}var BS=new Map([["partlycloudy",.32],["cloudy",.84],["windy-variant",.7],["fog",.95],["snowy",.82],["snowy-rainy",.92],["hail",.94],["rainy",.88],["pouring",.97],["lightning",.91],["lightning-rainy",.98]]),zS=(n,t,e)=>Math.min(e,Math.max(t,n)),Om=n=>n*Math.PI/180;function Ks(n,t,e){let i=zS((n-t)/(e-t),0,1);return i*i*(3-2*i)}function Qi(n={}){let{sunElevation:t,sunAzimuth:e,sunRising:i,condition:s,night:r,cloudCoverage:o}=n,a=Number.isFinite(t)&&Math.abs(t)<=90?t:r||s==="clear-night"?-18:38,c=Number.isFinite(e)&&e>=0&&e<=360?e%360:void 0,l=typeof i=="boolean"?i:c!==void 0&&c<180,u=a<19&&a>-12,h=c??(u?l?90:270:150),f=Math.max(BS.get(s)??0,Number.isFinite(o)&&o>=0&&o<=100?o/100:0);return{elevation:a,azimuth:h,rising:l,cloud:f,phase:u?l?"sunrise":"sunset":a<=-12?"night":"day",daylight:Ks(a,-10,18),twilight:Ks(a,-12,-3)*(1-Ks(a,3,19)),lowSun:Ks(a,-1,4)*(1-Ks(a,9,33)),disc:Ks(a,-.9,.8),east:Math.sin(Om(h)),north:Math.cos(Om(h))}}function Bm(){let n,t,e=0;function i(s){let r=Ks(s-e,0,.8);if(!n||r>=1)return t;let o=(t.azimuth-n.azimuth+540)%360-180;return Qi({sunElevation:n.elevation+(t.elevation-n.elevation)*r,sunAzimuth:(n.azimuth+o*r+360)%360,sunRising:t.rising,cloudCoverage:(n.cloud+(t.cloud-n.cloud)*r)*100})}return(s,r,o=!1)=>!t||o||!Number.isFinite(r)||r<e?(n=void 0,t=s,e=Number.isFinite(r)?r:0,t):((s.elevation!==t.elevation||s.azimuth!==t.azimuth||s.rising!==t.rising||s.cloud!==t.cloud)&&(n=i(r),t=s,e=r),i(r))}var HS=3,GS={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},cf=Object.fromEntries(Object.entries(GS).map(([n,t])=>[n,t.map(e=>new $t(e))])),VS={sunrise:["#f6bfc2","#947b96","#ffd29d","#f0c7b7","#767d9c"],sunset:["#f1ad90","#8d647a","#ffaf71","#eab290","#80677f"]},WS=Object.fromEntries(Object.entries(VS).map(([n,t])=>[n,t.map(e=>new $t(e))])),{clamp:XS,lerp:Jr,smoothstep:qS}=oe;function zm(n,t,e){n.toneMapping=sa,n.toneMappingExposure=1.07,n.shadowMap.enabled=!0,n.shadowMap.type=Ws,n.shadowMap.autoUpdate=!1;let i=new Vs("#fff4e5","#897e91",1.13),s=new bs("#fff0d4",2.15),r=new bs("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,h=(c+l)/2;s.position.set(u-610,1150,h-490),s.target.position.set(u,0,h),r.position.set(u+290,410,h+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,n.capabilities.maxTextureSize));let f=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-f,right:f,top:f,bottom:-f,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:HS},()=>new ea("#ffd7a5",0,145,2));t.add(i,s,s.target,r,...d);let m=[],y,p,g,x=!0,v=new $t,b=new $t;function _(){for(let M of t.children)M.isMesh&&(M.receiveShadow=!0,M.geometry.computeBoundingBox(),M.castShadow=M.geometry.boundingBox.max.y+M.position.y>-99)}function S(M,A){let D=/(light|lamp|sconce)/i.test(M.type),N=!A.animate||D;A.root.traverse(O=>{!O.isMesh||O.material.transparent||O.material.isShaderMaterial||(O.receiveShadow=!0,O.castShadow||=N)}),D&&M.entityId&&M.visualKind!=="none"&&m.push({item:M,object:A})}function C(M,A,D,N=!1){let{elevation:O,azimuth:B,rising:L,daylight:k,twilight:H,lowSun:W,cloud:et}=M.solar??Qi(M),K=XS(O,-12,35),Z=`${L}:${Math.round(K*4)}:${Math.round(et*32)}`,nt=qS(O,-.85,9);if(Z!==y){let _t=[i.color,i.groundColor,s.color,D.color,t.background],Lt=WS[L?"sunrise":"sunset"];for(let[ot,ht]of _t.entries()){b.lerpColors(cf.clear[ot],cf.overcast[ot],et),ht.lerpColors(cf.night[ot],b,k);let St=ot===2?W*.76:H*(ot===4?.55:.43);ht.lerp(Lt[ot],St*(1-et*.73))}i.intensity=Jr(.63,1.13+et*.17,k)+H*.17,s.intensity=.23+nt*Jr(1.91,.48,et)*Jr(.46,1,k),r.intensity=Jr(.17,.23,k)+H*.08,s.shadow.intensity=nt*Jr(.83,.21,et),y=Z,g=void 0}let Tt=Math.round(B/2)*2,At=Math.max(10,Math.round(O)),Mt=`${Tt}:${At}`;if(nt>0&&Mt!==p){let _t=oe.degToRad(Tt),Lt=oe.degToRad(At),ot=Math.cos(Lt)*1600;s.position.set(u+Math.sin(_t)*ot,Math.sin(Lt)*1600,h-Math.cos(_t)*ot),p=Mt,x=!0}if(g!==A||N){let _t=m.flatMap(({item:Lt,object:ot})=>{let ht=A[Lt.id];if(ht?.state!=="on")return[];let St=Number.isFinite(ht.attributes?.brightness)?oe.clamp(ht.attributes.brightness/255,0,1):1;return St>0?[{object:ot,power:St,color:ht.attributes?.rgb_color}]:[]}).sort((Lt,ot)=>ot.power-Lt.power);for(let[Lt,ot]of d.entries()){let ht=_t[Lt];if(!ht){ot.intensity=0;continue}let{object:St,power:zt,color:Ot}=ht;Array.isArray(Ot)&&Ot.length===3&&Ot.every(Number.isFinite)?(v.setRGB(...Ot.map(yt=>oe.clamp(yt/255,0,1)),rn),ot.color.copy(v)):ot.color.set("#ffd5a2"),ot.position.copy(St.root.position),ot.position.y+=Math.max(18,(St.anchorY-9)*St.root.scale.y),ot.intensity=zt*Jr(2350,1250,k)}g=A}(x||N&&nt>0)&&(n.shadowMap.needsUpdate=!0,x=!1)}return{markStructure:_,register:S,update:C,dispose:()=>s.shadow.dispose()}}var Mi=(n,t,e)=>Object.freeze({label:n,azimuth:t,tilt:e,zoom:1}),jl=65,YS=88,Kl=4400,$S=1900,Hm=-111,Qr=Object.freeze({default:Mi("Default",0,0),top:Mi("Top down",0,0),high:Mi("High angle",0,15),dollhouse:Mi("Dollhouse",2,30),corner:Mi("Corner",45,40),north:Mi("From north",180,42),east:Mi("From east",90,42),south:Mi("From south",0,42),west:Mi("From west",270,42),waterfront:Mi("Waterfront",0,15),free:Mi("Free view",0,25)});function Gm(n,t=!1){let e=Object.entries(Qr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let i=e.map(([s,r])=>{let o=n.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});n.replaceChildren(...i),n.value="default",n.disabled=!1}function ts(n="top"){let t=typeof n=="string"?{preset:n}:n??{},e=Object.hasOwn(Qr,t.preset)?t.preset:"top",i=Qr[e],s=Number.isFinite(t.azimuth)?t.azimuth:i.azimuth,r=e==="free"||e==="default"?YS:jl;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?oe.clamp(t.tilt,0,r):i.tilt,zoom:Number.isFinite(t.zoom)?oe.clamp(t.zoom,.6,2.5):i.zoom}}function Vm(n){let t=ts(n);return{...t,preset:"free",tilt:t.tilt||Qr.free.tilt}}function lf(n){return n?.preset!=="free"||![n.azimuth,n.tilt,n.zoom].every(Number.isFinite)?null:ts(n)}function uf(n){return ts({...lf(n),preset:"default"})}function Wm(n){if(n<=jl)return null;let t=oe.smoothstep(n,jl,84);return{near:oe.lerp(3530,2680,t),far:oe.lerp(4260,3690,t)}}function Xm(n,t){let e=Math.max(.4,t/1536*.68),i=oe.clamp;return{w:Math.round(i((n?.w||170)*e,58,216)),h:Math.round(i((n?.h||110)*e,44,152))}}function qm(n){let t=n.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>lf(await t.request("CAMERA_GET")),write:i=>t.request("CAMERA_SET",i)};let e="roomcraft.default-camera.v1";return{async read(){return lf(JSON.parse(n.localStorage.getItem(e)))},async write(i){i?n.localStorage.setItem(e,JSON.stringify(i)):n.localStorage.removeItem(e)}}}function Ym(n,t,e,i,s="top",{focus:r,demoZoom:o}={}){let a=ts(s);if(a.preset==="waterfront"&&t?.waterfront&&(t=t.waterfront),![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,i].every(Number.isFinite)||e<=0||i<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let c=oe.degToRad(a.azimuth),l=oe.degToRad(a.tilt),u=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),h=new G(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));n.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),n.position.copy(u).addScaledVector(h,$S),n.lookAt(u),n.updateMatrixWorld(!0);let f=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),d=new Ue,m=new G;for(let S of[t.minX-37,t.maxX+37]){for(let C of[t.minZ-53,t.maxZ+36])for(let M of[Hm,f])d.expandByPoint(m.set(S,M,C).applyMatrix4(n.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&d.expandByPoint(m.set(S,-106,t.sceneryMinZ-8).applyMatrix4(n.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let S=(d.max.y-d.min.y)*.025;d.min.y-=S,d.max.y+=S}let y=e/i,p=Math.max((d.max.x-d.min.x)/2,(d.max.y-d.min.y)/2*y),g=p/y,x=(d.min.x+d.max.x)/2,v=(d.min.y+d.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:S,y:C}=m.set(r.x,r.y,r.z).applyMatrix4(n.matrixWorldInverse),M=Number.isFinite(r.weight)?oe.clamp(r.weight,0,1):1;x=oe.lerp(x,S,M),v=oe.lerp(v,C,M)}n.left=x-p,n.right=x+p,n.bottom=v-g,n.top=v+g,n.zoom=Number.isFinite(o)?oe.clamp(o,.6,4.5):a.zoom;let b=n.position.y+(v-g/n.zoom)*n.up.y,_=a.tilt>jl?Math.max(0,(Hm+24-b)/h.y):0;return _>0&&(n.position.addScaledVector(h,_),n.updateMatrixWorld(!0)),n.far=Kl+_,n.updateProjectionMatrix(),a}function $m(n,t){let e=n.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(n)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Ue().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var ZS=n=>Math.max(0,Math.min(1,n)),hf=(n,t)=>n?.x===t?.x&&n?.y===t?.y;function Sa({allowsPoint:n,allowsRoute:t,duration:e=.32,maximumDistance:i=125}){let s,r,o=0,a=0,c=0,l=0,u=0,h,f,d;function m(x,v){s=r=x,o=v,a=0}function y(x,v=!1){if(l=x,!s||x<c)return null;v&&(a=0);let b=a>0?ZS((x-o)/a):1,_=r.x+(s.x-r.x)*b,S=r.y+(s.y-r.y)*b;return n(_,S)?{x:_,y:S,progress:b,heading:u,current:hf(h,s),walking:!v&&b<1&&Math.hypot(s.x-r.x,s.y-r.y)>2}:(m(s,x),c=x+.24,null)}function p(x,v,{observation:b,reduceMotion:_=!1}={}){if(!Number.isFinite(x?.x)||!Number.isFinite(x?.y)||!n(x.x,x.y))return!1;if(hf(x,h)&&b===f)return!0;if(h=x,f=b,!s)return m(x,v),!0;let S=y(v,_)??s,C=Math.hypot(x.x-S.x,x.y-S.y);return hf(x,s)?d=null:C<=i&&t(S.x,S.y,x.x,x.y)?(d=null,r=S,s=x,o=v,a=_?0:e,C>1&&(u=Math.atan2(x.x-r.x,x.y-r.y))):d&&Math.hypot(x.x-d.x,x.y-d.y)<=48&&t(d.x,d.y,x.x,x.y)?(m(x,v),c=v+.24,d=null):d=x,!0}function g(){s=r=h=d=void 0,f=void 0,c=u=0}return{observe:p,sample:y,clear:g,get hasPosition(){return!!s},get pendingReacquisition(){return!!s&&c>l}}}var jS=/(?:sofa|loveseat|chaise)-/,KS=/-desk-/;function As(n,t,e,i,s,r,o){return{x:n,z:t,surface:e,yaw:i,width:s,depth:r,pose:o}}function JS(n,t,e){let i=n==="sofa"||n.includes("cloud-sofa"),s=i&&e>t,r=n.includes("loveseat")||n.includes("chaise")?2:3,o=[];if(s){let a=e*.88/r,c=t*.38;for(let u=0;u<r;u++){let h=-.44*e+a*(u+.5);o.push(As(-.25*t+.018*Math.min(t,e),h,37,Math.PI/2,a-3,c,"lounge"))}let l=n==="sofa"?1:-1;o.push(As(.22*t,l*.3*e,37,l>0?Math.PI:0,.48*t,.34*e,"lounge"))}else{let a=i?.57*e:e,c=i?-.215*e:0,l=.8*t/r;for(let u=0;u<r;u++)o.push(As(-.4*t+l*(u+.5),c+a*.08,37,0,l-3,a*.7,"lounge"));i&&o.push(As(-.32*t,.25*e,37,0,.33*t,.42*e,"lounge"))}return o}function QS(n,t){let{x:e,z:i,angle:s}=n,r=-Math.sin(s),o=Math.cos(s);return t.some(({x:a,z:c,item:l})=>{let u=a-e,h=c-i,f=Math.min(104,Math.max(50,Math.min(l.w,l.h)*.58));return Math.hypot(u,h)<=f&&u*r+h*o>=-8})}function tw(n,t){let{type:e,w:i,h:s}=n.item;if(e==="sofa"||jS.test(e))return JS(e,i,s);if(e==="diningChair"||e.startsWith("living-dining-chair-"))return[As(0,0,30,0,i*.83,s*.83,"dining")];if(e==="chair"||e==="stool"||e.includes("desk-chair")){let r=e.includes("desk-chair")||QS(n,t)?"desk":"idle";return[As(0,0,e==="stool"?32:41,0,i*.83,s*.83,r)]}if(e==="armchair"||e.includes("acorn-armchair"))return[As(0,0,32,0,i*.65,s*.76,"lounge")];if(e==="bedroomBench"){let r=i>=58?2:1;return Array.from({length:r},(o,a)=>As((a-(r-1)/2)*i*.44,0,34.2,0,i*.87/r,s*.91,"bench"))}return[]}function Zm(n,t,e){let i=n.filter(({item:r})=>r.type==="desk"||KS.test(r.type)),s=[];for(let r of n){let{item:o,x:a,z:c,baseY:l,angle:u}=r,h=t.get(o.id)?.root;if(!h||l!==0)continue;let f=Math.sin(u),d=Math.cos(u);for(let[m,y]of tw(r,i).entries()){if(y.width<12||y.depth<11)continue;let p=a+y.x*d-y.z*f,g=c+y.x*f+y.z*d;if(e(p,g)<7)continue;let v=y.yaw-u,b=h.position.y+y.surface*h.scale.y;b<10||b>84||s.push({id:`${o.id}:${m}`,itemId:o.id,x:p,z:g,y:b,heading:v,forwardX:Math.sin(v),forwardZ:Math.cos(v),pose:y.pose,reach:Math.min(42,Math.max(18,y.depth*.48+8)),behind:Math.max(7,y.depth*.32),width:y.width,depth:y.depth})}}return s}function jm(n,t,e,i,s=1){let r=t-n.x,o=e-n.z;return Math.hypot(r,o)>n.reach*s||r*n.forwardX+o*n.forwardZ<-n.behind?!1:!i||i(t,e,n.x,n.z)}function Km(){let n,t,e,i;function s(o,a){let c=o.expiresAt;!Number.isFinite(c)||c<=e||((!n||c-e>3100||Math.hypot(o.x-n.x,o.y-n.y)>10)&&(n=o,t=c),e=c,i=a)}function r(o,a,c){return!!(n&&e-t>=1200&&c-i<=3100/1e3&&Math.hypot(o-n.x,a-n.y)<=10)}return{observe:s,ready:r}}var ew=24,ff=17.5,nw=.42,iw=8.9,Ql=20,wa=[{role:"papa",scale:[1.26,1.25,1.22],radius:Ql,sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],radius:18,sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],radius:16,sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}],sw={idle:{lean:.03,tilt:0,thighs:-1.3,shins:1.16,hands:[-.43,-.4],fidget:.1,pace:2.1},lounge:{lean:-.13,tilt:.07,thighs:-1.16,shins:.92,hands:[-.22,-.14],fidget:.13,pace:1.8},dining:{lean:.06,tilt:.02,thighs:-1.34,shins:1.26,hands:[-.61,-.51],fidget:.14,pace:2.8},desk:{lean:.16,tilt:0,thighs:-1.26,shins:1.18,hands:[-.98,-.92],fidget:.12,pace:6.3},bench:{lean:.04,tilt:-.09,thighs:-1.28,shins:1.1,hands:[-.35,-.56],fidget:.22,pace:3.3}},Jl=(n,t,e)=>n+(t-n)*e,rw=n=>Math.min(1,Math.max(0,n)),ow=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t));function Ea(n,t=.12){return new Xe({color:n,roughness:.78,emissive:n,emissiveIntensity:t})}function aw(n,t,e,i=0,s=0){let r=!e&&t%4.8<.13;n.head.rotation.x=-.62+i+(e?0:Math.sin(t*1.5)*.047),n.head.rotation.y=s,n.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let o of n.eyes)o.scale.y=r?.15:.87}function df(n,t=()=>0,{supportsRoute:e,floorClearance:i,allowsBodyPoint:s,allowsBodyRoute:r,seats:o=[],occlusionScene:a}={}){let c=new se;c.name="tracked-people",n.add(c);let l=new se;a?.add(l);let u,h=new Map,f=wa.map(()=>[]),d=!1,m=!1,y=0,p=!1;function g(){let B=new ln;B.absarc(0,4,3.5,0,2*Math.PI,!1);let L=new ln;return L.moveTo(-6.5,-6.5),L.quadraticCurveTo(-7,-.2,0,-.2),L.quadraticCurveTo(7,-.2,6.5,-6.5),L.closePath(),{sphere:new Re(1,12,8),disc:new An(1,24).rotateX(-Math.PI/2),groundRing:new jo(13.8,ff,32).rotateX(-Math.PI/2),glasses:new Cn(1,.14,6,16),occlusionGlyph:new Pi([B,L],12),occlusionMaterial:new Ne({color:"#fff1cd",depthFunc:Sr,depthWrite:!1,transparent:!0,opacity:.9,toneMapped:!1}),palette:wa.map(({sweater:k,trim:H,skin:W,hair:et})=>Object.fromEntries(Object.entries({sweater:k,trim:H,skin:W,hair:et}).map(([K,Z])=>[K,Ea(Z)]))),ink:Ea("#423c50",.09),cheek:Ea("#d78383"),shoes:Ea("#514656"),white:Ea("#fff1dc"),shadow:new Ne({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new Ne({color:"#fff1cd",depthTest:!1,depthWrite:!1,toneMapped:!1}),retainedMark:new Ne({color:"#eeb660",depthTest:!0,depthWrite:!1,toneMapped:!1})}}function x(B){u??=g();let{role:L,scale:k,radius:H}=wa[B],{sweater:W,trim:et,skin:K,hair:Z}=u.palette[B],nt=L==="baby",Tt=new se;Tt.name=`radar-avatar-${L}`;let At=new se;At.name="radar-avatar-pose";let Mt=new se,_t=new se,Lt=[],ot=[],ht=[];c.add(Tt),Tt.add(At),At.add(Mt),Mt.scale.set(...k);let St=(X,j,st,ct,dt,Ct,It,Nt)=>{let Bt=new ce(u.sphere,j);return Bt.position.set(st,ct,dt),Bt.scale.set(Ct,It,Nt),X.add(Bt),Bt},zt=new ce(u.disc,u.shadow);zt.position.y=.13,zt.scale.set(19,1,19),Tt.add(zt);let Ot=new ce(u.groundRing,u.groundMark);Ot.name="radar-track-mark",Ot.renderOrder=-1,c.add(Ot);let q=a?new ce(u.occlusionGlyph,u.occlusionMaterial):null;q&&(q.name="radar-occlusion-cue",q.visible=!1,l.add(q)),St(Mt,W,0,15,0,nt?8.2:7.1,8.3,5.4),nt?(St(Mt,et,0,17.5,4.8,4.9,4.1,1.15),St(Mt,u.white,0,17.4,5.9,1.5,1.5,.35)):(St(Mt,et,0,20.7,2.4,5.8,2.2,4),St(Mt,et,L==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let X of[-1,1]){let j=new se;j.position.set(X*3.4,10.3,.1),Mt.add(j);let st=new se;st.position.y=-4.65,j.add(st);let ct=nt?W:u.ink;St(j,ct,0,-2.35,0,2.65,3.25,2.6),St(st,ct,0,-1.6,0,2.4,3.1,2.4),St(st,nt?et:u.shoes,0,-3.5,1.25,3.1,2.1,4),St(st,u.white,0,-4.15,3.25,2.75,1.1,2),ht.push({thigh:j,shin:st});let dt=new se;dt.position.set(X*6.25,19.1,0),Mt.add(dt),St(dt,W,X*.9,-3.7,.15,2.75,5.3,2.7),St(dt,K,X*1.3,-7.8,.5,2.3,2.6,2.2),ot.push(dt)}_t.position.set(0,nt?26:27.2,0),nt&&_t.scale.set(1.16,1.17,1.12),Mt.add(_t),St(_t,Z,0,1.3,-1.65,9.2,9.65,8.6),St(_t,K,0,0,1.9,8.65,8.45,7.5);let yt=St(_t,Z,-2.1,7.3,4.25,6.4,3.4,4.35);if(yt.rotation.z=L==="papa"?-.27:.22,L==="mama"&&(St(_t,Z,-6.7,-1.9,-3.8,3.6,8.1,5.2),St(_t,Z,6.2,-1.7,-3.9,3.3,7.6,5.4),St(_t,Z,2.8,10.4,-2.5,5.1,5.1,5.1),St(_t,et,4.4,8.7,2.2,2.8,1.1,1.1)),nt){St(_t,Z,-7.3,6.7,-2,3.35,3.7,3.5),St(_t,Z,7.3,6.7,-2,3.35,3.7,3.5);let X=St(_t,et,.9,10,4.2,2.5,1.45,1.25),j=St(_t,et,4.1,10,4.2,2.5,1.45,1.25);X.rotation.z=-.4,j.rotation.z=.4,St(_t,u.white,2.5,9.8,5.1,1.15,1.2,1)}for(let X of[-1,1])if(St(_t,K,X*8.2,-.15,1.1,1.85,2.4,1.75),Lt.push(St(_t,u.ink,X*3,1.2,8.95,.85,.87,.52)),St(_t,u.cheek,X*5.05,-1.25,7.95,1.18,.62,.52),L==="papa"){let j=new ce(u.glasses,u.ink);j.position.set(X*3.1,1.25,9.15),j.scale.set(2.5,2.15,1.55),_t.add(j)}return L==="papa"&&St(_t,u.ink,0,1.6,9.35,1.1,.28,.35),St(_t,u.ink,0,-1.95,9.15,1.38,.45,.38),{root:Tt,groundMark:Ot,poseRoot:At,body:Mt,head:_t,arms:ot,legs:ht,eyes:Lt,radius:H,styleIndex:B,baby:nt,cue:q}}let v=(B,L)=>Number.isFinite(t(B,L))&&(!i||i(B,L)>0),b=(B,L,k,H)=>v(B,L)&&(!i||i(B,L)>=k)&&(s?.(B,L,k,H)??!0),_=(B,L,k,H,W,et)=>(e?.(B,L,k,H,W)??!0)&&(r?.(B,L,k,H,W,et)??!0);function S(B,L,k,H,W=1){return B.width>=H*1.35&&B.depth>=H*.82&&b(B.x,B.z,H,B.itemId)&&jm(B,L,k,(et,K,Z,nt)=>_(et,K,Z,nt,H,B.itemId),W)}function C(B,L,k,H){let W,et=1/0;for(let K of o){let Z=Math.hypot(B-K.x,L-K.z);Z>=et||H.has(K.id)||!S(K,B,L,k)||(W=K,et=Z)}return W}function M(B,L,k,H){if(B.seat!==L&&(B.seat=L,B.poseAt=y),!L)return 0;if(m||!b(k,H,B.character.radius)||!b(L.x,L.z,B.character.radius)||!_(k,H,L.x,L.z,B.character.radius))return 1;let W=rw((y-B.poseAt)/nw);return W*W*(3-2*W)}function A(B,L,k){let{character:H,seat:W}=B,{x:et,y:K,heading:Z,walking:nt,progress:Tt}=L,At=t(et,K),Mt=Math.cos(Z),_t=Math.sin(Z),Lt=(W?W.x-et:0)*k,ot=(W?W.z-K:0)*k,ht=sw[W?.pose??"idle"],St=W?W.y-At-iw*wa[H.styleIndex].scale[1]:0;H.root.position.set(et,At,K),H.root.rotation.y=Z,H.poseRoot.position.set(Lt*Mt-ot*_t,St*k,Lt*_t+ot*Mt),H.poseRoot.rotation.y=W?ow(W.heading,Z)*k:0,H.poseRoot.userData.pose=k>0?W.pose:"standing";let zt=Math.floor(Math.max(0,y-B.born)*16)/16+.7+H.styleIndex*.62,Ot=Math.floor(Tt*12)/12*Math.PI*4,q=nt?Math.sin(Ot)*.56:0,yt=nt?Math.abs(Math.sin(Ot))*1.9:(1+Math.sin(zt*4.7))*.47,X=.19*(1+Math.sin(zt*2.6));H.body.position.y=m?0:Jl(yt*(H.baby?1.5:1),X,k),H.body.rotation.x=ht.lean*k;let j=m?0:nt?q*.15:Math.sin(zt*2.8)*.045;H.body.rotation.z=Jl(j,ht.tilt,k);for(let ct=0;ct<2;ct++){let dt=ct===0?-1:1,Ct=nt?-q*dt:m?0:Math.sin(zt*3.1+ct)*.09,It=m?0:Math.sin(zt*ht.pace+ct*2.6)*ht.fidget,Nt=m?0:Math.sin(zt*2.7+ct)*.035;H.arms[ct].rotation.x=Jl(Ct,ht.hands[ct]+It,k),H.legs[ct].thigh.rotation.x=Jl(q*dt,ht.thighs+Nt,k),H.legs[ct].shin.rotation.x=(ht.shins+Nt*2)*k}let st=m||W?.pose==="desk"?0:Math.sin(zt*1.08)*.13*k;aw(H,zt,m,ht.lean*.45*k,st)}function D(B,L=d,k=!0){y=Number.isFinite(B)?B:y,m=L||d,p=!1;let H=[],W=new Set;for(let et of h.values()){let{character:K}=et,{x:Z,y:nt}=et.point,Tt=t(Z,nt),At=i?.(Z,nt)??ff;K.groundMark.visible=Number.isFinite(Tt)&&At>0,K.groundMark.visible&&(K.groundMark.material=et.point.quality?u.retainedMark:u.groundMark,K.groundMark.position.set(Z,Tt+.26,nt),K.groundMark.scale.setScalar(Math.min(1,At/ff)));let Mt=et.motion.sample(y,m);et.bodyReported&&Mt?.current&&(et.bodySuppressed=!1);let _t=et.bodyReported&&!et.bodySuppressed?Mt:null,Lt=k&&et.point.quality!=="area"&&(!et.bodyReported||_t?.current&&!_t.walking)&&et.dwell.ready(Z,nt,y);et.seat&&(Lt&&S(et.seat,Z,nt,K.radius,1.18)?W.add(et.seat.id):et.seat=void 0),H.push({track:et,standing:_t,ready:Lt})}for(let{track:et,standing:K,ready:Z}of H){let{character:nt,point:Tt}=et,At=Z?et.seat??C(Tt.x,Tt.y,nt.radius,W):void 0;At&&W.add(At.id);let Mt=M(et,At,Tt.x,Tt.y),_t=At?{x:Tt.x,y:Tt.y,heading:K?.heading??At.heading,walking:!1,progress:1}:K;if(!_t&&Tt.keepVisible){let Lt=[et.lastStanding,Tt.fallback].find(ot=>ot&&b(ot.x,ot.y,nt.radius));Lt&&(_t={...Lt,heading:Lt.heading??0,walking:!1,progress:1})}_t&&!At&&(et.lastStanding=_t),nt.root.visible=!!_t,nt.root.userData.locationQuality=Tt.quality??"measured",_t&&A(et,_t,Mt),nt.cue&&(nt.cue.visible=!!(_t&&Tt.keepVisible),nt.cue.visible&&nt.head.getWorldPosition(nt.cue.position)),p||=nt.root.visible||nt.groundMark.visible}}function N(B,L,{reduceMotion:k=!1}={}){d=k;let H=Number.isFinite(L)?L:y,W=new Map;for(let K of Array.isArray(B)?B:[])if(!(typeof K?.id!="string"||!K.id||K.id.length>256||!Number.isFinite(K.x)||!Number.isFinite(K.y)||W.has(K.id)||!v(K.x,K.y))&&(W.set(K.id,K),W.size===ew))break;for(let[K,Z]of h)W.has(K)||(Z.character.root.visible=!1,Z.character.groundMark.visible=!1,Z.character.cue&&(Z.character.cue.visible=!1),f[Z.character.styleIndex].push(Z.character),h.delete(K));let et=wa.map(()=>0);for(let{character:K}of h.values())et[K.styleIndex]++;for(let K of[...W.keys()].filter(Z=>!h.has(Z)).sort()){let Z=et.indexOf(Math.min(...et));et[Z]++;let nt=f[Z].pop()??x(Z),Tt=Sa({allowsPoint:(At,Mt)=>b(At,Mt,nt.radius),allowsRoute:(At,Mt,_t,Lt)=>_(At,Mt,_t,Lt,nt.radius)});h.set(K,{character:nt,motion:Tt,dwell:Km(),born:H,poseAt:H})}for(let[K,Z]of W){let nt=h.get(K);nt.point=Z,nt.bodyReported=nt.motion.observe(Z,H,{observation:Z.expiresAt,reduceMotion:k}),nt.bodyReported||(nt.bodySuppressed=!0),o.length&&nt.dwell.observe(Z,H)}D(H,k)}function O(){if(c.removeFromParent(),l.removeFromParent(),!!u){for(let B of[u.ink,u.cheek,u.shoes,u.white,u.shadow,u.groundMark,u.retainedMark,u.occlusionMaterial])B.dispose();for(let B of u.palette)for(let L of Object.values(B))L.dispose();u.sphere.dispose(),u.disc.dispose(),u.groundRing.dispose(),u.glasses.dispose(),u.occlusionGlyph.dispose(),c.clear(),l.clear();for(let B of f)B.length=0;h.clear(),u=void 0}}return{setTracks:N,render:D,dispose:O,setVisible(B){c.visible=l.visible=B},orientOcclusionCues(B){for(let L of l.children)L.visible&&L.quaternion.copy(B.quaternion)},get hasMotion(){return!m&&h.size>0},get hasVisibleTracks(){return p},get hasPendingReacquisition(){return[...h.values()].some(({motion:B})=>B.pendingReacquisition)}}}var Qm=lo($r(),1);var Js=1e-7;function Jm(n,t,e){let i=!1;for(let s=1;s<n.length;s++){let[r,o]=n[s-1],[a,c]=n[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(i=!i)}return i}var tu=(n,t,e,i,s,r)=>(e-n)*(r-t)-(i-t)*(s-n),Rs=(n,t,e)=>e>=Math.min(n,t)-Js&&e<=Math.max(n,t)+Js;function cw([n,t,e,i],s,r,o,a){let c=tu(n,t,e,i,s,r),l=tu(n,t,e,i,o,a),u=tu(s,r,o,a,n,t),h=tu(s,r,o,a,e,i);return Math.abs(c)<Js&&Rs(n,e,s)&&Rs(t,i,r)||Math.abs(l)<Js&&Rs(n,e,o)&&Rs(t,i,a)||Math.abs(u)<Js&&Rs(s,o,n)&&Rs(r,a,t)||Math.abs(h)<Js&&Rs(s,o,e)&&Rs(r,a,i)?!0:c>0!=l>0&&u>0!=h>0}function Ta(n,t,e,i,s,r){let o=s-e,a=r-i,c=o*o+a*a,l=c?Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/c)):0;return(n-e-l*o)**2+(t-i-l*a)**2}function tg(n,t,e,i,s,r){if(cw(n,t,e,i,s))return!0;if(!r)return!1;let[o,a,c,l]=n;return Math.min(Ta(t,e,...n),Ta(i,s,...n),Ta(o,a,t,e,i,s),Ta(c,l,t,e,i,s))<r}function eu(n,t,e=[]){let i=t.filter(s=>s.bottom===0).flatMap(s=>s.polygons).concat(e);return n.length&&i.length?Qm.default.difference(n,i):n}function pf(n){let t=typeof window>"u"?globalThis:window,e=n.flatMap(({item:r,x:o,z:a,angle:c})=>t.RoomcraftModels.walkingObstacleBoxes({...r,x:o,y:a,rotation:c*180/Math.PI}).map(l=>{let{width:u,height:h,u:f,v:d}=l;return{...l,id:r.id,extentX:Math.abs(f[0])*u+Math.abs(d[0])*h,extentZ:Math.abs(f[1])*u+Math.abs(d[1])*h,edges:[[-u,-h,u,-h],[u,-h,u,h],[u,h,-u,h],[-u,h,-u,-h]]}}));function i(r,o,a,c,l=0,u){let h=Math.max(0,l)**2;return e.some(f=>{if(f.id===u||Math.min(r,a)>f.x+f.extentX+l||Math.max(r,a)<f.x-f.extentX-l||Math.min(o,c)>f.y+f.extentZ+l||Math.max(o,c)<f.y-f.extentZ-l)return!1;let d=r-f.x,m=o-f.y,y=a-f.x,p=c-f.y,g=d*f.u[0]+m*f.u[1],x=d*f.v[0]+m*f.v[1],v=y*f.u[0]+p*f.u[1],b=y*f.v[0]+p*f.v[1],_=(S,C)=>Math.abs(S)<=f.width&&Math.abs(C)<=f.height;return _(g,x)||_(v,b)||f.edges.some(S=>tg(S,g,x,v,b,h))})}return{blocksPoint:(r,o,a,c)=>i(r,o,r,o,a,c),blocksRoute:i}}function Qs(n){let t=n.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return n.some(([a,...c])=>Jm(a,r,o)&&!c.some(l=>Jm(l,r,o)))}function i(r,o){if(!e(r,o))return 0;let a=1/0;for(let c of t)a=Math.min(a,Ta(r,o,...c));return Math.sqrt(a)}function s(r,o,a,c,l=0){let u=Math.max(0,l-Js)**2;return e(r,o)&&e(a,c)&&!t.some(h=>tg(h,r,o,a,c,u))}return{contains:e,clearance:i,supportsRoute:s}}function eg(n,t,e,i){if(![n,t,e].every(Number.isFinite)||e<0)return null;if(i(n,t))return{x:n,y:t};let s=4,r=Math.ceil(e/s);for(let o=1;o<=r;o++){let a=Math.min(o*s,e),c=Math.ceil(2*Math.PI*a/s);for(let l=0;l<c;l++){let u=l*2*Math.PI/c,h=n+Math.cos(u)*a,f=t+Math.sin(u)*a;if(i(h,f))return{x:h,y:f}}}return null}var ng=new Ue,nu=new G,to=class extends na{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new jt(t,3)),this.setAttribute("uv",new jt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new vs(e,6,1);return this.setAttribute("instanceStart",new ei(i,3,0)),this.setAttribute("instanceEnd",new ei(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new vs(e,6,1);return this.setAttribute("instanceColorStart",new ei(i,3,0)),this.setAttribute("instanceColorEnd",new ei(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ko(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),ng.setFromBufferAttribute(e),this.boundingBox.union(ng))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)nu.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(nu)),nu.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Gt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ft},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};On.line={uniforms:ji.merge([Gt.common,Gt.fog,Gt.line]),vertexShader:`
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
		`};var Cs=class extends Be{constructor(t){super({type:"LineMaterial",uniforms:ji.clone(On.line.uniforms),vertexShader:On.line.vertexShader,fragmentShader:On.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var mf=new Pe,ig=new G,sg=new G,vn=new Pe,_n=new Pe,Ui=new Pe,gf=new G,yf=new Me,Mn=new ia,rg=new G,iu=new Ue,su=new Vn,ki=new Pe,Oi,tr;function og(n,t,e){return ki.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),ki.multiplyScalar(1/ki.w),ki.x=tr/e.width,ki.y=tr/e.height,ki.applyMatrix4(n.projectionMatrixInverse),ki.multiplyScalar(1/ki.w),Math.abs(Math.max(ki.x,ki.y))}function lw(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,c=o;a<c;a++){Mn.start.fromBufferAttribute(s,a),Mn.end.fromBufferAttribute(r,a),Mn.applyMatrix4(e);let l=new G,u=new G;Oi.distanceSqToSegment(Mn.start,Mn.end,u,l),u.distanceTo(l)<tr*.5&&t.push({point:u,pointOnLine:l,distance:Oi.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function uw(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-t.near;Oi.at(1,Ui),Ui.w=1,Ui.applyMatrix4(t.matrixWorldInverse),Ui.applyMatrix4(i),Ui.multiplyScalar(1/Ui.w),Ui.x*=r.x/2,Ui.y*=r.y/2,Ui.z=0,gf.copy(Ui),yf.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(vn.fromBufferAttribute(c,f),_n.fromBufferAttribute(l,f),vn.w=1,_n.w=1,vn.applyMatrix4(yf),_n.applyMatrix4(yf),vn.z>h&&_n.z>h)continue;if(vn.z>h){let v=vn.z-_n.z,b=(vn.z-h)/v;vn.lerp(_n,b)}else if(_n.z>h){let v=_n.z-vn.z,b=(_n.z-h)/v;_n.lerp(vn,b)}vn.applyMatrix4(i),_n.applyMatrix4(i),vn.multiplyScalar(1/vn.w),_n.multiplyScalar(1/_n.w),vn.x*=r.x/2,vn.y*=r.y/2,_n.x*=r.x/2,_n.y*=r.y/2,Mn.start.copy(vn),Mn.start.z=0,Mn.end.copy(_n),Mn.end.z=0;let y=Mn.closestPointToPointParameter(gf,!0);Mn.at(y,rg);let p=oe.lerp(vn.z,_n.z,y),g=p>=-1&&p<=1,x=gf.distanceTo(rg)<tr*.5;if(g&&x){Mn.start.fromBufferAttribute(c,f),Mn.end.fromBufferAttribute(l,f),Mn.start.applyMatrix4(o),Mn.end.applyMatrix4(o);let v=new G,b=new G;Oi.distanceSqToSegment(Mn.start,Mn.end,b,v),e.push({point:b,pointOnLine:v,distance:Oi.origin.distanceTo(b),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var ru=class extends ce{constructor(t=new to,e=new Cs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)ig.fromBufferAttribute(e,o),sg.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+ig.distanceTo(sg);let r=new vs(s,2,1);return t.setAttribute("instanceDistanceStart",new ei(r,1,0)),t.setAttribute("instanceDistanceEnd",new ei(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Oi=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;tr=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),su.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=tr*.5;else{let h=Math.max(s.near,su.distanceToPoint(Oi.origin));l=og(s,h,c.resolution)}if(su.radius+=l,Oi.intersectsSphere(su)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),iu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=tr*.5;else{let h=Math.max(s.near,iu.distanceToPoint(Oi.origin));u=og(s,h,c.resolution)}iu.expandByScalar(u),Oi.intersectsBox(iu)!==!1&&(i?lw(this,e):uw(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(mf),this.material.uniforms.resolution.value.set(mf.z,mf.w))}};var eo=class extends to{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){let e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var ou=class extends ru{constructor(t=new eo,e=new Cs({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var ag="#ffce84",hw="#a8f5ff",xf="#10242e";function au(n,t,e){return new Cs({color:n,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function cu(n,t,e,i){let s=new eo;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new ou(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=i+r,n.add(a)}}function cg(n,t,e,i){let s=new he().setFromPoints(t.map(({x:o,y:a})=>new G(o,.5,a)));s.setIndex(Hn.triangulateShape(t.map(({x:o,y:a})=>new Ft(o,a)),[]).flat());let r=new ce(s,e);r.renderOrder=i,n.add(r)}function lg(){let n=new Yi,t={side:Qe,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new Ne({...t,color:ag,opacity:.13}),i=new Ne({...t,color:xf,opacity:.95}),s=au(xf,4.6,{opacity:.8}),r=au(ag,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=au(xf,3.5,{...o,opacity:.65}),c=au(hw,1.7,{...o,opacity:.9});function l({origin:f,forward:d}){let m=(p,g=0)=>({x:f.x+d.x*p-d.y*g,y:f.y+d.y*p+d.x*g}),y=Array.from({length:28},(p,g)=>{let x=g/28*Math.PI*2;return m(10*Math.cos(x),10*Math.sin(x))});cu(n,[m(10),m(56)],[s,r],5),cu(n,[m(45,-7),m(56),m(45,7)],[s,r],5),cg(n,y,i,7),cu(n,[...y,y[0]],[s,r],8)}function u(f){for(let m of new Set(n.children.map(y=>y.geometry)))m.dispose();n.clear();let d=new Map;for(let m of f){let{points:y,kind:p,id:g,origin:x,forward:v}=m;if(y.length<3)continue;let b=p==="nominal";b&&cg(n,y,e,0),cu(n,[...y,y[0]],b?[s,r]:[a,c],b?3:1),x&&v&&d.set(g,m)}for(let m of d.values())l(m)}function h(){u([]);for(let f of[e,i,s,r,a,c])f.dispose()}return{scene:n,setZones:u,dispose:h}}var hg=lo($r(),1);var fw=4096,dw=.18,pw=new $t("#465fc4"),ug=new $t("#cc548d"),mw=new $t("#ffd572");function gw(n,t,e){let i=e*.48,s=i*.83;return[[n-s,t-i],[n+s,t-i],[n+i,t-s],[n+i,t+s],[n+s,t+i],[n-s,t+i],[n-i,t+s],[n-i,t-s],[n-s,t-i]]}function yw({x:n,y:t,corners:e},i){return!Array.isArray(e)||e.length!==4||!e.every(s=>Array.isArray(s)&&s.length===2&&s.every(Number.isFinite))?gw(n,t,i):[...e,e[0]]}function xw(n,t,e,i,s){let[r,...o]=e.map(l=>l.slice(0,-1).map(([u,h])=>new Ft(u,h))),a=Hn.triangulateShape(r,o),c=[r,...o].flat();for(let l of a)for(let u of l){let{x:h,y:f}=c[u];n.push(h,dw,f),t.push(i.r,i.g,i.b,s)}return a.length>0}function bw(n,t,e){let{cells:i,cellSize:s}=e??{};if(!Array.isArray(i)||!Number.isFinite(s)||s<=0||s>200)return null;let r=i.slice(0,fw).filter(h=>[h?.x,h?.y,h?.hits].every(Number.isFinite)&&h.hits>0&&t.contains(h.x,h.y));if(!r.length)return null;let o=r.reduce((h,{hits:f})=>Math.max(h,f),0),a=[],c=[],l=0;for(let h of r){let f=Math.sqrt(h.hits/o),d=f<.55?pw.clone().lerp(ug,f/.55):ug.clone().lerp(mw,(f-.55)/.45),m=!1;for(let y of hg.default.intersection([yw(h,s)],n))m=xw(a,c,y,d,.36+f*.42)||m;m&&l++}if(!l)return null;let u=new he;return u.setAttribute("position",new jt(a,3)),u.setAttribute("color",new jt(c,4)),{geometry:u,drawn:l}}function fg(n){let t=new se;t.name="Roomcraft radar heat map";let e=Qs(n),i=new Ne({vertexColors:!0,side:Qe,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}),s;function r(c){s&&(t.remove(s),s.geometry.dispose(),s=void 0);let l=bw(n,e,c);return l?(s=new ce(l.geometry,i),t.add(s),l.drawn):0}function o(){r(null),i.dispose()}function a(c){i.opacity=Number.isFinite(c)?oe.clamp(c,.25,1):1}return{root:t,setHistory:r,setOpacity:a,dispose:o}}var vw=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),_w=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),dg={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},no=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"],sunrise:["#a9aa9e","#71aaa8","#536f9b","#d9dce8","#e5b7bc","#ffe0ae"],sunset:["#b3a08f","#7296a1","#635879","#f0cbc4","#d39a9b","#ffae80"]}).map(([n,t])=>[n,t.map(e=>new $t(e))])),bf={sunrise:["#efad92","#8baac6"].map(n=>new $t(n)),sunset:["#e58968","#907fa6"].map(n=>new $t(n))},pg=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:Aa,smoothstep:Mw}=oe;function Sw({shoreline:n,farZ:t,focusX:e}){let i=[],s=[],r=[];for(let[a,{x:c,z:l}]of n.entries()){let u=a*2;i.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new he;return o.setAttribute("position",new jt(i,3)),o.setAttribute("uv",new jt(s,2)),o.setIndex(r),o}var ww=`
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
`,Ew=`
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
`;function mg({y:n,farZ:t,shoreline:e,focusX:i}){let s={...ji.clone(Gt.fog),waterTime:{value:0},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},solarBand:{value:0},moon:{value:0},moonLight:{value:new Ft(0,1)},bodyPosition:{value:new Ft},solarPosition:{value:new Ft},solarWarmTint:{value:bf.sunrise[0]},solarCoolTint:{value:bf.sunrise[1]}};for(let[c,l]of pg.entries())s[l]={value:no.clear[c].clone()};let r=new Be({uniforms:s,vertexShader:ww,fragmentShader:Ew,toneMapped:!1,fog:!0}),o=new ce(Sw({shoreline:e,farZ:t,focusX:i}),r);o.name="Ocean and shore wash",o.position.set(i,n,t);function a(c,l={}){let{night:u,daylightKnown:h,condition:f,moonPhase:d,moonAzimuth:m,moonElevation:y,skyProgress:p,windSpeed:g,windBearing:x,reduceMotion:v,reflections:b=!0}=l,_=l.solar??Qi(l),S=vw.has(f),C=no[S?"overcast":"clear"],M=_.phase==="sunset"||_.rising===!1?"sunset":"sunrise",A=Math.max(_.twilight,_.lowSun);for(let[Tt,At]of pg.entries())s[At].value.lerpColors(no.night[Tt],C[Tt],_.daylight).lerp(no[M][Tt],A*(S?.24:.46));let D=Object.hasOwn(dg,d)?dg[d]:void 0,N=h||Number.isFinite(l.sunElevation)||f==="sunny",O=N?_.disc*(.97-_.cloud*.42):0,B=(u||_.phase==="night")&&D!==void 0?.93*(1-Mw(_.elevation,-12,-3)):0,L=B>O;L?s.bodyTint.value.copy(no.night[5]):s.bodyTint.value.lerp(no[M][5],A*.52);let k=_w.has(f),H=Number.isFinite(c)&&!v?c:0;s.waterTime.value=H,s.rain.value=k?1:0,s.fog.value=f==="fog"?1:0;let W=Number.isFinite(g)?Aa(g/18,0,1):0,et=Number.isFinite(x)?-Math.sin(oe.degToRad(x)):1;s.reflectedWind.value=Math.sin(H*.09)*et*W*24;let K=k||f==="windy"||f==="windy-variant";s.roughness.value=1+Math.max(K?.65:0,W*.65),s.cloudCover.value=b?S?.94:f==="partlycloudy"?.64:u?.32:.24:0,s.bodyVisibility.value=!b||S?0:Math.max(B,O),s.solarBand.value=b&&N?A*(S?.3:1-_.cloud*.48):0,[s.solarWarmTint.value,s.solarCoolTint.value]=bf[M],s.moon.value=L?1:0,s.solarPosition.value.set(_.east*154,38+Aa(_.elevation/75,0,1)*20);let Z=Number.isFinite(p)?Aa(p,0,1):void 0,nt=Z===void 0?void 0:oe.lerp(-145,145,Z);if(L){s.moonLight.value.set(Math.sin(D),Math.cos(D));let Tt=nt??(Number.isFinite(m)?Aa((m-180)*1.08,-180,180):46+Math.sin(H*.014)*27),At=Number.isFinite(y)?32+Aa(y/75,0,1)*24:42;s.bodyPosition.value.set(Tt,At)}else s.bodyPosition.value.copy(s.solarPosition.value)}return{mesh:o,update:a}}var lu=26,Tw=92,io=4,Aw=18,Rw=188;function yg(n){let{minZ:t,maxZ:e}=n.houseBounds,i=t-(e-t)*.11-46,s=n.editableStructure?1/0:t-146,r=Math.min(n.bounds.minZ,i,s)-Aw,o=r-2*lu-Tw;return{nearZ:r,farZ:o,sceneryMinZ:o-Rw}}function xg(n,{nearZ:t,farZ:e},i,s,r){let o=e+lu,a=t-lu,c=(o+a)/2,l=r-s/2,u=r+s/2,h=(f,d,m,y)=>n.box(s,m,d-f,y,r,i+m/2,(f+d)/2);h(o,a,1.2,"#73767c"),h(o,o+3.4,1.4,"#656b71"),h(a-3.4,a,1.4,"#656b71");for(let[f,d,m,y]of[[e,o,o-io,e],[a,t,a,a+io]]){h(f,d,5,"#c0b6a7"),h(m,m+io,6.2,"#d0c3b0");let p=lu-io;for(let g=l+36;g<u;g+=72)n.box(1.15,.18,p,"#a69c91",g,i+5.04,y+p/2)}for(let f=l+36;f+17<u;f+=72)n.box(34,.2,2.8,"#e9ce91",f,i+1.24,c);return{centerX:r,width:s,surfaceY:i+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+io,maxZ:t,surfaceY:i+5},{minZ:e,maxZ:o-io,surfaceY:i+5}]}}function vf(n,t,e,i){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new he;o.setAttribute("position",new jt(s,3)),o.setIndex(r),o.computeVertexNormals(),n.add(o,i,0,0,0)}function Cw(n,t,e,i,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new ko(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,h=Math.sin(r+c*1.62)*s*.21;n.add(l,c%2?a:o,t+u,i+s*.46,e+h)}}function Iw(n,t,e,i,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*i,u=e+o,h=s+.1;n.ball(a,c,13,"#d7bd94",l,h,u),n.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,h+.5,u+4);for(let[f,d,m]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])Cw(n,l+a*f,u+d,h+c*.75,m,f*7)}}function Pw(n,t,e,i){let o=e-13.5+.6;n.box(19,2.5,27,"#ac987e",t,i+1.28,o);for(let a=0;a<7;a++)n.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,i+2.6,e-1.25-a*3.8);for(let a of[-1,1])n.box(.9,.8,27+.6,"#b4a086",t+a*19/2,i+2.8,o)}function Lw(n,t,e,i,s,r,o){n.box(1.4,16.6,1.4,"#b5a08a",t,i+16.6/2,e),n.ball(1.6,.95,1.6,r,t,i+16.6+3.6,e);for(let u=0;u<8;u++){let h=(p,g,x)=>[Math.cos(p)*g,x,Math.sin(p)*g],f=o+u*2*Math.PI/8,d=o+(u+1)*2*Math.PI/8,m=[[0,16.6+3.4,0],h(f,16*.54,16.6+2.1),h(d,16*.54,16.6+2.1),h(f,16,16.6-.55),h(d,16,16.6-.55),h(f,16,16.6-2),h(d,16,16.6-2)],y=new he;y.setAttribute("position",new jt(m.flat(),3)),y.setAttribute("uv",new jt(m.flatMap(([p,,g])=>[p/32+.5,g/32+.5]),2)),y.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),y.computeVertexNormals(),n.add(y,u%2?r:s,t,i,e)}}function gg(n,t,e,i,s,r){let o=(h,f)=>[t+h*Math.cos(r)+f*Math.sin(r),e-h*Math.sin(r)+f*Math.cos(r)],a=(h,f,d,m,y,p,g)=>{let[x,v]=o(y,g);n.box(h,f,d,m,x,i+p,v,r)};for(let h of[-1,1])a(1.1,1.2,18,"#988679",h*4.5,2.15,0),a(1,2.1,1.2,"#988679",h*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Ae(8.4,.85,8);u.rotateX(-Math.PI/6),n.add(u,s,c,i+4.4,l,r)}function Nw(n,t,e,i,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*i,h=e+o;Lw(n,u,h,s,a,c,l),gg(n,u-13,h-15,s,c,l-.17),gg(n,u+14,h-14,s,a,l+.12),n.box(8.6,.22,15,"#e9cda5",u+23,s+.99,h+7,l*2)}}function bg(n,{farZ:t},e,{minX:i,maxX:s},r=6200,o=(i+s)/2){let a=(i+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,g)=>{let x=l+r*g/c,v=x-a,b=t-108+14*Math.cos((v+110)*.006)+7*Math.sin((v-90)*.013);return{x,z:b}}),h=u.map(({x:p})=>[p,e+.28,t+.4]),f=u.map(({x:p,z:g})=>[p,e+.71,g+22]),d=u.map(({x:p,z:g})=>[p,e+.44,g+6]),m=u.map(({x:p,z:g})=>[p,e+.17,g-31]);vf(n,h,f,"#e3cba0"),vf(n,f,d,"#dbbd92"),vf(n,d,m,"#c8a47e");let y=Math.max(940,s-i);Iw(n,a,t,y,e);for(let p of[-1,1])Pw(n,a+p*y*.245,t,e);return Nw(n,a,t,y,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:Bi}=oe,ne={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},vg=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],Dw=new Map(vg.map(n=>[n.id,n])),_g=[{id:"teal-semi",label:"Teal semi with box trailer",length:119,width:29,paint:"#61978e",roof:"#9bc0a8",trailer:"#eadcbd",stripe:"#83a89c"},{id:"coral-reefer",label:"Coral semi with refrigerated trailer",length:122,width:29,paint:"#b97c76",roof:"#e2ad95",trailer:"#e4e5d8",stripe:"#7298a7",refrigerated:!0}],Fw=new Map(_g.map(n=>[n.id,n])),Mg=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],Sg=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],Uw=new Map(Mg.map(n=>[n.id,n])),kw=new Map(Sg.map(n=>[n.id,n])),wg=({id:n,label:t,length:e,width:i,detail:s})=>Object.freeze({id:n,label:t,length:e,width:s==="food"?i+2:i}),uu=Object.freeze([...vg,..._g,...Mg].map(wg)),hu=Object.freeze(Sg.map(wg));function Ow(n){let t=new he;return t.setAttribute("position",new jt(n.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function fu(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new $t(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Te(a,3)),r}),e=Xn(t);for(let i of t)i.dispose();return e.computeBoundingBox(),e}function Ra(n,t){let e=n.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),i=[],s=(n.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;i.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)i.push(0,o,o+1,s,s+o+1,s+o);let r=new he;return r.setAttribute("position",new jt(e,3)),r.setIndex(i),r.computeVertexNormals(),r}function Bw(n){let t=[],e=(H,W)=>t.push([H,W]),i=(H,W,et,K,Z,nt,Tt)=>e(new Ae(K,Z,nt).translate(H,W,et),Tt),s=(H,W)=>e(Ow(H),W),r=(H,W,et,K,Z,nt,Tt)=>{let At=[[W,K,nt],[et,K,nt],[et,Z,nt],[W,Z,nt]];s(H>0?At:At.reverse(),Tt)},{width:o,tire:a,body:c,roof:l,detail:u}=n,h=n.length-2.8,f=h*.5,d=o*.435,m=a*.78,y=8.25+a*.52,p=y-(u==="sports"||u==="convertible"?1.8:.75);e(Ra([[-f,d*.76,y-1.6],[-f+2.4,d*.93,y-.2],[-f+6.2,d,y],[f-6.2,d,y-.24],[f-2.4,d*.92,p+.35],[f,d*.75,p]],m),c);let g=m+.95;for(let H of[-1,1])i(H*(f-.22),g,0,1.42,1.58,d*1.57,ne.bumper),i(H*(f+.05),g+.82,0,1.08,.95,4.5,ne.plate);i(f+.1,p-2.8,0,.65,1.2,d*.64,ne.grille),i(f+.38,p-2.62,0,.24,.35,d*.55,ne.rim);for(let H of[-1,1]){i(0,m+1.3,H*(d+.04),h*.53,.9,.34,ne.bumper);for(let W of[-.323,.323]){let et=h*W,K=H*(d+.05);e(new We(a,a,2.9,10).rotateX(Math.PI/2).translate(et,a,K),ne.tire),e(new An(a*.57,8).rotateY(H<0?Math.PI:0).translate(et,a,K+H*1.46),ne.rim),e(new An(a*.28,6).rotateY(H<0?Math.PI:0).translate(et,a,K+H*1.48),ne.hub)}}let[x,v,b,_]=n.cabin.map(H=>h*H),S=y-.35,C=n.height-1.25,M=d*.88,A=M*(n.windows>2||u==="camper"||u==="delivery"?.94:.79),D=H=>Bi(M,A,H),N=H=>Bi(S,C,H),O=(H,W,et,K=0)=>[Bi(Bi(x,v,W),Bi(_,b,W),H),N(W),et*(D(W)+K)];function B(H,W,et,K,Z=.2,nt=.85,Tt=.08){let At=[O(W,Z,H,Tt),O(et,Z,H,Tt),O(et,nt,H,Tt),O(W,nt,H,Tt)];s(H>0?At:At.reverse(),K)}function L(H,W,et,K,Z,nt,Tt=0){let[At,Mt]=H>0?[_,b]:[x,v],_t=(ot,ht)=>[Bi(At,Mt,ht)+H*Tt,N(ht),ot*D(ht)],Lt=[_t(et,K),_t(W,K),_t(W,Z),_t(et,Z)];s(H>0?Lt:Lt.reverse(),nt)}function k(H){L(H,-.81,.81,.16,.88,ne.window,.08),L(H,-.72,.73,.23,.82,ne.glass,.13),L(H,-.67,.64,.67,.75,ne.glassGlow,.18)}if(u==="convertible"){L(1,-.88,.88,0,1,l,.08),k(1),i((x+b)/2,S+.2,0,(b-x)*.96,1.05,M*1.92,ne.window);for(let H of[-1,1])i(x+5.7,S+2.35,H*M*.43,7.7,2.5,5.6,ne.upholstery),i(x+2.2,S+3.7,H*M*.43,2,5.2,6,ne.tan)}else{for(let Z of[-1,1])B(Z,0,1,c,0,1,0);L(1,-1,1,0,1,c),L(-1,-1,1,0,1,c),k(1),["delivery","cargo","food"].includes(u)||k(-1);let H=(b+v)/2,W=b-v+.38;i(H,C+.34,0,W,.84,A*2.05,l),u==="bubble"&&i(H,C+.79,0,W*.88,.52,A*1.67,l),u==="sunroof"&&(i(H,C+.82,0,W*.48,.24,A*1.12,ne.window),i(H-W*.12,C+.98,0,.65,.18,A,ne.glassGlow));let et=n.windows??2,K=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:et},(Z,nt)=>[(nt+.16)/et,(nt+.86)/et]);for(let Z of[-1,1])for(let[nt,Tt]of K)B(Z,nt,Tt,ne.window),B(Z,nt+.011,Tt-.009,ne.glass,.29,.79,.13),B(Z,nt+.023,Tt-.025,ne.glassGlow,.64,.72,.18)}for(let H of[-1,1])i(_-3,S+1.05,H*(d+.2),3.2,1.8,1.75,l),i(Bi(x,_,.36),y-1.45,H*(d+.1),2.8,.46,.24,ne.rim);return{add:e,box:i,sideFace:r,glazingSide:B,bodyParts:t,recipe:n,length:h,outer:d,shoulder:y,nose:f,frontY:p}}function zw(n,t){let{length:e,outer:i,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=n,l=-e*.454,u=e*.105,h=r.height-.4,f=u-l;o(Ra([[l,i*.93,h-.7],[l+1.6,i,h],[u-1.6,i,h],[u,i*.93,h-.7]],s-.8),t),a((l+u)/2,h+.1,0,f-3.5,.28,i*1.6,r.roof);for(let d of[-1,1]){let m=d*(i+.1);c(d,l+3,u-3,s+1.6,s+2.45,m,r.body)}for(let d of[-.4,0,.4])a(l-.13,(s+h)/2,i*d,.26,h-s-3.1,.4,ne.rim);return{rear:l,front:u,top:h}}function Hw(n){let{recipe:t,box:e,sideFace:i,glazingSide:s,length:r,outer:o,shoulder:a}=n,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let h=l+.5;for(let f of[-1,1])e(r*-.18,h,f*o*.51,r*.3,.85,.83,ne.roofRail);if(c==="trail"){for(let f of[-.29,-.07])e(r*f,h+.55,0,1.05,.75,o*1.18,ne.roofRail);e(r*-.18,h+1.1,0,r*.17,1.65,o*.78,ne.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,ne.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let h=r*-.25;e(h,a+.22,0,r*.35,.42,o*1.43,ne.wood);for(let f of[-1,1])e(h,a+.93,f*o*.84,r*.34,2.28,1.72,u),e(h,a+.48,f*o*.38,r*.33,.25,.4,ne.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,ne.tan)}else if(c==="cargo"||c==="food"){let{rear:h,front:f}=zw(n,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let d=a+7;i(1,h+5.5,f-4.5,d,d+8.4,o+.19,ne.window),e((h+f)/2,d,o+.75,f-h-9.5,.75,2.65,ne.wood);for(let m=0;m<7;m++)e(Bi(h+6,f-4.5,m/6),d+8.6,o+1.4,2.5,1.05,2.75,m%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let h of[-1,1])c==="delivery"?(s(h,.1,.61,"#e5d6e4",.28,.65,.12),s(h,.18,.54,"#b39cc2",.43,.49,.18)):(s(h,.09,.61,"#456575",.29,.68,.12),s(h,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,h*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let h of[-1,1])e(0,a-1.05,h*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,ne.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function _f(n,t,e){return[{role:"body",geometry:fu(n),material:new Xe({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new Xe({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new Xe({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function Gw({length:n,width:t,paint:e,roof:i,trailer:s,stripe:r,refrigerated:o}){let a=[],c=(p,g)=>a.push([p,g]),l=(p,g,x,v,b,_,S)=>c(new Ae(v,b,_).translate(p,g,x),S),u=-n/2+1.3,h=n/2-1.3,f=14,d=t/2-1.15,m=d-.7;c(Ra([[u,d-1.2,32],[u+2,d,34],[f-2,d,34],[f,d-1,32]],10.2),s),c(Ra([[17,m-1,18],[21,m,22],[45,m,22],[h-4,m-1,16],[h,m-2,14]],7),e),c(Ra([[27,m-1,28],[31,m-.7,32],[42,m-.7,31],[47,m-1.6,26]],16),i),l(48,23.6,0,.9,6.8,m*1.5,ne.window),l(48.55,25.8,0,.22,.8,m*1.4,ne.glassGlow),l(h+.27,11,0,.56,5.9,9,ne.grille),l(h+.61,8.6,0,.55,1.12,m*1.55,ne.rim),l(u-.32,10.6,0,.62,1.2,2*d-3,ne.bumper),l(f+2.8,9.1,0,10,1.5,12,ne.bumper);for(let p of[-1,1]){l((u+f)/2,15,p*d,f-u-5,2.1,.39,r),l((u+f)/2,26,p*(d+.06),f-u-10,.32,.3,"#f6edd3"),l(40,25,p*(m-.5),7.8,5.25,.32,ne.window),l(47,21,p*(m+.2),2.1,2.1,1.5,e),l(35,9.5,p*(m+.25),7.2,.85,1.12,ne.rim),l(u-.1,22,p*d*.41,.48,13.2,.51,ne.rim);for(let g of[u+9,u+19,23,32,h-8.2]){let x=p*(d-1.42);c(new We(4.35,4.35,2.8,8).rotateX(Math.PI/2).translate(g,4.35,x),ne.tire),c(new An(2.47,6).rotateY(p<0?Math.PI:0).translate(g,4.35,x+p*1.41),ne.hub)}}o&&(l(f+1.2,27,0,2.6,7.9,8.8,"#eee5ce"),l(f+2.55,27.8,0,.2,3.9,6.4,r));let y=(p,g)=>fu([-1,1].map(x=>[new Ae(.42,1.3,3.1).translate(p,g,x*(d-3.7)),"#ffffff"]));return _f(a,y(h+.38,12.25),y(u-.54,12.4))}function Eg(n,t){let{style:e,length:i,paint:s,trim:r,jacket:o,helmet:a}=n,c=[],l=(Mt,_t)=>c.push([Mt,_t]),u=(Mt,_t,Lt)=>l(new Ae(...Lt).translate(..._t),Mt),h=(Mt,_t,Lt,ot=0)=>l(new Re(1,8,5).scale(...Lt).rotateZ(ot).translate(..._t),Mt);function f(Mt,_t,Lt,ot){let ht=new G(..._t),St=new G(...Lt),zt=new G().subVectors(St,ht),Ot=new gn().setFromUnitVectors(new G(0,1,0),zt.clone().normalize());l(new We(ot,ot,zt.length(),5,1,!0).applyQuaternion(Ot).translate(...ht.lerp(St,.5).toArray()),Mt)}let d=t?1:.75,m=i*(t?.132:.15),y=-i*(e==="longtail"?.309:.326),p=i*.326,g=[i*-.024,m+d*1.25,0],x=[i*(e==="cruiser"?-.16:-.115),i*(e==="trail"?.4:e==="cruiser"?.327:.369),0],v=e==="road"||e==="racer",b=[i*(v?.234:.204),x[1]+(v?.5:3.7)*d,0],_=d*(t?2.2:1.36),S=d*(t?1.04:.65),C=d*(t?.9:.65),M=e!=="road";for(let Mt of[y,p]){l(new Cn(m-S,S,4,12).translate(Mt,m,0),ne.tire),M&&l(new Cn(m+d*.37,d*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(Mt,m,0),s);for(let _t of[0,Math.PI/3,Math.PI*2/3]){let Lt=m-S*1.35,ot=Math.cos(_t)*Lt,ht=Math.sin(_t)*Lt;f(ne.rim,[Mt-ot,m-ht,0],[Mt+ot,m+ht,0],d*.23)}l(new We(d*1.05,d*1.05,_,8).rotateX(Math.PI/2).translate(Mt,m,0),ne.hub)}let A=[y,m,0];f(s,A,x,C),f(s,A,g,C),f(s,x,g,C),f(s,g,b,C);let D=e==="basket"||e==="scooter"?[b[0]*.7,g[1]+d*2.65,0]:b;f(s,x,D,C),D!==b&&f(s,D,b,C);for(let Mt of[-1,1])f(ne.rim,[b[0],b[1]-d*2.3,Mt*_*.38],[p,m,Mt*_*.45],C*.7);u(ne.bumper,[x[0]-.25,x[1]+d*.4,0],[d*(t?7.1:4.8),d*1.08,d*3.15]);let N=d*(t?5.05:4.75),O=b[0]+(v?d*1.85:-d*.8),B=b[1]+(v?-d*.6:d*.25);for(let Mt of[-1,1]){let _t=[O,B,Mt*N];f(ne.rim,b,_t,d*.47),f(ne.tire,[O+d*.6,B,Mt*N*.82],_t,d*.63)}if(t){u(ne.bumper,[g[0]+.4,g[1]+1.05,0],[6.4,4.9,5.4]);let Mt=e==="scooter"?[b[0]+2.1,x[1]-2.3,0]:[x[0]+5.5,x[1]+.7,0],_t=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(h(s,Mt,_t,e==="scooter"?.34:-.18),u(r,[Mt[0]+.8,Mt[1]+.15,_t[2]*.87],[_t[0]*1.18,1,.8]),u(r,[Mt[0]+.8,Mt[1]+.15,-_t[2]*.87],[_t[0]*1.18,1,.8]),e==="racer")h(ne.window,[b[0]+2,b[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[y+1.75,x[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,m*2.1+1.05,0],[7.25,.82,3.65]),u(ne.rim,[y+1.55,x[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")h(s,[y+3.7,x[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[g[0],m+1.1,0],[8.2,1.22,6.2]);else for(let Lt of[-1,1])f(ne.rim,[y-2.2,m+2.1,Lt*2.8],[g[0]+4.5,m+.45,Lt*3.25],.79)}else{let Mt=e==="longtail"?[y+1.1,m*2.05+1.8,0]:[p-.98,b[1]-1.55,0];e==="basket"||e==="longtail"?(u(ne.wood,Mt,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[Mt[0],Mt[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(ne.tan,[Mt[0],Mt[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[y+1.65,m+1.05,2],[4.2,3.4,1.85]),u(ne.roofRail,[y+1.6,m*2.05+.45,0],[5.3,.66,4.3]))}let L=[x[0]-d*.38,x[1]+d*2.05,0],k=[L[0]+(v?3.05:1.05)*d,L[1]+d*3.75,0],H=[k[0]+(v?3.35:.95)*d,k[1]+(v?3.1:4.85)*d,0],W=v?-.57:-.22;h(o,k,[d*2.6,d*4.15,d*3],W),h(a,H,[d*2.94,d*2.68,d*2.62]),h(ne.window,[H[0]+d*2.1,H[1]-d*.4,0],[d*1.08,d*1.05,d*2.2]),(e==="commuter"||e==="trail")&&u(r,[k[0]-d*2.1,k[1]+d*.6,0],[d*1.9,d*3.3,d*3.5]);let et="#4b4e63",K="#e2b491";for(let Mt of[-1,1]){let _t=[k[0]+d*1.1,k[1]+d*1.65,Mt*d*2.43],Lt=[Bi(_t[0],O,.48),Bi(_t[1],B,.52)-d,Mt*d*3.48],ot=[O,B,Mt*N*.93];f(o,_t,Lt,d*.95),f(o,Lt,ot,d*.76),u(K,ot,[d*1.5,d*1.11,d*1.09]);let ht=t?0:Mt*d*1.35,St=[L[0]+d*(t?4.3:4.9)+ht,L[1]-d*3.5,Mt*d*2.64],zt=[g[0]+d*(e==="scooter"?2.65:.35)+ht,g[1]+d*.27-ht,Mt*d*2.5];f(et,[L[0],L[1],Mt*d*1.86],St,d*1.12),f(et,St,zt,d*.88),u(ne.tire,[zt[0]+d*.25,zt[1],zt[2]],[d*2.15,d*.95,d*1.42])}let Z=d*(t?1.34:.84),nt=[p+d*.58,m*(t?2.3:2.18),0],Tt=[y-d*.56,m*(t?2.18:2.02),0];f(ne.bumper,[p,m+d*1.5,0],nt,d*.58),f(ne.bumper,[y,m*1.6,0],Tt,d*.46);let At=Mt=>fu([[new Re(Z,6,4).scale(.53,.78,1).translate(...Mt),"#ffffff"]]);return _f(c,At(nt),At(Tt))}function Tg(n){let t=Uw.get(n);if(t)return Eg(t,!0);let e=Fw.get(n);if(e)return Gw(e);let i=Dw.get(n);if(!i)return null;let s=Bw(i);Hw(s);let{outer:r,nose:o,frontY:a,shoulder:c,bodyParts:l}=s,u=(h,f)=>fu([-1,1].map(d=>[new Ae(1.48,1.8,r*.35).translate(h*(o+.19),f,d*r*.63),"#ffffff"]));return _f(l,u(1,a-1.75),u(-1,c-2.65))}function Ag(n){let t=kw.get(n);return t?Eg(t,!1):null}var Rg=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),es={stride:4,crossingSeconds:3.2},Vw=242,Cg=12,Ig=.38,Dg=new Map(uu.map(n=>[n.id,n])),Pg=["seafoam-sedan","blue-wagon","butter-compact","ruby-motorcycle","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","teal-semi","indigo-motorcycle"].map(n=>Dg.get(n)),Ww=new $t("#fff1cf"),Xw=new $t("#db514c");function qw(n){n.computeBoundingBox();let t=n.boundingBox;if(t.max.z-t.min.z<5)return[t.getCenter(new G)];let e=(t.min.z+t.max.z)/2,i=[new Ue,new Ue],s=new G,r=n.attributes.position;for(let o=0;o<r.count;o++)s.fromBufferAttribute(r,o),i[+(s.z>=e)].expandByPoint(s);return i.map(o=>o.getCenter(new G))}var Yw=`
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      opacity *= exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      opacity *= 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #endif
`;function Lg(n){let t={...ji.clone(Gt.fog),lightStrength:{value:1}};return new Be({fog:!0,uniforms:t,transparent:!0,depthWrite:!1,blending:$i,toneMapped:!1,vertexShader:`
      varying vec2 lightUv;
      ${n?"varying vec3 tint;":""}
      #include <fog_pars_vertex>
      void main() {
        lightUv = uv;
        ${n?`
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
      ${n?"varying vec3 tint;":""}
      #include <fog_pars_fragment>
      void main() {
        ${n?`
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
        ${Yw}
        gl_FragColor = vec4(color, clamp(opacity * lightStrength, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `})}function $w({index:n,lane:t}){let e=Math.floor(n/es.stride),i=n%es.stride;return Pg[(2*(e+i)+t)%Pg.length]}function Ng({centerX:n,width:t,lanes:e}){let i=t-60,s=n-i/2,r=Math.max(1,Cg*Math.round(i/(Cg*Vw))),o=i/r,a=e.map((y,p)=>Array.from({length:r},(g,x)=>({z:y,lane:p,index:x,x:s,offset:o*(x+.25+(r===1&&p?.5:0))}))),c=0,l,u,h,f=!1,d=[];function m(y,p,g,x=!1){let v=p?.severity==="ambient"?es:Rg.get(p?.severity),b=Number.isFinite(l)&&Number.isFinite(y)?oe.clamp(y-l,0,.25):0;if(l=y,v!==u){f=!!(u&&v&&(v===es||u===es));let C=Math.min(r,v?.stride??1),M=v===es?Math.floor(C/2):1;d=v?a.flatMap((A,D)=>A.filter(({index:N})=>N%C===D*M%C)):[],u=v}if(!v)return h=void 0,d;let _=p.speedFactor,S=v===es?o*Math.min(r,es.stride)/(2*es.crossingSeconds):Number.isFinite(_)&&_>0?Rg.get("clear").speed*oe.clamp(_,.22,1):v.speed;if(x)c=!g&&Number.isFinite(y)?Math.max(0,y)*S:0;else if(!g)if(f&&h!==void 0){let C=Math.exp(-b/Ig),M=h-S;c+=b*S+M*Ig*(1-C),h=S+M*C,f=Math.abs(h-S)>.1}else c+=b*S,h=S;c%=i;for(let C of d){let M=(C.offset+c)%i;C.x=s+(C.lane?i-M:M)}return d}return{capacity:r*e.length,update:m}}function Fg(n){let t=new se,e=Ng(n),i,s=new Map;function r(x,v,b=e.capacity){let _=new ni(x,v,b);return _.count=0,_.frustumCulled=!1,_.instanceMatrix.setUsage(kn),_}let o=r(new An(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new Ne({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1})),a=r(new Rn(1,2).rotateX(-Math.PI/2).translate(.5,.16,0),Lg(!1),e.capacity*2);a.name="road-headlight-beams";let c=r(new Rn(1,1),Lg(!0),e.capacity*4);c.name="road-lamp-halos",a.visible=c.visible=!1,t.add(o,a,c);let l=new Ve,u=Math.abs(n.lanes[0]-n.lanes[1])/2,h,f=1;t.visible=!1;function d(x,v){for(let{mesh:b,role:_}of x.layers)_==="headlamp"&&(b.material.emissiveIntensity=v?2.45*f:.26),_==="taillamp"&&(b.material.emissiveIntensity=v?1.13*f:.28)}function m(x){if(s.has(x.id))return s.get(x.id);let v=new se;v.name=`vehicle-${x.id}`;let b=Tg(x.id).map(({geometry:C,material:M,role:A})=>({mesh:r(C,M),role:A}));v.add(...b.map(({mesh:C})=>C)),t.add(v);let _=C=>qw(b.find(M=>M.role===C).mesh.geometry),S={group:v,layers:b,headlamps:_("headlamp"),taillamps:_("taillamp"),count:0};return d(S,h),s.set(x.id,S),S}function y(x,v,b,_,S){let C=S?12.4:8.6;l.position.set(v.x+b*(_.x+(S?1.1:-1)),n.surfaceY+_.y+.8,v.z+b*_.z),l.scale.set(C,C,1),l.updateMatrix(),c.setMatrixAt(x,l.matrix),c.setColorAt(x,S?Ww:Xw)}function p(x,v,{reduceMotion:b=!1,night:_=!1,transientTelemetry:S=!1,headlightBrightness:C=1}={}){S&&(i??=Ng(n));let A=(S?i:e).update(x,v,b,S);if(t.visible=A.length>0,a.visible=c.visible=_&&t.visible,a.count=c.count=0,!t.visible)return;let D=Number.isFinite(C)?oe.clamp(C,.35,1.6):1;if(_!==h||D!==f){h=_,f=D,a.material.uniforms.lightStrength.value=D,c.material.uniforms.lightStrength.value=D;for(let L of s.values())d(L,_)}for(let L of s.values())L.count=0;let N=Dg.get(v?.vehicleStyle),O=0,B=0;for(let[L,k]of A.entries()){let H=N??$w(k),W=m(H);l.position.set(k.x,n.surfaceY,k.z),l.rotation.y=k.lane?Math.PI:0,l.scale.set(1,1,1),l.updateMatrix();for(let{mesh:Z}of W.layers)Z.setMatrixAt(W.count,l.matrix);if(W.count++,l.scale.set(H.length*.55,1,H.width*.62),l.updateMatrix(),o.setMatrixAt(L,l.matrix),!_)continue;let et=k.lane?-1:1,K=oe.clamp(H.length*1.1,53,86);for(let Z of W.headlamps){let nt=Math.max(5,Math.min(16,u-Math.abs(Z.z)-1));l.position.set(k.x+et*(Z.x+1),n.surfaceY,k.z+et*Z.z),l.scale.set(K,1,nt),l.updateMatrix(),a.setMatrixAt(O++,l.matrix),y(B++,k,et,Z,!0)}for(let Z of W.taillamps)y(B++,k,et,Z,!1)}_&&(a.count=O,c.count=B,a.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0),o.count=A.length,o.instanceMatrix.needsUpdate=!0;for(let{group:L,layers:k,count:H}of s.values()){L.visible=H>0;for(let{mesh:W}of k)W.count=H,H&&(W.instanceMatrix.needsUpdate=!0)}}function g(){t.traverse(x=>{x.isInstancedMesh&&(x.dispose(),x.geometry.dispose(),x.material.dispose())}),t.clear()}return{root:t,update:p,dispose:g}}var Ug=22,kg=63,Zw=525,jw=1100,Kw=22,Jw=75,Mf=75,Qw=105,t2=54,e2=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],Og=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],n2=(n,t)=>(n%t+t)%t;function i2(n){let t=n.width-Jw*2,e=[],i=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(n.centerX))return{walkers:e,cyclists:i,sample:()=>({walkers:e,cyclists:i})};let s=n.centerX-t/2,r=Math.max(1,Math.round(t/Zw)),o=Math.max(1,Math.round(t/jw)),a=t/r,c=t/o;for(let[p,g]of(n.sidewalks??[]).entries()){let{minZ:x,maxZ:v,surfaceY:b}=g,_=v-x;if(![x,v,b].every(Number.isFinite)||_<=0)continue;let S=p%2?-1:1,C=Math.min(1,_/Kw),M=x+_*(S>0?.25:.75),A=x+_*(S>0?.76:.24);for(let D=0;D<r;D++){let N=Og[(D+p*2)%Og.length],O=t/2+(D+p*.42)*a-35,B=`sidewalk-walk-${p}-${D}`;for(let[L,[k,H]]of N.entries())e.push({id:`${B}-${L}`,groupId:B,style:k,child:H<.8,offset:O-S*13.2*L,scale:C*H,direction:S,y:b,z:M+S*.62*(L%2),phase:D*.91+p*.8+L*2.1})}for(let D=0;D<o;D++)i.push({id:`sidewalk-bike-${p}-${D}`,style:hu[(D+p*2)%hu.length],offset:t/2+(D+p*.65)*c,scale:C,direction:S,y:b,z:A,phase:D*1.7+p})}let l=t/Ug,u=t/kg,h=l+Mf+u+Qw,f=Math.max(0,l/2-t2),d=[-1,1].map(p=>e.find(g=>g.direction===p&&!g.child)).filter(Boolean),m=[-1,1].map(p=>i.find(g=>g.direction===p)).filter(Boolean);function y(p=0,g=!1,{night:x=!1,activity:v}={}){let b=Number.isFinite(p)?Math.max(0,p):0;if(v==="overnight")return{walkers:[],cyclists:[]};if(x||v==="evening"){if(g)return{walkers:[],cyclists:[]};let S=Math.floor((b+f)/h),C=(b+f)%h,M=C>=l+Mf,A=M?C-l-Mf:C,D=M?m:d,N=M?u:l;if(A>=N||!D.length)return{walkers:[],cyclists:[]};let O=D[(S+1)%D.length],B=A/N*t,L=s+(O.direction>0?B:t-B),k={...O,x:L,gait:A*(M?7:10)+O.phase};return M?{walkers:[],cyclists:[k]}:{walkers:[k],cyclists:[]}}let _=(S,C,M)=>S.map(A=>({...A,x:s+n2(A.offset+A.direction*C*b,t),gait:g?0:b*M+A.phase}));return{walkers:_(e,Ug,10),cyclists:_(i,kg,7)}}return{walkers:e,cyclists:i,sample:y}}var du={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function Bg(n,t,e){let{shirt:i,trim:s,pants:r,skin:o,hair:a,accessory:c}=e2[n.style],l=t?0:Math.sin(n.gait),u=Math.abs(l)*.69,h=f=>f+u;e(i,0,h(10.45),0,2.95,4.3,3.4),e(r,-.1,h(7.25),0,2.6,1.7,3.04),e(s,1.1,h(13.35),0,2.14,.69,2.55),e(s,2.68,h(10.4),-.7,.41,.86,1);for(let f of[-1,1]){let d=l*f,m=d*3,y=Math.max(0,d)*1.35;e(r,m*.45,4.5+y*.42+u*.32,f*1.51,1.19,3.2,1.25,-.48*d),e(du.shoe,.77+m,1.11+y,f*1.52,2.17,.99,1.34),e(du.sole,1.38+m,.49+y,f*1.52,1.64,.43,1.32),e(i,-d*1.07,h(10.16),f*3.15,1.23,2.87,1.15,.38*d),e(o,-d*2.16,h(7.7),f*3.31,.98,1.1,.95)}e(a,-.67,h(17.25),0,4.17,4.32,3.82),e(o,1.05,h(16.63),0,3.76,3.75,3.41),e(a,1.12,h(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,h(16.54),0,.64,.63,.66);for(let f of[-1,1])e(o,.36,h(16.69),f*3.47,1.02,1.07,.64),e(du.ink,4.18,h(17.25),f*1.35,.34,.47,.43),e(du.blush,3.76,h(16.21),f*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,h(19.68),.72,1.98,1.89,1.89),e(s,-3.51,h(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(i,-.5,h(20.2),0,3.72,1.97,3.45),e(s,2.72,h(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,h(10.2),0,1.48,2.89,2.63),e(i,-4.01,h(10.65),0,.46,1.28,1.77)),c==="curls")for(let f of[-1,1])e(a,-.9,h(18.52),f*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,h(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,h(21.05),2.67,1.51,.92,.65,-.47))}function zg(n){let t=i2(n),e=new se;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let i=new Ve;function s(g,x,v,b){let _=new ni(x,v,b);return _.name=g,_.frustumCulled=!1,_.instanceMatrix.setUsage(kn),e.add(_),_}let r=new Map,o=0;for(let g of t.walkers)Bg(g,!0,x=>{o++,r.has(x)||r.set(x,new $t(x))});let a=s("sidewalk-walkers",new Re(1,9,6),new Xe({color:"#fff",roughness:.81}),o),c=s("sidewalk-contact-shadows",new An(1,16).rotateX(-Math.PI/2),new Ne({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),l=new Map(hu.map(g=>{let x=t.cyclists.filter(v=>v.style.id===g.id).length;return[g.id,x?Ag(g.id).map(({geometry:v,material:b,role:_})=>({role:_,mesh:s(`sidewalk-bicycle-${g.id}-${_}`,v,b,x)})):[]]})),u,h=0,f,d,m;function y(g,{reduceMotion:x=!1,night:v=!1,transientTelemetry:b=!1,activity:_}={}){let S=v||_==="evening"||_==="overnight";if(S!==u){for(let k of l.values())for(let{role:H,mesh:W}of k)H==="headlamp"&&(W.material.emissiveIntensity=S?1.05:.16),H==="taillamp"&&(W.material.emissiveIntensity=S?.75:.18);u=S}if(!b){let k=Number.isFinite(f)&&Number.isFinite(g)?oe.clamp(g-f,0,.25):0;x||(h+=k),f=g}let C=b?x?0:g:h;if(d?.time===C&&d?.reduceMotion===x&&d?.transientTelemetry===b&&d?.night===v&&d?.activity===_)return;d={time:C,reduceMotion:x,transientTelemetry:b,night:v,activity:_};let M=t.sample(C,x,{night:v,activity:_}),A=M.walkers.length===t.walkers.length?"day":M.walkers[0]?.id,D=A!==m;m=A;let N=0,O=0;function B(k,H,W){i.position.set(k.x,k.y+.065,k.z),i.rotation.set(0,0,0),i.scale.set(H*k.scale,1,W*k.scale),i.updateMatrix(),c.setMatrixAt(O++,i.matrix)}for(let k of M.walkers){let{direction:H,scale:W}=k,et=H>0?0:Math.PI;Bg(k,x,(K,Z,nt,Tt,At,Mt,_t,Lt=0)=>{i.position.set(k.x+Z*W*H,k.y+nt*W,k.z+Tt*W*H),i.rotation.set(0,et,Lt),i.scale.set(At*W,Mt*W,_t*W),i.updateMatrix(),D&&a.setColorAt(N,r.get(K)),a.setMatrixAt(N++,i.matrix)}),B(k,5.32,4.1)}let L=new Map;for(let k of M.cyclists){let H=L.get(k.style.id)??0;i.position.set(k.x,k.y,k.z),i.rotation.set(0,k.direction>0?0:Math.PI,0),x||i.rotateX(Math.sin(k.gait)*.028),i.scale.setScalar(k.scale),i.updateMatrix();for(let{mesh:W}of l.get(k.style.id))W.setMatrixAt(H,i.matrix);L.set(k.style.id,H+1),B(k,k.style.length*.52,k.style.width*.58)}for(let[k,H]of l)for(let{mesh:W}of H)W.count=L.get(k)??0,W.instanceMatrix.needsUpdate=!0;a.count=N,c.count=O,D&&a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0}function p(){for(let g of e.children)g.dispose(),g.geometry.dispose(),g.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:y,dispose:p}}var Ia=Math.PI*2,{clamp:pu,lerp:Ps}=oe,s2=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),r2=188,o2=490,a2=175,Ca=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],c2=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7},{id:"jet-ski",name:"Lagoon jet ski",length:30,beam:12.2,paint:"#438e90",deck:"#e7b768",center:514,radius:46,offshore:72,drift:6,period:16,start:.47,wake:.96,wakeSeconds:3.7},{id:"cruise-ship",name:"Pearl cruise ship",length:149,beam:41,paint:"#436b84",deck:"#e9c79d",center:76,radius:201,offshore:286,drift:23,period:148,start:1.53,wake:.56,wakeSeconds:8}];function so(n,t){let e=0,i=n.length-1;for(;i-e>1;){let o=e+i>>1;t<n[o].x?i=o:e=o}let s=n[e],r=n[i];return Ps(s.z,r.z,pu((t-s.x)/(r.x-s.x),0,1))}function Gg(n){if(!Array.isArray(n?.shoreline)||n.shoreline.length<2||![n.y,n.farZ,n.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:i}=n,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:c2.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=pu(i+o.center,s+c,r-c);function u(h){let f=l+Math.cos(h)*a,d=Math.max(e+65,so(t,f)-o.offshore-Math.sin(h)*o.drift);return{x:f,z:d}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*Ia/12);if(so(t,c)-l<o.length/2+8)return!1}return!0})}function l2(n,t=Gg(n)){if(!t.length)return()=>null;let{shoreline:e,farZ:i}=n,s=e[0].x+120,r=e.at(-1).x-120,o=r-s;if(o<120)return()=>null;function a(u,h,f,d){let m=o/h,y=m+f,p=u.flatMap(x=>{let v=t.find(_=>_.id===x);if(!v)return[];let b=[1,-1].map(_=>({...v,start:0,period:m,point(S){let C=v.length*.55,M=pu((_>0?s:r)+_*o*S/Ia,e[0].x+C+8,e.at(-1).x-C-8),A=Math.min(so(e,M),so(e,M-C),so(e,M+C)),D=Math.max(i+65,A-v.offshore-Math.sin(S*2)*v.drift*.55);return{x:M,z:D}}}));for(let _=0;_<=20;_++){let{x:S,z:C}=b[0].point(_*Ia/20);if(so(e,S)-C<v.length/2+8)return[]}return[b]});if(!p.length)return()=>null;let g=d(m,y);return x=>{let v=(Number.isFinite(x)?Math.max(0,x):0)+g,b=v%y;if(b>=m)return null;let _=Math.floor(v/y);return{route:p[_%p.length][_%2],elapsed:b}}}let c=a(["cabin","fishing"],37,r2,u=>Math.max(0,u/2-42)),l=a(["fishing"],29,o2,(u,h)=>h-a2);return(u,h)=>(h==="overnight"?l:c)(u)}function Vg(n,t,e=.003){let i=n.point(t-e),s=n.point(t+e);return Math.atan2(i.z-s.z,s.x-i.x)}function u2(n,t,{condition:e}={}){let i=Number.isFinite(t)?t:0,s=n.start+i*Ia/n.period,{x:r,z:o}=n.point(s),a=i*1.24+n.start*3,c=n.id==="jet-ski"?1.9:n.id==="cruise-ship"?.55:1,l=(s2.has(e)?1.55:1)*c;return{x:r,z:o,angle:s,yaw:Vg(n,s),heave:Math.sin(a)*.55*l,pitch:Math.cos(a*.89)*.017*l,roll:Math.sin(a*.74+.4)*.031*l}}function Wg(n,t){let e=new he;return e.setAttribute("position",new jt(n.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function Xg(n){return Wg(n,n.length===3?[0,1,2]:[0,1,2,0,2,3])}function ro(n,t,e,i,s=1){let r=Ca.flatMap(([l,u])=>{let h=l*n,f=t*u*s/2;return[[h,i,-f*.58],[h,i,f*.58],[h,e-.9,f],[h,e,f*.88],[h,e,-f*.88],[h,e-.9,-f]]}),o=[],a=6,c=(Ca.length-1)*a;for(let l=0;l<c;l+=a)for(let u=0;u<a;u++){let h=(u+1)%a;o.push(l+u,l+u+a,l+h+a,l+u,l+h+a,l+h)}for(let l=1;l<a-1;l++)o.push(0,l,l+1,c,c+l+1,c+l);return Wg(r,o)}function h2(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new $t(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new Te(c,3)),r}),e=Xn(t);for(let i of t)i.dispose();return e}function ke(n,t,e,i,s,r){return new Ae(n,t,e).translate(i,s,r)}function Ye(n,t,e,i,s,r,o=0){return new Re(1,12,7).scale(n/2,t/2,e/2).rotateZ(o).translate(i,s,r)}function fn(n,t,e){let i=new G(...n),s=new G(...t).sub(i),r=new gn().setFromUnitVectors(new G(0,1,0),s.clone().normalize());return new We(e,e,s.length(),6).applyQuaternion(r).translate(...i.addScaledVector(s,.5).toArray())}function Hg(n,t,e,i,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let h=Ps(Ps(t[0],e[0],l),i[0],u),f=Ps(Ps(t[1],e[1],l),i[1],u),d=Ps(Ps(t[2],e[2],l),i[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[h,f,d]};for(let l=0;l<o.length-1;l++){let u=o[l],h=o[l+1];for(let f=0;f<a;f++){let d=f/a,m=(f+1)/a,y=[c(d,u),c(m,u),c(m,h)];h<1&&y.push(c(d,h)),n.push([Xg(y),r[l]])}}}function f2(n){let t=[3,43,0];n.push([fn([3,4,0],t,.9),"#c6a983"],[fn([3,11,0],[-25,10,-13],.6),"#c6a983"],[fn([28,5,0],t,.33),"#d7c5a8"],[fn([-25,5,0],t,.28),"#d7c5a8"],[ke(15,1.9,10,-13,5.4,0),"#a8886e"],[ke(9,1.5,7.5,-13,6.35,0),"#62797b"]),Hg(n,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),Hg(n,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function d2(n){n.push([ke(28,8.5,17,-7,9.1,0),"#f1e5cc"],[ke(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[ke(9,.75,7,-9,15.5,0),"#8aa5a5"],[ke(9,2.2,11,-24,5.9,0),"#bc9472"],[Xg([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[fn([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])n.push([ke(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);n.push([fn([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[fn([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function p2(n){n.push([ke(15,6.1,13,6,7.9,0),"#e4d7ad"],[ke(17,1.4,14,6,11.65,0),"#71968e"],[ke(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[ke(9,3.4,7,-8,6.8,2.6),"#d7a674"],[ke(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[fn([-19,5,-5],[-28,16,-7],.45),"#907459"],[fn([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])n.push([ke(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new Cn(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function m2(n){n.push([Ye(15.9,5.4,9,4.7,3.1,0,-.07),"#52a7a6"],[Ye(11.3,4.9,5.1,4.4,4.6,0,-.33),"#e5ae68"],[Ye(5.1,2.4,3.15,8.7,6.02,0,-.43),"#f5d591"],[Ye(3.4,2.5,3.26,3.25,6.15,0,-.3),"#426575"],[Ye(12.8,3.45,5.9,-4.45,4.76,0,.11),"#40535c"],[ke(5.8,.54,5.4,-11.3,2.88,0),"#7bb3a7"],[fn([2.9,5.7,0],[1.9,9.7,0],.52),"#69685d"],[fn([2.16,9.57,-3.35],[2.16,9.57,3.35],.4),"#53616a"],[Ye(5.6,3.4,5.7,-3.8,6.35,0),"#5c738b"],[Ye(6.06,7.3,5.45,-1.34,10.1,0,-.48),"#db7e59"],[Ye(4.85,5.4,4.54,.02,11.1,0,-.48),"#efb36c"],[Ye(4.84,5.2,4.82,1.37,15.38,0,-.15),"#f5dfaf"],[Ye(2.34,2.04,4.67,2.55,15.37,0,-.12),"#4f637a"],[Ye(.81,1.36,3.45,3.48,15.63,0,-.14),"#8eafb5"]);for(let t of[-1,1]){let e=t*3.01;n.push([Ye(13.7,.75,1.52,-4.45,3.18,t*4.19),"#59646b"],[Ye(6.2,2.32,1.64,-3.75,6.18,e,-.33),"#627a92"],[Ye(4.25,1.52,1.44,-5.88,4.5,t*3.78,.86),"#51657a"],[Ye(3.45,1.11,1.48,-5.58,3.43,t*4.05),"#334951"],[fn([-.87,11.64,t*2.02],[1.79,9.65,e],.79),"#d68868"],[Ye(1.51,1.36,1.34,1.92,9.7,t*3.21),"#c98161"])}}function g2(n,{length:t,beam:e}){let i="#f2e9d8",s="#fff3dc",r="#557788",o="#9fbdbe";n.push([ke(109,6.6,29.1,-4,10.27,0),i],[ke(110.2,1.15,31.3,-4,13.75,0),s],[ke(92,5.1,26.2,-3.5,16.7,0),i],[ke(94.7,1.02,28.1,-3.8,19.42,0),s],[ke(66.2,4.5,21.8,2.8,21.9,0),i],[ke(69.7,.91,24.7,2.9,24.44,0),s],[ro(29,24,26.77,20.72,.86).translate(31,0,0),i],[ro(30.3,25,25.6,23.86,.92).translate(31,0,0),r],[ro(28.9,23,27.12,26.39,.9).translate(31,0,0),s],[ke(23.6,.76,15.3,-24.9,25,0),"#d6b18d"],[ke(19.4,.49,11.1,-24.9,25.51,0),"#81b9b5"],[ke(15.1,.16,8.7,-25.8,25.82,0),"#62a9b4"],[ke(12,.14,1.05,-24.6,25.9,2.82),"#a7d6cc"],[Ye(12,2.13,8.2,15.4,25.76,0),"#dfe6d8"],[fn([27,27,0],[26.5,35.4,0],.58),"#e5e4d8"],[fn([24.1,33,-3.6],[24.1,33,3.6],.41),"#e5e4d8"],[Ye(4.21,3.29,3.84,13.4,27.8,0),"#e9e9d9"],[Ye(3.57,2.86,3.35,9.6,27.12,5.6),"#dedfce"]);for(let a of[-5.9,5.9])n.push([fn([1,24.8,a],[-1.47,34,a],2.51),"#dfa179"],[fn([-.94,32,a],[-1.62,34.62,a],2.55),"#9d5c54"],[Ye(4.4,.46,4.62,-1.65,34.66,a),"#514e59"]);for(let a of[-1,1]){for(let[c,l,u,h]of[[101,10.86,14.67,6.4],[89,17.18,13.17,6.2],[61,22.1,10.97,5.9]])for(let f=-c/2;f<=c/2;f+=h)n.push([ke(3.61,2.05,.26,f,l,a*u),r],[ke(3.6,.33,.3,f,l+.61,a*u),o]);for(let c of[-42,-29,-16,-3,10,23])n.push([ke(9.3,.88,2.81,c,13.1,a*14.61),"#b5af9e"],[Ye(10.53,2.75,3.83,c,13.37,a*15.49),"#dc9164"],[Ye(9.12,1.04,3,c,14.33,a*15.49),"#f0c285"]);for(let c of[-56,-43,-30,-17,-4,9,22,35,48,57]){let l=c/t,u=Ca.findIndex(([p])=>p>=l),[h,f]=Ca[u-1],[d,m]=Ca[u],y=Ps(f,m,(l-h)/(d-h))*e/2;n.push([Ye(2.1,1.74,.62,c,5,a*(y-.08)),"#78969e"])}n.push([fn([-46,19.95,a*13.74],[42,19.95,a*13.74],.4),o],[fn([-27,24.95,a*11.67],[26,24.95,a*11.67],.34),o],[fn([49,8.13,a*15.2],[67,8.13,a*5.1],.43),s])}}function y2(n,t){let{id:e,length:i,beam:s,paint:r,deck:o}=n,a=new se;a.name=n.name;let c=e==="jet-ski"?1.76:e==="cruise-ship"?6.1:3.7,u=[[ro(i,s,c,e==="jet-ski"?-1.32:e==="cruise-ship"?-4.92:-2.5),r],[ro(i,s,c+.82,c-.15,1.018),"#f4e4c9"],[ro(i*.92,s,c+1.05,c+.74,.83),o]];return e==="sailboat"?f2(u):e==="cabin"?d2(u):e==="jet-ski"?m2(u):e==="cruise-ship"?g2(u,n):p2(u),a.add(new ce(h2(u),t)),a}var Is=12,x2=new $t("#def5e9");function b2(n,t){let i=Is*3*2,s=new he,r=new Te(new Float32Array(i*3),3).setUsage(kn),o=new Float32Array(i*4),a=[];for(let h=0;h<3;h++)for(let f=0;f<Is;f++){let d=(h*Is+f)*2,m=f/(Is-1),y=Math.pow(Math.sin((.1+.9*m)*Math.PI),1.15)*(1-.4*m);for(let p=0;p<2;p++)x2.toArray(o,(d+p)*4),o[(d+p)*4+3]=n.wake*y*(h===1?.22:.76);f<Is-1&&a.push(d,d+2,d+1,d+1,d+2,d+3)}s.setAttribute("position",r),s.setAttribute("color",new Te(o,4)),s.setIndex(a);let c=new Ne({vertexColors:!0,side:Qe,transparent:!0,depthWrite:!1,opacity:.82}),l=new ce(s,c);l.name=n.name+" wake",l.frustumCulled=!1;function u({angle:h},f,d=n){let y=(n.wakeSeconds??(n.id==="cabin"?4.1:6))*Ia/d.period;for(let p=0;p<Is;p++){let g=p/(Is-1),x=h-y*g,v=Vg(d,x),{x:b,z:_}=d.point(x),S=Math.cos(v),C=Math.sin(v),M=n.length*.48,A=b-S*M,D=_+C*M;for(let N=0;N<3;N++){let O=(N-1)*n.beam*(.19+g*.62),B=(N===1?1.85:.62)*(1+g*.55);for(let L=0;L<2;L++){let k=O+(L?B:-B);r.setXYZ((N*Is+p)*2+L,A+C*k,t+.14,D+S*k)}}}r.needsUpdate=!0,c.opacity=f?.44:.82}return{mesh:l,update:u}}function qg(n){let t=new se;t.name="Coastal boats";let e=new Xe({vertexColors:!0,side:Qe,roughness:.73}),i=Gg(n),s=l2(n,i),r=new Re(1.35,8,6),o=["#ff896b","#8bf0b4","#fff1c4"].map(d=>new Ne({color:d,toneMapped:!1})),a=i.map(d=>{let m=y2(d,e),y=b2(d,n.y),p;if(d.id==="cabin"||d.id==="fishing"){p=new se,p.name=`${d.name} running lights`;for(let[g,x]of[[.33,6.5,-.27],[.33,6.5,.27],[-.36,6.7,0]].entries()){let v=new ce(r,o[g]);v.position.set(x[0]*d.length,x[1],x[2]*d.beam),p.add(v)}m.add(p)}return t.add(y.mesh,m),{route:d,hull:m,wake:y,lights:p}}),c=0,l,u=!1;function h(d,{reduceMotion:m=!1,night:y=!1,condition:p,transientTelemetry:g=!1,activity:x}={}){if(u)return;let v=Number.isFinite(d)?d:void 0;!g&&!m&&v!==void 0&&l!==void 0&&(c+=pu(v-l,0,.25)),l=g?void 0:v;let b=g?m?0:v??0:c,_=y||x==="evening"||x==="overnight",S=_&&!m?s(b,x):null;for(let{route:C,hull:M,wake:A,lights:D}of a){let N=!_||S?.route.id===C.id;if(M.visible=N,A.mesh.visible=N,D&&(D.visible=_&&N),!N)continue;let O=S?.route??C,B=u2(O,S?.elapsed??b,{condition:p});M.position.set(B.x,n.y+B.heave,B.z),M.rotation.set(B.roll,B.yaw,B.pitch,"YXZ"),A.update(B,_,O)}}function f(){if(!u){u=!0;for(let{hull:d,wake:m}of a)d.children[0].geometry.dispose(),m.mesh.geometry.dispose(),m.mesh.material.dispose();e.dispose(),r.dispose();for(let d of o)d.dispose();t.clear()}}return h(0),{root:t,update:h,dispose:f}}var v2=26,_2=39,M2=2.25,mu=2*Math.PI,S2=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function oo(n,t){let e=n.findIndex(r=>r.x>=t);if(e<1)return n[e===0?0:n.length-1].z;let i=n[e-1],s=n[e];return oe.lerp(i.z,s.z,(t-i.x)/(s.x-i.x))}function w2(n,t){let{shoreline:e,focusX:i,y:s}=n??{},r=t?.farZ;if(![i,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,h){let f=l-u,d=l+u,m=e.filter(S=>S.x>f&&S.x<d).map(S=>S.z),y=Math.max(oo(e,f),oo(e,d),...m)+v2,p=r-_2;if(p-y<19)return null;let g=Math.min(h,(p-y)/2),x=(p+y)/2,v=oo(e,l)+22,b=oe.clamp((r+.4-x)/(r+.4-v),0,1),_=s-.77+b*.43;return{x:l,y:_,z:x,halfWidth:u,halfDepth:g}}let a=o(i-72,46,18),c=o(i+68,27,15);return a||c?{court:a,castle:c}:null}function Yg(n,t=0,e=!1){let i=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(n.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=n.court,h=i/M2,f=h%1,d=Math.floor(h)%2?1:-1,m=Math.sin(Math.PI*f),y=u-16,p=Math.min(3.3,l*.22);r={x:o+d*y*(1-2*f),y:a+20.9+m*15.7,z:c+Math.sin(mu*f)*p,rotation:i*2.6,ground:a};for(let g of[-1,1]){let v=1-Math.min(1,(g!==d?1-f:f)/.24),b=e?.32:v*v;s.push({kind:"player",style:g<0?0:1,scale:1,yaw:-g*Math.PI/2,x:o+g*(y+6-b*2),y:a+b*1.65,ground:a,z:c+g*p*(.65+m*.35),reach:b,swing:Math.sin(i*3.15+g*.9)*.42})}}if(n.castle){let{x:o,y:a,z:c}=n.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(i*4.8),swing:e?0:Math.cos(i*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(i*2.5+.9),swing:e?0:Math.cos(i*2.5+.9)*.35})}return{actors:s,ball:r}}function E2(n,t,e,i,s){let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new $t(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Te(a,3)),r.translate(e,i,s)}function gu(n,t){let e=[],i=(c,l,u,h,f)=>e.push(E2(c,l,u,h,f));t({add:i,box:(c,l,u,h,f,d,m)=>i(new Ae(c,l,u),h,f,d,m),cylinder:(c,l,u,h,f,d,m)=>i(new We(c,l,u,12),h,f,d,m)});let o=Xn(e);for(let c of e)c.dispose();let a=new Xe({vertexColors:!0,roughness:.86});n.add(new ce(o,a))}function T2({x:n,y:t,z:e,halfWidth:i,halfDepth:s}){let r=new se;r.name="beach-volleyball-court",r.position.set(n,t,e);let o=s-1;return gu(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",h="#f4e4bb";for(let f of[-1,1])a(i*2,.1,.56,l,0,.14,f*s),a(.56,.1,s*2,l,f*i,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,f*o),c(.93,.93,1.1,l,0,18.9,f*o),c(.85,.85,.76,h,0,20.48,f*o),a(.76,.54,o*2,h,0,f<0?10.1:19.5,0);for(let f=1;f<5;f++)a(.23,.23,o*2,u,0,10.2+f*1.83,0);for(let f=1;f<12;f++)a(.22,9.25,.24,u,0,14.8,o*(f/6-1))}),r}function A2({x:n,y:t,z:e}){let i=new se;return i.name="beach-sandcastle",i.position.set(n,t,e),gu(i,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new Re(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new Re(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let h of[-1,1]){let f=h*6.15;o(2.44,3.35,7.9,a,f,4.05,-.8),o(2.66,2.52,1.03,c,f,8.03,-.8);for(let[d,m]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,f+d,8.99,-.8+m);r(1.07,.94,.3,l,f,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new he;u.setAttribute("position",new jt([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new Cn(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new Ae(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new Re(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),i}function R2(){let n=new Re(3.25,24,12),t=n.toNonIndexed();n.dispose();let e=t.attributes.position,i=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new $t(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=h=>(e[h](o)+e[h](o+1)+e[h](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/mu*i.length)%i.length,u=Math.abs(a("getY"))>2.85?i[1]:i[l];for(let h=0;h<3;h++)u.toArray(s,(o+h)*3)}t.setAttribute("color",new Te(s,3));let r=new ce(t,new Xe({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function Sf(n,t){let{skin:e,hair:i,shirt:s,shorts:r,trim:o,style:a}=S2[n.style],c=n.kind==="beachgoer",l=n.kind==="surfer",u=n.kind==="builder"||c,h=c?9.25:u?7.8:l?10.7:12.2,f=h+(c?5.9:u?5.8:6.1),d=l?n.swing*.95:u?n.reach*1.15+.65:0,m=l?n.swing*.22:c?.11:u?.24:0;t(s,0,h,d*.43,3.72,4.1,2.85,m),t(r,0,h-3.4,0,3.34,1.65,2.8),t(o,0,h-1.95,2.45,3.03,.48,.59);for(let y of[-1,1]){if(l){t(r,y*2.45,5.35,1.26,1.58,2.66,1.49,.67,y*.4),t(e,y*3.76,2.93,.86,1.25,2.45,1.16,-.31,y*.17),t(e,y*4.13,1.01,.5,1.64,.73,1.27,0,y*.07);let p=h+1.2+y*n.swing*1.65;t(e,y*5.26,p,-.1,1.05,3.35,1.06,.22,-y*(1.08+y*n.swing*.28)),t(e,y*8.07,p+.43,.29,1.36,.96,1.02)}else if(c){let p=y<0?n.reach:.23;t(r,y*1.72,5,2.2,1.55,2.7,1.48,1.27),t(e,y*1.82,2.75,4.13,1.17,2.57,1.14,-.16),t(o,y*1.93,.92,5.06,1.25,.72,1.74),t(e,y*3.98,h-.3+p,1.15,1.02,2.45,1.05,-.62-p*.37),t(e,y*3.5,h-1.2+p*1.8,3.17,1.11,1.14,1.13),y<0&&t("#e7c8a1",-3.5,h-.18+p*1.8,3.82,.86,1.19,.86)}else{let p=u?.8:y*n.swing;t(r,y*1.65,u?3.5:6.4,p,1.55,2.3,1.49,u?.8:0),t(e,y*1.68,u?1.72:3.1,u?2.08:p,1.16,2.13,1.16),t(e,y*1.75,1.02,.88+p,1.28,.76,2.08);let g=u?h+.45:h+1.5+n.reach*2.1,x=u?2.4+n.reach*1.72:n.reach*.8,v=u?-.78-n.reach*.27:.12+n.reach*.62;t(e,y*(4.13-n.reach*.46),g,x,1.04,3.7,1.05,v,y*(u?.1:.24+n.reach*.55)),t(e,y*(4.1-n.reach*.53),g+(u?-1.65:n.reach*5.55-2.92),x+(u?2.7:n.reach*1.9),1.14,1.15,1.13)}t(e,y*3.48,f,d+.4,.84,.99,.78),t("#493a41",y*1.46,f+.38,d+3.41,.43,.47,.34),t("#c98878",y*2.22,f-.45,d+3.05,.54,.27,.26)}t(i,0,f+.64,d-.53,3.81,4.12,3.64),t(e,0,f,d+.72,3.25,3.29,2.89),t(e,0,f-.22,d+3.59,.53,.54,.59),t("#9b6b66",0,f-1.19,d+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,f+3.48,d+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,f+2.78,d+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(i,-.99,f+2.39,d+1.53,2.47,1.23,2.37),t(a==="bun"?i:o,2,f+3.23,d-1.66,1.41,1.43,1.39))}function wf(n,t,e,i,s=!1){let r=0;for(let h of t)Sf(h,()=>r++);let o=new ni(new Re(1,10,7),new Xe({color:"#fff",roughness:.76}),r);o.name=e,o.frustumCulled=!1,o.instanceMatrix.setUsage(kn),n.add(o);let a=i?new ni(new An(1,20).rotateX(-Math.PI/2),new Ne({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),t.length+Number(s)):null;a&&(a.name=i,a.frustumCulled=!1,a.instanceMatrix.setUsage(kn),n.add(a));let c=0,l=new Map;for(let h of t)Sf(h,f=>{l.has(f)||l.set(f,new $t(f)),o.setColorAt(c++,l.get(f))});let u=new Ve;return function(f,d){let m=0,y=0,p=(g,x,v,b,_)=>{a&&(u.position.set(g,x+.16,v),u.rotation.set(0,0,0),u.scale.set(b,1,_),u.updateMatrix(),a.setMatrixAt(y++,u.matrix))};for(let g of f){let{scale:x,yaw:v}=g,b=Math.cos(v),_=Math.sin(v);Sf(g,(S,C,M,A,D,N,O,B=0,L=0)=>{u.position.set(g.x+x*(C*b+A*_),g.y+M*x,g.z+x*(-C*_+A*b)),u.rotation.set(0,v,0),u.rotateX(B),u.rotateZ(L),u.scale.set(x*D,x*N,x*O),u.updateMatrix(),o.setMatrixAt(m++,u.matrix)}),p(g.x,g.ground,g.z,5.25*x,4.47*x)}d&&p(d.x,d.ground,d.z,2.82,2.52),o.instanceMatrix.needsUpdate=!0,a&&(a.instanceMatrix.needsUpdate=!0)}}function C2(n){let t=new se;t.name="beach-day-activities";let e=n.court?T2(n.court):null,i=n.castle?A2(n.castle):null,s=e?R2():null;e&&t.add(e,s),i&&t.add(i);let r=wf(t,Yg(n).actors,"beach-recreation-figures","beach-play-contact-shadows",!!s);return{group:t,render(o,a){let c=Yg(n,o,a);if(r(c.actors,c.ball),!s)return;let{x:l,y:u,z:h,rotation:f}=c.ball;s.position.set(l,u,h),s.rotation.set(.25,f*.59,f)}}}function I2(n){let t=new se;t.name=`beach-surfboard-${n+1}`;let e=n?"#e5ac55":"#d57565",i=n?"#4d8f92":"#f3e5be";return gu(t,({add:s})=>{let r=(o,a,c,l,u,h,f)=>s(new Re(1,16,8).scale(l,u,h),f,o,a,c);r(0,.22,0,12.9,.78,3.61,"#e9dfc8"),r(.26,.63,0,12.68,.69,3.38,e),r(.45,1.23,0,10.08,.125,.91,i),r(-4.51,1.17,0,2.67,.14,2.47,n?"#e8dfbe":"#759f9d");for(let o=0;o<5;o++){let a=o/4;r(-9.8-a*15.1,-.39,(o%2?-1:1)*(2.6-a*1.58),2.86-a*1.1,.095,.92-a*.5,o%2?"#a4d7cc":"#e5f3de")}r(-17.4,-.44,.24,6.5,.082,.38,"#c4e5d8")}),t}function P2(n){let t=new se;t.name="beach-morning-surfers";let{shoreline:e,focusX:i,y:s,farZ:r}=n,o=[{offset:-82,radius:37,depth:49,drift:13,period:20,phase:.55,style:0,scale:.9},{offset:75,radius:34,depth:58,drift:14,period:22,phase:2.17,style:1,scale:.91}].filter(({offset:u,radius:h,depth:f,drift:d})=>{let m=i+u,y=m-h-26,p=m+h+26;return y>=e[0].x&&p<=e.at(-1).x&&Math.min(oo(e,y),oo(e,p),...e.filter(g=>g.x>y&&g.x<p).map(g=>g.z))-f-d-26>r});if(!o.length)return{group:t,render(){}};let a=o.map((u,h)=>I2(h));t.add(...a);function c(u){return o.map(({offset:h,radius:f,depth:d,drift:m,period:y,phase:p,style:g,scale:x})=>{let v=u%y/y*mu+p,b=i+h+f*Math.sin(v),_=oo(e,b)-d+m*Math.cos(v),S=Math.atan2(m*Math.sin(v),f*Math.cos(v)),C=Math.sin(v*2+p);return{kind:"surfer",style:g,scale:x,yaw:S,x:b,z:_,y:s+1.7+C*.3,swing:Math.cos(v*2+p)*.5,swell:C}})}let l=wf(t,c(0),"beach-surfers");return{group:t,render(u){let h=c(u);for(let[f,{x:d,y:m,z:y,yaw:p,swell:g}]of h.entries())a[f].position.set(d,m-1.24,y),a[f].rotation.set(0,p,0),a[f].rotateX(g*.075),a[f].rotateZ(-g*.027);l(h)}}}var Pa=["#e7713c","#ef9251","#e97e44","#f2a954","#f7b35d","#ffcf79","#ffde91","#ffb34e","#fbc86e","#ffd281","#ffbd72"];function L2(n,t){let e=new se;return e.name=`beach-firepit-${t+1}`,e.position.set(n.x,n.y,n.z),gu(e,({add:i,box:s})=>{i(new Re(1,14,6).scale(7.15,.51,6.72),"#80605a",0,.14,0);for(let r=0;r<11;r++){let o=r*mu/11,a=["#ab8b78","#a39288","#bb9c84"][r%3];i(new Bo(1).scale(1.91,1.25,1.57).rotateY(o),a,Math.cos(o)*6.82,1.05,Math.sin(o)*6.19)}for(let[r,o,a]of[[.43,1.33,"#9b6147"],[1.42,2.1,"#79473c"],[-.89,2.58,"#a36a4a"]])i(new We(1.15,1.38,9.1,7).rotateZ(Math.PI/2).rotateY(r),a,0,o,0);for(let[r,o]of[[-1,1.25],[1,-1.25]])i(new We(2.2,2.61,13.9,8).rotateX(Math.PI/2),"#a67e60",r*16.5,2.48,o),i(new We(1.61,1.77,.15,8).rotateX(Math.PI/2),"#dab18b",r*16.5,2.48,o+7.01),s(4.84,.83,5.8,t?"#c98673":"#7ea8a1",r*16.23,4.68,o)}),e}function N2(n){let t=new se;t.name="beach-evening-bonfires";let e=[n.court??n.castle];t.add(...e.map(L2));function i(l){let{x:u,y:h,z:f}=e[0];return[{kind:"beachgoer",style:0,scale:.95,yaw:Math.PI/2,x:u-16.23,y:h,ground:h,z:f+1.25,reach:.36+Math.sin(l*1.42-1.35)*.27}]}let s=wf(t,i(0),"beach-bonfire-figures","beach-bonfire-contact-shadows"),r=new ni(new Re(1,9,7),new Ne({toneMapped:!1}),e.length*Pa.length);r.name="beach-bonfire-flames",r.frustumCulled=!1,r.instanceMatrix.setUsage(kn);for(let l=0;l<r.count;l++)r.setColorAt(l,new $t(Pa[l%Pa.length]));let o=new Be({uniforms:{warmth:{value:.86},tint:{value:new $t("#ffad5f")}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),a=new ni(new An(1,28).rotateX(-Math.PI/2),o,e.length);a.name="beach-bonfire-sand-glow",a.frustumCulled=!1;let c=new Ve;for(let[l,{x:u,y:h,z:f,halfDepth:d}]of e.entries())c.position.set(u,h+.19,f),c.scale.set(23,1,Math.min(19,d+1)),c.updateMatrix(),a.setMatrixAt(l,c.matrix);return a.instanceMatrix.needsUpdate=!0,t.add(a,r),{group:t,render(l){s(i(l));for(let[u,{x:h,y:f,z:d}]of e.entries()){let m=u*1.71;for(let y=0;y<Pa.length;y++){let p=l*4.5+y*2.39+m,g=Math.sin(p)*.5+.5,x=y*2.39+m;if(y<7){let v=y<5?2.05:.78,b=y<5?3.18+g*1.58:2.78+g*1.09;c.position.set(h+Math.cos(x)*v,f+b+1.05,d+Math.sin(x)*v),c.rotation.set(Math.sin(x)*.2,x,Math.cos(x)*.24),c.scale.set(1.21+g*.54,b,1.18+g*.46)}else{let v=(l*(.32+y*.019)+y*.234+m)%1,b=.79*(1-v)+.13;c.position.set(h+Math.cos(x+v)*(2.45+v*6.2),f+8.8+v*15,d+Math.sin(x+v)*(1.74+v*4.4)),c.rotation.set(0,0,.2),c.scale.set(b,b*1.33,b)}c.updateMatrix(),r.setMatrixAt(u*Pa.length+y,c.matrix)}}r.instanceMatrix.needsUpdate=!0,o.uniforms.warmth.value=.83+Math.sin(l*5.25)*.11}}}function $g(n,t){let e=new se;e.name="beach-play";let i=w2(n,t);if(!i)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s={morning:P2(n),day:C2(i),evening:N2(i)};e.add(...Object.values(s).map(({group:f})=>f));let r,o=0,a,c,l;function u(f,{reduceMotion:d=!1,transientTelemetry:m=!1,activity:y="day",night:p=!1}={}){let g=y==="overnight"?y:p?"evening":Object.hasOwn(s,y)?y:"day";if(!m){let v=Number.isFinite(r)&&Number.isFinite(f)?oe.clamp(f-r,0,.25):0;d||(o+=v),r=f}let x=d?.96:m?Number.isFinite(f)?Math.max(0,f):0:o;if(!(x===a&&d===c&&g===l)){if(a=x,c=d,g!==l){for(let[v,{group:b}]of Object.entries(s))b.visible=g===v;l=g}s[g]?.render(x,d)}}u(0);function h(){e.traverse(f=>{f.isMesh&&(f.isInstancedMesh&&f.dispose(),f.geometry.dispose(),f.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:u,dispose:h}}var D2=new G(0,-1,0),F2=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],Ef=.01;function Zg(n){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(n)}function Kg(n){return!n.isMesh||!n.geometry?!1:(Array.isArray(n.material)?n.material:[n.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function U2(n){n.updateWorldMatrix(!0,!0);let t=[];n.traverseVisible(a=>{if(!Kg(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let i=new Ue;for(let a of t)a.min.y<=e+Ef&&i.union(a);let s=i.getCenter(new G),r=i.getSize(new G),o=e-n.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-n.position.x,centerZ:s.z-n.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function k2(n,t){let{type:e}=n;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"||e==="diningTable"?[44.65,46.45]:e.includes("dining-set")||e.includes("dining-table-")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function O2(n,t){let[e,i]=k2(n.item,t);if(![e,i,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new Ue().setFromObject(s);return r.isEmpty()?null:{placement:n,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:i*s.scale.y}}function jg(n,t){let e=t?.[n.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:n}function Jg(n,t){return n.intersectObject(t,!0).find(e=>Kg(e.object))}function Qg(n,{low:t,high:e}){return n?.face?.normal.y>=.92&&n.point.y>=t&&n.point.y<=e}function B2(n,t,e,i,s,r){let o=t.x+e.centerX-i.x,a=t.z+e.centerZ-i.z,{bounds:c,probe:l,rootY:u}=n;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let h=-1/0;for(let[f,d]of F2){r.set(o+f*e.radiusX,c.max.y+1,a+d*e.radiusZ),s.set(r,D2);let m=Jg(s,l);if(!Qg(m,n))return null;h=Math.max(h,m.point.y)}return u+h}function t0(n,t){let e=[],i=[];for(let c of n){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=Zg(c.item);if(u==="surface"){let h=O2(c,l);h&&e.push(h)}else if(u==="tabletop"){let h=U2(l.root);h&&i.push({placement:c,foot:h})}}let s=new _s,r=new G;function o(c){let l=new Map;for(let{placement:u,foot:h}of i){let f=jg(u,c),d=null,m=u.baseY,y=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let g=jg(p.placement,c),x=B2(p,f,h,g,s,r);if(x===null||x<=u.baseY||x<m-Ef)continue;let v=p.placement.item.id,b=Math.hypot(f.x-g.x,f.z-g.z);Math.abs(x-m)<Ef&&(b>y||b===y&&v>d)||(d=v,m=x,y=b)}l.set(u.item.id,{y:m-h.bottom,supportId:d})}return l}function a(c,l){if(Zg({type:c})!=="tabletop")return null;let u=new _s(void 0,void 0,l.near,l.far),h=new G,f;for(let d of e){let{x:m,z:y}=d.placement;h.copy(l.ray.origin).sub(r.set(m,d.rootY,y)),u.set(h,l.ray.direction);let p=Jg(u,d.probe);p&&(!f||p.distance<f.hit.distance||p.distance===f.hit.distance&&d.placement.item.id<f.surface.placement.item.id)&&(f={hit:p,surface:d,x:m,z:y})}return!f||!Qg(f.hit,f.surface)?null:{x:f.x+f.hit.point.x,y:f.z+f.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:yu,sin:nr,cos:xu}=Math,zi=yu*2,z2=new G(0,1,0),er=["#86684f","#9a7c5b","#735844"],Tf=["#92745a","#ac8f69","#785c49"],Af=["#537759","#6b8a55","#849a58","#a0ab63"],Rf=["#3e6251","#4d7056","#61815d","#789365"],Cf=["#4a6653","#567552","#6b8659","#819863"],H2=["#517553","#64845a","#799660","#98a869"],G2=["#617d69","#72917a","#8ea17e","#a7b08a"],V2=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],e0=240,W2=new Set(["windy","windy-variant"]),La=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function n0(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Bn(n,t,e){return[xu(n)*t,e,nr(n)*t]}function Sn(n,[t,e,i]){return[n[0]+t,n[1]+e,n[2]+i]}function X2(n,t,e,i,s){let r=(c,l)=>n.add(c,l,t,e,i);function o(c,l,u,h,f,d=7){let m=new G(...l),y=new G(...u),p=y.clone().sub(m),g=new gn().setFromUnitVectors(z2,p.clone().normalize()),x=new We(f,h,p.length(),d),v=m.lerp(y,.5);r(x.applyQuaternion(g).translate(v.x,v.y,v.z),c)}function a(c,l,u,h=.13,f=6){let d=new Re(1,9,f),m=d.getAttribute("position"),y=s()*zi;for(let p=0;p<m.count;p++){let g=m.getX(p),x=m.getY(p),v=m.getZ(p),b=1+h*(nr(g*5.8+x*3.2+v*2.1+y)*.7+xu(v*7.8-x*2.2+y)*.3);m.setXYZ(p,g*b*u[0],x*b*u[1],v*b*u[2])}d.computeVertexNormals(),r(d.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function If(n,t,e,i,s,r,o){let a=[xu(e),nr(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=n.positions.length/3;for(let[h,[f,d]]of l.entries()){let m=s*d,y=t[0]+f*i*a[0],p=t[1]+nr(f*yu)*r-o*f*f,g=t[2]+f*i*a[1];for(let v of[-1,0,1])n.positions.push(y+v*m*c[0],p+(v===0?m*.29:0),g+v*m*c[1]),n.uvs.push((v+1)*.5,f);if(h===0)continue;let x=u+(h-1)*3;for(let v of[0,1]){let b=x+v;n.indices.push(b,b+1,b+3,b+1,b+4,b+3)}}}function q2(n,t,e){let i=new he;i.setAttribute("position",new jt(e.positions,3)),i.setAttribute("uv",new jt(e.uvs,2)),i.setIndex(e.indices),i.computeVertexNormals(),n(i,t)}function Y2(n,t,e,i){let{draw:s,branch:r,crown:o,random:a}=n,c=t*(i?.063:.125),l=y=>Bn(e,c*y*y,t*y*(i?.85:.86)),u=y=>t*(i?.029:.024)*(1-.53*y),h=i?5:6;for(let y=0;y<h;y++){let p=y/h,g=(y+1)/h;r(Tf[0],l(p),l(g),u(p),u(g),9)}for(let y=1;y<=13;y++){let p=y*.067;r(Tf[y%3?1:2],l(p-.0045),l(p+.0045),u(p)*1.04,u(p)*1.04,9)}let f=l(1);o(Af[0],f,[t*.045,t*.036,t*.048],.08,5);for(let y=0;y<4;y++)o(Tf[2],Sn(f,Bn(e+y*zi/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let d=Af.map(()=>({positions:[],uvs:[],indices:[]})),m=i?9:10;for(let y=0;y<m;y++){let p=e+y*zi/m+(a()-.5)*.18,g=y%3===0,x=t*((g?.35:.29)+(a()-.5)*.07),v=t*(g?.026:.077),b=t*(g?.072:.025);if(If(d[(y+1)%4],f,p,x,t*.012,v,b),i){let _=Sn(f,Bn(p,x*.43,v*.7));for(let S=-3;S<=3;S++)If(d[(y+S+4)%4],_,p+S*.19,x*(.58-Math.abs(S)*.055),t*(.016-Math.abs(S)*.0018),v*.32,b*.84)}else for(let _=0;_<7;_++){let S=.19+_*.104,C=Sn(f,Bn(p,x*S,nr(S*yu)*v-b*S*S));for(let M of[-1,1])If(d[(y+_+(M>0?1:0))%4],C,p+M*(.83-S*.37),t*(.095-S*.048),t*(.0095-S*.003),t*.014,t*.025)}}for(let[y,p]of d.entries())q2(s,Af[y],p)}function Pf(n,t,e,i,s=.84){let{branch:r}=n,o=a=>Bn(e,t*i*(a*a+.16*nr(yu*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(er[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*zi/4;r(er[2],Bn(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(er[1],Bn(c,t*.039,t*.025),Sn(o(.36),Bn(c,t*.031,0)),t*.004,t*.002,4)}return o}function $2(n,t,e){let{crown:i,random:s}=n,r=Pf(n,t,e,.018,.94);i(Rf[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let h=0;h<u;h++){let f=e+h*zi/u+o*2.5,d=Sn(r(o),Bn(f,t*a,t*((s()-.5)*.035)));i(Rf[(h+u)%4],d,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}i(Rf[2],Sn(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function Z2(n,t,e){let{branch:i,crown:s,random:r}=n,o=Pf(n,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let h=e+u*zi/l+a*7+(r()-.5)*.22,f=o(a),d=Sn(f,Bn(h,t*c,t*(.02+r()*.028)));i(er[1],f,d,t*.017,t*.0037,6);let m=Sn(d,[0,t*.029,0]);s(Cf[u%3],m,[t*c*.46,t*.054,t*c*.45],.21,5),s(Cf[(u+2)%4],Sn(m,Bn(h-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(Cf[3],Sn(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function j2(n,t,e,i){let{branch:s,crown:r,random:o}=n,a=i==="olive",c=i==="jacaranda",l=a?G2:c?V2:H2,u=Pf(n,t,e,a?.1:.034,a?.78:.84),h=a?5:6;for(let d=0;d<h;d++){let m=e+d*zi/h+(o()-.5)*.33,y=u(.46+o()*.12),p=t*(.16+o()*.07),g=Sn(y,Bn(m,t*.12,p*.58)),x=Sn(y,Bn(m+.16,t*(.19+o()*.052),p));s(er[1],y,g,t*.026,t*.016,7),s(er[0],g,x,t*.0165,t*.0045,6);let v=t*(.092+o()*.03);r(l[d%2],Sn(x,[0,t*.024,0]),[v,t*(a?.064:.104),v*.87],.21,5);for(let b of[-1,1]){let _=Sn(x,Bn(m+b*1.18,t*.055,t*.05));s(er[0],g,_,t*.012,t*.003,5);let S=t*(.063+o()*.027);r(l[c?2+(d+(b>0?1:0))%3:1+d%3],Sn(_,[0,t*.022,0]),[S,S*(a?.63:.88),S*.91],.21,5)}}let f=Sn(u(1),[0,t*.023,0]);r(l[2],f,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),Sn(f,Bn(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function i0(n,t,e){let i=Math.imul(Math.round(n*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:i}function s0(n,t){return Number.isFinite(t)?oe.clamp(t,32,200):La[n].height}function K2(n,{kind:t,x:e,z:i,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn(La,t)||![e,i,s].every(Number.isFinite))return!1;let a=s0(t,r),c=n0(i0(e,i,o)),l=c()*zi,u=X2(n,e,s,i,c);return t==="fan-palm"||t==="date-palm"?Y2(u,a,l,t==="fan-palm"):t==="cypress"?$2(u,a,l):t==="shore-pine"?Z2(u,a,l):j2(u,a,l,t),!0}function J2(n=0,t={}){let{windSpeed:e,windBearing:i,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?oe.clamp(e,0,22):W2.has(r)?6:0,a=Number.isFinite(i)?(i%360+360)%360:270,c=oe.degToRad(a),l=Number.isFinite(n)?Math.max(0,n)%e0:0;return{x:-nr(c),z:xu(c),phase:zi*l/e0,strength:s?0:o*.0048}}var Q2=`
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
`;function r0(n){let t=new Set,e={roomcraftTreeDirection:{value:new Ft(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function i(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${Q2}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:h}=o;if(!Object.hasOwn(La,a))return!1;let f=s0(a,c),d=n0(i0(l,u,h))()*zi;return K2({add(m,y,...p){let g=m.getAttribute("position"),x=new Float32Array(g.count*3);for(let v=0;v<g.count;v++)x[v*3]=g.getY(v)/f,x[v*3+1]=f,x[v*3+2]=d;m.setAttribute("roomcraftTreeWind",new Te(x,3)),i(n.material(y)),n.add(m,y,...p)}},o)}function r(o,a){let c=J2(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var ao=Math.PI/180,Ff=14,g0=56,tE=21,Jn=-111,ns=-108,Uf=14,eE=28,Na=28,y0=7,o0={minX:0,maxX:1536,minZ:0,maxZ:1024},Lf={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},Nf={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},nE=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),iE=new Set(["snowy","snowy-rainy"]),a0={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42,artwork:38,mirror:39};function Mu(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function _u(n,t,e){let i=!1;for(let s=0,r=n.points.length-1;s<n.points.length;r=s++){let o=n.points[s],a=n.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(i=!i)}return i}function x0(n,t,e,i=null){let s=null;for(let r of n){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||i!==null&&Math.abs(Math.cos(i-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function b0(n,t,e,i){let s=n.some(o=>_u(o,e-t.dz*23,i+t.dx*23));return n.some(o=>_u(o,e+t.dz*23,i-t.dx*23))&&!s?-1:1}function sE(n,t,e){let i=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e.type],s=i?.artFamily==="paddedPanel",r=a0[e.type]??(i?.mount==="wall"?s?0:a0.wallSconce:void 0);if(r===void 0)return null;let o=x0(t,e.x,e.y);if(!o||o.distance>38)return null;let{wall:a,centerX:c,centerZ:l}=o,u=(e.x-c)*-a.dz+(e.y-l)*a.dx,h=Math.abs(u)>4?Math.sign(u):b0(n,a,c,l),f=(Ff/2+4+(s?e.h*.3:0))*h;return{x:c-a.dz*f,z:l+a.dx*f,angle:a.angle+(h<0?Math.PI:0),mountY:Math.min(r,g0-8)}}function c0(n){if(![n?.x1,n?.y1,n?.x2,n?.y2].every(Number.isFinite))return null;let t=n.x2-n.x1,e=n.y2-n.y1,i=Math.hypot(t,e);return i<1?null:{...n,dx:t/i,dz:e/i,length:i,angle:Math.atan2(e,t),openings:[]}}function l0(n,[t,e,i,s]){return n.x1===t&&n.y1===e&&n.x2===i&&n.y2===s||n.x1===i&&n.y1===s&&n.x2===t&&n.y2===e}function rE(n,[t,e,i,s]){return t===i&&n.x1===t&&n.x2===t?Math.min(n.y1,n.y2)<=Math.min(e,s)&&Math.max(n.y1,n.y2)>=Math.max(e,s):e===s&&n.y1===e&&n.y2===e?Math.min(n.x1,n.x2)<=Math.min(t,i)&&Math.max(n.x1,n.x2)>=Math.max(t,i):!1}function u0(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function bu(n,t,e){n.minX=Math.min(n.minX,t),n.maxX=Math.max(n.maxX,t),n.minZ=Math.min(n.minZ,e),n.maxZ=Math.max(n.maxZ,e)}function v0(n){return Object.hasOwn(Nf,n.finish)?Nf[n.finish]:Nf.graphite}function _0(n,t,e){let i=t-n.x,s=e-n.z,r=Math.cos(n.angle),o=Math.sin(n.angle);return[i*r+s*o,-i*o+s*r]}function h0(n,t,e){let[i,s]=_0(n,t,e);if(Math.abs(i)>n.item.w/2+5||Math.abs(s)>n.item.h/2+5)return null;let r=oe.clamp(s/n.item.h+.5,0,1);return ns-ns*r}function vu(n,t,e){return _u(n,t,e)?!0:n.points.some((i,s)=>{let r=n.points[(s+1)%n.points.length],o=r.x-i.x,a=r.y-i.y,c=o*o+a*a,l=c?oe.clamp(((t-i.x)*o+(e-i.y)*a)/c,0,1):0;return Math.hypot(t-i.x-l*o,e-i.y-l*a)<=Ff/2})}function oE(n,t,e){let i=(n.x1+n.x2)/2,s=(n.y1+n.y2)/2,r=t.some(h=>vu(h,i,s)),o=t.some(h=>Kr(h)&&vu(h,i,s)&&vu(h,n.x1,n.y1)&&vu(h,n.x2,n.y2)),a=r?0:Jn,c=a;if(!o)for(let h of e){let f=h0(h,n.x1,n.y1),d=h0(h,n.x2,n.y2);if(f!==null&&d!==null){a=f,c=d;break}}let[,l,u]=v0(n);return{...n,base1:a,base2:c,color:n.finish?l:"#896e79",postColor:n.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(n.length/eE)))}}function kf(n){let t=n?.editableReferenceVersion>=8;if(n?.version!==2||!Array.isArray(n.rooms)||!Array.isArray(n.walls)||!Array.isArray(n.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=n.rooms.filter(_=>_?.points?.length>=3&&_.points.every(S=>Number.isFinite(S?.x)&&Number.isFinite(S?.y)));if(!e.length&&(!t||n.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let i=t?e.filter(_=>!Kr(_)):e,s=n.walls.map(c0).filter(Boolean),r=s.filter(_=>_.kind!=="fence"),o=n.items.filter(_=>typeof _?.id=="string"&&typeof _.type=="string"&&[_.x,_.y,_.w,_.h].every(Number.isFinite)&&_.w>0&&_.h>0),a=u0(),c=u0(),l=(_,S)=>bu(a,_,S);for(let _ of e)for(let S of _.points)l(S.x,S.y);for(let _ of s)l(_.x1,_.y1),l(_.x2,_.y2);for(let _ of i)for(let S of _.points)bu(c,S.x,S.y);for(let _ of r)bu(c,_.x1,_.y1),bu(c,_.x2,_.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:o0},h=new Map(r.map(_=>[_.id,_])),f=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(_=>h.has(_))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,h.get("w1").y1+57],[h.get("w2").x1,h.get("w1").y1+57],[h.get("w3").x1,h.get("w3").y1],[h.get("w3").x2,h.get("w3").y2],[u.minX-10,h.get("w4").y2]].map(([_,S])=>({x:_,y:S})),southDeck:[[u.minX-10,h.get("w6").y1],[h.get("w7").x1,h.get("w7").y1],[h.get("w7").x2,h.get("w7").y2],[h.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([_,S])=>({x:_,y:S})),recess:{x1:h.get("w12").x2,x2:h.get("w18").x1,z1:Math.min(h.get("w11").y2,h.get("w12").y2),z2:h.get("w13").y2}}:null,d=r.filter(_=>f?!(_.id==="w3"&&l0(_,[400,408,342,468]))&&!(_.id==="w7"&&l0(_,[248,590,302,651])):!0);if(f){l(f.left,f.stepTop),l(f.deckEdge,f.deckBottom);let{x1:_,x2:S,z1:C}=f.recess;if(S>_){let M=[[_,h.get("w12").y2,_,C],[_,C,S,C]];for(let[A,D]of M.entries()){if(d.some(H=>rE(H,D)))continue;let[N,O,B,L]=D,k=c0({id:`reference-recess-${A}`,x1:N,y1:O,x2:B,y2:L});k&&d.push(k)}}}let m=new Map;for(let _ of o.filter(S=>S.type==="window")){let S=x0(d,_.x,_.y,(_.rotation||0)*ao);if(!S||S.distance>27)continue;let{wall:C,t:M,centerX:A,centerZ:D}=S,N=Math.max(1,M-_.w/2+1),O=Math.min(C.length-1,M+_.w/2-1);if(O-N<14)continue;C.openings.push({start:N,end:O});let B=b0(i,C,A,D),L=C.angle+(B<0?Math.PI:0),k=(N+O)/2;m.set(_.id,{x:C.x1+k*C.dx,z:C.y1+k*C.dz,angle:L,window:{..._,w:O-N+2,rotation:L/ao}})}let y=o.filter(_=>_.type==="garageDoor"),p=o.map(_=>{let S=_.type==="cameraThumbnail"&&y.some(k=>xE(_,k))?Jn:w0(_.type),C=of(_),M=m.get(_.id)??sE(i,d,_);if(C){let k=52;for(let H of m.values()){let W=Math.hypot(H.x-_.x,H.z-_.y);W<k&&(M=H,k=W)}}let A=M?.x??_.x,D=M?.z??_.y,N=M?.angle??(Number.isFinite(_.rotation)?_.rotation*ao:0),O=_.type==="stairs"?1536:300,B=Math.min(O,(Math.abs(Math.cos(N))*_.w+Math.abs(Math.sin(N))*_.h)/2),L=Math.min(O,(Math.abs(Math.sin(N))*_.w+Math.abs(Math.cos(N))*_.h)/2);return l(A-B,D-L),l(A+B,D+L),{item:_,x:A,z:D,baseY:S,angle:N,window:M?.window,mountY:M?.mountY,isBlind:C}});for(let _ of d)_.openings.sort((S,C)=>S.start-C.start||S.end-C.end);let g=p.filter(({item:_})=>_.type==="stairs").map(_=>{let{item:S,x:C,z:M,angle:A}=_,D=Number.isInteger(S.steps)&&S.steps>=2&&S.steps<=40?S.steps:Uf,N=Math.min(46,Math.max(12,S.w*.47)),O=-S.h/2-N;for(let B of[-S.w/2,S.w/2])l(C+B*Math.cos(A)-O*Math.sin(A),M+B*Math.sin(A)+O*Math.cos(A));return{..._,steps:D,apronDepth:N}}),x=s.filter(_=>_.kind==="fence").map(_=>oE(_,e,g)),v=af(e,f,t),b=km(d.map(_=>({..._,palette:v0(_)})),Ff,g0,tE);return Number.isFinite(a.minX)||Object.assign(a,o0),{rooms:e,walls:d,fences:x,stairs:g,placements:p,bounds:a,houseBounds:u,reference:f,floorStructure:v,wallStructure:b,editableStructure:t}}function f0(n,t){for(let[e,[i,s]]of t.slice(0,-1).entries())e===0?n.moveTo(i,-s):n.lineTo(i,-s);return n.closePath(),n}function Of([n,...t]){let e=f0(new ln,n);return e.holes=t.map(i=>f0(new Hs,i)),e}function aE(n,t,e){let i=n.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d");if(!s)return null;let[r,o,a]=t,c=Mu(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let h=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,h,256,32),s.globalAlpha=.48,s.fillRect(0,h,256,1.2);let f=30+u*47%181;s.fillRect(f,h,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let m=c()*256,y=h+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(m,y),s.quadraticCurveTo(m+p/2,y+c()*2-1,m+p,y),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let h=0;h<8;h++)s.globalAlpha=c()*.14,s.fillRect(h*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(h*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new Dr(i);return l.colorSpace=rn,l.wrapS=l.wrapT=ks,l}function Df(n){let t=new Map,e=new Me,i=new gn,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new Or({color:d})),a.get(d));function l(d,m,y,p,g,x=0){i.setFromAxisAngle(r,x),e.compose(s.set(y,p,g),i,o),d.applyMatrix4(e);let v=c(m);t.has(v)||t.set(v,[]),t.get(v).push(d)}function u(d,m,y,p,g,x,v,b=0){d>0&&m>0&&y>0&&l(new Ae(d,m,y),p,g,x,v,b)}function h(d,m,y,p,g,x,v){let b=new Re(1,9,6);b.scale(d,m,y),l(b,p,g,x,v)}function f(){for(let[d,m]of t){let y=Xn(m);if(!y){for(let p of m)n.add(new ce(p,d));continue}n.add(new ce(y,d));for(let p of m)p.dispose()}t.clear()}return{add:l,ball:h,box:u,material:c,finish:f}}function cE(n,t,e,i){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(Lf,r)?r:"oak";if(!s.has(a)){let c=Lf[a],l=aE(i,c,141+Object.keys(Lf).indexOf(a)*977);s.set(a,new Or({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Pi(Of(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),h=l.getAttribute("uv");for(let d=0;d<h.count;d++)h.setXY(d,u.getX(d)/248,u.getZ(d)/248);let f=new ce(l,s.get(a));f.receiveShadow=!0,n.add(f)}}for(let r of e.floorStructure.footprint)d0(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)d0(t,r,Jn-1,-22,"#a18e84",!0)}function lE(n){if(!n.index){let t=n.getAttribute("position").count,e=new Uint32Array(t);for(let i=0;i<t;i++)e[i]=i;n.setIndex(new Te(e,1))}return n}function d0(n,t,e,i,s,r=!1){let o=new pi(Of(t),{depth:i-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<i-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),n.add(lE(o),s,0,e,0)}function uE(n,t){let e=[],i=[],s=[];for(let[[o,a],[c,l]]of n){let u=e.length/3,h=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),i.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,h,t,h,0)}let r=new he;return r.setAttribute("position",new jt(e,3)),r.setAttribute("uv",new jt(s,2)),r.setIndex(i),r.computeVertexNormals(),r}function p0(n,t){let e=new Pi(Of(n));if(e.rotateX(-Math.PI/2),t){let i=e.index.array;for(let s=0;s<i.length;s+=3)[i[s+1],i[s+2]]=[i[s+2],i[s+1]];e.computeVertexNormals()}return e}function hE(n,t){for(let{faces:e,bottom:i,top:s,surface:r}of t.wallStructure){for(let o of e.top)n.add(p0(o,!1),r,0,s,0);for(let o of e.bottom)n.add(p0(o,!0),r,0,i,0);e.sides.length&&n.add(uE(e.sides,s-i),r,0,i,0)}}function fE(n,t){let e=new Set;for(let i of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:h,posts:f,color:d,postColor:m}=i,y=l-c,p=new Ae(Math.hypot(u,y),5,y0);p.rotateZ(Math.atan2(y,u)),n.add(p,d,(s+o)/2,(c+l)/2+Na,(r+a)/2,-h);for(let g=0;g<=f;g++){let x=g/f,v=oe.lerp(s,o,x),b=oe.lerp(r,a,x),_=oe.lerp(c,l,x),S=[v,_,b].map(C=>Math.round(C*1e3)).join(",");e.has(S)||(e.add(S),n.box(5,Na,5,m,v,_+Na/2,b,-h))}}}function M0(n,t){let e=n/t,i=-ns/t,s=Math.min(5.5,e*.25),r=Math.min(1.8,s*.38);return{run:e,rise:i,noseDepth:s,lipDepth:r,height:a=>a===t-1?0:ns+(a+1)*i}}function S0(n,t,e,i,s=0,r=0){let{run:o,noseDepth:a,lipDepth:c,height:l}=M0(e,i);for(let u=0;u<i;u++){let h=r-e/2+o*u,f=l(u),d=f-3;n.box(t,d-Jn,o,"#a98075",s,(Jn+d)/2,h+o/2),n.box(t,3,o-a,u%2?"#e4c5a8":"#d9b79a",s,f-1.5,h+(o+a)/2),n.box(t,3.35,a-c,"#896254",s,d+3.35/2,h+(a+c)/2),n.box(t,3.4,c,"#f5d8b5",s,d+3.4/2,h+c/2)}}function dE({item:n,steps:t,apronDepth:e}){let i=new se,s=Df(i);S0(s,n.w,n.h,t);let r=ns-Jn;return s.box(n.w,r,e,"#c8b79e",0,Jn+r/2,-n.h/2-e/2),s.finish(),{root:i,anchorY:ns/2}}function pE(n,t){if(!t.reference)return;let{left:e,deckEdge:i,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=i-e,c=(i+e)/2,l=Uf,u=r-s,h=u/l,f=ns,d=-f/l;S0(n,a,u,l,c,(s+r)/2);for(let b=0;b<l;b++){let _=s+h*(b+.5),S=f+(b+1)*d;n.box(5,24,5,"#9f8183",e+4,S+12,_)}let m=h*(l-1),y=d*(l-1),p=new Ae(7,5,Math.hypot(m,y)+5);p.rotateX(-Math.atan2(y,m)),n.add(p,"#896e79",e+4,24-y/2,(s+r)/2),n.box(a+2,3,80,"#cbbda6",c,f-1.5,s-40);let[g,x]=o,v=Math.max(2,Math.ceil((x.x-g.x)/28));n.box(x.x-g.x,5,7,"#896e79",(x.x+g.x)/2,28,g.y);for(let b=0;b<=v;b++)n.box(5,28,5,"#9f8183",g.x+(x.x-g.x)*b/v,14,g.y)}function mE(n){let t=n.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let i=Mu(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=i()*512,a=i()*512,c=20+i()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let h=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);h.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),h.addColorStop(1,"#b1c3a000"),e.fillStyle=h,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=i()*512,a=i()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+i()*3,1.2+i()*2.8)}let s=new Dr(t);return s.wrapS=s.wrapT=ks,s.repeat.set(15,10),s.colorSpace=rn,s.anisotropy=4,s}function gE(n,t,e,i){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=Mu(150741);if(!t.editableStructure){let m=Math.min(90,c*.18),y=t.reference?t.reference.left+m/2:s+m/2;n.box(m,4,115,"#c7baa4",y,-109,o-88);for(let p=0;p<5;p++)n.box(m*.85,1.8,13,"#dbceba",y,-106,o-137+p*20)}let h=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[m,y]of h){let p=s+m*c,g=o+y*l,x=21+u()*24;n.ball(x*.94,9,x*.67,"#6d886a",p,-104,g),n.ball(x*.82,x*.57,x*.69,"#819b76",p+3,-98,g);for(let v=0;v<8;v++){let b=v*2.39996,_=(.2+u()*.5)*x,S=x*(.28+u()*.2),C=["#94ad7f","#a6ba88","#8da878","#bad09c"][v%4];n.ball(S*1.15,S*.8,S,C,p+Math.cos(b)*_,-93+12*u(),g+Math.sin(b)*_*.75)}for(let v=0;v<5;v++){let b=v%2?"#e6c4b1":"#fae6a4",_=p+(u()-.5)*x*1.14,S=g+x*(.62+u()*.43);n.ball(2.3,4.6,2.3,"#819765",_,-106,S),n.ball(3.9,1.8,3.3,b,_,-101.5,S),n.ball(1.2,.9,1.2,"#cb9c57",_,-100.3,S)}}let f=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],d=t.placements.filter(({item:m})=>m.type==="garageDoor"||m.type==="stairs");for(let[m,[y,p,g,x]]of f.entries()){let v=x*La[y].radius+7,b=s+p*c,_=o+g*l,S=_<o?-1:1,C=b<(s+r)/2?-1:1;for(let[M,A]of[[0,0],[C*(v+20),0],[0,S*(v+20)]]){let D=b+M,N=_+A;if(!(N-v<=e.nearZ||D+v>s&&D-v<r&&N+v>o&&N-v<a||d.some(B=>{let L=D-B.x,k=N-B.z,H=L*Math.cos(B.angle)+k*Math.sin(B.angle),W=-L*Math.sin(B.angle)+k*Math.cos(B.angle);return Math.abs(H)<B.item.w/2+v&&Math.abs(W)<B.item.h*.6+v}))){i.add({kind:y,x:D,z:N,groundY:Jn,height:x,seed:7229+m*101});break}}}for(let[m,y,p,g]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])i.add({kind:y,x:s+p*c,z:e.farZ-g,groundY:Jn+.68,seed:m})}function yE(n,t,e){let i=Mu(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(v,b)=>!(o&&v>=o.x1&&v<=o.x2&&b>=o.z1&&b<=o.z2)&&!t.rooms.some(_=>(!t.editableStructure||!Kr(_))&&_u(_,v,b)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let v=0;v<210;v++){let b=s.minX-70+(s.maxX-s.minX+140)*i(),_=c+l*i(),S=i()*180,C=8+i()*8,M=112+i()*34;a(b,_)&&r.push({x:b,z:_,phase:S,length:C,speed:M})}let u=new Float32Array(r.length*6),h=new Float32Array(r.length*3),f=new Float32Array(r.length*3),d=new he,m=new he,y=new he;d.setAttribute("position",new Te(u,3).setUsage(kn)),m.setAttribute("position",new Te(h,3).setUsage(kn)),y.setAttribute("position",new Te(f,3).setUsage(kn));let p=new Do(d,new Lr({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),g=new Nr(m,new Bs({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),x=new Nr(y,new Bs({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));return p.frustumCulled=g.frustumCulled=x.frustumCulled=!1,n.add(p,g,x),(v,{condition:b,windSpeed:_,windBearing:S})=>{p.visible=nE.has(b);let C=b==="pouring"||b==="lightning-rainy";if(p.material.opacity=C?.5:.34,g.visible=iE.has(b),x.visible=b==="hail",p.visible||g.visible||x.visible){let M=Number.isFinite(S)?S*ao:285*ao,A=oe.clamp(_??6,0,22)*.028;for(let[D,N]of r.entries()){let O=65-(N.phase+v*N.speed*(C?1.3:1))%170,B=65-(N.phase+v*20)%170,L=65-(N.phase+v*N.speed*1.55)%170,k=D*6;u.set([N.x,O,N.z,N.x+N.length*A*Math.sin(M),O+N.length,N.z-N.length*A*Math.cos(M)],k),h.set([N.x+Math.sin(v+D)*6,B,N.z],D*3),f.set([N.x,L,N.z],D*3)}d.attributes.position.needsUpdate=p.visible,m.attributes.position.needsUpdate=g.visible,y.attributes.position.needsUpdate=x.visible}}}function w0(n){return n==="garageDoor"?Jn:0}function xE(n,t){let e=n.x-t.x,i=n.y-t.y,s=(t.rotation??0)*ao,r=Math.cos(s),o=Math.sin(s);return wm(t,e*r+i*o,-e*o+i*r)}function bE(n,t,e,i){let s=new G,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let h of l){s.set(...h).project(t);let f=(s.x+1)*e/2,d=(1-s.y)*i/2;u.left=Math.min(u.left,f-r),u.right=Math.max(u.right,f+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=n.fences.map(({x1:l,y1:u,x2:h,y2:f,base1:d,base2:m})=>o([[l,d,u],[l,d+Na,u],[h,m,f],[h,m+Na,f]])),c=n.stairs.map(({x:l,z:u,angle:h,item:f,apronDepth:d})=>{let m=Math.cos(h),y=Math.sin(h),p=[];for(let g of[-f.w/2,f.w/2])for(let[x,v]of[[-f.h/2-d,ns],[f.h/2,0]])p.push([l+g*m-x*y,v,u+g*y+x*m]);return o(p)});return[...a,...c]}function vE(n){let t=[...n.stairs];if(n.reference){let{left:f,deckEdge:d,stepTop:m,stepBottom:y}=n.reference;t.push({x:(f+d)/2,z:(m+y)/2,angle:0,item:{w:d-f,h:y-m},steps:Uf,apronDepth:80,apronOverhang:1})}let e=f=>Math.round(f*1e5)/1e5,i=t.flatMap(f=>{let{x:d,z:m,angle:y,item:p,apronDepth:g,apronOverhang:x=0}=f,v=(_,S)=>[e(d+_*Math.cos(y)-S*Math.sin(y)),e(m+_*Math.sin(y)+S*Math.cos(y))],b=(_,S,C)=>[[v(-_,S),v(_,S),v(_,C),v(-_,C)]];return[b(p.w/2,-p.h/2,p.h/2),b(p.w/2+x,-p.h/2-g,-p.h/2)]}),s=n.fences.map(({x1:f,y1:d,x2:m,y2:y,dx:p,dz:g})=>{let x=y0/2;return[[[f-g*x,d+p*x],[m-g*x,y+p*x],[m+g*x,y-p*x],[f+g*x,d-p*x]].map(b=>b.map(e))]}),r=Qs(n.floorStructure.footprint),o=i.length?m0.default.union(n.floorStructure.footprint,...i):n.floorStructure.footprint,a=Qs(eu(o,n.wallStructure,s)),c=t.map(f=>({stair:f,...M0(f.item.h,f.steps)})),l={height:0,rise:0};function u(f,d){if(r.contains(f,d))return l;let m;for(let{stair:y,run:p,rise:g,height:x}of c){let{item:v,steps:b,apronDepth:_,apronOverhang:S=0}=y,[C,M]=_0(y,f,d),A=M+v.h/2,D=A<0;if(Math.abs(C)>v.w/2+(D?S:0)||A<-_||A>v.h)continue;let N=Math.min(b-1,Math.floor(A/p)),O=D?ns:x(N);(!m||O>m.height)&&(m={height:O,rise:g})}return m}function h(f,d,m,y,p){if(!a.supportsRoute(f,d,m,y,p))return!1;if(!c.length)return!0;let g=Math.max(1,Math.min(8,...c.map(b=>b.run/2))),x=Math.min(256,Math.ceil(Math.hypot(m-f,y-d)/g)),v=u(f,d);for(let b=1;b<=x;b++){let _=b/x,S=u(oe.lerp(f,m,_),oe.lerp(d,y,_));if(!v||!S||Math.abs(v.height-S.height)>Math.max(v.rise,S.rise)+.01)return!1;v=S}return!0}return{...a,supportsRoute:h,floorAt:(f,d)=>a.contains(f,d)?u(f,d)?.height??null:null}}function _E(n){let{floorStructure:t,wallStructure:e}=n,i=n.editableStructure?t.foundation:af(n.rooms.filter(s=>!Kr(s)),n.reference,!0).foundation;return{home:Qs(eu(i,e)),vacuum:Qs(eu(t.footprint,e)),presence:vE(n)}}function E0(n,t){let e=kf(t),i=new Ol({canvas:n,antialias:!0,alpha:!1,powerPreference:"low-power"});try{return i.resetState(),ME(n,t,e,i)}catch(s){throw T0(i),s}}function T0(n){try{n.getContext().isContextLost()||n.resetState()}finally{n.dispose()}}function ME(n,t,e,i){let s=t.sceneSettings,r={},o=new Yi;o.background=new $t("#d7dfcd");let a=new Co(o.background),c=new xs(-800,800,450,-450,1,Kl),{minX:l,maxX:u,minZ:h,maxZ:f}=e.bounds,d=new Xe({color:"#e8e8d2",map:mE(n.ownerDocument),roughness:.95}),m;d.onBeforeCompile=({uniforms:Pt})=>{m=Pt.dfgLUT};let y=new ce(new Rn(6200,4200),d);y.rotation.x=-Math.PI/2,y.position.set((l+u)/2,Jn,(h+f)/2),o.add(y);let p=Df(o),g=Df(o),x=r0(g),v=yg(e),b=xg(p,v,Jn,y.geometry.parameters.width,y.position.x),_,{water:S}=bg(p,v,Jn,e.houseBounds,y.geometry.parameters.width,y.position.x),C=S.shoreline.reduce((Pt,Ht)=>Math.abs(Ht.x-S.focusX)<Math.abs(Pt.x-S.focusX)?Ht:Pt),M={road:{x:b.centerX,y:b.surfaceY+8,z:(b.lanes[0]+b.lanes[1])/2},coast:{x:S.focusX+16,y:S.y,z:C.z-36},beach:{x:S.focusX,y:S.y+8,z:C.z+37}};gE(p,e,v,x),pE(p,e),cE(o,p,e,n.ownerDocument),hE(p,e),fE(p,e.fences),p.finish();let A=o.children.length;g.finish();let D=o.children.slice(A),N=o.children.filter(Pt=>Pt.isMesh),O=zm(i,o,e.bounds),B=Bm();O.markStructure();let L=new Rn(16e4,16e4),{position:k,uv:H}=L.attributes;for(let Pt=0;Pt<H.count;Pt++)H.setXY(Pt,k.getX(Pt)/y.geometry.parameters.width+.5,k.getY(Pt)/y.geometry.parameters.height+.5);let W=new ce(L,d);W.name="Horizon foreground",W.rotation.copy(y.rotation),W.position.copy(y.position),W.position.y-=.12,W.receiveShadow=!0,W.visible=!1,o.add(W);let et=mg(S),K=zg(b),Z=qg(S),nt=$g(S,v);o.add(et.mesh,K.root,Z.root,nt.root);let Tt=yE(o,e,v.sceneryMinZ),At=e.floorStructure.footprint,{home:Mt,vacuum:_t,presence:Lt}=_E(e),ot=Lt.floorAt,ht=new Yi,St=new Yi,zt=lg(),Ot=fg(At);o.add(Ot.root);let q=new Vs("#fff5e1","#c9bfd7",1.8),yt=new bs("#fff1d8",1.65);yt.position.set(-4,9,6),ht.add(q,yt);let X=new Map,j=new Map,st=new Set(e.placements.filter(({item:Pt})=>Pt.visualKind==="none").map(({item:Pt})=>Pt.id)),ct=new Map,dt=new Map(e.stairs.map(Pt=>[Pt.item.id,Pt]));for(let Pt of e.placements){let{item:Ht,x:gt,z:Dt,baseY:Vt,angle:Zt,window:fe,mountY:Ze,isBlind:zn}=Pt,dn=Ht.type==="window"&&fe?fe:Ht,Pn=dt.get(Ht.id),be=Pn?dE(Pn):Em(dn,{window:zn?fe:void 0,mountY:Ze})??bm(dn,{mountY:Ze});if(be){let ss=$m(Ht,be.root);if(be.root.position.set(gt,Vt+ss,Dt),be.root.rotation.y=-Zt,be.dock&&(be.dock.position.set(gt,Vt,Dt),be.dock.rotation.y=-Zt,o.add(be.dock)),be.floorRadius){let Si=be.floorRadius,en=(je,P)=>_t.clearance(je,P)>=Si,ge=(je,P,rt,bt)=>_t.supportsRoute(je,P,rt,bt,Si);be.dockFits=en(gt,Dt),be.root.name=Ht.id,be.liveMotion=Sa({allowsPoint:en,allowsRoute:ge,duration:.42}),be.demoMotion=Sa({allowsPoint:en,allowsRoute:ge,duration:0})}o.add(be.root),j.set(Ht.id,be),Ht.type==="garageDoor"&&ct.set(be.root,Ht.id),O.register(Ht,be)}X.set(Ht.id,{x:gt,z:Dt,baseY:Vt,rootY:be?.root.position.y,object:be})}let Ct=e.placements.filter(({item:Pt,baseY:Ht})=>Ht===0&&j.has(Pt.id)),It=pf(Ct),Nt=It,Bt={supportsRoute:Lt.supportsRoute,floorClearance:Lt.clearance,allowsBodyPoint:(Pt,Ht,gt,Dt)=>!Nt.blocksPoint(Pt,Ht,gt,Dt),allowsBodyRoute:(Pt,Ht,gt,Dt,Vt,Zt)=>!Nt.blocksRoute(Pt,Ht,gt,Dt,Vt,Zt)},Y=df(ht,ot,{occlusionScene:St,...Bt,seats:Zm(e.placements,j,Mt.clearance)}),ie,qt=Y,z=t0(e.placements,j),T=z.resolve(),it=T,ft,xt=!1,V={...e.bounds,sceneryMinZ:v.sceneryMinZ,waterfront:{minX:S.focusX-475,maxX:S.focusX+605,minZ:C.z-352,maxZ:C.z+88}};for(let Pt of e.placements){let Ht=j.get(Pt.item.id);if(!Ht)continue;let gt=T.get(Pt.item.id);if(gt&&(Ht.root.position.y=gt.y),Ht.root.scale.y!==1||gt?.supportId){let{max:Dt}=new Ue().setFromObject(Ht.root);Number.isFinite(Dt.y)&&(V.maxY=Math.max(V.maxY??92,Dt.y))}}let w=new G,E=!1,R=0,F=0,U=ts(),Q,$=new _s,ut=new $n(new G(0,1,0),0),lt=new G,Rt=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function I(){Ym(c,V,R,F,U,Q);let Pt=Wm(U.tilt);if(o.fog=Pt?a:null,W.visible=!!Pt,Pt){let Ht=c.far-Kl;a.near=Pt.near+Ht,a.far=Pt.far+Ht}}function J(Pt,Ht){if(E||Pt<1||Ht<1||Pt===R&&Ht===F)return;R=Pt,F=Ht;let gt=n.ownerDocument.defaultView?.devicePixelRatio||1;i.setPixelRatio(Math.min(gt,1.5,Math.sqrt(27e5/(Pt*Ht)))),i.setSize(Pt,Ht,!1),I()}function tt(Pt,Ht){return U=ts(Pt),Q=Ht,!E&&R>0&&F>0&&I(),wt()}function wt(){return{...U}}function Et(Pt){if(typeof Pt=="string"){if(Object.hasOwn(M,Pt))return{...M[Pt]};let Ht=X.get(Pt);if(!Ht)return null;let{x:gt,z:Dt,baseY:Vt,object:Zt}=Ht;return Zt?{x:gt,y:Zt.root.position.y+(Zt.anchorY??0)*Zt.root.scale.y,z:Dt}:{x:gt,y:Vt+6,z:Dt}}return[Pt?.x,Pt?.y].every(Number.isFinite)?{x:Pt.x,y:(ot(Pt.x,Pt.y)??0)+22,z:Pt.y}:null}function vt(Pt,Ht){return E||!Number.isFinite(Pt)||!Number.isFinite(Ht)||R<=0||F<=0?!1:($.setFromCamera(new Ft(Pt/R*2-1,1-Ht/F*2),c),!0)}function Ut(Pt,Ht,gt,{preferTabletop:Dt=!1}={}){if(!vt(Pt,Ht))return null;if(Dt){let Vt=z.projectTabletop(gt,$);if(Vt)return Vt}return ut.constant=-w0(gt),$.ray.intersectPlane(ut,lt)?{x:lt.x,y:lt.z}:null}function kt(Pt,Ht){if(!ct.size||!vt(Pt,Ht))return null;let gt=[];for(let Vt of ct.keys())Vt.traverseVisible(Zt=>{Zt.isMesh&&gt.push(Zt)});let Dt=$.intersectObjects(gt,!1)[0];if(!Dt||$.intersectObjects(N,!1).some(Vt=>Vt.distance<Dt.distance-.01))return null;for(let Vt=Dt.object;Vt;Vt=Vt.parent)if(ct.has(Vt))return ct.get(Vt);return null}function le(Pt=!1){Ot.root.visible=!Pt&&U.preset!=="waterfront",i.render(o,c);let Ht=(Pt||r.showAvatars!==!1)&&U.preset!=="waterfront"&&qt?.hasVisibleTracks,gt=!Pt&&U.preset!=="waterfront"&&zt.scene.children.length>0;if(!(!Ht&&!gt)){i.autoClear=!1;try{Ht&&(Pt||(qt.orientOcclusionCues(c),i.render(St,c)),i.render(ht,c)),gt&&(i.clearDepth(),i.render(zt.scene,c))}finally{i.autoClear=!0}}}function re(Pt={}){r=Pt,s={...t.sceneSettings,...Pt.features},Ot.setOpacity(Pt.heatMapOpacity)}function Se(Pt,Ht,gt=!1){let Dt=Ht.beachActivity??(Ht.night?"overnight":"day"),Vt={reduceMotion:Ht.reduceMotion===!0,night:Ht.night===!0,condition:Ht.condition,transientTelemetry:gt,activity:Dt};K.root.visible=Dt!=="overnight"&&(gt||xi(s,"sidewalk")),Z.root.visible=gt||xi(s,"boats"),nt.root.visible=gt||xi(s,"beachPlay"),K.root.visible&&K.update(Pt,Vt),Z.root.visible&&Z.update(Pt,Vt),nt.root.visible&&nt.update(Pt,Vt);let Zt=gt||xi(s,"trees");for(let fe of D)fe.visible=Zt;Zt&&x.update(Pt,Ht),et.update(Pt,gt||xi(s,"reflections")?Ht:{...Ht,reflections:!1})}function Ee(Pt=0,Ht={},gt={},{animateTelemetry:Dt=!0,showTelemetryPosition:Vt=!0,draftPositions:Zt,transientTelemetry:fe=!1}={}){if(E||R<1||F<1)return;fe||(gt=Hl(gt,s));let Ze=gt.reduceMotion===!0,zn=!Ze&&Number.isFinite(Pt)?Pt:0,dn=Qi(gt);gt={...gt,solar:fe?dn:B(dn,zn,Ze)};let Pn=Dt?zn:0,be=fe||xi(s,"traffic");be&&!_&&gt.traffic&&(_=Fg(b),o.add(_.root)),_&&(_.root.visible=be,be&&_.update(Pt,gt.traffic,{reduceMotion:Ze,night:gt.night===!0,transientTelemetry:fe,headlightBrightness:fe?1:r.headlightBrightness})),Tt(Pn,fe||xi(s,"precipitation")?gt:{}),Se(Pt,gt,fe);let ss=ft!==Zt;ss&&(ft=Zt,it=Zt?z.resolve(Zt):T,Nt=Zt?pf(Ct.map(en=>{let ge=Zt[en.item.id]?.position;return ge?{...en,x:ge.x,z:ge.y}:en})):It),xt=!1;for(let[en,ge]of j){let je=st.has(en),P=je?Rt:Ht[en]??Rt,{visible:rt,position:bt}=ge.root,pt=Zt?.[en]?.position,mt=!1;if(ge.floorRadius&&!je&&Vt&&!pt){let Kt=fe?ge.demoMotion:ge.liveMotion;!fe&&ge.demoMotion.hasPosition&&ge.demoMotion.clear();let te=Kt.observe(P.position,Pt,{observation:P.positionObservedAt,reduceMotion:Ze});!te&&P.state==="docked"&&Kt.clear();let me=Kt.sample(Pt,Ze);pt=me,mt=te&&me?.current===!0,ge.root.visible=!!(me||!Kt.hasPosition&&ge.dockFits)}else ge.floorRadius&&(ge.root.visible=!0);let Wt=X.get(en),Yt=pt?.x??Wt.x,Xt=pt?.y??Wt.z;xt||=!!(ge.floorRadius&&(rt!==ge.root.visible||bt.x!==Yt||bt.z!==Xt)),ge.root.position.x=Yt,ge.root.position.y=it.get(en)?.y??Wt.rootY,ge.root.position.z=Xt,ge.animate?.(P,ge.ambientMotion?zn:Pn,mt,fe)}O.update(gt,Ht,d,ss),o.fog&&a.color.copy(o.background);let Si=fe?ie:Y;qt!==Si&&(qt?.setVisible(!1),fe||ie?.setTracks([],0),qt=Si,qt?.setVisible(!0)),qt?.render(Pt,Ze,!Zt&&(fe||r.seatedPoses!==!1)),le(fe)}function on(Pt,Ht,gt={}){E||(gt.transientTelemetry?(!ie&&Pt?.length&&(ie=df(ht,ot,Bt),ie.setVisible(!1)),ie?.setTracks(Pt,Ht,gt)):Y.setTracks(Pt,Ht,gt))}function $e(Pt){if(U.preset==="waterfront")return null;let Ht=X.get(Pt);if(!Ht||R<1||F<1)return null;let{x:gt,z:Dt,baseY:Vt,object:Zt}=Ht;if(Zt){if(!Zt.root.visible)return null;w.set(Zt.anchorOffset?.x||0,Zt.anchorY||0,Zt.anchorOffset?.z||0),Zt.root.localToWorld(w)}else w.set(gt,Vt+6,Dt);return w.project(c),{x:(w.x+1)/2,y:(1-w.y)/2}}function an(){if(E)return;E=!0,Y.dispose(),ie?.dispose(),zt.dispose(),Ot.dispose(),_?.dispose(),K.dispose(),Z.dispose(),nt.dispose();let Pt=new Set,Ht=new Set,gt=new Set;o.traverse(Dt=>{Dt.geometry&&Pt.add(Dt.geometry);for(let Vt of Array.isArray(Dt.material)?Dt.material:[Dt.material])if(Vt){Ht.add(Vt);for(let Zt of Object.values(Vt))Zt?.isTexture&&gt.add(Zt)}});for(let Dt of gt)Dt.dispose();for(let Dt of Pt)Dt.dispose();for(let Dt of Ht)Dt.dispose();O.dispose(),m?.value?.dispose(),T0(i)}return{resize:J,render:Ee,anchor:$e,setView:tt,getView:wt,getDemoFocus:Et,projectToPlan:Ut,pickGarage:kt,exteriorClearance:()=>bE(e,c,R,F),dispose:an,hasAmbientMotion:!0,setPeople:on,setDisplaySettings:re,setDetectionZones:zt.setZones,setHeatMap:Ot.setHistory,get trackedControlChanged(){return xt},get hasPendingReacquisition(){return Y.hasPendingReacquisition||[...j.values()].some(Pt=>Pt.liveMotion?.pendingReacquisition)},canPlacePerson:(Pt,Ht)=>Number.isFinite(ot(Pt,Ht)),personFloorAt:ot,nearestPersonPoint:(Pt,Ht,gt=128)=>eg(Pt,Ht,gt,(Dt,Vt)=>Number.isFinite(ot(Dt,Vt))&&Lt.clearance(Dt,Vt)>=Ql&&Bt.allowsBodyPoint(Dt,Vt,Ql)),get hasPeopleMotion(){return qt?.hasMotion??!1}}}var A0=.35,Su=7.5,SE=8;function R0(n,{getView:t,onChange:e,canStart:i=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,g]=s.values();return Math.hypot(p.x-g.x,p.y-g.y)};function a(p,g){let x=ts({...p,...g});(x.azimuth!==p.azimuth||x.tilt!==p.tilt||x.zoom!==p.zoom)&&e(x)}function c(p){n.hasPointerCapture(p)&&n.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!i(p))return;let g=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!g||!s.values().next().value.touch))){try{n.setPointerCapture(p.pointerId)}catch{return}s.size||n.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:g}),p.preventDefault()}}function h(p){let g=s.get(p.pointerId);if(!g)return;let x=r();if(!x){l();return}let v=s.size===2,b=v?o():0,_={x:p.clientX,y:p.clientY,touch:g.touch};if(s.set(p.pointerId,_),p.preventDefault(),v){let S=o();Math.min(b,S)>=SE&&a(x,{zoom:x.zoom*S/b});return}a(x,{azimuth:x.azimuth-(_.x-g.x)*A0,tilt:x.tilt+(_.y-g.y)*A0})}function f(p){s.delete(p.pointerId)&&c(p.pointerId)}function d(p){let g=r();if(!g||!Number.isFinite(p.deltaY)||!p.deltaY)return;let x=p.deltaMode===1?16:p.deltaMode===2?n.clientHeight:1,v=Math.max(-350,Math.min(350,p.deltaY*x));p.preventDefault(),p.stopPropagation(),a(g,{zoom:g.zoom*Math.exp(-v*.002)})}function m(p){let g=r();if(!g||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let x;switch(p.key){case"ArrowLeft":x={azimuth:g.azimuth-Su};break;case"ArrowRight":x={azimuth:g.azimuth+Su};break;case"ArrowUp":x={tilt:g.tilt-Su};break;case"ArrowDown":x={tilt:g.tilt+Su};break;case"+":case"=":x={zoom:g.zoom*1.1};break;case"-":x={zoom:g.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(g,x)}let y=[["pointerdown",u],["pointermove",h],["pointerup",f],["pointercancel",f],["lostpointercapture",f],["wheel",d,{passive:!1}],["keydown",m]];for(let[p,g,x]of y)n.addEventListener(p,g,x);return{cancel:l,dispose(){l();for(let[p,g,x]of y)n.removeEventListener(p,g,x)}}}var ZC=1200*1e3,jC=new Map([["s",1/60],["min",1],["h",60]]);var wE="roomcraft.traffic-vehicle-style.v1";function C0(n){try{let t=n.localStorage.getItem(wE);return uu.some(({id:e})=>e===t)?t:""}catch{return""}}(n=>{"use strict";let t=new Set(["hs","xy","rgb","rgbw","rgbww"]),e=new Set(["brightness","color_temp","white",...t]),i=r=>typeof r=="number"&&Number.isFinite(r);function s(r={}){r??={};let o=Array.isArray(r.supported_color_modes)?r.supported_color_modes:[],a=o.some(v=>e.has(v))||i(r.brightness),c=o.some(v=>t.has(v)),l=o.includes("white")&&c,u=Number.isInteger(r.supported_features)?r.supported_features:0,h=!!(u&32),f=!!(u&8),d=!!(u&4),m=Array.isArray(r.effect_list)?[...new Set(r.effect_list.filter(v=>typeof v=="string"&&v.trim()))]:[],y=r.min_color_temp_kelvin,p=r.max_color_temp_kelvin,g=o.includes("color_temp")?i(y)&&i(p)&&y>0&&p>y?{min:Math.round(y),max:Math.round(p)}:{min:2e3,max:6535}:null,x=["On/off"];return a&&x.push("Brightness"),g&&x.push("White temperature"),c&&x.push("Color"),l&&x.push("White mode"),(d||m.length)&&x.push("Effects"),h&&x.push("Fade duration"),f&&x.push("Flash"),{brightness:a,temperature:g,color:c,white:l,effects:m,transition:h,flash:f,labels:x}}n.RoomcraftLightCapabilities=Object.freeze({describe:s})})(typeof window>"u"?globalThis:window);var iI=1200*1e3,sI=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function I0(n,t,e){let i=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...n].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],h=u.length>0,f=h?5:3,d,m,y=1/0;for(let g=0;g<=f&&(h||!d);g++)for(let[x,v]of g===0?s.slice(0,1):s.slice(1)){let b=o(a.x+x*g*34,c/2,t-c/2),_=o(a.y+v*g*34,l/2,e-l/2);if(i.some(M=>Math.abs(b-M.x)<(c+M.w)/2+2&&Math.abs(_-M.y)<(l+M.h)/2+2))continue;if(g<=3&&!d&&(d={...a,x:b,y:_,w:c,h:l}),!h)break;if(u.some(M=>b+c/2>M.left&&b-c/2<M.right&&_+l/2>M.top&&_-l/2<M.bottom))continue;let C=Math.hypot(b-a.x,_-a.y);C<y&&(m={...a,x:b,y:_,w:c,h:l},y=C)}let p=m??d;p&&i.push(p)}return i}var D0=lo($r(),1),P0="roomcraft-presence-v1",is=4500,Gf=/^sensor\.[a-z0-9_]+$/,F0=/^binary_sensor\.[a-z0-9_]+$/,EE=4,zf=1536,Hf=1024,TE=[[[0,0],[zf,0],[zf,Hf],[0,Hf],[0,0]]],L0=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],AE=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...L0.map(([n,t])=>[t,n]),...L0.slice(1,-1).reverse().map(([n,,t])=>[t,n])]}]]);function Vf(n,t){return n>=0&&n<=zf&&t>=0&&t<=Hf}function Da([n,t,e,i,s,r],o,a){return{x:n*o+t*a+e,y:i*o+s*a+r}}function wu(n){return Array.isArray(n)&&n.length===6&&n.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(n[0]*n[4]-n[1]*n[3])>1e-5}function U0(n){if(!Array.isArray(n)||n.length!==4||!n.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,i,s]=n;return t>=e||i>=s?null:[[t,i],[e,i],[e,s],[t,s]]}function k0(n){let t=[],e=0;for(let i of n){let s=i.presenceTrackTransform;if(i.type!=="presenceSwitch"||!wu(s))continue;let[,r,o,,a,c]=s,l=AE.get(i.presenceTrackProfile),u=Math.hypot(r,a),h=Vf(o,c)?{origin:{x:o,y:c},forward:{x:r/u,y:a/u}}:{},f=t.length;for(let[d,m]of[["configured",U0(i.presenceTrackZone)],["nominal",l?.ring]]){if(!m)continue;let y=m.map(([p,g])=>{let x=Da(s,p,g);return[x.x,x.y]});for(let[p]of D0.default.intersection([y],TE))t.push({id:i.id,kind:d,points:p.slice(0,-1).map(([g,x])=>({x:g,y:x})),...h,...d==="nominal"?{rangeMeters:l.rangeMeters}:{}})}if(t.length>f&&++e===12)break}return t}function N0(n){let t=new Set,e=[];for(let i of Array.isArray(n)?n.slice(0,EE):[]){if(!Number.isInteger(i?.id)||i.id<-128||i.id>255||t.has(i.id)||![i.x,i.y].every(r=>Number.isFinite(r)&&Math.abs(r)<=800))continue;t.add(i.id);let s={id:i.id,x:i.x,y:i.y};Number.isFinite(i.z)&&Math.abs(i.z)<=800&&(s.z=i.z),Number.isFinite(i.speed)&&Math.abs(i.speed)<=32768&&(s.speed=i.speed),e.push(s)}return e}function O0(n={},t=[]){let e={};for(let i of new Set(t)){let s=n[i];if(F0.test(i)&&["on","off","unknown","unavailable"].includes(s?.state)){e[i]={state:s.state};continue}let r=s?.attributes;!Gf.test(i)||r?.tracking_schema!==P0||(e[i]={state:s.state,attributes:{tracking_schema:P0,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(o=>typeof o=="boolean"?o:null):[],tracks:N0(r.tracks),...Number.isFinite(r.last_observed_at)?{last_observed_at:r.last_observed_at,last_tracks:N0(r.last_tracks)}:{}}})}return e}function Wf(n,t,e=Date.now()){let i=[],s=new Set;for(let r of n){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!Gf.test(o||"")||s.has(o)||!wu(a))continue;s.add(o);let c=O0(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!(!Number.isFinite(l)||l>e+1e3||e-l>=is))for(let h of u){let{x:f,y:d}=Da(a,h.x,h.y);Vf(f,d)&&i.push({id:o+":"+h.id,x:f,y:d,expiresAt:l+is})}}return i}var Xf=n=>n?.type==="presenceSwitch"?Gf.test(n.presenceTrackEntityId??"")?n.presenceTrackEntityId:F0.test(n.presenceEntityId??"")?n.presenceEntityId:null:null;function Bf(n,t){let e=n.presenceTrackTransform,i=[{x:n.x,y:n.y}];if(wu(e)){let s=U0(n.presenceTrackZone),r=Da(e,0,100);if(i.unshift(r),s){let[o,,a]=s;i.unshift(Da(e,(o[0]+a[0])/2,(o[1]+a[1])/2))}}for(let s of i){if(!Number.isFinite(s.x)||!Number.isFinite(s.y))continue;let r=t(s.x,s.y,128);if(r)return r}return null}function B0(){let n=new Map;return{read(t,e,i,{contains:s,nearest:r}){let o=new Map;for(let c of t){let l=Xf(c);l&&!o.has(l)&&o.set(l,c)}for(let c of n.keys())o.has(c)||n.delete(c);let a=[];for(let[c,l]of o){let u=e[l.presenceEntityId]?.state,h=O0(e,[l.presenceTrackEntityId])[l.presenceTrackEntityId],f=h?.attributes,d=f?.zones_observed_at,y=h?.state!=="unavailable"&&Number.isFinite(d)&&d<=i+1e3&&i-d<is&&f.zones.some(A=>A===!0);if(u==="off"){n.delete(c);continue}let p=u==="on"||y,g=f?.observed_at,x=!["0","unknown","unavailable",void 0].includes(h?.state)&&Number.isFinite(g)&&g<=i+1e3&&i-g<is&&f.tracks.length>0,v=u==="on"?void 0:Math.max(y?d+is:0,x?g+is:0);if(!p&&h?.state==="0"){n.delete(c);continue}let b=l.presenceTrackTransform,_=JSON.stringify([l.presenceEntityId,b]),S=n.get(c);S?.key!==_&&(n.delete(c),S=void 0);let C=Wf([l],e,i).filter(A=>s(A.x,A.y)),M=C[0];if(!M&&p&&h?.state!=="unavailable"&&wu(b)){let A=f?.last_observed_at??f?.observed_at,D=f?.last_tracks??f?.tracks??[];if(Number.isFinite(A)&&A<=i+1e3&&(!S||A>S.observedAt))for(let N of D){let O=Da(b,N.x,N.y);if(!(!Vf(O.x,O.y)||!s(O.x,O.y))){M={id:c+":"+N.id,...O,expiresAt:A+is};break}}}if(M&&(!S||M.expiresAt-is>=S.observedAt)&&(S={key:_,observedAt:M.expiresAt-is,point:M},n.set(c,S)),C.length)for(let A of C)a.push({...A,keepVisible:!0,fallback:r(A.x,A.y,52)??Bf(l,r)});else if(p||x&&S){let A=S?.point;if(A&&s(A.x,A.y))a.push({id:A.id,x:A.x,y:A.y,quality:"last-known",keepVisible:!0,expiresAt:v,fallback:r(A.x,A.y,52)??Bf(l,r)});else{let D=Bf(l,r);D&&a.push({id:c+":area",...D,quality:"area",keepVisible:!0,expiresAt:v})}}}return a},clear(){n.clear()}}}var qf=new Map([["sunny",["Sunny","clear","cirrus"]],["clear-night",["Clear night","clear","cirrus"]],["partlycloudy",["Partly cloudy","partial","cumulus"]],["cloudy",["Cloudy","clouds","stratus"]],["rainy",["Rain","rain","nimbostratus"]],["pouring",["Heavy rain","rain","nimbostratus"]],["lightning",["Thunderstorms","thunder","cumulonimbus"]],["lightning-rainy",["Thunderstorms","storm","cumulonimbus"]],["snowy",["Snow","snow","stratus"]],["snowy-rainy",["Sleet","sleet","nimbostratus"]],["hail",["Hail","sleet","cumulonimbus"]],["fog",["Fog","fog","fog"]],["windy",["Windy","wind","cirrus"]],["windy-variant",["Windy and cloudy","wind-clouds","altocumulus"]],["exceptional",["Unusual weather","unknown","none"]]]),H0=new Set(["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]),G0=Object.freeze([...qf].map(([n,[t]])=>Object.freeze({id:n,label:n==="lightning-rainy"?"Thunderstorms with rain":t}))),V0=Object.freeze([...H0]),z0=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function W0(n={},t=!1){let{condition:e,daylightKnown:i,night:s,moonPhase:r,temperature:o,unit:a,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:h,moonElevation:f,windSpeed:d,windBearing:m,cloudCoverage:y}=n;if(t)return{label:"Weather offline",sky:"unknown",effect:"unknown",cloud:"none",moon:"",reading:"",windReading:""};let[p,g,x]=qf.get(e)||["Weather unavailable","unknown","none"],v=i?s:e==="clear-night",b=i?!s:e==="sunny",_=Number.isFinite(d)&&d>=0?d:void 0,S=Number.isFinite(m)?(m%360+360)%360:void 0,C=S===void 0?"":z0[Math.round(S/22.5)%z0.length],M=_===void 0?"":_===0?"Calm wind":`Wind ${C?`from ${C} at `:""}${Math.round(_*10)/10} m/s`;return{label:p,sky:v?"night":b?"day":"unknown",effect:g,cloud:x,moon:v&&H0.has(r)?r:"",reading:qf.has(e)&&Number.isFinite(o)?`${Math.round(o)}${a||"\xB0"}`:"",windSpeed:_,windBearing:S,windReading:M,cloudCoverage:Number.isFinite(y)&&y>=0&&y<=100?y:void 0,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:h,moonElevation:f}}var RE=[["dipper",[[7,9],[27,15],[46,22],[63,28],[93,23],[89,42],[65,43]],"M7 9L27 15 46 22 63 28 93 23 89 42 65 43 63 28"],["cassiopeia",[[8,35],[28,17],[47,31],[67,10],[91,24]],"M8 35L28 17 47 31 67 10 91 24"],["orion",[[30,6],[68,8],[44,25],[50,28],[56,31],[29,46],[67,47]],"M30 6L44 25 50 28 56 31 68 8M44 25L29 46M56 31L67 47"]],CE=RE.map(([n,t,e])=>`
  <svg class="coastal-constellation coastal-${n}" viewBox="0 0 100 52" focusable="false">
    <path d="${e}"/>
    ${t.map(([i,s],r)=>`<circle cx="${i}" cy="${s}" r="${r%3===0?2.15:1.55}"/>`).join("")}
  </svg>`).join(""),IE=["#c2d7ed","#e4edff","#fff0d2"];function X0(n,t){let e=t?11939:30391,i=()=>(e=e*48271%2147483647)/2147483647;return Array.from({length:n},(s,r)=>{let o=1+(r+i())*98/n,a=5+i()*79,c=t?.85+r%3*.18:.48+r%4*.12;return`radial-gradient(circle at ${o.toFixed(1)}% ${a.toFixed(1)}%,${IE[r%3]} 0 ${c.toFixed(2)}px,transparent ${(c+.6).toFixed(2)}px)`}).join(",")}var Z0=`
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <span class="coastal-twilight"></span>
    <div class="coastal-stars">
      <span class="coastal-star-field"></span>
      <span class="coastal-star-sparkle"></span>
      ${CE}
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
  </div>`,co=(n,t,e)=>Math.max(t,Math.min(e,n)),q0=n=>Number.isFinite(n)&&Math.abs(n)<=90,Yf=n=>Number.isFinite(n)&&n>=0&&n<=360,$f=75,Y0=n=>76-58*co(n/$f,0,1),j0=n=>50+38*n,PE=n=>j0(Math.sin(n*Math.PI/180)),LE=new Map([["waxing_crescent",[1,.48]],["first_quarter",[1,0]],["waxing_gibbous",[1,-.48]],["waning_crescent",[-1,.48]],["last_quarter",[-1,0]],["waning_gibbous",[-1,-.48]]]);function NE(n,t){let e=[];for(let[i,s,r]of[[1,0,1],[t,16,-1]])for(let o=0;o<=16;o++){let a=(s+o*r)*Math.PI/16,c=50+n*50*Math.sin(a)*i,l=50-50*Math.cos(a);e.push(`${c.toFixed(2)}% ${l.toFixed(2)}%`)}return`polygon(${e.join(",")})`}var DE=new Map([...LE].map(([n,t])=>[n,NE(...t)])),FE=new Map([["clear",1],["wind",.9],["partial",.66],["wind-clouds",.43]]);function UE(n,t,e,i,s,r,o){let c=(n==="night"&&!t?FE.get(e)??0:0)*co(1-(i??0)/80,0,1);if(o||c<.55||e!=="clear"&&e!=="wind")return{starOpacity:c,meteor:"off",meteorProgress:0,meteorOpacity:0};if(s===void 0&&r===void 0)return{starOpacity:c,meteor:"live",meteorProgress:0,meteorOpacity:0};let l=r===void 0?(s%58-12)/1.4:(r-.36)/.29,u=co(l,0,1),h=Math.min(1,u*5,(1-u)*2)*.9;return{starOpacity:c,meteor:"sample",meteorProgress:u,meteorOpacity:h}}function kE(n={},t=!1){let e=W0(n,t),{sky:i,effect:s,cloud:r,moon:o,sunElevation:a,sunAzimuth:c,moonElevation:l,moonAzimuth:u,windSpeed:h,windBearing:f,cloudCoverage:d}=e,m=Qi(t?{}:n),{phase:y}=m,{skyTimeSeconds:p,skyProgress:g,reduceMotion:x=!1}=t?{}:n,v=q0(a),b=y==="sunrise"||y==="sunset",_=Number.isFinite(p)&&!x?Math.max(0,p):void 0,S=Number.isFinite(g)&&!x?co(g,0,1):void 0,C=S===void 0?void 0:Math.sin(S*Math.PI)*$f,M=S??(_===void 0?void 0:.5-.5*Math.cos(_*Math.PI/480)),A=v?m.elevation:C??m.elevation,D=Yf(c)||S===void 0?j0(m.east):83-66*S,N=Yf(u)?PE(u):M===void 0?55:18+64*M,O=M===void 0?38:Math.sin(M*Math.PI)*$f,B=Y0(q0(l)?l:O),L=!t&&!x&&!Yf(u)&&S===void 0&&_===void 0?"ambient":"fixed",k=f===void 0?void 0:f*Math.PI/180,H=k===void 0?9:-Math.sin(k)*12,W=k===void 0?-2:Math.cos(k)*4,et=h===void 0?s==="wind"||s==="wind-clouds"?2.5:1:h===0?0:co(h*.25,.32,4.8),K=d===void 0?1:co(d/52,0,1);return{sky:i,effect:s,cloud:r,moon:o,light:b?"twilight":"regular",clock:_,reduceMotion:x,moonMotion:L,sunX:D,sunY:Y0(A),moonX:N,moonY:B,solarPhase:i==="unknown"?"unknown":y,solarDaylight:m.daylight,solarDisc:m.disc,solarCloud:m.cloud,twilightGlow:m.twilight*(1-.42*m.cloud),horizonHaze:m.twilight*(.34+.2*m.cloud),moonOutline:DE.get(o)||"circle(50%)",windX:H,windY:W,cloudSpeed:et,cloudOpacity:K,...UE(i,b,s,d,_,S,x)}}function K0(n,t,e=!1){let i=kE(t,e),{sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,clock:u,reduceMotion:h,cloudSpeed:f,cloudOpacity:d,solarPhase:m,solarDaylight:y,solarDisc:p,solarCloud:g,twilightGlow:x,horizonHaze:v,starOpacity:b,meteor:_,meteorProgress:S,meteorOpacity:C}=i,M={sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,skyClock:u===void 0?"live":"sample",windCalm:String(f===0),skyReduced:String(h),solarPhase:m,stars:b>0?"visible":"hidden",meteor:_};for(let[D,N]of Object.entries(M))n.dataset[D]!==N&&(n.dataset[D]=N);let A={"--coastal-sun-x":`${i.sunX.toFixed(2)}%`,"--coastal-sun-y":`${i.sunY.toFixed(2)}%`,"--coastal-solar-x":`${i.sunX.toFixed(2)}%`,"--coastal-daylight":`${(y*100).toFixed(2)}%`,"--coastal-solar-disc":p.toFixed(3),"--coastal-solar-cloud":g.toFixed(3),"--coastal-twilight-glow":x.toFixed(3),"--coastal-twilight-color":`${(x*100).toFixed(2)}%`,"--coastal-horizon-haze":v.toFixed(3),"--coastal-moon-x":`${i.moonX.toFixed(2)}%`,"--coastal-moon-y":`${i.moonY.toFixed(2)}%`,"--coastal-moon-outline":i.moonOutline,"--coastal-wind-x":`${i.windX.toFixed(3)}vw`,"--coastal-wind-y":`${i.windY.toFixed(3)}px`,"--coastal-wind-speed":String(f||1),"--coastal-cloud-cover":String(d),"--coastal-clock":`${(u??0).toFixed(3)}s`,"--coastal-star-opacity":b.toFixed(3),"--coastal-meteor-progress":S.toFixed(3),"--coastal-meteor-opacity":C.toFixed(3)};for(let[D,N]of Object.entries(A))n.style.getPropertyValue(D)!==N&&n.style.setProperty(D,N)}var $0=`{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`,J0=`
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
    background:${X0(39,!1)},
      radial-gradient(ellipse 31% 97% at 34% 0%,#b0c3f522,transparent 100%);
  }
  .coastal-star-sparkle {
    opacity:.85;
    background:${X0(13,!0)};
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
  @keyframes coastal-drift ${$0}
  @keyframes coastal-sampled-drift ${$0}
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
`;var OE=2500,Zf=Object.freeze({condition:"sunny",daylightKnown:!0,night:!1,sunElevation:40,sunAzimuth:160,traffic:Object.freeze({severity:"ambient"})}),Q0={dawn:[-6,92,!0,"overnight"],sunrise:[2,99,!0,"morning"],morning:[19,114,!0,"morning"],day:[40,160,!0,"day"],sunset:[2,253,!1,"day"],dusk:[-6,265,!1,"evening"],night:[-16,290,!1,"evening"],overnight:[-30,290,!1,"overnight"]},BE=n=>n.replaceAll("_"," ").replace(/^./,t=>t.toUpperCase());function zE({condition:n,daylight:t,moonPhase:e,windSpeed:i,windBearing:s}){let r=n==="clear-night"&&(t==="morning"||t==="day")?"night":t,[o,a,c,l]=Q0[r]??Q0.day,u=o<-.83;return{...Zf,condition:n,night:u,sunElevation:o,sunAzimuth:a,moonPhase:e,windSpeed:i,windBearing:s,sunRising:c,beachActivity:l}}function ty(n,t,{api:e,viewport:i,bridge:s,onChange:r}){let o=n.getElementById("sceneSettingsDialog"),a=n.getElementById("sceneSettingsButton"),c=n.getElementById("sceneFeatures"),l=n.getElementById("sceneDockAlignment"),u=n.getElementById("scenePreviewMode"),h=n.getElementById("scenePreviewMotion"),f=n.getElementById("scenePreviewSource"),d=n.getElementById("scenePreviewWeather"),m=n.createElement("style");m.textContent=J0,n.head.append(m);let y=n.createElement("template");y.innerHTML=Z0.trim();let p=y.content.firstElementChild;p.hidden=!0,i.before(p);try{h.checked=t.localStorage.getItem("roomcraft.reduce-motion.v1")!=="true"}catch{}let g=im.map(({key:Mt,label:_t})=>{let Lt=n.createElement("label");Lt.className="scene-feature";let ot=n.createElement("input");return ot.type="checkbox",ot.addEventListener("change",()=>e.setSceneSetting(Mt,ot.checked)),Lt.append(ot,_t),c.append(Lt),{key:Mt,input:ot}});function x(Mt,_t){let Lt=n.createElement("label");return Lt.textContent=Mt,Lt.append(_t),d.append(Lt),_t.addEventListener("change",r),_t}function v(Mt,_t,Lt){let ot=n.createElement("select");return ot.replaceChildren(..._t.map(([ht,St])=>new t.Option(St,ht))),ot.value=Lt,x(Mt,ot)}function b(Mt,_t,Lt,ot,ht){let St=n.createElement("input");return Object.assign(St,{type:"number",min:_t,max:Lt,step:ot,value:ht}),x(Mt,St)}let _=v("Weather",G0.map(({id:Mt,label:_t})=>[Mt,_t]),"sunny"),S=v("Time of day",[["dawn","Dawn"],["sunrise","Sunrise"],["morning","Morning"],["day","Day"],["sunset","Sunset"],["dusk","Dusk"],["night","Evening"],["overnight","Overnight"]],"day"),C=v("Moon phase",V0.map(Mt=>[Mt,BE(Mt)]),"full_moon"),M=b("Wind speed (m/s)",0,30,1,4),A=b("Wind from (degrees)",0,360,1,270),D,N,O=!1,B=!1,L=!1,k,H=!1,W=()=>{o.open||o.showModal()},et=()=>e.setSceneSetting("dockAlignment",l.value),K=()=>{d.hidden=u.value!=="custom",At(),r()};a.addEventListener("click",W),l.addEventListener("change",et),u.addEventListener("change",K),h.addEventListener("change",r);function Z(){return u.value!=="custom"}function nt(){let Mt=B?Z()?H?"Live appearance from Home Assistant.":D||e.getPreview?.()?.environment?"Showing the last available dashboard appearance.":"Connect to Home Assistant to match the dashboard appearance.":"Preview changes stay in this Studio tab.":"Choose a 3D view to see the preview.";f.textContent!==Mt&&(f.textContent=Mt)}async function Tt(){if(!B||!Z()||!s||O||L)return;O=!0;let Mt=!1;try{let _t=await s.request("LOOK_GET");if(L)return;if(Mt=H!==!!_t?.environment,H=!!_t?.environment,H){let Lt=JSON.stringify(_t);Lt!==N&&(D=_t,N=Lt,Mt=!0)}}catch{Mt=H,H=!1}finally{O=!1,!L&&B&&Z()&&Mt&&r()}}function At(){B&&Z()&&s&&!n.hidden?k===void 0&&(k=t.setInterval(Tt,OE),Tt()):k!==void 0&&(t.clearInterval(k),k=void 0)}return n.addEventListener("visibilitychange",At),{open:W,motionEnabled:()=>h.checked,sync(Mt,_t,Lt=!1){B=Mt,At();for(let{key:zt,input:Ot}of g)Ot.checked=xi(_t,zt);l.value=sm(_t),nt();let ot=D??e.getPreview?.(),ht=Z()?ot?.environment??Zf:zE({condition:_.value,daylight:S.value,moonPhase:C.value,windSpeed:Math.min(30,Math.max(0,M.valueAsNumber||0)),windBearing:Math.min(360,Math.max(0,A.valueAsNumber||0))}),St={...ht,traffic:{...ht.traffic??Zf.traffic,vehicleStyle:C0(t)}};return p.hidden=!B||!xi(_t,"sky"),p.hidden||K0(p,{...Hl(St,_t),reduceMotion:Lt}),{states:ot?.states??{},environment:St}},dispose(){L=!0,B=!1,At(),n.removeEventListener("visibilitychange",At),a.removeEventListener("click",W),l.removeEventListener("change",et),u.removeEventListener("change",K),h.removeEventListener("change",r),o.close();for(let{input:Mt}of g)Mt.parentElement.remove();d.replaceChildren(),p.remove(),m.remove()}}}var HE={radar:[32,12],plan:[20,8]};function jf(n){return n.reduce((e,i)=>[e[0]+i.x,e[1]+i.y],[0,0]).map(e=>e/n.length)}function GE(n,[t,e]){let[i,s]=jf(n),r=0,o=0,a=0;for(let{x:h,y:f}of n){let d=h-i,m=f-s;r+=d*d,o+=m*m,a+=d*m}let c=Math.hypot(r-o,2*a),l=Math.sqrt((r+o+c)/(2*n.length)),u=Math.sqrt(Math.max(0,(r+o-c)/(2*n.length)));return l>=t&&u>=e&&u>=l*.1}function sy([n,t,e,i,s,r],{radar:o,plan:a}){return Math.hypot(n*o.x+t*o.y+e-a.x,i*o.x+s*o.y+r-a.y)}function ey(n,t){let e=t?-1:1,[i,s]=jf(n.map(({radar:p})=>p)),[r,o]=jf(n.map(({plan:p})=>p)),a=0,c=0,l=0;for(let{radar:p,plan:g}of n){let x=e*(p.x-i),v=p.y-s,b=g.x-r,_=g.y-o;a+=b*x+_*v,c+=_*x-b*v,l+=x*x+v*v}let u=a/l,h=c/l,f=r-e*u*i+h*s,d=o-e*h*i-u*s,m=[e*u,-h,f,e*h,u,d],y=n.map(p=>sy(m,p));return{transform:m,errors:y,flipped:t,scale:Math.hypot(u,h),squared:y.reduce((p,g)=>p+g*g,0)}}function ny(n){let t=ey(n,!1),e=ey(n,!0);return e.squared<t.squared?e:t}function VE({radar:n,plan:t}={}){return[n?.x,n?.y,t?.x,t?.y].every(Number.isFinite)&&Math.abs(n.x)<=600&&Math.abs(n.y)<=600&&t.x>=0&&t.x<=1536&&t.y>=0&&t.y<=1024}function iy(n){return Object.entries(HE).every(([t,e])=>GE(n.map(i=>i[t]),e))}function ry(n){if(!Array.isArray(n)||n.length<3||n.length>12||!n.every(l=>l&&VE(l)))return{error:"Use 3\u201312 valid pairs of radar centimetres and plan coordinates."};if(!iy(n))return{error:"Choose survey points spread across the area, including one well off the line between the others."};let t=ny(n),e=t.scale*100;if(e<8||e>600)return{error:"The fitted scale is outside the supported range. Check the radar units and matched plan points."};let i;if(n.length>3){i=0;for(let[l,u]of n.entries()){let h=n.filter((d,m)=>l!==m);if(!iy(h))return{error:"Spread the survey points so that three or more still cover the area when any one point is removed."};let f=ny(h);if(f.scale*100<8||f.scale*100>600)return{error:"The fitted scale changes too much when a point is withheld. Check which radar report matches each point."};i=Math.max(i,sy(f.transform,u)/f.scale)}}let{transform:s,errors:r,flipped:o,scale:a,squared:c}=t;return{transform:s,pixelsPerMetre:e,flipped:o,origin:{x:s[2],y:s[5]},rmsCm:Math.sqrt(c/n.length)/a,maxErrorCm:Math.max(...r)/a,...i===void 0?{}:{validationCm:i}}}var WE=3,XE=11,qE=12,oy=/^sensor\.[a-z0-9_]+$/,ay=n=>n.slice().sort((t,e)=>t-e)[Math.floor(n.length/2)];async function YE(n,t,e=Date.now,i=()=>!0){let s=e(),r=[],o=new Set,a;for(let c=0;c<XE&&i();c++){if(c&&await t(700),!i())return{error:"Capture canceled."};let l=await n(),{observed_at:u,tracks:h}=l?.attributes??{};if(!Number.isFinite(u)||u<s-500||u>e()+1e3||o.has(u))continue;if(o.add(u),h?.length>1)return{error:"More than one radar target was detected. Clear the room and try again."};if(l.state!=="1"||h?.length!==1)continue;let{id:f,x:d,y:m}=h[0];if(![d,m].every(p=>Number.isFinite(p)&&Math.abs(p)<=800))continue;if(a!==void 0&&f!==a)return{error:"The radar switched targets. Stay still and try again."};if(a=f,r.push({x:d,y:m}),r.length<WE)continue;let y={x:ay(r.map(p=>p.x)),y:ay(r.map(p=>p.y))};return r.some(p=>Math.hypot(p.x-y.x,p.y-y.y)>40)?{error:"These readings moved too far apart. Hold still on the marked spot and try again."}:{point:y}}return{error:"Too few fresh position reports. Check the radar reporting state and try a spot closer to the switch."}}function $E(n,t,e,i,s,r){let o=n.getContext("2d");if(!o||!t)return;o.fillStyle="#e8eddf",o.fillRect(0,0,n.width,n.height);for(let c of t.rooms)o.beginPath(),c.points.forEach(({x:l,y:u},h)=>h?o.lineTo(l,u):o.moveTo(l,u)),o.closePath(),o.fillStyle=c.outdoor||c.surface==="patio"?"#d8dfca":"#f6e7cc",o.strokeStyle="#c9b496",o.lineWidth=4,o.fill(),o.stroke();for(let c of t.items)/sofa|sectional|diningTable|desk|counter|worktop|bed/i.test(c.type)&&(o.save(),o.translate(c.x,c.y),o.rotate(c.rotation*Math.PI/180),o.fillStyle="#c8b095",o.fillRect(-c.w/2,-c.h/2,c.w,c.h),o.restore());o.lineWidth=9,o.strokeStyle="#4f6159";for(let c of t.walls)o.beginPath(),o.moveTo(c.x1,c.y1),o.lineTo(c.x2,c.y2),o.stroke();o.textAlign="center",o.font="bold 25px sans-serif",o.fillStyle="#40473a";for(let c of t.rooms)c.label&&o.fillText(c.name,c.label.x,c.label.y,250);let a=(c,l,u)=>{c&&(o.beginPath(),o.arc(c.x,c.y,19,0,2*Math.PI),o.fillStyle=l,o.fill(),o.fillStyle="#fff",o.fillText(u,c.x,c.y+8))};a(e,"#714985","R"),s.forEach(({plan:c,radar:l},u)=>{if(r?.transform){let[h,f,d,m,y,p]=r.transform,g=h*l.x+f*l.y+d,x=m*l.x+y*l.y+p;o.strokeStyle="#ae5339",o.lineWidth=5,o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(g,x),o.stroke(),o.beginPath(),o.arc(g,x,9,0,2*Math.PI),o.stroke()}a(c,"#376555",String(u+1))}),a(i,"#855f2f","+")}function cy(n,t,{api:e,bridge:i}){let s=n.getElementById("radarCalibrationDialog");if(!s)return null;let r=n.getElementById("radarCalibrationPlan"),o=N=>s.querySelector(`[data-survey="${N}"]`),a=o("x"),c=o("y"),l=o("distance"),u=o("status"),h=o("quality"),f=o("points"),d=o("capture"),m=o("undo"),y=o("apply"),p=N=>new Promise(O=>t.setTimeout(O,N)),g,x,v,b,_=[],S=0,C=!1;function M(){b=_.length>=3?ry(_):void 0,d.disabled=C||!v||!i?.request||!oy.test(x?.presenceTrackEntityId??"")||_.length>=qE,m.disabled=C||!_.length,y.disabled=C||!b?.transform;let N=_.map(({plan:B},L)=>{let k=n.createElement("li");return k.textContent=`Point ${L+1} \xB7 ${B.x}, ${B.y}`,k});f.replaceChildren(...N);let O=b?.error??"";if(b?.transform){let{pixelsPerMetre:B,rmsCm:L,maxErrorCm:k,validationCm:H,origin:W}=b;O=`${B.toFixed(1)} plan px/m \xB7 ${Math.round(L)} cm fit error \xB7 ${Math.round(k)} cm worst point.`,Number.isFinite(H)?O+=` Independent check ${Math.round(H)} cm.`:O+=" Add a fourth point to check the result.";let et=Math.hypot(W.x-x.x,W.y-x.y)*100/B;if(et>40&&(O+=` Fitted sensor origin is ${Math.round(et)} cm from its map marker.`),l.valueAsNumber>0){let[K,Z]=_,nt=Math.hypot(K.plan.x-Z.plan.x,K.plan.y-Z.plan.y)/l.valueAsNumber;O+=` Tape measure gives ${nt.toFixed(1)} plan px/m between points 1 and 2.`}}h.textContent=O,$E(r,g,x,v,_,b)}function A(){let N=a.valueAsNumber,O=c.valueAsNumber;v=Number.isFinite(N)&&Number.isFinite(O)&&N>=0&&N<=r.width&&O>=0&&O<=r.height?{x:Math.round(N),y:Math.round(O)}:void 0,M()}function D(N){if(!N.target.closest?.("[data-radar-calibration]"))return;let O=e.getSelection();g=e.getProject(),x=O?.kind==="item"?g.items.find(B=>B.id===O.id&&B.type==="presenceSwitch"):null,x&&(S++,_=[],v=void 0,C=!1,a.value=c.value=l.value="",u.textContent=i?.request?oy.test(x.presenceTrackEntityId??"")?"Choose a location to begin.":"Link a radar targets entity first.":"Open Studio from Home Assistant to capture live radar points.",s.showModal(),M())}return n.addEventListener("click",D),r.addEventListener("click",N=>{if(C)return;let O=r.getBoundingClientRect();a.value=Math.round((N.clientX-O.left)*r.width/O.width),c.value=Math.round((N.clientY-O.top)*r.height/O.height),A()}),a.addEventListener("input",A),c.addEventListener("input",A),l.addEventListener("input",M),d.addEventListener("click",async()=>{if(d.disabled)return;C=!0;let N=S,O=x.presenceTrackEntityId,B=v;u.textContent="Waiting for three fresh reports. Hold still on the chosen point.",M();let L;try{L=await YE(async()=>(await i.request("TRACK_GET",[O]))?.[O],p,Date.now,()=>N===S&&s.open)}catch{L={error:"Home Assistant could not read the radar. Check the connection and retry."}}N!==S||!s.open||(C=!1,L.point&&(_.push({plan:B,radar:L.point}),a.value=c.value="",v=void 0),u.textContent=L.error??`Captured point ${_.length}. Choose another location.`,M())}),m.addEventListener("click",()=>{_.pop(),M()}),y.addEventListener("click",()=>{b?.transform&&(e.setRadarCalibration(x.id,x.presenceTrackEntityId,b.transform)?s.close():u.textContent="The radar source changed. Reopen calibration for the current sensor.")}),s.addEventListener("close",()=>{S++}),{dispose(){S++,n.removeEventListener("click",D),s.open&&s.close()}}}var ZE=22,jE=5,KE=1e3/12,JE=1e3,QE=12;function tT(n,t,e){let i=I0(n,t,e),s=new Set(i.map(r=>r.id));for(let r of n.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let h=a/2;h<=e-a/2;h+=a+4)c.push({...r,x:u,y:h,w:o,h:a});c.sort((u,h)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(h.x-r.x,h.y-r.y));let l=c.find(u=>i.every(h=>Math.abs(u.x-h.x)>=(u.w+h.w)/2+2||Math.abs(u.y-h.y)>=(u.h+h.h)/2+2));l&&i.push(l)}return i}function eT(n,t){if(!t)return!1;let e=(Number(n.rotation)||0)*Math.PI/180,i=t.x-n.x,s=t.y-n.y,r=i*Math.cos(e)+s*Math.sin(e),o=-i*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=n.w/2&&Math.abs(o)<=n.h/2}function nT(n,t,e,i,s,r){let o=n.flatMap((a,c)=>{let l=i.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),h=u<=ZE;return!h&&(a.type==="garageDoor"||!eT(a,e))?[]:[{item:a,index:c,distance:u,near:h,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function iT(n,t){let e=t.RoomcraftEditorViewport,i=n.getElementById("sceneCanvas"),s=n.getElementById("viewport"),r=n.getElementById("sceneView");if(!e||!i||!s||!r)return null;Gm(r,!0);let o={left:n.getElementById("sceneRotateLeft"),right:n.getElementById("sceneRotateRight"),out:n.getElementById("sceneZoomOut"),in:n.getElementById("sceneZoomIn")},a=n.getElementById("sceneCameraOptions"),c=n.getElementById("sceneReset"),l=n.getElementById("sceneSaveDefault"),u=n.getElementById("sceneClearDefault"),h=n.getElementById("sceneDefaultStatus"),f=qm(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),m=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,y=cy(n,t,{api:e,bridge:m}),p=ty(n,t,{api:e,viewport:s,bridge:m,onChange:()=>{z(L?.item&&L.position?{[L.item.id]:{position:L.position}}:void 0)}}),g=n.createElement("div");g.className="scene-selection",g.setAttribute("aria-hidden","true"),Object.assign(g.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(g);let x=n.createElement("div");x.className="scene-placeholders",Object.assign(x.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(x);let v=n.createElementNS("http://www.w3.org/2000/svg","svg");v.classList.add("scene-placeholder-leaders"),v.setAttribute("aria-hidden","true"),Object.assign(v.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(v,x);let b=new Map,_=n.getElementById("miniHelp"),S=_?.textContent,C=i.getAttribute("aria-label")??"Editable three-dimensional home view",M,A,D,N=uf(null),O=r.value,B="default",L,k,H,W=-1/0,et=0,K,Z=!1,nt=!1,Tt=null,At=!1,Mt=[],_t=[],Lt="",ot=0,ht,St=!1,zt={},Ot=B0(),q={key:"",scene:null,reduceMotion:!1},yt={id:null,scene:null},X=()=>O!=="plan",j=()=>O==="free",st=()=>d?.matches===!0||!p.motionEnabled(),ct=()=>i.getBoundingClientRect(),dt=gt=>{let Dt=ct();return{x:gt.clientX-Dt.left,y:gt.clientY-Dt.top}};function Ct(gt){e.showStatus?.(gt)}function It(){if(!(!Z&&(M?.hasAmbientMotion||M?.hasPeopleMotion)&&X()&&!n.hidden&&!st())){t.cancelAnimationFrame(H),H=void 0;return}H===void 0&&(H=t.requestAnimationFrame(Dt=>{if(H=void 0,Dt-W>=KE-1){W=Dt,et=Dt/1e3;try{K&&M.render(et,...K)}catch{E()}}It()}))}function Nt(gt=!0){let Dt=X()?M:null,Vt=st(),Zt=Bt()?Dt?Ot.read(Mt,zt,Date.now(),{contains:Dt.canPlacePerson,nearest:Dt.nearestPersonPoint}):Wf(Mt,zt):[],fe=JSON.stringify(Zt);fe===q.key&&Dt===q.scene&&Vt===q.reduceMotion||(q={key:fe,scene:Dt,reduceMotion:Vt},Dt&&(Dt.setPeople(Zt,(t.performance?.now()??0)/1e3,{reduceMotion:Vt}),gt&&z()),e.setPersonPreview?.(Dt?[]:Zt))}function Bt(){return!!(m?.request&&_t.length&&!Z&&!n.hidden)}async function Y(gt=!0){if(gt&&Nt(),St||!Bt())return;St=!0;let Dt=ot;try{let Vt=await m.request("TRACK_GET",_t);Dt===ot&&Bt()&&(zt=Vt&&typeof Vt=="object"?Vt:{},Nt())}catch{Dt===ot&&(zt={},Nt())}finally{St=!1}}function ie(){Bt()?ht===void 0&&(ht=t.setInterval(Y,JE),Y(!1)):ht!==void 0&&(t.clearInterval(ht),ht=void 0,ot++,zt={})}function qt(gt){Mt=gt.filter(Xf).slice(0,QE);let Dt=[...new Set(Mt.flatMap(Zt=>[Zt.presenceTrackEntityId,Zt.presenceEntityId]).filter(Zt=>/^(?:sensor|binary_sensor)\.[a-z0-9_]+$/.test(Zt??"")))],Vt=Dt.join(",");Vt!==Lt&&(Lt=Vt,_t=Dt,ot++,zt={}),ie()}function z(gt){if(It(),!M||!X())return;let{width:Dt,height:Vt}=ct();if(!Dt||!Vt)return;M.resize(Dt,Vt);let Zt=e.getSelection(),fe=Zt?.kind==="item"?Zt.id:null;if(yt.scene!==M||yt.id!==fe){let ge=A.items.find(je=>je.id===fe);M.setDetectionZones(ge?k0([ge]):[]),yt={id:fe,scene:M}}let Ze=st(),zn=p.sync(!0,A.sceneSettings,Ze),dn=Object.create(null);for(let ge of A.items){let je=zn.states[ge.id];je&&je.entityId===ge.entityId&&(dn[ge.id]=je)}if(K=[dn,{...zn.environment,reduceMotion:Ze},{showTelemetryPosition:!1,draftPositions:gt}],M.render(et,...K),j())return;let Pn=[];for(let[ge,je]of b){let P=M.anchor(ge);if(je.hidden=!P,P){let rt=A.items.find(pt=>pt.id===ge),bt=rt?.type==="cameraThumbnail"?Xm(rt,Dt):{w:96,h:44};Pn.push({id:ge,marker:je,x:P.x*Dt,y:P.y*Vt,...bt})}}let be=tT(Pn,Dt,Vt),ss=new Set(be.map(ge=>ge.id)),Si=[];for(let ge of be){let{marker:je,x:P,y:rt,w:bt,h:pt,id:mt}=ge;Object.assign(je.style,{left:`${P}px`,top:`${rt}px`,width:`${bt}px`,height:`${pt}px`});let Wt=Pn.find(Yt=>Yt.id===mt);if(Math.hypot(Wt.x-P,Wt.y-rt)>8){let Yt=n.createElementNS("http://www.w3.org/2000/svg","line");for(let[Xt,Kt]of Object.entries({x1:Wt.x,y1:Wt.y,x2:P,y2:rt}))Yt.setAttribute(Xt,Kt);Yt.setAttribute("stroke","#6f816b"),Yt.setAttribute("stroke-width","1"),Yt.setAttribute("stroke-dasharray","3 3"),Si.push(Yt)}}for(let[ge,je]of b)je.hidden=!ss.has(ge);v.replaceChildren(...Si);let en=Zt?.kind==="item"?M.anchor(Zt.id):null;g.style.display=en?"block":"none",en&&(g.style.left=`${en.x*Dt}px`,g.style.top=`${en.y*Vt}px`)}function T(){if(!L)return;let gt=L;L=void 0;try{i.releasePointerCapture(gt.pointerId)}catch{}gt.item&&z({[gt.item.id]:{position:{x:gt.item.x,y:gt.item.y}}})}function it(){a&&(a.hidden=!X());for(let gt of Object.values(o))gt&&(gt.disabled=!X());l&&(l.hidden=!M||!j(),l.disabled=At),u&&(u.hidden=!M||!X()||!Tt,u.disabled=At)}function ft(gt){h&&(h.textContent=gt)}function xt(){nt=!0,ft("")}function V(){i.tabIndex=j()?0:-1,i.style.cursor=j()?"grab":"",i.setAttribute("aria-label",j()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":C)}function w(gt,{initial:Dt=!1}={}){Dt||(xt(),gt==="default"&&(nt=!1)),lt.cancel(),T();let Vt=M?.getView()??N,Zt=Object.hasOwn(Qr,gt)?gt:"plan";Zt!=="plan"&&e.useSelectTool?.(),O=Zt,X()&&!j()&&(B=O),r.value=O,i.hidden=!X(),V();let fe=X()&&!j();if(x.style.display=fe?"block":"none",v.style.display=fe?"block":"none",fe||(g.style.display="none"),_&&(j()?_.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":_.textContent=X()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":S),s.classList.toggle("scene-3d",X()),it(),!X()){R(),It(),p.sync(!1,e.getProject().sceneSettings),Ct("Plan view \xB7 edit rooms, walls, floors and objects");return}let Ze=O==="default"?uf(Tt):j()?Vm(Vt):{preset:O};N=M?M.setView(Ze):Ze,R(),M&&Ct(j()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function E(){lt.cancel(),M?.dispose(),M=void 0,D=void 0,O="plan",It(),r.value=O,i.hidden=!0,p.sync(!1,e.getProject().sceneSettings),V(),x.style.display="none",v.style.display="none",_&&(_.textContent=S),s.classList.remove("scene-3d"),g.style.display="none",it(),Nt(!1),Ct("3D view is unavailable on this screen. Plan view is ready.")}function R(){if(Z)return;let gt=e.getProject();if(qt(gt.items),!X()){p.sync(!1,gt.sceneSettings),Nt();return}let Dt=JSON.stringify(gt);try{if(!M||Dt!==D){T(),M&&(N=M.getView()),M?.dispose(),M=void 0,A=gt,M=E0(i,A),M.setView(N),D=Dt,b.clear(),x.replaceChildren();for(let Vt of A.items.filter(Zt=>Zt.type==="cameraThumbnail"||Zt.type.startsWith("ui"))){let Zt=n.createElement("button");Zt.type="button",Zt.className="scene-placeholder",Zt.textContent=Vt.name||(Vt.type==="cameraThumbnail"?"Camera":"Interface"),Zt.setAttribute("aria-label",`Select ${Zt.textContent}`),Object.assign(Zt.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),Zt.addEventListener("pointerdown",fe=>Rt(fe,Vt.id)),Zt.addEventListener("click",fe=>{!j()&&fe.detail===0&&(e.selectItem(Vt.id),z())}),b.set(Vt.id,Zt),x.append(Zt)}}it(),Nt(!1),z()}catch{E()}}function F(gt){!M||!X()||(xt(),T(),M.setView(gt(M.getView())),N=M.getView(),z())}let U=()=>R(),Q=()=>{let gt=e.getTool();X()&&gt!=="select"?w("plan"):j()&&e.hasPlacement()?w(B):X()&&z()},$=()=>w(r.value),ut=()=>{t.cancelAnimationFrame(k),k=t.requestAnimationFrame(()=>z())},lt=R0(i,{getView:()=>j()?M?.getView():null,onChange:gt=>{!M||!j()||(xt(),N=M.setView(gt),ut())}}),Rt=(gt,Dt=null)=>{if(!X()||j()||!M||gt.button!==0||L)return;gt.preventDefault(),gt.stopPropagation();let Vt=dt(gt);if(e.hasPlacement()){let be=M.projectToPlan(Vt.x,Vt.y,e.getPlacementType(),{preferTabletop:!0});be&&e.placeAt(be.x,be.y),R();return}let{width:Zt,height:fe}=ct(),Ze=new Map(A.items.map(be=>[be.id,M.anchor(be.id)])),zn=Dt??M.pickGarage(Vt.x,Vt.y),dn=zn?A.items.find(be=>be.id===zn):nT(A.items,Vt,M.projectToPlan(Vt.x,Vt.y),Ze,Zt,fe);if(e.selectItem(dn?.id??null),!dn){z();return}let Pn=M.projectToPlan(Vt.x,Vt.y,dn.type);Pn&&(L={item:{...dn},startScreen:Vt,startPlan:Pn,pointerId:gt.pointerId},i.setPointerCapture(gt.pointerId),z())},I=gt=>{if(!X()||j()||(gt.stopPropagation(),!L||L.pointerId!==gt.pointerId||!M))return;let Dt=dt(gt);if(!L.moved&&Math.hypot(Dt.x-L.startScreen.x,Dt.y-L.startScreen.y)<jE)return;let Vt=M.projectToPlan(Dt.x,Dt.y,L.item.type);if(!Vt)return;L.moved=!0;let Zt={x:L.item.x+Vt.x-L.startPlan.x,y:L.item.y+Vt.y-L.startPlan.y},fe=e.moveItemWarning?.(L.item.id,Zt.x,Zt.y);if(fe){fe!==L.warning&&Ct(fe),L.warning=fe;return}L.warning&&Ct(`Moving ${L.item.name||"object"}`),L.warning=void 0,L.position=Zt,z({[L.item.id]:{position:L.position}})},J=gt=>{if(!X()||j()||(gt.stopPropagation(),!L||L.pointerId!==gt.pointerId))return;let Dt=L;L=void 0;try{i.releasePointerCapture(gt.pointerId)}catch{}Dt.moved&&Dt.position?(e.moveItem(Dt.item.id,Dt.position.x,Dt.position.y),R()):z()},tt=gt=>{j()||(L?.pointerId===gt.pointerId&&T(),gt.stopPropagation())},wt=gt=>{!X()||j()||(gt.preventDefault(),gt.stopPropagation(),F(Dt=>({...Dt,zoom:Dt.zoom*(gt.deltaY<0?1.1:1/1.1)})))},Et=gt=>{j()&&gt.target===i&&(gt.key==="Delete"||gt.key==="Backspace")&&(gt.preventDefault(),gt.stopImmediatePropagation()),gt.key==="Escape"&&L&&(gt.preventDefault(),gt.stopImmediatePropagation(),T())},vt=gt=>{gt.preventDefault(),E()},Ut=()=>F(gt=>({...gt,azimuth:gt.azimuth-15})),kt=()=>F(gt=>({...gt,azimuth:gt.azimuth+15})),le=()=>F(gt=>({...gt,zoom:gt.zoom/1.2})),re=()=>F(gt=>({...gt,zoom:gt.zoom*1.2})),Se=()=>w("top"),Ee=()=>{Nt(!1),z()},on=()=>{ie(),Nt(),It()};n.addEventListener("visibilitychange",on),d?.addEventListener("change",Ee);async function $e(){At=!0,it();try{Tt=await f.read(),!Z&&!nt&&w("default",{initial:!0})}catch{Z||ft("Saved view unavailable")}finally{At=!1,Z||it()}}async function an(gt){if(!(!M||!X()||At)){At=!0,ft("Saving view\u2026"),it();try{if(await f.write(gt),Z)return;Tt=gt,gt||w("default"),ft(gt?"Default view saved":"Top down is the default")}catch{Z||ft("Could not save default view")}finally{At=!1,Z||it()}}}let cn=()=>{j()&&M&&an(M.getView())},Pt=()=>an(null);o.left?.addEventListener("click",Ut),o.right?.addEventListener("click",kt),o.out?.addEventListener("click",le),o.in?.addEventListener("click",re),c?.addEventListener("click",Se),l?.addEventListener("click",cn),u?.addEventListener("click",Pt),r.addEventListener("change",$),i.addEventListener("pointerdown",Rt),i.addEventListener("pointermove",I),i.addEventListener("pointerup",J),i.addEventListener("pointercancel",tt),i.addEventListener("lostpointercapture",tt),i.addEventListener("wheel",wt,{passive:!1}),i.addEventListener("webglcontextlost",vt),t.addEventListener("keydown",Et,!0),t.addEventListener("roomcraft-editor-change",U),t.addEventListener("roomcraft-editor-tool",Q);let Ht=new t.ResizeObserver(ut);Ht.observe(s),w(O,{initial:!0});try{(t.location.hash==="#scene-settings"||m&&t.parent.location.hash==="#scene-settings")&&p.open()}catch{}return $e(),{getView:()=>M?.getView()??{...N},setView:w,dispose(){Z=!0,It(),ie(),n.removeEventListener("visibilitychange",on),d?.removeEventListener("change",Ee),T(),lt.dispose(),O="plan",V(),Ht.disconnect(),t.cancelAnimationFrame(k),M?.dispose(),M=void 0,g.remove(),x.remove(),v.remove(),p.dispose(),y?.dispose(),_&&(_.textContent=S),o.left?.removeEventListener("click",Ut),o.right?.removeEventListener("click",kt),o.out?.removeEventListener("click",le),o.in?.removeEventListener("click",re),c?.removeEventListener("click",Se),l?.removeEventListener("click",cn),u?.removeEventListener("click",Pt),r.removeEventListener("change",$),i.removeEventListener("pointerdown",Rt),i.removeEventListener("pointermove",I),i.removeEventListener("pointerup",J),i.removeEventListener("pointercancel",tt),i.removeEventListener("lostpointercapture",tt),i.removeEventListener("wheel",wt),i.removeEventListener("webglcontextlost",vt),t.removeEventListener("keydown",Et,!0),t.removeEventListener("roomcraft-editor-change",U),t.removeEventListener("roomcraft-editor-tool",Q)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=kf,iT(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
