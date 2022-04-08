# Card卡片

将信息分类后分标题、详情等区域聚合展现，一般作为简洁介绍或者信息的大盘和入口。

## 安装

```bash
yarn add @illa-design/card
```

## 引用组件

```jsx
import { Card } from "@illa-dedign/card"
```

## 组件接口（API）

### Card 基础属性

| Props       | Desc                 | Type                  | Default    |
| ----------- | -------------------- | --------------------- | ---------- |
| bordered    | 是否有边框           | `boolean `            | `true`     |
| loading     | 是否为加载中         | `boolean `            | `false`    |
| hoverable   | 是否可悬浮           | `boolean `            | `false`    |
| size        | 卡片尺寸             | `"small" \| "medium"` | `"medium"` |
| headerStyle | 自定义标题区域样式   | `object `             | `-`        |
| bodyStyle   | 内容区域自定义样式   | `object `             | `-`        |
| title       | 卡片标题             | `string `             | `-`        |
| extra       | 卡片右上角的操作区域 | `string `             | `-`        |
| cover       | 卡片封面             | `string `             | `-`        |
| actions     | 卡片底部的操作组     | `string `             | `-`        |

### cardMeta基础属性

| Props       | Desc | Type                   | Default |
| ----------- | ---- | ---------------------- | ------- |
| title       | 标题 | `string \| ReactNode ` | `-`     |
| description | 描述 | `string \|ReactNode `  | `-`     |
| avatar      | 头像 | `ReactNode `           | `-`     |

### cardGrid 基础属性

| Props     | Desc         | Type      | Default |
| --------- | ------------ | --------- | ------- |
| hoverable | 是否可以悬浮 | `boolean` | `-`     |

## 使用方法

### 基础用法

```jsx
<Card size="small" title="small" extra={<Link>More</Link>}>
  <p>Hello</p>
  <p>Hello</p>
  <p>Hello</p>
</Card>
```

### 设置cardMeta

```jsx
<Card actions={[<LikeIcon />, <ShareIcon />, <MoreIcon />]}>
  <Meta title="CardMeta" description="MetaContent" avatar={<Avatar />} />
</Card>
```

### 设置CardGrid

```jsx
<Card bordered={true} style={{ width: "100%" }}>
  {new Array(7).fill(null).map((_, index) => {
    const hoverable = index % 2 === 0
    return (
      <CardGrid key={index} hoverable={hoverable} style={{ width: "25%" }}>
        <Card
          style={{ width: "100%" }}
          title={`Card${index}`}
          extra={<Link>More</Link>}
        >
          {new Array(2).fill(null).map((_, index) => (
            <p style={{ margin: 0 }} key={index}>
              {hoverable ? "Card allow to hover" : "Card content"}
            </p>
          ))}
        </Card>
      </CardGrid>
    )
  })}
</Card>
```

