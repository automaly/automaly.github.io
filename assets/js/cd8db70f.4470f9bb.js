"use strict";(self.webpackChunknuxulutest=self.webpackChunknuxulutest||[]).push([[5589],{55516:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(74848),s=i(28453);const o={date:"2022-10-18",title:"Electronic Reporting (GER) From Scratch part 1 Importing a text file",categories:["Electronic Reporting","X++"],tags:["Electronic Reporting"],authors:"max",unlisted:!0,last_update:{date:"12/12/2023",author:"max"}},a=void 0,r={id:"development/business-docs/ger/2022-10-28-Electronic-Reporting-From-Scratch-part-1-Importing-a-text-file/index",title:"Electronic Reporting (GER) From Scratch part 1 Importing a text file",description:"In this Post we are going to see the step by step of how to configure everything needed to do an importing process of a text file into the F&O tables without writing a single line of code, using GER (Electronic Reporting):",source:"@site/docs/03-development/02-business-docs/02-ger/2022-10-28-Electronic-Reporting-From-Scratch-part-1-Importing-a-text-file/index.md",sourceDirName:"03-development/02-business-docs/02-ger/2022-10-28-Electronic-Reporting-From-Scratch-part-1-Importing-a-text-file",slug:"/development/business-docs/ger/2022-10-28-Electronic-Reporting-From-Scratch-part-1-Importing-a-text-file/",permalink:"/docs/development/business-docs/ger/2022-10-28-Electronic-Reporting-From-Scratch-part-1-Importing-a-text-file/",draft:!1,unlisted:!0,tags:[{inline:!0,label:"Electronic Reporting",permalink:"/docs/tags/electronic-reporting"}],version:"current",lastUpdatedBy:"max",lastUpdatedAt:1702368e6,frontMatter:{date:"2022-10-18",title:"Electronic Reporting (GER) From Scratch part 1 Importing a text file",categories:["Electronic Reporting","X++"],tags:["Electronic Reporting"],authors:"max",unlisted:!0,last_update:{date:"12/12/2023",author:"max"}},sidebar:"tutorialSidebar"},d={},c=[{value:"The Requirement",id:"the-requirement",level:2},{value:"The Electronic Reporting import flow Overview",id:"the-electronic-reporting-import-flow-overview",level:2},{value:"Step 1: Create the Data Model.",id:"step-1-create-the-data-model",level:2},{value:"Step 2: Create the Format",id:"step-2-create-the-format",level:2},{value:"Step 3: Map format to model.",id:"step-3-map-format-to-model",level:2},{value:"Step 4: Model Mapping to Destination",id:"step-4-model-mapping-to-destination",level:2},{value:"Step 5: The Glory",id:"step-5-the-glory",level:2}];function h(e){const t={em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In this Post we are going to see the step by step of how to configure everything needed to do an importing process of a text file into the F&O tables without writing a single line of code, using GER (Electronic Reporting):"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"D365FO Electronic Reporting (GER) From Scratch: Importing a text file YouTube video"})})}),"\n",(0,n.jsx)(t.p,{children:"But, as I always like to do, In this post you have the shortcut version for lazy/hurried professionals. Well, actually I am using snapshots here to show the different steps as a complement to the video, so you don\u2019t have to go back and forward if you want to follow the post as a guide. Also I save you the pain of hearing me again talking during more than half an hour\u2026 But the info here in the post might not be completed without the video, so if you have any doubt in a step, go and check the part of the video related with that part, I put links in every step which will get you to the exact part in the youtube video, hope you enjoy it!"}),"\n",(0,n.jsx)(t.h2,{id:"the-requirement",children:"The Requirement"}),"\n",(0,n.jsx)(t.p,{children:"We want to import and create into a header-lines F&O Tables two text files, without writing a single line of code (In the post we\u2019ll only see the first one, you can see it in the below image):"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(11006).A+"",width:"653",height:"349"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Note that the fixed position and length of the fields conform our delimitation criteria for parsing the values"})}),"\n",(0,n.jsx)(t.h2,{id:"the-electronic-reporting-import-flow-overview",children:"The Electronic Reporting import flow Overview"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(55887).A+"",width:"1024",height:"502"})}),"\n",(0,n.jsx)(t.p,{children:"The Data Model will be our \u201cData contract\u201d, I.E: the structure with the critical data we want to insert into the tables. This information will be fulfilled by the format, who will parse the document text and map it with the DM. Once the DM is populated it will, through the Model mapping to destination, insert the information into the actual F&O Tables. So the step by step would be:"}),"\n",(0,n.jsx)(t.h2,{id:"step-1-create-the-data-model",children:"Step 1: Create the Data Model."}),"\n",(0,n.jsx)(t.p,{children:"We are going to create a simple Data Model, in the Electronic Reporting workspace:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(66021).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Click on Reporting Configurations, and create a new Root, that will be our Model."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(63598).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Click on designer"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(29346).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"And create the diferents nodes until you have a data model like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(93510).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Save, go back to the previous form and complete the data model there:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(30242).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(31018).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-create-the-format",children:"Step 2: Create the Format"}),"\n",(0,n.jsx)(t.p,{children:"Once our model is completed, let\u2019s create a format based on it."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(38191).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"And go to the designer:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(94120).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"There you will have to add a File root, and 3 sequences (Text, Lines and Record). Note that in the Lines sequence we are putting the multiplicity one or more and the delimiter character New Line ."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(56099).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Under the last sequence we\u2019ll add our fields, in our case 3 string fields and a numeric one. Note that this example is based in the fixed position and length text file, so we are setting the property maximum length to our fields (2, 8, 6 and 2 respectively). For the semicolon delimited example file, we won\u2019t have to put the maximum property in our fields, but the ; character as a custom delimiter in our sequence \u201cRecord\u201d."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(66266).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.h2,{id:"step-3-map-format-to-model",children:"Step 3: Map format to model."}),"\n",(0,n.jsx)(t.p,{children:"After we have our format, we need to map the format to our Model, clicking in the button of the action pane Map Format to Model:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(72553).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Create a new record setting the required information and click on designer"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(10298).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"In the designer you\u2019ll see three columns, the second one is the format column and the last is the model column, so now we have to set the cursor in the related records of those columns and click on bind. That will bind them and will constitute the mapping between them, you should bind the different nodes as they are shown in the image:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(58399).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.h2,{id:"step-4-model-mapping-to-destination",children:"Step 4: Model Mapping to Destination"}),"\n",(0,n.jsx)(t.p,{children:"Now, we have the format (which is the one that parses the info from the file) mapped with our Model. The only thing left is the model mapping directly with the F&O Tables. So, let\u2019s go to the Model, designer:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(81842).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Map model to datasource:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(31409).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsxs)(t.p,{children:["Create a new model mapping, and make sure you put the direction ",(0,n.jsx)(t.strong,{children:"To destination"})," (because it is an import process), and go to Designer"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(20100).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Now you\u2019ll have to set the cursor in the object you want to add from the first column (in our case our created Data Model), click on add root and fulfil the required info:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(48690).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"After that, we\u2019ll have to add the destination, (in my example the tables Header and Lines), with the button Destination in the third column:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(46555).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(68224).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Once you have added the destination, you map your model directly with your tables. In our case, the mapping is direct with the lines."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(39401).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(10494).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsxs)(t.p,{children:["In addition, to be able to insert the lines into the header without having duplicated errors (because of the format of our imported file), It\u2019ll be needed to add a group by to avoid those duplicities. So click on the ",(0,n.jsx)(t.strong,{children:"Goup by"})," node in the first column and add it (for example at the root level)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(28807).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Click on Edit Group by and set your group by up, selecting what to group and for what fields."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(84070).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Now, we can map our new group by with the header record list, and the respective fields"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(25309).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(4180).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.h2,{id:"step-5-the-glory",children:"Step 5: The Glory"}),"\n",(0,n.jsx)(t.p,{children:"DONE!! now we can test it, after saving the newly created model mapping to destination, and going to the previous form, click on Run, select the file:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(52506).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:"Et Voil\xe0!!!!! records inserted successfully!!!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(16296).A+"",width:"1024",height:"576"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(82343).A+"",width:"1023",height:"511"})}),"\n",(0,n.jsx)(t.p,{children:"If you liked it, or at least learned something here, please go and check the Part 2: Exporting an XML."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},30242:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/complete-model-bb7ce20cb3d006ba64c93217b2ef5d95.png"},31018:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/complete-model2-abcb6f5bc8759243b1be1c06eb8ee9ac.png"},38191:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/create-format-a77ac7cadee888a77d9532a79e28834f.png"},66021:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/create-model-1-bdcd2ee70e04905815bcfa2b255f948e.png"},63598:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/create-model-2-c908356d9eee55f09400efc566643ceb.png"},52506:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/final-test-652644572043ea7e07d3190e953881e0.png"},11006:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image-16-d0442df701a9d4c19e6e127d5eb8d472.png"},82343:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image-17-ad4f79bf5de6a9554856e5f5d2854710.png"},72553:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image1-1-b68bf1673e62c68a29dce743deb6b18c.png"},81842:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image1-2-4135bf3ed756ce3b3edc3fb3f19f4051.png"},84070:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image11-a221a34fce1b95433b5515ed0ca82223.png"},25309:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image12-a8df35aeb53550ab5326b1745a2386d8.png"},4180:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image13-331be92ad34c6c327d1d901f3c9de1c8.png"},10298:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image2-1-453683dcbb45092cd0983e09cb3753b4.png"},31409:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image2-2-3727f10c4dc4fe907e86f198f41f3729.png"},58399:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image3-1-125c50bc147bea1b0851dd0bfb09fe46.png"},20100:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image3-2-0a908b9df601be3e16ad38d77d070eb4.png"},48690:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image4-6be67ebef9b3208f84be7091db79bd61.png"},46555:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image5-5d917bbc175864a0fda37163ca9ea13d.png"},68224:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image6-1bacc28545fcdf1ba1f74e9ba54eea17.png"},39401:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image7-66f6d90dbd7a8271f40fbb686216de19.png"},10494:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image8-43c4d3d81c94c2d046e954a0d37bde8a.png"},28807:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/image9-09e1342e534c55470ac66dffdff9d91a.png"},55887:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/incoming-a485e41b96658227c6935d5e59cb99dc.png"},16296:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/result-33c4e0dcdd9053ae2ae89915332a300c.png"},94120:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/setup-format-1-b054ab0a36879d24f363bb0c5d9ab2d3.png"},56099:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/setup-format-2-dacc85e495b0286d246a9b8299de1928.png"},66266:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/setup-format-3-acf36fff62a484aa6cb55c4d9d7ff0f8.png"},29346:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/setup-model-1-9828f88a00af265e90f5a103e3d4ed84.png"},93510:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/setup-model-5-85d7e92d6ef0fa1884d061104156c394.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);