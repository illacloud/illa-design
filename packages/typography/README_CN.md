# 文字排版 Typography

字体排版被用于展示文本信息，主要由三个子组件构成：

- Heading 标题：多层级展示文本内容
- Text 文本：丰富的文本展示样式
- Paragraph 段落 ：设置多行内容的布局

## 安装

```bash
yarn add @illa-design/typography
```

## 引用组件

```jsx
import { Typography } from "@illa-design/typography"
```

## 组件接口(API)

### Typograph 基础属性

| 参数名    | 描述     | 类型               | 默认值 |
| --------- | -------- | ------------------ | ------ |
| style     | 节点样式 | CSSProperties      | -      |
| className | 节点类名 | string \| string[] | -      |

### Heading 基础属性

| 参数名      | 描述         | 类型                                                         | 默认值       |
| ----------- | ------------ | ------------------------------------------------------------ | ------------ |
| colorScheme | 字体颜色     | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green"  \| "blue" \| "cyan" \| "purple" \| string | "blackAlpha" |
| level       | 标题级别     | "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"                 | "h2"         |
| bold        | 粗体         | boolean                                                      | -            |
| disabled    | 禁用状态     | boolean                                                      | -            |
| mark        | 标记样式     | boolean \| colorScheme                                       | -            |
| underline   | 下划线样式   | boolean                                                      | -            |
| delete      | 删除线样式   | boolean                                                      | -            |
| code        | 代码块样式   | boolean                                                      | -            |
| copyable    | 开启复制功能 | boolean \| copyableConfig                                    | -            |
| ellipsis    | 自动溢出省略 | boolean \| ellipsisConfig                                    | -            |

### Text 基础属性

| 参数名      | 描述         | 类型                                                         | 默认值       |
| ----------- | ------------ | ------------------------------------------------------------ | ------------ |
| colorScheme | 字体颜色     | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green"  \| "blue" \| "cyan" \| "purple" \| string | "blackAlpha" |
| fontSize    | 字体大小     | string                                                       | "14px"       |
| bold        | 粗体         | boolean                                                      | -            |
| disabled    | 禁用 状态    | boolean                                                      | -            |
| mark        | 标记样式     | boolean \| colorScheme                                       | -            |
| underline   | 下划线样式   | boolean                                                      | -            |
| delete      | 删除线样式   | boolean                                                      | -            |
| code        | 代码块样式   | boolean                                                      | -            |
| copyable    | 开启复制功能 | boolean \| copyableConfig                                    | -            |
| ellipsis    | 自动溢出省略 | boolean \| ellipsisConfig                                    | -            |

### Paragraph 基础属性

| 参数名      | 描述         | 类型                                                         | 默认值       |
| ----------- | ------------ | ------------------------------------------------------------ | ------------ |
| colorScheme | 字体颜色     | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green"  \| "blue" \| "cyan" \| "purple" \| string | "blackAlpha" |
| fontSize    | 字体大小     | string                                                       | "14px"       |
| indent      | 文本缩进     | boolean                                                      | -            |
| bold        | 粗体         | boolean                                                      | -            |
| disabled    | 禁用状态     | boolean                                                      | -            |
| mark        | 标记样式     | boolean \| colorScheme                                       | -            |
| underline   | 下划线样式   | boolean                                                      | -            |
| delete      | 删除线样式   | boolean                                                      | -            |
| code        | 代码块样式   | boolean                                                      | -            |
| copyable    | 开启复制功能 | boolean \| copyableConfig                                    | -            |
| ellipsis    | 自动溢出省略 | boolean \| ellipsisConfig                                    | -            |

### ellipsisConfig 

| 参数名      | 描述                             | 类型       | 默认值 |
| ----------- | -------------------------------- | ---------- | ------ |
| expandable  | 是否可展开                       | boolean    | -      |
| rows        | 最多显示的行数                   | number     | 2      |
| suffix      | 自定义省略内容后缀               | string     | -      |
| expandLabel | 自定义展开的标识，默认是省略icon | ReactNode  | -      |
| tooltip     | 省略时，展示提示信息             | boolean    | true   |
| onExpand    | 点击展开时的回调                 | () => void | -      |

### copyableConfig

| 参数名        | 描述                                      | 类型       | 默认值 |
| ------------- | ----------------------------------------- | ---------- | ------ |
| copyIcon      | 自定义拷贝图标                            | ReactNode  | -      |
| copiedIcon    | 自定义拷贝后图标                          | ReactNode  | -      |
| copyTooltip   | 自定义拷贝提示文案，为 false 时隐藏文案   | ReactNode  | -      |
| copiedTooltip | 自定义拷贝后提示文案，为 false 时隐藏文案 | ReactNode  | -      |
| onCopy        | 拷贝成功的回调函数                        | () => void | -      |



## 使用方法

```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <Typograph>
        <Heading>I am a title.</Heading>
        <Paragraph>I am a paragraph.</Paragraph>
        <Text>I am text.</Text>
      </Typograph>
      <Text>
        ILLA Design 
        </Text>
      <Text colorScheme="red">
        ILLA Design
      </Text>
      <Text bold>
        Bold
      </Text>
      <Text disabled>
        Disabled
      </Text>
      <Text mark>
        Mark
      </Text>
      <Text underline>
        Underline
      </Text>
      <Text delete>
        Line through
      </Text>
      <Text code>
        Code snippet
      </Text>
      <paragraph indent>
         I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her.
      </paragraph>
      <paragraph indent ellipsis={new EllipsisBuilder().rows(2).expandable(true).create()}>
        I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her.
      </paragraph>
      <Text copyable>
        This is a copyable text.
      </Text>
    </>`
    

export const importStatement = `import { Typograph,Heading,Paragraph,Text } from "@illa-design/typograph"`

export const packages = {"@illa-design/typograph":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```

### 基础用法

```jsx
<Typograph>
  <Heading>I am a title.</Heading>
  <Paragraph>I am a paragraph.</Paragraph>
  <Text>I am text.</Text>
</Typograph>
```

### 文本样式

```jsx
<Text>
  ILLA Design
</Text>
<Text colorScheme="red">
  ILLA Design
</Text>
<Text bold>
  Bold
</Text>
<Text disabled>
  Disabled
</Text>
<Text mark>
  Mark
</Text>
<Text underline>
  Underline
</Text>
<Text delete>
  Line through
</Text>
<Text code>
  Code snippet
</Text>
```

### 段落缩进

```jsx
<paragraph indent>
  I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her.
</paragraph>

```

### 省略

```jsx
<paragraph indent ellipsis={new EllipsisBuilder().rows(2).expandable(true).create()}>
  I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her.
</paragraph>
```

### 可复制

```jsx
<paragraph copyable>
  I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her.
</paragraph>
```
