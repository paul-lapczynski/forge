import{j as e}from"./jsx-runtime-DLKj12b8.js";import{u as i}from"./index-C5iMOghs.js";import{M as r,T as s,C as a}from"./index-oI8cfa7R.js";import{C as l}from"./CustomArgTypes-DmNi1XaC.js";import{A as p,D as c}from"./Accordion.stories-vDoW8bM2.js";import"./iframe-BmWlDcXA.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./utils-CpphmWLJ.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./decorators-B79PnA5z.js";import"./constants-BMnwgo1j.js";import"./accordion-d1luDw4Y.js";import"./base-adapter-CfNZnrSk.js";import"./expansion-panel-C_fBVTc2.js";import"./index-BhA1MhXR.js";import"./icon-Sxf3JEPH.js";import"./index-Dh0vMUMR.js";import"./divider-DsAzcUke.js";function t(o){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:p}),`
`,e.jsx(s,{}),`
`,e.jsxs(n.p,{children:["This component does not provide any visual appearance. It is just an orchestrator of child ",e.jsx(n.code,{children:"<forge-expansion-panel>"})," components."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"<forge-accordion>"})," will ensure that only one child expansion panel, at most, is open at any given time. If you need to allow for multiple panels to be opened simultaneously, you should opt for using just multiple ",e.jsx(n.code,{children:"<forge-expansion-panel>"})," components together without an accordion wrapper."]}),`
`,e.jsx(n.p,{children:"See the expansion panel component for information on how to use that component separately."}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Verify that you can tab to each panel in the accordion.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure that there is a visual cue that the panel is selected."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Verify that pressing the space bar or enter key while focusing on a panel will toggle it open and closed."}),`
`,e.jsx(n.li,{children:"If any open panel contains a link, button, or other navigation element, ensure that those tab stops are included while tabbing through the accordion."}),`
`,e.jsx(n.li,{children:"If any closed panel contains a link, button, or other navigation element, ensure those tab stops are skipped while tabbing through the accordion."}),`
`]})]})}function F(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{F as default};