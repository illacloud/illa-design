# Tabs 

Tabs is a component that organizing several contents in a view. It can change view by change tags

## Installation

```bash
yarn add @illa-design/tabs
```

## Import component

```jsx
import { Tabs } from "@illa-design/tabs"
```

## API

### Tabs Basic Properties

| Props            | Desc                                                         | Type                                                | Default  |
| ---------------- | ------------------------------------------------------------ | --------------------------------------------------- | -------- |
| tabPosition      | Position of tabs                                             | `"left" \| "right" \| "top" \| "bottom"`            | `top`    |
| animated         | Whether to turn on the transition animation                  | `boolean \|{ tabPane?: boolean; inkBar?: boolean }` | `false`  |
| size             | Size of tabs                                                 | `"small" \| "medium" \| "large"`                    | `medium` |
| variant          | Variant of tabs                                              | `"line" \| "text" \| "card" \| "capsule"`           | `line`   |
| activeKey        | The key of the currently selected tab                        | `string`                                            | `-`      |
| defaultActiveKey | The key of the default selected tab                          | `string`                                            | `-`      |
| editable         | Whether to allow adding or subtracting tabs. It only effect when `variant` is `card` | `boolean`                                           | `-`      |
| addIcon          | Configure add tab icon                                       | `ReactNode`                                         | `-`      |
| deleteIcon       | Configure delete tab icon                                    | `ReactNode`                                         | `-`      |
| tabBarSpacing    | Set gap between tabbar                                       | `number`                                            | `-`      |

### Tabs Events

| Props       | Desc                               | Type                    | Default |
| ----------- | ---------------------------------- | ----------------------- | ------- |
| onChange    | Callback when `activeKey` changed  | `(key: string) => void` | `-`     |
| onClickTab  | Callback when click tab            | `(key: string) => void` | `-`     |
| onAddTab    | Callback when click add tab icon   | `() => void`            | `-`     |
| onDeleteTab | Callback when click deletetab icon | `(key: string) => void` | `-`     |

### TabPane Basic Properties

| Props         | Desc                                                         | Type                   | Default |
| ------------- | ------------------------------------------------------------ | ---------------------- | ------- |
| key           | Key of  tab                                                  | `string`               | `-`     |
| title         | The title of Tab                                             | `string \| ReactNode ` | `-`     |
| destroyOnHide | Whether to destroy the DOM structure in the TabPane when the tab is hidden | `boolean`              | `true`  |
| disabled      | Whether the TabPane is disabled                              | `boolean`              | `-`     |
| closable      | Whether to allow the tab to be closed when `editable="true"` | `boolean`              | `true`  |



## Example

### Basic usage

```jsx
<Tabs defaultActiveTab="1" >
  <TabPane key="1" title="Tab 1">
    <Paragraph>This is Tab Panel 1</Paragraph>
  </TabPane>
  <TabPane key="2" title="Tab 2" disabled>
    <Paragraph>This is Tab Panel 2</Paragraph>
  </TabPane>
  <TabPane key="3" title="Tab 3">
    <Paragraph>This is Tab Panel 3</Paragraph>
  </TabPane>
</Tabs>
```

### Set tabs size

```jsx
<Tabs defaultActiveTab="1" size="large">
  <TabPane key="1" title="Tab 1">
    <Paragraph>This is Tab Panel 1</Paragraph>
  </TabPane>
  <TabPane key="2" title="Tab 2" disabled>
    <Paragraph>This is Tab Panel 2</Paragraph>
  </TabPane>
  <TabPane key="3" title="Tab 3">
    <Paragraph>This is Tab Panel 3</Paragraph>
  </TabPane>
</Tabs>
```

### Set tabs position

```jsx
<Tabs defaultActiveTab="1" size="large" tabPosition="left">
  <TabPane key="1" title="Tab 1">
    <Paragraph>This is Tab Panel 1</Paragraph>
  </TabPane>
  <TabPane key="2" title="Tab 2" disabled>
    <Paragraph>This is Tab Panel 2</Paragraph>
  </TabPane>
  <TabPane key="3" title="Tab 3">
    <Paragraph>This is Tab Panel 3</Paragraph>
  </TabPane>
</Tabs>
```

### Set tabs variant

```jsx
<Tabs defaultActiveTab="1" size="large" variant="card">
  <TabPane key="1" title="Tab 1">
    <Paragraph>This is Tab Panel 1</Paragraph>
  </TabPane>
  <TabPane key="2" title="Tab 2" disabled>
    <Paragraph>This is Tab Panel 2</Paragraph>
  </TabPane>
  <TabPane key="3" title="Tab 3">
    <Paragraph>This is Tab Panel 3</Paragraph>
  </TabPane>
</Tabs>
```

### Set transition animation

```jsx
<Tabs defaultActiveTab="1" size="large" variant="card" animated={false} >
  <TabPane key="1" title="Tab 1">
    <Paragraph>This is Tab Panel 1</Paragraph>
  </TabPane>
  <TabPane key="2" title="Tab 2" disabled>
    <Paragraph>This is Tab Panel 2</Paragraph>
  </TabPane>
  <TabPane key="3" title="Tab 3">
    <Paragraph>This is Tab Panel 3</Paragraph>
  </TabPane>
</Tabs>
```
