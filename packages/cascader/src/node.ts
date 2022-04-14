// thx arco.design
import { CascaderProps, FieldNamesType, OptionProps } from "./interface"
import { isArray, isFunction, isNumber, isString } from "@illa-design/system"
import isEqual from "react-fast-compare"

export const DefaultFieldNames = {
  label: "label",
  value: "value",
  isLeaf: "isLeaf",
  children: "children",
  disabled: "disabled",
}

export type ConfigType<T> = {
  // Whether to associate parent and child nodes
  changeOnSelect?: boolean
  filterOption?: CascaderProps<T>["filterOption"]
  fieldNames?: FieldNamesType
}

export interface NodeProps<T> extends OptionProps {
  value: string
  label: string
  isLeaf?: boolean
  _checked: boolean
  _level?: number
  _halfChecked: boolean
  parent: NodeProps<T> | null
  pathValue: string[]
  // next node options
  children?: NodeProps<T>[]
  loading?: boolean
  // Is loading complete
  loaded?: boolean
  pathLabel: string[]
}

export class Node<T> {
  value: string
  label: string
  disabled?: boolean
  _level?: number
  _index?: number
  isLeaf?: boolean
  disableCheckbox?: boolean
  _checked: boolean = false
  _halfChecked: boolean = false
  parent: Node<T> | null
  pathValue: string[] = []
  pathLabel: string[] = []
  children?: Node<T>[]
  loading?: boolean
  loaded?: boolean
  config: ConfigType<T> = {}
  // exposed to outside props
  _data?: NodeProps<T>

  constructor(
    option: NodeProps<T>,
    config?: ConfigType<T>,
    parent?: Node<T> | null,
  ) {
    this.config = config || {}
    this.parent = parent ?? null

    const fieldNames = { ...DefaultFieldNames, ...this.config.fieldNames }

    const children = option[fieldNames.children]

    let isLeaf = Array.isArray(children) ? children.length === 0 : true

    const nodeValue = option[fieldNames.value]
    const nodeLabel = option[fieldNames.label]

    const newOption: NodeProps<T> = {
      ...option,
      value: nodeValue,
      label: nodeLabel,
      isLeaf,
      loading: false,
      loaded: false,
      disabled: (parent && parent.disabled) || option[fieldNames.disabled],
      parent: parent ?? null,
      pathValue: parent ? [...parent.pathValue, nodeValue] : [nodeValue],
      pathLabel: parent ? [...parent.pathLabel, nodeLabel] : [nodeLabel],
      _level: parent && isNumber(parent._level) ? parent._level + 1 : 0,
      _checked: false,
      _halfChecked: false,
    }

    this.value = nodeValue
    this.label = nodeLabel
    this._data = {
      ...newOption,
      parent: newOption.parent && newOption.parent._data,
    }

    Object.keys(newOption).forEach((key) => {
      // @ts-ignore
      this[key] = newOption[key]
    })
    if (children && children.length) {
      this.children = children.map((data: NodeProps<T>, index: number) => {
        return new Node({ ...data, _index: index }, this.config, this)
      })
      this._data.children = this.children?.map(
        (node) => node._data as NodeProps<T>,
      )
    }
  }

  /**
   * Calculate is or not half-selected
   * halfSelected = 0.5, selected = 1, doNotSelect = 0
   * When all children of this node add up to children.length, is selected.
   * When children.length > checkedLen > 0, is halfSelected.
   */
  private _isHalfChecked(): boolean {
    const checkedLen = this.children?.reduce((total, prev) => {
      const num = prev._halfChecked ? 0.5 : prev._checked ? 1 : 0
      return total + num
    }, 0)
    return (checkedLen !== this.children?.length &&
      checkedLen &&
      checkedLen > 0) as boolean
  }

  /**
   *
   * @param checked
   * @param ignoreDisabled
   */
  private _setNodeChildrenChecked = (
    checked: boolean,
    ignoreDisabled?: boolean,
  ) => {
    if (!ignoreDisabled && this.disabled) {
      return
    }

    if (this.children && this.children.length) {
      this.children.forEach((item) => {
        if (item.disabled) {
          if (ignoreDisabled) {
            item.setCheckedStateIgnoreDisabled(checked)
          }
        } else {
          item.setCheckedState(checked)
        }
      })
      this.updateHalfState(checked)
    }
  }

  public updateHalfState = (checked: boolean) => {
    this._halfChecked = this._isHalfChecked()
    this._checked = this._halfChecked ? false : checked
  }

  public setCheckedProperty = (checked: boolean) => {
    this._checked = checked
    this._halfChecked = false
  }

  // set current node checked state
  public setCheckedState = (checked: boolean) => {
    if (this.disabled || checked === this._checked) {
      return
    }

    this.setCheckedProperty(checked)

    if (!this.config.changeOnSelect) {
      this._setNodeChildrenChecked(checked)

      let parent = this.parent
      while (parent && !parent.disabled) {
        parent.updateHalfState(checked)
        parent = parent.parent
      }
    }
  }

  public setCheckedStateIgnoreDisabled = (checked: boolean) => {
    if (checked === Boolean(this._checked)) {
      return
    }
    this.setCheckedProperty(checked)

    if (!this.config.changeOnSelect) {
      this._setNodeChildrenChecked(checked, true)

      let parent = this.parent
      while (parent) {
        // when halfSelected, _checked = false.
        parent.updateHalfState(checked)

        parent = parent.parent
      }
    }
  }

  /**
   * Traverse the parent of the node, to get the pathNode of the current node.
   * node: { label: '1-1-1', parent: { label: '1-1', parent: { label: '1' }, ... }, ...}
   * @return [node.parent.parent, node.parent, node]
   * @memberof Store
   */
  public getPathNodes = (): Node<T>[] => {
    const nodes: Node<T>[] = [this]
    let parent = this.parent
    while (parent) {
      nodes.unshift(parent)
      parent = parent.parent
    }
    return nodes
  }

  public getChildren = (): Node<T>[] | undefined => {
    return this.children
  }

  public setLoading = (loading?: boolean) => {
    this.loading = loading

    if (loading || loading === undefined) {
      this.loaded = false
    }
    if (loading === false) {
      this.loaded = true
    }
  }
}

export class Store<T> {
  private nodes: Node<T>[] = []
  private flatNodes: Node<T>[] = []
  private config: ConfigType<T> = {}

  constructor(
    options: NodeProps<T>[],
    value?: string[][],
    config?: ConfigType<T>,
  ) {
    this.config = { ...config }

    const values = Array.isArray(value) ? value : []

    this.nodes = this._calcNodes(options, null)

    // get selected value by nodes
    this._updateFlatNodes()

    this.setNodeCheckedByValue(values)
  }

  // Initialize node state, add _checked, _halfChecked, parent, disabled
  private _calcNodes = (
    options: NodeProps<T>[],
    parent: Node<T> | null,
  ): Node<T>[] => {
    if (!options) {
      return []
    }
    return options.map((option, index) => {
      return new Node({ ...option, _index: index }, this.config, parent)
    })
  }

  // this.flatNodes save all possible selected
  private _updateFlatNodes = () => {
    const leafOnly = !this.config.changeOnSelect
    this.flatNodes = []

    const traversal = (option: Node<T>) => {
      if (!option) return
      if (!leafOnly || option.isLeaf) {
        this.flatNodes.push(option)
      }
      if (isArray(option.children)) {
        ;(option.children as Node<T>[]).forEach((x) => {
          traversal(x)
        })
      }
    }

    this.nodes.forEach((node) => {
      traversal(node)
    })
  }

  /**
   * values: all selected values
   * Set node status by values. nodes not included in values are set to unselected state.
   */
  public setNodeCheckedByValue = (initValues?: string[][]) => {
    const values = initValues || []

    // 根据value设置节点初始选中状态
    this.flatNodes.forEach((node) => {
      if (values?.some((item) => isEqual(node.pathValue, item))) {
        node.setCheckedStateIgnoreDisabled(true)
      } else {
        node.setCheckedStateIgnoreDisabled(false)
      }
    })
  }

  public findNodeByValue = (value?: string[]): Node<T> | null => {
    let targetNode: Node<T> | null = null
    if (!value || !value.length) {
      return targetNode
    }

    this.flatNodes.some((node) => {
      if (isEqual(node.pathValue, value)) {
        targetNode = node
      }
    })
    return targetNode
  }

  public searchNodeByLabel = (inputStr?: string): Node<T>[] => {
    if (!inputStr) {
      return this.flatNodes
    }
    const { filterOption } = this.config
    const filterMethod = isFunction(filterOption)
      ? filterOption
      : (inputValue: string, node: NodeProps<T>) => {
          return isString(node?.label) && node.label.indexOf(inputValue) > -1
        }

    return this.flatNodes?.filter((item) => {
      const pathNodes = item.getPathNodes()
      return pathNodes.some((node) => {
        // ?
        return node._data && filterMethod(inputStr, node._data)
      })
    })
  }

  public getOptions = (): Node<T>[] => {
    return this.nodes
  }

  public getCheckedNodes = (): Node<T>[] => {
    return this.flatNodes?.filter((node) => {
      return node._checked
    })
  }
}
