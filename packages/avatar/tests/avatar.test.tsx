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

  test("Avatar renders with long text", () => {
    render(<Avatar text="long long text" />)
    expect(screen.getByText("long long text")).toHaveStyle({
      "transform": "scale(0.5)",
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
    const fragment = render(<div>
      <Avatar shape="circle" />
      <Avatar shape="square" />
    </div>).asFragment()
    expect(fragment).toMatchSnapshot()
  })

  test("Avatar renders with size", () => {
    const fragment = render(<div>
      <Avatar size="small" />
      <Avatar size="medium" />
      <Avatar size="large" />
    </div>).asFragment()
    expect(fragment).toMatchSnapshot()
  })

  test("Avatar renders with colorScheme", () => {
    const fragment = render(<div>
      <Avatar colorScheme="gray" />
      <Avatar colorScheme="green" />
      <Avatar colorScheme="#123321" />
    </div>).asFragment()
    expect(fragment).toMatchSnapshot()
  })
})