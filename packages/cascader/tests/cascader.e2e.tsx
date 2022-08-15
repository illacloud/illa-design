import { Cascader } from "../src"
import { mount, unmount } from "@cypress/react"
import "@testing-library/cypress"

const options = [
  {
    value: "beijing",
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
        disabled: true,
      },
      {
        value: "haidian",
        label: "Haidian",
      },
      {
        value: "fengtai",
        label: "Fengtai",
      },
    ],
  },
  {
    value: "shanghai",
    label: "Shanghai",
    children: [
      {
        value: "huangpu",
        label: "Huangpu",
      },
      {
        value: "pudong",
        label: "Pudong",
      },
    ],
  },
  {
    value: "guangdong",
    label: "Guangdong",
    children: [
      {
        value: "shenzhen",
        label: "Shenzhen",
      },
    ],
  },
]

it("Cascader render correctly", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const clearEvent = cy.stub().as("clearEvent")
  mount(
    <Cascader
      w="200px"
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      onClear={clearEvent}
      allowClear
    />,
  )

  cy.findByPlaceholderText("test").should("exist")
  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("Shanghai").click()
  cy.findByText("Shanghai").click()
  cy.findByText("Huangpu").click()
  cy.findByDisplayValue("Shanghai / Huangpu").should("exist")
  cy.get("@changeEvent").should("be.calledWith", ["shanghai", "huangpu"])

  cy.findByDisplayValue("Shanghai / Huangpu")
    .parent()
    .trigger("hover")
    .then(() => {
      cy.findByTitle("selectRemoveIcon")
        .click()
        .then(() => {
          cy.get("@clearEvent").should("be.calledOnce")
          cy.get("@changeEvent").should("be.calledTwice")
          cy.get("input").should("have.value", "")
        })
    })
  unmount()
})

it("Cascader render with no data", () => {
  mount(<Cascader options={[]} placeholder={"test"} value={undefined} />)

  cy.findByPlaceholderText("test").should("exist")
  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("No data").should("exist")
  unmount()
})

it("Cascader render with disabled", () => {
  mount(<Cascader options={[]} placeholder={"test"} disabled />)

  cy.findByPlaceholderText("test").should("exist")
  cy.findByPlaceholderText("test")
    .parent()
    .parent()
    .should("have.css", "cursor", "not-allowed")
  unmount()
})

it("Cascader rende with expandTrigger hover", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const clearEvent = cy.stub().as("clearEvent")
  mount(
    <Cascader
      w="200px"
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      onClear={clearEvent}
      expandTrigger={"hover"}
      allowClear
    />,
  )

  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("Shanghai")
    .trigger("mouseover")
    .then(() => {
      cy.findByText("Huangpu").click()
      cy.findByDisplayValue("Shanghai / Huangpu").should("exist")
      cy.get("@changeEvent").should("be.calledWith", ["shanghai", "huangpu"])

      cy.findByDisplayValue("Shanghai / Huangpu")
        .parent()
        .trigger("hover")
        .then(() => {
          cy.findByTitle("selectRemoveIcon")
            .click()
            .then(() => {
              cy.get("@clearEvent").should("be.calledOnce")
              cy.get("@changeEvent").should("be.calledTwice")
              cy.get("input").should("have.value", "")
            })
        })
    })
  unmount()
})

it("Cascader render with multiple", () => {
  const changeEvent = cy.stub().as("changeEvent")
  mount(
    <Cascader
      w="200px"
      multiple
      size={"large"}
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      allowClear
    />,
  )

  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("Beijing").click()
  cy.findByText("Haidian").click()
  cy.findByText("Beijing / Haidian").should("exist")
  cy.get("@changeEvent").should("be.calledWith", [["beijing", "haidian"]])

  cy.findByText("Dongcheng").click()
  cy.findByText("Beijing / Dongcheng").should("exist")
  cy.findByText("Fengtai").click()
  cy.findByText("Beijing / Fengtai").should("exist")

  // test clear option
  cy.findByText("Beijing / Haidian")
    .parent()
    .next()
    .click()
    .then(() => {
      cy.get("@changeEvent").should("be.called")
    })
  unmount()
})

it("Cascader render with maxTagCount", () => {
  const changeEvent = cy.stub().as("changeEvent")
  mount(
    <Cascader
      w="200px"
      multiple
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      maxTagCount={1}
    />,
  )

  cy.findByPlaceholderText("test").should("exist")
  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("Shanghai").click()
  cy.findByText("Huangpu").click()
  cy.findByText("Shanghai / Huangpu").should("exist")
  cy.findByText("Pudong").click()
  cy.findByText("+1...").should("exist")
  cy.get("@changeEvent").should("be.calledWith", [["shanghai", "huangpu"]])

  unmount()
})

it("Cascader test onClear should be triggered in multiple mode", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const clearEvent = cy.stub().as("clearEvent")
  mount(
    <Cascader
      w="200px"
      multiple
      defaultValue={[
        ["beijing", "xicheng"],
        ["shanghai", "huangpu"],
      ]}
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      onClear={clearEvent}
      allowClear
    />,
  )

  cy.findByTitle("selectRemoveIcon")
    .click()
    .then(() => {
      cy.get("@clearEvent").should("be.calledOnce")
      cy.get("@changeEvent").should("be.calledOnce")
      cy.findByText("Shanghai / Huangpu").should("not.be.exist")
    })
  cy.get("input").parent().click()
  cy.findByText("Shanghai").click()
  cy.findByText("Huangpu").click()
  cy.findByText("Shanghai / Huangpu").should("exist")
  cy.findByText("Huangpu").click()
  cy.findByText("Shanghai / Huangpu").should("not.be.exist")

  unmount()
})

it("Cascader render with input type", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  const searchEvent = cy.stub().as("searchEvent")
  mount(
    <Cascader
      w="200px"
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      onSearch={searchEvent}
      onVisibleChange={visibleChangeEvent}
      showSearch
      allowClear
    />,
  )
  cy.get("input")
    .type("Shanghai")
    .then(() => {
      cy.get("@searchEvent").should("be.called")
      cy.findByText("Shanghai / Huangpu").should("exist")
      cy.findByText("Shanghai / Huangpu").click()
      cy.get("input").should("have.value", "Shanghai / Huangpu")
      cy.get("@changeEvent").should("be.calledOnce")
      cy.get("@visibleChangeEvent").should("be.calledTwice")
    })
  cy.findByText("Shanghai / Huangpu").click()
  cy.get("input")
    .type("i")
    .then(() => {
      cy.get("@visibleChangeEvent").should("be.calledThrice")
    })
  unmount()
})

it("Cascader render with search popup", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  mount(
    <Cascader
      w="200px"
      multiple
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      onVisibleChange={visibleChangeEvent}
      data-testid={"cascader"}
      showSearch
      allowClear
    />,
  )
  cy.get("input")
    .type("i")
    .then(() => {
      cy.findByText("Beijing / Haidian").should("exist")
      cy.findByText("Beijing / Haidian").click()
      cy.get("@changeEvent").should("be.calledWith", [["beijing", "haidian"]])
      cy.findAllByText("Beijing / Haidian").last().click()
      cy.get("@changeEvent").should("be.calledTwice")
      cy.findByText("Beijing / Xicheng").click()
      cy.get("@changeEvent").should("be.calledTwice")
      cy.get("@visibleChangeEvent").should("be.calledOnce")
    })
  unmount()
})

it("Cascader test with click disabled label", () => {
  const changeEvent = cy.stub().as("changeEvent")
  const visibleChangeEvent = cy.stub().as("visibleChangeEvent")
  mount(
    <Cascader
      w="200px"
      options={options}
      placeholder={"test"}
      onChange={changeEvent}
      onVisibleChange={visibleChangeEvent}
      showSearch={{ retainInputValue: true }}
      allowClear
    />,
  )
  cy.findByPlaceholderText("test").parent().click()
  cy.findByText("Beijing").click()
  cy.findByText("Xicheng").click()
  cy.get("input").should("have.value", "")
  unmount()
})
