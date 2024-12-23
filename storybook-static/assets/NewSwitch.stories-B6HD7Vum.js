import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as F}from"./index-BwDkhjyp.js";import{o as H,d as p,r as y,l as b,m as c,f as K,a as U,g as W,b as M}from"./typography-CSS9jIFy.js";import{P as r}from"./index-D3ylJrlI.js";import{c as R}from"./index-mzK36X55.js";import"./_commonjsHelpers-BosuxZz1.js";const D=(e="lush")=>e.toLowerCase()+"_"+R();let i=22,n=2;const V=38,X=V-(i+2*n+1),a=e=>{const{labelPosition:f,offLabel:_,onLabel:I,hideAccessibleLabels:v=!1,readOnly:l,id:E}=e,[s,N]=F.useState(e.on),w=O=>{O.preventDefault(),O.stopPropagation(),!l&&(N(!s),e.onToggle(!s))},$=D("switch-label"),h=t.jsx(a.checkbox,{type:"checkbox",checked:s,readOnly:!0,id:E}),x=t.jsxs(a.Label,{labelPosition:f,id:$,"aria-disabled":l,children:[t.jsx("span",{"aria-hidden":s,children:_}),t.jsx("span",{"aria-hidden":!s,children:I})]},"switchLabel"),k=t.jsx(a.Toggle,{on:s,readOnly:e.readOnly,"aria-labelledby":$,"aria-disabled":l},"switchToggle");let g=t.jsx(t.Fragment,{children:h});return f=="left"?g=t.jsxs(t.Fragment,{children:[h,v?null:x,k]}):f=="right"&&(g=t.jsxs(t.Fragment,{children:[h,k,v?null:x]})),t.jsx(o,{onClick:w,onKeyDown:H(w),tabIndex:l?-1:0,...e,"aria-disabled":l,children:g})},o=p.div`
  display: inline-flex;
  height: ${(i+6*n)/10}rem;
  align-items: center;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  width: ${e=>e.width||"10rem"};
  justify-content: ${e=>e.justifyContent};
  input:focus ~ ${a.Toggle} {
    box-shadow: 0 0 0 2px ${y.z500};
  }

  padding: 0 3rem;
  ${e=>e.readOnly&&b`
      opacity: 0.4;
    `}

  @media screen and (-ms-high-contrast: active) {
    outline: 1px dotted white;
    outline-offset: 0.25em;
  }

  @media screen and (prefers-color-scheme: dark) {
    & {
      background-color: black;
    }
  }
`;a.checkbox=p.input.attrs({type:"checkbox"})`
  top: auto;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  width: 0;
  height: 0;
  white-space: nowrap;
  visibility: hidden;
`;a.Toggle=p.span`
  position: relative;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  appearance: none;
  bottom: 0;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  width: ${V/10}rem;
  height: ${(i+2*n)/10}rem;
  margin-top: 0;
  margin-left: 0;
  background-color: ${e=>e.on===!0?y.z_red:"#ccc"};

  transition:
    background-color ${c.shortAnimDuration} ease,
    opacity ${c.shortAnimDuration};
  border-radius: ${(i+2*n)/10}rem;
  outline: none;

  ${o}:hover &,
  ${o}:focus &,
  &:active {
    box-shadow: 0 0 0.5em #333;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    & {
      transition: none;
    }
  }

  @media screen and (prefers-color-scheme: dark) {
    ${o}:hover &,
  ${o}:focus &,
  &:active {
      box-shadow: none;
    }
  }
  :before {
    position: absolute;
    content: "";
    height: ${i/10}rem;
    width: ${i/10}rem;
    left: ${n/10}rem;
    background-color: white;
    margin-top: 0;
    margin-left: 0;
    outline: none;
    border-radius: 50%;
    transition:
      transform ${c.shortAnimDuration} ease,
      opacity ${c.shortAnimDuration};
    transform: translateX(
      ${e=>e.on===!0?X/10+"rem":0}
    );

    border: 0.5px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 ${e=>e.on===!0?.2:.1}rem 0.4rem
      rgba(28, 28, 28, 0.1);
    &:active {
      outline: none;
    }
    @media screen and (prefers-reduced-motion: reduce) {
      & {
        transition: none;
      }
    }

    @media screen and (prefers-color-scheme: dark) {
      background-color: black;
    }
  }

  ${e=>e.labelPosition==="left"?b`
          margin-left: 3rem;
        `:b`
          margin-right: 3rem;
        `}
`;a.Label=p.label`
  height: ${i/10}rem;
  cursor: pointer;
  /* position: relative; */
  span {
    display: block;
    /* position: absolute; */
    font-size: ${K.z300};
    font-weight: ${U.medium};
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${W.z700};
    ${o}:hover &,
    ${o}:focus & {
      color: ${y.z_red};
    }
    margin-left: ${e=>e.labelPosition=="left"?"0":n.small};
    margin-right: ${e=>e.labelPosition=="left"?n.small:"0"};
    /* 
    In order to make the switch always the same width
    we are setting a fixed height and overlapping the switch labels
    */
    height: ${i/10}rem;
    line-height: ${M.regular};
    &:last-child {
      /* Moves the second label up to overlap the first */
      margin-top: -2rem;
    }
    &[aria-hidden="true"] {
      visibility: hidden;
    }
    /* if the label is empty, then remove the node so it doesn't create a margin */
    &:empty {
      display: none;
    }

    @media screen and (prefers-color-scheme: dark) {
      & {
        color: white;
      }

      ${o}:hover &,
        ${o}:focus & {
        color: #fff;
      }
    }
  }
`;a.propTypes={onToggle:r.func,on:r.bool,accessibleLabels:r.arrayOf(r.string),hideAccessibleLabels:r.bool,readOnly:r.bool,labelPosition:r.oneOf(["right","left"]),justifyContent:r.oneOf(["right","left","center","space-around","space-between","space-evenly"]),id:r.string};a.defaultProps={onToggle:null,on:!1,accessibleLabels:["Enabled","Disabled"],hideAccessibleLabels:!1,readOnly:!1,labelPosition:"right",justifyContent:"start",id:D("switchCheckbox")};a.__docgenInfo={description:"",methods:[],displayName:"NewSwitch",props:{onToggle:{defaultValue:{value:"null",computed:!1},description:"Function called on toggle",type:{name:"func"},required:!1},on:{defaultValue:{value:"false",computed:!1},description:"State of the toggle",type:{name:"bool"},required:!1},accessibleLabels:{defaultValue:{value:'["Enabled", "Disabled"]',computed:!1},description:"Labels to show, import for accessibility",type:{name:"arrayOf",value:{name:"string"}},required:!1},hideAccessibleLabels:{defaultValue:{value:"false",computed:!1},description:"Hides accessibility labels",type:{name:"bool"},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},description:"Locked switch",type:{name:"bool"},required:!1},labelPosition:{defaultValue:{value:'"right"',computed:!1},description:"Label on left side",type:{name:"enum",value:[{value:'"right"',computed:!1},{value:'"left"',computed:!1}]},required:!1},justifyContent:{defaultValue:{value:'"start"',computed:!1},description:"",type:{name:"enum",value:[{value:'"right"',computed:!1},{value:'"left"',computed:!1},{value:'"center"',computed:!1},{value:'"space-around"',computed:!1},{value:'"space-between"',computed:!1},{value:'"space-evenly"',computed:!1}]},required:!1},id:{defaultValue:{value:'getUniqueId("switchCheckbox")',computed:!0},description:"",type:{name:"string"},required:!1}}};const ee={title:"Atoms/NewSwitch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","teritiary"]}}},d={args:{id:5,on:!0,readOnly:!1,labelPosition:"left"}},u={args:{id:5,on:!0,readOnly:!1,labelPosition:"right"}},m={args:{children:"Teritiary",variant:"teritiary"}};var j,L,P;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 5,
    on: true,
    readOnly: false,
    labelPosition: 'left'
  }
}`,...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var T,S,q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 5,
    on: true,
    readOnly: false,
    labelPosition: 'right'
  }
}`,...(q=(S=u.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var A,C,z;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Teritiary',
    variant: 'teritiary'
  }
}`,...(z=(C=m.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const te=["Primary","Secondary","Teritiary"];export{d as Primary,u as Secondary,m as Teritiary,te as __namedExportsOrder,ee as default};
