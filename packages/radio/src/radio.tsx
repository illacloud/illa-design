/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useContext } from "react"
import { RadioProps } from "./interface"
import { RadioGroupContext } from "./radio-group"
import { applyMergeCss, applyRadioSize } from "./style"
import { useMergeValue } from "./hook"

export const Radio = forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const context = useContext(RadioGroupContext);
  const mergeProps = { ...props };
  const { children, disabled, value, onChange, ...otherProps  } = mergeProps;
  const colorScheme = props?.colorScheme ? props?.colorScheme : context?.colorScheme ?? "blue"
  if (context) {
    mergeProps.checked = context?.value === props?.value;
    mergeProps.disabled = !!(context?.disabled || props?.disabled);
  }

  const [currentChecked, setCurrentChecked] = useMergeValue(false, {
    value: mergeProps.checked,
    defaultValue: mergeProps.defaultChecked,
  })

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()
    if (context) {
      context.onChangeValue && context.onChangeValue(value, event);
    } else if (!('checked' in props) && !currentChecked) {
      setCurrentChecked(true);
    }
    !currentChecked && onChange && onChange(true, event);
  };

  return <label css={applyMergeCss(props)} ref={ref} {...otherProps}>
        <input
          type="radio"
          {...(context?.name ? { name: context.name } : {})}
          css={applyRadioSize(colorScheme)}
          value={value || ''}
          checked={currentChecked}
          disabled={disabled}
          onChange={onChangeValue}
        />
        {children}
      </label>

})
