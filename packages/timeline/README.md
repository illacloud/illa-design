# Timeline

The timeline component is used to display information in chronological order.

## Installation

```bash
yarn add @illa-design/timeline
```

## Import component

```jsx
import { Timeline } from "@illa-dedign/timeline"
```

## API

### Timeline Basic Properties

| Props      | Desc                              | Type                               | Default               |
| ---------- | --------------------------------- | ---------------------------------- | --------------------- |
| reverse    | If true, the timeline is reversed | `boolean `                         | `-`                   |
| direction  | The direction of the timeline     | `"horizontal" \| "vertical"`        | `vertical`            |
| mode       | The display mode of the timeline  | `"left" \| "right" \| "alternate"` | `"left"`              |
| pending    | If true, show the pending dot     | `boolean \| ReactNode`             | `-`                   |
| pendingDot | Custom pending dot                | `ReactNode `                       | `<Spin size={12} />"` |

### Timeline.Item Basic Properties

| Props          | Desc                               | Type                             | Default   |
| -------------- | ---------------------------------- | -------------------------------- | --------- |
| dotColor       | Color of the dot                   | `string `                        | `-`       |
| dotType        | Type of the dot                    | `"hollow" \| "solid" `           | `"solid"` |
| dot            | Custom dot                         | `string \| ReactNode `           | `-`       |
| lineType       | Type of the line                   | `"solid" \| "dashed"\| "dotted ` | `"solid"` |
| lineColor      | Color of the line                  | `string `                        | `-`       |
| label          | The label                          | `string \| ReactNode `           | `-`       |
| labelPosition  | The position of the label          | `"relative" \| "same" `          | `-`       |
| autoFixDotSize | If true, auto fix dot size as 16px | `boolean `                       | `true`    |



## Examples

### Basic usage

```jsx
<TimelineItem>The first milestone</TimelineItem>
```

### Set mode as alternate

```jsx
Timeline mode={"alternate"}>
  <TimelineItem>The alternate mode left text</TimelineItem>
  <TimelineItem>The alternate mode right text</TimelineItem>
</Timeline>
```

### Set the label

```jsx
<Timeline>
  <TimelineItem label={"test label"} autoFixDotSize={true}></TimelineItem>
</Timeline>
```

### Set the pending dot

```jsx
<Timeline pending={true}>
  <TimelineItem></TimelineItem>
</Timeline>
```
