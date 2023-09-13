import { Meta, StoryFn } from "@storybook/react"
import { Space, RadioGroup, Upload, UploadProps } from "@illa-design/react"
import { useState } from "react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Upload",
  component: Upload,
} as Meta

const Template: StoryFn<UploadProps> = (props) => {
  const [listType, setListType] = useState("text")
  const [drag, setDrag] = useState(false)

  return (
    <div>
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
              uid: "-1",
              name: "image.png",
              status: "init",
              percent: 50,
            },
            {
              uid: "-2",
              name: "image.png",
              status: "done",
            },
          ]}
        />
      </div>
    </div>
  )
}

export const Basic = Template.bind({})
