"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[6469],{10224:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=r(74848),a=r(28453);const l={title:"Difference between QueryFilter and QueryBuildRrange",description:"Difference between QueryFilter and QueryBuildRrange",date:new Date("2017-01-01T00:00:00.000Z"),categories:["AX2012"],tags:["QueryBuild","QueryFilter","QueryBuildRrange"]},i=void 0,s={id:"development/xpp-sample/2017-01-01-Difference-between-QUERYFILTER-and-QUERYBUILDRANGE/index",title:"Difference between QueryFilter and QueryBuildRrange",description:"Difference between QueryFilter and QueryBuildRrange",source:"@site/docs/03-development/01-xpp-sample/2017-01-01-Difference-between-QUERYFILTER-and-QUERYBUILDRANGE/index.md",sourceDirName:"03-development/01-xpp-sample/2017-01-01-Difference-between-QUERYFILTER-and-QUERYBUILDRANGE",slug:"/development/xpp-sample/2017-01-01-Difference-between-QUERYFILTER-and-QUERYBUILDRANGE/",permalink:"/development/xpp-sample/2017-01-01-Difference-between-QUERYFILTER-and-QUERYBUILDRANGE/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"QueryBuild",permalink:"/tags/query-build"},{inline:!0,label:"QueryFilter",permalink:"/tags/query-filter"},{inline:!0,label:"QueryBuildRrange",permalink:"/tags/query-build-rrange"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Difference between QueryFilter and QueryBuildRrange",description:"Difference between QueryFilter and QueryBuildRrange",date:"2017-01-01T00:00:00.000Z",categories:["AX2012"],tags:["QueryBuild","QueryFilter","QueryBuildRrange"]},sidebar:"tutorialSidebar",previous:{title:"Useful functions to use in AX 2012",permalink:"/development/xpp-sample/2016-12-30-useful-functions-to-use-in-ax-2012/"},next:{title:"Recalculate InventSum in Dynamics AX",permalink:"/development/xpp-sample/2017-01-02-Recalculate-InventSum/"}},u={},d=[{value:"Use QueryFilter class:",id:"use-queryfilter-class",level:3},{value:"Use QueryBuildRange class:",id:"use-querybuildrange-class",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In Dynamics AX, we have two way to filter the result set of records in joined query is using ",(0,t.jsx)(n.code,{children:"QueryFilter"})," class and ",(0,t.jsx)(n.code,{children:"QueryBuildRange"})," class."]}),"\n",(0,t.jsxs)(n.p,{children:["So what's difference between them? when do we use ",(0,t.jsx)(n.code,{children:"QueryFilter"})," class? When do we use ",(0,t.jsx)(n.code,{children:"QueryBuildRange"})," class?"]}),"\n",(0,t.jsxs)(n.p,{children:["Today, i will make a simple sample to show what is difference between them. I have a table ",(0,t.jsx)(n.code,{children:"DuyDang_ParentTable"})," which have 1 columns ",(0,t.jsx)(n.code,{children:"ID"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Parent_Table",src:r(13817).A+"",title:"Parent_Table",width:"503",height:"324"})}),"\n",(0,t.jsxs)(n.p,{children:["And another table ",(0,t.jsx)(n.code,{children:"DuyDang_ChildTable"})," which have 3 columns : ",(0,t.jsx)(n.code,{children:"ID"}),", ",(0,t.jsx)(n.code,{children:"ParentID"}),", ",(0,t.jsx)(n.code,{children:"Qty"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Child_Table",src:r(20345).A+"",title:"Child_Table",width:"320",height:"204"})}),"\n",(0,t.jsxs)(n.p,{children:["With the relation ",(0,t.jsx)(n.code,{children:"DuyDang_ParentTable.ID = DuyDang_ChildTable.ParentID"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["I have the ",(0,t.jsx)(n.strong,{children:"Outer Join"})," query:"]}),"\n",(0,t.jsx)(n.h3,{id:"use-queryfilter-class",children:"Use QueryFilter class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:'static void DuyDang_QueryFilter(Args _args)\r\n{\r\n    Query query;\r\n    QueryBuildDataSource qbds, qbds1;\r\n    QueryRun queryRun;    \r\n    DuyDang_ParentTable parentTable;\r\n    DuyDang_ChildTable childTable;\r\n    QueryFilter qFilter;\r\n    QueryBuildRange qRange;\r\n    struct structSet;\r\n\r\n    structSet = new struct\r\n        ("str ParentID;"\r\n        + "str ChildID;"\r\n        + "real Quantity"\r\n        );\r\n\r\n    query = new Query();\r\n    qbds = query.addDataSource(tableNum(DuyDang_ParentTable));  \r\n    qbds1 = qbds.addDataSource(tableNum(DuyDang_ChildTable));    \r\n    qbds1.joinMode(JoinMode::OuterJoin); // Set join type.   \r\n    qbds1.addLink(fieldNum(DuyDang_ParentTable, ID), fieldNum(DuyDang_ChildTable, ParentID));\r\n    qFilter = query.addQueryFilter(qbds1, \'Qty\');\r\n    qFilter.value(queryValue(15));\r\n    \r\n    queryRun = new QueryRun(query);    \r\n    while (queryRun.next())\r\n    {\r\n        parentTable = queryRun.get(tableNum(DuyDang_ParentTable));\r\n        childTable = queryRun.get(tableNum(DuyDang_ChildTable));\r\n\r\n        structSet.value("ParentID", parentTable.ID);\r\n        structSet.value("ChildID", childTable.ID);\r\n        structSet.value("Quantity", childTable.Qty);\r\n        info(structSet.toString());\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The result"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Child_Table",src:r(55634).A+"",title:"Child_Table",width:"320",height:"249"})}),"\n",(0,t.jsx)(n.h3,{id:"use-querybuildrange-class",children:"Use QueryBuildRange class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cs",children:'static void DuyDang_QueryFilter(Args _args)\r\n{\r\n    Query query;\r\n    QueryBuildDataSource qbds, qbds1;\r\n    QueryRun queryRun;    \r\n    DuyDang_ParentTable parentTable;\r\n    DuyDang_ChildTable childTable;\r\n    QueryFilter qFilter;\r\n    QueryBuildRange qRange;\r\n    struct structSet;\r\n\r\n    structSet = new struct\r\n        ("str ParentID;"\r\n        + "str ChildID;"\r\n        + "real Quantity"\r\n        );\r\n\r\n    query = new Query();\r\n    qbds = query.addDataSource(tableNum(DuyDang_ParentTable));  \r\n    qbds1 = qbds.addDataSource(tableNum(DuyDang_ChildTable));    \r\n    qbds1.joinMode(JoinMode::OuterJoin); // Set join type.   \r\n    qbds1.addLink(fieldNum(DuyDang_ParentTable, ID), fieldNum(DuyDang_ChildTable, ParentID));\r\n    qRange = qbds1.addRange(fieldNum(DuyDang_ChildTable, Qty));\r\n    qRange.value(queryValue(15));\r\n    \r\n    queryRun = new QueryRun(query);    \r\n    while (queryRun.next())\r\n    {\r\n        parentTable = queryRun.get(tableNum(DuyDang_ParentTable));\r\n        childTable = queryRun.get(tableNum(DuyDang_ChildTable));\r\n\r\n        structSet.value("ParentID", parentTable.ID);\r\n        structSet.value("ChildID", childTable.ID);\r\n        structSet.value("Quantity", childTable.Qty);\r\n        info(structSet.toString());\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["and result ",(0,t.jsx)(n.code,{children:"info"})," here:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Child_Table",src:r(84213).A+"",title:"Child_Table",width:"320",height:"250"})}),"\n",(0,t.jsx)(n.p,{children:"We can see the difference between them"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When you use ",(0,t.jsx)(n.code,{children:"QueryFilter"})," class, the restriction is in the ",(0,t.jsx)(n.code,{children:"WHERE"})," clause of the ",(0,t.jsx)(n.code,{children:"OUTER JOIN"})," in the ANSI SQL select statement that is generated by the AOS for the underlying database system."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM DuyDang_ParentTable(DuyDang_ParentTable_1) \r\n\tOUTER JOIN * FROM DuyDang_ChildTable(DuyDang_ChildTable_1) \r\n\tON DuyDang_ParentTable.ID = DuyDang_ChildTable.ParentID \r\n\tWHERE ((DuyDang_ChildTable(DuyDang_ChildTable_1).Qty = 15))\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When you use ",(0,t.jsx)(n.code,{children:"QueryBuidRange"})," class, the restriction is in the ",(0,t.jsx)(n.code,{children:"ON"})," clause of the ",(0,t.jsx)(n.code,{children:"OUTER JOIN"})," in the ANSI SQL select statement that is generated by the AOS for the underlying database system."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM DuyDang_ParentTable(DuyDang_ParentTable_1)\r\n\tOUTER JOIN * FROM DuyDang_ChildTable(DuyDang_ChildTable_1) \r\n\tON DuyDang_ParentTable.ID = DuyDang_ChildTable.ParentID \r\n\t\tAND ((Qty = 15))\n"})}),"\n",(0,t.jsx)(n.p,{children:"Thank you for reading!"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},20345:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Child_Table-a6e8fd338127e83ab1d2971712c9f9d0.jpg"},13817:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Parent_Table-c5bffc9130b0921199705918b970e932.jpg"},55634:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Result_Filter-9a25dacb90b5bb893008490b8b3c0480.jpg"},84213:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/Result_Range-47572dec33bc1b71dd1060eb578b9e61.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(96540);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);