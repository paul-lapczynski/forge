import{B as p,F as l}from"./base-adapter-CMsBmfZ6.js";import{C as d,x as u,n as g,B as b,b as _}from"./constants-Di1oYYV9.js";const m=`${d}keyboard-shortcut`,E={KEY:"key",TARGET:"target",GLOBAL:"global",ALLOW_WHILE_TYPING:"allow-while-typing",USE_CODE:"use-code",PREVENT_DEFAULT:"prevent-default",CAPTURE:"capture",DISABLED:"disabled"},f={TOOLTIP:"forge-tooltip"},y={ACTIVATE:"forge-keyboard-shortcut-activate"},i={elementName:m,attributes:E,selectors:f,events:y},T=["date","datetime","datetime-local","email","month","number","password","search","tel","text","time","url","week"];class C extends p{constructor(t){super(t),this.component=t}hasTargetElement(){return!!this._targetElement}destroy(){this._targetElement=null}addTargetEventListener(t,s,a){var r;(r=this._targetElement)==null||r.addEventListener(t,s,{capture:a})}removeTargetEventListener(t,s,a){var r;(r=this._targetElement)==null||r.removeEventListener(t,s,{capture:a})}setHostStyles(){this.component.style.display="none"}setTargetElement(t,s){if(s){const a=this._component.ownerDocument||document;this._targetElement=a.documentElement;return}if(t){if(this._component.parentElement){if(u(this._component.parentElement,t)){this._targetElement=this._component.parentElement;return}this._targetElement=this._component.parentElement.querySelector(t);return}}else{let a=this._component.previousElementSibling;for(;a;){if(!u(a,i.selectors.TOOLTIP)){this._targetElement=a;return}a=a.previousElementSibling}this._targetElement=this._component.parentElement;return}}}function A(e){return e instanceof HTMLInputElement?T.includes(e.type):!1}function L(e,t=!1){return!e||!e.length?[]:e.split(" ").map(a=>a.trim()).map(a=>{const r=a.split("+"),h=t?r.pop()||"":w((r.pop()||"").toLowerCase()),c=r.sort().join("").toLowerCase();return{key:h,modifier:c}})}function k(e,t,s=!1){const a=s?e.code:e.key.toLowerCase(),r=D(e);return t.some(h=>a===h.key&&r===h.modifier)}function D(e){let t="";return e.altKey&&(t+="alt"),e.ctrlKey&&(t+="control"),e.metaKey&&(t+="meta"),e.shiftKey&&(t+="shift"),t}function w(e){switch(e){case"plus":return"+";case"space":return" ";default:return e}}class K{constructor(t){this._adapter=t,this._global=!1,this._allowWhileTyping=!1,this._preventDefault=!0,this._capture=!1,this._useCode=!1,this._disabled=!1,this._keyDownListener=s=>this._onKeyDown(s)}initialize(){this._initializeTargetElement(),this._adapter.setHostStyles()}disconnect(){this._disconnectTargetElement(),this._adapter.destroy()}_initializeTargetElement(){if(this._disconnectTargetElement(),this._adapter.setTargetElement(this._target,this._global),!this._adapter.hasTargetElement())throw new Error("Unable to locate the target element.");this._disabled||this._connectTargetElement()}_connectTargetElement(){this._adapter.hasTargetElement&&this._adapter.addTargetEventListener("keydown",this._keyDownListener,this._capture)}_disconnectTargetElement(){this._adapter.hasTargetElement&&this._adapter.removeTargetEventListener("keydown",this._keyDownListener,this._capture)}_onKeyDown(t){var s;!this._allowWhileTyping&&A(t.target)||k(t,this._keyCombinations,this._useCode)&&(this._preventDefault&&t.preventDefault(),this._adapter.emitHostEvent(i.events.ACTIVATE,t),(s=this._activateCallback)==null||s.call(null,t))}_setKeyCombinations(){this._keyCombinations=L(this._key,this._useCode)}get key(){return this._key}set key(t){this._key!==t&&(this._key=t,this._adapter.toggleHostAttribute(i.attributes.KEY,!!this.key,this._key||""),this._setKeyCombinations())}get target(){return this._target}set target(t){this._target!==t&&(this._target=t,this._adapter.setHostAttribute(i.attributes.TARGET,this._target),this._adapter.isConnected&&this._initializeTargetElement())}get global(){return this._global}set global(t){this._global!==t&&(this._global=t,this._adapter.toggleHostAttribute(i.attributes.GLOBAL,this._global),this._adapter.isConnected&&this._initializeTargetElement())}get allowWhileTyping(){return this._allowWhileTyping}set allowWhileTyping(t){this._allowWhileTyping!==t&&(this._allowWhileTyping=t,this._adapter.toggleHostAttribute(i.attributes.ALLOW_WHILE_TYPING,this._allowWhileTyping))}get preventDefault(){return this._preventDefault}set preventDefault(t){this._preventDefault!==t&&(this._preventDefault=t,this._adapter.toggleHostAttribute(i.attributes.PREVENT_DEFAULT,this._preventDefault))}get capture(){return this._capture}set capture(t){this._capture!==t&&(this._disconnectTargetElement(),this._capture=t,this._adapter.toggleHostAttribute(i.attributes.CAPTURE,this.capture),this._connectTargetElement())}get useCode(){return this._useCode}set useCode(t){this._useCode!==t&&(this._useCode=t,this._adapter.toggleHostAttribute(i.attributes.USE_CODE,this._useCode),this._setKeyCombinations())}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.toggleHostAttribute(i.attributes.DISABLED,this._disabled),this._disabled?this._disconnectTargetElement():this._connectTargetElement())}get activateCallback(){return this._activateCallback}set activateCallback(t){this._activateCallback=t}}var O=Object.defineProperty,v=Object.getOwnPropertyDescriptor,o=(e,t,s,a)=>{for(var r=a>1?void 0:a?v(t,s):t,h=e.length-1,c;h>=0;h--)(c=e[h])&&(r=(a?c(t,s,r):c(r))||r);return a&&r&&O(t,s,r),r};let n=class extends b{static get observedAttributes(){return[i.attributes.KEY,i.attributes.TARGET,i.attributes.GLOBAL,i.attributes.ALLOW_WHILE_TYPING,i.attributes.PREVENT_DEFAULT,i.attributes.CAPTURE,i.attributes.USE_CODE,i.attributes.DISABLED]}constructor(){super(),this._foundation=new K(new C(this))}connectedCallback(){this._foundation.initialize()}disconnectedCallback(){this._foundation.disconnect()}attributeChangedCallback(e,t,s){switch(e){case i.attributes.KEY:this.key=s;break;case i.attributes.TARGET:this.target=s;break;case i.attributes.GLOBAL:this.global=_(s);break;case i.attributes.ALLOW_WHILE_TYPING:this.allowWhileTyping=_(s);break;case i.attributes.PREVENT_DEFAULT:this.preventDefault=_(s);break;case i.attributes.CAPTURE:this.capture=_(s);break;case i.attributes.USE_CODE:this.useCode=_(s);break;case i.attributes.DISABLED:this.disabled=_(s);break}}get keyBinding(){return this.key}set keyBinding(e){this.key=e}};o([l()],n.prototype,"key",2);o([l()],n.prototype,"target",2);o([l()],n.prototype,"global",2);o([l()],n.prototype,"allowWhileTyping",2);o([l()],n.prototype,"preventDefault",2);o([l()],n.prototype,"capture",2);o([l()],n.prototype,"useCode",2);o([l()],n.prototype,"disabled",2);o([l()],n.prototype,"activateCallback",2);n=o([g({name:i.elementName})],n);