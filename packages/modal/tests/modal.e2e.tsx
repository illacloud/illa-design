import * as React from "react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Modal, ModalProps } from "../src"
import { Button } from "@illa-design/button"

const DemoTest = (props: ModalProps) => {
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
      <Button onClick={open}>Open</Button>
      <Modal
        title="Title"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={onOk}
        onCancel={onCancel}
        {...props}
      >
        Content
      </Modal>
    </>
  )
}

const ContextModal = () => {
  const [modal, contextHolder] = Modal.useModal()
  const ConfigContext = React.createContext({})
  return (
    <ConfigContext.Provider value="Jarvey">
      {contextHolder}
      <Button
        onClick={() =>
          modal.info({
            content: (
              <ConfigContext.Consumer>
                {(name) => `Current user: ${name}`}
              </ConfigContext.Consumer>
            ),
            title: "Context",
          })
        }
      >
        Get Context
      </Button>
    </ConfigContext.Provider>
  )
}

it("Modal renders with correctly", () => {
  mount(<DemoTest />)
  cy.findByText("Open").trigger("click")
  expect(cy.findByText("Title")).exist
  cy.findByText("Title").should("have.css", "color", "rgb(31, 31, 31)")
  unmount()
})

it("Modal renders with mask close & open event & close event", () => {
  const afterOpenEvent = cy.stub().as("afterOpenEvent")
  const afterCloseEvent = cy.stub().as("afterCloseEvent")
  mount(<DemoTest afterClose={afterCloseEvent} afterOpen={afterOpenEvent} />)
  cy.findByText("Open").trigger("click")
  cy.get("@afterOpenEvent").should("to.be.called")
  cy.root().click()
  cy.get("@afterCloseEvent").should("to.be.called")
  unmount()
})

it("Modal renders with auto focus", () => {
  mount(
    <Modal visible={true}>
      <input className={"input"} />
    </Modal>,
  )
  cy.get(".input").should("to.be.focused")
  unmount()
})

it("Modal renders with delay ok", () => {
  mount(<DemoTest />)
  cy.findByText("Open").trigger("click")
  cy.findByText("OK").click()
  cy.findByText("OK")
    .parent()
    .should("have.css", "background-color", "rgb(153, 190, 255)")
  unmount()
})

it("Modal renders with useModal", () => {
  mount(<ContextModal />)
  cy.findByText("Get Context").click()
  expect(cy.findByText("Current user: Jarvey")).exist
  unmount()
})
