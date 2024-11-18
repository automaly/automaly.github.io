"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[9680],{43600:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var t=r(74848),n=r(28453);const o={date:"2022-10-20",title:"How to remove SSRS reports in FinOps Cloud-Hosted",categories:["SSRS"],tags:["SSRS"],lightgallery:!0},i=void 0,a={id:"development/business-docs/ssrs/2022-10-20-how-to-remove-ssrs-reports-in-d365/index",title:"How to remove SSRS reports in FinOps Cloud-Hosted",description:"There are 2 ways that you can delete SSRS reports in FinOps cloud-Hosted",source:"@site/docs/03-development/02-business-docs/01-ssrs/2022-10-20-how-to-remove-ssrs-reports-in-d365/index.md",sourceDirName:"03-development/02-business-docs/01-ssrs/2022-10-20-how-to-remove-ssrs-reports-in-d365",slug:"/development/business-docs/ssrs/2022-10-20-how-to-remove-ssrs-reports-in-d365/",permalink:"/docs/development/business-docs/ssrs/2022-10-20-how-to-remove-ssrs-reports-in-d365/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"SSRS",permalink:"/docs/tags/ssrs"}],version:"current",lastUpdatedBy:"Max Nguyen",lastUpdatedAt:1726374706e3,frontMatter:{date:"2022-10-20",title:"How to remove SSRS reports in FinOps Cloud-Hosted",categories:["SSRS"],tags:["SSRS"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Deploy SSRS reports in Dynamics 365 Finance, SCM using Powershell",permalink:"/docs/development/business-docs/ssrs/2021-01-27-Deploy-SSRS-reports-in-Dynamics-365-Finance,-SCM-using-Powershell/"},next:{title:"Create parameters, manipulate query for SSRS type query",permalink:"/docs/development/business-docs/ssrs/2023-12-25-Create-parameters,-manipulate-query-for-SSRS-type-query/"}},l={},p=[{value:"1. Using Report server configuiration manager web portal",id:"1-using-report-server-configuiration-manager-web-portal",level:2},{value:"2. Using Powershell script",id:"2-using-powershell-script",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"There are 2 ways that you can delete SSRS reports in FinOps cloud-Hosted"}),"\n",(0,t.jsx)(s.h2,{id:"1-using-report-server-configuiration-manager-web-portal",children:"1. Using Report server configuiration manager web portal"}),"\n",(0,t.jsxs)(s.p,{children:["Open Report server configuiration manager from your VM FinOps Cloud-Hosted and active the ",(0,t.jsx)(s.strong,{children:"Web Portal"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:r(53495).A+"",title:"2022-10-20-how-to-remove-ssrs-reports-in-d365-1",width:"990",height:"636"})}),"\n",(0,t.jsxs)(s.p,{children:["You can delete any report from ",(0,t.jsx)(s.code,{children:"[Servername]/Reports/browse/Dynamics"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Image",src:r(81829).A+"",title:"2022-10-20-how-to-remove-ssrs-reports-in-d365-3",width:"820",height:"629"})}),"\n",(0,t.jsx)(s.h2,{id:"2-using-powershell-script",children:"2. Using Powershell script"}),"\n",(0,t.jsxs)(s.p,{children:["Go to ",(0,t.jsx)(s.code,{children:"RemoveAllReportsFromSsrs.ps1"})," under ",(0,t.jsx)(s.code,{children:"K:\\AosService\\PackagesLocalDirectory\\Plugins\\AxReportVmRoleStartupTask"})]}),"\n",(0,t.jsx)(s.p,{children:"Run the script to remove all SSRS report."}),"\n",(0,t.jsx)(s.p,{children:"If you want to remove a specific report, you can manipulate the $ReportName"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-powershell",children:'################################################################################\n# This script is used to manually remove reports to SSRS server\n################################################################################\nparam\n(\n    [Parameter(Mandatory=$false)]\n    [string]$LogFilePath,\n    [Alias("ReportServerFqdn", "ReportServerName")]\n    [Parameter(Mandatory=$false)]\n    [string[]]$ReportServerIp = "127.0.0.1",\n    [Parameter(Mandatory=$false)]\n\t[string[]]$ReportName = "[report-name].[design-name]",\n    [Parameter(Mandatory=$false)]\n\t[switch]$UseHttps = $false,\n    [Parameter(Mandatory=$false)]\n\t[int]$HttpsPort = 443,\n    [Parameter(Mandatory=$false)]\n    [switch]$Help = $false\n)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Check ",(0,t.jsx)(s.a,{href:"/docs/development/business-docs/ssrs/2021-01-27-Deploy-SSRS-reports-in-Dynamics-365-Finance,-SCM-using-Powershell/",children:"this article"})," for deploy report using PS script."]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},53495:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/2022-10-20-how-to-remove-ssrs-reports-in-d365-1-4dc5eb3d02e553830e2e342ff8e5838d.png"},81829:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/2022-10-20-how-to-remove-ssrs-reports-in-d365-3-8c8ee8cd3276f0290e458c7653763fa3.png"},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>a});var t=r(96540);const n={},o=t.createContext(n);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);