# 标签 <TAG>

标签组件一般被用于标记事物的属性、维度或者类别.

## 安装

```bash
yarn add @illa-design/tag
```

## 引用组件

```jsx
import { Tag } from "@illa-dedign/tag"
```

## 组件接口(API)

### Tag 基础属性

| 参数名      | 描述               | 类型                                                         | 默认值    |
| ----------- | ------------------ | ------------------------------------------------------------ | --------- |
| colorScheme | 设置标签背景颜色   | `white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" \| string`| `gray`  |
| size        | 设置标签尺寸       | `small" \| "medium" \| "large"`                  | `small` |
| visible     | 设置标签是否隐藏   | `boolean`                                                    |`- `     |
| closable    | 设置是否可关闭标签 | `boolean`                                                    | `-`      |
| variant     | 设置标签的预置样式   | `"outline" \| "fill" \| "light"`                              | `light`    |

### Tag 扩展属性

| 参数名 | 描述     | 类型        | 默认值 |
| ------ | -------- | ----------- | ------ |
| icon   | 设置图标 | `ReactNode` | `-`    |

### Tag 事件

| 参数名  | 描述             | 类型         | 默认值 |
| ------- | ---------------- | ------------ | ------ |
| onClose | 关闭标签回调函数 | `() => void` | `-`  |

## 使用方法

### 基础用法
  
```jsx
<Tag />
```  
  
### 设置标签大小

通过size这个接口可以调整tag的大小
  
```jsx
<Tag>Hello</Tag>
<Tag size="small">Small</Tag>
<Tag size="medium">Medium</Tag>
<Tag size="large">Large</Tag>
``` 
  
### 设置标签样式和颜色

通过variant这个接口可以调整tag的样式,通过colorScheme这个接口可以调整tag的背景颜色

```jsx
<Tag>Hello</Tag>
<Tag variant="fill" colorScheme="red">Hello</Tag>
```   

### 设置标签icon

通过icon这个接口可以设置icon 左侧的icon

```jsx
<Tag> Hello </Tag>
<Tag variant="fill" colorScheme="red" icon={<BsFacebook />}>Hello</Tag>
```

### 设置标签可被关闭

通过closable这个接口可以设置icon可被关闭

```jsx
<Tag>Hello</Tag>
<Tag variant="fill" colorScheme="red" icon={<BsFacebook />} closable>Hello</Tag>
```  

