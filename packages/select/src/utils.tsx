import { Children, cloneElement, Key, ReactElement } from "react"
import {
  OptionInfo,
  OptionInfoMap,
  OptionProps,
  SelectProps,
} from "./interface"
import { Option } from "./option"
import { isString, isObject, isArray, isNumber } from "@illa-design/system"

type OptionsType = SelectProps["options"]

export function isSelectOption(child: ReactElement): boolean {
  return child.props?.isSelectOption ?? false
}

export function isEmptyValue(value: any, isMultiple?: boolean) {
  // Illegal value is considered as unselected
  return isMultiple ? !isArray(value) || !value.length : value === undefined
}

export function getHighlightText<T>({
  nodeList,
  pattern,
}: {
  nodeList: T
  pattern: string | RegExp
}): T {
  if (!pattern) {
    return nodeList
  }
  const transformNode = (node: any) => {
    if (node && node.props && typeof node.props.children === "string") {
      const { children } = node.props
      return cloneElement(node, {
        children: (() => {
          let indexOfNextRegTest = 0
          const result = []
          children.replace(pattern, (...args: (string | any)[]) => {
            const match = args[0]
            const index = args[args.length - 2]
            if (index > indexOfNextRegTest) {
              result.push(children.slice(indexOfNextRegTest, index))
            }
            result.push(<span key={index}>{match}</span>)
            indexOfNextRegTest = index + match.length
          })
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
  }: {
    inputValue: string
    userCreatedOptions?: string[]
    userCreatingOption?: string
  },
  {
    optionInfoMap = new Map(),
    optionValueList = [],
    customNodeCount = 0,
  }: {
    optionInfoMap?: OptionInfoMap
    optionValueList?: Array<OptionProps["value"]>
    customNodeCount?: number
  } = {},
) {
  let childrenList: Array<ReactElement> = []
  let optionIndexListForArrowKey: Array<number> = []

  const getChildKey = (
    { label, value }: any,
    key?: Key | null,
    isGroupTitle?: boolean,
  ) => {
    // Handle custom node key
    if (!label && !value && !key) {
      customNodeCount++
      return `custom_node_${customNodeCount}`
    }

    return isGroupTitle
      ? key || `group_${label}`
      : key || `${typeof value}_${value}` || `${label}_${optionInfoMap.size}`
  }

  const handleOption = (child: ReactElement, origin: OptionInfo["_origin"]) => {
    const propValue = child.props?.value
    const propLabel = child.props?.children.toString()
    const optionValue = propValue === undefined ? propLabel : propValue

    let isValidOption = true
    if (filterOption === true) {
      const filterLabel = propLabel ? propLabel : propValue
      isValidOption =
        optionValue !== undefined &&
        String(filterLabel).toLowerCase().indexOf(inputValue.toLowerCase()) !==
          -1
    } else if (typeof filterOption === "function") {
      isValidOption = !inputValue || filterOption(inputValue, child)
    }

    if (!optionInfoMap.get(optionValue)) {
      if (!("_key" in child.props)) {
        child = cloneElement(child, {
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
    Children.map(children as any, (child: ReactElement) => {
      if (isSelectOption(child)) {
        handleOption(child, "children")
      } else if (isObject(child) && child.props) {
        childrenList.push(
          cloneElement(child, {
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
    }),
    optionInfoMap,
    optionValueList,
    optionIndexListForArrowKey,
  }
}

export type SelectInner = string | number | string[] | number[] | undefined

export function getValidValue(
  value: any,
  isMultiple?: boolean,
  labelInValue?: boolean,
): SelectInner {
  // Compatible when labelInValue is set, value is passed in the object
  if (labelInValue) {
    if (isMultiple) {
      value = Array.isArray(value)
        ? value.map((item) =>
            isObject(item) && "label" in item ? item.value : item,
          )
        : value
    } else {
      value = isObject(value) && "label" in value ? value.value : value
    }
  }

  return isEmptyValue(value, isMultiple)
    ? isMultiple
      ? Array.isArray(value)
        ? value
        : []
      : undefined
    : value
}
