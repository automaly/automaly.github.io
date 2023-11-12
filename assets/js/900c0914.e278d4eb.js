"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[3039],{26359:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(85893),n=s(11151);const o={date:"2022-10-20",title:"How to remove SSRS reports in FinOps Cloud-Hosted",categories:["SSRS"],tags:["SSRS"],lightgallery:!0},i=void 0,a={id:"development/business-docs/2022-10-20-how-to-remove-ssrs-reports-in-d365/index",title:"How to remove SSRS reports in FinOps Cloud-Hosted",description:"There are 2 ways that you can delete SSRS reports in FinOps cloud-Hosted",source:"@site/docs/03-development/02-business-docs/2022-10-20-how-to-remove-ssrs-reports-in-d365/index.md",sourceDirName:"03-development/02-business-docs/2022-10-20-how-to-remove-ssrs-reports-in-d365",slug:"/development/business-docs/2022-10-20-how-to-remove-ssrs-reports-in-d365/",permalink:"/development/business-docs/2022-10-20-how-to-remove-ssrs-reports-in-d365/",draft:!1,unlisted:!1,tags:[{label:"SSRS",permalink:"/tags/ssrs"}],version:"current",frontMatter:{date:"2022-10-20",title:"How to remove SSRS reports in FinOps Cloud-Hosted",categories:["SSRS"],tags:["SSRS"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Deploy SSRS reports in Dynamics 365 Finance, SCM using Powershell",permalink:"/development/business-docs/2021-01-27-Deploy-SSRS-reports-in-Dynamics-365-Finance,-SCM-using-Powershell/"},next:{title:"AOT",permalink:"/category/aot"}},l={},c=[{value:"1. Using Report server configuiration manager web portal",id:"1-using-report-server-configuiration-manager-web-portal",level:2},{value:"2. Using Powershell script",id:"2-using-powershell-script",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"There are 2 ways that you can delete SSRS reports in FinOps cloud-Hosted"}),"\n",(0,t.jsx)(r.h2,{id:"1-using-report-server-configuiration-manager-web-portal",children:"1. Using Report server configuiration manager web portal"}),"\n",(0,t.jsxs)(r.p,{children:["Open Report server configuiration manager from your VM FinOps Cloud-Hosted and active the ",(0,t.jsx)(r.strong,{children:"Web Portal"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Image",src:s(74252).Z+"",title:"2022-10-20-how-to-remove-ssrs-reports-in-d365-1",width:"990",height:"636"})}),"\n",(0,t.jsxs)(r.p,{children:["You can delete any report from ",(0,t.jsx)(r.code,{children:"[Servername]/Reports/browse/Dynamics"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Image",src:s(75592).Z+"",title:"2022-10-20-how-to-remove-ssrs-reports-in-d365-3",width:"820",height:"629"})}),"\n",(0,t.jsx)(r.h2,{id:"2-using-powershell-script",children:"2. Using Powershell script"}),"\n",(0,t.jsxs)(r.p,{children:["Go to ",(0,t.jsx)(r.code,{children:"RemoveAllReportsFromSsrs.ps1"})," under ",(0,t.jsx)(r.code,{children:"K:\\AosService\\PackagesLocalDirectory\\Plugins\\AxReportVmRoleStartupTask"})]}),"\n",(0,t.jsx)(r.p,{children:"Run the script to remove all SSRS report."}),"\n",(0,t.jsx)(r.p,{children:"If you want to remove a specific report, you can manipulate the $ReportName"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-powershell",children:'################################################################################\r\n# This script is used to manually remove reports to SSRS server\r\n################################################################################\r\nparam\r\n(\r\n    [Parameter(Mandatory=$false)]\r\n    [string]$LogFilePath,\r\n    [Alias("ReportServerFqdn", "ReportServerName")]\r\n    [Parameter(Mandatory=$false)]\r\n    [string[]]$ReportServerIp = "127.0.0.1",\r\n    [Parameter(Mandatory=$false)]\r\n\t[string[]]$ReportName = "[report-name].[design-name]",\r\n    [Parameter(Mandatory=$false)]\r\n\t[switch]$UseHttps = $false,\r\n    [Parameter(Mandatory=$false)]\r\n\t[int]$HttpsPort = 443,\r\n    [Parameter(Mandatory=$false)]\r\n    [switch]$Help = $false\r\n)\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Check ",(0,t.jsx)(r.a,{href:"/2021-01-27-deploy-ssrs-reports-in-dynamics-365-finance-scm-using-powershell/",children:"this article"})," for deploy report using PS script."]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},74252:(e,r,s)=>{s.d(r,{Z:()=>t});const t=s.p+"assets/images/2022-10-20-how-to-remove-ssrs-reports-in-d365-1-4dc5eb3d02e553830e2e342ff8e5838d.png"},75592:(e,r,s)=>{s.d(r,{Z:()=>t});const t=s.p+"assets/images/2022-10-20-how-to-remove-ssrs-reports-in-d365-3-8c8ee8cd3276f0290e458c7653763fa3.png"},11151:(e,r,s)=>{s.d(r,{Z:()=>a,a:()=>i});var t=s(67294);const n={},o=t.createContext(n);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);