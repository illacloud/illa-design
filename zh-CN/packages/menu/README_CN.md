# Menu

A list for organizing multiple options.

## Installation

```bash
yarn add @illa-design/menu
```

## Import component

```jsx
import { Menu } from "@illa-dedign/menu"
```

## API

### Menu Basic Properties

| Props               | Desc                                         | Type                          | Default                                   |
| ------------------- | -------------------------------------------- | ----------------------------- | ----------------------------------------- |
| theme               | Theme of menu                                | "light" \                    | "dark"                         | "light"  |
| mode                | Set mode of menu                             | "vertical" \                 | "horizontal" \| "popButton" | "vertical" |
| variant             | Set collapse variant of submenu              | "inline" \                   | "pop"                         | "inline"  |
| accordion           | Whether open accordion effect                | boolean                       | -                                         |
| levelIndent         | Set the indent between levels                | number                        | 28                                        |
| collapseDefaultIcon | Set the collapse icon when menu is opened    | ReacNode                      | -                                         |
| collapseActiveIcon  | Set the collapse icon when menu is collapsed | ReacNode                      | -                                         |
| autoOpen            | Whether open all of submenu                  | boolean                       | -                                         |
| hasCollapseButton   | whether show collapse button                 | boolean                       | -                                         |
| collapse            | whether collapse menu                        | boolean                       | -                                         |
| selectable          | whether menu's item can be select            | boolean                       | true                                      |
| ellipsis            | whether menu item can ellipsis               | boolean                       | true                                      |
| defaultSelectedKeys | Set default selected menu items by keys      | string[]                      | -                                         |
| defaultOpenKeys     | Set opened submenu by keys                   | string[]                      | -                                         |
| selectedKeys        | Set selected menu items by keys              | string[]                      | -                                         |
| openKeys            | Set opened submenu by keys                   | string[]                      | -                                         |
| triggerProps        | Set triggrt properties                       | `Partial<TriggerProps>` | -                                         |

### Menu Events

| Props            | Desc                                 | Type                                                         | Default |
| ---------------- |:------------------------------------ | ------------------------------------------------------------ | ------- |
| onClickMenuItem  | Callback when click menu item        | (key: string, event, keyPath: string[]) => any               | -       |
| onClickSubMenu   | Callback when click submenu          | (key: string, openKeys: string[], keyPath: string[]) => void | --      |
| onCollapseChange | Callback when collapse status change | (collapse: boolean) => void                                  | -       |

### SubMenu Basic Properties

| Props | Desc                  | Type      | Default       |
| ----- | --------------------- | --------- | ------------- |
| title | Title of submenu      | string \ | ReactNode | - |
| key   | unique key of submenu | string    | -             |

### ItemGroup Basic Properties

| Props | Desc               | Type      | Default       |
| ----- | ------------------ | --------- | ------------- |
| title | Title of itemgroup | string \ | ReactNode | - |

### Item Basic Properties

| Props    | Desc                     | Type      | Default       |
| -------- | ------------------------ | --------- | ------------- |
| title    | Title of item            | string \ | ReactNode | - |
| key      | unique key of item       | string    | -             |
| disabled | whether disable the item | boolean   | -             |

###

## Example

### Basic usage

```jsx
<Menu>
  <Item title={"Blog"} key={"1"} disabled />
  <Item title={"Tutorial"} key={"2"} />
  <Item title={"Docs"} key={"3"} />
  <Item title={"Community"} key={"4"} />
  <Item title={"Github"} key={"5"} />
</Menu>
```

### Set SubMenu

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
