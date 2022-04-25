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

```jsx
<Backtop />
```

### 设置返回顶部按钮高度

```jsx
<TestBackTop visibleHeight={400} />
```

### 设置滚动到顶部的时间

```jsx
<TestBackTop duration={400} />
```
