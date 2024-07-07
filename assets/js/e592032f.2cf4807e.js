"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[2911],{29962:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=t(74848),i=t(28453);const a={date:"2023-12-21",title:"Create Tile in Workspace with X++",categories:["X++","Form"],tags:["Tile","Workspace"],authors:"max",unlisted:!0},d=void 0,r={permalink:"/blog/2023/12/21/How-to-create-tile-X++",source:"@site/blog/2023-12-21-How-to-create-tile-X++/index.md",title:"Create Tile in Workspace with X++",description:"There are two ways through which we can create tile one by personalizing form and another through code. In this example\xa0we\u2019ll use code",date:"2023-12-21T00:00:00.000Z",tags:[{inline:!0,label:"Tile",permalink:"/blog/tags/tile"},{inline:!0,label:"Workspace",permalink:"/blog/tags/workspace"}],readingTime:1.5966666666666667,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max"}],frontMatter:{date:"2023-12-21",title:"Create Tile in Workspace with X++",categories:["X++","Form"],tags:["Tile","Workspace"],authors:"max",unlisted:!0},unlisted:!0},c={authorsImageUrls:[void 0]},l=[];function h(e){const s={img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"There are two ways through which we can create tile one by personalizing form and another through code. In this example\xa0we\u2019ll use code"}),"\n",(0,n.jsx)(s.p,{children:"The diagram below\xa0summarizes the operations we will perform to add a tile to a workspace"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(23996).A+"",width:"1023",height:"714"})}),"\n",(0,n.jsx)(s.p,{children:"These are the steps we\u2019ll do :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Create an AOT Query object"}),"\n",(0,n.jsx)(s.li,{children:"Create a simple list form to show the query results"}),"\n",(0,n.jsx)(s.li,{children:"Create a menu item to call the form"}),"\n",(0,n.jsx)(s.li,{children:"Create a tile to call the menu item"}),"\n",(0,n.jsx)(s.li,{children:"Add the tile to a workspace"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Create an AOT Query object"}),"\n",(0,n.jsx)(s.p,{children:"Create a project and add a query called \u201cDeliveredSalesOrdersQuery\u201d"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(33585).A+"",width:"877",height:"481"})}),"\n",(0,n.jsx)(s.p,{children:"Add SalesTable as datasource in \u201cDeliveredSalesOrdersQuery\u201d."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(10887).A+"",width:"522",height:"156"})}),"\n",(0,n.jsx)(s.p,{children:"Set dynamic fields property to \u201cYes\u201d"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(92574).A+"",width:"646",height:"295"})}),"\n",(0,n.jsx)(s.p,{children:"Add range in it for showing sales orders whose status is delivered."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(21481).A+"",width:"293",height:"170"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(16605).A+"",width:"439",height:"439"})}),"\n",(0,n.jsx)(s.p,{children:"Save the Query"}),"\n",(0,n.jsx)(s.p,{children:"Create a simple list form to show the query results"}),"\n",(0,n.jsx)(s.p,{children:"Add a\xa0Form\xa0object and call it \u201cDeliveredSalesOrderInquiry\u201c"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(83572).A+"",width:"488",height:"405"})}),"\n",(0,n.jsx)(s.p,{children:"Add\xa0DeliveredSalesOrdersQuery\xa0as Form Data Source"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(6885).A+"",width:"776",height:"227"})}),"\n",(0,n.jsx)(s.p,{children:"Apply\xa0\u201cSimple list\u201d\xa0pattern"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(58063).A+"",width:"835",height:"578"})}),"\n",(0,n.jsx)(s.p,{children:"Add Action pane"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(19046).A+"",width:"602",height:"450"})}),"\n",(0,n.jsx)(s.p,{children:"Add group"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(68441).A+"",width:"529",height:"669"})}),"\n",(0,n.jsx)(s.p,{children:"Apply\xa0\u201cCustom and Quick filters\u201d pattern\xa0to the form group created before"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(33483).A+"",width:"863",height:"276"})}),"\n",(0,n.jsx)(s.p,{children:"Add\xa0Quick filter\xa0to the form Group created before"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(12354).A+"",width:"671",height:"323"})}),"\n",(0,n.jsx)(s.p,{children:"Add grid to the form"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(62192).A+"",width:"621",height:"611"})}),"\n",(0,n.jsx)(s.p,{children:"Add the fields that will be show in the form"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(35250).A+"",width:"606",height:"291"})}),"\n",(0,n.jsx)(s.p,{children:"Save the form"}),"\n",(0,n.jsx)(s.p,{children:"Create a menu item to call the form"}),"\n",(0,n.jsx)(s.p,{children:"Add a display menu item and call it \u201cDeliveredSalesOrders\u201c"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(56795).A+"",width:"791",height:"448"})}),"\n",(0,n.jsx)(s.p,{children:"Set following properties on menu item"}),"\n",(0,n.jsx)(s.p,{children:"Object\xa0: DeliveredSalesOrderInquiry (The form creeated before)"}),"\n",(0,n.jsx)(s.p,{children:"Object type\xa0: Form"}),"\n",(0,n.jsx)(s.p,{children:"Query\xa0: DeliveredSalesOrderQuery (the Query created before)"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(75584).A+"",width:"597",height:"410"})}),"\n",(0,n.jsx)(s.p,{children:"Create a tile to call the menu item"}),"\n",(0,n.jsx)(s.p,{children:"Add a new tile and call it \u201cDeliveredSalesOrderTile\u201c"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(99785).A+"",width:"789",height:"446"})}),"\n",(0,n.jsx)(s.p,{children:"Set following properties on tile :"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(49814).A+"",width:"650",height:"516"})}),"\n",(0,n.jsx)(s.p,{children:"Label\xa0: \u201cDelivered Sales Orders\u201d"}),"\n",(0,n.jsx)(s.p,{children:"Menu item Name\xa0: \u201cDeliveredSalesOrders\u201d"}),"\n",(0,n.jsx)(s.p,{children:"Menu item type\xa0: \u201cDisplay\u201d"}),"\n",(0,n.jsx)(s.p,{children:"Type\xa0: \u201cCount\u201d (this will show the\xa0total number of records as a result of the query\xa0as a preview in the Tile)"}),"\n",(0,n.jsx)(s.p,{children:"Add the tile to a workspace"}),"\n",(0,n.jsx)(s.p,{children:"First let\u2019s create a new simple\xa0Workspace\xa0and call it \u201cWorkspace_TEST\u201c"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(87263).A+"",width:"858",height:"449"})}),"\n",(0,n.jsx)(s.p,{children:"Apply\xa0\u201cWorkspace\u201d pattern"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(1988).A+"",width:"841",height:"789"})}),"\n",(0,n.jsx)(s.p,{children:"Add\xa0Tab"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(65229).A+"",width:"775",height:"650"})}),"\n",(0,n.jsx)(s.p,{children:"Add\xa0New tab page\xa0to Tab control"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(12346).A+"",width:"378",height:"162"})}),"\n",(0,n.jsx)(s.p,{children:"Apply\xa0\u201cTiles\u201d pattern\xa0to Tab page"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(2179).A+"",width:"765",height:"241"})}),"\n",(0,n.jsx)(s.p,{children:"Add\xa0Tile button"}),"\n",(0,n.jsx)(s.p,{children:"There are 2 different tiles buttons,\xa0use the second one"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(86499).A+"",width:"712",height:"606"})}),"\n",(0,n.jsx)(s.p,{children:"Set these propertie to the Tile button"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(85274).A+"",width:"622",height:"512"})}),"\n",(0,n.jsx)(s.p,{children:"Tile\xa0: \u201cDeliveredSalesOrderTile\u201d (The tile created in the before steps)"}),"\n",(0,n.jsx)(s.p,{children:"Tile Display\xa0: Auto"}),"\n",(0,n.jsx)(s.p,{children:"Now let\u2019s test our Tile. To do that you can add the workspace inside a menu or simply\xa0Set it as Startup object in your project."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(1224).A+"",width:"348",height:"297"})}),"\n",(0,n.jsx)(s.p,{children:"So run the project by pressing Start button."}),"\n",(0,n.jsx)(s.p,{children:"By default the form will open in DAT legal entity, so change it with your work company in the address bar"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(64162).A+"",width:"253",height:"109"})}),"\n",(0,n.jsx)(s.p,{children:"THis the result. The total record numbers are shown as a preview"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(15441).A+"",width:"493",height:"267"})}),"\n",(0,n.jsx)(s.p,{children:"By default the refresh time interval is 10 minutes, but you can change by changing the\xa0RefreshFrequency\xa0property of the tile object"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(56332).A+"",width:"542",height:"326"})}),"\n",(0,n.jsx)(s.p,{children:"Or simply by doing a manual refresh pressing \u201cBegin update now\u201d button"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(10491).A+"",width:"274",height:"159"})}),"\n",(0,n.jsx)(s.p,{children:"By pressing the Tile button\xa0you\u2019ll be redirected to the form"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(74430).A+"",width:"792",height:"454"})})]})}function g(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},16605:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-100-204150423b4fb2e3d21929959f5b8dec.png"},83572:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-101-d24cc8e78e3c63d861ea93fdbfd74cc5.png"},58063:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-102-dd1136e09b4fc1034168816da0ad10af.png"},19046:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-103-0f4007294185ed7492aaa038a4eb9c4a.png"},68441:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-104-911446e8bba0bb748bd82dd297e0d47d.png"},62192:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-105-c86fd0a6a648b5afaee2ce091c353931.png"},33483:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-106-566ca4ed756f831ec0bfd3edd622e1e4.png"},12354:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-107-9150b413f716cf0961a70c0416dfb840.png"},6885:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-108-1e8f3811b4bd046ecee1b21e6060fbb6.png"},23996:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-109-ca572f52aad0d4c22cecbf7b56d2a9e7.png"},35250:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-110-12e6e87f4b754117623c21f8687e54f1.png"},56795:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-111-88361167c57f1edd2bb60fc3eee8ef1b.png"},75584:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-112-0e5d6859f0c142eb1829f3f5f0e0dbf5.png"},99785:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-113-6d90535a86322c7c22dd3bd6f260c3ee.png"},49814:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-114-24ac3ec85e4b7da0cfe0468385c58996.png"},87263:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-115-cc663c433bd07f02ee7183fdabf9f5eb.png"},1988:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-116-c0fe2f1c96e7af81e1d7ddbc6fd6f652.png"},65229:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-117-c591b4b01ed6aefe9c76a864e3c8dbc2.png"},12346:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-118-01a77c2f9b5e53a0cab568313afd9eb9.png"},2179:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-119-a221e276453bac1a4664afaafd1561fb.png"},86499:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-120-1d41409d142f373e7006165c0970d2eb.png"},85274:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-121-402c5a170c1ca34ee82dd353ac4d42de.png"},15441:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-122-05e833a62211c03f16b6c894cf35a957.png"},1224:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-123-a8050253789cd7a9a409cb4dcd0bdade.png"},74430:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-125-8b7610b6d6bc4dcbf00209ce9a81936a.png"},64162:(e,s,t)=>{t.d(s,{A:()=>n});const n="data:image/png;base64,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"},56332:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-127-ab73bc9691cb09986e9c09a1fbaf5c3a.png"},10491:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-128-18fbae58058c8381ff06a28b3e08391c.png"},33585:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-90-836b52b4a299512e40f6808a45e0f5fa.png"},10887:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-96-99e026c1a0b5d03d254381424ed06a85.png"},92574:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-97-18bca125acd06d2ade1c32e5c77255b2.png"},21481:(e,s,t)=>{t.d(s,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>r});var n=t(96540);const i={},a=n.createContext(i);function d(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);