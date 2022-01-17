/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useRef, useState, useImperativeHandle, ChangeEvent } from "react"
import { InputElementProps, InputProps } from "./interface"
import { omit } from "@illa-design/system"
import { applyInputContainer, applyInputStyle } from "./style"

export const InputElement = forwardRef<HTMLInputElement, InputElementProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>();
  const isComposition = useRef(false);
  const [compositionValue, setCompositionValue] = useState<string|undefined>('');

  const {
    allowClear,
    error,
    disabled,
    placeholder,
    showCount,
    onValueChange,
    maxLength,
    value,
    ...rest
  } = props

  const otherProps = omit(rest, [
    "prefix",
    "suffix",
    "className",
    "defaultValue",
    "addonBefore",
    "addonAfter",
    "showCount",
  ])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  // 处理中文输入
  const onComposition = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.type === 'compositionend') {
      isComposition.current = false;
      setCompositionValue(undefined);
      onValueChange && onValueChange(e.target.value, e);
    } else {
      isComposition.current = true;
    }
  };


  const inputProps = {
    ...otherProps,
    value: compositionValue || value || '',
    disabled,
    placeholder,
    onChange,
    onCompositionStart: onComposition,
    onCompositionUpdate: onComposition,
    onCompositionEnd: onComposition,
  }

  return <>
    <input css={applyInputStyle} {...inputProps} />
  </>

})
