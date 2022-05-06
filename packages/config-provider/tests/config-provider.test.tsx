import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import {
  ConfigProvider,
  ConfigProviderContext,
  getConfigProviderProps,
  zhCN,
  enUS,
} from "../src"
import { useState } from "react"

const ConfigComponent = () => {
  const [locale, setLocale] = useState(enUS)
  return (
    <ConfigProvider locale={locale}>
      <button onClick={() => setLocale(zhCN)}>Locale</button>
    </ConfigProvider>
  )
}

test("Config Provider renders with zh-CN", () => {
  render(
    <ConfigProvider locale={zhCN}>
      <ConfigProviderContext.Consumer>
        {(value) => {
          return <div>{value.locale?.popover["close"]}</div>
        }}
      </ConfigProviderContext.Consumer>
    </ConfigProvider>,
  )
  expect(screen.getByText("关闭")).toBeInTheDocument()
})

test("Test the global config object", () => {
  render(<ConfigComponent />)
  expect(getConfigProviderProps().locale).toBe(enUS)
  const btn = screen.getByRole("button")
  fireEvent.click(btn)
  expect(getConfigProviderProps().locale).toBe(zhCN)
})
