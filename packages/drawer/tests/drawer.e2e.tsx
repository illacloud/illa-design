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
  const [visibleInner, setVisibleInner] = React.useState(false)
  const refWrapper = React.useRef(null)
  return (
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
    >
      <Button onClick={() => setVisibleInner(true)}>Open</Button>
      <Drawer
        data-testid={"DrawerContainer"}
        title="Basic"
        visible={visibleInner}
        placement={"left"}
        getPopupContainer={() => refWrapper && refWrapper.current!}
        onOk={() => {
          setVisibleInner(false)
        }}
        onCancel={() => {
          setVisibleInner(false)
        }}
      >
        <div style={{ textAlign: "left" }}>Here is an example text.</div>
      </Drawer>
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
  expect(cy.findByText("Hello")).exist
  unmount()
})

it("Drawer renders with mask close & open event & close event", () => {
  const afterOpenEvent = cy.stub().as("afterOpenEvent")
  const afterCloseEvent = cy.stub().as("afterCloseEvent")
  mount(
    <DemoDrawer
      data-testid={"Drawer"}
      afterClose={afterCloseEvent}
      afterOpen={afterOpenEvent}
    />,
  )
  cy.findByText("Open Drawer").trigger("click")
  cy.get("@afterOpenEvent").should("to.be.called")
  cy.findByTestId("Drawer").parent().prev().click({ force: true })
  cy.get("@afterCloseEvent").should("to.be.called")
  unmount()
})

it("Drawer renders with container", () => {
  mount(<TemplateWithContainer />)
  cy.findByText("Open").click()
  cy.findByTestId("DrawerContainer")
    .parent()
    .parent()
    .should("have.css", "position", "absolute")
  unmount()
})
