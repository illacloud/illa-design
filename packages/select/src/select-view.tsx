/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useRef, useState, useEffect } from "react"
import {
  InputElement,
  InputRefType,
  InputElementProps,
} from "@illa-design/input"
import { useMergeValue, isObject } from "@illa-design/system"
import { LoadingIcon, SearchIcon, ExpandIcon } from "@illa-design/icon"
import { SelectViewProps } from "./interface"
import {
  applyMergeCss,
  applyRadioSize,
  applySelectView,
  applySelectViewText,
} from "./style"
import { isEmptyValue } from "./utils"
import { css } from "@emotion/react"
import include from "@illa-design/system"

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
      inputValue,
      defaultValue,
      showSearch,
      placeholder,
      isMultipleMode,
      popupVisible,
      isEmptyValue,
      renderText,
      // event
      onChange,
      onFocus,
      onBlur,
      onPaste,
      onKeyDown,
      onVisibleChange,
      onChangeInputValue,
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
    const renderedValue =
      !isMultipleMode && value !== undefined ? renderText(value).text : ""
    const isRetainInputValueSearch =
      isObject(showSearch) && showSearch?.retainInputValue

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

    const tryTriggerKeyDown = (event: any) => {
      // The keyboard event at this time should be triggered by the input element, ignoring the bubbling up keyboard event
      if (canFocusInput && event.currentTarget === viewRef.current) {
        return
      }
      // Prevent the default behavior of the browser when pressing Enter
      const keyCode = event.keyCode || event.which
      if (keyCode === 13) {
        event.preventDefault()
      }
      onKeyDown && onKeyDown(event)
    }

    // event handling of input box
    const inputEventHandlers = {
      paste: onPaste as
        | React.ClipboardEventHandler<HTMLInputElement>
        | undefined,
      keyDown: tryTriggerKeyDown,
      focus: (event: any) => {
        event.stopPropagation()
        tryTriggerFocusChange("focus", event)
      },
      blur: (event: any) => {
        event.stopPropagation()
        tryTriggerFocusChange("blur", event)
      },
      change: (newValue: string, event: any) => {
        setSearchStatus(SearchStatus.EDITING)
        onChangeInputValue?.(newValue, event)
      },
    }

    const renderSingle = () => {
      let _inputValue: string

      switch (searchStatus) {
        case SearchStatus.BEFORE:
          _inputValue =
            inputValue || (isRetainInputValueSearch ? renderedValue : "")
          break
        case SearchStatus.EDITING:
          _inputValue = inputValue || ""
          break
        default:
          _inputValue = renderedValue
          break
      }

      const inputProps: InputElementProps = {
        style: { width: "100%" },
        value: typeof !isObject(_inputValue) ? _inputValue : "",
        // Allow placeholder to display the selected value first when searching
        placeholder:
          canFocusInput && renderedValue && !isObject(_inputValue)
            ? renderedValue
            : placeholder,
      }

      if (canFocusInput) {
        inputProps.onPaste = inputEventHandlers.paste
        inputProps.onKeyDown = inputEventHandlers.keyDown
        inputProps.onFocus = inputEventHandlers.focus
        inputProps.onBlur = inputEventHandlers.blur
        inputProps.onValueChange = inputEventHandlers.change
      } else {
        // Avoid input getting focus by Tab
        inputProps.tabIndex = -1
        if (inputProps.style) {
          inputProps.style.pointerEvents = "none"
        }
      }
      const needShowInput = (mergedFocused && canFocusInput) || isEmptyValue

      return (
        <div>
          <InputElement
            css={css({ disabled: "none" })}
            ref={inputRef}
            disabled={disabled}
            {...inputProps}
          />
          <span css={applySelectViewText(needShowInput)}>
            Single{_inputValue}
          </span>
        </div>
      )
    }

    return (
      <div
        {...include(otherProps, ['onClick', 'onMouseEnter', 'onMouseLeave'])}
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
