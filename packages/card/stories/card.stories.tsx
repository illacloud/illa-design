import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Card, CardGrid, Meta as CardMeta, CardProps } from "../src"
import { Space } from "@illa-design/space"
import { Link } from "@illa-design/link"
import { Avatar } from "@illa-design/avatar"
import { Typography } from "@illa-design/typography"
import { LikeIcon, MoreIcon, ShareIcon } from "@illa-design/icon"

export default {
  title: "DATA DISPLAY/Card",
  component: Card,
  argTypes: {
    headerStyle: {
      control: false,
    },
    bodyStyle: {
      control: false,
    },
    cover: {
      control: false,
    },
    actions: {
      control: false,
    },
    extra: {
      control: false,
    },
  },
} as Meta

const Template: Story<CardProps> = (args) => {
  return (
    <>
      <Space size="large" direction="vertical">
        <Card style={{ width: 360 }} extra={<Link>More</Link>} {...args}>
          France is a land, the British are a nation, and America is the passion
          in our hearts.People all over the world carrying a Santa Claus came to
          the United States to chase their ideas of American dreams, but in the
          end ,there is nothing more than the pursuit of more money, and they
          slowly get lost in this economically prosperous but utilitarian
          society. So, sad stories undoubtedly happen in the most brilliant era
        </Card>
        <Card style={{ width: 360 }} {...args} title={""}>
          圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。
        </Card>
        <>
          <Card
            style={{ width: 360 }}
            cover={
              <div
                style={{
                  height: 204,
                  overflow: "hidden",
                }}
              >
                <img
                  style={{ width: "100%", transform: "translateY(-20px)" }}
                  alt="dessert"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
              </div>
            }
            {...args}
          >
            <CardMeta
              title="圈圈圆圆圈圈"
              avatar={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#1D2129",
                  }}
                >
                  <Avatar style={{ marginRight: 8 }}>A</Avatar>
                  <Typography>Username</Typography>
                </div>
              }
              description={
                <>
                  圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。
                </>
              }
            />
          </Card>
        </>
        <Card bordered={true} style={{ width: "100%" }}>
          {new Array(7).fill(null).map((_, index) => {
            const hoverable = index % 2 === 0
            return (
              <CardGrid
                key={index}
                hoverable={hoverable}
                style={{ width: "25%" }}
              >
                <Card
                  style={{ width: "100%" }}
                  title="ILLA Card"
                  extra={<Link>More</Link>}
                >
                  {new Array(2).fill(null).map((_, index) => (
                    <p style={{ margin: 0 }} key={index}>
                      {hoverable ? "Card allow to hover" : "Card content"}
                    </p>
                  ))}
                </Card>
              </CardGrid>
            )
          })}
        </Card>
      </Space>
    </>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  title: "Title",
  actions: [
    <span>
      <LikeIcon />
    </span>,
    <span>
      <ShareIcon />
    </span>,
    <span>
      <MoreIcon />
    </span>,
  ],
}
