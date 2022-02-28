import * as React from "react"
import { Select } from "../src"
import { mount } from "@cypress/react"
import "@testing-library/cypress"

it("Select renders correctly", () => {
  mount(<Select placeholder={"test select"} />)
  cy.findByText("test select").click()
  expect(cy.findByText("暂无数据")).exist
})
