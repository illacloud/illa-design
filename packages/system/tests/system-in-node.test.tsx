/**
 * @jest-environment node
 */

import { raf, caf, throttleByRaf, isServerRendering } from "../src"

test("Test raf in node environment", async () => {
  const fn = jest.fn()
  jest.useFakeTimers()
  const timer = raf(fn)
  jest.runAllTimers()
  caf(timer)

  expect(fn).toBeCalled()
})

test("Test throttleByRaf", async () => {
  jest.useFakeTimers()
  let count = 0
  const fn = jest.fn(() => (count += 1))
  const fnThrottle = throttleByRaf(fn)

  const interval = setInterval(() => {
    fnThrottle()
  }, 16)
  setTimeout(() => {
    clearInterval(interval)
    fnThrottle.cancel()
  }, 1000)

  jest.runAllTimers()
  expect(count).toBeGreaterThanOrEqual(60)
})

test("Test isServerRendering in node environment", async () => {
  expect(isServerRendering).toEqual(true)
})
