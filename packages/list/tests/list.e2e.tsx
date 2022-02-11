import { mount } from "@cypress/react"
import { List, ListItem, ListItemMeta } from "../src"
import { Button } from "@illa-design/button"
import { Image } from "@illa-design/image"

it("renders learn react link", () => {
  mount(
    <List
      data={[
        { title: "Title A", description: "Desc A" },
        { title: "Title B", description: "Desc B" },
        { title: "Title C", description: "Desc C" },
        { title: "Title D", description: "Desc D" },
        { title: "Title E", description: "Desc E" },
      ]}
      render={(data, index) => {
        return (
          <ListItem
            actions={<Button>Actions</Button>}
            extra={<Image src={"https://devbo.cn/logo.svg"} />}
          >
            <ListItemMeta title={data.title} description={data.description} />
          </ListItem>
        )
      }}
      renderKey={(data, index) => {
        return index.toString()
      }}
      header={<span>Header</span>}
      footer={<span>Footer</span>}
    />,
  )
  cy.get("div").contains("Title A")
})
