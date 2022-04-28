# 返回顶部 Backtop

当滚动到一定高度的时候，在右下角会出现一个返回顶部的按钮。

## 安装

```bash
yarn add @illa-design/backtop
```

## 引用组件

```jsx
import { Backtop } from "@illa-design/backtop"
```

## 组件接口（API）

### Backtop 基础属性

| Props         | Desc                                                         | Type                        | Default      |
| ------------- | ------------------------------------------------------------ | --------------------------- | ------------ |
| visibleHeight | 当滚动到这个高度时，显示返回顶部按钮                         | number                      | 400          |
| target        | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement \| Window | () => window |
| onClick       | 点击返回顶部时的回调函数                                     | () => void                  | -            |
| easing        | 滚动到顶部的缓动方式类型                                     | string                      | quartOut     |
| duration      | 滚动到顶部的时间                                             | number                      | 400          |

## 使用方法

### 基础用法

```SnackPlayer dependencies=@illa-design/backtop
import React from 'react';
import { Backtop } from "@illa-design/backtop";

const App = () => {
  return (
    <Backtop />
  );
}

export default App;

```

```jsx
<Backtop />
```

### 设置返回顶部按钮高度

```SnackPlayer dependencies=@illa-design/backtop
import React from 'react';
import { Backtop } from "@illa-design/backtop";

const App = () => {
  const loremIpsum = Array(50)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n");

  return (
    <>
      <BackTop visibleHeight={400} />
      <div>{loremIpsum}</div>
    </>
  );
}

export default App;

```

```jsx
<BackTop visibleHeight={400} />
```

### 设置滚动到顶部的时间

```SnackPlayer dependencies=@illa-design/backtop
import React from 'react';
import { Backtop } from "@illa-design/backtop";

const App = () => {
  const loremIpsum = Array(50)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n");

  return (
    <>
      <BackTop duration={400} />
      <div>{loremIpsum}</div>
    </>
  );
}

export default App;

```

```jsx
<BackTop duration={400} />
```
