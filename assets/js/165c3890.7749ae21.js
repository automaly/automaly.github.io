"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[4650],{32457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(85893),i=t(11151);const s={date:"2023-12-22",title:"Advanced & Auto Bank Reconciliation in Dynamics 365 Finance",categories:["X++","Form"],tags:["New button","Delete button"],authors:"max",unlisted:!0},o=void 0,c={permalink:"/2023/12/22/Advanced-&-Auto-Bank-Reconciliation-in-Dynamics-365-Finance",source:"@site/blog/2023-12-22-Advanced-&-Auto-Bank-Reconciliation-in-Dynamics-365-Finance/index.md",title:"Advanced & Auto Bank Reconciliation in Dynamics 365 Finance",description:"Introduction",date:"2023-12-22T00:00:00.000Z",formattedDate:"December 22, 2023",tags:[{label:"New button",permalink:"/tags/new-button"},{label:"Delete button",permalink:"/tags/delete-button"}],readingTime:4.283333333333333,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max"}],frontMatter:{date:"2023-12-22",title:"Advanced & Auto Bank Reconciliation in Dynamics 365 Finance",categories:["X++","Form"],tags:["New button","Delete button"],authors:"max",unlisted:!0},unlisted:!0},r={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Bank Reconciliation",id:"bank-reconciliation",level:2},{value:"Steps to perform the bank reconciliation in an automated manner",id:"steps-to-perform-the-bank-reconciliation-in-an-automated-manner",level:2},{value:"Setup",id:"setup",level:3},{value:"Working",id:"working",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"In any accounting software, it is always important to keep track of all real-time bank transactions and record them in the ERP. Since bank transactions are booked manually in the ERP, it is necessary to ensure that the bank statements and ERP records are matched on any given date. This is where bank reconciliation comes into play."}),"\n",(0,a.jsx)(n.p,{children:"Reference : Cloud Fronts**"}),"\n",(0,a.jsx)(n.h2,{id:"bank-reconciliation",children:"Bank Reconciliation"}),"\n",(0,a.jsx)(n.p,{children:"Bank reconciliation is an activity done by any finance user for the purpose of reconciling book transactions w.r.t bank statements and ensuring that both are as closely matched as possible."}),"\n",(0,a.jsx)(n.p,{children:"D365 Finance offers two ways of performing bank reconciliations."}),"\n",(0,a.jsx)(n.p,{children:"One is by entering the bank statement amount manually and reconciling the ERP statements for each record against the amount. The other is by importing the bank statement into the system and letting the system match the records of the statement against the ERP based on a certain criteria. The blog is made with the assumption that the reader is already aware of the manual bank reconciliation process in D365 Finance."}),"\n",(0,a.jsx)(n.p,{children:"The second method is undoubtedly easier, flexible, and time-saving for any user."}),"\n",(0,a.jsx)(n.p,{children:"While there are several widely used bank statement format types which can be processed in D365 Finance like MT490, CAMT.054, BAI2 and others, this blog post will be focused on the MT490 format only."}),"\n",(0,a.jsx)(n.p,{children:"Moreover, D365 Finance also enables the user to reconcile not only payments/receipts, but also transactions from the bank\u2019s side, like bank charges, interest fees or reversals and post those entries into the ledger automatically. There is also a flexibility to create a set of rules that can allow for minor amount/date variations of the system w.r.t the bank statement."}),"\n",(0,a.jsx)(n.h2,{id:"steps-to-perform-the-bank-reconciliation-in-an-automated-manner",children:"Steps to perform the bank reconciliation in an automated manner"}),"\n",(0,a.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.p,{children:"We have to enable the system to accept bank statements in MT940 statement first."}),"\n",(0,a.jsxs)(n.p,{children:["In order to do that, navigate to, ",(0,a.jsx)(n.code,{children:"Organization Administration > Workspaces > Electronic Reporting"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(46939).Z+"",width:"951",height:"740"})}),"\n",(0,a.jsx)(n.p,{children:"Click on Repositories."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(74015).Z+"",width:"975",height:"325"})}),"\n",(0,a.jsx)(n.p,{children:"Select Global and click Open on top."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(86688).Z+"",width:"975",height:"464"})}),"\n",(0,a.jsx)(n.p,{children:"Filter the Configuration name by searching for \u2018MT940\u2019. The above list of formats will be displayed."}),"\n",(0,a.jsx)(n.p,{children:"Select them all and click on Import. The system will import the bank formats in D365 Finance."}),"\n",(0,a.jsx)(n.p,{children:"Next, we have to map the format in a setup."}),"\n",(0,a.jsxs)(n.p,{children:["Go to ",(0,a.jsx)(n.code,{children:"Cash & Bank Management > Advanced Bank Reconciliation Setup > Bank Statement Format"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(90475).Z+"",width:"975",height:"245"})}),"\n",(0,a.jsx)(n.p,{children:"Create a new record and specify the Statement Code, Name and map the Import format which was imported in the previous step."}),"\n",(0,a.jsx)(n.p,{children:"Now this is done, the only part left is to configure the Bank master to enable advanced bank reconciliations for any transactions."}),"\n",(0,a.jsx)(n.p,{children:"Open the Bank Account Master."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(31392).Z+"",width:"975",height:"136"})}),"\n",(0,a.jsx)(n.p,{children:"Turn on \u2018Advanced Bank Reconciliation\u2019 and select MT940 in the field Statement format."}),"\n",(0,a.jsx)(n.p,{children:"Once this is done, we are ready to use Advanced Bank Reconciliation."}),"\n",(0,a.jsx)(n.h3,{id:"working",children:"Working"}),"\n",(0,a.jsx)(n.p,{children:"To start with advanced reconciliation, we will take a scenario of a bank where the following transactions have occurred:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Bank opening balance"}),"\n",(0,a.jsx)(n.li,{children:"Payment made to vendor"}),"\n",(0,a.jsx)(n.li,{children:"Payment received from customer"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The above 3 transactions are created in the system and will be reconciled with the use of a bank statement."}),"\n",(0,a.jsx)(n.p,{children:"The bank statement will be a notepad file that will be imported in the system. While the bank statement is always provided by the bank, it is important to know the bank statement format so we can setup and test any scenario with dummy records."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(76960).Z+"",width:"975",height:"275"})}),"\n",(0,a.jsx)(n.p,{children:"The above screenshot specifies the structure in which the bank statement is accepted by the system. We will be using this format to import bank records and reconcile them with the system records."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(58742).Z+"",width:"975",height:"331"})}),"\n",(0,a.jsx)(n.p,{children:"From the above image, 3 types of bank transactions have been made in the system with the respective amounts and dates."}),"\n",(0,a.jsx)(n.p,{children:"Now the bank statement file for the above transactions is as follows:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(83134).Z+"",width:"841",height:"970"})}),"\n",(0,a.jsx)(n.p,{children:"As you may observe, all three transactions are recorded one below the other, and the opening and closing figures are manually entered here. In real-time scenarios, this is provided by the bank and the user does not open or make any changes to the file."}),"\n",(0,a.jsxs)(n.p,{children:["In order to import the file, go to ",(0,a.jsx)(n.code,{children:"Bank Account > Bank Statements > Import Statement"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(35613).Z+"",width:"975",height:"479"})}),"\n",(0,a.jsx)(n.p,{children:"In the parameters, select the bank account, browse the text file from your PC and click on upload, then click on OK."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(28904).Z+"",width:"975",height:"449"})}),"\n",(0,a.jsx)(n.p,{children:"The bank statement is imported with the above transactions."}),"\n",(0,a.jsx)(n.p,{children:"Select the transactions and click on Validate on top."}),"\n",(0,a.jsx)(n.p,{children:"Now we proceed with the reconciliation."}),"\n",(0,a.jsx)(n.p,{children:"Go back and click on Bank Reconciliation in the Bank Account screen."}),"\n",(0,a.jsx)(n.p,{children:"Create a new reconciliation. Then click on Worksheet at the top."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(92466).Z+"",width:"975",height:"278"})}),"\n",(0,a.jsx)(n.p,{children:"The reconciliation screen is opened."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(50650).Z+"",width:"975",height:"480"})}),"\n",(0,a.jsx)(n.p,{children:"Here, the user is presented with the option to manually match any record to reconcile or let the system match the records based on a certain matching rule."}),"\n",(0,a.jsx)(n.p,{children:"While any variation of rules can be defined, the most commonly used rules are:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Date variations:\xa0where the dates of bank statements and system transactions vary by a certain number of days."}),"\n",(0,a.jsx)(n.li,{children:"Amount variations:\xa0where the bank statement amount and the system transaction amount can vary due to reasons like rounding off."}),"\n",(0,a.jsx)(n.li,{children:"Bank charges/interest fees/reversals:\xa0Where the bank deducts a certain amount based on charges or interests, or if the bank erroneously records a transaction and reverses it on its own end."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Based on the above, we will define a matching rule based on date and amount difference and re-import the statement."}),"\n",(0,a.jsxs)(n.p,{children:["To define a matching rule, navigate to ",(0,a.jsx)(n.code,{children:"Cash & Bank Management > Advanced Bank Reconciliation Setup > Reconciliation Matching Rules"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(67451).Z+"",width:"975",height:"689"})}),"\n",(0,a.jsx)(n.p,{children:"Based on the above image, the criteria for the match amount and match date is defined where a variation of 2 INR and 3 days will be allowed in reconciliation."}),"\n",(0,a.jsx)(n.p,{children:"Once it is saved, click on Activate."}),"\n",(0,a.jsxs)(n.p,{children:["Next, navigate to ",(0,a.jsx)(n.code,{children:"Cash & Bank Management > Advanced Bank Reconciliation Setup > Reconciliation Matching Rule Sets"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(28007).Z+"",width:"975",height:"511"})}),"\n",(0,a.jsx)(n.p,{children:"Create a new rule set and link the matching rule that was created earlier. As you may observe, we can link multiple rules here. This is useful when it is necessary to reconcile statements with a variety of rules instead of a single rule."}),"\n",(0,a.jsx)(n.p,{children:"Next, go to Bank Account > Scroll down to Reconcilation section and link the matching rule set in the Default Matching Rule Set"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(37446).Z+"",width:"975",height:"148"})}),"\n",(0,a.jsx)(n.p,{children:"Now we are ready to run the reconciliation once more with some variations of amounts and days in the bank statement."}),"\n",(0,a.jsx)(n.p,{children:"Import the statement once more and validate it."}),"\n",(0,a.jsx)(n.p,{children:"The bank statement is imported as follows:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(96166).Z+"",width:"975",height:"440"})}),"\n",(0,a.jsx)(n.p,{children:"Now create a reconciliation worksheet."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(83341).Z+"",width:"975",height:"285"})}),"\n",(0,a.jsx)(n.p,{children:"On the top, select the option \u2018Run Matching Rules\u2019."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(27335).Z+"",width:"975",height:"479"})}),"\n",(0,a.jsx)(n.p,{children:"Once the matching rules run, the system will automatically match the transactions."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(24078).Z+"",width:"975",height:"498"})}),"\n",(0,a.jsx)(n.p,{children:"The user can now click on \u2018Mark as Reconciled\u2019 to finish the reconciliation."}),"\n",(0,a.jsx)(n.p,{children:"While this method undoubtedly is easier to process, it can be made even simpler by letting the system create a worksheet and match all records based on the matching rules right upon the statement import itself. To do this, open the Bank Account, scroll down to the Reconciliation section, and turn on the parameter \u2018Reconcile after import\u2019."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(80065).Z+"",width:"975",height:"455"})}),"\n",(0,a.jsx)(n.p,{children:"Enabling this parameter will ensure that the system will automatically reconcile any and all bank statements imported for this bank based on the matching rule defined for it."}),"\n",(0,a.jsx)(n.p,{children:"If the user does not wish to enable this for every statement import but only on a need basis for a select few imports, then this parameter should be turned off. This parameter can be activated in the bank statement import screen:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(11765).Z+"",width:"794",height:"644"})}),"\n",(0,a.jsx)(n.p,{children:"This will ensure that the system will only auto-reconcile for that particular bank statement."}),"\n",(0,a.jsx)(n.p,{children:"This concludes the topic for Advanced Bank Reconciliation in Dynamics 365 Finance"})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},31392:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-10-dbbca247340ad787a17fd22133c3b541.png"},76960:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-11-a40fbdc00c10c65a594a0edc774522f3.png"},58742:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-12-8c9a20c0dac12a09c7401ce28755097b.png"},83134:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-13-371ae404f4e02fa3435a8422c8525cdc.png"},35613:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-14-45d43ca2cfadbb5ae90b4a0545b2361b.png"},28904:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-15-8fad5e645b5f01603202089b2e23e0ef.png"},92466:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-16-944c08eeb067eae929a2834c83a60ffc.png"},50650:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-17-954def9857dbd5dd48f6d10b6d8ebd39.png"},67451:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-18-fb11b4e169170588626099ef3b5980ed.png"},28007:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-19-6884382614890b69b4a88bb0c06c79be.png"},37446:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20-e9c58b292cb49b874d76cecf38d0e15b.png"},96166:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-21-6201e25dd749170113a884f713c672af.png"},83341:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-22-25a27c30621affae4a815d9c2d9d8b3e.png"},27335:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-23-2d2c153040328db6252e30a5de5988a2.png"},24078:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-24-9e9395ef6b0d46f4b2a07af4a29be375.png"},80065:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-25-f78707f050e2946b17120266a23ba5e8.png"},11765:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-26-9aa4c9fa8dc56601e94a8e00d0bb9d6c.png"},46939:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-3-bef30f85b9a4a1dba52b17f2b1708cd5.png"},74015:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-7-d2ec99070853d32e204edee446114c76.png"},86688:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-8-a3db3318625c27a75d2f51c120a8c115.png"},90475:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-9-57143e6358bbd5903bf5f15731f2d558.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var a=t(67294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);