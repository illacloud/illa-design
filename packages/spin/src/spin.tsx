import { cloneElement, forwardRef, ReactElement, useMemo } from "react"
import { SpinProps } from "./interface"
import { LoadingIcon } from "@illa-design/icon"
import {
  applyContainerStyle,
  applySizeCss,
  applySpinContainerCss,
  applyTipsStyle,
} from "./styles"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Spin = forwardRef<HTMLDivElement, SpinProps>((props, ref) => {
  const {
    loading = true,
    size = "medium",
    colorScheme = "blue",
    block = true,
    icon,
    element,
    tip,
    children,
    ...rest
  } = props

  const loadingIcon = useMemo(() => {
    if (icon) {
      return cloneElement(icon as ReactElement, {
        style: applySizeCss(size, loading, colorScheme).styles,
      })
    } else if (element) {
      return element
    } else {
      return <LoadingIcon css={applySizeCss(size, loading, colorScheme)} />
    }
  }, [colorScheme, element, icon, loading, size])

  const tipView = useMemo(() => {
    return tip && <span css={applyTipsStyle(colorScheme, size)}>{tip}</span>
  }, [colorScheme, tip, size])

  return (
    <div
      css={[applyContainerStyle(block), applyBoxStyle(props)]}
      ref={ref}
      {...deleteCssProps(rest)}
    >
      {children}
      {loading && (
        <div css={applySpinContainerCss(loading)}>
          {loadingIcon}
          {tipView}
        </div>
      )}
    </div>
  )
})

Spin.displayName = "Spin"
