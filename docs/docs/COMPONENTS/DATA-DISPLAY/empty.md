# Empty

The empty component is used to display text or image when the content is empty.

## Installation

```bash
yarn add @illa-design/empty
```

## Import component

```jsx
import { Empty } from "@illa-dedign/empty"
```

## API

### Empty Basic Properties

| Props       | Desc                | Type        | Default |
| ----------- | ------------------- | ----------- | ------- |
| description | The description     | `ReactNode` | `-`     |
| icon        | The displayed icon  | `ReactNode` | `-`     |
| imgSrc      | The displayed image | `string`    | `-`     |

## Example

### Basic Usage 

```jsx
<Empty />
```

### Set the description

```jsx
<Empty description={"test description"} />
```
