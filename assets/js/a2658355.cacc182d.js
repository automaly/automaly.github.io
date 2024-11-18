"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[5820],{97914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(74848),o=t(28453);const i={date:new Date("2020-05-10T00:00:00.000Z"),title:"Database Sync after data type on field has been changed",tags:["DB sync","Dynamics 365 finance and operations","InvalidOperationException"],categories:["FinOps","Troubleshooting","Database"],lightgallery:!0},r=void 0,s={id:"operation/troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed/index",title:"Database Sync after data type on field has been changed",description:"You will got an error like this when doing Database Synchronization after changing the data type of the field on the table:",source:"@site/docs/05-operation/03-troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed/index.md",sourceDirName:"05-operation/03-troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed",slug:"/operation/troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed/",permalink:"/docs/operation/troubleshooting/2020-05-10-Database-Sync-after-data-type-on-field-has-been-changed/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"DB sync",permalink:"/docs/tags/db-sync"},{inline:!0,label:"Dynamics 365 finance and operations",permalink:"/docs/tags/dynamics-365-finance-and-operations"},{inline:!0,label:"InvalidOperationException",permalink:"/docs/tags/invalid-operation-exception"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{date:"2020-05-10T00:00:00.000Z",title:"Database Sync after data type on field has been changed",tags:["DB sync","Dynamics 365 finance and operations","InvalidOperationException"],categories:["FinOps","Troubleshooting","Database"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Azure Storage Emulator 'Port conflict with existing application', Dynamics 365 finance and operations",permalink:"/docs/operation/troubleshooting/2020-04-05-azure-storage-emulator-port-conflict-with-existing-application/"},next:{title:"A good example of Trace Parser, Visual Studio and Excel",permalink:"/docs/operation/troubleshooting/2020-06-30-A-good-example-of-Trace-Parser,-Visual-Studio-and-Excel/"}},l={},d=[];function c(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"You will got an error like this when doing Database Synchronization after changing the data type of the field on the table:"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"InvalidOperationException: Table ... : Converting Field '..' of Type '..' to '..' is not support. Please drop the original field, sync the table and add new field with same name if needed."})}),"\n",(0,a.jsx)(n.p,{children:"Solution:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Drop the table and delete references from SQLDictionary"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP TABLE AXDB.dbo.NAMEOFTABLE\n\nDELETE\nFROM AXDB.dbo.SQLDICTIONARY\nWHERE TABLEID IN (\n SELECT TABLEID\n FROM SQLDICTIONARY\n WHERE NAME = 'NAMEOFTABLE'\n  AND FIELDID = 0\n)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Restart IIS"}),"\n",(0,a.jsx)(n.li,{children:"In VS 2015, run DB sync again."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Thank you for reading."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(96540);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);