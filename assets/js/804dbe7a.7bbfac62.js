"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[2372],{23547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(74848),a=t(28453);const o={title:"Create record in DimensionAttributeValueCombination table manually.",date:new Date("2016-07-05T09:47:00.000Z"),categories:["AX2012"],tags:["xpp","Dimension"]},r=void 0,c={id:"development/xpp-sample/2016-07-05-create-record-in-dimensionattributevaluecombination-manually/index",title:"Create record in DimensionAttributeValueCombination table manually.",description:"Sometime we need this RecId value in DimansionAttributeValueCombination Table for some reasons likes putting new dimension in LedgerDimension field in LedgerJournalTrans Table, or somewhere else.",source:"@site/docs/03-development/01-xpp-sample/2016-07-05-create-record-in-dimensionattributevaluecombination-manually/index.md",sourceDirName:"03-development/01-xpp-sample/2016-07-05-create-record-in-dimensionattributevaluecombination-manually",slug:"/development/xpp-sample/2016-07-05-create-record-in-dimensionattributevaluecombination-manually/",permalink:"/docs/development/xpp-sample/2016-07-05-create-record-in-dimensionattributevaluecombination-manually/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"xpp",permalink:"/docs/tags/xpp"},{inline:!0,label:"Dimension",permalink:"/docs/tags/dimension"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Create record in DimensionAttributeValueCombination table manually.",date:"2016-07-05T09:47:00.000Z",categories:["AX2012"],tags:["xpp","Dimension"]},sidebar:"tutorialSidebar",previous:{title:"How to verify active inventory dimensions on an item",permalink:"/docs/development/xpp-sample/2016-01-17-how-to-verify-active-inventory-dimensions-on-an-item/"},next:{title:"Understanding modifedField() Table method in fDynamics 365 Finance Operations",permalink:"/docs/development/xpp-sample/2016-11-08-understanding-modifedField-table-method-finops/"}},s={},u=[];function l(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Sometime we need this ",(0,i.jsx)(n.code,{children:"RecId"})," value in ",(0,i.jsx)(n.code,{children:"DimansionAttributeValueCombination"})," Table for some reasons likes putting new dimension in ",(0,i.jsx)(n.code,{children:"LedgerDimension"})," field in ",(0,i.jsx)(n.code,{children:"LedgerJournalTrans"})," Table, or somewhere else."]}),"\n",(0,i.jsxs)(n.p,{children:["Suppose my Account structure likes: ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"MainAcct - Dept - Woker - SubAcct - Item"})}),",\nyou can custom base on your struture."]}),"\n",(0,i.jsxs)(n.p,{children:["This code is for creating a record into ",(0,i.jsx)(n.code,{children:"DimansionAttributeValueCombination"})," in code and then get ",(0,i.jsx)(n.code,{children:"RecID"})," of this."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"static void createDimensionAttributeValueCombination(Args _args)\n{\n    DimensionAttributeValueContract     ValueContract;\n    DimensionAttributeValueCombination  davc;\n    MainAccount                         valueMainAccount;\n    DimensionStorage                    dimStorage;\n\n    DimensionServiceProvider DimensionServiceProvider   = new DimensionServiceProvider();\n    LedgerAccountContract LedgerAccountContract         = new LedgerAccountContract();\n    List ListValueContract                              = new List(Types::Class);\n    \n    // Get main account with structure : Mainacct - DE - woker - subacct - item\n    valueMainAccount = MainAccount::findByMainAccountId('910001'); //Get main account\n\n    ValueContract = new DimensionAttributeValueContract();\n    ValueContract.parmName('Department') ;\n    ValueContract.parmValue('6020'); //Value for dimension Department\n    ListValueContract.addEnd(ValueContract);\n\n    ValueContract = new DimensionAttributeValueContract();\n    ValueContract.parmName('Worker') ;\n    ValueContract.parmValue('000001'); //Value for dimension ExpenseCode\n    ListValueContract.addEnd(ValueContract);\n\n    ValueContract = new DimensionAttributeValueContract();\n    ValueContract.parmName('SubAcct') ;\n    ValueContract.parmValue('\uad50\ubcf4\uc0dd\uba85'); //Value for dimension Project\n    ListValueContract.addEnd(ValueContract);\n\n    ValueContract = new DimensionAttributeValueContract();\n    ValueContract.parmName('Item') ;\n    ValueContract.parmValue('110329'); //Value for dimension Project\n    ListValueContract.addEnd(ValueContract);\n\n    LedgerAccountContract.parmMainAccount(valueMainAccount.MainAccountId);\n    LedgerAccountContract.parmValues(ListValueContract);\n\n    //if combination is not exist then create new one\n    dimStorage = DimensionServiceProvider::buildDimensionStorageForLedgerAccount(LedgerAccountContract);\n    davc = DimensionAttributeValueCombination::find(dimStorage.save());\n    info(strFmt(\"RecId : %1 - DisplayValue : %2\", davc.RecId, davc.DisplayValue));\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"or you can use this way"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c#",children:"static void createDimension(Args _args)\n{\n    Struct      struct = new Struct();\n    container   financialDimension;\n    LedgerDimensionAccount legder;\n\n    //// Get main account with structure : Mainacct - DE - woker - subacct - item\n    struct.add('Department', '6020');\n    struct.add('Item', '220006');\n    struct.add('SubAcct', 'Max test account');\n    struct.add('Worker', '000002');\n\n    financialDimension += struct.fields();\n    financialDimension += struct.fieldName(1);\n    financialDimension += struct.valueIndex(1);\n    financialDimension += struct.fieldName(2);\n    financialDimension += struct.valueIndex(2);\n    financialDimension += struct.fieldName(3);\n    financialDimension += struct.valueIndex(3);\n    financialDimension += struct.fieldName(4);\n    financialDimension += struct.valueIndex(4);\n\n    legder = DimensionDefaultingService::serviceCreateLedgerDimension(\n                            DimensionStorage::getDefaultAccountForMainAccountNum(\"910001\"),\n                            AxdDimensionUtil::getDimensionAttributeValueSetId(financialDimension));\n    info(strFmt(\"%1\",legder));\n\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);