# Collapse折叠面板

可以折叠或展开的内容区域。

## 安装

```jsx
yarn add @illa-design/collapse
```

## 引用组件

```jsx
import { Collapse } from "@illa-design/collapse"
```

## 组件接口（API）

### Collapse 基础属性

| Props              | Desc                 | Type                 | Default |
| ------------------ | -------------------- | -------------------- | ------- |
| activeKey          | 当前面板选中值       | `string \| string[]` | `-`     |
| defaultActiveKey   | 默认展开的面板       | `string \| string[]` | `-`     |
| accordion          | 是否是手风琴模式     | `boolean`            | `-`     |
| expandIcon         | 自定义展开图标       | `ReactNode`          | `-`     |
| expandIconPosition | 展开图标的位置       | `"left" \| "right"`   | `"left"`  |
| bordered           | 无边框样式           | `boolean`            | `true`  |
| destroyOnHide      | 是否销毁被折叠的面板 | `boolean`            | `-`     |

### Collapse 事件

| Props    | Desc                   | Type         | Default |
| -------- | ---------------------- | ------------ | ------- |
| onChange | 展开面板发生改变时触发 | `() => void` | `-`     |

### Collapse-item 基础属性

| Props          | Desc                                                         | Type              | Default |
| -------------- | ------------------------------------------------------------ | ----------------- | ------- |
| header         | 折叠面板头部内容，允许自定义                                 | `React.ReactNode` | `-`     |
| name           | 对应 activeKey，当前面板组件的的唯一标识                     | `string`          | `-`     |
| disabled       | 是否禁用                                                     | `boolean`         | `-`     |
| expandIcon     | 自定义展开图标                                               | `ReactNode`       | `-`     |
| showExpandIcon | 是否展示展开按钮                                             | `boolean`         | `true`  |
| extra          | 额外节点                                                     | `ReactNode`       | `-`     |
| destroyOnHide  | 面板被折叠时是否销毁节点，优先级高于 `Collapse` 的 `destroyOnHide` | `boolean`         | `-`     |

## 使用方法

### 基础用法

```jsx
<Collapse
  style={{ maxWidth: 1260, marginBottom: 20 }}
 {...props}
>
  <CollapseItem
    header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
    name="1"
  >
    Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
  </CollapseItem>

  <CollapseItem
    header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
    name="2"
    disabled
  >
    Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
  </CollapseItem>

  <CollapseItem
    header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
    name="3"
  >
    Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
  </CollapseItem>
</Collapse>
```
