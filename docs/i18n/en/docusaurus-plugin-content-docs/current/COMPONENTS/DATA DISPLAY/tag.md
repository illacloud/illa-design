# Tag

Tag is generally used to mark attributes, dimensions or categories of things.

## Installation

```bash
yarn add @illa-design/tag
```

## Import component

```jsx
import { Tag } from "@illa-design/tag"
```

## API

### Tag Basic Properties

| Props       | Desc                                | Type                                                         | Default   |
| ----------- | ----------------------------------- | ------------------------------------------------------------ | --------- |
| colorScheme | Setting backgrount color            | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple"\| string` | `gray`  |
| size        | Setting size                        | `"small" \| "medium" \| "large"`                             | `small` |
| visible     | Setting whether the Tag is visiable | `boolean`                                                    |` -`       |
| closable    | Setting whether the Tag is visiable | `boolean`                                                    |` -`       |
| variant     | Setting style pattern               | `"outline" \| "fill" \| "light"`                             | `light` |

### Tag Extented Props

| Props | Desc                    | Type      | Default |
| ----- | ----------------------- | --------- | ------- |
| icon  | Setting Tag's left icon | `ReactNode` | `-`       |

### Tag Events

| Props   | Desc                         | Type       | Default |
| ------- | ---------------------------- | ---------- | ------- |
| onClose | Callback when the Tag closed | `() => void` | `-`       |

## Example

### Basic usage

```jsx
<Tag />
```

### Set Tag's size

```jsx
<Tag>Hello</Tag>
<Tag size="small">Small</Tag>
<Tag size="medium">Medium</Tag>
<Tag size="large">Large</Tag>
```

### Set Tag's style parttern and background

```jsx
<Tag>Hello</Tag>
<Tag variant="fill" colorScheme="red">Hello</Tag>
```

### With left icon

```jsx
<Tag>Hello</Tag>
<Tag variant="fill" colorScheme="red" icon={<BsFacebook />}>Hello</Tag>
```

### With close button

```jsx
<Tag>Hello</Tag>
<Tag variant="fill" colorScheme="red" icon={<BsFacebook />} closable>Hello</Tag>
```
