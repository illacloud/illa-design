# Switch

Switch is used in mutual exclusivity selection scenarious

## Installation

```bash
yarn add @illa-design/switch
```

## Import

```jsx
import { Switch } from "@illa-dedign/switch"
```

## API

### Switch Basic Properties

| Props          | Desc                                                      | Type                                                         | Default  |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------ | -------- |
| colorScheme    | Set background color                                      | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue"  \| "cyan" \| "purple" \| string` | `blue`   |
| disabled       | Whether to disable the switch                             | `boolean`                                                    | `-`      |
| size           | Set switch size                                           | ` "medium" \| "large"`                                       | `medium` |
| checkedText    | Set the text when switch's status is checked              | `string \| ReacNode`                                         | `-`      |
| uncheckedText  | Set the text when switch's status is unchecked            | `string \| ReacNode`                                         | `-`      |
| uncheckedIcon  | Set the icon of button  when switch's status is unchecked | `ReactNode`                                                  | `-`      |
| checkedIcon    | Set the icon of button  when switch's status is checked   | `ReactNode`                                                  | `-`      |
| defaultChecked | Set the default status is checked                         | `boolean`                                                    | `-`      |
| checked        | Set switch's status is checked                            | `boolean`                                                    | `-`      |

### Switch Event

| Props    | Desc                                             | Type                                          | Default |
| -------- | ------------------------------------------------ | --------------------------------------------- | ------- |
| onChange | Callback when the value of the switch is changed | `(value: boolean, event: MouseEvent) => void` | `-`     |



## Example

### Basic usage

```jsx
<Switch />
```

### Set color and size

```jsx
<Switch colorScheme="cyan" size="large" />
```

### Set Text

```jsx
<Switch colorScheme="cyan" size="large" checkedText="on" uncheckedText="off" />
```

### Set default status 

```jsx
<Switch defaultChecked />
```
