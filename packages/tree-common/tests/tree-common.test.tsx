import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils"
import { globalColor, illaPrefix } from "@illa-design/theme"
import * as React from "react"
import {
  TreeList,
  loopNodeWithState,
  updateKeys,
  checkChildrenChecked,
  checkParentChecked,
} from "../src"

const data = [
  {
    title: "0-0-head",
    key: "0-0",
    children: [
      {
        title: "0-0-0 ",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "aoao",
            key: "0-0-0-0",
          },
          {
            title: "aoao",
            key: "0-0-0-1",
            children: [
              {
                title: "toutou 01",
                key: "0-0-0-0-0",
                disabled: true,
              },
              {
                title: "toutou 02",
                key: "0-0-0-1-1",
              },
            ],
          },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          {
            title: <span>xixi</span>,
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
  },
]

const listData = loopNodeWithState(data, ["0-0", "0-0-0", "0-0-0-1"])

test("TreeList renders correctly", () => {
  render(<TreeList listData={listData} placeholder="tree" />)
  expect(screen.getByText("0-0-head")).toBeInTheDocument()
})

test("TreeList renders with large size", async () => {
  await act(async () => {
    render(<TreeList listData={listData} size="large" />)
  })
  expect(
    screen.getByText("0-0-head").parentElement?.parentElement?.parentElement,
  ).toHaveStyle({
    minHeight: `40px`,
  })
})

test("TreeList renders with small size", async () => {
  await act(async () => {
    render(<TreeList listData={listData} size="small" />)
  })
  expect(
    screen.getByText("0-0-head").parentElement?.parentElement?.parentElement,
  ).toHaveStyle({
    minHeight: `24px`,
  })
})

test("TreeList renders with blockNode", async () => {
  await act(async () => {
    render(<TreeList listData={listData} blockNode />)
  })
  expect(screen.getByText("0-0-head").parentElement).toHaveStyle({
    "flex-grow": 1,
  })
})

test("TreeList renders with renderTitle", async () => {
  await act(async () => {
    render(
      <TreeList
        listData={listData}
        renderTitle={(nodeProps) => (
          <span data-testid="test-title">{nodeProps.title}</span>
        )}
      />,
    )
  })
  expect(screen.getAllByTestId("test-title").length).not.toBe(0)
})

test("TreeList renders with showLine", async () => {
  await act(async () => {
    render(<TreeList listData={listData} showLine />)
  })

  expect(screen.getAllByTitle("LeafIcon").length).not.toBe(0)
})

// select
test("TreeNode renders with selected", async () => {
  const selectEvent = jest.fn()
  const selectKey = ["0-0", "0-0-0-1"]
  const _listData = loopNodeWithState(
    data,
    ["0-0", "0-0-0", "0-0-0-1"],
    selectKey,
  )
  await act(async () => {
    render(<TreeList listData={_listData} handleSelect={selectEvent} />)
  })
  expect(screen.getByText("0-0-head").parentNode?.parentNode).toHaveStyle({
    color: ` ${globalColor(`--${illaPrefix}-blue-05`)}`,
  })

  await act(async () => {
    fireEvent.click(screen.getByText("toutou 01"))
    fireEvent.click(screen.getByText("toutou 02"))
  })
  expect(selectEvent).toBeCalled()
})

test("TreeList renders with icons", async () => {
  const loadMoreKeys = new Set(["0-0", "0-0-0-1"])
  await act(async () => {
    render(
      <TreeList
        listData={listData}
        loadingMoreKeys={loadMoreKeys}
        draggable
        loadingIcon={<span data-testid="loadingIcon">loadingIcon</span>}
        switcherIcon={<span data-testid="switcherIcon">switcherIcon</span>}
        dragIcon={<span data-testid="dragIcon">dragIcon</span>}
      />,
    )
  })
  expect(screen.getAllByTestId("dragIcon").length).not.toBe(0)
  expect(screen.getAllByTestId("switcherIcon").length).not.toBe(0)
  expect(screen.getAllByTestId("loadingIcon").length).not.toBe(0)
})

test("TreeList renders with loadMore", async () => {
  const callback = jest.fn()
  const loadMore = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        callback()
        resolve()
      }, 100)
    })
  }
  const expandCallback = jest.fn()

  const handleLoadMore = async () => {
    await loadMore()
  }
  await act(async () => {
    render(
      <TreeList
        handleLoadMore={handleLoadMore}
        listData={listData}
        handleExpand={expandCallback}
      />,
    )
  })
  const loadMoreButton = screen.getAllByTitle("CaretDownIcon")[2]
  await act(async () => {
    fireEvent.click(loadMoreButton)
  })
  await act(async () => {
    setTimeout(() => {
      expect(callback).toBeCalled()
    }, 500)
  })
  const expandButton = screen.getAllByTitle("CaretDownIcon")[0]
  await act(async () => {
    fireEvent.click(expandButton)
  })
  expect(expandCallback).toBeCalled()
})

test("loopNodeWithState is correctly", () => {
  const keys = ["0-0"]
  const halfCheck = ["0-1"]
  const expandListData = loopNodeWithState(
    data,
    keys,
    keys,
    new Set(keys),
    new Set(halfCheck),
  )
  expect(expandListData.length).toBe(9)
  expect(expandListData[0].expanding).toBe(true)
  expect(expandListData[0]._checked).toBe(true)
  expect(expandListData[0]._isSelected).toBe(true)
  expect(expandListData[8]._halfChecked).toBe(true)
})

test("updateKeys is correctly", () => {
  const keys = ["0-0"]
  const res = updateKeys(keys, "0-0-1", true)
  expect(res.length).toBe(2)
  const res02 = updateKeys(keys, "0-0-1", false)
  expect(res02[0]).toBe("0-0-1")
  const res03 = updateKeys(keys, "0-0", false)
  expect(res03.length).toBe(0)
})

test("checkParentChecked is correctly", () => {
  const _data = [
    {
      title: "toutou 01",
      key: "0-0-0-0-0",
      children: [
        {
          title: "leaf-1",
          key: "0-0-0-0-0-0",
        },
        {
          title: "leaf-2",
          key: "0-0-0-0-0-1",
        },
      ],
    },
    {
      title: "toutou 02",
      key: "0-0-0-1-1",
    },
  ]
  const _listData = loopNodeWithState(_data)
  const checkedKeys = updateKeys([], "0-0-0-0-0", true)
  const res = checkChildrenChecked(
    "0-0-0-0-0",
    _listData,
    new Set<string>(checkedKeys),
  )
  expect(res?.size).toBe(3)
  if (res) {
    const halfKeys = checkParentChecked(res, _listData)
    expect(halfKeys?.size).toBe(1)
    const checkedKeys02 = updateKeys(Array.from(res), "0-0-0-0-0", true)
    const res02 = checkChildrenChecked(
      "0-0-0-0-0",
      _listData,
      new Set<string>(checkedKeys02),
    )
    expect(res02?.size).toBe(0)
  }
})

test("TreeList renders with builder mode style", () => {
  const _listData = loopNodeWithState(
    data,
    ["0-0", "0-0-0", "0-0-0-1", "0-0-1"],
    ["0-0"],
  )
  render(<TreeList listData={_listData} _mode="builder" />)
  expect(
    screen.getByText("0-0-0").parentElement?.parentElement?.parentElement,
  ).toMatchSnapshot()
  expect(
    screen.getByText("xixi").parentElement?.parentElement?.parentElement
      ?.parentElement,
  ).toMatchSnapshot()
})
