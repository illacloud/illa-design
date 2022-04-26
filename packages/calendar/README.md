# Calendar

The Calendar component is a container for displaying dates in calendar form.

## Installation

```bash
yarn add @illa-design/calendar
```

## Import component

```jsx
import { Calendar } from "@illa-design/calendar"
```

## API

### Calendar Basic Properties

| Props            | Desc                                                        | Type                                                         | Default  |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------------ | -------- |
| allowSelect      | Whether to allow selection and switching of dates           | boolean                                                      | -        |
| panel            | Whether to display in a container                           | boolean                                                      | -        |
| panelWidth       | The width of the card mode                                  | number \| string                                             | 265      |
| panelTodayBtn    | Whether to show the jump to today button                    | boolean                                                      | -        |
| panelOperations  | Action button in panel mode                                 | Array<"left" \| "right" \| "doubleLeft" \| "doubleRight">      | -        |
| dayStartOfWeek   | The first day of the week starts on, 0 - Sunday, 1 - Monday | 0 \|1                                                        | 0        |
| defaultMode      | Calendar for selected date, month and year                  | "day" \| "month"\| "year"                                    | "month"    |
| mode             | Calendar for selected date, month and year                  | "day" \|"month"\|"year"                                      | -        |
| disabledDate     | Disabled date                                               | (current?: Dayjs) => boolean                                 | -        |
| dateRender       | Custom date display                                         | (currentDate: Dayjs) => ReactNode                            | -        |
| monthRender      | Custom month display                                        | (currentDate: Dayjs) => ReactNode                            | -        |
| dateInnerContent | Customize the date cell                                     | (currentDate: Dayjs) => ReactNode                            | -        |
| headerRender     | Custom header render                                        | (props: {value?: Dayjs;pageShowDate?: Dayjs;mode?: string;onChange;onChangePageDate;onChangeMode;}) => ReactNode | -        |
| locale           | International configuration                                 | Record<string, any>                                          | -        |
| headerType       | Two types of header                                         | "button" \|"select"                                          | "button" |

### Calendar Events

| Props         | Desc                            | Type                  | Default |
| ------------- | ------------------------------- | --------------------- | ------- |
| onChange      | Callback when date change       | (date: Dayjs) => void | -       |
| onPanelChange | Callback when panel date change | (date: Dayjs) => void | -       |

## Examples
```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <Calendar />
      <Calendar panel defaultValue={dayjs('2020-04-01')} panelTodayBtn style={{ marginRight: 50 }} />
      <Calendar panel defaultValue='2020-03' mode='year' />
    </>`

export const importStatement = `import { Calendar } from "@illa-design/calendar`

export const packages = {"@illa-design/calendar":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```
### Basic usage

```jsx
<Calendar />
defaultValue='2022-04-01' headerType='select'
```

### Set panel calendar

```jsx
<Calendar panel defaultValue={dayjs('2020-04-01')} panelTodayBtn style={{ marginRight: 50 }} />
<Calendar panel defaultValue='2020-03' mode='year' />
```
