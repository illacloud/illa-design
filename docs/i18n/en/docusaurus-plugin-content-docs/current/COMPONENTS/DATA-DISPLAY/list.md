# List

The list component is used to display text, pictures or paragraphs.

## Installation

```bash
yarn add @illa-design/list
```

## Import component

```jsx
import { List } from "@illa-dedign/list"
```

## API

### List Basic Properties

| Props        | Desc                                   | Type                             | Default    |
| ------------ | -------------------------------------- | -------------------------------- | ---------- |
| data         | Data of the list item                  | `any[] `                         | `-`        |
| size         | Size of the list                       | `"small" \| "medium" \| "large"` | `"medium"` |
| bordered     | If true, the list is bordered          | `boolean`                        | `true`     |
| split        | If true, show the split line           | `boolean`                        | `true`     |
| loading      | If true, the list is on loading status | `boolean `                       | `false`    |
| hasMore      | If true, the list can load more        | `boolean`                        | `-`        |
| loader       | The load more area                     | `ReactNode`                      | `-`        |
| endMessage   | When the loading ends                  | `ReactNode`                      | `-`        |
| hoverable    | If true, the list is hoverable         | `boolean`                        | `false`    |
| height       | Max height of the list                 | `number`                         | `0`        |
| bottomOffset | The distance to the bottom             | `number`                         | `0`        |
| header       | The header of the list                 | `ReactNode`                      | `-`        |
| footer       | The footer of the list                 | `ReactNode`                      | `-`        |
| render       | Render item                            | `ReactNode`                      | `-`        |
| renderKey    | Render item key                        | `string`                         | `-`        |

### List Events

| Props         | Desc                      | Type | Default |
| ------------- | ------------------------- | ---- | ------- |
| onScroll      | Callback when scroll      | `- ` | `-`     |
| onReachBottom | Calback when reach bottom | `-`  | `-`     |



### List-item Basic Properties

| Props   | Desc                               | Type        | Default |
| ------- | ---------------------------------- | ----------- | ------- |
| actions | The bottom action area             | `ReactNode` | `-`     |
| extra   | The extra action area on the right | `ReactNode` | `-`     |

### List-item-meta Basic Properties

| Props       | Desc                        | Type        | Default |
| ----------- | --------------------------- | ----------- | ------- |
| title       | The title of the list item  | `ReactNode` | `-`     |
| avatar      | The avatar of the list item | `ReactNode` | `-`     |
| description | The description of the item | `ReactNode` | `-`     |

## Examples

### Basic usage

```jsx
<List
  data={[
    { title: "Title A", description: "Desc A" },
    { title: "Title B", description: "Desc B" },
    { title: "Title C", description: "Desc C" },
    { title: "Title D", description: "Desc D" },
    { title: "Title E", description: "Desc E" },
  ]}
  render={(data, index) => {
   return (
      <ListItem
        actions={<Button>Actions</Button>}
        extra={<Image src={"https://devbo.cn/logo.svg"} />}
      >
        <ListItemMeta title={data.title} description={data.description} />
      </ListItem>
    )
  }}
  renderKey={(data, index) => {
    return index.toString()
  }}
/>,
```

### Set list bordered

```jsx
<List
 data={[
    { title: "Title A", description: "Desc A" },
    { title: "Title A", description: "Desc A" },
  ]}
  render={(data) => {
    return (
     <ListItem>
        <ListItemMeta title={data.title} description={data.description} />
          </ListItem>
        )
      }}
      renderKey={(data, index) => {
        return index.toString()
 }}
/>,
```
