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

```jsx
<Backtop />
```

### Set visible height

```jsx
<TestBackTop visibleHeight={400} />
```

### Set duration to scroll to top

```jsx
<TestBackTop duration={400} />
```
