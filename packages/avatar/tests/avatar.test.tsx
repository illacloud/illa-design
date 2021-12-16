import { Avatar } from "../src"
import { BsFacebook } from "react-icons/bs"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Avatar", () => {

  beforeEach(() => {
    Object.defineProperty(HTMLSpanElement.prototype, "clientWidth", {
      configurable: true,
      value: 192,
    })
    Object.defineProperty(HTMLDivElement.prototype, "offsetWidth", {
      configurable: true,
      value: 100,
    })
  })

  test("Avatar renders with text", () => {
    render(<Avatar data-testid="test-avatar-with-text" text="Hello World" />)
    expect(screen.getByTestId("test-avatar-with-text")).toBeInTheDocument()
  })

  test("Avatar renders with src", () => {
    render(
      <Avatar src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />,
    )
    expect(screen.getByRole("img")).toHaveAttribute("src", "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
  })

  test("Avatar renders with icon", () => {
    const node = render(<Avatar icon={<BsFacebook />} />).asFragment()
    expect(node).toMatchSnapshot()
  })

  test("Avatar renders with shape", () => {
    expect(render(<Avatar shape="circle" />).asFragment()).toMatchSnapshot()
    expect(render(<Avatar shape="square" />).asFragment()).toMatchSnapshot()
  })

  test("Avatar renders with size", () => {
    expect(render(<Avatar size="small" />).asFragment()).toMatchSnapshot()
    expect(render(<Avatar size="medium" />).asFragment()).toMatchSnapshot()
    expect(render(<Avatar size="large" />).asFragment()).toMatchSnapshot()
  })

  test("Avatar renders with colorScheme", () => {
    expect(render(<Avatar colorScheme="gray" />).asFragment()).toMatchSnapshot()
    expect(render(<Avatar colorScheme="green" />).asFragment()).toMatchSnapshot()
    expect(render(<Avatar colorScheme="#123321" />).asFragment()).toMatchSnapshot()
  })

  test("Avatar renders with long text", () => {
    render(<Avatar text="long long text" />)
    expect(screen.getByText("long long text")).toHaveStyle({
      "transform": "scale(0.5)",
    })
  })
})