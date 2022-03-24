import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tabs, TabsProps, TabPane } from "@illa-design/tabs"
import { useState } from "react"
import { Paragraph } from "@illa-design/typography"
import { Radio, RadioGroup } from "../../radio/src"
import { ReactNode } from "react"
import { BsPlus } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA DISPLAY/Tabs",
  component: Tabs,
  argTypes: {
    addIcon: {
      control: false,
    },
    deleteIcon: {
      control: false,
    },
    activeKey: {
      control: false,
    },
    animated: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta

let count = 5

const style = { text_align: "center", marginTop: 20 }

const initTabs = [...new Array(count)].map((x, i) => ({
  title: `Tab ${i + 1}`,
  key: `key${i + 1}`,
  content: `${i + 1}`,
}))

const Template: Story<TabsProps> = (props) => {
  const [tabs, setTabs] = useState(initTabs)
  const [activeTab, setActiveTab] = useState("key2")
  const [variant, setType] = useState("line")
  const [size, setSize] = useState("default")
  const handleAddTab = () => {
    const newTab = {
      title: `New Tab${++count}`,
      key: `new key${count}`,
      content: `${count}`,
    }
    setTabs([...tabs, newTab])
    setActiveTab(newTab.key)
  }

  const handleDeleteTab = (key) => {
    const index = tabs.findIndex((x) => x.key === key)
    const newTabs = tabs.slice(0, index).concat(tabs.slice(index + 1))

    if (key === activeTab && index > -1 && newTabs.length) {
      setActiveTab(newTabs[index] ? newTabs[index].key : newTabs[index - 1].key)
    }

    if (index > -1) {
      setTabs(newTabs)
    }
  }

  return (
    <div style={{ width: 300, height: 200 }}>
      <span style={{ marginRight: 20 }}>Size:</span>
      <RadioGroup
        name="size"
        value={size}
        onChange={() => setSize}
        style={{ marginBottom: 24 }}
      >
        <Radio value="mini">mini</Radio>
        <Radio value="small">small</Radio>
        <Radio value="default">default</Radio>
        <Radio value="large">large</Radio>
      </RadioGroup>
      <br />
      <span style={{ marginRight: 20 }}>Type:</span>
      <RadioGroup
        name="type"
        value={variant}
        onChange={() => setType}
        style={{ marginBottom: 40 }}
      >
        <Radio value="line">line</Radio>
        <Radio value="card">card</Radio>
        <Radio value="card-gutter">card-gutter</Radio>
        <Radio value="text">text</Radio>
        <Radio value="rounded">rounded</Radio>
        <Radio value="capsule">capsule</Radio>
      </RadioGroup>
      <Tabs
        editable
        variant={variant}
        size={size}
        activeKey={activeTab}
        onAddTab={handleAddTab}
        onDeleteTab={handleDeleteTab}
        onChange={setActiveTab}
      >
        {tabs.map((x, i) => (
          <TabPane destroyOnHide key={x.key} title={x.title}>
            <Paragraph
              style={style}
            >{`Content of Tab Panel ${x.content}`}</Paragraph>
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export const Basiccc = Template.bind({})
