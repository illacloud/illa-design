# 评论 Comment

用作展示评论信息。

## 安装

```bash
yarn add @illa-design/comment
```

## 引用组件

```jsx
import { Comment } from "@illa-design/comment"
```

## 组件接口（API）

### Comment 基础属性

| Props    | Desc                               | Type                                                         | Default |
| -------- | ---------------------------------- | ------------------------------------------------------------ | ------- |
| actions  | 在评论内容下面呈现的操作项列表     | ReactNode                                                    | -       |
| author   | 要显示为注释作者的元素             | ReactNode                                                    | -       |
| avatar   | 要显示为评论头像的元素             | ReactNode                                                    | -       |
| children | 嵌套注释应作为注释的子项提供       | ReactNode                                                    | -       |
| content  | 评论内容                           | ReactNode                                                    | -       |
| datetime | 展示时间                           | ReactNode                                                    | -       |
| align    | 靠左/靠右 展示 datetime 和 actions | "left" \| "right" \| {datetime?: "left" \| "right";actions?: "left" \| "right";} | -       |

## 使用方法

### 基础用法

```jsx
<Comment placeholder={"comment"} />
```

### 设置对齐

```jsx
<Comment
  placeholder={"comment"}
  actions={<span>like</span>}
  align={"right"}
/>
```

### 设置显示作者

```jsx
<Comment
  author={<span>ILLA</span>}
  placeholder={"comment"}
/>
```
