import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Col, ColProps, Row } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "LAYOUT/Grid/Col",
  component: Col,
} as Meta

export const Basic: Story<ColProps> = (args) => (
  <Row>
    <Col {...args} />
    <Col {...args} />
  </Row>
)
