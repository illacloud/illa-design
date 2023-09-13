import { Meta, StoryFn } from "@storybook/react"
import {
  Cascader,
  CascaderOptionObject,
  CascaderProps,
} from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Cascader",
  component: Cascader,
} as Meta

const options: CascaderOptionObject[] = [
  {
    value: "beijing",
    label: "Beijing",
    children: [
      {
        value: "Beijing",
        label: "Beijing",
        children: [
          {
            value: "chaoyang",
            label: "Chaoyang",
            children: [
              {
                value: "datunli",
                label: "Datunli",
              },
            ],
          },
          {
            value: "dongcheng",
            label: "Dongcheng",
          },
          {
            value: "xicheng",
            label: "Xicheng",
          },
          {
            value: "haidian",
            label: "Haidian",
          },
        ],
      },
    ],
  },
  {
    value: "shanghai",
    label: "Shanghai",
    children: [
      {
        value: "shanghaishi",
        label: "Shanghai",
        children: [
          {
            value: "huangpu",
            label: "Huangpu",
          },
        ],
      },
    ],
  },
]

export const Basic: StoryFn<CascaderProps> = (args) => (
  <div>
    <Cascader
      options={undefined}
      allowClear={true}
      {...args}
      value={["a", "1"]}
    />
    <Cascader
      style={{ marginTop: "20px" }}
      allowClear={true}
      filterOption={true}
      options={options}
      showSearch
      {...args}
    />
    <Cascader
      multiple
      style={{ marginTop: "20px" }}
      options={options}
      allowClear={true}
      {...args}
    />
    <Cascader
      multiple
      style={{ marginTop: "20px" }}
      allowClear={true}
      filterOption={true}
      options={options}
      showSearch
      {...args}
    />
  </div>
)
