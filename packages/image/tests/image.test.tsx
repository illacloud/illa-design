import { create } from "react-test-renderer"
import { Image } from "../src"
import { BsFacebook } from "react-icons/bs"

test("Image renders with default fallback", () => {
  const node = create(<Image className="test-image-render-fallback-default" />)
  expect(node.root.findByType(Image).props.className).toBe("test-image-render-fallback-default")
})

test("Image renders with fallback src", () => {
  const node = create(
    <Image className="test-image-render-fallback-src"
           fallbackSrc={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} />,
  )
  expect(node.root.findByType(Image).props.className).toBe("test-image-render-fallback-src")
})

test("Image renders with fallback icon", () => {
  const node = create(
    <Image className="test-image-render-fallback-icon"
           fallback={<BsFacebook />} />,
  )
  expect(node.root.findByType(Image).props.className).toBe("test-image-render-fallback-icon")
})

test("Image renders with size", () => {
  const node = create(
    <Image height="200px" width="200px"
           src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />,
  ).toJSON()
  expect(node).toMatchSnapshot()
})

test("Image renders with event", () => {
  const errorHandler = jest.fn()
  const loadHandler = jest.fn()
  const { root } = create(
    <Image onError={errorHandler} onLoad={loadHandler} />,
  )
  root.findByType(Image).props.onError()
  root.findByType(Image).props.onLoad()
  expect(errorHandler).toBeCalled()
  expect(loadHandler).toBeCalled()
})