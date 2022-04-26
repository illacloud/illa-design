# Space

Space is used to set the spacing and arrangement between components.

## Installation

```bash
yarn add @illa-design/space
```

## Import component

```jsx
import { Space } from "@illa-design/space"
```

## API

### Space Basic Properties

| Props     | Desc                                  | Type                                               | Default      |
| --------- | ------------------------------------- | -------------------------------------------------- | ------------ |
| size      | The space between the each child      | "mini" \| "small" \| "medium" \| "large" \| string | "small"      |
| align     | Setting alignment                     | "start" \| "center" \| "end" \| "baseline"         | "center"     |
| direction | Setting arrangement direction         | "vertical" \| "horizontal"                         | "horizontal" |
| divider   | Adding divider between the each child | boolean                                            | -            |
| wrap      | setting wrap                          | boolean                                            | -            |

## Example

### Basic usage

```jsx
<Space />
```

### Setting space size

```jsx
<Space size="large" />
```

### Setting alignment

```jsx
<Space alige="start">
  <Tag>Hello</Tag>
  <Tag size="small">Small</Tag>
  <Tag size="medium">Medium</Tag>
  <Tag size="large">Large</Tag>
</Space>
```

### Setting arrangement direction 

```jsx
<Space direction="vertical">
  <Tag>Hello</Tag>
  <Tag size="small">Small</Tag>
  <Tag size="medium">Medium</Tag>
  <Tag size="large">Large</Tag>
</Space>
```

### Adding divider between the each child

```jsx
<Space divider>
  <Tag>Hello</Tag>
  <Tag size="small">Small</Tag>
  <Tag size="medium">Medium</Tag>
  <Tag size="large">Large</Tag>
</Space>
```

### Setting wrap

```jsx
<Space wrap>
  <Tag>Hello</Tag>
  <Tag size="small">Small</Tag>
  <Tag size="medium">Medium</Tag>
  <Tag size="large">Large</Tag>
</Space>
```
