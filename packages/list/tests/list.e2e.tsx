import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"
import { List, ListItem, ListItemMeta } from "../src"

it("List renders raw.", () => {
  mount(
    <List
      data={[{ title: "Title A" }, { title: "Title B" }, { title: "Title C" }]}
      render={(data, _) => {
        return <div>{data.title}</div>
      }}
      renderRaw
      renderKey={(data, index) => {
        return index.toString()
      }}
    />,
  )
  cy.findByText("Title A").parent().children().should("have.length", 3)
  unmount()
})

it("List renders with scroll event.", () => {
  const onScroll = cy.stub().as("onScroll")
  const onReachBottom = cy.stub().as("onReachBottom")
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
          <ListItem>
            <ListItemMeta title={data.title} />
          </ListItem>
        )
      }}
      renderKey={(data, index) => {
        return index.toString()
      }}
      onReachBottom={onReachBottom}
      onScroll={onScroll}
      height={100}
    />,
  )
  cy.get(".rc-virtual-list-holder").scrollTo("center")
  cy.get("@onScroll").should("be.called")
  cy.get(".rc-virtual-list-holder").scrollTo("bottom")
  cy.get("@onReachBottom").should("be.calledOnce")
  unmount()
})

it("List renders with loader.", () => {
  mount(
    <List
      data={[
        { title: "Title A", description: "Desc A" },
        { title: "Title B", description: "Desc B" },
      ]}
      render={(data, index) => {
        return <span>{data.title}</span>
      }}
      renderKey={(data, index) => {
        return index.toString()
      }}
      hasMore
      loader={<div>Loader</div>}
    />,
  )
  cy.findByText("Loader").should("exist")
  unmount()
})

it("List renders with different size.", () => {
  mount(
    <>
      <List
        data={[{ title: "A" }]}
        render={(data, index) => {
          return (
            <ListItem data-testId="medium-item">
              <ListItemMeta title={data.title} />
            </ListItem>
          )
        }}
        renderKey={(data, index) => {
          return index.toString()
        }}
      />
      <List
        data={[{ title: "B" }]}
        render={(data, index) => {
          return (
            <ListItem data-testId="small-item" size="small">
              <ListItemMeta title={data.title} />
            </ListItem>
          )
        }}
        renderKey={(data, index) => {
          return index.toString()
        }}
        size="small"
      />
    </>,
  )
  cy.findByText("A").should("exist")
  cy.findByText("B").should("exist")
  cy.findByTestId("medium-item").should("have.css", "padding", "12px 16px")
  cy.findByTestId("small-item").should("have.css", "padding", "8px 16px")
  unmount()
})

// cypress not support test real hover state,so only can test render.
it("List renders with hoverable.", () => {
  mount(
    <List
      data={[{ title: "A" }]}
      render={(data, index) => {
        return <span>{data.title}</span>
      }}
      renderKey={(data, index) => {
        return index.toString()
      }}
      hoverable
      size="large"
    />,
  )
  cy.findByText("A").should("exist")
  unmount()
})

it("List renders with end message.", () => {
  mount(
    <List
      data={[
        { title: "Title A", description: "Desc A" },
        { title: "Title B", description: "Desc B" },
      ]}
      render={(data, index) => {
        return <span>{data.title}</span>
      }}
      renderKey={(data, index) => {
        return index.toString()
      }}
      hasMore={false}
      endMessage={<div>End Message</div>}
    />,
  )
  cy.findByText("End Message").should("exist")
  unmount()
})
