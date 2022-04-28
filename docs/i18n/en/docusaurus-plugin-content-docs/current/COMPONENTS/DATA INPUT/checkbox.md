# Checkbox

The Checkbox component is used to check multiple options.

## Installation

```bash
yarn add @illa-design/checkbox
```

## Import component

```jsx
import { Checkbox } from "@illa-design/checkbox"
```

## API

### Checkbox Basic Properties

| Props          | Desc                                              | Type         | Default |
| -------------- | ------------------------------------------------- | ------------ | ------- |
| autoFocus      | If true, get focus automatically                  | boolean      | false   |
| checked        | If true, the box is checked                       | boolean      | false   |
| defaultChecked | If true, the default status of the box is checked | boolean      | false   |
| disabled       | If true, the box is disabled                      | boolean      | false   |
| spacing        | The space between boxes                           | string \|int | "24px"  |

### Checkbox Events

| Props    | Desc                    | Type                           | Default |
| -------- | ----------------------- | ------------------------------ | ------- |
| onChange | When the content change | (value: T[], e: Event) => void | -       |

## Checkbox-group Basic Properties

| Props        | Desc                                    | Type                      | Default      |
| ------------ | --------------------------------------- | ------------------------- | ------------ |
| disabled     | If true, the checkbox is disabled       | boolean                   | false        |
| direction    | The layout of the checkboxes            | "horizontal" \|"vertical" | "horizontal" |
| defaultValue | The default value of the checkbox group | string                    | -            |
| options      | The options                             | string                    | -            |
| value        | The options are checked                 | string                    | -            |

## Examples

### Basic usage

```SnackPlayer dependencies=@illa-design/checkbox
import React from 'react';
import { Checkbox } from "@illa-design/checkbox"

const App = () => {
    return (
      <Checkbox>Hello</Checkbox>
    );
}

export default App;

```

```jsx
<Checkbox>Hello</Checkbox>
```

### Disable status

```SnackPlayer dependencies=@illa-design/checkbox
import React from 'react';
import { Checkbox } from "@illa-design/checkbox"

const App = () => {
    return (
      <Checkbox disabled>Hello</Checkbox>
    );
}

export default App;

```

```jsx
<Checkbox disabled>Hello</Checkbox>
```

### Options are checked

```SnackPlayer dependencies=@illa-design/checkbox
import React from 'react';
import { Checkbox } from "@illa-design/checkbox"

const App = () => {
    return (
      <Checkbox checked>Hello</Checkbox>
    );
}

export default App;

```

```jsx
<Checkbox checked>Hello</Checkbox>

```

### Set multiple options

```SnackPlayer dependencies=@illa-design/checkbox
import React from 'react';
import { CheckboxGroup } from "@illa-design/checkbox"

const App = () => {
    return (
      <CheckboxGroup options={["A", "B", "C"]} />
    );
}

export default App;

```

```jsx
<CheckboxGroup options={["A", "B", "C"]} />
```

### Set default checked options

```SnackPlayer dependencies=@illa-design/checkbox
import React from 'react';
import { CheckboxGroup } from "@illa-design/checkbox"

const App = () => {
    return (
      <CheckboxGroup options={["A", "B", "C"]} defaultValue={["A"]} />
    );
}

export default App;

```

```jsx
<CheckboxGroup options={["A", "B", "C"]} defaultValue={["A"]} />
```

### Set the checkbox group layout as vertical

```SnackPlayer dependencies=@illa-design/checkbox
import React from 'react';
import { CheckboxGroup } from "@illa-design/checkbox"

const App = () => {
    return (
      <CheckboxGroup options={["A", "B", "C"]} direction="vertical" />
    );
}

export default App;

```

```jsx
<CheckboxGroup options={["A", "B", "C"]} direction="vertical" />
```
