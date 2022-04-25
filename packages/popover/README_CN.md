# 气泡卡片 Popover

气泡卡片是一个悬浮在触发器周围的一个弹窗。 经常被用于展示更多背景信息。

## 安装

```bash
yarn add @illa-design/popover
```

## 引用组件

```jsx
import { Popover } from "@illa-design/popover"
```

## 组件接口(API)

### Popover 基础属性

| 参数名              | 描述                                                    | 类型                                                                                                                                  | 默认值  |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| colorScheme         | 设置背景颜色                                            | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" \| string | "gray"  |
| title               | 气泡弹窗上的标题                                        | string                                                                                                                                | -       |
| content             | 气泡上展示的内容                                        | string \| ReactNode                                                                                                                   | -       |
| hasCloseIcon        | 设置是否有关闭 icon                                     | boolean                                                                                                                               | -       |
| trigger             | 出发方式                                                | "hover" \| "click" \| "focus"                                                                                                         | "hover" |
| position            | 气泡出现的位置，有 12 个可选方向                        | "top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br" \| "left" \| "lt" \| "lb" \| "right" \| "rt" \| "rb"                                | "top"   |
| showArrow           | 是否展示“箭头” “箭头”是个从气泡指向对应组件的等边三角形 | boolean                                                                                                                               | true    |
| closeDelay          | 消失/关闭时的延时，单位毫秒（ms）                       | number                                                                                                                                | 150     |
| openDelay           | 展现/打开时的延时，单位毫秒（ms）                       | number                                                                                                                                | 150     |
| autoFitPosition     | 设置气泡被遮挡时自动调整气泡位置                        | boolean                                                                                                                               | true    |
| closeOnClick        | 设置当点击被包含的组件时是否关闭气泡                    | boolean                                                                                                                               | true    |
| defaultPopupVisible | 默认的弹出框状态                                        | boolean                                                                                                                               | -       |
| popupVisible        | 弹出框是打开还是关闭状态                                | boolean                                                                                                                               | -       |
| disabled            | 是否禁用弹出                                            | boolean                                                                                                                               | -       |

### Popover 事件

| 参数名          | 描述                   | 类型                       | 默认值 |
| --------------- | ---------------------- | -------------------------- | ------ |
| onVisibleChange | 显示或隐藏时触发的回调 | (visible: boolean) => void | -      |

## 使用方法

### 基础用法

```jsx
<Popover title="This is title" content="Popover">
  <Button>Popover</Button>
</Popover>
```

### 设置气泡位置

通过 position 这个接口可以设置气泡的弹出位置。

```jsx
<Popover title="This is title" content="Popover" position="bottom">
  <Button>Popover</Button>
</Popover>
```

### 设置气泡背景颜色

通过 variant 这个接口可以调整组件的样式,通过 colorScheme 个接口可以调整组件的背景颜色。

```jsx
<Popover
  title="This is title"
  content="Popover"
  position="top"
  colorScheme="cyan"
>
  <Button>Popover</Button>
</Popover>
```

### 不展示箭头

通过 showArrow 接口可以设置是否展示气泡上的箭头。

```jsx
<Popover
  title="This is title"
  content="Popover"
  position="top"
  colorScheme="cyan"
  showArrow={false}
>
  <Button>Popover</Button>
</Popover>
```

### 展示关闭图标/按钮

```jsx
<Popover
  title="This is title"
  content="Popover"
  position="top"
  colorScheme="cyan"
  hasCloseIcon
>
  <Button>Popover</Button>
</Popover>
```

### 设置气泡默认展示状态

通过 defaultPopupVisible 设置气泡的默认展示状态。

```jsx
<Popover
  title="This is title"
  content="Popover"
  position="top"
  colorScheme="cyan"
  defaultPopupVisible
>
  <Button>Popover</Button>
</Popover>
```

### 设置气泡展示和关闭延时

通过 openDelay 和 closeDelay 这两个参数可以设置气泡展示和关闭的延时。

```jsx
<Popover
  title="This is title"
  content="Popover"
  position="top"
  colorScheme="cyan"
  openDelay={1000}
  closeDelay={1000}
>
  <Button>Popover</Button>
</Popover>
```
