# 加载中 Spin

用于页面和区块的加载中状态。

## 安装

```bash
yarn add @illa-design/spin
```

## 引用组件

```jsx
import { Spin } from "@illa-design/spin"
```

## 组件接口（API）

### Spin 基础属性

| Props   | Desc                                                         | Type                           | Default |
| ------- | ------------------------------------------------------------ | ------------------------------ | ------- |
| loading | 是否为加载状态                                               | boolean                        | -       |
| size    | 加载动画的尺寸                                               | "small" \| "medium" \| "large" | -       |
| icon    | 自定义图标，会自动旋转。                                     | ReactNode                      | -       |
| element | 自定义元素，非图标，不附带旋转效果。可用于设置为 gif 图片等。 | ReactNode                      | -       |
| tip     | 加载的文案                                                   | string \| ReactNode            | -       |
| dot     | 是否使用点类型的动画                                         | boolean                        | -       |

## 使用方法

### 基础用法

```jsx
<Spin placeholder={"spin"} />
```

### 设置大尺寸

```jsx
<Spin size={"large"} placeholder={"spin"} />
```
