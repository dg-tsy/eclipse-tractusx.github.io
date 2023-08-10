"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[56470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={id:"Domain Model",title:"Domain Model",description:"Connector Kit",sidebar_position:2},i=void 0,s={unversionedId:"kits/tractusx-edc/docs/kit/adoption-view/Domain Model",id:"kits/tractusx-edc/docs/kit/adoption-view/Domain Model",title:"Domain Model",description:"Connector Kit",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/adoption-view/page_domain_model.md",sourceDirName:"kits/tractusx-edc/docs/kit/adoption-view",slug:"/kits/tractusx-edc/docs/kit/adoption-view/Domain Model",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/adoption-view/Domain Model",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Domain Model",title:"Domain Model",description:"Connector Kit",sidebar_position:2},sidebar:"kits",previous:{title:"Tractus-X EDC",permalink:"/docs-kits/next/kits/tractusx-edc/docs/"},next:{title:"Management API Overview",permalink:"/docs-kits/next/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/management-api-overview"}},c={},d=[{value:"Asset",id:"asset",level:2},{value:"Data address",id:"data-address",level:2},{value:"Contract",id:"contract",level:2},{value:"Contract definition",id:"contract-definition",level:3},{value:"Contract offer",id:"contract-offer",level:3},{value:"Contract negotiation",id:"contract-negotiation",level:3},{value:"Contract agreement",id:"contract-agreement",level:3},{value:"Policy",id:"policy",level:2},{value:"Transfer process",id:"transfer-process",level:2}],l={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"domain-model",src:n(5637).Z,width:"1624",height:"718"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The shown picture illustrates only a generic view of the Domain Model and is not intended to show all aspects of the project.")),(0,r.kt)("h2",{id:"asset"},"Asset"),(0,r.kt)("p",null,"An asset represents data (databases, files, cache information, etc.) which should be published and shared between\norganizations. For each asset, a ",(0,r.kt)("a",{parentName:"p",href:"#data-address"},(0,r.kt)("inlineCode",{parentName:"a"},"DataAddress"))," needs to be resolvable."),(0,r.kt)("h2",{id:"data-address"},"Data address"),(0,r.kt)("p",null,"A data address is a pointer into the physical storage location where an asset will be stored."),(0,r.kt)("h2",{id:"contract"},"Contract"),(0,r.kt)("p",null,"A contract always contains one or more ",(0,r.kt)("a",{parentName:"p",href:"#asset"},(0,r.kt)("inlineCode",{parentName:"a"},"Assets"))," and a single ",(0,r.kt)("a",{parentName:"p",href:"#policy"},(0,r.kt)("inlineCode",{parentName:"a"},"Policy")),'. The contract construct is\nused to define the arrangement between two parties ("consumer" and "provider"). Regarding this arrangement, the contract\npasses several stages which are explained below:'),(0,r.kt)("h3",{id:"contract-definition"},"Contract definition"),(0,r.kt)("p",null,"  Contract definitions associate a policy with assets. A ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractDefinition")," object contains an access policy, a contract\npolicy, and an asset selector which links the contract to one or more assets."),(0,r.kt)("h3",{id:"contract-offer"},"Contract offer"),(0,r.kt)("p",null,"  The contract offer is a dynamic representation of the ",(0,r.kt)("a",{parentName:"p",href:"#contract-definition"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractDefinition")),"\nfor a specific consumer and serves as protocol's data transfer object (DTO) for a particular contract negotiation.\nContract offers are not persisted and will be regenerated on every request. The connector acting as data provider will\ngenerate contract offers only for contract definitions dedicated to the organization or data space participant\noperating the requesting connector acting as data consumer. A contract offer is always related to a single asset of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractDefinition")," object (e.g. for a ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractDefinition")," containing three ",(0,r.kt)("inlineCode",{parentName:"p"},"Asset")," objects, the connector will\ngenerate three ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractOffer")," objects)."),(0,r.kt)("h3",{id:"contract-negotiation"},"Contract negotiation"),(0,r.kt)("p",null,"  A ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractNegotiation")," captures the current state of the negotiation of a contract (",(0,r.kt)("inlineCode",{parentName:"p"},"ContractOffer")," ->\n",(0,r.kt)("inlineCode",{parentName:"p"},"ContractAgreement"),") between two parties. This process is inherently asynchronous."),(0,r.kt)("h3",{id:"contract-agreement"},"Contract agreement"),(0,r.kt)("p",null,"  A contract agreement represents the agreed-upon terms of access and usage of an asset's data between two data space\nparticipants, including a start and an end date and further relevant information."),(0,r.kt)("h2",{id:"policy"},"Policy"),(0,r.kt)("p",null,'Contract policies represent permitted and prohibited actions over a certain asset. These actions can be limited further\nby constraints (temporal or spatial) and duties ("e.g. deletion of the data after 30 days").'),(0,r.kt)("h2",{id:"transfer-process"},"Transfer process"),(0,r.kt)("p",null,"After a successful contract negotiation, a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataRequest")," is sent from a consumer connector to a provider connector to\ninitiate the data transfer. It references the requested ",(0,r.kt)("a",{parentName:"p",href:"#asset"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset"))," and ",(0,r.kt)("a",{parentName:"p",href:"#contract-agreement"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractAgreement")),"\nas well as information about the ",(0,r.kt)("a",{parentName:"p",href:"#data-address"},"data destination"),"."),(0,r.kt)("p",null,"Similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractNegotiation"),", this object captures the current state of a data transfer. This process is\ninherently asynchronous, so the ",(0,r.kt)("inlineCode",{parentName:"p"},"TransferProcess")," objects are stored in a backing data store (",(0,r.kt)("inlineCode",{parentName:"p"},"TransferProcessStore"),")."))}p.isMDXComponent=!0},5637:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/domain-model-e779e0a388382e83edc2aace2fc5ac23.png"}}]);