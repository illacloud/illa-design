import * as React from "react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Modal, ModalProps, ModalReturnProps } from "../src"
import { Button } from "@illa-design/button"
import { AlertType } from "@illa-design/alert"

const confirmTypes = ["info", "success", "warning", "error", "confirm"]

const DemoTest = (props: ModalProps) => {
  const [visible, setVisible] = React.useState(false)

  const [confirmLoading, setConfirmLoading] = React.useState(false)
  function onOk() {
    Promise.resolve().then((res) => {
      setConfirmLoading(true)
      setTimeout(() => {
        setVisible(false)
        setConfirmLoading(false)
      }, 1500)
    })
  }
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        Open
      </Button>
      <Modal
        title="Title"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={onOk}
        onCancel={() => {
          setVisible(false)
        }}
        {...props}
      >
        Content
      </Modal>
    </>
  )
}

const ContextModal = (props: ModalProps & { type?: AlertType }) => {
  const { type = "info" } = props
  const [modal, contextHolder] = Modal.useModal()
  const ConfigContext = React.createContext({})
  return (
    <ConfigContext.Provider value="Jarvey">
      {contextHolder}
      <Button
        onClick={() => {
          modal[type]({
            ...props,
            content: (
              <ConfigContext.Consumer>
                {(name) => `Current user: ${name}`}
              </ConfigContext.Consumer>
            ),
            title: "Context",
          })
        }}
      >
        Get Context
      </Button>
      <Button
        onClick={() => {
          modal[type]({ title: "Type", content: `${type}` })
        }}
      >
        {type + "button"}
      </Button>
      <Button
        onClick={() => {
          let instance: ModalReturnProps
          instance = modal.info({
            closable: true,
            closeElement: <button>close</button>,
            content: (
              <Button
                onClick={() => {
                  instance.close()
                }}
              >
                Off
              </Button>
            ),
          })
        }}
      >
        Open
      </Button>
    </ConfigContext.Provider>
  )
}

const RestTestModal = (props: ModalProps) => {
  const [visible, setVisible] = React.useState(false)
  let instance: ModalReturnProps
  return (
    <>
      <Button onClick={() => setVisible(true)}>Open</Button>
      <Button onClick={() => Modal.confirm({ content: "Hello", ...props })}>
        Confirm
      </Button>
      <Button
        onClick={() => {
          instance = Modal.error({
            content: (
              <Button
                onClick={() => {
                  instance.close()
                }}
              >
                Close
              </Button>
            ),
            ...props,
          })
        }}
      >
        UseApi
      </Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        focusLock={false}
        {...props}
      >
        Content
      </Modal>
    </>
  )
}

const handlers = {
  okResolve: () => Promise.resolve(),
  okReject: () => Promise.reject(),
  okNull: () => {},
}

it("Modal renders with correctly", () => {
  mount(<DemoTest />)
  cy.findByText("Open").trigger("click")
  cy.findByText("Title").should("exist")
  cy.findByText("Title").should("have.css", "color", "rgb(31, 31, 31)")
  unmount()
})

it("Modal renders with mask close and open event and close event", () => {
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

it("Modal api renders with click the OK button", () => {
  const afterCloseEvent = cy.stub().as("afterCloseEvent")
  mount(<RestTestModal title={"Hello"} afterClose={afterCloseEvent} />)
  cy.findByRole("button", { name: "UseApi" }).click()
  cy.findByRole("button", { name: "Close" }).click().should("not.exist")
  cy.get("@afterCloseEvent").should("to.be.called")
  unmount()
})

it("useModal api renders with close method", () => {
  mount(<ContextModal />)
  cy.findByRole("button", { name: "Open" }).click()
  cy.findByRole("button", { name: "close" }).should("exist")
  cy.findByRole("button", { name: "Off" }).trigger("click")
  cy.findByRole("button", { name: "close" }).should("not.exist")
})

it("useModal renders with onOk event", () => {
  mount(<ContextModal onOk={cy.spy(handlers, "okResolve").as("okResolve")} />)
  cy.findByRole("button", { name: "Get Context" }).click()
  cy.findByRole("button", { name: "OK" }).click().should("not.exist")
  cy.get("@okResolve").should("to.be.called")
  unmount()
  mount(<ContextModal onOk={cy.spy(handlers, "okReject").as("okReject")} />)
  cy.findByRole("button", { name: "Get Context" }).click()
  cy.findByRole("button", { name: "OK" }).click()
  cy.get("@okReject").should("to.be.called")
  unmount()
  mount(<ContextModal onOk={cy.spy(handlers, "okNull").as("okNull")} />)
  cy.findByRole("button", { name: "Get Context" }).click()
  cy.findByRole("button", { name: "OK" }).click().should("not.exist")
  cy.get("@okNull").should("to.be.called")
  unmount()
})

it("Modal renders with onOk event", () => {
  mount(<RestTestModal onOk={cy.spy(handlers, "okResolve").as("okResolve")} />)
  cy.findByRole("button", { name: "Open" }).click()
  cy.findByRole("button", { name: "OK" }).click()
  cy.get("@okResolve").should("to.be.called")
  unmount()
  mount(<RestTestModal onOk={cy.spy(handlers, "okReject").as("okReject")} />)
  cy.findByRole("button", { name: "Open" }).click()
  cy.findByRole("button", { name: "OK" }).click()
  cy.get("@okReject").should("to.be.called")
  unmount()
})

it("Modal api renders with onOk event", () => {
  mount(<RestTestModal onOk={cy.spy(handlers, "okResolve").as("okResolve")} />)
  cy.findByRole("button", { name: "Confirm" }).click()
  cy.findByRole("button", { name: "OK" }).click().should("not.exist")
  cy.get("@okResolve").should("to.be.called")
  unmount()
  mount(<RestTestModal onOk={cy.spy(handlers, "okReject").as("okReject")} />)
  cy.findByRole("button", { name: "Confirm" }).click()
  cy.findByRole("button", { name: "OK" }).click()
  cy.get("@okReject").should("to.be.called")
  cy.findByRole("button", { name: "Cancel" }).click()
  unmount()
  mount(<RestTestModal onOk={cy.spy(handlers, "okNull").as("okNull")} />)
  cy.findByRole("button", { name: "Confirm" }).click()
  cy.findByRole("button", { name: "OK" }).click().should("not.exist")
  cy.get("@okNull").should("to.be.called")
  unmount()
})

it("Modal renders with useModal context and afterCloseEvent", () => {
  const afterCloseEvent = cy.spy().as("afterCloseEvent")
  mount(<ContextModal afterClose={afterCloseEvent} />)
  cy.findByRole("button", { name: "Get Context" }).click()
  cy.findByText(`Current user: Jarvey`).should("exist")
  cy.root().click()
  cy.get("@afterCloseEvent").should("to.be.called")
  unmount()
})

it("Modal renders with useModal different types", () => {
  confirmTypes.forEach((type) => {
    mount(<ContextModal type={type as AlertType} />)
    cy.findByRole("button", { name: `${type}button` }).click()
    cy.findByText(`${type}`).should("exist")
    cy.root().click()
    unmount()
  })
})
