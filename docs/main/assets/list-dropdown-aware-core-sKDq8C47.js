import{B as d,b as h,d as c}from"./constants-D32Jr2uy.js";import{c as o}from"./base-adapter-BA904X7f.js";import{L as p}from"./list-dropdown-Cwu_R7t1.js";var _=Object.defineProperty,e=(a,t,l,s)=>{for(var i=void 0,u=a.length-1,n;u>=0;u--)(n=a[u])&&(i=n(t,l,i)||i);return i&&_(t,l,i),i};class r extends d{constructor(){super()}attributeChangedCallback(t,l,s){switch(t){case p.attributes.POPUP_CLASSES:this.popupClasses=s;break;case p.attributes.OPTION_LIMIT:this.optionLimit=c(s);break;case p.attributes.OBSERVE_SCROLL:this.observeScroll=h(s);break;case p.attributes.OBSERVE_SCROLL_THRESHOLD:this.observeScrollThreshold=c(s);break;case p.attributes.SYNC_POPUP_WIDTH:this.syncPopupWidth=h(s);break;case p.attributes.CONSTRAIN_POPUP_WIDTH:this.constrainPopupWidth=h(s);break;case p.attributes.WRAP_OPTION_TEXT:this.wrapOptionText=h(s);break}}}e([o()],r.prototype,"popupClasses");e([o()],r.prototype,"popupHeaderBuilder");e([o()],r.prototype,"popupFooterBuilder");e([o()],r.prototype,"syncPopupWidth");e([o()],r.prototype,"optionLimit");e([o()],r.prototype,"observeScroll");e([o()],r.prototype,"observeScrollThreshold");e([o()],r.prototype,"constrainPopupWidth");e([o()],r.prototype,"wrapOptionText");class T{constructor(){this._popupClasses=[],this._syncPopupWidth=!1,this._optionLimit=0,this._observeScroll=!1,this._observeScrollThreshold=0,this._constrainPopupWidth=!0,this._wrapOptionText=!1}get syncPopupWidth(){return this._syncPopupWidth}set syncPopupWidth(t){this._syncPopupWidth=t}get popupClasses(){return this._popupClasses}set popupClasses(t){typeof t=="string"&&(t=[t]),Array.isArray(t)&&(this._popupClasses=t)}get observeScroll(){return this._observeScroll}set observeScroll(t){this._observeScroll=t}get observeScrollThreshold(){return this._observeScrollThreshold}set observeScrollThreshold(t){this._observeScrollThreshold=t}get optionLimit(){return this._optionLimit}set optionLimit(t){this._optionLimit=t}get popupHeaderBuilder(){return this._popupHeaderBuilder}set popupHeaderBuilder(t){this._popupHeaderBuilder=t}get popupFooterBuilder(){return this._popupFooterBuilder}set popupFooterBuilder(t){this._popupFooterBuilder=t}get constrainPopupWidth(){return this._constrainPopupWidth}set constrainPopupWidth(t){this._constrainPopupWidth=t}get wrapOptionText(){return this._wrapOptionText}set wrapOptionText(t){this._wrapOptionText=t}_applySelection(){}}export{T as L,r as a};