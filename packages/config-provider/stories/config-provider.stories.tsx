import * as React from "react"
import { useState } from "react"
import { Meta, Story } from "@storybook/react"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Button } from "@illa-design/button"
import { ConfigProvider, ConfigProviderContext, ConfigProviderProps, enUS, Locale, zhCN } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "OTHERS/ConfigProvider",
  component: ConfigProvider,
  decorators: [withTests({ results })],
} as Meta

export const Basic: Story<ConfigProviderProps> = (args) => {
  const [currenLocale, setCurrentLocale] = useState<Locale>(enUS)
  return <ConfigProvider locale={currenLocale} {...args}>
    <ConfigProviderContext.Consumer>
      {value => {
        return <div>
          {value.locale?.trigger["close"]}
        </div>
      }}
    </ConfigProviderContext.Consumer>
    <Button onClick={() => {
      if (currenLocale == enUS) {
        setCurrentLocale(zhCN)
      } else {
        setCurrentLocale(enUS)
      }
    }
    }>Change Language</Button>
  </ConfigProvider>
}
