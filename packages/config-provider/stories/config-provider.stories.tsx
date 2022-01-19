import * as React from "react"
import { useState } from "react"
import { Meta, Story } from "@storybook/react"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"
import { Button } from "@illa-design/button"

import { CopyableBuilder, EllipsisBuilder, Paragraph, Typography } from "@illa-design/typography"
import { ConfigProvider, ConfigProviderProps, enUS, Locale, zhCN } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "OTHERS/ConfigProvider",
  component: ConfigProvider,
  decorators: [withTests({ results })],
} as Meta

export const Basic: Story<ConfigProviderProps> = (args) => {
  const [currenLocale, setCurrentLocale] = useState<Locale>(enUS)
  return <ConfigProvider locale={currenLocale}>
    <Typography>
      <Paragraph ellipsis={new EllipsisBuilder().rows(2).expandable(true).create()}
                 copyable={new CopyableBuilder().create()}>A
        design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the form of a
        prototype,
        product or process. The verb to design expresses the process of developing a design. In some cases, the direct
        construction of an object without an explicit prior plan (such as in craft work, some engineering, coding, and
        graphic design) may also be considered to be a design activity.
      </Paragraph>
    </Typography>
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
