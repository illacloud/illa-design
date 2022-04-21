# 按钮

按钮组件通常被用来触发一个行为或者事件，例如提交一个表格， 删除一个行数据等.

## 安装

```bash
yarn add @illa-design/button
```

## 引用组件

```jsx
import { Button } from "@illa-design/button"
```

## 组件接口(API)

### Button 基础属性

| 参数名      | 描述                         | 类型                                                         | 默认值   |
| ----------- | ---------------------------- | ------------------------------------------------------------ | -------- |
| colorScheme | 设置背景颜色                 | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue"  \| "cyan" \| "purple"` | `blue `  |
| size        | 设置尺寸大小                 | `"small" \| "medium" \| "large"     `                          | `small`  |
| variant     | 设置按钮样式                 | `"fill" \| "dashed" \| "outline" \| "text"   `                 | `fill`   |
| shape       | 设置按钮形状                 | `"square" \| "round"  `                                        | `square` |
| fullWidth   | 按钮的宽度是否随容器自适应。 | `boolean                  `                                    | `- `       |
| loading     | 设置按钮是否为加载中状态     |` boolean  `                                                    | `- `       |
| loadingText | 设置按钮加载中时的提示文案   | `string       `                                                | `- `       |
| disabled    | 设置按钮是否被禁用           | `boolean  `                                                    | `- `       |
| leftIcon  | 设置左侧图标 |` ReactNode` |` -`      |
| rightIcon | 设置右侧图标 | `ReactNode` |` -  `    |

### Button 事件

| 参数名  | 描述           | 类型               | 默认值 |
| ------- | -------------- | ------------------ | ------ |
| onClick | 点击按钮的回调 | `(e: Event) => void` | `-  `    |

ButtonGroup 可以使多个Button组合起来，除了可以统一设置多个Button的基础属性外还可以设置Button之间的间隙以及是否挨在一起

### ButtonGroup 基础属性

| 参数名   | 描述               | 类型             | 默认值 |
| -------- | ------------------ | ---------------- | ------ |
| spacing  | 设置按钮之间的间隙 | `number \| string` | `8px`  |
| attached | 设置按钮挨在一起   |` boolean  `        |` -`      |

## 使用方法

### 基础用法

```jsx
<Button>Hello</Button>
```

### 设置按钮大小

通过size这个接口可以调整组件的大小

```jsx
<Button>Hello</Button>
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### 设置按钮样式和颜色

通过variant这个接口可以调整组件的样式,通过colorScheme个接口可以调整组件的背景颜色

```jsx
<Button>Hello</Button>
<Button variant="outline" colorScheme="cyan">Hello</Button>
```

### 设置按钮icon

通过leftIcon 和 rightIcon 这两个接口可以分别设置按钮左侧的icon和右侧的icon

```jsx
<Button>Hello</Button>
<Button variant="fill" colorScheme="red" leftIcon={<BsArrowLeft />} rightIcon={<BsArrowRight />}>Hello</Button>
```

### 设置按钮禁用状态和加载状态

通过disabled和loading这两个接口可以分别设置按钮组件的禁用状态和加载状态

```jsx
<Button>Hello</Button>
<Button disabled>Hello</Button>
<Button loading loadingText="Loading">Hello</Button>
```

### 设置多个按钮样式和间隙

通过ButtonGroup这组件可以统一设置多个按钮组件的样式以及间隙

```jsx
<ButtonGroup variant="outline" spacing="5px">
  <Button>Hello</Button>
  <Button disabled>Hello</Button>
  <Button loading loadingText="Loading">Hello</Button>
</ButtonGroup>
<ButtonGroup variant="outline" attached>
  <Button leftIcon={<BsArrowLeft />} />
  <Button>Hello</Button>
  <Button rightIcon={<BsArrowRight />} />
</ButtonGroup>
```

