"use strict";(self.webpackChunkautomaly_com=self.webpackChunkautomaly_com||[]).push([[9729],{31257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(85893),r=n(11151);const a={date:"2022-10-30",title:"Electronic Reporting from Scratch part 3 Use of Parameters and Excel Format",categories:["Electronic Reporting","X++"],tags:["Electronic Reporting"],authors:"max",unlisted:!0,last_update:{date:"12/12/2023",author:"max"}},o=void 0,s={id:"development/business-docs/ger/2022-10-30-Electronic-Reporting-from-Scratch-part-3-Use-of-Parameters-and-Excel-Format/index",title:"Electronic Reporting from Scratch part 3 Use of Parameters and Excel Format",description:"In this 3rd part of the series, we are going to have 2 very different Cases, in the first case we\u2019ll see how to deal with user input data, and in the second one we are going to learn how to work with Excel format in ER, using an exporting example. As always I am doing a how-to post below the video so you don\u2019t have to watch the full video if you don\u2019t want to.",source:"@site/docs/03-development/02-business-docs/02-ger/2022-10-30-Electronic-Reporting-from-Scratch-part-3-Use-of-Parameters-and-Excel-Format/index.md",sourceDirName:"03-development/02-business-docs/02-ger/2022-10-30-Electronic-Reporting-from-Scratch-part-3-Use-of-Parameters-and-Excel-Format",slug:"/development/business-docs/ger/2022-10-30-Electronic-Reporting-from-Scratch-part-3-Use-of-Parameters-and-Excel-Format/",permalink:"/development/business-docs/ger/2022-10-30-Electronic-Reporting-from-Scratch-part-3-Use-of-Parameters-and-Excel-Format/",draft:!1,unlisted:!0,tags:[{label:"Electronic Reporting",permalink:"/tags/electronic-reporting"}],version:"current",frontMatter:{date:"2022-10-30",title:"Electronic Reporting from Scratch part 3 Use of Parameters and Excel Format",categories:["Electronic Reporting","X++"],tags:["Electronic Reporting"],authors:"max",unlisted:!0,last_update:{date:"12/12/2023",author:"max"}},sidebar:"tutorialSidebar"},d={},c=[{value:"User Input data in Electronic Reporting (GER)",id:"user-input-data-in-electronic-reporting-ger",level:2},{value:"User Input Parameter",id:"user-input-parameter",level:3},{value:"\u201cQuery\u201d the Table Records directly",id:"query-the-table-records-directly",level:3},{value:"Working with Excel format in Electronic Reporting (GER)",id:"working-with-excel-format-in-electronic-reporting-ger",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In this 3rd part of the series, we are going to have 2 very different Cases, in the first case we\u2019ll see how to deal with user input data, and in the second one we are going to learn how to work with Excel format in ER, using an exporting example. As always I am doing a how-to post below the video so you don\u2019t have to watch the full video if you don\u2019t want to."}),"\n",(0,i.jsx)(t.h2,{id:"user-input-data-in-electronic-reporting-ger",children:"User Input data in Electronic Reporting (GER)"}),"\n",(0,i.jsx)(t.p,{children:"In this first use case scenario, we are going to see how to filter our data based on an input parameter first and querying directly the Data Source later. The requirement set the need to be able to filter the data to be exported by the field Header Id of the FTDHeaderTable."}),"\n",(0,i.jsx)(t.h3,{id:"user-input-parameter",children:"User Input Parameter"}),"\n",(0,i.jsx)(t.p,{children:"We need to go to the map model to data source, so we follow the steps described in the following images:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(7795).Z+"",width:"1023",height:"649"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(51674).Z+"",width:"1023",height:"634"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(50056).Z+"",width:"1022",height:"306"})}),"\n",(0,i.jsxs)(t.p,{children:["Now, we can add the User input parameter at the root level, clicking in the Add root with the ",(0,i.jsx)(t.strong,{children:"User input parameter"})," data source type selected."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(30490).Z+"",width:"1022",height:"650"})}),"\n",(0,i.jsx)(t.p,{children:"We should select the EDT, and we can describe a label too and many other self-explanatory parameters. In our case we select AccountNum because I didn\u2019t create an appropriate EDT for it, and as a result later we are going to have the generic label Account Num, there is no need to say that this is not the correct way to do it\u2026 create the EDT and don\u2019t be lazy!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(85420).Z+"",width:"1021",height:"941"})}),"\n",(0,i.jsx)(t.p,{children:"Once we have our parameter, we are going to use it in order to filter our Headers, creating a new Calculated Field:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(35687).Z+"",width:"930",height:"947"})}),"\n",(0,i.jsx)(t.p,{children:"In the formula we need to put the following formula:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'IF(HeaderId&lt;&gt;"", where(Header, Header.Id = HeaderId),Header)\n'})}),"\n",(0,i.jsx)(t.p,{children:"This expression is going to filter the Headers only if a value is given to the parameter. And that\u2019s it, our requirement is now accomplished. So, if we go back to the Model to datasource mapping and Run our ER, we are going to see now that it asks for the newly created parameter, and it will filter by it:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(57993).Z+"",width:"977",height:"980"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(34936).Z+"",width:"609",height:"472"})}),"\n",(0,i.jsx)(t.p,{children:"Et Voil\xe0! However, we can match the same requirement another way even better, at least from my point of view, and that brings us to the next section."}),"\n",(0,i.jsx)(t.h3,{id:"query-the-table-records-directly",children:"\u201cQuery\u201d the Table Records directly"}),"\n",(0,i.jsx)(t.p,{children:"The other option to match the requirement is to query the Table records directly. I think this is the best option because it is not using the WHERE function, that will filter the already queried table, but it filters before the SQL is executed; so it is a lot better in terms of optimization. The way to do it is simply checking the \u201cAsk for query\u201d parameter in the Table Records creation, or edition:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(50426).Z+"",width:"1023",height:"819"})}),"\n",(0,i.jsxs)(t.p,{children:["After doing this, you will see a ",(0,i.jsx)(t.strong,{children:"Records to include"})," tab automatically implemented in the prompt of your ER, so you can apply the filters directly to the data source:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(42316).Z+"",width:"1023",height:"549"})}),"\n",(0,i.jsx)(t.p,{children:"Besides, in our case, this will lead to the same result, those two functionalities can be used for many other different things, so I wanted to show you both of them so you can add them to your toolset."}),"\n",(0,i.jsx)(t.h2,{id:"working-with-excel-format-in-electronic-reporting-ger",children:"Working with Excel format in Electronic Reporting (GER)"}),"\n",(0,i.jsxs)(t.p,{children:["In this second use case we want to export the same information that we filtered in the first part but in ",(0,i.jsx)(t.strong,{children:"EXCEL"})," format instead of xml. For this we should create a new format based in the same model, fulfil the required information and put the format type to Excel\u2026 easy."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(87087).Z+"",width:"496",height:"856"})}),"\n",(0,i.jsx)(t.p,{children:"Now, let\u2019s go to the designer and we are going to see that we have an Import option in the action pane, that will allow us to import an excel template. Therefore, what we need to know is how to make the Excel template, ours will have an structure like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(67137).Z+"",width:"728",height:"345"})}),"\n",(0,i.jsxs)(t.p,{children:["But if we create this excel and import it to our ER format, it\u2019s not going to get the lines and the fields, because we need to ",(0,i.jsx)(t.strong,{children:"add Ranges to it"}),". We need to go to formulas tab in the action pane, select the range were we are going to insert our rows and define it with the name we want to use in the ER Format."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(19105).Z+"",width:"1000",height:"546"})}),"\n",(0,i.jsx)(t.p,{children:"The electronic reporting uses the ranges to know where and how to put the data, it is needed to create ranges at field level too:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(30831).Z+"",width:"763",height:"532"})}),"\n",(0,i.jsx)(t.p,{children:"We have to do it for every field, and after that, if we import it to the format, we are going to see how the structure of our format is going to be automatically created\u2026 isn\u2019t it awesome?"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(53482).Z+"",width:"674",height:"335"})}),"\n",(0,i.jsxs)(t.p,{children:["If we want to add new fields here, we can change the excel and import again, clicking in ",(0,i.jsx)(t.strong,{children:"update from excel"}),". It\u2019s important to understand that the version of the latest excel you imported, is the one that will determine the ranges used here, so a mismatch between the attachment excel and the ER format will cause errors."]}),"\n",(0,i.jsx)(t.p,{children:"Now the only step missing is to bind with our Model, and job done!"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(46917).Z+"",width:"1023",height:"407"})}),"\n",(0,i.jsx)(t.p,{children:"It is very important to set the property Replication Direction to our range \u201cRows\u201d to vertical, that will allow this range to be bound to a record list with a specific multiplicity and to create several lines in our Excel file, that\u2019s why I could bind it with the lines:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(10202).Z+"",width:"1023",height:"614"})}),"\n",(0,i.jsx)(t.p,{children:"If we execute the ER now, this is the result:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(72490).Z+"",width:"371",height:"157"})}),"\n",(0,i.jsx)(t.p,{children:"Nice and Smooth! You can see how easy is to work with Excel format in GER once you know the ranges trick! Many thanks if you read until here, and see you in the next post!"})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},51674:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-1-709623da09261a5779ef730d5d5e96a6.png"},34936:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-10-624bea5854aa0b67af2496287f654e77.png"},50426:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-11-b34476a45f00123f7eeeb84a15066b5d.png"},42316:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-12-527cf7b9f5bab308f9f120b763a140aa.png"},87087:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-13-e57599bc97214d8da1764e9ead7cfe1a.png"},67137:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-14-c7f229461d82d93b9bb68942002f88f0.png"},19105:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-15-c1c13b9d381d185d9a8fa1df3478160f.png"},30831:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-16-2b9ee8f0d02b775bc344f0ad6017aff9.png"},53482:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-17-4f71b7b5984994b3203c03cbb991783a.png"},46917:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-18-c0b729d7ada6853b38d0eb150c5cc687.png"},10202:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-19-eec5a74ef0be0c9d28e17db86a13180d.png"},72490:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXMAAACdCAMAAABxXWjmAAAB+FBMVEX////Gxsarq6umrLP9/f2bwubU1NTd6/fm5uZbm9UAAAB9NQDM///d69QyhNRbm+OVm9X///Gx7/9bm9vz9fn7+/3v8vf6+/zw8/fx9Pjy9fj8/P3/7+q+6/f9/f7+/v7+///19vp5m9UANYv///ixrNX29/r//8WQOgC+hDid6/f3+fv//9vd67CdXgBERETm//86kNvdqGNbrOrb///dyYtZAABbvfEAXrD4+vuo4v8AAGMAOpBZqPeIRGeV3/99yff/3+O2ZgC2///MvdX/tmbbkDrmz9v/25AAADhmtv8yAAAAAGYAZrb//7ZmAACQ2/+ChYiIRERIXbHF//8yAGNzdnhtb3F6fH86AAB5z/gAADr/4qhnqOKIxf8yADji//9ZADgyhLD/xYjv7+/o6Ojh4eHp6eni4uLj4+Pr6+vs7Ozl5eXe3t7f39/u7u7c3Nzb29vZ2dnY2NjW1tbV1dVERGdEZ6g6AGZydHZ/gYR/goVlZ2lYWVtmaGpfYGOIRIioZ0T//+I6ADpERIjmz+p5rOp9hGNZNYvFiETiqGdmADo6OpCVz/jmz+P/7/HM7/+oxf9nRERnRIixrNs6kLYyXrDM3/GdyYuQkGbm7+oyNYtZqLBZAGMyhItEiMWx7/FnZ6h5z/G225BmAGZmtrY6kJBmOpDZxs6KAAAIiUlEQVR42u2bh3sTNxiHj6bE+AgJo7tJR0hKkmYvU2iaPQkONHQQQlrK3rt7QQezi066d//NSjrphnO2Zd8nx05+3wPPGZ39nvTmu086HFlrQmPVvQWMVYW+4BKHBedwDudwDudwDuekzgsaBb/g0kYa5wiDAedwDucIOIdzBJzDOQLO4XxFO9eLQxZ10BNJqIeKZ1xnye2cNeL8bOkD3DhJbuekEecnSx/gxglyOyeMOD9R+gA3jpLbOWrE+dFSAWx5vq3t9W0Z33JY84pXr7S1fbxH552H9fuWrXPaVA2YBmB/lHHdYABBem6bdfCNVzO9dY2uIdah+a903qpLZH2zDrYtaDpfkx22lADhxyXN/5HR+Sm9Id/Yr30PnsrBebaM0KVqKDML8Pxw0s3Mto7rCfpwj7bz47k41xirDlUDYxTg+zivUlkS6ZjWiOe/1nd+zIjzY9nLcebpRgOwkHcPuB8247n1PHNXjpDn+ZGcnOuCj0RNU6MAZxhbFCkL7YzmqmVB2/mZXJzf/I2EqqHMKODqlf1+51ny/LTekMUCQ2/dcjoH5ze1F4unoyozC5i/s6CcZ1+fn9Mc8/ydrFNDbkRRQXVXLdmoApa5Hp+L6lyjB5pjOU/+xEhPJKGeL55xXSC3c8GI8wulD3DjIrmdi0acXyx9gBuXyO1cMuL8UukD3LhMbueyEeeXSwJwD6LQofnTWx1H6MVqsns2svOy1CAZYGQqPaCYnD8RDCLnUan0gGJy/ngwiJxHpdIDisn5Y8Egch6VSg8omPNNG+vqM58rezQY2QaXiegbcVpqVcWG9fGlAJA6r6qormUqQnsSZkh1Wjq/Pxhl8dyJ6oz3gbTUcGVd7ZY1HgHgb5OURYBicv5gMIicp6OGRld7de2m39fnDwhzngow5HzTRsviRhIWTxt++OJL9m/Z3NX+ieia6KA6Fy97hsXu3bvffvnFl/jLoHM9YrzfsgZ5m1X9qdOUliqwVRWfszePxBUnYQ3GnX/kCeBDkm0OpXYxwIxzYal/w/quH2udjlXXJliP3OZ23su47KBzjjl/msc7rGfvi1cB55rEBPt5/Om0yqa0VKnMGuG98HHUqfwAzpB8bSEAYufiFe/6IB+/0NBfV58QJbKuXjXzO1g5V+dY354S8da7HzgvnMHlRkz4lYmmcKqnjL3q9ziinlfX5g9QacTblPNUgJk8TzhNI/xWZ9k4Jw2pZtFB6XzOc/6kE+/JYyDPNYn8tEww2ZSWGlDm4sUsOp4/IMx5KsCU83FhYI5L8rJSNfud+/L8vmCkONciincElaWjpigbd6fBBJ8R8gWEOU8FmHGuZu+5uvqqCn7jOdVXNfudq3Osb48EI+Bckzg3Lkp6v5hWHWXpqAFlLn6c3yoj+QP8zsXfEIChdYuow2I2sb4XywGr+jMxq3vFOe6tW8S5eNnDwQiuW/SIfK0wKOoDW3Y4ykKpvEB941OmOGKtMRIBEHDuzMiLAMX07P9QMIie/aNS6QHF5PyBYBA5j0qlB+D/z1f0/5/jeyJflGvFaoRuZJepm+cxhF4Q1hbIhHM4R8A5nOcVnZtr8vxk69bl47xnh233sWOjXUnTvXVrOagxXG6oc61Lc+et4VDyISzuG6nzlt7KWOfkQEvva2uXyLnmpdPnOf0QFveN1Hnn9iZmqU+pInW+bq1tM7zKQ3aYvOY1txy4Js5qXlrk+Vb23p977cmBmAs3MYRFo6F17ripNOKca2LHlus1/MDbW3p9zb2OslydM+HytbyZ6IdQAOexVlrnNo/NNT2vsHRsOTAgSu4LTeyPqC2quaW3L5aP874AJWZiCKWb57yk2LwONNq8DPASIGzJ5ojOFbwE89xgPReJLeutP89lc0TnklKK9ZyPXGQgvXNF5PjW7U18edGzw2uO5tz3GfohGHYuVhMDrN/8Vq2knUNFZeeTpm3/+ksTv9L2H35ym5VzzUunOHfhJobgWytKJp798ewP53AO5yvHOb4PLdrvQ8l3LJdbJqJ8yQGEtQXO4RzO4RzO4TyvwY0+250ndWjn8nE+sde2p9hxzO6gcd7cwEFj4XJDnWe9tHI+FPJp2f8x2xkGsXOFJXWenOmwRvftSs5827BEzjUunSHPZf8nbndbY9PD1M5dLKnzUUZsbphSqkidNzfYNu+wTEV22HfXa07eums7lpp1nbO/zQ3/zNj7dlmK4vaf8T/aZaK2CCypc8dNhxHnXBM7Jv/r5gfenpzxNc+ovMzNORMuX3OK238nfQw4HyXPc1EDhmidi+9Dn+0WCZK8JZJv4s1h9kfUFtWcnFH1NzfnUwGK2/+MlAjOHWyp5DkvKTavA3wimh4W+TLqNUd0Lileng9lWBJFcO5gS6Wei8SWN6c/z2VzROc+uGjLpDyCc4klXrdMORWL3rkicvzQ9DBfYUzs9ZqjOfdT2AWaGzIu/MvzLiwSS74+Z7d/cobfqh2kzp3KzidN2/7372F+pem/brvNyrnGpUOcu3Cn/6NiDtlJ7dzF4tkfz/5wDudwvnKc4/tQ7A/F71rAOZzDOQLO4TxaYH/oMtkf6oQcSKPaTkcSiob9oeG/nu8M5HoN4S3h0rA/NLg/NGVXUdqfd76pzmnYHxrcH+qpcUA84ym3t1TGsD80dX+oLx3ZQDptm3C2VTTsDw3uD03N81gj4SQqadgfGtwfuqiei3uALAQN+0OD+0NjLo5dqec7yjx3adgfmrI/1F2fs4Hw5kmyNHdpePbHsz+cwzmcrxzn+D4U+0PxuxZwDudwDudwDudwDudwDudwDudwDudwDudwDudwDudwbhYwOwvncL7cnc/OwnmxOsf3ocX6fWg58rzg44JzOIdzOIdzOIdzOIdzOIdzOIdzOIdzOIdzOIdzOIdzOIdzOIfz5ea8HFHo+B93mhQTdxpBxgAAAABJRU5ErkJggg=="},50056:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-3-5b6f02378f00369e638bcfbe24a6c83b.png"},30490:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-4-b994087db032e008513a7ce67a5d682a.png"},85420:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-5-03dbec6b6cdb6c0edba21622eb09e912.png"},35687:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-6-340eaf6862136a27a1d04eb250d0a8f6.png"},57993:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-8-ae90f6aa1fdddb6b50ce7082a9e43c98.png"},7795:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-3b8303728a8404055fbf3f803a2f43b4.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(67294);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);