# Select选择器

用户需要从同一种类中选择一项或多项数据时，使用选择器下拉选择对应选项

## 安装

```bash
yarn add @illa-design/select
```

## 引用组件

```jsx
import { Select } from "@illa-dedign/select"
```

## 组件接口（API）

### Select基础属性

| Props             | Desc                                                         | Type                                                         | Default    |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| defaultValue      | 选择框的默认值                                               | `string \|string[] \| number \|  number[] \| LabelValue \| LabelValue[]` | `-`        |
| value             | 选择器的值（受控模式）                                       | `string \|string[] \|number \|number[] \|LabelValue \|LabelValue[]` | `-`        |
| mode              | 是否开启多选模式或标签模式                                   | `"multiple" \|"tags" `                                       | `-`        |
| notFoundContent   | 没有数据时显示的内容                                         | `ReactNode`                                                  | `-`        |
| getPopupContainer | 弹出框挂载的父节点                                           | `(node: HTMLElement) => Element `                            | `"circle"` |
| placeholder       | 选择框默认文字                                               | `string`                                                     | `-`        |
| showSearch        | 使单选模式可搜索，传入 `{ retainInputValue: true }` 在搜索框聚焦时保留现有内容传入 `{ retainInputValueWhileSelect: true }` 在多选选择时保留输入框内容。 | `boolean \| {retainInputValue?: boolean; retainInputValueWhileSelect?: boolean } ` | `-`        |
| size              | 选择器尺寸                                                   | `small" \|"medium" \| "large" `                              | `"medium"` |
| disabled          | 是否为禁用状态                                               | `boolean`                                                    | `-`        |
| error             | 是否为错误状态                                               | `boolean`                                                    | `-`        |
| loading           | 是否为加载状态                                               | `boolean`                                                    | `-`        |
| allowClear        | 允许清除值                                                   | `boolean`                                                    | `-`        |
| maxTagCount       | 最多显示多少个 `tag`，仅在多选或标签模式有效                 | `number`                                                     | `-`        |
| arrowIcon         | 自定义箭头图标，设置为 `null` 不显示箭头图标                 | `ReactNode \| null`                                          | `-`        |
| removeIcon        | 多选时配置选中项的删除图标。当传入`null`，不显示删除图标     | `ReactNode \|null`                                           | `-`        |

### Select 事件

| Props           | Desc                                                     | Type                                                         | Default |
| --------------- | -------------------------------------------------------- | ------------------------------------------------------------ | ------- |
| onClick         | 鼠标点击下拉框时的回调                                   | `(e) => void `                                               | `-`     |
| onFocus         | 获得焦点时的回调                                         | `(e) => void`                                                | `-`     |
| onBlur          | 失去焦点时的回调                                         | `(e) => void `                                               | `-`     |
| onChange        | 点击选择框的回调                                         | `(value, option: OptionInfo \| OptionInfo[]) => void  `      | `-`     |
| onDeselect      | 取消选中的时候触发的回调，(只在 `multiple` 模式下触发)。 | `(value: string \| number \| LabeledValue, option:OptionInfo) => void ` | `-`     |
| onClear         | 点击清除时触发，参数是当前下拉框的展开状态。             | `(visible: boolean) => void `                                | `-`     |
| onSearch        | 搜索时的回调                                             | `(value: string, reason: InputValueChangeReason) => void `   | `-`     |
| onPopupScroll   | 下拉框的滚动监听函数，参数为滚动元素。                   | `(elem) => void `                                            | `-`     |
| onVisibleChange | 下拉框收起展开时触发                                     | `(visible: boolean) => void `                                | `-`     |



### Select-option 事件

| Props    | Desc                     | Type               | Default |
| -------- | ------------------------ | ------------------ | ------- |
| disabled | 是否禁用                 | `boolean`          | `false` |
| title    | 选项的标题               | `string`           | `-`     |
| value    | 默认根据此属性值进行筛选 | `string \| number` | `-`     |

## 使用方法

### 基础用法

```jsx
<Select value={"A"}>
  <Option>A</Option>
  <Option>B</Option>
  <Option>C</Option>
</Select>
```

### 设置错误状态

```jsx
<Select value={1} options={[1, 2, 3]} error />
```

### 设置尺寸

```jsx
<Select value={1} options={[1, 2, 3]} size="large"
```

### 设置多选模式

```jsx
<Select value={[1, 2]} options={[1, 2, 3]} mode="multiple" labelInValue />
```

### 设置最大标签数

```jsx
<Select value={[1, 2]} options={[1, 2, 3]} maxTagCount={1} mode="tags" />
```
