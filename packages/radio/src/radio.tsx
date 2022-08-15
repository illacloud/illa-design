import { ChangeEvent, forwardRef, useContext } from "react"
import { useMergeValue } from "@illa-design/system"
import { applyBoxStyle } from "@illa-design/theme"
import { RadioProps } from "./interface"
import { RadioGroupContext } from "./radio-group-context"
import { radioTextCss, applyRadioContainerCss, applyRadioCss } from "./style"

export const Radio = forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const context = useContext(RadioGroupContext)
  const mergeProps = { ...props }
  const {
    style,
    className,
    children,
    checked,
    disabled,
    value,
    colorScheme = context?.colorScheme ?? "blue",
    onChange,
    ...otherProps
  } = mergeProps

  if (context) {
    mergeProps.checked = context?.value === props?.value
    mergeProps.disabled = !!(context?.disabled || props?.disabled)
  }

  const [currentChecked, setCurrentChecked] = useMergeValue(false, {
    value: mergeProps.checked,
    defaultValue: mergeProps.defaultChecked,
  })

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()
    if (context) {
      context.onChangeValue && context.onChangeValue(value, event)
    } else if (!("checked" in props) && !currentChecked) {
      setCurrentChecked(true)
    }
    !currentChecked && onChange && onChange(true, event)
  }

  const stateValue = {
    checked: currentChecked,
    size: context?.size,
    disabled: !!(context?.disabled || props?.disabled),
    colorScheme,
  }

  return (
    <label
      style={style}
      className={className}
      css={[
        applyRadioContainerCss(stateValue, context?.type),
        applyBoxStyle(props),
      ]}
      ref={ref}
      {...otherProps}
    >
      <input
        type="radio"
        {...(context?.name ? { name: context.name } : {})}
        css={applyRadioCss(colorScheme, context?.type)}
        value={value || ""}
        checked={currentChecked}
        disabled={disabled}
        onChange={onChangeValue}
      />
      <span css={radioTextCss}>{children}</span>
    </label>
  )
})

Radio.displayName = "Radio"
