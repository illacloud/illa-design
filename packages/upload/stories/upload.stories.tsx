import { Meta, Story } from "@storybook/react"
import { Space, PersonIcon, RadioGroup } from "@illa-design/react"
import { Upload, UploadProps } from "../src"
import React from "react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Upload",
  component: Upload,
} as Meta

const Template: Story<UploadProps> = (props) => {
  const [listType, setListType] = React.useState("picture-list")
  const [drag, setDrag] = React.useState(false)

  const handleOnChange = (fileList: UploadItem[], file: UploadItem) => {
    console.log("change: ", fileList, file)
  }
  return (
    <div>
      <Space direction={"vertical"} wrap>
        <RadioGroup
          name="drag"
          value={drag}
          onChange={setDrag}
          style={{ marginLeft: 20, marginBottom: 20 }}
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
        <RadioGroup
          name="listType"
          value={listType}
          onChange={setListType}
          style={{ marginLeft: 20, marginBottom: 20 }}
          options={["text", "picture-list", "picture-card"]}
        ></RadioGroup>
      </Space>
      <div>
        <Upload
          action={"https://www.mocky.io/v2/5cc8019d300000980a055e76"}
          autoUpload={true}
          multiple
          drag={drag}
          // directory={true}
          tip={"测试一下"}
          listType={listType}
          onChange={handleOnChange}
          defaultFileList={[
            // {
            //   uid: "-3",
            //   name: "image.png",
            //   status: "done",
            //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            // },
            {
              uid: "-xxx",
              percent: 50,
              name: "image.png",
              status: "uploading",
              url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            },
            {
              uid: "-5",
              name: "image.png",
              status: "error",
            },
            // {
            //   uid: "-6",
            //   name: "image.png",
            //   status: "init",
            //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            // },
          ]}
        />
      </div>
    </div>
  )
}

export const Basic = Template.bind({})
