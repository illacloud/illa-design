import { globalColor } from "../src"
import { illaPrefix } from "../dist/types"

test("Theme get color", () => {
  expect(globalColor("null")).toBe("")
  expect(globalColor(`--${illaPrefix}-green-01`)).toBe("#007a41")
})