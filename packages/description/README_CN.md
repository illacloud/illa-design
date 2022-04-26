# 描述列表 Descriptions

此组件用于详情页的只读字段信息展示。

## 安装

```bash
yarn add @illa-design/Descriptions
```

## 引用组件

```jsx
import { Descriptions } from "@illa-design/descriptions"
```

## 组件接口（API）

### Descriptions 基础属性

| Props    | Desc                                                         | Type                                                         | Default      |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ |
| bordered | 是否展示边框                                                 | boolean                                                      | false        |
| column   | 一行放置的数据数量                                           | number                                                       | 3            |
| align    | 文字对齐方式                                                 | "left" \| "right"                                            | "left"       |
| layout   | 描述布局, 无边框样式的时候没有 "inline-horizontal" \| "inline-vertical" | "horizontal" \| "vertical \| "inlineHorizontal" \| "inlineVertical"" | "horizontal" |
| size     | 设置列表的尺寸大小                                           | "small" \| "medium" \| "large"                               | "medium"     |
| title    | 描述列表的标题，显示在最顶部                                 | ReactNode                                                    | -            |

### Descriptions-item 基础属性

| Props | Desc                                             | Type   | Default |
| ----- | ------------------------------------------------ | ------ | ------- |
| label | 标签                                             | string | -       |
| value | 数据内容                                         | string | -       |
| span  | 头像组最多展示的头像数量，多余头像以+x的形式展示 | number | 1       |

## 使用方法
```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <Description
        data={[
          {
            label: "Name",
            value: "ILLA",
          },
          {
            label: "Mobile",
            value: "123-1234-1234",
          },
          {
            label: "Residence",
            value: "Beijing",
          },
          {
            label: "Hometown",
            value: "Beijing",
          },
          {
            label: "Date of Birth",
            value: "2020-05-15",
            span: 2,
          },
          {
            label: "Address",
            value: "Building, Road, Beijing",
            span: 3,
          },
        ]}
      />
      <Description
        align={"left"}
        size={"large"}
        layout="horizontal"
        column={1}
        data={dataList}
      />
    </>`

export const importStatement = `import { Descriptions } from "@illa-design/descriptions"`

export const packages = {"@illa-design/descriptions":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```
### 基础用法

```jsx
<Description
  data={[
    {
      label: "Name",
      value: "ILLA",
    },
    {
      label: "Mobile",
      value: "123-1234-1234",
    },
    {
      label: "Residence",
      value: "Beijing",
    },
    {
      label: "Hometown",
      value: "Beijing",
    },
    {
      label: "Date of Birth",
      value: "2020-05-15",
      span: 2,
    },
    {
      label: "Address",
      value: "Building, Road, Beijing",
      span: 3,
    },
  ]}
/>
```

### 设置尺寸和对齐方式

```jsx
<Description
  align={"left"}
  size={"large"}
  layout="horizontal"
  column={1}
  data={dataList}
/>
```
