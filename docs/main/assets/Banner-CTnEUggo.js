import{j as e}from"./jsx-runtime-Cd0S-B27.js";import{u as s}from"./index-1VkhJ4Fv.js";import{M as r,T as a,C as i}from"./index-CxH9GLVX.js";import{C as d}from"./CustomArgTypes-Cue3itF-.js";import{B as l,D as c,T as m,C as h}from"./Banner.stories-z_KrP4v-.js";import"./iframe-B9sbzTsF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./utils-Cceq4NFH.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./index-TSSE1zcJ.js";import"./icon-CRQudG-b.js";import"./constants-D32Jr2uy.js";import"./base-adapter-BA904X7f.js";import"./index-Dh0vMUMR.js";import"./banner-DnVSUHVq.js";import"./icon-button-BIREJzI3.js";import"./base-button-adapter-DbSYD7FH.js";import"./with-label-aware-DCBgJY4W.js";import"./with-default-aria--3R5aVE8.js";import"./focus-indicator-DCOk5mvy.js";import"./state-layer-BRvIemvG.js";import"./tooltip-BTx4ydNh.js";import"./overlay-DiKhgH_u.js";import"./with-longpress-listener-B3UkmdmB.js";import"./dismissible-stack-utRZDmaV.js";import"./button-BF9wbu_o.js";function o(n){const t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:"The banner component is intended to be used as a way to deliver a short but important message to the user. It has a high degree of emphasis and should not be used for general messaging. If you need to show less important messages, or messages scoped to a more specific section of your page, you should consider using the inline message component. instead."}),`
`,e.jsx(t.p,{children:"This component supports built-in predefined themes. It can be configured to be either static or dismissible. It can contain a button to trigger whatever action you need."}),`
`,e.jsx(t.h2,{id:"default",children:"Default"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h2,{id:"themed",children:"Themed"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"combined",children:"Combined"}),`
`,e.jsx(t.p,{children:"Here is an example usage combined with a forge-button component:"}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"}),` The design for the banner specifically requests that the button's background be white. Due to
limitations in how deep a css selector can drill into a slotted element, you will need to add that
background color yourself.`]}),`
`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["If the banner is used to display an important notification to a user, use the ",e.jsx(t.code,{children:'role="alert"'})," attribute on the ",e.jsx(t.code,{children:"<forge-banner>"})," element.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["This is equivalent to using ",e.jsx(t.code,{children:'aria-live="assertive"'}),"."]}),`
`,e.jsxs(t.li,{children:["If the banner is less urgent, you can use ",e.jsx(t.code,{children:'aria-live="polite"'})," to wait until the user is finished with their current task."]}),`
`]}),`
`]}),`
`]})]})}function K(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{K as default};