import { Collapse } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import React from "react"
import { CollapseProps } from "../src"
import { globalColor, illaPrefix } from "@illa-design/theme"

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
        data-testid={"collapse-item-1"}
      >
        Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
      </CollapseItem>

      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="2"
        disabled
        data-testid={"collapse-item-2"}
      >
        Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
      </CollapseItem>

      <CollapseItem
        header="Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get"
        name="3"
        data-testid={"collapse-item-3"}
      >
        Life-was-like-a-box-of-chocolates-you-never-know-what-your-gonna-get
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
