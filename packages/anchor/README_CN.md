# Anchor 锚点

通过锚点可快速找到信息内容在当前页面的位置。

## 安装

```bash
yarn add @illa-design/anchor
```

## 引用组件

```jsx
import { Anchor } from "@illa-design/anchor"
```

## 组件接口（API）

### Anchor 基础属性

| Props           | Desc                                                                                                                                              | Type                                                | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| animation       | 是否平滑滚动                                                                                                                                      | boolean                                             | true    |
| scrollContainer | 滚动容器。传入选择器或者 dom 元素。                                                                                                               | string \| HTMLElement \| Window                     | -       |
| boundary        | 滚动边界值，设置该值为数字后，将会在距离滚动容器 boundary 距离时停止滚动。设置为 "end", "start", "center"，目标元素将会对应滚动到底部，顶部，中间位置。 | number \| "end" \| "start" \| "center" \| "nearest" | "start" |
| hash            | 是否改变 hash，设置为 false 点击锚点不会改变页面 hash。                                                                                           | boolean                                             | true    |
| affix           | 是否固定。当设置为 true 时，锚点组件将会嵌套在固钉组件内                                                                                          | boolean                                             | true    |
| lineless        | 没有左侧轴线的样式。                                                                                                                              | boolean                                             | -       |

### Anchor 事件

| Props    | Desc                           | Type                                       | Default |
| -------- | ------------------------------ | ------------------------------------------ | ------- |
| onChange | 滚动时锚点改变或点击锚点时触发 | (newLink: string, oldLink: string) => void | -       |
| onSelect | 点击锚点时候触发               | (newLink: string, oldLink: string) => void | -       |

### AnchorLink 基础属性

| Props | Desc                                   | Type                     | Default |
| ----- | -------------------------------------- | ------------------------ | ------- |
| href  | 锚点链接                               | string                   | "#"     |
| title | 文本内容。可以是字符串或者自定义节点。 | string \| React.ReactNod | -       |

## 使用方法

### 基础用法

```SnackPlayer dependencies=@illa-design/anchor
import React from 'react';
import { Anchor } from "@illa-design/anchor";

const App = () => {
  return (
    <Anchor />
  );
}

export default App;

```

```jsx
<Anchor />
```

### 设置锚点链接

```SnackPlayer dependencies=@illa-design/anchor
import React from 'react';
import { Anchor } from "@illa-design/anchor";

const { Link: AnchorLink } = Anchor
const App = () => {
  return (
    <Anchor>
      <AnchorLink title="anchor" href="#anchor" />
    </Anchor>
  );
}

export default App;

```

```jsx
<Anchor>
  <AnchorLink title="anchor" href="#anchor" />
</Anchor>
```
