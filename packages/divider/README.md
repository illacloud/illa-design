# Divider

Divider is used to visually separate content

## Install

```jsx
yarn add @illa-design/divider
```

## Import component

```jsx
import {Divider} from "@illa-design/divider"
```

## API

### Divider Basic Properties

| Props     | Desc                         | Type                                               | Default      |
| --------- | ---------------------------- | -------------------------------------------------- | ------------ |
| direction | setting direction of divider | string: "vertical" \| "horizontal"                 | "horizontal" |
| variant   | setting divider's variant    | string: "solid" \| "dashed" \| "dotted" \|"double" | "solid"      |

## Example

### Basic usage

```jsx
<Divider />
```

### Set divider's direction

```jsx
<Divider />
<Divider direction="vertical" />
```

### Set divider's variant

```jsx
<Divider/>
<Divider direction="vertical" />
<Divider variant="dashed" />
<Divider variant="dotted" />
<Divider variant="double" />
```

