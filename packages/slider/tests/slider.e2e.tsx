import { Slider, SliderProps } from "../src"
import React from "react"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

function NormalSlider(args: SliderProps) {
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

function MarkSlider(args: SliderProps) {
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

function RangeSlider(args: SliderProps) {
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
  mount(<NormalSlider reverse vertical showTicks />)
  cy.findByTestId("normal").should("exist")
  unmount()
})

it("Slider renders with afterChangeEvent", () => {
  const afterChangeEvent = cy.stub().as("afterChangeEvent")
  mount(<NormalSlider onAfterChange={afterChangeEvent} />)
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
  mount(<NormalSlider />)
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
  unmount()
})

it("Slider renders with marks", () => {
  mount(<MarkSlider showTicks onlyMarkValue />)
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
  unmount()
})

it("Slider renders with range and drag bar", () => {
  mount(<RangeSlider />)
  cy.findByRole("bar")
    .should("exist")
    .trigger("mousedown")
    .trigger("mousemove", { clientX: 400 })
    .trigger("mouseup")

  cy.findByRole("road")
    .children("div:nth-of-type(3)")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("10").should("exist")
    })

  unmount()
})

it("Slider renders with range and drag left button", () => {
  mount(<RangeSlider />)
  cy.findByRole("road")
    .children("div:nth-of-type(2)")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("0").should("exist")
    })
  cy.findByRole("road")
    .children("div:nth-of-type(2)")
    .trigger("mousedown")
    .then(() => {
      cy.findByTestId("range").trigger("mousemove", "right")
      cy.findByText("5").should("exist")
    })
  unmount()
})

it("Slider renders with input-number", () => {
  mount(<NormalSlider showInput />)
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
  mount(<RangeSlider vertical showInput />)
  cy.findByDisplayValue("0").should("exist")
  // Find the left input-number and increase the number from 0 to 2.
  cy.findByRole("input-number")
    .children("div:first-of-type")
    .children()
    .children("div:first-of-type")
    .children("span:first-of-type")
    .click()
    .click()
  cy.findByDisplayValue("2").should("exist")
  // Find the right input-number and decrease the number from 5 to 1.
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
  mount(<RangeSlider vertical showTicks />)
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
  unmount()
})
