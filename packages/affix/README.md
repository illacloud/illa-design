# Affix

The Affix component is used to pin page element to the visible range. When the content area is long and the page needs to be scrolled, affix can fix the content on the screen. Often used in side menus and button combinations.

## Installation

```bash
yarn add @illa-design/affix
```

## Import component

```jsx
import { Affix } from "@illa-design/affix"
```

## API

### Affix Basic Properties

| Props           | Desc                                                         | Type                                | Default        |
| --------------- | ------------------------------------------------------------ | ----------------------------------- | -------------- |
| offsetTop       | `Triggered when the specified offset is reached from the top of the window` | `number`                            | `0`            |
| offsetBottom    | `Triggered when the specified offset is reached from the bottom of the window` | `number`                            | `-`            |
| target          | `scroll container`                                           | `() => HTMLElement` | null | Window` | `() => window` |
| targetContainer | `The outer scrolling element of 'target'`                    | `() => HTMLElement` | null | Window` | `-`            |

### Affix Event

| Props    | Desc                                   | Type                         | Default |
| -------- | -------------------------------------- | ---------------------------- | ------- |
| onChange | Triggered when the fixed state changes | `(affixed: boolean) => void` | `-`     |

## Examples

### Basic Usage

```jsx
<Affix>
	<span>Hello</span>
</Affix>
```
