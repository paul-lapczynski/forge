import{C as b,n as v,B as c,o as f,b as n}from"./constants-D32Jr2uy.js";const y=`${b}label-value`,p={EMPTY:"empty",ELLIPSIS:"ellipsis",INLINE:"inline",DENSE:"dense"},h={...p},l={elementName:y,observedAttributes:p,attributes:h},m=`<template>
  <div class="forge-label-value" part="root">
    <div class="icon" part="icon">
      <slot name="icon"></slot>
    </div>
    <div class="label" part="label">
      <slot name="label"></slot>
    </div>
    <div class="value" part="value">
      <slot name="value"></slot>
    </div>
  </div>
</template>
`,u=':host{display:inline-block;min-width:0}:host([hidden]){display:none}.forge-label-value{--_label-value-align: var(--forge-label-value-align, start);--_label-value-label-spacing: var(--forge-label-value-label-spacing, var(--forge-spacing-xxsmall, 4px));--_label-value-label-block-start-spacing: var(--forge-label-value-label-block-start-spacing, var(--_label-value-label-spacing));--_label-value-label-block-end-spacing: var(--forge-label-value-label-block-end-spacing, var(--_label-value-label-spacing));--_label-value-label-color: var(--forge-label-value-label-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)));--_label-value-icon-spacing: var(--forge-label-value-icon-spacing, var(--forge-spacing-xxsmall, 4px));--_label-value-inline-label-spacing: var(--forge-label-value-inline-label-spacing, var(--forge-spacing-xsmall, 8px));--_label-value-empty-color: var(--forge-label-value-empty-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)));--_label-value-empty-style: var(--forge-label-value-empty-style, italic)}.forge-label-value{display:grid;grid-template-columns:auto 1fr;grid-template-areas:"icon label" "icon value"}.label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .8125)));font-weight:var(--forge-typography-label2-font-weight, 400);line-height:var(--forge-typography-label2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label2-letter-spacing, .0096153846em);text-transform:var(--forge-typography-label2-text-transform, inherit);text-decoration:var(--forge-typography-label2-text-decoration, inherit);grid-area:label;justify-self:var(--_label-value-align);margin-block-start:var(--_label-value-label-block-start-spacing);margin-block-end:var(--_label-value-label-block-end-spacing);line-height:normal;text-align:var(--_label-value-align);color:var(--_label-value-label-color)}.value{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);grid-area:value;display:grid;align-items:center;justify-self:var(--_label-value-align);line-height:normal;text-align:var(--_label-value-align)}.icon{display:inline-flex;grid-area:icon}::slotted([slot=icon]){margin-inline-end:var(--_label-value-icon-spacing)}:host(:is([inline],[dense])) .forge-label-value{display:flex;align-items:center}:host(:is([inline],[dense])) .label{margin-block:0;margin-inline-end:var(--_label-value-inline-label-spacing)}:host([ellipsis]) ::slotted([slot=value]){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([empty]) .value{color:var(--_label-value-empty-color);font-style:var(--_label-value-empty-style)}';var d=Object.defineProperty,_=Object.getOwnPropertyDescriptor,x=(e,i,a,r)=>{for(var t=r>1?void 0:r?_(i,a):i,o=e.length-1,s;o>=0;o--)(s=e[o])&&(t=(r?s(i,a,t):s(t))||t);return r&&t&&d(i,a,t),t};let g=class extends c{constructor(){super(),this._empty=!1,this._ellipsis=!1,this._inline=!1,f(this,m,u)}static get observedAttributes(){return Object.values(l.observedAttributes)}attributeChangedCallback(e,i,a){switch(e){case l.observedAttributes.EMPTY:this.empty=n(a);break;case l.observedAttributes.ELLIPSIS:this.ellipsis=n(a);break;case l.observedAttributes.INLINE:case l.observedAttributes.DENSE:this.inline=n(a);break}}get empty(){return this._empty}set empty(e){e=!!e,this._empty!==e&&(this._empty=e,this.toggleAttribute(l.attributes.EMPTY,this._empty))}get ellipsis(){return this._ellipsis}set ellipsis(e){e=!!e,this._ellipsis!==e&&(this._ellipsis=e,this.toggleAttribute(l.attributes.ELLIPSIS,this._ellipsis))}get inline(){return this._inline}set inline(e){e=!!e,this._inline!==e&&(this._inline=e,this.toggleAttribute(l.attributes.INLINE,this._inline))}get dense(){return this.inline}set dense(e){this.inline=e}};g=x([v({name:l.elementName})],g);