# 列表 List

用于展示文字、列表、图片、段落。

## 安装

```bash
yarn add @illa-design/list
```

## 引用组件

```jsx
import { List } from "@illa-design/list"
```

## 组件接口（API）

### List 基础属性

| Props        | Desc                           | Type                           | Default  |
| ------------ | ------------------------------ | ------------------------------ | -------- |
| data         | 列表数据，需要和 item 同时使用 | any[]                          | -        |
| size         | 列表大小                       | "small" \| "medium" \| "large" | "medium" |
| bordered     | 是否显示边框                   | boolean                        | true     |
| split        | 是否显示分割线                 | boolean                        | true     |
| loading      | 是否为加载中状态               | boolean                        | false    |
| hasMore      | 是否可以加载更多               | boolean                        | -        |
| loader       | 加载更多                       | ReactNode                      | -        |
| endMessage   | 加载结束                       | ReactNode                      | -        |
| hoverable    | 是否显示选中样式               | boolean                        | false    |
| height       | 列表的最大高度                 | number                         | 0        |
| bottomOffset | 触发到达底部的距离阀值         | number                         | 0        |
| header       | 列表头部                       | ReactNode                      | -        |
| footer       | 列表底部                       | ReactNode                      | -        |
| render       | 渲染 item                      | ReactNode                      | -        |
| renderKey    | item 的 key                    | string                         | -        |

### List 事件

| Props         | Desc                 | Type | Default |
| ------------- | -------------------- | ---- | ------- |
| onScroll      | 列表滚动时触发       | -    | -       |
| onReachBottom | 当列表到达底部时触发 | -    | -       |

### List-item 基础属性

| Props   | Desc           | Type      | Default |
| ------- | -------------- | --------- | ------- |
| actions | 列表项下方内容 | ReactNode | -       |
| extra   | 列表最右侧内容 | ReactNode | -       |

### List-item-meta 基础属性

| Props       | Desc             | Type      | Default |
| ----------- | ---------------- | --------- | ------- |
| title       | 列表元素标题     | ReactNode | -       |
| avatar      | 列表元素的图标   | ReactNode | -       |
| description | 列表元素描述内容 | ReactNode | -       |

## 使用方法

### 基础用法

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

### 设置 list 边框

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
