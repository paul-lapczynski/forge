import{j as e}from"./jsx-runtime-DLKj12b8.js";import{u as r}from"./index-C5iMOghs.js";import{M as a,T as l,C as i}from"./index-oI8cfa7R.js";import{C as c}from"./CustomArgTypes-DmNi1XaC.js";import{L as m,I as d,N as p,a as h,A as x,W as j}from"./Label.stories-BJwJOveH.js";import{L as g}from"./label-Ba8gSJXo.js";import"./iframe-BmWlDcXA.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./utils-CpphmWLJ.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./index-BhA1MhXR.js";import"./icon-Sxf3JEPH.js";import"./constants-BMnwgo1j.js";import"./base-adapter-CfNZnrSk.js";import"./index-Dh0vMUMR.js";import"./button-DKp5JmaL.js";import"./focus-indicator-WHVXAnYX.js";import"./state-layer-DfBT0h4a.js";import"./base-button-adapter-B2nnRd5H.js";import"./with-label-aware-DCBgJY4W.js";import"./with-default-aria-ll7Wjkii.js";import"./event-utils-DC3JW7a-.js";import"./button-toggle-group-CUV8xQR0.js";import"./with-form-associated-D8xT5_00.js";import"./checkbox-BnMMH_z2.js";import"./icon-button-VlM_yzEM.js";import"./switch-CvJdSirX.js";import"./decorators-B79PnA5z.js";function s(o){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(l,{}),`
`,e.jsxs(t.p,{children:[`The Forge Label component is used to associate a text label with a compatible Forge component. This component can be used in place of the
standard HTML `,e.jsx(t.code,{children:"<label>"})," element to provide an accessible label, as well as the correct typography."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<forge-label>"})," element can ",e.jsx(t.strong,{children:"only"})," be associated with specific Forge elements. The following elements are considered label aware:"]}),`
`,e.jsx("ul",{style:{marginBottom:"48px"},children:g.labelableChildSelectors.map(n=>e.jsx(t.li,{children:e.jsxs(t.code,{children:["<",n,">"]})},n))}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"id-associated",children:"ID Associated"}),`
`,e.jsxs(t.p,{children:["You can explicitly associate the label with an element by providing the ",e.jsx(t.code,{children:"for"})," attribute with the ",e.jsx(t.code,{children:"id"})," of the associated element."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h3,{id:"nested",children:"Nested"}),`
`,e.jsx(t.p,{children:"You can nest the associated element within the label component for implicit association."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h3,{id:"legend",children:"Legend"}),`
`,e.jsx(t.p,{children:"You can also use the label component as a legend for a radio group."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h3,{id:"aligned-list",children:"Aligned List"}),`
`,e.jsx(t.p,{children:"Aligning labels with their associated element in a list format is a common UI pattern."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(t.h3,{id:"with-icon-button",children:"With Icon Button"}),`
`,e.jsx(t.p,{children:"You can also label icon buttons, and provide some custom styling to create a common design pattern."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{})]})}function V(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{V as default};