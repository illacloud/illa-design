import {
  getStyle,
  omit,
  isString,
  isArray,
  isObject,
  isEmptyObject,
  isNumber,
  isFunction,
  isPromise,
  isDayjs,
  isServerRendering,
  isSingleNode,
  easingMethod,
  raf,
  debounce,
  useMergeValue,
  mergedToString,
  padStart,
} from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import dayjs from "dayjs"

// test omit.ts
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
  const emptyObj = {}
  const obj = {
    one: 1,
    two: 2,
  }
  expect(isEmptyObject(emptyObj)).toEqual(true)
  expect(isEmptyObject(obj)).toEqual(false)
})

test("System test isArray function", () => {
  const arr = [1, 2]
  expect(isArray(arr)).toEqual(true)
})

test("System test isNumber function", () => {
  const number = 1
  expect(isNumber(number)).toEqual(true)
  expect(isNumber(NaN)).toEqual(false)
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
})

test("System test isDayjs function", () => {
  expect(isDayjs(dayjs())).toEqual(true)
  expect(isDayjs(new Date())).toEqual(false)
})

test("System test isServerRendering in js-dom environment", () => {
  expect(isServerRendering).toEqual(false)
})

// test utils.ts
test("Merge to string test case", () => {
  expect(mergedToString(<div data-testid="test-div">Div Test Case</div>)).toBe(
    "Div Test Case",
  )
})

test("Test is single node", () => {
  expect(
    isSingleNode(<div data-testid="test-div">Div Test Case</div>),
  ).toBeTruthy()
  expect(
    isSingleNode(
      <div data-testid="test-div">
        <div>1000</div>
      </div>,
    ),
  ).not.toBeTruthy()
})

test("System test padStart function", () => {
  expect(padStart("23.61", 8, "0")).toBe("00023.61")
  expect(padStart("23.61", 2, "0")).toBe("23.61")
  expect(padStart("23.61", 8, "00")).toBe("000023.61")
  expect(padStart("23.61", NaN, "00")).toBe("23.61")
})

// test style.ts
test("GetStyle should work", () => {
  render(<div style={{ color: "red" }} data-testid={"test"}></div>)
  expect(getStyle(screen.getByTestId("test"), "color")).toBe("red")
  expect(getStyle(screen.getByTestId("test"), "")).toBe("")
})

// test easing.ts
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

// test raf.ts
test("Test raf in jsdom environment", async () => {
  const fn = jest.fn()

  await new Promise(function (resolve) {
    raf(() => {
      fn()
      resolve("")
    })
  }).then(() => {
    expect(fn).toBeCalled()
  })
})

// test debounce.ts
test("mock timers to test debounce", function () {
  jest.useFakeTimers()
  const test = jest.fn()
  const debounced = debounce(test, 1000)

  debounced()
  debounced()

  jest.runAllTimers()

  expect(test).toHaveBeenCalledTimes(1)
})

// test useMergeValue.ts
describe("test useMergeValue", function () {
  const Test = (props: {
    defaultValue?: string
    value?: string
    onClick?: (value?: string) => void
  }) => {
    const [value, setValue] = useMergeValue("", {
      defaultValue: props.defaultValue ? props.defaultValue : undefined,
      value: props.value ? props.value : undefined,
    })
    return (
      <div
        onClick={() => {
          setValue("test setValue")
          props.onClick?.(value)
        }}
      >
        {value}
      </div>
    )
  }

  test("test useMergeValue hook with defaultValue", function () {
    render(<Test defaultValue={"test useMergeValue"} />)
    fireEvent.click(screen.getByText("test useMergeValue"))
    expect(screen.getByText("test setValue")).toBeInTheDocument()
  })

  test("test useMergeValue hook with value", function () {
    render(<Test value={"test useMergeValue"} />)
    expect(screen.getByText("test useMergeValue")).toBeInTheDocument()
  })
})
