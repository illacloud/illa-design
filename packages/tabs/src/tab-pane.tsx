import { FC, useContext, useRef, MouseEvent } from "react"
import { TabPaneProps } from "./interface"
import { TabContext } from "./context/context"

import { motion } from "framer-motion"
import {
  lineStyle,
  panelContainerStyle,
  panelItemStyle,
  panelTitleStyle,
  tabsItemAfterStyle,
  titleStyle,
} from "./style"
import { CloseIcon } from "@illa-design/icon"

export const TabPane: FC<TabPaneProps> = (props) => {
  const {
    title,
    disabled = false,
    closable,
    tabsItemAfter,
    tabsItemColorScheme,
    tabsItemActiveColorScheme,
  } = props
  const {
    selectedKey,
    size = "medium",
    tabPosition = "top",
    variant = "line",
    colorScheme = "blue",
    handleSelectTab,
    handleDeleteTab,
  } = useContext(TabContext)
  const panelItemRef = useRef<HTMLDivElement>(null)
  const isSelectKey = selectedKey === props["data-key"]
  const onDeleteTab = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation()
    !disabled && handleDeleteTab(props["data-key"])
  }

  return (
    <div
      css={panelContainerStyle(variant, tabPosition)}
      ref={panelItemRef}
      onClick={() => !disabled && handleSelectTab(props["data-key"])}
    >
      <div css={panelItemStyle(tabPosition)}>
        <div
          css={panelTitleStyle(
            size,
            tabPosition,
            variant,
            disabled,
            isSelectKey,
          )}
        >
          <span
            css={titleStyle(
              disabled,
              isSelectKey,
              colorScheme,
              tabsItemColorScheme,
              tabsItemActiveColorScheme,
            )}
          >
            {title}
          </span>
          {closable ? <CloseIcon size="12" onClick={onDeleteTab} /> : null}
        </div>
        {variant === "line" && isSelectKey ? (
          <motion.div
            css={lineStyle(
              colorScheme,
              tabPosition,
              disabled,
              tabsItemActiveColorScheme,
            )}
            layoutId="underline"
          />
        ) : null}
      </div>
      {tabsItemAfter && (
        <div css={tabsItemAfterStyle(tabPosition)}>{tabsItemAfter}</div>
      )}
    </div>
  )
}
TabPane.displayName = "TabPane"
