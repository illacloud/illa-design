import { forwardRef, MouseEventHandler, useState } from "react"
import { SwitchProps } from "./interface"
import {
  applySwitch,
  applySwitchDot,
  applySwitchText,
  applySwitchIcon,
} from "./style"
import { isObject } from "@illa-design/system"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    const {
      colorScheme = "blue",
      disabled,
      size = "medium",
      checkedText = "",
      uncheckedText = "",
      checkedIcon,
      uncheckedIcon,
      checked: propsChecked,
      defaultChecked,
      onChange,
      onClick,
      ...restProps
    } = props

    const [checked, setChecked] = useState<boolean>(defaultChecked ?? false)
    const mergedChecked = propsChecked !== void 0 ? propsChecked : checked

    const onHandleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      if (propsChecked === void 0) {
        setChecked(!mergedChecked)
      }
      onChange && onChange(!mergedChecked, event)
      onClick && onClick(event)
    }

    const renderText = mergedChecked ? checkedText : uncheckedText

    return (
      <button
        css={[
          applySwitch(colorScheme, mergedChecked, size),
          applyBoxStyle(props),
        ]}
        ref={ref}
        onClick={onHandleClick}
        disabled={disabled}
        type="button"
        {...deleteCssProps(restProps)}
      >
        <div css={applySwitchDot(size, mergedChecked, disabled ?? false)}>
          {(checkedIcon || uncheckedIcon) && (
            <div css={applySwitchIcon}>
              {mergedChecked ? checkedIcon : uncheckedIcon}
            </div>
          )}
        </div>
        <div css={applySwitchText(mergedChecked, size)}>
          {isObject(renderText) ? (
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
