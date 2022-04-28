# Card

The Card component classifies information into titles and details.

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

| Props       | Desc                                   | Type                | Default  |
| ----------- | -------------------------------------- | ------------------- | -------- |
| bordered    | If true, the card is bordered          | boolean             | true     |
| loading     | If true, the card is on loading status | boolean             | false    |
| hoverable   | If true, the card is hoverable         | boolean             | false    |
| size        | The size of the card                   | "small" \| "medium" | "medium" |
| headerStyle | The header style                       | object              | -        |
| bodyStyle   | The body style                         | object              | -        |
| title       | The title of the card                  | string              | -        |
| extra       | The extra actions area on the top      | string              | -        |
| cover       | The cover of the card                  | string              | -        |
| actions     | The action area on the bottom          | string              | -        |

### cardMeta Basic Properties

| Props       | Desc                        | Type                | Default |
| ----------- | --------------------------- | ------------------- | ------- |
| title       | The title of the card       | string \| ReactNode | -       |
| description | The description of the card | string \| ReactNode | -       |
| avatar      | The avatar of the card      | ReactNode           | -       |

### cardGrid Basic Properties

| Props     | Desc                           | Type    | Default |
| --------- | ------------------------------ | ------- | ------- |
| hoverable | If true, the card is hoverable | boolean | -       |

## Examples

### Basic usages

```SnackPlayer dependencies=@illa-design/card,@illa-design/link
import React from 'react';
import { Card } from "@illa-design/card";
import { Link } from "@illa-design/link";

const App = () => {
    return (
      <Card size="small" title="small" extra={<Link>More</Link>}>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </Card>
    );
}

export default App;

```

```jsx
<Card size="small" title="small" extra={<Link>More</Link>}>
  <p>Hello</p>
  <p>Hello</p>
  <p>Hello</p>
</Card>
```

### Set cardMeta

```SnackPlayer dependencies=@illa-design/card,@illa-design/avatar,@illa-design/icon
import React from 'react';
import { Card , Meta} from "@illa-design/card";
import { Avatar } from "@illa-design/avatar";
import { LikeIcon , ShareIcon , MoreIcon } from "@illa-design/icon";

const App = () => {
    return (
      <Card actions={[<LikeIcon />, <ShareIcon />, <MoreIcon />]}>
        <Meta title="CardMeta" description="MetaContent" avatar={<Avatar />} />
      </Card>
    );
}

export default App;

```

```jsx
<Card actions={[<LikeIcon />, <ShareIcon />, <MoreIcon />]}>
  <Meta title="CardMeta" description="MetaContent" avatar={<Avatar />} />
</Card>
```

### Set CardGrid

```SnackPlayer dependencies=@illa-design/card,@illa-design/link,@illa-design/icon
import React from 'react';
import { Card , CardGrid} from "@illa-design/card";
import { LikeIcon , ShareIcon , MoreIcon } from "@illa-design/icon";
import { Link } from "@illa-design/link";

const App = () => {
    return (
      <Card bordered style={{ width: "100%" }}>
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
    );
}

export default App;

```

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
