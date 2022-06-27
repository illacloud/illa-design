import { Meta, Story } from "@storybook/react"

import {
  ConfigProvider,
  ConfigProviderContext,
  ConfigProviderProps,
  zhCN,
} from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "OTHERS/ConfigProvider",
  component: ConfigProvider,
} as Meta

export const Basic: Story<ConfigProviderProps> = (args) => {
  return (
    <ConfigProvider {...args} locale={zhCN}>
      <ConfigProviderContext.Consumer>
        {(value) => {
          return <div>{value.locale?.popover["close"]}</div>
        }}
      </ConfigProviderContext.Consumer>
    </ConfigProvider>
  )
}
