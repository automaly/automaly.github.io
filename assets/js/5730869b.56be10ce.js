"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[9855],{61031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(85893),r=n(11151);const s={date:"2023-12-21",title:"How to hide New and Delete buttons (command buttons) in form",categories:["X++","Form"],tags:["New button","Delete button"],authors:"max"},i=void 0,a={permalink:"/2023/12/21/How-to-hide-New-and-Delete-buttons-in-form-1",source:"@site/blog/2023-12-21-How-to-hide-New-and-Delete-buttons-in-form-1/index.md",title:"How to hide New and Delete buttons (command buttons) in form",description:"We can change the form design property Show Delete Button, Show New Button  to No.",date:"2023-12-21T00:00:00.000Z",formattedDate:"December 21, 2023",tags:[{label:"New button",permalink:"/tags/new-button"},{label:"Delete button",permalink:"/tags/delete-button"}],readingTime:.21,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max"}],frontMatter:{date:"2023-12-21",title:"How to hide New and Delete buttons (command buttons) in form",categories:["X++","Form"],tags:["New button","Delete button"],authors:"max"},unlisted:!1,nextItem:{title:"How to get FinOps Azure storage blob connection string",permalink:"/2022/10/27/how-to-get-d365-azure-blob-storage-str"}},c={authorsImageUrls:[void 0]},d=[];function l(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["We can change the form design property ",(0,o.jsx)(t.code,{children:"Show Delete Button"}),", ",(0,o.jsx)(t.code,{children:"Show New Button"}),"  to ",(0,o.jsx)(t.code,{children:"No"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Alt text",src:n(44760).Z+"",width:"1468",height:"531"})}),"\n",(0,o.jsx)(t.p,{children:"Or using X++ code in form's init method"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",children:"[Form]\r\npublic class DEV_TestForm extends FormRun\r\n{\r\n    public void init()\r\n    {\r\n        this.form().design().showNewButton(0);\r\n        this.form().design().showDeleteButton(0);\r\n        super();\r\n    }\r\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"For COC Extension"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",children:"[ExtensionOf(formStr(SMAServiceOrderTable))]\r\nfinal class SMAServiceOrderTable_Form_DEV_Extension\r\n{\r\n    public void init()\r\n    {\r\n        this.form().design().showNewButton(0);\r\n        this.form().design().showDeleteButton(0);\r\n        next init();\r\n    }\r\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},44760:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-b93de342b1bb7666979755d23d42f29f.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(67294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);