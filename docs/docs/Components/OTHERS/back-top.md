# BackTop

When scrolling to the height, a button to return to the top will appear in the lower right corner.

## Installation

```bash
yarn add @illa-design/backtop
```

## Import component

```jsx
import { Backtop } from "@illa-design/backtop"
```

## API

### Backtop Basic Properties

| Props         | Desc                                                         | Type              | Default  |
| ------------- | ------------------------------------------------------------ | ----------------- | -------- |
| visibleHeight | When scrolled to this height, the back to top button is visible. | number            | 400      |
| target        | Set the element whose scroll event needs to be listened to   | () => HTMLElement | Window   |
| onClick       | Callback function when click returns to top                  | () => void        | -        |
| easing        | Scroll to top easing type                                    | string            | quartOut |
| duration      | Time to scroll to top                                        | number            | 400      |

## Examples

### Basic usage

```SnackPlayer dependencies=@illa-design/backtop
import React from 'react';
import { Backtop } from "@illa-design/backtop";

const App = () => {
  return (
    <Backtop />
  );
}

export default App;

```

```jsx
<Backtop />
```

### Set visible height

```SnackPlayer dependencies=@illa-design/backtop
import React from 'react';
import { Backtop } from "@illa-design/backtop";

const App = () => {
  const loremIpsum = Array(50)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n");

  return (
    <>
      <BackTop visibleHeight={400} />
      <div>{loremIpsum}</div>
    </>
  );
}

export default App;

```


```jsx
<BackTop visibleHeight={400} />
```

### Set duration to scroll to top

```SnackPlayer dependencies=@illa-design/backtop
import React from 'react';
import { Backtop } from "@illa-design/backtop";

const App = () => {
  const loremIpsum = Array(50)
  .fill(0)
  .map(
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  )
  .join("\n");

  return (
    <>
      <BackTop duration={400} />
      <div>{loremIpsum}</div>
    </>
  );
}

export default App;

```

```jsx
<BackTop duration={400} />
```
