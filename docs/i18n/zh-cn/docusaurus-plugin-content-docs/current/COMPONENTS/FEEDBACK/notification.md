# Notification通知提醒框

全局展示通知提醒，将信息及时有效的传达给用户。

## 安装

```bash
yarn add @illa-design/notification
```

## 引用组件

```jsx
import { Notification } from "@illa-dedign/notification"
```

## 组件接口（API）

### Notification 基础属性

| Props        | Desc                                                         | Type                                                        | Default |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------------------- | ------- |
| action       | 自定义操作项                                                 | `ReactNode`                                                 | `-`     |
| closable     | 是否可关闭                                                   | `boolean`                                                   | `-`     |
| onClose      | 关闭的回调                                                   | `(e) => void`                                               | `-`     |
| afterClose   | 关闭                                                         | `() => void`                                                | `-`     |
| title        | 标题                                                         | `ReactNode`                                                 | `-`     |
| content      | 内容                                                         | `ReactNode`                                                 | `-`     |
| icon         | 可以指定自定义图标，`showIcon` 为 `true` 时生效。            | `ReactNode`                                                 | `-`     |
| closeElement | 自定义关闭按钮                                               | `ReactNode`                                                 | `-`     |
| showIcon     | 是否显示图标                                                 | `boolean`                                                   | `true`  |
| duration     | 自动关闭的时间，单位为 `ms`                                  | `number`                                                    | `3000`  |
| position     | 消息的位置，分为 `topLeft` 左上方、`topRight` 右上方、`bottomLeft` 左下方和 `bottomRight` 右下方 | `"topLeft" \| "topRight" \| "bottomLeft" \| "bottomRight" ` | `-`     |
| id           | 当前通知的唯一标识，可以用来更新消息                         | `string`                                                    | `-`     |

### 使用方法

```jsx
`Notification.info(config)`

`Notification.success(config)`

`Notification.warning(config)`

`Notification.error(config)`

`Notification.normal(config)`

`Notification.remove(id)`

`Notification.clear()`
```

### 全局设置

`Notification.config(options)`

| Props         | Desc               | Type                | Default               |
| ------------- | ------------------ | ------------------- | --------------------- |
| maxCount      | 最大通知数量       | `number `           | `-`                   |
| getCountainer | 放置通知的容器     | `() => HTMLElement` | `() => document.body` |
| duration      | 通知自动关闭的时间 | `number `           | `3000`                |

## 使用方法

### 基础用法

```jsx
Notification.info({content:“ILLA Design”})
```

### 设置通知可关闭

```jsx
Notification.info({
  title: "Closable",
  content: "Content",
  closable: true,
  onClose: handleClose,
  afterClose: handleAfterClose,
})
```

### 设置自动关闭时间

```jsx
Notification.info({
  title: “New duration”,
  content: "Content",
  duration: 500,
})

```

### 设置通知清除

```jsx
Notification.clear()
```
