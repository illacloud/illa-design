# Result 结果页

用于反馈一系列操作任务的处理结果。

## 安装

```bash
yarn add @illa-design/result
```

## 引用组件

```jsx
import { Result } from "@illa-design/result"
```

## 组件接口（API）

### Result 基础属性

| Props    | Desc                       | Type                                                         | Default   |
| -------- | -------------------------- | ------------------------------------------------------------ | --------- |
| extra    | 操作区                     | `ReactNode`                                                   | `-`       |
| icon     | 自定义 icon                | `ReactNode`                                                    | `-`       |
| status   | 结果的状态，决定图标和颜色 | `"success" \| "error" \| "info" \| "warning" \| "404" \| "403" \| "500"` | `"error"` |
| subTitle | 副标题文字                 | `ReactNode`                                                    | `-`       |
| title    | 标题文字                  | `ReactNode`                                                    | `-`       |

## 使用方法

### 基础用法

```jsx
<Result />
```

### 设置自定义图标

```jsx
<Result icon={<LoadingIcon />}></Result>
```

### 设置标题和副标题

```jsx
<Result
  title={"this is title"}
  subTitle={"this is subTitle"}></Result>
```
