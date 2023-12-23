"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[9729],{25887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(85893),o=t(11151);const i={date:"2022-10-27",title:"How to get FinOps Azure storage blob connection string",categories:["Integration","Azure"],tags:["Azure storage connection string"],lightgallery:!0},s=void 0,a={id:"development/xpp-sample/2022-10-27-how-to-get-d365-azure-blob-storage-str/index",title:"How to get FinOps Azure storage blob connection string",description:"In Dynamics 365 for Finance and Operations Azure storage is used to",source:"@site/docs/03-development/01-xpp-sample/2022-10-27-how-to-get-d365-azure-blob-storage-str/index.md",sourceDirName:"03-development/01-xpp-sample/2022-10-27-how-to-get-d365-azure-blob-storage-str",slug:"/development/xpp-sample/2022-10-27-how-to-get-d365-azure-blob-storage-str/",permalink:"/docs/development/xpp-sample/2022-10-27-how-to-get-d365-azure-blob-storage-str/",draft:!1,unlisted:!1,tags:[{label:"Azure storage connection string",permalink:"/docs/tags/azure-storage-connection-string"}],version:"current",frontMatter:{date:"2022-10-27",title:"How to get FinOps Azure storage blob connection string",categories:["Integration","Azure"],tags:["Azure storage connection string"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Create Purchase Orders - Confirm - Product receipt - Post using X++ in Dynamics 365 Finance & Operations",permalink:"/docs/development/xpp-sample/2020-01-25-create-po-confirm-receipt-post/"},next:{title:"Disable editing of specific financial dimensions on form",permalink:"/docs/development/xpp-sample/2022-10-28-Disable-editing-of-specific-financial-dimensions-on-form/"}},c={},p=[];function l(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In Dynamics 365 for Finance and Operations Azure storage is used to"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Store files for ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/organization-administration/configure-document-management",children:"Attachments"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/data-import-export-job",children:"Data import and export jobs"})}),"\n",(0,r.jsxs)(n.li,{children:["When FinOps prints a report via ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/analytics/document-reporting-services?context=%2Fdynamics365%2Fcontext%2Fcommerce",children:"Document Reporting Services"}),", SSRS Reporting Services generates an ",(0,r.jsx)(n.a,{href:"https://ax.docentric.com/printing-reports-with-custom-fonts-in-dynamics-365-for-finance-and-operations/",children:"EMF image"})," for each page of the generated document. FinOps then temporarily saves the generated EMF files to Azure Blob storage."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dynamicsax-2012/appuser-itpro/print-a-report-from-the-archive",children:"Printing archive"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"And more!"}),"\n",(0,r.jsx)(n.p,{children:"If you are using tier 1 Cloud-Hosted environment, you can find the azure storage from the Azure resource group in Azure portal."}),"\n",(0,r.jsx)(n.p,{children:"For tier 1, UAT tier 2, and PROD Tier 3, you can create a runnable class and execute to get the Azure storage connection string."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:"using Microsoft.Dynamics.Clx.ServicesWrapper;\r\nclass GetAzureBlob\r\n{\r\n    public static void main(Args _args)\r\n    {\r\n        info('AzureStorageConnectionString = ' + CloudInfrastructure::GetCsuStorageConnectionString());\r\n        info('ClientCertificateThumbprint = ' + CloudInfrastructure::GetCsuClientCertificateThumbprint());\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once you have the connection string, you can connect it to ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/vs-azure-tools-storage-manage-with-storage-explorer?tabs=windows",children:"MS Azure Storage Explorer"}),", Power Automate, or consuming in any framwork/language for integration/backup purposes."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);