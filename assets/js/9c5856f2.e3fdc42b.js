"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[9157],{62107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(74848),s=n(28453);const a={date:"2024-01-02",title:"No data is inserted/modified in temporary table when processing an SRS report using Pre-process",categories:["X++"],tags:["SRS","Pre-process"],authors:"kome"},o=void 0,i={permalink:"/2024/01/04/NoDataInTmpTableForPreProcessReport",source:"@site/blog/2024-01-04-NoDataInTmpTableForPreProcessReport/index.md",title:"No data is inserted/modified in temporary table when processing an SRS report using Pre-process",description:"References",date:"2024-01-02T00:00:00.000Z",tags:[{inline:!0,label:"SRS",permalink:"/tags/srs"},{inline:!0,label:"Pre-process",permalink:"/tags/pre-process"}],readingTime:1.1766666666666667,hasTruncateMarker:!0,authors:[{name:"Kome Hoang",title:"Maintainer of Automaly",url:"https://www.linkedin.com/in/khahgm7",imageURL:"https://github.com/khahgm7.png",key:"kome",page:null}],frontMatter:{date:"2024-01-02",title:"No data is inserted/modified in temporary table when processing an SRS report using Pre-process",categories:["X++"],tags:["SRS","Pre-process"],authors:"kome"},unlisted:!1,lastUpdatedAt:1704706993e3,lastUpdatedBy:"Dynamics365",prevItem:{title:"Using Kusto functions in Power BI datasource",permalink:"/2024/01/04/KustoVsPBI"},nextItem:{title:"Set default model for Dynamics 365 Finance Operations project",permalink:"/2023/12/26/set-default-model-for-d365-project"}},l={authorsImageUrls:[void 0]},p=[{value:"References",id:"references",level:2},{value:"How to",id:"how-to",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dynamicsax-2012/appuser-itpro/tips-to-help-prevent-long-running-reports-from-timing-out#use-pre-processed-rdp-classes",children:"Use pre-processed RDP classes"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.microsoft.com/en-us/download/details.aspx?id=27725",children:"Microsoft Dynamics AX 2012 White Paper: Report Programming Model"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to",children:"How to"}),"\n",(0,r.jsx)(t.p,{children:"Pre-process RDP has become very commonplace these days, especially to ones who work with SSRS reports on Dynamics 365 FO a lot."}),"\n",(0,r.jsx)(t.p,{children:"Recently, I faced an issue when no data was inserted into or modififed in my temporary table during run-time despite the fact that RDP class (and its related ones within the same framework) was executed successfully. Even debugging did not show me what was going wrong. There was simply no SQL statements in the trace that I captured."}),"\n",(0,r.jsx)(t.p,{children:"Turned out that I will need to take ownership of the temp table instance before manipulating any data in it."}),"\n",(0,r.jsx)(t.p,{children:"My code used to be (when it did not work):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",children:"internal final class CSG_PostedServiveOrderWithoutInvDP extends SrsReportDataProviderPreProcessTempDB\n{\n    CSG_PostedServiveOrderWithoutInvTmp           tmpTable;\n\n    [SRSReportDataSetAttribute(tableStr(CSG_PostedServiveOrderWithoutInvTmp))]\n    public CSG_PostedServiveOrderWithoutInvTmp getTmpTable()\n    {\n        select tmpTable;\n        return tmpTable;\n    }\n\n    public void processReport()\n    {\n        ttsbegin;\n        this.populateTmpTable();\n        ttscommit;\n    }\n\n    private void populateTmpTable()\n    {\n        // Insert data to tmp table here.\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["I would need to call out to ",(0,r.jsx)(t.code,{children:"SrsReportDataProviderPreProcessTempDB.takeOwnershipOfTempTable()"})," to have it work."]}),"\n",(0,r.jsx)(t.p,{children:"My code then became:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",children:"internal final class CSG_PostedServiveOrderWithoutInvDP extends SrsReportDataProviderPreProcessTempDB\n{\n    CSG_PostedServiveOrderWithoutInvTmp           tmpTable;\n\n    [SRSReportDataSetAttribute(tableStr(CSG_PostedServiveOrderWithoutInvTmp))]\n    public CSG_PostedServiveOrderWithoutInvTmp getTmpTable()\n    {\n        select tmpTable;\n        return tmpTable;\n    }\n\n    public void processReport()\n    {\n        ttsbegin;\n        // Take ownership of each and all tmpTable before using them in the RDP\n        this.takeOwnershipTmp(); \n\n        // Data manipulation then can be conducted without an issue\n        this.populateTmpTable();\n        ttscommit;\n    }\n\n    private void takeOwnershipTmp()\n    {\n        // Take ownership of the current instance of tmpTable here\n        this.takeOwnershipOfTempTable(tmpTable);\n    }\n\n    private void populateTmpTable()\n    {\n        // Insert data to tmp table here.\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The code behind the ",(0,r.jsx)(t.code,{children:"SrsReportDataProviderPreProcessTempDB.takeOwnershipOfTempTable()"})," is as below (for ones who might want to implement their own framework):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",children:'/// <summary>\n    /// Takes ownership of the given temp table.\n    /// </summary>\n    /// <param name="_tempDbTable">\n    /// The table to take ownership of.\n    /// </param>\n    public void takeOwnershipOfTempTable(Common _tempDbTable)\n    {\n        DictTable dictTable;\n        TableId tableId;\n        #SRSFramework\n\n        if (!this.parmUseDefaultTransactionOnly())\n        {\n            _tempDbTable.setConnection(this.parmUserConnection());\n        }\n\n        tableId = _tempDbTable.TableId;\n        dictTable = new DictTable(tableId);\n        if(!dictTable)\n        {\n            throw error(strFmt("@SYS4007193", tableId2name(tableId)));\n        }\n\n        new ExecutePermission().assert();\n        dictTable.callObject(#TempDBMethodName_TakeOwnership, _tempDbTable, true);\n        CodeAccessPermission::revertAssert();\n    }\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);