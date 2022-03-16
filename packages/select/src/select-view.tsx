/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useReducer,
} from "react"
import {
  InputElement,
  InputElementProps,
} from "@illa-design/input"
import { isObject, omit, isNumber } from "@illa-design/system"
import {
  LoadingIcon,
  SearchIcon,
  ExpandIcon,
  ErrorIcon,
} from "@illa-design/icon"
import { InputTag, ObjectValueType } from "@illa-design/input-tag"
import { SelectViewProps, SelectStateValue } from "./interface"
import {
  applyIconStyle,
  applySelectContent,
  applySelectView,
  applySelectViewText,
  iconPointerStyle,
} from "./style"
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

const SearchStatus = {
  BEFORE: 0,
  EDITING: 1,
  NONE: 2,
}

export const SelectView = forwardRef<HTMLDivElement, SelectViewProps>(
  (props, ref) => {
    const {
      children,
      value,
      mode,
      size = "medium",
      inputValue,
      defaultValue,
      showSearch,
      placeholder,
      isMultipleMode,
      popupVisible,
      isEmptyValue,
      maxTagCount,
      renderText,
      error,
      loading,
      disabled,
      options,
      labelInValue,
      allowClear,
      removeIcon,
      // event
      onChange,
      onClick,
      onFocus,
      onBlur,
      onClear,
      onPaste,
      onKeyDown,
      onVisibleChange,
      onRemoveCheckedItem,
      onChangeInputValue,
      ...otherProps
    } = props

    const viewRef = useRef(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [focused, setFocused] = useState(false)
    const mergedFocused = focused || popupVisible
    const [searchStatus, setSearchStatus] = useState(SearchStatus.NONE)

    const canFocusInput = showSearch || mode === "tags"
    const renderedValue =
      !isMultipleMode && value !== undefined ? renderText(value).text : ""
    const isRetainInputValueSearch =
      isObject(showSearch) && showSearch?.retainInputValue

    const stateValue: SelectStateValue = {
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

    function forceUpdate() {
      const [, dispatch] = useReducer((v) => v + 1, 0)
      return dispatch
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

    const suffixIcon = loading ? (
      <LoadingIcon
        spin
        css={css`
          color: ${globalColor(`--${illaPrefix}-gray-07`)};
        `}
      />
    ) : showSearch && popupVisible ? (
      <SearchIcon />
    ) : popupVisible ? (
      <ExpandIcon css={css({ transform: "rotate(180deg)" })} />
    ) : (
      <ExpandIcon />
    )

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
        <>
          <InputElement
            css={applySelectViewText(needShowInput)}
            ref={inputRef}
            disabled={disabled}
            {...inputProps}
          />
          <span css={applySelectViewText(!needShowInput)}>{_inputValue}</span>
        </>
      )
    }

    const renderMultiple = () => {
      const usedValue = value === undefined ? [] : [].concat(value as [])
      const usedMaxTagCount = isNumber(maxTagCount)
        ? Math.max(maxTagCount, 0)
        : usedValue.length
      const tagsToShow: ObjectValueType[] = usedValue
        .slice(0, usedMaxTagCount)
        .map((v) => {
          const result = renderText(v)
          return {
            value: v,
            label: result.text,
            closable: !result.disabled,
          }
        })
      const invisibleTagCount = usedValue.length - usedMaxTagCount
      if (invisibleTagCount > 0) {
        tagsToShow.push({
          label: `+${invisibleTagCount}...`,
          closable: false,
        })
      }

      const eventHandlers = {
        onPaste: inputEventHandlers.paste,
        onKeyDown: inputEventHandlers.keyDown,
        onFocus: inputEventHandlers.focus,
        onBlur: inputEventHandlers.blur,
        onInputChange: inputEventHandlers.change,
        onRemove: (value: any, index: number, event: any) => {
          maxTagCount && forceUpdate()
          onRemoveCheckedItem?.(value, index, event)
        },
      }

      return (
        <InputTag
          css={css`
            width: 100% !important;
            border: unset !important;
            padding: unset !important;
            box-shadow: unset !important;
          `}
          disableInput={!(showSearch || isMultipleMode)}
          inputRef={inputRef}
          disabled={disabled}
          placeholder={placeholder}
          value={tagsToShow}
          inputValue={inputValue}
          size={size}
          {...eventHandlers}
        />
      )
    }

    return (
      <div
        ref={ref}
        css={applySelectView(stateValue)}
        onClick={onClick}
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
        {...omit(otherProps, [
          "onSearch",
          "onPopupScroll",
          "onInputValueChange",
          "onDeselect",
        ])}
      >
        <div
          css={applySelectContent(stateValue)}
          onClick={(e) => popupVisible && canFocusInput && e.stopPropagation()}
        >
          {isMultipleMode ? renderMultiple() : renderSingle()}
          {!disabled && !isEmptyValue && allowClear ? (
            <span
              title="selectRemoveIcon"
              css={iconPointerStyle(size)}
              onClick={onClear}
              onMouseDown={(event) => event?.preventDefault()}
            >
              {removeIcon ? removeIcon : <ErrorIcon />}
            </span>
          ) : null}
          <div css={applyIconStyle}>{suffixIcon}</div>
        </div>
      </div>
    )
  },
)

SelectView.displayName = "SelectView"
