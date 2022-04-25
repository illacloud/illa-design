# Avatar头像

用作头像显示，可以为图片，图标或字符形式展示。

## 安装

```bash
yarn add @illa-design/avatar
```

## 引用组件

```jsx
import { Avatar } from "@illa-design/avatar"
```

## 组件接口（API）

### Avatar 基础属性

| Props       | Desc                         | Type                                                         | Default  |
| ----------- | ---------------------------- | ------------------------------------------------------------ | -------- |
| colorScheme | 头像为字符或icon时的背景颜色 | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" | "gray"   |
| src         | 设置头像为图片的资源地址     | string \| string[]                                           | -        |
| size        | 头像大小                     | "small" \| "medium" \| "large"                               | "small"  |
| text        | 设置头像为字符               | string \| string[]                                           | -        |
| shape       | 头像形状                     | "circle" \| "square"                                         | "circle" |
| icon        | 设置头像为图标               | ReactNode                                                    | -        |

### Avatar-group 基础属性

| Props        | Desc                                             | Type                                                         | Default |
| ------------ | ------------------------------------------------ | ------------------------------------------------------------ | ------- |
| colorScheme  | 头像组颜色                                       | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" | "gray"  |
| size         | 头像组大小                                       | "small" \| "medium" \| "large"                               | "small" |
| maxCount     | 头像组最多展示的头像数量，多余头像以+x的形式展示 | number                                                       | -       |
| zIndexAscend | 头像组内的头像z-index递增                        | boolean                                                      | false   |



### Avatar 事件

| Props   | Desc     | Type       | Default |
| ------- | -------- | ---------- | ------- |
| onClick | 点击回调 | () => void | -       |
## 使用方法


```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <Avatar />
      <Avatar size="small">Small</Avatar>
      <Avatar shape="square" colorScheme="red">Small</Avatar>
      <Avatar src='https://bit.ly/dan-abramov' />
      <Avatar text="e" />
    </>`

export const importStatement = `import { Avatar } from '@illa-design/avatar'`

export const packages = {"@illa-design/avatar":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```

### 基础用法

```jsx
<Avatar />
```

### 设置头像大小

```jsx
<Avatar size="small">Small</Avatar>
```

### 设置头像的形状和颜色

```jsx
<Avatar shape="saqure" colorScheme="red">Small</Avatar>

```

### 设置头像的图标

```jsx
<Avatar icon={<CloseIcon />} />
```

### 设置头像的图片

```jsx
<Avatar src='https://bit.ly/dan-abramov' />
```

### 设置头像的文字

```jsx
<Avatar text="e" />
```

### 设置头像组最多展示的头像数量

```jsx
<AvatarGroup maxCount={2}>
  <Avatar text="I" />
  <Avatar text="L" />
  <Avatar text="L" />
  <Avatar text="A" /> 
</AvatarGroup>
```

