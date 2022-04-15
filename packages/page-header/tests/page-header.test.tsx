import { PageHeader } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("PageHeader renders with ", () => {
  render(
    <PageHeader
      title="IllaDesign"
      subTitle="This is a description"
      backIcon
      onBack={() => {}}
      breadcrumb={{
        routes: [
          {
            path: "/",
            breadcrumbName: "Home",
          },
          {
            path: "/channel",
            breadcrumbName: "Channel",
          },
        ],
      }}
      extra={<div>Cancel</div>}
    ></PageHeader>,
  )
  expect(screen.getByText("IllaDesign")).toBeInTheDocument()
  expect(screen.getByText("This is a description")).toBeInTheDocument()
  expect(screen.getByTitle("PreIcon")).toBeInTheDocument()
  expect(screen.getByText("Cancel")).toBeInTheDocument()
  expect(screen.getByText("Home")).toBeInTheDocument()
  expect(screen.getByText("Channel")).toBeInTheDocument()
})
