import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { List, ListItem, ListItemMeta } from "../src"
import { Button } from "@illa-design/button"
import { Image } from "@illa-design/image"

test("List renders header and footer.", () => {
  render(
    <List
      data-testid="test-list"
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
  expect(screen.getByText("Header")).toBeInTheDocument()
  expect(screen.getByText("Footer")).toBeInTheDocument()
})

test("List renders without border and split", () => {
  render(
    <List
      data-testid="test-list"
      data={[
        { title: "Title A", description: "Desc A" },
        { title: "Title A", description: "Desc A" },
      ]}
      render={(data) => {
        return (
          <ListItem>
            <ListItemMeta title={data.title} description={data.description} />
          </ListItem>
        )
      }}
      renderKey={(data, index) => {
        return index.toString()
      }}
    />,
  )
  expect(screen.getByTestId("test-list")).toMatchSnapshot()
})
