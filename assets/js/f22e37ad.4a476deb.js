"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[6569],{36676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(74848),s=t(28453);const o={date:new Date("2019-10-15T00:00:00.000Z"),title:"Insert multiple records in a single transaction using Odata from Postman",tags:["Postman","ODATA","BATCH","integration","d365"],categories:["Integration","FinOps"],lightgallery:!0},i=void 0,r={id:"integration/odata/2019-10-15-insert-multiple-records-in-single-request-using-odata-from-postman/index",title:"Insert multiple records in a single transaction using Odata from Postman",description:"Got inspired by this topic, I'd like to write this article to show you how to post multiple records in single request by using Postman.",source:"@site/docs/02-integration/02-odata/2019-10-15-insert-multiple-records-in-single-request-using-odata-from-postman/index.md",sourceDirName:"02-integration/02-odata/2019-10-15-insert-multiple-records-in-single-request-using-odata-from-postman",slug:"/integration/odata/2019-10-15-insert-multiple-records-in-single-request-using-odata-from-postman/",permalink:"/docs/integration/odata/2019-10-15-insert-multiple-records-in-single-request-using-odata-from-postman/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Postman",permalink:"/docs/tags/postman"},{inline:!0,label:"ODATA",permalink:"/docs/tags/odata"},{inline:!0,label:"BATCH",permalink:"/docs/tags/batch"},{inline:!0,label:"integration",permalink:"/docs/tags/integration"},{inline:!0,label:"d365",permalink:"/docs/tags/d-365"}],version:"current",lastUpdatedBy:"Dynamics365",lastUpdatedAt:1713284865e3,frontMatter:{date:"2019-10-15T00:00:00.000Z",title:"Insert multiple records in a single transaction using Odata from Postman",tags:["Postman","ODATA","BATCH","integration","d365"],categories:["Integration","FinOps"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"OData - Data Entity",permalink:"/docs/integration/odata/"},next:{title:"Consuming Dynamics 365 Finance and Operations OData services from .NET",permalink:"/docs/integration/odata/2019-12-16-Consuming-Dynamics-365-Finance-and-Operations-OData-services-from-NET/"}},d={},c=[{value:"1. Get Dynamics 365 for finance and operations authorization",id:"1-get-dynamics-365-for-finance-and-operations-authorization",level:3},{value:"2. Create a new POST request in Postman with header",id:"2-create-a-new-post-request-in-postman-with-header",level:3},{value:"3. Modify the Body in Postman",id:"3-modify-the-body-in-postman",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Got inspired by ",(0,a.jsx)(n.a,{href:"https://community.dynamics.com/365/financeandoperations/f/dynamics-365-for-finance-and-operations-forum/286810/inserting-multiple-records-via-odata-from-postman",children:"this topic"}),", I'd like to write this article to show you how to post multiple records in single request by using Postman."]}),"\n",(0,a.jsxs)(n.p,{children:["Generally, batch requests are supported in the ",(0,a.jsx)(n.a,{href:"https://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part1-protocol/odata-v4.0-errata02-os-part1-protocol-complete.html#_Toc406398359",children:"OData service"}),", The easiest way is you can use the C# code approach from ",(0,a.jsx)(n.a,{href:"https://github.com/Microsoft/Dynamics-AX-Integration/tree/master/ServiceSamples/ODataConsoleApplication",children:"github"})," and the excel add-ins in Dynamics 365 for finance and operations use Odata batch to communicate in a single request but how can we leverage it in Postman."]}),"\n",(0,a.jsxs)(n.p,{children:["Using Excel add-in then add 2 customer groups records and submit to Dynamics 365 for finance and operations, while you are doing that using ",(0,a.jsx)(n.a,{href:"https://www.telerik.com/fiddler",children:"fiddler"})," on the same box to see how the odata batch framework works.\nThis can be done from POSTMAN too and you need to use header and body as you see in Fiddler."]}),"\n",(0,a.jsxs)(n.p,{children:["For basic setting up Dynamics 365 for finance and operations and Postman please follow ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dynamics365/unified-operations/dev-itpro/data-entities/third-party-service-test",children:"this offical document"})]}),"\n",(0,a.jsx)(n.h3,{id:"1-get-dynamics-365-for-finance-and-operations-authorization",children:"1. Get Dynamics 365 for finance and operations authorization"}),"\n",(0,a.jsx)(n.p,{children:"This is a result"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Insert-multiple-records",src:t(82272).A+"",title:"2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_1.png",width:"2402",height:"1058"})}),"\n",(0,a.jsx)(n.h3,{id:"2-create-a-new-post-request-in-postman-with-header",children:"2. Create a new POST request in Postman with header"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Insert-multiple-records",src:t(44251).A+"",title:"2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_2.png",width:"1356",height:"336"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"URL: {{resource}}/data/$batch*"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Content-Type: multipart/mixed;boundary=batch_d63a-e9be-2927"})}),"\n",(0,a.jsx)(n.h3,{id:"3-modify-the-body-in-postman",children:"3. Modify the Body in Postman"}),"\n",(0,a.jsx)(n.p,{children:"I will place 2 records for customer groups"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Insert-multiple-records",src:t(29426).A+"",title:"2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_3.png",width:"1520",height:"940"})}),"\n",(0,a.jsx)(n.p,{children:"Full text here"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:'--batch_d63a-e9be-2927\nContent-Type: multipart/mixed; boundary=changeset_2499-90ab-7b93\n\n--changeset_2499-90ab-7b93\nContent-Type: application/http\nContent-Transfer-Encoding: binary\n\nPOST CustomerGroups?cross-company=true HTTP/1.1\nContent-ID: 1\nAccept: application/json;q=0.9, */*;q=0.1\nOData-Version: 4.0\nContent-Type: application/json\nOData-MaxVersion: 4.0\n\n{"CustomerGroupId":"1060","Description":"Wholesales customers","PaymentTermId":"Net30","IsSalesTaxIncludedInPrice":"No","dataAreaId":"usmf"}\n--changeset_2499-90ab-7b93--\n\n--batch_d63a-e9be-2927\nContent-Type: multipart/mixed; boundary=changeset_b573-33b2-85ff\n\n--changeset_b573-33b2-85ff\nContent-Type: application/http\nContent-Transfer-Encoding: binary\n\nPOST CustomerGroups?cross-company=true HTTP/1.1\nContent-ID: 2\nAccept: application/json;q=0.9, */*;q=0.1\nOData-Version: 4.0\nContent-Type: application/json\nOData-MaxVersion: 4.0\n\n{"CustomerGroupId":"1070","Description":"Wholesales customers1","PaymentTermId":"Net30","IsSalesTaxIncludedInPrice":"No","dataAreaId":"usmf"}\n--changeset_b573-33b2-85ff--\n'})}),"\n",(0,a.jsx)(n.p,{children:"Click send and this is what you got from response"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Insert-multiple-records",src:t(34285).A+"",title:"2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_4.png",width:"2422",height:"812"})}),"\n",(0,a.jsx)(n.p,{children:"Full Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'--batchresponse_45e87829-5a26-480e-8aaa-8a08c7a82c60\nContent-Type: multipart/mixed; boundary=changesetresponse_27ed7621-d939-40b7-9f8b-be0421ff0cea\n--changesetresponse_27ed7621-d939-40b7-9f8b-be0421ff0cea\nContent-Type: application/http\nContent-Transfer-Encoding: binary\nContent-ID: 1\nHTTP/1.1 201 Created\nETag: W/"JzEsNjg3MTk0Nzk4MzUn"\nLocation: https: //fodevb2819a3b6966913ddevaos.cloudax.dynamics.com/data/CustomerGroups(dataAreaId=\'usmf\',CustomerGroupId=\'1060\')\nContent-Type: application/json; odata.metadata=minimal\nOData-Version: 4.0\n{\n"@odata.context": "https://fodevb2819a3b6966913ddevaos.cloudax.dynamics.com/data/$metadata#CustomerGroups/$entity",\n"@odata.etag": "W/\\"JzEsNjg3MTk0Nzk4MzUn\\"",\n"dataAreaId": "usmf",\n"CustomerGroupId": "1060",\n"ClearingPeriodPaymentTermName": "",\n"DefaultDimensionDisplayValue": "",\n"CustomerAccountNumberSequence": "",\n"IsSalesTaxIncludedInPrice": "No",\n"Description": "Wholesales customers",\n"WriteOffReason": "",\n"PaymentTermId": "Net30",\n"TaxGroupId": ""\n}\n--changesetresponse_27ed7621-d939-40b7-9f8b-be0421ff0cea--\n--batchresponse_45e87829-5a26-480e-8aaa-8a08c7a82c60\nContent-Type: multipart/mixed; boundary=changesetresponse_541a7d21-af21-4d66-b410-fb4165599b54\n--changesetresponse_541a7d21-af21-4d66-b410-fb4165599b54\nContent-Type: application/http\nContent-Transfer-Encoding: binary\nContent-ID: 2\nHTTP/1.1 201 Created\nETag: W/"JzEsNjg3MTk0Nzk4MzYn"\nLocation: https: //fodevb2819a3b6966913ddevaos.cloudax.dynamics.com/data/CustomerGroups(dataAreaId=\'usmf\',CustomerGroupId=\'1070\')\nContent-Type: application/json; odata.metadata=minimal\nOData-Version: 4.0\n{\n"@odata.context": "https://fodevb2819a3b6966913ddevaos.cloudax.dynamics.com/data/$metadata#CustomerGroups/$entity",\n"@odata.etag": "W/\\"JzEsNjg3MTk0Nzk4MzYn\\"",\n"dataAreaId": "usmf",\n"CustomerGroupId": "1070",\n"ClearingPeriodPaymentTermName": "",\n"DefaultDimensionDisplayValue": "",\n"CustomerAccountNumberSequence": "",\n"IsSalesTaxIncludedInPrice": "No",\n"Description": "Wholesales customers1",\n"WriteOffReason": "",\n"PaymentTermId": "Net30",\n"TaxGroupId": ""\n}\n--changesetresponse_541a7d21-af21-4d66-b410-fb4165599b54--\n--batchresponse_45e87829-5a26-480e-8aaa-8a08c7a82c60--\n'})}),"\n",(0,a.jsx)(n.p,{children:"Check the data in Dynamics 365 for finance and operations"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Insert-multiple-records",src:t(80388).A+"",title:"2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_5.png",width:"1170",height:"510"})}),"\n",(0,a.jsxs)(n.p,{children:["Note: refer this article for an C# example:\n",(0,a.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/odata#run-multiple-requests-in-a-single-transaction",children:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/odata#run-multiple-requests-in-a-single-transaction"})]}),"\n",(0,a.jsx)(n.p,{children:"Thank you for reading."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},82272:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_1-071a80d1990f629b92c3fa2d73089d97.png"},44251:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_2-3da47c765e8ecfea3adbf7c80584ab0d.png"},29426:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_3-37cb21ae4b4a55e7f1aa2539e0ea7bbd.png"},34285:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_4-5443b348bd58d4bbadcf84ed305f39ac.png"},80388:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/2019-10-15-Insert-multiple-records-in-single-request-using-Odata-from-Postman_5-5f29c31a9077dc68a4088d0cda87b353.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);