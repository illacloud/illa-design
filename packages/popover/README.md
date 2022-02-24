# Popover

Popover is a  dialog that floats around a trigger. It is used to display contextual information to the user.

## Installation

```bash
yarn add @illa-design/popover
```

## Import 

```jsx
import { Popover } from "@illa-dedign/popover"
```

## API

### Popover Basic Properties

| Props               | Desc                                                         | Type                                                         | Default |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| colorScheme         | Set background color                                         | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue"  \| "cyan" \| "purple"\|string` | `gray`  |
| title               | The header of the popover                                    | `string`                                                     | `-`     |
| content             | The content shown in popup                                   | `string \| ReactNode`                                        | `-`     |
| trigger             | Types of events that cause the popup to show                 | `"hover" \| "click" \| "focus"`                              | `hover` |
| position            | The position of the popup relative to the target.            | `"top"\| "tl"\| "tr"\| "bottom"\| "bl"\| "br"\| "left"\| "lt"\| "lb"\| "right"\| "rt"\| "rb"` | `top`   |
| showArrow           | Whether to display arrow node                                | `boolean`                                                    | `true`  |
| closeDelay          | Delay time to close                                          | `number`                                                     | `150`   |
| openDelay           | Delay time to show                                           | number                                                       | `150`   |
| autoFitPosition     | Whether to automatically adjust the position of the popup according to the viewport | `boolean`                                                    | `true`  |
| closeOnClick        | Whether to close popup when clicking the child node          | `boolean`                                                    | true    |
| defaultPopupVisible | Whether the popup is visible by default                      | `boolean`                                                    | `-`     |
| popupVisible        | Set whether the  popup is visible                            | `boolean`                                                    | `-`     |
| disabled            | Whether to disable the popup                                 | `boolean`                                                    | `-`     |

### Popover Event

| Props           | Desc                                                 | Type                         | Default |
| --------------- | ---------------------------------------------------- | ---------------------------- | ------- |
| onVisibleChange | Callback when the visibility of the popup is changed | `(visible: boolean) => void` | `-`     |



## Example

### Basic usage

```jsx
<Popover title="This is title" content="Popover">
	<Button>Popover</Button>
</Popover>
```

### Set popup position

```jsx
<Popover title="This is title" content="Popover" position="top">
	<Button>Popover</Button>
</Popover>
```

### Set popup's background color

```jsx
<Popover title="This is title" content="Popover" position="top" colorScheme="cyan">
	<Button>Popover</Button>
</Popover>
```

### Set arrow

```jsx
<Popover title="This is title" content="Popover" position="top" colorScheme="cyan" showArrow={false}>
	<Button>Popover</Button>
</Popover>
```

### Show  close icon

```jsx
<Popover title="This is title" content="Popover" position="top" colorScheme="cyan" hasCloseIcon>
	<Button>Popover</Button>
</Popover>
```

### Set popup's default visibility status

```jsx
<Popover title="This is title" content="Popover" position="top" colorScheme="cyan" defaultPopupVisible>
	<Button>Popover</Button>
</Popover>
```

### Set popup's delay time to open

```jsx
<Popover title="This is title" content="Popover" position="top" colorScheme="cyan" openDelay={1000} closeDelay={1000}>
	<Button>Popover</Button>
</Popover>
```

