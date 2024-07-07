"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[922],{25817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(74848),o=r(28453);const a={title:"Execute external database Stored Procedure from X++ code using ODBC connectivity",description:"Execute external database Stored Procedure from X++ code using ODBC connectivity",date:new Date("2015-05-13T00:00:00.000Z"),categories:["AX2012"],tags:["xpp","stored procedure"]},c=void 0,s={id:"development/xpp-sample/2015-05-13-execute-external-database-stored-procedure-from-x-code-using-odbc-connectivity/index",title:"Execute external database Stored Procedure from X++ code using ODBC connectivity",description:"Execute external database Stored Procedure from X++ code using ODBC connectivity",source:"@site/docs/03-development/01-xpp-sample/2015-05-13-execute-external-database-stored-procedure-from-x-code-using-odbc-connectivity/index.md",sourceDirName:"03-development/01-xpp-sample/2015-05-13-execute-external-database-stored-procedure-from-x-code-using-odbc-connectivity",slug:"/development/xpp-sample/2015-05-13-execute-external-database-stored-procedure-from-x-code-using-odbc-connectivity/",permalink:"/development/xpp-sample/2015-05-13-execute-external-database-stored-procedure-from-x-code-using-odbc-connectivity/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"xpp",permalink:"/tags/xpp"},{inline:!0,label:"stored procedure",permalink:"/tags/stored-procedure"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Execute external database Stored Procedure from X++ code using ODBC connectivity",description:"Execute external database Stored Procedure from X++ code using ODBC connectivity",date:"2015-05-13T00:00:00.000Z",categories:["AX2012"],tags:["xpp","stored procedure"]},sidebar:"tutorialSidebar",previous:{title:"Execute Stored Procedure from X++ code",permalink:"/development/xpp-sample/2015-05-12-execute-stored-procedure-from-x-code/"},next:{title:"List Page Interaction Class",permalink:"/development/xpp-sample/2015-06-09-list-page-interaction-class/"}},d={},i=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This is to show a method to execute external database stored procedures from X++ code. Create a job in AOT with following code. Follow the steps as explained here in the code like replace ",(0,n.jsx)(t.code,{children:"Server Name"}),", ",(0,n.jsx)(t.code,{children:"Database name"})," , ",(0,n.jsx)(t.code,{children:"Stored Procedure name"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The below code is executed through ",(0,n.jsx)(t.code,{children:"the ODBC Connection"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-C#",children:'\r\nstatic void execExternalDatabase(Args _args)\r\n{\r\n    LoginProperty loginProperty;\r\n    ODBCConnection odbcConnection;\r\n    Statement statement;\r\n    ResultSet resultSet;\r\n   \r\n\tResultSetMetaData resultSetMetaData;\r\n    Counter counter;\r\n    str sql;\r\n    SqlStatementExecutePermission perm;\r\n    ;\r\n \r\n   \r\n    loginProperty = new LoginProperty();\r\n    loginProperty.setServer("SERVERNAME Here"); // Replace your Database Server Name here\r\n    loginProperty.setDatabase("DemoDB"); //Replace your Database name here\r\n    odbcConnection = new ODBCConnection(loginProperty); // setting odbc connection here.\r\n \r\n    // ODBC Connection to create statement\r\n    statement = odbcConnection.createStatement();\r\n \r\n    // Replace the StoredProcedure you want to execute.\r\n    sql = strfmt(\'EXEC[myStoredProcedureName]\');\r\n \r\n    // Set code access permission to Execute\r\n    perm = new SqlStatementExecutePermission(sql);\r\n    perm.assert();\r\n \r\n    try\r\n    {\r\n        // if Stored Procedure has Select query use executeQuery method.\r\n       \r\n        resultSet = statement.executeQuery(sql);\r\n        resultSet.next();\r\n       \r\n        resultSetMetaData = resultSet.getMetaData();\r\n        for (counter = 1; counter <= resultSetMetaData.getColumnCount(); counter++)\r\n        {\r\n            switch(resultSetMetaData.getColumnType(counter))\r\n            {\r\n                case 0,1 :\r\n                    info(resultSet.getString(counter));\r\n                break;\r\n                case 3:\r\n                    info(date2StrUsr(resultSet.getdate(counter)));\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    catch (exception::Error)\r\n    {\r\n        print "An error occured in the query.";\r\n        pause;\r\n    }\r\n    // Code access permission scope ends here.\r\n    CodeAccessPermission::revertAssert();\r\n}\r\n\n'})}),"\n",(0,n.jsx)(t.p,{children:"Used a simple select query in the stored procedure and the result will be displayed on the infolog."})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>s});var n=r(96540);const o={},a=n.createContext(o);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);