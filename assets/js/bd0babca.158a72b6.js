"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"TRG 4.02 - Base images"},o=void 0,l={unversionedId:"release/trg-0/trg-4-02-DRAFT",id:"release/trg-0/trg-4-02-DRAFT",title:"TRG 4.02 - Base images",description:"Proposed release date 19th of May 2023",source:"@site/docs/release/trg-0/trg-4-02-DRAFT.md",sourceDirName:"release/trg-0",slug:"/release/trg-0/trg-4-02-DRAFT",permalink:"/docs/release/trg-0/trg-4-02-DRAFT",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-0/trg-4-02-DRAFT.md",tags:[],version:"current",frontMatter:{title:"TRG 4.02 - Base images"},sidebar:"developer",previous:{title:"TRG 0 - (WIP) Template",permalink:"/docs/release/trg-0/trg-0-template"},next:{title:"TRG 4.05 - Container registries",permalink:"/docs/release/trg-0/trg-4-05-DRAFT"}},s={},p=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'Proposed release date: "mandatory after": 19th of May 2023')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Created"),(0,n.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Draft"),(0,n.kt)("td",{parentName:"tr",align:null},"04-May-2023"),(0,n.kt)("td",{parentName:"tr",align:null},"Remove notice in favor of dedicated TRG; Add mandatory base image for frontends")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Active"),(0,n.kt)("td",{parentName:"tr",align:null},"25-Nov-2022"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,n.kt)("h2",{id:"why"},"Why"),(0,n.kt)("p",null,"Due to legal constrains we need to annotate the released container images to make it clear that we do our best to provide good images for demo purposes,\nbut we do not provide any legal guarantee. To make that process easy, we are aligning on agreed base images for specific\nlanguages and use an aligned section to describe the base image."),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Since many of our Eclipse Tractus-X product use the same language, we are aligning on a dedicated container base image\nper language.\nThe following table lists container base images, that are already agreed on."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Language / Runtime"),(0,n.kt)("th",{parentName:"tr",align:null},"Container base image"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Java / Kotlin / JVM based"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://hub.docker.com/_/eclipse-temurin"},"Eclipse Temurin")),(0,n.kt)("td",{parentName:"tr",align:null},"prefer JRE over JDK and alpine tags for your JRE version")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JS frontends"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/nginxinc/nginx-unprivileged"},"nginx-unprivileged")),(0,n.kt)("td",{parentName:"tr",align:null},"prefer :stable-alpine tag")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},".NET runtime"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://hub.docker.com/_/microsoft-dotnet-runtime"},".NET runtime")),(0,n.kt)("td",{parentName:"tr",align:null},"prefer :alpine tag")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ASP.NET runtime"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://hub.docker.com/_/microsoft-dotnet-aspnet"},"ASP.NET core runtime")),(0,n.kt)("td",{parentName:"tr",align:null},"prefer :alpine tag")))),(0,n.kt)("p",null,"If the language or runtime environment of your product is not listed above, feel free to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sig-infra/discussions"},"start a discussion"),"\nand propose your preferred container images as base image."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Also be aware of the necessary references to the used base image and your products Dockerfile(s) described in TRG 4.06")))}c.isMDXComponent=!0}}]);