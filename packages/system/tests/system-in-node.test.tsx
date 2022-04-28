/**
 * @jest-environment node
 */
import { isServerRendering } from "../src"

test(`Test isServerRendering in node environment`, async () => {
  expect(isServerRendering).toEqual(true)
})
