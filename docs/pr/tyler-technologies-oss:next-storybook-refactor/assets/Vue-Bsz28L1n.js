import{j as e}from"./jsx-runtime-CxFEaKu5.js";import{u as r}from"./index-_7WBl_BL.js";import{M as i}from"./index-BH8E2StS.js";import"./iframe-UJ8DFNmo.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Frameworks/Vue"}),`
`,e.jsx(n.h1,{id:"vue",children:"Vue"}),`
`,e.jsxs(n.p,{children:["Vue has ",e.jsx(n.a,{href:"https://custom-elements-everywhere.com/#vue",rel:"nofollow",children:"great support"})," for custom elements and can be used directly."]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"To use Forge in your Vue application, install the following package from npm:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @tylertech/forge
`})}),`
`,e.jsx(n.h2,{id:"loading-the-tyler-font",children:"Loading the Tyler Font"}),`
`,e.jsxs(n.p,{children:["Edit your ",e.jsx(n.code,{children:"index.html"})," file and add the following ",e.jsx(n.code,{children:"<link>"})," tag to the ",e.jsx(n.code,{children:"<head>"})," section load the Tyler font:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="https://cdn.forge.tylertech.com/v1/css/tyler-font.css">
`})}),`
`,e.jsx(n.p,{children:"This will configure the default font family for your application, and load the required font weights and styles."}),`
`,e.jsx(n.h2,{id:"importing-components",children:"Importing Components"}),`
`,e.jsxs(n.p,{children:["To use Forge components in your Vue application, import the components you need from the ",e.jsx(n.code,{children:"@tylertech/forge"})," package."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
  <div>
    <forge-card>
      <forge-button>Click me</forge-button>
    </forge-card>
  </div>
</template>

<script>
import { defineButtonComponent, defineCardComponent } from '@tylertech/forge';

defineButtonComponent();
defineCardComponent();

export default {
  name: 'App',
};
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"importing-styles",children:"Importing Styles"}),`
`,e.jsxs(n.p,{children:["To use the default Forge styles in your Vue application, import the ",e.jsx(n.code,{children:"forge.css"})," file from the ",e.jsx(n.code,{children:"@tylertech/forge"})," package."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<style>
@import '@tylertech/forge/dist/forge.css';
</style>
`})})]})}function g(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{g as default};