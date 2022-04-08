# Link 

The Link component is used to display links.

## Installlation

```bash
yarn add @illa-design/link
```

## Import component

```jsx
import { Link } from "@illa-dedign/link"
```

## API

### Link Basic Properties

| Props       | Desc                                            | Type                                                         | Default   |
| ----------- | ----------------------------------------------- | ------------------------------------------------------------ | --------- |
| colorScheme | Color of the link                               | `"white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" ` | `"blue"`  |
| icon        | Setting the default when icon=true              | `ReactNode \| boolean`                                        | `-`   |
| disabled    | The link is disabled or not                     | `boolean`                                                    | `"small"` |
| hoverable   | Showing the under color of the link while hover | `boolean`                                                    | `-`       |

## Example

### Basic usage

```jsx
<Link />
```

### Disabled

```jsx
<Link disabled> Link </Link>>
```

### Set link's color

```jsx
<Link colorScheme="yellow"> Link </Link>

```

## Set link's hover under color

```jsx
<Link hoverable={false}> Link </Link>
```
