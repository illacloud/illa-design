# 抽屉 Drawer

屏幕边缘滑出的浮层面板。

## 安装

```bash
yarn add @illa-design/drawer
```

## 引用组件

```jsx
import { Drawer } from "@illa-design/drawer"
```

## 组件接口（API）

### Drawer基础属性

| Props             | Desc                                         | Type             | Default             |
| ----------------- | -------------------------------------------- | ---------------- | ------------------- |
| title             | 弹出框的标题（设置为 null 时，不显示标题栏） | ReactNode        | -                   |
| footer            | 自定义按钮确认和取消按钮                     | boolea           | -                   |
| okText            | 确认按钮文案                                 | string           | -                   |
| cancelText        | 取消按钮文案                                 | string           | -                   |
| placement         | 抽屉的方向 top right bottom left             | DrawerPlacement  | "right"             |
| width             | 抽屉的宽度，placement为 left right 时生效    | string \| number | 250                 |
| height            | 抽屉的高度，placement为 top bottom 时生效    | string \| number | 250                 |
| mask              | 是否显示遮罩                                 | boolean          | true                |
| visible           | 是否显示弹出框                               | boolean          | -                   |
| closable          | 是否显示右上角关闭按钮                       | boolean          | true                |
| maskClosable      | 点击蒙层是否可以关闭                         | boolean          | true                |
| confirmLoading    | 确认按钮是否为加载中状态                     | boolean          | -                   |
| getPopupContainer | 指定弹出框挂载的父节点                       | () => Element    | () => document.body |

### Drawer事件

| Props      | Desc               | Type                      | Default |
| ---------- | ------------------ | ------------------------- | ------- |
| onCancel   | 关闭弹出框的回调   | () => void                | -       |
| onOk       | 点击确认按钮的回调 | (e?: MouseEvent) =>  void | -       |
| afterOpen  | 抽屉打开之后的回调 | () => void                | -       |
| afterClose | 抽屉关闭之后的回调 | () => void                | -       |

## 使用方法
```mdx-code-block
import Sandpack from '@site/src/components/Sandpack'

export const code = `
    <>
      <Drawer visible={true} title={"Drawer title"} />
      <Drawer visible={true} placement={"left"} />
    </>`

export const importStatement = `import { Drawer } from "@illa-design/drawer"`

export const packages = {"@illa-design/drawer":"latest"}

<Sandpack code={code} packages={packages} importStatement={importStatement} template="react-ts"/>
```
### 基础用法

```jsx
<Drawer visible={true} title={"Drawer title"} />
```

### 设置抽屉向左方向

```jsx
<Drawer visible={true} placement={"left"} />
```
