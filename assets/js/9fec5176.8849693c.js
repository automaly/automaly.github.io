"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[2747],{34668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(74848),a=n(28453);const i={date:new Date("2017-08-07T00:00:00.000Z"),title:"Exception Handling in Dynamics 365 For Finance and Operation",tags:["Exception Handling","Dynamics 365 for finance and operations","X++"],categories:["FinOps","XPP"],lightgallery:!0},s=void 0,r={id:"development/xpp-sample/2017-08-07-Exception-Handling-in-Dynamics-365-For-Finance-and-Operation/index",title:"Exception Handling in Dynamics 365 For Finance and Operation",description:"When we write a code, or make a customization to Dynamics 365 For Operation which is using X++ should make use of Exception Handling to provide some context for the message or a different more useful message. In this article, I will be exploring how I can come up with a uniform way to catch multiple types of exception that can be raised in X++.",source:"@site/docs/03-development/01-xpp-sample/2017-08-07-Exception-Handling-in-Dynamics-365-For-Finance-and-Operation/index.md",sourceDirName:"03-development/01-xpp-sample/2017-08-07-Exception-Handling-in-Dynamics-365-For-Finance-and-Operation",slug:"/development/xpp-sample/2017-08-07-Exception-Handling-in-Dynamics-365-For-Finance-and-Operation/",permalink:"/docs/development/xpp-sample/2017-08-07-Exception-Handling-in-Dynamics-365-For-Finance-and-Operation/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Exception Handling",permalink:"/docs/tags/exception-handling"},{inline:!0,label:"Dynamics 365 for finance and operations",permalink:"/docs/tags/dynamics-365-for-finance-and-operations"},{inline:!0,label:"X++",permalink:"/docs/tags/x"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{date:"2017-08-07T00:00:00.000Z",title:"Exception Handling in Dynamics 365 For Finance and Operation",tags:["Exception Handling","Dynamics 365 for finance and operations","X++"],categories:["FinOps","XPP"],lightgallery:!0},sidebar:"tutorialSidebar",previous:{title:"How to create main menu in Dynamics AX 2012",permalink:"/docs/development/xpp-sample/2017-03-29-How-to-create-main-menu-in-Dynamics-AX-2012/"},next:{title:"Create Purchase Orders - Confirm - Product receipt - Post using X++ in Dynamics 365 Finance & Operations",permalink:"/docs/development/xpp-sample/2020-01-25-create-po-confirm-receipt-post/"}},c={},d=[{value:"1. Exception type",id:"1-exception-type",level:3},{value:"2. Key commands",id:"2-key-commands",level:3},{value:"3. Code Statement",id:"3-code-statement",level:3},{value:"4. Optimistic Concurrency Exceptions",id:"4-optimistic-concurrency-exceptions",level:3},{value:"5. Conclusion",id:"5-conclusion",level:3}];function l(e){const t={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"When we write a code, or make a customization to Dynamics 365 For Operation which is using X++ should make use of Exception Handling to provide some context for the message or a different more useful message. In this article, I will be exploring how I can come up with a uniform way to catch multiple types of exception that can be raised in X++."}),"\n",(0,o.jsx)(t.h3,{id:"1-exception-type",children:"1. Exception type"}),"\n",(0,o.jsxs)(t.p,{children:["There are many several types of exception and the type differs depending on what caused the error. Much of exception types are determined by the kernel and are not normally thrown by application code. All ",(0,o.jsx)(t.strong,{children:"exception types"}),", however, can be caught, and it is the developers\u2019 responsibility to decide which exceptions need to be handled."]}),"\n",(0,o.jsx)(t.p,{children:"The exception type is identified using the system-based enumeration called an exception. Because it is a system Enum, it cannot be modified, so users cannot add new exception types."}),"\n",(0,o.jsx)(t.p,{children:"The following table shows the exception literals that are the values of the Exception enumeration."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Exception_Handling",src:n(17865).A+"",title:"Exception_Handling",width:"583",height:"559"})}),"\n",(0,o.jsx)(t.h3,{id:"2-key-commands",children:"2. Key commands"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Try"})," command signifies the start of a block of code that you want to control with the X++ exception handling system. Any exceptions that are thrown in that block of code can be caught and handled accordingly. The block of code inside the Try statement must be contained between brackets ( "," )."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Catch"})," statements come after the block of code and define what code is executed when each exception is thrown."]}),"\n",(0,o.jsx)(t.p,{children:"You do not have to define a catch statement for every possible exception; however, each try statement must have at least one catch statement."}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.strong,{children:"Retry"})," command tells the system to go back to the Try statement and attempt to execute the code again. Any data that was loaded before the Try command will remain as it was, but any data retrieved or modified after the Try statement will be refreshed."]}),"\n",(0,o.jsx)(t.p,{children:"When a deadlock exception is thrown, all locks on tables that this process holds are released, which may allow the other process or processes that are also deadlocked to continue."}),"\n",(0,o.jsx)(t.p,{children:"By calling a retry, the process can attempt to update the record again and may now be able to complete. It is a best practice that a retry uses a counter so that the number of retries can be controlled, and a user does not become stuck in a loop."}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"final"})," keyword is now available to follow the try and catch keywords. The semantics are identical to the semantics in C#. The statements provided in the final clause is executed irrespective of whether the try block threw any exceptions."]}),"\n",(0,o.jsx)(t.h3,{id:"3-code-statement",children:"3. Code Statement"}),"\n",(0,o.jsx)(t.p,{children:"We will use these lines of code example here for testing Exception handling"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-C#",children:'class CustCreateCustomer\n{\n    public static void main(Args _args)\n    {\n        CustCreateCustomer custCreateCustomer = new CustCreateCustomer();\n        custCreateCustomer.run();\n    }\n\n    public void run()\n    {\n        Dialog          dlg = new Dialog("Create new customer");\n        DialogField     dlgCust;\n        DialogField     dlgGrp;\n        CustTable custTable;\n\n        dlgCust = dlg.addField(extendedTypeStr(CustVendAc), "Customer account");\n        dlgGrp  = dlg.addField(extendedTypeStr(CustGroupId));\n        \n        if (dlg.run())\n        {\n            try\n            {\n                custTable.AccountNum    = dlgCust.value();\n                custTable.CustGroup     = dlgGrp.value();\n                if (!custTable.validateWrite())\n                {\n                    throw error("Please enter all required fields.");\n                }\n                else\n                {\n                    custTable.insert();\n                }\n            }\n            catch (Exception::Error)\n            {\n                error("An error occurred. Please try again");\n            }\n\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["This code will try to create a customer after revived inputted value from users, this code also handling errors when user do not input enough information. A ",(0,o.jsx)(t.code,{children:"Throw"})," statement is used to throw an error that can be caught by a Catch statement. When the system throws an exception ",(0,o.jsx)(t.code,{children:"ttsabort"})," is called automatically, and so does not have to be called in a Catch statement."]}),"\n",(0,o.jsx)(t.h3,{id:"4-optimistic-concurrency-exceptions",children:"4. Optimistic Concurrency Exceptions"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"optimistic concurrency check"})," (OCC) is a performance enhancing function within Microsoft Dynamics 365 For Operation. It presumes that any record retrieved from the database is not updated until it is proven to be updated by the database. This means that fewer locks must be placed on records in the database. This allows for faster access for other users."]}),"\n",(0,o.jsxs)(t.p,{children:["This also means that one user can update a record after another user has retrieved it from the database. This can cause data inconsistency. If the second user then also tries to update the record, an ",(0,o.jsx)(t.code,{children:"UpdateConflict"})," exception is thrown. The system does this by comparing the ",(0,o.jsx)(t.code,{children:"recVersion"})," field on the record buffer at runtime and the actual record in the database. The ",(0,o.jsx)(t.code,{children:"recVersion"})," field value is changed every time that an update is successfully made to a record."]}),"\n",(0,o.jsxs)(t.p,{children:["There are two main table update exceptions, ",(0,o.jsx)(t.code,{children:"UpdateConflict"})," and ",(0,o.jsx)(t.code,{children:"DeadLock"}),". An update con\ufb02ict occurs due to the optimistic concurrency failing, whereas a deadlock is the classic database scenario where both transactions have each locked a table that the other needs."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Update con\ufb02icts"})," are normally handled within the insert, delete, and update methods of a table. The ",(0,o.jsx)(t.strong,{children:"BOM table"})," is a good example of this. You may also hard to find many examples where this has been used. We use this pattern only if we deem it to be required. The code within the table's update method also updates other records, so it has been written to handle update con\ufb02icts."]}),"\n",(0,o.jsx)(t.p,{children:"The following code is an example of how to handle the UpdateConflict exception that might be thrown."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-C#",children:"public void update()\n{\n    #OCCRetryCount\n    try\n    {\n        ttsbegin;\n        // code that updates records in other tables\n        super(); // do the update\n        // other code that updates records in other tables\n        ttscommit;\n    }\n    //Deadlock\n    catch (Exception::Deadlock)\n    {\n        retry;\n    }\n    //UpdateConflict\n    catch (Exception::UpdateConflict)\n    {\n        if (appl.ttsLevel() == 0)\n        {\n            if (xSession::currentRetryCount() >= #RetryNum)\n            {\n                throw Exception::UpdateConflictNotRecovered;\n            }\n            else\n            {\n                retry;\n            }\n        }\n        else\n        {\n            throw Exception::UpdateConflict;\n        }\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If a conflict due to OCC occurs, the system throws the ",(0,o.jsx)(t.code,{children:"UpdateConflict"})," exception and it is caught by the catch statement."]}),"\n",(0,o.jsxs)(t.p,{children:["The other new element here is ",(0,o.jsx)(t.code,{children:"ttsLevel"}),". Since transactions can be nested, we do want the exception to falling through to the parent transaction if one exists. If ",(0,o.jsx)(t.code,{children:"ttsabort"})," is issued (directly or due to a throwing error) at any level, the whole transaction will be rolled back; we can't roll back just the level where the error is thrown."]}),"\n",(0,o.jsxs)(t.p,{children:["The code checks the current TTS level. If it is not Zero, in other words, it is still in a TTS transaction, it throws another ",(0,o.jsx)(t.code,{children:"UpdateConflict"})," exception to the next Catch list of the next outer Try statement in scope. This continues until it is no longer inside a TTS transaction. We must make sure that when the code is retired, all data is refreshed."]}),"\n",(0,o.jsxs)(t.p,{children:["It is important that we don't retry indefinitely, as this may cause the client to hang. To control this, we use ",(0,o.jsx)(t.code,{children:"xSession::currentRetryCount()"})," to get the number of retries and check this against the ",(0,o.jsx)(t.code,{children:"#RetryNum"})," macro. The macro defines the standard number of retries deemed appropriate by Microsoft, which is five.\nthen the ",(0,o.jsx)(t.code,{children:"UpdateConflictNotRecovered"})," exception is thrown. This means the whole transaction is aborted and stops retrying."]}),"\n",(0,o.jsx)(t.h3,{id:"5-conclusion",children:"5. Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"We do not, in any case, want an error to be thrown that stops the form from opening. Also, if there is an error, we need to decide whether the user actually needs to know that an error occurred. It may be enough for our purposes that the fields don't appear, and we can use the debugger to trace through the code to determine why."}),"\n",(0,o.jsx)(t.p,{children:"Thank you for reading!"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},17865:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/2017-08-07_10h00_37-b25d3cabec472b63591fe43737579960.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(96540);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);