"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[6282],{699:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(85893),o=t(11151);const s={date:new Date("2019-12-17T00:00:00.000Z"),title:"Dynamics 365 finance and operations ODATA consuming - Length cannot be less than zero",tags:["Length cannot be less than zero","OData","BATCH","integration",".NET"],categories:["FinOps","Business events","Integration"],lightgallery:!0},i=void 0,r={id:"integration/odata/2019-12-17-Dynamics-365-finance-and-operations-ODATA-consuming-Length-cannot-be-less-than-zero/index",title:"Dynamics 365 finance and operations ODATA consuming - Length cannot be less than zero",description:"When you consume a custom data entity, you get an error",source:"@site/docs/02-integration/01-odata/2019-12-17-Dynamics-365-finance-and-operations-ODATA-consuming-Length-cannot-be-less-than-zero/index.md",sourceDirName:"02-integration/01-odata/2019-12-17-Dynamics-365-finance-and-operations-ODATA-consuming-Length-cannot-be-less-than-zero",slug:"/integration/odata/2019-12-17-Dynamics-365-finance-and-operations-ODATA-consuming-Length-cannot-be-less-than-zero/",permalink:"/integration/odata/2019-12-17-Dynamics-365-finance-and-operations-ODATA-consuming-Length-cannot-be-less-than-zero/",draft:!1,unlisted:!1,tags:[{label:"Length cannot be less than zero",permalink:"/tags/length-cannot-be-less-than-zero"},{label:"OData",permalink:"/tags/o-data"},{label:"BATCH",permalink:"/tags/batch"},{label:"integration",permalink:"/tags/integration"},{label:".NET",permalink:"/tags/net"}],version:"current",frontMatter:{date:"2019-12-17T00:00:00.000Z",title:"Dynamics 365 finance and operations ODATA consuming - Length cannot be less than zero",tags:["Length cannot be less than zero","OData","BATCH","integration",".NET"],categories:["FinOps","Business events","Integration"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Consuming Dynamics 365 Finance and Operations OData services from .NET",permalink:"/integration/odata/2019-12-16-Consuming-Dynamics-365-Finance-and-Operations-OData-services-from-NET/"},next:{title:"Testing Dynamics 365 Finance Database Movement API with Postman",permalink:"/integration/odata/2020-08-17-Testing-Dynamics-365-Finance-Database-Movement-API-with-Postman/"}},c={},d=[];function l(n){const e={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",strong:"strong",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"When you consume a custom data entity, you get an error"}),"\n",(0,a.jsx)(e.admonition,{type:"caution",children:(0,a.jsx)(e.p,{children:"errorSystem.ArgumentOutOfRangeException : Length cannot be less than zero\u201d and it works fine for standard data entities."})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Image",src:t(26647).Z+"",width:"975",height:"204"})}),"\n",(0,a.jsxs)(e.p,{children:["The reason is the temporary XML file where the metadata stored which mismatches with the metadata from ",(0,a.jsx)(e.code,{children:"https://<yourenvironment>.cloudax.dynamics.com/data/$metadata"})]}),"\n",(0,a.jsxs)(e.p,{children:["You can follow this ",(0,a.jsx)(e.a,{href:"/2019-12-16-consuming-dynamics-365-finance-and-operations-odata-services-from-net/",children:"post"})," to understand how to create the XML file."]}),"\n",(0,a.jsxs)(e.p,{children:["If you try to regenerate the metadata by saving the ",(0,a.jsx)(e.strong,{children:"ODataClient.tt"})," file, the XML will be accumulated, and the error keeps happening.\r\nThe resolution here is simply delete it and regenerate metadata again by saving the ",(0,a.jsx)(e.strong,{children:"ODataClient.tt"})," file"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Image",src:t(71877).Z+"",width:"975",height:"545"})}),"\n",(0,a.jsx)(e.p,{children:"Thank you for reading."})]})}function m(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},26647:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/Dynamics-365-finance-and-operations-ODATA-consuming-Length-cannot-be-less-than-zero_1-47e4d9756298850c8b60e872fc7a048e.png"},71877:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/Dynamics-365-finance-and-operations-ODATA-consuming-Length-cannot-be-less-than-zero_2-54eae33a185dd1a51497ad762a0225b6.png"},11151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>i});var a=t(67294);const o={},s=a.createContext(o);function i(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);