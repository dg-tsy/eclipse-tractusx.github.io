"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[3623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"TRG 4.06 - Notice for docker images"},o=void 0,l={unversionedId:"release/trg-0/trg-4-06-DRAFT",id:"release/trg-0/trg-4-06-DRAFT",title:"TRG 4.06 - Notice for docker images",description:"Proposed release date 19th of May 2023",source:"@site/docs/release/trg-0/trg-4-06-DRAFT.md",sourceDirName:"release/trg-0",slug:"/release/trg-0/trg-4-06-DRAFT",permalink:"/docs/release/trg-0/trg-4-06-DRAFT",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-0/trg-4-06-DRAFT.md",tags:[],version:"current",frontMatter:{title:"TRG 4.06 - Notice for docker images"},sidebar:"developer",previous:{title:"TRG 4.05 - Container registries",permalink:"/docs/release/trg-0/trg-4-05-DRAFT"},next:{title:"TRG 7.01 - Legal Documentation",permalink:"/docs/release/trg-0/trg-7-01"}},p={},c=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"How and where to annotate the base image",id:"how-and-where-to-annotate-the-base-image",level:2},{value:"Examples",id:"examples",level:2},{value:"Already collected base image information",id:"already-collected-base-image-information",level:2},{value:"Eclipse Temurin (JRE)",id:"eclipse-temurin-jre",level:3},{value:"Nginx-unprivileged (serve static HTML and JS bundles)",id:"nginx-unprivileged-serve-static-html-and-js-bundles",level:3},{value:".NET runtime",id:"net-runtime",level:3},{value:"ASP.NET core runtime",id:"aspnet-core-runtime",level:3}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'Proposed release date: "mandatory after": 19th of May 2023')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Draft"),(0,a.kt)("td",{parentName:"tr",align:null},"04-May-2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"Due to legal constrains we need to annotate the released container images to make it clear that we do our best to provide good images for demo purposes,\nbut we do not provide any legal guarantee.\nThis has to be defined in a dedicated 'Notice for docker image' section in our repositories and on the respective image page on ",(0,a.kt)("inlineCode",{parentName:"p"},"DockerHub"),"."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"There are a few properties and links, that ",(0,a.kt)("strong",{parentName:"p"},"must")," be present on each notice, but they do vary for each image and product.\nThe minimum set of information is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Link to the source of your base image (Container registry and GitHub if available)"),(0,a.kt)("li",{parentName:"ul"},"Link to your product image on ",(0,a.kt)("inlineCode",{parentName:"li"},"DockerHub")),(0,a.kt)("li",{parentName:"ul"},"Link to your repository on GitHub"),(0,a.kt)("li",{parentName:"ul"},"Direct link to the Dockerfile used to build your image"),(0,a.kt)("li",{parentName:"ul"},"Link to ",(0,a.kt)("inlineCode",{parentName:"li"},"LICENCE")," file in your repo as 'Project License' (make clear, that this is the PROJECT licence, not an image license)")),(0,a.kt)("h2",{id:"how-and-where-to-annotate-the-base-image"},"How and where to annotate the base image"),(0,a.kt)("p",null,"The above information ",(0,a.kt)("strong",{parentName:"p"},"must")," be provided in Markdown format, either in your toplevel ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),", or in a dedicated\nnotice Markdown file, that you then reference from your toplevel ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),"."),(0,a.kt)("p",null,"A dedicated notice file can be necessary, if you built multiple container image from a single repository.\nMultiple notice files ensure, that you can directly link the specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", that is used and include it in the description, that is pushed to ",(0,a.kt)("inlineCode",{parentName:"p"},"DockerHub"),"."),(0,a.kt)("p",null,"The notice ",(0,a.kt)("strong",{parentName:"p"},"must")," always start with the following headline and the reference to your image on ",(0,a.kt)("inlineCode",{parentName:"p"},"DockerHub"),"\n(example taken from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/app-dashboard#notice-for-docker-image"},"app-dashboard"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"## Notice for Docker image\n\nDockerHub: [https://hub.docker.com/r/tractusx/app-dashboard](https://hub.docker.com/r/tractusx/app-dashboard)\n")),(0,a.kt)("p",null,"Following this, you ",(0,a.kt)("strong",{parentName:"p"},"must")," provide additional information on your product:\n(example taken from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/app-dashboard#notice-for-docker-image"},"app-dashboard"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"Eclipse Tractus-X product(s) installed within the image:\n\n__<your product name>__\n\n- GitHub: https://github.com/eclipse-tractusx/<your-product-repo>\n- Project home: https://projects.eclipse.org/projects/automotive.tractusx\n- Dockerfile: https://github.com/eclipse-tractusx/<your-product-repo>/blob/main/<path-to-Dockerfile>\n- Project license: [Apache License, Version 2.0](https://github.com/eclipse-tractusx/<your-product-repo>/blob/main/LICENSE)\n")),(0,a.kt)("p",null,"The last bits of information you ",(0,a.kt)("strong",{parentName:"p"},"must")," provide is related to your used base image.\nAs previously described, the following information should be provided, if available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DockerHub links"),(0,a.kt)("li",{parentName:"ul"},"GitHub repo"),(0,a.kt)("li",{parentName:"ul"},"direct links to Dockerfile")),(0,a.kt)("p",null,"The following example is taken from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/item-relationship-service#notice-for-docker-image"},"IRS product"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"**Used base image**\n\n- [eclipse-temurin:20-jre-alpine](https://github.com/adoptium/containers)\n- Official Eclipse Temurin DockerHub page: https://hub.docker.com/_/eclipse-temurin\n- Eclipse Temurin Project: https://projects.eclipse.org/projects/adoptium.temurin\n- Additional information about the Eclipse Temurin images: https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin\n")),(0,a.kt)("p",null,"Closing the notice, we provide a general statement about potentially contained other tools and the demo/experimental purpose\nof our images. We use the following text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"As with all Docker images, these likely also contain other software which may be under other licenses \n(such as Bash, etc. from the base distribution, along with any direct or indirect dependencies of the primary software being contained).\n\nAs for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies with any relevant licenses for all software contained within.\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"The following examples are shown as reference, to see already existing and complete versions of a 'Notice for docker images'.\nThey ",(0,a.kt)("strong",{parentName:"p"},"can not")," be used for your product without modifications."),(0,a.kt)("p",null,"Good example for notice integrated in toplevel ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),": ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/item-relationship-service#notice-for-docker-image"},"IRS")),(0,a.kt)("p",null,"Good example for a dedicated notice file: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/edit/main/edc-controlplane/edc-controlplane-memory-hashicorp-vault/notice.md"},"edc-controlplane-memory-hashicorp-vault")),(0,a.kt)("h2",{id:"already-collected-base-image-information"},"Already collected base image information"),(0,a.kt)("p",null,"The following sections contain information, that already has been collected on base images, that are used in Eclipse Tractus-X.\nYou can use that information for your own notice. ",(0,a.kt)("strong",{parentName:"p"},"Be careful"),", when it comes to version, like JRE versions for example.\nYou have to adapt some of the provided links to match your used version."),(0,a.kt)("h3",{id:"eclipse-temurin-jre"},"Eclipse Temurin (JRE)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Base image reference (example) ",(0,a.kt)("inlineCode",{parentName:"li"},"eclipse-temurin:20-jre-alpine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/adoptium/containers"},"GitHub repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/eclipse-temurin"},"Official Eclipse Temurin DockerHub page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/adoptium.temurin"},"Eclipse Temurin Project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"},"Additional information about the Eclipse Temurin images"))),(0,a.kt)("h3",{id:"nginx-unprivileged-serve-static-html-and-js-bundles"},"Nginx-unprivileged (serve static HTML and JS bundles)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Base image reference (example) ",(0,a.kt)("inlineCode",{parentName:"li"},"nginxinc/nginx-unprivileged:alpine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nginxinc/docker-nginx-unprivileged/blob/main/Dockerfile-alpine.template"},"Dockerfile (alpine)")),(0,a.kt)("li",{parentName:"ul"},"GitHub project: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nginxinc/docker-nginx-unprivileged"},"https://github.com/nginxinc/docker-nginx-unprivileged")),(0,a.kt)("li",{parentName:"ul"},"DockerHub: ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/nginxinc/nginx-unprivileged"},"https://hub.docker.com/r/nginxinc/nginx-unprivileged"))),(0,a.kt)("h3",{id:"net-runtime"},".NET runtime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Base image reference (example): ",(0,a.kt)("inlineCode",{parentName:"li"},"mcr.microsoft.com/dotnet/runtime:6.0-alpine")),(0,a.kt)("li",{parentName:"ul"},"Dockerfile (:6-alpine): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/dotnet/dotnet-docker/blob/e1984aaea51a796b68f6672749d280525c30e063/src/runtime/6.0/alpine3.17/amd64/Dockerfile"},"mcr.microsoft.com/dotnet/runtime:6.0-alpine")),(0,a.kt)("li",{parentName:"ul"},"GitHub project: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/dotnet/dotnet-docker"},"https://github.com/dotnet/dotnet-docker")),(0,a.kt)("li",{parentName:"ul"},"DockerHub: ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/microsoft-dotnet-runtime"},"https://hub.docker.com/_/microsoft-dotnet-runtime"))),(0,a.kt)("h3",{id:"aspnet-core-runtime"},"ASP.NET core runtime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Base image reference (example): ",(0,a.kt)("inlineCode",{parentName:"li"},"mcr.microsoft.com/dotnet/aspnet:6.0-alpine")),(0,a.kt)("li",{parentName:"ul"},"Dockerfile (:6-alpine): ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/dotnet/dotnet-docker/blob/e1984aaea51a796b68f6672749d280525c30e063/src/aspnet/6.0/alpine3.17/amd64/Dockerfile"},"mcr.microsoft.com/dotnet/aspnet:6.0-alpine")),(0,a.kt)("li",{parentName:"ul"},"GitHub project: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/dotnet/dotnet-docker"},"https://github.com/dotnet/dotnet-docker")),(0,a.kt)("li",{parentName:"ul"},"DockerHub: ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/microsoft-dotnet-aspnet"},"https://hub.docker.com/_/microsoft-dotnet-aspnet"))))}m.isMDXComponent=!0}}]);