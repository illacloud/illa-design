import {
  omit,
  isString,
  isArray,
  isObject,
  isEmptyObject,
  isNumber,
  isFunction,
  isPromise,
} from "../src"
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

// test is.ts
test("System test isObject function", () => {
  const obj = {
    one: 1,
    two: 2,
  }
  expect(isObject(obj)).toEqual(true)
  expect(isArray(obj)).toEqual(false)
})

test("System test isEmptyObject function", () => {
  const obj = {}
  expect(isEmptyObject(obj)).toEqual(true)
})

test("System test isArray function", () => {
  const arr = [1, 2]
  expect(isArray(arr)).toEqual(true)
})

test("System test isNumber function", () => {
  const number = 1
  expect(isNumber(number)).toEqual(true)
})

test("System test isString function", () => {
  const number = 1
  const str = "1"
  expect(isString(str)).toEqual(true)
  expect(isString(number)).toEqual(false)
})

test("System test isFunction function", () => {
  const fun = () => {
    return "fun"
  }
  expect(isFunction(fun)).toEqual(true)
})

test("System test isFunction function", () => {
  const asyncFun = new Promise(function () {
    return "asyncFun"
  })
  expect(isPromise(asyncFun)).toEqual(true)
  expect(isFunction(asyncFun)).toEqual(true)
})
