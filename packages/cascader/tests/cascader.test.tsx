import { Cascader } from "../src"
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

const options = [
  {
    value: "beijing",
    label: "Beijing",
    children: [
      {
        value: "chaoyang",
        label: "Chaoyang",
        children: [
          {
            value: "datunli",
            label: "Datunli",
          },
        ],
      },
      {
        value: "xicheng",
        label: "Xicheng",
        disabled: true,
      },
    ],
  },
  {
    value: "shanghai",
    label: "Shanghai",
    children: [
      {
        value: "huangpu",
        label: "Huangpu",
      },
    ],
  },
  {
    value: "guangdong",
    label: "Guangdong",
    children: [
      {
        value: "shenzhen",
        label: "Shenzhen",
      },
    ],
  },
]

test("Cascader renders with text", () => {
  render(<Cascader placeholder={"test"} />)
  expect(screen.getByPlaceholderText("test")).toBeInTheDocument()
})

test("Cascader renders with options", () => {
  render(
    <Cascader value={["beijing", "xicheng"]} options={options} size="small" />,
  )
  expect(screen.getByText("Beijing / Xicheng")).toBeInTheDocument()
})

test("Cascader renders with defaultValue", () => {
  render(
    <Cascader
      defaultValue={["beijing", "xicheng"]}
      options={options}
      size="small"
    />,
  )
  expect(screen.getByText("Beijing / Xicheng")).toBeInTheDocument()
})

test("Cascader renders with multiple", () => {
  render(
    <Cascader
      value={[
        ["beijing", "xicheng"],
        ["shanghai", "huangpu"],
      ]}
      options={options}
      size="large"
      multiple
      maxTagCount={1}
    />,
  )
  expect(screen.getByText("Beijing / Xicheng")).toBeInTheDocument()
  expect(screen.getByText("+1...")).toBeInTheDocument()
})

test("Cascader renders with options", async () => {
  const changeEvent = jest.fn()
  render(
    <Cascader
      value={["beijing", "xicheng"]}
      options={options}
      allowClear
      onChange={changeEvent}
    />,
  )
  expect(screen.getByText("Beijing / Xicheng")).toBeInTheDocument()
  userEvent.click(screen.getByTitle("selectRemoveIcon"))
  expect(changeEvent).toBeCalled()
})
