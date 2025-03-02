"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[6879],{9894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(74848),s=a(28453);const l={date:"2024-05-11",title:"Truncate a table using X++",categories:["xpp"],tags:["xpp","Development"],authors:"max"},c=void 0,i={permalink:"/2024/05/11/truncate-a-table-Xpp",source:"@site/blog/2024-05-11-truncate-a-table-Xpp.mdx",title:"Truncate a table using X++",description:'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3534873375492458"',date:"2024-05-11T00:00:00.000Z",tags:[{inline:!0,label:"xpp",permalink:"/tags/xpp"},{inline:!0,label:"Development",permalink:"/tags/development"}],readingTime:.21,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max",page:null}],frontMatter:{date:"2024-05-11",title:"Truncate a table using X++",categories:["xpp"],tags:["xpp","Development"],authors:"max"},unlisted:!1,lastUpdatedAt:1740941626e3,lastUpdatedBy:"Max Nguyen",nextItem:{title:"SQL cheatsheet",permalink:"/2024/05/12/sql-cheat-sheet"}},r={authorsImageUrls:[void 0]},o=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3534873375492458",crossorigin:"anonymous"}),"\n",(0,n.jsxs)(t.p,{children:["We can use the ",(0,n.jsx)(t.code,{children:"tableTruncate"})," method from ",(0,n.jsx)(t.code,{children:"SqlDataDictionary"})," to truncate a table in FinOps, useful for a huge SQL table."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cs",children:"public static void main(Args _args)\n{\n    DictTable dictTable = new DictTable(tablenum(KA_TBYTDStaging));\n \n    if (dictTable && dictTable.enabled())\n    {\n        str sqlTableName = dictTable.name(DbBackend::Sql);\n        SqlDataDictionary sqlTable = new SqlDataDictionary();\n \n        if (sqlTable.tableExist(sqlTableName))\n        {\n            new SqlDataDictionaryPermission(methodstr(SqlDataDictionary, tableTruncate)).assert();\n            sqlTable.tableTruncate(tablenum(KA_TBYTDStaging), false);\n            CodeAccessPermission::revertAssert();\n        }\n    }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>i});var n=a(96540);const s={},l=n.createContext(s);function c(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);