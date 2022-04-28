# ConfigProvider

ConfigProvider is used to set global params, like language.

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

| Props  | Desc         | Type   | Default |
| ------ | ------------ | ------ | ------- |
| locale | Set language | Locale | -       |

## Example

### Basic usage

```SnackPlayer dependencies=@illa-design/config-provider,@illa-design/pagination
import React from 'react';
import { ConfigProvider , zhCN } from "@illa-design/config-provider"
import { Pagination } from "@illa-design/pagination"

const App = () => {
    return (
      <ConfigProvider locale={"zhCN"}>
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
