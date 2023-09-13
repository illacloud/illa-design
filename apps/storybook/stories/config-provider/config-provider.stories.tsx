import { Meta, StoryFn } from "@storybook/react"

import {
  ConfigProvider,
  ConfigProviderContext,
  ConfigProviderProps,
  zhCN,
} from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "OTHERS/ConfigProvider",
  component: ConfigProvider,
} as Meta

export const Basic: StoryFn<ConfigProviderProps> = (args) => {
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
