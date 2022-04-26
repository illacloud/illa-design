/**
 * @jest-environment node
 */
import { raf, caf } from "../src"

test(`Test raf in node environment`, async () => {
  const fn = jest.fn()
  jest.useFakeTimers()
  const timer = raf(fn)
  jest.runAllTimers()
  caf(timer)

  expect(fn).toBeCalled()
})
