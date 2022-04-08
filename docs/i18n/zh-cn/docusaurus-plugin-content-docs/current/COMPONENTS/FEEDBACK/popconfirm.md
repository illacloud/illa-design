# Popconfirm气泡确认框

气泡式的确认框。

## 安装

```bash
yarn add @illa-design/popconfirm
```

## 引用组件

```jsx
import { Popconfirm } from "@illa-design/popconfirm"
```

## 组件接口（API）

### Popconfirm基础属性

| Props               | Desc                         | Type                                                         | Default  |
| ------------------- | ---------------------------- | ------------------------------------------------------------ | -------- |
| position            | 弹出框的方位                 | `"top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br" \| "left" \| "lt" \| "lb" \| "right" \| "rt"\| "rb" ` | `"top"`  |
| title               | 标题                         | `ReactNode`                                                  | `-`      |
| cancelText          | 取消按钮文字                 | `string`                                                     | `-`      |
| okText              | 确认按钮文字                 | `string`                                                     | `-`      |
| okButtonProps       | 确定按钮的参数               | `ButtonProps `                                               | `-`      |
| cancelButtonProps   | 取消按钮的参数               | `ButtonProps `                                               | `-`      |
| defaultPopupVisible | 默认弹出框是打开还是关闭     | `Boolean `                                                   | `-`      |
| popupVisible        | 弹出框是打开还是关闭。(受控) | `Boolean `                                                   | `-`      |
| icon                | 标题前的图标                 | `Boolean `                                                   | `-`      |
| trigger             | 触发方式                     | `TriggerProps `                                              | `-`      |
| okColorScheme       | 确定按钮的颜色               | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" ` | `"blue"` |
| cancelColorScheme   | 取消按钮的颜色               | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" ` | `"gray"` |
| clickOutsideToClose | 点击外部关闭                 | `Boolean `                                                   | `-`      |
| showArrow           | 展示气泡小箭头               | `Boolean `                                                   | `-`      |
| closeDelay          | 延迟关闭                     | `number `                                                    | `-`      |
| openDelay           | 延迟打开                     | `number `                                                    | `-`      |
| autoFitPosition     | 自动适应气泡位置             | `Boolean `                                                   | `-`      |
| closeOnClick        | 点击可关闭                   | `Boolean `                                                   | `-`      |
| autoAlignPopupWidth | 自动对齐气泡宽度             | `Boolean `                                                   | `-`      |

### Popconfirm 事件

| Props           | Desc                     | Type                         | Default |
| --------------- | ------------------------ | ---------------------------- | ------- |
| onOK            | 点击确认按钮的回调       | `() => void`                 | `-`     |
| onCancel        | 点击取消按钮的回调       | `() => void`                 | `-`     |
| onVisibleChange | 弹出打开和关闭触发的回调 | `(visible: boolean) => void` | `-`     |

## 使用方法

### 基础用法

```jsx
<Popconfirm title="Visible" closeDelay={0} openDelay={0} position={"bl"}>
  <Button>Click</Button>
</Popconfirm>
```

### 设置按钮文字和弹出方位

```jsx
<Popconfirm
  title="Visible"
  position={"bl"}
  okText={"ok-test"}
  cancelText={"cancel-text"}
>
  <Button>Click</Button>
</Popconfirm>
```

### 设置自定义图标

```jsx
<Popconfirm title="Visible" position={"bl"} icon={<SearchIcon />}>
    <Button>Click</Button>
</Popconfirm>
```
