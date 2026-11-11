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
"use strict";(()=>{var od=Object.create;var rh=Object.defineProperty;var ad=Object.getOwnPropertyDescriptor;var cd=Object.getOwnPropertyNames;var ld=Object.getPrototypeOf,hd=Object.prototype.hasOwnProperty;var ud=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var fd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of cd(t))!hd.call(i,s)&&s!==e&&rh(i,s,{get:()=>t[s],enumerable:!(n=ad(t,s))||n.enumerable});return i};var dd=(i,t,e)=>(e=i!=null?od(ld(i)):{},fd(t||!i||!i.__esModule?rh(e,"default",{value:i,enumerable:!0}):e,i));var _f=ud((Xl,ql)=>{(function(i,t){typeof Xl=="object"&&typeof ql<"u"?ql.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(Xl,(function(){"use strict";/**
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
    ***************************************************************************** */function i(U,x){var _={label:0,sent:function(){if(I[0]&1)throw I[1];return I[1]},trys:[],ops:[]},S,C,I,V;return V={next:k(0),throw:k(1),return:k(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function k(K){return function(xt){return j([K,xt])}}function j(K){if(S)throw new TypeError("Generator is already executing.");for(;_;)try{if(S=1,C&&(I=K[0]&2?C.return:K[0]?C.throw||((I=C.return)&&I.call(C),0):C.next)&&!(I=I.call(C,K[1])).done)return I;switch(C=0,I&&(K=[K[0]&2,I.value]),K[0]){case 0:case 1:I=K;break;case 4:return _.label++,{value:K[1],done:!1};case 5:_.label++,C=K[1],K=[0];continue;case 7:K=_.ops.pop(),_.trys.pop();continue;default:if(I=_.trys,!(I=I.length>0&&I[I.length-1])&&(K[0]===6||K[0]===2)){_=0;continue}if(K[0]===3&&(!I||K[1]>I[0]&&K[1]<I[3])){_.label=K[1];break}if(K[0]===6&&_.label<I[1]){_.label=I[1],I=K;break}if(I&&_.label<I[2]){_.label=I[2],_.ops.push(K);break}I[2]&&_.ops.pop(),_.trys.pop();continue}K=x.call(U,_)}catch(xt){K=[6,xt],C=0}finally{S=I=0}if(K[0]&5)throw K[1];return{value:K[0]?K[1]:void 0,done:!0}}}var t=(function(){function U(x,_){this.next=null,this.key=x,this.data=_,this.left=null,this.right=null}return U})();function e(U,x){return U>x?1:U<x?-1:0}function n(U,x,_){for(var S=new t(null,null),C=S,I=S;;){var V=_(U,x.key);if(V<0){if(x.left===null)break;if(_(U,x.left.key)<0){var k=x.left;if(x.left=k.right,k.right=x,x=k,x.left===null)break}I.left=x,I=x,x=x.left}else if(V>0){if(x.right===null)break;if(_(U,x.right.key)>0){var k=x.right;if(x.right=k.left,k.left=x,x=k,x.right===null)break}C.right=x,C=x,x=x.right}else break}return C.right=x.left,I.left=x.right,x.left=S.right,x.right=S.left,x}function s(U,x,_,S){var C=new t(U,x);if(_===null)return C.left=C.right=null,C;_=n(U,_,S);var I=S(U,_.key);return I<0?(C.left=_.left,C.right=_,_.left=null):I>=0&&(C.right=_.right,C.left=_,_.right=null),C}function r(U,x,_){var S=null,C=null;if(x){x=n(U,x,_);var I=_(x.key,U);I===0?(S=x.left,C=x.right):I<0?(C=x.right,x.right=null,S=x):(S=x.left,x.left=null,C=x)}return{left:S,right:C}}function o(U,x,_){return x===null?U:(U===null||(x=n(U.key,x,_),x.left=U),x)}function a(U,x,_,S,C){if(U){S(""+x+(_?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+C(U)+`
`);var I=x+(_?"    ":"\u2502   ");U.left&&a(U.left,I,!1,S,C),U.right&&a(U.right,I,!0,S,C)}}var c=(function(){function U(x){x===void 0&&(x=e),this._root=null,this._size=0,this._comparator=x}return U.prototype.insert=function(x,_){return this._size++,this._root=s(x,_,this._root,this._comparator)},U.prototype.add=function(x,_){var S=new t(x,_);this._root===null&&(S.left=S.right=null,this._size++,this._root=S);var C=this._comparator,I=n(x,this._root,C),V=C(x,I.key);return V===0?this._root=I:(V<0?(S.left=I.left,S.right=I,I.left=null):V>0&&(S.right=I.right,S.left=I,I.right=null),this._size++,this._root=S),this._root},U.prototype.remove=function(x){this._root=this._remove(x,this._root,this._comparator)},U.prototype._remove=function(x,_,S){var C;if(_===null)return null;_=n(x,_,S);var I=S(x,_.key);return I===0?(_.left===null?C=_.right:(C=n(x,_.left,S),C.right=_.right),this._size--,C):_},U.prototype.pop=function(){var x=this._root;if(x){for(;x.left;)x=x.left;return this._root=n(x.key,this._root,this._comparator),this._root=this._remove(x.key,this._root,this._comparator),{key:x.key,data:x.data}}return null},U.prototype.findStatic=function(x){for(var _=this._root,S=this._comparator;_;){var C=S(x,_.key);if(C===0)return _;C<0?_=_.left:_=_.right}return null},U.prototype.find=function(x){return this._root&&(this._root=n(x,this._root,this._comparator),this._comparator(x,this._root.key)!==0)?null:this._root},U.prototype.contains=function(x){for(var _=this._root,S=this._comparator;_;){var C=S(x,_.key);if(C===0)return!0;C<0?_=_.left:_=_.right}return!1},U.prototype.forEach=function(x,_){for(var S=this._root,C=[],I=!1;!I;)S!==null?(C.push(S),S=S.left):C.length!==0?(S=C.pop(),x.call(_,S),S=S.right):I=!0;return this},U.prototype.range=function(x,_,S,C){for(var I=[],V=this._comparator,k=this._root,j;I.length!==0||k;)if(k)I.push(k),k=k.left;else{if(k=I.pop(),j=V(k.key,_),j>0)break;if(V(k.key,x)>=0&&S.call(C,k))return this;k=k.right}return this},U.prototype.keys=function(){var x=[];return this.forEach(function(_){var S=_.key;return x.push(S)}),x},U.prototype.values=function(){var x=[];return this.forEach(function(_){var S=_.data;return x.push(S)}),x},U.prototype.min=function(){return this._root?this.minNode(this._root).key:null},U.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},U.prototype.minNode=function(x){if(x===void 0&&(x=this._root),x)for(;x.left;)x=x.left;return x},U.prototype.maxNode=function(x){if(x===void 0&&(x=this._root),x)for(;x.right;)x=x.right;return x},U.prototype.at=function(x){for(var _=this._root,S=!1,C=0,I=[];!S;)if(_)I.push(_),_=_.left;else if(I.length>0){if(_=I.pop(),C===x)return _;C++,_=_.right}else S=!0;return null},U.prototype.next=function(x){var _=this._root,S=null;if(x.right){for(S=x.right;S.left;)S=S.left;return S}for(var C=this._comparator;_;){var I=C(x.key,_.key);if(I===0)break;I<0?(S=_,_=_.left):_=_.right}return S},U.prototype.prev=function(x){var _=this._root,S=null;if(x.left!==null){for(S=x.left;S.right;)S=S.right;return S}for(var C=this._comparator;_;){var I=C(x.key,_.key);if(I===0)break;I<0?_=_.left:(S=_,_=_.right)}return S},U.prototype.clear=function(){return this._root=null,this._size=0,this},U.prototype.toList=function(){return f(this._root)},U.prototype.load=function(x,_,S){_===void 0&&(_=[]),S===void 0&&(S=!1);var C=x.length,I=this._comparator;if(S&&g(x,_,0,C-1,I),this._root===null)this._root=l(x,_,0,C),this._size=C;else{var V=d(this.toList(),h(x,_),I);C=this._size+C,this._root=u({head:V},0,C)}return this},U.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(U.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(U.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),U.prototype.toString=function(x){x===void 0&&(x=function(S){return String(S.key)});var _=[];return a(this._root,"",!0,function(S){return _.push(S)},x),_.join("")},U.prototype.update=function(x,_,S){var C=this._comparator,I=r(x,this._root,C),V=I.left,k=I.right;C(x,_)<0?k=s(_,S,k,C):V=s(_,S,V,C),this._root=o(V,k,C)},U.prototype.split=function(x){return r(x,this._root,this._comparator)},U.prototype[Symbol.iterator]=function(){var x,_,S;return i(this,function(C){switch(C.label){case 0:x=this._root,_=[],S=!1,C.label=1;case 1:return S?[3,6]:x===null?[3,2]:(_.push(x),x=x.left,[3,5]);case 2:return _.length===0?[3,4]:(x=_.pop(),[4,x]);case 3:return C.sent(),x=x.right,[3,5];case 4:S=!0,C.label=5;case 5:return[3,1];case 6:return[2]}})},U})();function l(U,x,_,S){var C=S-_;if(C>0){var I=_+Math.floor(C/2),V=U[I],k=x[I],j=new t(V,k);return j.left=l(U,x,_,I),j.right=l(U,x,I+1,S),j}return null}function h(U,x){for(var _=new t(null,null),S=_,C=0;C<U.length;C++)S=S.next=new t(U[C],x[C]);return S.next=null,_.next}function f(U){for(var x=U,_=[],S=!1,C=new t(null,null),I=C;!S;)x?(_.push(x),x=x.left):_.length>0?(x=I=I.next=_.pop(),x=x.right):S=!0;return I.next=null,C.next}function u(U,x,_){var S=_-x;if(S>0){var C=x+Math.floor(S/2),I=u(U,x,C),V=U.head;return V.left=I,U.head=U.head.next,V.right=u(U,C+1,_),V}return null}function d(U,x,_){for(var S=new t(null,null),C=S,I=U,V=x;I!==null&&V!==null;)_(I.key,V.key)<0?(C.next=I,I=I.next):(C.next=V,V=V.next),C=C.next;return I!==null?C.next=I:V!==null&&(C.next=V),S.next}function g(U,x,_,S,C){if(!(_>=S)){for(var I=U[_+S>>1],V=_-1,k=S+1;;){do V++;while(C(U[V],I)<0);do k--;while(C(U[k],I)>0);if(V>=k)break;var j=U[V];U[V]=U[k],U[k]=j,j=x[V],x[V]=x[k],x[k]=j}g(U,x,_,k,C),g(U,x,k+1,S,C)}}let y=(U,x)=>U.ll.x<=x.x&&x.x<=U.ur.x&&U.ll.y<=x.y&&x.y<=U.ur.y,m=(U,x)=>{if(x.ur.x<U.ll.x||U.ur.x<x.ll.x||x.ur.y<U.ll.y||U.ur.y<x.ll.y)return null;let _=U.ll.x<x.ll.x?x.ll.x:U.ll.x,S=U.ur.x<x.ur.x?U.ur.x:x.ur.x,C=U.ll.y<x.ll.y?x.ll.y:U.ll.y,I=U.ur.y<x.ur.y?U.ur.y:x.ur.y;return{ll:{x:_,y:C},ur:{x:S,y:I}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let w=p*p,N=(U,x)=>{if(-p<U&&U<p&&-p<x&&x<p)return 0;let _=U-x;return _*_<w*U*x?0:U<x?-1:1};class E{constructor(){this.reset()}reset(){this.xRounder=new v,this.yRounder=new v}round(x,_){return{x:this.xRounder.round(x),y:this.yRounder.round(_)}}}class v{constructor(){this.tree=new c,this.round(0)}round(x){let _=this.tree.add(x),S=this.tree.prev(_);if(S!==null&&N(_.key,S.key)===0)return this.tree.remove(x),S.key;let C=this.tree.next(_);return C!==null&&N(_.key,C.key)===0?(this.tree.remove(x),C.key):x}}let T=new E,P=11102230246251565e-32,b=134217729,L=(3+8*P)*P;function F(U,x,_,S,C){let I,V,k,j,K=x[0],xt=S[0],R=0,J=0;xt>K==xt>-K?(I=K,K=x[++R]):(I=xt,xt=S[++J]);let W=0;if(R<U&&J<_)for(xt>K==xt>-K?(V=K+I,k=I-(V-K),K=x[++R]):(V=xt+I,k=I-(V-xt),xt=S[++J]),I=V,k!==0&&(C[W++]=k);R<U&&J<_;)xt>K==xt>-K?(V=I+K,j=V-I,k=I-(V-j)+(K-j),K=x[++R]):(V=I+xt,j=V-I,k=I-(V-j)+(xt-j),xt=S[++J]),I=V,k!==0&&(C[W++]=k);for(;R<U;)V=I+K,j=V-I,k=I-(V-j)+(K-j),K=x[++R],I=V,k!==0&&(C[W++]=k);for(;J<_;)V=I+xt,j=V-I,k=I-(V-j)+(xt-j),xt=S[++J],I=V,k!==0&&(C[W++]=k);return(I!==0||W===0)&&(C[W++]=I),W}function O(U,x){let _=x[0];for(let S=1;S<U;S++)_+=x[S];return _}function H(U){return new Float64Array(U)}let q=(3+16*P)*P,z=(2+12*P)*P,X=(9+64*P)*P*P,Q=H(4),it=H(8),pt=H(12),rt=H(16),ot=H(4);function ft(U,x,_,S,C,I,V){let k,j,K,xt,R,J,W,dt,mt,lt,bt,At,te,Jt,fe,pe,Qe,Le,tn=U-C,Xe=_-C,rn=x-I,en=S-I;Jt=tn*en,J=b*tn,W=J-(J-tn),dt=tn-W,J=b*en,mt=J-(J-en),lt=en-mt,fe=dt*lt-(Jt-W*mt-dt*mt-W*lt),pe=rn*Xe,J=b*rn,W=J-(J-rn),dt=rn-W,J=b*Xe,mt=J-(J-Xe),lt=Xe-mt,Qe=dt*lt-(pe-W*mt-dt*mt-W*lt),bt=fe-Qe,R=fe-bt,Q[0]=fe-(bt+R)+(R-Qe),At=Jt+bt,R=At-Jt,te=Jt-(At-R)+(bt-R),bt=te-pe,R=te-bt,Q[1]=te-(bt+R)+(R-pe),Le=At+bt,R=Le-At,Q[2]=At-(Le-R)+(bt-R),Q[3]=Le;let pn=O(4,Q),on=z*V;if(pn>=on||-pn>=on||(R=U-tn,k=U-(tn+R)+(R-C),R=_-Xe,K=_-(Xe+R)+(R-C),R=x-rn,j=x-(rn+R)+(R-I),R=S-en,xt=S-(en+R)+(R-I),k===0&&j===0&&K===0&&xt===0)||(on=X*V+L*Math.abs(pn),pn+=tn*xt+en*k-(rn*K+Xe*j),pn>=on||-pn>=on))return pn;Jt=k*en,J=b*k,W=J-(J-k),dt=k-W,J=b*en,mt=J-(J-en),lt=en-mt,fe=dt*lt-(Jt-W*mt-dt*mt-W*lt),pe=j*Xe,J=b*j,W=J-(J-j),dt=j-W,J=b*Xe,mt=J-(J-Xe),lt=Xe-mt,Qe=dt*lt-(pe-W*mt-dt*mt-W*lt),bt=fe-Qe,R=fe-bt,ot[0]=fe-(bt+R)+(R-Qe),At=Jt+bt,R=At-Jt,te=Jt-(At-R)+(bt-R),bt=te-pe,R=te-bt,ot[1]=te-(bt+R)+(R-pe),Le=At+bt,R=Le-At,ot[2]=At-(Le-R)+(bt-R),ot[3]=Le;let Gs=F(4,Q,4,ot,it);Jt=tn*xt,J=b*tn,W=J-(J-tn),dt=tn-W,J=b*xt,mt=J-(J-xt),lt=xt-mt,fe=dt*lt-(Jt-W*mt-dt*mt-W*lt),pe=rn*K,J=b*rn,W=J-(J-rn),dt=rn-W,J=b*K,mt=J-(J-K),lt=K-mt,Qe=dt*lt-(pe-W*mt-dt*mt-W*lt),bt=fe-Qe,R=fe-bt,ot[0]=fe-(bt+R)+(R-Qe),At=Jt+bt,R=At-Jt,te=Jt-(At-R)+(bt-R),bt=te-pe,R=te-bt,ot[1]=te-(bt+R)+(R-pe),Le=At+bt,R=Le-At,ot[2]=At-(Le-R)+(bt-R),ot[3]=Le;let Wr=F(Gs,it,4,ot,pt);Jt=k*xt,J=b*k,W=J-(J-k),dt=k-W,J=b*xt,mt=J-(J-xt),lt=xt-mt,fe=dt*lt-(Jt-W*mt-dt*mt-W*lt),pe=j*K,J=b*j,W=J-(J-j),dt=j-W,J=b*K,mt=J-(J-K),lt=K-mt,Qe=dt*lt-(pe-W*mt-dt*mt-W*lt),bt=fe-Qe,R=fe-bt,ot[0]=fe-(bt+R)+(R-Qe),At=Jt+bt,R=At-Jt,te=Jt-(At-R)+(bt-R),bt=te-pe,R=te-bt,ot[1]=te-(bt+R)+(R-pe),Le=At+bt,R=Le-At,ot[2]=At-(Le-R)+(bt-R),ot[3]=Le;let Xr=F(Wr,pt,4,ot,rt);return rt[Xr-1]}function vt(U,x,_,S,C,I){let V=(x-I)*(_-C),k=(U-C)*(S-I),j=V-k,K=Math.abs(V+k);return Math.abs(j)>=q*K?j:-ft(U,x,_,S,C,I,K)}let _t=(U,x)=>U.x*x.y-U.y*x.x,qt=(U,x)=>U.x*x.x+U.y*x.y,Nt=(U,x,_)=>{let S=vt(U.x,U.y,x.x,x.y,_.x,_.y);return S>0?-1:S<0?1:0},Bt=U=>Math.sqrt(qt(U,U)),st=(U,x,_)=>{let S={x:x.x-U.x,y:x.y-U.y},C={x:_.x-U.x,y:_.y-U.y};return _t(C,S)/Bt(C)/Bt(S)},ht=(U,x,_)=>{let S={x:x.x-U.x,y:x.y-U.y},C={x:_.x-U.x,y:_.y-U.y};return qt(C,S)/Bt(C)/Bt(S)},Tt=(U,x,_)=>x.y===0?null:{x:U.x+x.x/x.y*(_-U.y),y:_},zt=(U,x,_)=>x.x===0?null:{x:_,y:U.y+x.y/x.x*(_-U.x)},Rt=(U,x,_,S)=>{if(x.x===0)return zt(_,S,U.x);if(S.x===0)return zt(U,x,_.x);if(x.y===0)return Tt(_,S,U.y);if(S.y===0)return Tt(U,x,_.y);let C=_t(x,S);if(C==0)return null;let I={x:_.x-U.x,y:_.y-U.y},V=_t(I,x)/C,k=_t(I,S)/C,j=U.x+k*x.x,K=_.x+V*S.x,xt=U.y+k*x.y,R=_.y+V*S.y,J=(j+K)/2,W=(xt+R)/2;return{x:J,y:W}};class Dt{static compare(x,_){let S=Dt.comparePoints(x.point,_.point);return S!==0?S:(x.point!==_.point&&x.link(_),x.isLeft!==_.isLeft?x.isLeft?1:-1:ut.compare(x.segment,_.segment))}static comparePoints(x,_){return x.x<_.x?-1:x.x>_.x?1:x.y<_.y?-1:x.y>_.y?1:0}constructor(x,_){x.events===void 0?x.events=[this]:x.events.push(this),this.point=x,this.isLeft=_}link(x){if(x.point===this.point)throw new Error("Tried to link already linked events");let _=x.point.events;for(let S=0,C=_.length;S<C;S++){let I=_[S];this.point.events.push(I),I.point=this.point}this.checkForConsuming()}checkForConsuming(){let x=this.point.events.length;for(let _=0;_<x;_++){let S=this.point.events[_];if(S.segment.consumedBy===void 0)for(let C=_+1;C<x;C++){let I=this.point.events[C];I.consumedBy===void 0&&S.otherSE.point.events===I.otherSE.point.events&&S.segment.consume(I.segment)}}}getAvailableLinkedEvents(){let x=[];for(let _=0,S=this.point.events.length;_<S;_++){let C=this.point.events[_];C!==this&&!C.segment.ringOut&&C.segment.isInResult()&&x.push(C)}return x}getLeftmostComparator(x){let _=new Map,S=C=>{let I=C.otherSE;_.set(C,{sine:st(this.point,x.point,I.point),cosine:ht(this.point,x.point,I.point)})};return(C,I)=>{_.has(C)||S(C),_.has(I)||S(I);let{sine:V,cosine:k}=_.get(C),{sine:j,cosine:K}=_.get(I);return V>=0&&j>=0?k<K?1:k>K?-1:0:V<0&&j<0?k<K?-1:k>K?1:0:j<V?-1:j>V?1:0}}}let Qt=0;class ut{static compare(x,_){let S=x.leftSE.point.x,C=_.leftSE.point.x,I=x.rightSE.point.x,V=_.rightSE.point.x;if(V<S)return 1;if(I<C)return-1;let k=x.leftSE.point.y,j=_.leftSE.point.y,K=x.rightSE.point.y,xt=_.rightSE.point.y;if(S<C){if(j<k&&j<K)return 1;if(j>k&&j>K)return-1;let R=x.comparePoint(_.leftSE.point);if(R<0)return 1;if(R>0)return-1;let J=_.comparePoint(x.rightSE.point);return J!==0?J:-1}if(S>C){if(k<j&&k<xt)return-1;if(k>j&&k>xt)return 1;let R=_.comparePoint(x.leftSE.point);if(R!==0)return R;let J=x.comparePoint(_.rightSE.point);return J<0?1:J>0?-1:1}if(k<j)return-1;if(k>j)return 1;if(I<V){let R=_.comparePoint(x.rightSE.point);if(R!==0)return R}if(I>V){let R=x.comparePoint(_.rightSE.point);if(R<0)return 1;if(R>0)return-1}if(I!==V){let R=K-k,J=I-S,W=xt-j,dt=V-C;if(R>J&&W<dt)return 1;if(R<J&&W>dt)return-1}return I>V?1:I<V||K<xt?-1:K>xt?1:x.id<_.id?-1:x.id>_.id?1:0}constructor(x,_,S,C){this.id=++Qt,this.leftSE=x,x.segment=this,x.otherSE=_,this.rightSE=_,_.segment=this,_.otherSE=x,this.rings=S,this.windings=C}static fromRing(x,_,S){let C,I,V,k=Dt.comparePoints(x,_);if(k<0)C=x,I=_,V=1;else if(k>0)C=_,I=x,V=-1;else throw new Error(`Tried to create degenerate segment at [${x.x}, ${x.y}]`);let j=new Dt(C,!0),K=new Dt(I,!1);return new ut(j,K,[S],[V])}replaceRightSE(x){this.rightSE=x,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let x=this.leftSE.point.y,_=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:x<_?x:_},ur:{x:this.rightSE.point.x,y:x>_?x:_}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(x){return x.x===this.leftSE.point.x&&x.y===this.leftSE.point.y||x.x===this.rightSE.point.x&&x.y===this.rightSE.point.y}comparePoint(x){if(this.isAnEndpoint(x))return 0;let _=this.leftSE.point,S=this.rightSE.point,C=this.vector();if(_.x===S.x)return x.x===_.x?0:x.x<_.x?1:-1;let I=(x.y-_.y)/C.y,V=_.x+I*C.x;if(x.x===V)return 0;let k=(x.x-_.x)/C.x,j=_.y+k*C.y;return x.y===j?0:x.y<j?-1:1}getIntersection(x){let _=this.bbox(),S=x.bbox(),C=m(_,S);if(C===null)return null;let I=this.leftSE.point,V=this.rightSE.point,k=x.leftSE.point,j=x.rightSE.point,K=y(_,k)&&this.comparePoint(k)===0,xt=y(S,I)&&x.comparePoint(I)===0,R=y(_,j)&&this.comparePoint(j)===0,J=y(S,V)&&x.comparePoint(V)===0;if(xt&&K)return J&&!R?V:!J&&R?j:null;if(xt)return R&&I.x===j.x&&I.y===j.y?null:I;if(K)return J&&V.x===k.x&&V.y===k.y?null:k;if(J&&R)return null;if(J)return V;if(R)return j;let W=Rt(I,this.vector(),k,x.vector());return W===null||!y(C,W)?null:T.round(W.x,W.y)}split(x){let _=[],S=x.events!==void 0,C=new Dt(x,!0),I=new Dt(x,!1),V=this.rightSE;this.replaceRightSE(I),_.push(I),_.push(C);let k=new ut(C,V,this.rings.slice(),this.windings.slice());return Dt.comparePoints(k.leftSE.point,k.rightSE.point)>0&&k.swapEvents(),Dt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),S&&(C.checkForConsuming(),I.checkForConsuming()),_}swapEvents(){let x=this.rightSE;this.rightSE=this.leftSE,this.leftSE=x,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let _=0,S=this.windings.length;_<S;_++)this.windings[_]*=-1}consume(x){let _=this,S=x;for(;_.consumedBy;)_=_.consumedBy;for(;S.consumedBy;)S=S.consumedBy;let C=ut.compare(_,S);if(C!==0){if(C>0){let I=_;_=S,S=I}if(_.prev===S){let I=_;_=S,S=I}for(let I=0,V=S.rings.length;I<V;I++){let k=S.rings[I],j=S.windings[I],K=_.rings.indexOf(k);K===-1?(_.rings.push(k),_.windings.push(j)):_.windings[K]+=j}S.rings=null,S.windings=null,S.consumedBy=_,S.leftSE.consumedBy=_.leftSE,S.rightSE.consumedBy=_.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let x=this.prev.consumedBy||this.prev;this._beforeState=x.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let x=this.beforeState();this._afterState={rings:x.rings.slice(0),windings:x.windings.slice(0),multiPolys:[]};let _=this._afterState.rings,S=this._afterState.windings,C=this._afterState.multiPolys;for(let k=0,j=this.rings.length;k<j;k++){let K=this.rings[k],xt=this.windings[k],R=_.indexOf(K);R===-1?(_.push(K),S.push(xt)):S[R]+=xt}let I=[],V=[];for(let k=0,j=_.length;k<j;k++){if(S[k]===0)continue;let K=_[k],xt=K.poly;if(V.indexOf(xt)===-1)if(K.isExterior)I.push(xt);else{V.indexOf(xt)===-1&&V.push(xt);let R=I.indexOf(K.poly);R!==-1&&I.splice(R,1)}}for(let k=0,j=I.length;k<j;k++){let K=I[k].multiPoly;C.indexOf(K)===-1&&C.push(K)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let x=this.beforeState().multiPolys,_=this.afterState().multiPolys;switch(Pt.type){case"union":{let S=x.length===0,C=_.length===0;this._isInResult=S!==C;break}case"intersection":{let S,C;x.length<_.length?(S=x.length,C=_.length):(S=_.length,C=x.length),this._isInResult=C===Pt.numMultiPolys&&S<C;break}case"xor":{let S=Math.abs(x.length-_.length);this._isInResult=S%2===1;break}case"difference":{let S=C=>C.length===1&&C[0].isSubject;this._isInResult=S(x)!==S(_);break}default:throw new Error(`Unrecognized operation type found ${Pt.type}`)}return this._isInResult}}class yt{constructor(x,_,S){if(!Array.isArray(x)||x.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=_,this.isExterior=S,this.segments=[],typeof x[0][0]!="number"||typeof x[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let C=T.round(x[0][0],x[0][1]);this.bbox={ll:{x:C.x,y:C.y},ur:{x:C.x,y:C.y}};let I=C;for(let V=1,k=x.length;V<k;V++){if(typeof x[V][0]!="number"||typeof x[V][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let j=T.round(x[V][0],x[V][1]);j.x===I.x&&j.y===I.y||(this.segments.push(ut.fromRing(I,j,this)),j.x<this.bbox.ll.x&&(this.bbox.ll.x=j.x),j.y<this.bbox.ll.y&&(this.bbox.ll.y=j.y),j.x>this.bbox.ur.x&&(this.bbox.ur.x=j.x),j.y>this.bbox.ur.y&&(this.bbox.ur.y=j.y),I=j)}(C.x!==I.x||C.y!==I.y)&&this.segments.push(ut.fromRing(I,C,this))}getSweepEvents(){let x=[];for(let _=0,S=this.segments.length;_<S;_++){let C=this.segments[_];x.push(C.leftSE),x.push(C.rightSE)}return x}}class Mt{constructor(x,_){if(!Array.isArray(x))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new yt(x[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let S=1,C=x.length;S<C;S++){let I=new yt(x[S],this,!1);I.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=I.bbox.ll.x),I.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=I.bbox.ll.y),I.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=I.bbox.ur.x),I.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=I.bbox.ur.y),this.interiorRings.push(I)}this.multiPoly=_}getSweepEvents(){let x=this.exteriorRing.getSweepEvents();for(let _=0,S=this.interiorRings.length;_<S;_++){let C=this.interiorRings[_].getSweepEvents();for(let I=0,V=C.length;I<V;I++)x.push(C[I])}return x}}class St{constructor(x,_){if(!Array.isArray(x))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof x[0][0][0]=="number"&&(x=[x])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let S=0,C=x.length;S<C;S++){let I=new Mt(x[S],this);I.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=I.bbox.ll.x),I.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=I.bbox.ll.y),I.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=I.bbox.ur.x),I.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=I.bbox.ur.y),this.polys.push(I)}this.isSubject=_}getSweepEvents(){let x=[];for(let _=0,S=this.polys.length;_<S;_++){let C=this.polys[_].getSweepEvents();for(let I=0,V=C.length;I<V;I++)x.push(C[I])}return x}}class wt{static factory(x){let _=[];for(let S=0,C=x.length;S<C;S++){let I=x[S];if(!I.isInResult()||I.ringOut)continue;let V=null,k=I.leftSE,j=I.rightSE,K=[k],xt=k.point,R=[];for(;V=k,k=j,K.push(k),k.point!==xt;)for(;;){let J=k.getAvailableLinkedEvents();if(J.length===0){let mt=K[0].point,lt=K[K.length-1].point;throw new Error(`Unable to complete output ring starting at [${mt.x}, ${mt.y}]. Last matching segment found ends at [${lt.x}, ${lt.y}].`)}if(J.length===1){j=J[0].otherSE;break}let W=null;for(let mt=0,lt=R.length;mt<lt;mt++)if(R[mt].point===k.point){W=mt;break}if(W!==null){let mt=R.splice(W)[0],lt=K.splice(mt.index);lt.unshift(lt[0].otherSE),_.push(new wt(lt.reverse()));continue}R.push({index:K.length,point:k.point});let dt=k.getLeftmostComparator(V);j=J.sort(dt)[0].otherSE;break}_.push(new wt(K))}return _}constructor(x){this.events=x;for(let _=0,S=x.length;_<S;_++)x[_].segment.ringOut=this;this.poly=null}getGeom(){let x=this.events[0].point,_=[x];for(let K=1,xt=this.events.length-1;K<xt;K++){let R=this.events[K].point,J=this.events[K+1].point;Nt(R,x,J)!==0&&(_.push(R),x=R)}if(_.length===1)return null;let S=_[0],C=_[1];Nt(S,x,C)===0&&_.shift(),_.push(_[0]);let I=this.isExteriorRing()?1:-1,V=this.isExteriorRing()?0:_.length-1,k=this.isExteriorRing()?_.length:-1,j=[];for(let K=V;K!=k;K+=I)j.push([_[K].x,_[K].y]);return j}isExteriorRing(){if(this._isExteriorRing===void 0){let x=this.enclosingRing();this._isExteriorRing=x?!x.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let x=this.events[0];for(let C=1,I=this.events.length;C<I;C++){let V=this.events[C];Dt.compare(x,V)>0&&(x=V)}let _=x.segment.prevInResult(),S=_?_.prevInResult():null;for(;;){if(!_)return null;if(!S)return _.ringOut;if(S.ringOut!==_.ringOut)return S.ringOut.enclosingRing()!==_.ringOut?_.ringOut:_.ringOut.enclosingRing();_=S.prevInResult(),S=_?_.prevInResult():null}}}class Xt{constructor(x){this.exteriorRing=x,x.poly=this,this.interiorRings=[]}addInterior(x){this.interiorRings.push(x),x.poly=this}getGeom(){let x=[this.exteriorRing.getGeom()];if(x[0]===null)return null;for(let _=0,S=this.interiorRings.length;_<S;_++){let C=this.interiorRings[_].getGeom();C!==null&&x.push(C)}return x}}class Ht{constructor(x){this.rings=x,this.polys=this._composePolys(x)}getGeom(){let x=[];for(let _=0,S=this.polys.length;_<S;_++){let C=this.polys[_].getGeom();C!==null&&x.push(C)}return x}_composePolys(x){let _=[];for(let S=0,C=x.length;S<C;S++){let I=x[S];if(!I.poly)if(I.isExteriorRing())_.push(new Xt(I));else{let V=I.enclosingRing();V.poly||_.push(new Xt(V)),V.poly.addInterior(I)}}return _}}class Yt{constructor(x){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ut.compare;this.queue=x,this.tree=new c(_),this.segments=[]}process(x){let _=x.segment,S=[];if(x.consumedBy)return x.isLeft?this.queue.remove(x.otherSE):this.tree.remove(_),S;let C=x.isLeft?this.tree.add(_):this.tree.find(_);if(!C)throw new Error(`Unable to find segment #${_.id} [${_.leftSE.point.x}, ${_.leftSE.point.y}] -> [${_.rightSE.point.x}, ${_.rightSE.point.y}] in SweepLine tree.`);let I=C,V=C,k,j;for(;k===void 0;)I=this.tree.prev(I),I===null?k=null:I.key.consumedBy===void 0&&(k=I.key);for(;j===void 0;)V=this.tree.next(V),V===null?j=null:V.key.consumedBy===void 0&&(j=V.key);if(x.isLeft){let K=null;if(k){let R=k.getIntersection(_);if(R!==null&&(_.isAnEndpoint(R)||(K=R),!k.isAnEndpoint(R))){let J=this._splitSafely(k,R);for(let W=0,dt=J.length;W<dt;W++)S.push(J[W])}}let xt=null;if(j){let R=j.getIntersection(_);if(R!==null&&(_.isAnEndpoint(R)||(xt=R),!j.isAnEndpoint(R))){let J=this._splitSafely(j,R);for(let W=0,dt=J.length;W<dt;W++)S.push(J[W])}}if(K!==null||xt!==null){let R=null;K===null?R=xt:xt===null?R=K:R=Dt.comparePoints(K,xt)<=0?K:xt,this.queue.remove(_.rightSE),S.push(_.rightSE);let J=_.split(R);for(let W=0,dt=J.length;W<dt;W++)S.push(J[W])}S.length>0?(this.tree.remove(_),S.push(x)):(this.segments.push(_),_.prev=k)}else{if(k&&j){let K=k.getIntersection(j);if(K!==null){if(!k.isAnEndpoint(K)){let xt=this._splitSafely(k,K);for(let R=0,J=xt.length;R<J;R++)S.push(xt[R])}if(!j.isAnEndpoint(K)){let xt=this._splitSafely(j,K);for(let R=0,J=xt.length;R<J;R++)S.push(xt[R])}}}this.tree.remove(_)}return S}_splitSafely(x,_){this.tree.remove(x);let S=x.rightSE;this.queue.remove(S);let C=x.split(_);return C.push(S),x.consumedBy===void 0&&this.tree.add(x),C}}let gt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,B=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class kt{run(x,_,S){Pt.type=x,T.reset();let C=[new St(_,!0)];for(let R=0,J=S.length;R<J;R++)C.push(new St(S[R],!1));if(Pt.numMultiPolys=C.length,Pt.type==="difference"){let R=C[0],J=1;for(;J<C.length;)m(C[J].bbox,R.bbox)!==null?J++:C.splice(J,1)}if(Pt.type==="intersection")for(let R=0,J=C.length;R<J;R++){let W=C[R];for(let dt=R+1,mt=C.length;dt<mt;dt++)if(m(W.bbox,C[dt].bbox)===null)return[]}let I=new c(Dt.compare);for(let R=0,J=C.length;R<J;R++){let W=C[R].getSweepEvents();for(let dt=0,mt=W.length;dt<mt;dt++)if(I.insert(W[dt]),I.size>gt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let V=new Yt(I),k=I.size,j=I.pop();for(;j;){let R=j.key;if(I.size===k){let W=R.segment;throw new Error(`Unable to pop() ${R.isLeft?"left":"right"} SweepEvent [${R.point.x}, ${R.point.y}] from segment #${W.id} [${W.leftSE.point.x}, ${W.leftSE.point.y}] -> [${W.rightSE.point.x}, ${W.rightSE.point.y}] from queue.`)}if(I.size>gt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(V.segments.length>B)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let J=V.process(R);for(let W=0,dt=J.length;W<dt;W++){let mt=J[W];mt.consumedBy===void 0&&I.insert(mt)}k=I.size,j=I.pop()}T.reset();let K=wt.factory(V.segments);return new Ht(K).getGeom()}}let Pt=new kt;var ct={union:function(U){for(var x=arguments.length,_=new Array(x>1?x-1:0),S=1;S<x;S++)_[S-1]=arguments[S];return Pt.run("union",U,_)},intersection:function(U){for(var x=arguments.length,_=new Array(x>1?x-1:0),S=1;S<x;S++)_[S-1]=arguments[S];return Pt.run("intersection",U,_)},xor:function(U){for(var x=arguments.length,_=new Array(x>1?x-1:0),S=1;S<x;S++)_[S-1]=arguments[S];return Pt.run("xor",U,_)},difference:function(U){for(var x=arguments.length,_=new Array(x>1?x-1:0),S=1;S<x;S++)_[S-1]=arguments[S];return Pt.run("difference",U,_)}};return ct}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Gh=0,Qc=1,Hh=2;var Gi=1,Wh=2,Is=3,wi=0,Ke=1,Vn=2,Gn=0,Ps=1,wr=2,tl=3,el=4,Xh=5;var Hi=100,qh=101,Yh=102,Zh=103,Jh=104,$h=200,Kh=201,jh=202,Qh=203,nl=204,il=205,tu=206,eu=207,nu=208,iu=209,su=210,ru=211,ou=212,au=213,cu=214,Mo=0,So=1,Eo=2,ms=3,wo=4,To=5,Ao=6,Ro=7,oa=0,lu=1,hu=2,Tn=0,sl=1,rl=2,ol=3,Tr=4,al=5,cl=6,ll=7;var hl=300,Ti=301,Wi=302,aa=303,ca=304,Ar=306,Ui=1e3,Un=1001,Co=1002,Ue=1003,uu=1004;var Rr=1005;var Be=1006,la=1007;var Ai=1008;var sn=1009,ul=1010,fl=1011,Ls=1012,ha=1013,An=1014,Rn=1015,Cn=1016,ua=1017,fa=1018,Ns=1020,dl=35902,pl=35899,ml=1021,gl=1022,_n=1023,On=1026,Ri=1027,xl=1028,da=1029,Ci=1030,pa=1031;var ma=1033,Cr=33776,Ir=33777,Pr=33778,Lr=33779,ga=35840,xa=35841,_a=35842,ya=35843,va=36196,ba=37492,Ma=37496,Sa=37488,Ea=37489,Nr=37490,wa=37491,Ta=37808,Aa=37809,Ra=37810,Ca=37811,Ia=37812,Pa=37813,La=37814,Na=37815,Da=37816,Ua=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,ka=36492,Va=36494,Ga=36495,Ha=36283,Wa=36284,Dr=36285,Xa=36286;var Qs=2300,Io=2301,vo=2302,zc=2303,kc=2400,Vc=2401,Gc=2402;var fu=3200;var Ur=0,du=1,ii="",Re="srgb",tr="srgb-linear",er="linear",he="srgb";var bo=7680;var pu=519,mu=512,gu=513,xu=514,qa=515,_u=516,yu=517,Ya=518,vu=519,bu=35044,Za=35048;var _l="300 es",Sn=2e3,gs=2001;function pd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function md(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mu(){let i=nr("canvas");return i.style.display="block",i}var oh={},xs=null;function yl(...i){let t="THREE."+i.shift();xs?xs("log",t,...i):console.log(t,...i)}function Su(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=Su(i);let t="THREE."+i.shift();if(xs)xs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=Su(i);let t="THREE."+i.shift();if(xs)xs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Di(...i){let t=i.join(" ");t in oh||(oh[t]=!0,Zt(...i))}function Eu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wu={[Mo]:So,[Eo]:Ao,[wo]:Ro,[ms]:To,[So]:Mo,[Ao]:Eo,[Ro]:wo,[To]:ms},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=1234567,Js=Math.PI/180,_s=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function vl(i,t){return(i%t+t)%t}function gd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xd(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function _d(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function yd(i,t=1){return t-Math.abs(vl(i,t*2)-t)}function vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Md(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sd(i,t){return i+Math.random()*(t-i)}function Ed(i){return i*(.5-Math.random())}function wd(i){i!==void 0&&(ah=i);let t=ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Td(i){return i*Js}function Ad(i){return i*_s}function Rd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var je={DEG2RAD:Js,RAD2DEG:_s,generateUUID:Xi,clamp:se,euclideanModulo:vl,mapLinear:gd,inverseLerp:xd,lerp:$s,damp:_d,pingpong:yd,smoothstep:vd,smootherstep:bd,randInt:Md,randFloat:Sd,randFloatSpread:Ed,seededRandom:wd,degToRad:Td,radToDeg:Ad,isPowerOfTwo:Rd,ceilPowerOfTwo:Cd,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Pd,normalize:Ye,denormalize:ds},Et=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(f!==y||c!==u||l!==d||h!==g){let m=c*u+l*d+h*g+f*y;m<0&&(u=-u,d=-d,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let w=Math.acos(m),N=Math.sin(w);p=Math.sin(p*w)/N,a=Math.sin(a*w)/N,c=c*p+u*a,l=l*p+d*a,h=h*p+g*a,f=f*p+y*a}else{c=c*p+u*a,l=l*p+d*a,h=h*p+g*a,f=f*p+y*a;let w=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=w,l*=w,h*=w,f*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ch.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pc=new G,ch=new xn,jt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],w=s[1],N=s[4],E=s[7],v=s[2],T=s[5],P=s[8];return r[0]=o*y+a*w+c*v,r[3]=o*m+a*N+c*T,r[6]=o*p+a*E+c*P,r[1]=l*y+h*w+f*v,r[4]=l*m+h*N+f*T,r[7]=l*p+h*E+f*P,r[2]=u*y+d*w+g*v,r[5]=u*m+d*N+g*T,r[8]=u*p+d*E+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mc.makeScale(t,e)),this}rotate(t){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mc.makeRotation(-t)),this}translate(t,e){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},mc=new jt,lh=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){let i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:t,whitePoint:n,transfer:er,toXYZ:lh,fromXYZ:hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:he,toXYZ:lh,fromXYZ:hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}var oe=Ld();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,Po=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=nr("canvas")),ts.width=t.width,ts.height=t.height;let s=ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nd=0,ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var Dd=0,xc=new G,Je=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Un,s=Un,r=Be,o=Ai,a=_n,c=sn,l=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Xi(),this.name="",this.source=new ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=hl;Je.DEFAULT_ANISOTROPY=1;var Me=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let N=(l+1)/2,E=(d+1)/2,v=(p+1)/2,T=(h+u)/4,P=(f+y)/4,b=(g+m)/4;return N>E&&N>v?N<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(N),s=T/n,r=P/n):E>v?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=b/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=P/r,s=b/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-y)/w,this.z=(u-h)/w,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lo=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Je(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Lo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ir=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var No=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,h,f,u,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,f,u,d,g,y,m)}set(t,e,n,s,r,o,a,c,l,h,f,u,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,y=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-y*l,e[9]=-a*c,e[2]=y-u*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,y=l*f;e[0]=u+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,y=l*f;e[0]=u-y*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,y=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+y,e[1]=c*f,e[5]=y*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-y*f}else if(t.order==="XZY"){let u=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+y,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,Fd)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),fi.crossVectors(n,an),fi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),fi.crossVectors(n,an)),fi.normalize(),Zr.crossVectors(an,fi),s[0]=fi.x,s[4]=Zr.x,s[8]=an.x,s[1]=fi.y,s[5]=Zr.y,s[9]=an.y,s[2]=fi.z,s[6]=Zr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],w=n[3],N=n[7],E=n[11],v=n[15],T=s[0],P=s[4],b=s[8],L=s[12],F=s[1],O=s[5],H=s[9],q=s[13],z=s[2],X=s[6],Q=s[10],it=s[14],pt=s[3],rt=s[7],ot=s[11],ft=s[15];return r[0]=o*T+a*F+c*z+l*pt,r[4]=o*P+a*O+c*X+l*rt,r[8]=o*b+a*H+c*Q+l*ot,r[12]=o*L+a*q+c*it+l*ft,r[1]=h*T+f*F+u*z+d*pt,r[5]=h*P+f*O+u*X+d*rt,r[9]=h*b+f*H+u*Q+d*ot,r[13]=h*L+f*q+u*it+d*ft,r[2]=g*T+y*F+m*z+p*pt,r[6]=g*P+y*O+m*X+p*rt,r[10]=g*b+y*H+m*Q+p*ot,r[14]=g*L+y*q+m*it+p*ft,r[3]=w*T+N*F+E*z+v*pt,r[7]=w*P+N*O+E*X+v*rt,r[11]=w*b+N*H+E*Q+v*ot,r[15]=w*L+N*q+E*it+v*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15],w=c*d-l*u,N=a*d-l*f,E=a*u-c*f,v=o*d-l*h,T=o*u-c*h,P=o*f-a*h;return e*(y*w-m*N+p*E)-n*(g*w-m*v+p*T)+s*(g*N-y*v+p*P)-r*(g*E-y*T+m*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],w=e*a-n*o,N=e*c-s*o,E=e*l-r*o,v=n*c-s*a,T=n*l-r*a,P=s*l-r*c,b=h*y-f*g,L=h*m-u*g,F=h*p-d*g,O=f*m-u*y,H=f*p-d*y,q=u*p-d*m,z=w*q-N*H+E*O+v*F-T*L+P*b;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/z;return t[0]=(a*q-c*H+l*O)*X,t[1]=(s*H-n*q-r*O)*X,t[2]=(y*P-m*T+p*v)*X,t[3]=(u*T-f*P-d*v)*X,t[4]=(c*F-o*q-l*L)*X,t[5]=(e*q-s*F+r*L)*X,t[6]=(m*E-g*P-p*N)*X,t[7]=(h*P-u*E+d*N)*X,t[8]=(o*H-a*F+l*b)*X,t[9]=(n*F-e*H-r*b)*X,t[10]=(g*T-y*E+p*w)*X,t[11]=(f*E-h*T-d*w)*X,t[12]=(a*L-o*O-c*b)*X,t[13]=(e*O-n*L+s*b)*X,t[14]=(y*N-g*v-m*w)*X,t[15]=(h*v-f*N+u*w)*X,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,y=o*h,m=o*f,p=a*f,w=c*l,N=c*h,E=c*f,v=n.x,T=n.y,P=n.z;return s[0]=(1-(y+p))*v,s[1]=(d+E)*v,s[2]=(g-N)*v,s[3]=0,s[4]=(d-E)*T,s[5]=(1-(u+p))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+N)*P,s[9]=(m-w)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=es.set(s[0],s[1],s[2]).length(),a=es.set(s[4],s[5],s[6]).length(),c=es.set(s[8],s[9],s[10]).length();r<0&&(o=-o),vn.copy(this);let l=1/o,h=1/a,f=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,e.setFromRotationMatrix(vn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Sn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===gs)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===Sn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===gs)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},es=new G,vn=new ue,Ud=new G(0,0,0),Fd=new G(1,1,1),fi=new G,Zr=new G,an=new G,uh=new ue,fh=new xn,zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fh.setFromEuler(this),this.setFromQuaternion(fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Od=0,dh=new G,ns=new xn,Yn=new ue,Jr=new G,Hs=new G,Bd=new G,zd=new xn,ph=new G(1,0,0),mh=new G(0,1,0),gh=new G(0,0,1),xh={type:"added"},kd={type:"removed"},is={type:"childadded",child:null},_c={type:"childremoved",child:null},Fe=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new zn,n=new xn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new jt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return dh.copy(t).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Hs,Jr,this.up):Yn.lookAt(Jr,Hs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Yn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),is.child=t,this.dispatchEvent(is),is.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new G(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vd={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},$r={h:0,s:0,l:0};function yc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=vl(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=yc(o,r,t+1/3),this.g=yc(o,r,t),this.b=yc(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=Tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return oe.workingToColorSpace(Ge.copy(this),t),Math.round(se(Ge.r*255,0,255))*65536+Math.round(se(Ge.g*255,0,255))*256+Math.round(se(Ge.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Re){oe.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL($r);let n=$s(di.h,$r.h,e),s=$s(di.s,$r.s,e),r=$s(di.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Kt;Kt.NAMES=Tu;var sr=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bn=new G,Zn=new G,vc=new G,Jn=new G,ss=new G,rs=new G,_h=new G,bc=new G,Mc=new G,Sc=new G,Ec=new Me,wc=new Me,Tc=new Me,xi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Zn.subVectors(n,e),vc.subVectors(t,e);let o=bn.dot(bn),a=bn.dot(Zn),c=bn.dot(vc),l=Zn.dot(Zn),h=Zn.dot(vc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ec.setScalar(0),wc.setScalar(0),Tc.setScalar(0),Ec.fromBufferAttribute(t,e),wc.fromBufferAttribute(t,n),Tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ec,r.x),o.addScaledVector(wc,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Zn.subVectors(t,e),bn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ss.subVectors(s,n),rs.subVectors(r,n),bc.subVectors(t,n);let c=ss.dot(bc),l=rs.dot(bc);if(c<=0&&l<=0)return e.copy(n);Mc.subVectors(t,s);let h=ss.dot(Mc),f=rs.dot(Mc);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ss,o);Sc.subVectors(t,r);let d=ss.dot(Sc),g=rs.dot(Sc);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(rs,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return _h.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(_h,a);let p=1/(m+y+u);return o=y*p,a=u*p,e.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),jr.subVectors(this.max,Ws),os.subVectors(t.a,Ws),as.subVectors(t.b,Ws),cs.subVectors(t.c,Ws),pi.subVectors(as,os),mi.subVectors(cs,as),Ii.subVectors(os,cs);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ii.z,Ii.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ii.z,0,-Ii.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ii.y,Ii.x,0];return!Ac(e,os,as,cs,jr)||(e=[1,0,0,0,1,0,0,0,1],!Ac(e,os,as,cs,jr))?!1:(Qr.crossVectors(pi,mi),e=[Qr.x,Qr.y,Qr.z],Ac(e,os,as,cs,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$n=[new G,new G,new G,new G,new G,new G,new G,new G],Mn=new G,Kr=new kn,os=new G,as=new G,cs=new G,pi=new G,mi=new G,Ii=new G,Ws=new G,jr=new G,Qr=new G,Pi=new G;function Ac(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);let a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ae=new G,to=new Et,Gd=0,De=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bu,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var rr=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hd=new kn,Xs=new G,Rc=new G,_i=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Rc)),this.expandByPoint(Xs.copy(t.center).sub(Rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wd=0,gn=new ue,Cc=new Fe,ls=new G,cn=new kn,qs=new kn,Ne=new G,Se=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pd(t)?or:rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(cn.min,qs.min),cn.expandByPoint(Ne),Ne.addVectors(cn.max,qs.max),cn.expandByPoint(Ne)):(cn.expandByPoint(qs.min),cn.expandByPoint(qs.max))}cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(ls.fromBufferAttribute(t,l),Ne.add(ls)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new De(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new G,c[b]=new G;let l=new G,h=new G,f=new G,u=new Et,d=new Et,g=new Et,y=new G,m=new G;function p(b,L,F){l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,F),u.fromBufferAttribute(r,b),d.fromBufferAttribute(r,L),g.fromBufferAttribute(r,F),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let O=1/(d.x*g.y-g.x*d.y);isFinite(O)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(O),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(O),a[b].add(y),a[L].add(y),a[F].add(y),c[b].add(m),c[L].add(m),c[F].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,L=w.length;b<L;++b){let F=w[b],O=F.start,H=F.count;for(let q=O,z=O+H;q<z;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let N=new G,E=new G,v=new G,T=new G;function P(b){v.fromBufferAttribute(s,b),T.copy(v);let L=a[b];N.copy(L),N.sub(v.multiplyScalar(v.dot(L))).normalize(),E.crossVectors(T,L);let O=E.dot(c[b])<0?-1:1;o.setXYZW(b,N.x,N.y,N.z,O)}for(let b=0,L=w.length;b<L;++b){let F=w[b],O=F.start,H=F.count;for(let q=O,z=O+H;q<z;q+=3)P(t.getX(q+0)),P(t.getX(q+1)),P(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,h=new G,f=new G;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new De(u,h,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ic=new G,Xd=new G,qd=new jt,ln=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ic.subVectors(n,e).cross(Xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qd.getNormalMatrix(t),s=this.coplanarPoint(Ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Yd=0,En=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Ps,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Kn=new G,Pc=new G,eo=new G,no=new G,Fi=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pc.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),no.copy(this.origin).sub(Pc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=no.dot(this.direction),c=-no.dot(eo),l=no.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let y=1/h;f*=y,u*=y,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pc).addScaledVector(eo,u),d}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,p=n.x-o.x,w=n.y-o.y,N=n.z-o.z,E=Math.abs(c),v=Math.abs(l),T=Math.abs(h),P,b,L,F,O,H,q,z,X,Q,it,pt;if(E>=v&&E>=T?(L=c,H=f,X=g,pt=p,c>=0?(P=l,b=h,F=u,O=d,q=y,z=m,Q=w,it=N):(P=h,b=l,F=d,O=u,q=m,z=y,Q=N,it=w)):v>=T?(L=l,H=u,X=y,pt=w,l>=0?(P=h,b=c,F=d,O=f,q=m,z=g,Q=N,it=p):(P=c,b=h,F=f,O=d,q=g,z=m,Q=p,it=N)):(L=h,H=d,X=m,pt=N,h>=0?(P=c,b=l,F=f,O=u,q=g,z=y,Q=p,it=w):(P=l,b=c,F=u,O=f,q=y,z=g,Q=w,it=p)),L===0)return null;let rt=P/L,ot=b/L,ft=1/L,vt=F-rt*H,_t=O-ot*H,qt=q-rt*X,Nt=z-ot*X,Bt=Q-rt*pt,st=it-ot*pt,ht=Bt*Nt-st*qt,Tt=vt*st-_t*Bt,zt=qt*_t-Nt*vt;if(s){if(ht<0||Tt<0||zt<0)return null}else if((ht<0||Tt<0||zt<0)&&(ht>0||Tt>0||zt>0))return null;let Rt=ht+Tt+zt;if(Rt===0)return null;let Dt=ft*(ht*H+Tt*X+zt*pt);return(Rt>0?Dt<0:Dt>0)?null:this.at(Dt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qn=class extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yh=new ue,Li=new Fi,io=new _i,vh=new G,so=new G,ro=new G,oo=new G,Lc=new G,ao=new G,bh=new G,co=new G,xe=class extends Fe{constructor(t=new Se,e=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(Lc.fromBufferAttribute(f,t),o?ao.addScaledVector(Lc,h):ao.addScaledVector(Lc.sub(e),h))}e.add(ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(io.containsPoint(Li.origin)===!1&&(Li.intersectSphere(io,vh)===null||Li.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),Li.copy(t.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),N=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=w,v=N;E<v;E+=3){let T=a.getX(E),P=a.getX(E+1),b=a.getX(E+2);s=lo(this,p,t,n,l,h,f,T,P,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let w=a.getX(m),N=a.getX(m+1),E=a.getX(m+2);s=lo(this,o,t,n,l,h,f,w,N,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),N=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let E=w,v=N;E<v;E+=3){let T=E,P=E+1,b=E+2;s=lo(this,p,t,n,l,h,f,T,P,b),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let w=m,N=m+1,E=m+2;s=lo(this,o,t,n,l,h,f,w,N,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Zd(i,t,e,n,s,r,o,a){let c;if(t.side===Ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===wi,a),c===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(co);return l<e.near||l>e.far?null:{distance:l,point:co.clone(),object:i}}function lo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,so),i.getVertexPosition(c,ro),i.getVertexPosition(l,oo);let h=Zd(i,t,e,n,so,ro,oo,bh);if(h){let f=new G;xi.getBarycoord(bh,so,ro,oo,f),s&&(h.uv=xi.getInterpolatedAttribute(s,a,c,l,f,new Et)),r&&(h.uv1=xi.getInterpolatedAttribute(r,a,c,l,f,new Et)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,c,l,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new G,materialIndex:0};xi.getNormal(so,ro,oo,u.normal),h.face=u,h.barycoord=f}return h}var Do=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ue,h=Ue,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=new _i,Jd=new Et(.5,.5),ho=new G,Ms=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],w=r[12],N=r[13],E=r[14],v=r[15];if(s[0].setComponents(l-o,d-h,p-g,v-w).normalize(),s[1].setComponents(l+o,d+h,p+g,v+w).normalize(),s[2].setComponents(l+a,d+f,p+y,v+N).normalize(),s[3].setComponents(l-a,d-f,p-y,v-N).normalize(),n)s[4].setComponents(c,u,m,E).normalize(),s[5].setComponents(l-c,d-u,p-m,v-E).normalize();else if(s[4].setComponents(l-c,d-u,p-m,v-E).normalize(),e===Sn)s[5].setComponents(l+c,d+u,p+m,v+E).normalize();else if(e===gs)s[5].setComponents(c,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);let e=Jd.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ss=class extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Uo=new G,Fo=new G,Mh=new ue,Ys=new Fi,uo=new _i,Nc=new G,Sh=new G,Oo=class extends Fe{constructor(t=new Se,e=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Uo.fromBufferAttribute(e,s-1),Fo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Uo.distanceTo(Fo);t.setAttribute("lineDistance",new ae(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,t.ray.intersectsSphere(uo)===!1)return;Mh.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(Mh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=l){let p=h.getX(y),w=h.getX(y+1),N=fo(this,t,Ys,c,p,w,y);N&&e.push(N)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(d),p=fo(this,t,Ys,c,y,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=l){let p=fo(this,t,Ys,c,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=fo(this,t,Ys,c,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Uo.fromBufferAttribute(a,s),Fo.fromBufferAttribute(a,r),e.distanceSqToSegment(Uo,Fo,Nc,Sh)>n)return;Nc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Nc);if(!(l<t.near||l>t.far))return{distance:l,point:Sh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Eh=new G,wh=new G,ar=class extends Oo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eh.fromBufferAttribute(e,s),wh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eh.distanceTo(wh);t.setAttribute("lineDistance",new ae(n,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Es=class extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Th=new ue,Hc=new Fi,po=new _i,mo=new G,cr=class extends Fe{constructor(t=new Se,e=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;Th.copy(s).invert(),Hc.copy(t.ray).applyMatrix4(Th);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,y=d;g<y;g++){let m=l.getX(g);mo.fromBufferAttribute(f,m),Ah(mo,m,c,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,y=d;g<y;g++)mo.fromBufferAttribute(f,g),Ah(mo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ah(i,t,e,n,s,r,o){let a=Hc.distanceSqToPoint(i);if(a<e){let c=new G;Hc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var lr=class extends Je{constructor(t=[],e=Ti,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ws=class extends Je{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends Je{constructor(t,e,n=An,s,r,o,a=Ue,c=Ue,l,h=On,f=1){if(h!==On&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Bo=class extends yi{constructor(t,e=An,n=Ti,s,r,o=Ue,a=Ue,c,l=On){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hr=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ze=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(f,2));function g(y,m,p,w,N,E,v,T,P,b,L){let F=E/P,O=v/b,H=E/2,q=v/2,z=T/2,X=P+1,Q=b+1,it=0,pt=0,rt=new G;for(let ot=0;ot<Q;ot++){let ft=ot*O-q;for(let vt=0;vt<X;vt++){let _t=vt*F-H;rt[y]=_t*w,rt[m]=ft*N,rt[p]=z,l.push(rt.x,rt.y,rt.z),rt[y]=0,rt[m]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),f.push(vt/P),f.push(1-ot/b),it+=1}}for(let ot=0;ot<b;ot++)for(let ft=0;ft<P;ft++){let vt=u+ft+X*ot,_t=u+ft+X*(ot+1),qt=u+(ft+1)+X*(ot+1),Nt=u+(ft+1)+X*ot;c.push(vt,_t,Nt),c.push(_t,qt,Nt),pt+=6}a.addGroup(d,pt,L),d+=pt,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Oi=class i extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,y=[],m=n/2,p=0;w(),o===!1&&(t>0&&N(!0),e>0&&N(!1)),this.setIndex(h),this.setAttribute("position",new ae(f,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2));function w(){let E=new G,v=new G,T=0,P=(e-t)/n;for(let b=0;b<=r;b++){let L=[],F=b/r,O=F*(e-t)+t;for(let H=0;H<=s;H++){let q=H/s,z=q*c+a,X=Math.sin(z),Q=Math.cos(z);v.x=O*X,v.y=-F*n+m,v.z=O*Q,f.push(v.x,v.y,v.z),E.set(X,P,Q).normalize(),u.push(E.x,E.y,E.z),d.push(q,1-F),L.push(g++)}y.push(L)}for(let b=0;b<s;b++)for(let L=0;L<r;L++){let F=y[L][b],O=y[L+1][b],H=y[L+1][b+1],q=y[L][b+1];(t>0||L!==0)&&(h.push(F,O,q),T+=3),(e>0||L!==r-1)&&(h.push(O,H,q),T+=3)}l.addGroup(p,T,0),p+=T}function N(E){let v=g,T=new Et,P=new G,b=0,L=E===!0?t:e,F=E===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,m*F,0),u.push(0,F,0),d.push(.5,.5),g++;let O=g;for(let H=0;H<=s;H++){let z=H/s*c+a,X=Math.cos(z),Q=Math.sin(z);P.x=L*Q,P.y=m*F,P.z=L*X,f.push(P.x,P.y,P.z),u.push(0,F,0),T.x=X*.5+.5,T.y=Q*.5*F+.5,d.push(T.x,T.y),g++}for(let H=0;H<s;H++){let q=v+H,z=O+H;E===!0?h.push(z,z+1,q):h.push(z+1,z,q),b+=3}l.addGroup(p,b,E===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Et:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,c=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(se(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(se(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ts=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},zo=class extends Ts{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Rh=new G,Ch=new G,Dc=new bl,Uc=new bl,Fc=new bl,ko=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ch.subVectors(s[0],s[1]).add(s[0]),l=Ch);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Rh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Rh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Dc.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,y,m),Uc.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,y,m),Fc.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Uc.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Fc.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Dc.calc(c),Uc.calc(c),Fc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ih(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function $d(i,t){let e=1-i;return e*e*t}function Kd(i,t){return 2*(1-i)*i*t}function jd(i,t){return i*i*t}function Ks(i,t,e,n){return $d(i,t)+Kd(i,e)+jd(i,n)}function Qd(i,t){let e=1-i;return e*e*e*t}function tp(i,t){let e=1-i;return 3*e*e*i*t}function ep(i,t){return 3*(1-i)*i*i*t}function np(i,t){return i*i*i*t}function js(i,t,e,n,s){return Qd(i,t)+tp(i,e)+ep(i,n)+np(i,s)}var ur=class extends hn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vo=class extends hn{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y),js(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fr=class extends hn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends hn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dr=class extends hn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends hn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y),Ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pr=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Ih(a,c.x,l.x,h.x,f.x),Ih(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:zo,CatmullRomCurve3:ko,CubicBezierCurve:ur,CubicBezierCurve3:Vo,EllipseCurve:Ts,LineCurve:fr,LineCurve3:Go,QuadraticBezierCurve:dr,QuadraticBezierCurve3:Ho,SplineCurve:pr}),Wo=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Wc[s.type]().fromJSON(s))}return this}},Bi=class extends Wo{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fr(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new dr(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ur(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new pr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ts(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},un=class extends Bi{constructor(t){super(t),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Bi().fromJSON(s))}return this}};function ip(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Au(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=cp(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,f=c;for(let u=e;u<s;u+=e){let d=i[u],g=i[u+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>f&&(f=g)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return mr(r,o,e,a,c,l,0),o}function Au(i,t,e,n,s){let r;if(s===yp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ph(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ph(o/n|0,i[o],i[o+1],r);return r&&As(r,r.next)&&(xr(r),r=r.next),r}function zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(As(e,e.next)||Ee(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&dp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?rp(i,n,s,r):sp(i)){t.push(c.i,i.i,l.i),xr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=op(zi(i),t),mr(i,t,e,n,s,r,2)):o===2&&ap(i,t,e,n,s,r):mr(zi(i),t,e,n,s,r,1);break}}}function sp(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),f=Math.min(a,c,l),u=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Zs(s,a,r,c,o,l,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,c,l),g=Math.min(h,f,u),y=Math.max(a,c,l),m=Math.max(h,f,u),p=Xc(d,g,t,e,n),w=Xc(y,m,t,e,n),N=i.prevZ,E=i.nextZ;for(;N&&N.z>=p&&E&&E.z<=w;){if(N.x>=d&&N.x<=y&&N.y>=g&&N.y<=m&&N!==s&&N!==o&&Zs(a,h,c,f,l,u,N.x,N.y)&&Ee(N.prev,N,N.next)>=0||(N=N.prevZ,E.x>=d&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Zs(a,h,c,f,l,u,E.x,E.y)&&Ee(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;N&&N.z>=p;){if(N.x>=d&&N.x<=y&&N.y>=g&&N.y<=m&&N!==s&&N!==o&&Zs(a,h,c,f,l,u,N.x,N.y)&&Ee(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;E&&E.z<=w;){if(E.x>=d&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Zs(a,h,c,f,l,u,E.x,E.y)&&Ee(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function op(i,t){let e=i;do{let n=e.prev,s=e.next.next;!As(n,s)&&Cu(n,e,e.next,s)&&gr(n,s)&&gr(s,n)&&(t.push(n.i,e.i,s.i),xr(e),xr(e.next),e=i=s),e=e.next}while(e!==i);return zi(e)}function ap(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gp(o,a)){let c=Iu(o,a);o=zi(o,o.next),c=zi(c,c.next),mr(o,t,e,n,s,r,0),mr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function cp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Au(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(mp(l))}s.sort(lp);for(let r=0;r<s.length;r++)e=hp(s[r],e);return e}function lp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function hp(i,t){let e=up(i,t);if(!e)return t;let n=Iu(e,i);return zi(n,n.next),zi(e,e.next)}function up(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(As(i,e))return e;do{if(As(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Ru(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);gr(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&fp(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function fp(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function dp(i,t,e,n){let s=i;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pp(s)}function pp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function mp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ru(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Zs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Ru(i,t,e,n,s,r,o,a)}function gp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!xp(i,t)&&(gr(i,t)&&gr(t,i)&&_p(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||As(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function As(i,t){return i.x===t.x&&i.y===t.y}function Cu(i,t,e,n){let s=xo(Ee(i,t,e)),r=xo(Ee(i,t,n)),o=xo(Ee(e,n,i)),a=xo(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&go(i,e,t)||r===0&&go(i,n,t)||o===0&&go(e,i,n)||a===0&&go(e,t,n))}function go(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xo(i){return i>0?1:i<0?-1:0}function xp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Cu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function gr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function _p(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Iu(i,t){let e=qc(i.i,i.x,i.y),n=qc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ph(i,t,e,n){let s=qc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Yc=class{static triangulate(t,e,n=2){return ip(t,e,n)}},Fn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lh(t),Nh(n,t);let o=t.length;e.forEach(Lh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Nh(n,e[c]);let a=Yc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Lh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ti=class i extends Se{constructor(t=new un([new Et(.5,.5),new Et(-.5,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:vp,N,E=!1,v,T,P,b;if(p){N=p.getSpacedPoints(h),E=!0,u=!1;let ut=p.isCatmullRomCurve3?p.closed:!1;v=p.computeFrenetFrames(h,ut),T=new G,P=new G,b=new G}u||(m=0,d=0,g=0,y=0);let L=a.extractPoints(l),F=L.shape,O=L.holes;if(!Fn.isClockWise(F)){F=F.reverse();for(let ut=0,yt=O.length;ut<yt;ut++){let Mt=O[ut];Fn.isClockWise(Mt)&&(O[ut]=Mt.reverse())}}function q(ut){let Mt=10000000000000001e-36,St=ut[0];for(let wt=1;wt<=ut.length;wt++){let Xt=wt%ut.length,Ht=ut[Xt],Yt=Ht.x-St.x,gt=Ht.y-St.y,B=Yt*Yt+gt*gt,kt=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(St.x),Math.abs(St.y)),Pt=Mt*kt*kt;if(B<=Pt){ut.splice(Xt,1),wt--;continue}St=Ht}}q(F),O.forEach(q);let z=O.length,X=F;for(let ut=0;ut<z;ut++){let yt=O[ut];F=F.concat(yt)}function Q(ut,yt,Mt){return yt||$t("ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(yt,Mt)}let it=F.length;function pt(ut,yt,Mt){let St,wt,Xt,Ht=ut.x-yt.x,Yt=ut.y-yt.y,gt=Mt.x-ut.x,B=Mt.y-ut.y,kt=Ht*Ht+Yt*Yt,Pt=Ht*B-Yt*gt;if(Math.abs(Pt)>Number.EPSILON){let D=Math.sqrt(kt),M=Math.sqrt(gt*gt+B*B),$=yt.x-Yt/D,tt=yt.y+Ht/D,ct=Mt.x-B/M,U=Mt.y+gt/M,x=((ct-$)*B-(U-tt)*gt)/(Ht*B-Yt*gt);St=$+Ht*x-ut.x,wt=tt+Yt*x-ut.y;let _=St*St+wt*wt;if(_<=2)return new Et(St,wt);Xt=Math.sqrt(_/2)}else{let D=!1;Ht>Number.EPSILON?gt>Number.EPSILON&&(D=!0):Ht<-Number.EPSILON?gt<-Number.EPSILON&&(D=!0):Math.sign(Yt)===Math.sign(B)&&(D=!0),D?(St=-Yt,wt=Ht,Xt=Math.sqrt(kt)):(St=Ht,wt=Yt,Xt=Math.sqrt(kt/2))}return new Et(St/Xt,wt/Xt)}let rt=[];for(let ut=0,yt=X.length,Mt=yt-1,St=ut+1;ut<yt;ut++,Mt++,St++)Mt===yt&&(Mt=0),St===yt&&(St=0),rt[ut]=pt(X[ut],X[Mt],X[St]);let ot=[],ft,vt=rt.concat();for(let ut=0,yt=z;ut<yt;ut++){let Mt=O[ut];ft=[];for(let St=0,wt=Mt.length,Xt=wt-1,Ht=St+1;St<wt;St++,Xt++,Ht++)Xt===wt&&(Xt=0),Ht===wt&&(Ht=0),ft[St]=pt(Mt[St],Mt[Xt],Mt[Ht]);ot.push(ft),vt=vt.concat(ft)}let _t;if(m===0)_t=Fn.triangulateShape(X,O);else{let ut=[],yt=[];for(let Mt=0;Mt<m;Mt++){let St=Mt/m,wt=d*Math.cos(St*Math.PI/2),Xt=g*Math.sin(St*Math.PI/2)+y;for(let Ht=0,Yt=X.length;Ht<Yt;Ht++){let gt=Q(X[Ht],rt[Ht],Xt);Tt(gt.x,gt.y,-wt),St===0&&ut.push(gt)}for(let Ht=0,Yt=z;Ht<Yt;Ht++){let gt=O[Ht];ft=ot[Ht];let B=[];for(let kt=0,Pt=gt.length;kt<Pt;kt++){let D=Q(gt[kt],ft[kt],Xt);Tt(D.x,D.y,-wt),St===0&&B.push(D)}St===0&&yt.push(B)}}_t=Fn.triangulateShape(ut,yt)}let qt=_t.length,Nt=g+y;for(let ut=0;ut<it;ut++){let yt=u?Q(F[ut],vt[ut],Nt):F[ut];E?(P.copy(v.normals[0]).multiplyScalar(yt.x),T.copy(v.binormals[0]).multiplyScalar(yt.y),b.copy(N[0]).add(P).add(T),Tt(b.x,b.y,b.z)):Tt(yt.x,yt.y,0)}for(let ut=1;ut<=h;ut++)for(let yt=0;yt<it;yt++){let Mt=u?Q(F[yt],vt[yt],Nt):F[yt];E?(P.copy(v.normals[ut]).multiplyScalar(Mt.x),T.copy(v.binormals[ut]).multiplyScalar(Mt.y),b.copy(N[ut]).add(P).add(T),Tt(b.x,b.y,b.z)):Tt(Mt.x,Mt.y,f/h*ut)}for(let ut=m-1;ut>=0;ut--){let yt=ut/m,Mt=d*Math.cos(yt*Math.PI/2),St=g*Math.sin(yt*Math.PI/2)+y;for(let wt=0,Xt=X.length;wt<Xt;wt++){let Ht=Q(X[wt],rt[wt],St);Tt(Ht.x,Ht.y,f+Mt)}for(let wt=0,Xt=O.length;wt<Xt;wt++){let Ht=O[wt];ft=ot[wt];for(let Yt=0,gt=Ht.length;Yt<gt;Yt++){let B=Q(Ht[Yt],ft[Yt],St);E?Tt(B.x,B.y+N[h-1].y,N[h-1].x+Mt):Tt(B.x,B.y,f+Mt)}}}Bt(),st();function Bt(){let ut=s.length/3;if(u){let yt=0,Mt=it*yt;for(let St=0;St<qt;St++){let wt=_t[St];zt(wt[2]+Mt,wt[1]+Mt,wt[0]+Mt)}yt=h+m*2,Mt=it*yt;for(let St=0;St<qt;St++){let wt=_t[St];zt(wt[0]+Mt,wt[1]+Mt,wt[2]+Mt)}}else{for(let yt=0;yt<qt;yt++){let Mt=_t[yt];zt(Mt[2],Mt[1],Mt[0])}for(let yt=0;yt<qt;yt++){let Mt=_t[yt];zt(Mt[0]+it*h,Mt[1]+it*h,Mt[2]+it*h)}}n.addGroup(ut,s.length/3-ut,0)}function st(){let ut=s.length/3,yt=0;ht(X,yt),yt+=X.length;for(let Mt=0,St=O.length;Mt<St;Mt++){let wt=O[Mt];ht(wt,yt),yt+=wt.length}n.addGroup(ut,s.length/3-ut,1)}function ht(ut,yt){let Mt=ut.length;for(;--Mt>=0;){let St=Mt,wt=Mt-1;wt<0&&(wt=ut.length-1);for(let Xt=0,Ht=h+m*2;Xt<Ht;Xt++){let Yt=it*Xt,gt=it*(Xt+1),B=yt+St+Yt,kt=yt+wt+Yt,Pt=yt+wt+gt,D=yt+St+gt;Rt(B,kt,Pt,D)}}}function Tt(ut,yt,Mt){c.push(ut),c.push(yt),c.push(Mt)}function zt(ut,yt,Mt){Dt(ut),Dt(yt),Dt(Mt);let St=s.length/3,wt=w.generateTopUV(n,s,St-3,St-2,St-1);Qt(wt[0]),Qt(wt[1]),Qt(wt[2])}function Rt(ut,yt,Mt,St){Dt(ut),Dt(yt),Dt(St),Dt(yt),Dt(Mt),Dt(St);let wt=s.length/3,Xt=w.generateSideWallUV(n,s,wt-6,wt-3,wt-2,wt-1);Qt(Xt[0]),Qt(Xt[1]),Qt(Xt[3]),Qt(Xt[1]),Qt(Xt[2]),Qt(Xt[3])}function Dt(ut){s.push(c[ut*3+0]),s.push(c[ut*3+1]),s.push(c[ut*3+2])}function Qt(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wc[s.type]().fromJSON(s)),new i(n,t.options)}},vp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Et(r,o),new Et(a,c),new Et(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Et(o,1-c),new Et(l,1-f),new Et(u,1-g),new Et(y,1-p)]:[new Et(a,1-c),new Et(h,1-f),new Et(d,1-g),new Et(m,1-p)]}};function bp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _r=class i extends Se{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,f=new G,u=new Et,d=new G,g=new G,y=new G,m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let w=0;w<=e;w++){let N=n+w*h*s,E=Math.sin(N),v=Math.cos(N);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*E,f.y=t[T].y,f.z=t[T].x*v,o.push(f.x,f.y,f.z),u.x=w/e,u.y=T/(t.length-1),a.push(u.x,u.y);let P=c[3*T+0]*E,b=c[3*T+1],L=c[3*T+0]*v;l.push(P,b,L)}}for(let w=0;w<e;w++)for(let N=0;N<t.length-1;N++){let E=N+w*t.length,v=E,T=E+t.length,P=E+t.length+1,b=E+1;r.push(v,T,b),r.push(P,b,T)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ei=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let w=p*u-o;for(let N=0;N<l;N++){let E=N*f-r;g.push(E,-w,0),y.push(0,0,1),m.push(N/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let N=w+l*p,E=w+l*(p+1),v=w+1+l*(p+1),T=w+1+l*p;d.push(N,E,T),d.push(E,v,T)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(y,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var vi=class i extends Se{constructor(t=new un([new Et(0,.5),new Et(-.5,-.5),new Et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(o,2));function l(h){let f=s.length/3,u=h.extractPoints(e),d=u.shape,g=u.holes;Fn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let w=g[m];Fn.isClockWise(w)===!0&&(g[m]=w.reverse())}let y=Fn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let w=g[m];d=d.concat(w)}for(let m=0,p=d.length;m<p;m++){let w=d[m];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let m=0,p=y.length;m<p;m++){let w=y[m],N=w[0]+f,E=w[1]+f,v=w[2]+f;n.push(N,E,v),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Mp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Mp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var wn=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new G,u=new G,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let w=[],N=p/n,E=o+N*a,v=t*Math.cos(E),T=Math.sqrt(t*t-v*v),P=0;p===0&&o===0?P=.5/e:p===n&&c===Math.PI&&(P=-.5/e);for(let b=0;b<=e;b++){let L=b/e,F=s+L*r;f.x=-T*Math.cos(F),f.y=v,f.z=T*Math.sin(F),g.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),m.push(L+P,1-N),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let N=h[p][w+1],E=h[p][w],v=h[p+1][w],T=h[p+1][w+1];(p!==0||o>0)&&d.push(N,E,T),(p!==n-1||c<Math.PI)&&d.push(E,v,T)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(y,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ki=class i extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],u=new G,d=new G,g=new G;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let p=0;p<=s;p++){let w=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(w),d.y=(t+e*Math.cos(m))*Math.sin(w),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),u.x=t*Math.cos(w),u.y=t*Math.sin(w),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,w=(s+1)*(y-1)+m-1,N=(s+1)*(y-1)+m,E=(s+1)*y+m;c.push(p,w,E),c.push(w,N,E)}this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dh(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=qi(i[e]);for(let s in n)t[s]=n[s]}return t}function Dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ml(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Pu={clone:qi,merge:He},Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xo=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ni=class extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Vi=class extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ur,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=oa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qo=class extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yo=class extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Oc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zo=class extends bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vc:r=t,a=2*e-n;break;case Gc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vc:o=t,c=2*n-e;break;case Gc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,w=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,N=(-1-d)*m+(1.5+d)*y+.5*g,E=d*m-d*y;for(let v=0;v!==a;++v)r[v]=p*o[h+v]+w*o[l+v]+N*o[c+v]+E*o[f+v];return r}},Jo=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},$o=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ko=class extends bi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*g;return r}let u=a*2,d=t-1;for(let g=0;g!==a;++g){let y=o[l+g],m=o[c+g],p=d*u+g*2,w=f[p],N=f[p+1],E=t*u+g*2,v=h[E],T=h[E+1],P=Ap(n,e,w,v,s);r[g]=Lu(P,y,N,T,m)}return r}};function Lu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Tp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ap(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Lu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Tp(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hs(e,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hs(t.times,Array),values:hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Oc(t.settings)&&(n.settings={inTangents:hs(t.settings.inTangents,Array),outTangents:hs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ko(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Io:e=this.InterpolantFactoryMethodLinear;break;case vo:e=this.InterpolantFactoryMethodSmooth;break;case zc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return vo;case this.InterpolantFactoryMethodBezier:return zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Oc(this.settings)&&(Uh(this.settings.inTangents,t),Uh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){$t("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){$t("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&md(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){$t("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[u+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Oc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Io;var Mi=class extends fn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Qs;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};jo.prototype.ValueTypeName="color";var Qo=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};Qo.prototype.ValueTypeName="number";var ta=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},yr=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ta(this.times,this.values,this.getValueSize(),t)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends fn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Qs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};ea.prototype.ValueTypeName="vector";var na=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nu=new na,ia=class{constructor(t){this.manager=t!==void 0?t:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},vr=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Bc=new ue,Fh=new G,Oh=new G,br=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Bc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===gs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_o=new G,yo=new xn,Dn=new G,Mr=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_o,yo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,yo,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_o,yo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,yo,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new G,Bh=new Et,zh=new Et,Ze=class extends Mr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Bh,zh),e.subVectors(zh,Bh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zc=class extends br{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0}},Sr=class extends Rs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ei=class extends Mr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jc=class extends br{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cs=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Jc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var us=-90,fs=1,sa=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(us,fs,t,e);s.layers=this.layers,this.add(s);let r=new Ze(us,fs,t,e);r.layers=this.layers,this.add(r);let o=new Ze(us,fs,t,e);o.layers=this.layers,this.add(o);let a=new Ze(us,fs,t,e);a.layers=this.layers,this.add(a);let c=new Ze(us,fs,t,e);c.layers=this.layers,this.add(c);let l=new Ze(us,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ra=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sl="\\[\\]\\.:\\/",Rp=new RegExp("["+Sl+"]","g"),El="[^"+Sl+"]",Cp="[^"+Sl.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",El),Pp=/(WCOD+)?/.source.replace("WCOD",Cp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),Dp=new RegExp("^"+Ip+Pp+Lp+Np+"$"),Up=["material","materials","bones","map"],$c=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rp,"")}static parseTrackName(t){let e=Dp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Up.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=$c;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xy=new Float32Array(1);var kh=new ue,Er=class{constructor(t,e,n=0,s=1/0){this.ray=new Fi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kh),this}intersectObject(t,e=!0,n=[]){return Kc(t,this,n,e),n.sort(Vh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Kc(t[s],this,n,e);return n.sort(Vh),n}};function Vh(i,t){return i.distance-t.distance}function Kc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Kc(r[o],t,e,!0)}}var jc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function wl(i,t,e,n){let s=Fp(n);switch(e){case ml:return i*t;case xl:return i*t/s.components*s.byteLength;case da:return i*t/s.components*s.byteLength;case Ci:return i*t*2/s.components*s.byteLength;case pa:return i*t*2/s.components*s.byteLength;case gl:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case ma:return i*t*4/s.components*s.byteLength;case Cr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case ya:return Math.max(i,16)*Math.max(t,8)/4;case ga:case _a:return Math.max(i,8)*Math.max(t,8)/2;case va:case ba:case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:case Nr:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ka:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ha:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dr:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fp(i){switch(i){case sn:case ul:return{byteLength:1,components:1};case Ls:case fl:case Cn:return{byteLength:2,components:1};case ua:case fa:return{byteLength:2,components:4};case An:case ha:case Rn:return{byteLength:4,components:1};case dl:case pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ef(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let y=f[d];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
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
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,rm=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Hm=`uniform sampler2D dfgLUT;
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
}`,Wm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
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
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,jg=`#if DEPTH_PACKING == 3200
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
}`,Qg=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,_0=`#define TOON
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
}`,y0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,M0=`uniform vec3 color;
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
}`,S0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Xp,alphahash_pars_fragment:qp,alphamap_fragment:Yp,alphamap_pars_fragment:Zp,alphatest_fragment:Jp,alphatest_pars_fragment:$p,aomap_fragment:Kp,aomap_pars_fragment:jp,batching_pars_vertex:Qp,batching_vertex:tm,begin_vertex:em,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:om,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:cm,clipping_planes_vertex:lm,color_fragment:hm,color_pars_fragment:um,color_pars_vertex:fm,color_vertex:dm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:xm,displacementmap_vertex:_m,emissivemap_fragment:ym,emissivemap_pars_fragment:vm,colorspace_fragment:bm,colorspace_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:Em,envmap_pars_fragment:wm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Om,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Im,fog_pars_fragment:Pm,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Nm,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Um,lights_pars_begin:Fm,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:km,lights_phong_pars_fragment:Vm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,lightprobes_pars_fragment:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Km,map_fragment:jm,map_pars_fragment:Qm,map_particle_fragment:tg,map_particle_pars_fragment:eg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:sg,morphcolor_vertex:rg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:cg,normal_fragment_begin:lg,normal_fragment_maps:hg,normal_pars_fragment:ug,normal_pars_vertex:fg,normal_vertex:dg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:_g,opaque_fragment:yg,packing:vg,premultiplied_alpha_fragment:bg,project_vertex:Mg,dithering_fragment:Sg,dithering_pars_fragment:Eg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Rg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Ig,skinbase_vertex:Pg,skinning_pars_vertex:Lg,skinning_vertex:Ng,skinnormal_vertex:Dg,specularmap_fragment:Ug,specularmap_pars_fragment:Fg,tonemapping_fragment:Og,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:kg,uv_pars_fragment:Vg,uv_pars_vertex:Gg,uv_vertex:Hg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:Jg,cube_frag:$g,depth_vert:Kg,depth_frag:jg,distance_vert:Qg,distance_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:c0,meshmatcap_vert:l0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:f0,meshphong_vert:d0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:x0,meshtoon_frag:_0,points_vert:y0,points_frag:v0,shadow_vert:b0,shadow_frag:M0,sprite_vert:S0,sprite_frag:E0},Ct={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Wn={basic:{uniforms:He([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:He([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:He([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:He([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:He([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:He([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:He([Ct.points,Ct.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:He([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:He([Ct.common,Ct.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:He([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:He([Ct.sprite,Ct.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:He([Ct.common,Ct.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:He([Ct.lights,Ct.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Wn.physical={uniforms:He([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Ja={r:0,b:0,g:0},w0=new ue,nf=new jt;nf.set(-1,0,0,0,1,0,0,0,1);function T0(i,t,e,n,s,r){let o=new Kt(0),a=s===!0?0:1,c,l,h=null,f=0,u=null;function d(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){let E=w.backgroundBlurriness>0;N=t.get(N,E)}return N}function g(w){let N=!1,E=d(w);E===null?m(o,a):E&&E.isColor&&(m(E,1),N=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||N)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(w,N){let E=d(N);E&&(E.isCubeTexture||E.mapping===Ar)?(l===void 0&&(l=new xe(new ze(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:qi(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(N.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(nf),l.material.toneMapped=oe.getTransfer(E.colorSpace)!==he,(h!==E||f!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new xe(new ei(2,2),new $e({name:"BackgroundMaterial",uniforms:qi(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.toneMapped=oe.getTransfer(E.colorSpace)!==he,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,N){w.getRGB(Ja,Ml(i)),e.buffers.color.setClear(Ja.r,Ja.g,Ja.b,N,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,N=1){o.set(w),a=N,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,m(o,a)},render:g,addToRenderList:y,dispose:p}}function A0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(O,H,q,z,X){let Q=!1,it=f(O,z,q,H);r!==it&&(r=it,l(r.object)),Q=d(O,z,q,X),Q&&g(O,z,q,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,E(O,H,q,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function f(O,H,q,z){let X=z.wireframe===!0,Q=n[H.id];Q===void 0&&(Q={},n[H.id]=Q);let it=O.isInstancedMesh===!0?O.id:0,pt=Q[it];pt===void 0&&(pt={},Q[it]=pt);let rt=pt[q.id];rt===void 0&&(rt={},pt[q.id]=rt);let ot=rt[X];return ot===void 0&&(ot=u(c()),rt[X]=ot),ot}function u(O){let H=[],q=[],z=[];for(let X=0;X<e;X++)H[X]=0,q[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:z,object:O,attributes:{},index:null}}function d(O,H,q,z){let X=r.attributes,Q=H.attributes,it=0,pt=q.getAttributes();for(let rt in pt)if(pt[rt].location>=0){let ft=X[rt],vt=Q[rt];if(vt===void 0&&(rt==="instanceMatrix"&&O.instanceMatrix&&(vt=O.instanceMatrix),rt==="instanceColor"&&O.instanceColor&&(vt=O.instanceColor)),ft===void 0||ft.attribute!==vt||vt&&ft.data!==vt.data)return!0;it++}return r.attributesNum!==it||r.index!==z}function g(O,H,q,z){let X={},Q=H.attributes,it=0,pt=q.getAttributes();for(let rt in pt)if(pt[rt].location>=0){let ft=Q[rt];ft===void 0&&(rt==="instanceMatrix"&&O.instanceMatrix&&(ft=O.instanceMatrix),rt==="instanceColor"&&O.instanceColor&&(ft=O.instanceColor));let vt={};vt.attribute=ft,ft&&ft.data&&(vt.data=ft.data),X[rt]=vt,it++}r.attributes=X,r.attributesNum=it,r.index=z}function y(){let O=r.newAttributes;for(let H=0,q=O.length;H<q;H++)O[H]=0}function m(O){p(O,0)}function p(O,H){let q=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;q[O]=1,z[O]===0&&(i.enableVertexAttribArray(O),z[O]=1),X[O]!==H&&(i.vertexAttribDivisor(O,H),X[O]=H)}function w(){let O=r.newAttributes,H=r.enabledAttributes;for(let q=0,z=H.length;q<z;q++)H[q]!==O[q]&&(i.disableVertexAttribArray(q),H[q]=0)}function N(O,H,q,z,X,Q,it){it===!0?i.vertexAttribIPointer(O,H,q,X,Q):i.vertexAttribPointer(O,H,q,z,X,Q)}function E(O,H,q,z){y();let X=z.attributes,Q=q.getAttributes(),it=H.defaultAttributeValues;for(let pt in Q){let rt=Q[pt];if(rt.location>=0){let ot=X[pt];if(ot===void 0&&(pt==="instanceMatrix"&&O.instanceMatrix&&(ot=O.instanceMatrix),pt==="instanceColor"&&O.instanceColor&&(ot=O.instanceColor)),ot!==void 0){let ft=ot.normalized,vt=ot.itemSize,_t=t.get(ot);if(_t===void 0)continue;let qt=_t.buffer,Nt=_t.type,Bt=_t.bytesPerElement,st=Nt===i.INT||Nt===i.UNSIGNED_INT||ot.gpuType===ha;if(ot.isInterleavedBufferAttribute){let ht=ot.data,Tt=ht.stride,zt=ot.offset;if(ht.isInstancedInterleavedBuffer){for(let Rt=0;Rt<rt.locationSize;Rt++)p(rt.location+Rt,ht.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Rt=0;Rt<rt.locationSize;Rt++)m(rt.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Rt=0;Rt<rt.locationSize;Rt++)N(rt.location+Rt,vt/rt.locationSize,Nt,ft,Tt*Bt,(zt+vt/rt.locationSize*Rt)*Bt,st)}else{if(ot.isInstancedBufferAttribute){for(let ht=0;ht<rt.locationSize;ht++)p(rt.location+ht,ot.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ht=0;ht<rt.locationSize;ht++)m(rt.location+ht);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let ht=0;ht<rt.locationSize;ht++)N(rt.location+ht,vt/rt.locationSize,Nt,ft,vt*Bt,vt/rt.locationSize*ht*Bt,st)}}else if(it!==void 0){let ft=it[pt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(rt.location,ft);break;case 3:i.vertexAttrib3fv(rt.location,ft);break;case 4:i.vertexAttrib4fv(rt.location,ft);break;default:i.vertexAttrib1fv(rt.location,ft)}}}}w()}function v(){L();for(let O in n){let H=n[O];for(let q in H){let z=H[q];for(let X in z){let Q=z[X];for(let it in Q)h(Q[it].object),delete Q[it];delete z[X]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;let H=n[O.id];for(let q in H){let z=H[q];for(let X in z){let Q=z[X];for(let it in Q)h(Q[it].object),delete Q[it];delete z[X]}}delete n[O.id]}function P(O){for(let H in n){let q=n[H];for(let z in q){let X=q[z];if(X[O.id]===void 0)continue;let Q=X[O.id];for(let it in Q)h(Q[it].object),delete Q[it];delete X[O.id]}}}function b(O){for(let H in n){let q=n[H],z=O.isInstancedMesh===!0?O.id:0,X=q[z];if(X!==void 0){for(let Q in X){let it=X[Q];for(let pt in it)h(it[pt].object),delete it[pt];delete X[Q]}delete q[z],Object.keys(q).length===0&&delete n[H]}}}function L(){F(),o=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:F,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function R0(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function C0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==_n&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let b=P===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==sn&&P!==Rn&&!b&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:E,maxSamples:v,samples:T}}function I0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ln,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let w=r?0:n,N=w*4,E=p.clippingState||null;c.value=E,E=h(g,u,N,d);for(let v=0;v!==N;++v)E[v]=e[v];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=d+y*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let N=0,E=d;N!==y;++N,E+=4)o.copy(f[N]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Us=4,P0=6,L0=20,N0=256,Fr=new Ei,Du=new Kt,Tl=null,Al=0,Rl=0,Cl=!1,D0=new G,Yi=new G,Ka=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=D0}=r;Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Tl,Al,Rl),this._renderer.xr.enabled=Cl,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Cn,format:_n,colorSpace:tr,depthBuffer:!1},s=Uu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=U0(r)),this._blurMaterial=O0(r,t,e),this._ggxMaterial=F0(r,t,e)}return s}_compileMaterial(t){let e=new xe(new Se,t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,n,s,r){let c=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Du),f.toneMapping=Tn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new ze,new Qn({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,p=!0):(m.color.copy(Du),p=!0);for(let N=0;N<6;N++){let E=N%3;E===0?(c.up.set(0,l[N],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[N],r.y,r.z)):E===1?(c.up.set(0,0,l[N]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[N],r.z)):(c.up.set(0,l[N],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[N]));let v=this._cubeSize;Ds(s,E*v,N>2?v:0,v,v),f.setRenderTarget(s),p&&f.render(y,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ti||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ds(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Fr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,d=f*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Us?n-g+Us:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Ds(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,Fr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ds(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(a,Fr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Us?s-this._lodMax+Us:0),u=4*(this._cubeSize-h);Ds(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(c,Fr)}};function U0(i){let t=[],e=[],n=i,s=i-Us+1+P0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,d=3,g=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let p=0;p<f;p++){let w=p%3*2/3-1,N=p>2?0:-1,E=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];g.set(E,d*u*p);for(let v=0;v<u;v++){let T=h[v*2]*2-1,P=h[v*2+1]*2-1;p===0?Yi.set(1,P,T):p===1?Yi.set(-T,1,-P):p===2?Yi.set(-T,P,1):p===3?Yi.set(-1,P,-T):p===4?Yi.set(-T,-1,P):Yi.set(T,P,-1),Yi.toArray(y,(p*u+v)*d)}}let m=new Se;m.setAttribute("position",new De(g,d)),m.setAttribute("outputDirection",new De(y,d)),e.push(new xe(m,null)),n>Us&&n--}return{lodMeshes:e,sizeLods:t}}function Uu(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function F0(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function O0(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:L0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Fu(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ou(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ja=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ze(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Gn});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Be),new sa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function B0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===aa||d===ca)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new ja(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,g=d===aa||d===ca,y=d===Ti||d===Wi;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ka(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return g&&w&&w.height>0||y&&w&&c(w)?(n===null&&(n=new Ka(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===aa?u.mapping=Ti:d===ca&&(u.mapping=Wi),u}function c(u){let d=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function z0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function l(f){let u=[],d=f.index,g=f.attributes.position,y=0;if(g===void 0)return;if(d!==null){let w=d.array;y=d.version;for(let N=0,E=w.length;N<E;N+=3){let v=w[N+0],T=w[N+1],P=w[N+2];u.push(v,T,T,P,P,v)}}else{let w=g.array;y=g.version;for(let N=0,E=w.length/3-1;N<E;N+=3){let v=N+0,T=N+1,P=N+2;u.push(v,T,T,P,P,v)}}let m=new(g.count>=65535?or:rr)(u,1);m.version=y;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function V0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function l(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function G0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function H0(i,t,e){let n=new WeakMap,s=new Me;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let L=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],N=0;d===!0&&(N=1),g===!0&&(N=2),y===!0&&(N=3);let E=a.attributes.position.count*N,v=1;E>t.maxTextureSize&&(v=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let T=new Float32Array(E*v*4*f),P=new ir(T,E,v,f);P.type=Rn,P.needsUpdate=!0;let b=N*4;for(let F=0;F<f;F++){let O=m[F],H=p[F],q=w[F],z=E*v*4*F;for(let X=0;X<O.count;X++){let Q=X*b;d===!0&&(s.fromBufferAttribute(O,X),T[z+Q+0]=s.x,T[z+Q+1]=s.y,T[z+Q+2]=s.z,T[z+Q+3]=0),g===!0&&(s.fromBufferAttribute(H,X),T[z+Q+4]=s.x,T[z+Q+5]=s.y,T[z+Q+6]=s.z,T[z+Q+7]=0),y===!0&&(s.fromBufferAttribute(q,X),T[z+Q+8]=s.x,T[z+Q+9]=s.y,T[z+Q+10]=s.z,T[z+Q+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new Et(E,v)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function W0(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var X0={[sl]:"LINEAR_TONE_MAPPING",[rl]:"REINHARD_TONE_MAPPING",[ol]:"CINEON_TONE_MAPPING",[Tr]:"ACES_FILMIC_TONE_MAPPING",[cl]:"AGX_TONE_MAPPING",[ll]:"NEUTRAL_TONE_MAPPING",[al]:"CUSTOM_TONE_MAPPING"};function q0(i,t,e,n,s,r){let o=new nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Se;l.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ae([0,2,0,0,2,0],2));let h=new Xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new xe(l,h),u=new Ei(-1,1,1,-1,0,1),d=null,g=null,y=!1,m,p=null,w=[],N=!1;this.setSize=function(E,v){o.setSize(E,v),a!==null&&a.setSize(E,v),c!==null&&c.setSize(E,v);for(let T=0;T<w.length;T++){let P=w[T];P.setSize&&P.setSize(E,v)}},this.setEffects=function(E){w=E,N=w.length>0&&w[0].isRenderPass===!0;let v=o.width,T=o.height;w.length>0&&a===null&&(a=new nn(v,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new nn(v,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<w.length;P++){let b=w[P];b.setSize&&b.setSize(v,T)}},this.begin=function(E,v){if(y||E.toneMapping===Tn&&w.length===0)return!1;if(p=v,v!==null){let T=v.width,P=v.height;(o.width!==T||o.height!==P)&&this.setSize(T,P)}return N===!1&&E.setRenderTarget(o),m=E.toneMapping,E.toneMapping=Tn,!0},this.hasRenderPass=function(){return N},this.end=function(E,v){E.toneMapping=m,y=!0;let T=o,P=a;for(let b=0;b<w.length;b++){let L=w[b];L.enabled!==!1&&(L.render(E,P,T,v),L.needsSwap!==!1&&(T=P,P=P===a?c:a))}if(d!==E.outputColorSpace||g!==E.toneMapping){d=E.outputColorSpace,g=E.toneMapping,h.defines={},oe.getTransfer(d)===he&&(h.defines.SRGB_TRANSFER="");let b=X0[g];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,E.setRenderTarget(p),E.render(f,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var sf=new Je,Ll=new yi(1,1),rf=new ir,of=new No,af=new lr,Bu=[],zu=[],ku=new Float32Array(16),Vu=new Float32Array(9),Gu=new Float32Array(4);function Os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ec(i,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function K0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),Ie(e,n)}}function j0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Vu.set(n),i.uniformMatrix3fv(this.addr,!1,Vu),Ie(e,n)}}function Q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;ku.set(n),i.uniformMatrix4fv(this.addr,!1,ku),Ie(e,n)}}function tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ll.compareFunction=e.isReversedDepthBuffer()?Ya:qa,r=Ll):r=sf,e.setTexture2D(t||r,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||of,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||af,s)}function ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rf,s)}function fx(i){switch(i){case 5126:return Y0;case 35664:return Z0;case 35665:return J0;case 35666:return $0;case 35674:return K0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}function dx(i,t){i.uniform1fv(this.addr,t)}function px(i,t){let e=Os(t,this.size,2);i.uniform2fv(this.addr,e)}function mx(i,t){let e=Os(t,this.size,3);i.uniform3fv(this.addr,e)}function gx(i,t){let e=Os(t,this.size,4);i.uniform4fv(this.addr,e)}function xx(i,t){let e=Os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _x(i,t){let e=Os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yx(i,t){let e=Os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vx(i,t){i.uniform1iv(this.addr,t)}function bx(i,t){i.uniform2iv(this.addr,t)}function Mx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function Ex(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function Tx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Rx(i,t,e){let n=this.cache,s=t.length,r=ec(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ll:o=sf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Cx(i,t,e){let n=this.cache,s=t.length,r=ec(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||of,r[o])}function Ix(i,t,e){let n=this.cache,s=t.length,r=ec(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||af,r[o])}function Px(i,t,e){let n=this.cache,s=t.length,r=ec(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rf,r[o])}function Lx(i){switch(i){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return _x;case 35676:return yx;case 5124:case 35670:return vx;case 35667:case 35671:return bx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return Ex;case 36294:return wx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Px}}var Nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fx(e.type)}},Dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lx(e.type)}},Ul=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Il=/(\w+)(\])?(\[|\.)?/g;function Hu(i,t){i.seq.push(t),i.map[t.id]=t}function Nx(i,t,e){let n=i.name,s=n.length;for(Il.lastIndex=0;;){let r=Il.exec(n),o=Il.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Hu(e,l===void 0?new Nl(a,i,t):new Dl(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Ul(a),Hu(e,f)),e=f}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Nx(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Wu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dx=37297,Ux=0;function Fx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Xu=new jt;function Ox(i){oe._getMatrix(Xu,oe.workingColorSpace,i);let t=`mat3( ${Xu.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case er:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Fx(i.getShaderSource(t),a)}else return r}function Bx(i,t){let e=Ox(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var zx={[sl]:"Linear",[rl]:"Reinhard",[ol]:"Cineon",[Tr]:"ACESFilmic",[cl]:"AgX",[ll]:"Neutral",[al]:"Custom"};function kx(i,t){let e=zx[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $a=new G;function Vx(){oe.getLuminanceCoefficients($a);let i=$a.x.toFixed(4),t=$a.y.toFixed(4),e=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function Hx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Br(i){return i!==""}function Yu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(i){return i.replace(Xx,Yx)}var qx=new Map;function Yx(i,t){let e=ne[t];if(e===void 0){let n=qx.get(t);if(n!==void 0)e=ne[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fl(e)}var Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(i){return i.replace(Zx,Jx)}function Jx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var $x={[Gi]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function Kx(i){return $x[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jx={[Ti]:"ENVMAP_TYPE_CUBE",[Wi]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE_UV"};function Qx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":jx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var t_={[Wi]:"ENVMAP_MODE_REFRACTION"};function e_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n_={[oa]:"ENVMAP_BLENDING_MULTIPLY",[lu]:"ENVMAP_BLENDING_MIX",[hu]:"ENVMAP_BLENDING_ADD"};function i_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n_[i.combine]||"ENVMAP_BLENDING_NONE"}function s_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function r_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Kx(e),l=Qx(e),h=e_(e),f=i_(e),u=s_(e),d=Gx(e),g=Hx(r),y=s.createProgram(),m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Tn?kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Bx("linearToOutputTexel",e.outputColorSpace),Vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),o=Fl(o),o=Yu(o,e),o=Zu(o,e),a=Fl(a),a=Yu(a,e),a=Zu(a,e),o=Ju(o),a=Ju(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let N=w+m+o,E=w+p+a,v=Wu(s,s.VERTEX_SHADER,N),T=Wu(s,s.FRAGMENT_SHADER,E);s.attachShader(y,v),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(O){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(y)||"",q=s.getShaderInfoLog(v)||"",z=s.getShaderInfoLog(T)||"",X=H.trim(),Q=q.trim(),it=z.trim(),pt=!0,rt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,v,T);else{let ot=qu(s,v,"vertex"),ft=qu(s,T,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+X+`
`+ot+`
`+ft)}else X!==""?Zt("WebGLProgram: Program Info Log:",X):(Q===""||it==="")&&(rt=!1);rt&&(O.diagnostics={runnable:pt,programLog:X,vertexShader:{log:Q,prefix:m},fragmentShader:{log:it,prefix:p}})}s.deleteShader(v),s.deleteShader(T),b=new Fs(s,y),L=Wx(s,y)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(y,Dx)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ux++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=T,this}var o_=0,Ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bl(t),e.set(t,n)),n}},Bl=class{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}};function a_(i){return i===Ci||i===Nr||i===Dr}function c_(i,t,e,n,s,r){let o=new vs,a=new Ol,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function y(b,L,F,O,H,q){let z=O.fog,X=H.geometry,Q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,it=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,pt=t.get(b.envMap||Q,it),rt=pt&&pt.mapping===Ar?pt.image.height:null,ot=d[b.type];b.precision!==null&&(u=n.getMaxPrecision(b.precision),u!==b.precision&&Zt("WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=ft!==void 0?ft.length:0,_t=0;X.morphAttributes.position!==void 0&&(_t=1),X.morphAttributes.normal!==void 0&&(_t=2),X.morphAttributes.color!==void 0&&(_t=3);let qt,Nt,Bt,st;if(ot){let te=Wn[ot];qt=te.vertexShader,Nt=te.fragmentShader}else{qt=b.vertexShader,Nt=b.fragmentShader;let te=a.getVertexShaderStage(b),Jt=a.getFragmentShaderStage(b);a.update(b,te,Jt),Bt=te.id,st=Jt.id}let ht=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),zt=H.isInstancedMesh===!0,Rt=H.isBatchedMesh===!0,Dt=!!b.map,Qt=!!b.matcap,ut=!!pt,yt=!!b.aoMap,Mt=!!b.lightMap,St=!!b.bumpMap&&b.wireframe===!1,wt=!!b.normalMap,Xt=!!b.displacementMap,Ht=!!b.emissiveMap,Yt=!!b.metalnessMap,gt=!!b.roughnessMap,B=b.anisotropy>0,kt=b.clearcoat>0,Pt=b.dispersion>0,D=b.retroreflectivity>0,M=b.iridescence>0,$=b.sheen>0,tt=b.transmission>0,ct=B&&!!b.anisotropyMap,U=kt&&!!b.clearcoatMap,x=kt&&!!b.clearcoatNormalMap,_=kt&&!!b.clearcoatRoughnessMap,S=M&&!!b.iridescenceMap,C=M&&!!b.iridescenceThicknessMap,I=$&&!!b.sheenColorMap,V=$&&!!b.sheenRoughnessMap,k=!!b.specularMap,j=!!b.specularColorMap,K=!!b.specularIntensityMap,xt=tt&&!!b.transmissionMap,R=tt&&!!b.thicknessMap,J=!!b.gradientMap,W=!!b.alphaMap,dt=b.alphaTest>0,mt=!!b.alphaHash,lt=!!b.extensions,bt=Tn;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(bt=i.toneMapping);let At={shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:qt,fragmentShader:Nt,defines:b.defines,customVertexShaderID:Bt,customFragmentShaderID:st,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&H._colorsTexture!==null,instancing:zt,instancingColor:zt&&H.instanceColor!==null,instancingMorph:zt&&H.morphTexture!==null,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:Qt,envMap:ut,envMapMode:ut&&pt.mapping,envMapCubeUVHeight:rt,aoMap:yt,lightMap:Mt,bumpMap:St,normalMap:wt,displacementMap:Xt,emissiveMap:Ht,normalMapObjectSpace:wt&&b.normalMapType===du,normalMapTangentSpace:wt&&b.normalMapType===Ur,packedNormalMap:wt&&b.normalMapType===Ur&&a_(b.normalMap.format),metalnessMap:Yt,roughnessMap:gt,anisotropy:B,anisotropyMap:ct,clearcoat:kt,clearcoatMap:U,clearcoatNormalMap:x,clearcoatRoughnessMap:_,dispersion:Pt,retroreflection:D,iridescence:M,iridescenceMap:S,iridescenceThicknessMap:C,sheen:$,sheenColorMap:I,sheenRoughnessMap:V,specularMap:k,specularColorMap:j,specularIntensityMap:K,transmission:tt,transmissionMap:xt,thicknessMap:R,gradientMap:J,opaque:b.transparent===!1&&b.blending===Ps&&b.alphaToCoverage===!1,alphaMap:W,alphaTest:dt,alphaHash:mt,combine:b.combine,mapUv:Dt&&g(b.map.channel),aoMapUv:yt&&g(b.aoMap.channel),lightMapUv:Mt&&g(b.lightMap.channel),bumpMapUv:St&&g(b.bumpMap.channel),normalMapUv:wt&&g(b.normalMap.channel),displacementMapUv:Xt&&g(b.displacementMap.channel),emissiveMapUv:Ht&&g(b.emissiveMap.channel),metalnessMapUv:Yt&&g(b.metalnessMap.channel),roughnessMapUv:gt&&g(b.roughnessMap.channel),anisotropyMapUv:ct&&g(b.anisotropyMap.channel),clearcoatMapUv:U&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:x&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:S&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:C&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:I&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(b.sheenRoughnessMap.channel),specularMapUv:k&&g(b.specularMap.channel),specularColorMapUv:j&&g(b.specularColorMap.channel),specularIntensityMapUv:K&&g(b.specularIntensityMap.channel),transmissionMapUv:xt&&g(b.transmissionMap.channel),thicknessMapUv:R&&g(b.thicknessMap.channel),alphaMapUv:W&&g(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(wt||B),vertexNormals:!!X.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Dt||W),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||X.attributes.normal===void 0&&wt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Tt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:_t,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:Ht&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vn,flipSided:b.side===Ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:lt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&b.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(b){let L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(let F in b.defines)L.push(F),L.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(p(L,b),w(L,b),L.push(i.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function p(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numSunLights),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numSunLightShadows),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function w(b,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function N(b){let L=d[b.type],F;if(L){let O=Wn[L];F=Pu.clone(O.uniforms)}else F=b.uniforms;return F}function E(b,L){let F=h.get(L);return F!==void 0?++F.usedTimes:(F=new r_(i,L,b,s),l.push(F),h.set(L,F)),F}function v(b){if(--b.usedTimes===0){let L=l.indexOf(b);l[L]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function T(b){a.remove(b)}function P(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:N,acquireProgram:E,releaseProgram:v,releaseShaderCache:T,programs:l,dispose:P}}function l_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ku(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ju(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,y,m,p){let w=i[t];return w===void 0?(w={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[t]=w):(w.id=u.id,w.object=u,w.geometry=d,w.material=g,w.materialVariant=o(u),w.groupOrder=y,w.renderOrder=u.renderOrder,w.z=m,w.group=p),t++,w}function c(u,d,g,y,m,p,w){w.reversedDepth===!0&&(m=-m);let N=a(u,d,g,y,m,p);g.transmission>0?n.push(N):g.transparent===!0?s.push(N):e.push(N)}function l(u,d,g,y,m,p){let w=a(u,d,g,y,m,p);g.transmission>0?n.unshift(w):g.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,d){e.length>1&&e.sort(u||h_),n.length>1&&n.sort(d||Ku),s.length>1&&s.sort(d||Ku)}function f(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function u_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ju,i.set(n,[o])):s>=r.length?(o=new ju,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function f_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Kt};break;case"SpotLight":e={position:new G,direction:new G,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var p_=0;function m_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g_(i){let t=new f_,e=d_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new ue,o=new ue;function a(l){let h=0,f=0,u=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,w=0,N=0,E=0,v=0,T=0,P=0,b=0,L=0,F=0;l.sort(m_);for(let H=0,q=l.length;H<q;H++){let z=l[H],X=z.color,Q=z.intensity,it=z.distance,pt=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ci?pt=z.shadow.map.texture:pt=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=X.r*Q,f+=X.g*Q,u+=X.b*Q;else if(z.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(z.sh.coefficients[rt],Q);F++}else if(z.isSunLight){let rt=t.get(z);if(rt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ot=z.shadow,ft=e.get(z);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[g]=ft,n.sunShadowMap[g]=pt;let vt=ot.getViewportCount();for(let _t=0;_t<vt;_t++)n.sunShadowMatrix[y+_t]=ot.getMatrix(_t),n.sunShadowCascade[y+_t]=ot._cascadeData[_t];y+=vt,g++}n.sun[d]=rt,d++}else if(z.isDirectionalLight){let rt=t.get(z);if(rt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ot=z.shadow,ft=e.get(z);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,n.directionalShadow[m]=ft,n.directionalShadowMap[m]=pt,n.directionalShadowMatrix[m]=z.shadow.matrix,v++}n.directional[m]=rt,m++}else if(z.isSpotLight){let rt=t.get(z);rt.position.setFromMatrixPosition(z.matrixWorld),rt.color.copy(X).multiplyScalar(Q),rt.distance=it,rt.coneCos=Math.cos(z.angle),rt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),rt.decay=z.decay,n.spot[w]=rt;let ot=z.shadow;if(z.map&&(n.spotLightMap[b]=z.map,b++,ot.updateMatrices(z),z.castShadow&&L++),n.spotLightMatrix[w]=ot.matrix,z.castShadow){let ft=e.get(z);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,n.spotShadow[w]=ft,n.spotShadowMap[w]=pt,P++}w++}else if(z.isRectAreaLight){let rt=t.get(z);rt.color.copy(X).multiplyScalar(Q),rt.halfWidth.set(z.width*.5,0,0),rt.halfHeight.set(0,z.height*.5,0),n.rectArea[N]=rt,N++}else if(z.isPointLight){let rt=t.get(z);if(rt.color.copy(z.color).multiplyScalar(z.intensity),rt.distance=z.distance,rt.decay=z.decay,z.castShadow){let ot=z.shadow,ft=e.get(z);ft.shadowIntensity=ot.intensity,ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,ft.shadowCameraNear=ot.camera.near,ft.shadowCameraFar=ot.camera.far,n.pointShadow[p]=ft,n.pointShadowMap[p]=pt,n.pointShadowMatrix[p]=z.shadow.matrix,T++}n.point[p]=rt,p++}else if(z.isHemisphereLight){let rt=t.get(z);rt.skyColor.copy(z.color).multiplyScalar(Q),rt.groundColor.copy(z.groundColor).multiplyScalar(Q),n.hemi[E]=rt,E++}}N>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let O=n.hash;(O.sunLength!==d||O.directionalLength!==m||O.pointLength!==p||O.spotLength!==w||O.rectAreaLength!==N||O.hemiLength!==E||O.numSunShadows!==g||O.numDirectionalShadows!==v||O.numPointShadows!==T||O.numSpotShadows!==P||O.numSpotMaps!==b||O.numLightProbes!==F)&&(n.sun.length=d,n.directional.length=m,n.spot.length=w,n.rectArea.length=N,n.point.length=p,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+b-L,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=F,O.sunLength=d,O.directionalLength=m,O.pointLength=p,O.spotLength=w,O.rectAreaLength=N,O.hemiLength=E,O.numSunShadows=g,O.numDirectionalShadows=v,O.numPointShadows=T,O.numSpotShadows=P,O.numSpotMaps=b,O.numLightProbes=F,n.version=p_++)}function c(l,h){let f=0,u=0,d=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let w=0,N=l.length;w<N;w++){let E=l[w];if(E.isSunLight){let v=n.sun[f];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(p),f++}else if(E.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(E.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let v=n.rectArea[y];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function Qu(i){let t=new g_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function x_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Qu(i),t.set(s,[a])):r>=o.length?(a=new Qu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`,v_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],b_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],tf=new ue,Or=new G,Pl=new G;function M_(i,t,e){let n=new Ms,s=new Et,r=new Et,o=new Me,a=new qo,c=new Yo,l={},h=e.maxTextureSize,f={[wi]:Ke,[Ke]:wi,[Vn]:Vn},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:__,fragmentShader:y_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new xe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gi;let p=this.type;this.render=function(T,P,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Wh&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gi);let L=i.getRenderTarget(),F=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Gn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let q=p!==this.type;q&&P.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(X=>X.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,X=T.length;z<X;z++){let Q=T[z],it=Q.shadow;if(it===void 0){Zt("WebGLShadowMap:",Q,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;s.copy(it.mapSize);let pt=it.getFrameExtents();s.multiply(pt),r.copy(it.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,it.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,it.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(it.camera._reversedDepth=rt,it.map===null||q===!0){if(it.map!==null&&(it.map.depthTexture!==null&&(it.map.depthTexture.dispose(),it.map.depthTexture=null),it.map.dispose()),this.type===Is){if(Q.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}it.map=new nn(s.x,s.y,{format:Ci,type:Cn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),it.map.texture.name=Q.name+".shadowMap",it.map.depthTexture=new yi(s.x,s.y,Rn),it.map.depthTexture.name=Q.name+".shadowMapDepth",it.map.depthTexture.format=On,it.map.depthTexture.compareFunction=null,it.map.depthTexture.minFilter=Ue,it.map.depthTexture.magFilter=Ue}else Q.isPointLight?(it.map=new ja(s.x),it.map.depthTexture=new Bo(s.x,An)):(it.map=new nn(s.x,s.y),it.map.depthTexture=new yi(s.x,s.y,An)),it.map.depthTexture.name=Q.name+".shadowMap",it.map.depthTexture.format=On,this.type===Gi?(it.map.depthTexture.compareFunction=rt?Ya:qa,it.map.depthTexture.minFilter=Be,it.map.depthTexture.magFilter=Be):(it.map.depthTexture.compareFunction=null,it.map.depthTexture.minFilter=Ue,it.map.depthTexture.magFilter=Ue);it.camera.updateProjectionMatrix()}it.map.isWebGLCubeRenderTarget!==!0&&(it.map.width!==s.x||it.map.height!==s.y)&&it.map.setSize(s.x,s.y);let ot=it.map.isWebGLCubeRenderTarget?6:it.getViewportCount();Q.isPointLight!==!0&&it.updateMatrices(Q,b);for(let ft=0;ft<ot;ft++){let vt=it.getCamera(ft);if(Q.isPointLight){let _t=it.camera,qt=it.matrix,Nt=Q.distance||_t.far;Nt!==_t.far&&(_t.far=Nt,_t.updateProjectionMatrix()),Or.setFromMatrixPosition(Q.matrixWorld),_t.position.copy(Or),Pl.copy(_t.position),Pl.add(v_[ft]),_t.up.copy(b_[ft]),_t.lookAt(Pl),_t.updateMatrixWorld(),qt.makeTranslation(-Or.x,-Or.y,-Or.z),tf.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),it._frustum.setFromProjectionMatrix(tf,_t.coordinateSystem,_t.reversedDepth)}if(it.map.isWebGLCubeRenderTarget)i.setRenderTarget(it.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(it.map),i.clear());let _t=it.getViewport(ft);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),H.viewport(o)}n=it.getFrustum(ft),E(P,b,vt,Q,this.type)}it.isPointLightShadow!==!0&&this.type===Is&&w(it,b),it.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,F,O)};function w(T,P){let b=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new nn(s.x,s.y,{format:Ci,type:Cn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,b,u,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,b,d,y,null)}function N(T,P,b,L){let F=null,O=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)F=O;else if(F=b.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let H=F.uuid,q=P.uuid,z=l[H];z===void 0&&(z={},l[H]=z);let X=z[q];X===void 0&&(X=F.clone(),z[q]=X,P.addEventListener("dispose",v)),F=X}if(F.visible=P.visible,F.wireframe=P.wireframe,L===Is?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:f[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let H=i.properties.get(F);H.light=b}return F}function E(T,P,b,L,F){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Is)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let q=t.update(T),z=T.material;if(Array.isArray(z)){let X=q.groups;for(let Q=0,it=X.length;Q<it;Q++){let pt=X[Q],rt=z[pt.materialIndex];if(rt&&rt.visible){let ot=N(T,rt,L,F);T.onBeforeShadow(i,T,P,b,q,ot,pt),i.renderBufferDirect(b,null,q,ot,T,pt),T.onAfterShadow(i,T,P,b,q,ot,pt)}}}else if(z.visible){let X=N(T,z,L,F);T.onBeforeShadow(i,T,P,b,q,X,null),i.renderBufferDirect(b,null,q,X,T,null),T.onAfterShadow(i,T,P,b,q,X,null)}}let H=T.children;for(let q=0,z=H.length;q<z;q++)E(H[q],P,b,L,F)}function v(T){T.target.removeEventListener("dispose",v);for(let b in l){let L=l[b],F=T.target.uuid;F in L&&(L[F].dispose(),delete L[F])}}}function S_(i,t){function e(){let R=!1,J=new Me,W=null,dt=new Me(0,0,0,0);return{setMask:function(mt){W!==mt&&!R&&(i.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){R=mt},setClear:function(mt,lt,bt,At,te){te===!0&&(mt*=At,lt*=At,bt*=At),J.set(mt,lt,bt,At),dt.equals(J)===!1&&(i.clearColor(mt,lt,bt,At),dt.copy(J))},reset:function(){R=!1,W=null,dt.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,W=null,dt=null,mt=null;return{setReversed:function(lt){if(J!==lt){let bt=t.get("EXT_clip_control");lt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),J=lt;let At=mt;mt=null,this.setClear(At)}},getReversed:function(){return J},setTest:function(lt){lt?ht(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(lt){W!==lt&&!R&&(i.depthMask(lt),W=lt)},setFunc:function(lt){if(J&&(lt=wu[lt]),dt!==lt){switch(lt){case Mo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case wo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case Ao:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=lt}},setLocked:function(lt){R=lt},setClear:function(lt){mt!==lt&&(mt=lt,J&&(lt=1-lt),i.clearDepth(lt))},reset:function(){R=!1,W=null,dt=null,mt=null,J=!1}}}function s(){let R=!1,J=null,W=null,dt=null,mt=null,lt=null,bt=null,At=null,te=null;return{setTest:function(Jt){R||(Jt?ht(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Jt){J!==Jt&&!R&&(i.stencilMask(Jt),J=Jt)},setFunc:function(Jt,fe,pe){(W!==Jt||dt!==fe||mt!==pe)&&(i.stencilFunc(Jt,fe,pe),W=Jt,dt=fe,mt=pe)},setOp:function(Jt,fe,pe){(lt!==Jt||bt!==fe||At!==pe)&&(i.stencilOp(Jt,fe,pe),lt=Jt,bt=fe,At=pe)},setLocked:function(Jt){R=Jt},setClear:function(Jt){te!==Jt&&(i.clearStencil(Jt),te=Jt)},reset:function(){R=!1,J=null,W=null,dt=null,mt=null,lt=null,bt=null,At=null,te=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,w=null,N=null,E=null,v=null,T=null,P=null,b=new Kt(0,0,0),L=0,F=!1,O=null,H=null,q=null,z=null,X=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,pt=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),it=pt>=1):rt.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),it=pt>=2);let ot=null,ft={},vt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),qt=new Me().fromArray(vt),Nt=new Me().fromArray(_t);function Bt(R,J,W,dt){let mt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(R,lt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<W;bt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(J+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return lt}let st={};st[i.TEXTURE_2D]=Bt(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=Bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=Bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=Bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(ms),St(!1),wt(Qc),ht(i.CULL_FACE),yt(Gn);function ht(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Tt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function zt(R,J){return u[R]!==J?(i.bindFramebuffer(R,J),u[R]=J,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Rt(R,J){let W=g,dt=!1;if(R){W=d.get(J),W===void 0&&(W=[],d.set(J,W));let mt=R.textures;if(W.length!==mt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,bt=mt.length;lt<bt;lt++)W[lt]=i.COLOR_ATTACHMENT0+lt;W.length=mt.length,dt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,dt=!0);dt&&i.drawBuffers(W)}function Dt(R){return y!==R?(i.useProgram(R),y=R,!0):!1}let Qt={[Hi]:i.FUNC_ADD,[qh]:i.FUNC_SUBTRACT,[Yh]:i.FUNC_REVERSE_SUBTRACT};Qt[Zh]=i.MIN,Qt[Jh]=i.MAX;let ut={[$h]:i.ZERO,[Kh]:i.ONE,[jh]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[su]:i.SRC_ALPHA_SATURATE,[nu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[iu]:i.ONE_MINUS_DST_COLOR,[eu]:i.ONE_MINUS_DST_ALPHA,[ru]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[au]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(R,J,W,dt,mt,lt,bt,At,te,Jt){if(R===Gn){m===!0&&(Tt(i.BLEND),m=!1);return}if(m===!1&&(ht(i.BLEND),m=!0),R!==Xh){if(R!==p||Jt!==F){if((w!==Hi||v!==Hi)&&(i.blendEquation(i.FUNC_ADD),w=Hi,v=Hi),Jt)switch(R){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",R);break}else switch(R){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",R);break}N=null,E=null,T=null,P=null,b.set(0,0,0),L=0,p=R,F=Jt}return}mt=mt||J,lt=lt||W,bt=bt||dt,(J!==w||mt!==v)&&(i.blendEquationSeparate(Qt[J],Qt[mt]),w=J,v=mt),(W!==N||dt!==E||lt!==T||bt!==P)&&(i.blendFuncSeparate(ut[W],ut[dt],ut[lt],ut[bt]),N=W,E=dt,T=lt,P=bt),(At.equals(b)===!1||te!==L)&&(i.blendColor(At.r,At.g,At.b,te),b.copy(At),L=te),p=R,F=!1}function Mt(R,J){R.side===Vn?Tt(i.CULL_FACE):ht(i.CULL_FACE);let W=R.side===Ke;J&&(W=!W),St(W),R.blending===Ps&&R.transparent===!1?yt(Gn):yt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let dt=R.stencilWrite;a.setTest(dt),dt&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ht(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(R){O!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),O=R)}function wt(R){R!==Gh?(ht(i.CULL_FACE),R!==H&&(R===Qc?i.cullFace(i.BACK):R===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),H=R}function Xt(R){R!==q&&(it&&i.lineWidth(R),q=R)}function Ht(R,J,W){R?(ht(i.POLYGON_OFFSET_FILL),(z!==J||X!==W)&&(z=J,X=W,o.getReversed()&&(J=-J),i.polygonOffset(J,W))):Tt(i.POLYGON_OFFSET_FILL)}function Yt(R){R?ht(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function gt(R){R===void 0&&(R=i.TEXTURE0+Q-1),ot!==R&&(i.activeTexture(R),ot=R)}function B(R,J,W){W===void 0&&(ot===null?W=i.TEXTURE0+Q-1:W=ot);let dt=ft[W];dt===void 0&&(dt={type:void 0,texture:void 0},ft[W]=dt),(dt.type!==R||dt.texture!==J)&&(ot!==W&&(i.activeTexture(W),ot=W),i.bindTexture(R,J||st[R]),dt.type=R,dt.texture=J)}function kt(){let R=ft[ot];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Pt(){try{i.compressedTexImage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function M(){try{i.texSubImage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function $(){try{i.texSubImage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function U(){try{i.texStorage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function x(){try{i.texStorage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function _(){try{i.texImage2D(...arguments)}catch(R){$t("WebGLState:",R)}}function S(){try{i.texImage3D(...arguments)}catch(R){$t("WebGLState:",R)}}function C(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function I(R,J){f[R]!==J&&(i.pixelStorei(R,J),f[R]=J)}function V(R){qt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),qt.copy(R))}function k(R){Nt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Nt.copy(R))}function j(R,J){let W=l.get(J);W===void 0&&(W=new WeakMap,l.set(J,W));let dt=W.get(R);dt===void 0&&(dt=i.getUniformBlockIndex(J,R.name),W.set(R,dt))}function K(R,J){let dt=l.get(J).get(R);c.get(J)!==dt&&(i.uniformBlockBinding(J,dt,R.__bindingPointIndex),c.set(J,dt))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ot=null,ft={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,w=null,N=null,E=null,v=null,T=null,P=null,b=new Kt(0,0,0),L=0,F=!1,O=null,H=null,q=null,z=null,X=null,qt.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Tt,bindFramebuffer:zt,drawBuffers:Rt,useProgram:Dt,setBlending:yt,setMaterial:Mt,setFlipSided:St,setCullFace:wt,setLineWidth:Xt,setPolygonOffset:Ht,setScissorTest:Yt,activeTexture:gt,bindTexture:B,unbindTexture:kt,compressedTexImage2D:Pt,compressedTexImage3D:D,texImage2D:_,texImage3D:S,pixelStorei:I,getParameter:C,updateUBOMapping:j,uniformBlockBinding:K,texStorage2D:U,texStorage3D:x,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:tt,compressedTexSubImage3D:ct,scissor:V,viewport:k,reset:xt}}function E_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,M){return g?new OffscreenCanvas(D,M):nr("canvas")}function m(D,M,$){let tt=1,ct=Pt(D);if((ct.width>$||ct.height>$)&&(tt=$/Math.max(ct.width,ct.height)),tt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let U=Math.floor(tt*ct.width),x=Math.floor(tt*ct.height);u===void 0&&(u=y(U,x));let _=M?y(U,x):u;return _.width=U,_.height=x,_.getContext("2d").drawImage(D,0,0,U,x),Zt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+U+"x"+x+")."),_}else return"data"in D&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),D;return D}function p(D){return D.generateMipmaps}function w(D){i.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,M,$,tt,ct,U=!1){if(D!==null){if(i[D]!==void 0)return i[D];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let x;tt&&(x=t.get("EXT_texture_norm16"),x||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _=M;if(M===i.RED&&($===i.FLOAT&&(_=i.R32F),$===i.HALF_FLOAT&&(_=i.R16F),$===i.UNSIGNED_BYTE&&(_=i.R8),$===i.UNSIGNED_SHORT&&x&&(_=x.R16_EXT),$===i.SHORT&&x&&(_=x.R16_SNORM_EXT)),M===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(_=i.R8UI),$===i.UNSIGNED_SHORT&&(_=i.R16UI),$===i.UNSIGNED_INT&&(_=i.R32UI),$===i.BYTE&&(_=i.R8I),$===i.SHORT&&(_=i.R16I),$===i.INT&&(_=i.R32I)),M===i.RG&&($===i.FLOAT&&(_=i.RG32F),$===i.HALF_FLOAT&&(_=i.RG16F),$===i.UNSIGNED_BYTE&&(_=i.RG8),$===i.UNSIGNED_SHORT&&x&&(_=x.RG16_EXT),$===i.SHORT&&x&&(_=x.RG16_SNORM_EXT)),M===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(_=i.RG8UI),$===i.UNSIGNED_SHORT&&(_=i.RG16UI),$===i.UNSIGNED_INT&&(_=i.RG32UI),$===i.BYTE&&(_=i.RG8I),$===i.SHORT&&(_=i.RG16I),$===i.INT&&(_=i.RG32I)),M===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(_=i.RGB8UI),$===i.UNSIGNED_SHORT&&(_=i.RGB16UI),$===i.UNSIGNED_INT&&(_=i.RGB32UI),$===i.BYTE&&(_=i.RGB8I),$===i.SHORT&&(_=i.RGB16I),$===i.INT&&(_=i.RGB32I)),M===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(_=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(_=i.RGBA16UI),$===i.UNSIGNED_INT&&(_=i.RGBA32UI),$===i.BYTE&&(_=i.RGBA8I),$===i.SHORT&&(_=i.RGBA16I),$===i.INT&&(_=i.RGBA32I)),M===i.RGB&&($===i.UNSIGNED_SHORT&&x&&(_=x.RGB16_EXT),$===i.SHORT&&x&&(_=x.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(_=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(_=i.R11F_G11F_B10F)),M===i.RGBA){let S=U?er:oe.getTransfer(ct);$===i.FLOAT&&(_=i.RGBA32F),$===i.HALF_FLOAT&&(_=i.RGBA16F),$===i.UNSIGNED_BYTE&&(_=S===he?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&x&&(_=x.RGBA16_EXT),$===i.SHORT&&x&&(_=x.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(_=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(_=i.RGB5_A1)}return(_===i.R16F||_===i.R32F||_===i.RG16F||_===i.RG32F||_===i.RGBA16F||_===i.RGBA32F)&&t.get("EXT_color_buffer_float"),_}function v(D,M){let $;return D?M===null||M===An||M===Ns?$=i.DEPTH24_STENCIL8:M===Rn?$=i.DEPTH32F_STENCIL8:M===Ls&&($=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===An||M===Ns?$=i.DEPTH_COMPONENT24:M===Rn?$=i.DEPTH_COMPONENT32F:M===Ls&&($=i.DEPTH_COMPONENT16),$}function T(D,M){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ue&&D.minFilter!==Be?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function P(D){let M=D.target;M.removeEventListener("dispose",P),L(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function b(D){let M=D.target;M.removeEventListener("dispose",b),O(M)}function L(D){let M=n.get(D);if(M.__webglInit===void 0)return;let $=D.source,tt=d.get($);if(tt){let ct=tt[M.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&F(D),Object.keys(tt).length===0&&d.delete($)}n.remove(D)}function F(D){let M=n.get(D);i.deleteTexture(M.__webglTexture);let $=D.source,tt=d.get($);delete tt[M.__cacheKey],o.memory.textures--}function O(D){let M=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let ct=0;ct<M.__webglFramebuffer[tt].length;ct++)i.deleteFramebuffer(M.__webglFramebuffer[tt][ct]);else i.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[tt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let $=D.textures;for(let tt=0,ct=$.length;tt<ct;tt++){let U=n.get($[tt]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),o.memory.textures--),n.remove($[tt])}n.remove(D)}let H=0;function q(){H=0}function z(){return H}function X(D){H=D}function Q(){let D=H;return D>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,D}function it(D){let M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function pt(D,M){let $=n.get(D);if(D.isVideoTexture&&B(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){let tt=D.image;if(tt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt($,D,M);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+M)}function rt(D,M){let $=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Tt($,D,M);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+M)}function ot(D,M){let $=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Tt($,D,M);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+M)}function ft(D,M){let $=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&$.__version!==D.version){zt($,D,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+M)}let vt={[Ui]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Co]:i.MIRRORED_REPEAT},_t={[Ue]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},qt={[mu]:i.NEVER,[vu]:i.ALWAYS,[gu]:i.LESS,[qa]:i.LEQUAL,[xu]:i.EQUAL,[Ya]:i.GEQUAL,[_u]:i.GREATER,[yu]:i.NOTEQUAL};function Nt(D,M){if(M.type===Rn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Be||M.magFilter===la||M.magFilter===Rr||M.magFilter===Ai||M.minFilter===Be||M.minFilter===la||M.minFilter===Rr||M.minFilter===Ai)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,vt[M.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,vt[M.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,vt[M.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,_t[M.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,_t[M.minFilter]),M.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,qt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ue||M.minFilter!==Rr&&M.minFilter!==Ai||M.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Bt(D,M){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",P));let tt=M.source,ct=d.get(tt);ct===void 0&&(ct={},d.set(tt,ct));let U=it(M);if(U!==D.__cacheKey){ct[U]===void 0&&(ct[U]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ct[U].usedTimes++;let x=ct[D.__cacheKey];x!==void 0&&(ct[D.__cacheKey].usedTimes--,x.usedTimes===0&&F(M)),D.__cacheKey=U,D.__webglTexture=ct[U].texture}return $}function st(D,M,$){return Math.floor(Math.floor(D/$)/M)}function ht(D,M,$,tt){let U=D.updateRanges;if(U.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,$,tt,M.data);else{U.sort((I,V)=>I.start-V.start);let x=0;for(let I=1;I<U.length;I++){let V=U[x],k=U[I],j=V.start+V.count,K=st(k.start,M.width,4),xt=st(V.start,M.width,4);k.start<=j+1&&K===xt&&st(k.start+k.count-1,M.width,4)===K?V.count=Math.max(V.count,k.start+k.count-V.start):(++x,U[x]=k)}U.length=x+1;let _=e.getParameter(i.UNPACK_ROW_LENGTH),S=e.getParameter(i.UNPACK_SKIP_PIXELS),C=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let I=0,V=U.length;I<V;I++){let k=U[I],j=Math.floor(k.start/4),K=Math.ceil(k.count/4),xt=j%M.width,R=Math.floor(j/M.width),J=K,W=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,R),e.texSubImage2D(i.TEXTURE_2D,0,xt,R,J,W,$,tt,M.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,_),e.pixelStorei(i.UNPACK_SKIP_PIXELS,S),e.pixelStorei(i.UNPACK_SKIP_ROWS,C)}}function Tt(D,M,$){let tt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=i.TEXTURE_3D);let ct=Bt(D,M),U=M.source;e.bindTexture(tt,D.__webglTexture,i.TEXTURE0+$);let x=n.get(U);if(U.version!==x.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let W=oe.getPrimaries(oe.workingColorSpace),dt=M.colorSpace===ii?null:oe.getPrimaries(M.colorSpace),mt=M.colorSpace===ii||W===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let S=m(M.image,!1,s.maxTextureSize);S=kt(M,S);let C=r.convert(M.format,M.colorSpace),I=r.convert(M.type),V=E(M.internalFormat,C,I,M.normalized,M.colorSpace,M.isVideoTexture);Nt(tt,M);let k,j=M.mipmaps,K=M.isVideoTexture!==!0,xt=x.__version===void 0||ct===!0,R=U.dataReady,J=T(M,S);if(M.isDepthTexture)V=v(M.format===Ri,M.type),xt&&(K?e.texStorage2D(i.TEXTURE_2D,1,V,S.width,S.height):e.texImage2D(i.TEXTURE_2D,0,V,S.width,S.height,0,C,I,null));else if(M.isDataTexture)if(j.length>0){K&&xt&&e.texStorage2D(i.TEXTURE_2D,J,V,j[0].width,j[0].height);for(let W=0,dt=j.length;W<dt;W++)k=j[W],K?R&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,k.width,k.height,C,I,k.data):e.texImage2D(i.TEXTURE_2D,W,V,k.width,k.height,0,C,I,k.data);M.generateMipmaps=!1}else K?(xt&&e.texStorage2D(i.TEXTURE_2D,J,V,S.width,S.height),R&&ht(M,S,C,I)):e.texImage2D(i.TEXTURE_2D,0,V,S.width,S.height,0,C,I,S.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){K&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,V,j[0].width,j[0].height,S.depth);for(let W=0,dt=j.length;W<dt;W++)if(k=j[W],M.format!==_n)if(C!==null)if(K){if(R)if(M.layerUpdates.size>0){let mt=wl(k.width,k.height,M.format,M.type);for(let lt of M.layerUpdates){let bt=k.data.subarray(lt*mt/k.data.BYTES_PER_ELEMENT,(lt+1)*mt/k.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,lt,k.width,k.height,1,C,bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,k.width,k.height,S.depth,C,k.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,V,k.width,k.height,S.depth,0,k.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,k.width,k.height,S.depth,C,I,k.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,V,k.width,k.height,S.depth,0,C,I,k.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{K&&xt&&e.texStorage2D(i.TEXTURE_2D,J,V,j[0].width,j[0].height);for(let W=0,dt=j.length;W<dt;W++)k=j[W],M.format!==_n?C!==null?K?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,k.width,k.height,C,k.data):e.compressedTexImage2D(i.TEXTURE_2D,W,V,k.width,k.height,0,k.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?R&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,k.width,k.height,C,I,k.data):e.texImage2D(i.TEXTURE_2D,W,V,k.width,k.height,0,C,I,k.data)}else if(M.isDataArrayTexture)if(K){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,V,S.width,S.height,S.depth),R)if(M.layerUpdates.size>0){let W=wl(S.width,S.height,M.format,M.type);for(let dt of M.layerUpdates){let mt=S.data.subarray(dt*W/S.data.BYTES_PER_ELEMENT,(dt+1)*W/S.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,S.width,S.height,1,C,I,mt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,C,I,S.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,V,S.width,S.height,S.depth,0,C,I,S.data);else if(M.isData3DTexture)K?(xt&&e.texStorage3D(i.TEXTURE_3D,J,V,S.width,S.height,S.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,C,I,S.data)):e.texImage3D(i.TEXTURE_3D,0,V,S.width,S.height,S.depth,0,C,I,S.data);else if(M.isFramebufferTexture){if(xt)if(K)e.texStorage2D(i.TEXTURE_2D,J,V,S.width,S.height);else{let W=S.width,dt=S.height;for(let mt=0;mt<J;mt++)e.texImage2D(i.TEXTURE_2D,mt,V,W,dt,0,C,I,null),W>>=1,dt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let W=i.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),S.parentNode!==W){W.appendChild(S),f.add(M),W.onpaint=dt=>{let mt=dt.changedElements;for(let lt of f)mt.includes(lt.image)&&(lt.needsUpdate=!0)},W.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,S);else{let mt=i.RGBA,lt=i.RGBA,bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,lt,bt,S)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(j.length>0){if(K&&xt){let W=Pt(j[0]);e.texStorage2D(i.TEXTURE_2D,J,V,W.width,W.height)}for(let W=0,dt=j.length;W<dt;W++)k=j[W],K?R&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,C,I,k):e.texImage2D(i.TEXTURE_2D,W,V,C,I,k);M.generateMipmaps=!1}else if(K){if(xt){let W=Pt(S);e.texStorage2D(i.TEXTURE_2D,J,V,W.width,W.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,C,I,S)}else e.texImage2D(i.TEXTURE_2D,0,V,C,I,S);p(M)&&w(tt),x.__version=U.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function zt(D,M,$){if(M.image.length!==6)return;let tt=Bt(D,M),ct=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+$);let U=n.get(ct);if(ct.version!==U.__version||tt===!0){e.activeTexture(i.TEXTURE0+$);let x=oe.getPrimaries(oe.workingColorSpace),_=M.colorSpace===ii?null:oe.getPrimaries(M.colorSpace),S=M.colorSpace===ii||x===_?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);let C=M.isCompressedTexture||M.image[0].isCompressedTexture,I=M.image[0]&&M.image[0].isDataTexture,V=[];for(let lt=0;lt<6;lt++)!C&&!I?V[lt]=m(M.image[lt],!0,s.maxCubemapSize):V[lt]=I?M.image[lt].image:M.image[lt],V[lt]=kt(M,V[lt]);let k=V[0],j=r.convert(M.format,M.colorSpace),K=r.convert(M.type),xt=E(M.internalFormat,j,K,M.normalized,M.colorSpace),R=M.isVideoTexture!==!0,J=U.__version===void 0||tt===!0,W=ct.dataReady,dt=T(M,k);Nt(i.TEXTURE_CUBE_MAP,M);let mt;if(C){R&&J&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,xt,k.width,k.height);for(let lt=0;lt<6;lt++){mt=V[lt].mipmaps;for(let bt=0;bt<mt.length;bt++){let At=mt[bt];M.format!==_n?j!==null?R?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,At.width,At.height,j,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,xt,At.width,At.height,0,At.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,At.width,At.height,j,K,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,xt,At.width,At.height,0,j,K,At.data)}}}else{if(mt=M.mipmaps,R&&J){mt.length>0&&dt++;let lt=Pt(V[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,xt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(I){R?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,V[lt].width,V[lt].height,j,K,V[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,xt,V[lt].width,V[lt].height,0,j,K,V[lt].data);for(let bt=0;bt<mt.length;bt++){let te=mt[bt].image[lt].image;R?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,te.width,te.height,j,K,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,xt,te.width,te.height,0,j,K,te.data)}}else{R?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,j,K,V[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,xt,j,K,V[lt]);for(let bt=0;bt<mt.length;bt++){let At=mt[bt];R?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,j,K,At.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,xt,j,K,At.image[lt])}}}p(M)&&w(i.TEXTURE_CUBE_MAP),U.__version=ct.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Rt(D,M,$,tt,ct,U){let x=r.convert($.format,$.colorSpace),_=r.convert($.type),S=E($.internalFormat,x,_,$.normalized,$.colorSpace),C=n.get(M),I=n.get($);if(I.__renderTarget=M,!C.__hasExternalTextures){let V=Math.max(1,M.width>>U),k=Math.max(1,M.height>>U);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,U,S,V,k,M.depth,0,x,_,null):e.texImage2D(ct,U,S,V,k,0,x,_,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),gt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,ct,I.__webglTexture,0,Yt(M)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,ct,I.__webglTexture,U),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(D,M,$){if(i.bindRenderbuffer(i.RENDERBUFFER,D),M.depthBuffer){let tt=M.depthTexture,ct=tt&&tt.isDepthTexture?tt.type:null,U=v(M.stencilBuffer,ct),x=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(M),U,M.width,M.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(M),U,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,U,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,D)}else{let tt=M.textures;for(let ct=0;ct<tt.length;ct++){let U=tt[ct],x=r.convert(U.format,U.colorSpace),_=r.convert(U.type),S=E(U.internalFormat,x,_,U.normalized,U.colorSpace);gt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(M),S,M.width,M.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(M),S,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,S,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(D,M,$){let tt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(M.depthTexture);if(ct.__renderTarget=M,(!ct.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),tt){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,M.depthTexture);let C=r.convert(M.depthTexture.format),I=r.convert(M.depthTexture.type),V;M.depthTexture.format===On?V=i.DEPTH_COMPONENT24:M.depthTexture.format===Ri&&(V=i.DEPTH24_STENCIL8);for(let k=0;k<6;k++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,V,M.width,M.height,0,C,I,null)}}else pt(M.depthTexture,0);let U=ct.__webglTexture,x=Yt(M),_=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,S=M.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===On)gt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,S,_,U,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,S,_,U,0);else if(M.depthTexture.format===Ri)gt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,S,_,U,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,S,_,U,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(D){let M=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){let tt=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),tt){let ct=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,tt.removeEventListener("dispose",ct)};tt.addEventListener("dispose",ct),M.__depthDisposeCallback=ct}M.__boundDepthTexture=tt}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let tt=0;tt<6;tt++)Qt(M.__webglFramebuffer[tt],D,tt);else{let tt=D.texture.mipmaps;tt&&tt.length>0?Qt(M.__webglFramebuffer[0],D,0):Qt(M.__webglFramebuffer,D,0)}else if($){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]===void 0)M.__webglDepthbuffer[tt]=i.createRenderbuffer(),Dt(M.__webglDepthbuffer[tt],D,!1);else{let ct=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=M.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,U)}}else{let tt=D.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Dt(M.__webglDepthbuffer,D,!1);else{let ct=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,U)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(D,M,$){let tt=n.get(D);M!==void 0&&Rt(tt.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&ut(D)}function Mt(D){let M=D.texture,$=n.get(D),tt=n.get(M);D.addEventListener("dispose",b);let ct=D.textures,U=D.isWebGLCubeRenderTarget===!0,x=ct.length>1;if(x||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=M.version,o.memory.textures++),U){$.__webglFramebuffer=[];for(let _=0;_<6;_++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[_]=[];for(let S=0;S<M.mipmaps.length;S++)$.__webglFramebuffer[_][S]=i.createFramebuffer()}else $.__webglFramebuffer[_]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let _=0;_<M.mipmaps.length;_++)$.__webglFramebuffer[_]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(x)for(let _=0,S=ct.length;_<S;_++){let C=n.get(ct[_]);C.__webglTexture===void 0&&(C.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&gt(D)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _=0;_<ct.length;_++){let S=ct[_];$.__webglColorRenderbuffer[_]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[_]);let C=r.convert(S.format,S.colorSpace),I=r.convert(S.type),V=E(S.internalFormat,C,I,S.normalized,S.colorSpace,D.isXRRenderTarget===!0),k=Yt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,k,V,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_,i.RENDERBUFFER,$.__webglColorRenderbuffer[_])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,M);for(let _=0;_<6;_++)if(M.mipmaps&&M.mipmaps.length>0)for(let S=0;S<M.mipmaps.length;S++)Rt($.__webglFramebuffer[_][S],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,S);else Rt($.__webglFramebuffer[_],D,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,0);p(M)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(x){for(let _=0,S=ct.length;_<S;_++){let C=ct[_],I=n.get(C),V=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(V=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,I.__webglTexture),Nt(V,C),Rt($.__webglFramebuffer,D,C,i.COLOR_ATTACHMENT0+_,V,0),p(C)&&w(V)}e.unbindTexture()}else{let _=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_,tt.__webglTexture),Nt(_,M),M.mipmaps&&M.mipmaps.length>0)for(let S=0;S<M.mipmaps.length;S++)Rt($.__webglFramebuffer[S],D,M,i.COLOR_ATTACHMENT0,_,S);else Rt($.__webglFramebuffer,D,M,i.COLOR_ATTACHMENT0,_,0);p(M)&&w(_),e.unbindTexture()}D.depthBuffer&&ut(D)}function St(D){let M=D.textures;for(let $=0,tt=M.length;$<tt;$++){let ct=M[$];if(p(ct)){let U=N(D),x=n.get(ct).__webglTexture;e.bindTexture(U,x),w(U),e.unbindTexture()}}}let wt=[],Xt=[];function Ht(D){if(D.samples>0){if(gt(D)===!1){let M=D.textures,$=D.width,tt=D.height,ct=i.COLOR_BUFFER_BIT,U=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x=n.get(D),_=M.length>1;if(_)for(let C=0;C<M.length;C++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,x.__webglMultisampledFramebuffer);let S=D.texture.mipmaps;S&&S.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglFramebuffer);for(let C=0;C<M.length;C++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),_){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,x.__webglColorRenderbuffer[C]);let I=n.get(M[C]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,$,tt,0,0,$,tt,ct,i.NEAREST),c===!0&&(wt.length=0,Xt.length=0,wt.push(i.COLOR_ATTACHMENT0+C),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(wt.push(U),Xt.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_)for(let C=0;C<M.length;C++){e.bindFramebuffer(i.FRAMEBUFFER,x.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,x.__webglColorRenderbuffer[C]);let I=n.get(M[C]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){let M=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Yt(D){return Math.min(s.maxSamples,D.samples)}function gt(D){let M=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function B(D){let M=o.render.frame;h.get(D)!==M&&(h.set(D,M),D.update())}function kt(D,M){let $=D.colorSpace,tt=D.format,ct=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==tr&&$!==ii&&(oe.getTransfer($)===he?(tt!==_n||ct!==sn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",$)),M}function Pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.getTextureUnits=z,this.setTextureUnits=X,this.setTexture2D=pt,this.setTexture2DArray=rt,this.setTexture3D=ot,this.setTextureCube=ft,this.rebindTextures=yt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function w_(i,t){function e(n,s=ii){let r,o=oe.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ul)return i.BYTE;if(n===fl)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===ml)return i.ALPHA;if(n===gl)return i.RGB;if(n===_n)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===da)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===Cr||n===Ir||n===Pr||n===Lr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===xa||n===_a||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===ba||n===Ma||n===Sa||n===Ea||n===Nr||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===ba)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sa)return r.COMPRESSED_R11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Nr)return r.COMPRESSED_RG11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Na||n===Da||n===Ua||n===Fa||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ha||n===Wa||n===Dr||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:T_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kl=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new zl,p={},w=e.getContextAttributes(),N=null,E=null,v=[],T=[],P=new Et,b=null,L=null,F=new Ze;F.viewport=new Me;let O=new Ze;O.viewport=new Me;let H=[F,O],q=new ra,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ht=v[st];return ht===void 0&&(ht=new bs,v[st]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(st){let ht=v[st];return ht===void 0&&(ht=new bs,v[st]=ht),ht.getGripSpace()},this.getHand=function(st){let ht=v[st];return ht===void 0&&(ht=new bs,v[st]=ht),ht.getHandSpace()};function Q(st){let ht=T.indexOf(st.inputSource);if(ht===-1)return;let Tt=v[ht];Tt!==void 0&&(Tt.update(st.inputSource,st.frame,l||o),Tt.dispatchEvent({type:st.type,data:st.inputSource}))}function it(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",pt);for(let st=0;st<v.length;st++){let ht=T[st];ht!==null&&(T[st]=null,v[st].disconnect(ht))}z=null,X=null,m.reset();for(let st in p)delete p[st];if(t.setRenderTarget(N),d=null,u=null,f=null,s=null,E=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),L!==null){let st=L.camera;st.fov=L.fov,st.zoom=L.zoom,st.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(st){l=st},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(N=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",it),s.addEventListener("inputsourceschange",pt),w.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,zt=null,Rt=null;w.depth&&(Rt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=w.stencil?Ri:On,zt=w.stencil?Ns:An);let Dt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new nn(u.textureWidth,u.textureHeight,{format:_n,type:sn,depthTexture:new yi(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new nn(d.framebufferWidth,d.framebufferHeight,{format:_n,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Bt.setContext(s),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pt(st){for(let ht=0;ht<st.removed.length;ht++){let Tt=st.removed[ht],zt=T.indexOf(Tt);zt>=0&&(T[zt]=null,v[zt].disconnect(Tt))}for(let ht=0;ht<st.added.length;ht++){let Tt=st.added[ht],zt=T.indexOf(Tt);if(zt===-1){for(let Dt=0;Dt<v.length;Dt++)if(Dt>=T.length){T.push(Tt),zt=Dt;break}else if(T[Dt]===null){T[Dt]=Tt,zt=Dt;break}if(zt===-1)break}let Rt=v[zt];Rt&&Rt.connect(Tt)}}let rt=new G,ot=new G;function ft(st,ht,Tt){rt.setFromMatrixPosition(ht.matrixWorld),ot.setFromMatrixPosition(Tt.matrixWorld);let zt=rt.distanceTo(ot),Rt=ht.projectionMatrix.elements,Dt=Tt.projectionMatrix.elements,Qt=Rt[14]/(Rt[10]-1),ut=Rt[14]/(Rt[10]+1),yt=(Rt[9]+1)/Rt[5],Mt=(Rt[9]-1)/Rt[5],St=(Rt[8]-1)/Rt[0],wt=(Dt[8]+1)/Dt[0],Xt=Qt*St,Ht=Qt*wt,Yt=zt/(-St+wt),gt=Yt*-St;if(ht.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(gt),st.translateZ(Yt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Rt[10]===-1)st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let B=Qt+Yt,kt=ut+Yt,Pt=Xt-gt,D=Ht+(zt-gt),M=yt*ut/kt*B,$=Mt*ut/kt*B;st.projectionMatrix.makePerspective(Pt,D,M,$,B,kt),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function vt(st,ht){ht===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ht.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ht=st.near,Tt=st.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),q.near=O.near=F.near=ht,q.far=O.far=F.far=Tt,(z!==q.near||X!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),z=q.near,X=q.far),q.layers.mask=st.layers.mask|6,F.layers.mask=q.layers.mask&-5,O.layers.mask=q.layers.mask&-3;let zt=st.parent,Rt=q.cameras;vt(q,zt);for(let Dt=0;Dt<Rt.length;Dt++)vt(Rt[Dt],zt);Rt.length===2?ft(q,F,O):q.projectionMatrix.copy(F.projectionMatrix),L===null&&st.isPerspectiveCamera&&(L={camera:st,fov:st.fov,zoom:st.zoom}),_t(st,q,zt)};function _t(st,ht,Tt){Tt===null?st.matrix.copy(ht.matrixWorld):(st.matrix.copy(Tt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ht.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=_s*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(st){c=st,u!==null&&(u.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(st){return p[st]};let qt=null;function Nt(st,ht){if(h=ht.getViewerPose(l||o),g=ht,h!==null){let Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let zt=!1;Tt.length!==q.cameras.length&&(q.cameras.length=0,zt=!0);for(let ut=0;ut<Tt.length;ut++){let yt=Tt[ut],Mt=null;if(d!==null)Mt=d.getViewport(yt);else{let wt=f.getViewSubImage(u,yt);Mt=wt.viewport,ut===0&&(t.setRenderTargetTextures(E,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(E))}let St=H[ut];St===void 0&&(St=new Ze,St.layers.enable(ut),St.viewport=new Me,H[ut]=St),St.matrix.fromArray(yt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(yt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ut===0&&(q.matrix.copy(St.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),zt===!0&&q.cameras.push(St)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let ut=f.getDepthInformation(Tt[0]);ut&&ut.isValid&&ut.texture&&m.init(ut,s.renderState)}if(Rt&&Rt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let ut=0;ut<Tt.length;ut++){let yt=Tt[ut].camera;if(yt){let Mt=p[yt];Mt||(Mt=new hr,p[yt]=Mt);let St=f.getCameraImage(yt);Mt.sourceTexture=St}}}}for(let Tt=0;Tt<v.length;Tt++){let zt=T[Tt],Rt=v[Tt];zt!==null&&Rt!==void 0&&Rt.update(zt,ht,l||o)}qt&&qt(st,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Bt=new ef;Bt.setAnimationLoop(Nt),this.setAnimationLoop=function(st){qt=st},this.dispose=function(){}}},R_=new ue,cf=new jt;cf.set(-1,0,0,0,1,0,0,0,1);function C_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ml(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,N,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,N):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p),N=w.envMap,E=w.envMapRotation;N&&(m.envMap.value=N,m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(E)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,N){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=N*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,v){let T=v.program;n.uniformBlockBinding(E,T)}function l(E,v){let T=s[E.id];T===void 0&&(m(E),T=h(E),s[E.id]=T,E.addEventListener("dispose",w));let P=v.program;n.updateUBOMapping(E,P);let b=t.render.frame;r[E.id]!==b&&(u(E),r[E.id]=b)}function h(E){let v=f();E.__bindingPointIndex=v;let T=i.createBuffer(),P=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let v=s[E.id],T=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,L=T.length;b<L;b++){let F=T[b];if(Array.isArray(F))for(let O=0,H=F.length;O<H;O++)d(F[O],b,O,P);else d(F,b,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,v,T,P){if(y(E,v,T,P)===!0){let b=E.__offset,L=E.value;if(Array.isArray(L)){let F=0;for(let O=0;O<L.length;O++){let H=L[O],q=p(H);g(H,E.__data,F),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(L,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,E.__data)}}function g(E,v,T){typeof E=="number"||typeof E=="boolean"?v[0]=E:E.isMatrix3?(v[0]=E.elements[0],v[1]=E.elements[1],v[2]=E.elements[2],v[3]=0,v[4]=E.elements[3],v[5]=E.elements[4],v[6]=E.elements[5],v[7]=0,v[8]=E.elements[6],v[9]=E.elements[7],v[10]=E.elements[8],v[11]=0):ArrayBuffer.isView(E)?v.set(new E.constructor(E.buffer,E.byteOffset,v.length)):E.toArray(v,T)}function y(E,v,T,P){let b=E.value,L=v+"_"+T;if(P[L]===void 0)return typeof b=="number"||typeof b=="boolean"?P[L]=b:ArrayBuffer.isView(b)?P[L]=b.slice():P[L]=b.clone(),!0;{let F=P[L];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return P[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(F.equals(b)===!1)return F.copy(b),!0}}return!1}function m(E){let v=E.uniforms,T=0,P=16;for(let L=0,F=v.length;L<F;L++){let O=Array.isArray(v[L])?v[L]:[v[L]];for(let H=0,q=O.length;H<q;H++){let z=O[H],X=Array.isArray(z.value)?z.value:[z.value];for(let Q=0,it=X.length;Q<it;Q++){let pt=X[Q],rt=p(pt),ot=T%P,ft=ot%rt.boundary,vt=ot+ft;T+=ft,vt!==0&&P-vt<rt.storage&&(T+=P-vt),z.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=rt.storage}}}let b=T%P;return b>0&&(T+=P-b),E.__size=T,E.__cache={},this}function p(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(v.boundary=16,v.storage=E.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",E),v}function w(E){let v=E.target;v.removeEventListener("dispose",w);let T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function N(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:N}}var P_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function L_(){return Hn===null&&(Hn=new Do(P_,16,16,Ci,Cn),Hn.name="DFG_LUT",Hn.minFilter=Be,Hn.magFilter=Be,Hn.wrapS=Un,Hn.wrapT=Un,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var Qa=class{constructor(t={}){let{canvas:e=Mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=sn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=d,m=new Set([ma,pa,da]),p=new Set([sn,An,Ls,Ns,ua,fa]),w=new Uint32Array(4),N=new Int32Array(4),E=new G,v=null,T=null,P=[],b=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,O=!1,H=null,q=null,z=null,X=null;this._outputColorSpace=Re;let Q=0,it=0,pt=null,rt=-1,ot=null,ft=new Me,vt=new Me,_t=null,qt=new Kt(0),Nt=0,Bt=e.width,st=e.height,ht=1,Tt=null,zt=null,Rt=new Me(0,0,Bt,st),Dt=new Me(0,0,Bt,st),Qt=!1,ut=new Ms,yt=!1,Mt=!1,St=new ue,wt=new G,Xt=new Me,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function gt(){return pt===null?ht:1}let B=n;function kt(A,Y){return e.getContext(A,Y)}let Pt,D,M,$,tt,ct,U,x,_,S,C,I,V,k,j,K,xt,R,J,W,dt,mt,lt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",te,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),B===null){let Y="webgl2";if(B=kt(Y,A),B===null)throw kt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}bt()}catch(A){throw e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),$t("WebGLRenderer: "+A.message),A}function bt(){Pt=new z0(B),Pt.init(),dt=new w_(B,Pt),D=new C0(B,Pt,t,dt),M=new S_(B,Pt),D.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),q=B.createFramebuffer(),z=B.createFramebuffer(),X=B.createFramebuffer(),$=new G0(B),tt=new l_,ct=new E_(B,Pt,M,tt,D,dt,$),U=new B0(F),x=new Wp(B),mt=new A0(B,x),_=new k0(B,x,$,mt),S=new W0(B,_,x,mt,$),R=new H0(B,D,ct),j=new I0(tt),C=new c_(F,U,Pt,D,mt,j),I=new C_(F,tt),V=new u_,k=new x_(Pt),xt=new T0(F,U,M,S,g,c),K=new M_(F,S,D),lt=new I_(B,$,D,M),J=new R0(B,Pt,$),W=new V0(B,Pt,$),$.programs=C.programs,F.capabilities=D,F.extensions=Pt,F.properties=tt,F.renderLists=V,F.shadowMap=K,F.state=M,F.info=$}y!==sn&&(L=new q0(y,e.width,e.height,a,s,r));let At=new kl(F,B);this.xr=At,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=Pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(A){A!==void 0&&(ht=A,this.setSize(Bt,st,!1))},this.getSize=function(A){return A.set(Bt,st)},this.setSize=function(A,Y,at=!0){if(At.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=A,st=Y,e.width=Math.floor(A*ht),e.height=Math.floor(Y*ht),at===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(Bt*ht,st*ht).floor()},this.setDrawingBufferSize=function(A,Y,at){Bt=A,st=Y,ht=at,e.width=Math.floor(A*at),e.height=Math.floor(Y*at),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(y===sn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ft)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,Y,at,et){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,Y,at,et),M.viewport(ft.copy(Rt).multiplyScalar(ht).round())},this.getScissor=function(A){return A.copy(Dt)},this.setScissor=function(A,Y,at,et){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,Y,at,et),M.scissor(vt.copy(Dt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(A){M.setScissorTest(Qt=A)},this.setOpaqueSort=function(A){Tt=A},this.setTransparentSort=function(A){zt=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,at=!0){let et=0;if(A){let nt=!1;if(pt!==null){let Lt=pt.texture.format;nt=m.has(Lt)}if(nt){let Lt=pt.texture.type,Ft=p.has(Lt),It=xt.getClearColor(),Vt=xt.getClearAlpha(),Wt=It.r,ee=It.g,re=It.b;Ft?(w[0]=Wt,w[1]=ee,w[2]=re,w[3]=Vt,B.clearBufferuiv(B.COLOR,0,w)):(N[0]=Wt,N[1]=ee,N[2]=re,N[3]=Vt,B.clearBufferiv(B.COLOR,0,N))}else et|=B.COLOR_BUFFER_BIT}Y&&(et|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(et|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&B.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),xt.dispose(),V.dispose(),k.dispose(),tt.dispose(),U.dispose(),S.dispose(),mt.dispose(),lt.dispose(),C.dispose(),At.dispose(),At.removeEventListener("sessionstart",en),At.removeEventListener("sessionend",pn),on.stop()};function te(A){A.preventDefault(),yl("WebGLRenderer: Context Lost."),O=!0}function Jt(){yl("WebGLRenderer: Context Restored."),O=!1;let A=$.autoReset,Y=K.enabled,at=K.autoUpdate,et=K.needsUpdate,nt=K.type;bt(),$.autoReset=A,K.enabled=Y,K.autoUpdate=at,K.needsUpdate=et,K.type=nt}function fe(A){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){let Y=A.target;Y.removeEventListener("dispose",pe),Qe(Y)}function Qe(A){Le(A),tt.remove(A)}function Le(A){let Y=tt.get(A).programs;Y!==void 0&&(Y.forEach(function(at){C.releaseProgram(at)}),A.isShaderMaterial&&C.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,at,et,nt,Lt){Y===null&&(Y=Ht);let Ft=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,It=id(A,Y,at,et,nt);M.setMaterial(et,Ft);let Vt=at.index,Wt=1;if(et.wireframe===!0){if(Vt=_.getWireframeAttribute(at),Vt===void 0)return;Wt=2}let ee=at.drawRange,re=at.attributes.position,Gt=ee.start*Wt,le=(ee.start+ee.count)*Wt;Lt!==null&&(Gt=Math.max(Gt,Lt.start*Wt),le=Math.min(le,(Lt.start+Lt.count)*Wt)),Vt!==null?(Gt=Math.max(Gt,0),le=Math.min(le,Vt.count)):re!=null&&(Gt=Math.max(Gt,0),le=Math.min(le,re.count));let Te=le-Gt;if(Te<0||Te===1/0)return;mt.setup(nt,et,It,at,Vt);let ye,me=J;if(Vt!==null&&(ye=x.get(Vt),me=W,me.setIndex(ye)),nt.isMesh)et.wireframe===!0?(M.setLineWidth(et.wireframeLinewidth*gt()),me.setMode(B.LINES)):me.setMode(B.TRIANGLES);else if(nt.isLine){let ke=et.linewidth;ke===void 0&&(ke=1),M.setLineWidth(ke*gt()),nt.isLineSegments?me.setMode(B.LINES):nt.isLineLoop?me.setMode(B.LINE_LOOP):me.setMode(B.LINE_STRIP)}else nt.isPoints?me.setMode(B.POINTS):nt.isSprite&&me.setMode(B.TRIANGLES);if(nt.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))me.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let ke=nt._multiDrawStarts,Ut=nt._multiDrawCounts,qe=nt._multiDrawCount,ce=Vt?x.get(Vt).bytesPerElement:1,mn=tt.get(et).currentProgram.getUniforms();for(let Nn=0;Nn<qe;Nn++)mn.setValue(B,"_gl_DrawID",Nn),me.render(ke[Nn]/ce,Ut[Nn])}else if(nt.isInstancedMesh)me.renderInstances(Gt,Te,nt.count);else if(at.isInstancedBufferGeometry){let ke=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ut=Math.min(at.instanceCount,ke);me.renderInstances(Gt,Te,Ut)}else me.render(Gt,Te)};function tn(A,Y,at,et){H!==null&&A.isNodeMaterial&&H.setObject(et,A),yt===!0&&j.setState(A,at,!1),A.transparent===!0&&A.side===Vn&&A.forceSinglePass===!1?(A.side=Ke,A.needsUpdate=!0,Yr(A,Y,et),A.side=wi,A.needsUpdate=!0,Yr(A,Y,et),A.side=Vn):Yr(A,Y,et)}this.compile=function(A,Y,at=null){at===null&&(at=A),H!==null&&H.renderStart(A,Y,at),T=k.get(at),T.init(Y),b.push(T),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),A!==at&&A.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(T.pushLight(nt),nt.castShadow&&T.pushShadow(nt))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),Mt=this.localClippingEnabled,yt=j.init(this.clippingPlanes,Mt),yt===!0&&j.setGlobalState(this.clippingPlanes,Y),H!==null&&K.render(T.state.shadowsArray,at,Y);let et=new Set;return A.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Lt=nt.material;if(Lt)if(Array.isArray(Lt))for(let Ft=0;Ft<Lt.length;Ft++){let It=Lt[Ft];tn(It,at,Y,nt),et.add(It)}else tn(Lt,at,Y,nt),et.add(Lt)}),T=b.pop(),H!==null&&H.renderEnd(),et},this.compileAsync=function(A,Y,at=null){let et=this.compile(A,Y,at);return new Promise(nt=>{function Lt(){if(et.forEach(function(Ft){let Vt=tt.get(Ft).currentProgram;(Vt===void 0||Vt.isReady())&&et.delete(Ft)}),et.size===0){nt(A);return}setTimeout(Lt,10)}Pt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Xe=null;function rn(A){Xe&&Xe(A)}function en(){on.stop()}function pn(){on.start()}let on=new ef;on.setAnimationLoop(rn),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(A){Xe=A,At.setAnimationLoop(A),A===null?on.stop():on.start()},At.addEventListener("sessionstart",en),At.addEventListener("sessionend",pn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;H!==null&&H.renderStart(A,Y);let at=At.enabled===!0&&At.isPresenting===!0,et=L!==null&&(pt===null||at)&&L.begin(F,pt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),A.isScene===!0&&A.onBeforeRender(F,A,Y,pt),T=k.get(A,b.length),T.init(Y),T.state.textureUnits=ct.getTextureUnits(),b.push(T),St.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ut.setFromProjectionMatrix(St,Sn,Y.reversedDepth),Mt=this.localClippingEnabled,yt=j.init(this.clippingPlanes,Mt),v=V.get(A,P.length),v.init(),P.push(v),At.enabled===!0&&At.isPresenting===!0){let Ft=F.xr.getDepthSensingMesh();Ft!==null&&Gs(Ft,Y,-1/0,F.sortObjects)}Gs(A,Y,0,F.sortObjects),v.finish(),H!==null&&H.updateLights(T.state.lightsArray),F.sortObjects===!0&&v.sort(Tt,zt),Yt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Yt&&xt.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&j.beginShadows();let nt=T.state.shadowsArray;if(K.render(nt,A,Y),yt===!0&&j.endShadows(),(et&&L.hasRenderPass())===!1){let Ft=v.opaque,It=v.transmissive;if(T.setupLights(),Y.isArrayCamera){let Vt=Y.cameras;if(It.length>0)for(let Wt=0,ee=Vt.length;Wt<ee;Wt++){let re=Vt[Wt];Xr(Ft,It,A,re)}Yt&&xt.render(A);for(let Wt=0,ee=Vt.length;Wt<ee;Wt++){let re=Vt[Wt];Wr(v,A,re,re.viewport)}}else It.length>0&&Xr(Ft,It,A,Y),Yt&&xt.render(A),Wr(v,A,Y)}pt!==null&&it===0&&(ct.updateMultisampleRenderTarget(pt),ct.updateRenderTargetMipmap(pt)),et&&L.end(F),A.isScene===!0&&A.onAfterRender(F,A,Y),mt.resetDefaultState(),rt=-1,ot=null,b.pop(),b.length>0?(T=b[b.length-1],ct.setTextureUnits(T.state.textureUnits),yt===!0&&j.setGlobalState(F.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?v=P[P.length-1]:v=null,H!==null&&H.renderEnd()};function Gs(A,Y,at,et){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ut)){et&&Xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);let Ft=S.update(A),It=A.material;It.visible&&v.push(A,Ft,It,at,Xt.z,null,Y)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ut))){let Ft=S.update(A),It=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xt.copy(A.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Xt.copy(Ft.boundingSphere.center)),Xt.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(It)){let Vt=Ft.groups;for(let Wt=0,ee=Vt.length;Wt<ee;Wt++){let re=Vt[Wt],Gt=It[re.materialIndex];Gt&&Gt.visible&&v.push(A,Ft,Gt,at,Xt.z,re,Y)}}else It.visible&&v.push(A,Ft,It,at,Xt.z,null,Y)}}let Lt=A.children;for(let Ft=0,It=Lt.length;Ft<It;Ft++)Gs(Lt[Ft],Y,at,et)}function Wr(A,Y,at,et){let{opaque:nt,transmissive:Lt,transparent:Ft}=A;T.setupLightsView(at),yt===!0&&j.setGlobalState(F.clippingPlanes,at),et&&M.viewport(ft.copy(et)),nt.length>0&&qr(nt,Y,at),Lt.length>0&&qr(Lt,Y,at),Ft.length>0&&qr(Ft,Y,at),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Xr(A,Y,at,et){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[et.id]===void 0){let Gt=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[et.id]=new nn(1,1,{generateMipmaps:!0,type:Gt?Cn:sn,minFilter:Ai,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Lt=T.state.transmissionRenderTarget[et.id],Ft=et.viewport||ft;Lt.setSize(Ft.z*F.transmissionResolutionScale,Ft.w*F.transmissionResolutionScale);let It=F.getRenderTarget(),Vt=F.getActiveCubeFace(),Wt=F.getActiveMipmapLevel();F.setRenderTarget(Lt),F.getClearColor(qt),Nt=F.getClearAlpha(),Nt<1&&F.setClearColor(16777215,.5),F.clear(),Yt&&xt.render(at);let ee=F.toneMapping;F.toneMapping=Tn;let re=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),T.setupLightsView(et),yt===!0&&j.setGlobalState(F.clippingPlanes,et),qr(A,at,et),ct.updateMultisampleRenderTarget(Lt),ct.updateRenderTargetMipmap(Lt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let le=0,Te=Y.length;le<Te;le++){let ye=Y[le],{object:me,geometry:ke,material:Ut,group:qe}=ye;if(Ut.side===Vn&&me.layers.test(et.layers)){let ce=Ut.side;Ut.side=Ke,Ut.needsUpdate=!0,th(me,at,et,ke,Ut,qe),Ut.side=ce,Ut.needsUpdate=!0,Gt=!0}}Gt===!0&&(ct.updateMultisampleRenderTarget(Lt),ct.updateRenderTargetMipmap(Lt))}F.setRenderTarget(It,Vt,Wt),F.setClearColor(qt,Nt),re!==void 0&&(et.viewport=re),F.toneMapping=ee}function qr(A,Y,at){let et=Y.isScene===!0?Y.overrideMaterial:null;for(let nt=0,Lt=A.length;nt<Lt;nt++){let Ft=A[nt],{object:It,geometry:Vt,group:Wt}=Ft,ee=Ft.material;ee.allowOverride===!0&&et!==null&&(ee=et),It.layers.test(at.layers)&&th(It,Y,at,Vt,ee,Wt)}}function th(A,Y,at,et,nt,Lt){H!==null&&nt.isNodeMaterial&&H.setObject(A,nt),A.onBeforeRender(F,Y,at,et,nt,Lt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),nt.onBeforeRender(F,Y,at,et,A,Lt),nt.transparent===!0&&nt.side===Vn&&nt.forceSinglePass===!1?(nt.side=Ke,nt.needsUpdate=!0,F.renderBufferDirect(at,Y,et,nt,A,Lt),nt.side=wi,nt.needsUpdate=!0,F.renderBufferDirect(at,Y,et,nt,A,Lt),nt.side=Vn):F.renderBufferDirect(at,Y,et,nt,A,Lt),A.onAfterRender(F,Y,at,et,nt,Lt)}function Yr(A,Y,at){Y.isScene!==!0&&(Y=Ht);let et=tt.get(A),nt=T.state.lights,Lt=T.state.shadowsArray,Ft=nt.state.version,It=C.getParameters(A,nt.state,Lt,Y,at,T.state.lightProbeGridArray),Vt=C.getProgramCacheKey(It),Wt=et.programs;et.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,et.fog=Y.fog;let ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;et.envMap=U.get(A.envMap||et.environment,ee),et.envMapRotation=et.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",pe),Wt=new Map,et.programs=Wt);let re=Wt.get(Vt);if(re!==void 0){if(et.currentProgram===re&&et.lightsStateVersion===Ft)return nh(A,It),re}else It.uniforms=C.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,at,It),A.onBeforeCompile(It,F),re=C.acquireProgram(It,Vt),Wt.set(Vt,re),et.uniforms=It.uniforms;let Gt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Gt.clippingPlanes=j.uniform),nh(A,It),et.needsLights=rd(A),et.lightsStateVersion=Ft,et.needsLights&&(Gt.ambientLightColor.value=nt.state.ambient,Gt.lightProbe.value=nt.state.probe,Gt.sunLights.value=nt.state.sun,Gt.sunLightShadows.value=nt.state.sunShadow,Gt.directionalLights.value=nt.state.directional,Gt.directionalLightShadows.value=nt.state.directionalShadow,Gt.spotLights.value=nt.state.spot,Gt.spotLightShadows.value=nt.state.spotShadow,Gt.rectAreaLights.value=nt.state.rectArea,Gt.ltc_1.value=nt.state.rectAreaLTC1,Gt.ltc_2.value=nt.state.rectAreaLTC2,Gt.pointLights.value=nt.state.point,Gt.pointLightShadows.value=nt.state.pointShadow,Gt.hemisphereLights.value=nt.state.hemi,Gt.sunShadowMatrix.value=nt.state.sunShadowMatrix,Gt.sunShadowCascade.value=nt.state.sunShadowCascade,Gt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Gt.spotLightMatrix.value=nt.state.spotLightMatrix,Gt.spotLightMap.value=nt.state.spotLightMap,Gt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=T.state.lightProbeGridArray.length>0,et.currentProgram=re,et.uniformsList=null,re}function eh(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=Fs.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function nh(A,Y){let at=tt.get(A);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function nd(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;E.setFromMatrixPosition(Y.matrixWorld);for(let at=0,et=A.length;at<et;at++){let nt=A[at];if(nt.texture!==null&&nt.boundingBox.containsPoint(E))return nt}return null}function id(A,Y,at,et,nt){Y.isScene!==!0&&(Y=Ht),ct.resetTextureUnits();let Lt=Y.fog,Ft=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?Y.environment:null,It=pt===null?F.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:oe.workingColorSpace,Vt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Wt=U.get(et.envMap||Ft,Vt),ee=et.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,re=!!at.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Gt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,Te=!!at.morphAttributes.color,ye=Tn;et.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ye=F.toneMapping);let me=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ke=me!==void 0?me.length:0,Ut=tt.get(et),qe=T.state.lights;if(yt===!0&&(Mt===!0||A!==ot)){let ge=A===ot&&et.id===rt;j.setState(et,A,ge)}let ce=!1;et.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==qe.state.version||Ut.outputColorSpace!==It||nt.isBatchedMesh&&Ut.batching===!1||!nt.isBatchedMesh&&Ut.batching===!0||nt.isBatchedMesh&&Ut.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Ut.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Ut.instancing===!1||!nt.isInstancedMesh&&Ut.instancing===!0||nt.isSkinnedMesh&&Ut.skinning===!1||!nt.isSkinnedMesh&&Ut.skinning===!0||nt.isInstancedMesh&&Ut.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Ut.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Ut.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Ut.instancingMorph===!1&&nt.morphTexture!==null||Ut.envMap!==Wt||et.fog===!0&&Ut.fog!==Lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==j.numPlanes||Ut.numIntersection!==j.numIntersection)||Ut.vertexAlphas!==ee||Ut.vertexTangents!==re||Ut.morphTargets!==Gt||Ut.morphNormals!==le||Ut.morphColors!==Te||Ut.toneMapping!==ye||Ut.morphTargetsCount!==ke||!!Ut.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Ut.__version=et.version);let mn=Ut.currentProgram;ce===!0&&(mn=Yr(et,Y,nt),H&&et.isNodeMaterial&&H.onUpdateProgram(et,mn,Ut));let Nn=!1,li=!1,ji=!1,de=mn.getUniforms(),we=Ut.uniforms;if(M.useProgram(mn.program)&&(Nn=!0,li=!0,ji=!0),et.id!==rt&&(rt=et.id,li=!0),Ut.needsLights){let ge=nd(T.state.lightProbeGridArray,nt);Ut.lightProbeGrid!==ge&&(Ut.lightProbeGrid=ge,li=!0)}if(Nn||ot!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),de.setValue(B,"projectionMatrix",A.projectionMatrix),de.setValue(B,"viewMatrix",A.matrixWorldInverse);let ui=de.map.cameraPosition;ui!==void 0&&ui.setValue(B,wt.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&de.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&de.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),ot!==A&&(ot=A,li=!0,ji=!0)}if(Ut.needsLights&&(qe.state.sunShadowMap.length>0&&de.setValue(B,"sunShadowMap",qe.state.sunShadowMap,ct),qe.state.directionalShadowMap.length>0&&de.setValue(B,"directionalShadowMap",qe.state.directionalShadowMap,ct),qe.state.spotShadowMap.length>0&&de.setValue(B,"spotShadowMap",qe.state.spotShadowMap,ct),qe.state.pointShadowMap.length>0&&de.setValue(B,"pointShadowMap",qe.state.pointShadowMap,ct)),nt.isSkinnedMesh){de.setOptional(B,nt,"bindMatrix"),de.setOptional(B,nt,"bindMatrixInverse");let ge=nt.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),de.setValue(B,"boneTexture",ge.boneTexture,ct))}nt.isBatchedMesh&&(de.setOptional(B,nt,"batchingTexture"),de.setValue(B,"batchingTexture",nt._matricesTexture,ct),de.setOptional(B,nt,"batchingIdTexture"),de.setValue(B,"batchingIdTexture",nt._indirectTexture,ct),de.setOptional(B,nt,"batchingColorTexture"),nt._colorsTexture!==null&&de.setValue(B,"batchingColorTexture",nt._colorsTexture,ct));let hi=at.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&R.update(nt,at,mn),(li||Ut.receiveShadow!==nt.receiveShadow)&&(Ut.receiveShadow=nt.receiveShadow,de.setValue(B,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&Y.environment!==null&&(we.envMapIntensity.value=Y.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=L_()),li){if(de.setValue(B,"toneMappingExposure",F.toneMappingExposure),Ut.needsLights&&sd(we,ji),Lt&&et.fog===!0&&I.refreshFogUniforms(we,Lt),I.refreshMaterialUniforms(we,et,ht,st,T.state.transmissionRenderTarget[A.id]),Ut.needsLights&&Ut.lightProbeGrid){let ge=Ut.lightProbeGrid;we.probesSH.value=ge.texture,we.probesMin.value.copy(ge.boundingBox.min),we.probesMax.value.copy(ge.boundingBox.max),we.probesResolution.value.copy(ge.resolution)}Fs.upload(B,eh(Ut),we,ct)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Fs.upload(B,eh(Ut),we,ct),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&de.setValue(B,"center",nt.center),de.setValue(B,"modelViewMatrix",nt.modelViewMatrix),de.setValue(B,"normalMatrix",nt.normalMatrix),de.setValue(B,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){let ge=et.uniformsGroups;for(let ui=0,Qi=ge.length;ui<Qi;ui++){let sh=ge[ui];lt.update(sh,mn),lt.bind(sh,mn)}}return mn}function sd(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.sunLights.needsUpdate=Y,A.sunLightShadows.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function rd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return it},this.getRenderTarget=function(){return pt},this.setRenderTargetTextures=function(A,Y,at){let et=tt.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),tt.get(A.texture).__webglTexture=Y,tt.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:at,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){let at=tt.get(A);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,at=0){pt=A,Q=Y,it=at;let et=null,nt=!1,Lt=!1;if(A){let It=tt.get(A);if(It.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(B.FRAMEBUFFER,It.__webglFramebuffer),ft.copy(A.viewport),vt.copy(A.scissor),_t=A.scissorTest,M.viewport(ft),M.scissor(vt),M.setScissorTest(_t),rt=-1;return}else if(It.__webglFramebuffer===void 0)ct.setupRenderTarget(A);else if(It.__hasExternalTextures)ct.rebindTextures(A,tt.get(A.texture).__webglTexture,tt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ee=A.depthTexture;if(It.__boundDepthTexture!==ee){if(ee!==null&&tt.has(ee)&&(A.width!==ee.image.width||A.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(A)}}let Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Lt=!0);let Wt=tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?et=Wt[Y][at]:et=Wt[Y],nt=!0):A.samples>0&&ct.useMultisampledRTT(A)===!1?et=tt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?et=Wt[at]:et=Wt,ft.copy(A.viewport),vt.copy(A.scissor),_t=A.scissorTest}else ft.copy(Rt).multiplyScalar(ht).floor(),vt.copy(Dt).multiplyScalar(ht).floor(),_t=Qt;if(at!==0&&(et=q),M.bindFramebuffer(B.FRAMEBUFFER,et)&&M.drawBuffers(A,et),M.viewport(ft),M.scissor(vt),M.setScissorTest(_t),nt){let It=tt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,at)}else if(Lt){let It=Y;for(let Vt=0;Vt<A.textures.length;Vt++){let Wt=tt.get(A.textures[Vt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,at,It)}}else if(A!==null&&at!==0){let It=tt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,at)}rt=-1};function ih(A){let Y=tt.get(A);return(Y.__readFormat!==A.format||Y.__readType!==A.type)&&(Y.__readFormat=A.format,Y.__readType=A.type,Y.__formatReadable=D.textureFormatReadable(A.format),Y.__typeReadable=D.textureTypeReadable(A.type)),Y}this.readRenderTargetPixels=function(A,Y,at,et,nt,Lt,Ft,It=0){if(!(A&&A.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Vt=Vt[Ft]),Vt){M.bindFramebuffer(B.FRAMEBUFFER,Vt);try{let Wt=A.textures[It],ee=Wt.format,re=Wt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It);let Gt=ih(Wt);if(Gt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-et&&at>=0&&at<=A.height-nt&&B.readPixels(Y,at,et,nt,dt.convert(ee),dt.convert(re),Lt)}finally{let Wt=pt!==null?tt.get(pt).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,at,et,nt,Lt,Ft,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Vt=Vt[Ft]),Vt)if(Y>=0&&Y<=A.width-et&&at>=0&&at<=A.height-nt){M.bindFramebuffer(B.FRAMEBUFFER,Vt);let Wt=A.textures[It],ee=Wt.format,re=Wt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It);let Gt=ih(Wt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.bufferData(B.PIXEL_PACK_BUFFER,Lt.byteLength,B.STREAM_READ),B.readPixels(Y,at,et,nt,dt.convert(ee),dt.convert(re),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Te=pt!==null?tt.get(pt).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,Te);let ye=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Eu(B,ye,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,le),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Lt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(le),B.deleteSync(ye),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,at=0){let et=Math.pow(2,-at),nt=Math.floor(A.image.width*et),Lt=Math.floor(A.image.height*et),Ft=Y!==null?Y.x:0,It=Y!==null?Y.y:0;ct.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,Ft,It,nt,Lt),M.unbindTexture()},this.copyTextureToTexture=function(A,Y,at=null,et=null,nt=0,Lt=0){let Ft,It,Vt,Wt,ee,re,Gt,le,Te,ye=A.isCompressedTexture?A.mipmaps[Lt]:A.image;if(at!==null)Ft=at.max.x-at.min.x,It=at.max.y-at.min.y,Vt=at.isBox3?at.max.z-at.min.z:1,Wt=at.min.x,ee=at.min.y,re=at.isBox3?at.min.z:0;else{let we=Math.pow(2,-nt);Ft=Math.floor(ye.width*we),It=Math.floor(ye.height*we),A.isDataArrayTexture?Vt=ye.depth:A.isData3DTexture?Vt=Math.floor(ye.depth*we):Vt=1,Wt=0,ee=0,re=0}et!==null?(Gt=et.x,le=et.y,Te=et.z):(Gt=0,le=0,Te=0);let me=dt.convert(Y.format),ke=dt.convert(Y.type),Ut;Y.isData3DTexture?(ct.setTexture3D(Y,0),Ut=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ct.setTexture2DArray(Y,0),Ut=B.TEXTURE_2D_ARRAY):(ct.setTexture2D(Y,0),Ut=B.TEXTURE_2D),M.activeTexture(B.TEXTURE0),M.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);let qe=M.getParameter(B.UNPACK_ROW_LENGTH),ce=M.getParameter(B.UNPACK_IMAGE_HEIGHT),mn=M.getParameter(B.UNPACK_SKIP_PIXELS),Nn=M.getParameter(B.UNPACK_SKIP_ROWS),li=M.getParameter(B.UNPACK_SKIP_IMAGES);M.pixelStorei(B.UNPACK_ROW_LENGTH,ye.width),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ye.height),M.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),M.pixelStorei(B.UNPACK_SKIP_ROWS,ee),M.pixelStorei(B.UNPACK_SKIP_IMAGES,re);let ji=A.isDataArrayTexture||A.isData3DTexture,de=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){let we=tt.get(A),hi=tt.get(Y),ge=tt.get(we.__renderTarget),ui=tt.get(hi.__renderTarget);M.bindFramebuffer(B.READ_FRAMEBUFFER,ge.__webglFramebuffer),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Qi=0;Qi<Vt;Qi++)ji&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(A).__webglTexture,nt,re+Qi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(Y).__webglTexture,Lt,Te+Qi)),B.blitFramebuffer(Wt,ee,Ft,It,Gt,le,Ft,It,B.DEPTH_BUFFER_BIT,B.NEAREST);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(nt!==0||A.isRenderTargetTexture||tt.has(A)){let we=tt.get(A),hi=tt.get(Y);M.bindFramebuffer(B.READ_FRAMEBUFFER,z),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,X);for(let ge=0;ge<Vt;ge++)ji?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,nt,re+ge):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,nt),de?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hi.__webglTexture,Lt,Te+ge):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hi.__webglTexture,Lt),nt!==0?B.blitFramebuffer(Wt,ee,Ft,It,Gt,le,Ft,It,B.COLOR_BUFFER_BIT,B.NEAREST):de?B.copyTexSubImage3D(Ut,Lt,Gt,le,Te+ge,Wt,ee,Ft,It):B.copyTexSubImage2D(Ut,Lt,Gt,le,Wt,ee,Ft,It);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else de?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ut,Lt,Gt,le,Te,Ft,It,Vt,me,ke,ye.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Ut,Lt,Gt,le,Te,Ft,It,Vt,me,ye.data):B.texSubImage3D(Ut,Lt,Gt,le,Te,Ft,It,Vt,me,ke,ye):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Lt,Gt,le,Ft,It,me,ke,ye.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Lt,Gt,le,ye.width,ye.height,me,ye.data):B.texSubImage2D(B.TEXTURE_2D,Lt,Gt,le,Ft,It,me,ke,ye);M.pixelStorei(B.UNPACK_ROW_LENGTH,qe),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce),M.pixelStorei(B.UNPACK_SKIP_PIXELS,mn),M.pixelStorei(B.UNPACK_SKIP_ROWS,Nn),M.pixelStorei(B.UNPACK_SKIP_IMAGES,li),Lt===0&&Y.generateMipmaps&&B.generateMipmap(Ut),M.unbindTexture()},this.initRenderTarget=function(A){tt.get(A).__webglFramebuffer===void 0&&ct.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ct.setTextureCube(A,0):A.isData3DTexture?ct.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ct.setTexture2DArray(A,0):ct.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){Q=0,it=0,pt=null,M.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function Bs(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Se,l=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(let h in r){let f=lf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][u]);let g=lf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function lf(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new De(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let y=h.getComponent(u,g);a.setComponent(u+f,g,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var kr=new G;function yn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;kr.copy(t),kr[n]=0,kr.normalize();let l=.5*o/(o+a),h=1-kr.angleTo(i)/c;return Math.sign(kr[e])===1?h*l:a/(o+a)+l+l*(1-h)}var nc=class i extends ze{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new G,l=new G,h=new G(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,y=new G,m=.5/o;for(let p=0,w=0;p<f.length;p+=3,w+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=h.x*Math.sign(c.x)+l.x*r,f[p+1]=h.y*Math.sign(c.y)+l.y*r,f[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:y.set(1,0,0),d[w+0]=yn(y,l,"z","y",r,n),d[w+1]=1-yn(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),d[w+0]=1-yn(y,l,"z","y",r,n),d[w+1]=1-yn(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),d[w+0]=1-yn(y,l,"x","z",r,t),d[w+1]=yn(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),d[w+0]=1-yn(y,l,"x","z",r,t),d[w+1]=1-yn(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),d[w+0]=1-yn(y,l,"x","y",r,t),d[w+1]=1-yn(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),d[w+0]=yn(y,l,"x","y",r,t),d[w+1]=1-yn(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Z=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),N_=Object.freeze({sage:Z.sage,mint:Z.aqua,sky:Z.blue,peach:Z.peach,coral:"#cf8979",lavender:Z.lilac,butter:Z.honey,cream:Z.linen,white:Z.cream,oak:Z.oakLight,walnut:Z.walnut,charcoal:"#505b68",brass:Z.brass,terracotta:"#b97d63",forest:Z.moss,blush:Z.blush,teddy:"#aa8063",slate:"#9b9b9d"}),D_=new Set([Z.oak,Z.oakLight,Z.walnut]),U_=new Set([Z.sage,Z.moss,Z.linen,Z.lilac,Z.lilacLight,Z.blush,Z.peach,Z.oatmeal,Z.upholsteryShadow,Z.denim]);function F_(i,t){let e=D_.has(i)?1:U_.has(i)?2:0,n=i===Z.glass||i===Z.darkGlass||i===Z.blueWater,s=i===Z.brass,r=i===Z.steel||i===Z.basinSteel,o=new ni({color:i,roughness:s||r?.37:n?.33:i===Z.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var Vl=class{constructor(t,e){this.root=new be,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,F_(e,this.grainDirection));let a=new xe(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let h=Math.min(c,s*.42,r*.42,o*.42),f=h>.2?new nc(s,r,o,2,h):new ze(s,r,o);return this.part(f,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new Oi(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new wn(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new ki(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,h])=>new Et(l,h)),c=new _r(a,24);return c.scale(s,r,o),this.part(c,Z.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Bs(s);s.length>1&&s.forEach(a=>a.dispose());let o=new xe(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function si(i,t,e,n,s,r,o=Z.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function Vr(i,t,e,n,s,r,o,a){let c=o===Z.linen?Z.binding:Z.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function O_(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?Z.upholsteryShadow:Z.moss,h=a?Z.oatmeal:Z.sage,f=o?t*.5:t,u=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,y=Math.min(t,e)*.1;if(si(i,d,g,f,u,5),i.box(d,5,g,f*.97,22,u*.98,l,8),r){let v=o?t*.52:t*.34,T=o?e*.38:e*.46,P=o?t*.22:-t*.32,b=o?c*e*.3:e*.25;si(i,P,b,v,T,5),i.box(P,5,b,v,22,T,l,8),i.box(P,25,b,v*.96,12,T*.9,n,5),o&&i.box(P,29,c*e*.464,v,26,y,h,6)}let m=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let v=e*.88/m;for(let T=0;T<m;T++){let P=-e*.44+v*(T+.5);i.box(d+y*.18,25,P,f*.76,12,v-3,n,5),i.box(d-f*.39,27,P,f*.22,31,v-1,h,8)}i.box(d,29,-c*e*.445,f*.88,20,y,h,6),Vr(i,d+f*.13,35,-e*.31,f*.42,v*.49,a?Z.sage:Z.peach,-.18),Vr(i,d+f*.12,35,e*.28,f*.4,v*.45,Z.linen,.2)}else{let v=t*.8/m;for(let T=0;T<m;T++){let P=-t*.4+v*(T+.5);i.box(P,25,g+u*.08,v-3,12,u*.7,n,6),i.box(P,27,g-u*.39,v-1,31,u*.24,h,7)}for(let T of[-t*.442,t*.442])i.box(T,26,g,y,22,u*.89,h,6);Vr(i,-t*.27,35,g-u*.15,t*.18,u*.34,Z.peach,-.18),Vr(i,t*.27,35,g-u*.12,t*.17,u*.33,Z.linen,.2)}let p=o?f*.67:f*.19,w=o?e*.14:u*.58,N=o?d+f*.06:f*.32,E=o?e*.13:g+u*.1;i.box(N,37.1,E,p,1.7,w,Z.lilacLight,.65);for(let v of[-1,1])i.box(N,38.82,E+v*w*.36,p*.9,.25,1.2,Z.lilac);return 58}function In(i,t,e,n,s,r,o,a=!1){let c=a?19:28;si(i,t,e,n,s,c,Z.walnut),i.box(t,c,e,n*.9,7,s*.92,Z.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,h=t-Math.sin(r)*(l?n:s)*.39,f=e-Math.cos(r)*s*.39;i.box(h,c+9,f,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function B_(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return In(i,0,-e*.39,t*.2,e*.23,0,Z.denim),In(i,0,e*.39,t*.2,e*.23,Math.PI,Z.denim),In(i,-t*.415,0,t*.17,e*.27,Math.PI/2,Z.denim),In(i,t*.415,0,t*.17,e*.27,-Math.PI/2,Z.denim),si(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,Z.walnut,3),i.box(0,37,0,t*.79,8,e*.57,Z.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,Z.linen,.6),46.4;if(r)In(i,0,-e*.37,t*.2,e*.2,0,Z.sage),In(i,0,e*.37,t*.2,e*.2,Math.PI,Z.blush),In(i,-t*.38,0,t*.2,e*.2,Math.PI/2,Z.lilac),In(i,t*.38,0,t*.2,e*.2,-Math.PI/2,Z.honey),i.disc(0,0,0,t*.13,5,e*.13,Z.walnut),i.disc(0,4,0,t*.045,31,e*.045,Z.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let c=a?[-.28,.28]:[-.32,0,.32],l=[Z.sage,Z.blush,Z.lilac,Z.honey];for(let h=0;h<c.length;h++)for(let f of[-1,1])In(i,t*c[h],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(h+(f<0?0:2))%l.length]);si(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,Z.linen,.5)}return 42}function z_(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,Z.ink,.5),i.box(t,e+1,n,s*.1,14,4,Z.ink,1),i.box(t,e+12,n,s,25,6,Z.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,Z.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,Z.blue,.2)}function k_(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,h=s?e-r:e*.58,f=s?r/2:0;s&&i.box(l,37,f+.8,a,7,h-1.6,n,2.4),i.box(l,4,f,a*.81,34,h*.81,Z.walnut,2.8);for(let u=0;u<3;u++){let d=6+u*9.7;i.box(l,d,f+h*.41,a*.74,8.4,2,Z.oak,.7),i.box(l,d+3,f+h*.43,a*.26,2,2,Z.brass,.5)}}return z_(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,Z.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,Z.peach),81}function hf(i,t,e,n,s,r){let o=new un;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,h=c%2?s*.46:s,f=[Math.cos(l)*h,Math.sin(l)*h];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new vi(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function V_(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");si(i,0,0,t,e,6,Z.walnut);let c=r?[6,55]:[6];for(let h of c){i.box(0,h,0,t*.97,15,e*.98,Z.walnut,5),i.box(0,h+12,0,t*.9,11,e*.92,Z.linen,4),i.box(0,h+21.6,e*.15,t*.89,5,e*.62,Z.lilac,2.5),i.box(0,h+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,h+28,-e*.11,t*.88,3,e*.071,Z.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)Vr(i,d,h+22,-e*.275,t*(f.length===2?.34:.49),e*.2,Z.linen,d<0?-.04:.04);let u=Math.min(t,e)*.045;for(let[d,g,y,m]of[[-.24,.12,1,Z.cream],[.23,.27,.79,Z.honey],[.08,.04,.57,Z.cream],[-.1,.34,.62,Z.honey]])hf(i,t*d,h+30.8,e*g,u*y,m);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,h+30.71,e*.24,.85,.24,e*.33,Z.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,h+30.72,e*d,t*.71,.24,.9,Z.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,Z.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let h of[-1,1]){for(let f of[-1,1])i.box(t*.45*h,4,e*.46*f,5,l,6,Z.walnut,2);if(i.box(t*.45*h,l-9,0,5,5,e*.89,n,1.5),o||r)for(let f=-3;f<=3;f++)i.box(t*.45*h,l-29,e*f*.105,3,20,3,n,.8)}return l}function G_(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;si(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,Z.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,Z.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let h=0;h<c;h++)for(let f=0;f<l;f++){let u=t*.89/l,d=(a-8)/c,g=u*(f-(l-1)/2),y=5+h*d;i.box(g,y,e*.46,u-2,d-1.5,2.9,n,1),i.oval(g,y+d*.45,e*.51,2.2,1.7,2.2,Z.brass)}return a+2}function H_(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,Z.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,Z.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,Z.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?Z.lilac:Z.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,Z.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?Z.lilacLight:Z.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,Z.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,Z.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,Z.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])hf(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,Z.cream);return 5}function W_(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let u of[-1,1])i.box(u*(t+s)/4,n-5,0,l,5,e,Z.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,Z.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,Z.linen);let h=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,Z.basinSteel);for(let u of[-1,1])i.box(u*s/2,n-4.5,o,h,5.25,r+h,Z.steel,.4),i.box(0,n-4.5,o+u*r/2,s,5.25,h,Z.steel,.4),i.disc(0,n-4.1,o+u*r/4,h,.6,h,Z.darkGlass);i.box(0,n-4.5,o,s,4.85,h,Z.steel,.4);let f=-s/2-h*1.15;i.disc(f,n,o,h*.8,h*2.9,h*.8,Z.steel),i.box(f+h,n+h*2.5,o,h*2.8,h*.7,h,Z.steel,.6)}function X_(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?Z.sage:Z.walnut,2.3),s?W_(i,t,e,r+2):i.box(0,r-3,0,t,5,e,Z.linen,1.8);let c=e>t;for(let l of[-1,1])for(let h=-1;h<=1;h++){let f=c?2.2:t*.29,u=c?e*.29:2.2,d=c?t*.46*l:t*.3*h,g=c?e*.3*h:e*.47*l;i.box(d,6,g,f,r*.67,u,a?Z.moss:Z.oak,.8),i.box(d,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,Z.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,Z.darkGlass,.8);for(let l of[-.2,.2])for(let h of[-.19,.19]){let f=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*h,f,f,1,Z.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,Z.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,Z.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,Z.brass,1);return r+3}function q_(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,Z.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,Z.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,Z.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,Z.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,Z.glass),i.disc(0,22,-e*.44,3.5,9,3.5,Z.brass),i.box(0,30,-e*.4,5,3.7,e*.1,Z.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,Z.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,Z.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,Z.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,Z.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,Z.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,Z.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,Z.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,Z.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,Z.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,Z.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,Z.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,Z.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,Z.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,Z.blush,1.7),36)}function Y_(i,t,e,n,s){let r=n?Z.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,Z.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,Z.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,Z.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,Z.linen,3.8),c+o*(n?.37:.28)}function Z_(i,t,e){let s=[Z.sage,Z.peach,Z.honey,Z.lilac,Z.blue,Z.blush];si(i,0,0,t*.96,e*.96,22,Z.sage),i.box(0,20,0,t*.94,7,e*.93,Z.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function J_(i,t,e,n){let s=[Z.linen,n,Z.sand,Z.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function $_(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,Z.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,Z.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,h=s*(n?.55:.44)+o%2*s*.08,f=i.oval(c*.5,h*.69,l*.5,s*.035,h*.32,s*.035,Z.moss);f.rotation.z=-c/h,f.rotation.x=l/h;let u=n?Z.sage:[Z.blush,Z.linen,Z.honey][o%3];i.oval(c,h,l,s*.13,s*(n?.18:.085),s*.11,u)}return s*(n?.82:.65)}function uf(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;let s=N_[t.split("-").at(-1)],r=new Vl(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=O_(r,e,n,s||(t==="sofa"?Z.linen:Z.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,Z.walnut,3.5),r.box(0,24,0,e,4,n,Z.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,Z.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,Z.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,Z.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,Z.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,Z.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=B_(r,e,n,s||Z.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=k_(r,e,n,s||Z.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))In(r,0,0,e,n,0,s||Z.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){In(r,0,0,e,n,0,s||Z.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,Z.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=V_(r,e,n,s||Z.lilac,t);else if(t==="rug")o=H_(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=X_(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=q_(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=$_(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,Z.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,Z.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,Z.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=G_(r,e,n,s||Z.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;si(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||Z.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,Z.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=Y_(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=J_(r,e,n,s||Z.sage);else if(t.startsWith("baby-activities-"))o=Z_(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||Z.peach),r.ring(0,a,0,a*.95,a*.95,1.2,Z.linen),o=a*2}else return null;return r.finish(o)}var Ot={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Hr=Math.PI,Gl=2*Hr,K_=new Set(["unknown","unavailable"]),Ln=(i,t,e)=>Math.max(t,Math.min(e,i)),Gr=(i,t)=>Number.isFinite(i)?Ln(i,12,480):t,pf=.96,mf=.09;function gf(i,t,e){let n=Gr(i.w,42),s=Gr(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*mf)<=s*pf/2}var ie=(i,t={})=>new ni({color:i,roughness:.83,...t}),Hl=i=>String(i?.state??"unknown"),Zi=i=>!K_.has(Hl(i)),ks=i=>Zi(i)&&(i.active===!0||i.state==="on"),j_=i=>ks(i)?Number.isFinite(i.attributes?.brightness)?Ln(i.attributes.brightness/255,0,1):1:0;function ri(i,t,e,n=0,s=0,r=0){let o=new xe(t,e);return o.position.set(n,s,r),i.add(o),o}function Oe(i,t,e,n,s,r=0,o=0,a=0){return ri(i,new ze(t,e,n),s,r,o,a)}function We(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),h=l-t/2,f=l-e/2,u=new un;u.moveTo(h,f),u.lineTo(-h,f),u.lineTo(-h,-f),u.lineTo(h,-f),u.closePath();let d=new ti(u,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-n/2),ri(i,d,s,r,o,a)}function Pe(i,t,e,n,s,r=0,o=0,a=0,c=16){return ri(i,new Oi(t,e,n,c),s,r,o,a)}function Pn(i,t,e,n,s,r){return ri(i,new wn(t,10,7),e,n,s,r)}function zs(i,t=0,e=0,n=0){let s=new be;return s.position.set(t,e,n),i.add(s),s}function Q_(i,t){let e=new $e({transparent:!0,depthWrite:!1,blending:wr,uniforms:{strength:{value:0},tint:{value:new Kt(Ot.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),n=ri(i,new ei(2*t,2*t),e,0,2.8,0);return n.rotation.x=-Hr/2,n.visible=!1,(s,r)=>{n.visible=s>0,e.uniforms.strength.value=s*.29,e.uniforms.tint.value.copy(r)}}function ty(i,t,e){let n=new be,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",h=a&&/fan light/i.test(i.name??""),f=Math.min(t,e),u=ie(Ot.honey),d=ie(Ot.ink),g=ie(Ot.brass,{roughness:.36,metalness:.42}),y=ie(Ot.cream,{emissive:Ot.warm,emissiveIntensity:0}),m=new Kt(Ot.warm),p=h?46:o?50:a?56:l?40:c?56:36,w=Q_(n,Ln(f*(a?1.72:1.35),38,110));if(a){let N=f*(h?.19:.29);Pe(n,N,N*1.02,3,d,0,p+2),o&&Pe(n,1.7,1.7,13,u,0,p+9),Pe(n,N*.82,N,5,u,0,p-1.5),Pe(n,N*.92,N*.96,1.15,g,0,p+1.1);let E=Pn(n,N*.83,y,0,p,0);E.scale.y=o?.88:.52}else if(l)We(n,f*.34,18,4,d,0,35,-4),Pe(n,f*.12,f*.11,14,u,0,37,3),Pn(n,f*.21,y,0,p+3,3);else{let N=p-7,E=c?3:16,v=f*(c?.25:.3);if(Pe(n,v*.57,v*.67,4,d,0,E),Pe(n,2,2.9,N-E,u,0,(E+N)/2),c)Pn(n,v*.81,y,0,p,0);else{let T=r==="bud_lamp"?12:9;Pe(n,v*.56,v,14,y,0,p,0,T),Pe(n,v,v*.99,1.2,g,0,p-6.7,0,T),Pe(n,v*.55,v*.58,1.1,g,0,p+7.1,0,T)}}return{root:n,anchorY:p+2,animate(N){let E=j_(N),v=N?.attributes?.rgb_color;if(Array.isArray(v)&&v.length===3&&v.every(Number.isFinite)){let[T,P,b]=v.map(L=>Ln(L/255,0,1));m.setRGB(T,P,b,Re)}else m.setHex(Ot.warm);w(E,m),y.emissiveIntensity=E*.88,y.emissive.copy(m),E>0?y.color.copy(m):y.color.setHex(Ot.cream)}}}function ey(i){let t=new un;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new ti(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-Hr/2)}function ff(i,t,e,n){let s=new be,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=zs(s,0,o,0);n&&(a.rotation.x=Hr/2);let c=zs(a,0,-1,0),l=ie(Ot.cream),h=ie(Ot.ink),f=/(?:white|cream)$/.test(i.type)?Ot.oat:/(?:forest|sage)$/.test(i.type)?Ot.sage:Ot.honey,u=ie(f),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;Pe(a,r*.18,r*.2,6,h),Pe(a,r*.174,r*.176,1.4,ie(Ot.brass,{roughness:.36,metalness:.42}),0,3.4),Pe(a,r*.15,r*.17,2.6,l,0,4.9);let g=ey(r);for(let y=0;y<d;y++){let m=zs(c);m.rotation.y=y/d*Gl,ri(m,g,u)}if(n){We(s,r*1.66,6,r*1.02,h,0,3),Oe(s,r*.3,11,6,l,0,10);let y=ri(s,new ki(r,2.6,6,24),l,0,o,3);y.rotation.z=.04;for(let m=-1;m<=1;m++){let p=m*r*.5;Pe(s,.68,.68,2*Math.sqrt(r*r-p*p),h,p,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(y,m=0){let p=Number.isFinite(y?.attributes?.percentage)?Ln(y.attributes.percentage/100,.12,1):.64;c.rotation.y=ks(y)?m*Gl*p%Gl:0}}}function ny(i,t){let e=new be,n=t.mountY??39,s=zs(e,0,n),r=Ln(i*.72,17,27);We(s,r,31,5,ie(Ot.ink),0,0,-.5),We(s,r-1.9,29,4.4,ie(Ot.cream),0,.3,1);let o=ie(Ot.oat,{emissive:Ot.warm,emissiveIntensity:0}),a=We(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,h)=>{let f=ie(Ot.teal,{emissive:Ot.mint,emissiveIntensity:0});return Pn(s,1.85,f,(h-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,h=0){a.rotation.x=Zi(l)?ks(l)?-.16:.16:0,o.emissiveIntensity=ks(l)?.42:0;let f=l?.presence==="on";for(let u=0;u<c.length;u++){let d=f?.5+.5*Math.cos(h*5-u*1.23):0;c[u].material.color.setHex(f?Ot.mint:Ot.teal),c[u].material.emissiveIntensity=f?.75+d*1.9:0,c[u].scale.setScalar(f?1+d*.18:1)}}}}function df(i,t,e,n=31){let s=new be,r=36.5,o=Math.max(12,i-6),a=ie(Ot.oat);if(t){let u=ie(Ot.glass,{roughness:.32});Oe(s,o,n,3.2,u,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])Oe(s,3.2,n+2,7.5,a,g,r);let d=r+n/2;Oe(s,o,1.8,7,u,0,d+.35);for(let g of[-4.25,4.25])Oe(s,o+2,3.2,1.5,a,0,d,g);Oe(s,o+3,3.8,11,a,0,r-n/2,1.4),Oe(s,o,1.35,.5,ie(Ot.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=ie(Ot.cream),l=r+n/2-1;We(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let h=Array.from({length:8},(u,d)=>Oe(s,o-5,n/8-.45,3,c,0,l-d*(n/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(u){let d=Wl(u);d!==null&&(f=1-d);let g=Number.isFinite(u?.attributes?.current_tilt_position)?Ln(u.attributes.current_tilt_position/100,0,1):0;for(let y=0;y<h.length;y++){let m=Ln(f*h.length-y,0,1);h[y].visible=m>.02,h[y].scale.y=m,h[y].rotation.x=g*.9}}}}function Wl(i){return Zi(i)?Number.isFinite(i.attributes?.current_position)?Ln(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function iy(i,t){let e=new be,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=ie(Ot.oat),l=ie(Ot.cream),h=ie(Ot.plum),f=[ie(Ot.tile),ie(Ot.paleTile)],u=ie(Ot.dark);Oe(e,i,5,t*pf,l,0,2.5,t*mf),Oe(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let O of[-i*.42,i*.42])Oe(e,i*.09,o+4,n,c,O,(o+4)/2),We(e,i*.1,o+4,5,l,O,(o+4)/2,r+1,1.5);let d=new un;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let g=new ti(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),ri(e,g,h,0,o+4);let y=i*.49,m=Math.atan2(a,y),p=Math.hypot(a,y),w=(n+11)/8,N=[[],[]];for(let O of[-1,1])for(let H=0;H<8;H++){let q=-r-5.5+(H+.5)*w,z=new ze(p*.97,2.2,w-.62);z.rotateZ(-O*m),z.translate(O*y*.5,o+5.65+a*.5,q),N[H%2].push(z)}N.forEach((O,H)=>{ri(e,Bs(O),f[H]),O.forEach(q=>q.dispose())}),We(e,4,4.5,n+12,h,0,o+a+5.6,0,1.5),Oe(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),Oe(e,s,o,1.5,u,0,o/2+4,r-4);for(let O of e.children)O.isMesh&&(O.castShadow=!0);let E=ie(Ot.mint),v=ie(Ot.sage),P=(o-3)/6,b=Array.from({length:6},(O,H)=>{let q=zs(e,0,o-(H+.5)*P+2,r+.5);return We(q,s-2,P-.7,3.4,E,0,0,0,1.2),Oe(q,s*.91,.68,.7,v,0,P*.23,1.8),H===5&&We(q,s*.13,2,2.2,l,0,0,2.3,.55),q}),L=ie(Ot.gold,{emissive:Ot.ember,emissiveIntensity:0});Pn(e,3.7,L,i*.422,o*.73,r+4.5);let F=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(O,H=0){let q=Wl(O);q!==null&&(F=q),E.color.setHex(Zi(O)?Ot.mint:Ot.muted),v.color.setHex(Zi(O)?Ot.sage:Ot.muted);let z=(1-F)*b.length;b.forEach((Q,it)=>{let pt=Ln(z-it,0,1);Q.visible=pt>.02,Q.scale.y=pt,Q.position.y=o-(it+pt/2)*P+2});let X=["opening","closing"].includes(Hl(O));L.emissiveIntensity=X?.55+(.5+.5*Math.cos(H*6)):0}}}function sy(i){let t=new be,e=46,n=ie(Ot.cream),s=ie(Ot.honey),r=Math.min(i*.86,88),o=zs(t,-r/2,0,0);for(let a of[-r/2-1,r/2+1])Oe(t,3.4,e,5,n,a,e/2);return Oe(t,r+4,3,5,n,0,e),We(o,r-2,e-4,4,s,r/2,e/2,0,2),Pn(o,2.2,ie(Ot.gold),r-6,e*.47,2.8),{root:t,anchorY:e/2,animate(a){let c=Wl(a);c!==null&&(o.rotation.y=-1.32*c),s.color.setHex(Zi(a)?Ot.honey:Ot.muted)}}}function ry(i,t,e){let n=new be,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=Ln(t*.85,23,126),a=ie(Ot.dark,{emissive:Ot.mint,emissiveIntensity:0});if(We(n,o,s?25:18,8,ie(Ot.cream),0,r,0),s){We(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])Pn(n,1.35,ie(Ot.oat),o*c,r-7,4.3)}else Oe(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,h=l==="heating",f=Zi(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(h?Ot.warm:Ot.glass),a.emissiveIntensity=f?1.15:ks(c)?.25:0}}}function oy(i,t,e){let n=new be,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=ie(Ot.cream),c=ie(r?Ot.glass:Ot.sage),l=ie(Ot.teal,{emissive:Ot.mint,emissiveIntensity:0}),h=o-1;if(Pe(n,s*.46,s*.5,4,ie(Ot.ink),0,2),r){let d=Pn(n,s/2,c,0,12,0);d.scale.y=.78,Pe(n,s*.19,s*.22,3.5,a,0,h)}else{We(n,s,24,s*.82,c,0,15,0,5),We(n,s*.91,3.8,s*.71,a,0,h);for(let d=-1;d<=1;d++)Oe(n,s*.66,1.2,1.1,l,0,h+2,d*3.5)}Pn(n,1.6,l,s*.18,h-2,s*.31);let f=ie(Ot.glass,{transparent:!0,opacity:.54,depthWrite:!1}),u=Array.from({length:3},(d,g)=>Pn(n,2.1+g*.6,f,0,h+3,0));return{root:n,anchorY:h,animate(d,g=0){let y=ks(d);l.emissiveIntensity=y?1.6:0;for(let m=0;m<u.length;m++){u[m].visible=y;let p=(g*.68+m/u.length)%1;u[m].position.set(Math.sin(p*Hr)*3.1,h+4+p*14,0),u[m].scale.setScalar(.7+p*.62)}}}}function ay(i,t){let e=new be,n=Math.min(i,t)*.42,s=ie(Ot.sage,{emissive:Ot.mint,emissiveIntensity:0}),r=ie(Ot.ink);Pe(e,n,n*.95,7,r,0,4.6),Pe(e,n*.96,n,5.5,ie(Ot.cream),0,10.2),Pe(e,n*.28,n*.33,4,ie(Ot.oat),0,14,-n*.23);for(let a of[-.27,.27])Pn(e,n*.105,r,n*a,10,n*.88);let o=We(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,animate(a,c=0){let l=["cleaning","returning"].includes(Hl(a));o.material.emissiveIntensity=l?.6+.5*Math.cos(c*6):0}}}function xf(i,t={}){let e=Gr(i.w,42),n=Gr(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?ny(e,t):s==="garageDoor"?iy(e,n):s==="door"||r==="door"?sy(e):s==="window"?df(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?df(Gr(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?ry(i,e,t):s==="airPurifier"||s==="humidifier"?oy(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?ay(e,n):s==="windowFan"?ff(i,e,n,!0):r==="fan"||/^fans-/.test(s)?ff(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?ty(i,e,n):null}var Ef=dd(_f(),1),{difference:wf,union:Tf}=Ef.default,rc=18,dn=.001,Xn=(i,t)=>i[0]*t[0]+i[1]*t[1],Ji=(i,t)=>i[0]*t[1]-i[1]*t[0],qn=(i,t)=>[i[0]-t[0],i[1]-t[1]],_e=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],ac=([i,t])=>[-t,i],yf=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],ic=i=>i.map(({x:t,y:e})=>[t,e]),oi=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],Af=i=>i.length?Tf(...i):[];function oc(i,t,e,n=0){let s=qn(t,i),r=Math.hypot(...s);if(r<dn)return null;let o=s.map(h=>h/r),a=ac(o),c=_e(i,o,-n),l=_e(t,o,n);return oi([_e(c,a,e),_e(l,a,e),_e(l,a,-e),_e(c,a,-e)])}function sc(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,h]=i[o];c>n!=h>n&&e<(l-a)*(n-c)/(h-c)+a&&(s=!s)}return s}function vf(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=qn(n,t),r=Math.hypot(...s);return r>dn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function cy(i,t,e,n){if(Math.abs(Xn(i.tangent,t.tangent))<.9999)return null;let s=ac(i.tangent),[r,o]=[t.start,t.end].map(y=>qn(y,i.start)),a=Xn(r,s);if(Math.abs(a)<.1||Math.abs(a)>rc||Math.abs(a-Xn(o,s))>.1)return null;let c=[Xn(r,i.tangent),Xn(o,i.tangent)].sort((y,m)=>y-m),l=Math.max(0,c[0]),h=Math.min(i.length,c[1]);if(h-l<8)return null;let f=_e(i.start,i.tangent,(l+h)/2),u=Math.sign(a);if(!sc(e,_e(f,s,-u))||!sc(n,_e(f,s,a+u))||sc(e,_e(f,s,a/2))||sc(n,_e(f,s,a/2)))return null;let d=_e(i.start,i.tangent,l),g=_e(i.start,i.tangent,h);return oi([_e(d,s,-u*.05),_e(g,s,-u*.05),_e(g,s,a+u*.05),_e(d,s,a+u*.05)])}function Rf(i){let t=[],e=[];for(let n of[...i].reverse()){let s=Af(n.polygons);if(!s.length)continue;let r=t.length?wf(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?Tf(t,s):s}return{footprint:t,regions:e.reverse()}}function cc(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Cf(i,t,e=!1){let n=i.map(u=>({surface:u.surface,points:ic(u.points),polygons:[oi(ic(u.points))],outdoor:e&&cc(u)})),s=[];for(let[u,d]of n.entries())for(let g of n.slice(u+1))for(let y of vf(d.points))for(let m of vf(g.points)){let p=cy(y,m,d.points,g.points);p&&s.push({surface:d.surface,polygons:[p],outdoor:d.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:u,deckEdge:d,stepBottom:g,deckBottom:y,northDeck:m,southDeck:p,recess:w}=t;r.push({surface:"patio",polygons:[oi(ic(m)),oi(ic(p)),oi(yf(u,g,d+1,y))]}),w.x2>w.x1&&w.z2>w.z1&&o.push({surface:"oak",polygons:[oi(yf(w.x1,w.z1,w.x2,w.z2))]})}let a=[...s,...n],c=[...o,...a.filter(u=>!u.outdoor)],l=[...r,...a.filter(u=>u.outdoor)],h=Rf([...l,...c]),f=t||e?Af(c.flatMap(u=>u.polygons)):[];return{...h,foundation:f}}function ly(i,t,e,n){let s=Ji(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=_e(i,ac(t),r),a=_e(i,ac(e),-r),c=Ji(qn(a,o),e)/s,l=_e(o,t,c);return Math.hypot(...qn(l,i))>n*2.5?oi([i,o,a]):oi([i,o,l,a])}function bf(i,t){let e=Ji(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=qn(t.point,i.point);return[Ji(n,t.tangent)/e,Ji(n,i.tangent)/e]}function hy(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=qn(r.point,s.point);if(Math.hypot(...o)>rc)continue;let a=bf(s,r);a&&a.every(c=>c>=-rc&&c<=dn)?e.push({a:s,b:r,center:_e(s.point,s.tangent,a[0])}):!a&&Xn(s.tangent,r.tangent)<0&&Xn(o,s.tangent)<=dn&&Xn(o,r.tangent)>=-dn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=bf(s,o);if(!a)continue;let[c,l]=a;c<-rc||c>=-dn||l<=dn||l>=r.length-dn||r.openings.some(({start:h,end:f})=>l>=h&&l<=f)||e.push({a:s,center:_e(s.point,s.tangent,c)})}}return e}function Mf({a:i,b:t,center:e},n){return e?[oc(i.point,e,n,.1),t&&oc(t.point,e,n,.1),t&&ly(e,i.tangent,t.tangent,n)].filter(Boolean):[oc(i.point,t.point,n,.1)].filter(Boolean)}function If(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function uy(i,t){return If(i).flatMap(([e,n])=>{let s=qn(n,e),r=Math.hypot(...s);if(r<dn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=qn(a,e),h=qn(c,e);if(Math.abs(Ji(l,o))>dn||Math.abs(Ji(h,o))>dn)return[];let[f,u]=[Xn(l,o),Xn(h,o)].sort((y,m)=>y-m),d=Math.max(0,f),g=Math.min(r,u);return g-d>dn?[[_e(e,o,d),_e(e,o,g)]]:[]})})}function Sf(i,t){return t?.length?wf(i,t):i}function Pf(i,t,e,n){let s=[],r=(c,l,h,f,u=0)=>{c&&h>l&&s.push({shape:c,from:l,to:h,surface:f,priority:u})};for(let c of i){let{palette:[l,h,f]}=c,u=[c.x1,c.y1],d=[c.dx,c.dz],g=(w,N,E,v,T,P,b)=>{N-w>dn&&r(oc(_e(u,d,w),_e(u,d,N),T/2),E,v,P,b)},y=c.openings.length?n:0,m=(w,N)=>{g(w,N,y,e,t,l,2),g(w,N,e-1,e+2,t+3,h,1)};y&&g(0,c.length,0,y,t,l,2);let p=0;for(let w of c.openings)m(p,w.start),p=Math.max(p,w.end);m(p,c.length),g(0,c.length,0,3,t+3,f,1)}for(let c of hy(i)){let[l,h,f]=c.a.wall.palette;for(let u of Mf(c,t/2))r(u,0,e,l,2);for(let u of Mf(c,(t+3)/2))r(u,e-1,e+2,h,1),r(u,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let h=o[l],f=new Map,u=s.filter(d=>d.from<=h&&d.to>=c);for(let{surface:d,shape:g}of u.sort((y,m)=>y.priority-m.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(g);return{...Rf([...f.values()]),bottom:h,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:h,top:f},u)=>{let d=If(l);return c.map(g=>({...g,bottom:h,top:f,faces:{top:Sf(g.polygons,a[u+1]?.footprint),bottom:h===0?[]:Sf(g.polygons,a[u-1]?.footprint),sides:uy(g.polygons,d)}}))})}var fy=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),dy=3;function Lf(i,t,e){i.toneMapping=Tr,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=Gi,i.shadowMap.autoUpdate=!1;let n=new vr("#fff4e5","#897e91",1.13),s=new Cs("#fff0d4",2.15),r=new Cs("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,h=(o+a)/2,f=(c+l)/2;s.position.set(h-610,1150,f-490),s.target.position.set(h,0,f),r.position.set(h+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let u=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:dy},()=>new Sr("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let g=[],y,m,p=!0,w=new Kt;function N(){for(let T of t.children)T.isMesh&&(T.receiveShadow=!0,T.geometry.computeBoundingBox(),T.castShadow=T.geometry.boundingBox.max.y+T.position.y>-99)}function E(T,P){let b=/(light|lamp|sconce)/i.test(T.type),L=!P.animate||b;P.root.traverse(F=>{!F.isMesh||F.material.transparent||F.material.isShaderMaterial||(F.receiveShadow=!0,F.castShadow||=L)}),b&&T.entityId&&g.push({item:T,object:P})}function v(T,P,b){let L=T.night===!0,F=fy.has(T.condition),O=L?"night":F?"cloud":"day";if(O!==y&&(n.color.set(L?"#a8b8f5":F?"#dce6f1":"#fff4e5"),n.groundColor.set(L?"#5b536e":"#998291"),n.intensity=L?.75:F?1.33:1.12,s.color.set(L?"#a7b8ed":F?"#e9eff9":"#fff0d4"),s.intensity=L?.28:F?.86:2.14,r.intensity=L?.12:.23,s.shadow.intensity=L?.65:F?.39:.84,b.color.set(L?"#97a5c5":F?"#ccd6c6":"#f4f1d8"),t.background.set(L?"#343951":"#c0cbb4"),y=O,m=void 0),m!==P){let H=g.flatMap(({item:q,object:z})=>{let X=P[q.id];if(X?.state!=="on")return[];let Q=Number.isFinite(X.attributes?.brightness)?je.clamp(X.attributes.brightness/255,0,1):1;return Q>0?[{object:z,power:Q,color:X.attributes?.rgb_color}]:[]}).sort((q,z)=>z.power-q.power);for(let[q,z]of d.entries()){let X=H[q];if(!X){z.intensity=0;continue}let{object:Q,power:it,color:pt}=X;Array.isArray(pt)&&pt.length===3&&pt.every(Number.isFinite)?(w.setRGB(...pt.map(ot=>je.clamp(ot/255,0,1)),Re),z.color.copy(w)):z.color.set("#ffd5a2"),z.position.copy(Q.root.position),z.position.y+=Math.max(18,Q.anchorY-9),z.intensity=it*(L?2350:1250)}m=P}p&&(i.shadowMap.needsUpdate=!0,p=!1)}return{markStructure:N,register:E,update:v,dispose:()=>s.shadow.dispose()}}var ai=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),Vs=Object.freeze({top:ai("Top down",0,0),high:ai("High angle",0,15),dollhouse:ai("Dollhouse",2,30),corner:ai("Corner",45,40),north:ai("From north",180,42),east:ai("From east",90,42),south:ai("From south",0,42),west:ai("From west",270,42),free:ai("Free view",0,25)});function Nf(i,t=!1){let e=Object.entries(Vs).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="top",i.disabled=!1}function $i(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(Vs,t.preset)?t.preset:"top",n=Vs[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?je.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?je.clamp(t.zoom,.6,2.5):n.zoom}}function Df(i){let t=$i(i);return{...t,preset:"free",tilt:t.tilt||Vs.free.tilt}}function Yl(i,t,e,n,s="top"){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let r=$i(s),o=je.degToRad(r.azimuth),a=je.degToRad(r.tilt),c=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),l=new G(Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a));i.up.set(-Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)),i.position.copy(c).addScaledVector(l,1900),i.lookAt(c),i.updateMatrixWorld(!0);let h=new kn,f=new G;for(let p of[t.minX-37,t.maxX+37])for(let w of[t.minZ-53,t.maxZ+36])for(let N of[-111,92])h.expandByPoint(f.set(p,N,w).applyMatrix4(i.matrixWorldInverse));let u=e/n,d=Math.max((h.max.x-h.min.x)/2,(h.max.y-h.min.y)/2*u),g=d/u,y=(h.min.x+h.max.x)/2,m=(h.min.y+h.max.y)/2;return i.left=y-d,i.right=y+d,i.bottom=m-g,i.top=m+g,i.zoom=r.zoom,i.updateProjectionMatrix(),r}var hc=Math.PI/180,Kl=14,Wf=56,py=21,ci=-111,Ki=-108,Xf=14,my=28,Zl=28,Uf={minX:0,maxX:1536,minZ:0,maxZ:1024},Jl={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},$l={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},gy=new Set(["cloudy","partlycloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),xy=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),_y=new Set(["snowy","snowy-rainy","hail"]),Ff={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42},yy=new Set(["waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]);function fc(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function uc(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function qf(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function Yf(i,t,e,n){let s=i.some(o=>uc(o,e-t.dz*23,n+t.dx*23));return i.some(o=>uc(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function vy(i,t,e){if(!Object.hasOwn(Ff,e.type))return null;let n=qf(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):Yf(i,s,r,o),l=(Kl/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(Ff[e.type],Wf-8)}}function Of(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function Bf(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function by(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function zf(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function lc(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function Zf(i){return Object.hasOwn($l,i.finish)?$l[i.finish]:$l.graphite}function kf(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle),a=n*r+s*o,c=-n*o+s*r;if(Math.abs(a)>i.item.w/2+5||Math.abs(c)>i.item.h/2+5)return null;let l=je.clamp(c/i.item.h+.5,0,1);return Ki-Ki*l}function My(i,t,e){return uc(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?je.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=Kl/2})}function Sy(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,o=t.some(h=>My(h,n,s))?0:ci,a=o;for(let h of e){let f=kf(h,i.x1,i.y1),u=kf(h,i.x2,i.y2);if(f!==null&&u!==null){o=f,a=u;break}}let[,c,l]=Zf(i);return{...i,base1:o,base2:a,color:i.finish?c:"#896e79",postColor:i.finish?l:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/my)))}}function jl(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(v=>v?.points?.length>=3&&v.points.every(T=>Number.isFinite(T?.x)&&Number.isFinite(T?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(v=>!cc(v)):e,s=i.walls.map(Of).filter(Boolean),r=s.filter(v=>v.kind!=="fence"),o=i.items.filter(v=>typeof v?.id=="string"&&typeof v.type=="string"&&[v.x,v.y,v.w,v.h].every(Number.isFinite)&&v.w>0&&v.h>0),a=zf(),c=zf(),l=(v,T)=>lc(a,v,T);for(let v of e)for(let T of v.points)l(T.x,T.y);for(let v of s)l(v.x1,v.y1),l(v.x2,v.y2);for(let v of n)for(let T of v.points)lc(c,T.x,T.y);for(let v of r)lc(c,v.x1,v.y1),lc(c,v.x2,v.y2);let h={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:Uf},f=new Map(r.map(v=>[v.id,v])),u=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(v=>f.has(v))?{left:h.minX-108,deckEdge:h.minX-10,stepTop:h.minZ+14,stepBottom:h.maxZ+25,deckBottom:h.maxZ+82,northDeck:[[h.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[h.minX-10,f.get("w4").y2]].map(([v,T])=>({x:v,y:T})),southDeck:[[h.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,h.maxZ+82],[h.minX-10,h.maxZ+82]].map(([v,T])=>({x:v,y:T})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(v=>u?!(v.id==="w3"&&Bf(v,[400,408,342,468]))&&!(v.id==="w7"&&Bf(v,[248,590,302,651])):!0);if(u){l(u.left,u.stepTop),l(u.deckEdge,u.deckBottom);let{x1:v,x2:T,z1:P}=u.recess;if(T>v){let b=[[v,f.get("w12").y2,v,P],[v,P,T,P]];for(let[L,F]of b.entries()){if(d.some(Q=>by(Q,F)))continue;let[O,H,q,z]=F,X=Of({id:`reference-recess-${L}`,x1:O,y1:H,x2:q,y2:z});X&&d.push(X)}}}let g=new Map;for(let v of o.filter(T=>T.type==="window")){let T=qf(d,v.x,v.y,(v.rotation||0)*hc);if(!T||T.distance>27)continue;let{wall:P,t:b,centerX:L,centerZ:F}=T,O=Math.max(1,b-v.w/2+1),H=Math.min(P.length-1,b+v.w/2-1);if(H-O<14)continue;P.openings.push({start:O,end:H});let q=Yf(n,P,L,F),z=P.angle+(q<0?Math.PI:0),X=(O+H)/2;g.set(v.id,{x:P.x1+X*P.dx,z:P.y1+X*P.dz,angle:z,window:{...v,w:H-O+2,rotation:z/hc}})}let y=o.filter(v=>v.type==="garageDoor"),m=o.map(v=>{let T=v.type==="cameraThumbnail"&&y.some(X=>Uy(v,X))?ci:Kf(v.type),P=v.type==="controlZone"&&(v.visualKind==="window"||v.entityId?.startsWith("cover.")),b=g.get(v.id)??vy(n,d,v);if(P){let X=52;for(let Q of g.values()){let it=Math.hypot(Q.x-v.x,Q.z-v.y);it<X&&(b=Q,X=it)}}let L=b?.x??v.x,F=b?.z??v.y,O=b?.angle??(Number.isFinite(v.rotation)?v.rotation*hc:0),H=v.type==="stairs"?1536:300,q=Math.min(H,(Math.abs(Math.cos(O))*v.w+Math.abs(Math.sin(O))*v.h)/2),z=Math.min(H,(Math.abs(Math.sin(O))*v.w+Math.abs(Math.cos(O))*v.h)/2);return l(L-q,F-z),l(L+q,F+z),{item:v,x:L,z:F,baseY:T,angle:O,window:b?.window,mountY:b?.mountY,isBlind:P}});for(let v of d)v.openings.sort((T,P)=>T.start-P.start||T.end-P.end);let p=m.filter(({item:v})=>v.type==="stairs").map(v=>{let{item:T,x:P,z:b,angle:L}=v,F=Number.isInteger(T.steps)&&T.steps>=2&&T.steps<=40?T.steps:Xf,O=Math.min(46,Math.max(12,T.w*.47)),H=-T.h/2-O;for(let q of[-T.w/2,T.w/2])l(P+q*Math.cos(L)-H*Math.sin(L),b+q*Math.sin(L)+H*Math.cos(L));return{...v,steps:F,apronDepth:O}}),w=s.filter(v=>v.kind==="fence").map(v=>Sy(v,e,p)),N=Cf(e,u,t),E=Pf(d.map(v=>({...v,palette:Zf(v)})),Kl,Wf,py);return Number.isFinite(a.minX)||Object.assign(a,Uf),{rooms:e,walls:d,fences:w,stairs:p,placements:m,bounds:a,houseBounds:h,reference:u,floorStructure:N,wallStructure:E,editableStructure:t}}function Vf(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function Ql([i,...t]){let e=Vf(new un,i);return e.holes=t.map(n=>Vf(new Bi,n)),e}function Ey(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=fc(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let h=0;h<8;h++){let f=h*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let u=30+h*47%181;s.fillRect(u,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=c()*256,y=f+3+c()*27,m=12+c()*46;s.beginPath(),s.moveTo(g,y),s.quadraticCurveTo(g+m/2,y+c()*2-1,g+m,y),s.stroke()}}else if(a==="tile")for(let h=0;h<8;h++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,h*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,h*32+.5,31,31);else for(let h=0;h<160;h++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new ws(n);return l.colorSpace=Re,l.wrapS=l.wrapT=Ui,l}function Jf(i){let t=new Map,e=new ue,n=new xn,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new Vi({color:d})),a.get(d));function l(d,g,y,m,p,w=0){n.setFromAxisAngle(r,w),e.compose(s.set(y,m,p),n,o),d.applyMatrix4(e);let N=c(g);t.has(N)||t.set(N,[]),t.get(N).push(d)}function h(d,g,y,m,p,w,N,E=0){d>0&&g>0&&y>0&&l(new ze(d,g,y),m,p,w,N,E)}function f(d,g,y,m,p,w,N){let E=new wn(1,9,6);E.scale(d,g,y),l(E,m,p,w,N)}function u(){for(let[d,g]of t){let y=Bs(g);if(!y){for(let m of g)i.add(new xe(m,d));continue}i.add(new xe(y,d));for(let m of g)m.dispose()}t.clear()}return{add:l,ball:f,box:h,material:c,finish:u}}function wy(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(Jl,r)?r:"oak";if(!s.has(a)){let c=Jl[a],l=Ey(n,c,141+Object.keys(Jl).indexOf(a)*977);s.set(a,new Vi({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new vi(Ql(c));l.rotateX(-Math.PI/2);let h=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,h.getX(d)/248,h.getZ(d)/248);let u=new xe(l,s.get(a));u.receiveShadow=!0,i.add(u)}}for(let r of e.floorStructure.footprint)Gf(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)Gf(t,r,ci-1,-22,"#a18e84",!0)}function Ty(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new De(e,1))}return i}function Gf(i,t,e,n,s,r=!1){let o=new ti(Ql(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(h=>a.getZ(h)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(Ty(o),s,0,e,0)}function Ay(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let h=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(h,h+1,h+2,h,h+2,h+3),s.push(0,0,0,t,f,t,f,0)}let r=new Se;return r.setAttribute("position",new ae(e,3)),r.setAttribute("uv",new ae(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function Hf(i,t){let e=new vi(Ql(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function Ry(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(Hf(o,!1),r,0,s,0);for(let o of e.bottom)i.add(Hf(o,!0),r,0,n,0);e.sides.length&&i.add(Ay(e.sides,s-n),r,0,n,0)}}function Cy(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:h,angle:f,posts:u,color:d,postColor:g}=n,y=l-c,m=new ze(Math.hypot(h,y),5,7);m.rotateZ(Math.atan2(y,h)),i.add(m,d,(s+o)/2,(c+l)/2+Zl,(r+a)/2,-f);for(let p=0;p<=u;p++){let w=p/u,N=je.lerp(s,o,w),E=je.lerp(r,a,w),v=je.lerp(c,l,w),T=[N,v,E].map(P=>Math.round(P*1e3)).join(",");e.has(T)||(e.add(T),i.box(5,Zl,5,g,N,v+Zl/2,E,-f))}}}function $f(i,t,e,n,s=0,r=0){let o=e/n,a=-Ki/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let h=0;h<n;h++){let f=r-e/2+o*h,u=h===n-1?0:Ki+(h+1)*a,d=u-3;i.box(t,d-ci,o,"#a98075",s,(ci+d)/2,f+o/2),i.box(t,3,o-c,h%2?"#e4c5a8":"#d9b79a",s,u-1.5,f+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,d+3.35/2,f+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,d+3.4/2,f+l/2)}}function Iy({item:i,steps:t,apronDepth:e}){let n=new be,s=Jf(n);$f(s,i.w,i.h,t);let r=Ki-ci;return s.box(i.w,r,e,"#c8b79e",0,ci+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:Ki/2}}function Py(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=Xf,h=r-s,f=h/l,u=Ki,d=-u/l;$f(i,a,h,l,c,(s+r)/2);for(let E=0;E<l;E++){let v=s+f*(E+.5),T=u+(E+1)*d;i.box(5,24,5,"#9f8183",e+4,T+12,v)}let g=f*(l-1),y=d*(l-1),m=new ze(7,5,Math.hypot(g,y)+5);m.rotateX(-Math.atan2(y,g)),i.add(m,"#896e79",e+4,24-y/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,u-1.5,s-40);let[p,w]=o,N=Math.max(2,Math.ceil((w.x-p.x)/28));i.box(w.x-p.x,5,7,"#896e79",(w.x+p.x)/2,28,p.y);for(let E=0;E<=N;E++)i.box(5,28,5,"#9f8183",p.x+(w.x-p.x)*E/N,14,p.y)}function Ly(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=fc(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let h of[-512,0,512]){let f=e.createRadialGradient(o+l,a+h,0,o+l,a+h,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+h-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new ws(t);return s.wrapS=s.wrapT=Ui,s.repeat.set(15,10),s.colorSpace=Re,s.anisotropy=4,s}function Ny(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,c=fc(150741);if(!t.editableStructure){let h=Math.min(90,o*.18),f=t.reference?t.reference.left+h/2:e+h/2;i.box(h,4,115,"#c7baa4",f,-109,s-88);for(let u=0;u<5;u++)i.box(h*.85,1.8,13,"#dbceba",f,-106,s-137+u*20)}let l=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[h,f]of l){let u=e+h*o,d=s+f*a,g=21+c()*24;i.ball(g*.94,9,g*.67,"#6d886a",u,-104,d),i.ball(g*.82,g*.57,g*.69,"#819b76",u+3,-98,d);for(let y=0;y<8;y++){let m=y*2.39996,p=(.2+c()*.5)*g,w=g*(.28+c()*.2),N=["#94ad7f","#a6ba88","#8da878","#bad09c"][y%4];i.ball(w*1.15,w*.8,w,N,u+Math.cos(m)*p,-93+12*c(),d+Math.sin(m)*p*.75)}for(let y=0;y<5;y++){let m=y%2?"#e6c4b1":"#fae6a4",p=u+(c()-.5)*g*1.14,w=d+g*(.62+c()*.43);i.ball(2.3,4.6,2.3,"#819765",p,-106,w),i.ball(3.9,1.8,3.3,m,p,-101.5,w),i.ball(1.2,.9,1.2,"#cb9c57",p,-100.3,w)}}}function Dy(i,t){let{minX:e,maxX:n,minZ:s}=t.houseBounds,r=fc(2912),o=t.bounds,a=new be,c=new Vi({color:"#f8ebdf",transparent:!0,opacity:.9}),l=new wn(1,12,8),h=n-e;for(let[L,F]of[.19,.53,.82].entries()){let O=e+h*F,H=s-55-L%2*34;for(let q=0;q<3;q++){let z=new xe(l,c);z.scale.set(32+r()*21,15+r()*10,25+r()*10),z.position.set(O+q*31,27+5*(q===1),H),a.add(z)}}i.add(a);let f=new be;f.position.set(e+h*.77,21,s-70);let u=new xe(new wn(17,16,10),new Qn({color:"#ffe2a1"}));f.add(u);let d=new be,g=new xe(u.geometry,new Qn({color:"#f9e5c6"}));d.add(g);let y=new xe(u.geometry,new Qn({color:"#7d7c97"}));y.position.set(4,4,1),y.scale.setScalar(.96),d.add(y),f.add(d),i.add(f);let m=[],p=t.reference?.recess,w=(L,F)=>!(p&&L>=p.x1&&L<=p.x2&&F>=p.z1&&F<=p.z2)&&!t.rooms.some(O=>(!t.editableStructure||!cc(O))&&uc(O,L,F));for(let L=0;L<190;L++){let F=o.minX-70+(o.maxX-o.minX+140)*r(),O=o.minZ-70+(o.maxZ-o.minZ+140)*r();w(F,O)&&m.push({x:F,z:O,phase:r()*180})}let N=new Float32Array(m.length*6),E=new Float32Array(m.length*3),v=new Se,T=new Se;v.setAttribute("position",new De(N,3).setUsage(Za)),T.setAttribute("position",new De(E,3).setUsage(Za));let P=new ar(v,new Ss({color:"#cce5ef",transparent:!0,opacity:.66})),b=new cr(T,new Es({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return P.frustumCulled=b.frustumCulled=!1,i.add(P,b),(L,F,O)=>{let{night:H=!1,condition:q="",moonPhase:z="",daylightKnown:X=!0}=F,Q=O?0:L;a.visible=gy.has(q),a.position.x=Math.sin(Q*.16)*(q.includes("windy")?48:23),u.visible=X&&!H,d.visible=X&&H&&yy.has(z),y.visible=z!=="full_moon";let it=z.startsWith("waxing")||z==="first_quarter",pt=z.endsWith("quarter");if(y.position.x=(it?-1:1)*(pt?8:z.endsWith("gibbous")?14:5),P.visible=xy.has(q),b.visible=_y.has(q),P.visible||b.visible){for(let[rt,ot]of m.entries()){let ft=65-(ot.phase+Q*150)%170,vt=65-(ot.phase+Q*20)%170,_t=rt*6;N.set([ot.x,ft,ot.z,ot.x-4,ft+22,ot.z+3],_t),E.set([ot.x+Math.sin(Q+rt)*6,vt,ot.z],rt*3)}v.attributes.position.needsUpdate=P.visible,T.attributes.position.needsUpdate=b.visible}}}function Kf(i){return i==="garageDoor"?ci:0}function Uy(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*hc,r=Math.cos(s),o=Math.sin(s);return gf(t,e*r+n*o,-e*o+n*r)}function Fy(i,t,e){if(t.item.type!=="plant")return 0;for(let n of i.placements){if(!["table","coffeeTable","sideTable"].includes(n.item.type))continue;let s=t.x-n.x,r=t.z-n.z,o=s*Math.cos(n.angle)+r*Math.sin(n.angle),a=-s*Math.sin(n.angle)+r*Math.cos(n.angle);if(Math.abs(o)<n.item.w*.35&&Math.abs(a)<n.item.h*.35)return e.get(n.item.id)?.anchorY??0}return 0}function jf(i,t){let e=jl(t),n=new Qa({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"}),s=new sr;s.background=new Kt("#d7dfcd");let r=new Ei(-800,800,450,-450,1,4400),{minX:o,maxX:a,minZ:c,maxZ:l}=e.bounds,h=new ni({color:"#e8e8d2",map:Ly(i.ownerDocument),roughness:.95}),f=new xe(new ei(6200,4200),h);f.rotation.x=-Math.PI/2,f.position.set((o+a)/2,ci,(c+l)/2),s.add(f);let u=Jf(s);Ny(u,e),Py(u,e),wy(s,u,e,i.ownerDocument),Ry(u,e),Cy(u,e.fences),u.finish();let d=s.children.filter(vt=>vt.isMesh),g=Lf(n,s,e.bounds);g.markStructure();let y=Dy(s,e),m=new Map,p=new Map,w=new Map,N=new Map(e.stairs.map(vt=>[vt.item.id,vt]));for(let vt of e.placements){let{item:_t,x:qt,z:Nt,baseY:Bt,angle:st,window:ht,mountY:Tt,isBlind:zt}=vt,Rt=_t.type==="window"&&ht?ht:_t,Dt=N.get(_t.id),Qt=Dt?Iy(Dt):xf(Rt,{window:zt?ht:void 0,mountY:Tt})??uf(Rt);Qt&&(Qt.root.position.set(qt,Bt,Nt),Qt.root.rotation.y=-st,s.add(Qt.root),p.set(_t.id,Qt),_t.type==="garageDoor"&&w.set(Qt.root,_t.id),g.register(_t,Qt)),m.set(_t.id,{x:qt,z:Nt,baseY:Bt,object:Qt})}for(let vt of e.placements){let _t=p.get(vt.item.id);_t&&(_t.root.position.y+=Fy(e,vt,p))}let E=new G,v=!1,T=0,P=0,b=$i(),L=new Er,F=new ln(new G(0,1,0),0),O=new G,H=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function q(vt,_t){if(v||vt<1||_t<1||vt===T&&_t===P)return;T=vt,P=_t;let qt=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(qt,1.5,Math.sqrt(27e5/(vt*_t)))),n.setSize(vt,_t,!1),b=Yl(r,e.bounds,vt,_t,b)}function z(vt){return b=$i(vt),!v&&T>0&&P>0&&(b=Yl(r,e.bounds,T,P,b)),X()}function X(){return{...b}}function Q(vt,_t){return v||!Number.isFinite(vt)||!Number.isFinite(_t)||T<=0||P<=0?!1:(L.setFromCamera(new Et(vt/T*2-1,1-_t/P*2),r),!0)}function it(vt,_t,qt){return Q(vt,_t)?(F.constant=-Kf(qt),L.ray.intersectPlane(F,O)?{x:O.x,y:O.z}:null):null}function pt(vt,_t){if(!w.size||!Q(vt,_t))return null;let qt=[];for(let Bt of w.keys())Bt.traverseVisible(st=>{st.isMesh&&qt.push(st)});let Nt=L.intersectObjects(qt,!1)[0];if(!Nt||L.intersectObjects(d,!1).some(Bt=>Bt.distance<Nt.distance-.01))return null;for(let Bt=Nt.object;Bt;Bt=Bt.parent)if(w.has(Bt))return w.get(Bt);return null}function rt(vt=0,_t={},qt={}){if(v||T<1||P<1)return;g.update(qt,_t,h);let Nt=qt.reduceMotion===!0,Bt=Number.isFinite(vt)?vt:0;y(Bt,qt,Nt);for(let[st,ht]of p){let Tt=_t[st]??H,zt=Tt.position;zt&&Number.isFinite(zt.x)&&Number.isFinite(zt.y)&&(ht.root.position.x=zt.x,ht.root.position.z=zt.y),ht.animate?.(Tt,Nt?0:Bt)}n.render(s,r)}function ot(vt){let _t=m.get(vt);if(!_t||T<1||P<1)return null;let{x:qt,z:Nt,baseY:Bt,object:st}=_t;return st?(E.set(st.anchorOffset?.x||0,st.anchorY||0,st.anchorOffset?.z||0),st.root.localToWorld(E)):E.set(qt,Bt+6,Nt),E.project(r),{x:(E.x+1)/2,y:(1-E.y)/2}}function ft(){if(v)return;v=!0;let vt=new Set,_t=new Set,qt=new Set;s.traverse(Nt=>{Nt.geometry&&vt.add(Nt.geometry);for(let Bt of Array.isArray(Nt.material)?Nt.material:[Nt.material])if(Bt){_t.add(Bt);for(let st of Object.values(Bt))st?.isTexture&&qt.add(st)}});for(let Nt of qt)Nt.dispose();for(let Nt of vt)Nt.dispose();for(let Nt of _t)Nt.dispose();g.dispose(),n.dispose()}return{resize:q,render:rt,anchor:ot,setView:z,getView:X,projectToPlan:it,pickGarage:pt,dispose:ft}}var Qf=.35,dc=7.5,Oy=8;function td(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let m=t();return m?.preset==="free"?m:null},o=()=>{let[m,p]=s.values();return Math.hypot(m.x-p.x,m.y-p.y)};function a(m,p){let w=$i({...m,...p});(w.azimuth!==m.azimuth||w.tilt!==m.tilt||w.zoom!==m.zoom)&&e(w)}function c(m){i.hasPointerCapture(m)&&i.releasePointerCapture(m)}function l(){for(let m of[...s.keys()])s.delete(m),c(m)}function h(m){if(!r()||m.defaultPrevented||m.button!==0||!n(m))return;let p=m.pointerType==="touch";if(!(s.size>=2||s.size&&(!p||!s.values().next().value.touch))){try{i.setPointerCapture(m.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(m.pointerId,{x:m.clientX,y:m.clientY,touch:p}),m.preventDefault()}}function f(m){let p=s.get(m.pointerId);if(!p)return;let w=r();if(!w){l();return}let N=s.size===2,E=N?o():0,v={x:m.clientX,y:m.clientY,touch:p.touch};if(s.set(m.pointerId,v),m.preventDefault(),N){let T=o();Math.min(E,T)>=Oy&&a(w,{zoom:w.zoom*T/E});return}a(w,{azimuth:w.azimuth-(v.x-p.x)*Qf,tilt:w.tilt+(v.y-p.y)*Qf})}function u(m){s.delete(m.pointerId)&&c(m.pointerId)}function d(m){let p=r();if(!p||!Number.isFinite(m.deltaY)||!m.deltaY)return;let w=m.deltaMode===1?16:m.deltaMode===2?i.clientHeight:1,N=Math.max(-350,Math.min(350,m.deltaY*w));m.preventDefault(),m.stopPropagation(),a(p,{zoom:p.zoom*Math.exp(-N*.002)})}function g(m){let p=r();if(!p||m.altKey||m.ctrlKey||m.metaKey||m.defaultPrevented)return;let w;switch(m.key){case"ArrowLeft":w={azimuth:p.azimuth-dc};break;case"ArrowRight":w={azimuth:p.azimuth+dc};break;case"ArrowUp":w={tilt:p.tilt-dc};break;case"ArrowDown":w={tilt:p.tilt+dc};break;case"+":case"=":w={zoom:p.zoom*1.1};break;case"-":w={zoom:p.zoom/1.1};break;default:return}m.preventDefault(),m.stopPropagation(),a(p,w)}let y=[["pointerdown",h],["pointermove",f],["pointerup",u],["pointercancel",u],["lostpointercapture",u],["wheel",d,{passive:!1}],["keydown",g]];for(let[m,p,w]of y)i.addEventListener(m,p,w);return{cancel:l,dispose(){l();for(let[m,p,w]of y)i.removeEventListener(m,p,w)}}}function ed(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),h;for(let f=0;f<=3&&!h;f++)for(let[u,d]of f===0?s.slice(0,1):s.slice(1)){let g=o(a.x+u*f*34,c/2,t-c/2),y=o(a.y+d*f*34,l/2,e-l/2);if(n.every(m=>Math.abs(g-m.x)>=(c+m.w)/2+2||Math.abs(y-m.y)>=(l+m.h)/2+2)){h={...a,x:g,y,w:c,h:l};break}}h&&n.push(h)}return n}var By=22,zy=5;function ky(i,t,e){let n=ed(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let h=o/2;h<=t-o/2;h+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:h,y:f,w:o,h:a});c.sort((h,f)=>Math.hypot(h.x-r.x,h.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(h=>n.every(f=>Math.abs(h.x-f.x)>=(h.w+f.w)/2+2||Math.abs(h.y-f.y)>=(h.h+f.h)/2+2));l&&n.push(l)}return n}function Vy(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function Gy(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let h=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=h<=By;return!f&&(a.type==="garageDoor"||!Vy(a,e))?[]:[{item:a,index:c,distance:h,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function Hy(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;Nf(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneReset"),c=i.createElement("label");c.className="scene-dashboard-look",c.hidden=!0,c.title="Lighting and device appearance from the last dashboard import";let l=i.createElement("input");l.type="checkbox",l.checked=!0,c.append(l," Dashboard look"),r.closest(".scene-view-toolbar")?.append(c);let h=i.createElement("div");h.className="scene-selection",h.setAttribute("aria-hidden","true"),Object.assign(h.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(h);let f=i.createElement("div");f.className="scene-placeholders",Object.assign(f.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(f);let u=i.createElementNS("http://www.w3.org/2000/svg","svg");u.classList.add("scene-placeholder-leaders"),u.setAttribute("aria-hidden","true"),Object.assign(u.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(u,f);let d=new Map,g=i.getElementById("miniHelp"),y=g?.textContent,m=n.getAttribute("aria-label")??"Editable three-dimensional home view",p,w,N,E={preset:"top"},v=r.value,T="top",P,b,L=!1,F=()=>v!=="plan",O=()=>v==="free",H=()=>n.getBoundingClientRect(),q=gt=>{let B=H();return{x:gt.clientX-B.left,y:gt.clientY-B.top}};function z(gt){e.showStatus?.(gt)}function X(gt){if(!p||!F())return;let{width:B,height:kt}=H();if(!B||!kt)return;p.resize(B,kt);let Pt=e.getPreview?.();c.hidden=!Pt?.environment;let D=!c.hidden&&l.checked,M=Object.create(null);if(D)for(let C of w.items){let I=Pt.states?.[C.id];I&&I.entityId===C.entityId&&(M[C.id]=I)}for(let[C,I]of Object.entries(gt??{}))M[C]={...M[C],...I};let $=D?Pt.environment:{night:!1,condition:"sunny",daylightKnown:!0};if(p.render(0,M,{...$,reduceMotion:!0}),O())return;let tt=[];for(let[C,I]of d){let V=p.anchor(C);I.hidden=!V,V&&tt.push({id:C,marker:I,x:V.x*B,y:V.y*kt,w:96,h:44})}let ct=ky(tt,B,kt),U=new Set(ct.map(C=>C.id)),x=[];for(let C of ct){let{marker:I,x:V,y:k,w:j,h:K,id:xt}=C;Object.assign(I.style,{left:`${V}px`,top:`${k}px`,width:`${j}px`,height:`${K}px`});let R=tt.find(J=>J.id===xt);if(Math.hypot(R.x-V,R.y-k)>8){let J=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[W,dt]of Object.entries({x1:R.x,y1:R.y,x2:V,y2:k}))J.setAttribute(W,dt);J.setAttribute("stroke","#6f816b"),J.setAttribute("stroke-width","1"),J.setAttribute("stroke-dasharray","3 3"),x.push(J)}}for(let[C,I]of d)I.hidden=!U.has(C);u.replaceChildren(...x);let _=e.getSelection(),S=_?.kind==="item"?p.anchor(_.id):null;h.style.display=S?"block":"none",S&&(h.style.left=`${S.x*B}px`,h.style.top=`${S.y*kt}px`)}function Q(){if(!P)return;let gt=P;P=void 0;try{n.releasePointerCapture(gt.pointerId)}catch{}gt.item&&X({[gt.item.id]:{position:{x:gt.item.x,y:gt.item.y}}})}function it(){for(let gt of Object.values(o))gt&&(gt.disabled=!F())}function pt(){n.tabIndex=O()?0:-1,n.style.cursor=O()?"grab":"",n.setAttribute("aria-label",O()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":m)}function rt(gt){st.cancel(),Q();let B=p?.getView()??E,kt=Object.hasOwn(Vs,gt)?gt:"plan";kt!=="plan"&&e.useSelectTool?.(),v=kt,F()&&!O()&&(T=v),r.value=v,n.hidden=!F(),pt();let Pt=F()&&!O();if(f.style.display=Pt?"block":"none",u.style.display=Pt?"block":"none",Pt||(h.style.display="none"),g&&(O()?g.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":g.textContent=F()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":y),s.classList.toggle("scene-3d",F()),it(),!F()){c.hidden=!0,z("Plan view \xB7 edit rooms, walls, floors and objects");return}let D=O()?Df(B):{preset:v};E=p?p.setView(D):D,ft(),p&&z(O()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function ot(){st.cancel(),p?.dispose(),p=void 0,N=void 0,v="plan",r.value=v,n.hidden=!0,c.hidden=!0,pt(),f.style.display="none",u.style.display="none",g&&(g.textContent=y),s.classList.remove("scene-3d"),h.style.display="none",it(),z("3D view is unavailable on this screen. Plan view is ready.")}function ft(){if(L||!F())return;let gt=e.getProject(),B=JSON.stringify(gt);try{if(!p||B!==N){Q(),p&&(E=p.getView()),p?.dispose(),p=void 0,w=gt,p=jf(n,w),p.setView(E),N=B,d.clear(),f.replaceChildren();for(let kt of w.items.filter(Pt=>Pt.type==="cameraThumbnail"||Pt.type.startsWith("ui"))){let Pt=i.createElement("button");Pt.type="button",Pt.className="scene-placeholder",Pt.textContent=kt.name||(kt.type==="cameraThumbnail"?"Camera":"Interface"),Pt.setAttribute("aria-label",`Select ${Pt.textContent}`),Object.assign(Pt.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),Pt.addEventListener("pointerdown",D=>ht(D,kt.id)),Pt.addEventListener("click",D=>{!O()&&D.detail===0&&(e.selectItem(kt.id),X())}),d.set(kt.id,Pt),f.append(Pt)}}X()}catch{ot()}}function vt(gt){!p||!F()||(Q(),p.setView(gt(p.getView())),E=p.getView(),X())}let _t=()=>ft(),qt=()=>{let gt=e.getTool();F()&&gt!=="select"?rt("plan"):O()&&e.hasPlacement()?rt(T):F()&&X()},Nt=()=>rt(r.value),Bt=()=>{t.cancelAnimationFrame(b),b=t.requestAnimationFrame(()=>X())},st=td(n,{getView:()=>O()?p?.getView():null,onChange:gt=>{!p||!O()||(E=p.setView(gt),Bt())}}),ht=(gt,B=null)=>{if(!F()||O()||!p||gt.button!==0||P)return;gt.preventDefault(),gt.stopPropagation();let kt=q(gt);if(e.hasPlacement()){let U=p.projectToPlan(kt.x,kt.y,e.getPlacementType());U&&e.placeAt(U.x,U.y),ft();return}let{width:Pt,height:D}=H(),M=new Map(w.items.map(U=>[U.id,p.anchor(U.id)])),$=B??p.pickGarage(kt.x,kt.y),tt=$?w.items.find(U=>U.id===$):Gy(w.items,kt,p.projectToPlan(kt.x,kt.y),M,Pt,D);if(e.selectItem(tt?.id??null),!tt){X();return}let ct=p.projectToPlan(kt.x,kt.y,tt.type);ct&&(P={item:{...tt},startScreen:kt,startPlan:ct,pointerId:gt.pointerId},n.setPointerCapture(gt.pointerId),X())},Tt=gt=>{if(!F()||O()||(gt.stopPropagation(),!P||P.pointerId!==gt.pointerId||!p))return;let B=q(gt);if(!P.moved&&Math.hypot(B.x-P.startScreen.x,B.y-P.startScreen.y)<zy)return;let kt=p.projectToPlan(B.x,B.y,P.item.type);kt&&(P.moved=!0,P.position={x:P.item.x+kt.x-P.startPlan.x,y:P.item.y+kt.y-P.startPlan.y},X({[P.item.id]:{position:P.position}}))},zt=gt=>{if(!F()||O()||(gt.stopPropagation(),!P||P.pointerId!==gt.pointerId))return;let B=P;P=void 0;try{n.releasePointerCapture(gt.pointerId)}catch{}B.moved&&B.position?(e.moveItem(B.item.id,B.position.x,B.position.y),ft()):X()},Rt=gt=>{O()||(P?.pointerId===gt.pointerId&&Q(),gt.stopPropagation())},Dt=gt=>{!F()||O()||(gt.preventDefault(),gt.stopPropagation(),vt(B=>({...B,zoom:B.zoom*(gt.deltaY<0?1.1:1/1.1)})))},Qt=gt=>{O()&&gt.target===n&&(gt.key==="Delete"||gt.key==="Backspace")&&(gt.preventDefault(),gt.stopImmediatePropagation()),gt.key==="Escape"&&P&&(gt.preventDefault(),gt.stopImmediatePropagation(),Q())},ut=gt=>{gt.preventDefault(),ot()},yt=()=>vt(gt=>({...gt,azimuth:gt.azimuth-15})),Mt=()=>vt(gt=>({...gt,azimuth:gt.azimuth+15})),St=()=>vt(gt=>({...gt,zoom:gt.zoom/1.2})),wt=()=>vt(gt=>({...gt,zoom:gt.zoom*1.2})),Xt=()=>rt("top"),Ht=()=>X();o.left?.addEventListener("click",yt),o.right?.addEventListener("click",Mt),o.out?.addEventListener("click",St),o.in?.addEventListener("click",wt),a?.addEventListener("click",Xt),l.addEventListener("change",Ht),r.addEventListener("change",Nt),n.addEventListener("pointerdown",ht),n.addEventListener("pointermove",Tt),n.addEventListener("pointerup",zt),n.addEventListener("pointercancel",Rt),n.addEventListener("lostpointercapture",Rt),n.addEventListener("wheel",Dt,{passive:!1}),n.addEventListener("webglcontextlost",ut),t.addEventListener("keydown",Qt,!0),t.addEventListener("roomcraft-editor-change",_t),t.addEventListener("roomcraft-editor-tool",qt);let Yt=new t.ResizeObserver(Bt);return Yt.observe(s),rt(v),{getView:()=>p?.getView()??{...E},setView:rt,dispose(){L=!0,Q(),st.dispose(),v="plan",pt(),Yt.disconnect(),t.cancelAnimationFrame(b),p?.dispose(),p=void 0,h.remove(),f.remove(),u.remove(),c.remove(),l.removeEventListener("change",Ht),g&&(g.textContent=y),o.left?.removeEventListener("click",yt),o.right?.removeEventListener("click",Mt),o.out?.removeEventListener("click",St),o.in?.removeEventListener("click",wt),a?.removeEventListener("click",Xt),r.removeEventListener("change",Nt),n.removeEventListener("pointerdown",ht),n.removeEventListener("pointermove",Tt),n.removeEventListener("pointerup",zt),n.removeEventListener("pointercancel",Rt),n.removeEventListener("lostpointercapture",Rt),n.removeEventListener("wheel",Dt),n.removeEventListener("webglcontextlost",ut),t.removeEventListener("keydown",Qt,!0),t.removeEventListener("roomcraft-editor-change",_t),t.removeEventListener("roomcraft-editor-tool",qt)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=jl,Hy(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
