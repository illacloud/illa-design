import { Ellipsis, EllipsisBuilder } from "./ellipsis-config"

import {
  Children,
  FC,
  Fragment,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  applyCopyableIconSize,
  applyExpandLabelCss,
  applyFontColor,
  applyFontContentStyle,
  applyOperationSpan,
} from "./base-style"
import { css } from "@emotion/react"
import { measureElement } from "./measure-element"
import { BaseProps } from "./interface"
import { Copyable, CopyableBuilder } from "./copyable-config"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Trigger } from "@illa-design/trigger"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import useMeasure from "react-use-measure"
import { SuccessCircleIcon, CopyIcon } from "@illa-design/icon"
import { mergedToString } from "@illa-design/system"

function getEllipsis(
  configProviderProps: ConfigProviderProps,
  ellipsis?: boolean | Ellipsis,
): Ellipsis {
  let originEllipsis: Ellipsis
  if (typeof ellipsis == "boolean" && ellipsis) {
    originEllipsis = new EllipsisBuilder().create()
  } else if (
    (typeof ellipsis == "boolean" && !ellipsis) ||
    ellipsis == undefined
  ) {
    originEllipsis = new EllipsisBuilder()
      .expandable(false)
      .tooltip(false)
      .create()
  } else {
    originEllipsis = ellipsis
  }
  const locale = configProviderProps.locale?.typography ?? def.typography
  if (originEllipsis.expandLabel == undefined) {
    originEllipsis.expandLabel = locale["expandLabel"]
  }
  if (originEllipsis.rows == undefined) {
    originEllipsis.rows = 2
  }
  return originEllipsis
}

function getCopyable(
  configProviderProps: ConfigProviderProps,
  copyable?: boolean | Copyable,
): Copyable {
  // get copyable
  let originCopyable: Copyable
  if (typeof copyable == "boolean" && copyable) {
    originCopyable = new CopyableBuilder().create()
  } else if (
    (typeof copyable == "boolean" && !copyable) ||
    copyable == undefined
  ) {
    originCopyable = new CopyableBuilder()
      .copyIcon(null)
      .copiedIcon(null)
      .create()
  } else {
    originCopyable = copyable
  }
  const locale = configProviderProps.locale?.typography ?? def.typography
  if (originCopyable.copyToolTip == undefined) {
    originCopyable.copyToolTip = locale["copyToolTip"]
  }
  if (originCopyable.copiedToolTip == undefined) {
    originCopyable.copiedToolTip = locale["copiedToolTip"]
  }
  if (originCopyable.copyIcon == undefined) {
    originCopyable.copyIcon = (
      <CopyIcon color={globalColor(`--${illaPrefix}-grayBlue-01`)} />
    )
  }
  if (originCopyable.copiedIcon == undefined) {
    originCopyable.copiedIcon = (
      <SuccessCircleIcon color={globalColor(`--${illaPrefix}-green-03`)} />
    )
  }
  return originCopyable
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then()
}

export const Base: FC<BaseProps> = (props) => {
  // get props
  const {
    colorScheme = "gray",
    ellipsis,
    bold,
    disabled,
    mark,
    underline,
    deleted,
    copyable,
  } = props

  let configContext = useContext<ConfigProviderProps>(ConfigProviderContext)

  let originEllipsis = getEllipsis(configContext, ellipsis)
  let originCopyable = getCopyable(configContext, copyable)

  // set expandable state
  const [showExpand, setShowExpand] = useState<boolean>(
    originEllipsis.expandable,
  )
  const [haveShowExpandSize, setHaveShowExpandSize] = useState<boolean>(false)
  const finalShowExpand = originEllipsis.expandable && showExpand

  const [clipShowText, setClipShowText] = useState("")
  const [copied, setCopied] = useState(false)

  // get ref
  const contentRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
  const operationRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>

  // apply content
  const contentCss = css`
    ${applyFontColor(colorScheme)};
    ${applyFontContentStyle(bold, mark, underline, deleted, disabled)};
  `
  const content = (
    <span ref={contentRef} css={contentCss}>
      {finalShowExpand ? clipShowText : props.children}
    </span>
  )

  // apply operation
  const copyableElement = (
    <span
      onClick={() => {
        setCopied(true)
        copyToClipboard(mergedToString(Children.toArray(props.children)))
        if (originCopyable.onCopy != undefined) {
          originCopyable.onCopy()
        }
      }}
      css={applyCopyableIconSize}
    >
      {!copied ? originCopyable.copyIcon : originCopyable.copiedIcon}
    </span>
  )

  const showCopyTooltip = copied
    ? originCopyable.copiedToolTip
    : originCopyable.copyToolTip

  const expandPanel = finalShowExpand && !haveShowExpandSize && (
    <Fragment>
      <span css={contentCss}>
        ...
        {originEllipsis.suffix && <span>{originEllipsis.suffix}</span>}
      </span>
      {
        <a
          css={applyExpandLabelCss()}
          onClick={() => {
            if (originEllipsis.onExpand != undefined) {
              originEllipsis.onExpand()
            }
            setShowExpand(false)
          }}
        >
          {originEllipsis.expandLabel}
        </a>
      }
    </Fragment>
  )

  const copyablePanel =
    copyable && originCopyable.copyIcon && showCopyTooltip ? (
      <Trigger
        closeOnClick={false}
        content={
          copied ? originCopyable.copiedToolTip : originCopyable.copyToolTip
        }
      >
        {copyableElement}
      </Trigger>
    ) : (
      copyableElement
    )

  const operation = (showExpand || copyable) && (
    <span ref={operationRef} css={applyOperationSpan}>
      {expandPanel}
      {copyablePanel}
    </span>
  )

  const [ref, { width }] = useMeasure({ polyfill: ResizeObserver })

  const base = (
    <span ref={ref}>
      {content}
      {operation}
    </span>
  )

  // update clip text
  useEffect(() => {
    let isMount = true
    if (finalShowExpand) {
      const { screenString, isClip } = measureElement(
        contentRef.current,
        operationRef.current,
        originEllipsis.rows,
        props.children,
      )
      if (isMount) {
        setClipShowText(screenString)
        setHaveShowExpandSize(!isClip)
      }
    }
    return () => {
      isMount = false
    }
  }, [width, finalShowExpand, originEllipsis.rows, props.children])

  return base
}
