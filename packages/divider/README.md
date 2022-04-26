# Divider

Divider is used to visually separate content.

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
| direction | setting direction of divider | "vertical" \| "horizontal"                  | "horizontal" |
| variant   | setting divider's variant    | "solid" \| "dashed" \| "dotted" \| "double" | "solid"      |

## Example
```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <Divider />
      <Divider />
      <Divider direction="vertical" />
      <Divider />
      <Divider direction="vertical" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
      <Divider variant="double" />
    </>`

export const importStatement = `import { Divider } from "@illa-design/divider"`

export const packages = {"@illa-design/divider":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```
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
