"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[1536],{74121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(74848),s=t(28453);const i={title:"Link Type and Join Types in ax 2012",date:new Date("2016-01-07T00:00:00.000Z"),categories:["AX2012"],tags:["linktype","jointype"]},o=void 0,a={id:"development/aot/2016-01-07-link-type-and-join-types-in-ax-2012/index",title:"Link Type and Join Types in ax 2012",description:"Link Type",source:"@site/docs/03-development/03-aot/2016-01-07-link-type-and-join-types-in-ax-2012/index.md",sourceDirName:"03-development/03-aot/2016-01-07-link-type-and-join-types-in-ax-2012",slug:"/development/aot/2016-01-07-link-type-and-join-types-in-ax-2012/",permalink:"/development/aot/2016-01-07-link-type-and-join-types-in-ax-2012/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"linktype",permalink:"/tags/linktype"},{inline:!0,label:"jointype",permalink:"/tags/jointype"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Link Type and Join Types in ax 2012",date:"2016-01-07T00:00:00.000Z",categories:["AX2012"],tags:["linktype","jointype"]},sidebar:"tutorialSidebar",previous:{title:"AOT",permalink:"/category/aot"},next:{title:"The Type system of Dynamics AX 2012",permalink:"/development/aot/2016-11-25-the-type-system-of-dynamics-ax-2012/"}},c={},d=[{value:"Link Type",id:"link-type",level:2},{value:"Join Types",id:"join-types",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"link-type",children:"Link Type"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active"}),":\r\n",(0,r.jsx)(n.code,{children:"Parent and child"})," data source is updated immediately when a new record in the parent data source is selected. Continuous updates consume lots of resources consuming."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Delayed"}),":\r\n",(0,r.jsx)(n.code,{children:"Parent and child"})," A pause is inserted before linked child data sources are updated. This enables faster navigation in the parent data source because the records from child data sources are not updated immediately."]}),"\n",(0,r.jsx)(n.p,{children:"For example, you can scroll a list of orders where you do not want to review the lines associated with the order until you stop scrolling."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Passive"}),": ",(0,r.jsx)(n.code,{children:"Parent and child"})," Linked child data sources are not updated automatically. Updates of the child data source must be programmed on the ",(0,r.jsx)(n.code,{children:"active()"})," method of the master data source."]}),"\n",(0,r.jsx)(n.h2,{id:"join-types",children:"Join Types"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"InnerJoin"})," ",(0,r.jsx)(n.code,{children:"Combined data source"})," select the record from the main table that matches records in the joined table and vice versa."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"//X++\r\nselect AccountNum from custTable\r\n    join TaxGroupId from custGroup\r\n    where custGroup.CustGroup == custTable.CustGroup;\r\n//CROSS JOIN in T-SQL:\r\nSELECT T1.ACCOUNTNUM, T1.RECID, T2.TAXGROUPID, T2.RECID\r\nFROM CUSTTABLE T1 CROSS JOIN CUSTGROUP T2\r\nWHERE ((T1.PARTITION=?) AND (T1.DATAAREAID=?))\r\n  AND (((T2.PARTITION=?) AND (T2.DATAAREAID=?)) \r\n   AND (T2.CUSTGROUP=T1.CUSTGROUP))\n"})}),"\n",(0,r.jsx)(n.p,{children:"There is one record for each match. Records without related records in the other data source are eliminated from the result."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Outer Join"}),": ",(0,r.jsx)(n.code,{children:"Combined data source"})," select the records from the main table. The records are retrieved whether they have matching records in the joined table"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"//X++:\r\nselect AccountNum from custTable\r\n    outer join AccountID from custBankAccount\r\n    where custBankAccount.CustAccount == custTable.AccountNum;\r\n//LEFT OUTER JOIN in T-SQL:\r\nSELECT T1.ACCOUNTNUM, T1.RECID, T2.ACCOUNTID, T2.RECID\r\nFROM CUSTTABLE T1 LEFT OUTER JOIN CUSTBANKACCOUNT T2\r\nON (((T2.PARTITION=?) AND (T2.DATAAREAID=?))\r\nAND (T1.ACCOUNTNUM=T2.CUSTACCOUNT))\r\nWHERE ((T1.PARTITION=?) AND (T1.DATAAREAID=?))\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Exist Join"}),": ",(0,r.jsx)(n.code,{children:"Combined data source"}),"The data source retrieves a record from the main table for each matching record in the joined table."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"//X++:\r\nselect AccountNum from custBankAccount\r\n    exists join custTable\r\n    where custBankAccount.CustAccount == custTable.AccountNum;\r\n//EXISTS (SELECT 'x'...) in T-SQL:\r\nSELECT T1.ACCOUNTNUM, T1.RECID\r\nFROM CUSTBANKACCOUNT T1\r\nWHERE ((T1.PARTITION=?) AND (T1.DATAAREAID=?))\r\nAND EXISTS (SELECT 'x'\r\n            FROM CUSTTABLE T2\r\n            WHERE (((T2.PARTITION=?) AND (T2.DATAAREAID=?))\r\n              AND  (T1.CUSTACCOUNT=T2.ACCOUNTNUM)))\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The differences between ",(0,r.jsx)(n.code,{children:"InnerJoin"})," and ",(0,r.jsx)(n.code,{children:"ExistJoin"})," are as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When the join type is ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"ExistJoin"})}),", the search ends after the first match has been found."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When the join type is ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"InnerJoin"})}),", all matching records are searched for."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"NotExistJoin"})}),": ",(0,r.jsx)(n.code,{children:"Combined data source"})," Select records from the main table that do not have a match in the joined table."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);