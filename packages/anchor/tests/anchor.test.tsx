import { Anchor } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

const AnchorLink = Anchor.Link

test("Anchor renders with links", () => {
  render(
    <Anchor>
      <AnchorLink title="anchor" href="#anchor" />
    </Anchor>,
  )

  expect(screen.getByText("anchor")).toBeInTheDocument()
  expect(screen.getByText("anchor")).toHaveAttribute("href", "#anchor")
})

test("Anchor renders with nested links", () => {
  render(
    <Anchor>
      <AnchorLink title="anchor" href="#anchor">
        <AnchorLink title="nested" href="#anchor-nested"></AnchorLink>
      </AnchorLink>
    </Anchor>,
  )

  expect(screen.getByText("nested")).toBeInTheDocument()
  expect(screen.getByText("nested")).toHaveAttribute("href", "#anchor-nested")
})

test("Click on anchor should trigger onSelect", () => {
  const onSelect = jest.fn()
  render(
    <Anchor onSelect={onSelect}>
      <AnchorLink title="anchor" href="#anchor" />
    </Anchor>,
  )

  screen.getByText("anchor").click()
  expect(onSelect).toBeCalled()
})

test("Click on anchor should trigger onSelect", () => {
  const onChange = jest.fn()
  render(
    <Anchor onChange={onChange}>
      <AnchorLink title="anchor" href="#anchor" />
    </Anchor>,
  )

  screen.getByText("anchor").click()
  expect(onChange).toBeCalled()
})
