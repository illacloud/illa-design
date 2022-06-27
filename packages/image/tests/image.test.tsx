import { Image } from "../src"
import { BsFacebook } from "react-icons/bs"
import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Image renders with default fallback", () => {
  render(<Image data-testid="test-image-render-fallback-default" />)
  expect(
    screen.getByTestId("test-image-render-fallback-default"),
  ).toBeInTheDocument()
})

test("Image renders with fallback src", () => {
  render(
    <Image
      data-testid="test-image-render-fallback-src"
      fallbackSrc={
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      }
    />,
  )
  expect(
    screen.getByTestId("test-image-render-fallback-src"),
  ).toBeInTheDocument()
})

test("Image renders with fallback icon", () => {
  render(
    <Image
      data-testid="test-image-render-fallback-icon"
      fallback={<BsFacebook />}
    />,
  )
  expect(
    screen.getByTestId("test-image-render-fallback-icon"),
  ).toBeInTheDocument()
})

test("Image renders with size", () => {
  render(
    <Image
      height="200px"
      width="200px"
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    />,
  )
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  )
})

test("Image renders with event", () => {
  const errorHandler = jest.fn()
  const loadHandler = jest.fn()
  const { getByRole } = render(
    <Image
      onError={errorHandler}
      onLoad={loadHandler}
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    />,
  )
  fireEvent.load(getByRole("img"))
  expect(loadHandler).toBeCalled()
  fireEvent.error(getByRole("img"))
  expect(errorHandler).toBeCalled()
})
