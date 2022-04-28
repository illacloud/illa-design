import { omit, getStyle, easingMethod, raf, isDayjs, isServerRendering } from "../src"
import { render, screen } from "@testing-library/react"
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


test("GetStyle should work", () => {
  render(<div style={{ color: "red" }} data-testid={"test"}></div>)
  expect(getStyle(screen.getByTestId("test"), "color")).toBe("red")
  expect(getStyle(screen.getByTestId("test"), "")).toBe("")
})

test("Test easingMethod", () => {
  const expected = Object.values(easingMethod).every((fn) => {
    return (
      fn(0) === 0 &&
      fn(1) === 1 &&
      [0.2, 0.5, 0.8].every((t) => fn(t) > 0 && fn(t) < 1)
    )
  })

  expect(expected).toBe(true)
})

test("Test raf in jsdom environment", async () => {
  const fn = jest.fn()

  await new Promise(function(resolve) {
    raf(() => {
      fn()
      resolve("")
    })
  }).then(() => {
    expect(fn).toBeCalled()
  })

})
test("System test isDayjs function", () => {
  expect(isDayjs(dayjs())).toEqual(true)
  expect(isDayjs(new Date())).toEqual(false)
})

test("System test isServerRendering in js-dom environment", () => {
  expect(isServerRendering).toEqual(false)
})
