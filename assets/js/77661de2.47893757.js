"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[3051],{95955:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=i(74848),a=i(28453);const n={title:"How to create HTTP adapter port",description:"How to create HTTP adapter port",date:new Date("2017-01-12T00:00:00.000Z"),categories:["AX2012","Integration"],tags:["xpp","aif"]},r=void 0,s={id:"integration/aif-integration-ax12/2017-01-12-How-to-create-HTTP-adapter-port/index",title:"How to create HTTP adapter port",description:"How to create HTTP adapter port",source:"@site/docs/02-integration/04-aif-integration-ax12/2017-01-12-How-to-create-HTTP-adapter-port/index.md",sourceDirName:"02-integration/04-aif-integration-ax12/2017-01-12-How-to-create-HTTP-adapter-port",slug:"/integration/aif-integration-ax12/2017-01-12-How-to-create-HTTP-adapter-port/",permalink:"/docs/integration/aif-integration-ax12/2017-01-12-How-to-create-HTTP-adapter-port/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"xpp",permalink:"/docs/tags/xpp"},{inline:!0,label:"aif",permalink:"/docs/tags/aif"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"How to create HTTP adapter port",description:"How to create HTTP adapter port",date:"2017-01-12T00:00:00.000Z",categories:["AX2012","Integration"],tags:["xpp","aif"]},sidebar:"tutorialSidebar",previous:{title:"Handle AIF error messages in dynamics AX 2012 R3",permalink:"/docs/integration/aif-integration-ax12/2017-01-12-Handle-AIF-error-messages-in-dynamics-AX-2012-R3/"},next:{title:"Response in AIF custom service class",permalink:"/docs/integration/aif-integration-ax12/2017-01-12-Respone-in-AIF-custom-service-class/"}},c={},d=[{value:"How to do",id:"how-to-do",level:3}];function p(e){const t={code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["We normally use ",(0,o.jsx)(t.code,{children:"NETTCP"})," adapter for .NET system, It going to very easy to consume by."]}),"\n",(0,o.jsxs)(t.p,{children:["As my experience, if we use ",(0,o.jsx)(t.code,{children:"NETTCP"})," adapter for consuming by Java system, we will need add some extension or 3rd party due to binding and mismatch schema and of course client doesn\u2019t want to do that either me."]}),"\n",(0,o.jsx)(t.p,{children:"So, my solution is creating HTTP adapter for Java, you can also use .NET system to consume HTTP adapter without any problems"}),"\n",(0,o.jsx)(t.h3,{id:"how-to-do",children:"How to do"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"You need to make sure install web services component on Internet Information Services (IIS) and verify that the default website is working."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"How-to-create-HTTP-adapter-port",src:i(53479).A+"",width:"264",height:"208"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"In AX, under System administrator > Services and AIF > Web sites, open from a create new record follow information"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Name: ",(0,o.jsx)(t.code,{children:"DynamicsAXAif60"}),"\nVirtual directory share path: ",(0,o.jsx)(t.code,{children:"\\\\YourServerName\\MicrosoftDynamicsAXAif60"}),"\nURL: ",(0,o.jsx)(t.code,{children:"http://YourServerName/MicrosoftDynamicsAXAif60"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["From now on, you can create AIF inbound port with ",(0,o.jsx)(t.strong,{children:"HTTP adapter"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"How-to-create-HTTP-adapter-port",src:i(98319).A+"",width:"809",height:"446"})}),"\n",(0,o.jsxs)(t.p,{children:["After you've actived the services, that Port will deployed under ",(0,o.jsx)(t.code,{children:"DynamicsAXAif60"})," folder in IIS."]}),"\n",(0,o.jsx)(t.p,{children:"Thank you for reading."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},53479:(e,t,i)=>{i.d(t,{A:()=>o});const o="data:image/png;base64,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"},98319:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/How-to-create-HTTP-adapter-port-2-e97c5efff9dc8eaf49f9453342858de8.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var o=i(96540);const a={},n=o.createContext(a);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);