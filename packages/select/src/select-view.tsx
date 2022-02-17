/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useContext } from "react"
import { SelectProps } from "./interface"
import { applyMergeCss, applyRadioSize, applySelectStyle } from "./style"
import { omit, useMergeValue } from "@illa-design/system"

export const SelectView = forwardRef<HTMLElement, SelectProps>((props, ref) => {
  const {
    mode,
    children,
    disabled,
    value,
    defaultValue,
    onChange,
    placeholder,
    ...otherProps
  } = props

  const [currentValue, setCurrentValue] = useMergeValue(undefined, {
    value: value,
    defaultValue: defaultValue,
  })

  const renderMultiple = () => {
    return <div></div>
  }

  const renderSingle = () => {
    return <div>Single</div>
  }

  return (
    <div>
      {mode === "multiple" ? renderMultiple() : renderSingle()}
    </div>
  )
})

SelectView.displayName = "SelectView"
