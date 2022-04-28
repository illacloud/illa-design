# Descriptions

This component is used for the display of read-only information.

## Installation

```bash
yarn add @illa-design/Descriptions
```

## Import component

```jsx
import { Descriptions } from "@illa-design/descriptions"
```

## API

### Descriptions Basic Properties

| Props    | Desc                         | Type                                                         | Default      |
| -------- | ---------------------------- | ------------------------------------------------------------ | ------------ |
| bordered | If true, show the border     | boolean                                                      | false        |
| column   | Number of data in one column | number                                                       | 3            |
| align    | Left align or right align    | "left" \| "right"                                            | "left"       |
| layout   | The layout of description    | "horizontal" \| "vertical \|  "inlineHorizontal" \| "inlineVertical"" | "horizontal" |
| size     | The size of description      | "small" \| "medium" \| "large"                               | "medium"     |
| title    | The title of description     | ReactNode                                                    | -            |

### Descriptions-item Basic Properties

| Props | Desc  | Type   | Default |
| ----- | ----- | ------ | ------- |
| label | Label | string | -       |
| value | Value | string | -       |
| span  | span  | number | 1       |

## Examples

### Basic usage

```jsx
<Description
  data={[
    {
      label: "Name",
      value: "ILLA",
    },
    {
      label: "Mobile",
      value: "123-1234-1234",
    },
    {
      label: "Residence",
      value: "Beijing",
    },
    {
      label: "Hometown",
      value: "Beijing",
    },
    {
      label: "Date of Birth",
      value: "2020-05-15",
      span: 2,
    },
    {
      label: "Address",
      value: "Building, Road, Beijing",
      span: 3,
    },
  ]}
/>
```

### Set large size and left align

```jsx
<Description
  align={"left"}
  size={"large"}
  layout="horizontal"
  column={1}
  data={dataList}
/>
```
