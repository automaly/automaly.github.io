"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[5667],{88097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var i=r(85893),s=r(11151);const n={sidebar_position:1},o="Document Reporting Services",a={id:"development/business-docs/ssrs/index",title:"Document Reporting Services",description:"Organizations have a lot of data. When an organization grows, its ability to provide context for all that data becomes increasingly crucial. Reports can organize data in a meaningful way. finance and operations apps include reporting tools to help you create reports for your organizations, SQL Server Reporting Services (SSRS), Microsoft Power BI, and Microsoft Excel reports. You can use these reporting tools to visualize a data set in many ways, including as a tabular layout with collapsible tables and by using dashboards. Throughout this module, you will build a foundation to design, create, and modify reports.",source:"@site/docs/03-development/02-business-docs/01-ssrs/index.md",sourceDirName:"03-development/02-business-docs/01-ssrs",slug:"/development/business-docs/ssrs/",permalink:"/docs/development/business-docs/ssrs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Business documents",permalink:"/docs/category/business-documents"},next:{title:"Expressions or Functions used in SSRS",permalink:"/docs/development/business-docs/ssrs/2016-10-07-ssrs-sql-server-reporting-services-expressions-or-functions-used-in-ssrs/"}},d={},l=[{value:"Document Reporting Services",id:"document-reporting-services-1",level:2},{value:"Service deployment \u2013 Local vs. cloud",id:"service-deployment--local-vs-cloud",level:3},{value:"Viewing reports",id:"viewing-reports",level:3},{value:"Service administration prerequisites",id:"service-administration-prerequisites",level:2},{value:"Developing application reports",id:"developing-application-reports",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"document-reporting-services",children:"Document Reporting Services"}),"\n",(0,i.jsx)(t.p,{children:"Organizations have a lot of data. When an organization grows, its ability to provide context for all that data becomes increasingly crucial. Reports can organize data in a meaningful way. finance and operations apps include reporting tools to help you create reports for your organizations, SQL Server Reporting Services (SSRS), Microsoft Power BI, and Microsoft Excel reports. You can use these reporting tools to visualize a data set in many ways, including as a tabular layout with collapsible tables and by using dashboards. Throughout this module, you will build a foundation to design, create, and modify reports."}),"\n",(0,i.jsx)(t.p,{children:"This article describes the integrated reporting solution that are available. This solution simplifies service administration, increases developer productivity, and provides an enhanced report viewing experience for users."}),"\n",(0,i.jsx)(t.h2,{id:"document-reporting-services-1",children:"Document Reporting Services"}),"\n",(0,i.jsx)(t.p,{children:"Document Reporting Services are based on Microsoft SQL Server Reporting Services (SSRS). In the current version of the application, these services are hosted in the Microsoft Azure Compute service. If you're developing in a one-box environment, the services also run locally in the Azure Compute Emulator."}),"\n",(0,i.jsx)(t.h3,{id:"service-deployment--local-vs-cloud",children:"Service deployment \u2013 Local vs. cloud"}),"\n",(0,i.jsx)(t.p,{children:"In a one-box environment, developers can create, modify, and preview reports, from end to end, by using Microsoft Visual Studio. A separate process isn't required in order to add reports to the application's metadata store. Changes to reports are packaged together with other solution updates and then deployed to the cloud after development is completed in the local environment."}),"\n",(0,i.jsx)(t.h3,{id:"viewing-reports",children:"Viewing reports"}),"\n",(0,i.jsx)(t.p,{children:"The enhanced report viewing experience that provides for end users is the same as the report preview experience in Microsoft Visual Studio. You no longer use a separate design preview in Visual Studio. Instead, just press Ctrl+F5 to build and preview the report in an Internet Explorer window. The report appears exactly as it would appear in the client. Even the user's parameter experience is the same. The following image shows an example of a report preview that is opened from Visual Studio."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{target:"_blank",href:r(61388).Z+"",children:(0,i.jsx)(t.img,{alt:"Example of a report preview.",src:r(81173).Z+"",width:"929",height:"1040"})})}),"\n",(0,i.jsx)(t.h2,{id:"service-administration-prerequisites",children:"Service administration prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"The following table compares the service administration prerequisites for Microsoft Dynamics AX 2012 and the current version of the application."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"AX 2012"}),(0,i.jsx)(t.th,{children:"The current version of the application"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["A report development environment has the following prerequisites:",(0,i.jsx)("br",{}),"* SSRS must be installed.",(0,i.jsx)("br",{}),"* SSRS must be configured by using Reporting Services Configuration Manager.",(0,i.jsx)("br",{}),"* SSRS extensions for the application must be installed.",(0,i.jsx)("br",{})]}),(0,i.jsx)(t.td,{children:"Reporting services run in the Azure compute emulator, together with the application server. Therefore, there are no SSRS service administration prerequisites. After reports have been deployed to the local reporting services, they can be accessed from the client."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"developing-application-reports",children:"Developing application reports"}),"\n",(0,i.jsx)(t.p,{children:"The process for developing a report in the current version is easier than it is in AX 2012, because you can create and validate a reporting solution entirely in Visual Studio. The following table describes how the application simplifies the basic procedure for adding an automatic design report that is based on a query."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"AX 2012"}),(0,i.jsx)(t.th,{children:"The current version of the application"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1. In the application, create a query in the Application Object Tree (AOT)."}),(0,i.jsx)(t.td,{children:"1. In Visual Studio, create a reporting project and the query."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2. In Visual Studio, create a reporting project, and add the query to it."}),(0,i.jsx)(t.td,{children:"2. Edit the report in Visual Studio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3. Edit the report in the Visual Studio model editor."}),(0,i.jsx)(t.td,{children:"3. In Visual Studio, add the report to a menu item, and set the menu item as a startup object."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4. Preview the report design in Visual Studio by using the model editor toolbar."}),(0,i.jsx)(t.td,{children:"4. Use the AOT to deploy the report to the report server."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5. Use Visual Studio to add the report to the AOT."}),(0,i.jsx)(t.td,{children:"5. Press Ctrl+F5 to verify the report in the application.\xa0NOTE:\xa0There is no longer a separate preview of the report design from the model editor."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"6. Use the AOT in the client to create a menu item for the report, and add the menu item to a menu."}),(0,i.jsx)(t.td,{children:"6. When the whole solution is completed, deploy it to the cloud in one package."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"7. Use the AOT to deploy the report to the report server."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"8. Verify the report in the client."}),(0,i.jsx)(t.td,{})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},61388:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/files/2_report-706c2898b021492ac3dcfd3d29bb89be.png"},81173:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/2_report-706c2898b021492ac3dcfd3d29bb89be.png"},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var i=r(67294);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);