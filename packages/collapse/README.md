# Collapse

The collapse component is a content area that can be collapsed.

## Installation

```bash
yarn add @illa-design/collapse
```

## Import component

```jsx
import { Collapse } from "@illa-design/collapse"
```

## API

### Collapse Basic Properties

| Props              | Desc                                   | Type               | Default |
| ------------------ | -------------------------------------- | ------------------ | ------- |
| activeKey          | Current panel selected value           | string \| string[] | -       |
| defaultActiveKey   | Default expanded panel                 | string \| string[] | -       |
| accordion          | Whether it is in accordion mode        | boolean            | -       |
| expandIcon         | Custom expand icon                     | ReactNode          | -       |
| expandIconPosition | Position of the expand icon            | "left" \| "right"  | "left"  |
| bordered           | Whether it is bordered                 | boolean            | true    |
| destroyOnHide      | Whether to destroy the collapsed panel | boolean            | -       |

### Collapse Events

| Props    | Desc                                     | Type       | Default |
| -------- | ---------------------------------------- | ---------- | ------- |
| onChange | Callback when the expanded panel changes | () => void | -       |

### Collapse-item Basic Properties

| Props          | Desc                                                         | Type            | Default |
| -------------- | ------------------------------------------------------------ | --------------- | ------- |
| header         | Collapse panel header content, allowing customization        | React.ReactNode | -       |
| name           | Corresponding to activeKey, the unique identifier of the current panel component | string          | -       |
| disabled       | Whether to disable                                           | boolean         | -       |
| expandIcon     | Custom expand icon                                           | ReactNode       | -       |
| showExpandIcon | Whether to show the expand button                            | boolean         | true    |
| extra          | Extra node                                                   | ReactNode       | -       |
| destroyOnHide  | Whether to destroy the node when the panel is collapsed, the priority is higher than the destroyOnHide of Collapse | boolean         | -       |

## Examples

### Basic usage

```jsx
<Collapse
  style={{ maxWidth: 1260, marginBottom: 20 }}
 {...props}
>
  <CollapseItem
    header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
    name="1"
  >
    Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
  </CollapseItem>

  <CollapseItem
    header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
    name="2"
    disabled
  >
    Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
  </CollapseItem>

  <CollapseItem
    header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
    name="3"
  >
    Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
  </CollapseItem>
</Collapse>
```
