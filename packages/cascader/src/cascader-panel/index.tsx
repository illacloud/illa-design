import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useReducer,
} from "react"
import isEqual from "react-fast-compare"
import { Option } from "./option"
import { KeyCode, isFunction, isNumber } from "@illa-design/system"
import { CascaderPanelProps, OptionProps } from "../interface"
import { Node, NodeProps } from "../node"
import useRefs from "../hooks"
import { applyOptionStyle, optionListStyle, optionListWrapper } from "../style"

const getLegalActiveNode = (options: any) => {
  for (let index = 0; index < options.length; index++) {
    if (!options[index].disabled) {
      return options[index]
    }
  }
}

const getBaseActiveNode = (currentNode: any) => {
  if (currentNode && currentNode.disabled) {
    let node = currentNode
    while (node.parent) {
      if (node.parent.disabled) {
        node = node.parent
      } else {
        break
      }
    }
    return node
  }
  return currentNode
}

export const getLegalIndex = (currentIndex: number, maxIndex: number) => {
  if (currentIndex < 0) {
    return maxIndex
  }
  if (currentIndex > maxIndex) {
    return 0
  }
  return currentIndex
}

function useForceUpdate() {
  const [, dispatch] = useReducer((v) => v + 1, 0)
  return dispatch
}

export const CascaderPanel = <T extends OptionProps>(
  props: CascaderPanelProps<T>,
) => {
  const [activeOptionList, setActiveOptionList] =
    useRefs<HTMLLIElement | null>()
  const [refWrapper, setRefWrapper] = useRefs<HTMLUListElement | null>()
  const forceUpdate = useForceUpdate()
  const {
    store,
    prefixCls,
    value,
    multiple,
    popupVisible,
    showEmptyChildren,
    loadMore,
    renderEmpty,
    expandTrigger,
    changeOnSelect,
    onDoubleClickOption,
    onChange,
    onEsc,
  } = props

  const [activeNode, setActiveNode] = useState(
    store.findNodeByValue(value && value[value.length - 1]) || null,
  )

  const options = store.getOptions()

  const loadData = async (option: any) => {
    if (!option.isLeaf && isFunction(loadMore) && !option.children) {
      option.setLoading(true)
      forceUpdate()
      try {
        const options = await loadMore(
          option.pathValue,
          option.pathValue.length,
        )
        store.appendOptionChildren(option, options)
        store.setNodeCheckedByValue(value)
      } catch (e) {
        console.error(e)
      }
      option.setLoading(false)
      forceUpdate()
    }
  }

  const onClickOption = async (option: any, isEnterClick = true) => {
    if (!option || option.disabled) {
      return
    }
    setActiveNode(option)
    await loadData(option)
    // 在键盘上下左右键操作时,isEnterClick 是false，不触发onChange
    if (!multiple && isEnterClick) {
      if (changeOnSelect || option.isLeaf) {
        onChange?.([option.pathValue])
      }
    }
  }

  const onMultipleChecked = (option: any, checked: boolean) => {
    // props.value 可能包含不存在对应option的选中值，不应该被清除掉。
    const beforeCheckedNodes = store
      .getCheckedNodes()
      .map((node) => JSON.stringify(node.pathValue))
    const inexistenceValue = (value || []).filter(
      (x) => beforeCheckedNodes.indexOf(JSON.stringify(x)) === -1,
    )
    option.setCheckedState(checked)
    const checkedNodes = store.getCheckedNodes()
    const _value = checkedNodes.map((node) => node.pathValue)
    const newValue = [...inexistenceValue, ..._value]

    // 按照当前props.value的顺序排序
    newValue.sort((a, b) => {
      const aIndex = value?.findIndex((item) => isEqual(item, a))
      const bIndex = value?.findIndex((item) => isEqual(item, b))

      if (aIndex === -1) {
        return 1
      }
      if (bIndex === -1) {
        return -1
      }
      // ?
      if (isNumber(aIndex) && isNumber(bIndex)) {
        return aIndex - bIndex
      }
      // ?
      return 0
    })

    if (option === activeNode) {
      // setActiveNode 不会执行rerender，需要forceupdate
      forceUpdate()
    }

    setActiveNode(option)
    if (!changeOnSelect) {
      // 父子节点关联，选中复选框时执行loadMore，否则直接选中父节点
      loadData(option)
    }
    onChange?.(newValue)
  }

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.stopPropagation()
      // 使用keycode，避免中文输入法输入时，触发enter,space等事件。
      // p.s 中文输入时，keycode 都是229
      const keyCode = e.keyCode || e.which

      let nextActiveNode
      switch (keyCode) {
        case KeyCode.Esc: {
          e.preventDefault()
          onEsc?.()
          break
        }
        case KeyCode.ArrowDown:
        case KeyCode.ArrowUp: {
          if (!activeNode) {
            nextActiveNode = getLegalActiveNode(options)
          } else {
            const baseActiveNode = getBaseActiveNode(activeNode)
            const list =
              (baseActiveNode.parent && baseActiveNode.parent.children) ||
              options
            const diff = keyCode === KeyCode.ArrowDown ? 1 : -1
            let nextIndex = getLegalIndex(
              baseActiveNode._index + diff,
              list.length - 1,
            )
            while (nextIndex !== baseActiveNode._index) {
              nextActiveNode = list[nextIndex]
              if (nextActiveNode.disabled) {
                nextIndex = getLegalIndex(nextIndex + diff, list.length - 1)
              } else {
                break
              }
            }
          }
          onClickOption(nextActiveNode, false)
          e.preventDefault()
          return false
        }
        case KeyCode.ArrowRight: {
          if (activeNode && !activeNode.disabled) {
            const list = activeNode.children || []
            nextActiveNode = list[0] || activeNode
            onClickOption(nextActiveNode, false)
          }
          e.preventDefault()
          return false
        }
        case KeyCode.ArrowLeft: {
          if (activeNode) {
            const baseActiveNode = getBaseActiveNode(activeNode)

            nextActiveNode = baseActiveNode.parent || baseActiveNode
          }
          onClickOption(nextActiveNode, false)
          e.preventDefault()
          return false
        }
        case KeyCode.Enter:
          if (activeNode) {
            if (multiple) {
              onMultipleChecked(activeNode, !activeNode._checked)
            } else {
              onClickOption(activeNode)
            }
          }
          e.preventDefault()
          return false
        default:
          break
      }
    },
    [activeNode],
  )

  const isDidMount = useRef(false)

  useEffect(() => {
    if (isDidMount.current) {
      setActiveNode((activeNode: Node<T> | null) => {
        // store 改变时候，更新下activeNode.如果当前activeNode不存在于store里了，就设置为null
        let newActiveNode

        if (activeNode && activeNode.pathValue && activeNode.pathValue.length) {
          const values = activeNode.pathValue
          let parent = { children: options } as Node<T>
          values.map((value) => {
            const list = parent.children || []
            const item = list.find((x) => x.value === value)
            if (item) {
              parent = item
              newActiveNode = item
            }
          })
        }
        return newActiveNode || null
      })
    } else {
      isDidMount.current = true
    }
  }, [store])

  useEffect(() => {
    if (popupVisible && options.length) {
      const scrollTo = () => {
        activeOptionList.forEach((activeOption: any, i: number) => {
          // activeOption &&
          //   scrollIntoView(activeOption, {
          //     block: "nearest",
          //     boundary: refWrapper[i],
          //   })
        })
      }
      setTimeout(() => {
        scrollTo()
      })
    }
  }, [popupVisible, activeNode])

  useEffect(() => {
    if (popupVisible) {
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.removeEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [popupVisible, handleKeyDown])
  const pathNodes = activeNode ? activeNode.getPathNodes() : []
  const menus = [options]
  pathNodes.forEach((option: Node<T>) => {
    option && option.children && menus.push(option.children)
  })

  return (
    <>
      {menus.map((list, level) => {
        if (list.length === 0 && !showEmptyChildren && level === 0) {
          return renderEmpty?.()
        }
        return list.length === 0 && !showEmptyChildren ? null : (
          <div
            css={optionListWrapper}
            key={level}
            style={{ zIndex: menus.length - level }}
          >
            {list.length === 0 ? (
              renderEmpty && renderEmpty(120)
            ) : (
              <ul
                css={optionListStyle}
                ref={(node) => setRefWrapper(node, level)}
              >
                {list.map((option) => {
                  let isActive = false
                  if (activeNode) {
                    isActive = activeNode.pathValue[level] === option.value
                  }
                  return (
                    <li
                      css={applyOptionStyle()}
                      key={option.value}
                      ref={(ref) => {
                        if (isActive) {
                          setActiveOptionList(ref, level)
                        }
                      }}
                    >
                      <Option
                        prefixCls={prefixCls}
                        multiple={multiple}
                        option={option}
                        // 叶子节点被选中
                        selected={
                          !multiple &&
                          option.isLeaf &&
                          isEqual(value, option.pathValue)
                        }
                        onMouseEnter={() => {
                          if (expandTrigger === "hover") {
                            setActiveNode(option)
                            loadData(option)
                          }
                        }}
                        onClickOption={() => {
                          if (
                            option.isLeaf &&
                            multiple &&
                            !option.disableCheckbox
                          ) {
                            onMultipleChecked(option, !option._checked)
                          } else {
                            onClickOption(option)
                          }
                        }}
                        onMultipleChecked={(checked: boolean) => {
                          onMultipleChecked(option, checked)
                        }}
                        onDoubleClickOption={onDoubleClickOption}
                      />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )
      })}
    </>
  )
}
