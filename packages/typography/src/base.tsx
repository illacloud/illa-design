/** @jsxImportSource @emotion/react */
import { Ellipsis, EllipsisBuilder } from "./ellipsis-config"
import * as React from "react"
import { FC, Fragment, MutableRefObject, useEffect, useRef, useState } from "react"
import {
  applyContainer,
  applyCopyableContainerSize,
  applyExpandLabelCss,
  applyFontColor,
  applyFontContentStyle,
} from "./base-style"
import { css } from "@storybook/theming"
import { measureElement, needMeasure } from "./measure-element"
import { BaseProps } from "./interface"
import { Copyable, CopyableBuilder } from "./copyable-config"

function getEllipsis(ellipsis?: boolean | Ellipsis): Ellipsis {
  let originEllipsis: Ellipsis
  if (typeof ellipsis == "boolean" && ellipsis) {
    originEllipsis = new EllipsisBuilder().create()
  } else if (typeof ellipsis == "boolean" && !ellipsis || ellipsis == undefined) {
    originEllipsis = new EllipsisBuilder().expandable(false).create()
  } else {
    originEllipsis = ellipsis as Ellipsis
  }
  return originEllipsis
}

function getCopyable(copyable?: boolean | Copyable): Copyable {
  // get copyable
  let originCopyable: Copyable
  if (typeof copyable == "boolean" && copyable) {
    originCopyable = new CopyableBuilder().create()
  } else if (typeof copyable == "boolean" && !copyable || copyable == undefined) {
    originCopyable = new CopyableBuilder().icon(null).create()
  } else {
    originCopyable = copyable
  }
  return originCopyable
}

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
    copyable,
  } = props

  let originEllipsis = getEllipsis(ellipsis)
  let originCopyable = getCopyable(copyable)

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
      {originCopyable.icon != null && <span css={applyCopyableContainerSize()}>{originCopyable.icon}</span>}
    </span>}
  </>

  // apply content
  const contentCss = css`
    ${applyContainer()};
    ${applyFontColor(colorScheme)};
    ${applyFontContentStyle(bold, mark, underline, deleted, disabled, code)};
  `
  const content = <span ref={contentRef} css={contentCss}>
    {showExpand && clipShowText != "" ? clipShowText : props.children}
  </span>

  // update clip text
  useEffect(() => {
    if (showExpand) {
      if (needMeasure(contentRef.current, operationRef.current, originEllipsis.rows)) {
        setClipShowText(measureElement(contentRef.current, operationRef.current, originEllipsis.rows))
      } else {
        setShowExpand(false)
      }
    }
  }, [props.children, props])

  return <>
    {content}
    {operation}
  </>
}