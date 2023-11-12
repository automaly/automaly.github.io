"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[752],{53487:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(85893),n=t(11151);const i={title:"Set default value for a comboBox in Dynamics AX 2012 with X++",date:new Date("2015-11-12T23:57:46.000Z"),categories:["AX2012"],tags:["xpp"]},l=void 0,s={id:"development/xpp-sample/2015-11-03-defaultVale-combobox-in-x/index",title:"Set default value for a comboBox in Dynamics AX 2012 with X++",description:"Beside modify metadata on form properties, as best practice we can use code like below to assign default value for combobox.",source:"@site/docs/03-development/01-xpp-sample/2015-11-03-defaultVale-combobox-in-x/index.md",sourceDirName:"03-development/01-xpp-sample/2015-11-03-defaultVale-combobox-in-x",slug:"/development/xpp-sample/2015-11-03-defaultVale-combobox-in-x/",permalink:"/automaly.com/development/xpp-sample/2015-11-03-defaultVale-combobox-in-x/",draft:!1,unlisted:!1,tags:[{label:"xpp",permalink:"/automaly.com/tags/xpp"}],version:"current",frontMatter:{title:"Set default value for a comboBox in Dynamics AX 2012 with X++",date:"2015-11-12T23:57:46.000Z",categories:["AX2012"],tags:["xpp"]},sidebar:"tutorialSidebar",previous:{title:"List Page Interaction Class",permalink:"/automaly.com/development/xpp-sample/2015-06-09-list-page-interaction-class/"},next:{title:'How to use "LIKE" operator in QueryBuildRange',permalink:"/automaly.com/development/xpp-sample/2015-11-13-how-to-use-like-operator-in-querybuildrange/"}},r={},c=[];function d(e){const o={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"Beside modify metadata on form properties, as best practice we can use code like below to assign default value for combobox."}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["You can use this code in the form's init method after ",(0,a.jsx)(o.code,{children:"super()"}),":"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-cs",children:"ComboBoxName.selection(ComboBoxName::DefaultValue);\n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["If this is a table field we should you best practice overriding the ",(0,a.jsx)(o.code,{children:"initValue"})," method in the table:"]}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-cs",children:"this.ComboBoxName = ComboBoxName::DefaultValue;\n"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Override ",(0,a.jsx)(o.code,{children:"initValue"})," in the form's datasource only if it should be a specific behaviour in this form only."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>s,a:()=>l});var a=t(67294);const n={},i=a.createContext(n);function l(e){const o=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(i.Provider,{value:o},e.children)}}}]);