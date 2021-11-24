# 标签 <TAG>

标签组件一般被用于标记事物的属性、维度或者类别.

## 安装

```jsx
yarn add @illa-design/tag
```

## 引用组件

```jsx
import { Tag } from "@illa-dedign/tag"
```

## 组件接口(API)

### Tag 基础属性

| 参数名      | 描述               | 类型                                                         | 默认值    |
| ----------- | ------------------ | ------------------------------------------------------------ | --------- |
| style       | 节点样式           | `CSSProperties`                                              | `-`       |
| className   | 节点类名           | `string | string[]`                                          | `-`       |
| colorScheme | 设置标签背景颜色   | `"white" | "blackAlpha" | "gray" | "grayBlue" | "red" | "orange" | "yellow" | "green" | "blue" | "cyan" | "purple" ` | `"gray"`  |
| size        | 设置标签尺寸       | `"small" | "medium" | "large"`                   | `"small"` |
| visible     | 设置标签是否隐藏   | `boolean`                                                    | `-`       |
| closable    | 设置是否可关闭标签 | `boolean`                                                    | `-`       |
| variant     | 设置标签的预置样式   | `"outline" | "fill" | "light"`                               | `"light"`    |

### Tag 扩展属性

| 参数名 | 描述     | 类型        | 默认值 |
| ------ | -------- | ----------- | ------ |
| icon   | 设置图标 | `ReactNode` | `-`    |

### Tag 事件

| 参数名  | 描述             | 类型         | 默认值 |
| ------- | ---------------- | ------------ | ------ |
| onClose | 关闭标签回调函数 | `() => void` | `-`  |
