import { ImgAvatar } from "../src/img-avatar"
import { create } from "react-test-renderer"

test("Img Avatar renders correctly", () => {
  const node = create(<ImgAvatar className="test-img-avatar"
                                 src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />)
  expect(node.root.findByType(ImgAvatar).props?.className).toBe("test-img-avatar")
})