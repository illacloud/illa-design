# Cascader

Cascader is a selector which displays options in multilevel list.

## Installation

```bash
yarn add @illa-design/cascader
```

## Import component

```jsx
import { Cascader } from "@illa-design/cascader"
```

## API

### Cascader Basic Properties

| Props           | Desc                                               | Type                                                         | Default  |
| --------------- | -------------------------------------------------- | ------------------------------------------------------------ | -------- |
| placeholder     | Set placeholder                                    | string                                                       | -        |
| showSearch      | Whether allow search                               | boolean \| { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean } | -        |
| size            | Set selector's size                                | "small" \| "medium" \| "large"                               | "medium" |
| defaultValue    | Set defalut value in input                         | (string \| string[])[]                                       | -        |
| value           | Set value                                          | (string \| string[])[]                                       | -        |
| options         | Generate options                                   | OptionProps[]                                                | -        |
| expandTrigger   | Set interaction type for expanding netx level list | "click" \| "hover"                                           | "click"  |
| multiple        | Whether to allow selecting multiple treeNodes      | boolean                                                      | -        |
| notFoundContent | Set the content when options is empty              | ReactNode                                                    | -        |
| disabled        | whether the selector is disabled                   | boolean                                                      | -        |
| error           | whether the selector is error                      | boolean                                                      | -        |
| loading         | whether the selector is loading status             | boolean                                                      | -        |
| allowClear      | Whether allow clear values                         | boolean                                                      | -        |
| allowCreate     | Whether allow create new values                    | boolean                                                      | -        |
| maxTagCount     | Set maxmium number of tags which is selected       | number                                                       | -        |
| arrowIcon       | Set arrow icon                                     | ReactNode \| null                                            | -        |
| removeIcon      | Set remove icon                                    | ReactNode \| null                                            | -        |

### Cascader Events

| Props           | Desc                                                 | Type                                                  | Default |
| --------------- | ---------------------------------------------------- | ----------------------------------------------------- | ------- |
| filterOption    | Filter data based on entered value                   | (inputValue: string, option: NodeProps<T>) => boolean | -       |
| onChange        | Callback when value is changed                       | (value: any) => void                                  | -       |
| onSearch        | Callback when search value is changed                | (inputValue: string) => void                          | -       |
| onClear         | Callback when clicked clear                          | (visible: boolean) => void                            | -       |
| onVisibleChange | Callback when the visibility of the popup is changed | (visible: boolean) => void                            | -       |
| onClick         | clicks on the drop-down box                          | (e) => void                                           | -       |

### OptionProps 

```jsx
OptionProps {
  value?: string;
  label?: string;
  disabled?: boolean;
  children?: OptionProps[];
  isLeaf?: boolean;
}
```




## Example

### Basic usage

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

