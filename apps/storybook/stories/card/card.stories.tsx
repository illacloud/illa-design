import { Meta, StoryFn } from "@storybook/react"
import {
  Button,
  Image,
  LikeOutlineIcon,
  Link,
  MoreIcon,
  Space,
  StartOutlineIcon,
  Card,
  CardMeta,
  CardProps,
} from "@illa-design/react"

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

const Template: StoryFn<CardProps> = (args) => {
  return (
    <Space size="large" direction="vertical">
      <Card style={{ width: 360 }} extra={<Link>More</Link>} {...args}>
        France is a land, the British are a nation, and America is the passion
        in our hearts.People all over the world carrying a Santa Claus came to
        the United States to chase their ideas of American dreams, but in the
        end ,there is nothing more than the pursuit of more money, and they
        slowly get lost in this economically prosperous but utilitarian society.
        So, sad stories undoubtedly happen in the most brilliant era
      </Card>
      <Card style={{ width: 360 }} {...args} title={""}>
        Hello world!
      </Card>
      <CardMeta
        style={{ width: 360 }}
        cover={
          <Image
            width="100%"
            radius="0"
            height="100%"
            src="https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg"
          />
        }
        title="France is a land"
        actionList={[
          <span key="like">
            <LikeOutlineIcon />
          </span>,
          <span key="share">
            <StartOutlineIcon />
          </span>,
          <span key="more">
            <MoreIcon />
          </span>,
        ]}
        avatar={<Button>123</Button>}
        nickname="illa"
        description={<>France is a land</>}
        {...args}
      />
    </Space>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  title: "Title",
}
