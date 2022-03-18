# Timeline时间轴

按照时间顺序或倒序规则的展示信息内容。

## 安装

```bash
yarn add @illa-design/timeline
```

## 引用组件

```jsx
import { Timeline } from "@illa-dedign/timeline"
```

## 组件接口（API）

### Timeline基础属性

| Props      | Desc                                                         | Type                             | Default               |
| ---------- | ------------------------------------------------------------ | -------------------------------- | --------------------- |
| reverse    | 是否倒序                                                     | `boolean `                       | `-`                   |
| direction  | 时间轴方向                                                   | `"horizontal" \| "vertical"`      | `vertical`            |
| mode       | 时间轴的展示类型：时间轴在左侧；时间轴在右侧；左右交替       | `"left" \| "right" \| "alternate"` | `"left"`              |
| pending    | 是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。 | `boolean \| ReactNode`           | `-`                   |
| pendingDot | 可以传入 ReactNode 定制幽灵节点                              | `ReactNode `                     | `<Spin size={12} />"` |

### Timeline.Item 基础属性

| Props          | Desc                                                      | Type                           | Default   |
| -------------- | --------------------------------------------------------- | ------------------------------ | --------- |
| dotColor       | 节点颜色                                                  | `string `                      | `-`       |
| dotType        | 节点类型：空心/实心                                       | `"hollow" \| "solid" `         | `"solid"` |
| dot            | 自定义节点                                                | `string \| ReactNode `         | `-`       |
| lineType       | 时间轴类型：实线/虚线/点状线                              | `"solid" \| "dashed" \| "dotted ` | `"solid"` |
| lineColor      | 时间轴颜色                                                | `string `                      | `-`       |
| label          | 标签文本                                                  | `string \| ReactNode `          | `-`       |
| labelPosition  | 时间轴节点的位置。 在时间轴组件 `mode=alternate` 时候生效 | `"relative" \| "same" `         | `-`       |
| autoFixDotSize | 是否自动适配自定义节点尺寸到 16px                         | `boolean `                     | `true`    |



## 使用方法

### 基础用法

```jsx
<TimelineItem>The first milestone</TimelineItem>
```

### 设置左右交替展示

```jsx
Timeline mode={"alternate"}>
  <TimelineItem>The alternate mode left text</TimelineItem>
  <TimelineItem>The alternate mode right text</TimelineItem>
</Timeline>
```

### 设置标签

```jsx
<Timeline>
  <TimelineItem label={"test label"} autoFixDotSize={true}></TimelineItem>
</Timeline>
```

### 设置幽灵节点

```jsx
<Timeline pending={true}>
  <TimelineItem></TimelineItem>
</Timeline>
```
