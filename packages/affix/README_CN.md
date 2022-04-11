# Affix固钉

将页面元素钉在可视范围。当内容区域比较长，需要滚动页面时，固钉可以将内容固定在屏幕上。常用于侧边菜单和按钮组合。

## 安装

```bash
yarn add @illa-design/affix
```

## 引用组件

```jsx
import { Affix } from "@illa-design/affix"
```

## 组件接口（API）

### Affix基础属性

| Props           | Desc                                                         | Type                                | Default        |
| --------------- | ------------------------------------------------------------ | ----------------------------------- | -------------- |
| offsetTop       | 距离窗口顶部达到指定偏移量后触发                             | `number`                            | `0`            |
| offsetBottom    | 距离窗口底部达到指定偏移量后触发                             | `number`                            | `-`            |
| target          | 滚动容器                                                     | `() => HTMLElement | null | Window` | `() => window` |
| targetContainer | `target` 的外层滚动元素。`Affix` 将会监听该元素的滚动事件，并实时更新固钉的位置。主要是为了解决 `target` 属性指定为非 `window` 元素时，如果外层元素滚动，可能会导致固钉跑出容器问题。 | `() => HTMLElement | null | Window` | `-`            |

### Affix事件

| Props    | Desc                   | Type                         | Default |
| -------- | ---------------------- | ---------------------------- | ------- |
| onChange | 固定状态发生改变时触发 | `(affixed: boolean) => void` | `-`     |

## 使用方法

### 基础用法

```jsx
<Affix>
	<span>Hello</span>
</Affix>
```
