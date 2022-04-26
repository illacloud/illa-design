# 输入框 Input

输入框是用户用来输入字符的组件。

## 安装

```bash
yarn add @illa-design/input
```

## 引用组件

```jsx
import { Input } from "@illa-design/input"
```

## 组件接口（API）

### Input 基础属性

| Props        | Desc                         | Type                                                                                                                        | Default   |
| ------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------- |
| variant      | 输入框的两种样式：填充、描边 | "fill" ｜ "outline"                                                                                                         | "outline" |
| placeholder  | 输入框提示文字               | string ｜ string[]                                                                                                          | -         |
| borderColor  | 输入框颜色                   | "white" ｜ "blackAlpha" ｜ "gray" ｜ "grayBlue" ｜ "red" ｜ "orange" ｜ "yellow" ｜ "green" ｜ "blue" ｜ "cyan" ｜ "purple" | "blue"    |
| defaultValue | 输入框默认内容               | string ｜ string[]                                                                                                          | -         |
| disabled     | 是否禁用                     | boolean                                                                                                                     | false     |
| error        | 是否为错误状态               | boolean                                                                                                                     | false     |
| size         | 输入框大小                   | "small" ｜ "medium" ｜ "large"                                                                                              | "medium"  |
| value        | 输入框内容                   | string ｜ string[]                                                                                                          | -         |
| maxLength    | 最大长度                     | number                                                                                                                      | -         |
| showCount    | 是否展示                     | boolean                                                                                                                     | false     |
| allowClear   | 是否可以点击清除图标删除内容 | boolean                                                                                                                     | -         |
| prefix       | 输入框内的前缀               | ReactNode                                                                                                                   | -         |
| suffix       | 输入框内的后缀               | ReactNode                                                                                                                   | -         |
| addonAfter   | 输入框外的前缀               | ReactNode                                                                                                                   | -         |
| addonBefore  | 输入框外的后缀               | ReactNode                                                                                                                   | -         |

### InputTextArea 基础属性

| Props        | Desc                     | Type                                        | Default |
| ------------ | ------------------------ | ------------------------------------------- | ------- |
| placeholder  | 输入框提示文字           | string ｜ string[]                          | -       |
| defaultValue | 输入框默认内容           | string ｜ string[]                          | -       |
| disabled     | 是否为禁用状态           | boolean                                     | -       |
| error        | 是否为错误状态           | boolean                                     | false   |
| autoSize     | 是否自动调整输入框高度   | boolean ｜ {minRows?:number;maxRows?number} | -       |
| value        | 输入框内容               | string ｜ string[]                          | -       |
| maxLength    | 最大字符长度             | number                                      | -       |
| showCount    | 是否展示字数             | boolean                                     | false   |
| allowClear   | 是否可以点击清除图标删除 | boolean                                     | -       |

### InputSearch 基础属性

| Props        | Desc                         | Type                                                                                                                        | Default   |
| ------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------- |
| searchButton | 是否为后置按钮模式           | boolean                                                                                                                     | false     |
| variant      | 输入框的两种样式：填充、描边 | "fill" ｜ "outline"                                                                                                         | "outline" |
| placeholder  | 输入框提示文字               | string ｜ string[]                                                                                                          | -         |
| defaultValue | 输入框默认内容               | string ｜ string[]                                                                                                          | -         |
| disabled     | 是否为禁用状态               | boolean                                                                                                                     | -         |
| borderColor  | 输入框颜色                   | "white" ｜ "blackAlpha" ｜ "gray" ｜ "grayBlue" ｜ "red" ｜ "orange" ｜ "yellow" ｜ "green" ｜ "blue" ｜ "cyan" ｜ "purple" | "blue"    |
| error        | 是否为错误状态               | boolean                                                                                                                     | false     |
| size         | 输入框大小                   | "small" ｜ "medium" ｜ "large"                                                                                              | "medium"  |
| value        | 输入框内容                   | string ｜ string[]                                                                                                          | -         |
| allowClear   | 是否可以点击清除图标删除     | boolean                                                                                                                     | -         |

### InputPassword 基础属性

| Props           | Desc                         | Type                                                                                                                        | Default   |
| --------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------- |
| invisibleButton | 是否显示密码可视按钮         | boolean                                                                                                                     | true      |
| variant         | 输入框的两种样式：填充、描边 | "fill" ｜ "outline"                                                                                                         | "outline" |
| placeholder     | 输入框提示文字               | string ｜ string[]                                                                                                          | -         |
| defaultValue    | 输入框默认内容               | string ｜ string[]                                                                                                          | -         |
| disabled        | 是否为禁用状态               | boolean                                                                                                                     | -         |
| borderColor     | 输入框颜色                   | "white" ｜ "blackAlpha" ｜ "gray" ｜ "grayBlue" ｜ "red" ｜ "orange" ｜ "yellow" ｜ "green" ｜ "blue" ｜ "cyan" ｜ "purple" | "blue"    |
| error           | 是否为错误状态               | boolean                                                                                                                     | false     |
| size            | 输入框大小                   | "small" ｜ "medium" ｜ "large"                                                                                              | "medium"  |
| value           | 输入框内容                   | string ｜ string[]                                                                                                          | -         |
| allowClear      | 是否可以点击清除图标删除     | boolean                                                                                                                     | -         |

### Input 事件

| Props        | Desc                               | Type                   | Default |
| ------------ | ---------------------------------- | ---------------------- | ------- |
| onChange     | 输入框内容变化时的回调             | (event) => void        | -       |
| onPressEnter | 按下回车时触发                     | (event) => void        | -       |
| onClear      | 点击清除按钮时触发                 | () => void             | -       |
| onFocus      | 输入框获取焦点时触发               | (event) => void        | -       |
| onBlur       | 输入框失去焦点时触发               | (event) => void        | -       |
| onSearch     | 点击搜索图标，或按下回车键时的回调 | (value:string) => void | -       |

### Input 方法

| Props | Desc             | Type | Default |
| ----- | ---------------- | ---- | ------- |
| focus | 使输入框获取焦点 | -    | -       |
| blur  | 使输入框失去焦点 | -    | -       |

## 使用方法

### 基础用法

```jsx
<Input placeholder="test-disabled" disabled />
```

### 设置输入框样式和大小

```jsx
<Input variant="fill" size="small" />
```

### 设置输入框默认提示文案和前后缀

```jsx
<Input
  placeholder="variant-fill"
  prefix={"prefix"}
  addonBefore={"addonBefore"}
/>
```

### 设置输入框默认内容和最大字符数

```jsx
<Input defaultValue="test maxLength" maxLength={4} />
```

### 设置输入框字数统计

```jsx
<Input placeholder="showCount" maxLength={4} showCount />
```

### 设置密码输入框

```jsx
<Password placeholder="variant-fill" variant="fill" />
```

### 设置搜索输入框

```jsx
<Search placeholder="variant-fill" variant="fill" />
```

### 设置文本输入框

```jsx
<TextArea placeholder="defaultValue" defaultValue="test defaultValue" />
```
