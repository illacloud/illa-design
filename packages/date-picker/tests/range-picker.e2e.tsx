import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { DateRangePicker } from "../src"
import dayjs from "dayjs"
import { within } from "@testing-library/react"

it("change header month & year", () => {
  mount(
    <DateRangePicker
      placeholder={["test change header"]}
      defaultPickerValue={["2022-04-01"]}
    />,
  )
  cy.findByPlaceholderText("test change header").click()
  // cy.findByTitle("PreIcon").parent().should("exist")
  cy.findByText("2022 April").should("exist")
})
