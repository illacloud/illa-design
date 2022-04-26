# 分割线 Divider

用于对内容区域进行划分，分为横竖两个方向。

## 安装

```bash
yarn add @illa-design/divider
```

## 引用组件

```jsx
import { Divider } from "@illa-design/divider"
```

## 组件接口(API)

### Icon 基础属性

| 参数名    | 描述           | 类型                                        | 默认值       |
| --------- | -------------- | ------------------------------------------- | ------------ |
| direction | 设置分割线方向 | "vertical" \| "horizontal"                  | "horizontal" |
| variant   | 分割线样式     | "solid" \| "dashed" \| "dotted" \| "double" | "solid"      |

## 使用方法
```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <Divider />
      <Divider />
      <Divider direction="vertical" />
      <Divider />
      <Divider direction="vertical" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
      <Divider variant="double" />
    </>`

export const importStatement = `import { Divider } from "@illa-design/divider"`

export const packages = {"@illa-design/divider":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```
### 基础用法

添加一条横向分割线

```jsx
<Divider />
```

### 设置分割线方向

```jsx
<Divider />
<Divider direction="vertical" />
```

### 设置分割线样式

```jsx
<Divider />
<Divider direction="vertical" />
<Divider variant="dashed" />
<Divider variant="dotted" />
<Divider variant="double" />
```
