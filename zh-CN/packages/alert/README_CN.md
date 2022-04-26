# Alert

The Alert component is used to show the user the alert messages with alert dialog.

## Installation

```bash
yarn add @illa-design/alert
```

## Import component

```jsx
import { Alert } from "@illa-design/alert"
```

## API

### Alert Basic Properties

| Props        | Desc                                | Type        | Default                                        |
| ------------ | ----------------------------------- | ----------- | ---------------------------------------------- |
| action       | Custom the action area              | ReactNode   | -                                              |
| closable     | If true, the alert is closable      | boolean     | -                                              |
| onClose      | When close the alert                | (e) => void | -                                              |
| afterClose   | When after close the alert          | () => void  | -                                              |
| type         | The type of the alert               | "info" \   | "success" \|  "warning" \| "error"  | "info" |
| title        | The title of the alert              | ReactNode   | -                                              |
| content      | The content of the alert            | ReactNode   | -                                              |
| icon         | The icon of the alert               | ReactNode   | -                                              |
| closeElement | Custom the close button             | ReactNode   | -                                              |
| showIcon     | If true, show the icon of the alert | boolean     | true                                           |
| banner       | If true, the alert is banner style  | boolean     | false                                          |

## Example

### Basic usage

```jsx
<Alert title="Alert Title" content="Alert Content" />
```

### Set the close button

```jsx
<Alert
  closable
  onClose={onCloseEvent}
  afterClose={afterCloseEvent}
  closeElement={<LoadingIcon/>}
/>
```

### Set the alert type as error

```jsx
<Alert type="error" />
```
