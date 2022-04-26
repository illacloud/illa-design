# Drawer

The Drawer component are panels that slide out from the edge of the screen.

## Installation

```bash
yarn add @illa-design/drawer
```

## Import component

```jsx
import { Drawer } from "@illa-design/drawer"
```

## API

### Drawer Basic Properties

| Props             | Desc                                                          | Type            | Default             |
| ----------------- | ------------------------------------------------------------- | --------------- | ------------------- |
| title             | Title of drawer                                               | ReactNode       | -                   |
| footer            | Custom Button Confirm and Cancel Buttons                      | boolea          | -                   |
| okText            | Text on confirm button                                        | string          | -                   |
| cancelText        | Text on cancel button                                         | string          | -                   |
| placement         | Placement of drawer                                           | DrawerPlacement | "right"             |
| width             | Width of  drawer                                              | string \       | number | 250        |
| height            | Height of drawer                                              | string \       | number | 250        |
| mask              | whether to show the mask                                      | boolean         | true                |
| visible           | whether to show popup                                         | boolean         | -                   |
| closable          | Whether to display the close button in the upper right corner | boolean         | true                |
| maskClosable      | Whether the mask can be closed                                | boolean         | true                |
| confirmLoading    | Whether the confirm button is in the loading state            | boolean         | -                   |
| getPopupContainer | Get popup container                                           | () => Element   | () => document.body |

### Drawer Events

| Props      | Desc                              | Type                     | Default |
| ---------- | --------------------------------- | ------------------------ | ------- |
| onCancel   | Callback for closing the popup    | () => void               | -       |
| onOk       | Callback for confirm button click | (e?: MouseEvent) => void | -       |
| afterOpen  | Callback after drawer is opened   | () => void               | -       |
| afterClose | Callback after drawer is closed   | () => void               | -       |

## Examples

### Basic properties

```jsx
<Drawer visible={true} title={"Drawer title"} />
```

### Set the placement as left

```jsx
<Drawer visible={true} placement={"left"} />
```
