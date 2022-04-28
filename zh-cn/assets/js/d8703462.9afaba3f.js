"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6279],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return N}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(n),N=r,s=k["".concat(d,".").concat(N)]||k[N]||o[N]||l;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},479:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return o}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),i=["components"],p={},d="\u5217\u8868 List",m={unversionedId:"Components/DATA DISPLAY/list",id:"Components/DATA DISPLAY/list",title:"\u5217\u8868 List",description:"\u7528\u4e8e\u5c55\u793a\u6587\u5b57\u3001\u5217\u8868\u3001\u56fe\u7247\u3001\u6bb5\u843d\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/Components/DATA DISPLAY/list.md",sourceDirName:"Components/DATA DISPLAY",slug:"/Components/DATA DISPLAY/list",permalink:"/zh-cn/docs/Components/DATA DISPLAY/list",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u56fe\u7247 Image",permalink:"/zh-cn/docs/Components/DATA DISPLAY/image"},next:{title:"\u6c14\u6ce1\u5361\u7247 Popover",permalink:"/zh-cn/docs/Components/DATA DISPLAY/popover"}},u={},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u7528\u7ec4\u4ef6",id:"\u5f15\u7528\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u63a5\u53e3\uff08API\uff09",id:"\u7ec4\u4ef6\u63a5\u53e3api",level:2},{value:"List \u57fa\u7840\u5c5e\u6027",id:"list-\u57fa\u7840\u5c5e\u6027",level:3},{value:"List \u4e8b\u4ef6",id:"list-\u4e8b\u4ef6",level:3},{value:"List-item \u57fa\u7840\u5c5e\u6027",id:"list-item-\u57fa\u7840\u5c5e\u6027",level:3},{value:"List-item-meta \u57fa\u7840\u5c5e\u6027",id:"list-item-meta-\u57fa\u7840\u5c5e\u6027",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u8bbe\u7f6e list \u8fb9\u6846",id:"\u8bbe\u7f6e-list-\u8fb9\u6846",level:3}],k={toc:o};function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5217\u8868-list"},"\u5217\u8868 List"),(0,l.kt)("p",null,"\u7528\u4e8e\u5c55\u793a\u6587\u5b57\u3001\u5217\u8868\u3001\u56fe\u7247\u3001\u6bb5\u843d\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/list\n")),(0,l.kt)("h2",{id:"\u5f15\u7528\u7ec4\u4ef6"},"\u5f15\u7528\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { List } from "@illa-design/list"\n')),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u63a5\u53e3api"},"\u7ec4\u4ef6\u63a5\u53e3\uff08API\uff09"),(0,l.kt)("h3",{id:"list-\u57fa\u7840\u5c5e\u6027"},"List \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u6570\u636e\uff0c\u9700\u8981\u548c item \u540c\u65f6\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"any[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",' "large"'),(0,l.kt)("td",{parentName:"tr",align:null},'"medium"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bordered"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u8fb9\u6846"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"split"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u5206\u5272\u7ebf"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4e3a\u52a0\u8f7d\u4e2d\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hasMore"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4ee5\u52a0\u8f7d\u66f4\u591a"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loader"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a0\u8f7d\u66f4\u591a"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a0\u8f7d\u7ed3\u675f"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hoverable"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u9009\u4e2d\u6837\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u7684\u6700\u5927\u9ad8\u5ea6"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bottomOffset"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u5230\u8fbe\u5e95\u90e8\u7684\u8ddd\u79bb\u9600\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5934\u90e8"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"footer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5e95\u90e8"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"render"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e32\u67d3 item"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderKey"),(0,l.kt)("td",{parentName:"tr",align:null},"item \u7684 key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"list-\u4e8b\u4ef6"},"List \u4e8b\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onScroll"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u6eda\u52a8\u65f6\u89e6\u53d1"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onReachBottom"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u5217\u8868\u5230\u8fbe\u5e95\u90e8\u65f6\u89e6\u53d1"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"list-item-\u57fa\u7840\u5c5e\u6027"},"List-item \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"actions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u9879\u4e0b\u65b9\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extra"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u6700\u53f3\u4fa7\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"list-item-meta-\u57fa\u7840\u5c5e\u6027"},"List-item-meta \u57fa\u7840\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5143\u7d20\u6807\u9898"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5143\u7d20\u7684\u56fe\u6807"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u8868\u5143\u7d20\u63cf\u8ff0\u5185\u5bb9"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,l.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<List\n  data={[\n    { title: "Title A", description: "Desc A" },\n    { title: "Title B", description: "Desc B" },\n    { title: "Title C", description: "Desc C" },\n    { title: "Title D", description: "Desc D" },\n    { title: "Title E", description: "Desc E" },\n  ]}\n  render={(data, index) => {\n   return (\n      <ListItem\n        actions={<Button>Actions</Button>}\n        extra={<Image src={"https://devbo.cn/logo.svg"} />}\n      >\n        <ListItemMeta title={data.title} description={data.description} />\n      </ListItem>\n    )\n  }}\n  renderKey={(data, index) => {\n    return index.toString()\n  }}\n/>,\n')),(0,l.kt)("h3",{id:"\u8bbe\u7f6e-list-\u8fb9\u6846"},"\u8bbe\u7f6e list \u8fb9\u6846"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<List\n data={[\n    { title: "Title A", description: "Desc A" },\n    { title: "Title A", description: "Desc A" },\n  ]}\n  render={(data) => {\n    return (\n     <ListItem>\n        <ListItemMeta title={data.title} description={data.description} />\n          </ListItem>\n        )\n      }}\n      renderKey={(data, index) => {\n        return index.toString()\n }}\n/>,\n')))}N.isMDXComponent=!0}}]);