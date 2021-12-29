/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useEffect, useRef, useState } from "react"
import { RadioProps } from "./interface"
import { RadioGroupContext } from "./radio-group"
import { css } from "@emotion/react"
import { applyMergeCss, applyRadioSize } from "./style"
import { useMergeValue } from "./hook"
import * as events from "events"

const applyOuterCss = css`
  vertical-align: middle;
  display: inline-flex;
`

export const Radio = forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const length = '16px';
  const { children, disabled, checked } = props
  const colorScheme = props?.colorScheme ?? "blue"
  const currentChecked = useMergeValue(false, {
    value: props.checked,
    defaultValue: props.defaultChecked,
  });

  return <RadioGroupContext.Consumer>
    {value => {

      const currentName = props?.name || value?.name

      return <label css={applyMergeCss(props)}>
        <input
          type="radio"
          name={currentName}
          css={applyRadioSize(colorScheme, length)}
          value={props.value}
          defaultChecked={props.defaultChecked}
          checked={props.checked}
          disabled={props.disabled}
        />
        {children}
      </label>
    }
    }
  </RadioGroupContext.Consumer>

})
