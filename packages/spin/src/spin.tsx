import { cloneElement, forwardRef, ReactElement } from "react"
import { SpinProps } from "./interface"
import { LoadingIcon } from "@illa-design/icon"
import { isObject } from "@illa-design/system"
import {
  applySizeCss,
  applySpinContainerCss,
  containerCss,
  tipCss,
} from "./styles"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Spin = forwardRef<HTMLDivElement, SpinProps>((props, ref) => {
  const {
    loading = true,
    size = "medium",
    colorScheme = "blue",
    icon,
    element,
    tip,
    children,
    placeholder,
    ...rest
  } = props

  let loadingIcon
  if (icon) {
    loadingIcon = cloneElement(icon as ReactElement, {
      css: applySizeCss(size, loading, colorScheme),
    })
  } else if (element) {
    loadingIcon = element
  } else {
    loadingIcon = <LoadingIcon css={applySizeCss(size, loading, colorScheme)} />
  }
  let tipView
  if (isObject(tip)) {
    tipView = <span>{tip}</span>
  } else {
    tipView = <span css={tipCss}>{tip}</span>
  }

  return (
    <div
      placeholder={placeholder}
      css={[containerCss, applyBoxStyle(props)]}
      ref={ref}
      {...deleteCssProps(rest)}
    >
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

Spin.displayName = "Spin"
