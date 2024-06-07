import{p as d,q as E,u as C,v as m,B as v,b as O}from"./constants-BMnwgo1j.js";import{p as b}from"./event-utils-DC3JW7a-.js";import{B as f,c as l}from"./base-adapter-CfNZnrSk.js";const c={OPEN:"open",DIRECTION:"direction"},u={...c},_={DRAWER:"forge-drawer",LEFT:"left",RIGHT:"right",CLOSING:"closing",CLOSED:"closed",NO_TRANSITION:"no-transition"},D={DRAWER:`.${_.DRAWER}`},L={AFTER_OPEN:"forge-drawer-after-open",AFTER_CLOSE:"forge-drawer-after-close"},t={observedAttributes:c,attributes:u,classes:_,selectors:D,events:L};class N extends f{constructor(e){super(e),this._component=e,this._drawerElement=d(this._component,t.selectors.DRAWER)}proxyScrollEvent(){this.tryUnproxyScrollEvent(),this._unproxyScrollEventCb=b(this._component.shadowRoot,this._component)}tryUnproxyScrollEvent(){this._unproxyScrollEventCb&&this._unproxyScrollEventCb()}setDirection(e){switch(e){case"left":this._drawerElement.classList.remove(t.classes.RIGHT),this._drawerElement.classList.add(t.classes.LEFT);break;case"right":this._drawerElement.classList.remove(t.classes.LEFT),this._drawerElement.classList.add(t.classes.RIGHT);break}}removeDrawerClass(e){E(e,this._drawerElement)}setDrawerClass(e){C(e,this._drawerElement)}listenTransitionComplete(e){this._activeTransitionListener&&this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=r=>{r.propertyName==="transform"&&(this._activeTransitionListener&&(this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=void 0),e())},this._drawerElement.addEventListener("transitionend",this._activeTransitionListener)}}class I{constructor(e){this._adapter=e,this._open=!0,this._direction="left",this._hasInitialized=!1,this._openAnimationListener=()=>this._onOpenComplete(),this._closeAnimationListener=()=>this._onCloseComplete()}connect(){this._open?this._setOpened():this._setClosed(),this._applyDirection(),this._adapter.proxyScrollEvent(),this._hasInitialized=!0}disconnect(){this._adapter.tryUnproxyScrollEvent(),this._hasInitialized=!1}_applyDirection(){this._adapter.setDirection(this._direction),this._adapter.setHostAttribute(t.attributes.DIRECTION,m(this._direction)?this._direction.toString():"")}_onOpenComplete(){this._open&&(this._setOpened(),this._adapter.emitHostEvent(t.events.AFTER_OPEN))}_onCloseComplete(){this._open||(this._setClosed(),this._adapter.emitHostEvent(t.events.AFTER_CLOSE))}_setOpened(){this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING]),this._adapter.setHostAttribute(t.attributes.OPEN)}_setClosed(){this._adapter.removeDrawerClass([t.classes.CLOSING,t.classes.NO_TRANSITION]),this._adapter.setDrawerClass(t.classes.CLOSED),this._adapter.removeHostAttribute(t.attributes.OPEN)}_applyOpen(){this._open?(this._triggerDrawerOpen(),this._adapter.setHostAttribute(t.attributes.OPEN)):(this._triggerDrawerClose(),this._adapter.removeHostAttribute(t.attributes.OPEN))}_triggerDrawerOpen(){this._adapter.listenTransitionComplete(this._openAnimationListener),this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING])}_triggerDrawerClose(){this._adapter.listenTransitionComplete(this._closeAnimationListener),this._adapter.setDrawerClass(t.classes.CLOSING)}get open(){return this._open}set open(e){this._open!==e&&(this._open=e,this._hasInitialized&&this._applyOpen())}get direction(){return this._direction}set direction(e){this._direction!==e&&(this._direction=e,this._hasInitialized&&this._applyDirection())}}var w=Object.defineProperty,h=(i,e,r,a)=>{for(var s=void 0,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=o(e,r,s)||s);return s&&w(e,r,s),s};class p extends v{static get observedAttributes(){return Object.values(t.observedAttributes)}connectedCallback(){this._core.connect()}disconnectedCallback(){this._core.disconnect()}attributeChangedCallback(e,r,a){switch(e){case t.observedAttributes.OPEN:this.open=O(a);break;case t.observedAttributes.DIRECTION:this.direction=a;break}}}h([l()],p.prototype,"open");h([l()],p.prototype,"direction");export{p as B,I as a,N as b};