import {
  dayjsPro,
  debounce,
  easingMethod,
  getDayjsValue,
  getSortedDayjsArray,
  getStyle,
  isArray,
  isDayjs,
  isDayjsArrayChange,
  isDayjsChange,
  isEmptyObject,
  isFunction,
  isNumber,
  isObject,
  isPromise,
  isServerRendering,
  isSingleNode,
  isString,
  mergedToString,
  mergeRefs,
  omit,
  padStart,
  getSizeCssByAutoFullProps,
  raf,
  useMergeValue,
} from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import dayjs, { Dayjs } from "dayjs"
import { RefObject } from "react"

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
  const asyncFun = new Promise(() => {
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
  expect(isSingleNode("Div Test Case")).toBeTruthy()
  expect(isSingleNode(1000)).toBeTruthy()
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
test("mock timers to test debounce", () => {
  jest.useFakeTimers()
  const test = jest.fn()
  const debounced = debounce(test, 1000)

  debounced()
  debounced()

  jest.runAllTimers()

  expect(test).toHaveBeenCalledTimes(1)
})

// test useMergeValue.ts
describe("test useMergeValue", () => {
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

  test("test useMergeValue hook with defaultValue", () => {
    render(<Test defaultValue={"test useMergeValue"} />)
    fireEvent.click(screen.getByText("test useMergeValue"))
    expect(screen.getByText("test setValue")).toBeInTheDocument()
  })

  test("test useMergeValue hook with value", () => {
    render(<Test value={"test useMergeValue"} />)
    expect(screen.getByText("test useMergeValue")).toBeInTheDocument()
  })
})

// test dayjs.ts
test("test getDayjsValue", () => {
  const formatTime = (str: Dayjs) => {
    return str ? dayjsPro(str)?.format("HH:mm:ss") : ""
  }
  // when time type is string
  const day = getDayjsValue("06:00:00", "HH:mm:ss") as Dayjs
  const dayFormat = formatTime(day)
  expect(dayFormat).toEqual("06:00:00")

  // when time type is dayjs
  const day1 = getDayjsValue(
    dayjsPro("08:00:00", "HH:mm:ss"),
    "HH:mm:ss",
  ) as Dayjs
  const dayFormat1 = formatTime(day1)
  expect(dayFormat1).toEqual("08:00:00")

  // when time type is array
  const dayArr = getDayjsValue(["06:00:00", "08:00:00"], "HH:mm:ss") as Dayjs[]
  const dayArrFormat = [formatTime(dayArr[0]), formatTime(dayArr[1])]
  expect(dayArrFormat).toEqual(["06:00:00", "08:00:00"])

  // when time type is undefined
  expect(getDayjsValue(undefined, "HH:mm:ss")).toEqual(void 0)
})

test("test isDayjsChange", () => {
  const day1 = dayjsPro("06:00:00", "HH:mm:ss")
  const day2 = dayjsPro("08:00:00", "HH:mm:ss")

  expect(isDayjsChange(day1, day2)).toEqual(true)
  expect(isDayjsChange(day1, day1)).toEqual(false)
  expect(isDayjsChange(undefined, undefined)).toEqual(false)
})

test("test isDayjsArrayChange", () => {
  const dayArr1 = [dayjsPro(), dayjsPro("06:00:00", "HH:mm:ss")]
  const dayArr2 = [dayjsPro(), dayjsPro("08:00:00", "HH:mm:ss")]

  expect(isDayjsArrayChange(dayArr1, dayArr2)).toEqual(true)
  expect(isDayjsArrayChange(dayArr1, dayArr1)).toEqual(false)
  expect(isDayjsArrayChange(undefined, undefined)).toEqual(false)
})

test("test getSortedDayjsArray", () => {
  const dayArr = [
    dayjsPro("08:00:00", "HH:mm:ss"),
    dayjsPro("06:00:00", "HH:mm:ss"),
  ]
  const excArr = dayArr.reverse()
  expect(getSortedDayjsArray(dayArr)).toEqual(excArr)
  const errorCase = [dayjsPro("06:00:00", "HH:mm:ss")]
  expect(getSortedDayjsArray(errorCase)).toEqual(errorCase)
})

test("test getAutoFullSizeCss", function () {
  const res = getSizeCssByAutoFullProps(true, true)
  expect(res.styles.includes("width: 100%")).toEqual(true)
  expect(res.styles.includes("height: 100%")).toEqual(true)
})

test("test merge refs", () => {
  const ref = { current: null } as RefObject<HTMLElement>
  const functionRef = jest.fn()
  const mergedRef = mergeRefs(ref, functionRef)
  mergedRef(null)
  expect(functionRef).toBeCalledWith(null)
})
