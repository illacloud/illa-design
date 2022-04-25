# 骨架图

骨架图通常被用于展示一些内容的加载状态。

## 安装

```bash
yarn add @illa-design/skeleton
```

## 引用组件

```jsx
import { Skeleton } from "@illa-dedign/skeleton"
```

## 组件接口(API)

### Skeleton 基础属性

| 参数名    | 描述                                 | 类型                          | 默认值 |
| :-------- | :----------------------------------- | :---------------------------- | :----- |
| animation | 是否显示动画效果                     | boolean                       | -      |
| visible   | 是否显示组件。为 true 时候显示占位符 | boolean                       | true   |
| image     | 是否显示图片占位                     | SkeletonImageProps \| boolean | -      |
| text      | 是否显示文本占位                     | SkeletonTextProps \| boolean  | true   |

### SkeletonImageProps 

| 参数名 | 描述                 | 类型                                     | 默认值   |
| ------ | :------------------- | :--------------------------------------- | -------- |
| shape  | 指定头像的形状       | "circle" \| "square"                     | "circle" |
| size   | 设置头像占位图的大小 | number \| "large" \| "small" \| "medium" | "medium" |

### SkeletonTextProps

| 参数名 | 描述                                                         | 类型                                        | 默认值 |
| ------ | :----------------------------------------------------------- | :------------------------------------------ | ------ |
| rows   | 设置段落占位图的行数                                         | number                                      | 3      |
| width  | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | number \| string \| Array<number \| string> | 0.8    |

## 使用方法

### 基础用法

```jsx
<Skeleton />
```

### 设置文本骨架图的行数

```jsx
<Skeleton text={{ rows: 10 }} />
```

### 设置文本骨架图最后一行宽度

```jsx
<Skeleton text={{ rows: 5, width: "60%" }} />
```

### 设置文本骨架图每一行的宽度

```jsx
<Skeleton text={{ rows: 5, width: ["20%", "40%", "60%", 200, 400] }} />
```

### 带图片骨架图

```jsx
<Skeleton image />
```

### 设置圆形图片骨架图

```jsx
<Skeleton image={{ shape: "square" }} />
```

### 带动效骨架图

```jsx
<Skeleton image animation />
```
