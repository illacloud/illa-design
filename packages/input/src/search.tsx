/** @jsxImportSource @emotion/react */
import * as React from "react"
import { ChangeEvent, forwardRef, useState } from "react"
import { SearchProps } from "./interface"
import { omit, useMergeValue } from "@illa-design/system"
import { SearchIcon } from "@illa-design/icon"
import {
  applyContainerCss,
  applyInputContainer, applySuffixCls,
} from "./style"
import { InputElement } from "./input-element"
import { Button } from "@illa-design/button"
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const Search = forwardRef<HTMLDivElement, SearchProps>((props, ref) => {

  const {
    allowClear,
    error,
    disabled,
    placeholder,
    defaultValue,
    searchButton = false,
    size = "medium",
    variant = "outline",
    ...rest
  } = props

  const otherProps = omit(rest, [
    "defaultValue",
    "onChange",
    "onClear",
  ])

  const [focus, setFocus] = useState(false)
  const [value, setValue] = useMergeValue('', {
      defaultValue: defaultValue ? defaultValue : undefined,
      value: props.value ? props.value: undefined,
    }
  )

  const stateValue = { error, disabled, focus, variant, size }

  const onValueChange = (v: string, e: ChangeEvent<HTMLInputElement>) => {
    if (!("value" in props) || !props.value) {
      setValue(v)
    }
    props.onChange && props.onChange(e)
  }

  const onClear = () => {
    if (!("value" in props) || !props.value) {
      setValue("")
    }
    props.onClear && props.onClear()
  }

  const searchProp = {
    ...rest,
    onClear,
    disabled,
    allowClear,
    placeholder,
  }

  return <div ref={ref} {...otherProps}>
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
              onClear={onClear}
            />
          {!searchButton ? (<span css={applySuffixCls}>
                <SearchIcon css={css(`color: ${globalColor(`--${illaPrefix}-gray-07`)};`)} />
            </span>) : null}
      </span>
      {searchButton ? (<span><Button buttonRadius="0 4px 4px 0" size={size} leftIcon={<SearchIcon />} /></span>) : null}
    </span>
  </div>

})
