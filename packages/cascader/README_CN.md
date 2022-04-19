# 级联选择

将多个选项按照层级关系组织起来

## 安装

```bash
yarn add @illa-design/cascader
```

## 引用组件

```jsx
import { Cascader } from "@illa-dedign/cascader"
```

## 组件接口(API)

### Cascader 基础属性

| 参数名          | 描述                         | 类型                                                         | 默认值   |
| --------------- | ---------------------------- | ------------------------------------------------------------ | -------- |
| placeholder     | 选择框提示文字               | `string`                                                     | `-`      |
| showSearch      | 使单选模式可搜索             | `boolean \| { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }` | `-`      |
| size            | 设置选择器的尺寸             | ` "small" \| "medium" \| "large"`                            | `medium` |
| defaultValue    | 选择框的默认值               | `(string \| string[])[]`                                     | `-`      |
| value           | 选中值                       | `(string \| string[])[]`                                     | `-`      |
| options         | 设置级联数据                 | `OptionProps[]`                                              | `-`      |
| expandTrigger   | 展开下一级选择列表的交互方式 | `"click" \| "hover"`                                         | `click`  |
| multiple        | 是否开启多选                 | `boolean`                                                    | `-`      |
| notFoundContent | 没有数据时显示的内容         | `ReactNode`                                                  | `-`      |
| disabled        | 是否禁用组件                 | `boolean`                                                    | `-`      |
| error           | 是否为错误状态               | `boolean`                                                    | `-`      |
| loading         | 是否为加载状态               | `boolean`                                                    | `-`      |
| allowClear      | 是否允许清楚选择值           | `boolean`                                                    | `-`      |
| allowCreate     | 是否允许新建选择值           | `boolean`                                                    | `-`      |
| maxTagCount     | 最多显示Tag的数量            | `number`                                                     | `-`      |
| arrowIcon       | 自定义箭头icon               | `ReactNode \| null`                                          | `-`      |
| removeIcon      | 自定义tag上的删除icon        | `ReactNode \| null`                                          | `-`      |

### Cascader 基础属性

| 参数名          | 描述                                   | 类型                                                    | 默认值 |
| --------------- | :------------------------------------- | ------------------------------------------------------- | ------ |
| filterOption    | 自定义搜索逻辑                         | `(inputValue: string, option: NodeProps<T>) => boolean` | `-`    |
| onChange        | 当选择的值发生改变时的回调函数         | `(value: any) => void`                                  | `-`    |
| onSearch        | 搜索时的回调                           | `(inputValue: string) => void`                          | `-`    |
| onClear         | 点击清除输入时的回调                   | `(visible: boolean) => void`                            | `-`    |
| onVisibleChange | 下拉弹窗展开和收起状态发生变化时的回调 | `(visible: boolean) => void`                            | `-`    |
| onClick         | 点下拉框时的回调                       | `(e) => void`                                           | `-`    |

### OptionProps 基础属性

| 参数名   | 描述             | 类型            | 默认值 |
| -------- | :--------------- | --------------- | ------ |
| value    | 选项值           | `string`        | `-`    |
| label    | 选项标题         | `string`        | `-`    |
| disabled | 选项是否被禁用   | `boolean`       | `-`    |
| children | 设置选项的子选项 | `OptionProps[]` | `-`    |
| isLeaf   | 是否是叶子节点   | `boolean`       | `-`    |

### 使用方法

### 基础用法

```jsx
const options = [
  {
    value: "beijing",
    label: "Beijing",
    children: [
      {
        value: "chaoyang",
        label: "Chaoyang",
        children: [
          {
            value: "datunli",
            label: "Datunli",
          },
        ],
      },
      {
        value: "dongcheng",
        label: "Dongcheng",
      },
      {
        value: "xicheng",
        label: "Xicheng",
        disabled: true,
      },
      {
        value: "haidian",
        label: "Haidian",
      },
      {
        value: "fengtai",
        label: "fengtai",
      },
      {
        value: "shijingshan",
        label: "Shijingshan",
      },
      {
        value: "mentougou",
        label: "Mentougou",
      },
      {
        value: "fangshan",
        label: "Fangshan",
      },
      {
        value: "tongzhou",
        label: "Tongzhou",
      },
      {
        value: "shunyi",
        label: "Shunyi",
      },
    ],
  },
  {
    value: "shanghai",
    label: "Shanghai",
    children: [
      {
        value: "shanghaishi",
        label: "Shanghai",
        children: [
          {
            value: "huangpu",
            label: "Huangpu",
          },
        ],
      },
    ],
  },
  {
    value: "guangdong",
    label: "Guangdong",
    children: [
      {
        value: "shenzhen",
        label: "Shenzhen",
        children: [
          {
            value: "nanshan",
            label:"Nanshan",
          },
        ],
      },
    ],
  },
]
<Cascader style={{ width: 280 }} multiple options={options} />
```
