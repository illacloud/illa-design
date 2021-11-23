import { create } from "react-test-renderer"
import { IconAvatar } from "../src/icon-avatar"
import { BsFacebook } from "react-icons/bs"

test("Icon Avatar renders correctly", () => {
  const node = create(<IconAvatar className="test-icon-avatar" size="small" icon={<BsFacebook />} />)
  expect(node.root.findByType(IconAvatar).props.className).toBe("test-icon-avatar")
})

test("Icon Avatar renders with size", () => {
  expect(create(<IconAvatar size="small" icon={<BsFacebook />} />).toJSON()).toMatchSnapshot()
  expect(create(<IconAvatar size="medium" icon={<BsFacebook />} />).toJSON()).toMatchSnapshot()
  expect(create(<IconAvatar size="large" icon={<BsFacebook />} />).toJSON()).toMatchSnapshot()
})