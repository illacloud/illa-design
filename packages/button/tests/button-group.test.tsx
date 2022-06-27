import { Button, ButtonGroup } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BsFacebook } from "react-icons/bs"

test("Button Group renders attached with square shape", () => {
  render(
    <ButtonGroup data-testid="test-button-group" attached={true}>
      <Button>Hello</Button>
      <Button leftIcon={<BsFacebook />}>Hello</Button>
      <Button>Hello</Button>
      <Button leftIcon={<BsFacebook />} variant="outline">
        Hello
      </Button>
      <Button loading>Hello</Button>
      <Button loading loadingText="Loading">
        Hello
      </Button>
      <Button loading />
      <Button disabled>Text</Button>
    </ButtonGroup>,
  )
  expect(screen.getByTestId("test-button-group")).toMatchSnapshot()
})

test("Button Group renders attached with round shape", () => {
  render(
    <ButtonGroup data-testid="test-button-group" attached={true} shape="round">
      <Button>Hello</Button>
      <Button leftIcon={<BsFacebook />}>Hello</Button>
      <Button>Hello</Button>
      <Button leftIcon={<BsFacebook />} variant="outline">
        Hello
      </Button>
      <Button loading>Hello</Button>
      <Button loading loadingText="Loading">
        Hello
      </Button>
      <Button loading />
      <Button disabled>Text</Button>
    </ButtonGroup>,
  )
  expect(screen.getByTestId("test-button-group")).toMatchSnapshot()
})

test("Button Group renders with spacing", () => {
  render(
    <ButtonGroup data-testid="test-button-group" spacing="12px">
      <Button>Hello</Button>
      <Button leftIcon={<BsFacebook />}>Hello</Button>
      <Button>Hello</Button>
      <Button leftIcon={<BsFacebook />} variant="outline">
        Hello
      </Button>
      <Button loading>Hello</Button>
      <Button loading loadingText="Loading">
        Hello
      </Button>
      <Button loading />
      <Button disabled>Text</Button>
    </ButtonGroup>,
  )
  expect(screen.getByTestId("test-button-group")).toMatchSnapshot()
})
