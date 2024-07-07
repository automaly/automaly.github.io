"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[9289],{83009:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(74848),i=r(28453);const s={date:new Date("2020-04-06T00:00:00.000Z"),last_update:{date:"12/12/2023",author:"max"},title:"Set up a VHD for finance and operations apps",tags:["onebox vhd","Dynamics 365 finance and operations","upgrade","LCS","OneBox"],categories:["FinOps","Troubleshooting","Onebox"],authors:"max"},o=void 0,a={permalink:"/blog/2020/04/06/getting-onebox-vhd-dynamics-365-finance-and-operations-virtual-machine",source:"@site/blog/2020-04-06-getting-onebox-vhd-dynamics-365-finance-and-operations-virtual-machine/index.md",title:"Set up a VHD for finance and operations apps",description:"1. Download Dynamics 365 finance and operations VHD files",date:"2020-04-06T00:00:00.000Z",tags:[{inline:!0,label:"onebox vhd",permalink:"/blog/tags/onebox-vhd"},{inline:!0,label:"Dynamics 365 finance and operations",permalink:"/blog/tags/dynamics-365-finance-and-operations"},{inline:!0,label:"upgrade",permalink:"/blog/tags/upgrade"},{inline:!0,label:"LCS",permalink:"/blog/tags/lcs"},{inline:!0,label:"OneBox",permalink:"/blog/tags/one-box"}],readingTime:4.256666666666667,hasTruncateMarker:!0,authors:[{name:"Max Nguyen",title:"FinOps Ranger",url:"/about",imageURL:"https://github.com/Dynamics365.png",key:"max"}],frontMatter:{date:"2020-04-06T00:00:00.000Z",last_update:{date:"12/12/2023",author:"max"},title:"Set up a VHD for finance and operations apps",tags:["onebox vhd","Dynamics 365 finance and operations","upgrade","LCS","OneBox"],categories:["FinOps","Troubleshooting","Onebox"],authors:"max"},unlisted:!1,prevItem:{title:"How to skip standard code in Dynamics 365 finance and operations",permalink:"/blog/2020/04/09/How-to-ignore-standard-code-in-Dynamics-365-finance-and-operations"},nextItem:{title:"Create Purchase Orders - Confirm - Product receipt - Post using X++ in Dynamics 365 Finance & Operations",permalink:"/blog/2020/01/25/create-po-confirm-receipt-post"}},c={authorsImageUrls:[void 0]},l=[{value:"1. Download Dynamics 365 finance and operations VHD files",id:"1-download-dynamics-365-finance-and-operations-vhd-files",level:2},{value:"2. Extend the Evaluattion license",id:"2-extend-the-evaluattion-license",level:2},{value:"3. Rename VM",id:"3-rename-vm",level:2},{value:"Update financial reporting",id:"update-financial-reporting",level:3},{value:"Update the Azure Storage Emulator",id:"update-the-azure-storage-emulator",level:3},{value:"4. Location of packages, source code, and other AOS configurations",id:"4-location-of-packages-source-code-and-other-aos-configurations",level:2},{value:"5. Redeploying or restarting the runtime on the VM",id:"5-redeploying-or-restarting-the-runtime-on-the-vm",level:2},{value:"6. Update to the latest version",id:"6-update-to-the-latest-version",level:2},{value:"7. For (VHD) that was released for versions 10.0.24 and later",id:"7-for-vhd-that-was-released-for-versions-10024-and-later",level:2},{value:"7.1 Register a new application in Azure Active Directory",id:"71-register-a-new-application-in-azure-active-directory",level:3},{value:"7.2 Run the setup script",id:"72-run-the-setup-script",level:3},{value:"8. For (VHD) that was released for versions 10.0.24 and later",id:"8-for-vhd-that-was-released-for-versions-10024-and-later",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1-download-dynamics-365-finance-and-operations-vhd-files",children:"1. Download Dynamics 365 finance and operations VHD files"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the LCS main page and select ",(0,t.jsx)(n.strong,{children:"Shared asset library"})," or go to Shared Asset Library."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select the asset type ",(0,t.jsx)(n.strong,{children:"Downloadable VHD"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Find the VHD you are looking for based on the desired Finance and Operation version. The VHD is divided into multiple file parts that you need to download. For example, the asset files that start with "VHD - 10.0.5" are the different files you need in order to install version 10.0.5.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download all files (parts) associated with the desired VHD to a local folder."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After the download is complete, run the executable file that you downloaded, accept the software license agreement, and choose a file path to extract the VHD to."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This creates a local VHD file that you can use to run a local virtual machine."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sign in to the VM by using the following credentials:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["User name: ",(0,t.jsx)(n.strong,{children:"Administrator"})]}),"\n",(0,t.jsxs)(n.li,{children:["Password: ",(0,t.jsx)(n.strong,{children:"pass@word1"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provision the administrator user."}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["For security reasons the reply URL setup for AAD was changed, The ",(0,t.jsx)(n.code,{children:"Admin user provisioning tool"})," is deleted from 10.0.24 ",(0,t.jsx)(n.strong,{children:"cloud hosted"})," VM. More info here ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/dev-tools/access-instances#frequently-asked-questions",children:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/dev-tools/access-instances#frequently-asked-questions"}),"."]}),(0,t.jsx)(n.p,{children:"You still have it in the VHD machine."})]}),"\n",(0,t.jsx)(n.h2,{id:"2-extend-the-evaluattion-license",children:"2. Extend the Evaluattion license"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Run cmd with Admin right."}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"slmgr -dli"})," to check the current period status."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:'title="slmgr -dli"',children:"Name: Windows(R), ServerDatacenterEval edition\r\nDescription: Windows(R) Operating System, TIMEBASED_EVAL channel\r\nPartial Product Key: H6F8M\r\nLicense Status: Licensed\r\nTimebased activation expiration: 259199 minute(s) (180 day(s))\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"slmgr \u2013rearm"})," to extend the evaluation period."]}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"slmgr \u2013dlv"})," to see how many extensions do you have left. You can only extend the license a limited number of times."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-rename-vm",children:"3. Rename VM"}),"\n",(0,t.jsx)(n.admonition,{title:"Update 2023",type:"tip",children:(0,t.jsxs)(n.p,{children:["From the VHD 10.0.29 version, the VHD name named with the version of it own, before that the computer name always ",(0,t.jsx)(n.strong,{children:"MININT-F36S5EH"}),". So we don't have to remane the VM everytime we deploy a new VHD.\r\n",(0,t.jsx)(n.img,{alt:"VHD 10.0.29",src:r(90073).A+"",title:"VHD 10.0.29",width:"524",height:"277"})]})}),"\n",(0,t.jsx)(n.admonition,{title:"Reference",type:"info",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/migration-upgrade/vso-machine-renaming",children:"https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/migration-upgrade/vso-machine-renaming"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Rename and restart the machine before you start development or connect to Azure DevOps."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update the server name in SQL Server"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The default credential for SQL server is ",(0,t.jsx)(n.strong,{children:"axdbadmin"})," and password ",(0,t.jsx)(n.strong,{children:"AOSWebSite@12"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can also see the password (",(0,t.jsx)(n.code,{children:"DataAccess.AxAdminSqlPwd"}),") in the ",(0,t.jsx)(n.code,{children:"C:\\AOSService\\webroot\\web.config"})]}),"\n",(0,t.jsx)(n.p,{children:"To decrypt run this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"C:\\AOSService\\webroot\\bin\\Microsoft.Dynamics.AX.Framework.ConfigEncryptor.exe -decrypt C:\\AOSService\\webroot\\web.config\n"})}),"\n",(0,t.jsx)(n.p,{children:"To encrypt run this command:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"C:\\AOSService\\webroot\\bin\\Microsoft.Dynamics.AX.Framework.ConfigEncryptor.exe -encrypt C:\\AOSService\\webroot\\web.config"})}),"\n",(0,t.jsx)(n.p,{children:"If you see the error"}),"\n",(0,t.jsx)(n.admonition,{title:"error",type:"danger",children:(0,t.jsx)(n.p,{children:"No certificate found for id '7366E25DC94FA8A400FA0037FFF3BB300D9482D4'"})}),"\n",(0,t.jsxs)(n.p,{children:["Please follow ",(0,t.jsx)(n.a,{href:"#7-for-vhd-that-was-released-for-versions-10024-and-later",children:"this step"})," first."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run following query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",metastring:'title="MININT-57EHFHJ"',children:"sp_dropserver [old_name]\r\nsp_addserver [new_name], local\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In these commands, be sure to replace old_name with the old name of the server and new_name with the new name. By default, the old name is ",(0,t.jsx)(n.code,{children:"MININT-F36S5EH"}),", but you can run select @@servername to get the old name. Additionally, be sure to restart the SQL Server service after the commands have finished running."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restart SQL service"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open Reporting Services Configuration Manager for SQL Server 2016, then ",(0,t.jsx)(n.strong,{children:"Select Database"}),", select ",(0,t.jsx)(n.strong,{children:"Change Database"}),", and use the new server name."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"update-financial-reporting",children:"Update financial reporting"}),"\n",(0,t.jsxs)(n.p,{children:["Go to LCS portal and download a one version package, we will need the scripts from it. Open a Microsoft Windows PowerShell command window as an admin, and run the following command. This command contains the default passwords that might have to be updated. Be sure to replace ",(0,t.jsx)(n.strong,{children:"new_name"})," with the new name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",metastring:"showLineNumbers",children:"cd <update folder>\\MROneBox\\Scripts\\Update\\ConfigureMRDatabase.ps1 -NewAosDatabaseName AxDB -NewAosDatabaseServerName new_name -NewMRDatabaseName ManagementReporter -NewAxAdminUserPassword AOSWebSite@123 -NewMRAdminUserName MRUser -NewMRAdminUserPassword MRWebSite@123 -NewMRRuntimeUserName MRUSer -NewMRRuntimeUserPassword MRWebSite@123 -NewAxMRRuntimeUserName MRUser -NewAxMRRuntimeUserPassword MRWebSite@123\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"console.log('Every repo must come with a mascot.');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",metastring:"showLineNumbers",children:"CustTable custTable = CustTable::find(serviceOrderTable.CustAccount);\r\nCSG_CorrigoProUpdate corrigoProUpdate;\r\n\r\nif((custTable.AccountNum == serviceOrderTable.CustAccount)\r\n    && CSG_CorrigoProTable::Exist(custTable.CSGMasterAccount)\r\n    && serviceOrderTable.CSGCustomerPO != ''\r\n    && ((serviceOrderReason.StageId == 'Started'\r\n    || serviceOrderReason.StageId == 'Susp-Other'\r\n    || serviceOrderReason.StageId == 'Susp-Parts'\r\n    || serviceOrderReason.StageId == 'Susp-Sched'\r\n    || serviceOrderReason.StageId == 'Complete'))\r\n    && serviceOrderReason.Description != 'Travel Back')\r\n{\r\n    ttsbegin;\r\n    corrigoProUpdate.selectForUpdate();\r\n    corrigoProUpdate.AccountNum = serviceOrderTable.CustAccount;\r\n    corrigoProUpdate.CSGMasterAccount = custTable.CSGMasterAccount;\r\n    corrigoProUpdate.ServiceOrderId = serviceOrderReason.ServiceOrderId;\r\n    corrigoProUpdate.CustomerPO = serviceOrderTable.CSGCustomerPO;\r\n    corrigoProUpdate.ObjectName = #ObjectName;\r\n    corrigoProUpdate.StageId = serviceOrderReason.StageId;\r\n    corrigoProUpdate.Progress = serviceOrderTable.Progress;\r\n    corrigoProUpdate.Technician = HcmWorker::find(serviceOrderTable.WorkerResponsible).name();\r\n\r\n    //With condition already in the custom method docuRef.Name = 'Tech Notes'\r\n    corrigoProUpdate.Notes = DocuRef::csgFirstonly1Note('csg', 287, serviceOrderTable.RecId, 'Tech Notes');\r\n        \r\n    corrigoProUpdate.ServiceDateUtc = serviceOrderTable.ServiceDateTime;\r\n    corrigoProUpdate.ActionDateUtc = serviceOrderReason.CSGDateTimeExecuted;\r\n    corrigoProUpdate.insert();\r\n    ttscommit;\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"update-the-azure-storage-emulator",children:"Update the Azure Storage Emulator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"From the Start menu, open Microsoft Azure Storage Emulator - v4.0, and run the following commands."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"AzureStorageEmulator.exe start"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If you got an error ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Port conflict with existing application"})}),", please check this ",(0,t.jsx)(n.a,{href:"/operation/troubleshooting/2020-04-05-azure-storage-emulator-port-conflict-with-existing-application",children:"post"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This command verifies that the emulator is running."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"AzureStorageEmulator.exe status"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update the server name"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"AzureStorageEmulator.exe init -server new_name"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more information about Azure storage emulator please follow ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-use-emulator",children:"https://docs.microsoft.com/en-us/azure/storage/common/storage-use-emulator"})]}),"\n",(0,t.jsx)(n.h2,{id:"4-location-of-packages-source-code-and-other-aos-configurations",children:"4. Location of packages, source code, and other AOS configurations"}),"\n",(0,t.jsx)(n.p,{children:"On a VM, you can find most of the application configuration by opening the web.config file of AOSWebApplication."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start IIS."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.em,{children:"Sites > AOSWebApplication"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Right-click, and then click ",(0,t.jsx)(n.strong,{children:"Explore"})," to open File Explorer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.strong,{children:"web.config"})," file in Notepad or another text editor. The following keys are of interest to many developers and administrators:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Aos.MetadataDirectory"})," \u2013 This key points to the location of the packages folder that contains platform and application binaries, and also source code. (Source code is available only in development environments.) Typical values are: ",(0,t.jsx)(n.code,{children:"c:\\packages"}),", ",(0,t.jsx)(n.code,{children:"c:\\AosServicePackagesLocalDirectory"}),", and ",(0,t.jsx)(n.code,{children:"J:AosServicePackagesLocalDirectory"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DataAccess.Database"})," \u2013 This key holds the name of the database."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Aos.AppRoot"})," \u2013 This key points to the root folder of the Application Object Server (AOS) web application."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"5-redeploying-or-restarting-the-runtime-on-the-vm",children:"5. Redeploying or restarting the runtime on the VM"}),"\n",(0,t.jsx)(n.p,{children:"To restart the local runtime and redeploy all the packages, follow these steps."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open File Explorer, and go to ",(0,t.jsx)(n.code,{children:"C:\\CustomerServiceUnit"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Right-click ",(0,t.jsx)(n.strong,{children:"AOSDeploy.cmd"}),", and then click ",(0,t.jsx)(n.strong,{children:"Run as administrator"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This process might take a while. The process is completed when the cmd.exe window closes. If you just want to restart AOS (without redeploying the runtime), run iisreset from an administrator Command Prompt window, or restart AOSWebApplication from IIS."}),"\n",(0,t.jsx)(n.h2,{id:"6-update-to-the-latest-version",children:"6. Update to the latest version"}),"\n",(0,t.jsxs)(n.p,{children:["Please check this ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/deployment/install-deployable-package",children:"document"})," for versions 10.0.24"]}),"\n",(0,t.jsx)(n.h2,{id:"7-for-vhd-that-was-released-for-versions-10024-and-later",children:"7. For (VHD) that was released for versions 10.0.24 and later"}),"\n",(0,t.jsx)(n.h3,{id:"71-register-a-new-application-in-azure-active-directory",children:"7.1 Register a new application in Azure Active Directory"}),"\n",(0,t.jsxs)(n.p,{children:["To register a new application in Microsoft Azure Active Directory (Azure AD), follow the steps outlined in ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app",children:"Register app or web API"}),". The new app registration should be for a web application, and the following redirect URIs should be added:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"https://usnconeboxax1aos.cloud.onebox.dynamics.com/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"https://usnconeboxax1aos.cloud.onebox.dynamics.com/oauth/"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once created, make note of the ",(0,t.jsx)(n.strong,{children:"Application (client) ID"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"72-run-the-setup-script",children:"7.2 Run the setup script"}),"\n",(0,t.jsxs)(n.p,{children:["After you sign in with the ",(0,t.jsx)(n.strong,{children:"Administrator"})," account, right-click the desktop shortcut ",(0,t.jsx)(n.strong,{children:"Generate Self-Signed Certificates"}),", and select ",(0,t.jsx)(n.strong,{children:"Run as administrator"}),". When the script prompts for the application ID, provide the ",(0,t.jsx)(n.strong,{children:"Application (client) ID"})," created in Azure Active Directory."]}),"\n",(0,t.jsx)(n.p,{children:"When the script finishes, the environment is ready for use. At this time, you can run the Admin Provisioning tool to set the administrator account, permissions, and tenant. Make sure that the email provided is for the Azure Active Directory tenant in which the application registration was created."}),"\n",(0,t.jsx)(n.h2,{id:"8-for-vhd-that-was-released-for-versions-10024-and-later",children:"8. For (VHD) that was released for versions 10.0.24 and later"}),"\n",(0,t.jsx)(n.p,{children:"You will get this error when starting the Dynamics 365 client."}),"\n",(0,t.jsx)(n.admonition,{title:"error",type:"danger",children:(0,t.jsx)(n.p,{children:"AADSTS700016: Application with identifier 'b0cdba4e-ada9-4ef7-83ba-590322d2c529' was not found in the directory 'Test_Test_ContosoAX'. This can happen if the application has not been installed by the administrator of the tenant or consented to by any user in the tenant. You may have sent your authentication request to the wrong tenant."})}),"\n",(0,t.jsxs)(n.p,{children:["You can locate the ",(0,t.jsx)(n.strong,{children:"admin provisioning tool"})," from ",(0,t.jsx)(n.code,{children:"C:\\AOSServicePackagesLocalDirectory\\bin"}),", run it with admin right and polulate your email account, once it's done, you will be able to access the client."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},90073:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/DVHD10029-aa84e7dce39e7502f67e24b0c6199853.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);