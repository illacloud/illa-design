# 日期选择器 Datepicker

选择日期。支持年、月、周、日类型，支持范围选择等。

## 安装

```bash
yarn add @illa-design/datepicker
```

## 引用组件

```jsx
import { Datepicker } from "@illa-dedign/datepicker"
```

## 组件接口（API）

### Datepicker 基础属性

| Props                  | Desc                                                  | Type                                              | Default  |
| ---------------------- | ----------------------------------------------------- | ------------------------------------------------- | -------- |
| disabled               | 是否禁用                                              | boolean \| boolean[]                              | -        |
| allowClear             | 允许清除                                              | boolean                                           | true     |
| position               | 弹出的框的位置                                        | "top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br" | -        |
| placeholder            | 提示文案                                              | string \| string[]                                | -        |
| shortcuts              | 预设时间范围快捷选择                                  | ShortcutType[]                                    | -        |
| shortcutsPlacementLeft | 预设范围选择放在面板左侧，用于大量预设时间的场景。    | boolean                                           | -        |
| error                  | 是否为报错状态                                        | boolean                                           | -        |
| size                   | 日期选择器的尺寸                                      | "small" \| "medium" \| "large"                    | "medium" |
| popupVisible           | 指定弹框打开或者关闭状态。                            | boolean                                           | -        |
| onVisibleChange        | 打开或关闭时的回调                                    | (visible?: boolean) => void                       | -        |
| onChange               | 日历组件值发生改变时的回调                            | (dateString: string, date: Dayjs) => void         | -        |
| onSelect               | 选中日期发生改变但组件值未改变时的回调                | (dateString: string, date: Dayjs) => void         | -        |
| onClear                | 点击清除按钮后的回调                                  | () => void                                        | -        |
| editable               | 是否可输入。                                          | boolean                                           | true     |
| onSelectShortcut       | 点击快捷选择时的回调。                                | (shortcut: ShortcutType) => void                  | -        |
| locale                 | 国际化配置                                            | Record<string, any>                               | -        |
| separator              | 范围选择器输入框内的分割符号                          | ReactNode                                         | -        |
| disabledDate           | 不可选取的日期                                        | (current?: Dayjs) => boolean                      | -        |
| onOk                   | 点击确认按钮的回调                                    | (dateString: string, date: Dayjs) => void         | -        |
| defaultPickerValue     | 默认面板显示的日期                                    | CalendarValue                                     | -        |
| utcOffset              | 设置时区偏移，如果需要 utc 时间则设置为 0。           | number                                            | -        |
| timezone               | 设置时区, 如果设置了 utcOffset，则以 utcOffset 为准。 | string                                            | -        |

### DatePicker 基础属性

type CalendarValue = number | string | Date | Dayjs

| Props           | Desc                                                         | Type                                   | Default      |
| --------------- | ------------------------------------------------------------ | -------------------------------------- | ------------ |
| format          | 展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs) | string \| ((value: Dayjs) => string)   | "YYYY-MM-DD" |
| defaultValue    | 默认日期                                                     | CalendarValue                          | -            |
| value           | 日历组件的值                                                 | CalendarValue                          | -            |
| showTime        | 是否增加时间选择                                             | boolean \| TimePickerProps             | -            |
| timepickerProps | 时间显示的参数，参考 Timepicker，作用同 showTime。           | TimePickerProps                        | -            |
| showNowBtn      | 是否显示 showTime 时，选择当前时间的按钮。                   | boolean                                | true         |
| disabledTime    | 不可选取的时间                                               | (current?: Dayjs) => DisabledTimeProps | -            |

### MonthPicker 基础属性

| Props        | Desc                                                         | Type          | Default   |
| ------------ | ------------------------------------------------------------ | ------------- | --------- |
| format       | 展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs) | string        | "YYYY-MM" |
| defaultValue | 默认日期                                                     | CalendarValue | -         |
| value        | 日历组件的值                                                 | CalendarValue | -         |

### YearPicker 基础属性

| Props        | Desc                                                         | Type          | Default |
| ------------ | ------------------------------------------------------------ | ------------- | ------- |
| format       | 展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs) | string        | "YYYY"  |
| defaultValue | 默认日期                                                     | CalendarValue | -       |
| value        | 日历组件的值                                                 | CalendarValue | -       |

### RangePicker 基础属性

| Props              | Desc                                                                  | Type                                                          | Default      |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------- | ------------ |
| disabled           | 是否禁用                                                              | boolean \| boolean[]                                          | -            |
| format             | 展示日期的格式，参考[dayjs](https://github.com/iamkun/dayjs)          | string                                                        | "YYYY-MM-DD" |
| onChange           | 日历组件值发生改变时的回调                                            | (dateString: string[], date: Dayjs[]) => void                 | -            |
| defaultValue       | 默认日期                                                              | CalendarValue[]                                               | -            |
| value              | 日历组件的值                                                          | CalendarValue[]                                               | -            |
| mode               | 范围选择器的类型，可以是日期、月份。                                  | "date" \| "month" \| "week" \| "year"                         | "date"       |
| showTime           | 是否增加时间选择，如果传入的是个对象，会把参数传给内置的 TimePicker。 | boolean \| TimePickerRangeProps                               | -            |
| placeholder        | 提示文案                                                              | string[]                                                      | -            |
| timepickerProps    | 时间显示的参数，参考 Timepicker 作用同 showTime。                     | TimePickerProps                                               | -            |
| onOk               | 点击确认按钮的回调                                                    | (dateString: string[], date: Dayjs[]) => void                 | -            |
| disabledTime       | 不可选取的时间                                                        | (current: Dayjs, type: 'start' \| 'end') => DisabledTimeProps | -            |
| defaultPickerValue | 默认面板显示的日期                                                    | CalendarValue[]                                               | -            |

## 使用方法

### 基础用法

```SnackPlayer dependencies=@illa-dedign/datepicker
import React from 'react';
import { Datepicker } from "@illa-dedign/datepicker"


const App = () => {
    return (
      <DatePicker placeholder="DatePicker" />
    );
}

export default App;

```

```jsx
<DatePicker placeholder="DatePicker" />
```

### 设置禁用状态

```SnackPlayer dependencies=@illa-dedign/datepicker
import React from 'react';
import { Datepicker } from "@illa-dedign/datepicker"


const App = () => {
    return (
      <DatePicker placeholder="DatePicker" disabled />
    );
}

export default App;

```

```jsx
<DatePicker placeholder="DatePicker" disabled />
```

### 设置月份选择器

```SnackPlayer dependencies=@illa-dedign/datepicker
import React from 'react';
import { MonthPicker } from "@illa-dedign/datepicker"


const App = () => {
    return (
      <MonthPicker style={{ width: 200 }} />,
    );
}

export default App;

```

```jsx
<MonthPicker style={{ width: 200 }} />,
```


### 设置默认值

```SnackPlayer dependencies=@illa-dedign/datepicker
import React from 'react';
import { DatePicker } from "@illa-dedign/datepicker"


const App = () => {
  const onSelect = () => {
    console.log("onSelect")
  }

  const onChange = () => {
    console.log("onChange")
  }

  return (
    <DatePicker
      defaultValue="2019-06-03"
      format={(value) => `custom format: ${value.format("YYYY-MM-DD")}`}
      onSelect={onSelect}
      onChange={onChange}
      style={{ width: 240 }}
    />
  );
}

export default App;

```

```jsx
<DatePicker
  defaultValue="2019-06-03"
  format={(value) => `custom format: ${value.format("YYYY-MM-DD")}`}
  onSelect={onSelect}
  onChange={onChange}
  style={{ width: 240 }}
/>
```
