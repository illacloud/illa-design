# 树选择器 TreeSelect

以树结构展示选项的选择器。

## 安装

```bash
yarn add @illa-design/treeselect
```

## 引用组件

```jsx
import { TreeSelect } from "@illa-dedign/treeselect"
```

## 组件接口(API)

### TreeSelect 基础属性

| 参数名            | 描述                                                         | 类型                                                         | 默认值   |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| multiple          | 是否支持多选                                                 | boolean                                                      | -        |
| defaultValue      | 选择框的默认值                                               | string \| string[] \| { label: ReactNode; value: string; disabled?: boolean } \| { label: ReactNode; value: string; disabled?: boolean }[] | -        |
| value             | 选中值                                                       | string \| string[] \| { label: ReactNode; value: string; disabled?: boolean } \| { label: ReactNode; value: string; disabled?: boolean }[] | -        |
| treeData          | 数据                                                         | TreeSelectDataType[]                                         | -        |
| labelInValue      | 设置 value 格式。默认是 string，设置为 true 时候，value 格式为： { label: string, value: string } | boolean                                                      | -        |
| treeCheckable     | 是否展示复选框                                               | boolean                                                      | -        |
| treeCheckStrictly | 父子节点是否关联                                             | boolean                                                      | -        |
| treeProps         | 可以接受所有 Tree 组件的参数                                 | `Partial<TreeProps>`                                           | -        |
| triggerProps      | 可以接受所有 Trigger 组件的参数                              | `Partial<TriggerProps>`                                        | -        |
| notFoundContent   | 没有数据时显示的内容                                         | ReactNode                                                    | -        |
| placeholder       | 选择框默认文字。                                             | string                                                       | -        |
| showSearch        | 使单选模式可搜索，传入 { retainInputValue: true } 在搜索框聚焦时保留现有内容传入 { retainInputValueWhileSelect: true } 在多选选择时保留输入框内容。 | boolean \| { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean } | -        |
| size              | 分别不同尺寸的选择器。对应 24px, 28px, 32px, 36px            | "small" \| "medium" \| "large"                               | "medium" |
| disabled          | 是否为禁用状态。                                             | boolean                                                      | -        |
| error             | 是否为错误状态。                                             | boolean                                                      | -        |
| loading           | 是否为加载状态。                                             | boolean                                                      | -        |
| allowClear        | 允许清除值。                                                 | boolean                                                      | -        |
| allowCreate       | 是否允许通过输入创建新的选项。                               | boolean                                                      | -        |
| maxTagCount       | 最多显示多少个 tag，仅在多选或标签模式有效。                 | number                                                       | -        |

### TreeSelect 事件

| 参数名          |                             描述                             | 类型                                          | 默认值 |
| --------------- | :----------------------------------------------------------: | --------------------------------------------- | ------ |
| filterTreeNode  | 根据输入的值筛选数据。接收 inputText 和 treeNode 两个参数，当 option 符合筛选条件时，返回 true，反之返回 false。treeNode 是树节点。 | (inputText, treeNode: any) => boolean \| void | -      |
| onChange        |                       选中值改变的回调                       | (value: any) => void                          | -      |
| loadMore        |                         动态加载数据                         | (treeNode: NodeProps, dataRef) => void        | -      |
| onSearch        |    自定义搜索方法。未定义的时候将会在已经在数据中进行搜索    | (inputValue: string) => void                  | -      |
| onClear         |         点击清除时触发，参数是当前下拉框的展开状态。         | (visible: boolean) => void                    | -      |
| onVisibleChange |                     下拉框收起展开时触发                     | (visible: boolean) => void                    | -      |
| onClick         |                    鼠标点击下拉框时的回调                    | (e) => void                                   | -      |

### 使用方法

### 基础用法

```jsx
const TreeData = [
  {
    title: "Trunk 0-0",
    key: "0-0",
    children: [
      {
        title: "Leaf",
        key: "0-0-1",
      },
      {
        title: "Branch 0-0-2",
        key: "0-0-2",
        disableCheckbox: true,
        children: [
          {
            title: "Leaf",
            key: "0-0-2-1"
          }
        ]
      },
    ],
  },
  {
    title: "Trunk 0-1",
    key: "0-1",
    children: [
      {
        title: "Branch 0-1-1",
        key: "0-1-1",
        checkable: false,
        children: [
          {
            title: "Leaf",
            key: "0-1-1-1",
          },
          {
            title: "Leaf",
            key: "0-1-1-2",
          },
        ]
      },
      {
        title: "Leaf",
        key: "0-1-2",
      },
    ],
  },
];
<TreeSelect
  multiple
  showSearch
  allowClear
  treeData={TreeData}
/>
```
