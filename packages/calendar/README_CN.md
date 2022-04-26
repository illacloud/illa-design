# 日历 Calendar

按照日历形式展示数据的容器。

## 安装

```bash
yarn add @illa-design/calendar
```

## 引用组件

```jsx
import { Calendar } from "@illa-design/calendar"
```

## 组件接口（API）

### Calendar 基础属性

| Props            | Desc                                                         | Type                                                         | Default  |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| allowSelect      | 是否允许选中和切换日期，panel 模式下默认可选中切换           | boolean                                                      | -        |
| panel            | 是否放在容器中进行展示                                       | boolean                                                      | -        |
| panelWidth       | 卡片模式的宽度                                               | number \| string                                             | 265      |
| panelTodayBtn    | 是否显示跳转到今天的按钮                                     | boolean                                                      | -        |
| panelOperations  | 卡片模式下配置操作按钮                                       | Array<"left" \| "right" \| "doubleLeft" \| "doubleRight">    | -        |
| dayStartOfWeek   | 每周的第一天开始于周几，0 - 周日，1 - 周一                   | 0 \|1                                                        | 0        |
| defaultMode      | 选择日期的月日历和选择月份的年日历                           | "day" \| "month" \| "year"                                   | "month"    |
| mode             | 选择日期的月日历和选择月份的年日历，受控模式                 | "day" \|"month" \|"year"                                     | -        |
| disabledDate     | 不可选取的时间                                               | (current?: Dayjs) => boolean                                 | -        |
| dateRender       | 定制日期显示，会完全覆盖日期单元格                           | (currentDate: Dayjs) => ReactNode                            | -        |
| monthRender      | 定制月份显示，会完全覆盖月份单元格                           | (currentDate: Dayjs) => ReactNode                            | -        |
| dateInnerContent | 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效 | (currentDate: Dayjs) => ReactNode                            | -        |
| headerRender     | 自定义头部渲染                                               | (props: {value?: Dayjs;pageShowDate?: Dayjs;mode?: string;onChange;onChangePageDate;onChangeMode;}) => ReactNode | -        |
| locale           | 国际化配置                                                   | Record<string, any>                                          | -        |
| headerType       | 有两种头部可供选择，默认的按钮类型和下拉框类型，只在全屏日历模式下生效 | "button" \|"select"                                          | "button" |

### Calendar 事件

| Props         | Desc                       | Type                  | Default |
| ------------- | -------------------------- | --------------------- | ------- |
| onChange      | 日期变化触发的回调         | (date: Dayjs) => void | -       |
| onPanelChange | 面板日期发生改变触发的回调 | (date: Dayjs) => void | -       |

## 使用方法

### 基础用法

```jsx
<Calendar />
defaultValue='2022-04-01' headerType='select'
```

### 设置卡片日历

```jsx
<Calendar panel defaultValue={dayjs('2020-04-01')} panelTodayBtn style={{ marginRight: 50 }} />
<Calendar panel defaultValue='2020-03' mode='year' />
```
