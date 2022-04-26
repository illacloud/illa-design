# 进度条 Progress

给予用户当前系统执行中任务运行状态的反馈。

## 安装

```bash
yarn add @illa-design/progress
```

## 引用组件

```jsx
import { Progress } from "@illa-design/progress"
```

## 组件接口（API）

### Progress 基础属性

| Props       | Desc                                                                | Type                                                                                                                        | Default |
| ----------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| type        | 进度条类型                                                          | "line" \| "circle" \| "miniCircle" \| "miniRing"                                                                            | "line"  |
| steps       | 显示进度条步骤数                                                    | number                                                                                                                      | -       |
| animation   | 动画效果，仅在 `type=line` 时可用                                   | boolean                                                                                                                     | -       |
| status      | 进度条状态                                                          | "normal" \| "success" \| "error"                                                                                            | -       |
| colorScheme | 进度条颜色，优先级高于 `status`。传入对象时，会显示渐变色进度条。   | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" | -       |
| trailColor  | 路径颜色                                                            | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" | -       |
| showText    | 是否展示文本                                                        | boolean                                                                                                                     | true    |
| formatText  | 进度条文本函数                                                      | (percent: number) => ReactNode                                                                                              | -       |
| percent     | 进度条的百分比                                                      | number                                                                                                                      | -       |
| strokeWidth | 进度条线的宽度                                                      | number                                                                                                                      | -       |
| width       | 进度条的宽度。`circle` 类型的进度条仅支持数字类型的`width`          | string\| number                                                                                                             | -       |
| buffer      | 加载中的进度条是否显示缓冲区。仅对 type=line 且加载中的进度条有效。 | boolean                                                                                                                     | -       |
| bufferColor | 缓冲区的颜色                                                        | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" | -       |

## 使用方法

### 基础用法

```jsx
<Progress percent={50} />
```

### 设置进度条颜色

```jsx
<Progress type="circle" color="red" trailColor="red" />
```

### 设置进度条状态

```jsx
<Progress status="success" type="circle" />
```

### 设置自定义宽度

```jsx
<Progress percent={50} width="100px" type="circle" strokeWidth="10px" />
```

### 设置进度条步骤数

```jsx
<Progress steps={3} type="circle" />
```
