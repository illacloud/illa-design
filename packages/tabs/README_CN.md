# 标签页

标签页是将多个内容组织在同一视图中的组件，可以通过选择不同的标签切换视图

## 安装

```bash
yarn add @illa-design/tabs
```

## 引用组件

```jsx
import { Tabs } from "@illa-design/tabs"
```

## 组件接口(API)

### Tabs 基础属性

| 参数名           | 描述                                    | 类型                                                | 默认值   |
| ---------------- | --------------------------------------- | --------------------------------------------------- | -------- |
| tabPosition      | 选项卡位置                              | `"left" \| "right" \| "top" \| "bottom"`            | `top`    |
| animated         | 是否使用动画切换 Tabs                   | `boolean \|{ tabPane?: boolean; inkBar?: boolean }` | `false`  |
| size             | Tab 标签的大小                          | `"small" \| "medium" \| "large"`                    | `medium` |
| variant          | 页签的基本样式                          | `"line" \| "text" \| "card" \| "capsule"`           | `line`   |
| activeKey        | 当前激活 tab 面板的 key                 | `string`                                            | `-`      |
| defaultActiveKey | 默认选中的标签选项卡                    | `string`                                            | `1`      |
| editable         | 是否允许增减标签。                      | `boolean`                                           | `-`      |
| addIcon          | 自定义增加tab按钮,当editable=true时展示 | `ReactNode`                                         | `-`      |
| deleteIcon       | 自定义关闭tab按钮,当editable=true时展示 | `ReactNode`                                         | `-`      |
| tabBarSpacing    | tabs 之间的间隙                         | `number`                                            | `-`      |

### Tabs 事件

| 参数名      | 描述                    | 类型                    | 默认值 |
| ----------- | ----------------------- | ----------------------- | ------ |
| onChange    | activeTab 改变的回调    | `(key: string) => void` | `-`    |
| onClickTab  | 点击选项卡的回调        | `(key: string) => void` | `-`    |
| onAddTab    | 点击新增 tab 按钮的回调 | `() => void`            | `-`    |
| onDeleteTab | 点击删除按钮的回调      | `(key: string) => void` | `-`    |

### TabPane 基础属性

| 参数名        | 描述                                                         | 类型                   | 默认值 |
| ------------- | ------------------------------------------------------------ | ---------------------- | ------ |
| key           | 对应 activeKey                                               | `string`               | `-`    |
| title         | 选项卡的标题显示 **(必填)**                                  | `string \| ReactNode ` | `-`    |
| destroyOnHide | 选项卡隐藏的时候是否销毁标签页内的DOM结构，优先级高于 Tabs 的 destroyOnHide 属性 | `boolean`              | `true` |
| disabled      | 是否禁用                                                     | `boolean`              | `-`    |
| closable      | 动态增减标签页时是否允许关闭当前标签页                       | `boolean`              | `true` |



## 使用方法

### 基础用法

```jsx
 <Tabs defaultActiveTab="1" >
    <TabPane key="1" title="Tab 1">
      <Paragraph>This is Tab Panel 1</Paragraph>
    </TabPane>
    <TabPane key="2" title="Tab 2" disabled>
      <Paragraph>This is Tab Panel 2</Paragraph>
    </TabPane>
    <TabPane key="3" title="Tab 3">
      <Paragraph>This is Tab Panel 3</Paragraph>
    </TabPane>
 </Tabs>
```

### 设置标签大小

通过size接口可以设置Tabs标签大小

```jsx
<Tabs defaultActiveTab="1" size="large">
    <TabPane key="1" title="Tab 1">
      <Paragraph>This is Tab Panel 1</Paragraph>
    </TabPane>
    <TabPane key="2" title="Tab 2" disabled>
      <Paragraph>This is Tab Panel 2</Paragraph>
    </TabPane>
    <TabPane key="3" title="Tab 3">
      <Paragraph>This is Tab Panel 3</Paragraph>
    </TabPane>
 </Tabs>
```

### 设置选项卡位置

通过tabPosition可以配置选项卡相对pane的位置

```jsx
<Tabs defaultActiveTab="1" size="large" tabPosition="left">
    <TabPane key="1" title="Tab 1">
      <Paragraph>This is Tab Panel 1</Paragraph>
    </TabPane>
    <TabPane key="2" title="Tab 2" disabled>
      <Paragraph>This is Tab Panel 2</Paragraph>
    </TabPane>
    <TabPane key="3" title="Tab 3">
      <Paragraph>This is Tab Panel 3</Paragraph>
    </TabPane>
</Tabs>
```

### 设置选项卡样式

通过variant接口配置选项卡的样式

```jsx
<Tabs defaultActiveTab="1" size="large" variant="card">
    <TabPane key="1" title="Tab 1">
      <Paragraph>This is Tab Panel 1</Paragraph>
    </TabPane>
    <TabPane key="2" title="Tab 2" disabled>
      <Paragraph>This is Tab Panel 2</Paragraph>
    </TabPane>
    <TabPane key="3" title="Tab 3">
      <Paragraph>This is Tab Panel 3</Paragraph>
    </TabPane>
</Tabs>
```

### 设置切换动画

通过animated接口可以配置是否开启过渡效果

```jsx
<Tabs defaultActiveTab="1" size="large" variant="card" animated={false} >
    <TabPane key="1" title="Tab 1">
      <Paragraph>This is Tab Panel 1</Paragraph>
    </TabPane>
    <TabPane key="2" title="Tab 2" disabled>
      <Paragraph>This is Tab Panel 2</Paragraph>
    </TabPane>
    <TabPane key="3" title="Tab 3">
      <Paragraph>This is Tab Panel 3</Paragraph>
    </TabPane>
</Tabs>
```
