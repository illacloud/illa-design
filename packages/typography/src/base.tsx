/** @jsxImportSource @emotion/react */
import { Ellipsis, EllipsisBuilder } from "./ellipsis-config"
import * as React from "react"
import { FC, Fragment, MutableRefObject, useEffect, useRef, useState } from "react"
import {
  applyCopyableContainerSize,
  applyExpandLabelCss,
  applyFontColor,
  applyFontContentStyle,
} from "./base-style"
import { css } from "@storybook/theming"
import { measureElement } from "./measure-element"
import { BaseProps } from "./interface"
import { Copyable, CopyableBuilder } from "./copyable-config"

function getEllipsis(ellipsis?: boolean | Ellipsis): Ellipsis {
  let originEllipsis: Ellipsis
  if (typeof ellipsis == "boolean" && ellipsis) {
    originEllipsis = new EllipsisBuilder().create()
  } else if (typeof ellipsis == "boolean" && !ellipsis || ellipsis == undefined) {
    originEllipsis = new EllipsisBuilder().expandable(false).create()
  } else {
    originEllipsis = ellipsis
  }
  return originEllipsis
}

function getCopyable(copyable?: boolean | Copyable): Copyable {
  // get copyable
  let originCopyable: Copyable
  if (typeof copyable == "boolean" && copyable) {
    originCopyable = new CopyableBuilder().create()
  } else if (typeof copyable == "boolean" && !copyable || copyable == undefined) {
    originCopyable = new CopyableBuilder().copyIcon(null).copiedIcon(null).create()
  } else {
    originCopyable = copyable
  }
  return originCopyable
}

function copyToClipboard(text: string) {
  console.log(text)
  navigator.clipboard.writeText(text).then()
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
  const [copied, setCopied] = useState(false)
  const [currentFullText, setFullText] = useState("")

  // get ref
  const contentRef = useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>
  const operationRef = useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>

  // apply content
  const contentCss = css`
    ${applyFontColor(colorScheme)};
    ${applyFontContentStyle(bold, mark, underline, deleted, disabled, code)};
  `
  const content = <span ref={contentRef} css={contentCss}>
    {showExpand && clipShowText != "" ? clipShowText : props.children}
  </span>

  // apply operation
  const operation = <span ref={operationRef}>
    {showExpand && <Fragment>
      <span css={contentCss}>
        ...
        {originEllipsis.suffix && <span>{originEllipsis.suffix}</span>}
      </span>
      {<a css={applyExpandLabelCss()} onClick={() => {
        if (originEllipsis.onExpand != undefined) {
          originEllipsis.onExpand()
        }
        setShowExpand(false)
      }}>{originEllipsis.expandLabel}</a>}
    </Fragment>}
    {copyable && originCopyable.copyIcon &&
      <span onClick={() => {
        setCopied(true)
        copyToClipboard(currentFullText)
        if (originCopyable.onCopy != undefined) {
          originCopyable.onCopy()
        }
      }} css={applyCopyableContainerSize()}>{!copied ? originCopyable.copyIcon : originCopyable.copiedIcon}</span>
    }
  </span>

  // update clip text
  useEffect(() => {
    if (showExpand) {
      const {
        fullText,
        screenString,
        isClip,
      } = measureElement(contentRef.current, operationRef.current, originEllipsis.rows)
      setClipShowText(screenString)
      setFullText(fullText)
      setShowExpand(isClip)
    }
  }, [])

  return <>
    {content}
    {operation}
  </>
}