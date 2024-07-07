"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[8427],{30738:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=n(74848),o=n(28453);const l={date:"2021-12-23",title:"File upload sysoperation",categories:["X++","sysoperation"],tags:["File upload"],authors:"max",unlisted:!0},a=void 0,i={permalink:"/blog/2021/12/23/File-upload-sysoperation",source:"@site/blog/2021-12-23-File-upload-sysoperation/index.md",title:"File upload sysoperation",description:"",date:"2021-12-23T00:00:00.000Z",tags:[{inline:!0,label:"File upload",permalink:"/blog/tags/file-upload"}],readingTime:2.3366666666666664,hasTruncateMarker:!1,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max"}],frontMatter:{date:"2021-12-23",title:"File upload sysoperation",categories:["X++","sysoperation"],tags:["File upload"],authors:"max",unlisted:!0},unlisted:!0},s={authorsImageUrls:[void 0]},d=[];function c(r){const e={code:"code",pre:"pre",...(0,o.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",metastring:'showLineNumbers title="DEV_FileUploadController.xpp"',children:'class DEV_FileUploadController extends SysOperationServiceController\r\n{\r\n    public void new()\r\n    {\r\n        super();\r\n     \r\n        this.parmClassName(classStr(DEV_FileUploadService));\r\n        this.parmMethodName(methodStr(DEV_FileUploadService, processOperation));\r\n     \r\n        this.parmDialogCaption("Caption");\r\n    }\r\n    public ClassDescription caption()\r\n    {\r\n        return "Caption";\r\n    }\r\n    public static void main(Args args)\r\n    {\r\n\t\tnew DEV_FileUploadController().startOperation();\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",metastring:'showLineNumbers title="DEV_FileUploadContract.xpp"',children:"[DataContract,\r\nSysOperationContractProcessing(classStr(DEV_FileUploadUIBuilder))\r\n]\r\nclass DEV_FileUploadContract\r\n{\r\n    container       storageResult;\r\n\r\n    [DataMemberAttribute('StorageResult')]\r\n    public container parmStorageResult(container _storageResult =  storageResult)\r\n    {\r\n        storageResult = _storageResult;\r\n        return storageResult;\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",metastring:'showLineNumbers title="DEV_FileUploadUIBuilder.xpp"',children:'class DEV_FileUploadUIBuilder extends SysOperationUIBuilder\r\n{\r\n    const str           OkButtonName = \'CommandButton\';\r\n    const str           FileUploadName = \'FileUpload\';\r\n\t\r\n    DEV_FileUploadContract   contract;\r\n\r\n    public void postBuild()\r\n    {\r\n        DialogGroup      dialogGroup;\r\n        FormBuildControl formBuildControl;\r\n        FileUploadBuild  dialogFileUpload;\r\n\r\n        super();\r\n\r\n        contract = this.dataContractObject();\r\n        \r\n        dialogGroup = dialog.addGroup("File path");\r\n        formBuildControl = dialog.formBuildDesign().control(dialogGroup.name());\r\n       \r\n        dialogFileUpload = formBuildControl.addControlEx(classstr(FileUpload), FileUploadName);\r\n        dialogFileUpload.style(FileUploadStyle::MinimalWithFilename);\r\n        dialogFileUpload.baseFileUploadStrategyClassName(classstr(FileUploadTemporaryStorageStrategy));\r\n        dialogFileUpload.fileTypesAccepted(".csv");\r\n\t//dialogFileUpload.fileTypesAccepted(".xlsx");\r\n        dialogFileUpload.fileNameLabel("@SYS308842");\r\n    }\r\n\r\n    private void dialogEventsSubscribe(FormRun _formRun)\r\n    {\r\n        FileUpload fileUpload = _formRun.control(_formRun.controlId(FileUploadName));\r\n\t\t\r\n        fileUpload.notifyUploadCompleted += eventhandler(this.uploadCompleted);\r\n        fileUpload.notifyUploadAttemptStarted += eventhandler(this.uploadStarted);\r\n\t\t\r\n        _formRun.onClosing += eventhandler(this.dialogClosing);\r\n    }\r\n\t\r\n    private void dialogClosing(xFormRun sender, FormEventArgs e)\r\n    {\r\n        this.dialogEventsUnsubscribe(sender as FormRun);\r\n    }\r\n\t\r\n\r\n    private void dialogEventsUnsubscribe(FormRun _formRun)\r\n    {\r\n        FileUpload fileUpload = _formRun.control(_formRun.controlId(FileUploadName));\r\n        fileUpload.notifyUploadCompleted -= eventhandler(this.uploadCompleted);\r\n        fileUpload.notifyUploadAttemptStarted -= eventhandler(this.uploadStarted);\r\n\t\t\r\n        _formRun.onClosing -= eventhandler(this.dialogClosing);\r\n    }\r\n\t\r\n    protected void uploadCompleted()\r\n    {\r\n        var  \t\tformRun \t = this.dialog().dialogForm().formRun();\r\n        FileUpload  \tfileUpload \t = formRun.control(formRun.controlId(FileUploadName));\r\n        FileUploadTemporaryStorageResult \tuploadResult     = fileUpload.getFileUploadResult();\r\n\r\n        if (uploadResult != null && uploadResult.getUploadStatus())\r\n        {\r\n            contract.parmStorageResult(uploadResult.pack());\r\n        }\r\n\r\n        this.setDialogOkButtonEnabled(formRun, true);\r\n    }\r\n\t\r\n    private void uploadStarted()\r\n    {\r\n        var formRun = this.dialog().dialogForm().formRun();\r\n\t\t\r\n        this.setDialogOkButtonEnabled(formRun, false);\r\n    }\r\n\r\n    protected void setDialogOkButtonEnabled(FormRun _formRun, boolean _isEnabled)\r\n    {\r\n        FormControl okButtonControl = _formRun.control(_formRun.controlId(OkButtonName));\r\n        if (okButtonControl)\r\n        {\r\n            okButtonControl.enabled(_isEnabled);\r\n        }\r\n    }\r\n\r\n    public void postRun()\r\n    {\r\n        super();\r\n\r\n        FormRun formRun = this.dialog().dialogForm().formRun();\r\n        this.dialogEventsSubscribe(formRun);\r\n\r\n        this.setDialogOkButtonEnabled(formRun, false);\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",metastring:'showLineNumbers title="DEV_FileUploadService.xpp"',children:'using System.IO;\r\nusing OfficeOpenXml;\r\nusing OfficeOpenXml.ExcelPackage;\r\nusing OfficeOpenXml.ExcelRange;\r\nclass DEV_FileUploadService extends SysOperationServiceBase\r\n{\r\n    #File\r\n    container               currentLine;\r\n    CommaTextStreamIo       cSVStream;\r\n    System.IO.Stream        stream;\r\n    ExcelSpreadsheetName    sheeet;\r\n    System.Exception        ex;\r\n\r\n    public void processOperation(DEV_FileUploadContract _contract)\r\n    {\r\n        if (_contract.parmStorageResult() != conNull())\r\n        {\r\n            FileUploadTemporaryStorageResult fileUploadResult = new FileUploadTemporaryStorageResult();\r\n\r\n            fileUploadResult.unpack(_contract.parmStorageResult());\r\n\r\n            if (fileUploadResult != null && fileUploadResult.getUploadStatus())\r\n            {\r\n                try \r\n                {\r\n                    cSVStream = CommaTextStreamIo::constructForRead(File::UseFileFromURL(fileUploadResult.getDownloadUrl()));\r\n                    if (cSVStream.status() != IO_Status::Ok)\r\n                    {\r\n                        throw error(strfmt(\'Is not possible to open the file. Error %1\',enum2str(cSVStream.status())));\r\n                    }\r\n                    cSVStream.inFieldDelimiter("\\,");\r\n                    cSVStream.inRecordDelimiter("\\n");\r\n   \r\n                    currentLine = cSVStream.read();\r\n   \r\n                    while(currentLine)\r\n                    {\r\n                        str  id = conPeek(currentLine, 1);\r\n                        info(id);\r\n                        currentLine = cSVStream.read();\r\n                    }\r\n                \r\n                    stream = fileUploadResult.openResult();\r\n                    using (ExcelPackage Package = new ExcelPackage(stream))\r\n                    {\r\n                        int                         rowCount, i;\r\n                        Package.Load(stream);\r\n  \r\n                        ExcelWorksheet worksheet   = package.get_Workbook().get_Worksheets().get_Item(1);\r\n                        OfficeOpenXml.ExcelRange    range \t= worksheet.Cells;\r\n                        rowCount                    = worksheet.Dimension.End.Row - worksheet.Dimension.Start.Row + 1;\r\n\r\n                        for (i = 2; i<= rowCount; i++)\r\n                        {\r\n                            str custAccount     = range.get_Item(i, 1).value;\r\n                            str id     \t\t= range.get_Item(i, 2).value;\r\n                            int number    \t= range.get_Item(i, 3).value;\r\n                            TranDate      date      \t= range.get_Item(i, 4).value;\r\n                        }\r\n                    }\r\n                }\r\n                catch \r\n                {\r\n                    ex = CLRInterop::getLastException().GetBaseException();\r\n\r\n                    error(ex.get_Message());\r\n                }\r\n            }\r\n        }         \r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",metastring:'showLineNumbers title="DEV_FileUpload_Runbase.xpp"',children:"class DEV_FileUpload_Runbase extends RunBaseBatch\r\n{\r\n    Filename        filename;\r\n    dialog          dialog;\r\n\r\n    #define.CurrentVersion(1)\r\n    #define.Version1(1)\r\n    #localmacro.CurrentList\r\n        fileName\r\n    #endmacro\r\n\r\n    client server static ClassDescription description()\r\n    {\r\n        return 'Upload CSV file'; // or Excel file\r\n    }\r\n\r\n    protected boolean canRunInNewSession()\r\n    {\r\n        return false;\r\n    }\r\n\r\n\r\n    public Object dialog()\r\n    {\r\n        DialogGroup         dialogGroup;\r\n        FormBuildControl    formBuildControl;\r\n        FileUploadBuild     dialogFileUpload;\r\n       // Set              enumSet = new Set(Types::Enum);\r\n                \r\n        dialog              = super();\r\n        dialogGroup         = dialog.addGroup('File picker');\r\n        formBuildControl    = dialog.formBuildDesign().control(dialogGroup.name());\r\n        \r\n        dialogFileUpload = formBuildControl.addControlEx(classstr(FileUpload), filename);\r\n        dialogFileUpload.style(FileUploadStyle::MinimalWithFilename);\r\n        dialogFileUpload.baseFileUploadStrategyClassName(classstr(FileUploadTemporaryStorageStrategy));\r\n        dialogFileUpload.fileTypesAccepted('.csv');\r\n        //dialogFileUpload.fileTypesAccepted('.xlsx');\r\n\r\n        dialogFileUpload.fileNameLabel('Select worker data file');\r\n    \r\n        return dialog;\r\n    }\r\n\r\n    static void main(Args _args)\r\n    {\r\n        MyBatch objClass = new MyBatch();\r\n\r\n        if (objClass.prompt())\r\n        {\r\n            objClass.runOperation();\r\n        }\r\n    }\r\n\r\n    public void run()\r\n    {\r\n        #File\r\n        container                           currentLine;\r\n        CommaTextStreamIo                   localStream;\r\n        str                                 textFile;\r\n       \r\n        FileUpload fileUploadControl = this.getFormControl(dialog, filename);\r\n        \r\n        FileUploadTemporaryStorageResult fileUploadResult = fileUploadControl.getFileUploadResult();\r\n\r\n        // CSV file\r\n        if (fileUploadResult != null && fileUploadResult.getUploadStatus())\r\n        {\r\n            textFile = fileUploadResult.getDownloadUrl();\r\n        }\r\n        \r\n        localStream = CommaTextStreamIo::constructForRead(File::UseFileFromURL(textFile));\r\n       \r\n          \r\n        if (localStream.status() != IO_Status::Ok)\r\n        {\r\n            throw error(strfmt('Is not possible to open the file. Error %1',enum2str(localStream.status())));\r\n        }\r\n    \r\n        localStream.inFieldDelimiter(',');\r\n        while (localStream.status() ==  IO_Status::Ok)\r\n        {\r\n            currentLine = localStream.read();\r\n\r\n            if (!currentLine)\r\n            {\r\n                break;\r\n            }\r\n            try\r\n            {\r\n                Id    = conPeek(currentLine, 1);\r\n                Date  = conPeek(currentLine, 2);\r\n\t\t\t\t// Remaining fields             \r\n            }\r\n            catch (Exception::Error)\r\n            {\r\n                Throw (Exception::Error);\r\n            }\r\n        }\r\n\r\n        // Excel file\r\n        \r\n        stream = fileUploadResult.openResult();\t\t\t\t\r\n       using (ExcelPackage Package = new ExcelPackage(stream))\r\n       {\r\n           int                         rowCount, i;\r\n           Package.Load(stream);\r\n\t\t\t\t\t\t\r\n           ExcelWorksheet  \t       worksheet   = package.get_Workbook().get_Worksheets().get_Item(1);\r\n           OfficeOpenXml.ExcelRange    range \t   = worksheet.Cells;\r\n           rowCount                    = worksheet.Dimension.End.Row - worksheet.Dimension.Start.Row + 1;\r\n\r\n           for (i = 2; i<= rowCount; i++)\r\n           {\r\n               str\t\t\tcustAccount     = range.get_Item(i, 1).value;\r\n               str\t\t\tid     \t\t= range.get_Item(i, 2).value;\r\n               int\t\t\tnumber    \t= range.get_Item(i, 3).value;\r\n               TranDate   \t        date      \t= range.get_Item(i, 4).value;\r\n\t    }\r\n    }\r\n\r\n        info('Success');\r\n    }\r\n\r\n    protected FormControl getFormControl(DialogRunbase dialog, str controlName)\r\n    {\r\n        return dialog.formRun().control(_dialog.formRun().controlId( controlName));\r\n    }\r\n\r\n}\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",metastring:'showLineNumbers title="Runable_Class.xpp"',children:"AsciiStreamIo file;\r\nArray fileLines;\r\nFileUploadTemporaryStorageResult fileUpload;\r\nfileUpload = File::GetFileFromUser() as FileUploadTemporaryStorageResult;\r\nfile = AsciiStreamIo::constructForRead(fileUpload.openResult());\r\n\r\nif (file)\r\n{\r\n    if (file.status())\r\n    {\r\n        throw error(\"@SYS52680\");\r\n    }\r\n\r\n    file.inFieldDelimiter(',');\r\n    file.inRecordDelimiter('\\r\\n');\r\n}\r\n\r\ncontainer record;\r\nwhile (!file.status())\r\n{\r\n    record = file.read();\r\n    if (conLen(record))\r\n    {\r\n        info(strFmt(\"%1 - %2\",conPeek(record,1),conPeek(record,2)));\r\n    }\r\n}\n"})})]})}function p(r={}){const{wrapper:e}={...(0,o.R)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(c,{...r})}):c(r)}},28453:(r,e,n)=>{n.d(e,{R:()=>a,x:()=>i});var t=n(96540);const o={},l=t.createContext(o);function a(r){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function i(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:a(r.components),t.createElement(l.Provider,{value:e},r.children)}}}]);