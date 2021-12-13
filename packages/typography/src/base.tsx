/** @jsxImportSource @emotion/react */
import { EllipsisConfig, EllipsisConfigBuilder } from "./ellipsis-config"
import * as React from "react"
import { FC, Fragment, MutableRefObject, useEffect, useRef, useState } from "react"
import {
  applyContainer,
  applyCopyableContainerSize,
  applyExpandLabelCss,
  applyFontColor,
  applyFontContentStyle,
} from "./heading-style"
import { CopyIcon } from "@illa-design/icon"
import { css } from "@storybook/theming"
import { measureElement, needMeasure } from "./measureElement"
import { BaseProps } from "./interface"


export const Base: FC<BaseProps> = (props) => {

  // get props
  const {
    colorScheme = "blackAlpha",
    ellipsis,
    bold = false,
    disabled = false,
    mark = false,
    underline = false,
    deleted = false,
    code = false,
    copyable = false,
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
        {originEllipsis.suffix && <span>{originEllipsis.suffix}</span>}
        {<span css={applyExpandLabelCss()} onClick={() => {
          setShowExpand(false)
        }}>{originEllipsis.expandLabel}</span>}
      </Fragment>}
      {copyable && <span css={applyCopyableContainerSize()}><CopyIcon /></span>}
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
  }, [props.children, ellipsis])

  return <>
    {content}
    {operation}
  </>
}