import { Collapse } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { CollapseProps } from "../src"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { ShareIcon } from "@illa-design/icon"
import userEvent from "@testing-library/user-event"

function DemoTest(props: CollapseProps) {
  const CollapseItem = Collapse.Item
  return (
    <Collapse
      style={{ maxWidth: 1260, marginBottom: 20 }}
      data-testid={"collapse-wrapper"}
      {...props}
    >
      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="1"
        extra={<ShareIcon />}
        data-testid={"collapse-item-1"}
      >
        First
      </CollapseItem>

      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="2"
        disabled
        data-testid={"collapse-item-2"}
      >
        Second
      </CollapseItem>

      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="3"
        data-testid={"collapse-item-3"}
      >
        Third
      </CollapseItem>
    </Collapse>
  )
}

test("Collapse renders with border", () => {
  render(<DemoTest />)
  expect(screen.getByTestId("collapse-wrapper")).toHaveStyle({
    border: `border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)}`,
  })
})

test("Collapse renders with extra icon", () => {
  render(<DemoTest defaultActiveKey={["1", "2"]} />)
  const icon = screen.getByTitle("ShareIcon")
  expect(icon).toBeInTheDocument()
  userEvent.click(icon)
  expect(screen.getByTestId("collapse-item-1").lastChild).toBeVisible()
})
