import{j as t}from"./jsx-runtime-R5i0QOeW.js";import{u as A,H as w,g as i,f as g}from"./index-B0Y3BdF2.js";import{d as E}from"./constants-DyS6XWk2.js";const $="_section_1v5lg_1",C="_table_1v5lg_5",p={section:$,table:C,"sb-anchor":"_sb-anchor_1v5lg_11","sb-unstyled":"_sb-unstyled_1v5lg_11"};function h({text:e,href:s}){return t.jsx("p",{children:t.jsxs("i",{children:["Learn more about ",t.jsx("a",{href:`/${s}`,children:e}),"."]})})}function a({title:e,name:s,children:n,headingLevel:r="h3"}){const l=(r==="h3"?e:`${s}-${e}`).toLowerCase().replace(/[^a-z0-9]/gi,"-");return t.jsxs("section",{className:p.section,children:[t.jsx(w,{as:r,id:l,children:e}),n]})}function _({items:e,globalConfigProperties:s}){return t.jsxs("table",{className:p.table,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Default"}),t.jsx("th",{children:"Description"}),s!=null&&s.length?t.jsx("th",{style:{whiteSpace:"nowrap",textAlign:"center"},children:"Global Config"}):null]})}),t.jsx("tbody",{children:e==null?void 0:e.map(n=>{var r;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(i,{children:n.name})}),t.jsx("td",{children:(r=n.type)!=null&&r.text?t.jsx(i,{children:n.type.text}):"-"}),t.jsx("td",{children:n.default?t.jsx(i,{children:n.default}):"-"}),t.jsx("td",{children:t.jsx(g,{children:n.description})}),s!=null&&s.length?t.jsx("td",{style:{textAlign:"center"},children:s.includes(n.name)?"✅":""}):null]},n.name)})})]})}const N=["(default)"];function b({items:e}){return t.jsxs("table",{className:p.table,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Description"})]})}),t.jsx("tbody",{children:e==null?void 0:e.map(s=>t.jsxs("tr",{children:[t.jsx("td",{children:N.includes(s.name)?t.jsx("i",{children:s.name}):t.jsx(i,{children:s.name})}),t.jsx("td",{children:t.jsx(g,{children:s.description})})]},s.name))})]})}function I({items:e}){return t.jsxs("table",{className:p.table,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Type"})]})}),t.jsx("tbody",{children:e==null?void 0:e.map(s=>{var n;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(i,{children:s.name})}),t.jsx("td",{children:t.jsx(g,{children:s.description})}),t.jsx("td",{children:(n=s.type)!=null&&n.text?t.jsx(i,{children:s.type.text}):"-"})]},s.name)})})]})}function M({items:e}){return t.jsxs("table",{className:p.table,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Parameters"}),t.jsx("th",{children:"Return Type"})]})}),t.jsx("tbody",{children:e==null?void 0:e.map(s=>{var n,r,c;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(i,{children:`${s.name}()`})}),t.jsx("td",{children:t.jsx(g,{children:s.description})}),t.jsx("td",{children:(n=s.parameters)!=null&&n.length?t.jsx(i,{children:k(s.parameters)}):"-"}),t.jsx("td",{children:(c=(r=s.return)==null?void 0:r.type)!=null&&c.text?t.jsx(i,{children:s.return.type.text}):"-"})]},s.name)})})]})}function O({dependencies:e}){return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"This component will automatically include the following components:"}),t.jsx("ul",{children:e.map(s=>{const n=s.toLowerCase().replace(/^forge-/gi,"").replace(/[^a-z0-9]/gi,"-");return t.jsx("li",{children:t.jsx("a",{href:`/?path=/docs/components-${n}--docs`,children:`<${s}>`})},s)})})]})}function k(e){return e.map(s=>`${s.name}: ${s.type.text}`).join(", ")}function D({tagName:e,headingLevel:s}){var y,S,T;const n=E(e),r=(y=n.members)==null?void 0:y.filter(d=>d.kind==="field"&&d.privacy==="public"),c=n.attributes,l=(S=n.members)==null?void 0:S.filter(d=>d.kind==="method"&&d.privacy==="public"),x=n.events,o=n.dependencies,j=n.globalConfigProperties,u=((T=n.slots)==null?void 0:T.map(d=>(d.name||(d.name="(default)"),d)))??[],m=n.cssProperties,f=n.cssParts;return t.jsxs("div",{children:[!!(r!=null&&r.length)&&t.jsxs(a,{title:"Properties",name:e,headingLevel:s,children:[t.jsx(_,{items:r,globalConfigProperties:j}),t.jsx(h,{text:"Properties",href:"?path=/docs/getting-started-usage--docs#properties--attributes"}),j!=null&&j.length?t.jsx(h,{text:"Global Configuration",href:"?path=/docs/getting-started-global-configuration--docs"}):null]}),!!(c!=null&&c.length)&&t.jsxs(a,{title:"Attributes",name:e,headingLevel:s,children:[t.jsx(_,{items:c}),t.jsx(h,{text:"Attributes",href:"?path=/docs/getting-started-usage--docs#properties--attributes"})]}),!!(x!=null&&x.length)&&t.jsxs(a,{title:"Events",name:e,headingLevel:s,children:[t.jsx(I,{items:x}),t.jsx(h,{text:"Events",href:"?path=/docs/getting-started-usage--docs#events"})]}),!!(u!=null&&u.length)&&t.jsxs(a,{title:"Slots",name:e,headingLevel:s,children:[t.jsx(b,{items:u}),t.jsx(h,{text:"Slots",href:"?path=/docs/getting-started-usage--docs#slots"})]}),!!(l!=null&&l.length)&&t.jsxs(a,{title:"Methods",name:e,headingLevel:s,children:[t.jsx(M,{items:l}),t.jsx(h,{text:"Methods",href:"?path=/docs/getting-started-usage--docs#methods"})]}),!!(m!=null&&m.length)&&t.jsxs(a,{title:"CSS Custom Properties",name:e,headingLevel:s,children:[t.jsx(b,{items:m}),t.jsx(h,{text:"CSS Custom Properties",href:"?path=/docs/getting-started-usage--docs#css-custom-properties"})]}),!!(f!=null&&f.length)&&t.jsxs(a,{title:"CSS Shadow Parts",name:e,headingLevel:s,children:[t.jsx(b,{items:f}),t.jsx(h,{text:"CSS Shadow Parts",href:"?path=/docs/getting-started-usage--docs#css-shadow-parts"})]}),!!(o!=null&&o.length)&&t.jsx(a,{title:"Dependencies",name:e,headingLevel:s,children:t.jsx(O,{dependencies:o})})]})}const R=/\s*\/\s*/,v=e=>{const s=e.trim().split(R);return(s==null?void 0:s[(s==null?void 0:s.length)-1])||e};function B(){const e=A("story",["story"]),s=e.story.component;if(!s||typeof s!="string")return null;const n=e.story.subcomponents;if(!(!!n&&Object.keys(n).length>0))return t.jsx(D,{tagName:s,headingLevel:"h3"});const c=v(e.story.title),l={[c]:s,...n};return t.jsx("div",{children:Object.entries(l).map(([x,o],j)=>{const u=c.toLowerCase().replace(/[^a-z0-9]/gi,"-");return t.jsxs("div",{children:[t.jsx(w,{as:"h3",id:u,children:x}),t.jsx(D,{tagName:o,headingLevel:"h4"})]},j)})})}export{B as C};
