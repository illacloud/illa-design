import * as React from "react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Drawer, DrawerProps } from "../src"
import { Button } from "@illa-design/button"

const DemoDrawer = (props: DrawerProps) => {
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)

  function open() {
    setVisible(true)
  }

  function onOk() {
    Promise.resolve().then((res) => {
      setConfirmLoading(true)
      setTimeout(() => {
        setVisible(false)
        setConfirmLoading(false)
      }, 1500)
    })
  }

  function onCancel() {
    setVisible(false)
  }
  return (
    <>
      <Button onClick={open}>Open Drawer</Button>
      <Drawer
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={onOk}
        onCancel={onCancel}
        {...props}
      />
    </>
  )
}

const TemplateWithContainer = () => {
  const [visibleInner, setVisibleInner] = React.useState(true)
  const refWrapper = React.useRef(null)
  return (
    <div>
      <Drawer
        data-testid="DrawerContainer"
        title="Basic"
        visible={visibleInner}
        placement="left"
        getPopupContainer={() => refWrapper?.current!}
        onOk={() => {
          setVisibleInner(false)
        }}
        onCancel={() => {
          setVisibleInner(false)
        }}
      >
        <div style={{ textAlign: "left" }}>Here is an example text.</div>
      </Drawer>
      <div
        ref={refWrapper}
        style={{
          width: 1200,
          height: 300,
          backgroundColor: "gray",
          position: "relative",
          overflow: "hidden",
          lineHeight: "300px",
          textAlign: "center",
        }}
      />
    </div>
  )
}

it("Drawer renders with correctly", () => {
  mount(
    <DemoDrawer>
      <span>Hello</span>
    </DemoDrawer>,
  )
  cy.findByText("Open Drawer").click()
  cy.findByText("Hello").should("exist")
  unmount()
})

it("Drawer renders with close mask, open event, close event", () => {
  const afterOpenEvent = cy.stub().as("afterOpenEvent")
  const afterCloseEvent = cy.stub().as("afterCloseEvent")
  mount(
    <DemoDrawer
      data-testid="Drawer"
      afterClose={afterCloseEvent}
      afterOpen={afterOpenEvent}
    />,
  )
  cy.findByText("Open Drawer").trigger("click")
  cy.get("@afterOpenEvent").should("to.be.called")
  cy.findByTestId("Drawer")
    .parent()
    .parent()
    .parent()
    .prev()
    .click({ force: true })
  cy.get("@afterCloseEvent").should("to.be.called")
  unmount()
})

it("Drawer renders with container", () => {
  mount(<TemplateWithContainer />)
  cy.findByTestId("DrawerContainer")
    .parent()
    .parent()
    .parent()
    .parent()
    .should("have.css", "position", "absolute")
  unmount()
})

it("Drawer renders with removing document scroll", () => {
  const loremIpsum = Array(100)
    .fill(0)
    .map(
      () =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    )
    .join("\n\n")
  const Component = () => {
    return (
      <div data-cy="container">
        <Drawer visible={true}>
          <input />
        </Drawer>
        <div>{loremIpsum}</div>
      </div>
    )
  }
  mount(<Component />)
  cy.get("body").then((container) => {
    const { y: beforeScroll } = container[0].getBoundingClientRect()
    cy.get("body")
      .scrollTo("bottom", { ensureScrollable: false })
      .then((container) => {
        const { y: afterScroll } = container[0].getBoundingClientRect()
        expect(afterScroll).to.be.eql(beforeScroll)
      })
  })
  unmount()
})
