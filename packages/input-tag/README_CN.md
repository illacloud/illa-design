# InputTag 标签输入框

标签输入框是用户用来输入标签的组件。

## 安装

```bash
yarn add @illa-design/inputTag
```

## 引用组件

```jsx
import { InputTag } from "@illa-dedign/inputTag"
```

## 组件接口（API）

### Input 基础属性

| Props        | Desc                                                      | Type                                                         | Default                                                      |
| ------------ | --------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| readOnly     | 是否只读                                                  | `boolean`                                                    | `-`                                                          |
| placeholder  | 输入框提示文字                                            | `string \| string[]`                                         | `-`                                                          |
| autoFocus    | 自动聚焦                                                  | `boolean `                                                   | `-`                                                          |
| defaultValue | 输入框默认内容                                            | `T[]`                                                        | `-`                                                          |
| disabled     | 是否禁用                                                  | `boolean`                                                    | `-`                                                          |
| error        | 是否为错误状态                                            | `boolean`                                                    | `-`                                                          |
| size         | 输入框大小                                                | `"small" \| "medium" \| "large"  `                           | `-`                                                          |
| value        | 控件值                                                    | `T[]`                                                        | `-`                                                          |
| inputValue   | 控件的输入框内的值                                        | `string`                                                     | `-`                                                          |
| labelInValue | 设置传入和回调出的值均为 `{ label: '', value: ''}` 格式。 | `boolean`                                                    | `-`                                                          |
| allowClear   | 是否可以点击清除图标删除内容                              | `boolean`                                                    | `-`                                                          |
| icon         | 自定义图标                                                | `ReactNode`                                                  | `-`                                                          |
| suffix       | 输入框内的后缀                                            | `ReactNode`                                                  | `-`                                                          |
| validate     | 校验函数，默认在 按下enter时候触发。                      | `(inputValue: string, values: T[]) => boolean \| Promise<boolean> ` | `(inputValue, values) => inputValue && values.every((item) =>  item !== inputValue)` |

### 

### Input 事件

| Props         | Desc                   | Type              | Default |
| ------------- | ---------------------- | ----------------- | ------- |
| onChange      | 内容变化时的回调       | `(event) => void` | `-`     |
| onPressEnter  | 按下回车时的回调       | `(event) => void` | `-`     |
| onClear       | 点击清除按钮时的回调   | `() => void`      | `-`     |
| onFocus       | 输入框获取焦点时的回调 | `(event) => void` | `-`     |
| onBlur        | 输入框失去焦点时的回调 | `(event) => void` | `-`     |
| onInputChange | 输入框内容变化时的回调 | `(event) => void` | `-`     |
| onClick       | 点击时的回调           | `(event) => void` | `-`     |
| onPaste       | 粘贴时的回调           | `(event) => void` | `-`     |
| onRemove      | 清除时的回调           | `(event) => void` | `-`     |



## 使用方法

### 基础用法

```jsx
<InputTag placeholder={"input-tag"} />
```

### 设置尺寸和后缀

```jsx
<InputTag placeholder="size-small" size="small" suffix="suffix" />
```

### 设置默认值

```jsx
<InputTag defaultValue={["default value"]} />
```

### 设置清除事件

```jsx
<InputTag
  placeholder="test-input-event"
  onClear={clearEvent}
  onRemove={removeEvent}
  allowClear
/>
```
