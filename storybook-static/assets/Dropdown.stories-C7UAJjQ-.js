import{r as h,R as ee}from"./index-BwDkhjyp.js";import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{d as n,r as O,c as Ve,g as a,e as Te,h as x,m as q,l as oe}from"./typography-CSS9jIFy.js";import{P as t}from"./index-D3ylJrlI.js";import{s as L,l as w,n as ze,w as _,a as je,b as _e}from"./index-DSnNLvsD.js";import{I as le}from"./Dialog-CDyxst7F.js";import{c as se}from"./index-mzK36X55.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-xOnlrl6M.js";const l=e=>{const i=e.icon?e.icon:null,o=Ve(e,["className","onClick"]);return r.jsx(l.Ele,{href:e.linkTo,tabIndex:0,...e,children:r.jsxs(l.Wrapper,{tabIndex:-1,...o,children:[e.iconLeft&&r.jsx(i,{className:"icon-left",...e.iconProps}),e.children,e.iconRight&&r.jsx(i,{className:"icon-right",...e.iconProps})]})})};l.Ele=n.a`
  background-color: transparent;
  font-weight: 300;
  color: ${e=>e.color};
  text-decoration: none;
  display: inline-flex;
`;l.Wrapper=n.span`
  display: inline-flex;
  padding: 0.3rem;
  background-color: ${e=>e.bgColor};
  cursor: pointer;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;
  ${l.Ele}:hover & {
    color: ${e=>e.hoverColor};
    text-decoration: none;
  }
  ${l.Ele}:focus & {
    border-color: ${O.z300};
  }
  ${l.Ele}:active &,
  ${l.Ele}:visited & {
    color: ${e=>e.activeColor};
  }
  line-height: 1;
  .icon-left {
    transition: 0.3s ease;
  }
  .icon-right {
    transition: 0.4s ease;
  }

  &:hover {
    .icon-left {
      margin: 0 0.8rem 0 -0.4rem;
    }
    .icon-right {
      margin: 0 -1.1rem 0 1.5rem;
    }
  }

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    border-color: transparent;
  }
  > i {
    margin-left: ${e=>e.iconRight?L.xxsmall:0};
    margin-right: ${e=>e.iconLeft?L.xxsmall:0};
  }
`;l.propTypes={linkTo:t.string,target:t.oneOf(["_self","_blank","_parent","_top"]),title:t.string.isRequired,onClick:t.func,role:t.string,color:t.string,hoverColor:t.string,activeColor:t.string,bgColor:t.string,iconLeft:t.bool,iconRight:t.bool,icon:t.func,iconProps:t.objectOf(t.any),children:t.any};l.defaultProps={target:"_self",role:"link",color:w.default,hoverColor:w.default,activeColor:w.defaultActive,bgColor:"transparent",iconLeft:!1,iconRight:!1,icon:null,iconProps:{},children:null};l.__docgenInfo={description:"",methods:[],displayName:"Link",props:{target:{defaultValue:{value:'"_self"',computed:!1},description:"value for window.taget",type:{name:"enum",value:[{value:'"_self"',computed:!1},{value:'"_blank"',computed:!1},{value:'"_parent"',computed:!1},{value:'"_top"',computed:!1}]},required:!1},role:{defaultValue:{value:'"link"',computed:!1},description:"for accessebility",type:{name:"string"},required:!1},color:{defaultValue:{value:'"#EF4F5F"',computed:!1},description:"",type:{name:"string"},required:!1},hoverColor:{defaultValue:{value:'"#EF4F5F"',computed:!1},description:"Text color on hover",type:{name:"string"},required:!1},activeColor:{defaultValue:{value:'"#E03546"',computed:!1},description:"Text color on active state",type:{name:"string"},required:!1},bgColor:{defaultValue:{value:'"transparent"',computed:!1},description:"",type:{name:"string"},required:!1},iconLeft:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},iconRight:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"Icon component you want to show",type:{name:"func"},required:!1},iconProps:{defaultValue:{value:"{}",computed:!1},description:"props for icon component you want to show",type:{name:"objectOf",value:{name:"any"}},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"any"},required:!1},linkTo:{description:"forwarding link",type:{name:"string"},required:!1},title:{description:"title of link, mandatory for accessebility",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!1}}};l.__docgenInfo={description:"",methods:[],displayName:"Link",props:{target:{defaultValue:{value:'"_self"',computed:!1},description:"value for window.taget",type:{name:"enum",value:[{value:'"_self"',computed:!1},{value:'"_blank"',computed:!1},{value:'"_parent"',computed:!1},{value:'"_top"',computed:!1}]},required:!1},role:{defaultValue:{value:'"link"',computed:!1},description:"for accessebility",type:{name:"string"},required:!1},color:{defaultValue:{value:'"#EF4F5F"',computed:!1},description:"",type:{name:"string"},required:!1},hoverColor:{defaultValue:{value:'"#EF4F5F"',computed:!1},description:"Text color on hover",type:{name:"string"},required:!1},activeColor:{defaultValue:{value:'"#E03546"',computed:!1},description:"Text color on active state",type:{name:"string"},required:!1},bgColor:{defaultValue:{value:'"transparent"',computed:!1},description:"",type:{name:"string"},required:!1},iconLeft:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},iconRight:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"Icon component you want to show",type:{name:"func"},required:!1},iconProps:{defaultValue:{value:"{}",computed:!1},description:"props for icon component you want to show",type:{name:"objectOf",value:{name:"any"}},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"any"},required:!1},linkTo:{description:"forwarding link",type:{name:"string"},required:!1},title:{description:"title of link, mandatory for accessebility",type:{name:"string"},required:!0},onClick:{description:"",type:{name:"func"},required:!1}}};const de=e=>{const i=se();return r.jsxs(le,{uniqueId:i,...e,children:[r.jsx("title",{children:"chevron-right"}),r.jsx("path",{d:"M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"})]})};de.__docgenInfo={description:"",methods:[],displayName:"ChevronRight"};const s=e=>r.jsx(s.Ele,{"aria-label":"Breadcrumb",...e,children:e.children});s.Separator=n.div`
  margin-left: ${L.xsmall};
  color: ${a.z400};
  cursor: default;
  font-size: 1.2rem;
  @media (max-width: 480px) {
    display: none;
  }
`;s.Ele=n.div`
  span {
    font-size: 1.2rem;
  }

  & > a {
    font-weight: 300;
    color: ${a.z600};
  }

  & > a:visited:hover:not(last-child) > span {
    @media (min-width: 481px) {
      color: ${w.defaultHover};
    }
  }

  & > a:first-child span {
    padding-left: 0;
    border-left: 0;
  }

  & > a:last-child {
    margin-right: 0;
    color: ${a.z300};
    cursor: default;
    pointer-events: none;
  }

  & > a:last-child:visited span {
    color: ${a.z300};
  }

  & > a:last-child ${s.Separator} {
    display: none;
  }

  & > a:first-child {
    color: ${w.defaultColor};
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    span {
      font-size: 1.4rem;
      padding: 0;
      border-bottom: 1px solid ${a.z200};
      border-radius: 0;
      width: 100%;
      padding: 1.5rem 0;
      color: ${a.z900} !important;
    }

    & > a:last-child span {
      color: ${a.z300} !important;
    }
  }

  & > a:last-child i svg {
    fill: ${a.z300};
  }
`;s.Chevron=n(de)`
  @media (min-width: 481px) {
    display: none !important;
  }
`;const Oe=n(l)`
  @media (max-width: 480px) {
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;s.Link=e=>r.jsxs(Oe,{...e,activeColor:a.z600,children:[e.children,r.jsx(s.Separator,{children:"/"}),!!e.isMobile&&r.jsx(s.Chevron,{})]});s.propTypes={children:t.element.isRequired};s.Link.propTypes={linkTo:t.string,isMobile:t.bool};s.Link.defaultProps={isMobile:!0};s.__docgenInfo={description:"",methods:[{name:"Link",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null}],displayName:"Breadcrumb",props:{children:{description:"",type:{name:"element"},required:!0}}};s.__docgenInfo={description:"",methods:[{name:"Link",docblock:null,modifiers:["static"],params:[{name:"props",optional:!1,type:null}],returns:null}],displayName:"Breadcrumb",props:{children:{description:"",type:{name:"element"},required:!0}}};const ue=e=>{const i=se();return r.jsxs(le,{uniqueId:i,...e,children:[r.jsx("title",{children:"down-triangle"}),r.jsx("path",{d:"M20 5.42l-10 10-10-10h20z"})]})};ue.__docgenInfo={description:"",methods:[],displayName:"DownTriangle"};const g=e=>{const i=h.useRef(),{handleClickOutside:o,removeHandler:$}=e;return h.useEffect(()=>{if(typeof o=="function"&&!$){const k=c=>{i.current&&i.current.contains(c.target)||o(c)};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}}return ze},[o,$]),r.jsx(g.Wrapper,{...e,ref:i,children:e.children})};g.Wrapper=n.div`
  width: ${e=>e.width?e.width:"max-content"};
`;g.propTypes={width:t.string,children:t.node,handleClickOutside:t.func.isRequired,removeHandler:t.bool};g.defaultProps={removeHandler:!1};g.__docgenInfo={description:"",methods:[],displayName:"OnClickOutside",props:{removeHandler:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},width:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},handleClickOutside:{description:"",type:{name:"func"},required:!0}}};const Ie=({isCompact:e,isCentered:i})=>i?"0 2rem":`0 ${e?.5:2}rem 0 0`,C=e=>{const{value:i,width:o,rightIcon:$,onSelect:k,children:c,leftIcon:V=null,leftNode:I=null,helperText:R="",errorText:N="",showArrow:H=!1,className:ce="",isCompact:F=!1,borderColor:pe="",isNaked:W,isTransparent:y,staticHeader:A,maxMenuHeight:fe,isCentered:B,placeholder:me,shouldChange:K,noMarginTop:he=!1,heading:f="",fontSize:ge="",borderRadius:U="",customPadding:ye=""}=e,[v,S]=h.useState(!1),[M,G]=h.useState(i),[d,m]=h.useState(0),ve=()=>S(!v),be=()=>S(!0),E=()=>{S(!1),m(0)},Y=(u,p)=>{G(p),k(u),m(0)},J=(u,p)=>{typeof K=="function"?K(u)&&Y(u,p):Y(u,p),E()};h.useEffect(()=>{G(i)},[i]);const T="id-"+(Math.random()*10).toFixed(3),Q=N||R||"",X=!!N,xe=(u,p)=>{if(u.preventDefault(),c&&c.length){const b=()=>{d?d!==1&&m(d-1):m(1)},z=()=>{d||m(1),d!==c.length&&m(d+1)},P=()=>{if(d){const Ce=Z[d]||{},{value:$e="",label:ke=""}=Ce;J($e,ke)}};switch(p){case"UP":b();break;case"DOWN":z();break;case"ENTER":P();break}}},Z={},we=u=>ee.Children.map(u,(b,z)=>{const P=d===z+1;return Z[z+1]={value:b.props.value,label:b.props.label},x(b,{_passClick:J,id:T,keySelected:P})}),qe=()=>A?x(A):M||me;return r.jsx(g,{handleClickOutside:E,width:o,className:ce,children:r.jsxs(Ue,{width:o,"aria-describedby":`dropdown-help-${T}`,"aria-activedescendant":T+"-selected",onFocus:be,onBlur:E,onKeyDown:Te(xe),tabIndex:"0",children:[r.jsxs(He,{isMenuOpen:v,isError:X,onMouseDown:ve,isCompact:F,borderColor:pe,isNaked:W,isTransparent:y,heading:f,borderRadius:U,customPadding:ye,children:[r.jsxs(De,{isCompact:F,isTransparent:y,isCentered:B,children:[f&&r.jsx(Fe,{children:f}),r.jsxs(Re,{isCentered:B,children:[!!V&&x(V,{size:f?13:16,color:y?_:a.z800}),!!I&&!V&&x(I),r.jsx(Le,{hasLeftIcon:!!V||!!I,isTransparent:y,hasNoMargin:W||he,isPlaceholder:!M,heading:f,fontSize:ge,children:qe()})]})]}),r.jsx(Ee,{isMenuOpen:v,children:x($,{size:14,color:y?_:a.z400})})]}),!!Q&&r.jsx(Pe,{isError:X,id:`dropdown-help-${T}`,children:Q}),r.jsx(D,{showArrow:H,isOpen:v,heading:f,borderRadius:U,children:v&&r.jsxs(r.Fragment,{children:[H&&r.jsxs(ee.Fragment,{children:[r.jsx(D.Arrow,{}),r.jsx(Me,{})]}),r.jsx(Se,{maxMenuHeight:fe,children:we(c)})]})})]})})},Ne=e=>e?"5.8rem":"5.3rem",te=({showArrow:e,heading:i},o)=>e&&i?o?"5.7rem":"6.5rem":i?o?"5.2rem":"6rem":Ne(e),D=n.span`
  position: absolute;
  top: ${e=>te(e)}; // TODO
  width: 100%;
  border-radius: ${({borderRadius:e})=>e||q.radius};
  background: ${_};
  box-shadow: 0px 1px 8px rgba(28, 28, 28, 0.15);
  z-index: 10;
  opacity: ${e=>e.isOpen?"1":"0"}; // TODO
  transition:
    opacity,
    transform ${q.animationDuration} ease; // TODO transition
  transform: translateY(${e=>e.isOpen?"0":"-1rem"});

  @media (max-width: 480px) {
    top: ${e=>te(e,!0)};
  }
`,Se=n.section`
  margin: 1rem 0;
  max-height: ${e=>e.maxMenuHeight};
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`,Me=n.span`
  position: absolute;
  right: 1.5rem;
  width: 2.5rem;
  height: 1rem;
  top: 0;
  background: white;
`;D.Arrow=n.div`
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;
  transform: rotate(45deg);
  top: -7px;
  right: 2rem;
  background: white;
  box-shadow: 0px -1px 3px rgba(28, 28, 28, 0.15);
`;const Ee=n.span`
  transform: ${e=>e.isMenuOpen?"rotate(180deg)":"none"}; // TODO
  transition: transform ${q.animationDuration};
`,Pe=n.p`
  font-size: 11px;
  margin: 2px 0;
  color: ${e=>e.isError?O.z400:a.z400}; // TODO
`;C.propTypes={value:t.string,width:t.string,leftIcon:t.node,leftNode:t.node,rightIcon:t.node,children:t.node,onSelect:t.func.isRequired,helperText:t.string,errorText:t.string,showArrow:t.bool,className:t.string,isCompact:t.bool,borderColor:t.string,isNaked:t.bool,isTransparent:t.bool,staticHeader:t.node,maxMenuHeight:t.string,isCentered:t.bool,placeholder:t.string,shouldChange:t.func,noMarginTop:t.bool,heading:t.string,fontSize:t.string,borderRadius:t.string,customPadding:t.string};C.defaultProps={label:"Choose...",value:"",width:"",leftIcon:null,leftNode:null,rightIcon:r.jsx(ue,{}),children:null,showArrow:!1,isNaked:!1,isTransparent:!1,staticHeader:null,maxMenuHeight:"30rem",isCentered:!1,placeholder:"",noMarginTop:!1,heading:"",fontSize:"",borderRadius:"",customPadding:""};const re=({heading:e,fontSize:i},o=!1)=>i||(o?e?"1.4rem":"1.8rem":e?"1.6rem":"1.8rem"),Le=n.span`
  margin-left: ${e=>e.hasLeftIcon?"1rem":"0"};
  margin-top: ${e=>e.hasNoMargin?0:"0.2rem"};
  color: ${e=>Ke(e)};
  font-size: ${e=>re(e)};
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: ${e=>re(e,!0)};
  }
`,De=n.div`
  margin: ${e=>Ie(e)};
  width: ${({isCentered:e})=>e?"100%":"inherit"};
`,Re=n.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  justify-content: ${({isCentered:e})=>e?"center":"unset"};
`,He=n.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.isNaked?"flex-end":"space-between"};
  padding: ${e=>Ae(e)};
  font-size: 18px;
  height: ${({heading:e})=>e?6:4.8}rem;
  border: ${e=>Be(e)};
  border-radius: ${({borderRadius:e})=>e||q.radius};
  cursor: pointer;
  background: ${e=>We(e)};

  @media (max-width: 480px) {
    height: ${({heading:e})=>e?5.2:4.8}rem;
  }
`,Fe=n.div`
  font-size: 1.4rem;
  color: ${a.z500};
  line-height: 1.8rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,We=e=>e.isError?O.z100:e.isTransparent?"transparent":"#fff",Ae=e=>e.isError?e.isCompact?"1.5rem 1rem":"1.5rem 1.85rem":e.isNaked?"1rem 0":e.customPadding?e.customPadding:e.isMenuOpen?e.isCompact?"1.5rem 1.05rem":"1.5rem 1.9rem":e.isCompact?"1.65rem 1.15rem":"1.65rem 2rem",Be=e=>()=>e.isNaked?"none":e.isError?`2px solid ${O.z600}`:e.isMenuOpen?`2px solid ${e.borderColor?e.borderColor:je.z500}`:"1px solid "+a.z300,Ke=e=>e.isTransparent?_:e.isPlaceholder?a.z300:a.z800,Ue=n.div`
  position: relative;
  width: ${e=>e.width?e.width:q.dropdown.defaultWidth};
`;C.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{defaultValue:{value:'"Choose..."',computed:!1},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},width:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},leftIcon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},leftNode:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},rightIcon:{defaultValue:{value:"<DownTriangle />",computed:!1},description:"",type:{name:"node"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},showArrow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isNaked:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isTransparent:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},staticHeader:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},maxMenuHeight:{defaultValue:{value:'"30rem"',computed:!1},description:"",type:{name:"string"},required:!1},isCentered:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},noMarginTop:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},heading:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},fontSize:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},borderRadius:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},customPadding:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onSelect:{description:"",type:{name:"func"},required:!0},helperText:{description:"",type:{name:"string"},required:!1},errorText:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},isCompact:{description:"",type:{name:"bool"},required:!1},borderColor:{description:"",type:{name:"string"},required:!1},shouldChange:{description:"",type:{name:"func"},required:!1}}};C.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{defaultValue:{value:'"Choose..."',computed:!1},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},width:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},leftIcon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},leftNode:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},rightIcon:{defaultValue:{value:"<DownTriangle />",computed:!1},description:"",type:{name:"node"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},showArrow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isNaked:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isTransparent:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},staticHeader:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},maxMenuHeight:{defaultValue:{value:'"30rem"',computed:!1},description:"",type:{name:"string"},required:!1},isCentered:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},noMarginTop:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},heading:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},fontSize:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},borderRadius:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},customPadding:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},onSelect:{description:"",type:{name:"func"},required:!0},helperText:{description:"",type:{name:"string"},required:!1},errorText:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},isCompact:{description:"",type:{name:"bool"},required:!1},borderColor:{description:"",type:{name:"string"},required:!1},shouldChange:{description:"",type:{name:"func"},required:!1}}};n.span`
  font-weight: 500;
  font-size: inherit;
  color: ${_e};
`;t.node,t.node,t.bool,t.string,t.string,t.string,t.oneOfType([t.string,t.number]),t.bool,t.bool,t.string,t.bool,t.bool,t.string,t.func,t.bool,t.bool,t.string,t.string,t.bool,t.bool;n.span`
  font-size: 1.5rem;
  color: ${e=>e.isKeySelected?a.z800:a.z400};
  white-space: nowrap;
  margin-left: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
`;n.span`
  display: flex;
  align-items: ${({centered:e})=>e?"center":"unset"};
  max-width: ${e=>e.hasDesc?"65%":"100%"};
`;n.span`
  margin-left: ${e=>e.hasLeftIcon?"1rem":"0"};
  margin-top: ${({noMarginTop:e})=>e?0:"0.3rem"};
  font-size: ${e=>e.fontSize};
  color: ${e=>e.disabled?a.z400:a.z800};
  font-weight: 300;
  align-items: ${({centered:e})=>e?"center":"unset"};
  justify-content: space-between;
  ${({isMultiliner:e})=>!e&&oe`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
  text-align: left;
`;n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${e=>e.isCompact?"1rem 1rem":"1rem 2rem"};
  cursor: ${e=>e.disabled?"initial":"pointer"};
  display: ${e=>e.isVisible?"block":"none"};
  background-color: ${e=>e.isKeySelected?a.z95:e.isSelected?"#E9F2FC":"initial"}; // TODO
  ${e=>!e.disabled&&oe`
      &:hover {
        background-color: ${a.z95};
      }
      &:hover > span {
        color: ${a.z800};
      }
    `}
`;const nt={title:"Atoms/Dropdown",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","teritiary"]}}},j={args:{variant:"primary"}};var ne,ae,ie;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(ie=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const at=["Primary"];export{j as Primary,at as __namedExportsOrder,nt as default};
