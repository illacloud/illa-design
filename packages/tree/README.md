# Tree

Tree is used to show the  hierarchy of content with more levels

## Installation

```bash
yarn add @illa-design/tree
```

## Import component

```jsx
import { Tree } from "@illa-dedign/tree"
```

## API

### Tree Basic Properties

| Props               | Desc                                                         | Type                                    | Default |
| ------------------- | ------------------------------------------------------------ | --------------------------------------- | ------- |
| treeData            | Generate tree structure by structured data                   | `TreeDataType[]`                        | `-`     |
| size                | Set size                                                     | `"small" \| "medium" \| "large"`        | `medium`     |
| blockNode           | Whether treeNode fill  the remaining horizontal space        | `boolean`                               | `-`     |
| autoExpandParent    | Whether to automatically expand a parent treeNode            | `boolean`                               | `true`  |
| multiple            | Whether to allow selecting multiple treeNodes                | `boolean`                               | `-`     |
| checkable           | Whether to add a Checkbox before the treeNodes               | `boolean`                               | `-`     |
| selectable          | Whether treeNode can be selected                             | `boolean`                               | `true`  |
| draggable           | Whether treeNode can be draged                               | `boolean`                               | `-`     |
| showLine            | Whether show a connecting line between treeNodes             | `boolean`                               | `-`     |
| loadingIcon         | Customize a icon before treeNodes title                      | `ReactNode`                             | `-`     |
| switcherIcon        | Customize the switcher icon                                  | `ReactNode`                             | `-`     |
| dragIcon            | Customize the drag icon after treeNode title                 | `ReactNode`                             | `-`     |
| checkStrictly       | whether associate parent treeNode and children treeNode when they are checkable | `boolean`                               | `-`     |
| defaultSelectedKeys | Set default selected treeNodes                               | `string[]`                              | `-`     |
| selectedKeys        | Set selected treeNodes by treeNodes' key                     | `string[]`                              | `-`     |
| defaultCheckedKeys  | Set default checked treeNodes by treeNodes' key              | `string[]`                              | `-`     |
| checkedKeys         | Set checked treeNodes by treeNodes' key                      | `string[]`                              | `-`     |
| defaultExpandedKeys | Set default expanded treeNodes by treeNodes' key             | `string[]`                              | `-`     |
| expandedKeys        | Set default treeNodes by treeNodes' key                      | `string[]`                              | `-`     |
| loadMore            | Callback when loaded data asynchronously, returning a `Promise`. | `(node: NodeInstance) => Promise<void>` | `-`     |

### Tree Events

| Props       |                           Desc                            | Type                                                         | Default |
| ----------- | :-------------------------------------------------------: | ------------------------------------------------------------ | ------- |
| onSelect    |            Callback when treeNode is selected             | `(selectedKeys: string[],extra: {selected: boolean;selectedNodes: NodeInstance[];node: NodeInstance;e: Event;}) => void` | `-`     |
| onCheck     |             Callback when treeNode is checked             | `(checkedKeys: string[],extra: {node: NodeInstance;checkedNodes: NodeInstance[];checked: boolean;halfCheckedKeys: string[];halfCheckedNodes: NodeInstance[];e: Event;}) => void` | `-`     |
| onExpand    |            Callback when treeNode is expanded             | `(expandedKeys: string[],exra?: { expanded: boolean; node: NodeInstance; expandedNodes: NodeInstance[] }) => void` | `-`     |
| onDrop      |             Callback when treeNode is dropped             | `(info: {e: DragEvent<HTMLSpanElement>;dragNode: NodeInstance \| null;dropNode: NodeInstance \| null;dropPosition: number;}) => void` | `-`     |
| onDragStart |         Callback when the treeNode starts dragged         | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void` | `-`     |
| onDragEnd   |          Callback when the treeNode ends dragged          | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void` | `-`     |
| onDragOver  | Callback when the treeNode is dragged onto a valid target | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void` | `-`     |
| onDragLeave |     Callback when the treeNode leaves a valid target      | `(e: DragEvent<HTMLSpanElement>, node: NodeInstance) => void` | `-`     |

### TreeNode Basic Properties

| Props           | Desc                                      | Type                  | Default |
| --------------- | ----------------------------------------- | --------------------- | ------- |
| title           | Title of treeNode                         | `string \| ReactNode` | `-`     |
| selectable      | whether the treeNode can be selected      | `boolean`             | `true`  |
| disabled        | whether the treeNode is disabled          | `boolean`             | `-`     |
| disableCheckbox | whether disable the treeNode is checkable | `boolean`             | `-`     |
| icon            | set treeNode’s icon before title          | `ReactNode`           | `-`     |
| checkable       | whether to show checkbox before treeNode  | `boolean`             | `-`     |
| isLeaf          | whether the treeNode is a leaf            | `boolean`             | `-`     |
| draggable       | whether the treeNode is draggable         | `boolean`             | `-`     |

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



## Example

### Basic usage

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
