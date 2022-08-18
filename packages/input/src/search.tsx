import { ChangeEvent, forwardRef, useState, KeyboardEvent } from "react"
import { SearchProps } from "./interface"
import { useMergeValue } from "@illa-design/system"
import { SearchIcon } from "@illa-design/icon"
import { applyContainerCss, applyInputContainer, applySuffixCls } from "./style"
import { InputElement } from "./input-element"
import { Button } from "@illa-design/button"
import { css } from "@emotion/react"
import {
  applyBoxStyle,
  deleteCssProps,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"

export const Search = forwardRef<HTMLDivElement, SearchProps>((props, ref) => {
  const {
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
    bdRadius: borderRadius,
    size = "medium",
    variant = "outline",
    onChange,
    onClear,
    onFocus,
    onBlur,
    onSearch,
    onPressEnter,
    withoutNormalBorder,
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
    borderRadius,
    size,
    borderColor,
    withoutNormalBorder,
  }

  const onValueChange = (v: string, e: ChangeEvent<HTMLInputElement>) => {
    if (!("value" in props) || !props.value) {
      setValue(v)
    }
    onChange?.(e)
  }

  const searchProp = {
    ...deleteCssProps(rest),
    size,
    disabled,
    allowClear,
    placeholder,
  }

  return (
    <div ref={ref} css={[applyContainerCss(stateValue), applyBoxStyle(props)]}>
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
          <span css={applySuffixCls(size)}>
            <SearchIcon
              css={css(`color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};`)}
            />
          </span>
        ) : null}
      </span>
      {searchButton ? (
        <span>
          <Button
            size={size}
            leftIcon={<SearchIcon />}
            onClick={() => {
              props.onSearch?.(value)
            }}
          />
        </span>
      ) : null}
    </div>
  )
})

Search.displayName = "Search"
