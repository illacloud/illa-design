import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Col, Row, RowProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "LAYOUT/Grid/Row",
  component: Row,
} as Meta

export const Basic: Story<RowProps> = (args) => (
  <Row {...args}>
    <Col />
    <Col />
  </Row>
)
