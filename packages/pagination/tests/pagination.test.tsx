import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Pagination } from "../src"
import { globalColor, illaPrefix } from "@illa-design/theme"
import userEvent from "@testing-library/user-event"

test("Pagination render correctly", () => {
  render(<Pagination showTotal={true} placeholder={"pagination"} total={40} />)
  expect(screen.getByPlaceholderText("pagination")).toBeInTheDocument()
  expect(screen.getByText("Total 40")).toBeInTheDocument()
  expect(screen.getByText("1")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
})

test("Pagination render with defaultCurrent", () => {
  render(<Pagination defaultCurrent={6} total={100} />)
  expect(screen.getByText("6")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
})

test("Pagination render with small size", () => {
  render(<Pagination size={"small"} total={100} />)
  expect(screen.getByText("2")).toHaveStyle({
    width: `22px`,
    height: `22px`,
  })
})

test("Pagination render with  large size", () => {
  render(<Pagination size={"large"} total={100} />)
  expect(screen.getByText("2")).toHaveStyle({
    width: `40px`,
    height: `40px`,
  })
})

test("Pagination render with total is 0", () => {
  render(
    <Pagination
      placeholder={"pagination"}
      hideOnSinglePage={false}
      total={0}
      showTotal={true}
    />,
  )
  expect(screen.getByPlaceholderText("pagination")).toBeInTheDocument()
  expect(screen.getByText("Total 0")).toBeInTheDocument()
})

test("Pagination render with jumper", () => {
  const changeEvent = jest.fn()
  render(
    <Pagination
      placeholder={"pagination"}
      showJumper={true}
      onChange={changeEvent}
      total={99}
    />,
  )
  expect(screen.getByText("GO")).toBeInTheDocument()
  const input = screen.getByRole(`textbox`)
  expect(screen.getByText("1")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
  fireEvent.change(input, { target: { value: "6" } })
  fireEvent.keyDown(input, { keyCode: 13 })
  expect(input).toHaveDisplayValue("6")
  expect(screen.getByText("6")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
  fireEvent.change(input, { target: { value: "-1" } })
  fireEvent.keyDown(input, { keyCode: 13 })
  expect(screen.getByText("1")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
  fireEvent.change(input, { target: { value: "11" } })
  fireEvent.keyDown(input, { keyCode: 13 })
  expect(screen.getByText("10")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
})

test("Pagination render with page-selector", () => {
  render(<Pagination placeholder={"pagination"} total={100} />)
  expect(screen.getByText("10/Page")).toBeInTheDocument()
})

test("Pagination render with sizeOptions", () => {
  render(
    <Pagination
      placeholder={"pagination"}
      sizeCanChange={true}
      sizeOptions={[20, 40, 60, 80]}
      total={100}
    />,
  )
  expect(screen.getByText("80/Page")).toBeInTheDocument()
})

test("Pagination render with onChange", () => {
  const changeEvent = jest.fn()
  render(<Pagination total={100} onChange={changeEvent} />)
  const targetPage = screen.getByText("4")
  fireEvent.click(targetPage)
  expect(changeEvent).toBeCalled()
  expect(targetPage).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
})

test("Pagination render with onPageSizeChange", () => {
  const changeEvent = jest.fn()
  render(
    <Pagination
      total={100}
      defaultCurrent={6}
      onPageSizeChange={changeEvent}
    />,
  )
  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "20/Page" }),
  )
  const targetOption = screen.getByRole("option", {
    name: "20/Page",
  }) as HTMLOptionElement
  expect(changeEvent).toBeCalled()
  expect(targetOption.selected).toBe(true)
})

test("Pagination render with click more", () => {
  render(<Pagination total={99} />)
  fireEvent.click(screen.getByTitle("MoreIcon"))
  expect(screen.getByText("6")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
  fireEvent.click(screen.getByTitle("MoreIcon"))
  expect(screen.getByText("1")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
})

test("Pagination render with simple", () => {
  render(<Pagination total={99} simple={true} />)
  expect(screen.getByText("/ 10")).toBeInTheDocument()
})

test("Pagination render with simple jumper", () => {
  const changeEvent = jest.fn()
  render(
    <Pagination
      total={100}
      placeholder={"pagination"}
      onChange={changeEvent}
      simple={true}
    />,
  )
  const input = screen.getByRole(`textbox`)
  fireEvent.change(input, { target: { value: "6" } })
  expect(input).toHaveDisplayValue("6")
  expect(changeEvent).toBeCalled()
  fireEvent.change(input, { target: { value: "-1" } })
  fireEvent.blur(input)
  expect(input).toHaveDisplayValue("1")
  fireEvent.change(input, { target: { value: "999" } })
  fireEvent.blur(input)
  expect(input).toHaveDisplayValue("10")
})

test("Pagination render with simple input blur", () => {
  const changeEvent = jest.fn()
  render(
    <Pagination
      total={100}
      placeholder={"pagination"}
      onChange={changeEvent}
      simple={true}
    />,
  )
  const input = screen.getByRole(`textbox`)
  fireEvent.change(input, { target: { value: "6" } })
  fireEvent.blur(input)
  expect(input).toHaveDisplayValue("6")
  expect(changeEvent).toBeCalled()
})

test("Pagination render with selectedPage is 5 ", () => {
  render(<Pagination total={100} defaultCurrent={5} />)
  expect(screen.getByText("2")).toBeInTheDocument()
})

test("Pagination render with pageItem < 7 and selectedPage is 1 ", () => {
  render(<Pagination total={100} defaultCurrent={1} />)
  expect(screen.getByText("5")).toBeInTheDocument()
})

test("Pagination render with pageItem < 7 and selectedPage is 10 ", () => {
  render(<Pagination total={100} defaultCurrent={10} />)
  expect(screen.getByText("6")).toBeInTheDocument()
})

test("Simple Pagination render with prevIcon and NextIcon", () => {
  render(<Pagination total={100} simple={true} defaultCurrent={2} />)
  const input = screen.getByRole(`textbox`)
  expect(input).toHaveDisplayValue("2")
  fireEvent.click(screen.getByTitle("PreIcon"))
  expect(input).toHaveDisplayValue("1")
  fireEvent.click(screen.getByTitle("NextIcon"))
  expect(input).toHaveDisplayValue("2")
})

test("Pagination render with prevIcon and NextIcon", () => {
  render(<Pagination total={99} defaultCurrent={2} />)
  expect(screen.getByText("2")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
  fireEvent.click(screen.getByTitle("PreIcon"))
  expect(screen.getByText("1")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
  fireEvent.click(screen.getByTitle("NextIcon"))
  expect(screen.getByText("2")).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-01`)}`,
  })
})

test("Pagination render with singlePage", () => {
  render(<Pagination placeholder={"pagination"} total={1} />)
  expect(screen.queryByPlaceholderText("pagination")).toBeNull()
})

test("Pagination render with showTotal function", () => {
  render(
    <Pagination
      placeholder={"pagination"}
      showTotal={() => (
        <span data-testid="test-progress-gray">{`total test`}</span>
      )}
    />,
  )
  expect(screen.getByTestId("test-progress-gray")).toBeInTheDocument()
})

test("Pagination render with disable", () => {
  render(<Pagination placeholder={"pagination"} total={100} disabled={true} />)
  expect(screen.getByPlaceholderText("pagination")).toBeInTheDocument()
})
