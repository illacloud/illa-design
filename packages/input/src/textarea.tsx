/** @jsxImportSource @emotion/react */
import * as React from "react"
import { ChangeEvent, forwardRef, useEffect, useState, useMemo, ReactNode, useRef } from "react"
import { InputSize, TextAreaProps } from "./interface"
import { omit } from "@illa-design/system"
import {
  applyLengthErrorStyle,
  applyCountLimitStyle,
} from "./style"
import {
  applyContainerCss,
  applyTextAreaContainer,
  applyTextAreaStyle,
  applyPrefixCls
} from "./textarea-style"

export interface TextAreaState {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  variant?: string
  size?: InputSize
}

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>((props, ref) => {

  const {
    allowClear,
    error,
    disabled,
    placeholder,
    maxLength,
    showCount,
    autoSize,
    variant = "outline",
    ...rest
  } = props

  const otherProps = omit(rest, [
    "className",
    "defaultValue",
    "onChange",
  ])

  const textAreaRef = useRef<HTMLTextAreaElement>();
  const isComposition = useRef(false);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(props.value || "");
  const [compositionValue, setCompositionValue] = useState<string|undefined>();
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

  const autoResize = function() {
    if (textAreaRef?.current && autoSize) {
      const textStyle = window.getComputedStyle(textAreaRef.current as Element)
      const paddingSize =
        parseFloat(textStyle.getPropertyValue('padding-top')) +
        parseFloat(textStyle.getPropertyValue('padding-bottom'));
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef?.current?.scrollHeight - paddingSize  + 'px';
    }
  }

  if (maxLength && showCount) {
    suffix = (
      <span css={applyCountLimitStyle}>
        <span css={applyLengthErrorStyle(lengthError)}>{valueLength}</span>
        <span>/{maxLength}</span>
      </span>
    );
  }
  if (autoSize) {
    autoResize()
  }
  const onValueChange = (v: string, e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!('value' in props)) {
      setValue(v);
    }
    props.onChange && props.onChange(e);
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target?.value;
    if (autoSize) {
      autoResize()
    }
    if (!isComposition.current) {
      onValueChange(newValue, e);
    } else {
      setCompositionValue(newValue);
    }
  };

  // 处理中文输入
  const onComposition = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.type === 'compositionend') {
      isComposition.current = false;
      setCompositionValue(undefined);
      onValueChange && onValueChange(e.target.value, e);
    } else {
      isComposition.current = true;
    }
  };


  const textAreaProps = {
    ...otherProps,
    disabled,
    placeholder,
    value: compositionValue || value || '',
    onCompositionStart: onComposition,
    onCompositionUpdate: onComposition,
    onCompositionEnd: onComposition,
  }

  return <div ref={ref} {...otherProps}>
    <span css={applyContainerCss(variant)}>
      <span css={applyTextAreaContainer(stateValue)}>
        <textarea
          ref={textAreaRef}
          css={applyTextAreaStyle}
          {...textAreaProps}
          onChange={onChange}
          onFocus={(e) => {
            setFocus(true);
            props.onFocus && props.onFocus(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            props.onBlur && props.onBlur(e);
          }}
        />
      </span>
      {suffix ? (<span css={applyPrefixCls}>{suffix}</span> ): null}
    </span>
  </div>

})