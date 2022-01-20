/** @jsxImportSource @emotion/react */
import * as React from "react"
import { ChangeEvent, forwardRef, useState, useMemo } from "react"
import { InputProps, InputSize } from "./interface"
import { omit } from "@illa-design/system"
import {
  applyAddonCss,
  applyContainerCss,
  applyCountLimitStyle,
  applyInputContainer,
  applyLengthErrorStyle,
  applyPrefixCls, applySuffixCls,
} from "./style"
import { InputElement } from "./input-element"

export interface StateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  variant?: string
  size?: InputSize
}

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {

  const {
    allowClear,
    error,
    disabled,
    placeholder,
    maxLength,
    showCount,
    prefix,
    addonAfter,
    addonBefore,
    size = "medium",
    variant = "outline",
    ...rest
  } = props

  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const valueLength = value ? value.length : 0;
  let suffix = props.suffix

  const lengthError = useMemo(() => {
    if (maxLength) {
      return valueLength > maxLength;
    }
    return false;
  }, [valueLength, maxLength]);

  const stateValue = {
    error: error || lengthError,
    disabled,
    focus,
    variant,
    size,
  }

  if (maxLength && showCount) {
    suffix = (
      <span css={applyCountLimitStyle}>
        <span css={applyLengthErrorStyle(lengthError)}>{valueLength}</span>
        <span>/{maxLength}</span>
      </span>
    );
  }

  const onValueChange = (v: string, e:ChangeEvent<HTMLInputElement>) => {
    if (!('value' in props) || !props.value) {
      setValue(v);
    }
    props.onChange && props.onChange(e);
  };

  const onClear = () => {
    if (!('value' in props) || !props.value) {
      setValue('');
    }
    props.onClear && props.onClear();
  }

  const otherProps = omit(rest, [
    "prefix",
    "suffix",
    "className",
    "defaultValue",
    "addonBefore",
    "addonAfter",
    "onClear",
    "onChange",
    "onFocus",
    "onBlur",
  ])

  const inputProps = {
    ...otherProps,
    onClear,
    allowClear,
    error,
    disabled,
    placeholder,
  }

  return <div ref={ref} {...otherProps}>
    <span css={applyContainerCss(variant)}>
      {addonBefore ? (<span css={applyAddonCss(stateValue)}>{addonBefore}</span> ): null}
      <span css={applyInputContainer(stateValue)}>
      {prefix ? (<span css={applyPrefixCls}>{prefix}</span> ): null}
        <InputElement
          {...inputProps}
          onFocus={(e) => {
            setFocus(true);
            props.onFocus && props.onFocus(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            props.onBlur && props.onBlur(e);
          }}
          value={value}
          onValueChange={onValueChange}
        />
        {suffix ? (<span css={applySuffixCls}>{suffix}</span> ): null}
      </span>
      {addonAfter ? (<span css={applyAddonCss(stateValue)}>{addonAfter}</span> ): null}
    </span>
  </div>

})
