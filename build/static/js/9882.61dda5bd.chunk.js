(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[9882],{95709:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},51257:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(65043);const r=n.p+"static/media/ethereum_blue.3910d13ff45aa7041204d742c4b546df.svg"},19322:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});n(65043);var r=n(53193),o=n(68903),i=n(69413),a=n(74605),s=n(51962),l=n(81673),u=n(63516),c=n(70579);const d=e=>{let{name:t,label:n,helperText:d="",onChange:m,...f}=e;const{setFieldValue:p}=(0,u.j7)(),[h,A]=(0,u.Mt)(t),b={...h,...f,checked:h.value,onChange:e=>{const{checked:n}=e.target;p(t,n),m&&m(n)}},g={};return A&&A.touched&&A.error&&(g.error=!0),(0,c.jsx)(r.A,{...g,children:(0,c.jsxs)(o.Ay,{display:"flex",alignItems:"center",children:[(0,c.jsx)(i.A,{children:(0,c.jsx)(a.A,{control:(0,c.jsx)(s.A,{...b}),label:n})}),d&&(0,c.jsxs)(l.A,{sx:{ml:-1},children:["(",g.error?n+"must be selected":d,")"]})]})})}},33155:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(65043),o=n(5983),i=n(68903),a=n(12110),s=n(37918),l=n(46232),u=n(85865),c=n(39336),d=n(69413),m=n(77739),f=n(17392),p=n(53404),h=n(63516),A=n(86971),b=n(51257),g=n(19322),v=n(70579);const y={20:[{name:"mintable",label:"Mintable",tooltip:"Privileged accounts will be able to create more supply."},{name:"burnable",label:"Burnable",tooltip:"Token holders will be able to destroy their tokens."},{name:"pausable",label:"Pausable",tooltip:"Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response."},{name:"premit",label:"Premit",tooltip:"Without paying gas, token holders will be able to allow third parties to transfer from their account."},{name:"votes",label:"Votes",tooltip:"Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account."},{name:"flashMinting",label:"Flash Minting",tooltip:"Built-in flash loans. Lend tokens without requiring collateral as long as they're returned in the same transaction."},{name:"snapshots",label:"Snapshots",tooltip:"Privileged accounts will be able to store snapshots of balances that can be retrieved later. For on-chain voting, the Votes option is preferable."}],721:[{name:"mintable",label:"Mintable",tooltip:"Privileged accounts will be able to create more supply."},{name:"burnable",label:"Burnable",tooltip:"Token holders will be able to destroy their tokens."},{name:"pausable",label:"Pausable",tooltip:"Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response."},{name:"enumerable",label:"Enumerable",tooltip:"Allows on-chain enumeration of all tokens or those owned by an account. Increases gas cost of transfers."},{name:"uriStorage",label:"URI Storage",tooltip:"Allows updating token URIs for individual token IDs."}],1155:[{name:"mintable",label:"Mintable",tooltip:"Privileged accounts will be able to create more supply."},{name:"burnable",label:"Burnable",tooltip:"Token holders will be able to destroy their tokens."},{name:"pausable",label:"Pausable",tooltip:"Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response."},{name:"supplyTracking",label:"Supply Tracking",tooltip:"Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response."}]};const x=function(e){let{wizardSmartContractData:t,setWizardSmartContractData:n}=e;const{previous:x,next:w}=(0,A.KC)();return(0,v.jsx)(i.Ay,{item:!0,xs:12,children:(0,v.jsx)(h.l1,{initialValues:{...t},onSubmit:e=>{n(e),w()},children:(0,v.jsxs)(h.lV,{children:[(0,v.jsxs)(a.A,{sx:{p:{xs:2.5,sm:4,md:5,lg:6}},elevation:0,children:[(0,v.jsxs)(s.Ay,{sx:{px:0},children:[(0,v.jsx)(l.A,{children:(0,v.jsx)("img",{width:"60%",src:b.A,alt:"icon"})}),(0,v.jsxs)(u.A,{variant:"h5",children:["Binance"===t.network?"BEP ":"ERC ",t.typeOfContract]})]}),(0,v.jsx)(i.Ay,{mb:3,children:(0,v.jsx)(c.A,{})}),(0,v.jsx)(i.Ay,{children:(0,v.jsx)(d.A,{children:(0,v.jsx)(i.Ay,{container:!0,columnSpacing:5,children:y[t.typeOfContract].map((e=>(0,v.jsx)(i.Ay,{item:!0,xs:12,sm:6,md:4,children:(0,v.jsxs)(i.Ay,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"200px",children:[(0,v.jsx)(g.A,{...e}),(0,v.jsx)(m.A,{placement:"right",arrow:!0,title:(0,v.jsx)(r.Fragment,{children:(0,v.jsx)(u.A,{variant:"subtitle2",children:e.tooltip})}),children:(0,v.jsx)(f.A,{children:(0,v.jsx)(o.A,{})})})]})},e.name)))})})})]}),(0,v.jsxs)(i.Ay,{mt:4,display:"flex",justifyContent:"flex-end",gap:2,children:[(0,v.jsx)(p.A,{variant:"outlined",onClick:x,sx:{width:{xs:"50%",sm:"auto"}},children:"Previous"}),(0,v.jsx)(p.A,{variant:"contained",color:"secondary",type:"submit",sx:{width:{xs:"50%",sm:"auto"}},children:"Next"})]})]})})})}},85990:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(65043),o=n(97950),i=n(53855),a=n(63159),s=n(72614);const l=r.forwardRef((function(e,t){const{children:n,container:l,disablePortal:u=!1}=e,[c,d]=r.useState(null),m=(0,i.A)(r.isValidElement(n)?n.ref:null,t);return(0,a.A)((()=>{u||d(function(e){return"function"===typeof e?e():e}(l)||document.body)}),[l,u]),(0,a.A)((()=>{if(c&&!u)return(0,s.A)(t,c),()=>{(0,s.A)(t,null)}}),[t,c,u]),u?r.isValidElement(n)?r.cloneElement(n,{ref:m}):n:c?o.createPortal(n,c):c}))},90540:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=function(e){return"string"===typeof e}},5983:(e,t,n)=>{"use strict";var r=n(95709);t.A=void 0;var o=r(n(40039)),i=n(70579),a=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");t.A=a},40039:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(9145)},53193:(e,t,n)=>{"use strict";n.d(t,{A:()=>v});var r=n(98587),o=n(58168),i=n(65043),a=n(43024),s=n(60222),l=n(37864),u=n(34535),c=n(40112),d=n(6803),m=n(15758),f=n(41053),p=n(63088);function h(e){return(0,p.A)("MuiFormControl",e)}(0,n(15904).A)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var A=n(70579);const b=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],g=(0,u.Ay)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return(0,o.A)({},t.root,t[`margin${(0,d.A)(n.margin)}`],n.fullWidth&&t.fullWidth)}})((e=>{let{ownerState:t}=e;return(0,o.A)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===t.margin&&{marginTop:16,marginBottom:8},"dense"===t.margin&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})})),v=i.forwardRef((function(e,t){const n=(0,l.A)({props:e,name:"MuiFormControl"}),{children:u,className:p,color:v="primary",component:y="div",disabled:x=!1,error:w=!1,focused:j,fullWidth:E=!1,hiddenLabel:C=!1,margin:k="none",required:S=!1,size:P="medium",variant:T="outlined"}=n,z=(0,r.A)(n,b),M=(0,o.A)({},n,{color:v,component:y,disabled:x,error:w,fullWidth:E,hiddenLabel:C,margin:k,required:S,size:P,variant:T}),F=(e=>{const{classes:t,margin:n,fullWidth:r}=e,o={root:["root","none"!==n&&`margin${(0,d.A)(n)}`,r&&"fullWidth"]};return(0,s.A)(o,h,t)})(M),[R,N]=i.useState((()=>{let e=!1;return u&&i.Children.forEach(u,(t=>{if(!(0,m.A)(t,["Input","Select"]))return;const n=(0,m.A)(t,["Select"])?t.props.input:t;n&&(0,c.gr)(n.props)&&(e=!0)})),e})),[q,I]=i.useState((()=>{let e=!1;return u&&i.Children.forEach(u,(t=>{(0,m.A)(t,["Input","Select"])&&(0,c.lq)(t.props,!0)&&(e=!0)})),e})),[W,V]=i.useState(!1);x&&W&&V(!1);const _=void 0===j||x?W:j;const B=i.useCallback((()=>{I(!0)}),[]),H={adornedStart:R,setAdornedStart:N,color:v,disabled:x,error:w,filled:q,focused:_,fullWidth:E,hiddenLabel:C,size:P,onBlur:()=>{V(!1)},onEmpty:i.useCallback((()=>{I(!1)}),[]),onFilled:B,onFocus:()=>{V(!0)},registerEffect:undefined,required:S,variant:T};return(0,A.jsx)(f.A.Provider,{value:H,children:(0,A.jsx)(g,(0,o.A)({as:y,ownerState:M,className:(0,a.A)(F.root,p),ref:t},z,{children:u}))})}))},41053:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(65043).createContext()},74827:(e,t,n)=>{"use strict";function r(e){let{props:t,states:n,muiFormControl:r}=e;return n.reduce(((e,n)=>(e[n]=t[n],r&&"undefined"===typeof t[n]&&(e[n]=r[n]),e)),{})}n.d(t,{A:()=>r})},85213:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(65043),o=n(41053);function i(){return r.useContext(o.A)}},81673:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var r=n(98587),o=n(58168),i=n(65043),a=n(43024),s=n(60222),l=n(74827),u=n(85213),c=n(34535),d=n(6803),m=n(63088);function f(e){return(0,m.A)("MuiFormHelperText",e)}const p=(0,n(15904).A)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var h,A=n(37864),b=n(70579);const g=["children","className","component","disabled","error","filled","focused","margin","required","variant"],v=(0,c.Ay)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${(0,d.A)(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})((e=>{let{theme:t,ownerState:n}=e;return(0,o.A)({color:t.palette.text.secondary},t.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${p.disabled}`]:{color:t.palette.text.disabled},[`&.${p.error}`]:{color:t.palette.error.main}},"small"===n.size&&{marginTop:4},n.contained&&{marginLeft:14,marginRight:14})})),y=i.forwardRef((function(e,t){const n=(0,A.A)({props:e,name:"MuiFormHelperText"}),{children:i,className:c,component:m="p"}=n,p=(0,r.A)(n,g),y=(0,u.A)(),x=(0,l.A)({props:n,muiFormControl:y,states:["variant","size","disabled","error","filled","focused","required"]}),w=(0,o.A)({},n,{component:m,contained:"filled"===x.variant||"outlined"===x.variant,variant:x.variant,size:x.size,disabled:x.disabled,error:x.error,filled:x.filled,focused:x.focused,required:x.required}),j=(e=>{const{classes:t,contained:n,size:r,disabled:o,error:i,filled:a,focused:l,required:u}=e,c={root:["root",o&&"disabled",i&&"error",r&&`size${(0,d.A)(r)}`,n&&"contained",l&&"focused",a&&"filled",u&&"required"]};return(0,s.A)(c,f,t)})(w);return(0,b.jsx)(v,(0,o.A)({as:m,ownerState:w,className:(0,a.A)(j.root,c),ref:t},p,{children:" "===i?h||(h=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):i}))}))},86328:(e,t,n)=>{"use strict";n.d(t,{A:()=>A});var r=n(58168),o=n(98587),i=n(65043),a=n(88692),s=n(26240),l=n(80653),u=n(95849),c=n(70579);const d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function m(e){return`scale(${e}, ${e**2})`}const f={entering:{opacity:1,transform:m(1)},entered:{opacity:1,transform:"none"}},p="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent),h=i.forwardRef((function(e,t){const{addEndListener:n,appear:h=!0,children:A,easing:b,in:g,onEnter:v,onEntered:y,onEntering:x,onExit:w,onExited:j,onExiting:E,style:C,timeout:k="auto",TransitionComponent:S=a.Ay}=e,P=(0,o.A)(e,d),T=i.useRef(),z=i.useRef(),M=(0,s.A)(),F=i.useRef(null),R=(0,u.A)(A.ref,t),N=(0,u.A)(F,R),q=e=>t=>{if(e){const n=F.current;void 0===t?e(n):e(n,t)}},I=q(x),W=q(((e,t)=>{(0,l.q)(e);const{duration:n,delay:r,easing:o}=(0,l.c)({style:C,timeout:k,easing:b},{mode:"enter"});let i;"auto"===k?(i=M.transitions.getAutoHeightDuration(e.clientHeight),z.current=i):i=n,e.style.transition=[M.transitions.create("opacity",{duration:i,delay:r}),M.transitions.create("transform",{duration:p?i:.666*i,delay:r,easing:o})].join(","),v&&v(e,t)})),V=q(y),_=q(E),B=q((e=>{const{duration:t,delay:n,easing:r}=(0,l.c)({style:C,timeout:k,easing:b},{mode:"exit"});let o;"auto"===k?(o=M.transitions.getAutoHeightDuration(e.clientHeight),z.current=o):o=t,e.style.transition=[M.transitions.create("opacity",{duration:o,delay:n}),M.transitions.create("transform",{duration:p?o:.666*o,delay:p?n:n||.333*o,easing:r})].join(","),e.style.opacity=0,e.style.transform=m(.75),w&&w(e)})),H=q(j);return i.useEffect((()=>()=>{clearTimeout(T.current)}),[]),(0,c.jsx)(S,(0,r.A)({appear:h,in:g,nodeRef:F,onEnter:W,onEntered:V,onEntering:I,onExit:B,onExited:H,onExiting:_,addEndListener:e=>{"auto"===k&&(T.current=setTimeout(e,z.current||0)),n&&n(F.current,e)},timeout:"auto"===k?null:k},P,{children:(e,t)=>i.cloneElement(A,(0,r.A)({style:(0,r.A)({opacity:0,transform:m(.75),visibility:"exited"!==e||g?void 0:"hidden"},f[e],C,A.props.style),ref:N},t))}))}));h.muiSupportAuto=!0;const A=h},40112:(e,t,n)=>{"use strict";function r(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(r(e.value)&&""!==e.value||t&&r(e.defaultValue)&&""!==e.defaultValue)}function i(e){return e.startAdornment}n.d(t,{gr:()=>i,lq:()=>o})},51347:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(65043).createContext({})},6593:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(27107).A},80950:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(79344).A},9145:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>o.A,createChainedFunction:()=>i.A,createSvgIcon:()=>a.A,debounce:()=>s.A,deprecatedPropType:()=>l,isMuiElement:()=>u.A,ownerDocument:()=>c.A,ownerWindow:()=>d.A,requirePropFactory:()=>m,setRef:()=>f,unstable_ClassNameGenerator:()=>x,unstable_useEnhancedEffect:()=>p.A,unstable_useId:()=>h.A,unsupportedProp:()=>A,useControlled:()=>b.A,useEventCallback:()=>g.A,useForkRef:()=>v.A,useIsFocusVisible:()=>y.A});var r=n(37175),o=n(6803),i=n(6593),a=n(66734),s=n(80950);const l=function(e,t){return()=>null};var u=n(15758),c=n(22427),d=n(36078);n(58168);const m=function(e,t){return()=>null};const f=n(72614).A;var p=n(55013),h=n(45879);const A=function(e,t,n,r,o){return null};var b=n(54516),g=n(93319),v=n(95849),y=n(87844);const x={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.A.configure(e)}}},15758:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(65043);const o=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},22427:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(84445).A},36078:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(94636).A},54516:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n(84818).A},27107:(e,t,n)=>{"use strict";function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}),(()=>{}))}n.d(t,{A:()=>r})},79344:(e,t,n)=>{"use strict";function r(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout((()=>{e.apply(this,o)}),n)}return r.clear=()=>{clearTimeout(t)},r}n.d(t,{A:()=>r})},84445:(e,t,n)=>{"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{A:()=>r})},94636:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(84445);function o(e){return(0,r.A)(e).defaultView||window}},84818:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(65043);function o(e){let{controlled:t,default:n,name:o,state:i="value"}=e;const{current:a}=r.useRef(void 0!==t),[s,l]=r.useState(n);return[a?t:s,r.useCallback((e=>{a||l(e)}),[])]}},39713:(e,t,n)=>{"use strict";var r;n.d(t,{A:()=>s});var o=n(65043);let i=0;const a=(r||(r=n.t(o,2))).useId;function s(e){if(void 0!==a){const t=a();return null!=e?e:t}return function(e){const[t,n]=o.useState(e),r=e||t;return o.useEffect((()=>{null==t&&(i+=1,n(`mui-${i}`))}),[t]),r}(e)}}}]);
//# sourceMappingURL=9882.61dda5bd.chunk.js.map