(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{49834:function(e,t,r){"use strict";r.d(t,{A:function(){return z}});var o=r(67294),n=r(81280),a=r(48427),i=r(96768),l=r(56817),c=r(14258),s=Object.defineProperty,u=Object.defineProperties,f=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&y(e,r,t[r]);if(d)for(var r of d(t))b.call(t,r)&&y(e,r,t[r]);return e},h=(e,t)=>u(e,f(t));let v=["subtle","filled","outline","light","default","transparent","gradient"],g={xs:(0,i.h)(18),sm:(0,i.h)(22),md:(0,i.h)(28),lg:(0,i.h)(34),xl:(0,i.h)(44)};var O=(0,l.k)((e,{radius:t,color:r,gradient:o},{variant:n,size:a})=>({root:h(m({position:"relative",borderRadius:e.fn.radius(t),padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",height:(0,c.a)({size:a,sizes:g}),minHeight:(0,c.a)({size:a,sizes:g}),width:(0,c.a)({size:a,sizes:g}),minWidth:(0,c.a)({size:a,sizes:g})},function({variant:e,theme:t,color:r,gradient:o}){let n=t.fn.variant({color:r,variant:e,gradient:o});return"gradient"===e?{border:0,backgroundImage:n.background,color:n.color,"&:hover":t.fn.hover({backgroundSize:"200%"})}:v.includes(e)?m({border:`${(0,i.h)(1)} solid ${n.border}`,backgroundColor:n.background,color:n.color},t.fn.hover({backgroundColor:n.hover})):null}({variant:n,theme:e,color:r,gradient:o})),{"&:active":e.activeStyles,"& [data-action-icon-loader]":{maxWidth:"70%"},"&:disabled, &[data-disabled]":{color:e.colors.gray["dark"===e.colorScheme?6:4],cursor:"not-allowed",backgroundColor:"transparent"===n?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),borderColor:"transparent"===n?void 0:e.fn.themeColor("gray","dark"===e.colorScheme?8:1),backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":h(m({content:'""'},e.fn.cover((0,i.h)(-1))),{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(t),cursor:"not-allowed"})}})})),w=r(20966),k=r(34736),x=Object.defineProperty,j=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&C(e,r,t[r]);if(j)for(var r of j(t))E.call(t,r)&&C(e,r,t[r]);return e},S=(e,t)=>{var r={};for(var o in e)P.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&j)for(var o of j(e))0>t.indexOf(o)&&E.call(e,o)&&(r[o]=e[o]);return r};let _={color:"gray",size:"md",variant:"subtle"},M=(0,o.forwardRef)((e,t)=>{let r=(0,n.N4)("ActionIcon",_,e),{className:a,color:i,children:l,radius:c,size:s,variant:u,gradient:f,disabled:d,loaderProps:p,loading:b,unstyled:y,__staticSelector:m}=r,h=S(r,["className","color","children","radius","size","variant","gradient","disabled","loaderProps","loading","unstyled","__staticSelector"]),{classes:v,cx:g,theme:x}=O({radius:c,color:i,gradient:f},{name:["ActionIcon",m],unstyled:y,size:s,variant:u}),j=o.createElement(w.a,I({color:x.fn.variant({color:i,variant:u}).color,size:"100%","data-action-icon-loader":!0},p));return o.createElement(k.k,I({className:g(v.root,a),ref:t,disabled:d,"data-disabled":d||void 0,"data-loading":b||void 0,unstyled:y},h),b?j:l)});M.displayName="@mantine/core/ActionIcon";let z=(0,a.F)(M)},66072:function(e,t,r){"use strict";r.d(t,{T:function(){return a},_:function(){return i}});var o=r(67294);let n=(0,o.createContext)({zIndex:1e3,fixed:!1,layout:"default"}),a=n.Provider;function i(){return(0,o.useContext)(n)}},38561:function(e,t,r){"use strict";r.d(t,{h:function(){return m}});var o=r(67294),n=r(81280),a=r(15197),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))f.call(t,r)&&d(e,r,t[r]);return e},b=(e,t)=>l(e,c(t));let y={fixed:!1,position:{top:0,left:0,right:0}},m=(0,o.forwardRef)((e,t)=>{let r=(0,n.N4)("Header",y,e);return o.createElement(a.Q,b(p({section:"header",__staticSelector:"Header"},r),{ref:t}))});m.displayName="@mantine/core/Header"},287:function(e,t,r){"use strict";r.d(t,{I:function(){return a}});var o=r(14258),n=r(58);function a(e,t){if(!e)return[];let r=Object.keys(e).filter(e=>"base"!==e).map(r=>[(0,o.a)({size:r,sizes:t.breakpoints,units:"em"}),e[r]]);return r.sort((e,t)=>(0,n.oI)(e[0])-(0,n.oI)(t[0])),r}},15197:function(e,t,r){"use strict";r.d(t,{Q:function(){return I}});var o=r(67294),n=r(3594),a=r(96768),i=r(4629),l=r(66072),c=r(56817),s=r(287),u=Object.defineProperty,f=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))y.call(t,r)&&m(e,r,t[r]);return e},v=(e,t)=>f(e,d(t)),g=(0,c.k)((e,{height:t,fixed:r,position:o,zIndex:n,borderPosition:i,layout:l})=>{let c="object"==typeof t&&null!==t?(0,s.I)(t,e).reduce((e,[t,r])=>(e[`@media (min-width: ${(0,a.em)(t)})`]={height:(0,a.h)(r),minHeight:(0,a.h)(r)},e),{}):null;return{root:v(h(v(h(h({},e.fn.fontStyles()),o),{zIndex:n,left:"alt"===l?"var(--mantine-navbar-width, 0)":0,right:"alt"===l?"var(--mantine-aside-width, 0)":0,height:"object"==typeof t?(0,a.h)(null==t?void 0:t.base)||"100%":(0,a.h)(t),maxHeight:"object"==typeof t?(0,a.h)(null==t?void 0:t.base)||"100%":(0,a.h)(t),position:r?"fixed":"static",boxSizing:"border-box",backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white}),c),{borderBottom:"bottom"===i?`${(0,a.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2]}`:void 0,borderTop:"top"===i?`${(0,a.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2]}`:void 0})}}),O=r(64523),w=Object.defineProperty,k=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,P=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&P(e,r,t[r]);if(k)for(var r of k(t))j.call(t,r)&&P(e,r,t[r]);return e},C=(e,t)=>{var r={};for(var o in e)x.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&k)for(var o of k(e))0>t.indexOf(o)&&j.call(e,o)&&(r[o]=e[o]);return r};let I=(0,o.forwardRef)((e,t)=>{var{children:r,className:c,classNames:u,styles:f,height:d,fixed:p=!1,withBorder:b=!0,position:y,zIndex:m,section:h,unstyled:v,__staticSelector:w,variant:k}=e,x=C(e,["children","className","classNames","styles","height","fixed","withBorder","position","zIndex","section","unstyled","__staticSelector","variant"]);let j=(0,l._)(),P=m||j.zIndex||(0,n.w)("app"),{classes:I,cx:S,theme:_}=g({height:d,fixed:j.fixed||p,position:y,zIndex:"number"==typeof P&&"default"===j.layout?P+1:P,layout:j.layout,borderPosition:b?"header"===h?"bottom":"top":"none"},{name:w,classNames:u,styles:f,unstyled:v,variant:k}),M="object"==typeof d&&null!==d?(0,s.I)(d,_).reduce((e,[t,r])=>(e[`@media (min-width: ${(0,a.em)(t)})`]={[`--mantine-${h}-height`]:(0,a.h)(r)},e),{}):null;return o.createElement(O.x,E({component:"header"===h?"header":"footer",className:S(I.root,c),ref:t},x),r,o.createElement(i.x,{styles:()=>({":root":E({[`--mantine-${h}-height`]:"object"==typeof d?(0,a.h)(null==d?void 0:d.base)||"100%":(0,a.h)(d)},M)})}))});I.displayName="@mantine/core/VerticalSection"},81310:function(e,t,r){"use strict";r.d(t,{O:function(){return g}});var o=r(67294),n=r(81280),a=r(96768),i=r(56817),l=r(14258);let c={xs:(0,a.h)(12),sm:(0,a.h)(18),md:(0,a.h)(24),lg:(0,a.h)(34),xl:(0,a.h)(42)};var s=(0,i.k)((e,{color:t,transitionDuration:r},{size:o})=>{let n=(0,l.a)({size:o,sizes:c}),i=t||("dark"===e.colorScheme?e.white:e.black);return{root:{borderRadius:e.radius.sm,width:`calc(${n} + ${e.spacing.xs})`,height:`calc(${n} + ${e.spacing.xs})`,padding:`calc(${e.spacing.xs} / 2)`,cursor:"pointer"},burger:{position:"relative",userSelect:"none",boxSizing:"border-box","&, &::before, &::after":{display:"block",width:n,height:`calc(${n} / 12)`,backgroundColor:i,outline:`${(0,a.h)(1)} solid transparent`,transitionProperty:"background-color, transform",transitionDuration:`${r}ms`,"@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}},"&::before, &::after":{position:"absolute",content:'""',left:0},"&::before":{top:`calc((${n} / 3) * -1)`},"&::after":{top:`calc(${n} / 3)`},"&[data-opened]":{backgroundColor:"transparent","&::before":{transform:`translateY(calc(${n} / 3)) rotate(45deg)`},"&::after":{transform:`translateY(calc(-${n} / 3)) rotate(-45deg)`}}}}}),u=r(34736),f=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&y(e,r,t[r]);if(d)for(var r of d(t))b.call(t,r)&&y(e,r,t[r]);return e},h=(e,t)=>{var r={};for(var o in e)p.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&d)for(var o of d(e))0>t.indexOf(o)&&b.call(e,o)&&(r[o]=e[o]);return r};let v={size:"md",transitionDuration:300},g=(0,o.forwardRef)((e,t)=>{let r=(0,n.N4)("Burger",v,e),{className:a,opened:i,color:l,size:c,classNames:f,styles:d,transitionDuration:p,variant:b}=r,y=h(r,["className","opened","color","size","classNames","styles","transitionDuration","variant"]),{classes:g,cx:O}=s({color:l,transitionDuration:p},{classNames:f,styles:d,name:"Burger",variant:b,size:c});return o.createElement(u.k,m({className:O(g.root,a),ref:t},y),o.createElement("div",{"data-opened":i||void 0,className:g.burger}))});g.displayName="@mantine/core/Burger"},57327:function(e,t,r){"use strict";r.d(t,{k:function(){return O}});var o=r(67294),n=r(81280),a=r(97818),i=r(6683),l=r(64523),c=r(16405),s=Object.defineProperty,u=Object.defineProperties,f=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&y(e,r,t[r]);if(d)for(var r of d(t))b.call(t,r)&&y(e,r,t[r]);return e},h=(e,t)=>u(e,f(t)),v=(e,t)=>{var r={};for(var o in e)p.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&d)for(var o of d(e))0>t.indexOf(o)&&b.call(e,o)&&(r[o]=e[o]);return r};let g={},O=(0,o.forwardRef)((e,t)=>{let r=(0,n.N4)("Flex",g,e),{gap:s,rowGap:u,columnGap:f,align:d,justify:p,wrap:b,direction:y,sx:O}=r,w=v(r,["gap","rowGap","columnGap","align","justify","wrap","direction","sx"]);return o.createElement(l.x,h(m({},w),{sx:[{display:"flex"},e=>(0,c.M)({gap:s,rowGap:u,columnGap:f,align:d,justify:p,wrap:b,direction:y},e,i.c),...(0,a.R)(O)],ref:t}))});O.displayName="@mantine/core/Flex"},6683:function(e,t,r){"use strict";r.d(t,{c:function(){return o}});let o={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}}},71232:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var o=r(67294),n=r(81280),a=r(89893),i=r(64523),l=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&f(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&f(e,r,t[r]);return e},p=(e,t)=>{var r={};for(var o in e)s.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&c)for(var o of c(e))0>t.indexOf(o)&&u.call(e,o)&&(r[o]=e[o]);return r};let b={position:"left",spacing:"md"},y=(0,o.forwardRef)((e,t)=>{let r=(0,n.N4)("Group",b,e),{className:l,position:c,align:s,children:u,noWrap:f,grow:y,spacing:m,unstyled:h,variant:v}=r,g=p(r,["className","position","align","children","noWrap","grow","spacing","unstyled","variant"]),O=o.Children.toArray(u).filter(Boolean),{classes:w,cx:k}=(0,a.Z)({align:s,grow:y,noWrap:f,spacing:m,position:c,count:O.length},{unstyled:h,name:"Group",variant:v});return o.createElement(i.x,d({className:k(w.root,l),ref:t},g),O)});y.displayName="@mantine/core/Group"},89893:function(e,t,r){"use strict";r.d(t,{H:function(){return i}});var o=r(56817),n=r(14258),a=r(96768);let i={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var l=(0,o.k)((e,{spacing:t,position:r,noWrap:o,grow:l,align:c,count:s})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:c||"center",flexWrap:o?"nowrap":"wrap",justifyContent:i[r],gap:(0,n.a)({size:t,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:l?`calc(${100/s}% - (${(0,a.h)((0,n.a)({size:t,sizes:e.spacing}))} - ${(0,n.a)({size:t,sizes:e.spacing})} / ${s}))`:void 0,flexGrow:l?1:0}}}));t.Z=l},18540:function(e,t,r){"use strict";r.d(t,{z:function(){return u}});var o=r(67294),n=r(81280),a=r(56817),i=r(14258),l=r(96768),c=r(58),s=(0,a.k)((e,{smallerThan:t,largerThan:r,query:o,styles:n})=>{let a={},s=(0,i.a)({size:r,sizes:e.breakpoints}),u=(0,i.a)({size:t,sizes:e.breakpoints}),f="function"==typeof n?n(e):n;return void 0!==r&&void 0!==t?a[`@media (min-width: ${(0,l.em)(s)}) and (max-width: ${(0,l.em)((0,c.oI)(u)-1)})`]=f:(void 0!==r&&(a[`@media (min-width: ${(0,i.a)({size:r,sizes:e.breakpoints})})`]=f),void 0!==t&&(a[`@media (max-width: ${(0,l.em)((0,c.oI)((0,i.a)({size:t,sizes:e.breakpoints}))-1)})`]=f)),o&&(a[`@media ${o}`]=f),{media:a}});function u(e){var t;let{children:r,smallerThan:a,largerThan:i,query:l,styles:c,className:u}=(0,n.N4)("MediaQuery",{},e),{classes:f,cx:d}=s({smallerThan:a,largerThan:i,query:l,styles:c},{name:"MediaQuery"}),p=o.Children.only(r);return"object"==typeof p&&null!==p&&"props"in p?o.cloneElement(p,{className:d(f.media,null==(t=p.props)?void 0:t.className,u)}):p}u.displayName="@mantine/core/MediaQuery"},4629:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var o=r(67294),n=r(70917),a=r(81280);function i({styles:e}){let t=(0,a.rZ)();return o.createElement(n.xB,{styles:(0,n.iv)("function"==typeof e?e(t):e)})}},58404:function(e,t,r){"use strict";function o(e){return`___ref-${e||""}`}r.d(t,{A:function(){return o}})},68216:function(e,t,r){"use strict";r.d(t,{R:function(){return n}});var o=r(67294);function n(e){let t=(0,o.createContext)(null),r=()=>{let r=(0,o.useContext)(t);if(null===r)throw Error(e);return r},n=({children:e,value:r})=>o.createElement(t.Provider,{value:r},e);return[n,r]}},97818:function(e,t,r){"use strict";function o(e){return Array.isArray(e)?e:[e]}r.d(t,{R:function(){return o}})},30853:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var o=r(67294),n=r(45697),a=r.n(n),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&p(e,r,t[r]);if(u)for(var r of u(t))d.call(t,r)&&p(e,r,t[r]);return e},y=(e,t)=>c(e,s(t)),m=(e,t)=>{var r={};for(var o in e)f.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&u)for(var o of u(e))0>t.indexOf(o)&&d.call(e,o)&&(r[o]=e[o]);return r},h=(e,t,r)=>{let n=(0,o.forwardRef)((t,n)=>{var{color:a="currentColor",size:l=24,stroke:c=2,children:s}=t,u=m(t,["color","size","stroke","children"]);return(0,o.createElement)("svg",b(y(b({ref:n},i),{width:l,height:l,stroke:a,strokeWidth:c,className:`tabler-icon tabler-icon-${e}`}),u),[...r.map(([e,t])=>(0,o.createElement)(e,t)),...s||[]])});return n.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),stroke:a().oneOfType([a().string,a().number])},n.displayName=`${t}`,n}},82093:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]])},88373:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("plug","IconPlug",[["path",{d:"M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z",key:"svg-0"}],["path",{d:"M4 20l3.5 -3.5",key:"svg-1"}],["path",{d:"M15 4l-3.5 3.5",key:"svg-2"}],["path",{d:"M20 9l-3.5 3.5",key:"svg-3"}]])},64738:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]])},29724:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var o=(0,r(30853).Z)("switch","IconSwitch",[["path",{d:"M15 4l4 0l0 4",key:"svg-0"}],["path",{d:"M14.75 9.25l4.25 -5.25",key:"svg-1"}],["path",{d:"M5 19l4 -4",key:"svg-2"}],["path",{d:"M15 19l4 0l0 -4",key:"svg-3"}],["path",{d:"M5 5l14 14",key:"svg-4"}]])},81516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(92648).Z,n=r(17273).Z,a=o(r(67294)),i=r(14532),l=r(83353),c=r(61410),s=r(79064),u=r(370),f=r(69955),d=r(24224),p=r(80508),b=r(81516),y=r(64266);let m=new Set;function h(e,t,r,o,n){if(n||l.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,a=t+"%"+r+"%"+n;if(m.has(a))return;m.add(a)}Promise.resolve(e.prefetch(t,r,o)).catch(e=>{})}}function v(e){return"string"==typeof e?e:c.formatUrl(e)}let g=a.default.forwardRef(function(e,t){let r,o;let{href:c,as:m,children:g,prefetch:O,passHref:w,replace:k,shallow:x,scroll:j,locale:P,onClick:E,onMouseEnter:C,onTouchStart:I,legacyBehavior:S=!1}=e,_=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=g,S&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let M=!1!==O,z=a.default.useContext(f.RouterContext),$=a.default.useContext(d.AppRouterContext),N=null!=z?z:$,R=!z,{href:T,as:D}=a.default.useMemo(()=>{if(!z){let e=v(c);return{href:e,as:m?v(m):e}}let[e,t]=i.resolveHref(z,c,!0);return{href:e,as:m?i.resolveHref(z,m):t||e}},[z,c,m]),Z=a.default.useRef(T),L=a.default.useRef(D);S&&(o=a.default.Children.only(r));let A=S?o&&"object"==typeof o&&o.ref:t,[H,B,W]=p.useIntersection({rootMargin:"200px"}),G=a.default.useCallback(e=>{(L.current!==D||Z.current!==T)&&(W(),L.current=D,Z.current=T),H(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[D,A,T,W,H]);a.default.useEffect(()=>{N&&B&&M&&h(N,T,D,{locale:P},R)},[D,T,B,P,M,null==z?void 0:z.locale,N,R]);let U={ref:G,onClick(e){S||"function"!=typeof E||E(e),S&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,o,n,i,c,s,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!l.isLocalURL(r)))return;e.preventDefault();let b=()=>{"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:i,locale:s,scroll:c}):t[n?"replace":"push"](o||r,{forceOptimisticNavigation:!f})};u?a.default.startTransition(b):b()}(e,N,T,D,k,x,j,P,R,M)},onMouseEnter(e){S||"function"!=typeof C||C(e),S&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),N&&(M||!R)&&h(N,T,D,{locale:P,priority:!0,bypassPrefetchedCheck:!0},R)},onTouchStart(e){S||"function"!=typeof I||I(e),S&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),N&&(M||!R)&&h(N,T,D,{locale:P,priority:!0,bypassPrefetchedCheck:!0},R)}};if(s.isAbsoluteUrl(D))U.href=D;else if(!S||w||"a"===o.type&&!("href"in o.props)){let e=void 0!==P?P:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&b.getDomainLocale(D,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);U.href=t||y.addBasePath(u.addLocale(D,e,null==z?void 0:z.defaultLocale))}return S?a.default.cloneElement(o,U):a.default.createElement("a",Object.assign({},_,U),r)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},80508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:c}=e,s=c||!a,[u,f]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(a){if(s||u)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,r){let{id:o,observer:n,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=l.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=i.get(o)))return t;let n=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:n},l.push(r),i.set(r,t),t}(r);return a.set(e,t),n.observe(e),function(){if(a.delete(e),n.unobserve(e),0===a.size){n.disconnect(),i.delete(o);let e=l.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return o}}else if(!u){let e=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(e)}},[s,r,t,u,d.current]);let b=o.useCallback(()=>{f(!1)},[]);return[p,u,b]};var o=r(67294),n=r(10029);let a="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,r){e.exports=r(95569)},92703:function(e,t,r){"use strict";var o=r(50414);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,i){if(i!==o){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}},45697:function(e,t,r){e.exports=r(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);