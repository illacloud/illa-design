# Rate

Rate component is used for input rate interactively.

## Installation

```bash
yarn add @illa-design/rate
```

## Import component

```jsx
import { Rate } from "@illa-dedign/rate"
```

## API

### Rate Basic Properties

| Props        | Desc                                    | Type                                        | Default        |
| ------------ | --------------------------------------- | ------------------------------------------- | -------------- |
| defaultValue | Set default score                       | number                                      | -              |
| character    | Customize character of rate             | ReactNode \| ((index: number) => ReactNode) | `<StarIcon />` |
| count        | Set max score                           | number                                      | 5              |
| value        | The selected score                      | number                                      | -              |
| tooltips     | Customize tooltip by each character     | string[]                                    | -              |
| allowHalf    | Whether to allow half selection         | boolean                                     | -              |
| allowClear   | Whether to allow clear when click again | boolean                                     | -              |
| readonly     | Whether is readonly                     | boolean                                     | -              |
| disabled     | Whether is disabled                     | boolean                                     | -              |
| heart        | Whether to show score with heart icon   | boolean                                     | -              |

### Rate Events

| Props         | Desc                                            | Type                    | Default |
| ------------- | ----------------------------------------------- | ----------------------- | ------- |
| onChange      | Callback when score is changed                  | (key: string) => void   | -       |
| onHoverChange | Callback when the score user hovered is changed | (value: number) => void | -       |

## Example

### Basic usage

```jsx
<Rate />
```

### Set default value

```jsx
<Rate defaultValue={5}>
```

### Set max score

```jsx
<Rate defaultValue={5} count={10}>
```

### Allow half selection

```jsx
<Rate allowHalf>
```

### Allow clear when click again

```jsx
<Rate allowHalf allowClear>
```

### Show score with heart icon

```jsx
<Rate allowHalf allowClear heart>
```

### Customize character of rate

```jsx
function TextWrapper(props) {
  return (
    <div
      style={{
        width: 24,
        lineHeight: "24px",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
      }}
    >
      {props.text}
    </div>
  )
}

<Rate
  style={{ display: "block", margin: "10px 0" }}
  defaultValue={3}
  character={<TextWrapper text="A" />}
/>
```
