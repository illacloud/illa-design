# Checkbox多选框

用户可通过多选框选择一个或多个数据。

## 安装

```bash
yarn add @illa-design/checkbox
```

## 引用组件

```jsx
import { Checkbox } from "@illa-dedign/checkbox"
```

## 组件接口（API）

### checkbox 基础属性

| Props          | Desc             | Type            | Default  |
| -------------- | ---------------- | --------------- | -------- |
| autoFocus      | 自动获取焦点     | `boolean`       | `false`  |
| checked        | 指定当前是否选中 | `boolean`       | `false`  |
| defaultChecked | 初始默认是否选中 | `boolean`       | `false`  |
| disabled       | 是否禁用         | `boolean`       | `false`  |
| spacing        | 单选框之间的间距 | `string \|int ` | `"24px"` |

### checkbox 事件

| Props    | Desc           | Type                             | Default |
| -------- | -------------- | -------------------------------- | ------- |
| onChange | 变化时回调函数 | `(value: T[], e: Event) => void` | `-`     |

## checkbox-group 基础属性

| Props        | Desc                   | Type                         | Default        |
| ------------ | ---------------------- | ---------------------------- | -------------- |
| disabled     | 整组禁用               | `boolean`                    | `false`        |
| direction    | 排列方向               | `"horizontal" \| "vertical" ` | `"horizontal"` |
| defaultValue | 默认选中的选项         | `string `                    | `-`            |
| options      | 可选项                 | `string `                    | `-`            |
| value        | 选中的选项（受控模式） | `string `                    | `-`            |

## 使用方法

### 基础用法

```jsx
<Checkbox>Hello</Checkbox>
```

### 设置禁用状态

```jsx
<Checkbox disabled>Hello</Checkbox>
```

### 设置选中受控状态

```jsx
<Checkbox checked>Hello</Checkbox>

```

### 设置多选项

```jsx
<CheckboxGroup options={["A", "B", "C"]} />
```

### 设置默认选中项

```jsx
<CheckboxGroup options={["A", "B", "C"]} defaultValue={["A"]} />
```

### 设置多选项垂直排列

```jsx
<CheckboxGroup options={["A", "B", "C"]} direction="vertical" />
```
