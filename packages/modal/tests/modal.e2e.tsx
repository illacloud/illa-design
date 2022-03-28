import * as React from "react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Modal } from "../src"
import { Button } from "@illa-design/button"
import { globalColor, illaPrefix } from "@illa-design/theme"

function DemoTest() {
  const [visible, setVisible] = React.useState(false)

  function open() {
    setVisible(true)
  }

  function onOk() {
    setVisible(false)
  }

  function onCancel() {
    setVisible(false)
  }

  return (
    <>
      <Button onClick={open}>Open</Button>
      <Modal title="Title" visible={visible} onOk={onOk} onCancel={onCancel}>
        Content
      </Modal>
    </>
  )
}

it("Modal renders with correctly", () => {
  mount(DemoTest)
  cy.findByText("Title").should(
    "have.css",
    "color",
    `${globalColor(`--${illaPrefix}-gray-02`)}`,
  )
  unmount()
})
