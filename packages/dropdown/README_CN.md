# 下拉菜单

页面上的命令过多时，可将备选命令收纳到展开的浮层容器中。

## 安装

```bash
yarn add @illa-design/dropdown
```

## 引用组件

```jsx
import { Dropdown } from "@illa-dedign/dropdown"
```

## 组件接口(API)

### Dropdown 基础属性

| 参数名              | 描述                           | 类型                                                | 默认值  |
| ------------------- | ------------------------------ | --------------------------------------------------- | ------- |
| droplist            | 下拉框的内容                   | `ReactNode`                                         | `-`     |
| position            | 下拉框的弹出位置               | `"top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br"` | `bl`    |
| trigger             | 触发下拉框弹出的方式           | `array<"hover" \| "click" > `                        | `hover` |
| disabled            | 是否禁用弹出                   | `boolean`                                           | `-`     |
| defaultPopupVisible | 控制下拉框是否默认打开         | `boolean`                                           | `-`     |
| popupVisible        | 控制下拉框是否打开（受控模式） | `boolean`                                           | `-`     |
| triggerProps        | 配置弹出框额外属性             | `TriggerProps`                                      | `-`     |

### Dropdown 事件

| 参数名          | 描述                    | 类型                         | 默认值 |
| --------------- | :---------------------- | ---------------------------- | ------ |
| onVisibleChange | 弹出框打开/关闭时会触发 | `(visible: boolean) => void` | `-`    |

### 使用方法

### 基础用法

```jsx
const dropList = (
  <Menu>
    <Item title={"Blog"} key={"1"} disabled />
    <Item title={"Tutorial"} key={"2"} />
    <Item title={"Docs"} key={"3"} />
    <Item title={"Community"} key={"4"} />
    <Item title={"Github"} key={"5"} />
  </Menu>
)
<Dropdown droplist={dropList}>
  <Button>Hover me</Button>
</Dropdown>
```

### 设置下拉菜单的弹出位置

通过position接口可以设置步骤的描述

```jsx
const dropList = (
  <Menu>
    <Item title={"Blog"} key={"1"} disabled />
    <Item title={"Tutorial"} key={"2"} />
    <Item title={"Docs"} key={"3"} />
    <Item title={"Community"} key={"4"} />
    <Item title={"Github"} key={"5"} />
  </Menu>
)
<Dropdown droplist={dropList} position="bl">
  <Button>Hover me</Button>
</Dropdown>
```
