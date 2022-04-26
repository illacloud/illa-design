# 时间选择器 Timepicker

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 安装

```bash
yarn add @illa-design/timepicker
```

## 引用组件

```jsx
import { Timepicker, RangePicker } from "@illa-design/timepicker"
```

## 组件接口（API）

### picker 基础属性

| Props             | Desc                                                         | Type                                                | Default  |
| ----------------- | ------------------------------------------------------------ | --------------------------------------------------- | -------- |
| disabled          | 是否禁用                                                     | boolean                                             | -        |
| error             | 报错样式                                                     | boolean                                             | -        |
| allowClear        | 允许清除                                                     | boolean                                             | true     |
| disableConfirm    | 禁用确认步骤，开启后直接点选时间不需要点击确认按钮。         | boolean                                             | -        |
| position          | 弹出的框的位置                                               | 'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'   | bl       |
| getPopupContainer | 弹出框挂载的父节点                                           | (node: HTMLElement) => Element                      | -        |
| placeholder       | 提示文案                                                     | string \| string[]                                  | -        |
| format            | 展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs) | string                                              | HH:mm:ss |
| use12Hours        | 12 小时制                                                    | boolean                                             | -        |
| onClear           | 点击清除按钮的回调                                           | () => void                                          | -        |
| popupVisible      | 控制弹出框打开或者关闭                                       | boolean                                             | -        |
| triggerProps      | 可以传入 Trigger 组件的参数                                  | `<TriggerProps>`                                    | -        |
| step              | 设置 时 / 分 / 秒 的选择间隔                                 | { hour?: number; minute?: number; second?: number } | -        |
| disabledHours     | 禁用的部分小时选项                                           | () => number[]                                      | -        |

### timePicker 基础属性

| Props        | Desc                       | Type                                        | Default |
| ------------ | -------------------------- | ------------------------------------------- | ------- |
| onSelect     | 组件值发生改变时的回调     | (valueString: string, value: Dayjs) => void | -       |
| onChange     | 选择时间时的回调           | (valueString: string, value: Dayjs) => void | -       |
| defaultValue | 默认时间                   | CalendarValue                               | -       |
| value        | 组件的值，受控模式         | CalendarValue                               | -       |
| showNowBtn   | 是否显示选择当前时间的按钮 | boolean                                     | true    |

### rangePicker 基础属性

| Props        | Desc                       | Type                                            | Default |
| ------------ | -------------------------- | ----------------------------------------------- | ------- |
| onChange     | 日历组件值发生改变时的回调 | (valueString: string[], value: Dayjs[]) => void | -       |
| onSelect     | 选择日期时的回调           | (valueString: string[], value: Dayjs[]) => void | -       |
| defaultValue | 默认时间                   | CalendarValue[]                                 | -       |
| value        | 日历组件的值               | CalendarValue[]                                 | -       |
| placeholder  | 提示文案                   | string[]                                        | -       |
| order        | 起止时间是否自动排序       | boolean                                         | true    |

## 使用方法

### 基础用法

```jsx
<TimePicker placeholder={"test"} />
```

### 设置禁用状态

```jsx
<TimePicker placeholder={"disabled"} disabled />
```

### 设置大小为大

```jsx
<TimePicker placeholder="large" size="large" />
```
