import { create } from "react-test-renderer"
import { Avatar, AvatarGroup } from "../src"

test("AvatarGroup renders correctly", () => {
  const node = create(
    <AvatarGroup className="test-avatar-group">
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
    </AvatarGroup>,
  )
  expect(node.root.findByType(AvatarGroup).props.className).toBe(
    "test-avatar-group",
  )
})

test("AvatarGroup renders with max count", () => {
  const node = create(
    <AvatarGroup maxCount={3}>
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="D" />
      <Avatar text="E" />
    </AvatarGroup>,
  )
  expect(node).toMatchSnapshot()
})

test("AvatarGroup renders with zIndexAscend", () => {
  const node = create(
    <AvatarGroup zIndexAscend={true}>
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="D" />
      <Avatar text="E" />
    </AvatarGroup>,
  ).toJSON()
  expect(node).toMatchSnapshot()
})

test("AvatarGroup renders with three props", () => {
  const node = create(
    <AvatarGroup size="large" colorScheme="yellow">
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="D" />
      <Avatar text="E" />
    </AvatarGroup>,
  ).toJSON()
  expect(node).toMatchSnapshot()
})