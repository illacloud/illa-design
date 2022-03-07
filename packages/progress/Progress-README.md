# Progress

The progress component provides feedback on the running status of tasks in the progress.

## Installation

```bash
yarn add @illa-design/progress
```

## Import component

```jsx
import { Progress } from "@illa-dedign/progress"
```

## API

### Progress Basic Properties

| Props       | Desc                                                         | Type                                                         | Default  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| type        | Type of the progress                                         | `"line" \|"circle" \|"miniCircle" \|"miniRing" `             | `"line"` |
| steps       | The step count of the progress                               | `number`                                                     | `-`      |
| animation   | If true, when type= line show animation                      | `boolean`                                                    | `-`      |
| status      | The status of the progress                                   | `"normal" \|"success" \|"error"  `                           | `-`      |
| colorScheme | The main color of the progress                               | `"white" \|"blackAlpha" \|"gray" \|"grayBlue" \|"red" \|"orange" \|"yellow" \|"green" \|"blue" \|"cyan" \|"purple" ` | `-`      |
| trailColor  | The trail color                                              | `"white" \|"blackAlpha" \|"gray" \|"grayBlue" \|"red" \|"orange" \|"yellow" \|"green" \|"blue" \|"cyan" \|"purple" ` | `-`      |
| showText    | If true, show the percentage text                            | `boolean`                                                    | `true`   |
| formatText  | The format of the text                                       | `(percent: number) => ReactNode`                             | `-`      |
| percent     | The percentage of the progress                               | `number`                                                     | `-`      |
| strokeWidth | The width of the stroke                                      | `number`                                                     | `-`      |
| width       | The width of the progress                                    | `string\|number`                                             | `-`      |
| buffer      | If true, when type=line, show the buffer part of the progress | `boolean`                                                    | `-`      |
| bufferColor | The color of the buffer part                                 | `"white" \|"blackAlpha" \|"gray" \|"grayBlue" \|"red" \|"orange" \|"yellow" \|"green" \|"blue" \|"cyan" \|"purple" ` | `-`      |

## Example

### Basic usage

```jsx
<Progress percent={50} />
```

### Set the color as red

```jsx
<Progress
        type="circle"
        color="red"
        trailColor="red"
      />
```

### Set the success status

```jsx
<Progress status="success" type="circle" />

```

### Set the width of the progress

```jsx
<Progress
      percent={50}
      width="100px"
      type="circle"
      strokeWidth="10px"
    />
```

### Set the steps of the progress

```jsx
<Progress steps={3} type="circle" />
```

