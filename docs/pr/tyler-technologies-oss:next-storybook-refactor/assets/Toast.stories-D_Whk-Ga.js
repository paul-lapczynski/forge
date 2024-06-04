import{x as f,T as b}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{a as d}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{a as T,g,O as $,G as x}from"./utils-CprCEKh8.js";import{o as O}from"./style-map-D0ILlpbs.js";import{n as _,e as h}from"./ref-BorTy8X1.js";import"./toast-BFUKxact.js";import"./overlay-CRRs1KxA.js";import"./button-B9Dk2C52.js";import"./focus-indicator-jd-AY9Jk.js";import"./index-Dh0vMUMR.js";import"./state-layer-DzrxdbUp.js";const a="forge-toast",A=d("forge-toast-action"),L=d("forge-toast-close"),S={title:"Components/Toast",render:t=>{const i=T(t),u=i?O(i):b,s=h();return f`
      <forge-button variant="raised" @click=${()=>s.value.open=!s.value.open}>Show Toast</forge-button>
      <forge-toast
        ${_(s)}
        .open=${t.open}
        .duration=${t.duration}
        .placement=${t.placement}
        .actionText=${t.actionText}
        .dismissible=${t.dismissible}
        .dismissLabel=${t.dismissLabel}
        .theme=${t.theme}
        style=${u}
        @forge-toast-action=${A}
        @forge-toast-close=${L}>
        ${t.text}
      </forge-toast>
    `},component:a,argTypes:{...g({tagName:a,controls:{placement:{control:"select",options:$},theme:{control:"select",options:["default",...x]}}}),text:{control:"text"}},args:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",open:!1,duration:2750,placement:"bottom",actionText:"",dismissible:!1,dismissLabel:"Dismiss toast",theme:"default"}},e={},o={args:{dismissible:!0,text:"This toast is dismissible!"}};var r,n,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    dismissible: true,
    text: 'This toast is dismissible!'
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const E=["Demo","Dismissible"],k=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,Dismissible:o,__namedExportsOrder:E,default:S},Symbol.toStringTag,{value:"Module"}));export{e as D,k as T,o as a};