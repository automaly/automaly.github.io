"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[8065],{2679:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=o(74848),t=o(28453);const r={title:"Modify Microsoft Dynamics AX 2012 R3 SSRS configurations using PowerShell",date:new Date("2015-07-02T00:00:00.000Z"),categories:["AX 2012","Report"],tag:["powershell","SSRS report"]},s=void 0,a={id:"ax2012-archive/ax2012-architecture/2015-07-02-modify-microsoft-dynamics-ax-2012-r3-ssrs-configurations/index",title:"Modify Microsoft Dynamics AX 2012 R3 SSRS configurations using PowerShell",description:"reportManagerWebConfig.ps1",source:"@site/docs/07-ax2012-archive/01-ax2012-architecture/2015-07-02-modify-microsoft-dynamics-ax-2012-r3-ssrs-configurations/index.md",sourceDirName:"07-ax2012-archive/01-ax2012-architecture/2015-07-02-modify-microsoft-dynamics-ax-2012-r3-ssrs-configurations",slug:"/ax2012-archive/ax2012-architecture/2015-07-02-modify-microsoft-dynamics-ax-2012-r3-ssrs-configurations/",permalink:"/docs/ax2012-archive/ax2012-architecture/2015-07-02-modify-microsoft-dynamics-ax-2012-r3-ssrs-configurations/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"Modify Microsoft Dynamics AX 2012 R3 SSRS configurations using PowerShell",date:"2015-07-02T00:00:00.000Z",categories:["AX 2012","Report"],tag:["powershell","SSRS report"]},sidebar:"tutorialSidebar",previous:{title:"AxBuild.exe for Parallel Compile on AOS",permalink:"/docs/ax2012-archive/ax2012-architecture/2015-07-01-axbuild-exe-for-parallel-compile-on-aos/"},next:{title:"Rename a Database in SQL Server",permalink:"/docs/ax2012-archive/ax2012-architecture/2015-11-03-rename-a-database-in-sql-server/"}},c={},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"reportManagerWebConfig.ps1"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'#Modify the Report Server Web.config file. ie replace MSRS11.VAS with your folder name\nSet-ExecutionPolicy Unrestricted\n$webConfig = "C:Program FilesMicrosoft SQL ServerMSRS11.VASReporting ServicesReportManagerWeb.config"\n$currentDate = (get-date).tostring("mm_dd_yyyy-hh_mm_s") # month_day_year - hours_mins_seconds\n$backup = $webConfig + "_$currentDate"\n$doc = new-object System.Xml.XmlDocument\n$doc.Load($webConfig)\n#save a backup copy\n$doc.Save($backup)\nWrite-Host "Backup saved as " + $backup\n$node = $doc.get_DocumentElement()."system.web".httpRuntime\n$attribute = $doc.CreateAttribute("maxRequestLength")\n$attribute.set_Value("100000")\n$node.SetAttributeNode($attribute )\n$doc.Save($webConfig)\nWrite-Host "1) Modified the Report Manager Web.config file"\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:" RsReportServer.ps1"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'#Modify the Report Server Web.config file. ie replace MSRS11.VAS with your folder name\nSet-ExecutionPolicy Unrestricted\n\n$version = "6.3.0.0"\n$webConfig = "C:Program FilesMicrosoft SQL ServerMSRS11.VASReporting ServicesReportServerRsReportServer.config"\n$currentDate = (get-date).tostring("mm_dd_yyyy-hh_mm_s") # month_day_year - hours_mins_seconds\n$backup = $webConfig +  ".xml" #"_$currentDate"\n$doc = new-object System.Xml.XmlDocument\n\n$doc.Load($webConfig)\n\n#save a backup copy\n$doc.Save($backup)\nWrite\nWrite-Host  "Backup saved as " + $backup\n#remove node "RSWindowsNegotiate" \n$node = $doc.documentElement.SelectSingleNode("//Configuration/Authentication/AuthenticationTypes/RSWindowsNegotiate")\nif ($node) \n{\n    \n{\n    $node.ParentNode.RemoveChild($node)\n    Write\n    Write-Host  "RSWindowsNegotiate Removed"\n}\n#Add node "IsRdceEnabled" \n$nodeService = $doc.documentElement.SelectSingleNode("//Configuration/Service")\n$nodeIsRdceEnabled = $doc.documentElement.SelectSingleNode("//Configuration/Service/IsRdceEnabled")\n\n\n#Set to true if already exists, otherwise create the node\nif ($nodeIsRdceEnabled)\n{\n    \n{\n    $nodeIsRdceEnabled.InnerXml = "True"\n}\nelse\n{\n    if ($nodeService)\n    {\n        \n    {\n        $subnodeService = $doc.createElement("IsRdceEnabled")\n        \n        $subnodeService.InnerXml = "True"\n        $nodeService.appendChild($subnodeService)\n        Write\n        Write-Host  "IsRdceEnabled added"\n    }\n}\n#Find Data\n$nodeCodeAxQuery = $doc.documentElement.SelectSingleNode("//Configuration/Extensions/Data/Extension[@Name=\'AXQUERY\']")\n\n#Add Data Extension\nif (-not($nodeCodeAxQuery))\n{\n    \n{\n    $nodeData = $doc.documentElement.SelectSingleNode("//Configuration/Extensions/Data")\n    \n    if ($nodeData) \n    {\n        \n    {\n        $nodeData.InnerXml = $nodeData.InnerXml + \n        \n        "<Extension Name=\'AXQUERY\' Type=\'Microsoft.Dynamics.Framework.Reports.AxQueryConnection,Microsoft.Dynamics.Framework.ReportsExtensions, Version=" +\n\t\t$version +\n\t\t", Culture=neutral, PublicKeyToken=31bf3856ad364e35\'/>\n      <Extension Name=\'AXDATAMETHOD\' Type=\'Microsoft.Dynamics.Framework.Reports.AxDataMethodConnection,Microsoft.Dynamics.Framework.ReportsExtensions, Version=" +\n\t\t$version +\n\t\t", Culture=neutral, PublicKeyToken=31bf3856ad364e35\'/>\n      <Extension Name=\'AXREPORTDATAPROVIDER\' Type=\'Microsoft.Dynamics.Framework.Reports.AxReportProviderConnection,Microsoft.Dynamics.Framework.ReportsExtensions, Version=" +\n\t\t$version +\n\t\t", Culture=neutral, PublicKeyToken=31bf3856ad364e35\'/>\n      <Extension Name=\'AXADOMD\' Type=\'Microsoft.Dynamics.Framework.Reports.AxAdomdConnection,Microsoft.Dynamics.Framework.ReportsExtensions, Version=" +\n\t\t$version +\n\t\t", Culture=neutral, PublicKeyToken=31bf3856ad364e35\'/>\n      <Extension Name=\'AXENUMDATAPROVIDER\' Type=\'Microsoft.Dynamics.Framework.Reports.EnumProviderConnection,Microsoft.Dynamics.Framework.ReportsExtensions, Version=" +\n\t\t$version +\n\t\t", Culture=neutral, PublicKeyToken=31bf3856ad364e35\'/>"\n        Write-Host  "Data Extension added"\n    }\n}\n#Find Extensions\n$nodeExtensions = $doc.documentElement.SelectSingleNode("//Configuration/Extensions")\n$nodeReportDefinitionCustomization = $doc.documentElement.SelectSingleNode("//Configuration/Extensions/ReportDefinitionCustomization")\n\nif (-not($nodeReportDefinitionCustomization))\n{\n    \n{\n    #Add ReportDefinitionCustomization\n    if ($nodeExtensions) \n    {\n        \n    {\n        $subnodeExt = $doc.createElement("ReportDefinitionCustomization")\n        \n        $subnodeExt.InnerXml = "<Extension Name=\'AXRDCE\' Type=\'Microsoft.Dynamics.Framework.Reports.AxRdce.CustomizationExtension,Microsoft.Dynamics.Framework.ReportsExtensions, Version=" +\n\t\t$version +\n\t\t", Culture=neutral, PublicKeyToken=31bf3856ad364e35\'/>"\n        $nodeExtensions.appendChild($subnodeExt)\n        Write\n        Write-Host  "ReportDefinitionCustomization added"\n    }\n}\nelse\n{\n    $nodeAXRDCE= $doc.documentElement.SelectSingleNode("//Configuration/Extensions/ReportDefinitionCustomization/Extension [@Name=\'AXRDCE\']")\n    \n    if (-not($nodeAXRDCE))\n    {\n        \n    {\n        $nodeReportDefinitionCustomization.InnerXml = $nodeReportDefinitionCustomization.InnerXml +\n            "<Extension Name=\'AXRDCE\' Type=\'Microsoft.Dynamics.Framework.Reports.AxRdce.CustomizationExtension,Microsoft.Dynamics.Framework.ReportsExtensions, Version=" +\n\t\t$version +\n\t\t", Culture=neutral, PublicKeyToken=31bf3856ad364e35\'/>"\n    }\n}\n$doc.Save($webConfig)\n\nWrite\nWrite-Host  "2) Modified the Report Server Web.config file"\ntext some thing\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ReportServerRsSrvPolicyConfig.ps1"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"#Instructions: Modify the Report Server Web.config file. ie replace MSRS11.VAS with your folder name\n# Modify version 6.3.0.0 for Dynamics AX 2012\nSet-ExecutionPolicy Unrestricted\n$version = \"6.3.0.0\"\n$webConfig = \"C:Program FilesMicrosoft SQL ServerMSRS11.VASReporting ServicesReportServerrssrvpolicy.config\"\n$currentDate = (get-date).tostring(\"mm_dd_yyyy-hh_mm_s\") # month_day_year - hours_mins_seconds\n$backup = $webConfig + \".xml\" #\"_$currentDate\"\n$doc = new-object System.Xml.XmlDocument\n$doc.Load($webConfig)\n#save a backup copy\n$doc.Save($backup)\nWrite\nWrite-Host \"Backup saved as \" + $backup\n#Add SecurityClass\n$nodeAxSessionPermission = $doc.documentElement.SelectSingleNode(\"//configuration/mscorlib/security/policy/PolicyLevel/SecurityClasses/SecurityClass[@Name='AxSessionPermission']\")\nif (-not($nodeAxSessionPermission))\n{\n{\n $nodeSecurityClasses = $doc.documentElement.SelectSingleNode(\"//configuration/mscorlib/security/policy/PolicyLevel/SecurityClasses\")\n if ($nodeSecurityClasses)\n{\n {\n $nodeSecurityClass = $doc.createElement(\"SecurityClass\")\n $nodeSecurityClass.InnerXml = \"<SecurityClass Name='AxSessionPermission' Description='Microsoft.Dynamics.Framework.Reports.AxSessionPermission, Microsoft.Dynamics.Framework.Reports, Version=\" +\n $version +\n \", Culture=neutral, PublicKeyToken=31bf3856ad364e35' />\"\n $nodeSecurityClasses.appendChild($nodeSecurityClass.FirstChild)\nWrite\n Write-Host \"SecurityClass added\"\n }\n}\n#Add PermissionSet\n$nodeAxSessionPermissionSet = $doc.documentElement.SelectSingleNode(\"//configuration/mscorlib/security/policy/PolicyLevel/NamedPermissionSets/PermissionSet[@class='NamedPermissionSet' and @version='1' and @Name='AxSessionPermissionSet']\")\nif (-not($nodeAxSessionPermissionSet))\n{\n{\n $nodeNamedPermissionSets = $doc.documentElement.SelectSingleNode(\"//configuration/mscorlib/security/policy/PolicyLevel/NamedPermissionSets\")\n if ($nodeNamedPermissionSets)\n{\n {\n $nodePermissionSet = $doc.createElement(\"PermissionSet\")\n $nodePermissionSet.InnerXml = \"<PermissionSet class='NamedPermissionSet' version='1' Name='AxSessionPermissionSet'>\n <IPermission class='AxSessionPermission' version='1' Unrestricted='true' />\n <IPermission class='SecurityPermission' version='1' Flags='Assertion' />\n </PermissionSet>\"\n $nodeNamedPermissionSets.appendChild($nodePermissionSet.FirstChild)\nWrite\n Write-Host \"PermissionSet added\"\n }\n}\n#Add CodeGroup\n$nodeAxStrongName = $doc.documentElement.SelectSingleNode(\"//configuration/mscorlib/security/policy/PolicyLevel/CodeGroup[@class='FirstMatchCodeGroup' and @version='1' and @PermissionSetName='Nothing']/CodeGroup[@class='UnionCodeGroup' and @version='1' and @PermissionSetName='FullTrust' and @Name='AX_Reports_Strong_Name']\")\nif (-not($nodeAxStrongName))\n{\n{\n $nodeCodeGroup = $doc.documentElement.SelectSingleNode(\"//configuration/mscorlib/security/policy/PolicyLevel/CodeGroup[@class='FirstMatchCodeGroup' and @version='1' and @PermissionSetName='Nothing']\")\n if ($nodeCodeGroup)\n{\n {\n $subnodeCodeGroup = $doc.createElement(\"CodeGroup\")\n $subnodeCodeGroup.InnerXml = \"<CodeGroup class='UnionCodeGroup' version='1' PermissionSetName='FullTrust' Name='AX_Reports_Strong_Name' Description='This code group grants Dynamics AX Reports code full trust. '>\n <IMembershipCondition class='StrongNameMembershipCondition' version='1' PublicKeyBlob='0024000004800000940000000602000000240000525341310004000001000100B5FC90E7027F67871E773A8FDE8938C81DD402BA65B9201D60593E96C492651E889CC13F1415EBB53FAC1131AE0BD333C5EE6021672D9718EA31A8AEBD0DA0072F25D87DBA6FC90FFD598ED4DA35E44C398C454307E8E33B8426143DAEC9F596836F97C8F74750E5975C64E2189F45DEF46B2A2B1247ADC3652BF5C308055DA9' />\n </CodeGroup>\"\n $nodeCodeGroup.appendChild($subnodeCodeGroup.FirstChild)\nWrite\n Write-Host \"CodeGroup added\"\n }\n}\n#Add nodeReportExpressionPermission\n#http://blogs.msdn.com/b/axsupport/archive/2012/02/02/microsoft-dynamics-ax-2012-reporting-extensions-error-system-security-permissions-environmentpermission-while-running-report.aspx\n$nodeReportExpressionPermission = $doc.documentElement.SelectSingleNode(\"//configuration/mscorlib/security/policy/PolicyLevel/CodeGroup[@class='FirstMatchCodeGroup' and @version='1' and @PermissionSetName='Nothing']/CodeGroup[@class='UnionCodeGroup' and @version='1' and @PermissionSetName='Execution' and @Name='Report_Expressions_Default_Permissions']\")\nif ($nodeReportExpressionPermission)\n{\n{\n $attribute = $doc.CreateAttribute(\"PermissionSetName\")\n $attribute.set_Value(\"FullTrust\")\n $nodeReportExpressionPermission.SetAttributeNode($attribute )\n}\n}\n$doc.Save($webConfig)\nWrite\nWrite-Host \"3) Modified the Report Server rssrvpolicy.config file\"\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var i=o(96540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);