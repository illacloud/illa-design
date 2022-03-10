/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useState } from "react"
import { InputNumberProps } from "./interface"
import { Input, InputRefType } from "@illa-design/input"
import { PreIcon, NextIcon } from "@illa-design/icon"

type StepMethods = 'minus' | 'plus';

export const InputNumber = forwardRef<InputRefType, InputNumberProps>(
  (props, ref) => {
    const {
      style,
      className,
      defaultValue,
      value,
      error,
      disabled,
      readOnly,
      hideControl,
      placeholder,
      suffix,
      prefix,
      icons,
      precision,
      size,
      step = 1,
      mode = "embed",
      min = -Infinity,
      max = Infinity,
      parser = (input) => input.replace(/[^\w\.-]+/g, ""),
      formatter,
      onBlur,
      onFocus,
      onChange,
      onKeyDown,
      ...rest
    } = props

    const renderStepButton = !hideControl && !readOnly && mode === "embed"
    const [inputValue, setInputValue] = useState<string>('');
    const [isOutOfRange, setIsOutOfRange] = useState(false);
    const [isUserInputting, setIsUserInputting] = useState(false);

    const handleArrowKey = (event: any, method: StepMethods, needRepeat = false) => {
      event.persist();
      event.preventDefault();
      setIsUserInputting(false);

      if (disabled) {
        return;
      }

      let finalValue = min === -Infinity ? 0 : min;
    };

    const stepButtonEvents = (method: StepMethods) => {
      return readOnly
        ? {}
        : {
            onMouseDown: (e: any) => handleArrowKey(e, method, true),
            onMouseLeave: stop,
            onMouseUp: stop,
          }
    }

    return (
      <Input
        style={style}
        className={className}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        prefix={prefix}
        suffix={
          <>
            {renderStepButton ? (
              <div>
                <div {...stepButtonEvents("plus")}>
                  {icons && icons.up ? icons.up : <PreIcon />}
                </div>
                <div {...stepButtonEvents("minus")}>
                  {icons && icons.down ? icons.down : <NextIcon />}
                </div>
              </div>
            ) : null}
            {suffix && <span>{suffix}</span>}
          </>
        }
        {...rest}
      />
    )
  },
)

InputNumber.displayName = "InputNumber"
