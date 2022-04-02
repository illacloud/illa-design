import React, { ReactNode } from "react"
import { Checkbox } from "@illa-design/checkbox"
import { NextIcon, CheckmarkIcon, LoadingIcon } from "@illa-design/icon"
import { Node } from "../node"
import { OptionProps } from "../interface"

export interface CascaderOptionProps<T> {
  prefixCls?: string
  multiple?: boolean
  selected?: boolean
  isLeaf?: boolean
  option: Node<T>
  renderOption?: () => ReactNode
  onClickOption?: () => void
  onDoubleClickOption?: () => void
  onMouseEnter?: () => void
  onMultipleChecked?: (checked: boolean) => void
}

export const Option = <T extends OptionProps>(
  props: CascaderOptionProps<T>,
) => {
  const { multiple, option, renderOption, selected } = props

  const checkboxDisabled =
    option.disabled || (multiple && option.disableCheckbox)

  const dom = (
    <div
      onClick={option.disabled ? undefined : props.onClickOption}
      onMouseEnter={
        option.isLeaf || option.disabled ? undefined : props.onMouseEnter
      }
      onDoubleClick={checkboxDisabled ? undefined : props.onDoubleClickOption}
    >
      {renderOption ? renderOption() : option.label}
      {option.isLeaf ? (
        selected && <CheckmarkIcon />
      ) : option.loading ? (
        <LoadingIcon spin />
      ) : (
        <NextIcon />
      )}
    </div>
  )
  return (
    <>
      {multiple ? (
        <Checkbox
          disabled={checkboxDisabled}
          checked={option._checked}
          indeterminate={option._halfChecked}
          onChange={props.onMultipleChecked}
          value={option.value}
        />
      ) : null}
      {dom}
    </>
  )
}
