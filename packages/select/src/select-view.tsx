/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useRef, useState, ChangeEvent, FocusEvent } from "react"
import { InputElement, InputRefType } from "@illa-design/input"
import { LoadingIcon, SearchIcon, ExpandIcon } from "@illa-design/icon"

import { SelectViewProps } from "./interface"

import {
  applyMergeCss,
  applyRadioSize,
  applySelectStyle,
  applySelectView,
} from "./style"
import { useMergeValue } from "@illa-design/system"

export interface StateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  size?: SelectViewProps["size"]
}

export const SelectView = forwardRef<HTMLElement, SelectViewProps>(
  (props, ref) => {
    const {
      mode,
      children,
      disabled,
      error,
      loading,
      value,
      size,
      defaultValue,
      showSearch,
      placeholder,
      isMultiMode,
      popupVisible,
      // event
      onChange,
      onFocus,
      onBlur,
      onVisibleChange,
      ...otherProps
    } = props

    const [currentValue, setCurrentValue] = useMergeValue(undefined, {
      value: value,
      defaultValue: defaultValue,
    })

    const viewRef = useRef(null)
    const inputRef = useRef<InputRefType>(null)
    const [focused, setFocused] = useState(false)
    const mergedFocused = focused || popupVisible

    const canFocusInput = showSearch || isMultiMode

    const stateValue: StateValue = {
      error,
      disabled,
      focus: mergedFocused,
      size,
    }

    const renderMultiple = () => {
      return <div>Multiple/tags</div>
    }

    const tryTriggerFocusChange = (action: "focus" | "blur", event: any) => {
      // The focus event at this time should be triggered by the input element
      if (canFocusInput && event.target === viewRef.current) {
        return
      }
      if (action === "focus") {
        setFocused(true)
        onFocus && onFocus(event)
      } else {
        setFocused(false)
        onBlur && onBlur(event)
      }
    }

    const renderSingle = () => {
      return (
        <div>
          SingleSingleSingleSingleSingle
          <InputElement ref={inputRef} disabled={disabled} />
        </div>
      )
    }

    return (
      <div
        ref={viewRef}
        css={applySelectView(stateValue)}
        onFocus={(event) => {
          if (disabled) {
            return
          }
          if (canFocusInput) {
            inputRef?.current?.focus?.()
          } else {
            tryTriggerFocusChange("focus", event)
          }
        }}
      >
        {isMultiMode ? renderMultiple() : renderSingle()}
      </div>
    )
  },
)

SelectView.displayName = "SelectView"
