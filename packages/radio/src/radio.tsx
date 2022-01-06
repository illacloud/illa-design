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
  const { children, disabled, value  } = mergeProps;
  const colorScheme = props?.colorScheme ? props?.colorScheme : context?.colorScheme ?? "blue"
  if (context) {
    mergeProps.checked = context?.value === props?.value;
    mergeProps.disabled = !!(context?.disabled || props?.disabled);
  }

  const [currentChecked, setCurrentChecked] = useMergeValue(false, {
    value: mergeProps.checked,
    defaultValue: mergeProps.defaultChecked,
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { onChange, value } = mergeProps;
    if (context) {
      context.onChangeValue && context.onChangeValue(value, event);
    } else if (!('checked' in props) && !currentChecked) {
      setCurrentChecked(true);
    }
    !currentChecked && onChange && onChange(true, event);
  };

  return <label css={applyMergeCss(props)} ref={ref}>
        <input
          type="radio"
          {...(context?.name ? { name: context.name } : {})}
          css={applyRadioSize(colorScheme)}
          value={value||''}
          checked={currentChecked}
          disabled={disabled}
          onChange={onChange}
        />
        {children}
      </label>

})
