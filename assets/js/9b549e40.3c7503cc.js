"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[9909],{26574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(85893),a=t(11151);const s={title:"How to create main menu in Dynamics AX 2012",date:new Date("2017-03-29T00:00:00.000Z"),tags:["main menu","X++","AX2012"],categories:["AX2012"],lightgallery:!0},o=void 0,r={id:"development/xpp-sample/2017-03-29-How-to-create-main-menu-in-Dynamics-AX-2012/index",title:"How to create main menu in Dynamics AX 2012",description:"- 1. Create Menu in AOT",source:"@site/docs/03-development/01-xpp-sample/2017-03-29-How-to-create-main-menu-in-Dynamics-AX-2012/index.md",sourceDirName:"03-development/01-xpp-sample/2017-03-29-How-to-create-main-menu-in-Dynamics-AX-2012",slug:"/development/xpp-sample/2017-03-29-How-to-create-main-menu-in-Dynamics-AX-2012/",permalink:"/development/xpp-sample/2017-03-29-How-to-create-main-menu-in-Dynamics-AX-2012/",draft:!1,unlisted:!1,tags:[{label:"main menu",permalink:"/tags/main-menu"},{label:"X++",permalink:"/tags/x"},{label:"AX2012",permalink:"/tags/ax-2012"}],version:"current",frontMatter:{title:"How to create main menu in Dynamics AX 2012",date:"2017-03-29T00:00:00.000Z",tags:["main menu","X++","AX2012"],categories:["AX2012"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Overview delete action in Dyanmics AX 2012",permalink:"/development/xpp-sample/2017-01-19-Overview-delete-action-in-Dyanmics-AX-2012/"},next:{title:"Exception Handling in Dynamics 365 For Finance and Operation",permalink:"/development/xpp-sample/2017-08-07-Exception-Handling-in-Dynamics-365-For-Finance-and-Operation/"}},l={},c=[{value:"1. Create Menu in AOT",id:"1-create-menu-in-aot",level:3},{value:"2. Finally, we need to add our menu as a module to the main menu, which is done as follows:",id:"2-finally-we-need-to-add-our-menu-as-a-module-to-the-main-menu-which-is-done-as-follows",level:3}];function d(e){const n={a:"a",em:"em",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#1-create-menu-in-aot",children:"1. Create Menu in AOT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#2-finally-we-need-to-add-our-menu-as-a-module-to-the-main-menu-which-is-done-as-follows",children:"2. Finally, we need to add our menu as a module to the main menu, which is done as follows:"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All main entry points to the UI and reports are access though the menu structure. This is presented in three ways: the left-hand navigation pane, the content area, and the navigation bar (at the top of the client). The menu design is controlled from the Menus node in the AOT."}),"\n",(0,i.jsx)(n.p,{children:"Each module will have a menu, which is created by adding a menu reference (or shortcut) to the main menu:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"reference_menu",src:t(11164).Z+"",title:"reference_menu",width:"323",height:"304"})}),"\n",(0,i.jsx)(n.p,{children:"This matches the list of modules shown in the client's left-hand navigation pane."}),"\n",(0,i.jsx)(n.h3,{id:"1-create-menu-in-aot",children:"1. Create Menu in AOT"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open your project."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Right-click on the ",(0,i.jsx)(n.strong,{children:"Menus node"})," and select ",(0,i.jsx)(n.strong,{children:"New"})," > ",(0,i.jsx)(n.strong,{children:"Menu"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Rename the menu as ",(0,i.jsx)(n.strong,{children:"YourMainMeunuName"})," and open the property sheet."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For Porperties of created Menu:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Enter the ",(0,i.jsx)(n.strong,{children:"label"})," and create a label."]}),"\n",(0,i.jsxs)(n.li,{children:["As this menu will be a module with company-specifc information, set the ",(0,i.jsx)(n.strong,{children:"SetCompany"})," property to Yes."]}),"\n",(0,i.jsxs)(n.li,{children:["Choose the icons in the ",(0,i.jsx)(n.strong,{children:"NormalImage"})," property and set ",(0,i.jsx)(n.strong,{children:"ImageLocation"})," to EmbeddedResource."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.strong,{children:"Submenu"}),", by right-clicking on the menu and navigating to ",(0,i.jsx)(n.strong,{children:"New | Submenu"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-finally-we-need-to-add-our-menu-as-a-module-to-the-main-menu-which-is-done-as-follows",children:"2. Finally, we need to add our menu as a module to the main menu, which is done as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Place the AOT window next to our project window (if required, open the AOT window by pressing Ctrl + D)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Scroll down to Menus and expand MainMenu."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Right-click on ",(0,i.jsx)(n.strong,{children:"MainMenu"})," and navigate to ",(0,i.jsx)(n.strong,{children:"New > Menu reference"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This opens a new window titled Select: Menus. Locate ",(0,i.jsx)(n.strong,{children:"your menu"})," and drag it to ",(0,i.jsx)(n.strong,{children:"MainMenu"}),", as shown in the following screenshot (the title changes from Select: Menus to the path of the select node when you click on it):"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"mainmenu2",src:t(24823).Z+"",title:"mainmenu2",width:"769",height:"503"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note: Do not drag the menu from your project!"})}),"\n",(0,i.jsx)(n.p,{children:"Save AOT and you can check new menu on AX client."}),"\n",(0,i.jsx)(n.p,{children:"Thank you for reading!"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},24823:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/mainmenu2-67c08f71213a69549d1d70dc86db2e40.png"},11164:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/reference_menu-0597a32e41bbd4d0dd3b58425050bec9.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);