# Modal

The modal component is used to open a pop-ups in order to undertake further actions.

## Installation

```bash
yarn add @illa-design/modal
```

## Import component

```jsx
import { Modal } from "@illa-design/modal"
```

## API

### Modal Basic Properties

| Props             | Desc                                                    | Type          | Default                                 |
| ----------------- | ------------------------------------------------------- | ------------- | --------------------------------------- |
| visible           | Whether the modal is visible                            | boolean       | -                                       |
| getPopupContainer | Get pop-ups container                                   | () => Element | () => document.body                     |
| mask              | Whether the mask is visible                             | boolean       | true                                    |
| title             | Title                                                   | string        | -                                       |
| alignCenter       | Whether the modal is centered                           | boolean       | true                                    |
| maskClosable      | Whether modal is closable                               | boolean       | true                                    |
| hideCancel        | Whether hide the cancel button                          | boolean       | false                                   |
| simple            | Whether to enable simple mode                           | boolean       | (props: any) => { return props.notice;} |
| closable          | Whether to show the close button                        | boolean       | true                                    |
| okText            | Content of confirm button                               | string        | -                                       |
| cancelText        | Content of cancel button                                | string        | -                                       |
| confirmLoading    | Check if the confirm button is loading                  | boolean       | false                                   |
| okButtonProps     | The props of confirm button                             | ButtonProps   | -                                       |
| cancelButtonProps | The props of cancel button                              | ButtonProps   | -                                       |
| footer            | Whether to show the footer section                      | boolean       | true                                    |
| focusLock         | Whether to lock the focus inside the pop-ups            | boolean       | true                                    |
| autoFocus         | Whether to focus the first focusable element by default | boolean       | true                                    |

### Modal Event

| Props      | Desc                                 | Type                                     | Default |
| ---------- | ------------------------------------ | ---------------------------------------- | ------- |
| onCancel   | Callback for closing the pop-ups     | () => void                               | -       |
| onOk       | Callback for confirm button click    | `(e?: MouseEvent) => Promise<any>` \| void | -       |
| afterOpen  | Callback after the pop-ups is opened | () => void                               | -       |
| afterClose | Callback after the pop-ups is closed | () => void                               | -       |

## Examples

### Basic Usage

```jsx
<Modal visible={true} title={"Modal Title"} />
```

### Center the modal

```jsx
<Modal alignCenter={true} title={"Modal Title"} />
```

### Set the content of confirm button

```jsx
<Modal okText={"confirm"} title={"Modal Title"} />
```

### Show the close button

```jsx
<Modal closable={true} title={"Modal Title"} />
```
