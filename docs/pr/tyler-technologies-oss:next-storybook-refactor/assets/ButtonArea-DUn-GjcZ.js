import{j as t}from"./jsx-runtime-BdP40VwY.js";import{u as o}from"./index-BWZdiEiz.js";import{M as r,T as s,C as a}from"./index-Cq9CJs86.js";import{C as c}from"./CustomArgTypes-Batz2Asd.js";import{B as l,D as m}from"./ButtonArea.stories-C_sW_MI_.js";import"./iframe-2ZltEQ4i.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./constants-BRRACkdW.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./style-map-CkvVWuL1.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./icon-CGITV3Tv.js";import"./base-adapter-CgsLSdpx.js";import"./index-Dh0vMUMR.js";import"./index-Co64lOVc.js";import"./card--sq1Q73a.js";import"./focus-indicator-BOXpNU3y.js";import"./utils-_KxxXSob.js";import"./state-layer-BIkysl34.js";import"./event-utils-C1SDeUaq.js";import"./icon-button-BTrLobRs.js";import"./base-button-adapter-W1aGMgMa.js";import"./with-label-aware-DCBgJY4W.js";import"./with-default-aria-BhTYz4bg.js";import"./event-utils-CtHj37Lc.js";import"./tooltip-DKDNb63Y.js";import"./overlay-BnvMA_ov.js";import"./with-longpress-listener-8IlPEDv-.js";import"./dismissible-stack-CQalC8SW.js";import"./decorators-B79PnA5z.js";function i(n){const e={code:"code",h2:"h2",li:"li",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l}),`
`,t.jsx(s,{}),`
`,t.jsx(a,{of:m}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(c,{}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Always include a slotted ",t.jsx(e.code,{children:"<button>"})," element."]}),`
`,t.jsxs(e.li,{children:["Add a concise, descriptive description of the button area's action as the text content of the slotted button.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"The button's text content should preferably be the same as the visible text within the button area to reduce confusion. This can a portion of the content if long."}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:["Set any accessible attributes on the slotted button.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Set ",t.jsx(e.code,{children:"aria-controls"})," if the button controls another element on the page."]}),`
`,t.jsxs(e.li,{children:["Set ",t.jsx(e.code,{children:"aria-expanded"})," to reflect the state of the controlled element if appropriate."]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:["Verify that you can reach every nested button by keyboard navigation.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Ensure that there is a visual cue that the nested button is currently in focus."}),`
`]}),`
`]}),`
`,t.jsx(e.li,{children:"Verify that pressing the space bar or enter key while focused on a button will activate the button area in the same manner as if it had been clicked with a mouse."}),`
`,t.jsx(e.li,{children:"Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements."}),`
`]})]})}function O(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{O as default};