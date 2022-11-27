import { createContext, useState } from "react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Modal, ModalGroup, ModalProps, useModal } from "../src"
import { Button } from "@illa-design/button"
import { AlertType } from "@illa-design/alert"

const confirmTypes = ["info", "success", "warning", "error", "confirm"]

const NormalModal = (props: ModalProps) => {
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  function onOk() {
    Promise.resolve().then(() => {
      setConfirmLoading(true)
      setTimeout(() => {
        setVisible(false)
        setConfirmLoading(false)
      }, 1500)
    })
  }

  return (
    <>
      <ModalGroup />
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        Open
      </Button>
      <Button
        onClick={() => {
          setShow(true)
        }}
      >
        Show
      </Button>
      <Modal
        title="Title"
        visible={visible}
        okLoading={confirmLoading}
        onOk={onOk}
        onCancel={() => {
          setVisible(false)
        }}
        {...props}
      >
        Content
      </Modal>
      <Modal
        visible={show}
        onCancel={() => setShow(false)}
        focusLock={false}
        {...props}
      >
        Hello World!
      </Modal>
    </>
  )
}

const ContextModal = (props: ModalProps & { type?: AlertType }) => {
  const { type = "info" } = props
  const modal = useModal()
  const ConfigContext = createContext({})
  return (
    <ConfigContext.Provider value="Jarvey">
      <Button
        onClick={() => {
          modal.show({
            ...props,
            type: type,
            children: (
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
          modal.show({ type: type, title: "Type", children: `${type}` })
        }}
      >
        {type + "button"}
      </Button>
      <Button
        onClick={() => {
          modal.info({
            closable: true,
            closeElement: <button>Close</button>,
            children: (
              <Button
                onClick={() => {
                  modal.warning
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

const handlers = {
  okResolve: () => Promise.resolve(),
  okReject: () => Promise.reject(),
  okNull: () => {},
}

it("Modal renders with correctly", () => {
  mount(<NormalModal />)
  cy.findByText("Open").trigger("click")
  cy.findByText("Title").should("exist")
  cy.findByText("Title").should("have.css", "color", "rgb(29, 33, 41)")
  unmount()
})

it("Modal renders with mask close and open event and close event", () => {
  const afterOpenEvent = cy.stub().as("afterOpenEvent")
  const afterCloseEvent = cy.stub().as("afterCloseEvent")
  mount(<NormalModal afterClose={afterCloseEvent} afterOpen={afterOpenEvent} />)
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
  mount(<NormalModal />)
  cy.findByText("Open").trigger("click")
  cy.findByText("OK").click()
  cy.findByText("OK")
    .parent()
    .should("have.css", "background-color", "rgb(153, 190, 255)")
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

it("Modal renders with removing document scroll", () => {
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
        <Modal visible={true}>
          <input />
        </Modal>
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

it("useModal api renders with close method", () => {
  mount(<ContextModal />)
  cy.findByRole("button", { name: "Open" }).click()
  cy.findByRole("button", { name: "Close" }).should("exist")
  cy.findByRole("button", { name: "Off" }).trigger("click")
  cy.findByRole("button", { name: "Close" }).should("not.exist")
  unmount()
})

describe("Test the onOK event", () => {
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
    mount(<NormalModal onOk={cy.spy(handlers, "okResolve").as("okResolve")} />)
    cy.findByRole("button", { name: "Show" }).click()
    cy.findByRole("button", { name: "OK" }).click()
    cy.get("@okResolve").should("to.be.called")
    unmount()

    mount(<NormalModal onOk={cy.spy(handlers, "okReject").as("okReject")} />)
    cy.findByRole("button", { name: "Show" }).click()
    cy.findByRole("button", { name: "OK" }).click()
    cy.get("@okReject").should("to.be.called")
    unmount()
  })
})
