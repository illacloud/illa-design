# Dropdown

It used to collect multiple commands into a floating container

## Installation

```bash
yarn add @illa-design/dropdown
```

## Import component

```jsx
import { Dropdown } from "@illa-dedign/dropdown"
```

## API

### Dropdown Basic Properties

| Props               | Desc                                      | Type                                                | Default |
| ------------------- | ----------------------------------------- | --------------------------------------------------- | ------- |
| droplist            | Set content of dropdown                   | `ReactNode`                                         | `-`     |
| position            | Set the position of  dropdown             | `"top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br"` | `bl`    |
| trigger             | Set the interaction type of show dropdown | `array<"hover" \| "click" > `                       | `hover` |
| disabled            | Whether disable dropdown                  | `boolean`                                           | `-`     |
| defaultPopupVisible | Whether open dropdown by default          | `boolean`                                           | `-`     |
| popupVisible        | Whether open dropdown                     | `boolean`                                           | `-`     |
| triggerProps        | set trigger's properties                  | `TriggerProps`                                      | `-`     |

### Dropdown Events

| Props           | Desc                                           | Type                         | Default |
| --------------- | :--------------------------------------------- | ---------------------------- | ------- |
| onVisibleChange | Callback when dropdown‘s visible status change | `(visible: boolean) => void` | `-`     |

## Example

### Basic usage

```jsx
const dropList = (
  <Menu>
    <Item title={"Blog"} key={"1"} disabled />
    <Item title={"Tutorial"} key={"2"} />
    <Item title={"Docs"} key={"3"} />
    <Item title={"Community"} key={"4"} />
    <Item title={"Github"} key={"5"} />
  </Menu>
)
<Dropdown droplist={dropList}>
  <Button>Hover me</Button>
</Dropdown>
```

### Set position of dropdown

```jsx
const dropList = (
  <Menu>
    <Item title={"Blog"} key={"1"} disabled />
    <Item title={"Tutorial"} key={"2"} />
    <Item title={"Docs"} key={"3"} />
    <Item title={"Community"} key={"4"} />
    <Item title={"Github"} key={"5"} />
  </Menu>
)
<Dropdown droplist={dropList} position="bl">
  <Button>Hover me</Button>
</Dropdown>
```
