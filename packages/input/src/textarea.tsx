/** @jsxImportSource @emotion/react */
import * as React from "react"
import { ChangeEvent, forwardRef, useEffect, useState, useMemo, ReactNode, useRef } from "react"
import { InputSize, TextAreaProps } from "./interface"
import { omit } from "@illa-design/system"
import {
  applyCountLimitStyle,
  applyInputContainer,
  applyLengthErrorStyle,
  applyPrefixCls,
} from "./style"
import { InputElement } from "./input-element"
import { applyContainerCss } from "./textarea-style"

export interface StateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  variant?: string
  size?: InputSize
}

export const Input = forwardRef<HTMLDivElement, TextAreaProps>((props, ref) => {

  const {
    allowClear,
    error,
    disabled,
    placeholder,
    maxLength,
    showCount,
    variant = "outline",
    ...rest
  } = props

  const otherProps = omit(rest, [
    "className",
    "defaultValue",
  ])

  const isComposition = useRef(false);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const [compositionValue, setCompositionValue] = useState<string|undefined>('');
  const valueLength = value ? value.length : 0;
  let suffix: ReactNode

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
  }

  if (maxLength && showCount) {
    suffix = (
      <span css={applyCountLimitStyle}>
        <span css={applyLengthErrorStyle(lengthError)}>{valueLength}</span>
        <span>/{maxLength}</span>
      </span>
    );
  }

  const onValueChange = (v: string, e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!('value' in props)) {
      setValue(v);
    }
    props.onChange && props.onChange(e);
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target?.value;
    if (!isComposition.current) {
      if (!onValueChange) {
        return;
      }
      onValueChange(newValue, e);
    } else {
      setCompositionValue(newValue);
    }
  };

  return <div ref={ref} {...otherProps}>
    <span css={applyContainerCss(variant)}>
      <span css={applyInputContainer(stateValue)}>
        <textarea
          value={value}
          onChange={onChange}
        />
        {suffix ? (<span css={applyPrefixCls}>{suffix}</span> ): null}
      </span>
    </span>
  </div>

})