import { create } from "react-test-renderer"
import { Image } from "../src"
import { BsFacebook } from "react-icons/bs"

test("Image render with default fallback", () => {
  const node = create(<Image className="test-image-render-fallback-default" />)
  expect(node.root.findByType(Image).props.className).toBe("test-image-render-fallback-default")
})

test("Image render with fallback src", () => {
  const node = create(
    <Image className="test-image-render-fallback-src"
           fallbackSrc={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} />,
  )
  expect(node.root.findByType(Image).props.className).toBe("test-image-render-fallback-src")
})

test("Image render with fallback icon", () => {
  const node = create(
    <Image className="test-image-render-fallback-icon"
           fallback={<BsFacebook />} />,
  )
  expect(node.root.findByType(Image).props.className).toBe("test-image-render-fallback-icon")
})