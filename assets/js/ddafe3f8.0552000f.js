"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[71302],{20759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>x,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>y,toc:()=>v});var i=a(87462),l=(a(67294),a(3905)),r=a(26389),s=a(94891),n=a(75190),d=a(47507),p=a(24310),m=a(63303),o=(a(75035),a(85162));const c={id:"query-edrs",title:"queryEdrs",description:"Returns all EndpointDataReference entry according to a query",sidebar_label:"queryEdrs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Control Plane EDR Api"],description:"Returns all EndpointDataReference entry according to a query",operationId:"queryEdrs",parameters:[{name:"assetId",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",example:null}},{name:"agreementId",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",example:null}},{name:"providerId",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{agreementId:{type:"string",example:null},assetId:{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null},errorDetail:{type:"string",example:null},expirationTimestamp:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},providerId:{type:"string",example:null},state:{type:"integer",format:"int32",example:null},stateCount:{type:"integer",format:"int32",example:null},stateTimestamp:{type:"integer",format:"int64",example:null},traceContext:{type:"object",additionalProperties:{type:"string",example:null},example:null},transferProcessId:{type:"string",example:null},updatedAt:{type:"integer",format:"int64",example:null}},example:null}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"get",path:"/edrs",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"query Edrs",description:{content:"Returns all EndpointDataReference entry according to a query",type:"text/plain"},url:{path:["edrs"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"assetId",value:""},{disabled:!1,key:"agreementId",value:""},{disabled:!1,key:"providerId",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-edrs",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-edrs",title:"queryEdrs",description:"Returns all EndpointDataReference entry according to a query",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-edrs.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-edrs",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-edrs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-edrs",title:"queryEdrs",description:"Returns all EndpointDataReference entry according to a query",sidebar_label:"queryEdrs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Control Plane EDR Api"],description:"Returns all EndpointDataReference entry according to a query",operationId:"queryEdrs",parameters:[{name:"assetId",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",example:null}},{name:"agreementId",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",example:null}},{name:"providerId",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{agreementId:{type:"string",example:null},assetId:{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null},errorDetail:{type:"string",example:null},expirationTimestamp:{type:"integer",format:"int64",example:null},id:{type:"string",example:null},providerId:{type:"string",example:null},state:{type:"integer",format:"int32",example:null},stateCount:{type:"integer",format:"int32",example:null},stateTimestamp:{type:"integer",format:"int64",example:null},traceContext:{type:"object",additionalProperties:{type:"string",example:null},example:null},transferProcessId:{type:"string",example:null},updatedAt:{type:"integer",format:"int64",example:null}},example:null}}}}},400:{description:"Request was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},method:"get",path:"/edrs",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"query Edrs",description:{content:"Returns all EndpointDataReference entry according to a query",type:"text/plain"},url:{path:["edrs"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"assetId",value:""},{disabled:!1,key:"agreementId",value:""},{disabled:!1,key:"providerId",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"queryAllContractDefinitions",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-all-contract-definitions"},next:{title:"queryNegotiations",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-negotiations"}},x={},v=[{value:"queryEdrs",id:"queryedrs",level:2}],g={toc:v};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"queryedrs"},"queryEdrs"),(0,l.kt)("p",null,"Returns all EndpointDataReference entry according to a query"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Query Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(n.Z,{className:"paramsItem",param:{name:"assetId",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"}),(0,l.kt)(n.Z,{className:"paramsItem",param:{name:"agreementId",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"}),(0,l.kt)(n.Z,{className:"paramsItem",param:{name:"providerId",in:"query",required:!1,style:"form",explode:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(r.Z,{mdxType:"ApiTabs"},(0,l.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null),(0,l.kt)("div",null,(0,l.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"agreementId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"assetId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"errorDetail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"expirationTimestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"providerId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"state",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"stateCount",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"stateTimestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"traceContext"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))),(0,l.kt)(p.Z,{collapsible:!1,name:"transferProcessId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"updatedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(d.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request was malformed")),(0,l.kt)("div",null,(0,l.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(d.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);