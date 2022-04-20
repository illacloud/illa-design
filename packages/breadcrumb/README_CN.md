# 面包屑

面包屑主要被用于展示当前页面在系统中的位置，并且提供快速导航的功能

## 安装

```bash
yarn add @illa-design/breadcrumb
```

## 引用组件

```jsx
import { Breadcrumb, BreadcrumbItem } from "@illa-design/breadcrumb"
```

## 组件接口(API)

### Breadcrumb 基础属性

| 参数名    | 描述                     | 类型                  | 默认值 |
| --------- | ------------------------ | --------------------- | ------ |
| separator | 自定义分割符             | `string \| ReactNode` | `-`    |
| routes    | 直接设置下拉菜单内容     | `RouteProps`          | `-`    |
| maxCount  | 设置最多渲染的面包屑数量 | `number`              | `-`    |

### BreadcrumbItem 基础属性

| 参数名        | 描述               | 类型               | 默认值 |
| ------------- | :----------------- | ------------------ | ------ |
| droplist      | 设置下拉菜单的内容 | `Menu \| ()=>Menu` | `-`    |
| dropdownProps | 设置下拉菜单的属性 | `DropdownProps`    | `-`    |

### RouteProps 基础属性

| 参数名         | 描述                     | 类型                                            | 默认值 |
| -------------- | :----------------------- | ----------------------------------------------- | ------ |
| path           | 设置当前页面下的路由地址 | `string`                                        | `-`    |
| breadcrumbName | 设置节点名称             | `string`                                        | `-`    |
| children       | 设置节点下拉菜单中子项   | `Array<{path: string;breadcrumbName: string;}>` | `-`    |

### 使用方法

### 基础用法

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

### 自定义分隔符和大小

```jsx
<Breadcrumb routes={routes} separator={<RightIcon />} style={{ fontSize: 12 }}/>
```

### 设置最大渲染的面包屑数量

```jsx
<Breadcrumb maxCount={2}>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbItem>Sub Home</BreadcrumbItem>
  <BreadcrumbItem>All Channel</BreadcrumbItem>
  <BreadcrumbItem>Channel</BreadcrumbItem>
  <BreadcrumbItem>News</BreadcrumbItem>
</Breadcrumb>
```

### 
