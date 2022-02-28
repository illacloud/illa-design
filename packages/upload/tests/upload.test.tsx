import { Upload } from "../src"
import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { sendUploadRequest } from "../src"

test("Upload render correctly", () => {
  render(<Upload placeholder={"upload"} />)
  expect(screen.getByPlaceholderText("upload")).toBeInTheDocument()
  expect(screen.getByText("Upload")).toBeInTheDocument()
})

test("Upload render correctly with drag", () => {
  render(<Upload drag={true} placeholder={"upload"} />)
  expect(screen.getByText("Drag and drop the file")).toBeInTheDocument()
})

test("Upload render correctly with pictureUpload", () => {
  render(<Upload pictureUpload={true} placeholder={"upload"} />)
  expect(screen.getByText("Upload")).toBeInTheDocument()
  expect(screen.getByText("Upload").parentNode).toHaveStyle({
    height: "100px",
    width: "100px",
  })
})

test("Upload render correctly without autoUpload", () => {
  render(<Upload autoUpload={false} placeholder={"upload"} />)
  expect(screen.getByText("Select File")).toBeInTheDocument()
  expect(screen.getByText("Upload File")).toBeInTheDocument()
})

test("Upload render correctly with limit is 2 and onExceedLimit", async () => {
  const exceedLimitEvent = jest.fn()
  render(
    <Upload
      multiple={true}
      limit={2}
      onExceedLimit={exceedLimitEvent}
      placeholder={"upload"}
    />,
  )
  const file1 = new File(["(⌐□_□)"], "test01.png", { type: "image/png" })
  const file2 = new File(["(⌐□_□)"], "test02.png", { type: "image/png" })
  const inputDom = screen.getByPlaceholderText("upload")
  await act(async () => {
    userEvent.upload(inputDom, [file1, file2])
  })

  expect(screen.getByText("test01.png")).toBeInTheDocument()
  expect(screen.getByText("test02.png")).toBeInTheDocument()
  const file3 = new File(["(⌐□_□)"], "test03.png", { type: "image/png" })

  await act(async () => {
    userEvent.upload(inputDom, file3)
  })

  // expect(exceedLimitEvent).toBeCalled()
})

test("Upload render correctly with upload file ", async () => {
  const changeEvent = jest.fn()
  render(<Upload action={"/"} onChange={changeEvent} placeholder={"upload"} />)
  const inputDom = screen.getByPlaceholderText("upload")
  const file = new File(["(⌐□_□)"], "test.png", { type: "image/png" })
  await act(async () => {
    userEvent.upload(inputDom, file)
  })
  expect(changeEvent).toBeCalled()
  expect(screen.getByText("test.png")).toBeInTheDocument()
  await act(async () => {
    fireEvent.click(screen.getByTitle("DeleteIcon"))
  })
  expect(screen.queryByText("test.png")).toBeNull()
})

test("Upload render correctly with request ", async () => {
  const response = jest.mock("../src/request.ts")
})
