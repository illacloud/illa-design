import React, { ReactElement } from "react"
import get from "lodash/get"
import {
  OptionInfo,
  OptionInfoMap,
  OptionProps,
  SelectProps,
} from "./interface"
import { Option } from "./option"
import { isString, isObject, isArray, isNumber } from "@illa-design/system"

type OptionsType = SelectProps["options"]

function isSelectOption(child: ReactElement): boolean {
  return get(child, "props.isSelectOption")
}

function isSelectOptGroup(child: ReactElement): boolean {
  return get(child, "props.isSelectOptGroup")
}

function getHighlightText<T>({
  nodeList,
  pattern,
  highlightClassName,
}: {
  nodeList: T
  pattern: string | RegExp
  highlightClassName: string | string[]
}): T {
  if (!pattern) {
    return nodeList
  }

  const transformNode = (node: any) => {
    if (node && node.props && typeof node.props.children === "string") {
      const { children } = node.props
      return React.cloneElement(node, {
        children: (() => {
          let indexOfNextRegTest = 0
          const result = []

          // 首先进行正则查询，将匹配项和匹配项之间的字符串依次拼接
          children.replace(pattern, (...args: (string | any)[]) => {
            const match = args[0]
            const index = args[args.length - 2]

            // 与上次匹配项之间的内容
            if (index > indexOfNextRegTest) {
              result.push(children.slice(indexOfNextRegTest, index))
            }

            // 当前匹配项
            result.push(
              <span key={index} className={cs(highlightClassName)}>
                {match}
              </span>,
            )
            indexOfNextRegTest = index + match.length
          })

          // 最后将剩余未被匹配的字符串拼接到最后
          result.push(children.slice(indexOfNextRegTest))

          return result
        })(),
      })
    }

    return node
  }

  return isArray(nodeList)
    ? nodeList?.map((node: any) => transformNode(node))
    : transformNode(nodeList)
}

export function flatChildren(
  {
    children,
    options,
    filterOption,
  }: Pick<SelectProps, "children" | "options" | "filterOption">,
  {
    inputValue = "",
    userCreatedOptions,
    userCreatingOption,
    prefixCls,
  }: {
    inputValue: string
    userCreatedOptions?: string[]
    userCreatingOption?: string
    prefixCls: string
  },
  // 递归过程中需要持续传递的数据
  {
    optionInfoMap = new Map(),
    optionValueList = [],
    customNodeCount = 0,
  }: {
    // 缓存所有选项的信息
    optionInfoMap?: OptionInfoMap
    // 缓存所有选项的值
    optionValueList?: Array<OptionProps["value"]>
    // 自定义节点的数量，用于此节点 key 的生成
    customNodeCount?: number
  } = {},
) {
  // 是否存在 OptGroup
  let hasOptGroup = false
  // 是否存在 children 不为字符串的 Option
  let hasComplexLabelInOptions = false

  // 经过 value 去重并且包含了 OptGroup 的 children 数组
  let childrenList: Array<ReactElement> = []
  let optionIndexListForArrowKey: Array<number> = []

  const getChildValue = (child: ReactElement) => {
    const propValue = get(child, "props.value")
    return propValue === undefined ? child.props.children.toString() : propValue
  }

  const getChildKey = (
    { label, value }: any,
    key?: React.Key | null,
    isGroupTitle?: boolean,
  ) => {
    // 处理自定义节点的 key 值
    if (!label && !value && !key) {
      customNodeCount++
      return `custom_node_${customNodeCount}`
    }

    return isGroupTitle
      ? key || `group_${label}`
      : key || `${typeof value}_${value}` || `${label}_${optionInfoMap.size}`
  }

  const handleOption = (child: ReactElement, origin: OptionInfo["_origin"]) => {
    const optionValue = getChildValue(child)

    let isValidOption = true
    if (filterOption === true) {
      isValidOption =
        optionValue !== undefined &&
        String(optionValue).toLowerCase().indexOf(inputValue.toLowerCase()) !==
          -1
    } else if (typeof filterOption === "function") {
      isValidOption = !inputValue || filterOption(inputValue, child)
    }

    if (!optionInfoMap.get(optionValue)) {
      if (!("_key" in child.props)) {
        child = React.cloneElement(child, {
          _key: getChildKey(child.props, child.key),
        })
      }

      const index = optionInfoMap.size
      const option: OptionInfo = {
        child,
        ...child.props,
        value: optionValue,
        _index: index,
        _origin: origin,
        _valid: isValidOption,
      }

      optionInfoMap.set(optionValue, option)
      optionValueList.push(optionValue)

      if (isValidOption) {
        childrenList.push(child)

        if (!option.disabled) {
          optionIndexListForArrowKey.push(index)
        }
      }
    }

    if (typeof child.props.children !== "string") {
      hasComplexLabelInOptions = true
    }
  }

  const extendChildren = (
    arr: string | any[] | undefined,
    origin: OptionInfo["_origin"],
  ) => {
    if (origin && isArray(arr) && arr?.length) {
      ;(arr as OptionsType)?.forEach((option) => {
        option =
          isString(option) || isNumber(option)
            ? {
                label: option,
                value: option,
              }
            : option
        const child = (
          <Option
            _key={getChildKey(option)}
            value={option.value}
            disabled={option.disabled === true}
            extra={option.extra}
          >
            {option.label}
          </Option>
        )
        handleOption(child, origin)
      })
    }
  }

  if (userCreatingOption) {
    extendChildren([userCreatingOption], "userCreatingOption")
  }

  if (children) {
    React.Children?.map(children, (child: React.ReactElement) => {
      if (isSelectOptGroup(child)) {
        const { children, options } = child.props
        const {
          childrenList: _childrenList,
          optionIndexListForArrowKey: _optionIndexListForArrowKey,
          hasComplexLabelInOptions: _hasComplexLabelInOptions,
        } = flatChildren(
          { children, options, filterOption },
          { inputValue, prefixCls },
          { optionInfoMap, optionValueList, customNodeCount },
        )

        if (_childrenList.length) {
          childrenList.push(
            React.cloneElement(child, {
              children: null,
              _key: getChildKey(child.props, child.key, true),
            }),
          )

          childrenList = childrenList.concat(_childrenList)
          optionIndexListForArrowKey = optionIndexListForArrowKey.concat(
            _optionIndexListForArrowKey,
          )
          hasOptGroup = true
          hasComplexLabelInOptions =
            hasComplexLabelInOptions || _hasComplexLabelInOptions
        }
      } else if (isSelectOption(child)) {
        handleOption(child, "children")
      } else if (isObject(child) && child.props) {
        childrenList.push(
          React.cloneElement(child, {
            _key: getChildKey(child.props, child.key),
          }),
        )
      }
    })
  }

  extendChildren(options, "options")
  extendChildren(userCreatedOptions, "userCreatedOptions")

  return {
    childrenList: getHighlightText({
      nodeList: childrenList,
      pattern: inputValue,
      highlightClassName: `${prefixCls}-highlight`,
    }),
    optionInfoMap,
    optionValueList,
    optionIndexListForArrowKey,
    hasOptGroup,
    hasComplexLabelInOptions,
  }
}
