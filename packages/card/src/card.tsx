import { forwardRef, Children, cloneElement, ReactElement } from "react"
import { CardGrid } from "./card-grid"
import { Meta } from "./meta"
import { CardProps } from "./interface"
import { Spin } from "@illa-design/spin"
import {
  applyCardActionItem,
  applyCard,
  applyCardActions,
  applyCardBody,
  applyCardCover,
  applyCardHeader,
  applyCardHeaderExtra,
  applyCardHeaderTitle,
  applyCardActionsRight,
} from "./style"

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    title,
    actions,
    extra,
    size = "medium",
    hoverable,
    cover,
    loading,
    bordered = true,
    children,
    isGridMode,
    ...restProps
  } = props

  let isContainGrid = false
  let isContainMeta = false

  Children.forEach(children, (element) => {
    if (element && (element as ReactElement).type) {
      if ((element as ReactElement).type === CardGrid) {
        isContainGrid = true
      } else if ((element as ReactElement).type === Meta) {
        isContainMeta = true
      }
    }
  })

  const actionList =
    actions && actions.length ? (
      <div css={applyCardActions(isContainMeta)}>
        <div css={applyCardActionsRight}>
          {actions.map((action, index) => (
            <span key={`action-${index}`} css={applyCardActionItem}>
              {action}
            </span>
          ))}
        </div>
      </div>
    ) : null

  const handledChildren = Children.map(
    children as ReactElement,
    (element: JSX.Element) => {
      if (element && element.type && element.type === Meta) {
        return cloneElement(element, { actionList })
      }
      return element
    },
  )

  return (
    <div
      ref={ref}
      css={applyCard(bordered, hoverable ?? false, isGridMode)}
      {...restProps}
    >
      {title || extra ? (
        <div css={applyCardHeader(size)}>
          {title && <div css={applyCardHeaderTitle}>{title}</div>}
          {extra && <div css={applyCardHeaderExtra}>{extra}</div>}
        </div>
      ) : null}

      {cover ? <div css={applyCardCover}>{cover}</div> : null}

      <div css={applyCardBody(size, loading ?? false, isContainGrid)}>
        {loading ? <Spin /> : handledChildren}
        {isContainMeta ? null : actionList}
      </div>
    </div>
  )
})

Card.displayName = "Card"
