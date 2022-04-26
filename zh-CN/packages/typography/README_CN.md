# Typography

Typography is used to show text information. It has 3 child component: Heading, Text, Paragraph.

## Installation

```bash
yarn add @illa-design/typography
```

## Import component

```jsx
import { Typography } from "@illa-design/typography"
```

## API

### Typography Basic Properties

| Props     | Desc                 | Type          | Default      |
| --------- | -------------------- | ------------- | ------------ |
| style     | Additional style     | CSSProperties | -            |
| className | Additional css class | string \     | string[] | - |

### Heading Basic Properties

| Props       | Desc                   | Type       | Default                                                                                                                                              |
| ----------- | ---------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| colorScheme | Set font color         | "white"\  | "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green"  \| "blue" \| "cyan" \| "purple" \| string | "blackAlpha" |
| level       | Heading level          | "h1" \    | "h2" \| "h3" \| "h4" \| "h5" \| "h6"                 | "h2"                                                                                      |
| bold        | Set bold style         | boolean    | -                                                                                                                                                    |
| disabled    | Set disable style      | boolean    | -                                                                                                                                                    |
| mark        | Set mark style         | boolean \ | colorScheme                                       | -                                                                                                |
| underline   | Underline  style       | boolean    | -                                                                                                                                                    |
| delete      | Strikethrough style    | boolean    | -                                                                                                                                                    |
| code        | Code block style       | boolean    | -                                                                                                                                                    |
| copyable    | Whether to be copyable | boolean \ | copyableConfig                                    | -                                                                                                |
| ellipsis    | Auto overflow omitted  | boolean \ | ellipsisConfig                                    | -                                                                                                |

### Text Basic Properties

| Props       | Desc                   | Type       | Default                                                                                                                                              |
| ----------- | ---------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| colorScheme | Set font color         | "white"\  | "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green"  \| "blue" \| "cyan" \| "purple" \| string | "blackAlpha" |
| fontSize    | Font size              | string     | "14px"                                                                                                                                               |
| bold        | Set bold style         | boolean    | -                                                                                                                                                    |
| disabled    | Set disable style      | boolean    | -                                                                                                                                                    |
| mark        | Set mark style         | boolean \ | colorScheme                                       | -                                                                                                |
| underline   | Underline  style       | boolean    | -                                                                                                                                                    |
| delete      | Strikethrough style    | boolean    | -                                                                                                                                                    |
| code        | Code block style       | boolean    | -                                                                                                                                                    |
| copyable    | Whether to be copyable | boolean \ | copyableConfig                                    | -                                                                                                |
| ellipsis    | Auto overflow omitted  | boolean \ | ellipsisConfig                                    | -                                                                                                |

### Paragraph Basic Properties

| Props       | Desc                   | Type       | Default                                                                                                                                              |
| ----------- | ---------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| colorScheme | Set font color         | "white"\  | "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green"  \| "blue" \| "cyan" \| "purple" \| string | "blackAlpha" |
| fontSize    | Font size              | string     | "14px"                                                                                                                                               |
| indent      | Text indent            | boolean    | -                                                                                                                                                    |
| bold        | Set bold style         | boolean    | -                                                                                                                                                    |
| disabled    | Set disable style      | boolean    | -                                                                                                                                                    |
| mark        | Set mark style         | boolean \ | colorScheme                                       | -                                                                                                |
| underline   | Underline  style       | boolean    | -                                                                                                                                                    |
| delete      | Strikethrough style    | boolean    | -                                                                                                                                                    |
| code        | Code block style       | boolean    | -                                                                                                                                                    |
| copyable    | Whether to be copyable | boolean \ | copyableConfig                                    | -                                                                                                |
| ellipsis    | Auto overflow omitted  | boolean \ | EllipsisConfig                                    | -                                                                                                |

### ellipsisConfig

| Props       | Desc                                 | Type       | Default |
| ----------- | ------------------------------------ | ---------- | ------- |
| expandable  | whether to support expand            | boolean    | -       |
| rows        | The number of omitted rows           | number     | 2       |
| suffix      | Suffix                               | string     | -       |
| expandLabel | Configure expand elements            | ReactNode  | -       |
| tooltip     | Show Tooltip when configure ellipsis | boolean    | true    |
| onExpand    | Callback when expand omitted content | () => void | -       |

### copyableConfig

| Props         | Desc                            | Type       | Default |
| ------------- | ------------------------------- | ---------- | ------- |
| copyIcon      | Set copy icon                   | ReactNode  | -       |
| copiedIcon    | Set copied icon                 | ReactNode  | -       |
| copyTooltip   | Set copy tooltip                | ReactNode  | -       |
| copiedTooltip | Set copied tooltip              | ReactNode  | -       |
| onCopy        | Callback when content is copied | () => void | -       |



## Example

### Basic usage

```jsx
<Typograph>
  <Heading>I am a title.</Heading>
  <Paragraph>I am a paragraph.</Paragraph>
  <Text>I am text.</Text>
</Typograph>
```

### Text style

```jsx
<Text>
  ILLA Design 
</Text>
<Text colorScheme="red">
  ILLA Design
</Text>
<Text bold>
  Bold
</Text>
<Text disabled>
  Disabled
</Text>
<Text mark>
  Mark
</Text>
<Text underline>
  Underline
</Text>
<Text delete>
  Line through
</Text>
<Text code>
  Code snippet
</Text>
```

### Paragraph indent

```jsx
<paragraph indent>
  I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her.
</paragraph>

```

### Ellipsis text

```jsx
<paragraph indent ellipsis={new EllipsisBuilder().rows(2).expandable(true).create()}>
  I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her.
</paragraph>
```

### Copyable text

```jsx
<Text copyable>
  This is a copyable text.
</Text>
```
