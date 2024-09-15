"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[3314],{5307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(74848),r=t(28453);const i={date:"2021-12-21",lastmod:"2022-11-21",title:"Troubleshooting DVT script for service model - Dynamics 365 Finance & Operations Tier 1 Upgrade",description:"DVT script for service model",categories:["Troubleshooting"],tags:["DVT script","MROneBox","AOSService"],lightgallery:!0},s=void 0,a={id:"operation/tools/2021-12-21-Troubleshooting-DVT-script-for-service-model/index",title:"Troubleshooting DVT script for service model - Dynamics 365 Finance & Operations Tier 1 Upgrade",description:"DVT script for service model",source:"@site/docs/05-operation/01-tools/2021-12-21-Troubleshooting-DVT-script-for-service-model/index.md",sourceDirName:"05-operation/01-tools/2021-12-21-Troubleshooting-DVT-script-for-service-model",slug:"/operation/tools/2021-12-21-Troubleshooting-DVT-script-for-service-model/",permalink:"/docs/operation/tools/2021-12-21-Troubleshooting-DVT-script-for-service-model/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"DVT script",permalink:"/docs/tags/dvt-script"},{inline:!0,label:"MROneBox",permalink:"/docs/tags/mr-one-box"},{inline:!0,label:"AOSService",permalink:"/docs/tags/aos-service"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{date:"2021-12-21",lastmod:"2022-11-21",title:"Troubleshooting DVT script for service model - Dynamics 365 Finance & Operations Tier 1 Upgrade",description:"DVT script for service model",categories:["Troubleshooting"],tags:["DVT script","MROneBox","AOSService"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Windows keyboard shortcuts",permalink:"/docs/operation/tools/2021-11-05-windows-key-shortcuts/"},next:{title:"Unable to start trace, the required event providers were not found. Contact your system administrator",permalink:"/docs/operation/tools/2022-06-20-unable-to-trace-error/"}},l={},c=[{value:"1. DVT script for service model: AOSService on machine",id:"1-dvt-script-for-service-model-aosservice-on-machine",level:2},{value:"Solution",id:"solution",level:3},{value:"2. Step 73 - DVT script for service model: MROneBox on machine",id:"2-step-73---dvt-script-for-service-model-mronebox-on-machine",level:2},{value:"2.1 The error from <code>runbook</code>",id:"21-the-error-from-runbook",level:3},{value:"2.2 Event log error details",id:"22-event-log-error-details",level:3},{value:"2.3 Solution",id:"23-solution",level:3},{value:"If there are still errors, we need an extra step",id:"if-there-are-still-errors-we-need-an-extra-step",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"While doing upgrade to the latest version Dynamics 365 Finance & Operations on tier 1 environment, you might got some errors related to DVT auto scripts."}),"\n",(0,o.jsx)(n.h2,{id:"1-dvt-script-for-service-model-aosservice-on-machine",children:"1. DVT script for service model: AOSService on machine"}),"\n",(0,o.jsx)(n.p,{children:"An error at step 72"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Step>\n   <ID>72</ID>\n   <RunbookID>498de9aee46e403e9dcd97b40166775e</RunbookID>\n   <PackageId>dd4119e4331248d5a6ba9b987eef440d</PackageId>\n   <PackageType>PlatAppBinaryHotfixPackage</PackageType>\n   <CompletedManually>false</CompletedManually>\n   <Description>DVT script for service model: AOSService on machine: </Description>\n   <MachineName></MachineName>\n   <ServiceModelName>AOSService</ServiceModelName>\n   <ScriptToExecute>\n      <FileName>AutoRunDVT.ps1</FileName>\n      <Automated>true</Automated>\n      <Description>Run the AOS DVTs</Description>\n      <RetryCount>1</RetryCount>\n      <TimeoutValue>1</TimeoutValue>\n      <InvokeWithPowershellProcess>false</InvokeWithPowershellProcess>\n      <DoNotAutoResume>false</DoNotAutoResume>\n      <DynamicStepDefinition />\n   </ScriptToExecute>\n   <StepType>DVT</StepType>\n   <StepConcurrency>Multiple</StepConcurrency>\n   <ScriptExecutionOutput />\n</Step>\n'})}),"\n",(0,o.jsx)(n.p,{children:"Event log error details"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"System.Net.WebException: The underlying connection was closed: Could not establish trust relationship for the SSL/TLS secure channel. ---\x3e System.Security.Authentication.AuthenticationException: The remote certificate is invalid according to the validation procedure."})}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsxs)(n.p,{children:["You need to abort the current process in LCS because this option will only show for environments in the ",(0,o.jsx)(n.strong,{children:"Deployed"}),' state, then do "Rotate the SSL certificates"']}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["On the Environment details page, click ",(0,o.jsx)(n.code,{children:"Maintain > Rotate secrets"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Select Rotate the SSL certificates and confirm that you want to perform this action."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"rorate-ssl",src:t(26742).A+"",title:"rorate-ssl",width:"368",height:"310"})}),"\n",(0,o.jsx)(n.h2,{id:"2-step-73---dvt-script-for-service-model-mronebox-on-machine",children:"2. Step 73 - DVT script for service model: MROneBox on machine"}),"\n",(0,o.jsxs)(n.h3,{id:"21-the-error-from-runbook",children:["2.1 The error from ",(0,o.jsx)(n.code,{children:"runbook"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<Step>\n   <ID>73</ID>\n   <RunbookID>498de9aee46e403e9dcd97b40166775e</RunbookID>\n   <PackageId>dd4119e4331248d5a6ba9b987eef440d</PackageId>\n   <PackageType>PlatAppBinaryHotfixPackage</PackageType>\n   <CompletedManually>false</CompletedManually>\n   <Description>DVT script for service model: MROneBox on machine: </Description>\n   <MachineName></MachineName>\n   <ServiceModelName>MROneBox</ServiceModelName>\n   <ScriptToExecute>\n      <FileName>AutoRunDVT.ps1</FileName>\n      <Automated>true</Automated>\n      <Description>Run the AOS DVTs</Description>\n      <RetryCount>1</RetryCount>\n      <TimeoutValue>1</TimeoutValue>\n      <InvokeWithPowershellProcess>false</InvokeWithPowershellProcess>\n      <DoNotAutoResume>false</DoNotAutoResume>\n      <DynamicStepDefinition />\n   </ScriptToExecute>\n   <StepType>DVT</StepType>\n   <StepConcurrency>Multiple</StepConcurrency>\n   <ScriptExecutionOutput />\n</Step>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"22-event-log-error-details",children:"2.2 Event log error details"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Exception : System.Management.Automation.RemoteException: An error was encountered while updating the Financial Reporting components.\nTargetObject : An error was encountered while updating the Financial Reporting components."})}),"\n",(0,o.jsx)(n.h3,{id:"23-solution",children:"2.3 Solution"}),"\n",(0,o.jsxs)(n.p,{children:["To resolve this, we will need to reset ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/analytics/reset-financial-reporting-datamart-after-restore#reset-the-financial-reporting-data-mart-through-windows-powershell",children:"financial reporting data mart"}),", following the steps"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Stops AX services"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"World wide web publishing service (on all Application Object Servers [AOS] computers)"}),"\n",(0,o.jsx)(n.li,{children:"Batch Management Service (on non-private AOS computers only)"}),"\n",(0,o.jsx)(n.li,{children:"Management Reporter 2012 Process Service (on Business intelligence [BI] computers only)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["We can use command line too\n",(0,o.jsx)(n.code,{children:'NET STOP "MR2012ProcessService"'})]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Open PowerShell and execute the following script, this will execute reset datamart"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:'cd K:\\MROneBox\\MRInstallDirectory\\Server\\MRDeploy\\\nImport-Module .\\MRDeploy.psd1\nReset-DatamartIntegration -Reason OTHER -ReasonDetail "<reason for resetting>" -SkipMRTableReset\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:'To ensure that old data isn\'t inserted, a data mart reset can be started only after existing tasks are completed. If you try to reset the data mart before all tasks are completed, you might receive a message such as, "The data mart reset was unable to be processed because of an active task. Please try again later."'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["After reset datamart, we need to execute the step 73 again, find the latest deployable package applied to the environment. It will be under folder ",(0,o.jsx)(n.code,{children:"<ServiceVolue>:\\DeployablePackages\\<PackageGUID>\\MROneBox\\Scripts\\Update"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Execute ",(0,o.jsx)(n.code,{children:"AutoRunDVT.ps1"})," in Powershell"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ps",children:".\\AutoRunDVT.ps1\n"})}),"\n",(0,o.jsx)(n.p,{children:"If it can be executed without error, you can go ahead and resume the deployment in LCS."}),"\n",(0,o.jsx)(n.h3,{id:"if-there-are-still-errors-we-need-an-extra-step",children:"If there are still errors, we need an extra step"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Find the DVT execution script: ",(0,o.jsx)(n.code,{children:"<ServiceVolue>:\\DeployablePackages\\<PackageGUID>\\MROneBox\\scripts\\Update\\AutoRunDVT.ps1"})]}),"\n",(0,o.jsx)(n.li,{children:"Make a copy of the file"}),"\n",(0,o.jsxs)(n.li,{children:["Clear all contents ",(0,o.jsx)(n.code,{children:"AutoRunDVT.ps1"})," and save"]}),"\n",(0,o.jsx)(n.li,{children:"Resume the deployment from LCS."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},26742:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/rorate-ssl-670b84cca576ab41c3a82de1e0c0f4b7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);