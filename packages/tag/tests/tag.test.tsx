import { Tag } from "../src"
import { create } from "react-test-renderer"
import { BsFacebook } from "react-icons/bs"

test("Tag renders with text", () => {
  const node = create(<Tag className="test-with-text">Tag renders with text</Tag>)
  expect(node.root.findByType(Tag).props.className).toBe("test-with-text")
})

test("Tag renders with icon", () => {
  const node = create(<Tag className="test-with-icon" icon={<BsFacebook />} />)
  expect(node.root.findByType(Tag).props.className).toBe("test-with-icon")
})

test("Tag renders invisible", () => {
  const node = create(
    <Tag className="test-invisible" visible={false} />,
  )
  expect(node.root.findByType(Tag).instance).toBe(null)
})

test("Tag renders with close icon", () => {
  const node = create(
    <Tag className="test-with-close-icon" closable />,
  )
  expect(node.root.findByType(Tag).props.className).toBe("test-with-close-icon")
})

test("Tag renders close event", () => {
  const onClose = jest.fn()
  const node = create(
    <Tag className="test-invisible" visible={false} onClose={onClose} />,
  )
  node.root.findByProps({ className: "test-invisible" }).props.onClose()
  expect(onClose).toBeCalled()
})