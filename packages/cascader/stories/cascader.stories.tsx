import { Meta, StoryFn } from "@storybook/react"
import { Cascader, CascaderOptionObject, CascaderProps } from "../src"
import React from "react"

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
      options={[
        {
          value: "media_source_1",
          label: "Media Source 1",
          children: [
            {
              value: "campaign_1-1",
              label: "campaign 1-1",
            },
            {
              value: "campaign_1-2",
              label: "campaign 1-2",
            },
            {
              value: "campaign_1-3",
              label: "campaign 1-3",
            },
          ],
        },
        {
          value: "media_source_2",
          label: "Media Source 2",
          children: [
            {
              value: "campaign_2-1",
              label: "campaign 2-1",
            },
            {
              value: "campaign_2-2",
              label: "campaign 2-2",
            },
            {
              value: "campaign_2-3",
              label: "campaign 2-3",
            },
          ],
        },
      ]}
      allowClear={true}
      {...args}
      value={undefined}
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
