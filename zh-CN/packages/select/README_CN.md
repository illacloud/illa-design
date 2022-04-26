# Select

The Select component allows users pick a value from predefined options.

## Installation

```bash
yarn add @illa-design/select
```

## Import component

```jsx
import { Select } from "@illa-design/select"
```

## API

### Select Basic Properties

| Props             | Desc                                              | Type                           | Default                                                                  |
| ----------------- | ------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------ |
| defaultValue      | The defalut value                                 | string \                      | string[] \| number \|  number[] \| LabelValue \| LabelValue[] | -    |
| value             | The value                                         | string \                      | string[] \| number \| number[] \| LabelValue \| LabelValue[] | -     |
| mode              | Mutiple choices mode and tags mode                | "multiple" \                  | "tags"                                         | -                       |
| notFoundContent   | When there is no content                          | ReactNode                      | -                                                                        |
| getPopupContainer | The container of the popup                        | (node: HTMLElement) => Element | "circle"                                                                 |
| placeholder       | The placeholder of the select                     | string                         | -                                                                        |
| showSearch        | If true, show search button                       | boolean \                     | {retainInputValue?: boolean; retainInputValueWhileSelect?: boolean } | - |
| size              | Size of the select                                | "small" \                     | "medium" \| "large"                               | "medium"            |
| disabled          | If true, the select is disabled                   | boolean                        | -                                                                        |
| error             | If true, the select is invalid                    | boolean                        | -                                                                        |
| loading           | If true, the select is loading                    | boolean                        | -                                                                        |
| allowClear        | If true, show the clear button                    | boolean                        | -                                                                        |
| maxTagCount       | The max tag count of the select when on tags mode | number                         | -                                                                        |
| arrowIcon         | The arrow icon element to use in the select       | ReactNode \                   | null                                            | -                      |
| removeIcon        | The remove icon element to use in the select      | ReactNode \                   | null                                            | -                      |

### Select Events

| Props           | Desc                           | Type                                                    | Default                                                 |
| --------------- | ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------- |
| onClick         | Callback when on click         | (e) => void                                             | -                                                       |
| onFocus         | Callback when on focus         | (e) => void                                             | -                                                       |
| onBlur          | Callback when on blur          | (e) => void                                             | -                                                       |
| onChange        | Callback when the value change | (value, option: OptionInfo \                           | OptionInfo[]) => void          | -                      |
| onDeselect      | Callback when deselect         | (value: string \                                       | number \| LabeledValue, option:OptionInfo) => void | - |
| onClear         | Callback when clear            | (visible: boolean) => void                              | -                                                       |
| onSearch        | Callback when search           | (value: string, reason: InputValueChangeReason) => void | -                                                       |
| onPopupScroll   | Callback when scroll the popup | (elem) => void                                          | -                                                       |
| onVisibleChange | Callback when is not visible   | (visible: boolean) => void                              | -                                                       |



### Select-option Basic Properties

| Props    | Desc                            | Type      | Default    |
| -------- | ------------------------------- | --------- | ---------- |
| disabled | If true, the option is disabled | boolean   | false      |
| title    | The title of the option         | string    | -          |
| value    | The value of the option         | string \ | number | - |

## Examples

### Basic Usage

```jsx
<Select value={"A"}>
  <Option>A</Option>
  <Option>B</Option>
  <Option>C</Option>
</Select>
```

### Set the error status

```jsx
<Select value={1} options={[1, 2, 3]} error />
```

### Set the size

```jsx
<Select value={1} options={[1, 2, 3]} size="large"
```

### Set the multiple-choice mode

```jsx
<Select value={[1, 2]} options={[1, 2, 3]} mode="multiple" labelInValue />
```

### Set the max tag count

```jsx
<Select value={[1, 2]} options={[1, 2, 3]} maxTagCount={1} mode="tags" />
```
