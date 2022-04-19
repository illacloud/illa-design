# Card

 The Card component classifies information into titles and details

## Installation

```bash
yarn add @illa-design/card
```

## Import component

```jsx
import { Card } from "@illa-design/card"
```

## API

### Card Basic Properties

| Props       | Desc                                   | Type                 | Default    |
| ----------- | -------------------------------------- | -------------------- | ---------- |
| bordered    | If true, the card is bordered          | `boolean `           | `true`     |
| loading     | If true, the card is on loading status | `boolean `           | `false`    |
| hoverable   | If true, the card is hoverable         | `boolean `           | `false`    |
| size        | The size of the card                   | `"small" \| "medium"` | `"medium"` |
| headerStyle | The header style                       | `object `            | `-`        |
| bodyStyle   | The body style                         | `object `            | `-`        |
| title       | The title of the card                  | `string `            | `-`        |
| extra       | The extra actions area on the top      | `string `            | `-`        |
| cover       | The cover of the card                  | `string `            | `-`        |
| actions     | The action area on the bottom          | `string `            | `-`        |

### cardMeta Basic Properties

| Props       | Desc                        | Type                   | Default |
| ----------- | --------------------------- | ---------------------- | ------- |
| title       | The title of the card       | `string \| ReactNode ` | `-`     |
| description | The description of the card | `string \| ReactNode `  | `-`     |
| avatar      | The avatar of the card      | `ReactNode `           | `-`     |

### cardGrid Basic Properties

| Props     | Desc                           | Type      | Default |
| --------- | ------------------------------ | --------- | ------- |
| hoverable | If true, the card is hoverable | `boolean` | `-`     |

## Examples

### Basic usages

```jsx
<Card size="small" title="small" extra={<Link>More</Link>}>
  <p>Hello</p>
  <p>Hello</p>
  <p>Hello</p>
</Card>
```

### Set cardMeta 

```jsx
<Card actions={[<LikeIcon />, <ShareIcon />, <MoreIcon />]}>
  <Meta title="CardMeta" description="MetaContent" avatar={<Avatar />} />
</Card>
```

### Set CardGrid

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

