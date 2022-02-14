import { omit } from "../src"

test("System test omit function", () => {
  const obj = {
    one: 1,
    two: 2,
    three: 3,
  }
  expect(omit(obj, ["two"])).toEqual({
    one: 1,
    three: 3,
  })
})
