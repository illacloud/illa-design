import * as React from "react"
import { Meta, Story } from "@storybook/react"
import results from "../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { ConfigProvider, ConfigProviderContext, ConfigProviderProps, zhCN } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "OTHERS/ConfigProvider",
  component: ConfigProvider,
  decorators: [withTests({ results })],
} as Meta

export const Basic: Story<ConfigProviderProps> = (args) => {
  return <ConfigProvider {...args} locale={zhCN}>
    <ConfigProviderContext.Consumer>
      {value => {
        return <div>{value.locale?.trigger["close"]}</div>
      }}
    </ConfigProviderContext.Consumer>
  </ConfigProvider>
}
