"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2974],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=p(n),d=r,g=s["".concat(m,".").concat(d)]||s[d]||u[d]||l;return n?a.createElement(g,o(o({ref:e},c),{},{components:n})):a.createElement(g,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3598:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),o=["components"],i={},m=void 0,p={unversionedId:"Components/DATA DISPLAY/comment",id:"Components/DATA DISPLAY/comment",title:"comment",description:"The comment component is used to display comment information.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/DATA DISPLAY/comment.md",sourceDirName:"Components/DATA DISPLAY",slug:"/Components/DATA DISPLAY/comment",permalink:"/docs/Components/DATA DISPLAY/comment",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"collapse",permalink:"/docs/Components/DATA DISPLAY/collapse"},next:{title:"Descriptions",permalink:"/docs/Components/DATA DISPLAY/description"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Comment Basic Properties",id:"comment-basic-properties",level:3},{value:"Eaxample",id:"eaxample",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set align",id:"set-align",level:3},{value:"Set author",id:"set-author",level:3}],s={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"comment"},"Comment"),(0,l.kt)("p",null,"The comment component is used to display comment information."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/comment\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Comment } from "@illa-design/comment"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"comment-basic-properties"},"Comment Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"actions"),(0,l.kt)("td",{parentName:"tr",align:null},"Actions list"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"author"),(0,l.kt)("td",{parentName:"tr",align:null},"Display as comment author"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"Display as comment avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},"Children of comments"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"Comment content"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"datetime"),(0,l.kt)("td",{parentName:"tr",align:null},"Datetime display"),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"align"),(0,l.kt)("td",{parentName:"tr",align:null},"Align method"),(0,l.kt)("td",{parentName:"tr",align:null},'"left" ',"|",' "right" ',"|",' {datetime?: "left" ',"|",' "right";actions?: "left" ',"|",' "right";}'),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"eaxample"},"Eaxample"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Comment placeholder={"comment"} />\n')),(0,l.kt)("h3",{id:"set-align"},"Set align"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Comment\n  placeholder={"comment"}\n  actions={<span>like</span>}\n  align={"right"}\n/>\n')),(0,l.kt)("h3",{id:"set-author"},"Set author"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Comment\n  author={<span>ILLA</span>}\n  placeholder={"comment"}\n/>\n')))}d.isMDXComponent=!0}}]);