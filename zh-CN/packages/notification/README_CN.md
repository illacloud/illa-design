# Notification

The Notification component is used to notificate infomation to users.

## Installation

```bash
yarn add @illa-design/notification
```

## Import component

```jsx
import { Notification } from "@illa-design/notification"
```

## API

### Notification Basic Properties

| Props        | Desc                                       | Type         | Default                                           |
| ------------ | ------------------------------------------ | ------------ | ------------------------------------------------- |
| action       | Custom action area                         | ReactNode    | -                                                 |
| closable     | If true, the notification is closable      | boolean      | -                                                 |
| onClose      | Callback when close                        | (e) => void  | -                                                 |
| afterClose   | Callback when after close                  | () => void   | -                                                 |
| title        | Title of the notification                  | ReactNode    | -                                                 |
| content      | Content of the notification                | ReactNode    | -                                                 |
| icon         | Custom icon                                | ReactNode    | -                                                 |
| closeElement | Custom close button                        | ReactNode    | -                                                 |
| showIcon     | If true, show the icon of the notification | boolean      | true                                              |
| duration     | Auto close time in ms                      | number       | 3000                                              |
| position     | The position of the notification           | "topLeft" \ | "topRight" \| "bottomLeft" \| "bottomRight" | - |
| id           | The id of the notification                 | string       | -                                                 |

### Method

```jsx
Notification.info(config)

Notification.success(config)

Notification.warning(config)

Notification.error(config)

Notification.normal(config)

Notification.remove(id)

Notification.clear()
```

### Config Provider

`Notification.config(options)`

| Props         | Desc      | Type              | Default             |
| ------------- | --------- | ----------------- | ------------------- |
| maxCount      | 最大通知数量    | number            | -                   |
| getCountainer | 放置通知的容器   | () => HTMLElement | () => document.body |
| duration      | 通知自动关闭的时间 | number            | 3000                |

## Example

### Basic usage

```jsx
Notification.info({content:“ILLA Design”})
```

### Set the notification is closable

```jsx
Notification.info({
  title: "Closable",
  content: "Content",
  closable: true,
  onClose: handleClose,
  afterClose: handleAfterClose,
})
```

### Set the duration of the notification

```jsx
Notification.info({
  title: “New duration”,
  content: "Content",
  duration: 500,
})

```

### Set clearing the notification

```jsx
Notification.clear()
```
