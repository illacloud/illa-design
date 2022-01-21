/** @jsxImportSource @emotion/react */
import * as React from "react"
import { ChangeEvent, forwardRef, useState } from "react"
import { PasswordProps } from "./interface"
import { omit, useMergeValue } from "@illa-design/system"
import { EyeOnIcon, EyeOffIcon } from "@illa-design/icon"
import {
  applyContainerCss,
  applyInputContainer, applySuffixCls,
  pointerStyle,
} from "./style"
import { InputElement } from "./input-element"
import { formatForRule } from "./utils"

export const Password = forwardRef<HTMLDivElement, PasswordProps>((props, ref) => {

  const {
    allowClear,
    error,
    disabled,
    placeholder,
    invisibleButton = true,
    size = "medium",
    variant = "outline",
    defaultValue,
    ...rest
  } = props

  const otherProps = omit(rest, [
    "defaultValue",
    "onChange",
    "onClear",
  ])

  const [visibility, setVisibility] = useState(false)
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useMergeValue('', {
      defaultValue: defaultValue ? defaultValue : undefined,
      value: props.value ? props.value: undefined,
    }
  )
  const stateValue = { error, disabled, focus, variant, size }

  const onClear = () => {
    if (!("value" in props) || !props.value) {
      setValue("")
    }
    props.onClear && props.onClear()
  }

  const onValueChange = (v: string, e: ChangeEvent<HTMLInputElement>) => {
    if (!("value" in props) || !props.value) {
      setValue(v)
    }
    props.onChange && props.onChange(e)
  }

  const passwordProp = {
    ...rest,
    type: visibility ? "text" : "password",
    placeholder,
    allowClear,
    onClear,
  }

  return <div ref={ref} {...otherProps}>
    <span css={applyContainerCss(variant)}>
        <span css={applyInputContainer(stateValue)}>
            <InputElement
              {...passwordProp}
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
            />
          {invisibleButton ?
            (<span css={applySuffixCls}>
                <span css={pointerStyle} onClick={() => {
                  setVisibility(!visibility)
                }}>
                  {visibility ? (<EyeOnIcon />) : (<EyeOffIcon />)}
                </span>
              </span>)
            : null}
        </span>
    </span>
  </div>

})
