"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[7314],{84864:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=n(85893),i=n(11151);const a={date:new Date("2019-11-05T00:00:00.000Z"),title:"Business events and HTTPs endpoint",tags:["Postman","Business events","BATCH","integration","Azure"],categories:["FinOps","Business events","Integration"]},o=void 0,r={id:"integration/business-event/2019-11-05-Business-events-and-HTTPs-endpoint/index",title:"Business events and HTTPs endpoint",description:"In Dynamics 365 finance and operations, Business events provide a mechanism that lets external systems receive notifications from FinOps applications. In this way, the systems can perform business actions in response to business events.",source:"@site/docs/02-integration/03-business-event/2019-11-05-Business-events-and-HTTPs-endpoint/index.md",sourceDirName:"02-integration/03-business-event/2019-11-05-Business-events-and-HTTPs-endpoint",slug:"/integration/business-event/2019-11-05-Business-events-and-HTTPs-endpoint/",permalink:"/integration/business-event/2019-11-05-Business-events-and-HTTPs-endpoint/",draft:!1,unlisted:!1,tags:[{label:"Postman",permalink:"/tags/postman"},{label:"Business events",permalink:"/tags/business-events"},{label:"BATCH",permalink:"/tags/batch"},{label:"integration",permalink:"/tags/integration"},{label:"Azure",permalink:"/tags/azure"}],version:"current",lastUpdatedBy:"Dynamics365",lastUpdatedAt:1707438458e3,frontMatter:{date:"2019-11-05T00:00:00.000Z",title:"Business events and HTTPs endpoint",tags:["Postman","Business events","BATCH","integration","Azure"],categories:["FinOps","Business events","Integration"]},sidebar:"tutorialSidebar",previous:{title:"Business event Overview",permalink:"/integration/business-event/"},next:{title:"AIF Integration (AX 20212 - Deprecated)",permalink:"/integration/aif-integration-ax12/"}},c={},d=[{value:"1. HTTPs and Azure function",id:"1-https-and-azure-function",level:2},{value:"2. Application registration int AAD",id:"2-application-registration-int-aad",level:2},{value:"API Permissions",id:"api-permissions",level:3},{value:"Secrets",id:"secrets",level:3},{value:"3. Key Vaults",id:"3-key-vaults",level:2},{value:"Access policy",id:"access-policy",level:3},{value:"Key Vault secret",id:"key-vault-secret",level:3},{value:"4. Creating HTTPs endpoint",id:"4-creating-https-endpoint",level:2},{value:"5. About platform changes",id:"5-about-platform-changes",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"In Dynamics 365 finance and operations, Business events provide a mechanism that lets external systems receive notifications from FinOps applications. In this way, the systems can perform business actions in response to business events."}),"\n",(0,t.jsxs)(s.p,{children:["There are 3 types of business events: ",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/business-events/app-business-events",children:"Application business events"}),",\xa0",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/business-events/business-events-workflow",children:"Workflow business events"}),", and\xa0",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/business-events/alerts-business-events",children:"Alerts as business events"}),". You can also implement ",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/business-events/business-events-dev-doc",children:"a new business event"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Business events can be consumed using Microsoft Flow and Azure messaging services, and we use endpoint to manage the destinations for sending business events to, Microsoft supports many endpoints: Azure Service Bus Queue, Azure Service Bus Topic, Azure Event Grid, Azure Event Hub, HTTPS, Microsoft Flow.\r\nIn this article I will show how to send business event to HTTPs endpoint that leveraging on Azure functions."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"The scenario"}),": Once a free text invoice is posted, Business event will be triggered and send messages to the HTTPs endpoint."]}),"\n",(0,t.jsx)(s.h2,{id:"1-https-and-azure-function",children:"1. HTTPs and Azure function"}),"\n",(0,t.jsxs)(s.p,{children:["Ideally, I will create a new Azure function which has HTTPs endpoint to subscribe the business events in FinOps.\r\nTo create Azure function please follow this ",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function",children:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function"})]}),"\n",(0,t.jsx)(s.p,{children:"Here is the simple line of code"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-C#",children:'using System.Net;\r\nusing Microsoft.AspNetCore.Mvc;\r\nusing Microsoft.Extensions.Primitives;\r\nusing Newtonsoft.Json;\r\npublic static async Task<IActionResult> Run(HttpRequest req, ILogger log)\r\n{\r\n  log.LogInformation("Dynamics 365 finance and operations notifications");\r\n  string requestBody = await new StreamReader(req.Body).ReadToEndAsync();\r\n  log.LogInformation(requestBody);\r\n  return (ActionResult)new OkObjectResult($"Hello world");\r\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"This basically listens the JSON messages from Business events and display the Json message at Console."}),"\n",(0,t.jsx)(s.p,{children:"From the Azure function you can get the HTTPs endpoint, save it for later reference."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(82515).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"1346",height:"568"})}),"\n",(0,t.jsx)(s.h2,{id:"2-application-registration-int-aad",children:"2. Application registration int AAD"}),"\n",(0,t.jsxs)(s.p,{children:["We need an application to authenticate with FinOps and Azure function HTTPs.\r\nGo to ",(0,t.jsx)(s.em,{children:"Azure portal > AAD > App registrations > New registration"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(70024).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"1080",height:"634"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Name of the application."}),"\n",(0,t.jsx)(s.li,{children:"Depend on you have multitenant or not"}),"\n",(0,t.jsx)(s.li,{children:"Dynamics 365 finance and operations URL"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"api-permissions",children:"API Permissions"}),"\n",(0,t.jsx)(s.p,{children:"Go to the newly created application > API permissions and adding permission as below"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(61474).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"1080",height:"536"})}),"\n",(0,t.jsx)(s.h3,{id:"secrets",children:"Secrets"}),"\n",(0,t.jsx)(s.p,{children:"Go to Certificates & secrets menu item and create a new client secret"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(68179).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"1080",height:"454"})}),"\n",(0,t.jsxs)(s.p,{children:["After this you will have ",(0,t.jsx)(s.strong,{children:"Application Id and Application Secret"}),", save it for later."]}),"\n",(0,t.jsx)(s.h2,{id:"3-key-vaults",children:"3. Key Vaults"}),"\n",(0,t.jsx)(s.p,{children:"In Azure portal create a new keyVault to store the HTTPs endpoint URL information"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(32337).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"1080",height:"664"})}),"\n",(0,t.jsx)(s.h3,{id:"access-policy",children:"Access policy"}),"\n",(0,t.jsx)(s.p,{children:"Click next to create access policy (you also can set up this later after creating Key Vault)"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(35698).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"1080",height:"322"})}),"\n",(0,t.jsx)(s.p,{children:"Select all the permissions in Key, Secret and Certificate, In select principal choose the application you have created before."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(71744).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"1056",height:"648"})}),"\n",(0,t.jsx)(s.h3,{id:"key-vault-secret",children:"Key Vault secret"}),"\n",(0,t.jsxs)(s.p,{children:["Go to the newly ",(0,t.jsx)(s.em,{children:"created Key vault > secrets > generate a new one"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(15278).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"770",height:"576"})}),"\n",(0,t.jsxs)(s.p,{children:["Value is the endpoint URL for D365 to call the one we got from the first step.\r\nAfter this step you will have the Key vault DNS name ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.a,{href:"https://maxfokeyvault.vault.azure.net/",children:"https://maxfokeyvault.vault.azure.net/"})})," and Key Vault secret name ",(0,t.jsx)(s.em,{children:"D365VaultSecretName"}),"\r\nThat information will be needed for Business events configuration in Dynamics 365 finance and operations"]}),"\n",(0,t.jsx)(s.h2,{id:"4-creating-https-endpoint",children:"4. Creating HTTPs endpoint"}),"\n",(0,t.jsxs)(s.p,{children:["Go to ",(0,t.jsx)(s.em,{children:"System administrator > Business events > Business events catalog"}),", Click on ",(0,t.jsx)(s.strong,{children:"Endpoints"})," in ",(0,t.jsx)(s.strong,{children:"Endpoint type"})," choose ",(0,t.jsx)(s.em,{children:"HTTPS"})," and ",(0,t.jsx)(s.strong,{children:"click Next"}),". Fill all the required information that you got from above steps."]}),"\n",(0,t.jsxs)(s.p,{children:["Click on ",(0,t.jsx)(s.strong,{children:"Business events catalog"}),", look for business event Id ",(0,t.jsx)(s.em,{children:"CustFreeTextInvoicePostedBusinessEvent"}),", check the record and click ",(0,t.jsx)(s.strong,{children:"Active"}),"; from there choose legal entity and the Endpoint that we have just created."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(52501).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"544",height:"360"})}),"\n",(0,t.jsxs)(s.p,{children:["After that, if you check on ",(0,t.jsx)(s.strong,{children:"Active events tab"}),", there will be a new record created.\r\nThat's it, now I will create a free text invoice and post it, this is what I got from the console log in Azure."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:n(58374).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"1436",height:"224"})}),"\n",(0,t.jsx)(s.p,{children:"With the JSON messages, you can deserialize it and save to Cosmos DB or do whatever in Azure function."}),"\n",(0,t.jsx)(s.h2,{id:"5-about-platform-changes",children:"5. About platform changes"}),"\n",(0,t.jsxs)(s.p,{children:["Before PU26, Business event run in batch, following menu ",(0,t.jsx)(s.em,{children:"System admin > Business events > Start business events batch job"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.img,{alt:"Image",src:n(28235).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"468",height:"184"}),"\r\n",(0,t.jsx)(s.img,{alt:"Image",src:n(2287).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"938",height:"846"}),"\r\n",(0,t.jsx)(s.img,{alt:"Image",src:n(84823).Z+"",title:"Business-events-and-HTTPs-endpoint",width:"1544",height:"312"})]}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.strong,{children:"BusinessEventsParameters"}),", the value will be ",(0,t.jsx)(s.code,{children:"Enabled = 0 , BatchEnabled = 1"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"After PU26, the sending business events will be triggered directly from FinOps, you won't find the menu System admin > Business events > Start business events batch job"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.strong,{children:"BusinessEventsParameters"}),", the value will be ",(0,t.jsx)(s.code,{children:"Enabled = 1 , BatchEnabled = 0"}),".\r\nIf you have just upgraded from PU26 to higher version, the Business events are not getting triggered because the value might not be changed in ",(0,t.jsx)(s.strong,{children:"BusinessEventsParameters"})," and there is no batch. You should check this table according to the situation."]}),"\n",(0,t.jsx)(s.p,{children:"Thank you for reading."})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},82515:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_1-78ea12bddb849e1c534d0a9ff8f2e327.png"},58374:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_10-8aca9b3278c682d7dc5d27b9cb673f99.png"},28235:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_11-f7c3497d88e173ea03283bfd90efbd06.png"},2287:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_12-75345e4aae2ba02e5dd49311dabdb83f.png"},84823:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_13-1dd51f5956f3304a75f651825b6e5651.png"},70024:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_2-0686ec420594e18b25a9dd23cf1de3e5.png"},61474:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_3-1edb16648881b85bcc67a71670599248.png"},68179:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_4-c3484a06f492faef23a90642c81c44ac.png"},32337:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_5-14a46a24e1e00a2decca1f3f05ed9000.png"},35698:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_6-f624f7077462beb255ca0db4fed246fc.png"},71744:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_7-2fc8721f9973df6f2887641f43ebbdbd.png"},15278:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_8-aad6223b5112f9f41a2f8fe10bd838fb.png"},52501:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/2019-11-05-Business-events-and-HTTPs-endpoint_9-56657d7e841e225fc2bf32afd043694d.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>o});var t=n(67294);const i={},a=t.createContext(i);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);