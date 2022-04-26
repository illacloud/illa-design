# Radio

Radios are used when only one choice may be selected in a series of options.

## Installation

```bash
yarn add @illa-design/radio
```

## Import component

```jsx
import { Radio } from "@illa-design/radio"
```

## API

### Radio Basic Properties

| Props          | Desc                                      | Type        | Default                                                                                                                                       |
| -------------- | ----------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| colorScheme    | Set background color                      | "white" \  | "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" \| string | "blue" |
| value          | The value of radio                        | T           | -                                                                                                                                             |
| variant        | The variant of radio                      | "button" \ | "radio"                                                                                                                   | "radio"           |
| disabled       | Whether the radio is disabled             | boolean     | -                                                                                                                                             |
| checked        | Whether the radio is checked (Controlled) | boolean     | -                                                                                                                                             |
| defaultChecked | Whether the radio is initially selected   | boolean     | -                                                                                                                                             |

### Radio Events

| Props    | Desc                        | Type                                           | Default |
| -------- | --------------------------- | ---------------------------------------------- | ------- |
| onChange | Callback when value changes | (checked: boolean, event: ChangeEvent) => void | -       |

### RadioGroup Basic Props

| Props        | Desc                                                | Type          | Default                                                                                                                                       |
| ------------ | --------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| name         | The name of the input field in a radio              | string        | -                                                                                                                                             |
| value        | The value to be used in the radio button            | T             | -                                                                                                                                             |
| variant      | The variant of radio                                | "button" \   | "radio"                                                                                                                   | "radio"           |
| colorScheme  | Set background color                                | "white" \    | "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" \| string | "blue" |
| disabled     | Whether the radio is disabled                       | boolean       | -                                                                                                                                             |
| defaultValue | To set default value                                | T             | -                                                                                                                                             |
| options      | Set children options                                | string[] \   | number[] \| { label: ReactNode; value: any; disabled: boolean }[]                                                         | -                |
| direction    | Arrangement direction                               | "vertical" \ | "horizontal"                                                                                                            | "horizontal"        |
| spacing      | The spacing between the checkbox and its label text | string \     | number                                                                                                                      | "24px"          |

### RadioGroup Events

| Props    | Desc                        | Type                                           | Default |
| -------- | --------------------------- | ---------------------------------------------- | ------- |
| onChange | Callback when value changes | (checked: boolean, event: ChangeEvent) => void | -       |

## Example

### Basic usage

```jsx
<Radio>Radio</Radio>
<Radio checked disabled>Disabled Radio</Radio>
```

### RadioGroup usage

```jsx
<RadioGroup defaultValue='a' style={{ marginBottom: 20 }}>
  <Radio value='a'>A</Radio>
  <Radio value='b'>B</Radio>
  <Radio value='c'>C</Radio>
  <Radio disabled value='d'>D</Radio>
</RadioGroup>
<br />
<RadioGroup options={['A', 'B', 'C', 'D']} style={{ marginBottom: 20 }} />
<br />
<RadioGroup
  options={[
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
    { label: 'D', value: 'd', disabled: true },
  ]} />
```

### Set RadioGroup arrangement direction

```jsx
<RadioGroup direction="vertical" defaultValue="a">
  <Radio value="a">A</Radio>
  <Radio value="b">B</Radio>
  <Radio value="c">C</Radio>
  <Radio disabled value="d">
    D
  </Radio>
</RadioGroup>
```
