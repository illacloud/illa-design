# 评分

评分组件

## 安装

```bash
yarn add @illa-design/rate
```

## 引用组件

```jsx
import { Rate } from "@illa-dedign/rate"
```

## 组件接口(API)

### Rate 基础属性

| 参数名       | 描述                                 | 类型                                          | 默认值             |
| ------------ | ------------------------------------ | --------------------------------------------- | ------------------ |
| defaultValue | 默认值                               | `number`                                      | `-`                |
| character    | 自定义字符                           | `ReactNode \| ((index: number) => ReactNode)` | `<StarIcon />` |
| count        | 星的总数                             | `number`                                      | `5`                |
| value        | 星的个数，受控值                     | `number`                                      | `-`                |
| tooltips     | 按数组顺序依次自定义每一项的提示信息 | `string[]`                                    | `-`                |
| allowHalf    | 是否允许半选                         | `boolean`                                     | `-`                |
| allowClear   | 是否允许清除                         | `boolean`                                     | `-`                |
| readonly     | 是否只读，不能选择                   | `boolean`                                     | `-`                |
| disabled     | 是否禁用                             | `boolean`                                     | `-`                |
| heart        | 心型样式分级                         | `boolean`                                     | `-`                |

### Rate 事件

| 参数名        |           描述           | 类型                      | 默认值 |
| ------------- | ---------------------- | ------------------------- | ------ |
| onChange      |     评分值改变的回调     | `(key: string) => void`   | `-`    |
| onHoverChange | 鼠标经过时数值变化的回调 | `(value: number) => void` | `-`    |

## 使用方法

### 基础用法

```jsx
 <Rate />
```

### 设置默认值

通过default接口可以设置评分的默认值

```jsx
<Rate defaultValue={5}>
```

### 设置评分最大值

通过count可以配置评分的最大值

```jsx
<Rate defaultValue={5} count={10}>
```

### 设置是否可以半选

通过allowHalf接口配置评分是否支持半选

```jsx
<Rate allowHalf>
```

### 设置是否可以清除评分

通过allowClear接口可以配置是否支持清除评分

```jsx
<Rate allowHalf allowClear>
```

### 设置心形样式

通过heart接口可以配置是心形评分图标样式

```jsx
<Rate allowHalf allowClear heart>
```

### 自定义图标样式

通过character接口可以配置任意评分图标样式

```jsx
function TextWrapper(props) {
  return (
    <div
      style={{
        width: 24,
        lineHeight: '24px',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      }}
    >
      {props.text}
    </div>
  );
} 
<Rate
  style={{ display: 'block', margin: '10px 0' }}
  defaultValue={3}
  character={<TextWrapper text='A' />}
/>
```

