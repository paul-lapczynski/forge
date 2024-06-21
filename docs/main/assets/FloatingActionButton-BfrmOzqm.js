import{j as e}from"./jsx-runtime-Cd0S-B27.js";import{u as r}from"./index-1VkhJ4Fv.js";import{M as s,T as a,C as i}from"./index-CxH9GLVX.js";import{C as c}from"./CustomArgTypes-Cue3itF-.js";import{F as l,D as d,E as h,W as p}from"./FloatingActionButton.stories-BAy13-jJ.js";import"./iframe-B9sbzTsF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./utils-Cceq4NFH.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./style-map-D0ILlpbs.js";import"./directive-CF8sV3Lr.js";import"./index-TSSE1zcJ.js";import"./icon-CRQudG-b.js";import"./constants-D32Jr2uy.js";import"./base-adapter-BA904X7f.js";import"./index-Dh0vMUMR.js";import"./floating-action-button-D7iLZ85A.js";import"./base-button-adapter-DbSYD7FH.js";import"./with-label-aware-DCBgJY4W.js";import"./with-default-aria--3R5aVE8.js";import"./focus-indicator-DCOk5mvy.js";import"./state-layer-BRvIemvG.js";import"./button-BF9wbu_o.js";function o(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:"Use floating action buttons to represent the primary action on a screen within an application. It's recommended to only use one floating action button per screen."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h2,{id:"positioning",children:"Positioning"}),`
`,e.jsx(t.p,{children:"Typically you will position floating action buttons manually on the screen, for example to apply a fixed position in the bottom-right you could use this CSS:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.bottom-right {
  position: fixed;
  bottom: var(--forge-spacing-medium);
  right: var(--forge-spacing-medium);
}
`})}),`
`,e.jsx(t.h2,{id:"extended",children:"Extended"}),`
`,e.jsx(t.p,{children:"Extended floating action buttons are larger and have a text label."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h2,{id:"with-anchor",children:"With Anchor"}),`
`,e.jsxs(t.p,{children:["You can nest an ",e.jsx(t.code,{children:"<a>"})," element inside the floating action button to create a link."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Buttons containing only icons should be given a meaningful label via ",e.jsx(t.code,{children:"aria-label"})," or ",e.jsx(t.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(t.li,{children:["Avoid using capitalized text because screen readers will read the text character-by-character. Instead use ",e.jsx(t.code,{children:"text-transform: uppercase"}),"."]}),`
`,e.jsx(t.li,{children:"Ensure the FAB can be reached by keyboard navigation."}),`
`,e.jsx(t.li,{children:"Ensure that there is a distinct visual cue when the FAB is in focus."}),`
`,e.jsx(t.li,{children:"Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements."}),`
`,e.jsx(t.li,{children:"Ensure that buttons placed above other content on the page have proper contrast ratio."}),`
`]})]})}function N(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{N as default};