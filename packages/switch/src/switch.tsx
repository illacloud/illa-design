/** @jsxImportSource @emotion/react */
import React, { forwardRef, useState } from "react"
import { SwitchProps } from "./interface"
import * as _ from "lodash"
import {
  applySwitch,
  applySwitchDot,
  applySwitchText,
  applySwitchIcon,
} from "./style"

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    const {
      colorScheme = "blue",
      disabled = false,
      size = "medium",
      checkedText = "",
      uncheckedText = "",
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
        onChange && onChange(!mergedChecked, event)
      }
      onClick && onClick(event)
    }

    const renderText = mergedChecked ? checkedText : uncheckedText

    return (
      <button
        css={applySwitch(colorScheme, mergedChecked, size)}
        ref={ref}
        onClick={onHandleClick}
        disabled={disabled}
        type="button"
        {...restProps}
      >
        <div css={applySwitchDot(size, mergedChecked, disabled)}>
          {(checkedIcon || uncheckedIcon) && (
            <div css={applySwitchIcon}>
              {mergedChecked ? checkedIcon : uncheckedIcon}
            </div>
          )}
        </div>
        <div css={applySwitchText(mergedChecked, size)}>
          {_.isObject(renderText) ? (
            <div css={applySwitchIcon}>{renderText}</div>
          ) : (
            renderText
          )}
        </div>
      </button>
    )
  },
)

Switch.displayName = "Switch"
