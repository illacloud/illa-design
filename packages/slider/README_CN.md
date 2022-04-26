# 滑动输入 Slider

通过滑动条输入数值，能展示当前值和可选范围。

## 安装

```bash
yarn add @illa-design/slider
```

## 引用组件

```jsx
import { Slider } from "@illa-dedign/slider"
```

## 组件接口(API)

### Slider 基础属性

| 参数名          | 描述                                                         | 类型                                                         | 默认值 |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| showTicks       | 是否显示步长刻度线                                           | boolean                                                      | -      |
| showInput       | 是否展示输入框。 滑动条根据输入框内容自动位移到对应的刻度 onlyMarkValue 为 true 时输入框始终隐藏 | boolean                                                      | -      |
| reverse         | 反向坐标轴                                                   | boolean                                                      | -      |
| marks           | 刻度标签。是一个对象。key 为在[min, max]内的整数。设置的刻度在滑动线 | `Record<number, ReactNode>`                                    | -      |
| vertical        | 是否竖直方向                                                 | boolean                                                      | -      |
| tooltipVisible  | 控制 tooltip 的展示。设置为undefined时，鼠标在当前值停留或者拖动时展示tooltip，设置为 true 时，将一直展示 tooltip。设置为 false 时，将一直隐藏 tooltip。 | boolean                                                      | -      |
| tooltipPosition | tooltip 的位置                                               | "top" \| "tl" \| "tr" \| "bottom" \| "bl" \| "br" \| "left" \| "lt" \| "lb" \| "right" \| "rt" \| "rb" | "top"  |
| disabled        | 是否禁用                                                     | boolean                                                      | -      |
| min             | 滑动范围最小值                                               | number                                                       | 0      |
| max             | 滑动范围最大值                                               | number                                                       | 100    |
| step            | 步长                                                         | number                                                       | 1      |
| onlyMarkValue   | 只能选择标签值，此时step将会被忽略 点击标签中间的刻度按照就近原则，定位到离得近的标签值 | boolean                                                      | -      |
| defaultValue    | 默认值                                                       | number \| number[]                                           | -      |
| formatTooltip   | 格式化 tooltip 内容                                          | (value: number) => string \| ReactNode                       | -      |

### Slider 事件

| 参数名        | 描述                             | 类型                              | 默认值 |
| ------------- | :------------------------------- | --------------------------------- | ------ |
| onAfterChange | 触发时机在 mouseup，参数是当前值 | (val: number \| number[]) => void | -      |
| onChange      | 选择值变化时触发                 | (val: number \| number[]) => void | -      |

### 使用方法

### 基础用法

```jsx
<Slider
  value={value}
  onChange={(val: number | number[]) => {
    setValue(val as number)
  }}
  style={{ width: 400 }}
/>
```

### 设置步长

通过step接口可以设置步长,通过showticks接口可以设置展示刻度。

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

### 设置可选范围

通过min和max接口可以设置可选范围的最小值和最大值。

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

### 添加标签文本

通过marks接口可以设置刻度的标签。

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

### 显示输入框

通过shouInput接口配置是否展示输入框。

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
