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
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Password = forwardRef<HTMLDivElement, PasswordProps>(
  (props, ref) => {
    const {
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
      bdRadius: borderRadius,
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
      borderRadius,
      withoutNormalBorder,
    }

    const passwordProp = {
      ...deleteCssProps(rest),
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
      <div
        ref={ref}
        css={[applyContainerCss(size), applyBoxStyle(props)]}
      >
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
              css={css(pointerStyle, applySuffixCls(size))}
              onClick={() => {
                setVisibility(!visibility)
              }}
            >
              {visibility ? <EyeOnIcon /> : <EyeOffIcon />}
            </span>
          ) : null}
        </span>
      </div>
    )
  },
)

Password.displayName = "Password"
