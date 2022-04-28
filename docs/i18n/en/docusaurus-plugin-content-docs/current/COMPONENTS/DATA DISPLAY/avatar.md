## Avatar

The Avatar component is used to represent a user and displays the pictures, text or icon.

## Installation

```bash
yarn add @illa-design/avatar
```

## Import component

```jsx
import { Avatar } from "@illa-design/avatar"
```

## API

### Avatar Basic Properties

| Props       | Desc                                                    | Type                                                                                                                    | Default  |
| ----------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------- |
| colorScheme | Color of avatar                                         | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \|"green" \|"blue" \|"cyan" \|"purple" | "gray"   |
| src         | The image url of avatar                                 | string \| string[]                                                                                                      | -        |
| size        | Size of the avatar                                      | "small" \| "medium" \| "large"                                                                                          | "small"  |
| text        | The displayed text of the avatar when src is not loaded | string \| string[]                                                                                                      | -        |
| shape       | The shape of avatar                                     | "circle" \| "square"                                                                                                    | "circle" |
| icon        | The default avatar when text and src is not specified   | ReactNode                                                                                                               | -        |

### Avatar-group Basic Properties

| Props        | Desc                                  | Type                                                                                                                        | Default |
| ------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| colorScheme  | Color of avatar group                 | "white" \| "blackAlpha" \| "gray" \| "grayBlue" \| "red" \| "orange" \| "yellow" \| "green" \| "blue" \| "cyan" \| "purple" | "gray"  |
| size         | Size of avatar group                  | "small" \| "medium" \| "large"                                                                                              | "small" |
| maxCount     | The max count of avatar group         | number                                                                                                                      | -       |
| zIndexAscend | The avatars are z-index ascend or not | boolean                                                                                                                     | false   |

### Avatar Events

| Props   | Desc                           | Type       | Default |
| ------- | ------------------------------ | ---------- | ------- |
| onClick | Callback when click the avatar | () => void | -       |

## Example

### Basic usage

```SnackPlayer dependencies=@illa-design/avatar
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

### Set Avatar's size

```SnackPlayer dependencies=@illa-design/avatar
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

### Set Avatar's shape and color

```SnackPlayer dependencies=@illa-design/avatar
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

### Set Avatar's icon

```SnackPlayer dependencies=@illa-design/avatar
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

### Set Avatar's image

```SnackPlayer dependencies=@illa-design/avatar
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

### Set Avatar's text

```SnackPlayer dependencies=@illa-design/avatar
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

### Set Avatar-group's max count

```SnackPlayer dependencies=@illa-design/avatar
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
