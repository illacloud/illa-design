# 树 Tree

树被用于展示层级较多内容的层级关系，并具有展开、收起、选择等交互功能。

## 安装

```bash
yarn add @illa-design/tree
```

## 引用组件

```jsx
import { Tree } from "@illa-dedign/tree"
```

## 组件接口(API)

### Tree 基础属性

| 参数名              | 描述                                   | 类型                                  | 默认值   |
| ------------------- | -------------------------------------- | ------------------------------------- | -------- |
| treeData            | 可以通过传入treeData,生成对应的树结构  | TreeDataType[]                        | -        |
| size                | 不同尺寸                               | "small" \| "medium" \| "large"        | "medium" |
| blockNode           | 是否节点占据一行                       | boolean                               | -        |
| autoExpandParent    | 是否自动展开父节点                     | boolean                               | true     |
| multiple            | 是否支持多选                           | boolean                               | -        |
| checkable           | 是否在节点前添加选框                   | boolean                               | -        |
| showLine            | 是否展示连接线                         | boolean                               | -        |
| selectable          | 是否可以被选择                         | boolean                               | true     |
| draggable           | 是否可拖拽                             | boolean                               | -        |
| loadingIcon         | 定制节点loading时的图标                | ReactNode                             | -        |
| switcherIcon        | 自定义树节点的展开/折叠图标            | ReactNode                             | -        |
| dragIcon            | 节点右侧拖拽icon                       | ReactNode                             | -        |
| checkStrictly       | 是否取消父子节点关联                   | boolean                               | -        |
| defaultSelectedKeys | 默认选中的树节点                       | string[]                              | -        |
| selectedKeys        | 选中的树节点                 | string[]                              | -        |
| defaultCheckedKeys  | 默认选中复选框的树节点                 | string[]                              | -        |
| checkedKeys         | 选中复选框的树节点           | string[]                              | -        |
| defaultExpandedKeys | 默认展开的节点                       | string[]                              | -        |
| expandedKeys        | 展开的节点                   | string[]                              | -        |
| loadMore            | 异步加载数据的回调，返回一个 Promise | `(node: NodeInstance) => Promise<void>` | -        |

### Tree 事件

| 参数名      |               描述               | 类型                                                         | 默认值 |
| ----------- | :------------------------------: | ------------------------------------------------------------ | ------ |
| onSelect    |         点击树节点的回调         | (selectedKeys: string[],extra: {selected: boolean;selectedNodes: NodeInstance[];node: NodeInstance;e: Event;}) => void | -      |
| onCheck     |      点击树节点复选框的回调      | (checkedKeys: string[],extra: {node: NodeInstance;checkedNodes: NodeInstance[];checked: boolean;halfCheckedKeys: string[];halfCheckedNodes: NodeInstance[];e: Event;}) => void | -      |
| onExpand    |       点击展开/关闭的回调        | (expandedKeys: string[],exra?: { expanded: boolean; node: NodeInstance; expandedNodes: NodeInstance[] }) => void | -      |
| onDrop      |  节点在可释放目标上释放时的回调  | `(info: {e: DragEvent<HTMLSpanElement>;dragNode: NodeInstance \| null;dropNode: NodeInstance \| null;dropPosition: number;}) => void` | -      |
| onDragStart |        节点开始拖拽的回调        | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void`  | -      |
| onDragEnd   |        节点结束拖拽的回调        | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void`  | -      |
| onDragOver  | 节点被拖拽至可释放目标上时的回调 | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void`  | -      |
| onDragLeave |   节点离开可释放目标上时的回调   | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void`  | -      |

### TreeNode 基础属性

| 参数名          | 描述                                                         | 类型                | 默认值 |
| --------------- | ------------------------------------------------------------ | ------------------- | ------ |
| title           | 该节点显示的标题                                             | string \| ReactNode | -      |
| selectable      | 是否可以选择, 当值为false时， 默认状态， 样式不变，但是hover 和 点击时没有样式变化 | boolean             | true   |
| disabled        | 是否禁用节点                                                 | boolean             | -      |
| disableCheckbox | 是否禁用复选框                                               | boolean             | -      |
| icon            | 该节点个性化显示的图标                                       | ReactNode           | -      |
| checkable       | 是否显示多选框                                               | boolean             | -      |
| isLeaf          | 是否是叶子节点。动态加载时有效                               | boolean             | -      |
| draggable       | 当前节点是否可拖拽                                           | boolean             | -      |

#### TreeDataType

```jsx
key?: string
title?: string
children?: TreeDataType[]
selectable?: boolean
disabled?: boolean
disableCheckbox?: boolean
icon?: boolean
checkable?: boolean
isLeaf?: boolean
draggable?: boolean
```



## 使用方法

### 基础用法

```jsx
const TreeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Leaf',
        key: '0-0-1',
      },
      {
        title: 'Branch 0-0-2',
        key: '0-0-2',
        disableCheckbox: true,
        children: [
          {
            title: 'Leaf',
            key: '0-0-2-1'
          }
        ]
      },
    ],
  },
  {
    title: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Branch 0-1-1',
        key: '0-1-1',
        checkable: false,
        children: [
          {
            title: 'Leaf',
            key: '0-1-1-1',
          },
          {
            title: 'Leaf',
            key: '0-1-1-2',
          },
        ]
      },
      {
        title: 'Leaf',
        key: '0-1-2',
      },
    ],
  },
];
<Tree
  multiple
  treeData={TreeData}
/>
```
