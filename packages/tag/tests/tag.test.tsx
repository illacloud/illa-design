import { Tag } from "../src"
import { create } from "react-test-renderer"
import { BsFacebook } from "react-icons/bs"
import { TagColorScheme, TagVariant } from "../dist/types"
import { fireEvent, getByTitle, render } from "@testing-library/react"

test("Tag renders with text", () => {
  const { root } = create(<Tag className="test-with-text">Tag renders with text</Tag>)
  expect(root.findByType(Tag).props.className).toBe("test-with-text")
})

test("Tag renders with icon", () => {
  const { root } = create(<Tag className="test-with-icon" icon={<BsFacebook />} />)
  expect(root.findByType(Tag).props.className).toBe("test-with-icon")
})

test("Tag renders invisible", () => {
  const { root } = create(
    <Tag className="test-invisible" visible={false} />,
  )
  expect(root.findByType(Tag).props.className).toBe("test-invisible")
})

test("Tag renders with color and variant", () => {
  let variantList: TagVariant[] = ["light", "fill", "outline"]
  let colorList: TagColorScheme[] = ["gray", "green", "#123321"]
  for (let v of variantList) {
    for (let c of colorList) {
      expect(create(<Tag colorScheme={c} variant={v}>Hello World</Tag>).toJSON()).toMatchSnapshot()
    }
  }
})

test("Tag renders with close icon", () => {
  const { root } = create(
    <Tag className="test-with-close-icon" closable />,
  )
  expect(root.findByType(Tag).props.className).toBe("test-with-close-icon")
})

test("Tag renders close event", () => {
  const onClose = jest.fn()
  const { getByTitle } = render(
    <Tag className="test-close-event" onClose={onClose} closable />,
  )
  fireEvent.click(getByTitle("CloseIcon"))
  expect(onClose).toBeCalled()
})