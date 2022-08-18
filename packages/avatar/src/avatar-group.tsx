import { Children, CSSProperties, forwardRef, ReactNode } from "react"
import { AvatarGroupProps } from "./interface"
import { css } from "@emotion/react"
import { Avatar } from "./avatar"
import {
  applyBoxStyle,
  globalColor,
  illaPrefix,
  deleteCssProps,
} from "@illa-design/theme"
import { AvatarGroupContext } from "./avatar-group-context"

const avatarGroupCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const {
      zIndexAscend,
      maxCount = Number.MAX_VALUE,
      colorScheme,
      size,
      ...otherProps
    } = props

    const childrenCount = Children.count(props.children)
    let nodeList: ReactNode[]
    if (childrenCount <= maxCount) {
      nodeList = Children.toArray(props.children)
    } else {
      nodeList = Children.toArray(props.children).splice(0, maxCount)
    }
    if (childrenCount > maxCount) {
      nodeList = [
        ...nodeList,
        <Avatar
          colorScheme={"gray"}
          text={`+${childrenCount - maxCount}`}
          key="illa-more-avatar"
        />,
      ]
    }

    let marginLeft: string
    switch (props.size) {
      default:
      case "small":
        marginLeft = "-8px"
        break
      case "medium":
        marginLeft = "-12px"
        break
      case "large":
        marginLeft = "-20px"
        break
    }
    const newNodeList = Children.map(nodeList, (child, index) => {
      const isFirstAvatar = index === 0

      const style = {
        marginLeft: `${isFirstAvatar ? "0px" : marginLeft}`,
        border: `solid 2px ${globalColor(`--${illaPrefix}-white-01`)}`,
        borderRadius: "50%",
        zIndex: `${zIndexAscend ? index : nodeList.length - index}`,
      } as CSSProperties

      return (
        <AvatarGroupContext.Provider
          value={{
            zIndexAscend,
            maxCount,
            colorScheme,
            size,
          }}
        >
          {child}
        </AvatarGroupContext.Provider>
      )
    })
    return (
      <div
        css={css`
          display: inline-block;
          ${avatarGroupCss};
          ${applyBoxStyle(props)};
        `}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        {newNodeList}
      </div>
    )
  },
)

AvatarGroup.displayName = "AvatarGroup"
