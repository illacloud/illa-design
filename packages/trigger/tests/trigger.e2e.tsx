import { Trigger } from "../src"
import { Button } from "@illa-design/button"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Space } from "@illa-design/space"

it("Trigger renders correctly", () => {
  mount(
    <Trigger content="Trigger Success Custom">
      <Button>Hello Trigger Custom</Button>
    </Trigger>,
  )
  cy.findByText("Hello Trigger Custom").trigger("mouseover")
  cy.findByText("Trigger Success Custom").should("exist")
  unmount()
})

it("Trigger renders without padding", () => {
  mount(
    <Trigger content="Trigger" withoutPadding>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("mouseover")
  cy.findByText("Trigger")
    .parent()
    .parent()
    .should("not.have.a.property", "padding")
  unmount()
})

it("Trigger renders without shadow", () => {
  mount(
    <Trigger content="Trigger" withoutShadow>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("mouseover")
  cy.findByText("Trigger").parent().should("not.have.a.property", "box-shadow")
  unmount()
})

it("Trigger renders without triangle", () => {
  mount(
    <Trigger content="Trigger" showArrow={false} position="bottom">
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("mouseover")
  cy.findByTitle("TriangleIconBottom").should("not.exist")
  unmount()
})

it("Trigger renders without auto fit position", () => {
  mount(
    <Trigger content="Trigger" autoFitPosition={false}>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("mouseover")
  cy.findByTitle("TriangleIconTop").should("exist")
  unmount()
})

it("Trigger renders with time delay", () => {
  mount(
    <Trigger
      content="Trigger"
      trigger="click"
      closeDelay={1000}
      openDelay={1000}
      position="bottom"
    >
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").trigger("click")
  cy.findByText("Trigger").should("exist")
  cy.findByText("Button").trigger("click")
  cy.findByText("Trigger").should("not.exist")
  unmount()
})

it("Trigger renders without close on click", () => {
  mount(
    <Trigger
      content="Trigger"
      trigger="click"
      closeOnClick={false}
      position="bottom"
    >
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").click()
  cy.findByText("Button").click()
  cy.findByText("Trigger").should("exist")
  unmount()
})

it("Trigger renders with default visible", () => {
  mount(
    <Trigger defaultPopupVisible={true} position="bottom" content="Trigger">
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Trigger").should("exist")
  unmount()
})

it("Trigger renders with equal width", () => {
  mount(
    <Trigger
      autoAlignPopupWidth={true}
      position="bottom"
      content="Trigger"
      popupVisible={true}
    >
      <div>Button</div>
    </Trigger>,
  )
  cy.findByText("Trigger")
    .parent()
    .parent()
    .parent()
    .invoke("width")
    .should("equal", 984)
  unmount()
})

it("Trigger renders with control", () => {
  mount(
    <Space direction="vertical">
      <Trigger content="Visible Success" popupVisible={true}>
        <Button>VisibleButton</Button>
      </Trigger>
      <Trigger content="Invisible Trigger" popupVisible={false} trigger="click">
        <Button>InvisibleButton</Button>
      </Trigger>
    </Space>,
  )
  cy.wait(100)
  cy.findByText("Visible Success").should("exist")
  cy.findByText("InvisibleButton").click()
  cy.wait(100)
  cy.findByText("Invisible Trigger").should("not.exist")
  unmount()
})

it("Trigger renders with disabled", () => {
  mount(
    <Trigger content="Visible" trigger="click" disabled>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").click()
  cy.findByText("Visible").should("not.exist")
  unmount()
})

it("Trigger renders with on visible change event", () => {
  const mock = cy.stub().as("mock")
  mount(
    <Trigger trigger="click" content="Visible" onVisibleChange={mock}>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").click()
  cy.get("@mock").should("to.be.calledWith", true)
  cy.findByText("Button").click()
  cy.get("@mock").should("to.be.calledWith", false)
  unmount()
})

it("Trigger renders with alignPoint", () => {
  mount(
    <Trigger trigger="click" content="Trigger" alignPoint>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.get("button").click(24, 24)
  cy.wait(50)
  cy.findByText("Trigger")
    .parent()
    .parent()
    .parent()
    .parent()
    .should("have.css", "top", "32px")
    .should("have.css", "left", "32px")

  unmount()
})

it("Popup should follow trigger when window resize", () => {
  mount(
    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <Trigger trigger="click" content="Trigger">
        <Button>Button</Button>
      </Trigger>
    </div>,
  )
  cy.findByText("Button").click()
  cy.findByText("Trigger").should("exist")

  cy.viewport(300, 300).then(() => {
    cy.wait(500)
    cy.findByText("Button").then((button) => {
      const { left, width } = button[0].getBoundingClientRect()
      const right = left + width

      cy.findByText("Trigger").then((trigger) => {
        const { left: triggerLeft, width: triggerWidth } =
          trigger[0].getBoundingClientRect()

        const triggerRight = triggerLeft + triggerWidth
        const OFFSET = 20

        expect(triggerLeft).to.be.least(left - OFFSET)
        expect(triggerRight).to.be.most(right + OFFSET)
      })
    })
  })

  unmount()
})

it("Trigger renders with closeOnInnerClick", () => {
  const mock = cy.stub().as("mock")
  mount(
    <Trigger
      popupVisible={true}
      closeOnInnerClick
      position="bl"
      onVisibleChange={mock}
      content={<div>Close Click Me</div>}
    >
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Close Click Me").click()
  cy.wait(100)
  cy.get("@mock").should("to.be.calledWith", false)
  unmount()
})

it("Trigger renders with contextmenu", () => {
  const mock = cy.stub().as("mock")
  mount(
    <Trigger position="bl" onVisibleChange={mock} content={<div>Hello</div>}>
      <Button>Button</Button>
    </Trigger>,
  )
  cy.findByText("Button").rightclick()
  cy.wait(100)
  cy.get("@mock").should("to.be.calledWith", true)
  unmount()
})

it("Popup should follow trigger when upper container scroll", () => {
  mount(
    <div style={{ height: 100, overflow: "auto" }} data-testid="container">
      <Trigger trigger="click" content="TriggerHello" showArrow={false}>
        <Button>Button</Button>
      </Trigger>
      <div style={{ height: 300 }} />
    </div>,
  )
  cy.findByText("Button").click()
  cy.findByText("TriggerHello").should("exist")
  cy.findByTestId("container").scrollTo("bottom")
  cy.wait(100)
  cy.findByTestId("container").scrollTo("top")
  cy.wait(400)

  cy.findByText("Button").then((button) => {
    const { bottom } = button[0].getBoundingClientRect()
    const OFFSET = 10

    cy.findByText("TriggerHello").then((trigger) => {
      const {
        top: triggerTop,
        bottom: triggerBottom,
        height: triggerHeight,
      } = trigger[0].getBoundingClientRect()

      // popup should close to button
      expect(triggerTop).to.be.greaterThan(bottom)
      expect(triggerBottom).to.be.greaterThan(bottom)
      expect(triggerTop).to.be.most(bottom + triggerHeight + OFFSET)
    })
  })

  unmount()
})
