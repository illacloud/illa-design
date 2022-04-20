# 菜单栏

用于收纳、整理多个选项的列表

## 安装

```bash
yarn add @illa-design/menu
```

## 引用组件

```jsx
import { Menu } from "@illa-dedign/menu"
```

## 组件接口(API)

### Menu 基础属性

| 参数名              | 描述                                                         | 类型                                        | 默认值      |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------- | ----------- |
| theme               | 菜单风格                                                     | `"light" \| "dark"`                         | `light`     |
| mode                | 菜单模式，目前支持垂直（vertical）、水平菜单（horizontal）、悬浮按钮（popbutton） | `"vertical" \| "horizontal" \| "popButton"` | `vertical`  |
| variant             | 子菜单折叠样式                                               | `"inline" \| "pop"`                         | `inline`    |
| accordion           | 开启手风琴效果                                               | `boolean`                                   | `-`         |
| levelIndent         | 层级之间的缩进量                                             | `number`                                    | `28`        |
| collapseDefaultIcon | 用于定制展开时折叠按钮图标                                   | `ReacNode`                                  | `<IconPre>` |
| collapseActiveIcon  | 用于定制收起时折叠按钮图标                                   | `ReacNode`                                  | `<IconPre>` |
| autoOpen            | 默认展开所有多级菜单                                         | `boolean`                                   | `-`         |
| hasCollapseButton   | 是否内置折叠按钮                                             | `boolean`                                   | `-`         |
| collapse            | 是否水平折叠收起菜单                                         | `boolean`                                   | `-`         |
| selectable          | 菜单选项是否可选                                             | `boolean`                                   | `true`      |
| ellipsis            | 水平菜单是否自动溢出省略                                     | `boolean`                                   | `true`      |
| defaultSelectedKeys | 初始选中的菜单项 key 数组                                    | `string[]`                                  | `-`         |
| defaultOpenKeys     | 初始展开的子菜单 key 数组                                    | `string[]`                                  | `-`         |
| selectedKeys        | 选中的菜单项 key 数组（受控模式）                            | `string[]`                                  | `-`         |
| openKeys            | 展开的子菜单 key 数组（受控模式）                            | `string[]`                                  | `-`         |
| triggerProps        | 弹出模式下可接受所有 Trigger 的 Props                        | `Partial<TriggerProps>`                     | `-`         |

### Menu 事件

| 参数名           | 描述                 | 类型                                                         | 默认值 |
| ---------------- | :------------------- | ------------------------------------------------------------ | ------ |
| onClickMenuItem  | 点击菜单项的回调     | `(key: string, event, keyPath: string[]) => any`             | `-`    |
| onClickSubMenu   | 点击子菜单标题的回调 | `(key: string, openKeys: string[], keyPath: string[]) => void` | `-`    |
| onCollapseChange | 折叠状态改变时的回调 | `(collapse: boolean) => void`                                | `-`    |

### SubMenu 基础属性

| **参数名** | **描述**          | **类型**              | **默认值** |
| ---------- | ----------------- | --------------------- | ---------- |
| title      | 子菜单的标题,外显 | `string \| ReactNode` | `-`        |
| key        | 唯一标志          | `string ``**(必填)**` | `-`        |

### ItemGroup 基础属性

| **参数名** | **描述**     | **类型**              | **默认值** |
| ---------- | ------------ | --------------------- | ---------- |
| title      | 菜单组的标题 | `string \| ReactNode` | `-`        |

### Item 基础属性

| **参数名** | **描述**       | **类型**              | **默认值** |
| ---------- | -------------- | --------------------- | ---------- |
| title      | 菜单的标题     | `string \| ReactNode` | `-`        |
| key        | 唯一标志       | `string ``**(必填)**` | `-`        |
| disabled   | 菜单项禁止选中 | `boolean`             | `-`        |

### 使用方法

### 基础用法

```jsx
<Menu>
  <Item title={"Blog"} key={"1"} disabled />
  <Item title={"Tutorial"} key={"2"} />
  <Item title={"Docs"} key={"3"} />
  <Item title={"Community"} key={"4"} />
  <Item title={"Github"} key={"5"} />
</Menu>
```

### 设置SubMenu

通过SubMenu元素可以设置子菜单,通过hasCollapseButton接口可以设置是否有折叠按钮

```jsx
<Menu
  style={{ width: 200, height: 600 }}
  hasCollapseButton
  defaultOpenKeys={["0"]}
  defaultSelectedKeys={["0_1"]}
>
  <SubMenu
    key="0"
    title={
      <>
      <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 1
      </>
    }
  >
    <Item key="0_0" title={"Menu 1"} />
    <Item key="0_1" title={"Menu 2"} />
    <Item key="0_2" title={"Menu 3"} disabled />
  </SubMenu>
  <SubMenu
    key="1"
    title={
      <>
      <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 2
      </>
    }
  >
    <Item key="1_0" title={"Menu 1"} />
    <Item key="1_1" title={"Menu 2"} />
    <Item key="1_2" title={"Menu 3"} />
    <SubMenu key="0_0_0_0" title={"Second Sub Menu"}>
      <Item key="0_0_1_1" title={"Menu 2"} />
      <Item key="0_0_1_2" title={"Menu 3"} />
    </SubMenu>
  </SubMenu>
  <SubMenu
    key="2"
    title={
      <>
      <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 3
      </>
    }
  >
    <ItemGroup key="2_0" title="Menu Group 1">
      <Item key="2_0_0" title={"Menu 1"} />
      <Item key="2_0_1" title={"Menu 2"} />
    </ItemGroup>
    <ItemGroup key="2_1" title="Menu Group 1">
      <Item key="2_1_0" title={"Menu 3"} />
      <Item key="2_1_1" title={"Menu 4"} />
    </ItemGroup>
    </SubMenu>
      <ItemGroup key="4_0_0" title="Menu Group">
        <Item key="4_0_0" title={"Menu 1"} />
        <Item key="4_0_1" title={"Menu 2"} />
      </ItemGroup>
      <Item key="5_0_0" title={"Menu 1"} />
      <Item key="5_0_1" title={"Menu 2"} />
    <SubMenu
      key="3"
      title={
        <>
        <ImageDefaultIcon style={{ marginRight: 16 }} /> Navigation 4
        </>
      }
    >
      <ItemGroup key="3_0" title="Menu Group 1">
        <Item key="3_0_0" title={"Menu 1"} />
        <Item key="3_0_1" title={"Menu 2"} />
      </ItemGroup>
      <ItemGroup key="3_1" title="Menu Group 1">
        <Item key="3_1_0" title={"Menu 3"} />
        <Item key="3_1_1" title={"Menu 4"} />
      </ItemGroup>
    </SubMenu>
</Menu>
```
