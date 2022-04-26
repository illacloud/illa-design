# InputTag

The InputTag component is used to get users input tags in it.

## Installation

```bash
yarn add @illa-design/inputTag
```

## Import component

```jsx
import { InputTag } from "@illa-design/inputTag"
```

## API

### Input Basic Properties

| Props        | Desc                                                                 | Type                                            | Default                                                                                                      |
| ------------ | -------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| readOnly     | If true, the InputTag is read only                                   | boolean                                         | -                                                                                                            |
| placeholder  | The placeholder show on the input box                                | string \                                       | string[]                                                  | -                                                |
| autoFocus    | If true, the box is auto focused                                     | boolean                                         | -                                                                                                            |
| defaultValue | Default value                                                        | T[]                                             | -                                                                                                            |
| disabled     | If true, the input box status is disabled                            | boolean                                         | -                                                                                                            |
| error        | If true, the input box status is error                               | boolean                                         | -                                                                                                            |
| size         | Size of the box                                                      | "small" \                                      | "medium" \|"large"                                      | -                                                 |
| value        | The value of the input box                                           | T[]                                             | -                                                                                                            |
| inputValue   | The value of the input tag                                           | string                                          | -                                                                                                            |
| labelInValue | Set the input and output values in `{ label: '', value: ''}` format. | boolean                                         | -                                                                                                            |
| allowClear   | Allow the delete button to clear the value                           | boolean                                         | -                                                                                                            |
| icon         | The custom icon                                                      | ReactNode                                       | -                                                                                                            |
| suffix       | Suffix of the box                                                    | ReactNode                                       | -                                                                                                            |
| validate     | Check function                                                       | (inputValue: string, values: T[]) => boolean \ | `Promise<boolean>` | (inputValue, values) => inputValue && values.every((item) => item !== inputValue) |

### Input Events

| Props         | Desc                                  | Type            | Default |
| ------------- | ------------------------------------- | --------------- | ------- |
| onChange      | Callback when content change          | (event) => void | -       |
| onPressEnter  | Callback when press the Enter         | (event) => void | -       |
| onClear       | Callback when click the delete button | () => void      | -       |
| onFocus       | Callback when the input box on focus  | (event) => void | -       |
| onBlur        | Callback when the input box on blur   | (event) => void | -       |
| onInputChange | Callback when the input tag change    | (event) => void | -       |
| onClick       | Callback when click                   | (event) => void | -       |
| onPaste       | Callback when paste                   | (event) => void | -       |
| onRemove      | Callback when remove tags             | (event) => void | -       |

## Examples

### Basic usage

```jsx
<InputTag placeholder={"input-tag"} />
```

### Set size and suffix

```jsx
<InputTag placeholder="size-small" size="small" suffix="suffix" />
```

### Set default value

```jsx
<InputTag defaultValue={["default value"]} />
```

### Set clear event

```jsx
<InputTag
  placeholder="test-input-event"
  onClear={clearEvent}
  onRemove={removeEvent}
  allowClear
/>
```
