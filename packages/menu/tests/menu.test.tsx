import { Menu } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

const { Item, SubMenu, ItemGroup } = Menu

test("Menu renders with item", () => {
  render(
    <Menu>
      <Item title={"Blog"} key={"1"} disabled />
      <Item title={"Tutorial"} key={"2"} />
      <Item title={"Docs"} key={"3"} />
      <Item title={"Community"} key={"4"} />
      <Item title={"Github"} key={"5"} />
    </Menu>,
  )

  expect(screen.getByText("Blog")).toBeInTheDocument()
  expect(screen.getByText("Docs")).toBeInTheDocument()
})

test("Menu renders with horizontal selected", () => {
  render(
    <Menu defaultSelectedKeys={["1"]} data-testid={"menu"}>
      <Item title={"Blog"} key={"1"} disabled />
      <Item title={"Tutorial"} key={"2"} />
      <Item title={"Docs"} key={"3"} />
      <Item title={"Community"} key={"4"} />
      <Item title={"Github"} key={"5"} />
    </Menu>,
  )

  expect(screen.getByTestId("menu")).toMatchSnapshot()
})

test("Menu renders with item group", () => {
  render(
    <Menu>
      <ItemGroup title={"Group"}>
        <Item title={"Tutorial"} key={"2"} />
        <Item title={"Docs"} key={"3"} />
        <Item title={"Community"} key={"4"} />
        <Item title={"Github"} key={"5"} />
      </ItemGroup>
    </Menu>,
  )

  expect(screen.getByText("Group")).toBeInTheDocument()
  expect(screen.getByText("Docs")).toBeInTheDocument()
})

test("Menu renders with submenu", () => {
  render(
    <Menu hasCollapseButton>
      <ItemGroup title={"Group"}>
        <Item title={"Tutorial"} key={"2"} />
        <Item title={"Docs"} key={"3"} />
      </ItemGroup>
      <SubMenu title={"SubMenu"} key={"0"}>
        <Item title={"Community"} key={"4"} />
        <Item title={"Github"} key={"5"} />
      </SubMenu>
    </Menu>,
  )

  expect(screen.getByText("SubMenu")).toBeInTheDocument()
})

test("Menu renders with overflow wrap", () => {
  const { container } = render(
    <Menu hasCollapseButton mode={"horizontal"}>
      <Item title={"Tutorial"} key={"2"} />
      <Item title={"Docs"} key={"3"} />
      <Item title={"Community"} key={"4"} />
      <Item title={"GitHub"} key={"5"} />
      <Item title={"GitLab"} key={"6"} />
    </Menu>,
  )

  expect(screen.getByText("...")).toBeInTheDocument()
})

test("onClickMenuItem should be trigger", () => {
  const clickEvent = jest.fn()

  render(
    <Menu hasCollapseButton onClickMenuItem={clickEvent}>
      <ItemGroup title={"Group"}>
        <Item title={"Tutorial"} key={"2"} />
        <Item title={"Docs"} key={"3"} />
      </ItemGroup>
      <SubMenu title={"SubMenu"} key={"0"}>
        <Item title={"Community"} key={"4"} />
        <Item title={"Github"} key={"5"} />
      </SubMenu>
    </Menu>,
  )

  screen.getByText("Docs").click()
  expect(clickEvent).toBeCalled()
})

test("onClickMenuItem should NOT be trigger when item is disabled", () => {
  const clickEvent = jest.fn()

  render(
    <Menu hasCollapseButton onClickMenuItem={clickEvent}>
      <ItemGroup title={"Group"}>
        <Item title={"Tutorial"} key={"2"} />
        <Item title={"Docs"} key={"3"} disabled />
      </ItemGroup>
      <SubMenu title={"SubMenu"} key={"0"}>
        <Item title={"Community"} key={"4"} />
        <Item title={"Github"} key={"5"} />
      </SubMenu>
    </Menu>,
  )

  screen.getByText("Docs").click()
  expect(clickEvent).not.toBeCalled()
})

test("onClickSubMenu should be trigger", () => {
  const clickEvent = jest.fn()

  render(
    <Menu hasCollapseButton onClickSubMenu={clickEvent}>
      <ItemGroup title={"Group"}>
        <Item title={"Tutorial"} key={"2"} />
        <Item title={"Docs"} key={"3"} />
      </ItemGroup>
      <SubMenu title={"SubMenu"} key={"0"}>
        <Item title={"Community"} key={"4"} />
        <Item title={"Github"} key={"5"} />
      </SubMenu>
    </Menu>,
  )

  screen.getByText("SubMenu").click()
  expect(clickEvent).toBeCalled()
})

test("onCollapse should be trigger", () => {
  const event = jest.fn()

  const { container } = render(
    <Menu hasCollapseButton onCollapseChange={event}>
      <ItemGroup title={"Group"}>
        <Item title={"Tutorial"} key={"2"} />
        <Item title={"Docs"} key={"3"} />
      </ItemGroup>
      <SubMenu title={"SubMenu"} key={"0"}>
        <Item title={"Community"} key={"4"} />
        <Item title={"Github"} key={"5"} />
      </SubMenu>
    </Menu>,
  )

  ;(container.querySelector(`[data-menu-collapse-icon]`) as HTMLElement).click()

  expect(event).toBeCalled()
})
