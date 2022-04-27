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
        }}
        style={{ width: "100%" }}
        max={10}
      />
    </>
  )
}

function DemoRangeTest(args: SliderProps) {
  const [value, setValue] = React.useState([0, 5])
  return (
    <Slider
      {...args}
      value={value}
      data-testid={"range"}
      onChange={(val: number | number[]) => {
        setValue(val as number[])
      }}
      max={10}
      range={{ draggableBar: true }}
      style={{ width: "100%" }}
    />
  )
}

it("Slider renders with correctly", () => {
  mount(<DemoTest reverse vertical showTicks />)
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

it("Slider renders with marks", () => {
  mount(<DemoMarkTest showTicks onlyMarkValue />)
  cy.findByTestId("mark").should("exist")
  cy.findByText("0km").should("exist")
  cy.findByText("5km").should("exist")
  cy.findByText("10km").should("exist").click()
  cy.findByRole("button")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("10").should("exist").click()
    })
  cy.findByRole("road")
    .children("div:nth-of-type(3)")
    .children("div:nth-of-type(2)")
    .should("exist")
    .click()
  cy.findByRole("road").trigger("mousedown", 50, 0)
  cy.findByText("0").should("exist")
  cy.findByRole("road").trigger("mouseup")
  unmount()
})

it("Slider renders with range drag bar", () => {
  mount(<DemoRangeTest />)
  cy.findByRole("bar")
    .should("exist")
    .trigger("mousedown")
    .trigger("mousemove", { clientX: 400 })
  cy.findByRole("road")
    .children("div:nth-of-type(3)")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("10").should("exist")
    })
    .trigger("mouseleave")
  cy.findByRole("road")
    .children("div:nth-of-type(2)")
    .trigger("mouseover")
    .trigger("mousedown")
    .trigger("mousemove", { clientX: 0 })
  unmount()
})

it("Slider renders with input-number", () => {
  mount(<DemoTest showInput />)
  cy.findByDisplayValue("0").should("exist")
  cy.findByRole("input-number")
    .children()
    .children()
    .children("div:first-of-type")
    .children("span:first-of-type")
    .click()
    .click()
  cy.findByDisplayValue("2").should("exist")
  unmount()
})

it("Slider renders with range input-number", () => {
  mount(<DemoRangeTest vertical showInput />)
  cy.findByDisplayValue("0").should("exist")
  cy.findByRole("input-number")
    .children("div:first-of-type")
    .children()
    .children("div:first-of-type")
    .children("span:first-of-type")
    .click()
    .click()
  cy.findByDisplayValue("2").should("exist")
  cy.findByRole("input-number")
    .children("div:last-of-type")
    .children()
    .children("div:first-of-type")
    .children("span:last-of-type")
    .click()
    .click()
    .click()
    .click()
  cy.findByDisplayValue("1").should("exist")
  unmount()
})

it("Slider renders with vertical move", () => {
  mount(<DemoRangeTest vertical showTicks />)
  cy.findByRole("bar")
    .should("exist")
    .trigger("mousedown")
    .trigger("mousemove", { clientY: 400 })
  cy.findByRole("road")
    .children("div:nth-of-type(3)")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("0").should("exist")
    })
    .trigger("mouseleave")
  unmount()
})
