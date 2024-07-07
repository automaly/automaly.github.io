"use strict";(self.webpackChunkautomaly_test=self.webpackChunkautomaly_test||[]).push([[9816],{28276:(t,A,e)=>{e.r(A),e.d(A,{assets:()=>s,contentTitle:()=>v,default:()=>o,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=e(74848),a=e(28453);const n={title:"AxBuild.exe for Parallel Compile on AOS",description:"AxBuild.exe for Parallel Compile on AOS",date:new Date("2015-07-01T00:00:00.000Z"),categories:["AX2012"],tags:["axbuild","compile"]},v=void 0,l={id:"ax2012-archive/ax2012-architecture/2015-07-01-axbuild-exe-for-parallel-compile-on-aos/index",title:"AxBuild.exe for Parallel Compile on AOS",description:"AxBuild.exe for Parallel Compile on AOS",source:"@site/docs/07-ax2012-archive/01-ax2012-architecture/2015-07-01-axbuild-exe-for-parallel-compile-on-aos/index.md",sourceDirName:"07-ax2012-archive/01-ax2012-architecture/2015-07-01-axbuild-exe-for-parallel-compile-on-aos",slug:"/ax2012-archive/ax2012-architecture/2015-07-01-axbuild-exe-for-parallel-compile-on-aos/",permalink:"/ax2012-archive/ax2012-architecture/2015-07-01-axbuild-exe-for-parallel-compile-on-aos/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"axbuild",permalink:"/tags/axbuild"},{inline:!0,label:"compile",permalink:"/tags/compile"}],version:"current",lastUpdatedBy:"Luan Nguyen",lastUpdatedAt:1701636614e3,frontMatter:{title:"AxBuild.exe for Parallel Compile on AOS",description:"AxBuild.exe for Parallel Compile on AOS",date:"2015-07-01T00:00:00.000Z",categories:["AX2012"],tags:["axbuild","compile"]},sidebar:"tutorialSidebar",previous:{title:"Understand model store architectural in AX 2012",permalink:"/ax2012-archive/ax2012-architecture/2014-10-10-understand-model-store-architectural/"},next:{title:"Modify Microsoft Dynamics AX 2012 R3 SSRS configurations using PowerShell",permalink:"/ax2012-archive/ax2012-architecture/2015-07-02-modify-microsoft-dynamics-ax-2012-r3-ssrs-configurations/"}},s={},m=[];function d(t){const A={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A.p,{children:"If you have only 10 mins to build AX, try this"}),"\n",(0,r.jsxs)(A.p,{children:["In AOS server, go to ",(0,r.jsx)(A.code,{children:"C:\\Program Files\\Microsoft Dynamics AX\\60\\Server\\DAX\\bin"})," and open ",(0,r.jsx)(A.code,{children:"cmd"})," from here then run this command"]}),"\n",(0,r.jsx)(A.pre,{children:(0,r.jsx)(A.code,{className:"language-ps",children:'axbuild.exe xppcompileall /s=01 /altbin="C:\\Program Files (x86)\\Microsoft Dynamics AX\\60\\Client\\Bin"\n'})}),"\n",(0,r.jsxs)(A.p,{children:[(0,r.jsx)(A.code,{children:"/s"})," is your AOS number instance, you can check it in windows services ",(0,r.jsx)(A.code,{children:"/altbin"})," the path to AX client"]}),"\n",(0,r.jsx)(A.p,{children:(0,r.jsx)(A.img,{alt:"axbuild-exe-for-parallel-compile-on-aos_2",src:e(63043).A+"",title:"axbuild",width:"966",height:"127"})}),"\n",(0,r.jsxs)(A.p,{children:[(0,r.jsx)(A.strong,{children:"Here is the result"}),"\r\n",(0,r.jsx)(A.img,{alt:"axbuild-exe-for-parallel-compile-on-aos_2",src:e(41466).A+"",title:"axbuild",width:"1920",height:"1080"}),"\r\nOnce compile complete, you can import compile log file at ",(0,r.jsx)(A.code,{children:"C:\\Program Files\\Microsoft Dynamics AX\\60\\Server\\DAX\\log"})," into compiler output of AX client\r\n",(0,r.jsx)(A.img,{alt:"axbuild-exe-for-parallel-compile-on-aos_2",src:e(15765).A+"",title:"axbuild",width:"780",height:"240"})]}),"\n",(0,r.jsx)(A.admonition,{title:"Reference",type:"info",children:(0,r.jsxs)(A.p,{children:[(0,r.jsx)(A.strong,{children:"MSDN"}),": ",(0,r.jsx)(A.a,{href:"https://msdn.microsoft.com/en-us/library/dn528954.aspx",children:"https://msdn.microsoft.com/en-us/library/dn528954.aspx"})]})})]})}function o(t={}){const{wrapper:A}={...(0,a.R)(),...t.components};return A?(0,r.jsx)(A,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},63043:(t,A,e)=>{e.d(A,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8YAAAB/CAYAAAAtvNvhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAACYhSURBVHhe7d1drOVlledxOmpotUljDErTPWI3ncFI4hWdONMRqi860xMu7MSbdiad0N1DYl+MejXpuRCqpydzNfGmJwblXaAwgI28FBRUUVUKKIiA/cbMXGgcY8eXiKKIvMp/fHa5jmv/zlrP8/z/e+9z9tnnu5NP9n+t9XuevXdBOPXwP1XntIMHDw4HDhwYTjvtNGCj/OqvvG449Ft/OAwX/CUAAFgjh8+9ZDj79W8Kv34DwE4oZ2CPgzE20jvfcMbw9O98MPxiDAAAdt8z5186/Mmv/274dRwAVq08/umrj249czDGxil3ijkUAwCw/p5/92XDu04/M/x6DgCr5A/F5cHBGBsn+vbp8n+lj5/7/uHg235vOHjWhbPnKxKzDAAAWJj/+nrvOy4Zvv6v/+O2r9FPnveB2f/Ujr6mA8CqlAd3jLGxznzd6du+4F5zzgG+4AIAsCbKgVm/Vr/3jW8PswCwKtwxxkY78OZz5r7Qlv8zzaEYAID1Uu4e+6/XH3rLBWEOAFalPLhjjI310be+Z+4L7d/9q38X5gAAwO7Ru8bljzlFOQBYFe4YY6MdPEu+0P78C2+UAwAAu4eDMYDdVh7VO8YnT56c4xcvItove42s38vWL7IHtvO/rtGvbe9c+2OVPU6cODGjs4Nvu3D+C+0vDsZXXXXVcPXVVw/XXnvtcP311w+f/vSnt61dxG233RaKspso+uwmy2b9bL5K0Wtm7yPr7wX23pf9/v2+q9h/mXbz/WWvrf0s12LrorV+lmVqFlm77vQzZZ8x6/tZT6bVz3IZy/esGbv3KvE/sgHstuodYz24jDnItHLRXtn+WX+MZewxxk6+Vs2q3of+eo6tW/2x8oNx/oX2mmuumR2Ky/XNN9883HLLLVuzljvvvDPseyXjc1pvut7Pn/VNaz5Faz97TctpHWW1v+78+84+wyKfq2f/dbBb781eN3p97UW1XWd0TWvme9k6o+u1XnfL+HzWq82y2vdqs1pt1xldk+nN7YTa12sA2AnlEd4xjg4stV5P1puyZhGr3Duy068X2cn3oK/Vqr3arNfUg/ENN9ywVd96663DZz/72a26uOeee4bDhw/P+H7UU5rpWbNJos875fOv4tettafNI1F+L2p9nkU/r65fdL9N0vq1GVursXOrradzpfNWft203q/O172O9GTWDXeMAey29I5x72HFclG2tkc0057V2o9mOu/J9MxqPau1r3PtG782ymk/q7UfzUwtU5sZn/FWMbdeNNN578G4/NxEm5WDsf8W6nIo/tznPrdVF/fdd99w5MiRGd8vsr7Rua/tWmvLakZnOvd1a2Z8pjUzPtOia3S9zTWnsrlfu8hc+34WyTJ+fWuu/VZGZ8uca9/PVJTN6JoxtV17ltN8NNeZqWX8bBnzGl0T7WG9aObn2m/NCj+3a9/TjKrNjGWirPY106p9rzXzdZTxvWy2aK168taLZn6ufePXRtkxM52vSu1/ZAPATiiP7jvGU2T7+L5/bmWz3qpr7elc67H9KFfL1Ga1Xjar1f7ZZ3xP+15rbnxO17TqKQfj8ueLb7zxxq36jjvuGO66666tusfRo0dnajMvmmtWZ1Nq7dm1ZozOfO2ffabF8l4tF82KaK69sfWYvn9uZbNeK2PXWkfZZdaezTSj/V66fkxdm0Vqef/sMybqa29s3dK7Puub1jovmtu19qKcslk0136U8z271jrK9tTas+taptYfW/ue9v0sq1t9U5vrLMtGfe1FmVXgYAxgty18x7hHtJfv+WfNZX3trbL2z1mmJsu11uu8Vava3GZK53atPZXNams8zbXW6bwcio8fPz6XKWoH4+uuu2646aabtury56zKt05b3evYsWMzvX1jc8tk11Nq37O+Zvw8m9m19npoPlvb2jeaW09FGd+L9K6Nelk/y3qWsVx2HdVZL5tF2ajnteYtun5MXZtpz4vy/tlnTNTPsl5PJmNrVS3jZ140115W+76/9rK+iebWU1nG13pdq5XNNeNrn8n62stqZXMvmvk1Xi3jZ142135vLupFmVXgYAxgt5VH9x3jWk/7qrY2m5topr1V1v7ZZ0zW92qZbKb93lyr35oVfu6fszXRrJb3pqzV+ZSDcfmLt8pfumV1uVusfyar/F/y8huCBx98cK6vylwzUc+rzXU2ts562axW+2efaenNt3LRvLXG68lqJloT9bJ+lvVqGZ2NyUa9noxqzVt0/Zi6Nhtb+2efMVE/y0bGZI2uGVurVj6raxmvlW3VkVpGZ6060pMx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"},41466:(t,A,e)=>{e.d(A,{A:()=>r});const r=e.p+"assets/images/axbuild-exe-for-parallel-compile-on-aos_3-96596b66328337a7d6578007f15dd026.png"},15765:(t,A,e)=>{e.d(A,{A:()=>r});const r=e.p+"assets/images/axbuild-exe-for-parallel-compile-on-aos_4-27f18cccc8567acd8d1bed3c3ac0d4ad.png"},28453:(t,A,e)=>{e.d(A,{R:()=>v,x:()=>l});var r=e(96540);const a={},n=r.createContext(a);function v(t){const A=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(A):{...A,...t}}),[A,t])}function l(t){let A;return A=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:v(t.components),r.createElement(n.Provider,{value:A},t.children)}}}]);