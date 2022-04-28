import { omit, isDayjs, isServerRendering } from "../src"
import dayjs from "dayjs"
import "@testing-library/jest-dom"

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

test("System test isDayjs function", () => {
  expect(isDayjs(dayjs())).toEqual(true)
  expect(isDayjs(new Date())).toEqual(false)
})

test("System test isServerRendering in js-dom environment", () => {
  expect(isServerRendering).toEqual(false)
})
