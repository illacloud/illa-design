# 单选 Radio

单选组件通常被用来在多个选项中选择一个。

## 安装

```bash
yarn add @illa-design/radio
```

## 引用组件

```jsx
import { Radio } from "@illa-design/radio"
```

## 组件接口(API)

### Radio 基础属性

| 参数名         | 描述           | 类型                                                                                                                                  | 默认值  |
| -------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| colorScheme    | 气泡的背景颜色 | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" \| string | "blue"  |
| value          | 控件的 value   | T                                                                                                                                     | -       |
| variant        | 单选选项的样式 | "button" \| "radio"                                                                                                                   | "radio" |
| disabled       | 是否禁用       | boolean                                                                                                                               | -       |
| checked        | 当前是否被选中 | boolean                                                                                                                               | -       |
| defaultChecked | 初始是否被选中 | boolean                                                                                                                               | -       |

### Radio 事件

| 参数名   | 描述         | 类型                                           | 默认值 |
| -------- | ------------ | ---------------------------------------------- | ------ |
| onChange | 值变化的回调 | (checked: boolean, event: ChangeEvent) => void | -      |

### RadioGroup 基础属性

| 参数名       | 描述                                                | 类型                                                                                                                                  | 默认值       |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| name         | 对单选框组的命名                                    | string                                                                                                                                | -            |
| value        | 被选中的单选框的值                                  | T                                                                                                                                     | -            |
| variant      | 单选选项的样式                                      | "button" \| "radio"                                                                                                                   | "radio"      |
| colorScheme  | 气泡的背景颜色                                      | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" \| string | "blue"       |
| disabled     | 禁用全部子单选项 禁用状态，鼠标不可点击且有角标提示 | boolean                                                                                                                               | -            |
| defaultValue | 初始选中的值                                        | T                                                                                                                                     | -            |
| options      | 以数组形式配置子选项                                | string[] \| number[] \| { label: ReactNode; value: any; disabled: boolean }[]                                                         | -            |
| direction    | 单选框组的排列方向                                  | "vertical" \| "horizontal"                                                                                                            | "horizontal" |
| spacing      | 单选框之间的间距                                    | string \| number                                                                                                                      | "24px"       |

### RadioGroup 事件

| 参数名   | 描述         | 类型                                           | 默认值 |
| -------- | ------------ | ---------------------------------------------- | ------ |
| onChange | 值变化的回调 | (checked: boolean, event: ChangeEvent) => void | -      |

###

## 使用方法

### 基础用法

```jsx
<Radio>Radio</Radio>
<Radio checked disabled>Disabled Radio</Radio>
```

### 单选框组

单选框组有两种用法， 可以通过 children 的方式或者 options 数组的方式。

```jsx
<RadioGroup defaultValue='a' style={{ marginBottom: 20 }}>
  <Radio value='a'>A</Radio>
  <Radio value='b'>B</Radio>
  <Radio value='c'>C</Radio>
  <Radio disabled value='d'>D</Radio>
</RadioGroup>
<br />
<RadioGroup options={['A', 'B', 'C', 'D']} style={{ marginBottom: 20 }} />
<br />
<RadioGroup
  options={[
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
    { label: 'D', value: 'd', disabled: true },
  ]}/>
```

### 设置单选组排布方向

通过 direction 这个参数可以设置水平或者竖直排列单选组。

```jsx
<RadioGroup direction="vertical" defaultValue="a">
  <Radio value="a">A</Radio>
  <Radio value="b">B</Radio>
  <Radio value="c">C</Radio>
  <Radio disabled value="d">
    D
  </Radio>
</RadioGroup>
```
