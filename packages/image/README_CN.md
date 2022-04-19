# Image图片

Image组件用于展示图片

## 安装

```bash
yarn add @illa-design/image
```

## 引用组件

```jsx
import { Image } from "@illa-design/image"
```

## 组件接口（API）

### Image 基础属性

| Props        | Desc                                  | Type                                                       | Default  |
| ------------ | ------------------------------------- | ---------------------------------------------------------- | -------- |
| src          | 图片链接                              | `string \| string[]`                                        | `-`      |
| width        | 图片宽度                              | `string \| string[]`                                        | `-`      |
| height       | 图片高度                              | `string \| string[]`                                        | `-`      |
| object-fit   | 图片缩放方式                          | `"fill" \| "container" \| "cover" \| "none" \| "scale-down"  ` | `"fill"` |
| alt          | 图片描述                              | `ReactNode`                                                | `-`      |
| fallbackIcon | 显示图像是否正在加载或失败            | `ReactNode`                                                | `-`      |
| fallbackSrc  | 后备图像src显示图像是否正在加载或失败 | `string \| string[]`                                        | `-`      |
| radius       | 图片圆角                              | `string \| string[]`                                        | `-`      |

## 使用示例

### 基础用法

```jsx
<image src='https://via.placeholder.com/150' />
```
