/** @jsxImportSource @emotion/react */
import React, { forwardRef, ReactElement } from "react"
import { SpinProps } from "./interface"
import { LoadingIcon, LoadingGradientIcon } from "@illa-design/icon"
import {
  applySizeCss,
  applySpinContainerCss,
  containerCss,
  tipCss,
} from "./styles"

export function isObject(obj: any): obj is { [key: string]: any } {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

export const Spin = forwardRef<HTMLDivElement, SpinProps>((props, ref) => {
  const {
    loading = true,
    size = "medium",
    icon,
    element,
    tip,
    type = "circle",
    children,
    placeholder,
    ...rest
  } = props

  let loadingIcon
  if (icon) {
    loadingIcon = React.cloneElement(icon as ReactElement, {
      css: applySizeCss(size, loading),
    })
  } else if (element) {
    loadingIcon = element
  } else {
    if (type === "circle") {
      loadingIcon = <LoadingIcon css={applySizeCss(size, loading)} />
    } else {
      loadingIcon = <LoadingGradientIcon css={applySizeCss(size, loading)} />
    }
  }
  let tipView
  if (isObject(tip)) {
    tipView = <span>{tip}</span>
  } else {
    tipView = <span css={tipCss}>{tip}</span>
  }

  return (
    <div placeholder={placeholder} css={containerCss} ref={ref} {...rest}>
      {children}
      {loading && (
        <div css={applySpinContainerCss(loading)}>
          <span>{loadingIcon}</span>
          <span>{tip && tipView} </span>
        </div>
      )}
    </div>
  )
})
