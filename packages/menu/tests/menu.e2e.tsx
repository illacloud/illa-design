import * as React from "react"
import { Menu, MenuProps } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

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
    <SubMenu title={"SubMenu-1"} key={"0_0"} data-testid={"submenu-1"}>
      <Item
        title={"sub-menu-item-1"}
        key={"0_1"}
        data-testid={"submenu-item-1"}
      />
      <Item title={"sub-menu-item-2"} key={"0_2"} />
      <Item title={"sub-menu-item-3"} key={"0_3"} />
    </SubMenu>
    <SubMenu title={"SubMenu-2"} key={"0_1"} data-testid={"submenu-2"}>
      <Item
        title={"sub-menu-item-1"}
        key={"1_1"}
        data-testid={"submenu-item-2"}
      />
      <Item title={"sub-menu-item-2"} key={"1_2"} />
      <Item title={"sub-menu-item-3"} key={"1_3"} />
    </SubMenu>
  </Menu>
)

it("Click Submenu should expand", () => {
  mount(<TestMenuInline />)

  cy.findByTestId("submenu-item-1").should("not.be.visible")
  cy.findByTestId("submenu-1").click()
  cy.findByTestId("submenu-item-1").should("be.visible")
  cy.findByTestId("submenu-1").click("top")
  cy.findByTestId("submenu-item-1").should("not.be.visible")

  unmount()
})

it("Should overflow in horizontal mode when exceed width", () => {
  mount(<TestMenu style={{ width: 100 }} mode={"horizontal"} />)

  cy.get(`[data-testid="item"]`).should("not.be.visible")
  cy.get(`[data-sub-menu-marker]:last-child`).should("be.visible")
  cy.get(`[data-sub-menu-marker]:last-child`).trigger("mouseover")
  cy.get(`[data-testid="item"]`).should("be.visible")

  unmount()
})

it("Menu render with auto open", () => {
  mount(<TestMenuInline autoOpen={true} />)

  cy.findByTestId("submenu-item-1").should("be.visible")
  cy.findByTestId("submenu-item-2").should("be.visible")

  unmount()
})

it("Only one submenu will be opened if is accordion", () => {
  mount(<TestMenuInline defaultOpenKeys={["0_0", "0_1"]} accordion />)

  cy.findByTestId("submenu-item-1").should("be.visible")
  cy.findByTestId("submenu-item-2").should("not.be.visible")

  cy.get(`[data-testid='submenu-2']`).click()
  cy.findByTestId("submenu-item-1").should("not.be.visible")
  cy.findByTestId("submenu-item-2").should("be.visible")

  cy.get(`[data-testid='submenu-2']`).click("top")
  cy.findByTestId("submenu-item-2").should("not.be.visible")

  cy.get(`[data-testid='submenu-1']`).click("top")
  cy.findByTestId("submenu-item-1").should("be.visible")

  unmount()
})

it("Menu render with variant inline", () => {
  mount(<TestMenuInline />)

  cy.findByTestId("submenu-item-1").should("not.be.visible")
  cy.get(`[data-testid='submenu-1']`).click()
  cy.findByTestId("submenu-item-1").should("be.visible")

  unmount()
})

it("Menu render with variant pop", () => {
  mount(<TestMenuInline variant={"pop"} style={{ width: 150 }} />)

  cy.get(`[data-testid='submenu-item-1']`).should("not.exist")
  cy.get(`[data-testid='submenu-1']`).trigger("mouseover")
  cy.wait(200)
  cy.get(`[data-testid='submenu-item-1']`).should("be.visible")

  unmount()
})

it("Click on pop menu item, onClickMenuItem should be called", () => {
  const onClickMenuItem = cy.spy().as("onClickMenuItem")
  mount(
    <TestMenuInline
      variant={"pop"}
      onClickMenuItem={onClickMenuItem}
      style={{ width: 150 }}
      triggerProps={{ trigger: "click" }}
    />,
  )

  cy.get(`[data-testid='submenu-item-1']`).should("not.exist")
  cy.get(`[data-testid='submenu-1']`).click()
  cy.get(`[data-testid='submenu-item-1']`).should("be.visible")
  cy.get(`[data-testid='submenu-item-1']`)
    .click("center")
    .then(() => {
      cy.get("@onClickMenuItem").should("be.called")
      cy.get(`[data-testid='submenu-1']`).click("center")
      cy.get(`[data-testid='submenu-item-1']`).should("not.exist")
    })

  unmount()
})
