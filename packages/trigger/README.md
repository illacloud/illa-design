# Trigger

The basic component of all popup component. it used to show more information by hovering, focusing, or clicking on a element

## Installation

```jsx
yarn add @illa-design/trigger
```

## Import

```jsx
import { Trigger } from "@illa-dedign/trigger"
```

## API

### Trigger Basic Properties

| Props               | Desc                                                         | Type                                                         | Default      |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ |
| colorScheme         | Set background color                                         | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue"  \| "cyan" \| "purple" \| string| "gray" | 
| content             | The content shown in popup                                   | string \| ReactNode                                          | -            |
| trigger             | Types of events that cause the popup to show                 | "hover" \| "click" \| "focus"                                | "hover"      |
| position            | The position of the popup relative to the target.            | "top"\| "tl"\| "tr"\| "bottom"\| "bl"\| "br"\| "left"\| "lt"\| "lb"\| "right"\| "rt"\| "rb" | "top"        |
| showArrow           | Whether to display arrow node                                | boolean                                                      | true         |
| closeDelay          | Delay time to close                                          | number                                                       | 150          |
| openDelay           | Delay time to show                                           | number                                                       | 150          |
| autoFitPosition     | Whether to automatically adjust the position of the popup according to the viewport | boolean                                                      | true         |
| closeOnClick        | Whether to close popup when clicking the child node          | boolean                                                      | true         |
| defaultPopupVisible | Whether the popup is visible by default                      | boolean                                                      | -            |
| popupVisible        | Set whether the  popup is visible                            | boolean                                                      | -            |
| disabled            | Whether to disable the popup                                 | boolean                                                      | -            |

### Trigger Event

| Props          | Desc                                                 | Type                       | Default |
| --------------- | ---------------------------------------------------- | -------------------------- | ------ |
| onVisibleChange | Callback when the visibility of the popup is changed | (visible: boolean) => void | -      |



## Example

### Basic usage

```jsx
<Trigger content="Trigger">
	<Button>Trigger</Button>
</Trigger>
```

### Set popup position

```jsx
<Trigger content="Trigger" position="top">
	<Button>Trigger</Button>
</Trigger>
```

### Set popup's background color

```jsx
<Trigger content="Trigger" position="top" colorScheme="cyan">
	<Button>Trigger</Button>
</Trigger>
```

### Set arrow

```jsx
<Trigger content="Trigger" position="top" colorScheme="cyan" showArrow={false}>
	<Button>Trigger</Button>
</Trigger>
```

### Set popup's default visibility status

```jsx
<Trigger content="Trigger" position="top" colorScheme="cyan" defaultPopupVisible>
	<Button>Trigger</Button>
</Trigger>
```

### Set popup's delay time to open


```jsx
<Trigger content="Trigger" position="top" colorScheme="cyan" openDelay={1000} closeDelay={1000}>
	<Button>Trigger</Button>
</Trigger>
```

