/** @jsxImportSource @emotion/react */
import React, { forwardRef, useState } from "react"
import { SwitchProps } from "./interface"
import { applySwitch, applySwitchDot } from "./style"

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    const {
      colorScheme = "blue",
      disabled = false,
      size = "medium",
      checkedText,
      uncheckedText,
      checkedIcon,
      uncheckedIcon,
      checked: propsChecked,
      defaultChecked = false,
      onChange,
      onClick,
      ...restProps
    } = props

    const [checked, setChecked] = useState<boolean>(defaultChecked)
    const mergedChecked = propsChecked !== void 0 ? propsChecked : checked

    const onHandleClick: React.MouseEventHandler<HTMLButtonElement> = (
      event,
    ) => {
      if (propsChecked === void 0) {
        setChecked(!mergedChecked)
      }
      onChange && onChange(!mergedChecked, event)
      onClick && onClick(event)
    }

    return (
      <button
        css={applySwitch(colorScheme, disabled, mergedChecked, size)}
        ref={ref}
        onClick={onHandleClick}
        disabled={disabled}
        type="button"
        {...restProps}
      >
        <div css={applySwitchDot(size, mergedChecked)}></div>
      </button>
    )
  },
)
