# Datepicker

This component is used to select date, which can be year, month, week, day type, supports range selection, etc.

## Installation

```bash
yarn add @illa-design/datepicker
```

## Import Component

```jsx
import { Datepicker } from "@illa-dedign/datepicker"
```

## API

### Datepicker Basic Properties

| Props                  | Desc                                                         | Type                                              | Default  |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------- | -------- |
| disabled               | Whether is disabled                                          | boolean \| boolean[]                              | -        |
| allowClear             | Whether to allow clear                                       | boolean                                           | true     |
| position               | The position of the picker                                   | "top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br" | -        |
| placeholder            | The placeholder                                              | string \| string[]                                | -        |
| shortcuts              | Preset time range quick selection                            | ShortcutType[]                                    | -        |
| shortcutsPlacementLeft | Whether the preset range is placed on the left side of the panel | boolean                                           | -        |
| error                  | Whether is error status                                      | boolean                                           | -        |
| size                   | Size                                                         | "small" \| "medium" \| "large"                    | "medium" |
| popupVisible           | Whether to show the popup                                    | boolean                                           | -        |
| onVisibleChange        | Callback when opening or closing                             | (visible?: boolean) => void                       | -        |
| onChange               | Callback when the value of the calendar component changes    | (dateString: string, date: Dayjs) => void         | -        |
| onSelect               | Callback when the selected date changes but the component value does not change | (dateString: string, date: Dayjs) => void         | -        |
| onClear                | Callback after clear button is clicked                       | () => void                                        | -        |
| editable               | Whether to edit                                              | boolean                                           | true     |
| onSelectShortcut       | The callback when the shortcut selection is clicked.         | (shortcut: ShortcutType) => void                  | -        |
| locale                 | International configuration                                  | Record<string, any>                               | -        |
| separator              | Split symbol in range selector input box                     | ReactNode                                         | -        |
| disabledDate           | Unselectable date                                            | (current?: Dayjs) => boolean                      | -        |
| onOk                   | Callback for confirm button click                            | (dateString: string, date: Dayjs) => void         | -        |
| defaultPickerValue     | Date displayed by default panel                              | CalendarValue                                     | -        |
| utcOffset              | Set timezone offset                                          | number                                            | -        |
| timezone               | Set timezone                                                 | string                                            | -        |

### DatePicker Basic Properties

type CalendarValue = number | string | Date | Dayjs

| Props           | Desc                                                         | Type                                   | Default    |
| --------------- | ------------------------------------------------------------ | -------------------------------------- | ---------- |
| format          | The format of the display date, refer to[dayjs](https://github.com/iamkun/dayjs) | string \| ((value: Dayjs) => string)   | "YYYY-MM-DD" |
| defaultValue    | Default value                                                | CalendarValue                          | -          |
| value           | Value                                                        | CalendarValue                          | -          |
| showTime        | Whether to add time selection                                | boolean \| TimePickerProps             | -          |
| timepickerProps | The parameters of time display, refer to Timepicker, the function is the same as showTime. | TimePickerProps                        | -          |
| showNowBtn      | Whether to display showTime, select the button of the current time. | boolean                                | true       |
| disabledTime    | Unselectable time                                            | (current?: Dayjs) => DisabledTimeProps | -          |



### MonthPicker Basic Properties

| Props        | Desc                                                         | Type          | Default |
| ------------ | ------------------------------------------------------------ | ------------- | ------- |
| format       | The format of the display date, refer to[dayjs](https://github.com/iamkun/dayjs) | string        | "YYYY-MM" |
| defaultValue | Default value                                                | CalendarValue | -       |
| value        | Value                                                        | CalendarValue | -       |



### YearPicker Basic Properties

| Props        | Desc                                                         | Type          | Default |
| ------------ | ------------------------------------------------------------ | ------------- | ------- |
| format       | The format of the display date, refer to[dayjs](https://github.com/iamkun/dayjs) | string        | "YYYY"    |
| defaultValue | Default value                                                | CalendarValue | -       |
| value        | Value                                                        | CalendarValue | -       |

### RangePicker Basic Properties

| Props              | Desc                                                         | Type                                                         | Default    |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| disabled           | Whether is disabled                                          | boolean \| boolean[]                                         | -          |
| format             | The format of the display date, refer to[dayjs](https://github.com/iamkun/dayjs) | string                                                       | "YYYY-MM-DD" |
| onChange           | Callback when the value of the calendar component changes    | (dateString: string[], date: Dayjs[]) => void                | -          |
| defaultValue       | Default value                                                | CalendarValue[]                                              | -          |
| value              | Value                                                        | CalendarValue[]                                              | -          |
| mode               | The type of range selector, which can be date, month         | "date" \| "month" \| "week"' \| "year"           | "date"       |
| showTime           | Whether to add time selection                                | boolean \| TimePickerRangeProps                              | -          |
| placeholder        | Placeholder                                                  | string[]                                                     | -          |
| timepickerProps    | The parameters of time display, refer to Timepicker, the function is the same as showTime. | TimePickerProps                                              | -          |
| onOk               | Callback for confirm button click                            | (dateString: string[], date: Dayjs[]) => void                | -          |
| disabledTime       | Unselectable time                                            | (current: Dayjs, type: 'start' \| 'end') => DisabledTimeProps | -          |
| defaultPickerValue | Date displayed by default panel                              | CalendarValue[]                                              | -          |

## Examples
```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <DatePicker placeholder={"DatePicker"} />
      <DatePicker placeholder={"DatePicker"} disabled />
      <MonthPicker style={{ width: 200 }} />
      <DatePicker
        defaultValue='2019-06-03'
        format={(value) => `custom format: ${value.format('YYYY-MM-DD')}`}
        onSelect={onSelect}
        onChange={onChange}
        style={{ ...style, width: 240 }}
      /> 
    </>`

export const importStatement = `import { Datepicker } from "@illa-dedign/datepicker"`

export const packages = {"@illa-design/datepicker":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```
### Basic usage

```jsx
<DatePicker placeholder={"DatePicker"} />
```

### Set disabled status

```jsx
<DatePicker placeholder={"DatePicker"} disabled />
```

### Set year picker

```jsx
<MonthPicker style={{ width: 200 }} />
```

### Set default value

```jsx
<DatePicker
  defaultValue='2019-06-03'
  format={(value) => `custom format: ${value.format('YYYY-MM-DD')}`}
  onSelect={onSelect}
  onChange={onChange}
  style={{ ...style, width: 240 }}
/>
```
