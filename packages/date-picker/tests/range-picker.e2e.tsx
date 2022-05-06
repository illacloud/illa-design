import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { DateRangePicker } from "../src"
import dayjs from "dayjs"

it("change header month & year", () => {
  mount(
    <DateRangePicker
      placeholder={["test change header"]}
      defaultPickerValue={["2022-04-01"]}
    />,
  )
  cy.findByPlaceholderText("test change header").click()
  cy.findByText("2022 April").should("exist")
  unmount()
})
