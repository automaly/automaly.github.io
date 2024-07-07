"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[6867],{21580:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(74848),i=n(28453);const s={date:"2021-05-25",lastmod:"2024-01-25",title:"All about Odata actions in Dynamics 365 Finance And Operations",categories:["Integration"],tags:["Power Automate","Postman","OData Action","API Development"],authors:"max"},r=void 0,o={id:"integration/odata/All-about-Odata-actions-in-Dynamics-365-Finance-And-Operations/index",title:"All about Odata actions in Dynamics 365 Finance And Operations",description:"ODATA actions in Data Entities provide a way to inject behaviors into the data model, or expose custom business logic from Dynamics 365 Finance & Operations.",source:"@site/docs/02-integration/02-odata/All-about-Odata-actions-in-Dynamics-365-Finance-And-Operations/index.md",sourceDirName:"02-integration/02-odata/All-about-Odata-actions-in-Dynamics-365-Finance-And-Operations",slug:"/integration/odata/All-about-Odata-actions-in-Dynamics-365-Finance-And-Operations/",permalink:"/integration/odata/All-about-Odata-actions-in-Dynamics-365-Finance-And-Operations/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Power Automate",permalink:"/tags/power-automate"},{inline:!0,label:"Postman",permalink:"/tags/postman"},{inline:!0,label:"OData Action",permalink:"/tags/o-data-action"},{inline:!0,label:"API Development",permalink:"/tags/api-development"}],version:"current",lastUpdatedBy:"Dynamics365",lastUpdatedAt:1713303528e3,frontMatter:{date:"2021-05-25",lastmod:"2024-01-25",title:"All about Odata actions in Dynamics 365 Finance And Operations",categories:["Integration"],tags:["Power Automate","Postman","OData Action","API Development"],authors:"max"},sidebar:"tutorialSidebar",previous:{title:"Add new fields to data entity or composite entity Dynamics 365",permalink:"/integration/odata/2022-09-23-add-custom-fields-to-composite-entity/"},next:{title:"Business event Overview",permalink:"/integration/business-event/"}},c={},l=[{value:"1. Create an action to OData entity",id:"1-create-an-action-to-odata-entity",level:2},{value:"2. Test Entity Odata actions with Postman and Power Automate",id:"2-test-entity-odata-actions-with-postman-and-power-automate",level:2},{value:"2.1. With Postman",id:"21-with-postman",level:3},{value:"2.2. With Power Automate",id:"22-with-power-automate",level:3},{value:"3. More",id:"3-more",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["ODATA actions in Data Entities provide a way to inject behaviors into the data model, or expose custom business logic from Dynamics 365 Finance & Operations.\r\nYou can add actions by adding a method to the data entity and then decorating the method with specific attributes ",(0,a.jsx)(e.code,{children:"[SysODataActionAttribute]"})]}),"\n",(0,a.jsx)(e.p,{children:"I use this Odata actions mostly in automation job like after refreshing data from PROD to UAT, we need to enable users, assign company to users, enable batches ...\r\nOr simply consume it in Power Automate."}),"\n",(0,a.jsx)(e.h2,{id:"1-create-an-action-to-odata-entity",children:"1. Create an action to OData entity"}),"\n",(0,a.jsxs)(e.p,{children:["You can create a new entity following ",(0,a.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/build-consuming-data-entities#add-a-new-data-entity-to-your-project",children:"this standard docs"}),"\r\nor you can duplicate any standard entity. I created ",(0,a.jsx)(e.strong,{children:"AutomationDataEntity"}),". Right-click the enitity, select View code and add the code"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cs",children:'public class AutomationDataEntity extends common\r\n{\r\n    //1st example\r\n    [SysODataActionAttribute("assignUserToCompany", false)]\r\n    public static void assignUserToCompany(NetworkAlias _networkAlias, DataAreaName _company)\r\n    {\r\n        UserInfo userInfo;\r\n        ttsbegin;\r\n        select firstonly forupdate userInfo\r\n            where userInfo.networkAlias == _networkAlias;\r\n        userInfo.company = _company;\r\n        userInfo.update();\r\n        ttscommit;\r\n    }\r\n\r\n    //2nd example\r\n    [SysODataActionAttribute("ReturnRental", true)]\r\n    public str ReturnRental()\r\n    {\r\n        return "Rental was successfully returned. Thanks for your business";\r\n    }\r\n\r\n    //following 3rd example of an OData action takes in a parameter and returns a list\r\n    [SysODataActionAttribute("GetColors", true),\r\n    SysODataCollectionAttribute("return", Types::Record, "CarColor")]\r\n    public List GetColorsByAvailability(boolean onlyAvailableVehicles)\r\n    {\r\n        List returnList = new List(Types::Record);\r\n        // do something\r\n        return returnList;\r\n    }\r\n\r\n    \r\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["In this example, the ",(0,a.jsx)(e.code,{children:"SysODataActionAttribute"})," class decorates the ",(0,a.jsx)(e.code,{children:"assginUserToCompany"})," method that is exposed as an action. The first argument of the attribute is the publicly exposed name of the action, and the second argument indicates whether this action need an entity instance or not. If you set the second argument to ",(0,a.jsx)(e.em,{children:"false"}),", the method has to be ",(0,a.jsx)(e.code,{children:"static"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"You might need reset IIS service to update Odata endpoint."}),"\n",(0,a.jsx)(e.h2,{id:"2-test-entity-odata-actions-with-postman-and-power-automate",children:"2. Test Entity Odata actions with Postman and Power Automate"}),"\n",(0,a.jsx)(e.h3,{id:"21-with-postman",children:"2.1. With Postman"}),"\n",(0,a.jsxs)(e.p,{children:["Please follow ",(0,a.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/third-party-service-test",children:"this document"})," or ",(0,a.jsx)(e.a,{href:"https://dynamics365musings.com/setup-postman-to-call-d365-data-entities/",children:"this blog"})," for basic configurations in Dynamics 365 Finance & Operation, Azure to work with Postman."]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"Consuming the first example"})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Specify Odata endpoint request with POST method into Postman application"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-markdown",children:"[finopsURL]/data/AutomationDatas/Microsoft.Dynamics.DataEntities.assignUserToCompany\n"})}),"\n",(0,a.jsxs)(e.p,{children:["[finopsURL] = ",(0,a.jsx)(e.a,{href:"https://yourenvironment.cloudax.dynamics.com",children:"https://yourenvironment.cloudax.dynamics.com"})]}),"\n",(0,a.jsxs)(e.p,{children:["Here is the Json file contains the parameters for ",(0,a.jsx)(e.code,{children:"assignUserToCompany"})," method"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\r\n    "_networkAlias":"Max.Nguyen@Microsoft.com",\r\n    "_company":"USMF"\r\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Click ",(0,a.jsx)(e.strong,{children:"Send"})," and you will get your logic executed."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Image",src:n(98115).A+"",title:"all-about-odata-actions-in-dynamics-365-finance-and-operations",width:"1050",height:"426"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"Consuming the second example"})}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Everything should be remain the same, you just need to change the method to ",(0,a.jsx)(e.code,{children:"ReturnRental"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-markdown",children:"[finopsURL]/data/AutomationDatas/Microsoft.Dynamics.DataEntities.ReturnRental\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Click ",(0,a.jsx)(e.strong,{children:"Send"})," and you will get an error"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\r\n    "Message": "No HTTP resource was found that matches the request URI \'https://[devaos].cloudax.dynamics.com/data/AutomationDatas/Microsoft.Dynamics.DataEntities.ReturnRental\'. No route data was found for this request."\r\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["The reason is that you set the second argument to ",(0,a.jsx)(e.code,{children:"true"}),", that means you need an instance for ",(0,a.jsx)(e.code,{children:"AutomationDatas"})," entity before you can use ",(0,a.jsx)(e.code,{children:"ReturnRental"})," method.\r\nMy entity created based on ",(0,a.jsx)(e.code,{children:"CustGroup"})," table, so to get an instance I need ",(0,a.jsx)(e.code,{children:"DataAreaId"})," and ",(0,a.jsx)(e.code,{children:"CustGroupID"}),". The correct endpoint should be"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-markdown",children:"[finopsURL]/data/AutomationDatas(dataAreaId='USMF',CustomerGroupId='BRIDGE')/Microsoft.Dynamics.DataEntities.ReturnRental\n"})}),"\n",(0,a.jsx)(e.p,{children:"The result"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\r\n    "@odata.context": "https://[devaos].cloudax.dynamics.com/data/$metadata#Edm.String",\r\n    "value": "Rental was successfully returned. Thanks for your business"\r\n}\n'})}),"\n",(0,a.jsx)(e.h3,{id:"22-with-power-automate",children:"2.2. With Power Automate"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"Consuming the first example"})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:'Create a simple Power Automate with Dynamics 365 Finance & Operations connector, to consume Odata actions we use "Execute action" action following'}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Image",src:n(61256).A+"",title:"all-about-odata-actions-in-dynamics-365-finance-and-operations",width:"626",height:"541"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:"Consuming the second example"})}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["when specify ",(0,a.jsx)(e.code,{children:"action"})," in ",(0,a.jsx)(e.code,{children:"Execute action"}),", Dynamics 365 Finance & Operations connector understand that this needs an instance"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Image",src:n(71473).A+"",title:"all-about-odata-actions-in-dynamics-365-finance-and-operations",width:"655",height:"541"})}),"\n",(0,a.jsx)(e.h2,{id:"3-more",children:"3. More"}),"\n",(0,a.jsx)(e.p,{children:"In Odata actions, you can return a list"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cs",children:'[SysODataActionAttribute("GetColors", true),\r\nSysODataCollectionAttribute("return", Types::Record, "CarColor")]\r\npublic List GetColorsByAvailability(boolean onlyAvailableVehicles)\r\n{\r\n    List returnList = new List(Types::Record);\r\n    // do something\r\n    return returnList;\r\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"The following example of an OData action takes in list a parameter."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cs",children:'[SysODataActionAttribute("GetColorsByAvailability", false),\r\nSysODataCollectionAttribute("InventSiteIdList", Types::String),\r\nSysODataCollectionAttribute("return", Types::String)]\r\npublic static str GetColorsByAvailability(List InventSiteIdList)\r\n{\r\n    str strCommaSeperated;\r\n    List list = new List(Types::String);\r\n    ListEnumerator  ListEnumerator;\r\n    ListEnumerator = InventSiteIdList.getEnumerator();\r\n    while (ListEnumerator.moveNext())\r\n    {\r\n        strCommaSeperated += strFmt(\'%1, \', ListEnumerator.current()) ;\r\n    }\r\n    return strCommaSeperated;\r\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"The following example of an OData action takes in list and enum."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cs",children:'[SysODataActionAttribute("EnableCTEntities", false),\r\nSysODataCollectionAttribute("EntityList", Types::String),\r\nSysODataCollectionAttribute("return", Types::String)]\r\npublic static str EnableCTEntities(List EntityList, DMFChangeTrackingType ChangeTrackingType)\r\n{\r\n    str strCommaSeperated;\r\n    List list = new List(Types::String);\r\n    int processedCounter;\r\n    ListEnumerator le = EntityList.getEnumerator();\r\n    DMFEntity entity;\r\n\r\n    while (le.moveNext())\r\n    {\r\n        strCommaSeperated += strFmt(\'"%1",\', le.current()) ;\r\n        \r\n        entity = DMFEntity::find(le.current());\r\n        if(entity.DMFChangeTrackingType != DMFChangeTrackingType::None)\r\n        {\r\n            DMFEntityBase::DisableChangeTracking(entity);\r\n        }\r\n\r\n        DMFEntityBase::enableChangeTrackingOnEntity(entity.EntityName, ChangeTrackingType);\r\n\r\n        processedCounter++;\r\n    }\r\n\r\n    info(strfmt(" %1 entity(s) processed", processedCounter));\r\n    return strCommaSeperated;\r\n\r\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"Consuming the action in postman"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cil",metastring:'title="POST"',children:"[finopsURL]/data/AutomationDatas/Microsoft.Dynamics.DataEntities.EnableCTEntities\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",metastring:'title="BODY"',children:'{\r\n    "EntityList" : ["Analysis Services enum cache","Employee V2","Employment V2"],\r\n    "ChangeTrackingType": "PrimaryTable"\r\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["In those examples,the ",(0,a.jsx)(e.code,{children:"SysODataCollectionAttribute"})," class enables OData to expose strongly typed collections from X++. This class takes in three parameters:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"The name of the parameter that is a list (Use return for the return value of the method.)."}),"\n",(0,a.jsx)(e.li,{children:"The X++ type of the members of this list."}),"\n",(0,a.jsx)(e.li,{children:"The public name of the OData resource that is contained in the collection."}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["You can find actions that are defined on data entities by searching for the ",(0,a.jsx)(e.code,{children:"SysODataActionAttribute"})," attribute in ",(0,a.jsx)(e.code,{children:"metadatasearch"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"If you want to check how many Odata actions available for an entity, you can go here and search for an entity."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-markdown",children:"https://[devaos].cloudax.dynamics.com/data/$metadata\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-xml",children:'<Action Name="removeDeleteCT" IsBound="true">\r\n<Parameter Name="AutomationData" Type="Collection(Microsoft.Dynamics.DataEntities.AutomationData)"/>\r\n<Parameter Name="_entityName" Type="Edm.String"/>\r\n</Action>\r\n<Action Name="assginUserToCompany" IsBound="true">\r\n<Parameter Name="AutomationData" Type="Collection(Microsoft.Dynamics.DataEntities.AutomationData)"/>\r\n<Parameter Name="_networkAlias" Type="Edm.String"/>\r\n<Parameter Name="_company" Type="Edm.String"/>\r\n</Action>\r\n<Action Name="ReturnRental" IsBound="true">\r\n<Parameter Name="AutomationData" Type="Microsoft.Dynamics.DataEntities.AutomationData"/>\r\n<ReturnType Type="Edm.String"/>\r\n</Action>\r\n<Action Name="addToAllUserGroups" IsBound="true">\r\n<Parameter Name="AutomationData" Type="Collection(Microsoft.Dynamics.DataEntities.AutomationData)"/>\r\n<Parameter Name="_userId" Type="Edm.String"/>\r\n</Action>\n'})}),"\n",(0,a.jsxs)(e.admonition,{type:"warning",children:[(0,a.jsx)(e.p,{children:"At the time I'm writing this post, Odata actions does not support COC extension (Application 39, Platform 63). So if you write some thing like this, it won't work."}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cs",children:'[ExtensionOf(dataentityviewstr(CustCustomerGroupEntity))]\r\nfinal class CustCustomerGroupEntity_KA_Extension\r\n{\r\n    [SysODataActionAttribute("ReturnRental", false)]\r\n    public static str ReturnRental()\r\n    {\r\n        return "Rental was successfully returned. Thanks for your business";\r\n    }\r\n\r\n}\n'})})]}),"\n",(0,a.jsx)(e.p,{children:"Thank you for reading."})]})}function m(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},98115:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/2021-05-25-all-about-odata-actions-in-dynamics-365-finance-and-operations_1-94a5e42667c94ce6373e9d82eadd504e.png"},61256:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/2021-05-25-all-about-odata-actions-in-dynamics-365-finance-and-operations_2-5407e19466ac5db0fb33e650c3749846.png"},71473:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/2021-05-25-all-about-odata-actions-in-dynamics-365-finance-and-operations_3-563aa4ab553d05ba9d4bbec4a8b88f26.png"},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>o});var a=n(96540);const i={},s=a.createContext(i);function r(t){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),a.createElement(s.Provider,{value:e},t.children)}}}]);