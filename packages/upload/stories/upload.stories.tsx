import { Meta, Story } from "@storybook/react"
import { Space, PersonIcon, RadioGroup } from "@illa-design/react"
import { Upload, UploadProps, UploadItem } from "../src"
import React from "react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Upload",
  component: Upload,
} as Meta

const Template: Story<UploadProps> = (props) => {
  const [listType, setListType] = React.useState("picture-list")
  const [drag, setDrag] = React.useState(false)

  return (
    <div style={{ width: "500px" }}>
      <Space direction={"vertical"} wrap>
        <div>
          Drag:
          <RadioGroup
            name="drag"
            value={drag}
            onChange={setDrag}
            style={{ marginLeft: 20 }}
            options={[
              {
                label: "true",
                value: true,
              },
              {
                label: "false",
                value: false,
              },
            ]}
          ></RadioGroup>
        </div>
        <div>
          ListType:
          <RadioGroup
            name="listType"
            value={listType}
            onChange={setListType}
            style={{ marginLeft: 20 }}
            options={["text", "picture-list", "picture-card"]}
          ></RadioGroup>
        </div>
      </Space>
      <div style={{ marginTop: "50px" }}>
        <Upload
          action="/"
          autoUpload={true}
          multiple
          drag={drag}
          listType={listType}
          defaultFileList={[
            {
              uid: "-5",
              name: "image.png",
              status: "error",
            },
            {
              uid: "-3",
              name: "image.png",
              status: "uploading",
            },
            {
              uid: "-1",
              name: "image.png",
              status: "init",
            },
          ]}
        />
      </div>
    </div>
  )
}

export const Basic = Template.bind({})
