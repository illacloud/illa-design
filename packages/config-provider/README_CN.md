# 全局配置

全局配置经常被用于设置全局属性，比如语言.

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

| 参数名 | 描述     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| locale | 设置语言 | `Locale` | `-`    |

## 使用方法
```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <ConfigProvider locale={zhCN}>
        <Pagination total={200} showTotal />
      </ConfigProvider>
    </>`

export const importStatement = `import { ConfigProvider } from "@illa-design/config-provider"`

export const packages = {"@illa-design/config-provider":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```
### 基础用法

```jsx
<ConfigProvider locale={zhCN}>
	<Pagination total={200} showTotal />
</ConfigProvider>
```

