# Button

The Button component is used to trigger an action or event, such as submitting a form, delete a data, and so on.

## Installation

```bash
yarn add @illa-design/button
```

## Import component

```jsx
import { Button } from "@illa-design/button"
```

## API

### Button Basic Properties

| Props       | Desc                                                  | Type                                                         | Default |
| ----------- | ----------------------------------------------------- | ------------------------------------------------------------ | ------- |
| colorScheme | Set background color                                  | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue"  \| "cyan" \| "purple" | "blue"    |
| size        | Set size                                              | "small" \| "medium" \| "large"                               | "small"   |
| variant     | Set style pattern                                     | "fill" \| "dashed" \| "outline" \| "text"                    | "fill"    |
| shape       | Set shape                                             | "square" \| "round"                                          | "square"  |
| fullWidth   | Set the width of the button adapts with the container | boolean                                                      | -       |
| loading     | Set loading status of the button                      | boolean                                                      | -       |
| loadingText | Set button's text when loading status                 | string                                                       | -       |
| disabled    | Set disabled status                                   | boolean                                                      | -       |
| leftIcon    | Set left icon                                         | ReactNode                                                    | -       |
| rightIcon   | Set right icon                                        | ReactNode                                                    | -       |

### Button Events

| Props   | Desc                                  | Type               | Default |
| ------- | ------------------------------------- | ------------------ | ------- |
| onClick | Set the handler to handle click event | (e: Event) => void | -       |

ButtonGroup can combine multiple buttons and setting the basic properties of multiple buttons

### ButtonGroup Basic Props

| Props    | Desc                    | Type             | Default |
| -------- | ----------------------- | ---------------- | ------- |
| spacing  | Set gap between buttons | number \| string | "8px"     |
| attached | Combine buttons         | boolean          | -       |

## Example

### Basic usage

```jsx
<Button>Hello</Button>
```

### Set Button's size

```jsx
<Button>Hello</Button>
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### Set Button's variant and background color

```jsx
<Button>Hello</Button>
<Button variant="outline" colorScheme="cyan">Hello</Button>
```

### Set Button's icons

```jsx
<Button>Hello</Button>
<Button variant="fill" colorScheme="red" leftIcon={<BsArrowLeft />} rightIcon={<BsArrowRight />}>Hello</Button>
```

### Set Button's disabled status or loading status

```jsx
<Button>Hello</Button>
<Button disabled>Hello</Button>
<Button loading loadingText="Loading">Hello</Button>
```

### Set ButtonGroup's variant and spacing

```jsx
<ButtonGroup variant="outline" spacing="5px">
  <Button>Hello</Button>
  <Button disabled>Hello</Button>
  <Button loading loadingText="Loading">Hello</Button>
</ButtonGroup>
<ButtonGroup variant="outline" attached>
  <Button leftIcon={<BsArrowLeft />} />
  <Button>Hello</Button>
  <Button rightIcon={<BsArrowRight />} />
</ButtonGroup>
```
