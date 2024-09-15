"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[6047],{3088:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(74848),n=s(28453);const o={date:new Date("2020-05-24T00:00:00.000Z"),title:"Dynamics 365 FinOps Data Integration using Microsoft Forms (Part 1)",categories:["FinOps","Integration"],tags:["Microsoft Forms","Power Automate","PowerApps","Data Entities","integration framework"],authors:"kome",lightgallery:!0},r=void 0,a={id:"power-plaform/2020-05-24-Dynamics-365-FinOps-Data-Integration-using-Microsoft-Forms-Part-1/index",title:"Dynamics 365 FinOps Data Integration using Microsoft Forms (Part 1)",description:"With any D365FO users, Data Management workspace and Data Entities should have become one of the most used and well-known tools in the system. We all agree how powerful such integration framework is, especially when it comes to a large number of records that we would need to import into different tables.",source:"@site/docs/04-power-plaform/2020-05-24-Dynamics-365-FinOps-Data-Integration-using-Microsoft-Forms-Part-1/index.md",sourceDirName:"04-power-plaform/2020-05-24-Dynamics-365-FinOps-Data-Integration-using-Microsoft-Forms-Part-1",slug:"/power-plaform/2020-05-24-Dynamics-365-FinOps-Data-Integration-using-Microsoft-Forms-Part-1/",permalink:"/docs/power-plaform/2020-05-24-Dynamics-365-FinOps-Data-Integration-using-Microsoft-Forms-Part-1/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Microsoft Forms",permalink:"/docs/tags/microsoft-forms"},{inline:!0,label:"Power Automate",permalink:"/docs/tags/power-automate"},{inline:!0,label:"PowerApps",permalink:"/docs/tags/power-apps"},{inline:!0,label:"Data Entities",permalink:"/docs/tags/data-entities"},{inline:!0,label:"integration framework",permalink:"/docs/tags/integration-framework"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{date:"2020-05-24T00:00:00.000Z",title:"Dynamics 365 FinOps Data Integration using Microsoft Forms (Part 1)",categories:["FinOps","Integration"],tags:["Microsoft Forms","Power Automate","PowerApps","Data Entities","integration framework"],authors:"kome",lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"Enable Power BI Embedded in cloud hosted Dynamics 365 finance and operations 8.0 +",permalink:"/docs/power-plaform/2019-12-18-enable-power-bi-embedded-in-cloud-hosted-dynamics-365-finance-and-operations-8.0-+/"},next:{title:"Dynamics 365 FinOps Data Integration using Microsoft Forms (Part 2)",permalink:"/docs/power-plaform/2020-06-28-Dynamics-365-FinOps-Data-Integration-using-Microsoft-Forms-Part-2/"}},c={},l=[{value:"When",id:"when",level:2},{value:"What",id:"what",level:2},{value:"How",id:"how",level:2},{value:"Step 1: Create a MS Form",id:"step-1-create-a-ms-form",level:3},{value:"Step 2: Create a MS Flow",id:"step-2-create-a-ms-flow",level:3},{value:"Step 3: Testing out",id:"step-3-testing-out",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"With any D365FO users, Data Management workspace and Data Entities should have become one of the most used and well-known tools in the system. We all agree how powerful such integration framework is, especially when it comes to a large number of records that we would need to import into different tables."}),"\n",(0,i.jsx)(t.p,{children:"The classic method that we have been utilizing is to include all source data in a single (or multiple, much depending on the purpose and order of data integration) Excel sheet, trigger an import execution, pass any validation layers that present and ultimately have the data available on D365FO. Now, I would like to propose another method that might come useful in some circumstances: Using Microsoft Forms."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Introduction",src:s(33183).A+"",title:"The trio",width:"292",height:"108"})}),"\n",(0,i.jsx)(t.h2,{id:"when",children:"When"}),"\n",(0,i.jsx)(t.p,{children:"This method should be at its finest when you are planning to outsource the input to any external users."}),"\n",(0,i.jsx)(t.p,{children:"Imagine you are a company who is using D365FO to leverage your daily work. You now want to add many local vendors to your system in form of new Vendor Accounts. It is fine to collect all information from them (i.e. Vendor Company\u2019s name, their address, their contact details and so on), put everything in an Excel sheet and import it. Yet, chance is that it would take (a lot of) time for you to finish this task. You would then be very likely to try coming up with some methods to cut down time for it."}),"\n",(0,i.jsx)(t.p,{children:"That demand should raise two questions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How can we let the vendors enter their information by themselves?"}),"\n",(0,i.jsx)(t.li,{children:"And, how can we then have all such information in our system?"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"what",children:"What"}),"\n",(0,i.jsx)(t.p,{children:"What should be needed?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://forms.office.com/",children:"Microsoft Forms"}),": To establish a process in which you will publish a prepared form. Any vendors out there will have the access to it and they can fill any fields on in."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://flow.microsoft.com/",children:"Microsoft Power Automate aka. Microsoft Flow"}),": To set up a protocol to push the input information (form responses) to the target (D365FO Data Entities)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"(Optional)"})," Access to Visual Studio on your virtual machine: To help you determine the target Data Entities more easily and efficiently."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how",children:"How"}),"\n",(0,i.jsx)(t.p,{children:"The flow should go like this."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Biggest FLow",src:s(94883).A+"",title:"The Biggest FLow",width:"610",height:"404"})}),"\n",(0,i.jsx)(t.p,{children:"To make it short, when a response is submitted in Microsoft Form, the Flow in MS Power Automate is triggered automatically. An approval request will be sent to your Outlook mailbox and if it is approved, a new record will be created in the target data entity."}),"\n",(0,i.jsx)(t.p,{children:"Let go through three examples in the next articles in the series (from the simplest to a more complicated) so we will see the logic behind this process."}),"\n",(0,i.jsxs)(t.p,{children:["As easy as it sounds, in this example, we will create a new Vendor Account from Microsoft Forms with only a small number of fields being populate.\n",(0,i.jsx)(t.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"To help simplify the example, the number of fields is minimised. In other words, we will import just enough fields so the new Vendor Account is valid."}),"\n",(0,i.jsxs)(t.em,{children:["Given that, only ",(0,i.jsx)(t.code,{children:"Vendor Account"})," and ",(0,i.jsx)(t.code,{children:"Vendor Group"})," are chosen to be imported."]})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-1-create-a-ms-form",children:"Step 1: Create a MS Form"}),"\n",(0,i.jsxs)(t.p,{children:["To do so, we will access ",(0,i.jsx)(t.a,{href:"https://forms.office.com/",children:"Microsoft Forms"})," and create a new form. To make the new form usable, we will create two questions asking for inputs of Vendor Account and Vendor Group."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example 1 Form",src:s(65784).A+"",title:"Example 1 Form",width:"692",height:"586"})}),"\n",(0,i.jsxs)(t.p,{children:["Note all information on the form is customisable.\n",(0,i.jsx)(t.strong,{children:"Note 1-1"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["We can make the questions...any questions that suit the purpose of the form. Say, in reality, the question can be ",(0,i.jsx)(t.code,{children:'"What is your company\'s name?"'})," if you want to send this form to any external vendor users. The question does not change the usability of the returned response's value. It can still be mapped to VendAccount not matter what the question is.\n",(0,i.jsx)(t.strong,{children:"Note 1-2"}),"\nThe second question is being set in form of a Choice question. The given choices should match with available Vendor Group values found on your D365FO client. If this question is a Text one, chance is that its response might not match with any available Vendor Group values, thus, will return an error during Flow runtime.\nVendor Groups can be found under ",(0,i.jsx)(t.code,{children:"Account Payable > Vendors > Vendor Groups"}),". In this example, ",(0,i.jsx)(t.code,{children:"TopVendor"})," and ",(0,i.jsx)(t.code,{children:"Others"})," are two available Vendor Groups in my D365FO client."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Vendor Groups",src:s(19425).A+"",title:"Vendor Groups",width:"475",height:"268"})}),"\n",(0,i.jsx)(t.h3,{id:"step-2-create-a-ms-flow",children:"Step 2: Create a MS Flow"}),"\n",(0,i.jsxs)(t.p,{children:["To do so, we will access ",(0,i.jsx)(t.a,{href:"https://flow.microsoft.com/",children:"Microsoft Power Automate"})," and create a new flow. We will go with an ",(0,i.jsx)(t.code,{children:"Automated"})," one in this case."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Flow step 1",src:s(67458).A+"",title:"Automated flow",width:"1263",height:"505"})}),"\n",(0,i.jsxs)(t.p,{children:["Search for ",(0,i.jsx)(t.code,{children:"form"})," and choose the trigger ",(0,i.jsx)(t.code,{children:"When a new response is submitted"}),". Hit ",(0,i.jsx)(t.code,{children:"Create"})," to create a new flow."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Flow step 2",src:s(68312).A+"",title:"Form trigger",width:"903",height:"570"})}),"\n",(0,i.jsxs)(t.p,{children:["Choose the ",(0,i.jsx)(t.code,{children:"form"})," that we just created using the dropdown list."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Flow step 3",src:s(78610).A+"",title:"Choose form",width:"613",height:"123"})}),"\n",(0,i.jsxs)(t.p,{children:["Press ",(0,i.jsx)(t.code,{children:"New step"}),", search for ",(0,i.jsx)(t.code,{children:"form"})," and go with ",(0,i.jsx)(t.code,{children:"Get response details"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 4",src:s(3988).A+"",title:"New step: Get response details",width:"627",height:"494"})}),"\n",(0,i.jsxs)(t.p,{children:["In the new step, choose the ",(0,i.jsx)(t.code,{children:"Form ID"}),". As soon as we move the cursor to the ",(0,i.jsx)(t.code,{children:"Response ID"})," field, the ",(0,i.jsx)(t.code,{children:"FLow"})," will suggest the ",(0,i.jsx)(t.code,{children:"Dynamics content"})," that we can use. In this case, there should be only one dynamic content, which is ",(0,i.jsx)(t.code,{children:"List of response notifications Response ID"}),". We will go with it by choosing it."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 5",src:s(45314).A+"",title:"Get response details",width:"893",height:"467"})}),"\n",(0,i.jsx)(t.p,{children:"After doing so, the flow should look like this."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 6",src:s(2296).A+"",title:"Form done",width:"615",height:"307"})}),"\n",(0,i.jsxs)(t.p,{children:["Now, the reponse details will be sent from the ",(0,i.jsx)(t.code,{children:"Form"})," to the ",(0,i.jsx)(t.code,{children:"Flow"})," when a new response is submitted. Next, we will set up the step to create a new Vendor Account."]}),"\n",(0,i.jsxs)(t.p,{children:["Create a new step, search for ",(0,i.jsx)(t.code,{children:"dynamics"})," and go with ",(0,i.jsx)(t.code,{children:"Dynamics 365 for Finance and Operations"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 7",src:s(97442).A+"",title:"Dynamics 365 FinOps",width:"626",height:"455"})}),"\n",(0,i.jsxs)(t.p,{children:["Choose ",(0,i.jsx)(t.code,{children:"Create record"})," action."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 8",src:s(93581).A+"",title:"Create record action",width:"623",height:"298"})}),"\n",(0,i.jsxs)(t.p,{children:["Choose the Dynamics 365 FinOps ",(0,i.jsx)(t.code,{children:"Instance"})," from the dropdown list. If your client does not appear here, choose ",(0,i.jsx)(t.code,{children:"Enter custom value"}),". For privacy, environments' name will be censored in our example."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 9",src:s(16695).A+"",title:"Set D365FO instance",width:"623",height:"415"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Instance"})," should be the ",(0,i.jsx)(t.code,{children:"link"})," to your D365FO client. Set ",(0,i.jsx)(t.code,{children:"Entity name"})," VendorsV2."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 10",src:s(58760).A+"",title:"Set Instance and Entity",width:"613",height:"312"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Note 1-3"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Later in this series, we will see how to find the exact ",(0,i.jsx)(t.code,{children:"Entity name"})," using ",(0,i.jsx)(t.code,{children:"Visual Studio"}),". Also, we will see in which condition, the Entity can be used in ",(0,i.jsx)(t.code,{children:"Power Automate"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Populate the fields that we want to import. In this example, we will populate only 3 fields: ",(0,i.jsx)(t.code,{children:"Group (VendorGroupID)"}),", ",(0,i.jsx)(t.code,{children:"Company (DataAreaId)"})," and ",(0,i.jsx)(t.code,{children:"Supplier Account (VendorAccountNumber)"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Dynamic content"})," will be suggested automatically when the cursor is placed in each field."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 11",src:s(72616).A+"",title:"Map Form fields with Automate fields",width:"734",height:"549"})}),"\n",(0,i.jsxs)(t.p,{children:["We can map ",(0,i.jsx)(t.code,{children:"Form fields"})," with ",(0,i.jsx)(t.code,{children:"Automate fields"})," or ",(0,i.jsx)(t.code,{children:"hardcode"})," in these fields:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Group"})," = Response of ",(0,i.jsx)(t.code,{children:"What is the Vendor Group?"})," question."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Company"})," = ",(0,i.jsx)(t.em,{children:"(hardcode)"})," ",(0,i.jsx)(t.code,{children:"usmf"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Supplier Account"})," = Response of ",(0,i.jsx)(t.code,{children:"What is the Vendor Account?"})," question."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Name"})," = ",(0,i.jsx)(t.code,{children:"Supplier Account"})," =  Response of ",(0,i.jsx)(t.code,{children:"What is the Vendor Account?"})," question (",(0,i.jsx)(t.code,{children:"Show advanced option"})," on the Flow to find the field ",(0,i.jsx)(t.code,{children:"Name (VendorOrganisationName)"}),").\nThese fields should be required when creating a new Vendor Account on D365FO client."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 12",src:s(66976).A+"",title:"Map Form fields with Automate fields",width:"611",height:"307"})}),"\n",(0,i.jsx)(t.p,{children:"We are done here with the set up."}),"\n",(0,i.jsx)(t.h3,{id:"step-3-testing-out",children:"Step 3: Testing out"}),"\n",(0,i.jsxs)(t.p,{children:["On ",(0,i.jsx)(t.code,{children:"Forms"}),", choose the form that we just created, click on ",(0,i.jsx)(t.code,{children:"Preview"})," so we can submit a form response."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 13",src:s(85904).A+"",title:"Map Form fields with Automate fields",width:"695",height:"657"})}),"\n",(0,i.jsxs)(t.p,{children:["Check out ",(0,i.jsx)(t.code,{children:"All Vendors (VendTableListPage)"})," on the client to find a new Vendor Account is created."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"FLow step 14",src:s(25440).A+"",title:"Map Form fields with Automate fields",width:"587",height:"341"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Note 1-4"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Use ",(0,i.jsx)(t.code,{children:"Test"})," option in Power Automate to follow the process of the Flow. This, in other words, is so-called ",(0,i.jsx)(t.code,{children:'"Run Flow with Debug"'})," option."]})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},94883:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/Biggest-Flow-9d1f25799bfd839c3a4f9033caf03e92.png"},65784:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-1-NewForm-d6ab1021fee134506d03dd99bd4a3646.png"},93581:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-10-Flow-8-d049a5f207db4de90e3694099056ccd3.png"},16695:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-11-Flow-9-8c0178f8b838cc9c84fb57f39bfe8637.png"},58760:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-12-Flow-10-f6bb0c4eba208f773e803b9ae4193a8c.png"},72616:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-13-Flow-11-de44947176ee621a5c24aa7827f9e5b2.png"},66976:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-14-Flow-12-826286f5b897005e41cdf755cde75fa4.png"},85904:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-15-Flow-13-e9af49f8bc41dfb249826c6ffc4e86ec.png"},25440:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-16-Flow-14-13c4213f919d93e2521d8e90d4e0ab7d.png"},19425:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-2-VendorGroups-7274fef80746ebe5274ccdd8ccefe080.png"},67458:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-3-Flow-1-245bd06e0f6ddedd72e55fffeb9534e4.png"},68312:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-4-Flow-2-fccf44b999fe9e48bf7dca26d87f21b3.png"},78610:(e,t,s)=>{s.d(t,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmUAAAB7CAYAAAA1zPflAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABuVSURBVHhe7d0LdFTVoQbgf/KCEIPyFDACES0liDReWIJIoWgDapArAcWghYsVfFbrhas0qAtLFnURES8oQmuuWElRHhYBkbRyRS8GhQVVNCyrNKIYMCE88n7nnn3O3jP7TGYmk2QGJsn/dW3PPo85jzmx87v3njOOysrKBkgNDc6qjbflREREROQfh8Mha3ZquTOUuQevpuaJiIiIyD/ugczTvBnK9MDlqe4eyNzniYiIiMjOWxDTl9vqFRUVzoTlHsLE1H2ZoNeJiIiIqDFP4UtM9bptqkKZexBTRV+m6vqUiIiIiOw8BS/3eqNlIpS5hy5V6uvrbfP6ekWvExEREXVkKmQJjUKXLGFhYbZ55/ry8nIzVamwpQcxVfcWzvQpERERUUenhyw1VUWFMT2U2QKaCGUqbOkhTBV9Xm2niqCmRERERB2dCFdqqhcRvvRQ5j5vbldWVmbkKlco00tdXV2jZWpbVQQ1JSIiIuqoRLBSU73oIUyU8PDwRsvMbUUoU2FLTFUQE1NV1LzaRm0vMJgRERFRRydClftUD1wqiImpKmreGcpKS0vNUKaKHsb6Z76Oa/v2waKxY/DLK+IRHRFhHoiIiIjaj4raWvztX3lY8tFeHDxxUi6lYPluzq8ahTMzmJWUlDSIVi69RazWuDmipGS/jz2z7sZXX3yBZcuWYffu3aisrJS7JCIiorauc+fOmDBhAhYsWIDBV1+NceveYDALsrxZMxEREWEWvcXMDGXuLWQqlH1WVY3+5WVImjQJNVVVcldERETU3ohwtnPnTlyZkID80lK5lAIp4eW15vToPXfZQpkqjuLiYlsoU4GspqYGffv3x69nzcK7776LmquHoern49EQ3cXcYSjLfXCurBEREZEvZ0+fxsrnnsP2TZtwyy234I033sDXZ87ItRRIKpT9M/UOREZGNgpmYeZaSXRjiiJCmpiKMWSiy1JoK4GMiIiI/HdJ9+545IknzLr4zFcD1Sl49KwlimKGMrVQL2JjQY0hYyAjIiJqn0QwEzhu/PzQA5lewsQ/BH0qigplRERERBQ47q1kaupsKVNTvRARERFRYHnKW2JqG1OmqA2IiIiIKPA8ZS1nKFNpTW3EYEZEREQUeHrW0rMXW8qIiIiIzjNPWctjKBMCEczEl2qjwsMDViLDvJ4uERERUZvgLWM5zp071+D+0Njq6mqzJCQkoFu3buaGJf9pPcOkOaYM/gleuy0ZlcZ+A6GyrhbXZ76OE008aZgPjyUiImqe6wYNMqdnzpzBP0+fNusUWOrhsZ9PvQ1RUVFm0R8iG9RQtjb5ZiRfdSVS335HLmmd91LvNH+T65Mf8uUSzxjKiIiImoehLPiaCmVB7Q90GP+rrK3DB98e86t8eOw7/FBcjEmDrsANl8fhx7JS2/p6jnUjIiIKXbWVyD1wFs/9uRAzXijA4GVWuXFVIdI2ncWe/Gq5IXkSMoO0xE86rUi6CTvuuhMDL74YiX0uxa7UGVg6YTxijBRJREREIaq+GkdzijDrxWLcvqcahdHhmDY2GuuSrfLEsHB0Ol2N360/izEvF2HbdwxnngQklIkB/SJUuZfwMAfET2h5Whfm9tta4wcOwHWX9cNv3svGqv0HsOKT/ZizbQfm/lsiZl0zTG5FREREIaWqDJmZZ3HLx/VIuD4G+x/tjYxp3TFtRCxGDbFK0rjueHpub+y9PwZP9qrHH948i7Q95aiSuyBLq8eUiXCVcdME/Gp44+DURfSThoWhuKrx236k8BR+vu4NqA7J/ffOxqf5J/CPkz/i+aQbza7Ke95+B1OH/BQXd4rCTKNetOC3+MXr6zmmjIiIKMBaNKasqhSrXy3HivoIrLunG0Zd7M+PmTeg+PAZzH2vFnE3xCJjdLRc3v4FfUxZrLHD4X0uxSWdOzcq4jEWIrR5Wjf68jhEGuuVmKhI1DXUo19sDKKNE+xknFyMse/CsjJjH2FmixsRERGFihoc2llhBrIN93X3M5AJDnQd1g1rkyNw/P+MUPd1jVxOQRlTJp6/UVNfbytNDdJ/5cAhJPTsia1ffY3f7vobfrMzG58XFGDqkMH4xkjsVbV1csvAeaTHLGxza3Q7tXkWBs/ZhFNy3rIfq9W2B5Z7WE8dwaGMHhicsV/OBZf5dxjIY+Vv8vj3HlDmMZbjkJwlovat6usSPPs18NjNXZHYSS60qcahj05j01FP48eMYDYkFk8MBlbsKkVuvVzcwQUllH1z5iyuWrXaVtZ9dliu9ezN3CPoHh2NDSn/js9/LEBBeRnWTUlGry5d8Py+T1AXhG9eJk3ZjuO2D6kC5OzYDmzdhhx9ef4x5GI44vrJeeqQEucX4av5I+VcG9NvGlYWrcNk+TfsKfSJ0PnI5gI5R0TkSzX27KtFQXxnzBkUIZe5a0DxyTocPeft8zsSib+IwrSKGmQfCczzTNu6oISy2ro6/FBSisiwcFwaE2MWMb7Mlx/LynDPX9/BkcIiLPvljfjdDWNQVF6Bfi+sxInSMrlVYMUlGAn9A+2DKf9DZG9NbhTWTuVsQ/bCsUiU80RERB1aWSX2nQTuHn4RPDaSmTph3PReeOJa71sgNgaTBwGrj1Rw0L8hKKFMED+JtHj8WHxy72yz3Dl0iFzj3ZeFp3D7xs247tXXzDIp602U1QSvrzlxfBqQe8zVFZn/nRG+HsYztyZrYc1qPXtsvL2F5HvR0tCjh1Xcu5lEF6daZ+sykt2gB0Q3j1rvq7unANvmqO2a2FZ2qx5q9nlZx1h9wNzC5N5N570rTV7PZrlftY3X65f7cq5T16O6h8XU8+savxce9msc3zx3uY2t1cfsWnOt06/X8zk15v4+6Mfy3qWtX5PrnBq/p43vg2A7N337Rvdbvh/6e2/bv3qPrfMeM3c7sHSSud3qA9axZywFsucOce1L8HEv3a9tdY5cTETtX34t1iMciQN8jSOrwp6NhXjuoK+4FYGEgeHAsRoclUs6sqCFspq6Ojz5/v/i6lf+iOFr/oQNX+bKNS6H5s7BF/ff53fRvxgQECPG4jGtq/LQB+lm+Oo5ejKSnGHtGI5vTbZ3XW6dh0wsw1dFRfjq8BokGR9uzg9T8SE2Edgg1omyazjmL9I/sLdj/svAM+b6I8iYko4Ztg9PTf6HOH7rEWs/cttMX91LLTqv3hhtC6H7sc/4cMbSj5zh5Pu8xqHUxbievLHWPkXXnq/rN4LR4rnDtXVjzT1YjP0M+wij9NcNUwFJhIYhmJ/wnrWu0XrJuN5949X6NCNgLJAhwnj9onlI2CXXFb2HUeYLrNAzZsdk7JX73bv2M+/3Q2dc54zcNa7XPThArrA7lDEJuWtd93CO5808M65nsbqf4v7nTrIHTe1+710L4/0wwtEH8l6Y93+VW4iyiG7YvWuTgYXW+/nAiN6YnFmEDQuBJPNcZTenz79lEcgmAc739AjidsxDtrmOiNq7U6fqgNhwxEXJBR41oLi4AcerfA8/6hprBLv6BhQGp1PMrqwCh76tlDMeiIffHinDKa+9qfU49W0pjpcFfkiVELRQJohhYGLQvznIPzjn30ojMWrhdmTniA86EUZk+Oo3AAkqrB34CCumTMZoPZRNWYNnUnpb9X7TMMf4MMs9Zn1YimCXtPZuV1fniLuRAX2MWjIylkxDT7NufBg+6NZapzP2/YA6jgxP2XnH5LwHLTwvWwgV4+cWrjEC4GeyC1e8L2kYNULUPTGuJ9UV2Jq+frVfw4iRWpewsZ/Dj9tfZ4TQfSJUmt3Kadigj+fS1ytGyHhAnae53t4Nrd4Lcd8Tze1kK+iD6n4Y70XKw3hMC6Q+bf0O38tqT+Na1D7cue5Zb+O46n76wbieldr9F38r2Ts+dP2taPfbvIf6vej3cw9jJpvH5700/71Yg+nOvwvj/JYYQVDOEVEHEAl0ltXWq0dxsPsvq0uw4pUSzNhYjLl7KuRCXTX2bC7G7dvLMMWYFsuluuN7ijBmYzlufOUM9lXLhQEUtFAWER6O9Anj8I+59+LgfXNwh4fuy8S1mWZLmr9FtL4F2uXxMuiIMOIMX66wdurYZ0i69edeP3DtCnA8V3UBqW6dIZi/teUfjnoXmdnl1CJNnJcWQsX4uYTx04wAaGwvwqr48PV7PF1Tx5mGlYcnI1u06Bjr3Lvq7HqbY/5Molt5Sn9cLmct1npX0PJFtAQdQdIOeV7OljDRCgqsmKjOVZRJWKEHR29GPI6vdgEzzNe4d+u5iFapDbC6CVv9rd1+/b2HHnEPA/plFN/3Uvx7gYQBfv57QUTtTVQnIz6crTf+nyJQwhF3iax2YEELZaKXWTw4VnQ5iuL+BH93PbtEY8ddd+Dvd99lK7tmzsDASy6WWwWe2cKw9CNsM8IItPBlhbUPzZaUhAH+tm5YQeExZ5eOqzhbcJpBBLLMeNX1JbucWqSp81IhdL9xvcPNVjHxvmDHhzgkQmm8v31ufly/+S1Asew9wAhD3oOZFQpMIoxorVK65twb0UUnzsUMSWYwG4C4KaKFzn6uzu67pohgJrY3g6bvYCa223vrNoxpTTAT4VRWg8/3vew5YHjjFt7zen5EdCF17R6GhPo6HA3A75Yf/1F0hYahV1D77gxRsXjs/lhsmN4Va8d5emBtFMaldMXbyTHYaky7yqW6uHE9sHd6F7x/fzeM8tl12zJBeQsiwsPQL/YiREf4/5uVncIjMCruMgzu2QODundzlnED+qNLM/bTbGY3Tzrmz7WHL6tLb5vZbea9664x8eWBFRN9DMj3mxVKXOckH9fRQk2dl1ifvWMVshNkq5h4X7ANmTuApNH+Bp8mjnNguRbCRCCSVdN2zM9yjeU6tXkB5kN2j8l7ZBvrJcZ0+exW1e3Hau21InBbRJcw3Mb8+efU5uWuEGa2UnlSgG0Zrn2bQUYy68Z/DKj3ybzerXJGsY0JM65hYrqtqzXYfN5LMyjPw0bn/TSu9eV0WSeidq9/JJLCGrDvX9VyQUtVYF9uAxLiIxEnlwRVTDQSB/rodI3ojIQhMejp7SkfRmzqOfAixMX4+6Dc5glKKBvUrRsOz7sPt/3kSrnEP7mFhRi/bj3i//tlZwk+q0UAcPuAN0PJ9uY/CmPE49ZgcWeXj1Fa1DpijSFyda0twPGElraUGZo6L/NLD0YwdQ7oF++Lcf1wG0/XFF/HMT7Ic53XMwTZtx7RWhCTkRH/kfM1Y8QXAjK1sXeZ1kB35z7NAejaGDSfjACovdYc2C/Hp/VMWYcNCfMwRu1XFD8G+vccIAfWm68RA949ta4Z7yG0fYtzVtdkvE8bFhpBU65bjIeRYQuphoWTgUWuY4gvDLSkxdUTa+yc+valtSwxdQ2gf/vS570UXdFrtPu5AHiQY8qIOoywGIwb6sCmfWWte/BrXiXWn3NgZmKMXNCxtfq3Ly/u1Alb7kgxW7Saq8vSZaiW48Qui43FhpQpmL11B46eOWMuEyp/91+4dm0mck+dQvnCBfzty3ZJfJNvFeIO+9ltSEREAdfs374sKcazaytReF0sVt7gqTuwAVUVNagKj0TXKA8tS/Xl2PSnUrzQPRq7p8X6eN5Z+xH0374sNcLb4YICnKusalRE4BLfvPS07lMjWAVj4D4RERGdB7Fd8eCYMBzMKcXqI9Vyoc6BTtFRXgJZFfb9tQxpJeF4fnLHCGT+aHUoEz9/9Hj2+4hf+XKj8lbuEeSXlHpcN/a1Pzd6Ska3ztFIvupKzBia4CxEREQUmnqOuhh/vAZ4Y/tZpO0pQ7E/XZllZdi0/hxm5TmQcU83jGIicwrImDLRGlZcVdWo1NTVe13n/luWVXW1ZrflTVcMROrVQ51ld94xlNZ4SuDUfozEA/5+45GIiEJIJBIm9sCbvwjH8QNluPmVImz6ugJVnh6+WlKOPX87hVmvlOGFknCsvKc7JvcOytD2NqvVY8p8+WPyLbgxfiCuWBmYAfscU0ZERBQczR5T5u5MKTa9X4HVeQ04bswOinG4HnNR1WA9bDXCgTmjuuCB62LQtQPmsabGlAU1lK1Nvtnsjkx9+x25pHXeS70T49a9wVBGREQUYK0OZUp1FY5+X43cf9WgUP58dadukUgcFI2E3l6fNdEhXNBQlvLTwXj1tltRUeP1R6Sapbq+Dtdnvo4fSkrkEs8YyoiIiJonYKGMvLqgoczhcCAyLHDtk+J3NGvqmx5FyFBGRETUPAxlwRf0R2L4IkKUeCxGoIo/gYyIiIioLeLXHoiIiIhCAEMZERERUQhgKCMiIiIKAQxlRERERCGAoYyIiIgoBDQZyjp37mxOHRXl5pSIiIjal7PyERjqM58uDJ+hrKK2FhMmTDDrnT78gMGMiIionRGBbOVzz5l18ZkvHmdFF4bPh8d+ExGJ/uVlSJo0CTVVVfIlRERE1N6IVrKdO3fiyoQE5JeWyqUUSK16ov/snE+xZ9bd+OqLL7Bs2TLs3r0blZWV5g6JiIio7RNhTLSQLViwAD/72c/kUgqGiCV/MKctCmXXbHkH1/btg0/vnW3uhIiIiIhapqlQ1uRA/4MnTsoaEREREQULH4lBREREFAIYyoiIiIhCAEMZERERUQhgKCMiIiIKAQxlRERERCGAoYyIiIgoBDT5nDKhdtGT5pSoJdasWSNrREREbd+8efNkrXla/fBYgaGMWkOEspb+ARMREYWS1nymtfrhsUREREQUfAxlRERERCGAoYyIiIgoBDCUEREREYUAhjIiIiKiEMBQRkRERBQCghvKDixF0QFZ1x1+Dampqa7ydDYK5apgK9z1DJ7Z5eVo4rwyv5QzREREROdP0EJZUfdf48wxo3JsIwq6L0WxtdjlpjRkZWVZ5dkk9JKLiYiIiDqioIWyHqeXAttfRe124KLTC9FVLidq0r50OBwOV7kjCyflqvPt5F9SkPKXlhw9B+nGuafvk7OeqOu8gNdHREShI2ihrHzzQtQ/9A0uNUrpZv87J7/M9NytaXU7ZuM1sTzzSzn/JbKftrY1uyS1btHXDssX+lTofH1q6jPIzpeL6cJ79mM0NDRY5a1U9JGL24Kc34swudu4BrnAo5PIWn4Q679ve9dHRHQh5GQZpVzO+MvY/iXjdZVyNtQFLZR1SfkTeowwKiMWoneKh87Jv6c7A5QaxyUCWTpc3ZovjtmLR7UxXl+vy8dIsW7OUDn/FvCI2DYN8eseRer+kdZrFyYhe2PT49S+zHwUrw1Ux3sY2Jst1xC13OinRJhMwwQ5T0RErWSEq4+PAFOfaUYwM7ZLN7Zfcgg41Nwwd4EEd6C/L/qYMjNkFeKHb5OQJgOX0GviHUj6+36oWHbVrFvhWivmH0aSmfd6o9+VV2H2ZLm2Tz9cZdV8cD9eLyRNT5J1Cj2iOzAFWcetOdGt6Ph9jqgh6w6tq9NcZhEtVun7rG5EsU50JZqvM+ft+0r5S462n3TjaJ5ZrWBWaVm3piDOuS9mbtyCmZe79qPvW+/StM4vy7oOcX3Hs5BirM9R12Ju67pO/T0gImoXugD/uRCY39nPYCYD2SqjumWx8R/LxuvbggsXyi64AuR/I6sUep6+3hVQzJAxGmk512Lm/1ih5KG3U3DiqdHG8j5IfUt2czacwPrDGc6wJSwavRsTxLrv1+PgaAcewkvmtieyYO1L2pKaASy39nMi6yCu9xBsRGja/UvXsVLefsh2LP+JczbOdfpUs/ty8119zH1fD1eX7YnbN6Ovdg5bUvOs6zCv2bBxJjLktXw8bCb6OuR1NnyMJU/b3wMionbB32CmApmx3bttKJAJIRTKeuGygdlI17orC3e9heybRtpaxwJnKEbelI23nI/HKDS7PClE6GPKVBAZlWbEFiOsXb4ZKcu1cVjOLwZYrU95WiBZkpNmxDlDXDyuxRLMNwKQ0Cf+WnOqTM16CalxVr3PXfONYLPbrbXsJPIOi5Ang6KHY7Wc2PcSfKyu0+B+DlOz7rWuQ5m+Hi/Ja4m/cqq2Ph7x080KEVH701Qw0wOZsV1iGwpkQki1lA2d8yJmf+saa/bo3jF4UevODLShc+RYNPN4q4Ax7L4MdSKA2IhAtjweJ2SA+9jn4PrWslq2nGHRKGmj5CoiIjo/vAWzNh7IhAsTyobNdg7Wt+uFpGflODNRtOeX9Zq4GIsnur4wYJ8Xr1ssx5eJ2SQs9vLsM/vrhmK2OlaW8fqJ3s6LQoIRwPp+Mx8N36dg8+PWmKuTeQeNv6d42WqWg91Pm5Vm2/L2bm0MVwYWPTvB3jJlHCF+2BZbl2fgiH0vsnWZej4HIiIyuQezgrYfyIQOPKaMQpo+pkwMvBeD20cfxPr/MGJKXCrmi3FURoixuvnUtk09hsK7qcPy8JA8Xl/neDW70U+JMWtu5yXXtZb7vr2dAxERSVowu/6pth/IBMe5c+ca6urqUFtba5aamhpUV1eb5Zot75gb1S560pwStcSaNWswb948ORd6xLcbxRcAxIB7IiJqY8qB59cCE+aen0DWms+0iCV/MKefT70NUVFRZomMjERERIRZ2FJGREREbZdoMXusbbeQKQxlRERERCGAoYw6vD53bWbXJRERXXAMZUREREQhgKGMiIiIKAQwlBERERGFAIYyIiIiohDAUEZEREQUAvjwWAo68aA9IiKi9iJYD49lKCMiIiI6D/hEfyIiIqI2gKGMiIiIKAQwlBERERGFAIYyIiIiohDAUEZEREQUAhjKiIiIiEIAQxkRERFRCPAayhwOh6wRERERUaB4y1geQxkDGREREVHweMpazlAmVqqi5omIiIgosPSspWcvtpQRERERnWeespYZytQKldZUISIiIqLA8pS3xDRMn1FTc0WY1+8AEBEREVELiYyl8pagps6WMvfCUEZEREQUeHoos2Uvud7kXCg3JiIiIqLA0rOWnrfM7ku9iI1ECQ8Pl5sQERERUaCIjKXyli2HlZSUNBhQV1eH+vp6c1pbW2uW+HXr5cuJiIiIKBDyZs1ERESEWVRAM6cimQl6UmNLGREREVFwqCCmZy/BUVZW1iBayERrmWopU1NV1LzaRm0vuE+JiIiIOhpnsNKmehel3iKmipp3BjQRykSgEkUFLlVUINOL2lYVQU2JiIiIOio9kOlFhTNVVBDTi7lteXm5kalcoUxN9RCm1/UiqCkRERFRRyfClZrqRQ9f7mFMTc1QJl6sgpYevvRQppaJorbXp0REREQdnQhX7lNVGoUwt7qjoqLCyFX2sKWKtzCm6oJeJyIiIurIRLhSVNjS66LYgphRnOtFKBMz7qFLFX2ZqutTIiIiIrLTw5aautcbLVOhTPAUvDyFML1ORERERI2pwCXYwpdWt00rKyuNjOU5cKm6ewhznyciIiIiOxW2FPcQJtjqIpSJSlPBi0GMiIiIqGW8BTRFzDtDmeAteDGQEREREbWOexBTrOXA/wO+Ff5lInJ1YwAAAABJRU5ErkJggg=="},3988:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-6-Flow-4-c77c559c961182ab11b5cc0cd548521f.png"},45314:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-7-Flow-5-ef1f55975d57a4e0b8d5f05caa412407.png"},2296:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-8-Flow-6-bccfa6928101e76b47b1b2cdb6594940.png"},97442:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/E1-9-Flow-7-92b13e54b39c19bb8b26bedb732ad6a2.png"},33183:(e,t,s)=>{s.d(t,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(96540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);