import { Tree } from "../src"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils"
import { globalColor, illaPrefix } from "@illa-design/theme"
import * as React from "react"
import { TreeNode, NodeInstance } from "@illa-design/tree-common"

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

test("Tree renders correctly", () => {
  render(<Tree placeholder="tree" />)
  expect(screen.getByPlaceholderText("tree")).toBeInTheDocument()
})

test("Tree renders with TreeNode", async () => {
  await act(async () => {
    render(
      <Tree placeholder="tree" treeData={data} size={"large"}>
        <TreeNode key={"node-0-0"} title={"0-0"} checkable={false} />
        <TreeNode key={"node-0-1"} title={"0-1"}>
          <TreeNode key={"node-0-1-0"} title={"0-1-0"} />
          <TreeNode key={"node-0-1-1"} title={"0-1-1"} />
          <TreeNode key={"node-0-1-2"} title={"0-1-2"}>
            <TreeNode key={"node-0-1-2-0"} title={"0-1-2-0"} />
            <TreeNode key={"node-0-1-2-1"} title={"0-1-2-1"} />
          </TreeNode>
        </TreeNode>
        <TreeNode key={"node-0-2"} title={"0-2"} />
      </Tree>,
    )
  })
  expect(screen.getByText("0-1-2-0")).toBeInTheDocument()
})

test("Tree renders with large size", async () => {
  await act(async () => {
    render(<Tree placeholder="tree" treeData={data} size={"large"} />)
  })
  expect(
    screen.getByText("0-0-head").parentElement?.parentElement?.parentElement,
  ).toHaveStyle({
    height: `40px`,
  })
})

test("Tree renders with small size", async () => {
  await act(async () => {
    render(<Tree placeholder="tree" treeData={data} size={"small"} />)
  })
  expect(
    screen.getByText("0-0-head").parentElement?.parentElement?.parentElement,
  ).toHaveStyle({
    height: `24px`,
  })
})

test("Tree renders with blockNode", async () => {
  await act(async () => {
    render(<Tree placeholder="tree" treeData={data} blockNode={true} />)
  })
  expect(screen.getByText("0-0-head").parentElement).toHaveStyle({
    "flex-grow": 1,
  })
})

test("Tree renders with renderTitle", async () => {
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        renderTitle={(nodeProps) => (
          <span data-testid="test-title">{nodeProps.title}</span>
        )}
      />,
    )
  })
  expect(screen.getAllByTestId("test-title").length).not.toBe(0)
})

test("Tree renders with check parent", async () => {
  await act(async () => {
    render(<Tree placeholder="tree" treeData={data} checkable={true} />)
  })
  const nodeArr = screen.getAllByRole("checkbox")
  expect(nodeArr.length).not.toBe(0)
  // check parent
  const target = nodeArr[0]
  await act(async () => {
    fireEvent.click(target)
  })
  expect(target).toBeChecked()
  expect(nodeArr[1]).not.toBeChecked()
  expect(nodeArr[6]).toBeChecked()
})

//checkbox
test("Tree renders with check child", async () => {
  await act(async () => {
    render(<Tree placeholder="tree" treeData={data} checkable={true} />)
  })
  const nodeArr = screen.getAllByRole("checkbox")
  // check child
  const target = nodeArr[7]
  await act(async () => {
    fireEvent.click(target)
  })
  expect(target).toBeChecked()
  expect(nodeArr[6]).toBeChecked()
})

test("Tree renders with checkStrictly", async () => {
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        checkable={true}
        checkStrictly={true}
      />,
    )
  })
  const nodeArr = screen.getAllByRole("checkbox")
  const target = nodeArr[7]
  await act(async () => {
    fireEvent.click(target)
  })
  expect(target).toBeChecked()
  expect(nodeArr[6]).not.toBeChecked()
})

test("Tree renders with defaultCheckedKeys", async () => {
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        defaultCheckedKeys={["0-0-0-0-0", "0-0-0-1-1"]}
        checkable={true}
      />,
    )
  })
  const nodeArr = screen.getAllByRole("checkbox")
  expect(nodeArr[3]).toBeChecked()
  expect(nodeArr[4]).toBeChecked()
  expect(nodeArr[5]).toBeChecked()
  await act(async () => {
    fireEvent.click(nodeArr[3])
  })
  expect(nodeArr[5]).not.toBeChecked()
})

test("Tree renders with control check", async () => {
  let keys = ["0-0-0-0-0", "0-0-0-1-1"]
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        checkedKeys={keys}
        onCheck={(checkedKeys) => {
          keys = checkedKeys
        }}
        checkable={true}
      />,
    )
  })
  const nodeArr = screen.getAllByRole("checkbox")
  expect(nodeArr[4]).toBeChecked()
  expect(nodeArr[5]).toBeChecked()
  fireEvent.click(nodeArr[4])
  expect(keys).toStrictEqual(["0-0-0-1-1"])
})

// expand
test("Tree renders without autoExpandParent ", async () => {
  await act(async () => {
    render(<Tree placeholder="tree" treeData={data} autoExpandParent={false} />)
  })
  expect(screen.queryByText("aoao")).toBeNull()
})

test("Tree renders with defaultExpandedKeys", async () => {
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        defaultExpandedKeys={["0-0", "0-0-0"]}
      />,
    )
  })
  expect(screen.getAllByText("aoao").length).not.toBe(0)
})

test("Tree renders with control expand", async () => {
  let keys = ["0-0", "0-0-0"]
  const expandEvent = jest.fn()
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        defaultExpandedKeys={keys}
        onExpand={(expandedKeys) => {
          keys = expandedKeys
          expandEvent()
        }}
      />,
    )
  })
  await act(async () => {
    const target = screen.getAllByTitle("CaretDownIcon")[1]
    fireEvent.click(target)
  })
  expect(screen.queryByText("aoao")).toBeNull()
  expect(expandEvent).toBeCalled()
})

test("Tree renders with showLine", async () => {
  await act(async () => {
    render(<Tree placeholder="tree" treeData={data} showLine={true} />)
  })

  expect(screen.getAllByTitle("LeafIcon").length).not.toBe(0)
})

// select
test("Tree renders with select", async () => {
  const selectEvent = jest.fn()
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        defaultSelectedKeys={["0-0", "0-0-0-1"]}
        onSelect={selectEvent}
      />,
    )
  })

  expect(screen.getByText("0-0-head").parentNode?.parentNode).toHaveStyle({
    color: ` ${globalColor(`--${illaPrefix}-blue-05`)}`,
  })
  expect(screen.getByText("0-0-0").parentNode?.parentNode).toHaveStyle({
    color: ` ${globalColor(`--${illaPrefix}-gray-05`)}`,
  })
  fireEvent.click(screen.getByText("toutou 01"))
  expect(screen.getByText("toutou 01").parentNode?.parentNode).toHaveStyle({
    color: ` ${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
  expect(screen.getByText("0-0-head").parentNode?.parentNode).toHaveStyle({
    color: ` ${globalColor(`--${illaPrefix}-gray-02`)}`,
  })
  expect(selectEvent).toBeCalled()
})

test("Tree renders with select multiple", async () => {
  const selectEvent = jest.fn()
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        multiple={true}
        defaultSelectedKeys={["0-0", "0-0-0-1"]}
        onSelect={selectEvent}
      />,
    )
  })

  expect(screen.getByText("0-0-head").parentNode?.parentNode).toHaveStyle({
    color: ` ${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
  expect(screen.getByText("0-0-0").parentNode?.parentNode).toHaveStyle({
    color: ` ${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
  fireEvent.click(screen.getByText("0-0-head"))
  expect(screen.getByText("0-0-head").parentNode?.parentNode).toHaveStyle({
    color: ` ${globalColor(`--${illaPrefix}-gray-02`)}`,
  })
  expect(selectEvent).toBeCalled()
})

test("Tree renders with control select", async () => {
  let keys = ["0-0", "0-0-0-0-0"]
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        selectedKeys={keys}
        onSelect={(value) => {
          keys = value
        }}
      />,
    )
  })

  expect(screen.getByText("0-0-head").parentNode).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
  expect(screen.getByText("toutou 01").parentNode).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
})

test("Tree renders with control select", async () => {
  let keys = ["0-0", "0-0-0-0-0"]
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        selectedKeys={keys}
        onSelect={(value) => {
          keys = value
        }}
      />,
    )
  })

  expect(screen.getByText("0-0-head").parentNode).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
  expect(screen.getByText("toutou 01").parentNode).toHaveStyle({
    color: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  })
})

test("Tree renders with loadMore", async () => {
  const callback = jest.fn()
  const loadMore = (node: NodeInstance) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        callback()
        resolve()
      }, 100)
    })
  }

  await act(async () => {
    render(<Tree placeholder="tree" treeData={data} loadMore={loadMore} />)
  })
  const target = screen.getAllByTitle("CaretDownIcon")[2]
  await act(async () => {
    fireEvent.click(target)
  })
  expect(screen.getByTitle("LoadingIcon")).toBeInTheDocument()
  await act(async () => {
    setTimeout(() => {
      expect(callback).toBeCalled()
    }, 500)
  })
})

test("Tree renders with icons", async () => {
  const loadMore = (node: NodeInstance) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 100)
    })
  }
  await act(async () => {
    render(
      <Tree
        placeholder="tree"
        treeData={data}
        loadMore={loadMore}
        draggable={true}
        loadingIcon={<span data-testid={"loadingIcon"}>loadingIcon</span>}
        switcherIcon={<span data-testid={"switcherIcon"}>switcherIcon</span>}
        dragIcon={<span data-testid={"dragIcon"}>dragIcon</span>}
      />,
    )
  })
  expect(screen.getAllByTestId("dragIcon").length).not.toBe(0)
  expect(screen.getAllByTestId("switcherIcon").length).not.toBe(0)
  const target = screen.getAllByTestId("switcherIcon")[2]

  await act(async () => {
    fireEvent.click(target)
  })
  expect(screen.getByTestId("loadingIcon")).toBeInTheDocument()
})
