import { Avatar, AvatarGroup } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("AvatarGroup renders correctly", () => {
  render(
    <AvatarGroup data-testid="test-avatar-group">
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
    </AvatarGroup>,
  )
  expect(screen.getByTestId("test-avatar-group")).toBeInTheDocument()
})

test("AvatarGroup renders with max count", () => {
  render(
    <AvatarGroup data-testid="test-with-mac-count" maxCount={3}>
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="D" />
      <Avatar text="E" />
    </AvatarGroup>,
  )
  expect(screen.getByTestId("test-with-mac-count").childElementCount).toBe(4)
  expect(screen.getByText("+2")).toBeInTheDocument()
})

test("AvatarGroup renders with zIndexAscend", () => {
  const { asFragment } = render(
    <AvatarGroup zIndexAscend={true}>
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="D" />
      <Avatar text="E" />
    </AvatarGroup>,
  )
  expect(asFragment()).toMatchSnapshot()
})

test("AvatarGroup renders with large props", () => {
  const { asFragment } = render(
    <AvatarGroup size="large" colorScheme="yellow">
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="D" />
      <Avatar text="E" />
    </AvatarGroup>,
  )
  expect(asFragment()).toMatchSnapshot()
})

test("AvatarGroup renders with medium props", () => {
  const { asFragment } = render(
    <AvatarGroup size="medium" colorScheme="yellow">
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="D" />
      <Avatar text="E" />
    </AvatarGroup>,
  )
  expect(asFragment()).toMatchSnapshot()
})