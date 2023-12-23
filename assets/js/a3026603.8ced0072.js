"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[470],{14220:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>s,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=n(85893),i=n(11151);const c={date:new Date("2020-01-25T00:00:00.000Z"),title:"Create Purchase Orders - Confirm - Product receipt - Post using X++ in Dynamics 365 Finance & Operations",tags:["Create Purchase order X++","Coding","integration"],categories:["FinOps","XPP","Integration"],authors:"max"},u=void 0,a={permalink:"/2020/01/25/create-po-confirm-receipt-post",source:"@site/blog/2020-01-25-create-po-confirm-receipt-post/index.md",title:"Create Purchase Orders - Confirm - Product receipt - Post using X++ in Dynamics 365 Finance & Operations",description:"The script will work for Dynamics 365 Finance & Operations version",date:"2020-01-25T00:00:00.000Z",formattedDate:"January 25, 2020",tags:[{label:"Create Purchase order X++",permalink:"/tags/create-purchase-order-x"},{label:"Coding",permalink:"/tags/coding"},{label:"integration",permalink:"/tags/integration"}],readingTime:1.25,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max"}],frontMatter:{date:"2020-01-25T00:00:00.000Z",title:"Create Purchase Orders - Confirm - Product receipt - Post using X++ in Dynamics 365 Finance & Operations",tags:["Create Purchase order X++","Coding","integration"],categories:["FinOps","XPP","Integration"],authors:"max"},unlisted:!1,prevItem:{title:"Advanced & Auto Bank Reconciliation in Dynamics 365 Finance",permalink:"/2020/04/06/getting-onebox-vhd-dynamics-365-finance-and-operations-virtual-machine"}},o={authorsImageUrls:[void 0]},d=[];function p(r){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,i.a)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"The script will work for Dynamics 365 Finance & Operations version"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cs",children:'class MaxGeneratePO\r\n{\r\n    public static void main(Args _args)\r\n    {\r\n        int i = 0; // number of purchase orders\r\n        NumberSeq numberSeq;\r\n        PurchTable purchTable;\r\n        PurchLine purchLine;\r\n        InventDim inventDim;\r\n\r\n        while (i <= 3)\r\n        {\r\n            ttsBegin;\r\n            MaxGeneratePO createPO = new MaxGeneratePO();\r\n            numberSeq = NumberSeq::newGetNum(PurchParameters::numRefPurchId());\r\n            numberSeq.used();\r\n            purchTable.PurchId = numberSeq.num();\r\n            purchTable.initValue();\r\n            purchTable.initFromVendTable(VendTable::find(\'US-101\'));\r\n\r\n            if (!purchTable.validateWrite())\r\n            {\r\n                throw Exception::Error;\r\n            }\r\n\r\n            purchTable.insert();\r\n            inventDim.clear();\r\n            purchLine.clear();\r\n            purchLine.initValue();\r\n\r\n            purchLine.PurchId = purchTable.PurchId;\r\n            purchLine.ItemId = \'D0002\';\r\n            inventDim.InventSiteId = "1";\r\n            inventDim.InventLocationId = "11";\r\n            purchLine.InventDimId=InventDim::findOrCreate(inventDim).inventDimId ;\r\n            purchLine.createLine(true, true, true, true, true, true);\r\n\r\n            purchLine.PurchQty = 5;\r\n            purchLine.PurchUnit = "ea";\r\n            purchLine.PurchPrice = createPO.randomAmount(); // get random amount nubmer\r\n            purchLine.LineAmount = purchLine.calcLineAmount();\r\n            purchLine.update();\r\n            \r\n            //PO confirm\r\n            PurchFormLetter purchFormLetter;\r\n            PurchFormLetter purchFormLetterPack;\r\n            purchFormLetter = PurchFormLetter::construct(DocumentStatus::PurchaseOrder);\r\n            purchFormLetter.update(purchTable,\r\n                                strFmt("ConNum_%1", purchTable.PurchId),\r\n                                systemDateGet(),\r\n                                PurchUpdate::All,\r\n                                AccountOrder::None,\r\n                                NoYes::No,\r\n                                NoYes::no);\r\n            //Product receipt\r\n            createPO.proceed(purchTable.PurchId, purchLine.ItemId,purchLine.InventDimId,purchLine.PurchQty,strFmt("RptNum_%1", purchTable.PurchId));\r\n            //Post PO\r\n            createPO.postPOInvoice(purchTable.PurchId, strFmt("RptNum_%1", purchTable.PurchId));\r\n\r\n            info(strFmt("Purchase order \'%1\' has been created", purchTable.PurchId));\r\n            ttsCommit;\r\n            i++;\r\n        }\r\n    }\r\n\r\n    public boolean proceed(PurchId _purchId, ItemId _itemId,inventDimId _inventDimId, PurchQty _qty, PackingSlipId _productReceiptNumber)\r\n    {\r\n        return\r\n            this.generateProductReceipt(_purchId, this.addToPurchLineList(_purchId, _itemId, _inventDimId, _qty), _productReceiptNumber);\r\n    }\r\n\r\n    public boolean generateProductReceipt(PurchId _purchId, List _purchLineList, PackingSlipId _productReceiptNumber)\r\n    {\r\n        boolean ret = true;\r\n        PurchFormLetter purchFromLetter;\r\n        PurchTable purchTable = PurchTable::find(_purchId);\r\n\r\n        try\r\n        {\r\n            ttsbegin;\r\n            purchFromLetter = PurchFormLetter::construct(DocumentStatus::PackingSlip);\r\n            purchFromLetter.createFromLines(true);\r\n            purchFromLetter.parmLineList(_purchLineList.pack());\r\n            purchFromLetter.update(purchTable, _productReceiptNumber,\r\n                                DateTimeUtil::getToday(DateTimeUtil::getUserPreferredTimeZone()),\r\n                                PurchUpdate::All);\r\n            ttscommit;\r\n        }\r\n        catch\r\n        {\r\n            ret = false;\r\n        }\r\n        return ret;\r\n    }\r\n\r\n    public List addToPurchLineList(PurchId _purchId, ItemId _itemId,inventDimId _inventDimId, PurchQty _qty)\r\n    {\r\n        List purchLineList = new List(Types::Record);\r\n        PurchLine purchLine = PurchLine::findItemIdInventDimId(_purchId, _itemId, _inventDimId);\r\n\r\n        if(purchLine && _qty > 0)\r\n        {\r\n            purchLine.PurchReceivedNow = _qty;\r\n            purchline.modifiedField(fieldNum(PurchLine, PurchReceivedNow));\r\n            purchLineList.addEnd(purchLine);\r\n        }\r\n        return purchLineList;\r\n    }\r\n\r\n    public void postPOInvoice(PurchId purchId, PackingSlipId packingSlipId)\r\n    {\r\n        TmpFrmVirtual               tmpFrmVirtualVend;\r\n        PurchFormLetter_Invoice     purchFormLetter;\r\n        VendPackingSlipJour         vendPackingSlipJour;\r\n        SysQueryRun                 chooseLinesQuery;\r\n        SysQueryRun                 chooseLinesPendingInvoiceQuery;\r\n        container                   conTmpFrmVirtual;\r\n        List                        selectedList    = new List(Types::Record);\r\n\r\n        select firstonly vendPackingSlipJour\r\n                    where vendPackingSlipJour.PurchId == purchId\r\n            && vendPackingSlipJour.PackingSlipId == packingSlipId;\r\n\r\n        if (vendPackingSlipJour)\r\n        {\r\n            tmpFrmVirtualVend.clear();\r\n            tmpFrmVirtualVend.TableNum  = vendPackingSlipJour.TableId;\r\n            tmpFrmVirtualVend.RecordNo  = vendPackingSlipJour.RecId;\r\n            tmpFrmVirtualVend.NoYes     = NoYes::Yes;\r\n            tmpFrmVirtualVend.Id        = vendPackingSlipJour.PurchId;\r\n            tmpFrmVirtualVend.insert();\r\n        }\r\n\r\n        chooseLinesQuery = new SysQueryRun(queryStr(PurchUpdate));\r\n        chooseLinesQuery.query().addDataSource(tableNum(VendInvoiceInfoTable)).enabled(false);\r\n\r\n        // chooseLinesPendingInvoiceQuery needs to be initialized, although it will not be used\r\n        chooseLinesPendingInvoiceQuery = new SysQueryRun(queryStr(PurchUpdatePendingInvoice));\r\n        chooseLinesPendingInvoiceQuery.query().dataSourceTable(tableNum(PurchTable)).addRange(fieldNum(PurchTable,PurchId)).value(queryValue(\'\'));\r\n           \r\n        purchFormLetter = PurchFormLetter::construct(DocumentStatus::Invoice);\r\n        purchFormLetter.chooseLinesQuery (chooseLinesQuery);\r\n        purchFormLetter.parmQueryChooseLinesPendingInvoice(chooseLinesPendingInvoiceQuery);\r\n        purchFormLetter.purchTable (PurchTable::find(PurchId));\r\n        purchFormLetter.transDate (systemDateGet());\r\n        purchFormLetter.parmParmTableNum (strFmt("%1",packingSlipId)); //This is invoice number\r\n        purchFormLetter.printFormLetter (NoYes::No);\r\n        purchFormLetter.sumBy (AccountOrder::Auto);\r\n        purchFormLetter.specQty (PurchUpdate::PackingSlip);\r\n      \r\n        while select tmpFrmVirtualVend\r\n        {\r\n            selectedList.addEnd(tmpFrmVirtualVend);\r\n            conTmpFrmVirtual = selectedList.pack();\r\n        }\r\n        purchFormLetter.selectFromJournal(conTmpFrmVirtual);\r\n        purchFormLetter.reArrangeNow(true);\r\n        purchFormLetter.run();\r\n    }\r\n\r\n    public int randomAmount()\r\n    {\r\n        RandomGenerate randomGenerate;\r\n        randomGenerate = RandomGenerate::construct();\r\n        randomGenerate.parmSeed(new Random().nextInt());\r\n        return RandomGenerate.randomInt(100, 800);\r\n    }\r\n\r\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"Thank you for reading."})]})}function s(r={}){const{wrapper:e}={...(0,i.a)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(p,{...r})}):p(r)}},11151:(r,e,n)=>{n.d(e,{Z:()=>a,a:()=>u});var t=n(67294);const i={},c=t.createContext(i);function u(r){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function a(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:u(r.components),t.createElement(c.Provider,{value:e},r.children)}}}]);