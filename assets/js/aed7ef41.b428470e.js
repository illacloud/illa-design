"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9974],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),s=r,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||i;return n?a.createElement(f,l(l({ref:e},u),{},{components:n})):a.createElement(f,l({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},698:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7378),n(3905)),l=["components"],o={},p="Notification",c={unversionedId:"Components/FEEDBACK/notification",id:"Components/FEEDBACK/notification",title:"Notification",description:"The Notification component is used to notificate infomation to users.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/FEEDBACK/notification.md",sourceDirName:"Components/FEEDBACK",slug:"/Components/FEEDBACK/notification",permalink:"/docs/Components/FEEDBACK/notification",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"modal",permalink:"/docs/Components/FEEDBACK/modal"},next:{title:"Popconfirm",permalink:"/docs/Components/FEEDBACK/popconfirm"}},u={},m=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Notification Basic Properties",id:"notification-basic-properties",level:3},{value:"Method",id:"method",level:3},{value:"Config Provider",id:"config-provider",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set the notification is closable",id:"set-the-notification-is-closable",level:3},{value:"Set the duration of the notification",id:"set-the-duration-of-the-notification",level:3},{value:"Set clearing the notification",id:"set-clearing-the-notification",level:3}],d={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notification"},"Notification"),(0,i.kt)("p",null,"The Notification component is used to notificate infomation to users."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/notification\n")),(0,i.kt)("h2",{id:"import-component"},"Import component"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Notification } from "@illa-design/notification"\n')),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"notification-basic-properties"},"Notification Basic Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Props"),(0,i.kt)("th",{parentName:"tr",align:null},"Desc"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom action area"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"closable"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, the notification is closable"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onClose"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback when close"),(0,i.kt)("td",{parentName:"tr",align:null},"(e) => void"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"afterClose"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback when after close"),(0,i.kt)("td",{parentName:"tr",align:null},"() => void"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"Title of the notification"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"content"),(0,i.kt)("td",{parentName:"tr",align:null},"Content of the notification"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"icon"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom icon"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"closeElement"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom close button"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"showIcon"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, show the icon of the notification"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"Auto close time in ms"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"3000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"position"),(0,i.kt)("td",{parentName:"tr",align:null},"The position of the notification"),(0,i.kt)("td",{parentName:"tr",align:null},'"topLeft" ',"|",' "topRight" ',"|",' "bottomLeft" ',"|",' "bottomRight"'),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the notification"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"method"},"Method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"Notification.info(config)\n\nNotification.success(config)\n\nNotification.warning(config)\n\nNotification.error(config)\n\nNotification.normal(config)\n\nNotification.remove(id)\n\nNotification.clear()\n")),(0,i.kt)("h3",{id:"config-provider"},"Config Provider"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Notification.config(options)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Props"),(0,i.kt)("th",{parentName:"tr",align:null},"Desc"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maxCount"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u901a\u77e5\u6570\u91cf"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"getCountainer"),(0,i.kt)("td",{parentName:"tr",align:null},"\u653e\u7f6e\u901a\u77e5\u7684\u5bb9\u5668"),(0,i.kt)("td",{parentName:"tr",align:null},"() => HTMLElement"),(0,i.kt)("td",{parentName:"tr",align:null},"() => document.body")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"\u901a\u77e5\u81ea\u52a8\u5173\u95ed\u7684\u65f6\u95f4"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"3000")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"Notification.info({content:\u201cILLA Design\u201d})\n")),(0,i.kt)("h3",{id:"set-the-notification-is-closable"},"Set the notification is closable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'Notification.info({\n  title: "Closable",\n  content: "Content",\n  closable: true,\n  onClose: handleClose,\n  afterClose: handleAfterClose,\n})\n')),(0,i.kt)("h3",{id:"set-the-duration-of-the-notification"},"Set the duration of the notification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'Notification.info({\n  title: \u201cNew duration\u201d,\n  content: "Content",\n  duration: 500,\n})\n\n')),(0,i.kt)("h3",{id:"set-clearing-the-notification"},"Set clearing the notification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"Notification.clear()\n")))}s.isMDXComponent=!0}}]);