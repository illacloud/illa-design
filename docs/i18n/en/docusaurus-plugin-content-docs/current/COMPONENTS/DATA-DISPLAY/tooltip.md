# Tooltip

A tooltip is a infomative message that appears when a user interacts with an element. 

## Installation

```bash
yarn add @illa-design/tooltip
```

## Import component

```jsx
import { Tooltip } from "@illa-dedign/tooltip"
```

## API

### Tooltip Basic Properties

| Props               | Desc                                                         | Type                                                         | Default |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| colorScheme         | Set background color                                         | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue"  \| "cyan" \| "purple" \| string` | `gray`  |
| content             | The content shown in popup                                   | `string \| ReactNode`                                        | `-`     |
| trigger             | Types of events that cause the popup to show                 | `"hover" \| "click" \| "focus"`                              | `hover` |
| position            | The position of the popup relative to the target.            | `"top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br" \| "left" \| "lt" \| "lb" \| "right" \| "rt" \| "rb"` | `top`   |
| showArrow           | Whether to display arrow node                                | `boolean`                                                    | `true`  |
| closeDelay          | Delay time to close                                          | `number`                                                     | `150`   |
| openDelay           | Delay time to show                                           | `number`                                                     | `150`   |
| autoFitPosition     | Whether to automatically adjust the position of the popup according to the viewport | `boolean`                                                    | `true`  |
| closeOnClick        | Whether to close popup when clicking the child node          | `boolean`                                                    | `true`  |
| defaultPopupVisible | Whether the popup is visible by default                      | `boolean`                                                    | `-`     |
| popupVisible        | Set whether the  popup is visible                            | `boolean`                                                    | `-`     |
| disabled            | Whether to disable the popup                                 | `boolean`                                                    | `-`     |

### Trigger Events

| Props           | Desc                                                 | Type                         | Default |
| --------------- | ---------------------------------------------------- | ---------------------------- | ------- |
| onVisibleChange | Callback when the visibility of the popup is changed | `(visible: boolean) => void` | `-`     |



## Example

### Basic usage

```jsx
<Tooltip content="Tooltip">
  <Button>Tooltip</Button>
</Tooltip>
```

### Set popup position

```jsx
<Tooltip content="Tooltip" position="bottom">
  <Button>Tooltip</Button>
</Tooltip>
```

### Set popup's background color

```jsx
<Tooltip content="Tooltip" position="top" colorScheme="cyan">
  <Button>Tooltip</Button>
</Tooltip>
```

### Set arrow

```jsx
<Tooltip content="Tooltip" position="top" colorScheme="cyan" showArrow={false}>
  <Button>Tooltip</Button>
</Tooltip>
```

### Set popup's default visibility status

```jsx
<Tooltip content="Tooltip" position="top" colorScheme="cyan" defaultPopupVisible>
  <Button>Tooltip</Button>
</Tooltip>
```

### Set popup's delay time to open


```jsx
<Tooltip content="Tooltip" position="top" colorScheme="cyan" openDelay={1000} closeDelay={1000}>
  <Button>Tooltip</Button>
</Tooltip>
```

