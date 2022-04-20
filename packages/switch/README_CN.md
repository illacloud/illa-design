# 开关

用于互斥性选择场景，可以切换两种不同的状态

## 安装

```bash
yarn add @illa-design/switch
```

## 引用组件

```jsx
import { Switch } from "@illa-design/switch"
```

## 组件接口(API)

### Switch 基础属性

| 参数名         | 描述                           | 类型                                                         | 默认值   |
| -------------- | ------------------------------ | ------------------------------------------------------------ | -------- |
| colorScheme    | 设置背景颜色                   | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue"  \| "cyan" \| "purple" \| string` | `Blue`   |
| disabled       | 是否禁用                       | `boolean`                                                    | `-`      |
| size           | 开关的尺寸                     | ` "medium" \| "large"`                                       | `medium` |
| checkedText    | 开关打开时的文案               | `string \| ReacNode`                                         | `-`          |
| uncheckedText  | 开关关闭时的文案               | `string \| ReacNode`                                         | `-`          |
| uncheckedIcon  | 开关关闭时，按钮上显示的图标。 | `ReactNode`                                                  | `-`      |
| checkedIcon    | 开关打开时，按钮上显示的图标   | `ReactNode`                                                  | `-`      |
| defaultChecked | 配置开关默认状态是开的状态     | `boolean`                                                    | `-`      |
| checked        | 配置开关是否打开(受控)         | `boolean`                                                    | `-`      |

### Switch 事件

| 参数名   | 描述                 | 类型                                          | 默认值 |
| -------- | -------------------- | --------------------------------------------- | ------ |
| onChange | 状态变化时触发的回调 | `(value: boolean, event: MouseEvent) => void` | `-`    |



## 使用方法

### 基础用法

```jsx
<Switch />
```

### 设置颜色和大小

通过colorScheme和size接口可以分别更改开关的颜色和大小

```jsx
<Switch colorScheme="cyan" size="large" />
```

### 设置开关文案

通过checkedText和uncheckedText接口可以分别更改开和关状态下的文案

```jsx
<Switch colorScheme="cyan" size="large" checkedText="开" uncheckedText="关" />
```

### 设置默认打开状态

通过defaultChecked接口可以设置默认打开状态

```jsx
<Switch defaultChecked />
```
