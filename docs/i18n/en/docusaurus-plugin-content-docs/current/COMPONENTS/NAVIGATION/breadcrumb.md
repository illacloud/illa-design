# Breadcrumb

Breadcrumb is used to dislay the location of the current page and return previous page.

## Installation

```bash
yarn add @illa-design/breadcrumb
```

## Import component

```jsx
import { Breadcrumb, BreadcrumbItem } from "@illa-design/breadcrumb"
```

## API

### Breadcrumb Basic Properties

| Props     | Desc                            | Type                | Default |
| --------- | ------------------------------- | ------------------- | ------- |
| separator | Set separator                   | string \| ReactNode | -       |
| routes    | Set breadcrumb content          | RouteProps          | -       |
| maxCount  | Set maximum show number of item | number              | -       |

### BreadcrumbItem Basic Properties

| Props         | Desc                           | Type             | Default |
| ------------- | ------------------------------ | ---------------- | ------- |
| droplist      | Set droplist of BreadcrumbItem | Menu \| ()=>Menu | -       |
| dropdownProps | Set droplist properties        | DropdownProps    | -       |

### RouteProps Properties

| Props          | Desc                            | Type                                          | Default |
| -------------- | ------------------------------- | --------------------------------------------- | ------- |
| path           | Set route path                  | string                                        | -       |
| breadcrumbName | Set breadcrumb item's title     | string                                        | -       |
| children       | Set breadcrumb item 's children | Array<{path: string;breadcrumbName: string;}> | -       |

## Example

### Basic usage

```SnackPlayer dependencies=@illa-design/breadcrumb
import React from 'react';
import { Breadcrumb } from "@illa-design/breadcrumb";

const App = () => {
  const routes = [
    {
      path: "/",
      breadcrumbName: "Home",
    },
    {
      path: "/Channel",
      breadcrumbName: "Channel",
      children: [
        {
          path: "/users",
          breadcrumbName: "Users",
        },
        {
          path: "/permission",
          breadcrumbName: "Permission",
        },
      ],
    },
    {
      path: "/news",
      breadcrumbName: "News",
    },
  ]

  return (
    <Breadcrumb routes={routes} />
  );
}

export default App;

```

```jsx
const routes = [
  {
    path: "/",
    breadcrumbName: "Home",
  },
  {
    path: "/Channel",
    breadcrumbName: "Channel",
    children: [
      {
        path: "/users",
        breadcrumbName: "Users",
      },
      {
        path: "/permission",
        breadcrumbName: "Permission",
      },
    ],
  },
  {
    path: "/news",
    breadcrumbName: "News",
  },
]
<Breadcrumb routes={routes} />
```

### Set separator and size

```SnackPlayer dependencies=@illa-design/breadcrumb,@illa-design/icon
import React from 'react';
import { Breadcrumb } from "@illa-design/breadcrumb";
import { RightIcon } from "@illa-design/icon";

const App = () => {
  const routes = [
    {
      path: "/",
      breadcrumbName: "Home",
    },
    {
      path: "/Channel",
      breadcrumbName: "Channel",
      children: [
        {
          path: "/users",
          breadcrumbName: "Users",
        },
        {
          path: "/permission",
          breadcrumbName: "Permission",
        },
      ],
    },
    {
      path: "/news",
      breadcrumbName: "News",
    },
  ]

  return (
    <Breadcrumb routes={routes} separator={<RightIcon />} style={{ fontSize: 12 }}/>
  );
}

export default App;

```

```jsx
<Breadcrumb
  routes={routes}
  separator={<RightIcon />}
  style={{ fontSize: 12 }}
/>
```

### Set maximum show number of item

```SnackPlayer dependencies=@illa-design/breadcrumb
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "@illa-design/breadcrumb";

const App = () => {
  return (
    <Breadcrumb maxCount={2}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Sub Home</BreadcrumbItem>
      <BreadcrumbItem>All Channel</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
  );
}

export default App;

```

```jsx
<Breadcrumb maxCount={2}>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbItem>Sub Home</BreadcrumbItem>
  <BreadcrumbItem>All Channel</BreadcrumbItem>
  <BreadcrumbItem>Channel</BreadcrumbItem>
  <BreadcrumbItem>News</BreadcrumbItem>
</Breadcrumb>
```
