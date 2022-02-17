/** @jsxImportSource @emotion/react */
import * as React from "react"
import {
  ChangeEvent,
  forwardRef,
  ForwardRefExoticComponent,
  useImperativeHandle,
  useState,
  useRef,
} from "react"
import { InputRefType, SearchProps } from "./interface"
import { useMergeValue } from "@illa-design/system"
import { SearchIcon } from "@illa-design/icon"
import { applyContainerCss, applyInputContainer, applySuffixCls } from "./style"
import { InputElement } from "./input-element"
import { Button } from "@illa-design/button"
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export type SearchRef = ForwardRefExoticComponent<
  SearchProps & React.RefAttributes<InputRefType>
>
export const Search: SearchRef = forwardRef<InputRefType, SearchProps>(
  (props, ref) => {
    const {
      style,
      className,
      allowClear,
      error,
      disabled,
      placeholder,
      defaultValue,
      searchButton = false,
      boarderColor = "blue",
      size = "medium",
      variant = "outline",
      onChange,
      onClear,
      onFocus,
      onBlur,
      onSearch,
      onPressEnter,
      ...rest
    } = props

    const inputRef = useRef<InputRefType>({} as InputRefType)
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useMergeValue("", {
      defaultValue: defaultValue ? defaultValue : undefined,
      value: props.value ? props.value : undefined,
    })
    const stateValue = { error, disabled, focus, variant, size, boarderColor }

    const onValueChange = (v: string, e: ChangeEvent<HTMLInputElement>) => {
      if (!("value" in props) || !props.value) {
        setValue(v)
      }
      onChange?.(e)
    }

    const searchProp = {
      ...rest,
      disabled,
      allowClear,
      placeholder,
    }
    useImperativeHandle(ref, () => inputRef?.current, [])

    return (
      <div style={style} className={className}>
        <span css={applyContainerCss(variant)}>
          <span css={applyInputContainer(stateValue)}>
            <InputElement
              {...searchProp}
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
              onPressEnter={(e: React.KeyboardEvent<HTMLInputElement>) => {
                !disabled && props.onSearch?.(value)
                props.onPressEnter?.(e)
              }}
            />
            {!searchButton ? (
              <span css={applySuffixCls(stateValue)}>
                <SearchIcon
                  css={css(`color: ${globalColor(`--${illaPrefix}-gray-05`)};`)}
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
  },
)

Search.displayName = "Search"
