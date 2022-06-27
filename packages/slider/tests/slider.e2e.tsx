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
  mount(
    <div style={{ padding: "40px" }}>
      <NormalSlider reverse vertical showTicks />
    </div>,
  )
  cy.findByTestId("normal").should("exist")
  unmount()
})

it("Slider renders with afterChangeEvent", () => {
  const afterChangeEvent = cy.stub().as("afterChangeEvent")
  mount(
    <div style={{ padding: "40px" }}>
      <NormalSlider onAfterChange={afterChangeEvent} />
    </div>,
  )
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
  cy.wait(100)
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
  cy.wait(100)
  cy.findByTestId("mark").should("exist")
  cy.findByText("0km").should("exist")
  cy.findByText("5km").should("exist")
  cy.findByText("10km").should("exist").click()
  cy.findByRole("button").trigger("mouseover")
  cy.wait(100)
  cy.findByText("10").should("exist").click()
  cy.findByRole("road")
    .children("div:nth-of-type(3)")
    .children("div:nth-of-type(2)")
    .should("exist")
    .click()
  cy.findByRole("road").trigger("mousedown", 50, 0)
  cy.wait(100)
  cy.findByText("0").should("exist")
  unmount()
})

it("Slider renders with range and drag bar", () => {
  mount(
    <div style={{ padding: "40px" }}>
      <RangeSlider />
    </div>,
  )
  cy.findByRole("bar")
    .should("exist")
    .trigger("mousedown")
    .trigger("mousemove", { clientX: 400 })
    .trigger("mouseup")

  cy.findByRole("road")
    .children("div:nth-of-type(3)")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("6").should("exist")
    })

  unmount()
})

it("Slider renders with range and drag left button", () => {
  mount(<RangeSlider />)
  cy.wait(100)
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
  mount(
    <div style={{ padding: "40px" }}>
      <NormalSlider showInput />
    </div>,
  )
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
  mount(
    <div style={{ padding: "40px" }}>
      <RangeSlider vertical showInput />
    </div>,
  )
  cy.findByDisplayValue("0").should("exist")
  const leftInput = cy
    .findByRole("input-number")
    .children("div:first-of-type")
    .children()
    .children("div:first-of-type")
    .children("span:first-of-type")
  leftInput.click().click()
  cy.findByDisplayValue("2").should("exist")
  const rightInput = cy
    .findByRole("input-number")
    .children("div:last-of-type")
    .children()
    .children("div:first-of-type")
    .children("span:last-of-type")
  rightInput.click().click().click().click()
  cy.findByDisplayValue("1").should("exist")
  unmount()
})

it("Slider renders with vertical move", () => {
  mount(
    <div style={{ padding: "40px" }}>
      <RangeSlider vertical showTicks />
    </div>,
  )
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
