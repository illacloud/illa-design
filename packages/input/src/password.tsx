import { ChangeEvent, forwardRef, useState } from "react"
import { useMergeValue } from "@illa-design/system"
import { EyeOnIcon, EyeOffIcon } from "@illa-design/icon"
import {
  applyContainerCss,
  applyInputContainer,
  applySuffixCls,
  pointerStyle,
} from "./style"
import { PasswordProps } from "./interface"
import { InputElement } from "./input-element"
import { css } from "@emotion/react"

export const Password = forwardRef<HTMLDivElement, PasswordProps>(
  (props, ref) => {
    const {
      style,
      className,
      inputRef,
      allowClear,
      error,
      disabled,
      placeholder,
      defaultValue,
      onClear,
      onChange,
      onFocus,
      onBlur,
      requirePadding = true,
      invisibleButton = true,
      borderColor = "blue",
      size = "medium",
      variant = "outline",
      withoutNormalBorder,
      ...rest
    } = props

    const [visibility, setVisibility] = useState(false)
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
    }
    const passwordProp = {
      ...rest,
      type: visibility ? "text" : "password",
      size,
      disabled,
      placeholder,
      allowClear,
      onClear,
    }

    const onValueChange = (v: string, e: ChangeEvent<HTMLInputElement>) => {
      if (!("value" in props) || !props.value) {
        setValue(v)
      }
      props.onChange && props.onChange(e)
    }

    return (
      <div ref={ref} style={style} className={className}>
        <span css={applyContainerCss(stateValue)}>
          <span css={applyInputContainer(stateValue, requirePadding)}>
            <InputElement
              {...passwordProp}
              ref={inputRef}
              onFocus={(e) => {
                setFocus(true)
                props.onFocus && props.onFocus(e)
              }}
              onBlur={(e) => {
                setFocus(false)
                props.onBlur && props.onBlur(e)
              }}
              onClear={() => {
                if (!("value" in props) || !props.value) {
                  setValue("")
                }
                onClear?.()
              }}
              value={value}
              onValueChange={onValueChange}
            />
            {invisibleButton ? (
              <span
                css={css(pointerStyle, applySuffixCls(stateValue))}
                onClick={() => {
                  setVisibility(!visibility)
                }}
              >
                {visibility ? <EyeOnIcon /> : <EyeOffIcon />}
              </span>
            ) : null}
          </span>
        </span>
      </div>
    )
  },
)

Password.displayName = "Password"
