# Checkbox

The Checkbox component is used to check multiple options.

## Installation

```bash
yarn add @illa-design/checkbox
```

## Import component

```jsx
import { Checkbox } from "@illa-design/checkbox"
```

## API

### Checkbox Basic Properties

| Props          | Desc                                              | Type            | Default  |
| -------------- | ------------------------------------------------- | --------------- | -------- |
| autoFocus      | If true, get focus automatically                  | `boolean`       | `false`  |
| checked        | If true, the box is checked                       | `boolean`       | `false`  |
| defaultChecked | If true, the default status of the box is checked | `boolean`       | `false`  |
| disabled       | If true, the box is disabled                      | `boolean`       | `false`  |
| spacing        | The space between boxes                           | `string \|int ` | `"24px"` |

### Checkbox Events

| Props    | Desc                    | Type                             | Default |
| -------- | ----------------------- | -------------------------------- | ------- |
| onChange | When the content change | `(value: T[], e: Event) => void` | `-`     |

## Checkbox-group Basic Properties

| Props        | Desc                                    | Type                         | Default        |
| ------------ | --------------------------------------- | ---------------------------- | -------------- |
| disabled     | If true, the checkbox is disabled       | `boolean`                    | `false`        |
| direction    | The layout of the checkboxes            | `"horizontal" \|"vertical" ` | `"horizontal"` |
| defaultValue | The default value of the checkbox group | `string `                    | `-`            |
| options      | The options                             | `string `                    | `-`            |
| value        | The options are checked                 | `string `                    | `-`            |

## Examples
```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <Checkbox>Hello</Checkbox>
      <Checkbox disabled>Hello</Checkbox>
      <Checkbox checked>Hello</Checkbox>
      <CheckboxGroup options={["A", "B", "C"]} />
      <CheckboxGroup options={["A", "B", "C"]} defaultValue={["A"]} />
      <CheckboxGroup options={["A", "B", "C"]} direction="vertical" />
    </>`

export const importStatement = `import { Checkbox } from "@illa-design/checkbox"`

export const packages = {"@illa-design/checkbox":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```
### Basic usage

```jsx
<Checkbox>Hello</Checkbox>
```

### Disable status

```jsx
<Checkbox disabled>Hello</Checkbox>
```

### Options are checked

```jsx
<Checkbox checked>Hello</Checkbox>
```

### Set multiple options

```jsx
<CheckboxGroup options={["A", "B", "C"]} />
```

### Set default checked options

```jsx
<CheckboxGroup options={["A", "B", "C"]} defaultValue={["A"]} />
```

### Set the checkbox group layout as vertical

```jsx
<CheckboxGroup options={["A", "B", "C"]} direction="vertical" />
```
