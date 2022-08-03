import { renders } from "@testing-library/react"
import { Divider } from "../src"

test("Divider renders default", () => {
  const { asFragment } = render(<Divider />)
  expect(asFragment()).toMatchSnapshot()
})

test("Divider renders horizontal", () => {
  const { asFragment } = render(
    <Divider direction="horizontal" variant="solid" />,
  )
  expect(asFragment()).toMatchSnapshot()
})

test("Divider renders vertical", () => {
  const { asFragment } = render(
    <Divider direction="vertical" variant="dashed" />,
  )
  expect(asFragment()).toMatchSnapshot()
})

test("Divider renders with colorScheme", () => {
  const { asFragment } = render(
    <Divider direction="vertical" colorScheme={"orange"} />,
  )
  expect(asFragment()).toMatchSnapshot()
})

test("Divider renders with text", () => {
  const { asFragment } = render(
    <div>
      <Divider direction="vertical" text="this is a divider" textSize="20px" />
      <Divider
        direction="vertical"
        text="this is a divider"
        textAlign="start"
      />
      <Divider direction="vertical" text="this is a divider" textAlign="end" />
    </div>,
  )
  expect(asFragment()).toMatchSnapshot()
})
