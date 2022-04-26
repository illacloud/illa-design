# Result

The Result component is used for feedback processing results.

## Installation

```bash
yarn add @illa-design/result
```

## Import component

```jsx
import { Result } from "@illa-design/result"
```

## API

### Result Basic Properties

| Props    | Desc                     | Type         | Default                                                                  |
| -------- | ------------------------ | ------------ | ------------------------------------------------------------------------ |
| extra    | Extra action area        | ReactNode    | -                                                                        |
| icon     | Custom icon              | ReactNode    | -                                                                        |
| status   | The status of the result | "success" \ | "error" \| "info" \| "warning" \| "404" \| "403" \| "500" | "error" |
| subTitle | Subtitle                 | ReactNode    | -                                                                        |
| title    | Title                    | ReactNode    | -                                                                        |

## Examples

### Basic usage

```jsx
<Result />
```

### Set custom icon

```jsx
<Result icon={<LoadingIcon />}></Result>
```

### Set title and subtitle

```jsx
<Result title={"this is title"} subTitle={"this is subTitle"}></Result>
```
