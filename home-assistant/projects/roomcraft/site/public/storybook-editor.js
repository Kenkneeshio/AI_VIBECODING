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
"use strict";(()=>{var Cf=Object.create;var Xc=Object.defineProperty;var If=Object.getOwnPropertyDescriptor;var Pf=Object.getOwnPropertyNames;var Lf=Object.getPrototypeOf,Nf=Object.prototype.hasOwnProperty;var Df=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Uf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Pf(t))!Nf.call(i,s)&&s!==e&&Xc(i,s,{get:()=>t[s],enumerable:!(n=If(t,s))||n.enumerable});return i};var Ff=(i,t,e)=>(e=i!=null?Cf(Lf(i)):{},Uf(t||!i||!i.__esModule?Xc(e,"default",{value:i,enumerable:!0}):e,i));var tf=Df((Nc,Dc)=>{(function(i,t){typeof Nc=="object"&&typeof Dc<"u"?Dc.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(Nc,(function(){"use strict";/**
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
    ***************************************************************************** */function i(D,x){var _={label:0,sent:function(){if(P[0]&1)throw P[1];return P[1]},trys:[],ops:[]},b,I,P,V;return V={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function B(K){return function(yt){return tt([K,yt])}}function tt(K){if(b)throw new TypeError("Generator is already executing.");for(;_;)try{if(b=1,I&&(P=K[0]&2?I.return:K[0]?I.throw||((P=I.return)&&P.call(I),0):I.next)&&!(P=P.call(I,K[1])).done)return P;switch(I=0,P&&(K=[K[0]&2,P.value]),K[0]){case 0:case 1:P=K;break;case 4:return _.label++,{value:K[1],done:!1};case 5:_.label++,I=K[1],K=[0];continue;case 7:K=_.ops.pop(),_.trys.pop();continue;default:if(P=_.trys,!(P=P.length>0&&P[P.length-1])&&(K[0]===6||K[0]===2)){_=0;continue}if(K[0]===3&&(!P||K[1]>P[0]&&K[1]<P[3])){_.label=K[1];break}if(K[0]===6&&_.label<P[1]){_.label=P[1],P=K;break}if(P&&_.label<P[2]){_.label=P[2],_.ops.push(K);break}P[2]&&_.ops.pop(),_.trys.pop();continue}K=x.call(D,_)}catch(yt){K=[6,yt],I=0}finally{b=P=0}if(K[0]&5)throw K[1];return{value:K[0]?K[1]:void 0,done:!0}}}var t=(function(){function D(x,_){this.next=null,this.key=x,this.data=_,this.left=null,this.right=null}return D})();function e(D,x){return D>x?1:D<x?-1:0}function n(D,x,_){for(var b=new t(null,null),I=b,P=b;;){var V=_(D,x.key);if(V<0){if(x.left===null)break;if(_(D,x.left.key)<0){var B=x.left;if(x.left=B.right,B.right=x,x=B,x.left===null)break}P.left=x,P=x,x=x.left}else if(V>0){if(x.right===null)break;if(_(D,x.right.key)>0){var B=x.right;if(x.right=B.left,B.left=x,x=B,x.right===null)break}I.right=x,I=x,x=x.right}else break}return I.right=x.left,P.left=x.right,x.left=b.right,x.right=b.left,x}function s(D,x,_,b){var I=new t(D,x);if(_===null)return I.left=I.right=null,I;_=n(D,_,b);var P=b(D,_.key);return P<0?(I.left=_.left,I.right=_,_.left=null):P>=0&&(I.right=_.right,I.left=_,_.right=null),I}function r(D,x,_){var b=null,I=null;if(x){x=n(D,x,_);var P=_(x.key,D);P===0?(b=x.left,I=x.right):P<0?(I=x.right,x.right=null,b=x):(b=x.left,x.left=null,I=x)}return{left:b,right:I}}function o(D,x,_){return x===null?D:(D===null||(x=n(D.key,x,_),x.left=D),x)}function a(D,x,_,b,I){if(D){b(""+x+(_?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+I(D)+`
`);var P=x+(_?"    ":"\u2502   ");D.left&&a(D.left,P,!1,b,I),D.right&&a(D.right,P,!0,b,I)}}var l=(function(){function D(x){x===void 0&&(x=e),this._root=null,this._size=0,this._comparator=x}return D.prototype.insert=function(x,_){return this._size++,this._root=s(x,_,this._root,this._comparator)},D.prototype.add=function(x,_){var b=new t(x,_);this._root===null&&(b.left=b.right=null,this._size++,this._root=b);var I=this._comparator,P=n(x,this._root,I),V=I(x,P.key);return V===0?this._root=P:(V<0?(b.left=P.left,b.right=P,P.left=null):V>0&&(b.right=P.right,b.left=P,P.right=null),this._size++,this._root=b),this._root},D.prototype.remove=function(x){this._root=this._remove(x,this._root,this._comparator)},D.prototype._remove=function(x,_,b){var I;if(_===null)return null;_=n(x,_,b);var P=b(x,_.key);return P===0?(_.left===null?I=_.right:(I=n(x,_.left,b),I.right=_.right),this._size--,I):_},D.prototype.pop=function(){var x=this._root;if(x){for(;x.left;)x=x.left;return this._root=n(x.key,this._root,this._comparator),this._root=this._remove(x.key,this._root,this._comparator),{key:x.key,data:x.data}}return null},D.prototype.findStatic=function(x){for(var _=this._root,b=this._comparator;_;){var I=b(x,_.key);if(I===0)return _;I<0?_=_.left:_=_.right}return null},D.prototype.find=function(x){return this._root&&(this._root=n(x,this._root,this._comparator),this._comparator(x,this._root.key)!==0)?null:this._root},D.prototype.contains=function(x){for(var _=this._root,b=this._comparator;_;){var I=b(x,_.key);if(I===0)return!0;I<0?_=_.left:_=_.right}return!1},D.prototype.forEach=function(x,_){for(var b=this._root,I=[],P=!1;!P;)b!==null?(I.push(b),b=b.left):I.length!==0?(b=I.pop(),x.call(_,b),b=b.right):P=!0;return this},D.prototype.range=function(x,_,b,I){for(var P=[],V=this._comparator,B=this._root,tt;P.length!==0||B;)if(B)P.push(B),B=B.left;else{if(B=P.pop(),tt=V(B.key,_),tt>0)break;if(V(B.key,x)>=0&&b.call(I,B))return this;B=B.right}return this},D.prototype.keys=function(){var x=[];return this.forEach(function(_){var b=_.key;return x.push(b)}),x},D.prototype.values=function(){var x=[];return this.forEach(function(_){var b=_.data;return x.push(b)}),x},D.prototype.min=function(){return this._root?this.minNode(this._root).key:null},D.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},D.prototype.minNode=function(x){if(x===void 0&&(x=this._root),x)for(;x.left;)x=x.left;return x},D.prototype.maxNode=function(x){if(x===void 0&&(x=this._root),x)for(;x.right;)x=x.right;return x},D.prototype.at=function(x){for(var _=this._root,b=!1,I=0,P=[];!b;)if(_)P.push(_),_=_.left;else if(P.length>0){if(_=P.pop(),I===x)return _;I++,_=_.right}else b=!0;return null},D.prototype.next=function(x){var _=this._root,b=null;if(x.right){for(b=x.right;b.left;)b=b.left;return b}for(var I=this._comparator;_;){var P=I(x.key,_.key);if(P===0)break;P<0?(b=_,_=_.left):_=_.right}return b},D.prototype.prev=function(x){var _=this._root,b=null;if(x.left!==null){for(b=x.left;b.right;)b=b.right;return b}for(var I=this._comparator;_;){var P=I(x.key,_.key);if(P===0)break;P<0?_=_.left:(b=_,_=_.right)}return b},D.prototype.clear=function(){return this._root=null,this._size=0,this},D.prototype.toList=function(){return d(this._root)},D.prototype.load=function(x,_,b){_===void 0&&(_=[]),b===void 0&&(b=!1);var I=x.length,P=this._comparator;if(b&&g(x,_,0,I-1,P),this._root===null)this._root=c(x,_,0,I),this._size=I;else{var V=u(this.toList(),h(x,_),P);I=this._size+I,this._root=f({head:V},0,I)}return this},D.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(D.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),D.prototype.toString=function(x){x===void 0&&(x=function(b){return String(b.key)});var _=[];return a(this._root,"",!0,function(b){return _.push(b)},x),_.join("")},D.prototype.update=function(x,_,b){var I=this._comparator,P=r(x,this._root,I),V=P.left,B=P.right;I(x,_)<0?B=s(_,b,B,I):V=s(_,b,V,I),this._root=o(V,B,I)},D.prototype.split=function(x){return r(x,this._root,this._comparator)},D.prototype[Symbol.iterator]=function(){var x,_,b;return i(this,function(I){switch(I.label){case 0:x=this._root,_=[],b=!1,I.label=1;case 1:return b?[3,6]:x===null?[3,2]:(_.push(x),x=x.left,[3,5]);case 2:return _.length===0?[3,4]:(x=_.pop(),[4,x]);case 3:return I.sent(),x=x.right,[3,5];case 4:b=!0,I.label=5;case 5:return[3,1];case 6:return[2]}})},D})();function c(D,x,_,b){var I=b-_;if(I>0){var P=_+Math.floor(I/2),V=D[P],B=x[P],tt=new t(V,B);return tt.left=c(D,x,_,P),tt.right=c(D,x,P+1,b),tt}return null}function h(D,x){for(var _=new t(null,null),b=_,I=0;I<D.length;I++)b=b.next=new t(D[I],x[I]);return b.next=null,_.next}function d(D){for(var x=D,_=[],b=!1,I=new t(null,null),P=I;!b;)x?(_.push(x),x=x.left):_.length>0?(x=P=P.next=_.pop(),x=x.right):b=!0;return P.next=null,I.next}function f(D,x,_){var b=_-x;if(b>0){var I=x+Math.floor(b/2),P=f(D,x,I),V=D.head;return V.left=P,D.head=D.head.next,V.right=f(D,I+1,_),V}return null}function u(D,x,_){for(var b=new t(null,null),I=b,P=D,V=x;P!==null&&V!==null;)_(P.key,V.key)<0?(I.next=P,P=P.next):(I.next=V,V=V.next),I=I.next;return P!==null?I.next=P:V!==null&&(I.next=V),b.next}function g(D,x,_,b,I){if(!(_>=b)){for(var P=D[_+b>>1],V=_-1,B=b+1;;){do V++;while(I(D[V],P)<0);do B--;while(I(D[B],P)>0);if(V>=B)break;var tt=D[V];D[V]=D[B],D[B]=tt,tt=x[V],x[V]=x[B],x[B]=tt}g(D,x,_,B,I),g(D,x,B+1,b,I)}}let y=(D,x)=>D.ll.x<=x.x&&x.x<=D.ur.x&&D.ll.y<=x.y&&x.y<=D.ur.y,m=(D,x)=>{if(x.ur.x<D.ll.x||D.ur.x<x.ll.x||x.ur.y<D.ll.y||D.ur.y<x.ll.y)return null;let _=D.ll.x<x.ll.x?x.ll.x:D.ll.x,b=D.ur.x<x.ur.x?D.ur.x:x.ur.x,I=D.ll.y<x.ll.y?x.ll.y:D.ll.y,P=D.ur.y<x.ur.y?D.ur.y:x.ur.y;return{ll:{x:_,y:I},ur:{x:b,y:P}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let E=p*p,A=(D,x)=>{if(-p<D&&D<p&&-p<x&&x<p)return 0;let _=D-x;return _*_<E*D*x?0:D<x?-1:1};class M{constructor(){this.reset()}reset(){this.xRounder=new C,this.yRounder=new C}round(x,_){return{x:this.xRounder.round(x),y:this.yRounder.round(_)}}}class C{constructor(){this.tree=new l,this.round(0)}round(x){let _=this.tree.add(x),b=this.tree.prev(_);if(b!==null&&A(_.key,b.key)===0)return this.tree.remove(x),b.key;let I=this.tree.next(_);return I!==null&&A(_.key,I.key)===0?(this.tree.remove(x),I.key):x}}let T=new M,U=11102230246251565e-32,S=134217729,L=(3+8*U)*U;function F(D,x,_,b,I){let P,V,B,tt,K=x[0],yt=b[0],R=0,J=0;yt>K==yt>-K?(P=K,K=x[++R]):(P=yt,yt=b[++J]);let H=0;if(R<D&&J<_)for(yt>K==yt>-K?(V=K+P,B=P-(V-K),K=x[++R]):(V=yt+P,B=P-(V-yt),yt=b[++J]),P=V,B!==0&&(I[H++]=B);R<D&&J<_;)yt>K==yt>-K?(V=P+K,tt=V-P,B=P-(V-tt)+(K-tt),K=x[++R]):(V=P+yt,tt=V-P,B=P-(V-tt)+(yt-tt),yt=b[++J]),P=V,B!==0&&(I[H++]=B);for(;R<D;)V=P+K,tt=V-P,B=P-(V-tt)+(K-tt),K=x[++R],P=V,B!==0&&(I[H++]=B);for(;J<_;)V=P+yt,tt=V-P,B=P-(V-tt)+(yt-tt),yt=b[++J],P=V,B!==0&&(I[H++]=B);return(P!==0||H===0)&&(I[H++]=P),H}function z(D,x){let _=x[0];for(let b=1;b<D;b++)_+=x[b];return _}function W(D){return new Float64Array(D)}let q=(3+16*U)*U,O=(2+12*U)*U,Z=(9+64*U)*U*U,nt=W(4),Q=W(8),at=W(12),rt=W(16),et=W(4);function ut(D,x,_,b,I,P,V){let B,tt,K,yt,R,J,H,pt,mt,ht,vt,bt,jt,qt,fe,pe,je,Le,Qe=D-I,Xe=_-I,sn=x-P,tn=b-P;qt=Qe*tn,J=S*Qe,H=J-(J-Qe),pt=Qe-H,J=S*tn,mt=J-(J-tn),ht=tn-mt,fe=pt*ht-(qt-H*mt-pt*mt-H*ht),pe=sn*Xe,J=S*sn,H=J-(J-sn),pt=sn-H,J=S*Xe,mt=J-(J-Xe),ht=Xe-mt,je=pt*ht-(pe-H*mt-pt*mt-H*ht),vt=fe-je,R=fe-vt,nt[0]=fe-(vt+R)+(R-je),bt=qt+vt,R=bt-qt,jt=qt-(bt-R)+(vt-R),vt=jt-pe,R=jt-vt,nt[1]=jt-(vt+R)+(R-pe),Le=bt+vt,R=Le-bt,nt[2]=bt-(Le-R)+(vt-R),nt[3]=Le;let fn=z(4,nt),rn=O*V;if(fn>=rn||-fn>=rn||(R=D-Qe,B=D-(Qe+R)+(R-I),R=_-Xe,K=_-(Xe+R)+(R-I),R=x-sn,tt=x-(sn+R)+(R-P),R=b-tn,yt=b-(tn+R)+(R-P),B===0&&tt===0&&K===0&&yt===0)||(rn=Z*V+L*Math.abs(fn),fn+=Qe*yt+tn*B-(sn*K+Xe*tt),fn>=rn||-fn>=rn))return fn;qt=B*tn,J=S*B,H=J-(J-B),pt=B-H,J=S*tn,mt=J-(J-tn),ht=tn-mt,fe=pt*ht-(qt-H*mt-pt*mt-H*ht),pe=tt*Xe,J=S*tt,H=J-(J-tt),pt=tt-H,J=S*Xe,mt=J-(J-Xe),ht=Xe-mt,je=pt*ht-(pe-H*mt-pt*mt-H*ht),vt=fe-je,R=fe-vt,et[0]=fe-(vt+R)+(R-je),bt=qt+vt,R=bt-qt,jt=qt-(bt-R)+(vt-R),vt=jt-pe,R=jt-vt,et[1]=jt-(vt+R)+(R-pe),Le=bt+vt,R=Le-bt,et[2]=bt-(Le-R)+(vt-R),et[3]=Le;let Fs=F(4,nt,4,et,Q);qt=Qe*yt,J=S*Qe,H=J-(J-Qe),pt=Qe-H,J=S*yt,mt=J-(J-yt),ht=yt-mt,fe=pt*ht-(qt-H*mt-pt*mt-H*ht),pe=sn*K,J=S*sn,H=J-(J-sn),pt=sn-H,J=S*K,mt=J-(J-K),ht=K-mt,je=pt*ht-(pe-H*mt-pt*mt-H*ht),vt=fe-je,R=fe-vt,et[0]=fe-(vt+R)+(R-je),bt=qt+vt,R=bt-qt,jt=qt-(bt-R)+(vt-R),vt=jt-pe,R=jt-vt,et[1]=jt-(vt+R)+(R-pe),Le=bt+vt,R=Le-bt,et[2]=bt-(Le-R)+(vt-R),et[3]=Le;let Or=F(Fs,Q,4,et,at);qt=B*yt,J=S*B,H=J-(J-B),pt=B-H,J=S*yt,mt=J-(J-yt),ht=yt-mt,fe=pt*ht-(qt-H*mt-pt*mt-H*ht),pe=tt*K,J=S*tt,H=J-(J-tt),pt=tt-H,J=S*K,mt=J-(J-K),ht=K-mt,je=pt*ht-(pe-H*mt-pt*mt-H*ht),vt=fe-je,R=fe-vt,et[0]=fe-(vt+R)+(R-je),bt=qt+vt,R=bt-qt,jt=qt-(bt-R)+(vt-R),vt=jt-pe,R=jt-vt,et[1]=jt-(vt+R)+(R-pe),Le=bt+vt,R=Le-bt,et[2]=bt-(Le-R)+(vt-R),et[3]=Le;let Br=F(Or,at,4,et,rt);return rt[Br-1]}function At(D,x,_,b,I,P){let V=(x-P)*(_-I),B=(D-I)*(b-P),tt=V-B,K=Math.abs(V+B);return Math.abs(tt)>=q*K?tt:-ut(D,x,_,b,I,P,K)}let Et=(D,x)=>D.x*x.y-D.y*x.x,Kt=(D,x)=>D.x*x.x+D.y*x.y,Xt=(D,x,_)=>{let b=At(D.x,D.y,x.x,x.y,_.x,_.y);return b>0?-1:b<0?1:0},Zt=D=>Math.sqrt(Kt(D,D)),ft=(D,x,_)=>{let b={x:x.x-D.x,y:x.y-D.y},I={x:_.x-D.x,y:_.y-D.y};return Et(I,b)/Zt(I)/Zt(b)},gt=(D,x,_)=>{let b={x:x.x-D.x,y:x.y-D.y},I={x:_.x-D.x,y:_.y-D.y};return Kt(I,b)/Zt(I)/Zt(b)},wt=(D,x,_)=>x.y===0?null:{x:D.x+x.x/x.y*(_-D.y),y:_},Ht=(D,x,_)=>x.x===0?null:{x:_,y:D.y+x.y/x.x*(_-D.x)},Ct=(D,x,_,b)=>{if(x.x===0)return Ht(_,b,D.x);if(b.x===0)return Ht(D,x,_.x);if(x.y===0)return wt(_,b,D.y);if(b.y===0)return wt(D,x,_.y);let I=Et(x,b);if(I==0)return null;let P={x:_.x-D.x,y:_.y-D.y},V=Et(P,x)/I,B=Et(P,b)/I,tt=D.x+B*x.x,K=_.x+V*b.x,yt=D.y+B*x.y,R=_.y+V*b.y,J=(tt+K)/2,H=(yt+R)/2;return{x:J,y:H}};class Nt{static compare(x,_){let b=Nt.comparePoints(x.point,_.point);return b!==0?b:(x.point!==_.point&&x.link(_),x.isLeft!==_.isLeft?x.isLeft?1:-1:Y.compare(x.segment,_.segment))}static comparePoints(x,_){return x.x<_.x?-1:x.x>_.x?1:x.y<_.y?-1:x.y>_.y?1:0}constructor(x,_){x.events===void 0?x.events=[this]:x.events.push(this),this.point=x,this.isLeft=_}link(x){if(x.point===this.point)throw new Error("Tried to link already linked events");let _=x.point.events;for(let b=0,I=_.length;b<I;b++){let P=_[b];this.point.events.push(P),P.point=this.point}this.checkForConsuming()}checkForConsuming(){let x=this.point.events.length;for(let _=0;_<x;_++){let b=this.point.events[_];if(b.segment.consumedBy===void 0)for(let I=_+1;I<x;I++){let P=this.point.events[I];P.consumedBy===void 0&&b.otherSE.point.events===P.otherSE.point.events&&b.segment.consume(P.segment)}}}getAvailableLinkedEvents(){let x=[];for(let _=0,b=this.point.events.length;_<b;_++){let I=this.point.events[_];I!==this&&!I.segment.ringOut&&I.segment.isInResult()&&x.push(I)}return x}getLeftmostComparator(x){let _=new Map,b=I=>{let P=I.otherSE;_.set(I,{sine:ft(this.point,x.point,P.point),cosine:gt(this.point,x.point,P.point)})};return(I,P)=>{_.has(I)||b(I),_.has(P)||b(P);let{sine:V,cosine:B}=_.get(I),{sine:tt,cosine:K}=_.get(P);return V>=0&&tt>=0?B<K?1:B>K?-1:0:V<0&&tt<0?B<K?-1:B>K?1:0:tt<V?-1:tt>V?1:0}}}let oe=0;class Y{static compare(x,_){let b=x.leftSE.point.x,I=_.leftSE.point.x,P=x.rightSE.point.x,V=_.rightSE.point.x;if(V<b)return 1;if(P<I)return-1;let B=x.leftSE.point.y,tt=_.leftSE.point.y,K=x.rightSE.point.y,yt=_.rightSE.point.y;if(b<I){if(tt<B&&tt<K)return 1;if(tt>B&&tt>K)return-1;let R=x.comparePoint(_.leftSE.point);if(R<0)return 1;if(R>0)return-1;let J=_.comparePoint(x.rightSE.point);return J!==0?J:-1}if(b>I){if(B<tt&&B<yt)return-1;if(B>tt&&B>yt)return 1;let R=_.comparePoint(x.leftSE.point);if(R!==0)return R;let J=x.comparePoint(_.rightSE.point);return J<0?1:J>0?-1:1}if(B<tt)return-1;if(B>tt)return 1;if(P<V){let R=_.comparePoint(x.rightSE.point);if(R!==0)return R}if(P>V){let R=x.comparePoint(_.rightSE.point);if(R<0)return 1;if(R>0)return-1}if(P!==V){let R=K-B,J=P-b,H=yt-tt,pt=V-I;if(R>J&&H<pt)return 1;if(R<J&&H>pt)return-1}return P>V?1:P<V||K<yt?-1:K>yt?1:x.id<_.id?-1:x.id>_.id?1:0}constructor(x,_,b,I){this.id=++oe,this.leftSE=x,x.segment=this,x.otherSE=_,this.rightSE=_,_.segment=this,_.otherSE=x,this.rings=b,this.windings=I}static fromRing(x,_,b){let I,P,V,B=Nt.comparePoints(x,_);if(B<0)I=x,P=_,V=1;else if(B>0)I=_,P=x,V=-1;else throw new Error(`Tried to create degenerate segment at [${x.x}, ${x.y}]`);let tt=new Nt(I,!0),K=new Nt(P,!1);return new Y(tt,K,[b],[V])}replaceRightSE(x){this.rightSE=x,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let x=this.leftSE.point.y,_=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:x<_?x:_},ur:{x:this.rightSE.point.x,y:x>_?x:_}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(x){return x.x===this.leftSE.point.x&&x.y===this.leftSE.point.y||x.x===this.rightSE.point.x&&x.y===this.rightSE.point.y}comparePoint(x){if(this.isAnEndpoint(x))return 0;let _=this.leftSE.point,b=this.rightSE.point,I=this.vector();if(_.x===b.x)return x.x===_.x?0:x.x<_.x?1:-1;let P=(x.y-_.y)/I.y,V=_.x+P*I.x;if(x.x===V)return 0;let B=(x.x-_.x)/I.x,tt=_.y+B*I.y;return x.y===tt?0:x.y<tt?-1:1}getIntersection(x){let _=this.bbox(),b=x.bbox(),I=m(_,b);if(I===null)return null;let P=this.leftSE.point,V=this.rightSE.point,B=x.leftSE.point,tt=x.rightSE.point,K=y(_,B)&&this.comparePoint(B)===0,yt=y(b,P)&&x.comparePoint(P)===0,R=y(_,tt)&&this.comparePoint(tt)===0,J=y(b,V)&&x.comparePoint(V)===0;if(yt&&K)return J&&!R?V:!J&&R?tt:null;if(yt)return R&&P.x===tt.x&&P.y===tt.y?null:P;if(K)return J&&V.x===B.x&&V.y===B.y?null:B;if(J&&R)return null;if(J)return V;if(R)return tt;let H=Ct(P,this.vector(),B,x.vector());return H===null||!y(I,H)?null:T.round(H.x,H.y)}split(x){let _=[],b=x.events!==void 0,I=new Nt(x,!0),P=new Nt(x,!1),V=this.rightSE;this.replaceRightSE(P),_.push(P),_.push(I);let B=new Y(I,V,this.rings.slice(),this.windings.slice());return Nt.comparePoints(B.leftSE.point,B.rightSE.point)>0&&B.swapEvents(),Nt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),b&&(I.checkForConsuming(),P.checkForConsuming()),_}swapEvents(){let x=this.rightSE;this.rightSE=this.leftSE,this.leftSE=x,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let _=0,b=this.windings.length;_<b;_++)this.windings[_]*=-1}consume(x){let _=this,b=x;for(;_.consumedBy;)_=_.consumedBy;for(;b.consumedBy;)b=b.consumedBy;let I=Y.compare(_,b);if(I!==0){if(I>0){let P=_;_=b,b=P}if(_.prev===b){let P=_;_=b,b=P}for(let P=0,V=b.rings.length;P<V;P++){let B=b.rings[P],tt=b.windings[P],K=_.rings.indexOf(B);K===-1?(_.rings.push(B),_.windings.push(tt)):_.windings[K]+=tt}b.rings=null,b.windings=null,b.consumedBy=_,b.leftSE.consumedBy=_.leftSE,b.rightSE.consumedBy=_.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let x=this.prev.consumedBy||this.prev;this._beforeState=x.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let x=this.beforeState();this._afterState={rings:x.rings.slice(0),windings:x.windings.slice(0),multiPolys:[]};let _=this._afterState.rings,b=this._afterState.windings,I=this._afterState.multiPolys;for(let B=0,tt=this.rings.length;B<tt;B++){let K=this.rings[B],yt=this.windings[B],R=_.indexOf(K);R===-1?(_.push(K),b.push(yt)):b[R]+=yt}let P=[],V=[];for(let B=0,tt=_.length;B<tt;B++){if(b[B]===0)continue;let K=_[B],yt=K.poly;if(V.indexOf(yt)===-1)if(K.isExterior)P.push(yt);else{V.indexOf(yt)===-1&&V.push(yt);let R=P.indexOf(K.poly);R!==-1&&P.splice(R,1)}}for(let B=0,tt=P.length;B<tt;B++){let K=P[B].multiPoly;I.indexOf(K)===-1&&I.push(K)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let x=this.beforeState().multiPolys,_=this.afterState().multiPolys;switch(kt.type){case"union":{let b=x.length===0,I=_.length===0;this._isInResult=b!==I;break}case"intersection":{let b,I;x.length<_.length?(b=x.length,I=_.length):(b=_.length,I=x.length),this._isInResult=I===kt.numMultiPolys&&b<I;break}case"xor":{let b=Math.abs(x.length-_.length);this._isInResult=b%2===1;break}case"difference":{let b=I=>I.length===1&&I[0].isSubject;this._isInResult=b(x)!==b(_);break}default:throw new Error(`Unrecognized operation type found ${kt.type}`)}return this._isInResult}}class dt{constructor(x,_,b){if(!Array.isArray(x)||x.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=_,this.isExterior=b,this.segments=[],typeof x[0][0]!="number"||typeof x[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let I=T.round(x[0][0],x[0][1]);this.bbox={ll:{x:I.x,y:I.y},ur:{x:I.x,y:I.y}};let P=I;for(let V=1,B=x.length;V<B;V++){if(typeof x[V][0]!="number"||typeof x[V][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let tt=T.round(x[V][0],x[V][1]);tt.x===P.x&&tt.y===P.y||(this.segments.push(Y.fromRing(P,tt,this)),tt.x<this.bbox.ll.x&&(this.bbox.ll.x=tt.x),tt.y<this.bbox.ll.y&&(this.bbox.ll.y=tt.y),tt.x>this.bbox.ur.x&&(this.bbox.ur.x=tt.x),tt.y>this.bbox.ur.y&&(this.bbox.ur.y=tt.y),P=tt)}(I.x!==P.x||I.y!==P.y)&&this.segments.push(Y.fromRing(P,I,this))}getSweepEvents(){let x=[];for(let _=0,b=this.segments.length;_<b;_++){let I=this.segments[_];x.push(I.leftSE),x.push(I.rightSE)}return x}}class _t{constructor(x,_){if(!Array.isArray(x))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new dt(x[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let b=1,I=x.length;b<I;b++){let P=new dt(x[b],this,!1);P.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=P.bbox.ll.x),P.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=P.bbox.ll.y),P.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=P.bbox.ur.x),P.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=P.bbox.ur.y),this.interiorRings.push(P)}this.multiPoly=_}getSweepEvents(){let x=this.exteriorRing.getSweepEvents();for(let _=0,b=this.interiorRings.length;_<b;_++){let I=this.interiorRings[_].getSweepEvents();for(let P=0,V=I.length;P<V;P++)x.push(I[P])}return x}}class xt{constructor(x,_){if(!Array.isArray(x))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof x[0][0][0]=="number"&&(x=[x])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let b=0,I=x.length;b<I;b++){let P=new _t(x[b],this);P.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=P.bbox.ll.x),P.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=P.bbox.ll.y),P.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=P.bbox.ur.x),P.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=P.bbox.ur.y),this.polys.push(P)}this.isSubject=_}getSweepEvents(){let x=[];for(let _=0,b=this.polys.length;_<b;_++){let I=this.polys[_].getSweepEvents();for(let P=0,V=I.length;P<V;P++)x.push(I[P])}return x}}class St{static factory(x){let _=[];for(let b=0,I=x.length;b<I;b++){let P=x[b];if(!P.isInResult()||P.ringOut)continue;let V=null,B=P.leftSE,tt=P.rightSE,K=[B],yt=B.point,R=[];for(;V=B,B=tt,K.push(B),B.point!==yt;)for(;;){let J=B.getAvailableLinkedEvents();if(J.length===0){let mt=K[0].point,ht=K[K.length-1].point;throw new Error(`Unable to complete output ring starting at [${mt.x}, ${mt.y}]. Last matching segment found ends at [${ht.x}, ${ht.y}].`)}if(J.length===1){tt=J[0].otherSE;break}let H=null;for(let mt=0,ht=R.length;mt<ht;mt++)if(R[mt].point===B.point){H=mt;break}if(H!==null){let mt=R.splice(H)[0],ht=K.splice(mt.index);ht.unshift(ht[0].otherSE),_.push(new St(ht.reverse()));continue}R.push({index:K.length,point:B.point});let pt=B.getLeftmostComparator(V);tt=J.sort(pt)[0].otherSE;break}_.push(new St(K))}return _}constructor(x){this.events=x;for(let _=0,b=x.length;_<b;_++)x[_].segment.ringOut=this;this.poly=null}getGeom(){let x=this.events[0].point,_=[x];for(let K=1,yt=this.events.length-1;K<yt;K++){let R=this.events[K].point,J=this.events[K+1].point;Xt(R,x,J)!==0&&(_.push(R),x=R)}if(_.length===1)return null;let b=_[0],I=_[1];Xt(b,x,I)===0&&_.shift(),_.push(_[0]);let P=this.isExteriorRing()?1:-1,V=this.isExteriorRing()?0:_.length-1,B=this.isExteriorRing()?_.length:-1,tt=[];for(let K=V;K!=B;K+=P)tt.push([_[K].x,_[K].y]);return tt}isExteriorRing(){if(this._isExteriorRing===void 0){let x=this.enclosingRing();this._isExteriorRing=x?!x.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let x=this.events[0];for(let I=1,P=this.events.length;I<P;I++){let V=this.events[I];Nt.compare(x,V)>0&&(x=V)}let _=x.segment.prevInResult(),b=_?_.prevInResult():null;for(;;){if(!_)return null;if(!b)return _.ringOut;if(b.ringOut!==_.ringOut)return b.ringOut.enclosingRing()!==_.ringOut?_.ringOut:_.ringOut.enclosingRing();_=b.prevInResult(),b=_?_.prevInResult():null}}}class zt{constructor(x){this.exteriorRing=x,x.poly=this,this.interiorRings=[]}addInterior(x){this.interiorRings.push(x),x.poly=this}getGeom(){let x=[this.exteriorRing.getGeom()];if(x[0]===null)return null;for(let _=0,b=this.interiorRings.length;_<b;_++){let I=this.interiorRings[_].getGeom();I!==null&&x.push(I)}return x}}class Ot{constructor(x){this.rings=x,this.polys=this._composePolys(x)}getGeom(){let x=[];for(let _=0,b=this.polys.length;_<b;_++){let I=this.polys[_].getGeom();I!==null&&x.push(I)}return x}_composePolys(x){let _=[];for(let b=0,I=x.length;b<I;b++){let P=x[b];if(!P.poly)if(P.isExteriorRing())_.push(new zt(P));else{let V=P.enclosingRing();V.poly||_.push(new zt(V)),V.poly.addInterior(P)}}return _}}class Vt{constructor(x){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Y.compare;this.queue=x,this.tree=new l(_),this.segments=[]}process(x){let _=x.segment,b=[];if(x.consumedBy)return x.isLeft?this.queue.remove(x.otherSE):this.tree.remove(_),b;let I=x.isLeft?this.tree.add(_):this.tree.find(_);if(!I)throw new Error(`Unable to find segment #${_.id} [${_.leftSE.point.x}, ${_.leftSE.point.y}] -> [${_.rightSE.point.x}, ${_.rightSE.point.y}] in SweepLine tree.`);let P=I,V=I,B,tt;for(;B===void 0;)P=this.tree.prev(P),P===null?B=null:P.key.consumedBy===void 0&&(B=P.key);for(;tt===void 0;)V=this.tree.next(V),V===null?tt=null:V.key.consumedBy===void 0&&(tt=V.key);if(x.isLeft){let K=null;if(B){let R=B.getIntersection(_);if(R!==null&&(_.isAnEndpoint(R)||(K=R),!B.isAnEndpoint(R))){let J=this._splitSafely(B,R);for(let H=0,pt=J.length;H<pt;H++)b.push(J[H])}}let yt=null;if(tt){let R=tt.getIntersection(_);if(R!==null&&(_.isAnEndpoint(R)||(yt=R),!tt.isAnEndpoint(R))){let J=this._splitSafely(tt,R);for(let H=0,pt=J.length;H<pt;H++)b.push(J[H])}}if(K!==null||yt!==null){let R=null;K===null?R=yt:yt===null?R=K:R=Nt.comparePoints(K,yt)<=0?K:yt,this.queue.remove(_.rightSE),b.push(_.rightSE);let J=_.split(R);for(let H=0,pt=J.length;H<pt;H++)b.push(J[H])}b.length>0?(this.tree.remove(_),b.push(x)):(this.segments.push(_),_.prev=B)}else{if(B&&tt){let K=B.getIntersection(tt);if(K!==null){if(!B.isAnEndpoint(K)){let yt=this._splitSafely(B,K);for(let R=0,J=yt.length;R<J;R++)b.push(yt[R])}if(!tt.isAnEndpoint(K)){let yt=this._splitSafely(tt,K);for(let R=0,J=yt.length;R<J;R++)b.push(yt[R])}}}this.tree.remove(_)}return b}_splitSafely(x,_){this.tree.remove(x);let b=x.rightSE;this.queue.remove(b);let I=x.split(_);return I.push(b),x.consumedBy===void 0&&this.tree.add(x),I}}let Gt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,k=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class ne{run(x,_,b){kt.type=x,T.reset();let I=[new xt(_,!0)];for(let R=0,J=b.length;R<J;R++)I.push(new xt(b[R],!1));if(kt.numMultiPolys=I.length,kt.type==="difference"){let R=I[0],J=1;for(;J<I.length;)m(I[J].bbox,R.bbox)!==null?J++:I.splice(J,1)}if(kt.type==="intersection")for(let R=0,J=I.length;R<J;R++){let H=I[R];for(let pt=R+1,mt=I.length;pt<mt;pt++)if(m(H.bbox,I[pt].bbox)===null)return[]}let P=new l(Nt.compare);for(let R=0,J=I.length;R<J;R++){let H=I[R].getSweepEvents();for(let pt=0,mt=H.length;pt<mt;pt++)if(P.insert(H[pt]),P.size>Gt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let V=new Vt(P),B=P.size,tt=P.pop();for(;tt;){let R=tt.key;if(P.size===B){let H=R.segment;throw new Error(`Unable to pop() ${R.isLeft?"left":"right"} SweepEvent [${R.point.x}, ${R.point.y}] from segment #${H.id} [${H.leftSE.point.x}, ${H.leftSE.point.y}] -> [${H.rightSE.point.x}, ${H.rightSE.point.y}] from queue.`)}if(P.size>Gt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(V.segments.length>k)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let J=V.process(R);for(let H=0,pt=J.length;H<pt;H++){let mt=J[H];mt.consumedBy===void 0&&P.insert(mt)}B=P.size,tt=P.pop()}T.reset();let K=St.factory(V.segments);return new Ot(K).getGeom()}}let kt=new ne;var ct={union:function(D){for(var x=arguments.length,_=new Array(x>1?x-1:0),b=1;b<x;b++)_[b-1]=arguments[b];return kt.run("union",D,_)},intersection:function(D){for(var x=arguments.length,_=new Array(x>1?x-1:0),b=1;b<x;b++)_[b-1]=arguments[b];return kt.run("intersection",D,_)},xor:function(D){for(var x=arguments.length,_=new Array(x>1?x-1:0),b=1;b<x;b++)_[b-1]=arguments[b];return kt.run("xor",D,_)},difference:function(D){for(var x=arguments.length,_=new Array(x>1?x-1:0),b=1;b<x;b++)_[b-1]=arguments[b];return kt.run("difference",D,_)}};return ct}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Rh=0,kl=1,Ch=2;var Fi=1,Ih=2,Ms=3,xi=0,Ke=1,Bn=2,zn=0,bs=1,yr=2,Vl=3,Gl=4,Ph=5;var Oi=100,Lh=101,Nh=102,Dh=103,Uh=104,Fh=200,Oh=201,Bh=202,zh=203,Hl=204,Wl=205,kh=206,Vh=207,Gh=208,Hh=209,Wh=210,Xh=211,qh=212,Yh=213,Zh=214,mo=0,go=1,xo=2,as=3,_o=4,yo=5,vo=6,So=7,Qo=0,Jh=1,$h=2,En=0,Xl=1,ql=2,Yl=3,vr=4,Zl=5,Jl=6,$l=7;var Kl=300,_i=301,Bi=302,ta=303,ea=304,Sr=306,Ri=1e3,Ln=1001,Mo=1002,Ue=1003,Kh=1004;var Mr=1005;var Oe=1006,na=1007;var yi=1008;var nn=1009,jl=1010,Ql=1011,Es=1012,ia=1013,wn=1014,Tn=1015,An=1016,sa=1017,ra=1018,ws=1020,tc=35902,ec=35899,nc=1021,ic=1022,gn=1023,Dn=1026,vi=1027,sc=1028,oa=1029,Si=1030,aa=1031;var la=1033,br=33776,Er=33777,wr=33778,Tr=33779,ca=35840,ha=35841,ua=35842,fa=35843,da=36196,pa=37492,ma=37496,ga=37488,xa=37489,Ar=37490,_a=37491,ya=37808,va=37809,Sa=37810,Ma=37811,ba=37812,Ea=37813,wa=37814,Ta=37815,Aa=37816,Ra=37817,Ca=37818,Ia=37819,Pa=37820,La=37821,Na=36492,Da=36494,Ua=36495,Fa=36283,Oa=36284,Rr=36285,Ba=36286;var Ys=2300,bo=2301,fo=2302,Tl=2303,Al=2400,Rl=2401,Cl=2402;var jh=3200;var Cr=0,Qh=1,jn="",Re="srgb",Zs="srgb-linear",Js="linear",he="srgb";var po=7680;var tu=519,eu=512,nu=513,iu=514,za=515,su=516,ru=517,ka=518,ou=519,au=35044,Va=35048;var rc="300 es",Sn=2e3,ls=2001;function Of(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lu(){let i=$s("canvas");return i.style.display="block",i}var qc={},cs=null;function oc(...i){let t="THREE."+i.shift();cs?cs("log",t,...i):console.log(t,...i)}function cu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=cu(i);let t="THREE."+i.shift();if(cs)cs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=cu(i);let t="THREE."+i.shift();if(cs)cs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ai(...i){let t=i.join(" ");t in qc||(qc[t]=!0,Wt(...i))}function hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var uu={[mo]:go,[xo]:vo,[_o]:So,[as]:yo,[go]:mo,[vo]:xo,[So]:_o,[yo]:as},Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=1234567,Hs=Math.PI/180,hs=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function ac(i,t){return(i%t+t)%t}function zf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function kf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ws(i,t,e){return(1-e)*i+e*t}function Vf(i,t,e,n){return Ws(i,t,1-Math.exp(-e*n))}function Gf(i,t=1){return t-Math.abs(ac(i,t*2)-t)}function Hf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qf(i,t){return i+Math.random()*(t-i)}function Yf(i){return i*(.5-Math.random())}function Zf(i){i!==void 0&&(Yc=i);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jf(i){return i*Hs}function $f(i){return i*hs}function Kf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function jf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function td(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qn={DEG2RAD:Hs,RAD2DEG:hs,generateUUID:zi,clamp:ie,euclideanModulo:ac,mapLinear:zf,inverseLerp:kf,lerp:Ws,damp:Vf,pingpong:Gf,smoothstep:Hf,smootherstep:Wf,randInt:Xf,randFloat:qf,randFloatSpread:Yf,seededRandom:Zf,degToRad:Jf,radToDeg:$f,isPowerOfTwo:Kf,ceilPowerOfTwo:jf,floorPowerOfTwo:Qf,setQuaternionFromProperEuler:td,normalize:Ye,denormalize:rs},Mt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],u=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==f||c!==u||h!==g){let m=l*f+c*u+h*g+d*y;m<0&&(f=-f,u=-u,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let E=Math.acos(m),A=Math.sin(E);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A,l=l*p+f*a,c=c*p+u*a,h=h*p+g*a,d=d*p+y*a}else{l=l*p+f*a,c=c*p+u*a,h=h*p+g*a,d=d*p+y*a;let E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-a*u,t[e+2]=c*g+h*u+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new G,Zc=new mn,$t=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],y=s[0],m=s[3],p=s[6],E=s[1],A=s[4],M=s[7],C=s[2],T=s[5],U=s[8];return r[0]=o*y+a*E+l*C,r[3]=o*m+a*A+l*T,r[6]=o*p+a*M+l*U,r[1]=c*y+h*E+d*C,r[4]=c*m+h*A+d*T,r[7]=c*p+h*M+d*U,r[2]=f*y+u*E+g*C,r[5]=f*m+u*A+g*T,r[8]=f*p+u*M+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=e*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=u*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nl.makeScale(t,e)),this}rotate(t){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nl.makeRotation(-t)),this}translate(t,e){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},nl=new $t,Jc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){let i={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zs]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:Jc,fromXYZ:$c,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Jc,fromXYZ:$c,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}var re=ed();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qi,Eo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=$s("canvas")),qi.width=t.width,qi.height=t.height;let s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nd=0,us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(il(s[o].image)):r.push(il(s[o]))}else r=il(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var id=0,sl=new G,Je=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=Oe,o=yi,a=gn,l=nn,c=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=zi(),this.name="",this.source=new us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sl).x}get height(){return this.source.getSize(sl).y}get depth(){return this.source.getSize(sl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Kl;Je.DEFAULT_ANISOTROPY=1;var Se=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,M=(u+1)/2,C=(p+1)/2,T=(h+f)/4,U=(d+y)/4,S=(g+m)/4;return A>M&&A>C?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=U/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=S/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=U/r,s=S/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-y)/E,this.z=(f-h)/E,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wo=class extends Un{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Je(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends wo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ks=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,d,f,u,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,u,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,u,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,g=c*h,y=c*d;e[0]=f+y*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,g=c*h,y=c*d;e[0]=f-y*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+y,e[1]=l*d,e[5]=y*c+f,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-f*d,e[8]=g*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-y*d}else if(t.order==="XZY"){let f=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+y,e[5]=o*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*h,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,rd)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ri.crossVectors(n,on),ri.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ri.crossVectors(n,on)),ri.normalize(),Vr.crossVectors(on,ri),s[0]=ri.x,s[4]=Vr.x,s[8]=on.x,s[1]=ri.y,s[5]=Vr.y,s[9]=on.y,s[2]=ri.z,s[6]=Vr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],y=n[6],m=n[10],p=n[14],E=n[3],A=n[7],M=n[11],C=n[15],T=s[0],U=s[4],S=s[8],L=s[12],F=s[1],z=s[5],W=s[9],q=s[13],O=s[2],Z=s[6],nt=s[10],Q=s[14],at=s[3],rt=s[7],et=s[11],ut=s[15];return r[0]=o*T+a*F+l*O+c*at,r[4]=o*U+a*z+l*Z+c*rt,r[8]=o*S+a*W+l*nt+c*et,r[12]=o*L+a*q+l*Q+c*ut,r[1]=h*T+d*F+f*O+u*at,r[5]=h*U+d*z+f*Z+u*rt,r[9]=h*S+d*W+f*nt+u*et,r[13]=h*L+d*q+f*Q+u*ut,r[2]=g*T+y*F+m*O+p*at,r[6]=g*U+y*z+m*Z+p*rt,r[10]=g*S+y*W+m*nt+p*et,r[14]=g*L+y*q+m*Q+p*ut,r[3]=E*T+A*F+M*O+C*at,r[7]=E*U+A*z+M*Z+C*rt,r[11]=E*S+A*W+M*nt+C*et,r[15]=E*L+A*q+M*Q+C*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],y=t[7],m=t[11],p=t[15],E=l*u-c*f,A=a*u-c*d,M=a*f-l*d,C=o*u-c*h,T=o*f-l*h,U=o*d-a*h;return e*(y*E-m*A+p*M)-n*(g*E-m*C+p*T)+s*(g*A-y*C+p*U)-r*(g*M-y*T+m*U)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],y=t[13],m=t[14],p=t[15],E=e*a-n*o,A=e*l-s*o,M=e*c-r*o,C=n*l-s*a,T=n*c-r*a,U=s*c-r*l,S=h*y-d*g,L=h*m-f*g,F=h*p-u*g,z=d*m-f*y,W=d*p-u*y,q=f*p-u*m,O=E*q-A*W+M*z+C*F-T*L+U*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/O;return t[0]=(a*q-l*W+c*z)*Z,t[1]=(s*W-n*q-r*z)*Z,t[2]=(y*U-m*T+p*C)*Z,t[3]=(f*T-d*U-u*C)*Z,t[4]=(l*F-o*q-c*L)*Z,t[5]=(e*q-s*F+r*L)*Z,t[6]=(m*M-g*U-p*A)*Z,t[7]=(h*U-f*M+u*A)*Z,t[8]=(o*W-a*F+c*S)*Z,t[9]=(n*F-e*W-r*S)*Z,t[10]=(g*T-y*M+p*E)*Z,t[11]=(d*M-h*T-u*E)*Z,t[12]=(a*L-o*z-l*S)*Z,t[13]=(e*z-n*L+s*S)*Z,t[14]=(y*A-g*C-m*E)*Z,t[15]=(h*C-d*A+f*E)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,y=o*h,m=o*d,p=a*d,E=l*c,A=l*h,M=l*d,C=n.x,T=n.y,U=n.z;return s[0]=(1-(y+p))*C,s[1]=(u+M)*C,s[2]=(g-A)*C,s[3]=0,s[4]=(u-M)*T,s[5]=(1-(f+p))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+A)*U,s[9]=(m-E)*U,s[10]=(1-(f+y))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Yi.set(s[0],s[1],s[2]).length(),a=Yi.set(s[4],s[5],s[6]).length(),l=Yi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);let c=1/o,h=1/a,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Sn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ls)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Sn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===ls)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Yi=new G,_n=new ue,sd=new G(0,0,0),rd=new G(1,1,1),ri=new G,Vr=new G,on=new G,Kc=new ue,jc=new mn,Fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jc.setFromEuler(this),this.setFromQuaternion(jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},od=0,Qc=new G,Zi=new mn,Gn=new ue,Gr=new G,Os=new G,ad=new G,ld=new mn,th=new G(1,0,0),eh=new G(0,1,0),nh=new G(0,0,1),ih={type:"added"},cd={type:"removed"},Ji={type:"childadded",child:null},rl={type:"childremoved",child:null},Fe=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Fn,n=new mn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new $t}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gr.copy(t):Gr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Os,Gr,this.up):Gn.lookAt(Gr,Os,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new G(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},hd={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ol(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=ac(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ol(o,r,t+1/3),this.g=ol(o,r,t),this.b=ol(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return re.workingToColorSpace(Ve.copy(this),t),Math.round(ie(Ve.r*255,0,255))*65536+Math.round(ie(Ve.g*255,0,255))*256+Math.round(ie(Ve.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Re){re.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Hr);let n=Ws(oi.h,Hr.h,e),s=Ws(oi.s,Hr.s,e),r=Ws(oi.l,Hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Jt;Jt.NAMES=fu;var js=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new G,Hn=new G,al=new G,Wn=new G,$i=new G,Ki=new G,sh=new G,ll=new G,cl=new G,hl=new G,ul=new Se,fl=new Se,dl=new Se,hi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Hn.subVectors(n,e),al.subVectors(t,e);let o=yn.dot(yn),a=yn.dot(Hn),l=yn.dot(al),c=Hn.dot(Hn),h=Hn.dot(al),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ul.setScalar(0),fl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(t,e),fl.fromBufferAttribute(t,n),dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Hn.subVectors(t,e),yn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),yn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,n),Ki.subVectors(r,n),ll.subVectors(t,n);let l=$i.dot(ll),c=Ki.dot(ll);if(l<=0&&c<=0)return e.copy(n);cl.subVectors(t,s);let h=$i.dot(cl),d=Ki.dot(cl);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector($i,o);hl.subVectors(t,r);let u=$i.dot(hl),g=Ki.dot(hl);if(g>=0&&u<=g)return e.copy(r);let y=u*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ki,a);let m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return sh.subVectors(r,s),a=(d-h)/(d-h+(u-g)),e.copy(s).addScaledVector(sh,a);let p=1/(m+y+f);return o=y*p,a=f*p,e.copy(n).addScaledVector($i,o).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},On=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Xr.subVectors(this.max,Bs),ji.subVectors(t.a,Bs),Qi.subVectors(t.b,Bs),ts.subVectors(t.c,Bs),ai.subVectors(Qi,ji),li.subVectors(ts,Qi),bi.subVectors(ji,ts);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-bi.z,bi.y,ai.z,0,-ai.x,li.z,0,-li.x,bi.z,0,-bi.x,-ai.y,ai.x,0,-li.y,li.x,0,-bi.y,bi.x,0];return!pl(e,ji,Qi,ts,Xr)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,ji,Qi,ts,Xr))?!1:(qr.crossVectors(ai,li),e=[qr.x,qr.y,qr.z],pl(e,ji,Qi,ts,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xn=[new G,new G,new G,new G,new G,new G,new G,new G],vn=new G,Wr=new On,ji=new G,Qi=new G,ts=new G,ai=new G,li=new G,bi=new G,Bs=new G,Xr=new G,qr=new G,Ei=new G;function pl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);let a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ae=new G,Yr=new Mt,ud=0,De=class extends Un{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ud++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=au,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qs=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tr=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},fd=new On,zs=new G,ml=new G,ui=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(ml)),this.expandByPoint(zs.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},dd=0,pn=new ue,gl=new Fe,es=new G,an=new On,ks=new On,Ne=new G,be=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Of(t)?tr:Qs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return gl.lookAt(t),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(an.min,ks.min),an.expandByPoint(Ne),Ne.addVectors(an.max,ks.max),an.expandByPoint(Ne)):(an.expandByPoint(ks.min),an.expandByPoint(ks.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(t,c),Ne.add(es)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new De(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new G,l[S]=new G;let c=new G,h=new G,d=new G,f=new Mt,u=new Mt,g=new Mt,y=new G,m=new G;function p(S,L,F){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,F),f.fromBufferAttribute(r,S),u.fromBufferAttribute(r,L),g.fromBufferAttribute(r,F),h.sub(c),d.sub(c),u.sub(f),g.sub(f);let z=1/(u.x*g.y-g.x*u.y);isFinite(z)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(z),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(z),a[S].add(y),a[L].add(y),a[F].add(y),l[S].add(m),l[L].add(m),l[F].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let S=0,L=E.length;S<L;++S){let F=E[S],z=F.start,W=F.count;for(let q=z,O=z+W;q<O;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let A=new G,M=new G,C=new G,T=new G;function U(S){C.fromBufferAttribute(s,S),T.copy(C);let L=a[S];A.copy(L),A.sub(C.multiplyScalar(C.dot(L))).normalize(),M.crossVectors(T,L);let z=M.dot(l[S])<0?-1:1;o.setXYZW(S,A.x,A.y,A.z,z)}for(let S=0,L=E.length;S<L;++S){let F=E[S],z=F.start,W=F.count;for(let q=z,O=z+W;q<O;q+=3)U(t.getX(q+0)),U(t.getX(q+1)),U(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,d=new G;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?u=l[y]*a.data.stride+a.offset:u=l[y]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new De(f,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xl=new G,pd=new G,md=new $t,ln=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xl.subVectors(n,e).cross(pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||md.getNormalMatrix(t),s=this.coplanarPoint(xl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gd=0,Mn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=bs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Wl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qn=new G,_l=new G,Zr=new G,Jr=new G,Ci=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_l.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Jr.copy(this.origin).sub(_l);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=Jr.dot(this.direction),l=-Jr.dot(Zr),c=Jr.lengthSq(),h=Math.abs(1-o*o),d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let y=1/h;d*=y,f*=y,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_l).addScaledVector(Zr,f),u}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,p=n.x-o.x,E=n.y-o.y,A=n.z-o.z,M=Math.abs(l),C=Math.abs(c),T=Math.abs(h),U,S,L,F,z,W,q,O,Z,nt,Q,at;if(M>=C&&M>=T?(L=l,W=d,Z=g,at=p,l>=0?(U=c,S=h,F=f,z=u,q=y,O=m,nt=E,Q=A):(U=h,S=c,F=u,z=f,q=m,O=y,nt=A,Q=E)):C>=T?(L=c,W=f,Z=y,at=E,c>=0?(U=h,S=l,F=u,z=d,q=m,O=g,nt=A,Q=p):(U=l,S=h,F=d,z=u,q=g,O=m,nt=p,Q=A)):(L=h,W=u,Z=m,at=A,h>=0?(U=l,S=c,F=d,z=f,q=g,O=y,nt=p,Q=E):(U=c,S=l,F=f,z=d,q=y,O=g,nt=E,Q=p)),L===0)return null;let rt=U/L,et=S/L,ut=1/L,At=F-rt*W,Et=z-et*W,Kt=q-rt*Z,Xt=O-et*Z,Zt=nt-rt*at,ft=Q-et*at,gt=Zt*Xt-ft*Kt,wt=At*ft-Et*Zt,Ht=Kt*Et-Xt*At;if(s){if(gt<0||wt<0||Ht<0)return null}else if((gt<0||wt<0||Ht<0)&&(gt>0||wt>0||Ht>0))return null;let Ct=gt+wt+Ht;if(Ct===0)return null;let Nt=ut*(gt*W+wt*Z+Ht*at);return(Ct>0?Nt<0:Nt>0)?null:this.at(Nt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zn=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rh=new ue,wi=new Ci,$r=new ui,oh=new G,Kr=new G,jr=new G,Qr=new G,yl=new G,to=new G,ah=new G,eo=new G,xe=class extends Fe{constructor(t=new be,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(yl.fromBufferAttribute(d,t),o?to.addScaledVector(yl,h):to.addScaledVector(yl.sub(e),h))}e.add(to)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!($r.containsPoint(wi.origin)===!1&&(wi.intersectSphere($r,oh)===null||wi.origin.distanceToSquared(oh)>(t.far-t.near)**2))&&(rh.copy(r).invert(),wi.copy(t.ray).applyMatrix4(rh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],E=Math.max(m.start,u.start),A=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=E,C=A;M<C;M+=3){let T=a.getX(M),U=a.getX(M+1),S=a.getX(M+2);s=no(this,p,t,n,c,h,d,T,U,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let E=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);s=no(this,o,t,n,c,h,d,E,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],E=Math.max(m.start,u.start),A=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=E,C=A;M<C;M+=3){let T=M,U=M+1,S=M+2;s=no(this,p,t,n,c,h,d,T,U,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let E=m,A=m+1,M=m+2;s=no(this,o,t,n,c,h,d,E,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function xd(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;eo.copy(a),eo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:i}}function no(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Kr),i.getVertexPosition(l,jr),i.getVertexPosition(c,Qr);let h=xd(i,t,e,n,Kr,jr,Qr,ah);if(h){let d=new G;hi.getBarycoord(ah,Kr,jr,Qr,d),s&&(h.uv=hi.getInterpolatedAttribute(s,a,l,c,d,new Mt)),r&&(h.uv1=hi.getInterpolatedAttribute(r,a,l,c,d,new Mt)),o&&(h.normal=hi.getInterpolatedAttribute(o,a,l,c,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};hi.getNormal(Kr,jr,Qr,f.normal),h.face=f,h.barycoord=d}return h}var Ao=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ue,h=Ue,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=new ui,_d=new Mt(.5,.5),io=new G,ps=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],g=r[8],y=r[9],m=r[10],p=r[11],E=r[12],A=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-o,u-h,p-g,C-E).normalize(),s[1].setComponents(c+o,u+h,p+g,C+E).normalize(),s[2].setComponents(c+a,u+d,p+y,C+A).normalize(),s[3].setComponents(c-a,u-d,p-y,C-A).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,u-f,p-m,C-M).normalize();else if(s[4].setComponents(c-l,u-f,p-m,C-M).normalize(),e===Sn)s[5].setComponents(c+l,u+f,p+m,C+M).normalize();else if(e===ls)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let e=_d.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ms=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ro=new G,Co=new G,lh=new ue,Vs=new Ci,so=new ui,vl=new G,ch=new G,Io=class extends Fe{constructor(t=new be,e=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ro.fromBufferAttribute(e,s-1),Co.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ro.distanceTo(Co);t.setAttribute("lineDistance",new le(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;lh.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(lh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=u,m=g-1;y<m;y+=c){let p=h.getX(y),E=h.getX(y+1),A=ro(this,t,Vs,l,p,E,y);A&&e.push(A)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(u),p=ro(this,t,Vs,l,y,m,g-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=u,m=g-1;y<m;y+=c){let p=ro(this,t,Vs,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=ro(this,t,Vs,l,g-1,u,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ro(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ro.fromBufferAttribute(a,s),Co.fromBufferAttribute(a,r),e.distanceSqToSegment(Ro,Co,vl,ch)>n)return;vl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(vl);if(!(c<t.near||c>t.far))return{distance:c,point:ch.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var hh=new G,uh=new G,er=class extends Io{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)hh.fromBufferAttribute(e,s),uh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hh.distanceTo(uh);t.setAttribute("lineDistance",new le(n,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gs=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fh=new ue,Il=new Ci,oo=new ui,ao=new G,nr=class extends Fe{constructor(t=new be,e=new gs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;fh.copy(s).invert(),Il.copy(t.ray).applyMatrix4(fh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=f,y=u;g<y;g++){let m=c.getX(g);ao.fromBufferAttribute(d,m),dh(ao,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let g=f,y=u;g<y;g++)ao.fromBufferAttribute(d,g),dh(ao,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function dh(i,t,e,n,s,r,o){let a=Il.distanceSqToPoint(i);if(a<e){let l=new G;Il.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ir=class extends Je{constructor(t=[],e=_i,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xs=class extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends Je{constructor(t,e,n=wn,s,r,o,a=Ue,l=Ue,c,h=Dn,d=1){if(h!==Dn&&h!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Po=class extends fi{constructor(t,e=wn,n=_i,s,r,o=Ue,a=Ue,l,c=Dn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},sr=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ge=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function g(y,m,p,E,A,M,C,T,U,S,L){let F=M/U,z=C/S,W=M/2,q=C/2,O=T/2,Z=U+1,nt=S+1,Q=0,at=0,rt=new G;for(let et=0;et<nt;et++){let ut=et*z-q;for(let At=0;At<Z;At++){let Et=At*F-W;rt[y]=Et*E,rt[m]=ut*A,rt[p]=O,c.push(rt.x,rt.y,rt.z),rt[y]=0,rt[m]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(At/U),d.push(1-et/S),Q+=1}}for(let et=0;et<S;et++)for(let ut=0;ut<U;ut++){let At=f+ut+Z*et,Et=f+ut+Z*(et+1),Kt=f+(ut+1)+Z*(et+1),Xt=f+(ut+1)+Z*et;l.push(At,Et,Xt),l.push(Et,Kt,Xt),at+=6}a.addGroup(u,at,L),u+=at,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ii=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],g=0,y=[],m=n/2,p=0;E(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(u,2));function E(){let M=new G,C=new G,T=0,U=(e-t)/n;for(let S=0;S<=r;S++){let L=[],F=S/r,z=F*(e-t)+t;for(let W=0;W<=s;W++){let q=W/s,O=q*l+a,Z=Math.sin(O),nt=Math.cos(O);C.x=z*Z,C.y=-F*n+m,C.z=z*nt,d.push(C.x,C.y,C.z),M.set(Z,U,nt).normalize(),f.push(M.x,M.y,M.z),u.push(q,1-F),L.push(g++)}y.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let F=y[L][S],z=y[L+1][S],W=y[L+1][S+1],q=y[L][S+1];(t>0||L!==0)&&(h.push(F,z,q),T+=3),(e>0||L!==r-1)&&(h.push(z,W,q),T+=3)}c.addGroup(p,T,0),p+=T}function A(M){let C=g,T=new Mt,U=new G,S=0,L=M===!0?t:e,F=M===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,m*F,0),f.push(0,F,0),u.push(.5,.5),g++;let z=g;for(let W=0;W<=s;W++){let O=W/s*l+a,Z=Math.cos(O),nt=Math.sin(O);U.x=L*nt,U.y=m*F,U.z=L*Z,d.push(U.x,U.y,U.z),f.push(0,F,0),T.x=Z*.5+.5,T.y=nt*.5*F+.5,u.push(T.x,T.y),g++}for(let W=0;W<s;W++){let q=C+W,O=z+W;M===!0?h.push(O,O+1,q):h.push(O+1,O,q),S+=3}c.addGroup(p,S,M===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,l=new ue;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ie(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ie(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_s=class extends cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lo=class extends _s{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ph=new G,mh=new G,Sl=new lc,Ml=new lc,bl=new lc,No=class extends cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(mh.subVectors(s[0],s[1]).add(s[0]),c=mh);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ph.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ph),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),y=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Sl.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,y,m),Ml.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,y,m),bl.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ml.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),bl.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Sl.calc(l),Ml.calc(l),bl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function yd(i,t){let e=1-i;return e*e*t}function vd(i,t){return 2*(1-i)*i*t}function Sd(i,t){return i*i*t}function Xs(i,t,e,n){return yd(i,t)+vd(i,e)+Sd(i,n)}function Md(i,t){let e=1-i;return e*e*e*t}function bd(i,t){let e=1-i;return 3*e*e*i*t}function Ed(i,t){return 3*(1-i)*i*i*t}function wd(i,t){return i*i*i*t}function qs(i,t,e,n,s){return Md(i,t)+bd(i,e)+Ed(i,n)+wd(i,s)}var rr=class extends cn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(t,s.x,r.x,o.x,a.x),qs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends cn{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(t,s.x,r.x,o.x,a.x),qs(t,s.y,r.y,o.y,a.y),qs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},or=class extends cn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends cn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ar=class extends cn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,s.x,r.x,o.x),Xs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends cn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,s.x,r.x,o.x),Xs(t,s.y,r.y,o.y),Xs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lr=class extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(gh(a,l.x,c.x,h.x,d.x),gh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},Pl=Object.freeze({__proto__:null,ArcCurve:Lo,CatmullRomCurve3:No,CubicBezierCurve:rr,CubicBezierCurve3:Do,EllipseCurve:_s,LineCurve:or,LineCurve3:Uo,QuadraticBezierCurve:ar,QuadraticBezierCurve3:Fo,SplineCurve:lr}),Oo=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Pl[s.type]().fromJSON(s))}return this}},Pi=class extends Oo{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new or(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ar(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new rr(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new lr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new _s(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},hn=class extends Pi{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Pi().fromJSON(s))}return this}};function Td(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=du(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Pd(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let f=e;f<s;f+=e){let u=i[f],g=i[f+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return cr(r,o,e,a,l,c,0),o}function du(i,t,e,n,s){let r;if(s===Gd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=xh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=xh(o/n|0,i[o],i[o+1],r);return r&&ys(r,r.next)&&(ur(r),r=r.next),r}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ys(e,e.next)||Me(e.prev,e,e.next)===0)){if(ur(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Fd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Rd(i,n,s,r):Ad(i)){t.push(l.i,i.i,c.i),ur(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Cd(Li(i),t),cr(i,t,e,n,s,r,2)):o===2&&Id(i,t,e,n,s,r):cr(Li(i),t,e,n,s,r,1);break}}}function Ad(i){let t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=u&&Gs(s,a,r,l,o,c,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rd(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Me(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),g=Math.min(h,d,f),y=Math.max(a,l,c),m=Math.max(h,d,f),p=Ll(u,g,t,e,n),E=Ll(y,m,t,e,n),A=i.prevZ,M=i.nextZ;for(;A&&A.z>=p&&M&&M.z<=E;){if(A.x>=u&&A.x<=y&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Gs(a,h,l,d,c,f,A.x,A.y)&&Me(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=u&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Gs(a,h,l,d,c,f,M.x,M.y)&&Me(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=p;){if(A.x>=u&&A.x<=y&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Gs(a,h,l,d,c,f,A.x,A.y)&&Me(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=E;){if(M.x>=u&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Gs(a,h,l,d,c,f,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Cd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ys(n,s)&&mu(n,e,e.next,s)&&hr(n,s)&&hr(s,n)&&(t.push(n.i,e.i,s.i),ur(e),ur(e.next),e=i=s),e=e.next}while(e!==i);return Li(e)}function Id(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zd(o,a)){let l=gu(o,a);o=Li(o,o.next),l=Li(l,l.next),cr(o,t,e,n,s,r,0),cr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Pd(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=du(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Bd(c))}s.sort(Ld);for(let r=0;r<s.length;r++)e=Nd(s[r],e);return e}function Ld(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Nd(i,t){let e=Dd(i,t);if(!e)return t;let n=gu(e,i);return Li(n,n.next),Li(e,e.next)}function Dd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ys(i,e))return e;do{if(ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&pu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);hr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Ud(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Ud(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function Fd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Od(s)}function Od(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Bd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Gs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&pu(i,t,e,n,s,r,o,a)}function zd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kd(i,t)&&(hr(i,t)&&hr(t,i)&&Vd(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||ys(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ys(i,t){return i.x===t.x&&i.y===t.y}function mu(i,t,e,n){let s=co(Me(i,t,e)),r=co(Me(i,t,n)),o=co(Me(e,n,i)),a=co(Me(e,n,t));return!!(s!==r&&o!==a||s===0&&lo(i,e,t)||r===0&&lo(i,n,t)||o===0&&lo(e,i,n)||a===0&&lo(e,t,n))}function lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function co(i){return i>0?1:i<0?-1:0}function kd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function hr(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function Vd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gu(i,t){let e=Nl(i.i,i.x,i.y),n=Nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xh(i,t,e,n){let s=Nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Dl=class{static triangulate(t,e,n=2){return Td(t,e,n)}},Nn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_h(t),yh(n,t);let o=t.length;e.forEach(_h);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,yh(n,e[l]);let a=Dl.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function _h(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Jn=class i extends be{constructor(t=new hn([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Hd,A,M=!1,C,T,U,S;if(p){A=p.getSpacedPoints(h),M=!0,f=!1;let Y=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(h,Y),T=new G,U=new G,S=new G}f||(m=0,u=0,g=0,y=0);let L=a.extractPoints(c),F=L.shape,z=L.holes;if(!Nn.isClockWise(F)){F=F.reverse();for(let Y=0,dt=z.length;Y<dt;Y++){let _t=z[Y];Nn.isClockWise(_t)&&(z[Y]=_t.reverse())}}function q(Y){let _t=10000000000000001e-36,xt=Y[0];for(let St=1;St<=Y.length;St++){let zt=St%Y.length,Ot=Y[zt],Vt=Ot.x-xt.x,Gt=Ot.y-xt.y,k=Vt*Vt+Gt*Gt,ne=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(xt.x),Math.abs(xt.y)),kt=_t*ne*ne;if(k<=kt){Y.splice(zt,1),St--;continue}xt=Ot}}q(F),z.forEach(q);let O=z.length,Z=F;for(let Y=0;Y<O;Y++){let dt=z[Y];F=F.concat(dt)}function nt(Y,dt,_t){return dt||Yt("ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(dt,_t)}let Q=F.length;function at(Y,dt,_t){let xt,St,zt,Ot=Y.x-dt.x,Vt=Y.y-dt.y,Gt=_t.x-Y.x,k=_t.y-Y.y,ne=Ot*Ot+Vt*Vt,kt=Ot*k-Vt*Gt;if(Math.abs(kt)>Number.EPSILON){let N=Math.sqrt(ne),v=Math.sqrt(Gt*Gt+k*k),$=dt.x-Vt/N,ot=dt.y+Ot/N,ct=_t.x-k/v,D=_t.y+Gt/v,x=((ct-$)*k-(D-ot)*Gt)/(Ot*k-Vt*Gt);xt=$+Ot*x-Y.x,St=ot+Vt*x-Y.y;let _=xt*xt+St*St;if(_<=2)return new Mt(xt,St);zt=Math.sqrt(_/2)}else{let N=!1;Ot>Number.EPSILON?Gt>Number.EPSILON&&(N=!0):Ot<-Number.EPSILON?Gt<-Number.EPSILON&&(N=!0):Math.sign(Vt)===Math.sign(k)&&(N=!0),N?(xt=-Vt,St=Ot,zt=Math.sqrt(ne)):(xt=Ot,St=Vt,zt=Math.sqrt(ne/2))}return new Mt(xt/zt,St/zt)}let rt=[];for(let Y=0,dt=Z.length,_t=dt-1,xt=Y+1;Y<dt;Y++,_t++,xt++)_t===dt&&(_t=0),xt===dt&&(xt=0),rt[Y]=at(Z[Y],Z[_t],Z[xt]);let et=[],ut,At=rt.concat();for(let Y=0,dt=O;Y<dt;Y++){let _t=z[Y];ut=[];for(let xt=0,St=_t.length,zt=St-1,Ot=xt+1;xt<St;xt++,zt++,Ot++)zt===St&&(zt=0),Ot===St&&(Ot=0),ut[xt]=at(_t[xt],_t[zt],_t[Ot]);et.push(ut),At=At.concat(ut)}let Et;if(m===0)Et=Nn.triangulateShape(Z,z);else{let Y=[],dt=[];for(let _t=0;_t<m;_t++){let xt=_t/m,St=u*Math.cos(xt*Math.PI/2),zt=g*Math.sin(xt*Math.PI/2)+y;for(let Ot=0,Vt=Z.length;Ot<Vt;Ot++){let Gt=nt(Z[Ot],rt[Ot],zt);wt(Gt.x,Gt.y,-St),xt===0&&Y.push(Gt)}for(let Ot=0,Vt=O;Ot<Vt;Ot++){let Gt=z[Ot];ut=et[Ot];let k=[];for(let ne=0,kt=Gt.length;ne<kt;ne++){let N=nt(Gt[ne],ut[ne],zt);wt(N.x,N.y,-St),xt===0&&k.push(N)}xt===0&&dt.push(k)}}Et=Nn.triangulateShape(Y,dt)}let Kt=Et.length,Xt=g+y;for(let Y=0;Y<Q;Y++){let dt=f?nt(F[Y],At[Y],Xt):F[Y];M?(U.copy(C.normals[0]).multiplyScalar(dt.x),T.copy(C.binormals[0]).multiplyScalar(dt.y),S.copy(A[0]).add(U).add(T),wt(S.x,S.y,S.z)):wt(dt.x,dt.y,0)}for(let Y=1;Y<=h;Y++)for(let dt=0;dt<Q;dt++){let _t=f?nt(F[dt],At[dt],Xt):F[dt];M?(U.copy(C.normals[Y]).multiplyScalar(_t.x),T.copy(C.binormals[Y]).multiplyScalar(_t.y),S.copy(A[Y]).add(U).add(T),wt(S.x,S.y,S.z)):wt(_t.x,_t.y,d/h*Y)}for(let Y=m-1;Y>=0;Y--){let dt=Y/m,_t=u*Math.cos(dt*Math.PI/2),xt=g*Math.sin(dt*Math.PI/2)+y;for(let St=0,zt=Z.length;St<zt;St++){let Ot=nt(Z[St],rt[St],xt);wt(Ot.x,Ot.y,d+_t)}for(let St=0,zt=z.length;St<zt;St++){let Ot=z[St];ut=et[St];for(let Vt=0,Gt=Ot.length;Vt<Gt;Vt++){let k=nt(Ot[Vt],ut[Vt],xt);M?wt(k.x,k.y+A[h-1].y,A[h-1].x+_t):wt(k.x,k.y,d+_t)}}}Zt(),ft();function Zt(){let Y=s.length/3;if(f){let dt=0,_t=Q*dt;for(let xt=0;xt<Kt;xt++){let St=Et[xt];Ht(St[2]+_t,St[1]+_t,St[0]+_t)}dt=h+m*2,_t=Q*dt;for(let xt=0;xt<Kt;xt++){let St=Et[xt];Ht(St[0]+_t,St[1]+_t,St[2]+_t)}}else{for(let dt=0;dt<Kt;dt++){let _t=Et[dt];Ht(_t[2],_t[1],_t[0])}for(let dt=0;dt<Kt;dt++){let _t=Et[dt];Ht(_t[0]+Q*h,_t[1]+Q*h,_t[2]+Q*h)}}n.addGroup(Y,s.length/3-Y,0)}function ft(){let Y=s.length/3,dt=0;gt(Z,dt),dt+=Z.length;for(let _t=0,xt=z.length;_t<xt;_t++){let St=z[_t];gt(St,dt),dt+=St.length}n.addGroup(Y,s.length/3-Y,1)}function gt(Y,dt){let _t=Y.length;for(;--_t>=0;){let xt=_t,St=_t-1;St<0&&(St=Y.length-1);for(let zt=0,Ot=h+m*2;zt<Ot;zt++){let Vt=Q*zt,Gt=Q*(zt+1),k=dt+xt+Vt,ne=dt+St+Vt,kt=dt+St+Gt,N=dt+xt+Gt;Ct(k,ne,kt,N)}}}function wt(Y,dt,_t){l.push(Y),l.push(dt),l.push(_t)}function Ht(Y,dt,_t){Nt(Y),Nt(dt),Nt(_t);let xt=s.length/3,St=E.generateTopUV(n,s,xt-3,xt-2,xt-1);oe(St[0]),oe(St[1]),oe(St[2])}function Ct(Y,dt,_t,xt){Nt(Y),Nt(dt),Nt(xt),Nt(dt),Nt(_t),Nt(xt);let St=s.length/3,zt=E.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);oe(zt[0]),oe(zt[1]),oe(zt[3]),oe(zt[1]),oe(zt[2]),oe(zt[3])}function Nt(Y){s.push(l[Y*3+0]),s.push(l[Y*3+1]),s.push(l[Y*3+2])}function oe(Y){r.push(Y.x),r.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Pl[s.type]().fromJSON(s)),new i(n,t.options)}},Hd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Mt(r,o),new Mt(a,l),new Mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Mt(o,1-l),new Mt(c,1-d),new Mt(f,1-g),new Mt(y,1-p)]:[new Mt(a,1-l),new Mt(h,1-d),new Mt(u,1-g),new Mt(m,1-p)]}};function Wd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var fr=class i extends be{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ie(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new G,f=new Mt,u=new G,g=new G,y=new G,m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,u.x=p*1,u.y=-m,u.z=p*0,y.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),l.push(u.x,u.y,u.z),y.copy(g)}for(let E=0;E<=e;E++){let A=n+E*h*s,M=Math.sin(A),C=Math.cos(A);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*M,d.y=t[T].y,d.z=t[T].x*C,o.push(d.x,d.y,d.z),f.x=E/e,f.y=T/(t.length-1),a.push(f.x,f.y);let U=l[3*T+0]*M,S=l[3*T+1],L=l[3*T+0]*C;c.push(U,S,L)}}for(let E=0;E<e;E++)for(let A=0;A<t.length-1;A++){let M=A+E*t.length,C=M,T=M+t.length,U=M+t.length+1,S=M+1;r.push(C,T,S),r.push(U,S,T)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var $n=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let E=p*f-o;for(let A=0;A<c;A++){let M=A*d-r;g.push(M,-E,0),y.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let A=E+c*p,M=E+c*(p+1),C=E+1+c*(p+1),T=E+1+c*p;u.push(A,M,T),u.push(M,C,T)}this.setIndex(u),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(y,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ni=class i extends be{constructor(t=new hn([new Mt(0,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(o,2));function c(h){let d=s.length/3,f=h.extractPoints(e),u=f.shape,g=f.holes;Nn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=g.length;m<p;m++){let E=g[m];Nn.isClockWise(E)===!0&&(g[m]=E.reverse())}let y=Nn.triangulateShape(u,g);for(let m=0,p=g.length;m<p;m++){let E=g[m];u=u.concat(E)}for(let m=0,p=u.length;m<p;m++){let E=u[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,p=y.length;m<p;m++){let E=y[m],A=E[0]+d,M=E[1]+d,C=E[2]+d;n.push(A,M,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Xd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Xd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var bn=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new G,f=new G,u=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let E=[],A=p/n,M=o+A*a,C=t*Math.cos(M),T=Math.sqrt(t*t-C*C),U=0;p===0&&o===0?U=.5/e:p===n&&l===Math.PI&&(U=-.5/e);for(let S=0;S<=e;S++){let L=S/e,F=s+L*r;d.x=-T*Math.cos(F),d.y=C,d.z=T*Math.sin(F),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(L+U,1-A),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let A=h[p][E+1],M=h[p][E],C=h[p+1][E],T=h[p+1][E+1];(p!==0||o>0)&&u.push(A,M,T),(p!==n-1||l<Math.PI)&&u.push(M,C,T)}this.setIndex(u),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(y,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Di=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],f=new G,u=new G,g=new G;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let p=0;p<=s;p++){let E=p/s*r;u.x=(t+e*Math.cos(m))*Math.cos(E),u.y=(t+e*Math.cos(m))*Math.sin(E),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(E),f.y=t*Math.sin(E),g.subVectors(u,f).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,E=(s+1)*(y-1)+m-1,A=(s+1)*(y-1)+m,M=(s+1)*y+m;l.push(p,E,M),l.push(E,A,M)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(vh(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=ki(i[e]);for(let s in n)t[s]=n[s]}return t}function vh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var xu={clone:ki,merge:He},Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Bo=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kn=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ui=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Qo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zo=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ko=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ns(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function El(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vo=class extends di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rl:r=t,a=2*e-n;break;case Cl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rl:o=t,l=2*n-e;break;case Cl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,E=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,A=(-1-u)*m+(1.5+u)*y+.5*g,M=u*m-u*y;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+E*o[c+C]+A*o[l+C]+M*o[d+C];return r}},Go=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Ho=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wo=class extends di{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let f=a*2,u=t-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],p=u*f+g*2,E=d[p],A=d[p+1],M=t*f+g*2,C=h[M],T=h[M+1],U=$d(n,e,E,C,s);r[g]=_u(U,y,A,T,m)}return r}};function _u(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Jd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function $d(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=_u(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Jd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ns(e,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ns(t.times,Array),values:ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),El(t.settings)&&(n.settings={inTangents:ns(t.settings.inTangents,Array),outTangents:ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ys:e=this.InterpolantFactoryMethodDiscrete;break;case bo:e=this.InterpolantFactoryMethodLinear;break;case fo:e=this.InterpolantFactoryMethodSmooth;break;case Tl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return fo;case this.InterpolantFactoryMethodBezier:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;El(this.settings)&&(Sh(this.settings.inTangents,t),Sh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Bf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[f+g]||y!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,El(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=bo;var pi=class extends un{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Ys;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};Xo.prototype.ValueTypeName="color";var qo=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};qo.prototype.ValueTypeName="number";var Yo=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},dr=class extends un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Yo(this.times,this.values,this.getValueSize(),t)}};dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends un{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Ys;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};Zo.prototype.ValueTypeName="vector";var Jo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yu=new Jo,$o=class{constructor(t){this.manager=t!==void 0?t:yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$o.DEFAULT_MATERIAL_NAME="__DEFAULT";var vs=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},pr=class extends vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wl=new ue,Mh=new G,bh=new G,mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(wl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ls||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ho=new G,uo=new mn,Pn=new G,gr=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ho,uo,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,Pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ho,uo,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new G,Eh=new Mt,wh=new Mt,Ze=class extends gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Eh,wh),e.subVectors(wh,Eh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ul=class extends mr{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0}},xr=class extends vs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ul}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},gi=class extends gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fl=class extends mr{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Fl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var is=-90,ss=1,Ko=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new Ze(is,ss,t,e);r.layers=this.layers,this.add(r);let o=new Ze(is,ss,t,e);o.layers=this.layers,this.add(o);let a=new Ze(is,ss,t,e);a.layers=this.layers,this.add(a);let l=new Ze(is,ss,t,e);l.layers=this.layers,this.add(l);let c=new Ze(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jo=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hc="\\[\\]\\.:\\/",Kd=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",jd="[^"+hc.replace("\\.","")+"]",Qd=/((?:WC+[\/:])*)/.source.replace("WC",uc),tp=/(WCOD+)?/.source.replace("WCOD",jd),ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),ip=new RegExp("^"+Qd+tp+ep+np+"$"),sp=["material","materials","bones","map"],Ol=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kd,"")}static parseTrackName(t){let e=ip.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Ol;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ly=new Float32Array(1);var Th=new ue,_r=class{constructor(t,e,n=0,s=1/0){this.ray=new Ci(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(t,e=!0,n=[]){return Bl(t,this,n,e),n.sort(Ah),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bl(t[s],this,n,e);return n.sort(Ah),n}};function Ah(i,t){return i.distance-t.distance}function Bl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Bl(r[o],t,e,!0)}}var zl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function fc(i,t,e,n){let s=rp(n);switch(e){case nc:return i*t;case sc:return i*t/s.components*s.byteLength;case oa:return i*t/s.components*s.byteLength;case Si:return i*t*2/s.components*s.byteLength;case aa:return i*t*2/s.components*s.byteLength;case ic:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case la:return i*t*4/s.components*s.byteLength;case br:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:case fa:return Math.max(i,16)*Math.max(t,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(t,8)/2;case da:case pa:case ga:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:case Ar:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Na:case Da:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rr:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rp(i){switch(i){case nn:case jl:return{byteLength:1,components:1};case Es:case Ql:case An:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case wn:case ia:case Tn:return{byteLength:4,components:1};case tc:case ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vu(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){let g=d[f],y=d[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){let y=d[u];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
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
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Op=`#define PI 3.141592653589793
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
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zp=`vec3 transformedNormal = objectNormal;
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
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#endif`,fm=`uniform sampler2D dfgLUT;
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
}`,dm=`
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,Sg=`#if DEPTH_PACKING == 3200
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
}`,Mg=`#define DISTANCE
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
}`,bg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
}`,Dg=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,zg=`#define STANDARD
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
}`,kg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Gg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:xp,alphatest_fragment:_p,alphatest_pars_fragment:yp,aomap_fragment:vp,aomap_pars_fragment:Sp,batching_pars_vertex:Mp,batching_vertex:bp,begin_vertex:Ep,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Lp,color_fragment:Np,color_pars_fragment:Dp,color_pars_vertex:Up,color_vertex:Fp,common:Op,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:zp,displacementmap_pars_vertex:kp,displacementmap_vertex:Vp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Hp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:om,envmap_vertex:$p,fog_vertex:Kp,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:tm,gradientmap_pars_fragment:em,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:am,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:fm,lights_fragment_begin:dm,lights_fragment_maps:pm,lights_fragment_end:mm,lightprobes_pars_fragment:gm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:vm,map_fragment:Sm,map_pars_fragment:Mm,map_particle_fragment:bm,map_particle_pars_fragment:Em,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Tm,morphinstance_vertex:Am,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Im,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Nm,normal_pars_fragment:Dm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:Hm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:Km,shadowmap_vertex:jm,shadowmask_pars_fragment:Qm,skinbase_vertex:tg,skinning_pars_vertex:eg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:fg,worldpos_vertex:dg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:xg,cube_vert:_g,cube_frag:yg,depth_vert:vg,depth_frag:Sg,distance_vert:Mg,distance_frag:bg,equirect_vert:Eg,equirect_frag:wg,linedashed_vert:Tg,linedashed_frag:Ag,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Ig,meshlambert_frag:Pg,meshmatcap_vert:Lg,meshmatcap_frag:Ng,meshnormal_vert:Dg,meshnormal_frag:Ug,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:zg,meshtoon_vert:kg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Hg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Yg},Tt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Vn={basic:{uniforms:He([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:He([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:He([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:He([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:He([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:He([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:He([Tt.points,Tt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:He([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:He([Tt.common,Tt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:He([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:He([Tt.sprite,Tt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:He([Tt.common,Tt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:He([Tt.lights,Tt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Vn.physical={uniforms:He([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Ga={r:0,b:0,g:0},Zg=new ue,Gu=new $t;Gu.set(-1,0,0,0,1,0,0,0,1);function Jg(i,t,e,n,s,r){let o=new Jt(0),a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let M=E.backgroundBlurriness>0;A=t.get(A,M)}return A}function g(E){let A=!1,M=u(E);M===null?m(o,a):M&&M.isColor&&(m(M,1),A=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,A){let M=u(A);M&&(M.isCubeTexture||M.mapping===Sr)?(c===void 0&&(c=new xe(new Ge(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:ki(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gu),c.material.toneMapped=re.getTransfer(M.colorSpace)!==he,(h!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new xe(new $n(2,2),new $e({name:"BackgroundMaterial",uniforms:ki(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=re.getTransfer(M.colorSpace)!==he,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(Ga,cc(i)),e.buffers.color.setClear(Ga.r,Ga.g,Ga.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,m(o,a)},render:g,addToRenderList:y,dispose:p}}function $g(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(z,W,q,O,Z){let nt=!1,Q=d(z,O,q,W);r!==Q&&(r=Q,c(r.object)),nt=u(z,O,q,Z),nt&&g(z,O,q,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,M(z,W,q,O),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function d(z,W,q,O){let Z=O.wireframe===!0,nt=n[W.id];nt===void 0&&(nt={},n[W.id]=nt);let Q=z.isInstancedMesh===!0?z.id:0,at=nt[Q];at===void 0&&(at={},nt[Q]=at);let rt=at[q.id];rt===void 0&&(rt={},at[q.id]=rt);let et=rt[Z];return et===void 0&&(et=f(l()),rt[Z]=et),et}function f(z){let W=[],q=[],O=[];for(let Z=0;Z<e;Z++)W[Z]=0,q[Z]=0,O[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:q,attributeDivisors:O,object:z,attributes:{},index:null}}function u(z,W,q,O){let Z=r.attributes,nt=W.attributes,Q=0,at=q.getAttributes();for(let rt in at)if(at[rt].location>=0){let ut=Z[rt],At=nt[rt];if(At===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(At=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(At=z.instanceColor)),ut===void 0||ut.attribute!==At||At&&ut.data!==At.data)return!0;Q++}return r.attributesNum!==Q||r.index!==O}function g(z,W,q,O){let Z={},nt=W.attributes,Q=0,at=q.getAttributes();for(let rt in at)if(at[rt].location>=0){let ut=nt[rt];ut===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(ut=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(ut=z.instanceColor));let At={};At.attribute=ut,ut&&ut.data&&(At.data=ut.data),Z[rt]=At,Q++}r.attributes=Z,r.attributesNum=Q,r.index=O}function y(){let z=r.newAttributes;for(let W=0,q=z.length;W<q;W++)z[W]=0}function m(z){p(z,0)}function p(z,W){let q=r.newAttributes,O=r.enabledAttributes,Z=r.attributeDivisors;q[z]=1,O[z]===0&&(i.enableVertexAttribArray(z),O[z]=1),Z[z]!==W&&(i.vertexAttribDivisor(z,W),Z[z]=W)}function E(){let z=r.newAttributes,W=r.enabledAttributes;for(let q=0,O=W.length;q<O;q++)W[q]!==z[q]&&(i.disableVertexAttribArray(q),W[q]=0)}function A(z,W,q,O,Z,nt,Q){Q===!0?i.vertexAttribIPointer(z,W,q,Z,nt):i.vertexAttribPointer(z,W,q,O,Z,nt)}function M(z,W,q,O){y();let Z=O.attributes,nt=q.getAttributes(),Q=W.defaultAttributeValues;for(let at in nt){let rt=nt[at];if(rt.location>=0){let et=Z[at];if(et===void 0&&(at==="instanceMatrix"&&z.instanceMatrix&&(et=z.instanceMatrix),at==="instanceColor"&&z.instanceColor&&(et=z.instanceColor)),et!==void 0){let ut=et.normalized,At=et.itemSize,Et=t.get(et);if(Et===void 0)continue;let Kt=Et.buffer,Xt=Et.type,Zt=Et.bytesPerElement,ft=Xt===i.INT||Xt===i.UNSIGNED_INT||et.gpuType===ia;if(et.isInterleavedBufferAttribute){let gt=et.data,wt=gt.stride,Ht=et.offset;if(gt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<rt.locationSize;Ct++)p(rt.location+Ct,gt.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Ct=0;Ct<rt.locationSize;Ct++)m(rt.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Ct=0;Ct<rt.locationSize;Ct++)A(rt.location+Ct,At/rt.locationSize,Xt,ut,wt*Zt,(Ht+At/rt.locationSize*Ct)*Zt,ft)}else{if(et.isInstancedBufferAttribute){for(let gt=0;gt<rt.locationSize;gt++)p(rt.location+gt,et.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let gt=0;gt<rt.locationSize;gt++)m(rt.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let gt=0;gt<rt.locationSize;gt++)A(rt.location+gt,At/rt.locationSize,Xt,ut,At*Zt,At/rt.locationSize*gt*Zt,ft)}}else if(Q!==void 0){let ut=Q[at];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(rt.location,ut);break;case 3:i.vertexAttrib3fv(rt.location,ut);break;case 4:i.vertexAttrib4fv(rt.location,ut);break;default:i.vertexAttrib1fv(rt.location,ut)}}}}E()}function C(){L();for(let z in n){let W=n[z];for(let q in W){let O=W[q];for(let Z in O){let nt=O[Z];for(let Q in nt)h(nt[Q].object),delete nt[Q];delete O[Z]}}delete n[z]}}function T(z){if(n[z.id]===void 0)return;let W=n[z.id];for(let q in W){let O=W[q];for(let Z in O){let nt=O[Z];for(let Q in nt)h(nt[Q].object),delete nt[Q];delete O[Z]}}delete n[z.id]}function U(z){for(let W in n){let q=n[W];for(let O in q){let Z=q[O];if(Z[z.id]===void 0)continue;let nt=Z[z.id];for(let Q in nt)h(nt[Q].object),delete nt[Q];delete Z[z.id]}}}function S(z){for(let W in n){let q=n[W],O=z.isInstancedMesh===!0?z.id:0,Z=q[O];if(Z!==void 0){for(let nt in Z){let Q=Z[nt];for(let at in Q)h(Q[at].object),delete Q[at];delete Z[nt]}delete q[O],Object.keys(q).length===0&&delete n[W]}}}function L(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:F,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function Kg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==gn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let S=U===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==nn&&U!==Tn&&!S&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:M,maxSamples:C,samples:T}}function Qg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ln,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,A=E*4,M=p.clippingState||null;l.value=M,M=h(g,f,A,u);for(let C=0;C!==A;++C)M[C]=e[C];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=u+y*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=u;A!==y;++A,M+=4)o.copy(d[A]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var As=4,t0=6,e0=20,n0=256,Ir=new gi,vu=new Jt,dc=null,pc=0,mc=0,gc=!1,i0=new G,Vi=new G,Wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=i0}=r;dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,pc,mc),this._renderer.xr.enabled=gc,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:An,format:gn,colorSpace:Zs,depthBuffer:!1},s=Su(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s0(r)),this._blurMaterial=o0(r,t,e),this._ggxMaterial=r0(r,t,e)}return s}_compileMaterial(t){let e=new xe(new be,t);this._renderer.compile(e,Ir)}_sceneToCubeUV(t,e,n,s,r){let l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(vu),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Ge,new Zn({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(vu),p=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let C=this._cubeSize;Ts(s,M*C,A>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=u,d.autoClear=f,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_i||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ts(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ir)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,u=d*f,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-As?n-g+As:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=g-e,Ts(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,Ir),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ts(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(a,Ir)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-As?s-this._lodMax+As:0),f=4*(this._cubeSize-h);Ts(e,d,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Ir)}};function s0(i){let t=[],e=[],n=i,s=i-As+1+t0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,u=3,g=new Float32Array(u*f*d),y=new Float32Array(u*f*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,A=p>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];g.set(M,u*f*p);for(let C=0;C<f;C++){let T=h[C*2]*2-1,U=h[C*2+1]*2-1;p===0?Vi.set(1,U,T):p===1?Vi.set(-T,1,-U):p===2?Vi.set(-T,U,1):p===3?Vi.set(-1,U,-T):p===4?Vi.set(-T,-1,U):Vi.set(T,U,-1),Vi.toArray(y,(p*f+C)*u)}}let m=new be;m.setAttribute("position",new De(g,u)),m.setAttribute("outputDirection",new De(y,u)),e.push(new xe(m,null)),n>As&&n--}return{lodMeshes:e,sizeLods:t}}function Su(i,t,e){let n=new en(i,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function r0(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function o0(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:e0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Mu(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function bu(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xa=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:zn});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Oe),new Ko(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function a0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===ta||u===ea)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Xa(g.height);return y.fromEquirectangularTexture(i,f),t.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,g=u===ta||u===ea,y=u===_i||u===Bi;if(g||y){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Wa(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let E=f.image;return g&&E&&E.height>0||y&&E&&l(E)?(n===null&&(n=new Wa(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===ta?f.mapping=_i:u===ea&&(f.mapping=Bi),f}function l(f){let u=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&u++;return u===g}function c(f){let u=f.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function l0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ai("WebGLRenderer: "+n+" extension not supported."),s}}}function c0(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let u in f)t.update(f[u],i.ARRAY_BUFFER)}function c(d){let f=[],u=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(u!==null){let E=u.array;y=u.version;for(let A=0,M=E.length;A<M;A+=3){let C=E[A+0],T=E[A+1],U=E[A+2];f.push(C,T,T,U,U,C)}}else{let E=g.array;y=g.version;for(let A=0,M=E.length/3-1;A<M;A+=3){let C=A+0,T=A+1,U=A+2;f.push(C,T,T,U,U,C)}}let m=new(g.count>=65535?tr:Qs)(f,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function h0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let y=0;for(let m=0;m<u;m++)y+=f[m];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function u0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function f0(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let L=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],A=0;u===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let M=a.attributes.position.count*A,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*C*4*d),U=new Ks(T,M,C,d);U.type=Tn,U.needsUpdate=!0;let S=A*4;for(let F=0;F<d;F++){let z=m[F],W=p[F],q=E[F],O=M*C*4*F;for(let Z=0;Z<z.count;Z++){let nt=Z*S;u===!0&&(s.fromBufferAttribute(z,Z),T[O+nt+0]=s.x,T[O+nt+1]=s.y,T[O+nt+2]=s.z,T[O+nt+3]=0),g===!0&&(s.fromBufferAttribute(W,Z),T[O+nt+4]=s.x,T[O+nt+5]=s.y,T[O+nt+6]=s.z,T[O+nt+7]=0),y===!0&&(s.fromBufferAttribute(q,Z),T[O+nt+8]=s.x,T[O+nt+9]=s.y,T[O+nt+10]=s.z,T[O+nt+11]=q.itemSize===4?s.w:1)}}f={count:d,texture:U,size:new Mt(M,C)},n.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function d0(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var p0={[Xl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[vr]:"ACES_FILMIC_TONE_MAPPING",[Jl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[Zl]:"CUSTOM_TONE_MAPPING"};function m0(i,t,e,n,s,r){let o=new en(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new be;c.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new le([0,2,0,0,2,0],2));let h=new Bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new xe(c,h),f=new gi(-1,1,1,-1,0,1),u=null,g=null,y=!1,m,p=null,E=[],A=!1;this.setSize=function(M,C){o.setSize(M,C),a!==null&&a.setSize(M,C),l!==null&&l.setSize(M,C);for(let T=0;T<E.length;T++){let U=E[T];U.setSize&&U.setSize(M,C)}},this.setEffects=function(M){E=M,A=E.length>0&&E[0].isRenderPass===!0;let C=o.width,T=o.height;E.length>0&&a===null&&(a=new en(C,T,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new en(C,T,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<E.length;U++){let S=E[U];S.setSize&&S.setSize(C,T)}},this.begin=function(M,C){if(y||M.toneMapping===En&&E.length===0)return!1;if(p=C,C!==null){let T=C.width,U=C.height;(o.width!==T||o.height!==U)&&this.setSize(T,U)}return A===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=En,!0},this.hasRenderPass=function(){return A},this.end=function(M,C){M.toneMapping=m,y=!0;let T=o,U=a;for(let S=0;S<E.length;S++){let L=E[S];L.enabled!==!1&&(L.render(M,U,T,C),L.needsSwap!==!1&&(T=U,U=U===a?l:a))}if(u!==M.outputColorSpace||g!==M.toneMapping){u=M.outputColorSpace,g=M.toneMapping,h.defines={},re.getTransfer(u)===he&&(h.defines.SRGB_TRANSFER="");let S=p0[g];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(p),M.render(d,f),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Hu=new Je,yc=new fi(1,1),Wu=new Ks,Xu=new To,qu=new ir,Eu=[],wu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function Cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Za(i,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function g0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function v0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),Ie(e,n)}}function S0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Au.set(n),i.uniformMatrix3fv(this.addr,!1,Au),Ie(e,n)}}function M0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Tu.set(n),i.uniformMatrix4fv(this.addr,!1,Tu),Ie(e,n)}}function b0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function A0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function P0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yc.compareFunction=e.isReversedDepthBuffer()?ka:za,r=yc):r=Hu,e.setTexture2D(t||r,s)}function L0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xu,s)}function N0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qu,s)}function D0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wu,s)}function U0(i){switch(i){case 5126:return g0;case 35664:return x0;case 35665:return _0;case 35666:return y0;case 35674:return v0;case 35675:return S0;case 35676:return M0;case 5124:case 35670:return b0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return D0}}function F0(i,t){i.uniform1fv(this.addr,t)}function O0(i,t){let e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function B0(i,t){let e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function z0(i,t){let e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function k0(i,t){let e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function V0(i,t){let e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function G0(i,t){let e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function H0(i,t){i.uniform1iv(this.addr,t)}function W0(i,t){i.uniform2iv(this.addr,t)}function X0(i,t){i.uniform3iv(this.addr,t)}function q0(i,t){i.uniform4iv(this.addr,t)}function Y0(i,t){i.uniform1uiv(this.addr,t)}function Z0(i,t){i.uniform2uiv(this.addr,t)}function J0(i,t){i.uniform3uiv(this.addr,t)}function $0(i,t){i.uniform4uiv(this.addr,t)}function K0(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=yc:o=Hu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function j0(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xu,r[o])}function Q0(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qu,r[o])}function tx(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wu,r[o])}function ex(i){switch(i){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return k0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return H0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return J0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return tx}}var vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U0(e.type)}},Sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ex(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function Cu(i,t){i.seq.push(t),i.map[t.id]=t}function nx(i,t,e){let n=i.name,s=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),o=xc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cu(e,c===void 0?new vc(a,i,t):new Sc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Mc(a),Cu(e,d)),e=d}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);nx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ix=37297,sx=0;function rx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Pu=new $t;function ox(i){re._getMatrix(Pu,re.workingColorSpace,i);let t=`mat3( ${Pu.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Js:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+rx(i.getShaderSource(t),a)}else return r}function ax(i,t){let e=ox(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var lx={[Xl]:"Linear",[ql]:"Reinhard",[Yl]:"Cineon",[vr]:"ACESFilmic",[Jl]:"AgX",[$l]:"Neutral",[Zl]:"Custom"};function cx(i,t){let e=lx[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ha=new G;function hx(){re.getLuminanceCoefficients(Ha);let i=Ha.x.toFixed(4),t=Ha.y.toFixed(4),e=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function fx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Lr(i){return i!==""}function Nu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var px=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(px,gx)}var mx=new Map;function gx(i,t){let e=te[t];if(e===void 0){let n=mx.get(t);if(n!==void 0)e=te[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bc(e)}var xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(i){return i.replace(xx,_x)}function _x(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var yx={[Fi]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function vx(i){return yx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sx={[_i]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE_UV"};function Mx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var bx={[Bi]:"ENVMAP_MODE_REFRACTION"};function Ex(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wx={[Qo]:"ENVMAP_BLENDING_MULTIPLY",[Jh]:"ENVMAP_BLENDING_MIX",[$h]:"ENVMAP_BLENDING_ADD"};function Tx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":wx[i.combine]||"ENVMAP_BLENDING_NONE"}function Ax(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Rx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=vx(e),c=Mx(e),h=Ex(e),d=Tx(e),f=Ax(e),u=ux(e),g=fx(r),y=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?te.tonemapping_pars_fragment:"",e.toneMapping!==En?cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,ax("linearToOutputTexel",e.outputColorSpace),hx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=bc(o),o=Nu(o,e),o=Du(o,e),a=bc(a),a=Nu(a,e),a=Du(a,e),o=Uu(o),a=Uu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=E+m+o,M=E+p+a,C=Iu(s,s.VERTEX_SHADER,A),T=Iu(s,s.FRAGMENT_SHADER,M);s.attachShader(y,C),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function U(z){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(y)||"",q=s.getShaderInfoLog(C)||"",O=s.getShaderInfoLog(T)||"",Z=W.trim(),nt=q.trim(),Q=O.trim(),at=!0,rt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,T);else{let et=Lu(s,C,"vertex"),ut=Lu(s,T,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Z+`
`+et+`
`+ut)}else Z!==""?Wt("WebGLProgram: Program Info Log:",Z):(nt===""||Q==="")&&(rt=!1);rt&&(z.diagnostics={runnable:at,programLog:Z,vertexShader:{log:nt,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(C),s.deleteShader(T),S=new Rs(s,y),L=dx(s,y)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(y,ix)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var Cx=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wc(t),e.set(t,n)),n}},wc=class{constructor(t){this.id=Cx++,this.code=t,this.usedTimes=0}};function Ix(i){return i===Si||i===Ar||i===Rr}function Px(i,t,e,n,s,r){let o=new fs,a=new Ec,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,L,F,z,W,q){let O=z.fog,Z=W.geometry,nt=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,Q=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,at=t.get(S.envMap||nt,Q),rt=at&&at.mapping===Sr?at.image.height:null,et=u[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&Wt("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,At=ut!==void 0?ut.length:0,Et=0;Z.morphAttributes.position!==void 0&&(Et=1),Z.morphAttributes.normal!==void 0&&(Et=2),Z.morphAttributes.color!==void 0&&(Et=3);let Kt,Xt,Zt,ft;if(et){let jt=Vn[et];Kt=jt.vertexShader,Xt=jt.fragmentShader}else{Kt=S.vertexShader,Xt=S.fragmentShader;let jt=a.getVertexShaderStage(S),qt=a.getFragmentShaderStage(S);a.update(S,jt,qt),Zt=jt.id,ft=qt.id}let gt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Ht=W.isInstancedMesh===!0,Ct=W.isBatchedMesh===!0,Nt=!!S.map,oe=!!S.matcap,Y=!!at,dt=!!S.aoMap,_t=!!S.lightMap,xt=!!S.bumpMap&&S.wireframe===!1,St=!!S.normalMap,zt=!!S.displacementMap,Ot=!!S.emissiveMap,Vt=!!S.metalnessMap,Gt=!!S.roughnessMap,k=S.anisotropy>0,ne=S.clearcoat>0,kt=S.dispersion>0,N=S.retroreflectivity>0,v=S.iridescence>0,$=S.sheen>0,ot=S.transmission>0,ct=k&&!!S.anisotropyMap,D=ne&&!!S.clearcoatMap,x=ne&&!!S.clearcoatNormalMap,_=ne&&!!S.clearcoatRoughnessMap,b=v&&!!S.iridescenceMap,I=v&&!!S.iridescenceThicknessMap,P=$&&!!S.sheenColorMap,V=$&&!!S.sheenRoughnessMap,B=!!S.specularMap,tt=!!S.specularColorMap,K=!!S.specularIntensityMap,yt=ot&&!!S.transmissionMap,R=ot&&!!S.thicknessMap,J=!!S.gradientMap,H=!!S.alphaMap,pt=S.alphaTest>0,mt=!!S.alphaHash,ht=!!S.extensions,vt=En;S.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(vt=i.toneMapping);let bt={shaderID:et,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:Xt,defines:S.defines,customVertexShaderID:Zt,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&W._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&W.instanceColor!==null,instancingMorph:Ht&&W.morphTexture!==null,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Nt,matcap:oe,envMap:Y,envMapMode:Y&&at.mapping,envMapCubeUVHeight:rt,aoMap:dt,lightMap:_t,bumpMap:xt,normalMap:St,displacementMap:zt,emissiveMap:Ot,normalMapObjectSpace:St&&S.normalMapType===Qh,normalMapTangentSpace:St&&S.normalMapType===Cr,packedNormalMap:St&&S.normalMapType===Cr&&Ix(S.normalMap.format),metalnessMap:Vt,roughnessMap:Gt,anisotropy:k,anisotropyMap:ct,clearcoat:ne,clearcoatMap:D,clearcoatNormalMap:x,clearcoatRoughnessMap:_,dispersion:kt,retroreflection:N,iridescence:v,iridescenceMap:b,iridescenceThicknessMap:I,sheen:$,sheenColorMap:P,sheenRoughnessMap:V,specularMap:B,specularColorMap:tt,specularIntensityMap:K,transmission:ot,transmissionMap:yt,thicknessMap:R,gradientMap:J,opaque:S.transparent===!1&&S.blending===bs&&S.alphaToCoverage===!1,alphaMap:H,alphaTest:pt,alphaHash:mt,combine:S.combine,mapUv:Nt&&g(S.map.channel),aoMapUv:dt&&g(S.aoMap.channel),lightMapUv:_t&&g(S.lightMap.channel),bumpMapUv:xt&&g(S.bumpMap.channel),normalMapUv:St&&g(S.normalMap.channel),displacementMapUv:zt&&g(S.displacementMap.channel),emissiveMapUv:Ot&&g(S.emissiveMap.channel),metalnessMapUv:Vt&&g(S.metalnessMap.channel),roughnessMapUv:Gt&&g(S.roughnessMap.channel),anisotropyMapUv:ct&&g(S.anisotropyMap.channel),clearcoatMapUv:D&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:x&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:b&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:I&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:P&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(S.sheenRoughnessMap.channel),specularMapUv:B&&g(S.specularMap.channel),specularColorMapUv:tt&&g(S.specularColorMap.channel),specularIntensityMapUv:K&&g(S.specularIntensityMap.channel),transmissionMapUv:yt&&g(S.transmissionMap.channel),thicknessMapUv:R&&g(S.thicknessMap.channel),alphaMapUv:H&&g(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(St||k),vertexNormals:!!Z.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(Nt||H),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Z.attributes.normal===void 0&&St===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Et,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:Nt&&S.map.isVideoTexture===!0&&re.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:Ot&&S.emissiveMap.isVideoTexture===!0&&re.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bn,flipSided:S.side===Ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ht&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&S.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(S){let L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(let F in S.defines)L.push(F),L.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(p(L,S),E(L,S),L.push(i.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function p(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numSunLights),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numSunLightShadows),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.numLightProbes),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function E(S,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function A(S){let L=u[S.type],F;if(L){let z=Vn[L];F=xu.clone(z.uniforms)}else F=S.uniforms;return F}function M(S,L){let F=h.get(L);return F!==void 0?++F.usedTimes:(F=new Rx(i,L,S,s),c.push(F),h.set(L,F)),F}function C(S){if(--S.usedTimes===0){let L=c.indexOf(S);c[L]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function T(S){a.remove(S)}function U(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:U}}function Lx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Nx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,g,y,m,p){let E=i[t];return E===void 0?(E={id:f.id,object:f,geometry:u,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:p},i[t]=E):(E.id=f.id,E.object=f,E.geometry=u,E.material=g,E.materialVariant=o(f),E.groupOrder=y,E.renderOrder=f.renderOrder,E.z=m,E.group=p),t++,E}function l(f,u,g,y,m,p,E){E.reversedDepth===!0&&(m=-m);let A=a(f,u,g,y,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(f,u,g,y,m,p){let E=a(f,u,g,y,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(f,u){e.length>1&&e.sort(f||Nx),n.length>1&&n.sort(u||Ou),s.length>1&&s.sort(u||Ou)}function d(){for(let f=t,u=i.length;f<u;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Dx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bu,i.set(n,[o])):s>=r.length?(o=new Bu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ux(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Jt};break;case"SpotLight":e={position:new G,direction:new G,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Fx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ox=0;function Bx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zx(i){let t=new Ux,e=Fx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new ue,o=new ue;function a(c){let h=0,d=0,f=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let u=0,g=0,y=0,m=0,p=0,E=0,A=0,M=0,C=0,T=0,U=0,S=0,L=0,F=0;c.sort(Bx);for(let W=0,q=c.length;W<q;W++){let O=c[W],Z=O.color,nt=O.intensity,Q=O.distance,at=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Si?at=O.shadow.map.texture:at=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=Z.r*nt,d+=Z.g*nt,f+=Z.b*nt;else if(O.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(O.sh.coefficients[rt],nt);F++}else if(O.isSunLight){let rt=t.get(O);if(rt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,ut=e.get(O);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[g]=ut,n.sunShadowMap[g]=at;let At=et.getViewportCount();for(let Et=0;Et<At;Et++)n.sunShadowMatrix[y+Et]=et.getMatrix(Et),n.sunShadowCascade[y+Et]=et._cascadeData[Et];y+=At,g++}n.sun[u]=rt,u++}else if(O.isDirectionalLight){let rt=t.get(O);if(rt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,ut=e.get(O);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize=et.mapSize,n.directionalShadow[m]=ut,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=O.shadow.matrix,C++}n.directional[m]=rt,m++}else if(O.isSpotLight){let rt=t.get(O);rt.position.setFromMatrixPosition(O.matrixWorld),rt.color.copy(Z).multiplyScalar(nt),rt.distance=Q,rt.coneCos=Math.cos(O.angle),rt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),rt.decay=O.decay,n.spot[E]=rt;let et=O.shadow;if(O.map&&(n.spotLightMap[S]=O.map,S++,et.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[E]=et.matrix,O.castShadow){let ut=e.get(O);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize=et.mapSize,n.spotShadow[E]=ut,n.spotShadowMap[E]=at,U++}E++}else if(O.isRectAreaLight){let rt=t.get(O);rt.color.copy(Z).multiplyScalar(nt),rt.halfWidth.set(O.width*.5,0,0),rt.halfHeight.set(0,O.height*.5,0),n.rectArea[A]=rt,A++}else if(O.isPointLight){let rt=t.get(O);if(rt.color.copy(O.color).multiplyScalar(O.intensity),rt.distance=O.distance,rt.decay=O.decay,O.castShadow){let et=O.shadow,ut=e.get(O);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize=et.mapSize,ut.shadowCameraNear=et.camera.near,ut.shadowCameraFar=et.camera.far,n.pointShadow[p]=ut,n.pointShadowMap[p]=at,n.pointShadowMatrix[p]=O.shadow.matrix,T++}n.point[p]=rt,p++}else if(O.isHemisphereLight){let rt=t.get(O);rt.skyColor.copy(O.color).multiplyScalar(nt),rt.groundColor.copy(O.groundColor).multiplyScalar(nt),n.hemi[M]=rt,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let z=n.hash;(z.sunLength!==u||z.directionalLength!==m||z.pointLength!==p||z.spotLength!==E||z.rectAreaLength!==A||z.hemiLength!==M||z.numSunShadows!==g||z.numDirectionalShadows!==C||z.numPointShadows!==T||z.numSpotShadows!==U||z.numSpotMaps!==S||z.numLightProbes!==F)&&(n.sun.length=u,n.directional.length=m,n.spot.length=E,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=F,z.sunLength=u,z.directionalLength=m,z.pointLength=p,z.spotLength=E,z.rectAreaLength=A,z.hemiLength=M,z.numSunShadows=g,z.numDirectionalShadows=C,z.numPointShadows=T,z.numSpotShadows=U,z.numSpotMaps=S,z.numLightProbes=F,n.version=Ox++)}function l(c,h){let d=0,f=0,u=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let E=0,A=c.length;E<A;E++){let M=c[E];if(M.isSunLight){let C=n.sun[d];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),f++}else if(M.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let C=n.point[u];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function zu(i){let t=new zx(i),e=[],n=[],s=[];function r(f){d.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function kx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new zu(i),t.set(s,[a])):r>=o.length?(a=new zu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
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
}`,Hx=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Wx=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],ku=new ue,Pr=new G,_c=new G;function Xx(i,t,e){let n=new ps,s=new Mt,r=new Mt,o=new Se,a=new zo,l=new ko,c={},h=e.maxTextureSize,d={[xi]:Ke,[Ke]:xi,[Bn]:Bn},f=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Vx,fragmentShader:Gx}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new xe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fi;let p=this.type;this.render=function(T,U,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ih&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fi);let L=i.getRenderTarget(),F=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),W=i.state;W.setBlending(zn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let q=p!==this.type;q&&U.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Z=>Z.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Z=T.length;O<Z;O++){let nt=T[O],Q=nt.shadow;if(Q===void 0){Wt("WebGLShadowMap:",nt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let at=Q.getFrameExtents();s.multiply(at),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,Q.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=rt,Q.map===null||q===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Ms){if(nt.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new en(s.x,s.y,{format:Si,type:An,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),Q.map.texture.name=nt.name+".shadowMap",Q.map.depthTexture=new fi(s.x,s.y,Tn),Q.map.depthTexture.name=nt.name+".shadowMapDepth",Q.map.depthTexture.format=Dn,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Ue,Q.map.depthTexture.magFilter=Ue}else nt.isPointLight?(Q.map=new Xa(s.x),Q.map.depthTexture=new Po(s.x,wn)):(Q.map=new en(s.x,s.y),Q.map.depthTexture=new fi(s.x,s.y,wn)),Q.map.depthTexture.name=nt.name+".shadowMap",Q.map.depthTexture.format=Dn,this.type===Fi?(Q.map.depthTexture.compareFunction=rt?ka:za,Q.map.depthTexture.minFilter=Oe,Q.map.depthTexture.magFilter=Oe):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Ue,Q.map.depthTexture.magFilter=Ue);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let et=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();nt.isPointLight!==!0&&Q.updateMatrices(nt,S);for(let ut=0;ut<et;ut++){let At=Q.getCamera(ut);if(nt.isPointLight){let Et=Q.camera,Kt=Q.matrix,Xt=nt.distance||Et.far;Xt!==Et.far&&(Et.far=Xt,Et.updateProjectionMatrix()),Pr.setFromMatrixPosition(nt.matrixWorld),Et.position.copy(Pr),_c.copy(Et.position),_c.add(Hx[ut]),Et.up.copy(Wx[ut]),Et.lookAt(_c),Et.updateMatrixWorld(),Kt.makeTranslation(-Pr.x,-Pr.y,-Pr.z),ku.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(ku,Et.coordinateSystem,Et.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,ut),i.clear();else{ut===0&&(i.setRenderTarget(Q.map),i.clear());let Et=Q.getViewport(ut);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),W.viewport(o)}n=Q.getFrustum(ut),M(U,S,At,nt,this.type)}Q.isPointLightShadow!==!0&&this.type===Ms&&E(Q,S),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,F,z)};function E(T,U){let S=t.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new en(s.x,s.y,{format:Si,type:An}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(U,null,S,f,y,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(U,null,S,u,y,null)}function A(T,U,S,L){let F=null,z=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)F=z;else if(F=S.isPointLight===!0?l:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let W=F.uuid,q=U.uuid,O=c[W];O===void 0&&(O={},c[W]=O);let Z=O[q];Z===void 0&&(Z=F.clone(),O[q]=Z,U.addEventListener("dispose",C)),F=Z}if(F.visible=U.visible,F.wireframe=U.wireframe,L===Ms?F.side=U.shadowSide!==null?U.shadowSide:U.side:F.side=U.shadowSide!==null?U.shadowSide:d[U.side],F.alphaMap=U.alphaMap,F.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,F.map=U.map,F.clipShadows=U.clipShadows,F.clippingPlanes=U.clippingPlanes,F.clipIntersection=U.clipIntersection,F.displacementMap=U.displacementMap,F.displacementScale=U.displacementScale,F.displacementBias=U.displacementBias,F.wireframeLinewidth=U.wireframeLinewidth,F.linewidth=U.linewidth,S.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=i.properties.get(F);W.light=S}return F}function M(T,U,S,L,F){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Ms)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let q=t.update(T),O=T.material;if(Array.isArray(O)){let Z=q.groups;for(let nt=0,Q=Z.length;nt<Q;nt++){let at=Z[nt],rt=O[at.materialIndex];if(rt&&rt.visible){let et=A(T,rt,L,F);T.onBeforeShadow(i,T,U,S,q,et,at),i.renderBufferDirect(S,null,q,et,T,at),T.onAfterShadow(i,T,U,S,q,et,at)}}}else if(O.visible){let Z=A(T,O,L,F);T.onBeforeShadow(i,T,U,S,q,Z,null),i.renderBufferDirect(S,null,q,Z,T,null),T.onAfterShadow(i,T,U,S,q,Z,null)}}let W=T.children;for(let q=0,O=W.length;q<O;q++)M(W[q],U,S,L,F)}function C(T){T.target.removeEventListener("dispose",C);for(let S in c){let L=c[S],F=T.target.uuid;F in L&&(L[F].dispose(),delete L[F])}}}function qx(i,t){function e(){let R=!1,J=new Se,H=null,pt=new Se(0,0,0,0);return{setMask:function(mt){H!==mt&&!R&&(i.colorMask(mt,mt,mt,mt),H=mt)},setLocked:function(mt){R=mt},setClear:function(mt,ht,vt,bt,jt){jt===!0&&(mt*=bt,ht*=bt,vt*=bt),J.set(mt,ht,vt,bt),pt.equals(J)===!1&&(i.clearColor(mt,ht,vt,bt),pt.copy(J))},reset:function(){R=!1,H=null,pt.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,H=null,pt=null,mt=null;return{setReversed:function(ht){if(J!==ht){let vt=t.get("EXT_clip_control");ht?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),J=ht;let bt=mt;mt=null,this.setClear(bt)}},getReversed:function(){return J},setTest:function(ht){ht?gt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ht){H!==ht&&!R&&(i.depthMask(ht),H=ht)},setFunc:function(ht){if(J&&(ht=uu[ht]),pt!==ht){switch(ht){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case xo:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=ht}},setLocked:function(ht){R=ht},setClear:function(ht){mt!==ht&&(mt=ht,J&&(ht=1-ht),i.clearDepth(ht))},reset:function(){R=!1,H=null,pt=null,mt=null,J=!1}}}function s(){let R=!1,J=null,H=null,pt=null,mt=null,ht=null,vt=null,bt=null,jt=null;return{setTest:function(qt){R||(qt?gt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(qt){J!==qt&&!R&&(i.stencilMask(qt),J=qt)},setFunc:function(qt,fe,pe){(H!==qt||pt!==fe||mt!==pe)&&(i.stencilFunc(qt,fe,pe),H=qt,pt=fe,mt=pe)},setOp:function(qt,fe,pe){(ht!==qt||vt!==fe||bt!==pe)&&(i.stencilOp(qt,fe,pe),ht=qt,vt=fe,bt=pe)},setLocked:function(qt){R=qt},setClear:function(qt){jt!==qt&&(i.clearStencil(qt),jt=qt)},reset:function(){R=!1,J=null,H=null,pt=null,mt=null,ht=null,vt=null,bt=null,jt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f={},u=new WeakMap,g=[],y=null,m=!1,p=null,E=null,A=null,M=null,C=null,T=null,U=null,S=new Jt(0,0,0),L=0,F=!1,z=null,W=null,q=null,O=null,Z=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,at=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(rt)[1]),Q=at>=1):rt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),Q=at>=2);let et=null,ut={},At=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Kt=new Se().fromArray(At),Xt=new Se().fromArray(Et);function Zt(R,J,H,pt){let mt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(R,ht),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<H;vt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(J+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ht}let ft={};ft[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),o.setFunc(as),xt(!1),St(kl),gt(i.CULL_FACE),dt(zn);function gt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function wt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Ht(R,J){return f[R]!==J?(i.bindFramebuffer(R,J),f[R]=J,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=J),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Ct(R,J){let H=g,pt=!1;if(R){H=u.get(J),H===void 0&&(H=[],u.set(J,H));let mt=R.textures;if(H.length!==mt.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,vt=mt.length;ht<vt;ht++)H[ht]=i.COLOR_ATTACHMENT0+ht;H.length=mt.length,pt=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,pt=!0);pt&&i.drawBuffers(H)}function Nt(R){return y!==R?(i.useProgram(R),y=R,!0):!1}let oe={[Oi]:i.FUNC_ADD,[Lh]:i.FUNC_SUBTRACT,[Nh]:i.FUNC_REVERSE_SUBTRACT};oe[Dh]=i.MIN,oe[Uh]=i.MAX;let Y={[Fh]:i.ZERO,[Oh]:i.ONE,[Bh]:i.SRC_COLOR,[Hl]:i.SRC_ALPHA,[Wh]:i.SRC_ALPHA_SATURATE,[Gh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[zh]:i.ONE_MINUS_SRC_COLOR,[Wl]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[Vh]:i.ONE_MINUS_DST_ALPHA,[Xh]:i.CONSTANT_COLOR,[qh]:i.ONE_MINUS_CONSTANT_COLOR,[Yh]:i.CONSTANT_ALPHA,[Zh]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(R,J,H,pt,mt,ht,vt,bt,jt,qt){if(R===zn){m===!0&&(wt(i.BLEND),m=!1);return}if(m===!1&&(gt(i.BLEND),m=!0),R!==Ph){if(R!==p||qt!==F){if((E!==Oi||C!==Oi)&&(i.blendEquation(i.FUNC_ADD),E=Oi,C=Oi),qt)switch(R){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yr:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",R);break}else switch(R){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",R);break}A=null,M=null,T=null,U=null,S.set(0,0,0),L=0,p=R,F=qt}return}mt=mt||J,ht=ht||H,vt=vt||pt,(J!==E||mt!==C)&&(i.blendEquationSeparate(oe[J],oe[mt]),E=J,C=mt),(H!==A||pt!==M||ht!==T||vt!==U)&&(i.blendFuncSeparate(Y[H],Y[pt],Y[ht],Y[vt]),A=H,M=pt,T=ht,U=vt),(bt.equals(S)===!1||jt!==L)&&(i.blendColor(bt.r,bt.g,bt.b,jt),S.copy(bt),L=jt),p=R,F=!1}function _t(R,J){R.side===Bn?wt(i.CULL_FACE):gt(i.CULL_FACE);let H=R.side===Ke;J&&(H=!H),xt(H),R.blending===bs&&R.transparent===!1?dt(zn):dt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let pt=R.stencilWrite;a.setTest(pt),pt&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ot(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(R){z!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),z=R)}function St(R){R!==Rh?(gt(i.CULL_FACE),R!==W&&(R===kl?i.cullFace(i.BACK):R===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),W=R}function zt(R){R!==q&&(Q&&i.lineWidth(R),q=R)}function Ot(R,J,H){R?(gt(i.POLYGON_OFFSET_FILL),(O!==J||Z!==H)&&(O=J,Z=H,o.getReversed()&&(J=-J),i.polygonOffset(J,H))):wt(i.POLYGON_OFFSET_FILL)}function Vt(R){R?gt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function Gt(R){R===void 0&&(R=i.TEXTURE0+nt-1),et!==R&&(i.activeTexture(R),et=R)}function k(R,J,H){H===void 0&&(et===null?H=i.TEXTURE0+nt-1:H=et);let pt=ut[H];pt===void 0&&(pt={type:void 0,texture:void 0},ut[H]=pt),(pt.type!==R||pt.texture!==J)&&(et!==H&&(i.activeTexture(H),et=H),i.bindTexture(R,J||ft[R]),pt.type=R,pt.texture=J)}function ne(){let R=ut[et];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function kt(){try{i.compressedTexImage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function v(){try{i.texSubImage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function $(){try{i.texSubImage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function D(){try{i.texStorage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function x(){try{i.texStorage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function _(){try{i.texImage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function b(){try{i.texImage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function I(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function P(R,J){d[R]!==J&&(i.pixelStorei(R,J),d[R]=J)}function V(R){Kt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Kt.copy(R))}function B(R){Xt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Xt.copy(R))}function tt(R,J){let H=c.get(J);H===void 0&&(H=new WeakMap,c.set(J,H));let pt=H.get(R);pt===void 0&&(pt=i.getUniformBlockIndex(J,R.name),H.set(R,pt))}function K(R,J){let pt=c.get(J).get(R);l.get(J)!==pt&&(i.uniformBlockBinding(J,pt,R.__bindingPointIndex),l.set(J,pt))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},et=null,ut={},f={},u=new WeakMap,g=[],y=null,m=!1,p=null,E=null,A=null,M=null,C=null,T=null,U=null,S=new Jt(0,0,0),L=0,F=!1,z=null,W=null,q=null,O=null,Z=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:wt,bindFramebuffer:Ht,drawBuffers:Ct,useProgram:Nt,setBlending:dt,setMaterial:_t,setFlipSided:xt,setCullFace:St,setLineWidth:zt,setPolygonOffset:Ot,setScissorTest:Vt,activeTexture:Gt,bindTexture:k,unbindTexture:ne,compressedTexImage2D:kt,compressedTexImage3D:N,texImage2D:_,texImage3D:b,pixelStorei:P,getParameter:I,updateUBOMapping:tt,uniformBlockBinding:K,texStorage2D:D,texStorage3D:x,texSubImage2D:v,texSubImage3D:$,compressedTexSubImage2D:ot,compressedTexSubImage3D:ct,scissor:V,viewport:B,reset:yt}}function Yx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,d=new Set,f,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,v){return g?new OffscreenCanvas(N,v):$s("canvas")}function m(N,v,$){let ot=1,ct=kt(N);if((ct.width>$||ct.height>$)&&(ot=$/Math.max(ct.width,ct.height)),ot<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let D=Math.floor(ot*ct.width),x=Math.floor(ot*ct.height);f===void 0&&(f=y(D,x));let _=v?y(D,x):f;return _.width=D,_.height=x,_.getContext("2d").drawImage(N,0,0,D,x),Wt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+D+"x"+x+")."),_}else return"data"in N&&Wt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),N;return N}function p(N){return N.generateMipmaps}function E(N){i.generateMipmap(N)}function A(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(N,v,$,ot,ct,D=!1){if(N!==null){if(i[N]!==void 0)return i[N];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let x;ot&&(x=t.get("EXT_texture_norm16"),x||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _=v;if(v===i.RED&&($===i.FLOAT&&(_=i.R32F),$===i.HALF_FLOAT&&(_=i.R16F),$===i.UNSIGNED_BYTE&&(_=i.R8),$===i.UNSIGNED_SHORT&&x&&(_=x.R16_EXT),$===i.SHORT&&x&&(_=x.R16_SNORM_EXT)),v===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(_=i.R8UI),$===i.UNSIGNED_SHORT&&(_=i.R16UI),$===i.UNSIGNED_INT&&(_=i.R32UI),$===i.BYTE&&(_=i.R8I),$===i.SHORT&&(_=i.R16I),$===i.INT&&(_=i.R32I)),v===i.RG&&($===i.FLOAT&&(_=i.RG32F),$===i.HALF_FLOAT&&(_=i.RG16F),$===i.UNSIGNED_BYTE&&(_=i.RG8),$===i.UNSIGNED_SHORT&&x&&(_=x.RG16_EXT),$===i.SHORT&&x&&(_=x.RG16_SNORM_EXT)),v===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(_=i.RG8UI),$===i.UNSIGNED_SHORT&&(_=i.RG16UI),$===i.UNSIGNED_INT&&(_=i.RG32UI),$===i.BYTE&&(_=i.RG8I),$===i.SHORT&&(_=i.RG16I),$===i.INT&&(_=i.RG32I)),v===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(_=i.RGB8UI),$===i.UNSIGNED_SHORT&&(_=i.RGB16UI),$===i.UNSIGNED_INT&&(_=i.RGB32UI),$===i.BYTE&&(_=i.RGB8I),$===i.SHORT&&(_=i.RGB16I),$===i.INT&&(_=i.RGB32I)),v===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(_=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(_=i.RGBA16UI),$===i.UNSIGNED_INT&&(_=i.RGBA32UI),$===i.BYTE&&(_=i.RGBA8I),$===i.SHORT&&(_=i.RGBA16I),$===i.INT&&(_=i.RGBA32I)),v===i.RGB&&($===i.UNSIGNED_SHORT&&x&&(_=x.RGB16_EXT),$===i.SHORT&&x&&(_=x.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(_=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(_=i.R11F_G11F_B10F)),v===i.RGBA){let b=D?Js:re.getTransfer(ct);$===i.FLOAT&&(_=i.RGBA32F),$===i.HALF_FLOAT&&(_=i.RGBA16F),$===i.UNSIGNED_BYTE&&(_=b===he?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&x&&(_=x.RGBA16_EXT),$===i.SHORT&&x&&(_=x.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(_=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(_=i.RGB5_A1)}return(_===i.R16F||_===i.R32F||_===i.RG16F||_===i.RG32F||_===i.RGBA16F||_===i.RGBA32F)&&t.get("EXT_color_buffer_float"),_}function C(N,v){let $;return N?v===null||v===wn||v===ws?$=i.DEPTH24_STENCIL8:v===Tn?$=i.DEPTH32F_STENCIL8:v===Es&&($=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wn||v===ws?$=i.DEPTH_COMPONENT24:v===Tn?$=i.DEPTH_COMPONENT32F:v===Es&&($=i.DEPTH_COMPONENT16),$}function T(N,v){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ue&&N.minFilter!==Oe?Math.log2(Math.max(v.width,v.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?v.mipmaps.length:1}function U(N){let v=N.target;v.removeEventListener("dispose",U),L(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function S(N){let v=N.target;v.removeEventListener("dispose",S),z(v)}function L(N){let v=n.get(N);if(v.__webglInit===void 0)return;let $=N.source,ot=u.get($);if(ot){let ct=ot[v.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&F(N),Object.keys(ot).length===0&&u.delete($)}n.remove(N)}function F(N){let v=n.get(N);i.deleteTexture(v.__webglTexture);let $=N.source,ot=u.get($);delete ot[v.__cacheKey],o.memory.textures--}function z(N){let v=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(v.__webglFramebuffer[ot]))for(let ct=0;ct<v.__webglFramebuffer[ot].length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[ot][ct]);else i.deleteFramebuffer(v.__webglFramebuffer[ot]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ot])}else{if(Array.isArray(v.__webglFramebuffer))for(let ot=0;ot<v.__webglFramebuffer.length;ot++)i.deleteFramebuffer(v.__webglFramebuffer[ot]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ot=0;ot<v.__webglColorRenderbuffer.length;ot++)v.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ot]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let $=N.textures;for(let ot=0,ct=$.length;ot<ct;ot++){let D=n.get($[ot]);D.__webglTexture&&(i.deleteTexture(D.__webglTexture),o.memory.textures--),n.remove($[ot])}n.remove(N)}let W=0;function q(){W=0}function O(){return W}function Z(N){W=N}function nt(){let N=W;return N>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,N}function Q(N){let v=[];return v.push(N.wrapS),v.push(N.wrapT),v.push(N.wrapR||0),v.push(N.magFilter),v.push(N.minFilter),v.push(N.anisotropy),v.push(N.internalFormat),v.push(N.format),v.push(N.type),v.push(N.generateMipmaps),v.push(N.premultiplyAlpha),v.push(N.flipY),v.push(N.unpackAlignment),v.push(N.colorSpace),v.join()}function at(N,v){let $=n.get(N);if(N.isVideoTexture&&k(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){let ot=N.image;if(ot===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt($,N,v);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+v)}function rt(N,v){let $=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){wt($,N,v);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+v)}function et(N,v){let $=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){wt($,N,v);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+v)}function ut(N,v){let $=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&$.__version!==N.version){Ht($,N,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+v)}let At={[Ri]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},Et={[Ue]:i.NEAREST,[Kh]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Kt={[eu]:i.NEVER,[ou]:i.ALWAYS,[nu]:i.LESS,[za]:i.LEQUAL,[iu]:i.EQUAL,[ka]:i.GEQUAL,[su]:i.GREATER,[ru]:i.NOTEQUAL};function Xt(N,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Oe||v.magFilter===na||v.magFilter===Mr||v.magFilter===yi||v.minFilter===Oe||v.minFilter===na||v.minFilter===Mr||v.minFilter===yi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,At[v.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,At[v.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,At[v.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Et[v.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Et[v.minFilter]),v.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Kt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ue||v.minFilter!==Mr&&v.minFilter!==yi||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(N,v){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,v.addEventListener("dispose",U));let ot=v.source,ct=u.get(ot);ct===void 0&&(ct={},u.set(ot,ct));let D=Q(v);if(D!==N.__cacheKey){ct[D]===void 0&&(ct[D]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ct[D].usedTimes++;let x=ct[N.__cacheKey];x!==void 0&&(ct[N.__cacheKey].usedTimes--,x.usedTimes===0&&F(v)),N.__cacheKey=D,N.__webglTexture=ct[D].texture}return $}function ft(N,v,$){return Math.floor(Math.floor(N/$)/v)}function gt(N,v,$,ot){let D=N.updateRanges;if(D.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,$,ot,v.data);else{D.sort((P,V)=>P.start-V.start);let x=0;for(let P=1;P<D.length;P++){let V=D[x],B=D[P],tt=V.start+V.count,K=ft(B.start,v.width,4),yt=ft(V.start,v.width,4);B.start<=tt+1&&K===yt&&ft(B.start+B.count-1,v.width,4)===K?V.count=Math.max(V.count,B.start+B.count-V.start):(++x,D[x]=B)}D.length=x+1;let _=e.getParameter(i.UNPACK_ROW_LENGTH),b=e.getParameter(i.UNPACK_SKIP_PIXELS),I=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let P=0,V=D.length;P<V;P++){let B=D[P],tt=Math.floor(B.start/4),K=Math.ceil(B.count/4),yt=tt%v.width,R=Math.floor(tt/v.width),J=K,H=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,R),e.texSubImage2D(i.TEXTURE_2D,0,yt,R,J,H,$,ot,v.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,_),e.pixelStorei(i.UNPACK_SKIP_PIXELS,b),e.pixelStorei(i.UNPACK_SKIP_ROWS,I)}}function wt(N,v,$){let ot=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ot=i.TEXTURE_3D);let ct=Zt(N,v),D=v.source;e.bindTexture(ot,N.__webglTexture,i.TEXTURE0+$);let x=n.get(D);if(D.version!==x.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let H=re.getPrimaries(re.workingColorSpace),pt=v.colorSpace===jn?null:re.getPrimaries(v.colorSpace),mt=v.colorSpace===jn||H===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let b=m(v.image,!1,s.maxTextureSize);b=ne(v,b);let I=r.convert(v.format,v.colorSpace),P=r.convert(v.type),V=M(v.internalFormat,I,P,v.normalized,v.colorSpace,v.isVideoTexture);Xt(ot,v);let B,tt=v.mipmaps,K=v.isVideoTexture!==!0,yt=x.__version===void 0||ct===!0,R=D.dataReady,J=T(v,b);if(v.isDepthTexture)V=C(v.format===vi,v.type),yt&&(K?e.texStorage2D(i.TEXTURE_2D,1,V,b.width,b.height):e.texImage2D(i.TEXTURE_2D,0,V,b.width,b.height,0,I,P,null));else if(v.isDataTexture)if(tt.length>0){K&&yt&&e.texStorage2D(i.TEXTURE_2D,J,V,tt[0].width,tt[0].height);for(let H=0,pt=tt.length;H<pt;H++)B=tt[H],K?R&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,B.width,B.height,I,P,B.data):e.texImage2D(i.TEXTURE_2D,H,V,B.width,B.height,0,I,P,B.data);v.generateMipmaps=!1}else K?(yt&&e.texStorage2D(i.TEXTURE_2D,J,V,b.width,b.height),R&&gt(v,b,I,P)):e.texImage2D(i.TEXTURE_2D,0,V,b.width,b.height,0,I,P,b.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){K&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,V,tt[0].width,tt[0].height,b.depth);for(let H=0,pt=tt.length;H<pt;H++)if(B=tt[H],v.format!==gn)if(I!==null)if(K){if(R)if(v.layerUpdates.size>0){let mt=fc(B.width,B.height,v.format,v.type);for(let ht of v.layerUpdates){let vt=B.data.subarray(ht*mt/B.data.BYTES_PER_ELEMENT,(ht+1)*mt/B.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,ht,B.width,B.height,1,I,vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,B.width,B.height,b.depth,I,B.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,V,B.width,B.height,b.depth,0,B.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,B.width,B.height,b.depth,I,P,B.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,V,B.width,B.height,b.depth,0,I,P,B.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{K&&yt&&e.texStorage2D(i.TEXTURE_2D,J,V,tt[0].width,tt[0].height);for(let H=0,pt=tt.length;H<pt;H++)B=tt[H],v.format!==gn?I!==null?K?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,B.width,B.height,I,B.data):e.compressedTexImage2D(i.TEXTURE_2D,H,V,B.width,B.height,0,B.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?R&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,B.width,B.height,I,P,B.data):e.texImage2D(i.TEXTURE_2D,H,V,B.width,B.height,0,I,P,B.data)}else if(v.isDataArrayTexture)if(K){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,V,b.width,b.height,b.depth),R)if(v.layerUpdates.size>0){let H=fc(b.width,b.height,v.format,v.type);for(let pt of v.layerUpdates){let mt=b.data.subarray(pt*H/b.data.BYTES_PER_ELEMENT,(pt+1)*H/b.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,b.width,b.height,1,I,P,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,b.width,b.height,b.depth,I,P,b.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,V,b.width,b.height,b.depth,0,I,P,b.data);else if(v.isData3DTexture)K?(yt&&e.texStorage3D(i.TEXTURE_3D,J,V,b.width,b.height,b.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,b.width,b.height,b.depth,I,P,b.data)):e.texImage3D(i.TEXTURE_3D,0,V,b.width,b.height,b.depth,0,I,P,b.data);else if(v.isFramebufferTexture){if(yt)if(K)e.texStorage2D(i.TEXTURE_2D,J,V,b.width,b.height);else{let H=b.width,pt=b.height;for(let mt=0;mt<J;mt++)e.texImage2D(i.TEXTURE_2D,mt,V,H,pt,0,I,P,null),H>>=1,pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let H=i.canvas;if(H.hasAttribute("layoutsubtree")||H.setAttribute("layoutsubtree","true"),b.parentNode!==H){H.appendChild(b),d.add(v),H.onpaint=pt=>{let mt=pt.changedElements;for(let ht of d)mt.includes(ht.image)&&(ht.needsUpdate=!0)},H.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,b);else{let mt=i.RGBA,ht=i.RGBA,vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,ht,vt,b)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(tt.length>0){if(K&&yt){let H=kt(tt[0]);e.texStorage2D(i.TEXTURE_2D,J,V,H.width,H.height)}for(let H=0,pt=tt.length;H<pt;H++)B=tt[H],K?R&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,I,P,B):e.texImage2D(i.TEXTURE_2D,H,V,I,P,B);v.generateMipmaps=!1}else if(K){if(yt){let H=kt(b);e.texStorage2D(i.TEXTURE_2D,J,V,H.width,H.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,I,P,b)}else e.texImage2D(i.TEXTURE_2D,0,V,I,P,b);p(v)&&E(ot),x.__version=D.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function Ht(N,v,$){if(v.image.length!==6)return;let ot=Zt(N,v),ct=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+$);let D=n.get(ct);if(ct.version!==D.__version||ot===!0){e.activeTexture(i.TEXTURE0+$);let x=re.getPrimaries(re.workingColorSpace),_=v.colorSpace===jn?null:re.getPrimaries(v.colorSpace),b=v.colorSpace===jn||x===_?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,b);let I=v.isCompressedTexture||v.image[0].isCompressedTexture,P=v.image[0]&&v.image[0].isDataTexture,V=[];for(let ht=0;ht<6;ht++)!I&&!P?V[ht]=m(v.image[ht],!0,s.maxCubemapSize):V[ht]=P?v.image[ht].image:v.image[ht],V[ht]=ne(v,V[ht]);let B=V[0],tt=r.convert(v.format,v.colorSpace),K=r.convert(v.type),yt=M(v.internalFormat,tt,K,v.normalized,v.colorSpace),R=v.isVideoTexture!==!0,J=D.__version===void 0||ot===!0,H=ct.dataReady,pt=T(v,B);Xt(i.TEXTURE_CUBE_MAP,v);let mt;if(I){R&&J&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,yt,B.width,B.height);for(let ht=0;ht<6;ht++){mt=V[ht].mipmaps;for(let vt=0;vt<mt.length;vt++){let bt=mt[vt];v.format!==gn?tt!==null?R?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,0,0,bt.width,bt.height,tt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,yt,bt.width,bt.height,0,bt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,0,0,bt.width,bt.height,tt,K,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,yt,bt.width,bt.height,0,tt,K,bt.data)}}}else{if(mt=v.mipmaps,R&&J){mt.length>0&&pt++;let ht=kt(V[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,yt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(P){R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,V[ht].width,V[ht].height,tt,K,V[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,yt,V[ht].width,V[ht].height,0,tt,K,V[ht].data);for(let vt=0;vt<mt.length;vt++){let jt=mt[vt].image[ht].image;R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,0,0,jt.width,jt.height,tt,K,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,yt,jt.width,jt.height,0,tt,K,jt.data)}}else{R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,tt,K,V[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,yt,tt,K,V[ht]);for(let vt=0;vt<mt.length;vt++){let bt=mt[vt];R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,0,0,tt,K,bt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,yt,tt,K,bt.image[ht])}}}p(v)&&E(i.TEXTURE_CUBE_MAP),D.__version=ct.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function Ct(N,v,$,ot,ct,D){let x=r.convert($.format,$.colorSpace),_=r.convert($.type),b=M($.internalFormat,x,_,$.normalized,$.colorSpace),I=n.get(v),P=n.get($);if(P.__renderTarget=v,!I.__hasExternalTextures){let V=Math.max(1,v.width>>D),B=Math.max(1,v.height>>D);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,D,b,V,B,v.depth,0,x,_,null):e.texImage2D(ct,D,b,V,B,0,x,_,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Gt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ct,P.__webglTexture,0,Vt(v)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ct,P.__webglTexture,D),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(N,v,$){if(i.bindRenderbuffer(i.RENDERBUFFER,N),v.depthBuffer){let ot=v.depthTexture,ct=ot&&ot.isDepthTexture?ot.type:null,D=C(v.stencilBuffer,ct),x=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(v),D,v.width,v.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(v),D,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,D,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,N)}else{let ot=v.textures;for(let ct=0;ct<ot.length;ct++){let D=ot[ct],x=r.convert(D.format,D.colorSpace),_=r.convert(D.type),b=M(D.internalFormat,x,_,D.normalized,D.colorSpace);Gt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(v),b,v.width,v.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(v),b,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,b,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(N,v,$){let ot=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(v.depthTexture);if(ct.__renderTarget=v,(!ct.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ot){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,v.depthTexture.addEventListener("dispose",U)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,v.depthTexture);let I=r.convert(v.depthTexture.format),P=r.convert(v.depthTexture.type),V;v.depthTexture.format===Dn?V=i.DEPTH_COMPONENT24:v.depthTexture.format===vi&&(V=i.DEPTH24_STENCIL8);for(let B=0;B<6;B++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,V,v.width,v.height,0,I,P,null)}}else at(v.depthTexture,0);let D=ct.__webglTexture,x=Vt(v),_=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,b=v.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Dn)Gt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,b,_,D,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,b,_,D,0);else if(v.depthTexture.format===vi)Gt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,b,_,D,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,b,_,D,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Y(N){let v=n.get(N),$=N.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==N.depthTexture){let ot=N.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ot){let ct=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ot.removeEventListener("dispose",ct)};ot.addEventListener("dispose",ct),v.__depthDisposeCallback=ct}v.__boundDepthTexture=ot}if(N.depthTexture&&!v.__autoAllocateDepthBuffer)if($)for(let ot=0;ot<6;ot++)oe(v.__webglFramebuffer[ot],N,ot);else{let ot=N.texture.mipmaps;ot&&ot.length>0?oe(v.__webglFramebuffer[0],N,0):oe(v.__webglFramebuffer,N,0)}else if($){v.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ot]),v.__webglDepthbuffer[ot]===void 0)v.__webglDepthbuffer[ot]=i.createRenderbuffer(),Nt(v.__webglDepthbuffer[ot],N,!1);else{let ct=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=v.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,D)}}else{let ot=N.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Nt(v.__webglDepthbuffer,N,!1);else{let ct=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,D)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(N,v,$){let ot=n.get(N);v!==void 0&&Ct(ot.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Y(N)}function _t(N){let v=N.texture,$=n.get(N),ot=n.get(v);N.addEventListener("dispose",S);let ct=N.textures,D=N.isWebGLCubeRenderTarget===!0,x=ct.length>1;if(x||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=v.version,o.memory.textures++),D){$.__webglFramebuffer=[];for(let _=0;_<6;_++)if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer[_]=[];for(let b=0;b<v.mipmaps.length;b++)$.__webglFramebuffer[_][b]=i.createFramebuffer()}else $.__webglFramebuffer[_]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){$.__webglFramebuffer=[];for(let _=0;_<v.mipmaps.length;_++)$.__webglFramebuffer[_]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(x)for(let _=0,b=ct.length;_<b;_++){let I=n.get(ct[_]);I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Gt(N)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _=0;_<ct.length;_++){let b=ct[_];$.__webglColorRenderbuffer[_]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[_]);let I=r.convert(b.format,b.colorSpace),P=r.convert(b.type),V=M(b.internalFormat,I,P,b.normalized,b.colorSpace,N.isXRRenderTarget===!0),B=Vt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,B,V,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_,i.RENDERBUFFER,$.__webglColorRenderbuffer[_])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt($.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(D){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,v);for(let _=0;_<6;_++)if(v.mipmaps&&v.mipmaps.length>0)for(let b=0;b<v.mipmaps.length;b++)Ct($.__webglFramebuffer[_][b],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,b);else Ct($.__webglFramebuffer[_],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,0);p(v)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(x){for(let _=0,b=ct.length;_<b;_++){let I=ct[_],P=n.get(I),V=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(V=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,P.__webglTexture),Xt(V,I),Ct($.__webglFramebuffer,N,I,i.COLOR_ATTACHMENT0+_,V,0),p(I)&&E(V)}e.unbindTexture()}else{let _=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_,ot.__webglTexture),Xt(_,v),v.mipmaps&&v.mipmaps.length>0)for(let b=0;b<v.mipmaps.length;b++)Ct($.__webglFramebuffer[b],N,v,i.COLOR_ATTACHMENT0,_,b);else Ct($.__webglFramebuffer,N,v,i.COLOR_ATTACHMENT0,_,0);p(v)&&E(_),e.unbindTexture()}N.depthBuffer&&Y(N)}function xt(N){let v=N.textures;for(let $=0,ot=v.length;$<ot;$++){let ct=v[$];if(p(ct)){let D=A(N),x=n.get(ct).__webglTexture;e.bindTexture(D,x),E(D),e.unbindTexture()}}}let St=[],zt=[];function Ot(N){if(N.samples>0){if(Gt(N)===!1){let v=N.textures,$=N.width,ot=N.height,ct=i.COLOR_BUFFER_BIT,D=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x=n.get(N),_=v.length>1;if(_)for(let I=0;I<v.length;I++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,x.__webglMultisampledFramebuffer);let b=N.texture.mipmaps;b&&b.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglFramebuffer);for(let I=0;I<v.length;I++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),_){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,x.__webglColorRenderbuffer[I]);let P=n.get(v[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,$,ot,0,0,$,ot,ct,i.NEAREST),l===!0&&(St.length=0,zt.length=0,St.push(i.COLOR_ATTACHMENT0+I),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(St.push(D),zt.push(D),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_)for(let I=0;I<v.length;I++){e.bindFramebuffer(i.FRAMEBUFFER,x.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,x.__webglColorRenderbuffer[I]);let P=n.get(v[I]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let v=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Vt(N){return Math.min(s.maxSamples,N.samples)}function Gt(N){let v=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function k(N){let v=o.render.frame;h.get(N)!==v&&(h.set(N,v),N.update())}function ne(N,v){let $=N.colorSpace,ot=N.format,ct=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Zs&&$!==jn&&(re.getTransfer($)===he?(ot!==gn||ct!==nn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",$)),v}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=q,this.getTextureUnits=O,this.setTextureUnits=Z,this.setTexture2D=at,this.setTexture2DArray=rt,this.setTexture3D=et,this.setTextureCube=ut,this.rebindTextures=dt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Zx(i,t){function e(n,s=jn){let r,o=re.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jl)return i.BYTE;if(n===Ql)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===nc)return i.ALPHA;if(n===ic)return i.RGB;if(n===gn)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===sc)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===Si)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===br||n===Er||n===wr||n===Tr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ha||n===ua||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===pa||n===ma||n===ga||n===xa||n===Ar||n===_a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===da||n===pa)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ga)return r.COMPRESSED_R11_EAC;if(n===xa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ar)return r.COMPRESSED_RG11_EAC;if(n===_a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ya||n===va||n===Sa||n===Ma||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Da||n===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Na)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fa||n===Oa||n===Rr||n===Ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
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

}`,Tc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new sr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:Jx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ac=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null,y=typeof XRWebGLBinding<"u",m=new Tc,p={},E=e.getContextAttributes(),A=null,M=null,C=[],T=[],U=new Mt,S=null,L=null,F=new Ze;F.viewport=new Se;let z=new Ze;z.viewport=new Se;let W=[F,z],q=new jo,O=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let gt=C[ft];return gt===void 0&&(gt=new ds,C[ft]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(ft){let gt=C[ft];return gt===void 0&&(gt=new ds,C[ft]=gt),gt.getGripSpace()},this.getHand=function(ft){let gt=C[ft];return gt===void 0&&(gt=new ds,C[ft]=gt),gt.getHandSpace()};function nt(ft){let gt=T.indexOf(ft.inputSource);if(gt===-1)return;let wt=C[gt];wt!==void 0&&(wt.update(ft.inputSource,ft.frame,c||o),wt.dispatchEvent({type:ft.type,data:ft.inputSource}))}function Q(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",at);for(let ft=0;ft<C.length;ft++){let gt=T[ft];gt!==null&&(T[ft]=null,C[ft].disconnect(gt))}O=null,Z=null,m.reset();for(let ft in p)delete p[ft];if(t.setRenderTarget(A),u=null,f=null,d=null,s=null,M=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(U.width,U.height,!1),L!==null){let ft=L.camera;ft.fov=L.fov,ft.zoom=L.zoom,ft.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){a=ft,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ft){c=ft},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",at),E.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(U),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Ct=null;E.depth&&(Ct=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=E.stencil?vi:Dn,Ht=E.stencil?ws:wn);let Nt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new en(f.textureWidth,f.textureHeight,{format:gn,type:nn,depthTexture:new fi(f.textureWidth,f.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let wt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new en(u.framebufferWidth,u.framebufferHeight,{format:gn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(ft){for(let gt=0;gt<ft.removed.length;gt++){let wt=ft.removed[gt],Ht=T.indexOf(wt);Ht>=0&&(T[Ht]=null,C[Ht].disconnect(wt))}for(let gt=0;gt<ft.added.length;gt++){let wt=ft.added[gt],Ht=T.indexOf(wt);if(Ht===-1){for(let Nt=0;Nt<C.length;Nt++)if(Nt>=T.length){T.push(wt),Ht=Nt;break}else if(T[Nt]===null){T[Nt]=wt,Ht=Nt;break}if(Ht===-1)break}let Ct=C[Ht];Ct&&Ct.connect(wt)}}let rt=new G,et=new G;function ut(ft,gt,wt){rt.setFromMatrixPosition(gt.matrixWorld),et.setFromMatrixPosition(wt.matrixWorld);let Ht=rt.distanceTo(et),Ct=gt.projectionMatrix.elements,Nt=wt.projectionMatrix.elements,oe=Ct[14]/(Ct[10]-1),Y=Ct[14]/(Ct[10]+1),dt=(Ct[9]+1)/Ct[5],_t=(Ct[9]-1)/Ct[5],xt=(Ct[8]-1)/Ct[0],St=(Nt[8]+1)/Nt[0],zt=oe*xt,Ot=oe*St,Vt=Ht/(-xt+St),Gt=Vt*-xt;if(gt.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(Gt),ft.translateZ(Vt),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),Ct[10]===-1)ft.projectionMatrix.copy(gt.projectionMatrix),ft.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let k=oe+Vt,ne=Y+Vt,kt=zt-Gt,N=Ot+(Ht-Gt),v=dt*Y/ne*k,$=_t*Y/ne*k;ft.projectionMatrix.makePerspective(kt,N,v,$,k,ne),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function At(ft,gt){gt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(gt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let gt=ft.near,wt=ft.far;m.texture!==null&&(m.depthNear>0&&(gt=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),q.near=z.near=F.near=gt,q.far=z.far=F.far=wt,(O!==q.near||Z!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),O=q.near,Z=q.far),q.layers.mask=ft.layers.mask|6,F.layers.mask=q.layers.mask&-5,z.layers.mask=q.layers.mask&-3;let Ht=ft.parent,Ct=q.cameras;At(q,Ht);for(let Nt=0;Nt<Ct.length;Nt++)At(Ct[Nt],Ht);Ct.length===2?ut(q,F,z):q.projectionMatrix.copy(F.projectionMatrix),L===null&&ft.isPerspectiveCamera&&(L={camera:ft,fov:ft.fov,zoom:ft.zoom}),Et(ft,q,Ht)};function Et(ft,gt,wt){wt===null?ft.matrix.copy(gt.matrixWorld):(ft.matrix.copy(wt.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(gt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(gt.projectionMatrix),ft.projectionMatrixInverse.copy(gt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=hs*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(ft){l=ft,f!==null&&(f.fixedFoveation=ft),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ft)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(ft){return p[ft]};let Kt=null;function Xt(ft,gt){if(h=gt.getViewerPose(c||o),g=gt,h!==null){let wt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let Ht=!1;wt.length!==q.cameras.length&&(q.cameras.length=0,Ht=!0);for(let Y=0;Y<wt.length;Y++){let dt=wt[Y],_t=null;if(u!==null)_t=u.getViewport(dt);else{let St=d.getViewSubImage(f,dt);_t=St.viewport,Y===0&&(t.setRenderTargetTextures(M,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(M))}let xt=W[Y];xt===void 0&&(xt=new Ze,xt.layers.enable(Y),xt.viewport=new Se,W[Y]=xt),xt.matrix.fromArray(dt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(dt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(_t.x,_t.y,_t.width,_t.height),Y===0&&(q.matrix.copy(xt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ht===!0&&q.cameras.push(xt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Y=d.getDepthInformation(wt[0]);Y&&Y.isValid&&Y.texture&&m.init(Y,s.renderState)}if(Ct&&Ct.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Y=0;Y<wt.length;Y++){let dt=wt[Y].camera;if(dt){let _t=p[dt];_t||(_t=new sr,p[dt]=_t);let xt=d.getCameraImage(dt);_t.sourceTexture=xt}}}}for(let wt=0;wt<C.length;wt++){let Ht=T[wt],Ct=C[wt];Ht!==null&&Ct!==void 0&&Ct.update(Ht,gt,c||o)}Kt&&Kt(ft,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}let Zt=new Vu;Zt.setAnimationLoop(Xt),this.setAnimationLoop=function(ft){Kt=ft},this.dispose=function(){}}},Kx=new ue,Yu=new $t;Yu.set(-1,0,0,0,1,0,0,0,1);function jx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),A=E.envMap,M=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,C){let T=C.program;n.uniformBlockBinding(M,T)}function c(M,C){let T=s[M.id];T===void 0&&(m(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",E));let U=C.program;n.updateUBOMapping(M,U);let S=t.render.frame;r[M.id]!==S&&(f(M),r[M.id]=S)}function h(M){let C=d();M.__bindingPointIndex=C;let T=i.createBuffer(),U=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,T),T}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let C=s[M.id],T=M.uniforms,U=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let S=0,L=T.length;S<L;S++){let F=T[S];if(Array.isArray(F))for(let z=0,W=F.length;z<W;z++)u(F[z],S,z,U);else u(F,S,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,C,T,U){if(y(M,C,T,U)===!0){let S=M.__offset,L=M.value;if(Array.isArray(L)){let F=0;for(let z=0;z<L.length;z++){let W=L[z],q=p(W);g(W,M.__data,F),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(L,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,M.__data)}}function g(M,C,T){typeof M=="number"||typeof M=="boolean"?C[0]=M:M.isMatrix3?(C[0]=M.elements[0],C[1]=M.elements[1],C[2]=M.elements[2],C[3]=0,C[4]=M.elements[3],C[5]=M.elements[4],C[6]=M.elements[5],C[7]=0,C[8]=M.elements[6],C[9]=M.elements[7],C[10]=M.elements[8],C[11]=0):ArrayBuffer.isView(M)?C.set(new M.constructor(M.buffer,M.byteOffset,C.length)):M.toArray(C,T)}function y(M,C,T,U){let S=M.value,L=C+"_"+T;if(U[L]===void 0)return typeof S=="number"||typeof S=="boolean"?U[L]=S:ArrayBuffer.isView(S)?U[L]=S.slice():U[L]=S.clone(),!0;{let F=U[L];if(typeof S=="number"||typeof S=="boolean"){if(F!==S)return U[L]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(F.equals(S)===!1)return F.copy(S),!0}}return!1}function m(M){let C=M.uniforms,T=0,U=16;for(let L=0,F=C.length;L<F;L++){let z=Array.isArray(C[L])?C[L]:[C[L]];for(let W=0,q=z.length;W<q;W++){let O=z[W],Z=Array.isArray(O.value)?O.value:[O.value];for(let nt=0,Q=Z.length;nt<Q;nt++){let at=Z[nt],rt=p(at),et=T%U,ut=et%rt.boundary,At=et+ut;T+=ut,At!==0&&U-At<rt.storage&&(T+=U-At),O.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=rt.storage}}}let S=T%U;return S>0&&(T+=U-S),M.__size=T,M.__cache={},this}function p(M){let C={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(C.boundary=4,C.storage=4):M.isVector2?(C.boundary=8,C.storage=8):M.isVector3||M.isColor?(C.boundary=16,C.storage=12):M.isVector4?(C.boundary=16,C.storage=16):M.isMatrix3?(C.boundary=48,C.storage=48):M.isMatrix4?(C.boundary=64,C.storage=64):M.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(C.boundary=16,C.storage=M.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",M),C}function E(M){let C=M.target;C.removeEventListener("dispose",E);let T=o.indexOf(C.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function A(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}var t_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function e_(){return kn===null&&(kn=new Ao(t_,16,16,Si,An),kn.name="DFG_LUT",kn.minFilter=Oe,kn.magFilter=Oe,kn.wrapS=Ln,kn.wrapT=Ln,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var qa=class{constructor(t={}){let{canvas:e=lu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=nn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=u,m=new Set([la,aa,oa]),p=new Set([nn,wn,Es,ws,sa,ra]),E=new Uint32Array(4),A=new Int32Array(4),M=new G,C=null,T=null,U=[],S=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,z=!1,W=null,q=null,O=null,Z=null;this._outputColorSpace=Re;let nt=0,Q=0,at=null,rt=-1,et=null,ut=new Se,At=new Se,Et=null,Kt=new Jt(0),Xt=0,Zt=e.width,ft=e.height,gt=1,wt=null,Ht=null,Ct=new Se(0,0,Zt,ft),Nt=new Se(0,0,Zt,ft),oe=!1,Y=new ps,dt=!1,_t=!1,xt=new ue,St=new G,zt=new Se,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Gt(){return at===null?gt:1}let k=n;function ne(w,X){return e.getContext(w,X)}let kt,N,v,$,ot,ct,D,x,_,b,I,P,V,B,tt,K,yt,R,J,H,pt,mt,ht;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",jt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),k===null){let X="webgl2";if(k=ne(X,w),k===null)throw ne(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}vt()}catch(w){throw e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Yt("WebGLRenderer: "+w.message),w}function vt(){kt=new l0(k),kt.init(),pt=new Zx(k,kt),N=new jg(k,kt,t,pt),v=new qx(k,kt),N.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),q=k.createFramebuffer(),O=k.createFramebuffer(),Z=k.createFramebuffer(),$=new u0(k),ot=new Lx,ct=new Yx(k,kt,v,ot,N,pt,$),D=new a0(F),x=new dp(k),mt=new $g(k,x),_=new c0(k,x,$,mt),b=new d0(k,_,x,mt,$),R=new f0(k,N,ct),tt=new Qg(ot),I=new Px(F,D,kt,N,mt,tt),P=new jx(F,ot),V=new Dx,B=new kx(kt),yt=new Jg(F,D,v,b,g,l),K=new Xx(F,b,N),ht=new Qx(k,$,N,v),J=new Kg(k,kt,$),H=new h0(k,kt,$),$.programs=I.programs,F.capabilities=N,F.extensions=kt,F.properties=ot,F.renderLists=V,F.shadowMap=K,F.state=v,F.info=$}y!==nn&&(L=new m0(y,e.width,e.height,a,s,r));let bt=new Ac(F,k);this.xr=bt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(w){w!==void 0&&(gt=w,this.setSize(Zt,ft,!1))},this.getSize=function(w){return w.set(Zt,ft)},this.setSize=function(w,X,lt=!0){if(bt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=w,ft=X,e.width=Math.floor(w*gt),e.height=Math.floor(X*gt),lt===!0&&(e.style.width=w+"px",e.style.height=X+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(Zt*gt,ft*gt).floor()},this.setDrawingBufferSize=function(w,X,lt){Zt=w,ft=X,gt=lt,e.width=Math.floor(w*lt),e.height=Math.floor(X*lt),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(y===nn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ut)},this.getViewport=function(w){return w.copy(Ct)},this.setViewport=function(w,X,lt,it){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,X,lt,it),v.viewport(ut.copy(Ct).multiplyScalar(gt).round())},this.getScissor=function(w){return w.copy(Nt)},this.setScissor=function(w,X,lt,it){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,X,lt,it),v.scissor(At.copy(Nt).multiplyScalar(gt).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){v.setScissorTest(oe=w)},this.setOpaqueSort=function(w){wt=w},this.setTransparentSort=function(w){Ht=w},this.getClearColor=function(w){return w.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,lt=!0){let it=0;if(w){let st=!1;if(at!==null){let It=at.texture.format;st=m.has(It)}if(st){let It=at.texture.type,Lt=p.has(It),Rt=yt.getClearColor(),Ut=yt.getClearAlpha(),Bt=Rt.r,Qt=Rt.g,se=Rt.b;Lt?(E[0]=Bt,E[1]=Qt,E[2]=se,E[3]=Ut,k.clearBufferuiv(k.COLOR,0,E)):(A[0]=Bt,A[1]=Qt,A[2]=se,A[3]=Ut,k.clearBufferiv(k.COLOR,0,A))}else it|=k.COLOR_BUFFER_BIT}X&&(it|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(it|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&k.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),W=w},this.dispose=function(){e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),yt.dispose(),V.dispose(),B.dispose(),ot.dispose(),D.dispose(),b.dispose(),mt.dispose(),ht.dispose(),I.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",tn),bt.removeEventListener("sessionend",fn),rn.stop()};function jt(w){w.preventDefault(),oc("WebGLRenderer: Context Lost."),z=!0}function qt(){oc("WebGLRenderer: Context Restored."),z=!1;let w=$.autoReset,X=K.enabled,lt=K.autoUpdate,it=K.needsUpdate,st=K.type;vt(),$.autoReset=w,K.enabled=X,K.autoUpdate=lt,K.needsUpdate=it,K.type=st}function fe(w){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pe(w){let X=w.target;X.removeEventListener("dispose",pe),je(X)}function je(w){Le(w),ot.remove(w)}function Le(w){let X=ot.get(w).programs;X!==void 0&&(X.forEach(function(lt){I.releaseProgram(lt)}),w.isShaderMaterial&&I.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,lt,it,st,It){X===null&&(X=Ot);let Lt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Rt=Tf(w,X,lt,it,st);v.setMaterial(it,Lt);let Ut=lt.index,Bt=1;if(it.wireframe===!0){if(Ut=_.getWireframeAttribute(lt),Ut===void 0)return;Bt=2}let Qt=lt.drawRange,se=lt.attributes.position,Ft=Qt.start*Bt,ce=(Qt.start+Qt.count)*Bt;It!==null&&(Ft=Math.max(Ft,It.start*Bt),ce=Math.min(ce,(It.start+It.count)*Bt)),Ut!==null?(Ft=Math.max(Ft,0),ce=Math.min(ce,Ut.count)):se!=null&&(Ft=Math.max(Ft,0),ce=Math.min(ce,se.count));let Te=ce-Ft;if(Te<0||Te===1/0)return;mt.setup(st,it,Rt,lt,Ut);let _e,me=J;if(Ut!==null&&(_e=x.get(Ut),me=H,me.setIndex(_e)),st.isMesh)it.wireframe===!0?(v.setLineWidth(it.wireframeLinewidth*Gt()),me.setMode(k.LINES)):me.setMode(k.TRIANGLES);else if(st.isLine){let ze=it.linewidth;ze===void 0&&(ze=1),v.setLineWidth(ze*Gt()),st.isLineSegments?me.setMode(k.LINES):st.isLineLoop?me.setMode(k.LINE_LOOP):me.setMode(k.LINE_STRIP)}else st.isPoints?me.setMode(k.POINTS):st.isSprite&&me.setMode(k.TRIANGLES);if(st.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))me.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let ze=st._multiDrawStarts,Pt=st._multiDrawCounts,qe=st._multiDrawCount,ae=Ut?x.get(Ut).bytesPerElement:1,dn=ot.get(it).currentProgram.getUniforms();for(let In=0;In<qe;In++)dn.setValue(k,"_gl_DrawID",In),me.render(ze[In]/ae,Pt[In])}else if(st.isInstancedMesh)me.renderInstances(Ft,Te,st.count);else if(lt.isInstancedBufferGeometry){let ze=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Pt=Math.min(lt.instanceCount,ze);me.renderInstances(Ft,Te,Pt)}else me.render(Ft,Te)};function Qe(w,X,lt,it){W!==null&&w.isNodeMaterial&&W.setObject(it,w),dt===!0&&tt.setState(w,lt,!1),w.transparent===!0&&w.side===Bn&&w.forceSinglePass===!1?(w.side=Ke,w.needsUpdate=!0,kr(w,X,it),w.side=xi,w.needsUpdate=!0,kr(w,X,it),w.side=Bn):kr(w,X,it)}this.compile=function(w,X,lt=null){lt===null&&(lt=w),W!==null&&W.renderStart(w,X,lt),T=B.get(lt),T.init(X),S.push(T),lt.traverseVisible(function(st){st.isLight&&st.layers.test(X.layers)&&(T.pushLight(st),st.castShadow&&T.pushShadow(st))}),w!==lt&&w.traverseVisible(function(st){st.isLight&&st.layers.test(X.layers)&&(T.pushLight(st),st.castShadow&&T.pushShadow(st))}),T.setupLights(),W!==null&&W.updateLights(T.state.lightsArray),_t=this.localClippingEnabled,dt=tt.init(this.clippingPlanes,_t),dt===!0&&tt.setGlobalState(this.clippingPlanes,X),W!==null&&K.render(T.state.shadowsArray,lt,X);let it=new Set;return w.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let It=st.material;if(It)if(Array.isArray(It))for(let Lt=0;Lt<It.length;Lt++){let Rt=It[Lt];Qe(Rt,lt,X,st),it.add(Rt)}else Qe(It,lt,X,st),it.add(It)}),T=S.pop(),W!==null&&W.renderEnd(),it},this.compileAsync=function(w,X,lt=null){let it=this.compile(w,X,lt);return new Promise(st=>{function It(){if(it.forEach(function(Lt){let Ut=ot.get(Lt).currentProgram;(Ut===void 0||Ut.isReady())&&it.delete(Lt)}),it.size===0){st(w);return}setTimeout(It,10)}kt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Xe=null;function sn(w){Xe&&Xe(w)}function tn(){rn.stop()}function fn(){rn.start()}let rn=new Vu;rn.setAnimationLoop(sn),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(w){Xe=w,bt.setAnimationLoop(w),w===null?rn.stop():rn.start()},bt.addEventListener("sessionstart",tn),bt.addEventListener("sessionend",fn),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;W!==null&&W.renderStart(w,X);let lt=bt.enabled===!0&&bt.isPresenting===!0,it=L!==null&&(at===null||lt)&&L.begin(F,at);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(X),X=bt.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,X,at),T=B.get(w,S.length),T.init(X),T.state.textureUnits=ct.getTextureUnits(),S.push(T),xt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Y.setFromProjectionMatrix(xt,Sn,X.reversedDepth),_t=this.localClippingEnabled,dt=tt.init(this.clippingPlanes,_t),C=V.get(w,U.length),C.init(),U.push(C),bt.enabled===!0&&bt.isPresenting===!0){let Lt=F.xr.getDepthSensingMesh();Lt!==null&&Fs(Lt,X,-1/0,F.sortObjects)}Fs(w,X,0,F.sortObjects),C.finish(),W!==null&&W.updateLights(T.state.lightsArray),F.sortObjects===!0&&C.sort(wt,Ht),Vt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Vt&&yt.addToRenderList(C,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&tt.beginShadows();let st=T.state.shadowsArray;if(K.render(st,w,X),dt===!0&&tt.endShadows(),(it&&L.hasRenderPass())===!1){let Lt=C.opaque,Rt=C.transmissive;if(T.setupLights(),X.isArrayCamera){let Ut=X.cameras;if(Rt.length>0)for(let Bt=0,Qt=Ut.length;Bt<Qt;Bt++){let se=Ut[Bt];Br(Lt,Rt,w,se)}Vt&&yt.render(w);for(let Bt=0,Qt=Ut.length;Bt<Qt;Bt++){let se=Ut[Bt];Or(C,w,se,se.viewport)}}else Rt.length>0&&Br(Lt,Rt,w,X),Vt&&yt.render(w),Or(C,w,X)}at!==null&&Q===0&&(ct.updateMultisampleRenderTarget(at),ct.updateRenderTargetMipmap(at)),it&&L.end(F),w.isScene===!0&&w.onAfterRender(F,w,X),mt.resetDefaultState(),rt=-1,et=null,S.pop(),S.length>0?(T=S[S.length-1],ct.setTextureUnits(T.state.textureUnits),dt===!0&&tt.setGlobalState(F.clippingPlanes,T.state.camera)):T=null,U.pop(),U.length>0?C=U[U.length-1]:C=null,W!==null&&W.renderEnd()};function Fs(w,X,lt,it){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)lt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Y)){it&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);let Lt=b.update(w),Rt=w.material;Rt.visible&&C.push(w,Lt,Rt,lt,zt.z,null,X)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Y))){let Lt=b.update(w),Rt=w.material;if(it&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),zt.copy(Lt.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(Rt)){let Ut=Lt.groups;for(let Bt=0,Qt=Ut.length;Bt<Qt;Bt++){let se=Ut[Bt],Ft=Rt[se.materialIndex];Ft&&Ft.visible&&C.push(w,Lt,Ft,lt,zt.z,se,X)}}else Rt.visible&&C.push(w,Lt,Rt,lt,zt.z,null,X)}}let It=w.children;for(let Lt=0,Rt=It.length;Lt<Rt;Lt++)Fs(It[Lt],X,lt,it)}function Or(w,X,lt,it){let{opaque:st,transmissive:It,transparent:Lt}=w;T.setupLightsView(lt),dt===!0&&tt.setGlobalState(F.clippingPlanes,lt),it&&v.viewport(ut.copy(it)),st.length>0&&zr(st,X,lt),It.length>0&&zr(It,X,lt),Lt.length>0&&zr(Lt,X,lt),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Br(w,X,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[it.id]===void 0){let Ft=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[it.id]=new en(1,1,{generateMipmaps:!0,type:Ft?An:nn,minFilter:yi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let It=T.state.transmissionRenderTarget[it.id],Lt=it.viewport||ut;It.setSize(Lt.z*F.transmissionResolutionScale,Lt.w*F.transmissionResolutionScale);let Rt=F.getRenderTarget(),Ut=F.getActiveCubeFace(),Bt=F.getActiveMipmapLevel();F.setRenderTarget(It),F.getClearColor(Kt),Xt=F.getClearAlpha(),Xt<1&&F.setClearColor(16777215,.5),F.clear(),Vt&&yt.render(lt);let Qt=F.toneMapping;F.toneMapping=En;let se=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),T.setupLightsView(it),dt===!0&&tt.setGlobalState(F.clippingPlanes,it),zr(w,lt,it),ct.updateMultisampleRenderTarget(It),ct.updateRenderTargetMipmap(It),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ce=0,Te=X.length;ce<Te;ce++){let _e=X[ce],{object:me,geometry:ze,material:Pt,group:qe}=_e;if(Pt.side===Bn&&me.layers.test(it.layers)){let ae=Pt.side;Pt.side=Ke,Pt.needsUpdate=!0,kc(me,lt,it,ze,Pt,qe),Pt.side=ae,Pt.needsUpdate=!0,Ft=!0}}Ft===!0&&(ct.updateMultisampleRenderTarget(It),ct.updateRenderTargetMipmap(It))}F.setRenderTarget(Rt,Ut,Bt),F.setClearColor(Kt,Xt),se!==void 0&&(it.viewport=se),F.toneMapping=Qt}function zr(w,X,lt){let it=X.isScene===!0?X.overrideMaterial:null;for(let st=0,It=w.length;st<It;st++){let Lt=w[st],{object:Rt,geometry:Ut,group:Bt}=Lt,Qt=Lt.material;Qt.allowOverride===!0&&it!==null&&(Qt=it),Rt.layers.test(lt.layers)&&kc(Rt,X,lt,Ut,Qt,Bt)}}function kc(w,X,lt,it,st,It){W!==null&&st.isNodeMaterial&&W.setObject(w,st),w.onBeforeRender(F,X,lt,it,st,It),w.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),st.onBeforeRender(F,X,lt,it,w,It),st.transparent===!0&&st.side===Bn&&st.forceSinglePass===!1?(st.side=Ke,st.needsUpdate=!0,F.renderBufferDirect(lt,X,it,st,w,It),st.side=xi,st.needsUpdate=!0,F.renderBufferDirect(lt,X,it,st,w,It),st.side=Bn):F.renderBufferDirect(lt,X,it,st,w,It),w.onAfterRender(F,X,lt,it,st,It)}function kr(w,X,lt){X.isScene!==!0&&(X=Ot);let it=ot.get(w),st=T.state.lights,It=T.state.shadowsArray,Lt=st.state.version,Rt=I.getParameters(w,st.state,It,X,lt,T.state.lightProbeGridArray),Ut=I.getProgramCacheKey(Rt),Bt=it.programs;it.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,it.fog=X.fog;let Qt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;it.envMap=D.get(w.envMap||it.environment,Qt),it.envMapRotation=it.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",pe),Bt=new Map,it.programs=Bt);let se=Bt.get(Ut);if(se!==void 0){if(it.currentProgram===se&&it.lightsStateVersion===Lt)return Gc(w,Rt),se}else Rt.uniforms=I.getUniforms(w),W!==null&&w.isNodeMaterial&&W.build(w,lt,Rt),w.onBeforeCompile(Rt,F),se=I.acquireProgram(Rt,Ut),Bt.set(Ut,se),it.uniforms=Rt.uniforms;let Ft=it.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=tt.uniform),Gc(w,Rt),it.needsLights=Rf(w),it.lightsStateVersion=Lt,it.needsLights&&(Ft.ambientLightColor.value=st.state.ambient,Ft.lightProbe.value=st.state.probe,Ft.sunLights.value=st.state.sun,Ft.sunLightShadows.value=st.state.sunShadow,Ft.directionalLights.value=st.state.directional,Ft.directionalLightShadows.value=st.state.directionalShadow,Ft.spotLights.value=st.state.spot,Ft.spotLightShadows.value=st.state.spotShadow,Ft.rectAreaLights.value=st.state.rectArea,Ft.ltc_1.value=st.state.rectAreaLTC1,Ft.ltc_2.value=st.state.rectAreaLTC2,Ft.pointLights.value=st.state.point,Ft.pointLightShadows.value=st.state.pointShadow,Ft.hemisphereLights.value=st.state.hemi,Ft.sunShadowMatrix.value=st.state.sunShadowMatrix,Ft.sunShadowCascade.value=st.state.sunShadowCascade,Ft.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Ft.spotLightMatrix.value=st.state.spotLightMatrix,Ft.spotLightMap.value=st.state.spotLightMap,Ft.pointShadowMatrix.value=st.state.pointShadowMatrix),it.lightProbeGrid=T.state.lightProbeGridArray.length>0,it.currentProgram=se,it.uniformsList=null,se}function Vc(w){if(w.uniformsList===null){let X=w.currentProgram.getUniforms();w.uniformsList=Rs.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Gc(w,X){let lt=ot.get(w);lt.outputColorSpace=X.outputColorSpace,lt.batching=X.batching,lt.batchingColor=X.batchingColor,lt.instancing=X.instancing,lt.instancingColor=X.instancingColor,lt.instancingMorph=X.instancingMorph,lt.skinning=X.skinning,lt.morphTargets=X.morphTargets,lt.morphNormals=X.morphNormals,lt.morphColors=X.morphColors,lt.morphTargetsCount=X.morphTargetsCount,lt.numClippingPlanes=X.numClippingPlanes,lt.numIntersection=X.numClipIntersection,lt.vertexAlphas=X.vertexAlphas,lt.vertexTangents=X.vertexTangents,lt.toneMapping=X.toneMapping}function wf(w,X){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(X.matrixWorld);for(let lt=0,it=w.length;lt<it;lt++){let st=w[lt];if(st.texture!==null&&st.boundingBox.containsPoint(M))return st}return null}function Tf(w,X,lt,it,st){X.isScene!==!0&&(X=Ot),ct.resetTextureUnits();let It=X.fog,Lt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?X.environment:null,Rt=at===null?F.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:re.workingColorSpace,Ut=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Bt=D.get(it.envMap||Lt,Ut),Qt=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,se=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ft=!!lt.morphAttributes.position,ce=!!lt.morphAttributes.normal,Te=!!lt.morphAttributes.color,_e=En;it.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(_e=F.toneMapping);let me=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,ze=me!==void 0?me.length:0,Pt=ot.get(it),qe=T.state.lights;if(dt===!0&&(_t===!0||w!==et)){let ge=w===et&&it.id===rt;tt.setState(it,w,ge)}let ae=!1;it.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==qe.state.version||Pt.outputColorSpace!==Rt||st.isBatchedMesh&&Pt.batching===!1||!st.isBatchedMesh&&Pt.batching===!0||st.isBatchedMesh&&Pt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Pt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Pt.instancing===!1||!st.isInstancedMesh&&Pt.instancing===!0||st.isSkinnedMesh&&Pt.skinning===!1||!st.isSkinnedMesh&&Pt.skinning===!0||st.isInstancedMesh&&Pt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Pt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Pt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Pt.instancingMorph===!1&&st.morphTexture!==null||Pt.envMap!==Bt||it.fog===!0&&Pt.fog!==It||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==tt.numPlanes||Pt.numIntersection!==tt.numIntersection)||Pt.vertexAlphas!==Qt||Pt.vertexTangents!==se||Pt.morphTargets!==Ft||Pt.morphNormals!==ce||Pt.morphColors!==Te||Pt.toneMapping!==_e||Pt.morphTargetsCount!==ze||!!Pt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,Pt.__version=it.version);let dn=Pt.currentProgram;ae===!0&&(dn=kr(it,X,st),W&&it.isNodeMaterial&&W.onUpdateProgram(it,dn,Pt));let In=!1,ni=!1,Wi=!1,de=dn.getUniforms(),we=Pt.uniforms;if(v.useProgram(dn.program)&&(In=!0,ni=!0,Wi=!0),it.id!==rt&&(rt=it.id,ni=!0),Pt.needsLights){let ge=wf(T.state.lightProbeGridArray,st);Pt.lightProbeGrid!==ge&&(Pt.lightProbeGrid=ge,ni=!0)}if(In||et!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),de.setValue(k,"projectionMatrix",w.projectionMatrix),de.setValue(k,"viewMatrix",w.matrixWorldInverse);let si=de.map.cameraPosition;si!==void 0&&si.setValue(k,St.setFromMatrixPosition(w.matrixWorld)),N.logarithmicDepthBuffer&&de.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&de.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),et!==w&&(et=w,ni=!0,Wi=!0)}if(Pt.needsLights&&(qe.state.sunShadowMap.length>0&&de.setValue(k,"sunShadowMap",qe.state.sunShadowMap,ct),qe.state.directionalShadowMap.length>0&&de.setValue(k,"directionalShadowMap",qe.state.directionalShadowMap,ct),qe.state.spotShadowMap.length>0&&de.setValue(k,"spotShadowMap",qe.state.spotShadowMap,ct),qe.state.pointShadowMap.length>0&&de.setValue(k,"pointShadowMap",qe.state.pointShadowMap,ct)),st.isSkinnedMesh){de.setOptional(k,st,"bindMatrix"),de.setOptional(k,st,"bindMatrixInverse");let ge=st.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),de.setValue(k,"boneTexture",ge.boneTexture,ct))}st.isBatchedMesh&&(de.setOptional(k,st,"batchingTexture"),de.setValue(k,"batchingTexture",st._matricesTexture,ct),de.setOptional(k,st,"batchingIdTexture"),de.setValue(k,"batchingIdTexture",st._indirectTexture,ct),de.setOptional(k,st,"batchingColorTexture"),st._colorsTexture!==null&&de.setValue(k,"batchingColorTexture",st._colorsTexture,ct));let ii=lt.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&R.update(st,lt,dn),(ni||Pt.receiveShadow!==st.receiveShadow)&&(Pt.receiveShadow=st.receiveShadow,de.setValue(k,"receiveShadow",st.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&X.environment!==null&&(we.envMapIntensity.value=X.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=e_()),ni){if(de.setValue(k,"toneMappingExposure",F.toneMappingExposure),Pt.needsLights&&Af(we,Wi),It&&it.fog===!0&&P.refreshFogUniforms(we,It),P.refreshMaterialUniforms(we,it,gt,ft,T.state.transmissionRenderTarget[w.id]),Pt.needsLights&&Pt.lightProbeGrid){let ge=Pt.lightProbeGrid;we.probesSH.value=ge.texture,we.probesMin.value.copy(ge.boundingBox.min),we.probesMax.value.copy(ge.boundingBox.max),we.probesResolution.value.copy(ge.resolution)}Rs.upload(k,Vc(Pt),we,ct)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Rs.upload(k,Vc(Pt),we,ct),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&de.setValue(k,"center",st.center),de.setValue(k,"modelViewMatrix",st.modelViewMatrix),de.setValue(k,"normalMatrix",st.normalMatrix),de.setValue(k,"modelMatrix",st.matrixWorld),it.uniformsGroups!==void 0){let ge=it.uniformsGroups;for(let si=0,Xi=ge.length;si<Xi;si++){let Wc=ge[si];ht.update(Wc,dn),ht.bind(Wc,dn)}}return dn}function Af(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.sunLights.needsUpdate=X,w.sunLightShadows.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Rf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(w,X,lt){let it=ot.get(w);it.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),ot.get(w.texture).__webglTexture=X,ot.get(w.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){let lt=ot.get(w);lt.__webglFramebuffer=X,lt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,lt=0){at=w,nt=X,Q=lt;let it=null,st=!1,It=!1;if(w){let Rt=ot.get(w);if(Rt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(k.FRAMEBUFFER,Rt.__webglFramebuffer),ut.copy(w.viewport),At.copy(w.scissor),Et=w.scissorTest,v.viewport(ut),v.scissor(At),v.setScissorTest(Et),rt=-1;return}else if(Rt.__webglFramebuffer===void 0)ct.setupRenderTarget(w);else if(Rt.__hasExternalTextures)ct.rebindTextures(w,ot.get(w.texture).__webglTexture,ot.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qt=w.depthTexture;if(Rt.__boundDepthTexture!==Qt){if(Qt!==null&&ot.has(Qt)&&(w.width!==Qt.image.width||w.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(w)}}let Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(It=!0);let Bt=ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[X])?it=Bt[X][lt]:it=Bt[X],st=!0):w.samples>0&&ct.useMultisampledRTT(w)===!1?it=ot.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?it=Bt[lt]:it=Bt,ut.copy(w.viewport),At.copy(w.scissor),Et=w.scissorTest}else ut.copy(Ct).multiplyScalar(gt).floor(),At.copy(Nt).multiplyScalar(gt).floor(),Et=oe;if(lt!==0&&(it=q),v.bindFramebuffer(k.FRAMEBUFFER,it)&&v.drawBuffers(w,it),v.viewport(ut),v.scissor(At),v.setScissorTest(Et),st){let Rt=ot.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Rt.__webglTexture,lt)}else if(It){let Rt=X;for(let Ut=0;Ut<w.textures.length;Ut++){let Bt=ot.get(w.textures[Ut]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ut,Bt.__webglTexture,lt,Rt)}}else if(w!==null&&lt!==0){let Rt=ot.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rt.__webglTexture,lt)}rt=-1};function Hc(w){let X=ot.get(w);return(X.__readFormat!==w.format||X.__readType!==w.type)&&(X.__readFormat=w.format,X.__readType=w.type,X.__formatReadable=N.textureFormatReadable(w.format),X.__typeReadable=N.textureTypeReadable(w.type)),X}this.readRenderTargetPixels=function(w,X,lt,it,st,It,Lt,Rt=0){if(!(w&&w.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){v.bindFramebuffer(k.FRAMEBUFFER,Ut);try{let Bt=w.textures[Rt],Qt=Bt.format,se=Bt.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Rt);let Ft=Hc(Bt);if(Ft.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-it&&lt>=0&&lt<=w.height-st&&k.readPixels(X,lt,it,st,pt.convert(Qt),pt.convert(se),It)}finally{let Bt=at!==null?ot.get(at).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(w,X,lt,it,st,It,Lt,Rt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut)if(X>=0&&X<=w.width-it&&lt>=0&&lt<=w.height-st){v.bindFramebuffer(k.FRAMEBUFFER,Ut);let Bt=w.textures[Rt],Qt=Bt.format,se=Bt.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Rt);let Ft=Hc(Bt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ce),k.bufferData(k.PIXEL_PACK_BUFFER,It.byteLength,k.STREAM_READ),k.readPixels(X,lt,it,st,pt.convert(Qt),pt.convert(se),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Te=at!==null?ot.get(at).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,Te);let _e=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await hu(k,_e,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ce),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,It),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ce),k.deleteSync(_e),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,lt=0){let it=Math.pow(2,-lt),st=Math.floor(w.image.width*it),It=Math.floor(w.image.height*it),Lt=X!==null?X.x:0,Rt=X!==null?X.y:0;ct.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,lt,0,0,Lt,Rt,st,It),v.unbindTexture()},this.copyTextureToTexture=function(w,X,lt=null,it=null,st=0,It=0){let Lt,Rt,Ut,Bt,Qt,se,Ft,ce,Te,_e=w.isCompressedTexture?w.mipmaps[It]:w.image;if(lt!==null)Lt=lt.max.x-lt.min.x,Rt=lt.max.y-lt.min.y,Ut=lt.isBox3?lt.max.z-lt.min.z:1,Bt=lt.min.x,Qt=lt.min.y,se=lt.isBox3?lt.min.z:0;else{let we=Math.pow(2,-st);Lt=Math.floor(_e.width*we),Rt=Math.floor(_e.height*we),w.isDataArrayTexture?Ut=_e.depth:w.isData3DTexture?Ut=Math.floor(_e.depth*we):Ut=1,Bt=0,Qt=0,se=0}it!==null?(Ft=it.x,ce=it.y,Te=it.z):(Ft=0,ce=0,Te=0);let me=pt.convert(X.format),ze=pt.convert(X.type),Pt;X.isData3DTexture?(ct.setTexture3D(X,0),Pt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ct.setTexture2DArray(X,0),Pt=k.TEXTURE_2D_ARRAY):(ct.setTexture2D(X,0),Pt=k.TEXTURE_2D),v.activeTexture(k.TEXTURE0),v.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),v.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),v.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);let qe=v.getParameter(k.UNPACK_ROW_LENGTH),ae=v.getParameter(k.UNPACK_IMAGE_HEIGHT),dn=v.getParameter(k.UNPACK_SKIP_PIXELS),In=v.getParameter(k.UNPACK_SKIP_ROWS),ni=v.getParameter(k.UNPACK_SKIP_IMAGES);v.pixelStorei(k.UNPACK_ROW_LENGTH,_e.width),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_e.height),v.pixelStorei(k.UNPACK_SKIP_PIXELS,Bt),v.pixelStorei(k.UNPACK_SKIP_ROWS,Qt),v.pixelStorei(k.UNPACK_SKIP_IMAGES,se);let Wi=w.isDataArrayTexture||w.isData3DTexture,de=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){let we=ot.get(w),ii=ot.get(X),ge=ot.get(we.__renderTarget),si=ot.get(ii.__renderTarget);v.bindFramebuffer(k.READ_FRAMEBUFFER,ge.__webglFramebuffer),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let Xi=0;Xi<Ut;Xi++)Wi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.get(w).__webglTexture,st,se+Xi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.get(X).__webglTexture,It,Te+Xi)),k.blitFramebuffer(Bt,Qt,Lt,Rt,Ft,ce,Lt,Rt,k.DEPTH_BUFFER_BIT,k.NEAREST);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(st!==0||w.isRenderTargetTexture||ot.has(w)){let we=ot.get(w),ii=ot.get(X);v.bindFramebuffer(k.READ_FRAMEBUFFER,O),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,Z);for(let ge=0;ge<Ut;ge++)Wi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.__webglTexture,st,se+ge):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,st),de?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ii.__webglTexture,It,Te+ge):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ii.__webglTexture,It),st!==0?k.blitFramebuffer(Bt,Qt,Lt,Rt,Ft,ce,Lt,Rt,k.COLOR_BUFFER_BIT,k.NEAREST):de?k.copyTexSubImage3D(Pt,It,Ft,ce,Te+ge,Bt,Qt,Lt,Rt):k.copyTexSubImage2D(Pt,It,Ft,ce,Bt,Qt,Lt,Rt);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else de?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Pt,It,Ft,ce,Te,Lt,Rt,Ut,me,ze,_e.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Pt,It,Ft,ce,Te,Lt,Rt,Ut,me,_e.data):k.texSubImage3D(Pt,It,Ft,ce,Te,Lt,Rt,Ut,me,ze,_e):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,It,Ft,ce,Lt,Rt,me,ze,_e.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,It,Ft,ce,_e.width,_e.height,me,_e.data):k.texSubImage2D(k.TEXTURE_2D,It,Ft,ce,Lt,Rt,me,ze,_e);v.pixelStorei(k.UNPACK_ROW_LENGTH,qe),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ae),v.pixelStorei(k.UNPACK_SKIP_PIXELS,dn),v.pixelStorei(k.UNPACK_SKIP_ROWS,In),v.pixelStorei(k.UNPACK_SKIP_IMAGES,ni),It===0&&X.generateMipmaps&&k.generateMipmap(Pt),v.unbindTexture()},this.initRenderTarget=function(w){ot.get(w).__webglFramebuffer===void 0&&ct.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ct.setTextureCube(w,0):w.isData3DTexture?ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ct.setTexture2DArray(w,0):ct.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){nt=0,Q=0,at=null,v.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};function Is(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new be,c=0;for(let h=0;h<i.length;++h){let d=i[h],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,d=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Zu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let y=0;y<o[h].length;++y)u.push(o[h][y][f]);let g=Zu(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Zu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new De(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);a.setComponent(f+d,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Dr=new G;function xn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Dr.copy(t),Dr[n]=0,Dr.normalize();let c=.5*o/(o+a),h=1-Dr.angleTo(i)/l;return Math.sign(Dr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ja=class i extends Ge{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new G,c=new G,h=new G(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,g=d.length/6,y=new G,m=.5/o;for(let p=0,E=0;p<d.length;p+=3,E+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:y.set(1,0,0),u[E+0]=xn(y,c,"z","y",r,n),u[E+1]=1-xn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),u[E+0]=1-xn(y,c,"z","y",r,n),u[E+1]=1-xn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),u[E+0]=1-xn(y,c,"x","z",r,t),u[E+1]=xn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),u[E+0]=1-xn(y,c,"x","z",r,t),u[E+1]=1-xn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),u[E+0]=1-xn(y,c,"x","y",r,t),u[E+1]=1-xn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),u[E+0]=xn(y,c,"x","y",r,t),u[E+1]=1-xn(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var j=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf"}),n_=Object.freeze({sage:j.sage,mint:j.aqua,sky:j.blue,peach:j.peach,coral:"#cf8979",lavender:j.lilac,butter:j.honey,cream:j.linen,white:j.cream,oak:j.oakLight,walnut:j.walnut,charcoal:"#505b68",brass:j.brass,terracotta:"#b97d63",forest:j.moss,blush:j.blush,teddy:"#aa8063",slate:"#9b9b9d"}),i_=new Set([j.oak,j.oakLight,j.walnut]),s_=new Set([j.sage,j.moss,j.linen,j.lilac,j.lilacLight,j.blush,j.peach]);function r_(i,t){let e=i_.has(i)?1:s_.has(i)?2:0,n=i===j.glass||i===j.darkGlass||i===j.blueWater,s=i===j.brass,r=new Kn({color:i,roughness:s?.37:n?.33:i===j.ceramic?.44:e===1?.64:.89,metalness:s?.42:0});return e&&(r.onBeforeCompile=o=>{o.uniforms.furnitureDetail={value:e},o.uniforms.furnitureGrainDirection={value:t},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 furnitureSurfacePosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
furnitureSurfacePosition = position;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),r}var Rc=class{constructor(t,e){this.root=new ve,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,r_(e,this.grainDirection));let a=new xe(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,l=0,c=0){s=Math.max(.1,s),o=Math.max(.1,o);let h=Math.min(l,s*.42,r*.42,o*.42),d=h>.2?new Ja(s,r,o,2,h):new Ge(s,r,o);return this.part(d,a,t,e+r/2,n,c)}disc(t,e,n,s,r,o,a,l=1){let c=new Ii(1,l,r,20);return c.scale(s,1,o),this.part(c,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let l=new bn(1,12,8);return l.scale(s,r,o),this.part(l,a,t,e,n)}ring(t,e,n,s,r,o,a){let l=new Di(1,o/Math.min(s,r),6,24);return l.rotateX(-Math.PI/2),l.scale(s,1.5,r),this.part(l,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([c,h])=>new Mt(c,h)),l=new fr(a,24);return l.scale(s,r,o),this.part(l,j.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Is(s);s.length>1&&s.forEach(a=>a.dispose());let o=new xe(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Mi(i,t,e,n,s,r,o=j.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let l of[-.36,.36])for(let c of[-.36,.36])i.disc(t+n*l,0,e+s*c,a,r,a,o,.68)}function Ur(i,t,e,n,s,r,o,a){let l=o===j.linen?j.binding:j.blush;i.box(t,e,n,s,8,r,l,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function o_(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=o?t*.5:t,l=r&&!o?e*.57:e,c=o?-t*.25:0,h=r&&!o?-e*.215:0,d=Math.min(t,e)*.1;if(Mi(i,c,h,a,l,5),i.box(c,5,h,a*.97,22,l*.98,j.moss,8),r){let p=o?t*.52:t*.34,E=o?e*.38:e*.46,A=o?t*.22:-t*.32,M=o?-e*.3:e*.25;Mi(i,A,M,p,E,5),i.box(A,5,M,p,22,E,j.moss,8),i.box(A,25,M,p*.96,12,E*.9,n,5),o&&i.box(A,29,-e*.464,p,26,d,j.sage,6)}let f=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let p=e*.88/f;for(let E=0;E<f;E++){let A=-e*.44+p*(E+.5);i.box(c+d*.18,25,A,a*.76,12,p-3,n,5),i.box(c-a*.39,27,A,a*.22,31,p-1,j.sage,8)}i.box(c,29,e*.445,a*.88,20,d,j.sage,6),Ur(i,c+a*.13,35,-e*.31,a*.42,p*.49,j.peach,-.18),Ur(i,c+a*.12,35,e*.28,a*.4,p*.45,j.linen,.2)}else{let p=t*.8/f;for(let E=0;E<f;E++){let A=-t*.4+p*(E+.5);i.box(A,25,h+l*.08,p-3,12,l*.7,n,6),i.box(A,27,h-l*.39,p-1,31,l*.24,j.sage,7)}for(let E of[-t*.442,t*.442])i.box(E,26,h,d,22,l*.89,j.sage,6);Ur(i,-t*.27,35,h-l*.15,t*.18,l*.34,j.peach,-.18),Ur(i,t*.27,35,h-l*.12,t*.17,l*.33,j.linen,.2)}let u=o?a*.67:a*.19,g=o?e*.14:l*.58,y=o?c+a*.06:a*.32,m=o?e*.13:h+l*.1;i.box(y,37.1,m,u,1.7,g,j.lilacLight,.65);for(let p of[-1,1])i.box(y,38.82,m+p*g*.36,u*.9,.25,1.2,j.lilac);return 58}function Gi(i,t,e,n,s,r,o,a=!1){let l=a?19:28;Mi(i,t,e,n,s,l,j.walnut),i.box(t,l,e,n*.9,7,s*.92,j.walnut,2),i.box(t,l+5,e,n*.83,8,s*.83,o,3);let c=Math.abs(r)===Math.PI/2,h=t-Math.sin(r)*(c?n:s)*.39,d=e-Math.cos(r)*s*.39;i.box(h,l+9,d,c?s*.2:n*.84,22,c?s*.82:s*.22,o,4)}function a_(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(r)Gi(i,0,-e*.37,t*.2,e*.2,0,j.sage),Gi(i,0,e*.37,t*.2,e*.2,Math.PI,j.blush),Gi(i,-t*.38,0,t*.2,e*.2,Math.PI/2,j.lilac),Gi(i,t*.38,0,t*.2,e*.2,-Math.PI/2,j.honey),i.disc(0,0,0,t*.13,5,e*.13,j.walnut),i.disc(0,4,0,t*.045,31,e*.045,j.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let l=a?[-.28,.28]:[-.32,0,.32],c=[j.sage,j.blush,j.lilac,j.honey];for(let h=0;h<l.length;h++)for(let d of[-1,1])Gi(i,t*l[h],e*.37*d,t*(a?.19:.15),e*.23,d<0?0:Math.PI,c[(h+(d<0?0:2))%c.length]);Mi(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,j.linen,.5)}return 42}function l_(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,j.ink,.5),i.box(t,e+1,n,s*.1,14,4,j.ink,1),i.box(t,e+12,n,s,25,6,j.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,j.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,j.blue,.2)}function c_(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let l of[-1,1]){let c=l*(t-a)/2,h=s?e-r:e*.58,d=s?r/2:0;s&&i.box(c,37,d+.8,a,7,h-1.6,n,2.4),i.box(c,4,d,a*.81,34,h*.81,j.walnut,2.8);for(let f=0;f<3;f++){let u=6+f*9.7;i.box(c,u,d+h*.41,a*.74,8.4,2,j.oak,.7),i.box(c,u+3,d+h*.43,a*.26,2,2,j.brass,.5)}}return l_(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,j.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,j.peach),81}function Ju(i,t,e,n,s,r){let o=new hn;for(let l=0;l<10;l++){let c=l*Math.PI/5-Math.PI/2,h=l%2?s*.46:s,d=[Math.cos(c)*h,Math.sin(c)*h];l===0?o.moveTo(...d):o.lineTo(...d)}o.closePath();let a=new Ni(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function h_(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Mi(i,0,0,t,e,6,j.walnut);let l=r?[6,55]:[6];for(let h of l){i.box(0,h,0,t*.97,15,e*.98,j.walnut,5),i.box(0,h+12,0,t*.9,11,e*.92,j.linen,4),i.box(0,h+21.6,e*.15,t*.89,5,e*.62,j.lilac,2.5),i.box(0,h+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,h+28,-e*.11,t*.88,3,e*.071,j.lilacLight,1);let d=t>=145?[-t*.2,t*.2]:[0];for(let u of d)Ur(i,u,h+22,-e*.275,t*(d.length===2?.34:.49),e*.2,j.linen,u<0?-.04:.04);let f=Math.min(t,e)*.045;for(let[u,g,y,m]of[[-.24,.12,1,j.cream],[.23,.27,.79,j.honey],[.08,.04,.57,j.cream],[-.1,.34,.62,j.honey]])Ju(i,t*u,h+30.8,e*g,f*y,m);for(let u of[-.32,-.17,0,.17,.32])i.box(t*u,h+30.71,e*.24,.85,.24,e*.33,j.lilacLight,0);for(let u of[.09,.195,.3,.405])i.box(0,h+30.72,e*u,t*.71,.24,.9,j.lilacLight,0)}let c=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,c-4,e*.083,j.walnut,6),i.box(0,18,-e*.417,t*.89,c-23,e*.055,n,4),o||r||a)for(let h of[-1,1]){for(let d of[-1,1])i.box(t*.45*h,4,e*.46*d,5,c,6,j.walnut,2);if(i.box(t*.45*h,c-9,0,5,5,e*.89,n,1.5),o||r)for(let d=-3;d<=3;d++)i.box(t*.45*h,c-29,e*d*.105,3,20,3,n,.8)}return c}function u_(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Mi(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,j.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,j.oak,.6);let l=r?2:3,c=t>=95?2:1;for(let h=0;h<l;h++)for(let d=0;d<c;d++){let f=t*.89/c,u=(a-8)/l,g=f*(d-(c-1)/2),y=5+h*u;i.box(g,y,e*.46,f-2,u-1.5,2.9,n,1),i.oval(g,y+u*.45,e*.51,2.2,1.7,2.2,j.brass)}return a+2}function f_(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,j.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,j.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,j.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?j.lilac:j.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,j.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?j.lilacLight:j.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,j.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,j.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,j.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Ju(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,j.cream);return 5}function d_(i,t,e,n){let s=n==="doubleVanity"?32:35,r=n==="kitchenWorktop",o=n==="doubleVanity";i.box(0,1,0,t*.91,s-4,e*.93,o?j.sage:j.walnut,2.3),i.box(0,s-3,0,t,5,e,j.linen,1.8);let a=e>t;for(let l of[-1,1])for(let c=-1;c<=1;c++){let h=a?2.2:t*.29,d=a?e*.29:2.2,f=a?t*.46*l:t*.3*c,u=a?e*.3*c:e*.47*l;i.box(f,6,u,h,s*.67,d,o?j.moss:j.oak,.8),i.box(f,s*.63,u,a?3.2:t*.08,2.6,a?e*.05:3.2,j.honey,.7)}if(r){i.box(0,s+2,0,t*.84,2.5,e*.72,j.darkGlass,.8);for(let l of[-.2,.2])for(let c of[-.19,.19]){let h=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,s+4.8,e*c,h,h,1,j.glass)}}if(o)for(let l of[-t*.24,t*.24])i.basin(l,s+1.9,0,t*.16,5.5,e*.36),i.oval(l,s+3.48,0,2.1,.52,2.1,j.brass),i.disc(l,s+2,-e*.32,2.6,8,2.6,j.brass),i.box(l,s+8.4,-e*.22,4,3,e*.2,j.brass,1);return s+3}function p_(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,j.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,j.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,j.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,j.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,j.glass),i.disc(0,22,-e*.44,3.5,9,3.5,j.brass),i.box(0,30,-e*.4,5,3.7,e*.1,j.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,j.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,j.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,j.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,j.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,j.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,j.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,j.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,j.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,j.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,j.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,j.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,j.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,j.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,j.blush,1.7),36)}function m_(i,t,e,n,s){let r=n?j.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),l=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,l,-e*.13,t*.3,o*.23,e*.27,r);for(let c of[-1,1])i.oval(t*.27*c,l+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*c,l+o*.04,e*.105,o*.026,o*.034,o*.022,j.ink),i.oval(t*.26*c,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*c,l-o*.06,e*.094,o*.043,o*.023,o*.023,j.blush);return i.oval(0,l-o*.044,e*.12,o*.033,o*.022,o*.023,j.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,j.linen,3.8),l+o*(n?.37:.28)}function g_(i,t,e){let s=[j.sage,j.peach,j.honey,j.lilac,j.blue,j.blush];Mi(i,0,0,t*.96,e*.96,22,j.sage),i.box(0,20,0,t*.94,7,e*.93,j.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function x_(i,t,e,n){let s=[j.linen,n,j.sand,j.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),l=e*((r+.5)/4-.5);i.box(a,1.1,l,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function __(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,j.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,j.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,l=Math.cos(a)*s*.21,c=Math.sin(a)*s*.21,h=s*(n?.55:.44)+o%2*s*.08,d=i.oval(l*.5,h*.69,c*.5,s*.035,h*.32,s*.035,j.moss);d.rotation.z=-l/h,d.rotation.x=c/h;let f=n?j.sage:[j.blush,j.linen,j.honey][o%3];i.oval(l,h,c,s*.13,s*(n?.18:.085),s*.11,f)}return s*(n?.82:.65)}function $u(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;let s=n_[t.split("-").at(-1)],r=new Rc(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=o_(r,e,n,s||j.sage,t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,j.walnut,3.5),r.box(0,24,0,e,4,n,j.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,j.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,j.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,j.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,j.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,j.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=a_(r,e,n,s||j.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=c_(r,e,n,s||j.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))Gi(r,0,0,e,n,0,s||j.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){Gi(r,0,0,e,n,0,s||j.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,j.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=h_(r,e,n,s||j.lilac,t);else if(t==="rug")o=f_(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=d_(r,e,n,t);else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=p_(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=__(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,j.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,j.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,j.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=u_(r,e,n,s||j.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Mi(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||j.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,j.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=m_(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=x_(r,e,n,s||j.sage);else if(t.startsWith("baby-activities-"))o=g_(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||j.peach),r.ring(0,a,0,a*.95,a*.95,1.2,j.linen),o=a*2}else return null;return r.finish(o)}var Dt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Fr=Math.PI,Cc=2*Fr,y_=new Set(["unknown","unavailable"]),Cn=(i,t,e)=>Math.max(t,Math.min(e,i)),Ic=(i,t)=>Number.isFinite(i)?Cn(i,12,480):t,ee=(i,t={})=>new Kn({color:i,roughness:.83,...t}),Pc=i=>String(i?.state??"unknown"),Hi=i=>!y_.has(Pc(i)),Ls=i=>Hi(i)&&(i.active===!0||i.state==="on"),v_=i=>Ls(i)?Number.isFinite(i.attributes?.brightness)?Cn(i.attributes.brightness/255,0,1):1:0;function ti(i,t,e,n=0,s=0,r=0){let o=new xe(t,e);return o.position.set(n,s,r),i.add(o),o}function Be(i,t,e,n,s,r=0,o=0,a=0){return ti(i,new Ge(t,e,n),s,r,o,a)}function We(i,t,e,n,s,r=0,o=0,a=0,l=3){let c=Math.min(l,t/3,e/3,n/3),h=c-t/2,d=c-e/2,f=new hn;f.moveTo(h,d),f.lineTo(-h,d),f.lineTo(-h,-d),f.lineTo(h,-d),f.closePath();let u=new Jn(f,{depth:n-2*c,bevelThickness:c,bevelSize:c,bevelSegments:2});return u.translate(0,0,c-n/2),ti(i,u,s,r,o,a)}function Pe(i,t,e,n,s,r=0,o=0,a=0,l=16){return ti(i,new Ii(t,e,n,l),s,r,o,a)}function Rn(i,t,e,n,s,r){return ti(i,new bn(t,10,7),e,n,s,r)}function Ps(i,t=0,e=0,n=0){let s=new ve;return s.position.set(t,e,n),i.add(s),s}function S_(i,t){let e=new $e({transparent:!0,depthWrite:!1,blending:yr,uniforms:{strength:{value:0},tint:{value:new Jt(Dt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),n=ti(i,new $n(2*t,2*t),e,0,2.8,0);return n.rotation.x=-Fr/2,n.visible=!1,(s,r)=>{n.visible=s>0,e.uniforms.strength.value=s*.29,e.uniforms.tint.value.copy(r)}}function M_(i,t,e){let n=new ve,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",l=s==="floorLamp"||r==="cloud_floor_lamp",c=s==="wallSconce"||r==="acorn_sconce",h=a&&/fan light/i.test(i.name??""),d=Math.min(t,e),f=ee(Dt.honey),u=ee(Dt.ink),g=ee(Dt.brass,{roughness:.36,metalness:.42}),y=ee(Dt.cream,{emissive:Dt.warm,emissiveIntensity:0}),m=new Jt(Dt.warm),p=h?46:o?50:a?56:c?40:l?56:36,E=S_(n,Cn(d*(a?1.72:1.35),38,110));if(a){let A=d*(h?.19:.29);Pe(n,A,A*1.02,3,u,0,p+2),o&&Pe(n,1.7,1.7,13,f,0,p+9),Pe(n,A*.82,A,5,f,0,p-1.5),Pe(n,A*.92,A*.96,1.15,g,0,p+1.1);let M=Rn(n,A*.83,y,0,p,0);M.scale.y=o?.88:.52}else if(c)We(n,d*.34,18,4,u,0,35,-4),Pe(n,d*.12,d*.11,14,f,0,37,3),Rn(n,d*.21,y,0,p+3,3);else{let A=p-7,M=l?3:16,C=d*(l?.25:.3);if(Pe(n,C*.57,C*.67,4,u,0,M),Pe(n,2,2.9,A-M,f,0,(M+A)/2),l)Rn(n,C*.81,y,0,p,0);else{let T=r==="bud_lamp"?12:9;Pe(n,C*.56,C,14,y,0,p,0,T),Pe(n,C,C*.99,1.2,g,0,p-6.7,0,T),Pe(n,C*.55,C*.58,1.1,g,0,p+7.1,0,T)}}return{root:n,anchorY:p+2,animate(A){let M=v_(A),C=A?.attributes?.rgb_color;if(Array.isArray(C)&&C.length===3&&C.every(Number.isFinite)){let[T,U,S]=C.map(L=>Cn(L/255,0,1));m.setRGB(T,U,S,Re)}else m.setHex(Dt.warm);E(M,m),y.emissiveIntensity=M*.88,y.emissive.copy(m),M>0?y.color.copy(m):y.color.setHex(Dt.cream)}}}function b_(i){let t=new hn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Jn(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-Fr/2)}function Ku(i,t,e,n){let s=new ve,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=Ps(s,0,o,0);n&&(a.rotation.x=Fr/2);let l=Ps(a,0,-1,0),c=ee(Dt.cream),h=ee(Dt.ink),d=/(?:white|cream)$/.test(i.type)?Dt.oat:/(?:forest|sage)$/.test(i.type)?Dt.sage:Dt.honey,f=ee(d),u=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;Pe(a,r*.18,r*.2,6,h),Pe(a,r*.174,r*.176,1.4,ee(Dt.brass,{roughness:.36,metalness:.42}),0,3.4),Pe(a,r*.15,r*.17,2.6,c,0,4.9);let g=b_(r);for(let y=0;y<u;y++){let m=Ps(l);m.rotation.y=y/u*Cc,ti(m,g,f)}if(n){We(s,r*1.66,6,r*1.02,h,0,3),Be(s,r*.3,11,6,c,0,10);let y=ti(s,new Di(r,2.6,6,24),c,0,o,3);y.rotation.z=.04;for(let m=-1;m<=1;m++){let p=m*r*.5;Pe(s,.68,.68,2*Math.sqrt(r*r-p*p),h,p,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(y,m=0){let p=Number.isFinite(y?.attributes?.percentage)?Cn(y.attributes.percentage/100,.12,1):.64;l.rotation.y=Ls(y)?m*Cc*p%Cc:0}}}function E_(i,t){let e=new ve,n=t.mountY??39,s=Ps(e,0,n),r=Cn(i*.72,17,27);We(s,r,31,5,ee(Dt.ink),0,0,-.5),We(s,r-1.9,29,4.4,ee(Dt.cream),0,.3,1);let o=ee(Dt.oat,{emissive:Dt.warm,emissiveIntensity:0}),a=We(s,r*.55,17.5,3.2,o,0,3.2,3.5),l=Array.from({length:3},(c,h)=>{let d=ee(Dt.teal,{emissive:Dt.mint,emissiveIntensity:0});return Rn(s,1.85,d,(h-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(c,h=0){a.rotation.x=Hi(c)?Ls(c)?-.16:.16:0,o.emissiveIntensity=Ls(c)?.42:0;let d=c?.presence==="on";for(let f=0;f<l.length;f++){let u=d?.5+.5*Math.cos(h*5-f*1.23):0;l[f].material.color.setHex(d?Dt.mint:Dt.teal),l[f].material.emissiveIntensity=d?.75+u*1.9:0,l[f].scale.setScalar(d?1+u*.18:1)}}}}function ju(i,t,e,n=31){let s=new ve,r=36.5,o=Math.max(12,i-6),a=ee(Dt.oat);if(t){Be(s,o,n,3.2,ee(Dt.glass,{roughness:.32}),0,r,0);for(let f of[-o/2+1.6,0,o/2-1.6])Be(s,3.2,n+2,7.5,a,f,r);Be(s,o+2,3.5,8,a,0,r+n/2),Be(s,o+3,3.8,11,a,0,r-n/2,1.4),Be(s,o,1.35,.5,ee(Dt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let l=ee(Dt.cream),c=r+n/2-1;We(s,o+2,4.6,7,a,0,c+.75,6.7,1.6);let h=Array.from({length:8},(f,u)=>Be(s,o-5,n/8-.45,3,l,0,c-u*(n/8),6.9)),d=0;return{root:s,anchorY:r+1.5,animate(f){let u=Lc(f);u!==null&&(d=1-u);let g=Number.isFinite(f?.attributes?.current_tilt_position)?Cn(f.attributes.current_tilt_position/100,0,1):0;for(let y=0;y<h.length;y++){let m=Cn(d*h.length-y,0,1);h[y].visible=m>.02,h[y].scale.y=m,h[y].rotation.x=g*.9}}}}function Lc(i){return Hi(i)?Number.isFinite(i.attributes?.current_position)?Cn(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function w_(i,t){let e=new ve,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),l=ee(Dt.oat),c=ee(Dt.cream),h=ee(Dt.plum),d=[ee(Dt.tile),ee(Dt.paleTile)],f=ee(Dt.dark);Be(e,i,5,n+t*.24,c,0,2.5,t*.09),Be(e,i*.88,o+4,5,l,0,(o+4)/2,-r+2);for(let z of[-i*.42,i*.42])Be(e,i*.09,o+4,n,l,z,(o+4)/2),We(e,i*.1,o+4,5,c,z,(o+4)/2,r+1,1.5);let u=new hn;u.moveTo(-i*.49,0),u.lineTo(i*.49,0),u.lineTo(0,a),u.closePath();let g=new Jn(u,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),ti(e,g,h,0,o+4);let y=i*.49,m=Math.atan2(a,y),p=Math.hypot(a,y),E=(n+11)/8,A=[[],[]];for(let z of[-1,1])for(let W=0;W<8;W++){let q=-r-5.5+(W+.5)*E,O=new Ge(p*.97,2.2,E-.62);O.rotateZ(-z*m),O.translate(z*y*.5,o+5.65+a*.5,q),A[W%2].push(O)}A.forEach((z,W)=>{ti(e,Is(z),d[W]),z.forEach(q=>q.dispose())}),We(e,4,4.5,n+12,h,0,o+a+5.6,0,1.5),Be(e,i*.95,3.5,3.5,c,0,o+4,r+5.5),Be(e,s,o,1.5,f,0,o/2+4,r-4);let M=ee(Dt.mint),C=ee(Dt.sage),U=(o-3)/6,S=Array.from({length:6},(z,W)=>{let q=Ps(e,0,o-(W+.5)*U+2,r+.5);return We(q,s-2,U-.7,3.4,M,0,0,0,1.2),Be(q,s*.91,.68,.7,C,0,U*.23,1.8),W===5&&We(q,s*.13,2,2.2,c,0,0,2.3,.55),q}),L=ee(Dt.gold,{emissive:Dt.ember,emissiveIntensity:0});Rn(e,3.7,L,i*.422,o*.73,r+4.5);let F=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(z,W=0){let q=Lc(z);q!==null&&(F=q),M.color.setHex(Hi(z)?Dt.mint:Dt.muted),C.color.setHex(Hi(z)?Dt.sage:Dt.muted);let O=(1-F)*S.length;S.forEach((nt,Q)=>{let at=Cn(O-Q,0,1);nt.visible=at>.02,nt.scale.y=at,nt.position.y=o-(Q+at/2)*U+2});let Z=["opening","closing"].includes(Pc(z));L.emissiveIntensity=Z?.55+(.5+.5*Math.cos(W*6)):0}}}function T_(i){let t=new ve,e=46,n=ee(Dt.cream),s=ee(Dt.honey),r=Math.min(i*.86,88),o=Ps(t,-r/2,0,0);for(let a of[-r/2-1,r/2+1])Be(t,3.4,e,5,n,a,e/2);return Be(t,r+4,3,5,n,0,e),We(o,r-2,e-4,4,s,r/2,e/2,0,2),Rn(o,2.2,ee(Dt.gold),r-6,e*.47,2.8),{root:t,anchorY:e/2,animate(a){let l=Lc(a);l!==null&&(o.rotation.y=-1.32*l),s.color.setHex(Hi(a)?Dt.honey:Dt.muted)}}}function A_(i,t,e){let n=new ve,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=Cn(t*.85,23,126),a=ee(Dt.dark,{emissive:Dt.mint,emissiveIntensity:0});if(We(n,o,s?25:18,8,ee(Dt.cream),0,r,0),s){We(n,o*.7,11,1.9,a,0,r+2,4.1);for(let l of[-.22,0,.22])Rn(n,1.35,ee(Dt.oat),o*l,r-7,4.3)}else Be(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(l){let c=l?.attributes?.hvac_action,h=c==="heating",d=Hi(l)&&["cooling","heating","drying","fan"].includes(c);a.emissive.setHex(h?Dt.warm:Dt.glass),a.emissiveIntensity=d?1.15:Ls(l)?.25:0}}}function R_(i,t,e){let n=new ve,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=ee(Dt.cream),l=ee(r?Dt.glass:Dt.sage),c=ee(Dt.teal,{emissive:Dt.mint,emissiveIntensity:0}),h=o-1;if(Pe(n,s*.46,s*.5,4,ee(Dt.ink),0,2),r){let u=Rn(n,s/2,l,0,12,0);u.scale.y=.78,Pe(n,s*.19,s*.22,3.5,a,0,h)}else{We(n,s,24,s*.82,l,0,15,0,5),We(n,s*.91,3.8,s*.71,a,0,h);for(let u=-1;u<=1;u++)Be(n,s*.66,1.2,1.1,c,0,h+2,u*3.5)}Rn(n,1.6,c,s*.18,h-2,s*.31);let d=ee(Dt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),f=Array.from({length:3},(u,g)=>Rn(n,2.1+g*.6,d,0,h+3,0));return{root:n,anchorY:h,animate(u,g=0){let y=Ls(u);c.emissiveIntensity=y?1.6:0;for(let m=0;m<f.length;m++){f[m].visible=y;let p=(g*.68+m/f.length)%1;f[m].position.set(Math.sin(p*Fr)*3.1,h+4+p*14,0),f[m].scale.setScalar(.7+p*.62)}}}}function C_(i,t){let e=new ve,n=Math.min(i,t)*.42,s=ee(Dt.sage,{emissive:Dt.mint,emissiveIntensity:0}),r=ee(Dt.ink);Pe(e,n,n*.95,7,r,0,4.6),Pe(e,n*.96,n,5.5,ee(Dt.cream),0,10.2),Pe(e,n*.28,n*.33,4,ee(Dt.oat),0,14,-n*.23);for(let a of[-.27,.27])Rn(e,n*.105,r,n*a,10,n*.88);let o=We(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,animate(a,l=0){let c=["cleaning","returning"].includes(Pc(a));o.material.emissiveIntensity=c?.6+.5*Math.cos(l*6):0}}}function Qu(i,t={}){let e=Ic(i.w,42),n=Ic(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?E_(e,t):s==="garageDoor"?w_(e,n):s==="door"||r==="door"?T_(e):s==="window"?ju(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?ju(Ic(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?A_(i,e,t):s==="airPurifier"||s==="humidifier"?R_(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?C_(e,n):s==="windowFan"?Ku(i,e,n,!0):r==="fan"||/^fans-/.test(s)?Ku(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?M_(i,e,n):null}var rf=Ff(tf(),1),{difference:I_,union:of}=rf.default,af=18,Ds=.001,Ns=(i,t)=>i[0]*t[0]+i[1]*t[1],ef=(i,t)=>i[0]*t[1]-i[1]*t[0],Us=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ee=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],ja=([i,t])=>[-t,i],P_=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],$a=i=>i.map(({x:t,y:e})=>[t,e]),ei=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],L_=i=>i.length?of(...i):[];function lf(i,t,e,n=0){let s=Us(t,i),r=Math.hypot(...s);if(r<Ds)return null;let o=s.map(h=>h/r),a=ja(o),l=Ee(i,o,-n),c=Ee(t,o,n);return ei([Ee(l,a,e),Ee(c,a,e),Ee(c,a,-e),Ee(l,a,-e)])}function Ka(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,l]=i[r],[c,h]=i[o];l>n!=h>n&&e<(c-a)*(n-l)/(h-l)+a&&(s=!s)}return s}function nf(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=Us(n,t),r=Math.hypot(...s);return r>Ds?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function N_(i,t,e,n){if(Math.abs(Ns(i.tangent,t.tangent))<.9999)return null;let s=ja(i.tangent),[r,o]=[t.start,t.end].map(y=>Us(y,i.start)),a=Ns(r,s);if(Math.abs(a)<.1||Math.abs(a)>af||Math.abs(a-Ns(o,s))>.1)return null;let l=[Ns(r,i.tangent),Ns(o,i.tangent)].sort((y,m)=>y-m),c=Math.max(0,l[0]),h=Math.min(i.length,l[1]);if(h-c<8)return null;let d=Ee(i.start,i.tangent,(c+h)/2),f=Math.sign(a);if(!Ka(e,Ee(d,s,-f))||!Ka(n,Ee(d,s,a+f))||Ka(e,Ee(d,s,a/2))||Ka(n,Ee(d,s,a/2)))return null;let u=Ee(i.start,i.tangent,c),g=Ee(i.start,i.tangent,h);return ei([Ee(u,s,-f*.05),Ee(g,s,-f*.05),Ee(g,s,a+f*.05),Ee(u,s,a+f*.05)])}function cf(i){let t=[],e=[];for(let n of[...i].reverse()){let s=L_(n.polygons);if(!s.length)continue;let r=t.length?I_(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?of(t,s):s}return{footprint:t,regions:e.reverse()}}function hf(i,t){let e=i.map(r=>({surface:r.surface,points:$a(r.points),polygons:[ei($a(r.points))]})),n=[];for(let[r,o]of e.entries())for(let a of e.slice(r+1))for(let l of nf(o.points))for(let c of nf(a.points)){let h=N_(l,c,o.points,a.points);h&&n.push({surface:o.surface,polygons:[h]})}let s=[];if(t){let{left:r,deckEdge:o,stepBottom:a,deckBottom:l,northDeck:c,southDeck:h,recess:d}=t;s.push({surface:"patio",polygons:[ei($a(c)),ei($a(h)),ei(P_(r,a,o+1,l))]}),d.x2>d.x1&&d.z2>d.z1&&s.push({surface:"oak",polygons:[ei([[d.x1,d.northLeft],[d.x2,d.z1],[d.x2,d.z2],[d.x1,d.z2]])]})}return cf([...s,...n,...e])}function D_(i){let t=[],e=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]);for(let[n,s]of e.entries())for(let r of e.slice(n+1)){if(s.wall===r.wall)continue;let o=Math.hypot(...Us(s.point,r.point));o>af||o>Ds&&Ns(s.tangent,r.tangent)>.92||t.push({a:s,b:r,distance:o})}return t}function sf({a:i,b:t,distance:e},n){if(e>Ds)return lf(i.point,t.point,n,.1);let s=ef(i.tangent,t.tangent);if(Math.abs(s)<Ds)return null;let r=Math.sign(s)*-n,o=Ee(i.point,ja(i.tangent),r),a=Ee(t.point,ja(t.tangent),-r),l=ef(Us(a,o),t.tangent)/s,c=Ee(o,i.tangent,l);return Math.hypot(...Us(c,i.point))>n*2.5?ei([i.point,o,a]):ei([i.point,o,c,a])}function uf(i,t,e,n){let s=[],r=(a,l,c,h,d=0)=>{a&&c>l&&s.push({shape:a,from:l,to:c,surface:h,priority:d})};for(let a of i){let{height:l,palette:[c,h,d]}=a,f=[a.x1,a.y1],u=[a.dx,a.dz],g=(y,m,p,E,A,M,C)=>{m-y>Ds&&r(lf(Ee(f,u,y),Ee(f,u,m),A/2),p,E,M,C)};if(a.openings.length){g(0,a.length,0,e,t,c,2),g(0,a.length,n,l,t,c,2);let y=0;for(let m of a.openings)g(y,m.start,e,n,t,c,2),y=Math.max(y,m.end);g(y,a.length,e,n,t,c,2)}else g(0,a.length,0,l,t,c,2);g(0,a.length,l-1,l+2,t+3,h,1),g(0,a.length,0,3,t+3,d,1)}for(let a of D_(i)){let l=a.a.wall,c=a.b.wall,h=l.height<=c.height?l:c,[d,f,u]=h.palette,g=sf(a,t/2),y=sf(a,(t+3)/2);r(g,0,h.height,d,2),r(y,h.height-1,h.height+2,f,1),r(y,0,3,u,1)}let o=[...new Set(s.flatMap(({from:a,to:l})=>[a,l]))].sort((a,l)=>a-l);return o.slice(1).flatMap((a,l)=>{let c=o[l],h=new Map,d=s.filter(f=>f.from<=c&&f.to>=a);for(let{surface:f,shape:u}of d.sort((g,y)=>g.priority-y.priority))h.has(f)||h.set(f,{surface:f,polygons:[]}),h.get(f).polygons.push(u);return cf([...h.values()]).regions.map(f=>({...f,bottom:c,top:a}))})}var U_=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),F_=3;function ff(i,t,e){i.toneMapping=vr,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=Fi,i.shadowMap.autoUpdate=!1;let n=new pr("#fff4e5","#897e91",1.13),s=new Ss("#fff0d4",2.15),r=new Ss("#dbeaff",.24),{minX:o,maxX:a,minZ:l,maxZ:c}=e,h=(o+a)/2,d=(l+c)/2;s.position.set(h-610,1150,d-490),s.target.position.set(h,0,d),r.position.set(h+290,410,d+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let f=Math.hypot(a-o,c-l)/2+175;Object.assign(s.shadow.camera,{left:-f,right:f,top:f,bottom:-f,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let u=Array.from({length:F_},()=>new xr("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...u);let g=[],y,m,p=!0,E=new Jt;function A(){for(let T of t.children)T.isMesh&&(T.receiveShadow=!0,T.geometry.computeBoundingBox(),T.castShadow=T.geometry.boundingBox.max.y+T.position.y>-99)}function M(T,U){let S=/(light|lamp|sconce)/i.test(T.type),L=!U.animate||S;U.root.traverse(F=>{!F.isMesh||F.material.transparent||F.material.isShaderMaterial||(F.receiveShadow=!0,F.castShadow=L)}),S&&T.entityId&&g.push({item:T,object:U})}function C(T,U,S){let L=T.night===!0,F=U_.has(T.condition),z=L?"night":F?"cloud":"day";if(z!==y&&(n.color.set(L?"#a8b8f5":F?"#dce6f1":"#fff4e5"),n.groundColor.set(L?"#5b536e":"#998291"),n.intensity=L?.75:F?1.33:1.12,s.color.set(L?"#a7b8ed":F?"#e9eff9":"#fff0d4"),s.intensity=L?.28:F?.86:2.14,r.intensity=L?.12:.23,s.shadow.intensity=L?.65:F?.39:.84,S.color.set(L?"#97a5c5":F?"#ccd6c6":"#f4f1d8"),t.background.set(L?"#343951":"#c0cbb4"),y=z,m=void 0),m!==U){let W=g.flatMap(({item:q,object:O})=>{let Z=U[q.id];if(Z?.state!=="on")return[];let nt=Number.isFinite(Z.attributes?.brightness)?Qn.clamp(Z.attributes.brightness/255,0,1):1;return nt>0?[{object:O,power:nt,color:Z.attributes?.rgb_color}]:[]}).sort((q,O)=>O.power-q.power);for(let[q,O]of u.entries()){let Z=W[q];if(!Z){O.intensity=0;continue}let{object:nt,power:Q,color:at}=Z;Array.isArray(at)&&at.length===3&&at.every(Number.isFinite)?(E.setRGB(...at.map(et=>Qn.clamp(et/255,0,1)),Re),O.color.copy(E)):O.color.set("#ffd5a2"),O.position.copy(nt.root.position),O.position.y+=Math.max(18,nt.anchorY-9),O.intensity=Q*(L?2350:1250)}m=U}p&&(i.shadowMap.needsUpdate=!0,p=!1)}return{markStructure:A,register:M,update:C,dispose:()=>s.shadow.dispose()}}var df=Object.freeze({top:Object.freeze({preset:"top",azimuth:0,tilt:0,zoom:1}),dollhouse:Object.freeze({preset:"dollhouse",azimuth:2,tilt:30,zoom:1}),corner:Object.freeze({preset:"corner",azimuth:45,tilt:40,zoom:1})});function Qa(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(df,t.preset)?t.preset:"top",n=df[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?Qn.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?Qn.clamp(t.zoom,.6,2.5):n.zoom}}function Uc(i,t,e,n,s="top"){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let r=Qa(s),o=Qn.degToRad(r.azimuth),a=Qn.degToRad(r.tilt),l=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),c=new G(Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a));i.up.set(-Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)),i.position.copy(l).addScaledVector(c,1900),i.lookAt(l),i.updateMatrixWorld(!0);let h=new On,d=new G;for(let p of[t.minX-37,t.maxX+37])for(let E of[t.minZ-53,t.maxZ+36])for(let A of[-111,92])h.expandByPoint(d.set(p,A,E).applyMatrix4(i.matrixWorldInverse));let f=e/n,u=Math.max((h.max.x-h.min.x)/2,(h.max.y-h.min.y)/2*f),g=u/f,y=(h.min.x+h.max.x)/2,m=(h.min.y+h.max.y)/2;return i.left=y-u,i.right=y+u,i.bottom=m-g,i.top=m+g,i.zoom=r.zoom,i.updateProjectionMatrix(),r}var Fc=Math.PI/180,gf=14,O_=21,B_=52,Oc={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},Bc={graphite:["#eee0c9","#937984","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},z_=new Set(["cloudy","partlycloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),k_=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),V_=new Set(["snowy","snowy-rainy","hail"]),pf={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42},G_=new Set(["waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]);function tl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function zc(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function xf(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,l=r.y1+o*r.dz,c=Math.hypot(a-t,l-e);c<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:l,distance:c})}return s}function _f(i,t,e,n){let s=i.some(o=>zc(o,e-t.dz*23,n+t.dx*23));return i.some(o=>zc(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function yf(i,t){let e=Math.min(i.y1,i.y2)>t.maxZ-96&&Math.abs(i.dx)>.4,n=Math.max(i.y1,i.y2)<t.minZ+50;return i.openings.length||n?64:e?13:Math.abs(i.dz)>.7?50:31}function H_(i,t,e,n){if(!Object.hasOwn(pf,n.type))return null;let s=xf(t,n.x,n.y);if(!s||s.distance>38)return null;let{wall:r,centerX:o,centerZ:a}=s,l=(n.x-o)*-r.dz+(n.y-a)*r.dx,c=Math.abs(l)>4?Math.sign(l):_f(i,r,o,a),h=(gf/2+4)*c;return{x:o-r.dz*h,z:a+r.dx*h,angle:r.angle+(c<0?Math.PI:0),mountY:Math.min(pf[n.type],Math.max(20,yf(r,e)-15))}}function W_(i){if(i?.version!==2||!Array.isArray(i.rooms)||!i.rooms.length||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let t=i.rooms.filter(u=>u?.points?.length>=3&&u.points.every(g=>Number.isFinite(g?.x)&&Number.isFinite(g?.y)));if(!t.length)throw new Error("Storybook could not find a valid room polygon.");let e=i.walls.flatMap(u=>{if(![u?.x1,u?.y1,u?.x2,u?.y2].every(Number.isFinite))return[];let g=u.x2-u.x1,y=u.y2-u.y1,m=Math.hypot(g,y);return m<1?[]:[{...u,dx:g/m,dz:y/m,length:m,angle:Math.atan2(y,g),openings:[]}]}),n=i.items.filter(u=>typeof u?.id=="string"&&typeof u.type=="string"&&[u.x,u.y,u.w,u.h].every(Number.isFinite)&&u.w>0&&u.h>0),s={minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0},r=(u,g)=>{s.minX=Math.min(s.minX,u),s.maxX=Math.max(s.maxX,u),s.minZ=Math.min(s.minZ,g),s.maxZ=Math.max(s.maxZ,g)};for(let u of t)for(let g of u.points)r(g.x,g.y);for(let u of e)r(u.x1,u.y1),r(u.x2,u.y2);let o={...s},a=new Map(e.map(u=>[u.id,u])),l=["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(u=>a.has(u))?{left:o.minX-108,deckEdge:o.minX-10,stepTop:o.minZ+14,stepBottom:o.maxZ+25,deckBottom:o.maxZ+82,northDeck:[[o.minX-10,a.get("w1").y1+57],[a.get("w2").x1,a.get("w1").y1+57],[a.get("w3").x1,a.get("w3").y1],[a.get("w3").x2,a.get("w3").y2],[o.minX-10,a.get("w4").y2]].map(([u,g])=>({x:u,y:g})),southDeck:[[o.minX-10,a.get("w6").y1],[a.get("w7").x1,a.get("w7").y1],[a.get("w7").x2,a.get("w7").y2],[a.get("w8").x1,o.maxZ+82],[o.minX-10,o.maxZ+82]].map(([u,g])=>({x:u,y:g})),recess:{x1:a.get("w12").x2,x2:a.get("w18").x1,northLeft:a.get("w12").y2,z1:Math.min(a.get("w11").y2,a.get("w12").y2),z2:a.get("w13").y2}}:null;if(l){r(l.left,l.stepTop),r(l.deckEdge,l.deckBottom);let{x1:u,x2:g,northLeft:y,z1:m}=l.recess,p=Math.hypot(g-u,m-y);g>u&&p>0&&e.push({id:"reference-recess",x1:u,y1:y,x2:g,y2:m,length:p,dx:(g-u)/p,dz:(m-y)/p,angle:Math.atan2(m-y,g-u),openings:[]})}let c=new Map;for(let u of n.filter(g=>g.type==="window")){let g=xf(e,u.x,u.y,(u.rotation||0)*Fc);if(!g||g.distance>27)continue;let{wall:y,t:m,centerX:p,centerZ:E}=g,A=Math.max(1,m-u.w/2+1),M=Math.min(y.length-1,m+u.w/2-1);if(M-A<14)continue;y.openings.push({start:A,end:M});let C=_f(t,y,p,E),T=y.angle+(C<0?Math.PI:0),U=(A+M)/2;c.set(u.id,{x:y.x1+U*y.dx,z:y.y1+U*y.dz,angle:T,window:{...u,w:M-A+2,rotation:T/Fc}})}let h=n.map(u=>{let g=u.type==="controlZone"&&(u.visualKind==="window"||u.entityId?.startsWith("cover.")),y=c.get(u.id)??H_(t,e,o,u);if(g){let C=52;for(let T of c.values()){let U=Math.hypot(T.x-u.x,T.z-u.y);U<C&&(y=T,C=U)}}let m=y?.x??u.x,p=y?.z??u.y,E=y?.angle??(Number.isFinite(u.rotation)?u.rotation*Fc:0),A=Math.min(300,(Math.abs(Math.cos(E))*u.w+Math.abs(Math.sin(E))*u.h)/2),M=Math.min(300,(Math.abs(Math.sin(E))*u.w+Math.abs(Math.cos(E))*u.h)/2);return r(m-A,p-M),r(m+A,p+M),{item:u,x:m,z:p,angle:E,window:y?.window,mountY:y?.mountY,isBlind:g}});for(let u of e)u.openings.sort((g,y)=>g.start-y.start||g.end-y.end);let d=hf(t,l),f=uf(e.map(u=>({...u,height:yf(u,o),palette:Object.hasOwn(Bc,u.finish)?Bc[u.finish]:Bc.graphite})),gf,O_,B_);return{rooms:t,walls:e,placements:h,bounds:s,houseBounds:o,reference:l,floorStructure:d,wallStructure:f}}function mf(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function vf([i,...t]){let e=mf(new hn,i);return e.holes=t.map(n=>mf(new Pi,n)),e}function X_(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,l=tl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let h=0;h<8;h++){let d=h*32;s.globalAlpha=.04+l()*.14,s.fillRect(0,d,256,32),s.globalAlpha=.48,s.fillRect(0,d,256,1.2);let f=30+h*47%181;s.fillRect(f,d,1,32),s.globalAlpha=.15;for(let u=0;u<15;u++){let g=l()*256,y=d+3+l()*27,m=12+l()*46;s.beginPath(),s.moveTo(g,y),s.quadraticCurveTo(g+m/2,y+l()*2-1,g+m,y),s.stroke()}}else if(a==="tile")for(let h=0;h<8;h++)for(let d=0;d<8;d++)s.globalAlpha=l()*.14,s.fillRect(d*32,h*32,32,32),s.globalAlpha=.35,s.strokeRect(d*32+.5,h*32+.5,31,31);else for(let h=0;h<160;h++)s.globalAlpha=.12+l()*.24,s.fillRect(l()*256,l()*256,1+l()*4,1+l()*3);let c=new xs(n);return c.colorSpace=Re,c.wrapS=c.wrapT=Ri,c}function q_(i){let t=new Map,e=new ue,n=new mn,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,l=u=>(a.has(u)||a.set(u,new Ui({color:u})),a.get(u));function c(u,g,y,m,p,E=0){n.setFromAxisAngle(r,E),e.compose(s.set(y,m,p),n,o),u.applyMatrix4(e);let A=l(g);t.has(A)||t.set(A,[]),t.get(A).push(u)}function h(u,g,y,m,p,E,A,M=0){u>0&&g>0&&y>0&&c(new Ge(u,g,y),m,p,E,A,M)}function d(u,g,y,m,p,E,A){let M=new bn(1,9,6);M.scale(u,g,y),c(M,m,p,E,A)}function f(){for(let[u,g]of t){let y=Is(g);if(!y){for(let m of g)i.add(new xe(m,u));continue}i.add(new xe(y,u));for(let m of g)m.dispose()}t.clear()}return{add:c,ball:d,box:h,material:l,finish:f}}function Y_(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(Oc,r)?r:"oak";if(!s.has(a)){let l=Oc[a],c=X_(n,l,141+Object.keys(Oc).indexOf(a)*977);s.set(a,new Ui({color:c?"#fffdf8":l[0],map:c}))}for(let l of o){let c=new Ni(vf(l));c.rotateX(-Math.PI/2);let h=c.getAttribute("position"),d=c.getAttribute("uv");for(let u=0;u<d.count;u++)d.setXY(u,h.getX(u)/248,h.getZ(u)/248);let f=new xe(c,s.get(a));f.receiveShadow=!0,i.add(f)}}for(let r of e.floorStructure.footprint)Sf(t,r,-22,0,"#a67e76",!0)}function Z_(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new De(e,1))}return i}function Sf(i,t,e,n,s,r=!1){let o=new Jn(vf(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),l=[];for(let c=0;c<a.count;c+=3)[c,c+1,c+2].some(h=>a.getZ(h)<n-e-.001)&&l.push(c,c+1,c+2);o.setIndex(l)}o.rotateX(-Math.PI/2),i.add(Z_(o),s,0,e,0)}function J_(i,t){for(let{polygons:e,bottom:n,top:s,surface:r}of t.wallStructure)for(let o of e)Sf(i,o,n,s,r)}function $_(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,l=(n+e)/2,c=14,h=(r-s)/c,d=-108,f=-d/c;for(let A=0;A<c;A++){let M=s+h*(A+.5),C=d+(A+1)*f,T=C-3;i.box(a,T-d,h,"#a98075",l,(d+T)/2,M),i.box(a,3,h,A%2?"#e2c2a6":"#d5b198",l,C-1.5,M),i.box(a+1,2.4,3,"#b68e82",l,C-1.8,M-h/2+.4),i.box(5,24,5,"#9f8183",e+4,C+12,M)}let u=h*(c-1),g=f*(c-1),y=new Ge(7,5,Math.hypot(u,g)+5);y.rotateX(-Math.atan2(g,u)),i.add(y,"#896e79",e+4,24-g/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",l,d-1.5,s-40);let[m,p]=o,E=Math.max(2,Math.ceil((p.x-m.x)/28));i.box(p.x-m.x,5,7,"#896e79",(p.x+m.x)/2,28,m.y);for(let A=0;A<=E;A++)i.box(5,28,5,"#9f8183",m.x+(p.x-m.x)*A/E,14,m.y)}function K_(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=tl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,l=20+n()*56;for(let c of[-512,0,512])for(let h of[-512,0,512]){let d=e.createRadialGradient(o+c,a+h,0,o+c,a+h,l);d.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),d.addColorStop(1,"#b1c3a000"),e.fillStyle=d,e.fillRect(o+c-l,a+h-l,l*2,l*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new xs(t);return s.wrapS=s.wrapT=Ri,s.repeat.set(15,10),s.colorSpace=Re,s.anisotropy=4,s}function j_(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,l=tl(150741),c=Math.min(90,o*.18),h=t.reference?t.reference.left+c/2:e+c/2;i.box(c,4,115,"#c7baa4",h,-109,s-88);for(let f=0;f<5;f++)i.box(c*.85,1.8,13,"#dbceba",h,-106,s-137+f*20);let d=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[f,u]of d){let g=e+f*o,y=s+u*a,m=21+l()*24;i.ball(m*.94,9,m*.67,"#6d886a",g,-104,y),i.ball(m*.82,m*.57,m*.69,"#819b76",g+3,-98,y);for(let p=0;p<8;p++){let E=p*2.39996,A=(.2+l()*.5)*m,M=m*(.28+l()*.2),C=["#94ad7f","#a6ba88","#8da878","#bad09c"][p%4];i.ball(M*1.15,M*.8,M,C,g+Math.cos(E)*A,-93+12*l(),y+Math.sin(E)*A*.75)}for(let p=0;p<5;p++){let E=p%2?"#e6c4b1":"#fae6a4",A=g+(l()-.5)*m*1.14,M=y+m*(.62+l()*.43);i.ball(2.3,4.6,2.3,"#819765",A,-106,M),i.ball(3.9,1.8,3.3,E,A,-101.5,M),i.ball(1.2,.9,1.2,"#cb9c57",A,-100.3,M)}}}function Q_(i,t){let{minX:e,maxX:n,minZ:s}=t.houseBounds,r=tl(2912),o=t.bounds,a=new ve,l=new Ui({color:"#f8ebdf",transparent:!0,opacity:.9}),c=new bn(1,12,8),h=n-e;for(let[L,F]of[.19,.53,.82].entries()){let z=e+h*F,W=s-55-L%2*34;for(let q=0;q<3;q++){let O=new xe(c,l);O.scale.set(32+r()*21,15+r()*10,25+r()*10),O.position.set(z+q*31,27+5*(q===1),W),a.add(O)}}i.add(a);let d=new ve;d.position.set(e+h*.77,21,s-70);let f=new xe(new bn(17,16,10),new Zn({color:"#ffe2a1"}));d.add(f);let u=new ve,g=new xe(f.geometry,new Zn({color:"#f9e5c6"}));u.add(g);let y=new xe(f.geometry,new Zn({color:"#7d7c97"}));y.position.set(4,4,1),y.scale.setScalar(.96),u.add(y),d.add(u),i.add(d);let m=[],p=t.reference?.recess,E=(L,F)=>!(p&&L>=p.x1&&L<=p.x2&&F>=p.z1&&F<=p.z2)&&!t.rooms.some(z=>zc(z,L,F));for(let L=0;L<190;L++){let F=o.minX-70+(o.maxX-o.minX+140)*r(),z=o.minZ-70+(o.maxZ-o.minZ+140)*r();E(F,z)&&m.push({x:F,z,phase:r()*180})}let A=new Float32Array(m.length*6),M=new Float32Array(m.length*3),C=new be,T=new be;C.setAttribute("position",new De(A,3).setUsage(Va)),T.setAttribute("position",new De(M,3).setUsage(Va));let U=new er(C,new ms({color:"#cce5ef",transparent:!0,opacity:.66})),S=new nr(T,new gs({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return U.frustumCulled=S.frustumCulled=!1,i.add(U,S),(L,F,z)=>{let{night:W=!1,condition:q="",moonPhase:O="",daylightKnown:Z=!0}=F,nt=z?0:L;a.visible=z_.has(q),a.position.x=Math.sin(nt*.16)*(q.includes("windy")?48:23),f.visible=Z&&!W,u.visible=Z&&W&&G_.has(O),y.visible=O!=="full_moon";let Q=O.startsWith("waxing")||O==="first_quarter",at=O.endsWith("quarter");if(y.position.x=(Q?-1:1)*(at?8:O.endsWith("gibbous")?14:5),U.visible=k_.has(q),S.visible=V_.has(q),U.visible||S.visible){for(let[rt,et]of m.entries()){let ut=65-(et.phase+nt*150)%170,At=65-(et.phase+nt*20)%170,Et=rt*6;A.set([et.x,ut,et.z,et.x-4,ut+22,et.z+3],Et),M.set([et.x+Math.sin(nt+rt)*6,At,et.z],rt*3)}C.attributes.position.needsUpdate=U.visible,T.attributes.position.needsUpdate=S.visible}}}function ty(i,t,e){if(t.item.type!=="plant")return 0;for(let n of i.placements){if(!["table","coffeeTable","sideTable"].includes(n.item.type))continue;let s=t.x-n.x,r=t.z-n.z,o=s*Math.cos(n.angle)+r*Math.sin(n.angle),a=-s*Math.sin(n.angle)+r*Math.cos(n.angle);if(Math.abs(o)<n.item.w*.35&&Math.abs(a)<n.item.h*.35)return e.get(n.item.id)?.anchorY??0}return 0}function Mf(i,t){let e=W_(t),n=new qa({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"}),s=new js;s.background=new Jt("#d7dfcd");let r=new gi(-800,800,450,-450,1,4400),{minX:o,maxX:a,minZ:l,maxZ:c}=e.bounds,h=new Kn({color:"#e8e8d2",map:K_(i.ownerDocument),roughness:.95}),d=new xe(new $n(6200,4200),h);d.rotation.x=-Math.PI/2,d.position.set((o+a)/2,-111,(l+c)/2),s.add(d);let f=q_(s);j_(f,e),$_(f,e),Y_(s,f,e,i.ownerDocument),J_(f,e),f.finish();let u=ff(n,s,e.bounds);u.markStructure();let g=Q_(s,e),y=new Map,m=new Map;for(let Q of e.placements){let{item:at,x:rt,z:et,angle:ut,window:At,mountY:Et,isBlind:Kt}=Q,Xt=at.type==="window"&&At?At:at,Zt=Qu(Xt,{window:Kt?At:void 0,mountY:Et})??$u(Xt);Zt&&(Zt.root.position.set(rt,0,et),Zt.root.rotation.y=-ut,s.add(Zt.root),m.set(at.id,Zt),u.register(at,Zt)),y.set(at.id,{x:rt,z:et,object:Zt})}for(let Q of e.placements){let at=m.get(Q.item.id);at&&(at.root.position.y=ty(e,Q,m))}let p=new G,E=!1,A=0,M=0,C=Qa(),T=new _r,U=new ln(new G(0,1,0),0),S=new G,L=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function F(Q,at){if(E||Q<1||at<1||Q===A&&at===M)return;A=Q,M=at;let rt=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(rt,1.5,Math.sqrt(27e5/(Q*at)))),n.setSize(Q,at,!1),C=Uc(r,e.bounds,Q,at,C)}function z(Q){return C=Qa(Q),!E&&A>0&&M>0&&(C=Uc(r,e.bounds,A,M,C)),W()}function W(){return{...C}}function q(Q,at){return E||!Number.isFinite(Q)||!Number.isFinite(at)||A<=0||M<=0?null:(T.setFromCamera(new Mt(Q/A*2-1,1-at/M*2),r),T.ray.intersectPlane(U,S)?{x:S.x,y:S.z}:null)}function O(Q=0,at={},rt={}){if(E||A<1||M<1)return;u.update(rt,at,h);let et=rt.reduceMotion===!0,ut=Number.isFinite(Q)?Q:0;g(ut,rt,et);for(let[At,Et]of m){let Kt=at[At]??L,Xt=Kt.position;Xt&&Number.isFinite(Xt.x)&&Number.isFinite(Xt.y)&&(Et.root.position.x=Xt.x,Et.root.position.z=Xt.y),Et.animate?.(Kt,et?0:ut)}n.render(s,r)}function Z(Q){let at=y.get(Q);if(!at||A<1||M<1)return null;let{x:rt,z:et,object:ut}=at;return ut?(p.set(ut.anchorOffset?.x||0,ut.anchorY||0,ut.anchorOffset?.z||0),ut.root.localToWorld(p)):p.set(rt,6,et),p.project(r),{x:(p.x+1)/2,y:(1-p.y)/2}}function nt(){if(E)return;E=!0;let Q=new Set,at=new Set,rt=new Set;s.traverse(et=>{et.geometry&&Q.add(et.geometry);for(let ut of Array.isArray(et.material)?et.material:[et.material])if(ut){at.add(ut);for(let At of Object.values(ut))At?.isTexture&&rt.add(At)}});for(let et of rt)et.dispose();for(let et of Q)et.dispose();for(let et of at)et.dispose();u.dispose(),n.dispose()}return{resize:F,render:O,anchor:Z,setView:z,getView:W,projectToPlan:q,dispose:nt}}function bf(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,l)=>(a.priority??0)-(l.priority??0)),o=(a,l,c)=>Math.min(Math.max(a,l),c);for(let a of r){let l=Math.min(a.w,t),c=Math.min(a.h,e),h;for(let d=0;d<=3&&!h;d++)for(let[f,u]of d===0?s.slice(0,1):s.slice(1)){let g=o(a.x+f*d*34,l/2,t-l/2),y=o(a.y+u*d*34,c/2,e-c/2);if(n.every(m=>Math.abs(g-m.x)>=(l+m.w)/2+2||Math.abs(y-m.y)>=(c+m.h)/2+2)){h={...a,x:g,y,w:l,h:c};break}}h&&n.push(h)}return n}var Ef=new Set(["top","dollhouse","corner"]),ey=22,ny=5;function iy(i,t,e){let n=bf(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),l=[];for(let h=o/2;h<=t-o/2;h+=o+4)for(let d=a/2;d<=e-a/2;d+=a+4)l.push({...r,x:h,y:d,w:o,h:a});l.sort((h,d)=>Math.hypot(h.x-r.x,h.y-r.y)-Math.hypot(d.x-r.x,d.y-r.y));let c=l.find(h=>n.every(d=>Math.abs(h.x-d.x)>=(h.w+d.w)/2+2||Math.abs(h.y-d.y)>=(h.h+d.h)/2+2));c&&n.push(c)}return n}function sy(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function ry(i,t,e,n,s,r){let o=i.flatMap((a,l)=>{let c=n.get(a.id);if(!c)return[];let h=Math.hypot(c.x*s-t.x,c.y*r-t.y),d=h<=ey;return!d&&!sy(a,e)?[]:[{item:a,index:l,distance:h,near:d,area:a.w*a.h}]});return o.sort((a,l)=>Number(l.near)-Number(a.near)||(a.near?a.distance-l.distance:a.area-l.area)||l.index-a.index),o[0]?.item??null}function oy(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneReset"),l=i.createElement("div");l.className="scene-selection",l.setAttribute("aria-hidden","true"),Object.assign(l.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(l);let c=i.createElement("div");c.className="scene-placeholders",Object.assign(c.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(c);let h=i.createElementNS("http://www.w3.org/2000/svg","svg");h.classList.add("scene-placeholder-leaders"),h.setAttribute("aria-hidden","true"),Object.assign(h.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(h,c);let d=new Map,f=i.getElementById("miniHelp"),u=f?.textContent,g,y,m,p={preset:"top"},E=Ef.has(r.value)?r.value:"top",A,M,C=!1,T=()=>E!=="plan",U=()=>n.getBoundingClientRect(),S=Y=>{let dt=U();return{x:Y.clientX-dt.left,y:Y.clientY-dt.top}};function L(Y){e.showStatus?.(Y)}function F(Y){if(!g||!T())return;let{width:dt,height:_t}=U();if(!dt||!_t)return;g.resize(dt,_t),g.render(0,Y??{},{night:!1,condition:"sunny",daylightKnown:!0,reduceMotion:!0});let xt=[];for(let[k,ne]of d){let kt=g.anchor(k);ne.hidden=!kt,kt&&xt.push({id:k,marker:ne,x:kt.x*dt,y:kt.y*_t,w:96,h:44})}let St=iy(xt,dt,_t),zt=new Set(St.map(k=>k.id)),Ot=[];for(let k of St){let{marker:ne,x:kt,y:N,w:v,h:$,id:ot}=k;Object.assign(ne.style,{left:`${kt}px`,top:`${N}px`,width:`${v}px`,height:`${$}px`});let ct=xt.find(D=>D.id===ot);if(Math.hypot(ct.x-kt,ct.y-N)>8){let D=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[x,_]of Object.entries({x1:ct.x,y1:ct.y,x2:kt,y2:N}))D.setAttribute(x,_);D.setAttribute("stroke","#6f816b"),D.setAttribute("stroke-width","1"),D.setAttribute("stroke-dasharray","3 3"),Ot.push(D)}}for(let[k,ne]of d)ne.hidden=!zt.has(k);h.replaceChildren(...Ot);let Vt=e.getSelection(),Gt=Vt?.kind==="item"?g.anchor(Vt.id):null;l.style.display=Gt?"block":"none",Gt&&(l.style.left=`${Gt.x*dt}px`,l.style.top=`${Gt.y*_t}px`)}function z(){if(!A)return;let Y=A;A=void 0;try{n.releasePointerCapture(Y.pointerId)}catch{}Y.item&&F({[Y.item.id]:{position:{x:Y.item.x,y:Y.item.y}}})}function W(){for(let Y of Object.values(o))Y&&(Y.disabled=!T())}function q(Y){if(z(),E=Ef.has(Y)?Y:"plan",r.value=E,n.hidden=!T(),c.style.display=T()?"block":"none",h.style.display=T()?"block":"none",f&&(f.textContent=T()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":u),s.classList.toggle("scene-3d",T()),W(),!T()){l.style.display="none",L("Plan view \xB7 edit rooms, walls, floors and objects");return}e.useSelectTool?.();let dt={preset:E};Z(),g?.setView(dt),p=g?.getView()??dt,F(),L("3D view \xB7 select and drag objects, or place an object from the catalog")}function O(){g?.dispose(),g=void 0,m=void 0,E="plan",r.value=E,n.hidden=!0,c.style.display="none",h.style.display="none",f&&(f.textContent=u),s.classList.remove("scene-3d"),l.style.display="none",W(),L("3D view is unavailable on this screen. Plan view is ready.")}function Z(){if(C||!T())return;let Y=e.getProject(),dt=JSON.stringify(Y);try{if(!g||dt!==m){z(),g&&(p=g.getView()),g?.dispose(),g=void 0,y=Y,g=Mf(n,y),g.setView(p),m=dt,d.clear(),c.replaceChildren();for(let _t of y.items.filter(xt=>xt.type==="cameraThumbnail"||xt.type.startsWith("ui"))){let xt=i.createElement("button");xt.type="button",xt.className="scene-placeholder",xt.textContent=_t.name||(_t.type==="cameraThumbnail"?"Camera":"Interface"),xt.setAttribute("aria-label",`Select ${xt.textContent}`),Object.assign(xt.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),xt.addEventListener("pointerdown",St=>ut(St,_t.id)),xt.addEventListener("click",St=>{St.detail===0&&(e.selectItem(_t.id),F())}),d.set(_t.id,xt),c.append(xt)}}F()}catch{O()}}function nt(Y){!g||!T()||(z(),g.setView(Y(g.getView())),p=g.getView(),F())}let Q=()=>Z(),at=()=>{let Y=e.getTool();T()&&Y!=="select"?q("plan"):T()&&F()},rt=()=>q(r.value),et=()=>{t.cancelAnimationFrame(M),M=t.requestAnimationFrame(()=>F())},ut=(Y,dt=null)=>{if(!T()||!g||Y.button!==0||A)return;Y.preventDefault(),Y.stopPropagation();let _t=S(Y),xt=g.projectToPlan(_t.x,_t.y);if(!xt)return;if(e.hasPlacement()){e.placeAt(xt.x,xt.y),Z();return}let{width:St,height:zt}=U(),Ot=new Map(y.items.map(Gt=>[Gt.id,g.anchor(Gt.id)])),Vt=dt?y.items.find(Gt=>Gt.id===dt):ry(y.items,_t,xt,Ot,St,zt);if(e.selectItem(Vt?.id??null),!Vt){F();return}A={item:{...Vt},startScreen:_t,startPlan:xt,pointerId:Y.pointerId},n.setPointerCapture(Y.pointerId),F()},At=Y=>{if(!T()||(Y.stopPropagation(),!A||A.pointerId!==Y.pointerId||!g))return;let dt=S(Y);if(!A.moved&&Math.hypot(dt.x-A.startScreen.x,dt.y-A.startScreen.y)<ny)return;let _t=g.projectToPlan(dt.x,dt.y);_t&&(A.moved=!0,A.position={x:A.item.x+_t.x-A.startPlan.x,y:A.item.y+_t.y-A.startPlan.y},F({[A.item.id]:{position:A.position}}))},Et=Y=>{if(!T()||(Y.stopPropagation(),!A||A.pointerId!==Y.pointerId))return;let dt=A;A=void 0;try{n.releasePointerCapture(Y.pointerId)}catch{}dt.moved&&dt.position?(e.moveItem(dt.item.id,dt.position.x,dt.position.y),Z()):F()},Kt=Y=>{A?.pointerId===Y.pointerId&&z(),Y.stopPropagation()},Xt=Y=>{T()&&(Y.preventDefault(),Y.stopPropagation(),nt(dt=>({...dt,zoom:dt.zoom*(Y.deltaY<0?1.1:1/1.1)})))},Zt=Y=>{Y.key==="Escape"&&A&&(Y.preventDefault(),Y.stopImmediatePropagation(),z())},ft=Y=>{Y.preventDefault(),O()},gt=()=>nt(Y=>({...Y,azimuth:Y.azimuth-15})),wt=()=>nt(Y=>({...Y,azimuth:Y.azimuth+15})),Ht=()=>nt(Y=>({...Y,zoom:Y.zoom/1.2})),Ct=()=>nt(Y=>({...Y,zoom:Y.zoom*1.2})),Nt=()=>q("top");o.left?.addEventListener("click",gt),o.right?.addEventListener("click",wt),o.out?.addEventListener("click",Ht),o.in?.addEventListener("click",Ct),a?.addEventListener("click",Nt),r.addEventListener("change",rt),n.addEventListener("pointerdown",ut),n.addEventListener("pointermove",At),n.addEventListener("pointerup",Et),n.addEventListener("pointercancel",Kt),n.addEventListener("lostpointercapture",Kt),n.addEventListener("wheel",Xt,{passive:!1}),n.addEventListener("webglcontextlost",ft),t.addEventListener("keydown",Zt,!0),t.addEventListener("roomcraft-editor-change",Q),t.addEventListener("roomcraft-editor-tool",at);let oe=new t.ResizeObserver(et);return oe.observe(s),q(E),{getView:()=>g?.getView()??{...p},setView:q,dispose(){C=!0,z(),oe.disconnect(),t.cancelAnimationFrame(M),g?.dispose(),g=void 0,l.remove(),c.remove(),h.remove(),f&&(f.textContent=u),o.left?.removeEventListener("click",gt),o.right?.removeEventListener("click",wt),o.out?.removeEventListener("click",Ht),o.in?.removeEventListener("click",Ct),a?.removeEventListener("click",Nt),r.removeEventListener("change",rt),n.removeEventListener("pointerdown",ut),n.removeEventListener("pointermove",At),n.removeEventListener("pointerup",Et),n.removeEventListener("pointercancel",Kt),n.removeEventListener("lostpointercapture",Kt),n.removeEventListener("wheel",Xt),n.removeEventListener("webglcontextlost",ft),t.removeEventListener("keydown",Zt,!0),t.removeEventListener("roomcraft-editor-change",Q),t.removeEventListener("roomcraft-editor-tool",at)}}}typeof window<"u"&&typeof document<"u"&&oy(document,window);})();
