# Popconfirm

The Popconfirm component is used to display popup confirm box.

## Installation

```bash
yarn add @illa-design/popconfirm
```

## Import 

```jsx
import { Popconfirm } from "@illa-design/popconfirm"
```

## API

### Popconfirm Basic Properties

| Props               | Desc                                             | Type                                                         | Default  |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------ | -------- |
| position            | The position of the popconfirm                   | `"top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br" \| "left" \| "lt" \| "lb" \| "right" \| "rt"\| "rb" ` | `"top"`  |
| title               | Title                                            | `ReactNode`                                                  | `-`      |
| cancelText          | Text on cancel button                            | `string`                                                     | `-`      |
| okText              | Text on confirm button                           | `string`                                                     | `-`      |
| okButtonProps       | Props of confirm button                          | `ButtonProps `                                               | `-`      |
| cancelButtonProps   | Props of cancel button                           | `ButtonProps `                                               | `-`      |
| defaultPopupVisible | If true, the popup is visible                    | `Boolean `                                                   | `-`      |
| popupVisible        | If true, the popup is visible(controlled)        | `Boolean `                                                   | `-`      |
| icon                | Custom icon                                      | `Boolean `                                                   | `-`      |
| trigger             | Trigger Props                                    | `TriggerProps `                                              | `-`      |
| okColorScheme       | Color of the confirm button                      | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" ` | `"blue"` |
| cancelColorScheme   | Color of the cancel button                       | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" ` | `"gray"` |
| clickOutsideToClose | If true, close when click outside the popup      | `Boolean `                                                   | `-`      |
| showArrow           | If true, show the arrow of the popup             | `Boolean `                                                   | `-`      |
| closeDelay          | Delay time when close                            | `number `                                                    | `-`      |
| openDelay           | Delay time when open                             | `number `                                                    | `-`      |
| autoFitPosition     | If true, auto fit position when there is no room | `Boolean `                                                   | `-`      |
| closeOnClick        | If true, click to close the popup                | `Boolean `                                                   | `-`      |
| autoAlignPopupWidth | If true, auto align the width of the popup       | `Boolean `                                                   | `-`      |

### Popconfirm Events

| Props           | Desc                               | Type                         | Default |
| --------------- | ---------------------------------- | ---------------------------- | ------- |
| onOK            | Callback when click confirm button | `() => void`                 | `-`     |
| onCancel        | Callback when click cancel button  | `() => void`                 | `-`     |
| onVisibleChange | Callback when popup open and close | `(visible: boolean) => void` | `-`     |

## Examples

### Basic usage

```jsx
<Popconfirm title="Visible" closeDelay={0} openDelay={0} position={"bl"}>
  <Button>Click</Button>
</Popconfirm>
```

### Set the text on buttons and the popup position

```jsx
<Popconfirm
  title="Visible"
  position={"bl"}
  okText={"ok-test"}
  cancelText={"cancel-text"}
>
  <Button>Click</Button>
</Popconfirm>
```

### Set icon

```jsx
<Popconfirm title="Visible" position={"bl"} icon={<SearchIcon />}>
    <Button>Click</Button>
</Popconfirm>
```
