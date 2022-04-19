# Empty空状态

空状态时展示的内容。

## 安装

```bash
yarn add @illa-design/empty
```

## 引用组件

```jsx
import { Empty } from "@illa-design/empty"
```

## 组件接口（API）

### Empty 基础属性

| Props       | Desc           | Type        | Default |
| ----------- | -------------- | ----------- | ------- |
| description | 展示文案       | `ReactNode` | `-`     |
| icon        | 设置图标       | `ReactNode` | `-`     |
| imgSrc      | 设置展示的图片 | `string`    | `-`     |

## 使用方法

### 基础用法

```jsx
<Empty />
```

### 设置展示文案

```jsx
<Empty description={"test description"} />
```
