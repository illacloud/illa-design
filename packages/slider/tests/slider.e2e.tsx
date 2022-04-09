import { Slider, SliderProps } from "../src"
import React from "react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

function DemoTest(args: SliderProps) {
  const [value, setValue] = React.useState(0)
  return (
    <>
      <Slider
        {...args}
        data-testid={"normal"}
        value={value}
        onChange={(val: number | number[]) => {
          setValue(val as number)
        }}
        style={{ width: "100%" }}
      />
    </>
  )
}

function DemoMarkTest(args: SliderProps) {
  const [value, setValue] = React.useState(0)
  return (
    <>
      <Slider
        {...args}
        value={value}
        data-testid={"mark"}
        onChange={(val: number | number[]) => {
          setValue(val as number)
        }}
        marks={{
          0: "0km",
          5: "5km",
          10: "10km",
          15: "15km",
        }}
        max={15}
      />
    </>
  )
}

it("Slider renders with correctly", () => {
  mount(<DemoTest />)
  cy.findByTestId("normal").should("exist")
  unmount()
})

it("Slider renders with afterChangeEvent", () => {
  const afterChangeEvent = cy.stub().as("afterChangeEvent")
  mount(<DemoTest onAfterChange={afterChangeEvent} />)
  cy.findByRole("button")
    .trigger("mousedown")
    .then(() => {
      cy.findByTestId("normal").trigger("mousemove", { x: 20 })
    })
    .trigger("mouseup")
  cy.get("@afterChangeEvent").should("to.be.called")
  unmount()
})

it("Slider renders with slides exactly", () => {
  mount(<DemoTest />)
  cy.findByRole("button")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("0").should("exist")
    })
  cy.findByRole("button")
    .trigger("mousedown")
    .then(() => {
      cy.findByTestId("normal").trigger("mousemove", "right")
      cy.findByText("100").should("exist")
    })
    .trigger("mouseup")
  unmount()
})
