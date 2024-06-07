import{x as m}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{g as p}from"./utils-CpphmWLJ.js";import"./constants-BMnwgo1j.js";import"./autocomplete-li6bPXyR.js";import"./text-field-piDMR7NH.js";import"./base-field-Db0ByNro.js";import"./focus-indicator-WHVXAnYX.js";import"./index-Dh0vMUMR.js";import"./label-Ba8gSJXo.js";import"./button-DKp5JmaL.js";import"./state-layer-DfBT0h4a.js";import"./button-toggle-group-CUV8xQR0.js";import"./checkbox-BnMMH_z2.js";import"./icon-button-VlM_yzEM.js";import"./icon-Sxf3JEPH.js";import"./switch-CvJdSirX.js";import"./linear-progress-CvNwXotY.js";import"./list-ClnKymlF.js";import"./popover-BDS33NIt.js";import"./overlay-BEOKbUF9.js";import"./skeleton-CdDf7LSx.js";import"./chip-field-BPGQvfor.js";const r="forge-autocomplete",u={title:"Components/Autocomplete",render:e=>{const n=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],s=(c,f)=>n.filter(t=>t.toLowerCase().includes(c.toLowerCase())).map(t=>({value:t,label:t}));return m`
    <forge-autocomplete
      .debounce=${e.debounce}
      .filterOnFocus=${e.filterOnFocus}
      .filterFocusFirst=${e.filterFocusFirst}
      .mode=${e.mode}
      .multiple=${e.multiple}
      .observeScroll=${e.observeScroll}
      .oberveScrollThreshold=${e.observeScrollThreshold}
      .optionLimit=${e.optionLimit}
      .filter=${s}>
      <forge-text-field>
        <input type="text" id="state" />
        <label for="state" aria-label="choose state">Choose state</label>
        
        <!-- You can optionally provide a clear button with a data-forge-autocomplete-clear attribute that will be detected automatically. -->
        <forge-icon-button data-forge-autocomplete-clear slot="trailing" dense density="3" aria-label="test">
          <forge-icon name="close"></forge-icon>
        </forge-icon-button>

        <!-- The existence of the data-forge-dropdown-icon attribute controls the open state rotation automatically. -->
        <forge-icon slot="trailing" name="arrow_drop_down" data-forge-dropdown-icon></forge-icon>
      </forge-text-field>
    </forge-autocomplete>
    `},component:r,parameters:{actions:{disable:!0}},argTypes:{...p({tagName:r,include:["allowUnmatched","debounce","filterOnFocus","filterFocusFirst","mode","multiple","observeScroll","oberveScrollThreshold","optionLimit"],controls:{mode:{control:"select",options:["default","stateless"]},debounce:{control:"number"},observeScrollThreshold:{control:"number"}}})},args:{debounce:500,filterOnFocus:!0,filterFocusFirst:!0,mode:"default",optionLimit:10,observeScroll:!0,allowUnmatched:!1,multiple:!1}},o={};var a,i,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const d=["Demo"],V=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{V as A,o as D};