# InputNumber

The InputTag component is used to get users input number in it.

## Installation

```bash
yarn add @illa-design/input-number
```

## Import component

```jsx
import { InputNumber } from "@illa-design/input-number"
```

## API

### InputNumber Basic Properties

| Props        | Desc                                                  | Type                                                                  | Default                                                                           |
| ------------ | ----------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| step         | The numbers change when click the button              | number                                                                | 1                                                                                 |
| placeholder  | The placeholder show on the input box                 | string                                                                | -                                                                                 |
| precision    | The precision of the number                           | number                                                                | -                                                                                 |
| defaultValue | Default value                                         | number                                                                | -                                                                                 |
| disabled     | If true, the input box status is disabled             | boolean                                                               | -                                                                                 |
| error        | If true, the input box status is error                | boolean                                                               | -                                                                                 |
| size         | Size of the box                                       | "small" \                                                            | "medium" \| "large"                                        | "medium"            |
| value        | The value of the input box                            | undefined \                                                          | number \|string                                           | -                    |
| min          | Min number                                            | number                                                                | -Infinity                                                                         |
| max          | Max number                                            | number                                                                | Infinity                                                                          |
| mode         | Embed mode and button mode                            | "embed" \                                                            | "button"                                                    | "embed"             |
| prefix       | prefix of the input box                               | ReactNode                                                             | -                                                                                 |
| suffix       | Suffix of the input box                               | ReactNode                                                             | -                                                                                 |
| formatter    | Define input box display value                        | (value: number \                                                     | string)=>string                                     | -                           |
| parser       | Convert from formatter to number, used with formatter | (value: string) =>string number \                                    | string                             | (input) => input.replace(/[^\w\.-]+/g, '') |
| hideControl  | If true, hide the right button                        | boolean                                                               | -                                                                                 |
| icons        | Custom icon                                           | {up?: ReactNode;down?: ReactNode;plus?: ReactNode;minus?: ReactNode;} | -                                                                                 |

### InputNumber Events

| Props     | Desc                                  | Type            | Default |
| --------- | ------------------------------------- | --------------- | ------- |
| onChange  | Callback when content change          | (event) => void | -       |
| onFocus   | Callback when the input box on focus  | (event) => void | -       |
| onBlur    | Callback when the input box on blur   | (event) => void | -       |
| onKeyDown | Callback when there is keyboard event | (event) => void | -       |

### InputNumber Methods

| Props   | Desc       |
| ------- | ---------- |
| blur()  | Blur focus |
| focus() | Get focus  |

## Examples

### Basic usage

```jsx
<InputNumber placeholder={"input-tag"} />
```

### Set the size and value

```jsx
<InputNumber placeholder="value" size="large" value={5} />
```

### Set the input box disabled

```jsx
<InputNumber placeholder="disabled" disabled />
```

### Set focus and blur event

```jsx
<InputNumber size="small" onFocus={focusEvent} onBlur={blurEvent} />
```
