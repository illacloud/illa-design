# TreeSelect

It is a selector which displays options in a tree

## Installation

```bash
yarn add @illa-design/treeselect
```

## Import component

```jsx
import { TreeSelect } from "@illa-dedign/treeselect"
```

## API

### TreeSelect Basic Properties

| Props             | Desc                                                         | Type                                                         | Default  |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| multiple          | Whether to allow selecting multiple treeNodes                | boolean                                                      | -        |
| defaultValue      | Set defalut value in input                                   | string \| string[] \| { label: ReactNode; value: string; disabled?: boolean } \| { label: ReactNode; value: string; disabled?: boolean }[] | -        |
| value             | Set value                                                    | string \| string[] \| { label: ReactNode; value: string; disabled?: boolean } \| { label: ReactNode; value: string; disabled?: boolean }[] | -        |
| treeData          | Generate tree structure by structured data                   | TreeSelectDataType[]                                         | -        |
| labelInValue      | Set value's format                                           | boolean                                                      | -        |
| treeCheckable     | Whether to add a Checkbox before the treeNodes               | boolean                                                      | -        |
| treeCheckStrictly | Whether associate parent treeNode and children treeNode when they are checkable | boolean                                                      | -        |
| treeProps         | Set tree's properties                                        | Partial<TreeProps>                                           | -        |
| triggerProps      | Set trigger's properties                                     | Partial<TriggerProps>                                        | -        |
| notFoundContent   | Set the content when treeData is empty                       | ReactNode                                                    | -        |
| placeholder       | Set placeholder                                              | string                                                       | -        |
| showSearch        | Whether allow search                                         | boolean \| { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean } | -        |
| size              | Set selector's size                                          | "small" \| "medium" \| "large"                               | "medium" |
| disabled          | whether the selector is disabled                             | boolean                                                      | -        |
| error             | whether the selector is error                                | boolean                                                      | -        |
| loading           | whether the selector is loading status                       | boolean                                                      | -        |
| allowClear        | Whether allow clear values                                   | boolean                                                      | -        |
| allowCreate       | Whether allow create new values                              | boolean                                                      | -        |
| maxTagCount       | Set maxmium number of tags which is selected                 | number                                                       | -        |

### Steps Events

| Props           |                         Desc                         | Type                                          | Default |
| --------------- | :--------------------------------------------------: | --------------------------------------------- | ------- |
| filterTreeNode  |          Filter data based on entered value          | (inputText, treeNode: any) => boolean \| void | -       |
| onChange        |            Callback when value is changed            | (value: any) => void                          | -       |
| loadMore        |         Callback when dynamic load tree node         | (treeNode: NodeProps, dataRef) => void        | -       |
| onSearch        |        Callback when search value is changed         | (inputValue: string) => void                  | -       |
| onClear         |             Callback when clicked clear              | (visible: boolean) => void                    | -       |
| onVisibleChange | Callback when the visibility of the popup is changed | (visible: boolean) => void                    | -       |
| onClick         |             clicks on the drop-down box              | (e) => void                                   | -       |

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
<TreeSelect
  multiple
  showSearch
  allowClear
  treeData={TreeData}
/>
```
