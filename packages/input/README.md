# Input 

The Input component is used to get users input text in it.

## Installation

```bash
yarn add @illa-design/input
```

## Import component

```jsx
import { Input } from "@illa-dedign/input"
```

## API

### Input Basic Properties

| Props        | Desc                                       | Type                                                         | Default     |
| ------------ | ------------------------------------------ | ------------------------------------------------------------ | ----------- |
| variant      | Two styles of the input box                | `"fill" \| "outline"`                                         | `"outline"` |
| placeholder  | The placeholder show on the input box      | `string \| string[]`                                          | `-`         |
| boarderColor | Color of the box boarder                   | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" ` | `"blue"`    |
| defaultValue | Default value                              | `string \| string[]`                                         | `-`         |
| disabled     | If true, the input box status is disabled  | `boolean`                                                    | `false`     |
| error        | If true, the input box status is error     | `boolean`                                                    | `false`     |
| size         | Size of the box                            | `"small" \| "medium"\| "large"  `                              | `"medium"`  |
| value        | Value                                      | `string \| string[]`                                          | `-`         |
| maxLength    | Max leangth of the content                 | `number`                                                     | `-`         |
| showCount    | Show the word count                        | `boolean`                                                    | `false`     |
| allowClear   | Allow the delete button to clear the value | `boolean`                                                    | `-`         |
| prefix       | Prefix inside the box                      | `ReactNode`                                                  | `-`         |
| suffix       | Suffic inside the box                      | `ReactNode`                                                  | `-`         |
| addonAfter   | Addon on the right outside the box         | `ReactNode`                                                  | `-`         |
| addonBefore  | Addon on the left outside the box          | `ReactNode`                                                  | `-`         |

### InputTextArea Basic Properties

| Props        | Desc                                                  | Type                                        | Default |
| ------------ | ----------------------------------------------------- | ------------------------------------------- | ------- |
| placeholder  | The placeholder show on the input box                 | `string \| string[]`                         | `-`     |
| defaultValue | Default value                                         | `string \| string[]`                         | `-`     |
| disabled     | If true, the input box status is disabled             | `boolean`                                   | `-`     |
| error        | If true, the input box status is error                | `boolean`                                   | `false` |
| autoSize     | If true, the size of the box will be automatic adjust | `boolean\| {minRows?:number;maxRows?number}` | `-`     |
| value        | Value                                                 | `string \| string[]`                         | `-`     |
| maxLength    | Max leangth of the content                            | `number`                                    | `-`     |
| showCount    | Show the word count                                   | `boolean`                                   | `false` |
| allowClear   | Allow the delete button to clear the value            | `boolean`                                   | `-`     |

### InputSearch Basic Properties

| Props        | Desc                                                   | Type                                                         | Default     |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------------ | ----------- |
| searchButton | If true, the search button show  on outside of the box | `boolean`                                                    | `false`     |
| variant      | Two styles of the input box                            | `"fill" \| "outline"`                                         | `"outline"` |
| placeholder  | The placeholder show on the input box                  | `string \| string[]`                                          | `-`         |
| defaultValue | Default value                                          | `string \| string[]`                                          | `-`         |
| disabled     | If true, the input box status is disabled              | `boolean`                                                    | `-`         |
| boarderColor | Color of the box boarder                               | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" ` | `"blue"`    |
| error        | If true, the input box status is error                 | `boolean`                                                    | `false`     |
| size         | Size of the box                                        | `"small" \| "medium"\| "large"  `                              | `"medium"`  |
| value        | Value                                                  | `string \| string[]`                                          |   `-`       |
| allowClear   | Allow the delete button to clear the value             | `boolean`                                                    |    `-`      |

### InputPassword Basic Properties

| Props           | Desc                                                        | Type                                                         | Default     |
| --------------- | ----------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| invisibleButton | If true, the invisible button show  on the right of the box | `boolean`                                                    | `true`      |
| variant         | Two styles of the input box                                 | `"fill" \| "outline"`                                         | `"outline"` |
| placeholder     | The placeholder show on the input bo                        | `string \| string[]`                                          |  `-`        |
| defaultValue    | Default value                                               | `string \| string[]`                                          |  `-`       |
| disabled        | If true, the input box status is disabled                   | `boolean`                                                    | `-`         |
| boarderColor    | Color of the box boarder                                    | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" ` | `"blue"`    |
| error           | If true, the input box status is error                      | `boolean`                                                    | `false`     |
| size            | Size of the box                                             | `"small" \| "medium"\| "large"  `                              | `"medium"`  |
| value           | Value                                                       | `string \| string[]`                                          |   `-`       |
| allowClear      | Allow the delete button to clear the value                  | `boolean`                                                    |   `-`       |

### Input Events

| Props        | Desc                         | Type                     | Default |
| ------------ | ---------------------------- | ------------------------ | ------- |
| onChange     | When the content change      | `(event) => void`        | `-`     |
| onPressEnter | When press the Enter         | `(event) => void`        | `-`     |
| onClear      | When click the delete button | `() => void`             | `-`     |
| onFocus      | When the input box on focus  | `(event) => void`        | `-`     |
| onBlur       | When the input box on blur   | `(event) => void`        | `-`     |
| onSearch     | When click the search button | `(value:string) => void` | `-`     |

### Input Methods

| Props | Desc                    | Type | Default |
| ----- | ----------------------- | ---- | ------- |
| focus | Get the input box focus | `-`  | `-`     |
| blur  | Get the input box focus | `-`  | `-`     |

## Example

### Basic usage

```jsx
<Input />
<Input placeholder="test-disabled" disabled />
```

### Set input box's size

```jsx
<Input variant="fill"size="small"/>
```

### Set prefix and add-on

```jsx
<Input
      placeholder="variant-fill"
      prefix={"prefix"}
      addonBefore={"addonBefore"}
    />

```

### Set default value and max length 

```jsx
<Input
  defaultValue="test maxLength"
  maxLength={4}
/>
```

### Set word count

```jsx
<Input placeholder="showCount" maxLength={4} showCount />
```

### Set password input box

```jsx
<Password placeholder="variant-fill" variant="fill" />
```

### Set search input box

```jsx
<Search placeholder="variant-fill" variant="fill" />
```

### Set text area input box

```jsx
<TextArea placeholder="defaultValue" defaultValue="test defaultValue" />
```
