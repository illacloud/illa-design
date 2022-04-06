import React, { ReactNode } from "react"
import { Checkbox } from "@illa-design/checkbox"
import { NextIcon, CheckmarkIcon, LoadingIcon } from "@illa-design/icon"
import { Node } from "../node"
import { OptionProps } from "../interface"
import { applyOptionLabelStyle, applyOptionStyle } from "../style"

export interface CascaderOptionProps<T> {
  prefixCls?: string
  multiple?: boolean
  selected?: boolean
  isLeaf?: boolean
  option: Node<T>
  onClickOption?: () => void
  onDoubleClickOption?: () => void
  onMouseEnter?: () => void
  onMultipleChecked?: (checked: boolean) => void
}

export const Option = <T extends OptionProps>(
  props: CascaderOptionProps<T>,
) => {
  const {
    multiple,
    option,
    selected,
    onMultipleChecked,
    onMouseEnter,
    onClickOption,
    onDoubleClickOption,
  } = props

  const checkboxDisabled =
    option.disabled || (multiple && option.disableCheckbox)

  return (
    <>
      {multiple ? (
        <Checkbox
          disabled={checkboxDisabled}
          checked={option._checked}
          indeterminate={option._halfChecked}
          onChange={onMultipleChecked}
          value={option.value}
        />
      ) : null}
      <div
        css={applyOptionLabelStyle()}
        onClick={option.disabled ? undefined : onClickOption}
        onMouseEnter={
          option.isLeaf || option.disabled ? undefined : onMouseEnter
        }
        onDoubleClick={checkboxDisabled ? undefined : onDoubleClickOption}
      >
        {option.label}
        {option.isLeaf ? (
          selected && <CheckmarkIcon />
        ) : option.loading ? (
          <LoadingIcon spin />
        ) : (
          <NextIcon />
        )}
      </div>
    </>
  )
}
