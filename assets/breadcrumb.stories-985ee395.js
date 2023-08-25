import{j as r,a as u}from"./emotion-react-jsx-runtime.browser.esm-63b6c831.js";import{A as b}from"./index.esm-d5b13f58.js";import{B as s,a as m}from"./breadcrumb-5310b1d5.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b79630f.js";import"./iconBase-6076fe0b.js";import"./style-eba6b849.js";import"./color-palette-cd133b87.js";import"./index-d85697b4.js";import"./down-ff61a050.js";import"./create-icon-e1f02089.js";import"./droplist-item-c1ed83e5.js";import"./use-merge-value-460a468d.js";import"./is-6e11be7b.js";import"./use-previous-c448b133.js";import"./trigger-b1fdcaa0.js";import"./trigger-context-adc67150.js";import"./index-07d1f67e.js";import"./motion-1a692e5b.js";import"./use-isomorphic-effect-4e0215de.js";import"./animate-83017438.js";import"./index-28b4eed0.js";import"./slash-2794ca36.js";const v={title:"NAVIGATION/Breadcrumb",component:s},a=e=>r(s,{...e,routes:[{path:"/",breadcrumbName:"Home"},{path:"/Channel",breadcrumbName:"Channel",children:[{path:"/users",breadcrumbName:"Users"},{path:"/permission",breadcrumbName:"Permission"}]},{path:"/news",breadcrumbName:"News"}],...e}),n=e=>u(s,{...e,children:[r(m,{children:r(b,{})}),r(m,{href:"/home",children:"Home"}),r(m,{href:"/channel",children:"Channel"}),r(m,{href:"/news",children:"News"})]});var t,o,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BreadcrumbProps) => {
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const y=["Basic","Children"];export{a as Basic,n as Children,y as __namedExportsOrder,v as default};
//# sourceMappingURL=breadcrumb.stories-985ee395.js.map
