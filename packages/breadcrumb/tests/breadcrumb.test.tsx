import { Breadcrumb, BreadcrumbItem } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { PreIcon } from "@illa-design/icon"

test("Breadcrumb renders correctly.", () => {
  const { asFragment } = render(
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>,
  )
  expect(asFragment()).toBeInTheDocument()
})

test("Breadcrumb renders with custom separator.", () => {
  render(
    <Breadcrumb separator={">"}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
    </Breadcrumb>,
  )
  expect(screen.getByText(">")).toBeInTheDocument()

  render(
    <Breadcrumb separator={<PreIcon />}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
    </Breadcrumb>,
  )
  expect(screen.getByTitle("PreIcon")).toBeInTheDocument()
})

test("Breadcrumb renders with custom routes.", () => {
  const routes = [
    {
      path: "/",
      breadcrumbName: "Home",
    },
    {
      path: "/Channel",
      breadcrumbName: "Channel",
    },
  ]
  render(<Breadcrumb routes={routes} />)
  expect(screen.getByText("Home")).toBeInTheDocument()
  expect(screen.getByText("Channel")).toBeInTheDocument()
})

test("Breadcrumb renders with custom max count.", () => {
  render(
    <Breadcrumb maxCount={3}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Sub Home</BreadcrumbItem>
      <BreadcrumbItem>All Channel</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>,
  )
  expect(screen.queryByText("Sub Home")).not.toBeInTheDocument()
  expect(screen.queryByText("All Channel")).not.toBeInTheDocument()
})
