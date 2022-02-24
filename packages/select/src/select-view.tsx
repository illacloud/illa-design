/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useRef, useState, useEffect, FocusEvent } from "react"
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

const SearchStatus = {
  BEFORE: 0,
  EDITING: 1,
  NONE: 2,
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
      isMultipleMode,
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
    const [searchStatus, setSearchStatus] = useState(SearchStatus.NONE)

    const canFocusInput = showSearch || isMultipleMode

    const stateValue: StateValue = {
      error,
      disabled,
      focus: mergedFocused,
      size,
    }

    const handleFocus = (action: "focus" | "blur") => {
      const element = canFocusInput ? inputRef.current : viewRef.current
      if (element) {
        action === "focus" ? element?.focus?.() : element?.blur?.()
      }
    }

    useEffect(() => {
      handleFocus(popupVisible ? "focus" : "blur")
      if (canFocusInput) {
        setSearchStatus(popupVisible ? SearchStatus.BEFORE : SearchStatus.NONE)
      }
    }, [popupVisible])

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
        onBlur={(event) => tryTriggerFocusChange("blur", event)}
      >
        <div
          onClick={(e) => popupVisible && canFocusInput && e.stopPropagation()}
        >
          {isMultipleMode ? renderMultiple() : renderSingle()}
        </div>
      </div>
    )
  },
)

SelectView.displayName = "SelectView"
