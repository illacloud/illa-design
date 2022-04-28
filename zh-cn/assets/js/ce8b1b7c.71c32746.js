"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9281],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var l=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=l.createContext({}),u=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return l.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=u(n),k=a,g=c["".concat(p,".").concat(k)]||c[k]||d[k]||r;return n?l.createElement(g,o(o({ref:e},m),{},{components:n})):l.createElement(g,o({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7258:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var l=n(3117),a=n(102),r=(n(7378),n(3905)),o=["components"],i={},p="\u6587\u5b57\u6c14\u6ce1 Tooltip",u={unversionedId:"Components/DATA DISPLAY/tooltip",id:"Components/DATA DISPLAY/tooltip",title:"\u6587\u5b57\u6c14\u6ce1 Tooltip",description:"\u6587\u5b57\u6c14\u6ce1\u662f\u4e00\u4e2a\u5f53\u7528\u6237\u4e0e\u4e00\u4e2a\u9875\u9762\u5143\u7d20\u8fdb\u884c\u4ea4\u4e92\u65f6\u5c55\u793a\u7b80\u77ed\u7684\u4fe1\u606f\u63d0\u793a\u7684\u7ec4\u4ef6\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/Components/DATA DISPLAY/tooltip.md",sourceDirName:"Components/DATA DISPLAY",slug:"/Components/DATA DISPLAY/tooltip",permalink:"/zh-cn/docs/Components/DATA DISPLAY/tooltip",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65f6\u95f4\u8f74 Timeline",permalink:"/zh-cn/docs/Components/DATA DISPLAY/timeline"},next:{title:"\u6811 Tree",permalink:"/zh-cn/docs/Components/DATA DISPLAY/tree"}},m={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u7528\u7ec4\u4ef6",id:"\u5f15\u7528\u7ec4\u4ef6",level:2},{value:"\u7ec4\u4ef6\u63a5\u53e3(API)",id:"\u7ec4\u4ef6\u63a5\u53e3api",level:2},{value:"Tooltip \u57fa\u7840\u5c5e\u6027",id:"tooltip-\u57fa\u7840\u5c5e\u6027",level:3},{value:"Trigger \u4e8b\u4ef6",id:"trigger-\u4e8b\u4ef6",level:3},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u57fa\u7840\u7528\u6cd5",id:"\u57fa\u7840\u7528\u6cd5",level:3},{value:"\u8bbe\u7f6e\u6c14\u6ce1\u4f4d\u7f6e",id:"\u8bbe\u7f6e\u6c14\u6ce1\u4f4d\u7f6e",level:3},{value:"\u8bbe\u7f6e\u6c14\u6ce1\u80cc\u666f\u989c\u8272",id:"\u8bbe\u7f6e\u6c14\u6ce1\u80cc\u666f\u989c\u8272",level:3},{value:"\u4e0d\u5c55\u793a\u7bad\u5934",id:"\u4e0d\u5c55\u793a\u7bad\u5934",level:3},{value:"\u8bbe\u7f6e\u6c14\u6ce1\u9ed8\u8ba4\u5c55\u793a\u72b6\u6001",id:"\u8bbe\u7f6e\u6c14\u6ce1\u9ed8\u8ba4\u5c55\u793a\u72b6\u6001",level:3},{value:"\u8bbe\u7f6e\u6c14\u6ce1\u5c55\u793a\u548c\u5173\u95ed\u5ef6\u65f6",id:"\u8bbe\u7f6e\u6c14\u6ce1\u5c55\u793a\u548c\u5173\u95ed\u5ef6\u65f6",level:3}],c={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6587\u5b57\u6c14\u6ce1-tooltip"},"\u6587\u5b57\u6c14\u6ce1 Tooltip"),(0,r.kt)("p",null,"\u6587\u5b57\u6c14\u6ce1\u662f\u4e00\u4e2a\u5f53\u7528\u6237\u4e0e\u4e00\u4e2a\u9875\u9762\u5143\u7d20\u8fdb\u884c\u4ea4\u4e92\u65f6\u5c55\u793a\u7b80\u77ed\u7684\u4fe1\u606f\u63d0\u793a\u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/tooltip\n")),(0,r.kt)("h2",{id:"\u5f15\u7528\u7ec4\u4ef6"},"\u5f15\u7528\u7ec4\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Tooltip } from "@illa-design/tooltip"\n')),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u63a5\u53e3api"},"\u7ec4\u4ef6\u63a5\u53e3(API)"),(0,r.kt)("h3",{id:"tooltip-\u57fa\u7840\u5c5e\u6027"},"Tooltip \u57fa\u7840\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u80cc\u666f\u989c\u8272"),(0,r.kt)("td",{parentName:"tr",align:null},'"white" ',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green" ',"|",' "blue"  ',"|",' "cyan" ',"|",' "purple" ',"|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},'"gray"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6c14\u6ce1\u4e0a\u5c55\u793a\u7684\u5185\u5bb9"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trigger"),(0,r.kt)("td",{parentName:"tr",align:null},"\u51fa\u53d1\u65b9\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},'"hover" ',"|",' "click" ',"|",' "focus"'),(0,r.kt)("td",{parentName:"tr",align:null},'"hover"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6c14\u6ce1\u51fa\u73b0\u7684\u4f4d\u7f6e\uff0c\u670912\u4e2a\u53ef\u9009\u65b9\u5411"),(0,r.kt)("td",{parentName:"tr",align:null},'"top" ',"|",' "tl" ',"|",' "tr" ',"|",' "bottom" ',"|",' "bl" ',"|",' "br" ',"|",' "left" ',"|",' "lt" ',"|",' "lb" ',"|",' "right" ',"|",' "rt" ',"|",' "rb"'),(0,r.kt)("td",{parentName:"tr",align:null},'"top"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showArrow"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c55\u793a\u201c\u7bad\u5934\u201d \u201c\u7bad\u5934\u201d\u662f\u4e2a\u4ece\u6c14\u6ce1\u6307\u5411\u5bf9\u5e94\u7ec4\u4ef6\u7684\u7b49\u8fb9\u4e09\u89d2\u5f62"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closeDelay"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u5931/\u5173\u95ed\u65f6\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\u6beb\u79d2\uff08ms\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"150")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openDelay"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c55\u73b0/\u6253\u5f00\u65f6\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\u6beb\u79d2\uff08ms\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"150")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoFitPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6c14\u6ce1\u88ab\u906e\u6321\u65f6\u81ea\u52a8\u8c03\u6574\u6c14\u6ce1\u4f4d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closeOnClick"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5f53\u70b9\u51fb\u88ab\u5305\u542b\u7684\u7ec4\u4ef6\u65f6\u662f\u5426\u5173\u95ed\u6c14\u6ce1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultPopupVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7684\u5f39\u51fa\u6846\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"popupVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f39\u51fa\u6846\u662f\u6253\u5f00\u8fd8\u662f\u5173\u95ed\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7981\u7528\u5f39\u51fa"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"trigger-\u4e8b\u4ef6"},"Trigger \u4e8b\u4ef6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onVisibleChange"),(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6216\u9690\u85cf\u65f6\u89e6\u53d1\u7684\u56de\u8c03"),(0,r.kt)("td",{parentName:"tr",align:null},"(visible: boolean) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("h3",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip">\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u6c14\u6ce1\u4f4d\u7f6e"},"\u8bbe\u7f6e\u6c14\u6ce1\u4f4d\u7f6e"),(0,r.kt)("p",null,"\u901a\u8fc7position\u8fd9\u4e2a\u63a5\u53e3\u53ef\u4ee5\u8bbe\u7f6e\u6c14\u6ce1\u7684\u5f39\u51fa\u4f4d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="bottom">\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u6c14\u6ce1\u80cc\u666f\u989c\u8272"},"\u8bbe\u7f6e\u6c14\u6ce1\u80cc\u666f\u989c\u8272"),(0,r.kt)("p",null,"\u901a\u8fc7variant\u8fd9\u4e2a\u63a5\u53e3\u53ef\u4ee5\u8c03\u6574\u7ec4\u4ef6\u7684\u6837\u5f0f,\u901a\u8fc7colorScheme\u4e2a\u63a5\u53e3\u53ef\u4ee5\u8c03\u6574\u7ec4\u4ef6\u7684\u80cc\u666f\u989c\u8272\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="top" colorScheme="cyan">\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"\u4e0d\u5c55\u793a\u7bad\u5934"},"\u4e0d\u5c55\u793a\u7bad\u5934"),(0,r.kt)("p",null,"\u901a\u8fc7showArrow\u63a5\u53e3\u53ef\u4ee5\u8bbe\u7f6e\u662f\u5426\u5c55\u793a\u6c14\u6ce1\u4e0a\u7684\u7bad\u5934\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="top" colorScheme="cyan" showArrow={false}>\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u6c14\u6ce1\u9ed8\u8ba4\u5c55\u793a\u72b6\u6001"},"\u8bbe\u7f6e\u6c14\u6ce1\u9ed8\u8ba4\u5c55\u793a\u72b6\u6001"),(0,r.kt)("p",null,"\u901a\u8fc7defaultPopupVisible\u8bbe\u7f6e\u6c14\u6ce1\u7684\u9ed8\u8ba4\u5c55\u793a\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="top" colorScheme="cyan" defaultPopupVisible>\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u6c14\u6ce1\u5c55\u793a\u548c\u5173\u95ed\u5ef6\u65f6"},"\u8bbe\u7f6e\u6c14\u6ce1\u5c55\u793a\u548c\u5173\u95ed\u5ef6\u65f6"),(0,r.kt)("p",null,"\u901a\u8fc7openDelay\u548ccloseDelay\u8fd9\u4e24\u4e2a\u53c2\u6570\u53ef\u4ee5\u8bbe\u7f6e\u6c14\u6ce1\u5c55\u793a\u548c\u5173\u95ed\u7684\u5ef6\u65f6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="top" colorScheme="cyan" openDelay={1000} closeDelay={1000}>\n  <Button>Tooltip</Button>\n</Tooltip>\n')))}k.isMDXComponent=!0}}]);