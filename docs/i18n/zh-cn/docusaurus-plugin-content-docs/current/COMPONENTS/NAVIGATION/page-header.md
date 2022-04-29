# 页头 PageHeader

页头位于页面的顶部，用于展示页面基本信息和常用操作。

## 安装

```bash
yarn add @illa-design/pageheader
```

## 引用组件

```jsx
import { PageHeader } from "@illa-dedign/pageheader"
```

## 组件接口(API)

### PageHeader 基础属性

| 参数名     | 描述                                          | 类型                    | 默认值 |
| ---------- | --------------------------------------------- | ----------------------- | ------ |
| title      | 主标题                                        | ReactNode               | -      |
| subTitle   | 次级标题                                      | ReactNode               | -      |
| breadcrumb | 面包屑，接受面包屑的所有属性, BreadcrumbProps | BreadcrumbProps         | -      |
| backIcon   | 返回图标，设置为 `false` 时会隐藏图标         | ReactNode \| boolean    | -      |
| extra      | 展示额外内容                                  | ReactNode               | -      |
| onBack     | 点击返回图标的回调                            | (e: MouseEvent) => void | -      |

### PageHeader 事件

| 参数名 | 描述               | 类型                    | 默认值 |
| ------ | :----------------- | ----------------------- | ------ |
| onBack | 点击返回图标的回调 | (e: MouseEvent) => void | -      |

### 使用方法

### 基础用法

```jsx
<PageHeader
  title="ILLA-Design"
  subTitle={
    <>
      This is a description
      <Tag color="blue" size="medium" style={{ marginLeft: 10 }}>
        Tag
      </Tag>
    </>
  }
  backIcon
  onBack={() => Message.info("Click back button")}
  breadcrumb={{
    routes: [
      {
        path: "/",
        breadcrumbName: "Home",
      },
      {
        path: "/channel",
        breadcrumbName: "Channel",
      },
      {
        path: "/news",
        breadcrumbName: "News",
      },
    ],
  }}
  extra={
    <div>
      <Button colorScheme="grey" style={{ marginRight: 10 }}>
        Cancel
      </Button>
      <Button type="blue">confirm</Button>
    </div>
  }
/>
```
