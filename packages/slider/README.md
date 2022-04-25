# Slider

It is a number inpuit component that input value by slide.

## Installation

```bash
yarn add @illa-design/slider
```

## Import component

```jsx
import { Slider } from "@illa-dedign/slider"
```

## API

### Slider Basic Properties

| Props           | Desc                                      | Type                                                         | Default |
| --------------- | ----------------------------------------- | ------------------------------------------------------------ | ------- |
| showTicks       | Whether show ticks                        | boolean                                                      | -       |
| showInput       | Whether show number input                 | boolean                                                      | -       |
| reverse         | Whether reverse ticks                     | boolean                                                      | -       |
| marks           | set ticks‘ mark                           | Record<number, ReactNode>                                    | -       |
| vertical        | Whether make silder vertical              | boolean                                                      | -       |
| tooltipVisible  | Whether always show tooltip               | boolean                                                      | -       |
| tooltipPosition | Set the position of tooltip               | "top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br" \| "left" \| "lt" \| "lb" \| "right" \| "rt" \| "rb" | -       |
| disabled        | Whether disable the component             | boolean                                                      | -       |
| min             | Set minimum value                         | number                                                       | 0       |
| max             | Set maxmum value                          | number                                                       | 100     |
| step            | Set step of every tick                    | number                                                       | 1       |
| onlyMarkValue   | whether only marked value can be selected | boolean                                                      | -       |
| defaultValue    | Set defaultValue                          | number \| number[]                                           | -       |
| formatTooltip   | Customize the tooltip                     | (value: number) => string \| ReactNode                       | -       |

### Slider Events

| Props         | Desc                            | Type                              | Default |
| ------------- | :------------------------------ | --------------------------------- | ------- |
| onAfterChange | Callback after value is changed | (val: number \| number[]) => void | -       |
| onChange      | Callback when value is changed  | (val: number \| number[]) => void | -       |

## Example

### Basic usage

```jsx
<Slider
  value={value}
  onChange={(val: number | number[]) => {
    setValue(val as number)
  }}
  style={{ width: 400 }}
/>
```

### Set step

```jsx
<Slider
  defaultValue={0}
  onChange={(val: number | number[]) => {
    setValue(val as number)
  }}
  step={2}
  showTicks
  style={{ width: 400 }}
/>
```

### Set input range

```jsx
const [value, setValue] = React.useState(0)
<Slider
  onChange={(val: number | number[]) => {
    setValue(val as number)
  }}
  min={0}
  max={20}
  step={2}
  showTicks
  style={{ width: 400 }}
/>
```

### Set tick's mark

```jsx
const [value, setValue] = React.useState(0)
<Slider
  onChange={(val: number | number[]) => {
    setValue(val as number)
  }}
  step={2}
  marks={{
    0: "0km",
    5: "5km",
    10: "10km",
    15: "15km",
}}
  style={{ width: 400 }}
/>
```

### Show number input 

```jsx
const [value, setValue] = React.useState(0)
<Slider
	showInput
  onChange={(val: number | number[]) => {
    setValue(val as number)
  }}
  step={1}
  marks={{
    0: "0km",
    5: "5km",
    10: "10km",
    15: "15km",
}}
  style={{ width: 400 }}
/>
```
