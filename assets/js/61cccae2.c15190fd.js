"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[2919],{15224:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(74848),i=o(28453);const a={date:new Date("2020-06-30T00:00:00.000Z"),title:"How to upgrade to Visual Studio 2017, .NET 4.7.2 for PU36/10.0.12 and higher",tags:["Visual Studio 2017",".NET 4.7.2","PU36","app 10.0.12"],lightgallery:!0,categories:["FinOps","Onebox"]},r=void 0,l={id:"operation/tools/2020-06-30-How-to-upgrade-to-Visual-Studio-2017,-.NET-4.7.2/index",title:"How to upgrade to Visual Studio 2017, .NET 4.7.2 for PU36/10.0.12 and higher",description:"For the upcoming Dynamics 365 Finance Updates, Visual Studio 2017 and .NET runtime 4.7.2 required for PU36/10.0.12 or higher; New VMs deployed with PU36/10.0.12 or higher will have Visual Studio 2017 as well as .NET runtime 4.7.2 already installed.",source:"@site/docs/05-operation/01-tools/2020-06-30-How-to-upgrade-to-Visual-Studio-2017,-.NET-4.7.2/index.md",sourceDirName:"05-operation/01-tools/2020-06-30-How-to-upgrade-to-Visual-Studio-2017,-.NET-4.7.2",slug:"/operation/tools/2020-06-30-How-to-upgrade-to-Visual-Studio-2017,-.NET-4.7.2/",permalink:"/operation/tools/2020-06-30-How-to-upgrade-to-Visual-Studio-2017,-.NET-4.7.2/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Visual Studio 2017",permalink:"/tags/visual-studio-2017"},{inline:!0,label:".NET 4.7.2",permalink:"/tags/net-4-7-2"},{inline:!0,label:"PU36",permalink:"/tags/pu-36"},{inline:!0,label:"app 10.0.12",permalink:"/tags/app-10-0-12"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{date:"2020-06-30T00:00:00.000Z",title:"How to upgrade to Visual Studio 2017, .NET 4.7.2 for PU36/10.0.12 and higher",tags:["Visual Studio 2017",".NET 4.7.2","PU36","app 10.0.12"],lightgallery:!0,categories:["FinOps","Onebox"]},sidebar:"tutorialSidebar",previous:{title:"Technical reference - Data entity - Dynamics 365 finance and operations",permalink:"/operation/tools/2019-09-28-technical-referece-report-data-entites-d365/"},next:{title:"How To d365fo.tools",permalink:"/operation/tools/2020-07-14-d365fo.tools/"}},s={},d=[{value:"1. Download VS Professional 2017 15.9 here and install it",id:"1-download-vs-professional-2017-159-here-and-install-it",level:3},{value:"2. The .NET runtime download is available here by clicking on the <em>Download .NET Framework 4.7.2 Runtime</em> and running the installation, restart required.",id:"2-the-net-runtime-download-is-available-here-by-clicking-on-the-download-net-framework-472-runtime-and-running-the-installation-restart-required",level:3},{value:"3. Go to Dynamics Lifecycle Services and download PU36/10.0.12 or any higher package which is a part of the Platform and application binary, the VSIX file is located in the <em>DevToolsService\\Scripts</em> folder.",id:"3-go-to-dynamics-lifecycle-services-and-download-pu3610012-or-any-higher-package-which-is-a-part-of-the-platform-and-application-binary-the-vsix-file-is-located-in-the-devtoolsservicescripts-folder",level:3},{value:"4. If you try to access the client before applying the package you will get the error like below in event viewer and unable to access the environment, so you need to apply an update first.",id:"4-if-you-try-to-access-the-client-before-applying-the-package-you-will-get-the-error-like-below-in-event-viewer-and-unable-to-access-the-environment-so-you-need-to-apply-an-update-first",level:3},{value:"5. In LCS, navigate to your cloud-hosted environment, and apply Platform and application binary package PU36/10.0.12 or higher. After completed upgrading, you will be able to access the environment client.",id:"5-in-lcs-navigate-to-your-cloud-hosted-environment-and-apply-platform-and-application-binary-package-pu3610012-or-higher-after-completed-upgrading-you-will-be-able-to-access-the-environment-client",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"For the upcoming Dynamics 365 Finance Updates, Visual Studio 2017 and .NET runtime 4.7.2 required for PU36/10.0.12 or higher; New VMs deployed with PU36/10.0.12 or higher will have Visual Studio 2017 as well as .NET runtime 4.7.2 already installed."}),"\n",(0,n.jsx)(t.p,{children:"For your dev/test/build Tier1 VMs, Microsoft recommends just redeploying a new VM, and you will be all set!"}),"\n",(0,n.jsxs)(t.p,{children:["If you cannot deploy new VMs, please follow below steps to update .NET runtime, VS 2017 before installing PU36/10.0.12 or higher, this will be applied for ",(0,n.jsx)(t.strong,{children:"cloud-hosted environment"})]}),"\n",(0,n.jsxs)(t.h3,{id:"1-download-vs-professional-2017-159-here-and-install-it",children:["1. Download VS Professional 2017 15.9 ",(0,n.jsx)(t.a,{href:"https://download.visualstudio.microsoft.com/download/pr/ac05c4f5-0da1-429f-8701-ce509ac69926/7b51a7b8db36f977745cf3e19ef1e9c62ebf29f704aebafce443626b779cb4f8/vs_Professional.exe",children:"here"})," and install it"]}),"\n",(0,n.jsxs)(t.h3,{id:"2-the-net-runtime-download-is-available-here-by-clicking-on-the-download-net-framework-472-runtime-and-running-the-installation-restart-required",children:["2. The .NET runtime download is available ",(0,n.jsx)(t.a,{href:"https://dotnet.microsoft.com/download/dotnet-framework/net472",children:"here"})," by clicking on the ",(0,n.jsx)(t.em,{children:"Download .NET Framework 4.7.2 Runtime"})," and running the installation, restart required."]}),"\n",(0,n.jsxs)(t.h3,{id:"3-go-to-dynamics-lifecycle-services-and-download-pu3610012-or-any-higher-package-which-is-a-part-of-the-platform-and-application-binary-the-vsix-file-is-located-in-the-devtoolsservicescripts-folder",children:["3. Go to Dynamics Lifecycle Services and download PU36/10.0.12 or any higher package which is a part of the Platform and application binary, the VSIX file is located in the ",(0,n.jsx)(t.em,{children:"DevToolsService\\Scripts"})," folder."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image",src:o(41320).A+"",width:"1124",height:"576"})}),"\n",(0,n.jsxs)(t.p,{children:["You need to ",(0,n.jsx)(t.code,{children:"install Microsoft.Dynamics.Framework.Tools.Installer"})," and then ",(0,n.jsx)(t.code,{children:"Microsoft.Dynamics.Framework.Tools.InternalDevTools"}),".\r\nAfter the installation, open the VS2017 if you should see ",(0,n.jsx)(t.strong,{children:"Dynamics 365"})," menu extension like below"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Image",src:o(94531).A+"",width:"740",height:"497"})}),"\n",(0,n.jsx)(t.h3,{id:"4-if-you-try-to-access-the-client-before-applying-the-package-you-will-get-the-error-like-below-in-event-viewer-and-unable-to-access-the-environment-so-you-need-to-apply-an-update-first",children:"4. If you try to access the client before applying the package you will get the error like below in event viewer and unable to access the environment, so you need to apply an update first."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"AX is shutting down due to an error. Serialization version mismatch detect, make sure the runtime dlls are in sync with the deployed metadata. Version of file '194'. Version of dll '193'."})}),"\n",(0,n.jsx)(t.h3,{id:"5-in-lcs-navigate-to-your-cloud-hosted-environment-and-apply-platform-and-application-binary-package-pu3610012-or-higher-after-completed-upgrading-you-will-be-able-to-access-the-environment-client",children:"5. In LCS, navigate to your cloud-hosted environment, and apply Platform and application binary package PU36/10.0.12 or higher. After completed upgrading, you will be able to access the environment client."}),"\n",(0,n.jsx)(t.p,{children:"Overall, there is no change in the compiler, metadata; this is only an update to the Visual Studio extensions and NET runtime for the tier1 VMs."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},41320:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/How-to-upgrade-to-Visual-Studio-2017-1-88fe16de06ddcaf84957fd840b198f07.png"},94531:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/How-to-upgrade-to-Visual-Studio-2017-2-e40d19da021c65b6adf5be1af4ef5e22.png"},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>l});var n=o(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);