# Spin

The Spin component is stand for loading status.

## Installation

```bash
yarn add @illa-design/spin
```

## Import component

```jsx
import { Spin } from "@illa-design/spin"
```

## API

### Spin Basic Properties

| Props   | Desc                      | Type       | Default                  |
| ------- | ------------------------- | ---------- | ------------------------ |
| loading | Whether is loading or not | boolean    | -                        |
| size    | The size of the spin      | "small" \ | "medium" \| "large" | - |
| icon    | Custom icon               | ReactNode  | -                        |
| element | Custom element            | ReactNode  | -                        |
| tip     | Tip text                  | string \  | ReactNode            | - |
| dot     | Whether to use dot style  | boolean    | -                        |

## Examples

### Basic usage

```jsx
<Spin placeholder={"spin"} />
```

### Set size as large

```jsx
<Spin size={"large"} placeholder={"spin"} />
```
