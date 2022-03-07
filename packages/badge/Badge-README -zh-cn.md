# Badge徽标

一般出现在图标或文字的右上角。提供及时、重要的信息提示

## 安装

```jsx
yarn add @illa-design/badge
```

## 引用组件

```jsx
import { Badge } from "@illa-dedign/badge"
```

## 组件接口（API）

### Badge 基础属性

| Props       | Desc                                                         | Type                                                         | Default |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| count       | 徽标显示的数字                                               | `number\|ReactNode `                                         | `0`     |
| text        | 自定义提示内容                                               | `string \| string[]`                                         | `-`     |
| dot         | 显示为小红点                                                 | `boolean`                                                    | `-`     |
| dotStyle    | 徽标的样式                                                   | `object`                                                     | `-`     |
| maxCount    | 徽标最大显示数值，如果 count 超过这个数值会显示为 ${max-count}+ | `number `                                                    | `9`     |
| offset      | 设置徽标位置的偏移                                           | `[number,number]`                                            | `-`     |
| status      | 徽标的状态类型                                               | `"default" \|"processing" \|"success" \|"warning" \|"error" ` | `-`     |
| colorScheme | 自定义小圆点的颜色                                           | `"white" \|"blackAlpha" \|"gray" \|"grayBlue" \|"red" \|"orange" \|"yellow" \|"green" \|"blue" \|"cyan" \|"purple" ` | `-`     |

