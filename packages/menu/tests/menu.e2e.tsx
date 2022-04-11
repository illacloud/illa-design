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
    <ItemGroup>
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

it("Click Submenu should expand", () => {
  mount(<TestMenu />)

  cy.get(`[data-testid="submenu-item"]`).should("not.be.visible")
  cy.get(`[data-testid="submenu"]`).click()
  cy.get(`[data-testid="submenu-item"]`).should("be.visible")

  unmount()
})

it("Click item should be selected", () => {
  mount(<TestMenu hasCollapseButton />)
})
