import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as b}from"./index-BwDkhjyp.js";import{d as i,s as re,i as ne,l as k,m as M,g as R,o as H}from"./typography-CSS9jIFy.js";import{P as t}from"./index-D3ylJrlI.js";import{R as se}from"./index-xOnlrl6M.js";import{b as x,n,w as L,g as de,B as D}from"./index-DSnNLvsD.js";import{c as ue}from"./index-mzK36X55.js";const w=e=>{const[o,l]=b.useState(!1);return b.useEffect(()=>l(!0),[]),o?se.createPortal(a.jsx(w.Wrapper,{children:e.children}),document.querySelector("body")):null};w.propTypes={children:t.node};w.Wrapper=i.div``;const ce=i.svg`
  ${re}
`,h=e=>{const{color:o,baseColor:l,size:r,showPointer:d,onClick:p,className:C,children:q,iconName:y,percentage:f,uniqueId:g}=e,j=`icon-svg-title-${y}`,$=`icon-svg-desc-${y}`;return a.jsx(h.Element,{showPointer:d,onClick:p,className:C,...e,children:a.jsxs(ce,{xmlns:"http://www.w3.org/2000/svg",fill:o,width:r,height:r,viewBox:"0 0 20 20","aria-labelledby":`${j} ${$}`,role:"img",children:[!!f&&a.jsxs("linearGradient",{id:g,x1:"0",x2:"100%",y1:"0",y2:"0",children:[a.jsx("stop",{offset:"0",stopColor:o}),a.jsx("stop",{offset:`${f}%`,stopColor:o}),f<100&&a.jsx("stop",{offset:`${f+1}%`,stopColor:l}),f<100&&a.jsx("stop",{offset:"1",stopColor:l})]}),q]})})};h.Element=i.i`
  ${ne}
`;h.defaultProps={color:x,baseColor:"transparent",size:20,showPointer:!1,onClick:n,className:"",children:null,iconName:"",percentage:0};h.propTypes={color:t.string,size:t.number,onClick:t.func,showPointer:t.bool,className:t.string,iconName:t.string,children:t.node,uniqueId:t.string.isRequired,baseColor:t.string,percentage:t.number};h.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{color:{defaultValue:{value:'"#1C1C1C"',computed:!1},description:"The color prop helps user to set a custom color of the icon.",type:{name:"string"},required:!1},baseColor:{defaultValue:{value:'"transparent"',computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"20",computed:!1},description:"Size prop overrides the default size of the icon. It helps user to set a custom size of the icon.",type:{name:"number"},required:!1},showPointer:{defaultValue:{value:"false",computed:!1},description:"Shows cursor as pointer on hover if set to true. By default it does not show pointer;",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},description:"Callback function to be triggered when user clicks on an icon.",type:{name:"func"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},iconName:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},percentage:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},uniqueId:{description:"",type:{name:"string"},required:!0}}};const F=e=>{const o=ue();return a.jsxs(h,{uniqueId:o,...e,children:[a.jsx("title",{children:"cross"}),a.jsx("path",{d:"M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"})]})};F.__docgenInfo={description:"",methods:[],displayName:"Cross"};const pe={small:"20vw",medium:"40vw",large:"60vw",huge:"95vw",default:"max-content"},c=({mode:e,onClose:o,visible:l,type:r,children:d,isDialog:p,onAccept:C,onReject:q,acceptLabel:y,rejectLabel:f,title:g,showCloseIcon:j,slideOnMobile:$,isCentered:S,titleComponent:V,padding:N,overlayClickClose:A,maxHeight:P,minHeight:W,enableScrollOnClose:T,className:_,showFooter:B,renderFooter:E,overlayOpacity:K,flatModal:G,extraCurved:U,mobileHeight:z,autoHeight:I,bgColor:Y,preventFocus:J,useAbsoluteHeight:Q,zIndex:X,id:Z,isMobileDialog:ee,borderRadius:te})=>{const v=b.useRef();b.useEffect(()=>(document.body.style.overflow=l?"hidden":"auto",T?()=>document.body.style.overflow="auto":n),[l]),b.useEffect(()=>{l&&v.current&&!J&&v.current.focus()},[l]);const ae=()=>{l&&v.current.focus()},oe=s=>{s.stopPropagation(),s.keyCode===27&&o(s)},le=s=>A&&o(s),ie=s=>{!s.target.scrollTop&&z==="0vh"&&s.target.classList.contains("modalWrapper")&&o(s)};return a.jsx(w,{children:a.jsxs(c.Wrapper,{className:`modalWrapper ${_}`,"aria-hidden":l?"false":"true",role:"dialog",visible:l,autoHeight:I,useAbsoluteHeight:Q,onScroll:ie,zIndex:X,children:[a.jsx(c.Overlay,{onClick:le,visible:l,tabIndex:"-1",overlayOpacity:K}),I&&a.jsx(me,{}),a.jsxs(m,{id:Z,mode:e,type:r,visible:l,mobileHeight:z,isDialog:p,shouldSlide:$,isCentered:S,padding:N,tabIndex:"0",onKeyDown:oe,ref:v,flatModal:G,extraCurved:U,autoHeight:I,bgColor:Y,isMobileDialog:ee,borderRadius:te,children:[!p&&(g||V)&&a.jsxs(m.Head,{padding:N,children:[g?a.jsx(m.Title,{mode:e,children:g}):V||null,j&&a.jsx(he,{size:24,color:e==="dark"?R.z500:x,showPointer:!0,onClick:o,onKeyUp:H(o),tabIndex:"0","aria-label":"close Modal"})]}),a.jsx(m.Content,{visible:l,maxHeight:P,minHeight:W,children:d}),p&&a.jsx(u,{rejectLabel:f,acceptLabel:y,onReject:q,onAccept:C}),B&&E()]}),a.jsx(ge,{tabIndex:"0",onFocus:ae})]})})},fe=()=>window.innerHeight,me=i.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
    min-height: 5vh;
    flex-grow: 1;
    width: 100%;
  }
`,he=i(F)`
  max-height: 3rem;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`,ge=i.div`
  height: 0;
  width: 0;
`,u=e=>{const{rejectLabel:o="No",acceptLabel:l="Yes",onReject:r=n,onAccept:d=n}=e;return a.jsx(u.Wrapper,{children:a.jsxs(u.Holder,{children:[a.jsx(D,{appearance:"link",btnColor:"red",size:"small",onKeyUp:H(r),onClick:r,tabIndex:"0",role:"button",children:o}),a.jsx(u.Gap,{}),a.jsx(D,{btnColor:"red",size:"small",onClick:d,onKeyUp:H(d),tabIndex:"0",role:"button",children:l})]})})};u.propTypes={rejectLabel:t.string,acceptLabel:t.string,onAccept:t.func,onReject:t.func};u.Holder=i.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  min-width: max-content;
  margin-top: 1rem;
`;u.Gap=i.div`
  height: 1rem;
  width: 1rem;
`;u.Wrapper=i.div`
  display: flex;
`;c.Wrapper=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: max-content;
  height: ${e=>e.useAbsoluteHeight?`calc(${fe})`:"100%"};
  display: flex;
  justify-content: center;
  visibility: ${e=>e.visible?"visible":"hidden"};
  overflow: auto;
  z-index: ${e=>e.zIndex||11};
  ${e=>e.autoHeight&&k`
      @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
      }
    `}
`;c.propTypes={mode:t.string,children:t.node,onClose:t.func,visible:t.bool,isDialog:t.bool,onAccept:t.func,onReject:t.func,rejectLabel:t.string,acceptLabel:t.string,title:t.string,showCloseIcon:t.bool,type:t.oneOf(["small","medium","large","huge","default"]),slideOnMobile:t.bool,isCentered:t.bool,titleComponent:t.node,padding:t.string,overlayClickClose:t.bool,maxHeight:t.string,minHeight:t.string,enableScrollOnClose:t.bool,className:t.string,showFooter:t.bool,renderFooter:t.func,overlayOpacity:t.number,flatModal:t.bool,extraCurved:t.bool,mobileHeight:t.string,bgColor:t.string,preventFocus:t.bool,useAbsoluteHeight:t.bool,zIndex:t.number,id:t.string,isMobileDialog:t.bool,borderRadius:t.string};c.defaultProps={mode:"light",onClose:n,visible:!1,type:"default",children:null,isDialog:!1,onAccept:n,onReject:n,acceptLabel:"",rejectLabel:"",title:"",showCloseIcon:!0,slideOnMobile:!1,isCentered:!1,titleComponent:null,padding:"",overlayClickClose:!0,maxHeight:"",minHeight:"8rem",enableScrollOnClose:!0,className:"",showFooter:!1,renderFooter:n,overlayOpacity:.85,flatModal:!1,extraCurved:!1,mobileHeight:"95vh",bgColor:L,preventFocus:!1,useAbsoluteHeight:!1,zIndex:11,id:"id-"+Math.floor(Math.random()*100),isMobileDialog:!1,borderRadius:""};const be=({type:e})=>pe[e],ye=({shouldSlide:e,isMobileDialog:o})=>o?"80vw":e?"100vw":"95vw",ve=({borderRadius:e,isMobileDialog:o})=>e||(o?"1.2rem":"unset");c.Overlay=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${x};
  opacity: ${e=>e.visible?e.overlayOpacity:0};
  visibility: ${e=>e.visible?"visible":"hidden"};
  transition: opacity ${M.animationDuration} ease;
`;const m=i.div`
  background-color: ${e=>e.mode==="dark"?R.z900:e.bgColor};
  height: max-content;
  transform: translate3d(0, 0, 0);
  @media (min-width: 481px) {
    width: ${be};
    margin: ${e=>e.isCentered?"auto":"5rem auto"};
    min-height: ${e=>e.isDialog?0:"150px"};
    min-width: 20rem;
    border-radius: ${e=>e.borderRadius?e.borderRadius:"0.6rem"};
    transform: scale(${e=>e.visible?1:1.2});
    box-shadow: 0 1.2rem 7rem rgba(28, 28, 28, 0.15);
    transition: transform ${M.animationDuration} ease;
  }
  @media (max-width: 480px) {
    width: ${ye};
    border-radius: ${ve};
    min-height: ${e=>e.shouldSlide?e.mobileHeight:"auto"};
    margin: ${e=>e.isCentered?"auto":0};
    ${({flatModal:e,extraCurved:o,shouldSlide:l})=>l&&k`
        margin-top: ${r=>r.visible?`calc(100vh - ${r.mobileHeight})`:"100vh"};
        transition:
          all ${M.animationDuration} ease,
          visibility 0ms ease;
        border-radius: ${o?"1.2rem 1.2rem 0 0":!e&&"0.6rem 0.6rem 0 0"};
      `}

    ${({autoHeight:e})=>e&&k`
        margin-top: 0;
        min-height: 0;
      `}
  }
  opacity: 1;
  z-index: 1;
  display: ${e=>e.visible?"block":"flex"};
  padding: ${e=>e.isDialog?"2rem":e.padding?e.padding:0};
`;m.Head=i.section`
  width: ${e=>e.padding?"calc(100% + 0.5rem)":"calc(100% - 4.6rem)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${e=>e.padding?"0":"2rem 2.2rem 0 2.4rem"};
  @media (max-width: 480px) {
    width: ${e=>e.padding?"calc(100% + 0.5rem)":"calc(100% - 2.6rem)"};
    margin: ${e=>e.padding?"0":"1rem 1.2rem 0 1.4rem"};
  }
`;m.Title=i.h2`
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 400;
  color: ${e=>e.mode==="dark"?L:x};
  margin-top: 0.5rem;
  margin-bottom: 0.83rem;
`;m.Content=i.section`
  display: ${e=>e.visible?"block":"none"};
  max-height: ${e=>de(e,"maxHeight","fit-content")};
  overflow: ${e=>e.maxHeight?"auto":"initial"};
  @media (max-width: 480px) {
    min-height: ${e=>e.minHeight};
  }
`;c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{mode:{defaultValue:{value:'"light"',computed:!1},description:"",type:{name:"string"},required:!1},onClose:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},description:"",type:{name:"func"},required:!1},visible:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},type:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"huge"',computed:!1},{value:'"default"',computed:!1}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},isDialog:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onAccept:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},description:"",type:{name:"func"},required:!1},onReject:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},description:"",type:{name:"func"},required:!1},acceptLabel:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},rejectLabel:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},title:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},showCloseIcon:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},slideOnMobile:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isCentered:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},titleComponent:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},padding:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},overlayClickClose:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},maxHeight:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},minHeight:{defaultValue:{value:'"8rem"',computed:!1},description:"",type:{name:"string"},required:!1},enableScrollOnClose:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},showFooter:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},renderFooter:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},description:"",type:{name:"func"},required:!1},overlayOpacity:{defaultValue:{value:"0.85",computed:!1},description:"",type:{name:"number"},required:!1},flatModal:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},extraCurved:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},mobileHeight:{defaultValue:{value:'"95vh"',computed:!1},description:"",type:{name:"string"},required:!1},bgColor:{defaultValue:{value:'"#FFFFFF"',computed:!1},description:"",type:{name:"string"},required:!1},preventFocus:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},useAbsoluteHeight:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},zIndex:{defaultValue:{value:"11",computed:!1},description:"",type:{name:"number"},required:!1},id:{defaultValue:{value:'"id-" + Math.floor(Math.random() * 100)',computed:!1},description:"",type:{name:"string"},required:!1},isMobileDialog:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},borderRadius:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}};const O=e=>{const{onAccept:o=n,onReject:l=n,rejectLabel:r="",acceptLabel:d="",type:p="medium"}=e;return a.jsx(c,{...e,isDialog:!0,type:p,onAccept:o,onReject:l,rejectLabel:r,acceptLabel:d})};O.propTypes={onAccept:t.func,onReject:t.func,rejectLabel:t.string,acceptLabel:t.string,type:t.string};O.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{onAccept:{description:"",type:{name:"func"},required:!1},onReject:{description:"",type:{name:"func"},required:!1},rejectLabel:{description:"",type:{name:"string"},required:!1},acceptLabel:{description:"",type:{name:"string"},required:!1},type:{description:"",type:{name:"string"},required:!1}}};export{O as D,h as I};
