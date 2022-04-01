# InputNumber 数字输入框

数字输入框是仅允许输入数字格式的输入框.

## 安装

```jsx
yarn add @illa-design/inputNumber	
```

## 引用组件

```bash
import { InputNumber } from "@illa-design/inputNumber"
```

## 组件接口（API）

### InputNumber 基础属性

| Props        | Desc                                                         | Type                                                         | Default                                      |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------------- |
| step         | 数字变化步长                                                 | `number`                                                     | `1`                                          |
| placeholder  | 输入框提示文字                                               | `string`                                                     | `-`                                          |
| precision    | 数字精度。设置精度小于`step`的小数位时，取`step`的小数个数。 | `number`                                                     | `-`                                          |
| defaultValue | 输入框默认内容                                               | `number`                                                     | `-`                                          |
| disabled     | 是否禁用                                                     | `boolean`                                                    | `-`                                          |
| error        | 是否为错误状态                                               | `boolean`                                                    | `-`                                          |
| size         | 输入框大小                                                   | `"small" \| "medium" \| "large"  `                           | `"medium"`                                   |
| value        | 当前值                                                       | `undefined \|number \|string  `                              | `-`                                          |
| min          | 最小值                                                       | `number`                                                     | `-Infinity`                                  |
| max          | 最大值                                                       | `number`                                                     | `Infinity`                                   |
| mode         | `embed` - 按钮内嵌模式，`button` - 左右按钮模式              | `"embed" \|"button"   `                                      | `"embed"`                                    |
| prefix       | 显示前缀                                                     | `ReactNode`                                                  | `-`                                          |
| suffix       | 显示后缀                                                     | `ReactNode`                                                  | `-`                                          |
| formatter    | 定义输入框展示值                                             | `(value: number \| string)=>string  `                        | `-`                                          |
| parser       | 从 formatter 转换为数字，和 formatter 搭配使用。             | `(value: string) =>string number \| string  `                | `(input) => input.replace(/[^\w\.-]+/g, '')` |
| hideControl  | 隐藏右侧按钮                                                 | `boolean`                                                    | `-`                                          |
| icons        | 配置图标                                                     | `{up?: ReactNode;down?: ReactNode;plus?: ReactNode;minus?: ReactNode;}` | `-`                                          |

### InputNumber 事件

| Props     | Desc                   | Type              | Default |
| --------- | ---------------------- | ----------------- | ------- |
| onChange  | 内容变化时的回调       | `(event) => void` | `-`     |
| onFocus   | 输入框获取焦点时的回调 | `(event) => void` | `-`     |
| onBlur    | 输入框失去焦点时的回调 | `(event) => void` | `-`     |
| onKeyDown | 键盘事件回调           | `(event) => void` | `-`     |

### InputNumber 方法

| Props   | Desc     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## 使用方法

### 基础用法

```jsx
<InputNumber placeholder={"input-tag"} />
```

### 设置输入框的值和输入框大小

```jsx
<InputNumber placeholder="value" size="large" value={5} />
```

### 设置禁用状态

```jsx
<InputNumber placeholder="disabled" disabled />
```

### 设置移除和获取焦点

```jsx
<InputNumber
  size="small"
  onFocus={focusEvent}
  onBlur={blurEvent}
/>

```
