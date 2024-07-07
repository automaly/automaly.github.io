"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[6742],{37518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(74848),r=n(28453);const a={date:"2023-12-26",title:"Set default model for Dynamics 365 Finance Operations project",categories:["X++","Development tools"],tags:["Development tools"],authors:"max"},s=void 0,i={permalink:"/blog/2023/12/26/set-default-model-for-d365-project",source:"@site/blog/2023-12-26-set-default-model-for-d365-project.mdx",title:"Set default model for Dynamics 365 Finance Operations project",description:"Open Run",date:"2023-12-26T00:00:00.000Z",tags:[{inline:!0,label:"Development tools",permalink:"/blog/tags/development-tools"}],readingTime:.18333333333333332,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max"}],frontMatter:{date:"2023-12-26",title:"Set default model for Dynamics 365 Finance Operations project",categories:["X++","Development tools"],tags:["Development tools"],authors:"max"},unlisted:!1,prevItem:{title:"No data is inserted/modified in temporary table when processing an SRS report using Pre-process",permalink:"/blog/2024/01/04/NoDataInTmpTableForPreProcessReport"},nextItem:{title:"How to hide New and Delete buttons (command buttons) in form",permalink:"/blog/2023/12/21/How-to-hide-New-and-Delete-buttons-in-form-1"}},l={authorsImageUrls:[void 0]},c=[];function m(e){const t={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Open ",(0,o.jsx)(t.strong,{children:"Run"})]}),"\n",(0,o.jsxs)(t.p,{children:["VS2017 and prior ",(0,o.jsx)(t.code,{children:"%UserProfile%/Documents/Visual Studio 2015\\settings\\"})]}),"\n",(0,o.jsxs)(t.p,{children:["VS2019 and later ",(0,o.jsx)(t.code,{children:"%UserProfile%/Documents/Visual Studio Dynamics 365"})]}),"\n",(0,o.jsxs)(t.p,{children:["Open ",(0,o.jsx)(t.code,{children:"DynamicsDevConfig.XML"}),", change the default model in ",(0,o.jsx)(t.code,{children:"DefaultModelForNewProjects"})," property"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-XML",metastring:'showLineNumbers title="DynamicsDevConfig.XML"',children:'<?xml version="1.0" encoding="utf-8"?>\r\n<DynamicsDevConfig xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.microsoft.com/dynamics/2012/03/development/configuration">\r\n\t<AddInPaths xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays">\r\n\t\t<d2p1:string>T:\\Bin\\AddInExtensions</d2p1:string>\r\n\t........\r\n\t<DBSyncInBuild>true</DBSyncInBuild>\r\n\t<DatabaseServer>localhost</DatabaseServer>\r\n\t<DefaultCompany></DefaultCompany>\r\n    // highlight-next-line\r\n\t<DefaultModelForNewProjects>FleetManagement</DefaultModelForNewProjects>\r\n\t<DefaultWebBrowser>Google Chrome</DefaultWebBrowser>\r\n\t<DisableBPCheck>false</DisableBPCheck>\r\n\t<DisableFormStaticCompile>false</DisableFormStaticCompile>\r\n\t<EmitTraceEvents>true</EmitTraceEvents>\r\n\t<EnableNativeDebugging>false</EnableNativeDebugging>\r\n\t<EnableOfflineAuthentication>true</EnableOfflineAuthentication>\r\n\t<EnableSymbolLoadingForSolutionOnly>true</EnableSymbolLoadingForSolutionOnly>\r\n\t<FallbackToNativeSync>false</FallbackToNativeSync>\r\n\t.......\r\n</DynamicsDevConfig>\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);