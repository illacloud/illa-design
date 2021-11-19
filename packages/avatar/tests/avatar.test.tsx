import { create } from "react-test-renderer"
import { Avatar } from "../src"
import { BsFacebook } from "react-icons/bs"

test("Avatar with text", () => {
  const node = create(<Avatar className="test-avatar-with-text" text="Hello World" />)
  expect(node.root.findByType(Avatar).props.className).toBe("test-avatar-with-text")
})

test("Avatar with src", () => {
  const node = create(
    <Avatar className="test-avatar-with-src"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />,
  )
  expect(node.root.findByType(Avatar).props.className).toBe("test-avatar-with-src")
})

test("Avatar with icon", () => {
  const node = create(<Avatar className="test-avatar-with-icon" icon={<BsFacebook />} />)
  expect(node.root.findByType(Avatar).props.className).toBe("test-avatar-with-icon")
})