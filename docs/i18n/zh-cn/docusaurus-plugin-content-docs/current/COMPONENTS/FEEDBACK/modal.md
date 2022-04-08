# Modal对话框

在当前页面打开一个浮层，承载相关操作。

## 安装

```bash
yarn add @illa-design/modal
```

## 引用组件

```jsx
import { Modal } from "@illa-design/modal"
```

## 组件接口（API）

### Modal基础属性

| Props             | Desc                                                        | Type            | Default                                   |
| ----------------- | ----------------------------------------------------------- | --------------- | ----------------------------------------- |
| visible           | 对话框是否可见                                              | `boolean`       | `-`                                       |
| getPopupContainer | 指定弹出框挂载的父节点                                      | `() => Element` | `() => document.body`                     |
| mask              | 是否显示遮罩层                                              | `boolean`       | `true`                                    |
| title             | 标题                                                        | `string`        | `-`                                       |
| alignCenter       | 对话框是否居中显示                                          | `boolean`       | `true`                                    |
| maskClosable      | 是否点击遮罩层可以关闭对话框                                | `boolean`       | `true`                                    |
| hideCancel        | 是否隐藏取消按钮                                            | `boolean`       | `false`                                   |
| simple            | 是否开启简单模式                                            | `boolean`       | `(props: any) => { return props.notice;}` |
| closable          | 是否显示关闭按钮                                            | `boolean`       | `true`                                    |
| okText            | 确认按钮的内容                                              | `string`        | `-`                                       |
| cancelText        | 取消按钮的内容                                              | `string`        | `-`                                       |
| confirmLoading    | 确认按钮是否为加载中状态                                    | `boolean`       | `false`                                   |
| okButtonProps     | 确认按钮的Props                                             | `ButtonProps`   | `-`                                       |
| cancelButtonProps | 取消按钮的Props                                             | `ButtonProps`   | `-`                                       |
| footer            | 是否展示页脚部分                                            | `boolean`       | `true`                                    |
| focusLock         | 是否将焦点锁定在弹出框内                                    | `boolean`       | `true`                                    |
| autoFocus         | 是否默认聚焦第一个可聚焦元素，只在 `focusLock` 开启时生效。 | `boolean`       | `true`                                    |

### Modal事件

| Props      | Desc               | Type                                      | Default |
| ---------- | ------------------ | ----------------------------------------- | ------- |
| onCancel   | 关闭弹出框的回调   | `() => void`                              | `-`     |
| onOk       | 点击确认按钮的回调 | `(e?: MouseEvent) => Promise<any> \| void` | `-`     |
| afterOpen  | 弹框打开之后的回调 | `() => void`                              | `-`     |
| afterClose | 弹框关闭之后的回调 | `() => void`                              | `-`     |

## 使用方法

### 基础用法

```jsx
<Modal visible={true} title={"Modal Title"} />
```

### 设置对话框居中

```jsx
<Modal alignCenter={true} title={"Modal Title"} />
```

### 设置确认按钮的内容

```jsx
<Modal okText={"confirm"} title={"Modal Title"} />
```

### 设置显示关闭按钮

```jsx
<Modal closable={true} title={"Modal Title"} />
```
