import{I as E}from"./icon-ZtLYap3k.js";import{a as c,B as T}from"./button-zOfPl3up.js";import"./focus-indicator-CdKfJ-GE.js";import{C as A,v as B,B as y,w as S,h,d as N,g as D,G as I}from"./constants-CaaYAYhg.js";import"./index-Dh0vMUMR.js";import"./state-layer-N_JMWZZ9.js";import{B as O,F as p}from"./base-adapter-Cmik15XS.js";import{r as g,s as v}from"./index-Co64lOVc.js";import{x as L,A as C}from"./lit-html-Bzgct6Ob.js";import{o as P}from"./style-map-CkvVWuL1.js";import"./menu-XcHRHUYW.js";import"./linear-progress-DV1dgauc.js";import"./list-DK5vrFJV.js";import"./popover-Btr5MfHK.js";import"./overlay-ClUFN0zg.js";import"./skeleton-CqBX_3mC.js";class H extends O{constructor(t){super(t)}startButtonObserver(){this._buttonChangeObserver=new MutationObserver(t=>{const e=t.reduce((s,{addedNodes:a})=>{const n=Array.from(a).filter(r=>r.nodeType===Node.ELEMENT_NODE).map(r=>r.nodeName.toLowerCase()===c.elementName?r:r.querySelector(c.elementName)).filter(r=>!!r);return s.concat(n)},[]);e.length&&(e.forEach(s=>{s.variant=this._component.variant,s.theme=this._component.theme,s.disabled=this._component.disabled,s.dense=this._component.dense}),this.setPill(this._component.pill))}),this._buttonChangeObserver.observe(this._component,{childList:!0,subtree:!0})}destroyButtonObserver(){var t;(t=this._buttonChangeObserver)==null||t.disconnect(),this._buttonChangeObserver=void 0}setVariant(t){this._getButtons().forEach(s=>s.variant=t)}setTheme(t){this._getButtons().forEach(s=>s.theme=t)}setDisabled(t){this._getButtons().forEach(s=>s.disabled=t)}setDense(t){this._getButtons().forEach(s=>s.dense=t)}setPill(t){const e=this._getButtons();e.length>2&&Array.from(e).slice(1,e.length-1).filter(({pill:n})=>n).forEach(n=>n.pill=!1);const s=e[0];s&&(s.pill=t);const a=e[e.length-1];a&&(a.pill=t)}_getButtons(){return this._component.querySelectorAll(c.elementName)}}const M=`${A}split-button`,x={VARIANT:"variant",THEME:"theme",DISABLED:"disabled",DENSE:"dense",PILL:"pill"},w={DEFAULT_VARIANT:"text",DEFAULT_THEME:"primary"},i={elementName:M,attributes:x,defaults:w};class F{constructor(t){this._adapter=t,this._variant=i.defaults.DEFAULT_VARIANT,this._theme=i.defaults.DEFAULT_THEME,this._disabled=!1,this._dense=!1,this._pill=!1}initialize(){this._adapter.startButtonObserver(),this._adapter.setVariant(this._variant),this._adapter.setTheme(this._theme),this._adapter.setDisabled(this._disabled),this._adapter.setDense(this._dense),this._adapter.setPill(this._pill)}destroy(){this._adapter.destroyButtonObserver()}get variant(){return this._variant}set variant(t){this._variant!==t&&(this._variant=t??i.defaults.DEFAULT_VARIANT,this._adapter.setVariant(t),this._adapter.setHostAttribute(i.attributes.VARIANT,this._variant))}get theme(){return this._theme}set theme(t){this._theme!==t&&(this._theme=t??i.defaults.DEFAULT_THEME,this._adapter.setTheme(this._theme),this._adapter.setHostAttribute(i.attributes.THEME,this._theme))}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.setDisabled(this._disabled),this._adapter.toggleHostAttribute(i.attributes.DISABLED,this._disabled))}get dense(){return this._dense}set dense(t){this._dense!==t&&(this._dense=t,this._adapter.setDense(this._dense),this._adapter.toggleHostAttribute(i.attributes.DENSE,this._dense))}get pill(){return this._pill}set pill(t){this._pill!==t&&(this._pill=t,this._adapter.setPill(this._pill),this._adapter.toggleHostAttribute(i.attributes.PILL,this._pill))}}const j=`<template>
  <slot></slot>
</template>
`,R=":host{--_split-button-min-width: var(--forge-split-button-min-width, 0);--_split-button-gap: var(--forge-split-button-gap, var(--forge-border-thin, 1px));--_split-button-focus-indicator-offset: var(--forge-split-button-focus-indicator-offset, var(--forge-button-focus-indicator-offset, 4px));--_split-button-focus-indicator-divider-offset: var(--forge-split-button-focus-indicator-divider-offset, var(--_split-button-gap));--_split-button-focus-indicator-offset-adjusted: calc(var(--_split-button-focus-indicator-offset) + var(--_split-button-focus-indicator-divider-offset) * 2)}:host{display:inline-flex;justify-content:center;align-items:center}:host([hidden]){display:none}::slotted(*){--forge-button-min-width: var(--_split-button-min-width);--forge-button-focus-indicator-offset: var(--_split-button-focus-indicator-offset)}::slotted(:first-child){--forge-button-shape-start-end-radius: 0;--forge-button-shape-end-end-radius: 0;--forge-focus-indicator-shape-start-end: 0;--forge-focus-indicator-shape-end-end: 0;--forge-focus-indicator-offset-inline: 0 var(--_split-button-focus-indicator-offset-adjusted)}::slotted(:not(:first-child):not(:last-child)){--forge-button-shape: 0;--forge-focus-indicator-shape: 0;--forge-focus-indicator-offset-inline: var(--_split-button-focus-indicator-offset-adjusted)}::slotted(:last-child){--forge-button-shape-start-start-radius: 0;--forge-button-shape-end-start-radius: 0;--forge-focus-indicator-shape-start-start: 0;--forge-focus-indicator-shape-end-start: 0;--forge-focus-indicator-offset-inline: var(--_split-button-focus-indicator-offset-adjusted) 0}:host([variant=outlined]){--_split-button-focus-indicator-divider-offset: var(--forge-split-button-focus-indicator-divider-offset, 0px)}:host([variant=outlined]) ::slotted(:not(:first-child)){margin-inline-start:calc(-1 * var(--_split-button-gap))}:host(:is([variant=tonal],[variant=filled],[variant=raised],:not([variant]))) ::slotted(:not(:last-child)){margin-inline-end:var(--_split-button-gap)}";var U=Object.defineProperty,V=Object.getOwnPropertyDescriptor,l=(o,t,e,s)=>{for(var a=s>1?void 0:s?V(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(a=(s?r(t,e,a):r(a))||a);return s&&a&&U(t,e,a),a};let d=class extends y{static get observedAttributes(){return[i.attributes.VARIANT,i.attributes.THEME,i.attributes.DISABLED,i.attributes.DENSE,i.attributes.PILL]}constructor(){super(),S(this,j,R),this._foundation=new F(new H(this))}connectedCallback(){this._foundation.initialize()}disconnectedCallback(){this._foundation.destroy()}attributeChangedCallback(o,t,e){switch(o){case i.attributes.VARIANT:this.variant=e;break;case i.attributes.THEME:this.theme=e;break;case i.attributes.DISABLED:this.disabled=h(e);break;case i.attributes.DENSE:this.dense=h(e);break;case i.attributes.PILL:this.pill=h(e);break}}};l([p()],d.prototype,"variant",2);l([p()],d.prototype,"theme",2);l([p()],d.prototype,"disabled",2);l([p()],d.prototype,"dense",2);l([p()],d.prototype,"pill",2);d=l([B({name:i.elementName,dependencies:[T]})],d);E.define([g,v]);const f="forge-split-button",$={title:"Components/Split Button",render:o=>{const t=[{label:"Schedule send",value:"schedule",leadingIcon:g.name,leadingIconType:"component"},{label:"Save draft",value:"draft",leadingIcon:v.name,leadingIconType:"component"}],e=N(o);return L`
      <forge-split-button
        variant=${o.variant}
        theme=${o.theme}
        ?disabled=${o.disabled}
        ?dense=${o.dense}
        ?pill=${o.pill}
        style=${e?P(e):C}>
        <forge-button style="min-width: 100px;">Send</forge-button>
        <forge-menu .options=${t}>
          <forge-button aria-label="Show menu" popover-icon></forge-button>
        </forge-menu>
      </forge-split-button>
    `},component:f,parameters:{actions:{disable:!0}},argTypes:{...D({tagName:f,controls:{variant:{control:{type:"select"},options:["text","outlined","filled","raised"]},theme:{control:{type:"select"},options:I}}})},args:{variant:"raised",theme:i.defaults.DEFAULT_THEME,disabled:!1,dense:!1,pill:!1}},u={};var b,_,m;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(m=(_=u.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};const k=["Demo"],rt=Object.freeze(Object.defineProperty({__proto__:null,Demo:u,__namedExportsOrder:k,default:$},Symbol.toStringTag,{value:"Module"}));export{u as D,rt as S};