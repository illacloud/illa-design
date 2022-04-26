# Anchor

You can quickly find the location of the information through the anchor component.

## Installation

```bash
yarn add @illa-design/anchor
```

## Import component

```jsx
import { Anchor } from "@illa-design/anchor"
```

## API

### Anchor Basic Properties

| Props           | Desc                                                         | Type                                                | Default |
| --------------- | ------------------------------------------------------------ | --------------------------------------------------- | ------- |
| animation       | Whether to scroll smoothly                                   | boolean                                             | true    |
| scrollContainer | The scroll container                                         | string \| HTMLElement \| Window                     | -       |
| boundary        | The scroll boundary value. After setting this value to a number, it will stop scrolling when it is a distance from the scroll container boundary | number \| "end" \| "start" \| "center" \| "nearest" | "start" |
| hash            | Whether to change the hash                                   | boolean                                             | true    |
| affix           | Whether to used the Affix  component                         | boolean                                             | true    |
| lineless        | Whether to show the left side line                           | boolean                                             | -       |

### Anchor Events

| Props    | Desc                                            | Type                                         | Default |
| -------- | ----------------------------------------------- | -------------------------------------------- | ------- |
| onChange | Callback when the anchor changes when scrolling | (newLink: string, oldLink: string) => void | -     |
| onSelect | Callback when the anchor is clicked             | (newLink: string, oldLink: string) => void | -    |

### AnchorLink Basic Properties 

| Props | Desc                 | Type                       | Default |
| ----- | -------------------- | -------------------------- | ------- |
| href  | Link of the anchor   | string                   | "#"     |
| title | Title of anchor link | string | React.ReactNode | -     |

## Example

### Basic usage 

```jsx
<Anchor />
```

### Set Anchor link

```jsx
<Anchor>
  <AnchorLink title="anchor" href="#anchor" />
</Anchor>
```
