/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useEffect, useContext, useCallback } from "react"
import { useMergeValue } from "@illa-design/system"
import { CheckmarkIcon } from "@illa-design/icon"
import { CheckboxProps } from "./interface"
import { CheckboxGroupContext } from "./checkbox-group"
import { applyMergeCss, applyCheckboxSize, applyCheckState } from "./style"
import { omit } from "@illa-design/system"

export type CheckboxRef = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CheckboxProps> & React.RefAttributes<unknown>
>

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (props, ref) => {
    const context = useContext(CheckboxGroupContext)
    const { onGroupChange } = context
    const mergeProps = { ...props }
    const { children, disabled, value, onChange, ...otherProps } = mergeProps
    if (context.isGroup) {
        console.log(context, 'context')
      mergeProps.checked =
        context.checkboxGroupValue.indexOf(props.value) !== -1
      mergeProps.disabled =
        "disabled" in props ? disabled : context?.disabled
    }

    const [currentChecked, setCurrentChecked] = useMergeValue(false, {
      value: mergeProps.checked,
      defaultValue: mergeProps.defaultChecked,
    })

    useEffect(() => {
      context.registerValue(value)
      return () => {
        context.unRegisterValue(value)
      }
    }, [value])

    return (
      <label
        css={applyMergeCss(props)}
        ref={ref}
        {...otherProps}
      >
        <input
          type="checkbox"
          css={applyCheckboxSize}
          value={value}
          checked={currentChecked}
          disabled={disabled}
          onChange={useCallback(
            (e) => {
              e.persist()
              e.stopPropagation()
              setCurrentChecked(e.target.checked)
              if (context.isGroup) {
                onGroupChange && onGroupChange(props.value, e.target.checked, e)
              }
              props.onChange && props.onChange(e.target.checked, e)
            },
            [onGroupChange, context.isGroup, props.onChange, props.value],
          )}
          onClick={(e) => e.stopPropagation()}
        />
          <CheckmarkIcon css={applyCheckState(currentChecked)} />
        {children}
      </label>
    )
  },
)

Checkbox.displayName = "Checkbox"
