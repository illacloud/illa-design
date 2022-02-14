import { Tag, TagColorScheme, TagVariant } from "../src"
import { BsFacebook } from "react-icons/bs"
import { fireEvent, getByTitle, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Tag renders with text", () => {
  render(<Tag data-testid="test-with-text">Tag renders with text</Tag>)
  expect(screen.getByTestId("test-with-text")).toBeInTheDocument()
})

test("Tag renders with icon", () => {
  render(<Tag data-testid="test-with-icon" icon={<BsFacebook />} />)
  expect(screen.getByTestId("test-with-icon")).toBeInTheDocument()
})

test("Tag renders invisible", () => {
  render(<Tag visible={false}>Should be null</Tag>)
  expect(screen.queryByText("Should be null")).toBeNull()
})

test("Tag renders with color and variant", () => {
  let variantList: TagVariant[] = ["light", "fill", "outline"]
  let colorList: TagColorScheme[] = ["gray", "green", "#123321"]
  for (let v of variantList) {
    for (let c of colorList) {
      expect(
        render(
          <Tag colorScheme={c} variant={v}>
            Hello World
          </Tag>,
        ).asFragment(),
      ).toMatchSnapshot()
    }
  }
})

test("Tag renders with different size", () => {
  expect(
    render(<Tag size="small">Hello World</Tag>).asFragment(),
  ).toMatchSnapshot()
  expect(
    render(<Tag size="medium">Hello World</Tag>).asFragment(),
  ).toMatchSnapshot()
  expect(
    render(<Tag size="large">Hello World</Tag>).asFragment(),
  ).toMatchSnapshot()
})

test("Tag renders with close icon", () => {
  render(<Tag data-testid="test-with-close-icon" closable />)
  expect(screen.getByTestId("test-with-close-icon")).toBeInTheDocument()
})

test("Tag renders close event", () => {
  const onClose = jest.fn()
  const { getByTitle } = render(
    <Tag data-testid="test-close-event" onClose={onClose} closable />,
  )
  fireEvent.click(getByTitle("CloseIcon"))
  expect(onClose).toBeCalled()
})
