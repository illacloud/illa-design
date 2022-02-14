import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ConfigProvider, ConfigProviderContext, zhCN } from "../src"

test("Config Provider renders with zh-CN", () => {
  render(
    <ConfigProvider locale={zhCN}>
      <ConfigProviderContext.Consumer>
        {(value) => {
          return <div>{value.locale?.trigger["close"]}</div>
        }}
      </ConfigProviderContext.Consumer>
    </ConfigProvider>,
  )
  expect(screen.getByText("关闭")).toBeInTheDocument()
})
