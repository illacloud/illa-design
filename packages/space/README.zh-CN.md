# 间距

用于设置组件之间的间距和排列方式.

## 安装

```bash
yarn add @illa-design/space
```

## 引用组件

```jsx
import { Space } from "@illa-dedign/space"
```

## 组件接口(API)

### Space 基础属性

| 参数名    | 描述         | 类型                                               | 默认值       |
| --------- | ------------ | -------------------------------------------------- | ------------ |
| size      | 间距大小     | `"mini" \| "small" \| "medium" \| "large" \| string`         | `small`        |
| align     | 组件对齐方式 | `"start" \| "center" \| "end" \| "baseline"` | `center`     |
| direction | 组件排列方向 |  `"vertical" \| "horizontal"`                | `horizontal` |
| divider   | 添加分割符   | `boolean`                                          | `-`        |
| wrap      | 自动换行     | `boolean`                                          | `-`        |

## 使用方法

### 基础用法

```jsx
<Space />
```

### 设置间隙大小

```jsx
<Space size="large"/>
```

### 设置组件对齐方式

通过align这个接口可以调整space中组件对齐方式

```jsx
<Space alige="start">
	<Tag>Hello</Tag>
	<Tag size="small">Small</Tag>
	<Tag size="medium">Medium</Tag>
	<Tag size="large">Large</Tag>
</Space>
```

### 设置组件排列方向

通过direction这个接口可以设置space中组件的排列方向

```jsx
<Space direction="vertical">
	<Tag>Hello</Tag>
	<Tag size="small">Small</Tag>
	<Tag size="medium">Medium</Tag>
	<Tag size="large">Large</Tag>
</Space>
```

### 添加分隔符

通过divider这个接口在组件间隙中添加分隔符

```jsx
<Space divider>
	<Tag>Hello</Tag>
	<Tag size="small">Small</Tag>
	<Tag size="medium">Medium</Tag>
	<Tag size="large">Large</Tag>
</Space>
```

### 设置组件自动换行

通过wrap这个接口可以space中的组件自动换行

```jsx
<Space wrap>
	<Tag>Hello</Tag>
	<Tag size="small">Small</Tag>
	<Tag size="medium">Medium</Tag>
	<Tag size="large">Large</Tag>
</Space>
```
