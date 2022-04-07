import { Meta, Story } from "@storybook/react"
import { Card, CardGrid, CardProps, Meta as CardMeta } from "../src"
import { Space } from "@illa-design/space"
import { Link } from "@illa-design/link"
import { LikeIcon, MoreIcon, ShareIcon } from "@illa-design/icon"
import { Image } from "@illa-design/image"

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
        <Card
          style={{ width: 360 }}
          cover={
            <Image
              width="100%"
              height="100%"
              src="https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg"
            />
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
                <Image
                  width={"100%"}
                  style={{ transform: "translateY(-20px)" }}
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
              </div>
            }
            description={
              <>
                圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。圈圈圆圆圈圈，天天年年天天。
              </>
            }
          />
        </Card>
        <Card bordered={true} style={{ width: "100%", padding: "20px" }}>
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
