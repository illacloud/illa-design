import { ChangeEvent, forwardRef, useContext } from "react"
import { useMergeValue } from "@illa-design/system"
import { ReduceIcon, SuccessIcon } from "@illa-design/icon"
import { CheckboxOption, CheckboxProps } from "./interface"
import {
  applyCheckboxSize,
  applyCheckState,
  applyMergeCss,
  childrenContainerCss,
} from "./style"
import { CheckboxGroupContext } from "./context"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (props, ref) => {
    const {
      value,
      disabled,
      checked,
      defaultChecked,
      indeterminate,
      onChange,
      colorScheme = "blue",
      children,
      ...otherProps
    } = props

    const context = useContext(CheckboxGroupContext)

    const finalChecked =
      checked ?? context.value?.some((item) => item === value)
    const finalDefaultChecked =
      defaultChecked ?? context.defaultValue?.some((item) => item === value)

    const [currentChecked, setCurrentChecked] = useMergeValue(false, {
      value: finalChecked,
      defaultValue: finalDefaultChecked,
    })

    return (
      <label
        css={[applyMergeCss(props), applyBoxStyle(props)]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        <input
          type="checkbox"
          css={applyCheckboxSize(currentChecked || indeterminate, colorScheme)}
          value={
            typeof value === "object" ? (value as CheckboxOption).value : value
          }
          checked={currentChecked}
          disabled={disabled}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (checked === undefined) {
              setCurrentChecked(e.target.checked)
            }
            onChange?.(e.target.checked, e)
          }}
        />
        {indeterminate ? (
          <ReduceIcon css={applyCheckState(true)} />
        ) : (
          <SuccessIcon css={applyCheckState(currentChecked)} />
        )}
        {children && <span css={childrenContainerCss}> {children}</span>}
      </label>
    )
  },
)

Checkbox.displayName = "Checkbox"
