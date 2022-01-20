/** @jsxImportSource @emotion/react */
import { Ellipsis, EllipsisBuilder } from "./ellipsis-config"
import * as React from "react"
import { FC, Fragment, MutableRefObject, useContext, useEffect, useRef, useState } from "react"
import {
  applyCopyableContainerSize, applyCopyableIconSize,
  applyExpandLabelCss,
  applyFontColor,
  applyFontContentStyle,
  applyOperationSpan,
} from "./base-style"
import { css } from "@storybook/theming"
import mergedToString, { measureElement } from "./measure-element"
import { BaseProps } from "./interface"
import { Copyable, CopyableBuilder } from "./copyable-config"
import useSize from "react-use/lib/useSize"
import { Tooltip } from "@illa-design/tooltip"
import { ConfigProviderContext, ConfigProviderProps, def } from "@illa-design/config-provider"

function getEllipsis(ellipsis?: boolean | Ellipsis, configProviderProps?: ConfigProviderProps): Ellipsis {
  let originEllipsis: Ellipsis
  if (typeof ellipsis == "boolean" && ellipsis) {
    originEllipsis = new EllipsisBuilder().create()
  } else if ((typeof ellipsis == "boolean" && !ellipsis) || ellipsis == undefined) {
    originEllipsis = new EllipsisBuilder().expandable(false).tooltip(false).create()
  } else {
    originEllipsis = ellipsis
  }
  const locale = configProviderProps?.locale?.typography ?? def.typography
  if (originEllipsis.expandLabel == undefined) {
    originEllipsis.expandLabel = locale["expandLabel"]
  }
  return originEllipsis
}

function getCopyable(copyable?: boolean | Copyable, configProviderProps?: ConfigProviderProps): Copyable {
  // get copyable
  let originCopyable: Copyable
  if (typeof copyable == "boolean" && copyable) {
    originCopyable = new CopyableBuilder().create()
  } else if (typeof copyable == "boolean" && !copyable || copyable == undefined) {
    originCopyable = new CopyableBuilder().copyIcon(null).copiedIcon(null).create()
  } else {
    originCopyable = copyable
  }
  const locale = configProviderProps?.locale?.typography ?? def.typography
  if (originCopyable.copyTooltip == undefined) {
    originCopyable.copyTooltip = locale["copyTooltip"]
  }
  if (originCopyable.copiedToolTip == undefined) {
    originCopyable.copiedToolTip = locale["copiedToolTip"]
  }
  return originCopyable
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then()
}

export const Base: FC<BaseProps> = (props) => {

  // get props
  const {
    colorScheme = "blackAlpha",
    ellipsis,
    bold,
    disabled,
    mark,
    underline,
    deleted,
    code,
    copyable,
  } = props

  let configContext = useContext<ConfigProviderProps | undefined>(ConfigProviderContext)

  let originEllipsis = getEllipsis(ellipsis, configContext)
  let originCopyable = getCopyable(copyable, configContext)

  // set expandable state
  const [showExpand, setShowExpand] = useState<boolean>(originEllipsis.expandable)
  const [haveShowExpandSize, setHaveShowExpandSize] = useState<boolean>(false)
  const finalShowExpand = originEllipsis.expandable && showExpand

  const [clipShowText, setClipShowText] = useState("")
  const [copied, setCopied] = useState(false)

  // get ref
  const contentRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
  const operationRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>

  // apply content
  const contentCss = css`
    ${applyFontColor(colorScheme)};
    ${applyFontContentStyle(bold, mark, underline, deleted, disabled, code)};
  `
  const [content, { width }] = useSize(<span
    ref={contentRef}
    css={contentCss}>
    {finalShowExpand ? clipShowText : props.children}</span>)

  // apply operation
  const copyableElement = <span onClick={() => {
    setCopied(true)
    copyToClipboard(mergedToString(React.Children.toArray(props.children)))
    if (originCopyable.onCopy != undefined) {
      originCopyable.onCopy()
    }
  }} css={applyCopyableContainerSize()}>
    <span css={applyCopyableIconSize}>{!copied ? originCopyable.copyIcon : originCopyable.copiedIcon}</span>
  </span>

  const showCopyTooltip = copied ? originCopyable.copiedToolTip : originCopyable.copyTooltip

  const operation = <span css={applyOperationSpan} ref={operationRef}>
    {finalShowExpand && !haveShowExpandSize && <Fragment>
      <span css={contentCss}>
        ...
        {originEllipsis.suffix && <span css={applyOperationSpan}>{originEllipsis.suffix}</span>}
      </span>
      {<a css={applyExpandLabelCss()} onClick={() => {
        if (originEllipsis.onExpand != undefined) {
          originEllipsis.onExpand()
        }
        setShowExpand(false)
      }}>{originEllipsis.expandLabel}</a>}
    </Fragment>}
    {copyable && originCopyable.copyIcon &&
    showCopyTooltip ?
      <Tooltip closeOnClick={false} content={copied ? originCopyable.copiedToolTip : originCopyable.copyTooltip}>
        {copyableElement}
      </Tooltip> : copyableElement
    }
  </span>

  // update clip text
  useEffect(() => {
    let isMount = true
    if (finalShowExpand) {
      const {
        screenString,
        isClip,
      } = measureElement(contentRef.current, operationRef.current, originEllipsis.rows, props.children)
      if (isMount) {
        setClipShowText(screenString)
        setHaveShowExpandSize(!isClip)
      }
    }
    return () => {
      isMount = false
    }
  }, [width, finalShowExpand])

  return <>
    <span>{content}</span>
    {operation}
  </>
}