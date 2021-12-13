/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, Fragment, MutableRefObject, useEffect, useRef, useState } from "react"
import { HeadingProps } from "./interface"
import { css } from "@storybook/theming"
import {
  applyContainer,
  applyCopyableContainerSize,
  applyExpandLabelCss,
  applyFontColor,
  applyFontContentStyle,
} from "./heading-style"
import { CopyIcon } from "@illa-design/icon"
import { EllipsisConfig, EllipsisConfigBuilder } from "./ellipsis-config"
import { measureElement, needMeasure } from "./measureElement"

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {

  // get props
  const {
    colorScheme = "blackAlpha",
    level = "h2",
    ellipsis,
    bold = false,
    disabled = false,
    mark = false,
    underline = false,
    deleted = false,
    code = false,
    copyable = false,
    ...otherProps
  } = props

  // get ellipsis
  let originEllipsis: EllipsisConfig
  if (typeof ellipsis == "boolean" && ellipsis) {
    originEllipsis = new EllipsisConfigBuilder().create()
  } else if (typeof ellipsis == "boolean" && !ellipsis || ellipsis == undefined) {
    originEllipsis = new EllipsisConfigBuilder().expandable(false).create()
  } else {
    originEllipsis = ellipsis as EllipsisConfig
  }

  // set expandable state
  const [showExpand, setShowExpand] = useState<boolean>(originEllipsis.expandable)

  const [clipShowText, setClipShowText] = useState("")

  // get ref
  const contentRef = useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>
  const operationRef = useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>

  // apply operation
  const operation = <>
    {(showExpand || copyable) && <span ref={operationRef}>
      {showExpand && <Fragment>
        ...
        {<span>{originEllipsis.suffix}</span>}
        {<span css={applyExpandLabelCss()} onClick={() => {
          setShowExpand(false)
        }}>{originEllipsis.expandLabel}</span>}
      </Fragment>}
      {copyable && <span css={applyCopyableContainerSize(level)}><CopyIcon /></span>}
    </span>}
  </>

  // apply content
  const contentCss = css`
    ${applyContainer()};
    ${applyFontColor(colorScheme)};
    ${applyFontContentStyle(bold, mark, underline, deleted, disabled, code)};
  `
  const content = <span ref={contentRef}
                        css={contentCss}>{showExpand && clipShowText != "" ? clipShowText : props.children}</span>

  // update clip text
  useEffect(() => {
    if (showExpand) {
      if (needMeasure(contentRef.current, operationRef.current, originEllipsis.rows)) {
        setClipShowText(measureElement(contentRef.current, operationRef.current, originEllipsis.rows))
      } else {
        setShowExpand(false)
      }
    }
  }, [props.children])

  switch (level) {
    case "h1":
      return <h1 ref={ref} {...otherProps}>
        {content}
        {operation}
      </h1>
    case "h2":
      return <h2 ref={ref} {...otherProps}>
        {content}
        {operation}
      </h2>
    case "h3":
      return <h3 ref={ref} {...otherProps}>
        {content}
        {operation}
      </h3>
    case "h4":
      return <h4 ref={ref} {...otherProps}>
        {content}
        {operation}
      </h4>
    case "h5":
      return <h5 ref={ref} {...otherProps}>
        {content}
        {operation}
      </h5>
    case "h6":
      return <h6 ref={ref} {...otherProps}>
        {content}
        {operation}
      </h6>
  }

})
