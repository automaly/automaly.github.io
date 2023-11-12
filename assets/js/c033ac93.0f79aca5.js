"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[1453],{13655:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=a(85893),r=a(11151);const s={title:"Rename a Database in SQL Server",date:new Date("2015-11-03T00:00:00.000Z"),categories:["SQL"],tags:["sql"]},i=void 0,o={id:"ax2012-archive/ax2012-architecture/2015-11-03-rename-a-database-in-sql-server/index",title:"Rename a Database in SQL Server",description:"1. Open Microsoft SQL Server Management Studio.",source:"@site/docs/07-ax2012-archive/01-ax2012-architecture/2015-11-03-rename-a-database-in-sql-server/index.md",sourceDirName:"07-ax2012-archive/01-ax2012-architecture/2015-11-03-rename-a-database-in-sql-server",slug:"/ax2012-archive/ax2012-architecture/2015-11-03-rename-a-database-in-sql-server/",permalink:"/automaly.com/ax2012-archive/ax2012-architecture/2015-11-03-rename-a-database-in-sql-server/",draft:!1,unlisted:!1,tags:[{label:"sql",permalink:"/automaly.com/tags/sql"}],version:"current",frontMatter:{title:"Rename a Database in SQL Server",date:"2015-11-03T00:00:00.000Z",categories:["SQL"],tags:["sql"]},sidebar:"tutorialSidebar",previous:{title:"Modify Microsoft Dynamics AX 2012 R3 SSRS configurations using PowerShell",permalink:"/automaly.com/ax2012-archive/ax2012-architecture/2015-07-02-modify-microsoft-dynamics-ax-2012-r3-ssrs-configurations/"},next:{title:"How to deploy all the reports in AX2012 by using Management Shell",permalink:"/automaly.com/ax2012-archive/miscellaneous/2015-05-13-how-to-deploy-all-the-reports-in-ax2012-by-using-management-shell/"}},l={},c=[];function d(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"Microsoft SQL Server Management Studio"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Connect to the server where in the DB you want to rename is located."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Modify the following script and run it"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- Replace all MyDBs with the name of the DB you want to change its name\r\nUSE [MyDB];\r\n-- Changing Physical names and paths\r\n-- Replace all NewMyDB with the new name you want to set for the DB\r\n-- Replace 'C:...NewMyDB.mdf' with full path of new DB file to be used\r\nALTER DATABASE MyDB MODIFY FILE (NAME = ' MyDB ', FILENAME = 'C:...NewMyDB.mdf');\r\n-- Replace 'C:...NewMyDB_log.ldf' with full path of new DB log file to be used\r\nALTER DATABASE MyDB MODIFY FILE (NAME = ' MyDB _log', FILENAME = 'C:...NewMyDB_log.ldf');\r\n-- Changing logical names\r\nALTER DATABASE MyDB MODIFY FILE (NAME = MyDB, NEWNAME = NewMyDB);\r\nALTER DATABASE MyDB MODIFY FILE (NAME = MyDB _log, NEWNAME = NewMyDB_log);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Right click on the DB and select ",(0,t.jsx)(n.code,{children:"Tasks>Take Offline"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the location that ",(0,t.jsx)(n.code,{children:"MDF"})," and ",(0,t.jsx)(n.code,{children:"LDF files"})," are located and rename them exactly as you specified in first two alter commands. If you changed the folder path, then you need to move them there."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go back to ",(0,t.jsx)(n.code,{children:"Microsoft SQL Server Management Studio"})," and right click on the DB and select ",(0,t.jsx)(n.code,{children:"Tasks>Bring Online"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var t=a(67294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);