# Comment

The comment component is used to display comment information.

## Installation

```jsx
yarn add @illa-design/comment
```

## Import component

```jsx
import { Comment } from "@illa-design/comment"
```

## API

### Comment Basic Properties

| Props    | Desc                      | Type                                                         | Default |
| -------- | ------------------------- | ------------------------------------------------------------ | ------- |
| actions  | Actions list              | `ReactNode`                                                  | `-`     |
| author   | Display as comment author | `ReactNode`                                                  | `-`     |
| avatar   | Display as comment avatar | `ReactNode`                                                  | `-`     |
| children | Children of comments      | `ReactNode`                                                  | `-`     |
| content  | Comment content           | `ReactNode`                                                  | `-`     |
| datetime | Datetime display          | `ReactNode`                                                  | `-`     |
| align    | Align method              | ` "left" \| "right" \| {datetime?: "left" \| "right";actions?: "left" \| "right";}` | `-`     |

## Eaxample

### Basic usage

```jsx
<Comment placeholder={"comment"} />
```

### Set align

```jsx
<Comment
  placeholder={"comment"}
  actions={<span>like</span>}
  align={"right"}
/>
```

### Set author

```jsx
<Comment
  author={<span>ILLA</span>}
  placeholder={"comment"}
/>
```
