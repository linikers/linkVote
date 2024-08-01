"use strict";exports.id=87,exports.ids=[87],exports.modules={7179:(e,r,t)=>{var a=t(4836);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(t(7071)),n=a(t(434)),i=function(e,r){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=y(void 0);if(t&&t.has(e))return t.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}return a.default=e,t&&t.set(e,a),a}(t(6689));a(t(580));var l=a(t(8103)),s=a(t(3559)),u=t(7986),d=t(9590),f=t(243),c=a(t(5625)),m=a(t(7317)),p=t(8465),b=t(3685),g=t(997);let v=["className","color","value","valueBuffer","variant"];function y(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(y=function(e){return e?t:r})(e)}let h=(0,u.keyframes)`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,x=(0,u.keyframes)`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,j=(0,u.keyframes)`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,P=e=>{let{classes:r,variant:t,color:a}=e,o={root:["root",`color${(0,c.default)(a)}`,t],dashed:["dashed",`dashedColor${(0,c.default)(a)}`],bar1:["bar",`barColor${(0,c.default)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,c.default)(a)}`,"buffer"===t&&`color${(0,c.default)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.default)(o,b.getLinearProgressUtilityClass,r)},C=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,d.lighten)(e.palette[r].main,.62):(0,d.darken)(e.palette[r].main,.5),k=(0,m.default)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`color${(0,c.default)(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>(0,n.default)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:C(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),w=(0,m.default)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,c.default)(t.color)}`]]}})(({ownerState:e,theme:r})=>{let t=C(r,e.color);return(0,n.default)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,u.css)`
    animation: ${j} 3s infinite linear;
  `),O=(0,m.default)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r[`barColor${(0,c.default)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>(0,n.default)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,u.css)`
      width: auto;
      animation: ${h} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),M=(0,m.default)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r[`barColor${(0,c.default)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>(0,n.default)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:C(r,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,u.css)`
      width: auto;
      animation: ${x} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),_=i.forwardRef(function(e,r){let t=(0,p.useDefaultProps)({props:e,name:"MuiLinearProgress"}),{className:a,color:i="primary",value:s,valueBuffer:u,variant:d="indeterminate"}=t,c=(0,o.default)(t,v),m=(0,n.default)({},t,{color:i,variant:d}),b=P(m),y=(0,f.useRtl)(),h={},x={bar1:{},bar2:{}};if(("determinate"===d||"buffer"===d)&&void 0!==s){h["aria-valuenow"]=Math.round(s),h["aria-valuemin"]=0,h["aria-valuemax"]=100;let e=s-100;y&&(e=-e),x.bar1.transform=`translateX(${e}%)`}if("buffer"===d&&void 0!==u){let e=(u||0)-100;y&&(e=-e),x.bar2.transform=`translateX(${e}%)`}return(0,g.jsxs)(k,(0,n.default)({className:(0,l.default)(b.root,a),ownerState:m,role:"progressbar"},h,{ref:r},c,{children:["buffer"===d?(0,g.jsx)(w,{className:b.dashed,ownerState:m}):null,(0,g.jsx)(O,{className:b.bar1,ownerState:m,style:x.bar1}),"determinate"===d?null:(0,g.jsx)(M,{className:b.bar2,ownerState:m,style:x.bar2})]}))});r.default=_},1480:(e,r,t)=>{var a=t(4836);Object.defineProperty(r,"__esModule",{value:!0});var o={linearProgressClasses:!0};Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(r,"linearProgressClasses",{enumerable:!0,get:function(){return i.default}});var n=a(t(7179)),i=function(e,r){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l(void 0);if(t&&t.has(e))return t.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}return a.default=e,t&&t.set(e,a),a}(t(3685));function l(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(l=function(e){return e?t:r})(e)}Object.keys(i).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(o,e))&&(e in r&&r[e]===i[e]||Object.defineProperty(r,e,{enumerable:!0,get:function(){return i[e]}}))})},3685:(e,r,t)=>{var a=t(4836);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,r.getLinearProgressUtilityClass=function(e){return(0,n.default)("MuiLinearProgress",e)};var o=a(t(2558)),n=a(t(1392));let i=(0,o.default)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);r.default=i},87:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var a=t(997),o=t(6689),n=t(8792),i=t.n(n),l=t(4965),s=t.n(l),u=t(8697),d=t.n(u),f=t(1480),c=t.n(f),m=t(3890),p=t.n(m);function b({onOpenSnackBar:e}){let[r,t]=(0,o.useState)(0),[n,l]=(0,o.useState)(!1),[u,f]=(0,o.useState)([]),[m,b]=(0,o.useState)({anatomy:0,creativity:0,pigmentation:0,traces:0,readability:0,visualImpact:0}),[g,v]=(0,o.useState)(null),y=e=>{b({...m,[e.target.name]:parseInt(e.target.value,10)})},h=async r=>{v(r);try{l(!0);let a=await fetch("/api/vote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...m,userId:r})});if(!a.ok)throw Error("Erro ao registrar voto");let o=await a.json(),n=u.map(e=>e.id===o.id?o:e);f(n);let i=n.reduce((e,r)=>e+r.votes,0);t(i),b({anatomy:0,creativity:0,pigmentation:0,traces:0,readability:0,visualImpact:0}),e("Voto registrado com sucesso")}catch(r){console.error("Erro ao votar:",r),e("Erro ao registrar voto")}finally{l(!1),v(null)}};return n?a.jsx(i(),{children:"Carregando..."}):(0,a.jsxs)(s(),{container:!0,sx:{margin:"2rem",display:"flex",flexDirection:"column",alignItems:"center",minWidth:"320px"},children:[a.jsx(s(),{item:!0,children:a.jsx(i(),{variant:"h4",gutterBottom:!0,style:{marginBottom:"6rem"},children:"Vote Agora"})}),a.jsx("form",{style:{width:"100%"},onSubmit:e=>{e.preventDefault()},children:a.jsx(s(),{container:!0,spacing:3,sx:{width:"100%"},children:u.length>0?u.map(e=>(0,a.jsxs)(s(),{xs:12,item:!0,sx:{display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#6c757d",padding:"1rem",borderRadius:"8px",marginBottom:"1rem",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.4)",transition:"transform 0.3s, box-shadow 0.3s",minWidth:"320px","&:hover":{transform:"scale(1.02)",boxShadow:"0 16px rgba(0,0,0, 0.2)"}},children:[a.jsx(i(),{style:{fontWeight:"bold"},children:e.name}),a.jsx(i(),{style:{color:"#757575"},children:e.work}),a.jsx(d(),{label:"Anatomia",type:"number",inputProps:{min:1,max:10},value:m.anatomy,onChange:y,name:"anatomy",style:{marginBottom:"0.5rem"},fullWidth:!0}),a.jsx(d(),{label:"Criatividade",type:"number",inputProps:{min:1,max:10},value:m.creativity,onChange:y,name:"creativity",style:{marginBottom:"0.5rem"},fullWidth:!0}),a.jsx(d(),{label:"Pigmenta\xe7\xe3o",type:"number",inputProps:{min:1,max:10},value:m.pigmentation,onChange:y,name:"pigmentation",style:{marginBottom:"0.5rem"},fullWidth:!0}),a.jsx(d(),{label:"Tra\xe7os",type:"number",inputProps:{min:1,max:10},value:m.traces,onChange:y,name:"traces",style:{marginBottom:"0.5rem"},fullWidth:!0}),a.jsx(d(),{label:"Legibilidade",type:"number",inputProps:{min:1,max:10},value:m.readability,onChange:y,name:"readability",style:{marginBottom:"0.5rem"},fullWidth:!0}),a.jsx(d(),{label:"Impacto Visual",type:"number",inputProps:{min:1,max:10},value:m.visualImpact,onChange:y,name:"visualImpact",style:{marginBottom:"0.5rem"},fullWidth:!0}),a.jsx(c(),{variant:"determinate",value:r>0?e.votes/r*100:0,sx:{backgroundColor:"#414141",marginTop:"0.5rem",height:"10px",borderRadius:"8px","& .MuiLinearProgress-bar":{backgroundColor:"#3f51b5"}}}),(0,a.jsxs)(i(),{variant:"caption",style:{display:"block",marginTop:"0.5rem"},children:[e.votes," votos (",r>0?(e.votes/r*100).toFixed(2):0," %)"]}),a.jsx(p(),{variant:"contained",color:"primary",onClick:()=>h(e.id),style:{marginTop:"1rem"},disabled:g===e.id,children:"Votar"})]},e.id)):a.jsx(i(),{variant:"body1",children:"Nenhum participante cadastrado"})})})]})}}};