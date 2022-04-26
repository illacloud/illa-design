# Divider

Divider is used to visually separate content

## Installation

```bash
yarn add @illa-design/divider
```

## Import component

```jsx
import { Divider } from "@illa-design/divider"
```

## API

### Divider Basic Properties

| Props     | Desc                         | Type                                        | Default      |
| --------- | ---------------------------- | ------------------------------------------- | ------------ |
| direction | setting direction of divider |  `"vertical" \| "horizontal"`                 | `horizontal` |
| variant   | setting divider's variant    | ` "solid" \| "dashed" \| "dotted" \| "double"` |` solid `     |

## Example

### Basic usage

```jsx
<Divider />
```

### Set Divider's direction

```jsx
<Divider />
<Divider direction="vertical" />
```

### Set Divider's variant

```jsx
<Divider />
<Divider direction="vertical" />
<Divider variant="dashed" />
<Divider variant="dotted" />
<Divider variant="double" />
```

