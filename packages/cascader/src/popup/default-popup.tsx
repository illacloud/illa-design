import { useEffect, useState } from "react"
import isEqual from "react-fast-compare"
import { isNumber } from "@illa-design/system"
import { LoadingIcon, NextIcon } from "@illa-design/icon"
import { Checkbox } from "@illa-design/checkbox"
import { CascaderPanelProps, OptionProps } from "../interface"
import { Node } from "../node"
import useRefs, { useForceUpdate, useUpdate } from "../hooks"
import {
  applyOptionStyle,
  flexCenterStyle,
  optionLabelStyle,
  optionListStyle,
  optionListWrapper,
  textMargin,
} from "./style"
import { Empty } from "@illa-design/empty"
import { motion } from "framer-motion"
import { applyBoxStyle } from "@illa-design/theme"

export const DefaultPopup = <T extends OptionProps>(
  props: CascaderPanelProps<T>,
) => {
  const [activeOptionList, setActiveOptionList] =
    useRefs<HTMLLIElement | null>()
  const [refWrapper, setRefWrapper] = useRefs<HTMLUListElement | null>()
  const forceUpdate = useForceUpdate()
  const {
    store,
    value,
    multiple,
    popupVisible,
    expandTrigger,
    onDoubleClickOption,
    onChange,
  } = props

  const [activeNode, setActiveNode] = useState(
    store.findNodeByValue(value && value[value.length - 1]) || null,
  )

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (popupVisible) {
      setAnimate(true)
    }
  }, [popupVisible])

  const options = store.getOptions()

  const onClickOption = async (option: Node<T>) => {
    if (!option || option.disabled) {
      return
    }
    setActiveNode(option)
    if (!multiple && option.isLeaf) {
      onChange?.([option.pathValue])
    }
  }

  const onMultipleChecked = (option: Node<T>, checked: boolean) => {
    // props.value may contain selected values for which there is no corresponding option
    const beforeCheckedNodes = store
      .getCheckedNodes()
      .map((node) => JSON.stringify(node.pathValue))
    const inexistenceValue = (value || [])?.filter(
      (x) => beforeCheckedNodes.indexOf(JSON.stringify(x)) === -1,
    )
    option.setCheckedState(checked)
    const checkedNodes = store.getCheckedNodes()
    const _value = checkedNodes.map((node) => node.pathValue)
    const newValue = [...inexistenceValue, ..._value]

    newValue.sort((a, b) => {
      const aIndex = value?.findIndex((item) => isEqual(item, a))
      const bIndex = value?.findIndex((item) => isEqual(item, b))

      if (aIndex === -1) {
        return 1
      }
      if (bIndex === -1) {
        return -1
      }
      if (isNumber(aIndex) && isNumber(bIndex)) {
        return aIndex - bIndex
      }
      return 0
    })

    if (option === activeNode) {
      // setActiveNode will not execute rerender
      forceUpdate()
    }

    setActiveNode(option)
    onChange?.(newValue)
  }

  useUpdate(() => {
    setActiveNode((activeNode: Node<T> | null) => {
      let newActiveNode

      if (activeNode?.pathValue?.length) {
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
  }, [store])

  useEffect(() => {
    if (popupVisible && options.length) {
      const scrollTo = () => {
        activeOptionList.forEach((activeOption: any, i: number) => {
          refWrapper[i]?.scrollIntoView({ block: "nearest" })
        })
      }
      setTimeout(() => {
        scrollTo()
      })
    }
  }, [popupVisible, activeNode])

  const pathNodes = activeNode ? activeNode.getPathNodes() : []
  const menus = [options]
  pathNodes.forEach((option: Node<T>) => {
    option && option.children && menus.push(option.children)
  })

  const variants = {
    hidden: { width: 0, minWidth: 0, overflow: "hidden", opacity: 0 },
    visible: { width: "auto", minWidth: 120, opacity: 1 },
  }

  return (
    <>
      {menus.map((list, level) => {
        if (list.length === 0 && level === 0) {
          return <Empty css={flexCenterStyle} _css={props._css} />
        }
        return list.length === 0 ? null : (
          <div css={[optionListWrapper, applyBoxStyle(props)]} key={level}>
            <motion.ul
              initial={"hidden"}
              animate={"visible"}
              variants={!animate ? {} : variants}
              transition={{ duration: 0.15 }}
              key={level}
              onClick={(e) => {
                e.preventDefault()
              }}
              css={optionListStyle}
              ref={(node) => setRefWrapper(node, level)}
            >
              {list.map((option) => {
                let isActive = false
                if (activeNode) {
                  isActive = activeNode.pathValue[level] === option.value
                }
                const selected =
                  !multiple && option.isLeaf && isEqual(value, option.pathValue)
                const checkboxDisabled =
                  option.disabled || (multiple && option.disableCheckbox)

                return (
                  <li
                    css={applyOptionStyle({
                      active: isActive,
                      disabled: option.disabled,
                    })}
                    key={option.value}
                    ref={(ref) => {
                      if (isActive) {
                        setActiveOptionList(ref, level)
                      }
                    }}
                    onClick={() => {
                      if (option.disabled) return
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
                  >
                    {multiple && (
                      <Checkbox
                        css={textMargin}
                        disabled={checkboxDisabled}
                        checked={option._checked}
                        indeterminate={option._halfChecked}
                        onChange={(checked: boolean) => {
                          onMultipleChecked(option, checked)
                        }}
                        value={option.value}
                      />
                    )}
                    <div
                      css={optionLabelStyle}
                      onMouseEnter={() => {
                        if (!(option.isLeaf || option.disabled)) {
                          if (expandTrigger === "hover") {
                            setActiveNode(option)
                          }
                        }
                      }}
                      onDoubleClick={
                        checkboxDisabled ? undefined : onDoubleClickOption
                      }
                    >
                      {option.label}
                      {option.isLeaf ? null : option.loading ? (
                        <LoadingIcon spin />
                      ) : (
                        <NextIcon />
                      )}
                    </div>
                  </li>
                )
              })}
            </motion.ul>
          </div>
        )
      })}
    </>
  )
}
