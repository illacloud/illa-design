import { forwardRef, SyntheticEvent, useEffect, useRef, useState } from "react"
import { InputElement, InputElementProps } from "@illa-design/input"
import { isNumber, isObject, omit } from "@illa-design/system"
import {
  ErrorIcon,
  ExpandIcon,
  LoadingIcon,
  SearchIcon,
} from "@illa-design/icon"
import {
  InputTag,
  InputTagProps,
  ObjectValueType,
} from "@illa-design/input-tag"
import { SelectStateValue, SelectViewProps } from "./interface"
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
      size = "medium",
      inputValue,
      defaultValue,
      showSearch,
      placeholder,
      multiple,
      popupVisible,
      isEmptyValue,
      maxTagCount,
      renderText,
      error,
      loading,
      disabled,
      labelInValue,
      allowClear,
      allowCreate,
      removeIcon,
      colorScheme = "blue",
      // event
      onClick,
      onFocus,
      onBlur,
      onClear,
      onPaste,
      onKeyDown,
      onVisibleChange,
      onRemoveCheckedItem,
      onChangeInputValue,
      readOnly,
      ...otherProps
    } = props

    const viewRef = useRef(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [focused, setFocused] = useState(false)
    const mergedFocused = focused || popupVisible
    const [searchStatus, setSearchStatus] = useState(SearchStatus.NONE)

    const canFocusInput = showSearch || allowCreate
    const renderedValue =
      !multiple && value !== undefined ? renderText(value).text : ""
    const isRetainInputValueSearch =
      isObject(showSearch) && showSearch?.retainInputValue

    const stateValue: SelectStateValue = {
      error,
      disabled,
      focus: mergedFocused,
      size,
      colorScheme,
      readOnly,
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

    const tryTriggerFocusChange = (
      action: "focus" | "blur",
      event: SyntheticEvent,
    ) => {
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

    const inputEventHandlers = {
      paste: onPaste,
      focus: (event: SyntheticEvent) => {
        event.stopPropagation()
        tryTriggerFocusChange("focus", event)
      },
      blur: (event: SyntheticEvent) => {
        event.stopPropagation()
        tryTriggerFocusChange("blur", event)
      },
      change: (newValue: string, event?: SyntheticEvent) => {
        setSearchStatus(SearchStatus.EDITING)
        onChangeInputValue?.(newValue, event)
      },
    }

    const suffixIcon = loading ? (
      <LoadingIcon
        spin
        css={css`
          color: ${globalColor(`--${illaPrefix}-grayBlue-07`)};
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
          canFocusInput && renderedValue && !isObject(renderedValue)
            ? renderedValue
            : placeholder,
        style: {
          pointerEvents: canFocusInput ? "auto" : "none",
        },
      }

      if (canFocusInput) {
        inputProps.onPaste = inputEventHandlers.paste
        inputProps.onKeyDown = (event) => {
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
        inputProps.onFocus = inputEventHandlers.focus
        inputProps.onBlur = inputEventHandlers.blur
        inputProps.onValueChange = inputEventHandlers.change
      } else {
        // Avoid input getting focus by Tab
        inputProps.tabIndex = -1
        // inputProps['style']['pointerEvents'] = "none"
      }
      const needShowInput = (mergedFocused && canFocusInput) || isEmptyValue

      return (
        <>
          <InputElement
            _css={applySelectViewText(needShowInput)}
            ref={inputRef}
            disabled={disabled}
            readOnly={readOnly}
            {...inputProps}
          />
          <input
            css={applySelectViewText(!needShowInput)}
            value={_inputValue}
            placeholder={placeholder}
            readOnly
          />
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

      const eventHandlers: InputTagProps = {
        onPaste: inputEventHandlers.paste,
        onFocus: inputEventHandlers.focus,
        onBlur: inputEventHandlers.blur,
        onInputChange: inputEventHandlers.change,
        onKeyDown: (event) => {
          if (canFocusInput && event.currentTarget === viewRef.current) {
            return
          }
          // Prevent the default behavior of the browser when pressing Enter
          const keyCode = event.keyCode || event.which
          if (keyCode === 13) {
            event.preventDefault()
          }
          onKeyDown && onKeyDown(event)
        },
        onRemove: (value, index, event) => {
          // maxTagCount && forceUpdate()
          onRemoveCheckedItem?.(value, index, event)
        },
      }

      return (
        <InputTag
          _css={css`
            width: 100%;
            border: unset;
            padding: unset;
            box-shadow: unset;
          `}
          disableInput={!(showSearch ? showSearch : multiple)}
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
          "options",
          "filterOption",
          "onSearch",
          "onChange",
          "onPopupScroll",
          "onInputValueChange",
          "onDeselect",
        ])}
      >
        <div
          css={applySelectContent(stateValue)}
          onClick={(e) => popupVisible && canFocusInput && e.stopPropagation()}
        >
          {multiple ? renderMultiple() : renderSingle()}
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
