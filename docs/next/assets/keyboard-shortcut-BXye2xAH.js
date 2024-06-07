import{C as u,x as p,n as d,B as g,b as c}from"./constants-BMnwgo1j.js";import{B as b,c as l}from"./base-adapter-CfNZnrSk.js";const m=`${u}keyboard-shortcut`,E={KEY:"key",TARGET:"target",GLOBAL:"global",ALLOW_WHILE_TYPING:"allow-while-typing",USE_CODE:"use-code",PREVENT_DEFAULT:"prevent-default",CAPTURE:"capture",DISABLED:"disabled"},y={TOOLTIP:"forge-tooltip"},f={ACTIVATE:"forge-keyboard-shortcut-activate"},s={elementName:m,attributes:E,selectors:y,events:f},T=["date","datetime","datetime-local","email","month","number","password","search","tel","text","time","url","week"];class C extends b{constructor(t){super(t),this.component=t}hasTargetElement(){return!!this._targetElement}destroy(){this._targetElement=null}addTargetEventListener(t,i,r){var a;(a=this._targetElement)==null||a.addEventListener(t,i,{capture:r})}removeTargetEventListener(t,i,r){var a;(a=this._targetElement)==null||a.removeEventListener(t,i,{capture:r})}setHostStyles(){this.component.style.display="none"}setTargetElement(t,i){if(i){const r=this._component.ownerDocument||document;this._targetElement=r.documentElement;return}if(t){if(this._component.parentElement){if(p(this._component.parentElement,t)){this._targetElement=this._component.parentElement;return}this._targetElement=this._component.parentElement.querySelector(t);return}}else{let r=this._component.previousElementSibling;for(;r;){if(!p(r,s.selectors.TOOLTIP)){this._targetElement=r;return}r=r.previousElementSibling}this._targetElement=this._component.parentElement;return}}}function A(e){return e instanceof HTMLInputElement?T.includes(e.type):!1}function L(e,t=!1){return!e||!e.length?[]:e.split(" ").map(r=>r.trim()).map(r=>{const a=r.split("+"),h=t?a.pop()||"":w((a.pop()||"").toLowerCase()),_=a.sort().join("").toLowerCase();return{key:h,modifier:_}})}function k(e,t,i=!1){const r=i?e.code:e.key.toLowerCase(),a=D(e);return t.some(h=>r===h.key&&a===h.modifier)}function D(e){let t="";return e.altKey&&(t+="alt"),e.ctrlKey&&(t+="control"),e.metaKey&&(t+="meta"),e.shiftKey&&(t+="shift"),t}function w(e){switch(e){case"plus":return"+";case"space":return" ";default:return e}}class K{constructor(t){this._adapter=t,this._global=!1,this._allowWhileTyping=!1,this._preventDefault=!0,this._capture=!1,this._useCode=!1,this._disabled=!1,this._keyDownListener=i=>this._onKeyDown(i)}initialize(){this._initializeTargetElement(),this._adapter.setHostStyles()}disconnect(){this._disconnectTargetElement(),this._adapter.destroy()}_initializeTargetElement(){if(this._disconnectTargetElement(),this._adapter.setTargetElement(this._target,this._global),!this._adapter.hasTargetElement())throw new Error("Unable to locate the target element.");this._disabled||this._connectTargetElement()}_connectTargetElement(){this._adapter.hasTargetElement&&this._adapter.addTargetEventListener("keydown",this._keyDownListener,this._capture)}_disconnectTargetElement(){this._adapter.hasTargetElement&&this._adapter.removeTargetEventListener("keydown",this._keyDownListener,this._capture)}_onKeyDown(t){var i;!this._allowWhileTyping&&A(t.target)||k(t,this._keyCombinations,this._useCode)&&(this._preventDefault&&t.preventDefault(),this._adapter.emitHostEvent(s.events.ACTIVATE,t),(i=this._activateCallback)==null||i.call(null,t))}_setKeyCombinations(){this._keyCombinations=L(this._key,this._useCode)}get key(){return this._key}set key(t){this._key!==t&&(this._key=t,this._adapter.toggleHostAttribute(s.attributes.KEY,!!this.key,this._key||""),this._setKeyCombinations())}get target(){return this._target}set target(t){this._target!==t&&(this._target=t,this._adapter.setHostAttribute(s.attributes.TARGET,this._target),this._adapter.isConnected&&this._initializeTargetElement())}get global(){return this._global}set global(t){this._global!==t&&(this._global=t,this._adapter.toggleHostAttribute(s.attributes.GLOBAL,this._global),this._adapter.isConnected&&this._initializeTargetElement())}get allowWhileTyping(){return this._allowWhileTyping}set allowWhileTyping(t){this._allowWhileTyping!==t&&(this._allowWhileTyping=t,this._adapter.toggleHostAttribute(s.attributes.ALLOW_WHILE_TYPING,this._allowWhileTyping))}get preventDefault(){return this._preventDefault}set preventDefault(t){this._preventDefault!==t&&(this._preventDefault=t,this._adapter.toggleHostAttribute(s.attributes.PREVENT_DEFAULT,this._preventDefault))}get capture(){return this._capture}set capture(t){this._capture!==t&&(this._disconnectTargetElement(),this._capture=t,this._adapter.toggleHostAttribute(s.attributes.CAPTURE,this.capture),this._connectTargetElement())}get useCode(){return this._useCode}set useCode(t){this._useCode!==t&&(this._useCode=t,this._adapter.toggleHostAttribute(s.attributes.USE_CODE,this._useCode),this._setKeyCombinations())}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.toggleHostAttribute(s.attributes.DISABLED,this._disabled),this._disabled?this._disconnectTargetElement():this._connectTargetElement())}get activateCallback(){return this._activateCallback}set activateCallback(t){this._activateCallback=t}}var O=Object.defineProperty,v=Object.getOwnPropertyDescriptor,o=(e,t,i,r)=>{for(var a=r>1?void 0:r?v(t,i):t,h=e.length-1,_;h>=0;h--)(_=e[h])&&(a=(r?_(t,i,a):_(a))||a);return r&&a&&O(t,i,a),a};let n=class extends g{static get observedAttributes(){return[s.attributes.KEY,s.attributes.TARGET,s.attributes.GLOBAL,s.attributes.ALLOW_WHILE_TYPING,s.attributes.PREVENT_DEFAULT,s.attributes.CAPTURE,s.attributes.USE_CODE,s.attributes.DISABLED]}constructor(){super(),this._core=new K(new C(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.disconnect()}attributeChangedCallback(e,t,i){switch(e){case s.attributes.KEY:this.key=i;break;case s.attributes.TARGET:this.target=i;break;case s.attributes.GLOBAL:this.global=c(i);break;case s.attributes.ALLOW_WHILE_TYPING:this.allowWhileTyping=c(i);break;case s.attributes.PREVENT_DEFAULT:this.preventDefault=c(i);break;case s.attributes.CAPTURE:this.capture=c(i);break;case s.attributes.USE_CODE:this.useCode=c(i);break;case s.attributes.DISABLED:this.disabled=c(i);break}}get keyBinding(){return this.key}set keyBinding(e){this.key=e}};o([l()],n.prototype,"key",2);o([l()],n.prototype,"target",2);o([l()],n.prototype,"global",2);o([l()],n.prototype,"allowWhileTyping",2);o([l()],n.prototype,"preventDefault",2);o([l()],n.prototype,"capture",2);o([l()],n.prototype,"useCode",2);o([l()],n.prototype,"disabled",2);o([l()],n.prototype,"activateCallback",2);n=o([d({name:s.elementName})],n);