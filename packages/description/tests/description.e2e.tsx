import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { Description } from "../src"

it("Description renders with xxl window size.", () => {
  cy.viewport(1600, 500)
  mount(
    <Description
      column={{
        xxl: 6,
      }}
      data={[
        {
          label: "Name",
          value: "ILLA",
          span: 6,
        },
        {
          label: "Mobile",
          value: "123-1234-1234",
        },
      ]}
    />,
  )
  cy.findByText("Name").parent().parent().children().should("have.length", 2)
  unmount()
})

it("Description renders with xl window size.", () => {
  cy.viewport(1200, 500)
  mount(
    <Description
      column={{
        xl: 6,
      }}
      data={[
        {
          label: "Name",
          value: "ILLA",
          span: 6,
        },
        {
          label: "Mobile",
          value: "123-1234-1234",
        },
      ]}
    />,
  )
  cy.findByText("Name").parent().parent().children().should("have.length", 2)
  unmount()
})

it("Description renders with lg window size.", () => {
  cy.viewport(992, 500)
  mount(
    <Description
      column={{
        lg: 6,
      }}
      data={[
        {
          label: "Name",
          value: "ILLA",
          span: 6,
        },
        {
          label: "Mobile",
          value: "123-1234-1234",
        },
      ]}
    />,
  )
  cy.findByText("Name").parent().parent().children().should("have.length", 2)
  unmount()
})

it("Description renders with md window size.", () => {
  cy.viewport(768, 500)
  mount(
    <Description
      column={{
        md: 6,
      }}
      data={[
        {
          label: "Name",
          value: "ILLA",
          span: 6,
        },
        {
          label: "Mobile",
          value: "123-1234-1234",
        },
      ]}
    />,
  )
  cy.findByText("Name").parent().parent().children().should("have.length", 2)
  unmount()
})

it("Description renders with sm window size.", () => {
  cy.viewport(576, 500)
  mount(
    <Description
      column={{
        sm: 6,
      }}
      data={[
        {
          label: "Name",
          value: "ILLA",
          span: 6,
        },
        {
          label: "Mobile",
          value: "123-1234-1234",
        },
      ]}
    />,
  )
  cy.findByText("Name").parent().parent().children().should("have.length", 2)
  unmount()
})

it("Description renders with xs window size.", () => {
  cy.viewport(400, 500)
  mount(
    <Description
      column={{
        xs: 6,
      }}
      data={[
        {
          label: "Name",
          value: "ILLA",
          span: 6,
        },
        {
          label: "Mobile",
          value: "123-1234-1234",
        },
      ]}
    />,
  )
  cy.findByText("Name").parent().parent().children().should("have.length", 2)
  unmount()
})
