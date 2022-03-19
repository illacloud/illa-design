/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useEffect, useContext, useCallback } from "react"
import { useMergeValue } from "@illa-design/system"
import { CheckmarkIcon, ReduceIcon } from "@illa-design/icon"
import { RangePickerProps } from "./interface"
import { applyMergeCss, applyCheckboxSize, applyCheckState } from "./style"

export const RangePicker = forwardRef<HTMLLabelElement, RangePickerProps>(
  (props, ref) => {
    const {
      children,
      disabled,
      value,
      onChange,
      defaultChecked,
      ...otherProps
    } = props


    return (
      <div>
        111
      </div>
    )
  },
)

RangePicker.displayName = "RangePicker"
