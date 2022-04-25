# 触发器 Trigger

所有弹出框组件的基础组件， 能够交互式的展示更多信息。当鼠标悬停，聚焦，点击某个组件时，出现提示弹窗或气泡

## 安装

```bash
yarn add @illa-design/trigger
```

## 引用组件

```jsx
import { Trigger } from "@illa-design/trigger"
```

## 组件接口(API)

### Trigger 基础属性

| 参数名              | 描述                                                    | 类型                                                         | 默认值  |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------ | ------- |
| colorScheme         | 设置背景颜色                                            | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue"  \| "cyan" \| "purple" \| string | "gray"  |
| content             | 气泡上展示的内容                                        | string \| ReactNode                                          | -       |
| trigger             | 出发方式                                                | "hover" \| "click" \| "focus"                                | "hover" |
| position            | 气泡出现的位置，有12个可选方向                          | "top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br" \| "left" \| "lt" \| "lb" \| "right" \| "rt" \| "rb" | "top"   |
| showArrow           | 是否展示“箭头” “箭头”是个从气泡指向对应组件的等边三角形 | boolean                                                      | true    |
| closeDelay          | 消失/关闭时的延时，单位毫秒（ms）                       | number                                                       | 150     |
| openDelay           | 展现/打开时的延时，单位毫秒（ms）                       | number                                                       | 150     |
| autoFitPosition     | 设置气泡被遮挡时自动调整气泡位置                        | boolean                                                      | true    |
| autoAlignPopupWidth | 是否根据触发组件的宽度自动调整弹窗的宽度                | boolean                                                      | -       |
| closeOnClick        | 设置当点击被包含的组件时是否关闭气泡                    | boolean                                                      | true    |
| clickOutsideToClose | 设置当点击被包含的组件以及气泡外面时是否关闭气泡        | boolean                                                      | -       |
| defaultPopupVisible | 默认的弹出框状态                                        | boolean                                                      | -       |
| popupVisible        | 弹出框是打开还是关闭状态                                | boolean                                                      | -       |
| disabled            | 是否禁用弹出                                            | boolean                                                      | -       |
| withoutPadding      | 是否没有填充色                                          | boolean                                                      | -       |


### Trigger 事件

| 参数名          | 描述                   | 类型                       | 默认值 |
| --------------- | ---------------------- | -------------------------- | ------ |
| onVisibleChange | 显示或隐藏时触发的回调 | (visible: boolean) => void | -      |



## 使用方法

### 基础用法

```jsx
<Trigger content="Trigger">
  <Button>Trigger</Button>
</Trigger>
```

### 设置气泡位置

通过position这个接口可以设置气泡的弹出位置

```jsx
<Trigger content="Trigger" position="bottom">
  <Button>Trigger</Button>
</Trigger>
```

### 设置气泡背景颜色

通过variant这个接口可以调整组件的样式,通过colorScheme个接口可以调整组件的背景颜色

```jsx
<Trigger content="Trigger" position="top" colorScheme="cyan">
  <Button>Trigger</Button>
</Trigger>
```

### 不展示箭头

通过showArrow接口可以设置是否展示气泡上的箭头

```jsx
<Trigger content="Trigger" position="top" colorScheme="cyan" showArrow={false}>
  <Button>Trigger</Button>
</Trigger>
```

### 设置气泡默认展示状态

通过defaultPopupVisible设置气泡的默认展示状态

```jsx
<Trigger content="Trigger" position="top" colorScheme="cyan" defaultPopupVisible>
  <Button>Trigger</Button>
</Trigger>
```

### 设置气泡展示和关闭延时

通过openDelay和closeDelay这两个参数可以设置气泡展示和关闭的延时

```jsx
<Trigger content="Trigger" position="top" colorScheme="cyan" openDelay={1000} closeDelay={1000}>
  <Button>Trigger</Button>
</Trigger>
```
