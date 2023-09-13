import{a as r,j as u}from"./emotion-react-jsx-runtime.browser.esm-1facf72c.js";import{A as b}from"./index.esm-aa9e73e6.js";import{B as s,a as m}from"./breadcrumb-e7b67bf0.js";import"./index-1cdf6ce0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-d9790902.js";import"./iconBase-4112cc44.js";import"./style-3ea54b04.js";import"./color-palette-728b424e.js";import"./index-45a08ae3.js";import"./down-3d8ebd18.js";import"./create-icon-907f0980.js";import"./droplist-item-5fe4f77f.js";import"./use-merge-value-fcf53e13.js";import"./is-47f46886.js";import"./use-previous-5c929b6e.js";import"./trigger-1f30ac55.js";import"./trigger-context-e9ca2c5c.js";import"./index-a01a9712.js";import"./motion-96d4cd12.js";import"./use-isomorphic-effect-9dbdc9b0.js";import"./animate-4e967d14.js";import"./index-a6d290df.js";import"./slash-9abd3a84.js";const q={title:"NAVIGATION/Breadcrumb",component:s},a=e=>r(s,{...e,routes:[{path:"/",breadcrumbName:"Home"},{path:"/Channel",breadcrumbName:"Channel",children:[{path:"/users",breadcrumbName:"Users"},{path:"/permission",breadcrumbName:"Permission"}]},{path:"/news",breadcrumbName:"News"}],...e}),n=e=>u(s,{...e,children:[r(m,{children:r(b,{})}),r(m,{href:"/home",children:"Home"}),r(m,{href:"/channel",children:"Channel"}),r(m,{href:"/news",children:"News"})]});var t,o,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BreadcrumbProps) => {
  const routes = [{
    path: "/",
    breadcrumbName: "Home"
  }, {
    path: "/Channel",
    breadcrumbName: "Channel",
    children: [{
      path: "/users",
      breadcrumbName: "Users"
    }, {
      path: "/permission",
      breadcrumbName: "Permission"
    }]
  }, {
    path: "/news",
    breadcrumbName: "News"
  }];
  return <Breadcrumb {...args} routes={routes} {...args} />;
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,p,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(args: BreadcrumbProps) => {
  return <Breadcrumb {...args}>
      <BreadcrumbItem>
        <AiFillHome />
      </BreadcrumbItem>
      <BreadcrumbItem href="/home">Home</BreadcrumbItem>
      <BreadcrumbItem href="/channel">Channel</BreadcrumbItem>
      <BreadcrumbItem href="/news">News</BreadcrumbItem>
    </Breadcrumb>;
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const v=["Basic","Children"];export{a as Basic,n as Children,v as __namedExportsOrder,q as default};
//# sourceMappingURL=breadcrumb.stories-d6c0748a.js.map
