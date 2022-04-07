# Message全局提示

由用户的操作触发的轻量级全局反馈。

## 安装

```bash
yarn add @illa-design/message
```

## 引用组件

```jsx
import { Message } from "@illa-dedign/message"
```

## 组件接口（API）

### Message基础属性

| Props    | Desc                                        | Type                 | Default |
| -------- | ------------------------------------------- | -------------------- | ------- |
| content  | 消息内容                                    | `ReactNode \| string` | `-`     |
| showIcon | 是否显示图标                                | `boolean`            | `true`  |
| icon     | 自定义图标                                  | `ReactNode`          | `-`     |
| duration | 自动关闭的时间，单位为ms                    | `number`             | `3000`  |
| onClose  | 关闭时的回调                                | `() => void `        | `-`     |
| id       | 当前消息的唯一标识，可以用来更新消息        | `string`             | `-`     |
| position | 消息的位置，分为 `top` 上方和 `bottom` 下方 | `"top" \| "bottom" `  | `-`     |
| closable | 是否显示关闭按钮                            | `boolean`            | `-`     |

### 使用方法

```jsx
Message.info(content: String) / Message.info(config: Object)
Message.success(content: String) / Message.success(config: Object)
Message.warning(content: String) / Message.warning(config: Object)
Message.error(content: String) / Message.error(config: Object)
Message.normal(content: String) / Message.normal(config: Object)
Message.loading(content: String) / Message.loading(config: Object)
Message.clear()
```

### 全局设置

```
Message.config(options)
```

| Props         | Desc               | Type                | Default               |
| ------------- | ------------------ | ------------------- | --------------------- |
| maxCount      | 最大通知数量       | `number`            | `-`                   |
| get Container | 放置通知的容器     | `() => HTMLElement` | `() => document.body` |
| duration      | 通知自动关闭的时间 | `number`            | `3000`                |

## 使用方法

### 基础用法

```jsx
Message.info({content:“ILLA Design”})
```

### 设置可关闭

```jsx
Message.info({
  content: "ILLA Message",
  closable: true,
  onClose: handleClose,
})
```

### 设置自动关闭时间

```jsx
Message.info({
  content: "ILLA Message",
  duration: 1500,
})
```

### 全局设置

```jsx
Message.config({
  maxCount: 1,
  duration: 0,
  getContainer: () => document.getElementById("container"),
})
```
