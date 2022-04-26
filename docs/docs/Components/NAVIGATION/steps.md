# Steps

It used for lead in user complete tasks step by step 

## Installation

```bash
yarn add @illa-design/steps
```

## Import component

```jsx
import { Steps } from "@illa-design/steps"
```

## API

### Steps Basic Properties

| Props          | Desc                      | Type                                                         | Default        |
| -------------- | ------------------------- | ------------------------------------------------------------ | -------------- |
| variant        | Variant of step           | `"line" \| "dot" \| "navigation"`                            | `"line"`       |
| size           | Size of step              | ` "small" \| "large"`                                        | `"small"`      |
| direction      | Layout direction of nodes | `"vertical" \| "horizontal"`                                 | `"horizontal"` |
| labelPlacement | Placement of label        | `"vertical" \| "horizontal"`                                 | `"horizontal"` |
| current        | current step              | `number`                                                     | `1`            |
| status         | current step status       | `"wait" \| "process" \| "finish" \| "error"`                 | `"process"`    |
| customDot      | Customize node            | `(IconDot: React.ReactNode, stepConfig: CustomDotRecord) => React.ReactNode` | `-`            |

### Steps Events

| Props    |                 Desc                  | Type                                | Default |
| -------- | :-----------------------------------: | ----------------------------------- | ------- |
| onChange | Callback when current step is changed | `(current: number, id: any)=> void` | `-`     |

### Step Basic Properties

| Props       | Desc                     | Type                                         | Default |
| ----------- | ------------------------ | -------------------------------------------- | ------- |
| id          | Id of step               | `any`                                        | `-`     |
| title       | title of step            | `string \| ReactNode`                        | `-`     |
| description | description of step      | `string \| ReactNode`                        | `-`     |
| status      | status of step           | `"wait" \| "process" \| "finish" \| "error"` | `-`     |
| disabled    | whether step is disabled | `boolean`                                    | `-`     |

## Example

### Basic usage

```jsx
<Steps current={2} variant="dot">
  <Step title="Succeeded" />
  <Step title="Processing" />
  <Step title="Pending" />
</Steps>
```

### Set step's description

```jsx
<Steps current={2}>
  <Step title="Succeeded" description="This is a description" />
  <Step title="Processing" description="This is a description" />
  <Step title="Pending" description="This is a description" />
</Steps>
```

### Set step's status

```jsx
<Steps current={2}>
  <Step title="Succeeded" description="This is a description" status="finish" />
  <Step title="Processing" description="This is a description" status="process" />
  <Step title="Pending" description="This is a description" status="wait" />
</Steps>
```

### Set steps' layout direction

```jsx
<Steps current={2} direction="vertical">
  <Step title="Succeeded" description="This is a description" status="finish" />
  <Step title="Processing" description="This is a description" status="process" />
  <Step title="Pending" description="This is a description" status="wait" />
</Steps>
```

### Set the step's label position

```jsx
<Steps current={2} labelPlacement="vertical" >
  <Step title="Succeeded" description="This is a description" status="finish" />
  <Step title="Processing" description="This is a description" status="process" />
  <Step title="Pending" description="This is a description" status="wait" />
</Steps>
```

### Customize node style

```jsx
const customDot = (iconNode, { index }) => {
  return <Tooltip content={index}>{iconNode}</Tooltip>
}
<Steps customDot={customDot} >
  <Step title="Succeeded" description="This is a description" status="finish" />
  <Step title="Processing" description="This is a description" status="process" />
  <Step title="Pending" description="This is a description" status="wait" />
</Steps>
```

### Set change step by click

```jsx
const [current, setCurrent] = useState(1)
  const onChange = (index: number) => {
    setCurrent(index)
  }
<Steps 
  onChange={onChange}
  current={current} 
>
  <Step title="Succeeded" description="This is a description" status="finish" />
  <Step title="Processing" description="This is a description" status="process" />
  <Step title="Pending" description="This is a description" status="wait" />
</Steps>
```

