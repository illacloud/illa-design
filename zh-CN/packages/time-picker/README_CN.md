# Timepicker

When the user needs to input a time, he can click the pop-up time panel to select.

## Installation

```bash
yarn add @illa-design/timepicker
```

## Import component

```jsx
import { Timepicker, RangePicker } from "@illa-design/timepicker"
```

## API

### Picker Basic Properties

| Props             | Desc                                  | Type                                                | Defaul                                                |
| ----------------- | ------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| disabled          | Whether is disabled                   | boolean                                             | -                                                     |
| error             | Whether is error status               | boolean                                             | -                                                     |
| allowClear        | Whether to allow clear                | boolean                                             | true                                                  |
| disableConfirm    | Whether to confirm the disable status | boolean                                             | -                                                     |
| position          | The position of the picker            | "top" \                                            | "tl" \| "tr" \| "bottom" \| "bl" \| "br"   | "bl" |
| getPopupContainer | Get popup container                   | (node: HTMLElement) => Element                      | -                                                     |
| placeholder       | The placeholder                       | string \                                           | string[]                                  | -         |
| format            | Format of the time                    | string                                              | "HH:mm:ss"                                            |
| use12Hours        | Whether to use 12 hour time           | boolean                                             | -                                                     |
| onClear           | Callback when click clear button      | () => void                                          | -                                                     |
| popupVisible      | Whether to show the popup             | boolean                                             | -                                                     |
| triggerProps      | Trigger properties                    | `<TriggerProps>`                              | -                                                     |
| step              | Set time steps                        | { hour?: number; minute?: number; second?: number } | -                                                     |
| disabledHours     | Disable custom hours                  | () => number[]                                      | -                                                     |

### timePicker Basic Properties

| Props        | Desc                                                | Type                                        | Default |
| ------------ | --------------------------------------------------- | ------------------------------------------- | ------- |
| onSelect     | Callback when component value changes               | (valueString: string, value: Dayjs) => void | -       |
| onChange     | Callback when time is selected                      | (valueString: string, value: Dayjs) => void | -       |
| defaultValue | Default value                                       | CalendarValue                               | -       |
| value        | Value                                               | CalendarValue                               | -       |
| showNowBtn   | Whether to show a button to select the current time | boolean                                     | true    |

### rangePicker Basic Properties

| Props        | Desc                                                      | Type                                            | Default |
| ------------ | --------------------------------------------------------- | ----------------------------------------------- | ------- |
| onChange     | Callback when the value of the calendar component changes | (valueString: string[], value: Dayjs[]) => void | -       |
| onSelect     | Callback when date is selected                            | (valueString: string[], value: Dayjs[]) => void | -       |
| defaultValue | Default value                                             | CalendarValue[]                                 | -       |
| value        | Value                                                     | CalendarValue[]                                 | -       |
| placeholder  | Placeholder                                               | string[]                                        | -       |
| order        | Whether the start and end times are automatically sorted  | boolean                                         | true    |

## Examples

### Basic usage

```jsx
<TimePicker placeholder={"test"} />
```

### Set disable status

```jsx
<TimePicker placeholder={"disabled"} disabled />
```

### Set size as large

```jsx
<TimePicker placeholder="large" size="large" />
```
