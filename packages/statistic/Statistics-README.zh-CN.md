# Statistics数值展示

用作展示某个或某组数据

## 安装

```bash
yarn add @illa-design/statistics
```

## 引用组件

```jsx
import { Statistics } from "@illa-dedign/statistics"
```

## 组件接口（API）

### Statistics 基础属性

| Props            | Desc           | Type                     | Default    |
| ---------------- | -------------- | ------------------------ | ---------- |
| title            | 数值的标题     | `string \|ReactNode`     | `-`        |
| value            | 数值           | `string \|number\|Dayjs` | `-`        |
| valueStyle       | 数值的样式     | `CSSProperties `         | `-`        |
| decimalSpearator | 设置小数点     | `string `                | `.`        |
| format           | 数值显示格式   | `string `                | `"circle"` |
| groupSeperator   | 设置千分位符   | `string `                | `,`        |
| loading          | 数值是否加载中 | `boolean `               | `false`    |
| precision        | 数值精度       | `number `                | `-`        |
| prefix           | 前缀           | `string \|ReactNode`     | `-`        |
| suffix           | 后缀           | `string \|ReactNode`     | `-`        |

### Statistic-countDown 基础属性

| Props      | Desc                         | Type                           | Default            |
| ---------- | ---------------------------- | ------------------------------ | ------------------ |
| title      | 倒计时的标题                 | `string \|ReactNode`           | `-`                |
| value      | 倒计时的值                   | `string \|number\|Dayjs\|Date` | `-`                |
| valueStyle | 数值的样式                   | `CSSProperties `               | `-`                |
| now        | 用于修正初始化时间显示不正确 | `string \|number\|Dayjs\|Date` | `() => Date.now()` |
| format     | 倒计时的展示格式             | `string `                      | `'HH:mm:ss'`       |
| start      | 是否开始倒计时               | `boolean `                     | `true`             |



### Statistic-countDown 事件

| Props    | Desc                 | Type                     | Default |
| -------- | -------------------- | ------------------------ | ------- |
| onFinish | 倒计时完成时触发     | `() => void`             | `-`     |
| onChange | 倒计时时间变化时触发 | `(value:number) => void` | `-`     |

## 使用方法

### 基础用法

```jsx
<Statistic title={"Amount"} value={189907.32} />
```

### 设置数值

```jsx
<Statistic value={189907.32} />
```

### 设置千分位符为“&”

```jsx
<Statistic
      value={1899078.32}
      groupSeparator={"&"}
    />
```

### 设置数值的前后缀

```jsx
<Statistic
      value={22}
      prefix={"#"}
      suffix={"%"}
    />
```

### 设置精确值为2

```jsx
<Statistic value={1922.6782} precision={2} />
```

### 倒计时基础用法

```jsx
<Countdown
      value={Date.now() + 2000}
      title={"Deadline"}
    />
```

