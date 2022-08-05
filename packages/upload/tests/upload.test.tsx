import { Upload, UploadItem } from "../src"
import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { globalColor, illaPrefix } from "@illa-design/theme"
import sinon from "sinon"
import Mock = jest.Mock

describe("Upload", () => {
  let XHR: any
  let requests: any[] = []
  beforeEach(() => {
    XHR = sinon.useFakeXMLHttpRequest()
    XHR.onCreate = function (xhr: any) {
      requests.push(xhr)
    }
  })

  window.URL.createObjectURL = jest.fn()

  afterEach(() => {
    ;(window.URL.createObjectURL as Mock).mockReset()
    XHR.restore()
    requests = []
  })

  test("Upload renders correctly", () => {
    render(<Upload placeholder={"upload"} />)
    fireEvent.click(screen.getByText("Upload"))
    expect(screen.getByPlaceholderText("upload")).toBeInTheDocument()
    expect(screen.getByText("Upload")).toBeInTheDocument()
  })

  test("Upload renders correctly with request success ", async () => {
    let files: UploadItem[] = []
    let curFile: UploadItem | undefined
    render(
      <Upload
        action={"/"}
        withCredentials={true}
        beforeUpload={() => true}
        headers={{ secChUaArch: "arm" }}
        onChange={(fileList, file) => {
          files = fileList
          curFile = file
        }}
        name={() => "test"}
        data={{ test: "test" }}
        placeholder={"upload"}
      />,
    )
    const inputDom = screen.getByPlaceholderText("upload")
    const file = new File(["(⌐□_□)"], "test.png", { type: "image/png" })
    await act(async () => {
      userEvent.upload(inputDom, file)
    })

    await act(async () => {
      requests[0].respond(200, {}, JSON.stringify({}))
    })
    await setTimeout(() => {}, 100)
    expect(curFile && curFile?.status == "done").toBe(true)
    requests.pop()
  })

  test("Upload renders correctly with request fail ", async () => {
    let files: UploadItem[] = []
    let curFile: UploadItem | undefined
    const retryEvent = jest.fn()
    render(
      <Upload
        action={"/"}
        onChange={(fileList, file) => {
          files = fileList
          curFile = file
        }}
        onReupload={retryEvent}
        placeholder={"upload"}
      />,
    )
    const inputDom = screen.getByPlaceholderText("upload")
    const file = new File(["(⌐□_□)"], "test.png", { type: "image/png" })
    await act(async () => {
      userEvent.upload(inputDom, file)
    })
    await act(async () => {
      requests[0].respond(403, null, null)
    })
    await setTimeout(() => {}, 100)
    expect(curFile && curFile?.status == "error").toBe(true)
    expect(screen.getByText("test.png")).toHaveStyle({
      color: `${globalColor(`--${illaPrefix}-red-03`)}`,
    })
    const retryDom = screen.getByText("Click to retry")
    fireEvent.click(retryDom)
    expect(retryEvent).toBeCalled()
    requests.pop()
    requests.pop()
  })

  test("Upload renders correctly with drag", () => {
    render(<Upload drag={true} placeholder={"upload"} />)
    expect(screen.getByText("Drag and drop the file")).toBeInTheDocument()
    fireEvent.click(screen.getByText("Drag and drop the file"))
  })

  test("Upload renders correctly with pictureUpload", () => {
    render(<Upload pictureUpload={true} placeholder={"upload"} />)
    expect(screen.getByText("Upload")).toBeInTheDocument()
    expect(screen.getByText("Upload").parentNode).toHaveStyle({
      height: "100px",
      width: "100px",
    })
    fireEvent.click(screen.getByText("Upload"))
  })

  test("Upload renders correctly without autoUpload", () => {
    render(<Upload autoUpload={false} placeholder={"upload"} />)
    const selectButton = screen.getByText("Select File")
    expect(selectButton).toBeInTheDocument()
    fireEvent.click(selectButton)
    const uploadButton = screen.getByText("Upload File")
    expect(uploadButton).toBeInTheDocument()
    fireEvent.click(uploadButton)
  })

  test("Upload renders correctly with limit is 2 and onExceedLimit", async () => {
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

    expect(exceedLimitEvent).toBeCalled()
  })

  test("Upload renders correctly with upload file ", async () => {
    const changeEvent = jest.fn()
    const onRemoveEvent = jest.fn()
    let curFile: UploadItem | undefined
    render(
      <Upload
        action={"/"}
        onChange={(fileList, file) => {
          changeEvent()
          curFile = file
        }}
        onRemove={onRemoveEvent}
        placeholder={"upload"}
      />,
    )
    const inputDom = screen.getByPlaceholderText("upload")
    const file = new File(["(⌐□_□)"], "test.png", { type: "image/png" })
    await act(async () => {
      userEvent.upload(inputDom, file)
    })
    expect(changeEvent).toBeCalled()
    expect(curFile && curFile.status == "init").toBe(true)

    expect(screen.getByText("test.png")).toBeInTheDocument()
    await act(async () => {
      fireEvent.click(screen.getByTitle("DeleteIcon"))
    })
    expect(onRemoveEvent).toBeCalled()
  })

  test('Upload renders correctly with accept is "image/*"', async () => {
    render(<Upload action={"/"} placeholder={"upload"} accept={"image/*"} />)
    const inputDom = screen.getByPlaceholderText("upload")
    const file = new File(["(⌐□_□)"], "test01.png", { type: "image/png" })
    await act(async () => {
      userEvent.upload(inputDom, file)
    })
    expect(screen.queryByText("test01.png")).toBeInTheDocument()
    const file2 = new File(["(⌐□_□)"], "test.txt", { type: "image/" })
    await act(async () => {
      userEvent.upload(inputDom, file2)
    })
    expect(screen.queryByText("test02.txt")).toBeNull()
  })

  test('Upload renders correctly with accept is ".jpg, .jpeg, .png"', async () => {
    render(
      <Upload
        action={"/"}
        placeholder={"upload"}
        accept={".jpg, .jpeg, .png"}
      />,
    )
    const inputDom = screen.getByPlaceholderText("upload")
    const file = new File(["(⌐□_□)"], "test01.png", { type: "image/png" })
    await act(async () => {
      userEvent.upload(inputDom, file)
    })
    expect(screen.queryByText("test01.png")).toBeInTheDocument()
    const file2 = new File(["(⌐□_□)"], "test.txt")
    await act(async () => {
      userEvent.upload(inputDom, file2)
    })
    expect(screen.queryByText("test.txt")).toBeNull()
  })

  test('Upload renders correctly with accept is ".png"', async () => {
    render(<Upload action={"/"} placeholder={"upload"} accept={".png"} />)
    const inputDom = screen.getByPlaceholderText("upload")
    const file = new File(["(⌐□_□)"], "test01.png")
    await act(async () => {
      userEvent.upload(inputDom, file)
    })
    expect(screen.queryByText("test01.png")).toBeInTheDocument()
  })

  test('Upload renders correctly with accept is "image/jpeg"', async () => {
    render(<Upload action={"/"} placeholder={"upload"} accept={"image/jpeg"} />)
    const inputDom = screen.getByPlaceholderText("upload")
    const file = new File(["(⌐□_□)"], "test01.jpeg", { type: "image/jpeg" })
    await act(async () => {
      userEvent.upload(inputDom, file)
    })
    expect(screen.queryByText("test01.jpeg")).toBeInTheDocument()
  })

  test('Upload renders correctly with listType is "picture-list"', async () => {
    const retryEvent = jest.fn()
    render(
      <Upload
        action={"/aaa"}
        onReupload={retryEvent}
        listType={"picture-list"}
        placeholder={"upload"}
      />,
    )
    const inputDom = screen.getByPlaceholderText("upload")
    const file = new File(["(⌐□_□)"], "test.png", { type: "image/png" })
    await act(async () => {
      userEvent.upload(inputDom, file)
    })
    await act(async () => {
      requests[0].respond(403, null, null)
    })
    await setTimeout(() => {}, 100)
    const retryDom = screen.getByText("Click to retry")
    fireEvent.click(retryDom)
    expect(retryEvent).toBeCalled()
    requests.pop()
  })

  test("Upload renders correctly with tip", async () => {
    render(<Upload drag={true} tip={"just a tip"} placeholder={"upload"} />)
    expect(screen.getByText("just a tip")).toBeInTheDocument()
  })

  test("Upload renders correctly with all file type", async () => {
    render(
      <Upload
        action={"/"}
        placeholder={"upload"}
        directory={true}
        multiple={true}
      />,
    )
    const inputDom = screen.getByPlaceholderText("upload")
    const files = [
      new File(["(⌐□_□)"], "test.mp4"),
      new File(["(⌐□_□)"], "test.mp3"),
      new File(["(⌐□_□)"], "test.pdf"),
      new File(["(⌐□_□)"], "test.ppt"),
      new File(["(⌐□_□)"], "test.xls"),
      new File(["(⌐□_□)"], "test.wps"),
      new File(["(⌐□_□)"], "test.xls"),
      new File(["(⌐□_□)"], "test.word"),
      new File(["(⌐□_□)"], "test.txt"),
    ]
    await act(async () => {
      userEvent.upload(inputDom, files)
    })
    expect(screen.getByText("test.mp4")).toBeInTheDocument()
  })

  test("Upload renders with disable", () => {
    render(
      <Upload pictureUpload={true} disabled={true} placeholder={"upload"} />,
    )
    expect(screen.getByPlaceholderText("upload")).toBeInTheDocument()
    expect(screen.getByText("Upload")).toHaveStyle({
      "background-color": "${globalColor(`--${illaPrefix}-grayBlue-09`)}",
    })
  })

  test("Upload renders with fileList", () => {
    const file = new File(["(⌐□_□)"], "test.xls")
    render(
      <Upload
        fileList={[
          {
            name: "test01.xls",
            originFile: file,
            uid: "000",
            percent: 100,
            status: "done",
          },
          {
            name: "test02.xls",
            originFile: file,
            percent: 100,
            status: "done",
          },
        ]}
        placeholder={"upload"}
      />,
    )

    expect(screen.getByText("test01.xls")).toBeInTheDocument()
    expect(screen.getByText("test02.xls")).toBeInTheDocument()
  })

  test("Upload renders with customRequest", async () => {
    const customEvent = jest.fn()
    const file = new File(["(⌐□_□)"], "test.xls")
    render(<Upload customRequest={customEvent} placeholder={"upload"} />)
    const inputDom = screen.getByPlaceholderText("upload")
    await act(async () => {
      userEvent.upload(inputDom, file)
    })
    expect(customEvent).toBeCalled()
  })
})
