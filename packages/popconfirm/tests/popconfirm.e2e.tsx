import * as React from "react"
import { Button } from "@illa-design/button"
import { mount, unmount } from "@cypress/react"
import { Popconfirm } from "../src"
import "@testing-library/cypress"

it("Popconfirm renders correctly", () => {
  mount(
    <Popconfirm
      title="Popover"
      closeDelay={0}
      openDelay={0}
      position={"bottom"}
    >
      <Button>Click</Button>
    </Popconfirm>,
  )
  unmount()
})
