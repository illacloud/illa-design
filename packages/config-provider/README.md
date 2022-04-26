# ConfigProvider

ConfigProvider is used to set global params, like language

## Installation

```bash
yarn add @illa-design/config-provider
```

## Import component

```jsx
import { ConfigProvider } from "@illa-design/config-provider"
```

## API

### ConfigProvider Basic Properties

| Props  | Desc         | Type     | Default |
| ------ | ------------ | -------- | ------- |
| locale | Set language | `Locale` | `-`     |

## Example
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
### Basic usage

```jsx
<ConfigProvider locale={zhCN}>
  <Pagination total={200} showTotal />
</ConfigProvider>
```
