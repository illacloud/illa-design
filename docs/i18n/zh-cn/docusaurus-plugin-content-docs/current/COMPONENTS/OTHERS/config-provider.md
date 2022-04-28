# 全局配置 ConfigProvider

全局配置经常被用于设置全局属性，比如语言。

## 安装

```bash
yarn add @illa-design/config-provider
```

## 引用组件

```jsx
import { ConfigProvider } from "@illa-design/config-provider"
```

## 组件接口(API)

### ConfigProvider 基础属性

| 参数名 | 描述     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| locale | 设置语言 | Locale | -      |

## 使用方法

### 基础用法

```SnackPlayer dependencies=@illa-design/config-provider,@illa-design/pagination
import React from 'react';
import { ConfigProvider , zhCN} from "@illa-design/config-provider"
import { Pagination } from "@illa-design/pagination"

const App = () => {
    return (
      <ConfigProvider locale={zhCN}>
        <Pagination total={200} showTotal />
      </ConfigProvider>
    );
}

export default App;

```

```jsx
<ConfigProvider locale={zhCN}>
	<Pagination total={200} showTotal />
</ConfigProvider>
```
