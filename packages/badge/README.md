# Badge

The badge component usually appears in the upper right corner of avatar or text to provide important information alert.

## Installation

```bash
yarn add @illa-design/badge
```

## Import Component

```jsx
import { Badge } from "@illa-design/badge"
```

## API

### Badge Basic Properties

| Props       | Desc                              | Type                                                                                                                        | Default |
| ----------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| count       | The number show on the badge      | number\| ReactNode                                                                                                          | 0       |
| text        | The displayed text                | string \| string[]                                                                                                          | -       |
| dot         | If true, the badge is a red dot   | boolean                                                                                                                     | -       |
| dotStyle    | The style of the dot              | object                                                                                                                      | -       |
| maxCount    | Max count of the number displayed | number                                                                                                                      | 9       |
| offset      | Offset the badge                  | [number,number]                                                                                                             | -       |
| status      | The status of the badge           | "default" \| "processing" \| "success" \| "warning" \| "error"                                                              | -       |
| colorScheme | The color of the dot              | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" | -       |

## Example

### Basic usage

```SnackPlayer name=Basic Usage&description=Basic Usage&platform=web&supportedPlatforms=web&dependencies=@illa-design/badge
import React from 'react';
import { Badge } from "@illa-design/badge";

const App = () => {
  return (
    <Badge />
  );
}

export default App;

```

```jsx
<Badge />
```

### Set Badge's status and text

```SnackPlayer name=Set Badge's status and text&description=Set Badge's status and text&platform=web&supportedPlatforms=web&dependencies=@illa-design/badge
import React from 'react';
import { Badge } from "@illa-design/badge";

const App = () => {
  return (
    <Badge status="success" text="success" />
  );
}

export default App;

```

```jsx
<Badge status="success" text="success" />
```

### Set max count

```SnackPlayer name=Set max count&description=Set max count&platform=web&supportedPlatforms=web&dependencies=@illa-design/badge
import React from 'react';
import { Badge } from "@illa-design/badge";

const App = () => {
  return (
    <Badge count={99} maxCount={50} />
  );
}

export default App;

```

```jsx
<Badge count={99} maxCount={50}></Badge>
```

### Set red dot style

```SnackPlayer name=Set red dot style&description=Set red dot style&platform=web&supportedPlatforms=web&dependencies=@illa-design/badge
import React from 'react';
import { Badge } from "@illa-design/badge";

const App = () => {
  return (
    <Badge count={22} dotStyle={{ marginLeft: 3 }} />
  );
}

export default App;

```

```jsx
<Badge count={22} dotStyle={{ marginLeft: 3 }} />
```

### Set badge render with offset

```SnackPlayer name=Set badge render with offset&description=Set badge render with offset&platform=web&supportedPlatforms=web&dependencies=@illa-design/badge
import React from 'react';
import { Badge } from "@illa-design/badge";

const App = () => {
  return (
    <Badge count={22} offset={[1, 2]}></Badge>
  );
}

export default App;

```

```jsx
<Badge count={22} offset={[1, 2]}></Badge>
```
