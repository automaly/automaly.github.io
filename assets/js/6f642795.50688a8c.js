"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[5006],{70014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(74848),i=t(28453);const r={title:"X++ Performance tips",description:"X++ Performance tips",date:new Date("2015-02-12T00:00:00.000Z"),categories:["AX2012"],tags:["performance","xpp"]},s=void 0,a={id:"operation/tools/2015-02-12-x-performance-tips/index",title:"X++ Performance tips",description:"X++ Performance tips",source:"@site/docs/05-operation/01-tools/2015-02-12-x-performance-tips/index.md",sourceDirName:"05-operation/01-tools/2015-02-12-x-performance-tips",slug:"/operation/tools/2015-02-12-x-performance-tips/",permalink:"/operation/tools/2015-02-12-x-performance-tips/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"performance",permalink:"/tags/performance"},{inline:!0,label:"xpp",permalink:"/tags/xpp"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"X++ Performance tips",description:"X++ Performance tips",date:"2015-02-12T00:00:00.000Z",categories:["AX2012"],tags:["performance","xpp"]},sidebar:"tutorialSidebar",previous:{title:"What is the difference difference between menu item Display, Output and Action",permalink:"/operation/tools/2015-01-27-difference-display-output-and-action-in-dynamics-ax/"},next:{title:"Web Services on IIS - Exception has been thrown by the target of an invocation",permalink:"/operation/tools/2015-08-04-web-services-on-iis-exception-has-been-thrown-by-the-target-of-an-invocation-ax-installation/"}},c={},l=[{value:"Tip 1: Measure execution time of your code",id:"tip-1-measure-execution-time-of-your-code",level:3},{value:"Tip 2: limit the number of loops",id:"tip-2-limit-the-number-of-loops",level:3},{value:"Tip 3: avoid <code>if</code> in <code>while select</code>",id:"tip-3-avoid-if-in-while-select",level:3},{value:"Tip 4: avoid double use of table methods",id:"tip-4-avoid-double-use-of-table-methods",level:3},{value:"Tip 5: Don\u2019t put too much code on tables",id:"tip-5-dont-put-too-much-code-on-tables",level:3},{value:"Tip 6: Use the fastest code",id:"tip-6-use-the-fastest-code",level:3},{value:"Tip 7: Every optimization counts",id:"tip-7-every-optimization-counts",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Report from ",(0,o.jsx)(n.a,{href:"http://www.artofcreation.be/",children:"http://www.artofcreation.be/"})]})}),"\n",(0,o.jsx)(n.h3,{id:"tip-1-measure-execution-time-of-your-code",children:"Tip 1: Measure execution time of your code"}),"\n",(0,o.jsx)(n.p,{children:"Measuring is knowing. Before you start changing code, make sure you have a set of data you can keep reusing for your tests. Measure the performance of your code on that data after each change in code so you know the impact of your changes."}),"\n",(0,o.jsxs)(n.p,{children:["One way to do this is by using the ",(0,o.jsx)(n.code,{children:"Winapi::getTickCount()"})," or ",(0,o.jsx)(n.code,{children:"WinApiServer::getTickCount()"})," if your code runs on server method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C#",children:"static void KlForTickCountSample(Args _args)\r\n{\r\n    int ticks;\r\n    ;\r\n    // get the tickcount before the process starts\r\n    ticks = winapi::getTickCount();\r\n    \r\n    // start the process\r\n    sleep(2000); // simulate 2 seconds of processing\r\n    \r\n    // compare tickcount\r\n    ticks = winapi::getTickCount() \u2013 ticks;\r\n    \r\n    // display result\r\n    info(strfmt('Number of ticks: %1', ticks));\r\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"tip-2-limit-the-number-of-loops",children:"Tip 2: limit the number of loops"}),"\n",(0,o.jsx)(n.p,{children:"A LOT of time goes into loops. If you have a performance problem, start looking for loops. Code can run really fast, but it can get slow when it is executed too many time, eg, in a loop."}),"\n",(0,o.jsxs)(n.h3,{id:"tip-3-avoid-if-in-while-select",children:["Tip 3: avoid ",(0,o.jsx)(n.code,{children:"if"})," in ",(0,o.jsx)(n.code,{children:"while select"})]}),"\n",(0,o.jsxs)(n.p,{children:["When there is a ",(0,o.jsx)(n.code,{children:"if"})," in a ",(0,o.jsx)(n.code,{children:"while select"}),", see if you can rewrite it a a where statement in your select. Don\u2019t be affraid use a join either. Consider the following example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C#",children:"static void KlForIfInLoop(Args _args)\r\n{\r\n    VendTable vendTable;\r\n    ;\r\n    // usually slower\r\n    while select vendTable\r\n    {\r\n        if(vendTable.VendGroup == 'VG1')\r\n        {\r\n            info(vendTable.AccountNum);\r\n        }\r\n    }\r\n\r\n    // usually faster\r\n    while select vendTable\r\n    where vendTable.VendGroup == 'VG1'\r\n    {\r\n        info(vendTable.AccountNum);\r\n    }\r\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"tip-4-avoid-double-use-of-table-methods",children:"Tip 4: avoid double use of table methods"}),"\n",(0,o.jsx)(n.p,{children:"Using table methods a lot can get really slow if you do it wrong. Consider the following example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C#",children:"static void klForTableMethodsSlow(Args _args)\r\n{\r\n    SalesLine salesLine;\r\n    InventDim inventDim;\r\n    ;\r\n    \r\n    // select a salesline\r\n    select firstonly salesLine;\r\n    \r\n    inventDim.InventColorId = salesLine.inventDim().InventColorId;\r\n    inventDim.InventSizeId  = salesLine.inventDim().InventSizeId;\r\n    inventDim.inventBatchId = salesLine.inventDim().inventBatchId;\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This example code looks nice, but there\u2019s a problem. ",(0,o.jsx)(n.code,{children:"The salesLine.inventDim()"})," method contains the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C#",children:"InventDim inventDim(boolean  _forUpdate = false)\r\n{\r\n    return InventDim::find(this.InventDimId, _forUpdate);\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This means that the ",(0,o.jsx)(n.code,{children:"invendDim"})," record is read three times from the database. It is better to declare the ",(0,o.jsx)(n.code,{children:"inventDim"})," record locally and only retrieve it once:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C#",children:"static void klForTableMethodsFast(Args _args)\r\n{\r\n    SalesLine salesLine;\r\n    InventDim inventDim;\r\n    InventDim inventDimLoc;\r\n    ;\r\n    \r\n    // select a salesline\r\n    select firstonly salesLine;\r\n    \r\n    inventDimLoc = salesLine.inventDim();\r\n    \r\n    inventDim.InventColorId = inventDimLoc.InventColorId;\r\n    inventDim.InventSizeId  = inventDimLoc.InventSizeId;\r\n    inventDim.inventBatchId = inventDimLoc.inventBatchId;\r\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"tip-5-dont-put-too-much-code-on-tables",children:"Tip 5: Don\u2019t put too much code on tables"}),"\n",(0,o.jsxs)(n.p,{children:["Code on tables is usually fast, but things can get slow if you use it to much. Say you have a table with an ",(0,o.jsx)(n.code,{children:"InventDimId"})," field. If you have 5 methods that need the ",(0,o.jsx)(n.code,{children:"InventDim"})," record, because you don\u2019t have a classDeclaration method on your table, you need to call this function 5 times, once in every method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C#",children:"InventDim::find(this.inventDim)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When you put these methods on a class, you could optimise it by fetching the record only once and storing it in the ",(0,o.jsx)(n.code,{children:"classDeclaration"}),", or better, passing it as a parameter to your methods. An other example is fetching parameters from parameter tables, eg ",(0,o.jsx)(n.code,{children:"InventParameters::find()"}),". On a table, you have to fetch it each time you call a method. In a class, you would probably optimize your code to only fetch the parameter record once."]}),"\n",(0,o.jsx)(n.h3,{id:"tip-6-use-the-fastest-code",children:"Tip 6: Use the fastest code"}),"\n",(0,o.jsxs)(n.p,{children:["For some tasks, there is ",(0,o.jsx)(n.strong,{children:"special code"})," that is faster than the code you would normally write. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C#",children:"// slower\r\nwhile select forupdate custTable\r\nwhere custTable.custGroup == 'TST'\r\n{\r\n    custTable.delete();\r\n}\r\n// faster\r\ndelete_from custTable\r\nwhere custTable.custGroup == 'TST';\n"})}),"\n",(0,o.jsx)(n.p,{children:"The same applies to update_recordset for updating records. Also, when adding values to the end of a container"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C#",children:'cont += "a value";\n'})}),"\n",(0,o.jsx)(n.p,{children:"is faster than"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-C#",children:'cont = conins(cont, conlen(cont), "a value");\n'})}),"\n",(0,o.jsx)(n.h3,{id:"tip-7-every-optimization-counts",children:"Tip 7: Every optimization counts"}),"\n",(0,o.jsx)(n.p,{children:"Remember that every optimization you do to you code counts, even if it\u2019s a little one. Small performance tweaks can have a huge effect once you process large quantities of data. So don\u2019t be lazy, and optimize."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);