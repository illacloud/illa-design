# Statistics

The Statistics component is used to display values.

## Installation

```bash
yarn add @illa-design/statistics
```

## Import component

```jsx
import { Statistics } from "@illa-design/statistics"
```

## API

### Statistics Basic Properties

| Props            | Desc                                  | Type                     | Default  |
| ---------------- | ------------------------------------- | ------------------------ | -------- |
| title            | The title of the statistics           | string \| ReactNode      | -        |
| value            | The value of the statistics           | string \| number\| Dayjs | -        |
| valueStyle       | The style of the value                | CSSProperties            | -        |
| decimalSeparator | Set the decimal separator             | string                   | "."      |
| format           | The format of the value               | string                   | "circle" |
| groupSeperator   | Set the group separator               | string                   | ","      |
| loading          | If true, the statistics is on loading | boolean                  | false    |
| precision        | The precision of the value            | number                   | -        |
| prefix           | The prefix                            | string \| ReactNode      | -        |
| suffix           | The suffix                            | string \| ReactNode      | -        |

### Statistic-countDown Basic Properties

| Props      | Desc                                  | Type                            | Default          |
| ---------- | ------------------------------------- | ------------------------------- | ---------------- |
| title      | The title of the countdown statistics | string \| ReactNode             | -                |
| value      | The value of the countdown            | string \| number\| Dayjs\| Date | -                |
| valueStyle | The style of the value                | CSSProperties                   | -                |
| now        | Refine the default value              | string \| number\| Dayjs\| Date | () => Date.now() |
| format     | The format of the countdown value     | string                          | "HH:mm:ss"       |
| start      | If true, begin the countdown          | boolean                         | true             |



### Statistic-countDown Events

| Props    | Desc                                    | Type                   | Default |
| -------- | --------------------------------------- | ---------------------- | ------- |
| onFinish | When the countdown finished             | () => void             | -       |
| onChange | When the value of the countdown changed | (value:number) => void | -       |

## Example

### Basic usage

```jsx
<Statistic title={"Amount"} value={189907.32} />
```

### Set the value

```jsx
<Statistic value={189907.32} />
```

### Set the group separator as "&”

```jsx
<Statistic
  value={1899078.32}
  groupSeparator={"&"}
/>
```

### Set the prefix and the suffix

```jsx
<Statistic
  value={22}
  prefix={"#"}
/>
```

### Set the precision of the value as 2

```jsx
<Statistic value={1922.6782} precision={2} />
```

### Basic usage of countdown

```jsx
<Countdown
  value={Date.now() + 2000}
/>
```
