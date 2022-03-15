# 全局配置

全局配置经常被用于设置全局属性，比如语言

## 安装

```jsx
yarn add @illa-design/config-provider
```

## 引用组件

```jsx
import { ConfigProvider } from "@illa-dedign/config-provider"
```

## 组件接口(API)

### ConfigProvider 基础属性

| 参数名 | 描述     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| locale | 设置语言 | Locale | -      |

## 使用方法

### 基础用法

```jsx
<ConfigProvider locale={zhCN}>
	<Pagination total={200} showTotal />
</ConfigProvider>
```

