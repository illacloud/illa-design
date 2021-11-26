import { render } from "@testing-library/react"
import { Divider } from "../src"

test("Divider renders horizontal", () => {
  const { asFragment } = render(<Divider direction="horizontal" variant="solid" />)
  expect(asFragment()).toMatchSnapshot()
})

test("Divider renders vertical", () => {
  const { asFragment } = render(<Divider direction="vertical" variant="dashed" />)
  expect(asFragment()).toMatchSnapshot()
})