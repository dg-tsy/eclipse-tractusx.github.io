"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[78002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||v[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"Data Governance Kit Development View",title:"Development View",description:"Data Governance Kit",sidebar_position:1},o=void 0,c={unversionedId:"kits/Data Governance Kit/Software Development View/Data Governance Kit Development View",id:"kits/Data Governance Kit/Software Development View/Data Governance Kit Development View",title:"Development View",description:"Data Governance Kit",source:"@site/docs-kits/kits/Data Governance Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/Data Governance Kit/Software Development View",slug:"/kits/Data Governance Kit/Software Development View/Data Governance Kit Development View",permalink:"/docs-kits/next/kits/Data Governance Kit/Software Development View/Data Governance Kit Development View",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Data Governance Kit Development View",title:"Development View",description:"Data Governance Kit",sidebar_position:1}},l={},s=[{value:"Data Governance KIT",id:"data-governance-kit",level:2},{value:"Overview",id:"overview",level:3},{value:"High Level Architecture",id:"high-level-architecture",level:3},{value:"API Specifications",id:"api-specifications",level:3},{value:"NOTICE",id:"notice",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"data-governance-kit"},"Data Governance KIT"),(0,i.kt)("p",null,"This document describes the foundations of the Data Governance KIT (=Keep It Together)."),(0,i.kt)("p",null,"For more information see"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-kits/next/kits/Data%20Governance%20Kit/Data%20Governance%20Kit%20Adoption%20View"},"Adoption View")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-kits/next/kits/Data%20Governance%20Kit/Data%20Governance%20Kit%20Operation%20View"},"Operation View"))),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Data Governance Kit provides a set of API specifications which would help the application developers in developing the abstraction layer of EDC to simplify the data governance. This should be helpful in building products but won't be one in itself. The client API from Data Governance Kit should cover the most typical Data Provider and Consumer functions, including publishing and managing data offers, managing policies, listing data transfers and contract negotiations. Important to note here is that the API specifications makes it possible to interact with multiple EDC connectors at once."),(0,i.kt)("h3",{id:"high-level-architecture"},"High Level Architecture"),(0,i.kt)("p",null,"As it would be clear now that the Data Governance Kit acts as an abstraction layer for multiple EDC Connctors and hides the EDC complexities behind it. This is achieved by using the below concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Staging (or Management )"),(0,i.kt)("li",{parentName:"ul"},"Publication")),(0,i.kt)("p",null,"The staging or Management refers to the creation, updation, deletion of various Assets, Policies and Contract Offers locally within the Governance KIT before actually sending those to the connectors. The users can create as many Assets, Policies or Contract Offers, get those reviewed and approved by any manual or automatic workflow process. Once the users are sure that now the data is ready to be sent to Connectors, the Publication process kicks in. Using the publication process, all the reviewed/approved assets, policies and contract offers can be sent to the required connectors. The following high level architecture provides more details."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Data Governance Kit High Level Architecture",src:n(56476).Z,width:"1437",height:"801"})),(0,i.kt)("h3",{id:"api-specifications"},"API Specifications"),(0,i.kt)("p",null,"The Data Governance KIT API specifications can be found here."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis-docs/TSI-Germany/data-governance_kit/0.0.1-SNAPSHOT"},"Data Governance Kit Swagger API Specifications")),(0,i.kt)("h2",{id:"notice"},"NOTICE"),(0,i.kt)("p",null,"This work is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 T-Systems International GmbH"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2022,2023 Contributors to the Eclipse Foundation")))}u.isMDXComponent=!0},56476:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Data Governance KIT_ Big Picture-7d1959bfd88513bb0f457e10370ed910.png"}}]);