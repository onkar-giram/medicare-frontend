(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{32466:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/testpage",function(){return a(68748)}])},29010:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var n=a(67294),r=a(69077),c=a(95439),s=a(25269);a(53648);var i=a(23204);function u(t){let{address:e,contractAddress:a,abi:u,enabled:o}=(0,c.Z)(),[f,l]=(0,n.useState)(!1),[d,y]=(0,n.useState)(!1),{isLoading:D,CIDs:w,setupCIDs:g,resetCIDs:h}=(0,s.Z)(e,t),{writeAsync:m,isLoading:S}=(0,r.GG)({address:a,abi:u,functionName:"changeEditorAccess",args:[t,w.generalDataCID,w.keyDataCID],enabled:o&&t&&w.generalDataCID&&w.keyDataCID}),v=(0,i.Z)({uploading:D,txnLoading:S,txnWaiting:f,success:d});return(0,n.useEffect)(()=>{w.generalDataCID&&w.keyDataCID&&(async()=>{try{let t=await m();l(!0),await t.wait(1),l(!1),y(!0)}catch(t){console.log(t)}h()})()},[w]),{status:v,runChangeEditorAccess:async function(t){let{generalData:e,certificatesData:a,keyData:n}=t;try{await g({prevCertificatesData:a,prevKeyData:n},e,a.data.certificates)}catch(t){console.log(t)}}}}},3332:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var n=a(64146),r=a(67294),c=a(69077),s=a(95439),i=a(23204);function u(){let{contractAddress:t,abi:e,enabled:a}=(0,s.Z)(),{data:u}=(0,c.mx)(),[o,f]=(0,r.useState)(""),[l,d]=(0,r.useState)(!1),[y,D]=(0,r.useState)(),w=(0,i.Z)({txnLoading:l,success:y});async function g(){let a=new n.CH(t,e,u);return await a.getDrOfPt()}return(0,r.useEffect)(()=>{(async()=>{try{if(a&&u){d(!0);let t=await g();f(t),d(!1),D(!0)}}catch(t){console.log(t)}})()},[a,u]),{status:w,doctor:o,getDoctorOfPatient:g}}},53648:function(t,e,a){"use strict";a.d(e,{Z:function(){return l}});var n=a(67294),r=a(69077),c=a(44480);a(88174);var s=a(99766),i=a(66066),u=a(40608),o=a(23204),f=a(48764).Buffer;function l(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1],{address:a}=(0,r.mA)(),{generalHash:l,keyHash:d,certificatesHash:y}=(0,u.Z)(t),[D,w]=(0,n.useState)({generalData:{},certificatesData:{},keyData:{}}),[g,h]=(0,n.useState)(!1),[m,S]=(0,n.useState)(!1),[v,Z]=(0,n.useState)(!1),C=(0,o.Z)({retrieving:g,success:m,failure:v});async function p(){let t=await (0,c.retrieveIPFS)(l),e=await (0,c.retrieveIPFS)(d),a=await (0,c.retrieveIPFS)(y);return{cipherGeneralData:t,cipherKey:e,cipherCertificatesData:a}}async function k(t){let{cipherGeneralData:e,cipherKey:n,cipherCertificatesData:r}=t,{key:c,iv:u}=JSON.parse(await (0,s.decryptData)(a,n.keys[a])),o=JSON.parse((0,i.symmetricDecrypt)(e,f.from(c,"hex"),f.from(u,"hex"))),l={...r,data:JSON.parse((0,i.symmetricDecrypt)(r.data,f.from(c,"hex"),f.from(u,"hex")))};o&&l&&w({generalData:o,certificatesData:l,keyData:n})}async function I(){h(!0);try{let t=await p();await k(t),S(!0)}catch(t){console.log(t),Z(!0)}h(!1)}return(0,n.useEffect)(()=>{e&&l&&d&&I()},[e,l,d]),{status:C,generalHash:l,keyHash:d,certificatesHash:y,...D,getData:I}}},35450:function(t,e,a){"use strict";a.d(e,{Z:function(){return i}});var n=a(64146),r=a(67294),c=a(69077),s=a(95439);function i(){let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0],{contractAddress:e,abi:a,enabled:i}=(0,s.Z)(),{data:u}=(0,c.mx)(),[o,f]=(0,r.useState)([]);async function l(){try{let t=new n.CH(e,a,u);f(await t.getPtsOfDr())}catch(t){console.log(t)}}return(0,r.useEffect)(()=>{t&&i&&u&&l()},[i,u,t]),{patients:o}}},20255:function(t,e,a){"use strict";a.d(e,{Z:function(){return o}});var n=a(67294),r=a(69077),c=a(95439),s=a(25269),i=a(88174),u=a(23204);function o(){let{address:t,contractAddress:e,abi:a,enabled:o}=(0,c.Z)(),{isLoading:f,CIDs:l,setupCIDs:d,resetCIDs:y}=(0,s.Z)(t),[D,w]=(0,n.useState)(!1),{data:g,refetch:h}=(0,r.do)({address:e,abi:a,functionName:"isPatient",args:[t],enabled:o}),{writeAsync:m,isLoading:S}=(0,r.GG)({address:e,abi:a,functionName:"registerPt",args:[l.generalDataCID,l.keyDataCID],enabled:o&&l.generalDataCID&&l.keyDataCID});(0,n.useEffect)(()=>{let{generalDataCID:t,keyDataCID:e}=l;t&&e&&(async()=>{try{let t=await m();w(!0),await t.wait(1),w(!1),await h()}catch(t){console.log(t)}y()})()},[l]);let v=(0,u.Z)({uploading:f,txnLoading:S,txnWaiting:D});return{isPatient:g,status:v,handleOnSumbit:async function(t){try{let{certificates:e}=t;delete t.certificates;let{dob:a}=t;a&&"Date"==a.constructor.name&&(t.dob=a.toDateString());let{photo:n}=t;for(let a in n&&"File"==n.constructor.name&&(t.photo=await (0,i.readAsDataURLAsync)(n)),e){let{media:t}=e[a];t&&"File"==t.constructor.name&&(e[a].media=await (0,i.readAsDataURLAsync)(t))}await d({prevCertificatesData:{},prevKeyData:{}},t,e)}catch(t){console.log(t)}}}}},506:function(t,e,a){"use strict";a.d(e,{Z:function(){return u}});var n=a(67294),r=a(69077),c=a(47213),s=a(95439),i=a(23204);function u(){let{address:t,contractAddress:e,abi:a}=(0,s.Z)(),{isLoading:u,dataCID:o,setupCID:f,resetCID:l}=(0,c.Z)(t),{writeAsync:d,isLoading:y}=(0,r.GG)({address:e,abi:a,functionName:"setDrHash",args:[o]}),[D,w]=(0,n.useState)(!1),[g,h]=(0,n.useState)(!1),m=(0,i.Z)({uploading:u,txnLoading:y,txnWaiting:D,success:g});return(0,n.useEffect)(()=>{o&&(async()=>{try{let t=await d();w(!0),await t.wait(1),w(!1),h(!0)}catch(t){console.log(t),l()}})()},[o]),{status:m,updateData:async function(t,e){try{await f({...t,certificates:e})}catch(t){console.log(t)}}}}},68748:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return s}});var n=a(85893);a(53648),a(81999),a(95439),a(3332),a(29010),a(35450),a(20255),a(25269),a(40608),a(99766),a(66066),a(67294),a(506);var r=a(11163),c=a(67841);function s(){let t=(0,r.useRouter)();return(0,n.jsx)(c.z,{onClick:()=>t.reload(window.location.pathname),children:"reload"})}}},function(t){t.O(0,[297,714,324,213,78,791,774,888,179],function(){return t(t.s=32466)}),_N_E=t.O()}]);