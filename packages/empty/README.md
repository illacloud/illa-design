# Empty

The empty component is used to display text or image when the content is empty.

## Installation

```bash
yarn add @illa-design/empty
```

## Import component

```jsx
import { Empty } from "@illa-design/empty"
```

## API

### Empty Basic Properties

| Props       | Desc                | Type      | Default |
| ----------- | ------------------- | --------- | ------- |
| description | The description     | ReactNode | -       |
| icon        | The displayed icon  | ReactNode | -       |
| imgSrc      | The displayed image | string    | -       |

## Example

### Basic Usage

```SnackPlayer name=illa-design&platform=web&supportedPlatforms=web&dependencies=@illa-design/react
import * as React from 'react';
import { Empty } from '@illa-design/empty';

const App = () => {
  return <Empty />;
};

export default App;
```

```jsx
<Empty />
```

### Set the description

```SnackPlayer
import * as React from 'react';
import { Empty } from '@illa-design/empty';

const App = () => {
  return <Empty description={"test description"} />;
};

export default App;
```

```SnackPlayer
<Empty description={"test description"} />
```
