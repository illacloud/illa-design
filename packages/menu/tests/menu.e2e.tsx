import * as React from "react"
import { Menu, MenuProps } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { globalColor, illaPrefix } from "@illa-design/theme"

const { Item, ItemGroup, SubMenu } = Menu

const TestMenu = (props: MenuProps = {}) => (
  <Menu {...props} data-testid={"menu"}>
    <Item title={"Blog"} key={"1"} disabled data-testid={"disabled-item"} />
    <Item title={"Tutorial"} key={"2"} data-testid={"item"} />
    <ItemGroup title={"Group"}>
      <Item title={"Docs"} key={"3"} />
      <Item title={"Community"} key={"4"} />
      <Item title={"Github"} key={"5"} />
    </ItemGroup>
    <SubMenu title={"SubMenu"} key={"0_0"} data-testid={"submenu"}>
      <Item
        title={"sub-menu-item-1"}
        key={"0_1"}
        data-testid={"submenu-item"}
      />
      <Item title={"sub-menu-item-2"} key={"0_2"} />
      <Item title={"sub-menu-item-3"} key={"0_3"} />
    </SubMenu>
  </Menu>
)

const TestMenuInline = (props: MenuProps = {}) => (
  <Menu {...props} data-testid={"menu"}>
    <SubMenu title={"SubMenu"} key={"0_0"} data-testid={"submenu-0"}>
      <Item title={"Blog"} key={"1"} disabled data-testid={"disabled-item"} />
      <Item title={"Tutorial"} key={"2"} data-testid={"item"} />
      <Item title={"Docs"} key={"3"} />
      <Item title={"Community"} key={"4"} />
      <Item title={"Github"} key={"5"} />
    </SubMenu>
    <SubMenu title={"SubMenu-1"} key={"0_1"} data-testid={"submenu-1"}>
      <Item
        title={"sub-menu-item-1"}
        key={"1_1"}
        data-testid={"submenu-item"}
      />
      <Item title={"sub-menu-item-2"} key={"1_2"} />
      <Item title={"sub-menu-item-3"} key={"1_3"} />
    </SubMenu>
  </Menu>
)

it("Click Submenu should expand", () => {
  mount(<TestMenu />)

  cy.get(`[data-testid="submenu-item"]`).should("not.be.visible")
  cy.get(`[data-testid="submenu"]`).click()
  cy.get(`[data-testid="submenu-item"]`).should("be.visible")

  unmount()
})

it("Should overflow in horizontal mode when exceed width", () => {
  mount(<TestMenu style={{ width: 100 }} mode={"horizontal"} />)

  cy.get(`[data-testid='item']`).should("not.be.visible")
  cy.get(`[data-sub-menu-marker]:last-child`).should("be.visible")
  cy.get(`[data-sub-menu-marker]:last-child`).trigger("mouseover")
  cy.get(`[data-testid='item']`).should("be.visible")

  unmount()
})

it("Only one submenu will be opened if is accordion", () => {
  mount(<TestMenuInline defaultOpenKeys={["0_0", "0_1"]} accordion />)

  cy.get(`[data-testid='item']`).should("be.visible");
  cy.get(`[data-testid='submenu-item']`).should("not.be.visible");

  cy.get(`[data-testid='submenu-1']`).click()
  cy.get(`[data-testid='item']`).should("not.be.visible");
  cy.get(`[data-testid='submenu-item']`).should("be.visible");

  unmount();
});
