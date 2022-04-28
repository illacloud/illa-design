# 头像 Avatar

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

| Props       | Desc                           | Type                                                                                                                        | Default  |
| ----------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | -------- |
| colorScheme | 头像为字符或 icon 时的背景颜色 | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" | "gray"   |
| src         | 设置头像为图片的资源地址       | string \| string[]                                                                                                          | -        |
| size        | 头像大小                       | "small" \| "medium" \| "large"                                                                                              | "small"  |
| text        | 设置头像为字符                 | string \| string[]                                                                                                          | -        |
| shape       | 头像形状                       | "circle" \| "square"                                                                                                        | "circle" |
| icon        | 设置头像为图标                 | ReactNode                                                                                                                   | -        |

### Avatar-group 基础属性

| Props        | Desc                                              | Type                                                                                                                        | Default |
| ------------ | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| colorScheme  | 头像组颜色                                        | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" | "gray"  |
| size         | 头像组大小                                        | "small" \| "medium" \| "large"                                                                                              | "small" |
| maxCount     | 头像组最多展示的头像数量，多余头像以+x 的形式展示 | number                                                                                                                      | -       |
| zIndexAscend | 头像组内的头像 z-index 递增                       | boolean                                                                                                                     | false   |

### Avatar 事件

| Props   | Desc     | Type       | Default |
| ------- | -------- | ---------- | ------- |
| onClick | 点击回调 | () => void | -       |

## 使用方法

### 基础用法

```SnackPlayer name=基础用法&description=基础用法&platform=web&supportedPlatforms=web&dependencies=@illa-design/avatar
import React from 'react';
import { Avatar } from "@illa-design/avatar";

const App = () => {
  return (
    <Avatar />
  );
}

export default App;

```

```jsx
<Avatar />
```

### 设置头像大小

```SnackPlayer name=设置头像大小&description=设置头像大小&platform=web&supportedPlatforms=web&dependencies=@illa-design/avatar
import React from 'react';
import { Avatar } from "@illa-design/avatar";

const App = () => {
  return (
    <Avatar size="small">Small</Avatar>
  );
}

export default App;

```

```jsx
<Avatar size="small">Small</Avatar>
```

### 设置头像的形状和颜色

```SnackPlayer name=设置头像的形状和颜色&description=设置头像的形状和颜色&platform=web&supportedPlatforms=web&dependencies=@illa-design/avatar
import React from 'react';
import { Avatar } from "@illa-design/avatar";

const App = () => {
  return (
    <Avatar shape="saqure" colorScheme="red">Small</Avatar>
  );
}

export default App;

```

```jsx
<Avatar shape="saqure" colorScheme="red">
  Small
</Avatar>
```

### 设置头像的图标

```SnackPlayer name=设置头像的图标&description=设置头像的图标&platform=web&supportedPlatforms=web&dependencies=@illa-design/avatar,@illa-design/icon
import React from 'react';
import { Avatar } from "@illa-design/avatar";
import { CloseIcon } from "@illa-design/icon";

const App = () => {
  return (
    <Avatar icon={<CloseIcon />} />
  );
}

export default App;

```

```jsx
<Avatar icon={<CloseIcon />} />
```

### 设置头像的图片

```SnackPlayer name=设置头像的图片&description=设置头像的图片&platform=web&supportedPlatforms=web&dependencies=@illa-design/avatar
import React from 'react';
import { Avatar } from "@illa-design/avatar";

const App = () => {
  return (
    <Avatar src="https://bit.ly/dan-abramov" />
  );
}

export default App;

```

```jsx
<Avatar src="https://bit.ly/dan-abramov" />
```

### 设置头像的文字

```SnackPlayer name=设置头像的文字&description=设置头像的文字&platform=web&supportedPlatforms=web&dependencies=@illa-design/avatar
import React from 'react';
import { Avatar } from "@illa-design/avatar";

const App = () => {
  return (
    <Avatar text="e" />
  );
}

export default App;

```

```jsx
<Avatar text="e" />
```

### 设置头像组最多展示的头像数量

```SnackPlayer name=设置头像组最多展示的头像数量&description=设置头像组最多展示的头像数量&platform=web&supportedPlatforms=web&dependencies=@illa-design/avatar
import React from 'react';
import { Avatar , AvatarGroup } from "@illa-design/avatar";

const App = () => {
  return (
    <AvatarGroup maxCount={2}>
      <Avatar text="I" />
      <Avatar text="L" />
      <Avatar text="L" />
      <Avatar text="A" />
    </AvatarGroup>
  );
}

export default App;

```

```jsx
<AvatarGroup maxCount={2}>
  <Avatar text="I" />
  <Avatar text="L" />
  <Avatar text="L" />
  <Avatar text="A" />
</AvatarGroup>
```
