"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9875],{3905:function(t,e,n){n.d(e,{Zo:function(){return g},kt:function(){return m}});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},g=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,g=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,c=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(c,o(o({ref:e},g),{},{components:n})):r.createElement(c,o({ref:e},g))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3702:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(3117),a=n(102),l=(n(7378),n(3905)),o=["components"],i={},p=void 0,u={unversionedId:"Components/OTHERS/trigger",id:"Components/OTHERS/trigger",title:"trigger",description:"The basic component of all popup component. it used to show more information by hovering, focusing, or clicking on a element.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/OTHERS/trigger.md",sourceDirName:"Components/OTHERS",slug:"/Components/OTHERS/trigger",permalink:"/docs/Components/OTHERS/trigger",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Timepicker",permalink:"/docs/Components/OTHERS/time-picker"}},g={},s=[{value:"Installation",id:"installation",level:2},{value:"Import",id:"import",level:2},{value:"API",id:"api",level:2},{value:"Trigger Basic Properties",id:"trigger-basic-properties",level:3},{value:"Trigger Events",id:"trigger-events",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set popup position",id:"set-popup-position",level:3},{value:"Set popup&#39;s background color",id:"set-popups-background-color",level:3},{value:"Set arrow",id:"set-arrow",level:3},{value:"Set popup&#39;s default visibility status",id:"set-popups-default-visibility-status",level:3},{value:"Set popup&#39;s delay time to open",id:"set-popups-delay-time-to-open",level:3}],d={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"trigger"},"Trigger"),(0,l.kt)("p",null,"The basic component of all popup component. it used to show more information by hovering, focusing, or clicking on a element."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/trigger\n")),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Trigger } from "@illa-design/trigger"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"trigger-basic-properties"},"Trigger Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,l.kt)("td",{parentName:"tr",align:null},"Set background color"),(0,l.kt)("td",{parentName:"tr",align:null},'"white" ',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green" ',"|",' "blue"  ',"|",' "cyan" ',"|",' "purple" ',"|"," string"),(0,l.kt)("td",{parentName:"tr",align:null},'"gray"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"The content shown in popup"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trigger"),(0,l.kt)("td",{parentName:"tr",align:null},"Types of events that cause the popup to show"),(0,l.kt)("td",{parentName:"tr",align:null},'"hover" ',"|",' "click" ',"|",' "focus"'),(0,l.kt)("td",{parentName:"tr",align:null},'"hover"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},"The position of the popup relative to the target."),(0,l.kt)("td",{parentName:"tr",align:null},'"top" ',"|",' "tl" ',"|",' "tr" ',"|",' "bottom" ',"|",' "bl" ',"|",' "br" ',"|",' "left" ',"|",' "lt" ',"|",' "lb" ',"|",' "right" ',"|",' "rt" ',"|",' "rb"'),(0,l.kt)("td",{parentName:"tr",align:null},'"top"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showArrow"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to display arrow node"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closeDelay"),(0,l.kt)("td",{parentName:"tr",align:null},"Delay time to close"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"150")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"openDelay"),(0,l.kt)("td",{parentName:"tr",align:null},"Delay time to show"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"150")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoFitPosition"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to automatically adjust the position of the popup according to the viewport"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closeOnClick"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to close popup when clicking the child node"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickOutsideToClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to close popup when clicking the outside of popup"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultPopupVisible"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the popup is visible by default"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoAlignPopupWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to automatically adjust  the width of popup according to the trigger component"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"popupVisible"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether the  popup is visible"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to disable the popup"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"withoutPadding"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show the padding of popup"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"trigger-events"},"Trigger Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onVisibleChange"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback when the visibility of the popup is changed"),(0,l.kt)("td",{parentName:"tr",align:null},"(visible: boolean) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Trigger content="Trigger">\n  <Button>Trigger</Button>\n</Trigger>\n')),(0,l.kt)("h3",{id:"set-popup-position"},"Set popup position"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Trigger content="Trigger" position="top">\n  <Button>Trigger</Button>\n</Trigger>\n')),(0,l.kt)("h3",{id:"set-popups-background-color"},"Set popup's background color"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Trigger content="Trigger" position="top" colorScheme="cyan">\n  <Button>Trigger</Button>\n</Trigger>\n')),(0,l.kt)("h3",{id:"set-arrow"},"Set arrow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Trigger content="Trigger" position="top" colorScheme="cyan" showArrow={false}>\n  <Button>Trigger</Button>\n</Trigger>\n')),(0,l.kt)("h3",{id:"set-popups-default-visibility-status"},"Set popup's default visibility status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Trigger content="Trigger" position="top" colorScheme="cyan" defaultPopupVisible>\n  <Button>Trigger</Button>\n</Trigger>\n')),(0,l.kt)("h3",{id:"set-popups-delay-time-to-open"},"Set popup's delay time to open"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Trigger content="Trigger" position="top" colorScheme="cyan" openDelay={1000} closeDelay={1000}>\n  <Button>Trigger</Button>\n</Trigger>\n')))}m.isMDXComponent=!0}}]);