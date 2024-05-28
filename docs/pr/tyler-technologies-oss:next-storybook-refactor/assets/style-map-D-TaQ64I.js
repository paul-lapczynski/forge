import{w as Y}from"./lit-html-Cxzf5Fb2.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const b=window,f=b.trustedTypes,U=f?f.createPolicy("lit-html",{createHTML:n=>n}):void 0,I="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,j="?"+_,q=`<${j}>`,g=document,w=()=>g.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",V=Array.isArray,F=n=>V(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",S=`[ 	
\f\r]`,y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,B=/>/g,p=RegExp(`>|${S}(?:([^\\s"'>=/]+)(${S}*=${S}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,k=/"/g,D=/^(?:script|style|textarea|title)$/i,G=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ht=G(1),x=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),P=new WeakMap,v=g.createTreeWalker(g,129,null,!1);function W(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return U!==void 0?U.createHTML(t):t}const J=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=y;for(let a=0;a<e;a++){const l=n[a];let h,$,d=-1,c=0;for(;c<l.length&&(o.lastIndex=c,$=o.exec(l),$!==null);)c=o.lastIndex,o===y?$[1]==="!--"?o=R:$[1]!==void 0?o=B:$[2]!==void 0?(D.test($[2])&&(s=RegExp("</"+$[2],"g")),o=p):$[3]!==void 0&&(o=p):o===p?$[0]===">"?(o=s??y,d=-1):$[1]===void 0?d=-2:(d=o.lastIndex-$[2].length,h=$[1],o=$[3]===void 0?p:$[3]==='"'?k:L):o===k||o===L?o=p:o===R||o===B?o=y:(o=p,s=void 0);const A=o===p&&n[a+1].startsWith("/>")?" ":"";r+=o===y?l+q:d>=0?(i.push(h),l.slice(0,d)+I+l.slice(d)+_+A):l+_+(d===-2?(i.push(void 0),a):A)}return[W(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[h,$]=J(t,e);if(this.el=T.createElement(h,i),v.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=v.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith(I)||c.startsWith(_)){const A=$[o++];if(d.push(c),A!==void 0){const Z=s.getAttribute(A.toLowerCase()+I).split(_),N=/([.?@])?(.*)/.exec(A);l.push({type:1,index:r,name:N[2],strings:Z,ctor:N[1]==="."?Q:N[1]==="?"?tt:N[1]==="@"?et:E})}else l.push({type:6,index:r})}for(const c of d)s.removeAttribute(c)}if(D.test(s.tagName)){const d=s.textContent.split(_),c=d.length-1;if(c>0){s.textContent=f?f.emptyScript:"";for(let A=0;A<c;A++)s.append(d[A],w()),v.nextNode(),l.push({type:2,index:++r});s.append(d[c],w())}}}else if(s.nodeType===8)if(s.data===j)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(_,d+1))!==-1;)l.push({type:7,index:r}),d+=_.length-1}r++}}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function m(n,t,e=n,i){var s,r,o,a;if(t===x)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=H(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,i)),i!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=m(n,l._$AS(n,t.values),l,i)),t}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(i,!0);v.currentNode=r;let o=v.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let $;h.type===2?$=new C(o,o.nextSibling,this,t):h.type===1?$=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&($=new it(o,this,t)),this._$AV.push($),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=v.nextNode(),a++)}return v.currentNode=g,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class C{constructor(t,e,i,s){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=m(this,t,e),H(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):F(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(W(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const o=new K(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(t){let e=P.get(t.strings);return e===void 0&&P.set(t.strings,e=new T(t)),e}T(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new C(this.k(w()),this.k(w()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class E{constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=m(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=m(this,a[i+l],e,l),h===x&&(h=this._$AH[l]),o||(o=!H(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends E{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const X=f?f.emptyScript:"";class tt extends E{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class et extends E{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=m(this,t,e,0))!==null&&i!==void 0?i:u)===x)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){m(this,t)}}const O=b.litHtmlPolyfillSupport;O==null||O(T,C),((M=b.litHtmlVersions)!==null&&M!==void 0?M:b.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},nt=n=>(...t)=>({_$litDirective$:n,values:t});let ot=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z="important",rt=" !"+z,dt=nt(class extends ot{constructor(n){var t;if(super(n),n.type!==st.ATTRIBUTE||n.name!=="style"||((t=n.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{const i=n[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(n,[t]){const{style:e}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const r=typeof s=="string"&&s.endsWith(rt);i.includes("-")||r?e.setProperty(i,r?s.slice(0,-11):s,r?z:""):e[i]=s}}return Y}});export{u as A,dt as o,ht as x};
