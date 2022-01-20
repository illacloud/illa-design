/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useRef, useState, ChangeEvent, useImperativeHandle } from "react"
import {InputElementProps, InputRefType} from "./interface"
import { omit } from "@illa-design/system"
import { ErrorIcon } from "@illa-design/icon"
import {applyInputStyle, pointerStyle} from "./style"
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const InputElement = forwardRef<InputRefType, InputElementProps>((props, ref) => {
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
    type,
    onClear,
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
    'onKeyDown',
    'onPressEnter',
  ])

  useImperativeHandle(
      ref,
      () => {
        return {
          dom: inputRef.current,
          focus: () => {
            inputRef?.current?.focus?.();
          },
          blur: () => {
            inputRef?.current?.blur?.();
          },
        };
      },
      []
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target?.value;
    if (!isComposition.current) {
      onValueChange && onValueChange(newValue, e);
    } else {
      setCompositionValue(newValue);
    }
  };

  // 处理中文输入
  const onComposition = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.type === 'compositionend') {
      isComposition.current = false;
      setCompositionValue(undefined);
      onValueChange && onValueChange(e?.target?.value, e);
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
    <input
      ref={inputRef}
      css={applyInputStyle}
      {...inputProps}
      {...(type ? { type } : {})}
    />
    {!disabled && allowClear && value ? (
      <span
        css={pointerStyle}
        onClick={(e) => {
          e.stopPropagation();
          inputRef?.current?.focus?.();
          onClear && onClear();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      ><ErrorIcon css={css(`color: ${globalColor(`--${illaPrefix}-gray-07`)}; margin-left: 10px;`)}/></span>
    ) : null}
  </>

})
