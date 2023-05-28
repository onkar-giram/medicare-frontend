"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{72445:function(e,r,t){t.d(r,{W:function(){return h}});var o=t(67294),n=t(96768),a=t(81280),i=t(56817),l=t(14258),c=(0,i.k)((e,{fluid:r,sizes:t},{size:o})=>({root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:r?"100%":(0,l.a)({size:o,sizes:t}),marginLeft:"auto",marginRight:"auto"}})),s=t(64523),f=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&u(e,t,r[t]);if(d)for(var t of d(r))m.call(r,t)&&u(e,t,r[t]);return e},g=(e,r)=>{var t={};for(var o in e)p.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&d)for(var o of d(e))0>r.indexOf(o)&&m.call(e,o)&&(t[o]=e[o]);return t};let y={sizes:{xs:(0,n.h)(540),sm:(0,n.h)(720),md:(0,n.h)(960),lg:(0,n.h)(1140),xl:(0,n.h)(1320)}},h=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("Container",y,e),{className:n,fluid:i,size:l,unstyled:f,sizes:d,variant:p}=t,m=g(t,["className","fluid","size","unstyled","sizes","variant"]),{classes:u,cx:h}=c({fluid:i,sizes:d},{unstyled:f,name:"Container",variant:p,size:l});return o.createElement(s.x,b({className:h(u.root,n),ref:r},m))});h.displayName="@mantine/core/Container"},54777:function(e,r,t){t.d(r,{i:function(){return P}});var o=t(67294),n=t(81280),a=t(96768),i=t(56817),l=t(14258);let c={xs:(0,a.h)(1),sm:(0,a.h)(2),md:(0,a.h)(3),lg:(0,a.h)(4),xl:(0,a.h)(5)};function s(e,r){let t=e.fn.variant({variant:"outline",color:r}).border;return"string"==typeof r&&(r in e.colors||r.split(".")[0]in e.colors)?t:void 0===r?"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]:r}var f=(0,i.k)((e,{color:r},{size:t,variant:o})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:(0,a.h)(1),borderTop:`${(0,l.a)({size:t,sizes:c})} ${o} ${s(e,r)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${(0,l.a)({size:t,sizes:c})} ${o} ${s(e,r)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===r?e.colors.dark[1]:e.fn.themeColor(r,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:(0,a.h)((0,l.a)({size:t,sizes:c})),borderTopColor:s(e,r),borderTopStyle:o,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:(0,a.h)((0,l.a)({size:t,sizes:c})),borderLeftColor:s(e,r),borderLeftStyle:o}})),d=t(64523),p=t(95117),m=Object.defineProperty,u=Object.defineProperties,b=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,O=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,v=(e,r)=>{for(var t in r||(r={}))y.call(r,t)&&O(e,t,r[t]);if(g)for(var t of g(r))h.call(r,t)&&O(e,t,r[t]);return e},w=(e,r)=>u(e,b(r)),j=(e,r)=>{var t={};for(var o in e)y.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&g)for(var o of g(e))0>r.indexOf(o)&&h.call(e,o)&&(t[o]=e[o]);return t};let x={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},P=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Divider",x,e),{className:i,color:l,orientation:c,size:s,label:m,labelPosition:u,labelProps:b,variant:g,styles:y,classNames:h,unstyled:O}=t,P=j(t,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:S,cx:N}=f({color:l},{classNames:h,styles:y,unstyled:O,name:"Divider",variant:g,size:s}),E="horizontal"===c,k=!!m&&E,z=!(null==b?void 0:b.color);return o.createElement(d.x,v({ref:r,className:N(S.root,{[S.vertical]:"vertical"===c,[S.horizontal]:E,[S.withLabel]:k},i),role:"separator"},P),k&&o.createElement(p.x,w(v({},b),{size:(null==b?void 0:b.size)||"xs",mt:(0,a.h)(2),className:N(S.label,S[u],{[S.labelDefaultStyles]:z})}),m))});P.displayName="@mantine/core/Divider"},49467:function(e,r,t){t.d(r,{J:function(){return I}});var o=t(67294),n=t(81280),a=t(49644),i=t(14258),l=t(37447),c=t(96768),s=t(56817),f=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&u(e,t,r[t]);if(d)for(var t of d(r))m.call(r,t)&&u(e,t,r[t]);return e};let g=(e,r)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(r/e)}%`:void 0,y=(e,r,t)=>t||"auto"===e||"content"===e?"unset":g(e,r),h=(e,r)=>{if(e)return"auto"===e||r?1:0},O=(e,r)=>0===e?0:e?`${100/(r/e)}%`:void 0,v=(e,r)=>void 0!==e?`calc(${(0,i.a)({size:e,sizes:r.spacing})} / 2)`:void 0;var w=(0,s.k)((e,{gutter:r,gutterXs:t,gutterSm:o,gutterMd:n,gutterLg:a,gutterXl:i,grow:s,offset:f,offsetXs:d,offsetSm:p,offsetMd:m,offsetLg:u,offsetXl:w,columns:j,span:x,xs:P,sm:S,md:N,lg:E,xl:k,order:z,orderXs:C,orderSm:I,orderMd:L,orderLg:R,orderXl:$})=>({col:b({boxSizing:"border-box",flexGrow:h(x,s),order:z,padding:v(r,e),marginLeft:O(f,j),flexBasis:g(x,j),flexShrink:0,width:"content"===x?"auto":void 0,maxWidth:y(x,j,s)},function({sizes:e,offsets:r,orders:t,theme:o,columns:n,gutters:a,grow:i}){return l.j1.reduce((l,s)=>(l[`@media (min-width: ${(0,c.em)(o.breakpoints[s])})`]={order:t[s],flexBasis:g(e[s],n),padding:v(a[s],o),flexShrink:0,width:"content"===e[s]?"auto":void 0,maxWidth:y(e[s],n,i),marginLeft:O(r[s],n),flexGrow:h(e[s],i)},l),{})}({sizes:{xs:P,sm:S,md:N,lg:E,xl:k},offsets:{xs:d,sm:p,md:m,lg:u,xl:w},orders:{xs:C,sm:I,md:L,lg:R,xl:$},gutters:{xs:t,sm:o,md:n,lg:a,xl:i},theme:e,columns:j,grow:s}))})),j=t(64523),x=Object.defineProperty,P=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,E=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))S.call(r,t)&&E(e,t,r[t]);if(P)for(var t of P(r))N.call(r,t)&&E(e,t,r[t]);return e},z=(e,r)=>{var t={};for(var o in e)S.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&P)for(var o of P(e))0>r.indexOf(o)&&N.call(e,o)&&(t[o]=e[o]);return t};let C={},I=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("GridCol",C,e),{children:i,span:l,offset:c,offsetXs:s,offsetSm:f,offsetMd:d,offsetLg:p,offsetXl:m,xs:u,sm:b,md:g,lg:y,xl:h,order:O,orderXs:v,orderSm:x,orderMd:P,orderLg:S,orderXl:N,className:E,id:I,unstyled:L,variant:R}=t,$=z(t,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled","variant"]),W=(0,a.n)(),T=l||W.columns,{classes:D,cx:H}=w({gutter:W.gutter,gutterXs:W.gutterXs,gutterSm:W.gutterSm,gutterMd:W.gutterMd,gutterLg:W.gutterLg,gutterXl:W.gutterXl,offset:c,offsetXs:s,offsetSm:f,offsetMd:d,offsetLg:p,offsetXl:m,xs:u,sm:b,md:g,lg:y,xl:h,order:O,orderXs:v,orderSm:x,orderMd:P,orderLg:S,orderXl:N,grow:W.grow,columns:W.columns,span:T},{unstyled:L,name:"Grid",variant:R});return!("auto"===T||"content"===T||"number"==typeof T&&T>0&&T%1==0)||T>W.columns?null:o.createElement(j.x,k({className:H(D.col,E),ref:r},$),i)});I.displayName="@mantine/core/Col"},49644:function(e,r,t){t.d(r,{k:function(){return n},n:function(){return a}});var o=t(68216);let[n,a]=(0,o.R)("Grid component was not found in tree")},62679:function(e,r,t){t.d(r,{r:function(){return N}});var o=t(67294),n=t(81280),a=t(49467),i=t(49644),l=t(37447),c=t(14258),s=t(56817),f=Object.defineProperty,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&u(e,t,r[t]);if(d)for(var t of d(r))m.call(r,t)&&u(e,t,r[t]);return e},g=(0,s.k)((e,{justify:r,align:t,gutter:o,gutterXs:n,gutterSm:a,gutterMd:i,gutterLg:s,gutterXl:f})=>{var d,p;return{root:b({margin:`calc(-${(0,c.a)({size:o,sizes:e.spacing})} / 2)`,display:"flex",flexWrap:"wrap",justifyContent:r,alignItems:t},(d={xs:n,sm:a,md:i,lg:s,xl:f},p=e,l.j1.reduce((e,r)=>(void 0!==d[r]&&(e[`@media (min-width: ${p.breakpoints[r]})`]={margin:`calc(-${(0,c.a)({size:d[r],sizes:p.spacing})} / 2)`}),e),{})))}}),y=t(64523),h=Object.defineProperty,O=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,j=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&j(e,t,r[t]);if(O)for(var t of O(r))w.call(r,t)&&j(e,t,r[t]);return e},P=(e,r)=>{var t={};for(var o in e)v.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&O)for(var o of O(e))0>r.indexOf(o)&&w.call(e,o)&&(t[o]=e[o]);return t};let S={gutter:"md",justify:"flex-start",align:"stretch",columns:12},N=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Grid",S,e),{gutter:a,gutterXs:l,gutterSm:c,gutterMd:s,gutterLg:f,gutterXl:d,children:p,grow:m,justify:u,align:b,columns:h,className:O,id:v,unstyled:w,variant:j}=t,N=P(t,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled","variant"]),{classes:E,cx:k}=g({gutter:a,justify:u,align:b,gutterXs:l,gutterSm:c,gutterMd:s,gutterLg:f,gutterXl:d},{unstyled:w,name:"Grid",variant:j});return o.createElement(i.k,{value:{gutter:a,gutterXs:l,gutterSm:c,gutterMd:s,gutterLg:f,gutterXl:d,grow:m,columns:h}},o.createElement(y.x,x({className:k(E.root,O),ref:r},N),p))});N.Col=a.J,N.displayName="@mantine/core/Grid"},22870:function(e,r,t){t.d(r,{E:function(){return W}});var o=t(67294),n=t(81280),a=t(96768),i=t(37048),l=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&d(e,t,r[t]);if(c)for(var t of c(r))f.call(r,t)&&d(e,t,r[t]);return e};function m(e){return o.createElement("svg",p({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var u=t(56817),b=Object.defineProperty,g=Object.defineProperties,y=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&w(e,t,r[t]);if(h)for(var t of h(r))v.call(r,t)&&w(e,t,r[t]);return e},x=(e,r)=>g(e,y(r)),P=(0,u.k)((e,{radius:r})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:x(j({},e.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:e.fn.radius(r)}),caption:{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],marginTop:e.spacing.xs},placeholder:x(j({},e.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],borderRadius:e.fn.radius(r)})})),S=t(64523),N=t(95117),E=Object.defineProperty,k=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,I=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,L=(e,r)=>{for(var t in r||(r={}))z.call(r,t)&&I(e,t,r[t]);if(k)for(var t of k(r))C.call(r,t)&&I(e,t,r[t]);return e},R=(e,r)=>{var t={};for(var o in e)z.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&k)for(var o of k(e))0>r.indexOf(o)&&C.call(e,o)&&(t[o]=e[o]);return t};let $={fit:"cover",width:"100%",height:"auto",radius:0},W=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Image",$,e),{className:l,alt:c,src:s,fit:f,width:d,height:p,radius:u,imageProps:b,withPlaceholder:g,placeholder:y,imageRef:h,classNames:O,styles:v,caption:w,unstyled:j,style:x,variant:E}=t,k=R(t,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style","variant"]),{classes:z,cx:C}=P({radius:u},{classNames:O,styles:v,unstyled:j,name:"Image",variant:E}),[I,W]=(0,o.useState)(!s);return(0,i.l)(()=>{W(!s)},[s]),o.createElement(S.x,L({className:C(z.root,l),style:L({width:(0,a.h)(d)},x),ref:r},k),o.createElement("figure",{className:z.figure},o.createElement("div",{className:z.imageWrapper},o.createElement("img",L({className:z.image,src:s,alt:c,style:{objectFit:f,width:(0,a.h)(d),height:(0,a.h)(p)},ref:h,onError:e=>{W(!0),"function"==typeof(null==b?void 0:b.onError)&&b.onError(e)}},b)),g&&I&&o.createElement("div",{className:z.placeholder,title:c},y||o.createElement("div",null,o.createElement(m,{width:(0,a.h)(40),height:(0,a.h)(40)})))),!!w&&o.createElement(N.x,{component:"figcaption",size:"sm",align:"center",className:z.caption},w)))});W.displayName="@mantine/core/Image"},8949:function(e,r,t){t.d(r,{a:function(){return X}});var o=t(67294),n=t(81280),a=t(68216);let[i,l]=(0,a.R)("List component was not found in tree");var c=t(56817),s=t(58404),f=t(14258),d=(0,c.k)((e,{spacing:r,center:t})=>({itemWrapper:{ref:(0,s.A)("itemWrapper"),display:"inline-flex",flexDirection:"column",whiteSpace:"normal"},item:{whiteSpace:"nowrap",lineHeight:t?1:e.lineHeight,"&:not(:first-of-type)":{marginTop:(0,f.a)({size:r,sizes:e.spacing})},"&[data-with-icon]":{listStyle:"none",[`& .${(0,s.A)("itemWrapper")}`]:{display:"inline-flex",alignItems:t?"center":"flex-start",flexDirection:"row"}}},itemIcon:{display:"inline-block",verticalAlign:"middle",marginRight:e.spacing.sm}})),p=t(64523),m=Object.defineProperty,u=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&y(e,t,r[t]);if(u)for(var t of u(r))g.call(r,t)&&y(e,t,r[t]);return e},O=(e,r)=>{var t={};for(var o in e)b.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&u)for(var o of u(e))0>r.indexOf(o)&&g.call(e,o)&&(t[o]=e[o]);return t};let v={},w=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("ListItem",v,e),{className:a,children:i,icon:c}=t,s=O(t,["className","children","icon"]),{icon:f,spacing:m,center:u,listStyleType:b,size:g,withPadding:y,classNames:w,styles:j,unstyled:x,variant:P}=l(),S=c||f,{classes:N,cx:E}=d({withPadding:y,listStyleType:b,center:u,spacing:m},{classNames:w,styles:j,unstyled:x,name:"List",variant:P,size:g});return o.createElement(p.x,h({component:"li",className:E(N.item,a),"data-with-icon":!!S||void 0,ref:r},s),o.createElement("div",{className:N.itemWrapper},S&&o.createElement("span",{className:N.itemIcon},S),o.createElement("span",null,i)))});w.displayName="@mantine/core/ListItem";var j=Object.defineProperty,x=Object.defineProperties,P=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,k=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,z=(e,r)=>{for(var t in r||(r={}))N.call(r,t)&&k(e,t,r[t]);if(S)for(var t of S(r))E.call(r,t)&&k(e,t,r[t]);return e},C=(e,r)=>x(e,P(r)),I=(0,c.k)((e,{withPadding:r,listStyleType:t},{size:o})=>({root:C(z({},e.fn.fontStyles()),{listStyleType:t,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,fontSize:(0,f.a)({size:o,sizes:e.fontSizes}),lineHeight:e.lineHeight,margin:0,paddingLeft:r?e.spacing.xl:0,listStylePosition:"inside"})})),L=Object.defineProperty,R=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,T=(e,r,t)=>r in e?L(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,D=(e,r)=>{for(var t in r||(r={}))$.call(r,t)&&T(e,t,r[t]);if(R)for(var t of R(r))W.call(r,t)&&T(e,t,r[t]);return e},H=(e,r)=>{var t={};for(var o in e)$.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&R)for(var o of R(e))0>r.indexOf(o)&&W.call(e,o)&&(t[o]=e[o]);return t};let M={type:"unordered",size:"md",spacing:0},X=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("List",M,e),{children:a,type:l,size:c,listStyleType:s,withPadding:f,center:d,spacing:m,icon:u,className:b,styles:g,classNames:y,unstyled:h,variant:O}=t,v=H(t,["children","type","size","listStyleType","withPadding","center","spacing","icon","className","styles","classNames","unstyled","variant"]),{classes:w,cx:j}=I({withPadding:f,listStyleType:s,center:d,spacing:m},{classNames:y,styles:g,name:"List",unstyled:h,size:c,variant:O});return o.createElement(i,{value:{spacing:m,center:d,icon:u,listStyleType:s,size:c,withPadding:f,classNames:y,styles:g,unstyled:h,variant:O}},o.createElement(p.x,D({component:"unordered"===l?"ul":"ol",className:j(w.root,b),ref:r},v),a))});X.Item=w,X.displayName="@mantine/core/List"},5044:function(e,r,t){t.d(r,{k:function(){return z}});var o=t(67294),n=t(81280),a=t(96768),i=t(56817),l=t(14258),c=Object.defineProperty,s=Object.defineProperties,f=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&u(e,t,r[t]);if(d)for(var t of d(r))m.call(r,t)&&u(e,t,r[t]);return e},g=(e,r)=>s(e,f(r));let y={xs:(0,a.h)(16),sm:(0,a.h)(20),md:(0,a.h)(26),lg:(0,a.h)(32),xl:(0,a.h)(40)},h=["filled","light","gradient","outline","default"];var O=(0,i.k)((e,{color:r,radius:t,gradient:o},{variant:n,size:i})=>{let c=(0,l.a)({size:i,sizes:y});return{root:b(g(b({},e.fn.fontStyles()),{display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:c,height:c,minWidth:c,minHeight:c,borderRadius:e.fn.radius(t)}),function({theme:e,variant:r,color:t,gradient:o}){if(!h.includes(r))return null;let n=e.fn.variant({variant:r,color:t||e.primaryColor,gradient:o,primaryFallback:!1});return{backgroundColor:n.background,color:n.color,backgroundImage:"gradient"===r?n.background:void 0,border:`${(0,a.h)("gradient"===r?0:1)} solid ${n.border}`}}({theme:e,variant:n,gradient:o,color:r}))}}),v=t(64523),w=Object.defineProperty,j=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,S=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||(r={}))x.call(r,t)&&S(e,t,r[t]);if(j)for(var t of j(r))P.call(r,t)&&S(e,t,r[t]);return e},E=(e,r)=>{var t={};for(var o in e)x.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&j)for(var o of j(e))0>r.indexOf(o)&&P.call(e,o)&&(t[o]=e[o]);return t};let k={size:"md",variant:"filled"},z=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("ThemeIcon",k,e),{className:a,size:i,radius:l,variant:c,color:s,children:f,gradient:d,unstyled:p}=t,m=E(t,["className","size","radius","variant","color","children","gradient","unstyled"]),{classes:u,cx:b}=O({variant:c,radius:l,color:s,gradient:d},{name:"ThemeIcon",unstyled:p,variant:c,size:i});return o.createElement(v.x,N({className:b(u.root,a),ref:r},m),f)});z.displayName="@mantine/core/ThemeIcon"},19236:function(e,r,t){t.d(r,{D:function(){return N}});var o=t(67294),n=t(81280),a=t(96768),i=t(56817),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&m(e,t,r[t]);if(f)for(var t of f(r))p.call(r,t)&&m(e,t,r[t]);return e},b=(e,r)=>c(e,s(r)),g=(0,i.k)((e,{element:r,weight:t,inline:o},{size:n})=>({root:b(u({},e.fn.fontStyles()),{fontFamily:e.headings.fontFamily,fontWeight:t||e.headings.sizes[r].fontWeight||e.headings.fontWeight,fontSize:void 0!==n?n in e.headings.sizes?e.headings.sizes[n].fontSize:(0,a.h)(n):e.headings.sizes[r].fontSize,lineHeight:o?1:void 0!==n&&n in e.headings.sizes?e.headings.sizes[n].lineHeight:e.headings.sizes[r].lineHeight,margin:0})})),y=t(95117),h=Object.defineProperty,O=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,j=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&j(e,t,r[t]);if(O)for(var t of O(r))w.call(r,t)&&j(e,t,r[t]);return e},P=(e,r)=>{var t={};for(var o in e)v.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&O)for(var o of O(e))0>r.indexOf(o)&&w.call(e,o)&&(t[o]=e[o]);return t};let S={order:1},N=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Title",S,e),{className:a,order:i,children:l,unstyled:c,size:s,weight:f,inline:d,variant:p}=t,m=P(t,["className","order","children","unstyled","size","weight","inline","variant"]),{classes:u,cx:b}=g({element:`h${i}`,weight:f,inline:d},{name:"Title",unstyled:c,variant:p,size:s});return[1,2,3,4,5,6].includes(i)?o.createElement(y.x,x({variant:p,component:`h${i}`,ref:r,className:b(u.root,a)},m),l):null});N.displayName="@mantine/core/Title"},88198:function(e,r,t){t.d(r,{Z:function(){return o}});var o=(0,t(30853).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])}}]);