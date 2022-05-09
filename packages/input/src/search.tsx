import { ChangeEvent, forwardRef, useState, KeyboardEvent } from "react"
import { SearchProps } from "./interface"
import { useMergeValue } from "@illa-design/system"
import { SearchIcon } from "@illa-design/icon"
import { applyContainerCss, applyInputContainer, applySuffixCls } from "./style"
import { InputElement } from "./input-element"
import { Button } from "@illa-design/button"
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const Search = forwardRef<HTMLDivElement, SearchProps>((props, ref) => {
  const {
    style,
    className,
    inputRef,
    allowClear,
    error,
    disabled,
    loading,
    placeholder,
    defaultValue,
    requirePadding = true,
    searchButton,
    borderColor = "blue",
    size = "medium",
    variant = "outline",
    onChange,
    onClear,
    onFocus,
    onBlur,
    onSearch,
    onPressEnter,
    withoutNormalBorder,
    radius = "4px",
    ...rest
  } = props

  const [focus, setFocus] = useState(false)
  const [value, setValue] = useMergeValue("", {
    defaultValue: defaultValue ? defaultValue : undefined,
    value: props.value ? props.value : undefined,
  })
  const stateValue = {
    error,
    disabled,
    focus,
    variant,
    size,
    borderColor,
    withoutNormalBorder,
    radius,
  }

  const onValueChange = (v: string, e: ChangeEvent<HTMLInputElement>) => {
    if (!("value" in props) || !props.value) {
      setValue(v)
    }
    onChange?.(e)
  }

  const searchProp = {
    ...rest,
    size,
    disabled,
    allowClear,
    placeholder,
  }

  return (
    <div ref={ref} style={style} className={className}>
      <span css={applyContainerCss(stateValue)}>
        <span css={applyInputContainer(stateValue, requirePadding)}>
          <InputElement
            {...searchProp}
            ref={inputRef}
            onFocus={(e) => {
              setFocus(true)
              props.onFocus && props.onFocus(e)
            }}
            onBlur={(e) => {
              setFocus(false)
              props.onBlur && props.onBlur(e)
            }}
            value={value}
            onValueChange={onValueChange}
            onClear={() => {
              if (!("value" in props)) {
                setValue("")
              }
              onClear?.()
            }}
            onPressEnter={(e: KeyboardEvent<HTMLInputElement>) => {
              !disabled && props.onSearch?.(value)
              props.onPressEnter?.(e)
            }}
          />
          {!searchButton ? (
            <span css={applySuffixCls(stateValue)}>
              <SearchIcon
                css={css(
                  `color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};`,
                )}
              />
            </span>
          ) : null}
        </span>
        {searchButton ? (
          <span>
            <Button
              buttonRadius="0 4px 4px 0"
              size={size}
              leftIcon={<SearchIcon />}
              onClick={() => {
                props.onSearch?.(value)
              }}
            />
          </span>
        ) : null}
      </span>
    </div>
  )
})

Search.displayName = "Search"
