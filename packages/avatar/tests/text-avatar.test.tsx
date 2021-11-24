import { create } from "react-test-renderer"
import { TextAvatar } from "../src/text-avatar"

test("Text Avatar renders correctly", () => {
  const node = create(<TextAvatar className="test-text-avatar" text="A" />)
  expect(node.root.findByType(TextAvatar).props?.className).toBe("test-text-avatar")
})
