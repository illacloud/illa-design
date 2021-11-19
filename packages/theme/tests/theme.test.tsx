import { globalColor } from "../src"

test("Theme get null colors", () => {
  expect(globalColor("null")).toBe("")
})