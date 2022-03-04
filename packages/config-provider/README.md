# ConfigProvider

ConfigProvider is used to set global params, like language

## Installation

```bash
yarn add @illa-design/config-provider
```

## Import component

```jsx
import { ConfigProvider } from "@illa-dedign/config-provider"
```

## API

### ConfigProvider Basic Properties

| Props  | Desc         | Type     | Default |
| ------ | ------------ | -------- | ------- |
| locale | Set language | `Locale` | `-`     |

## Example

### Basic usage

```jsx
<ConfigProvider locale={zhCN}>
  <Pagination total={200} showTotal />
</ConfigProvider>
```

