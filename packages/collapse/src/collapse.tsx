import { forwardRef, MouseEvent } from "react"
import { CollapseProps, CollapseComponent } from "./interface"
import { CollapseContext } from "./collapse-context"
import { CollapseItem } from "./collapse-item"
import { CaretRightIcon, CaretLeftIcon } from "@illa-design/icon"
import { useMergeValue } from "@illa-design/system"
import { applyCollapseStyle } from "./style"
import { applyBoxStyle } from "@illa-design/theme"
import { deleteCssProps } from "@illa-design/theme"

const getActiveKeys = (
  keys: CollapseProps["activeKey"],
  accordion?: boolean,
): string[] => {
  if (typeof keys === "string") {
    keys = [keys]
  }
  const res = keys!.map((item) => item)
  if (accordion) {
    return res.slice(0, 1)
  }
  return res
}

export const Collapse: CollapseComponent = forwardRef<
  HTMLDivElement,
  CollapseProps
>((props, ref) => {
  const [activeKeys, setActiveKeys] = useMergeValue<string[]>([], {
    defaultValue:
      "defaultActiveKey" in props
        ? getActiveKeys(props.defaultActiveKey, props.accordion)
        : undefined,
    value:
      "activeKey" in props
        ? getActiveKeys(props.activeKey, props.accordion)
        : undefined,
  })

  const {
    children,
    bordered,
    expandIcon,
    expandIconPosition = "left",
    mode = "default",
    destroyOnHide,
    accordion,
    defaultActiveKey,
    activeKey,
    onChange,
    ...otherProps
  } = props

  const onItemClick = (key: string, e: MouseEvent<HTMLDivElement>): void => {
    let newActiveKeys = [...activeKeys]
    const index = activeKeys.indexOf(key)
    if (index > -1) {
      newActiveKeys.splice(index, 1)
    } else if (accordion) {
      newActiveKeys = [key]
    } else {
      newActiveKeys.push(key)
    }
    if (!("activeKey" in props)) {
      setActiveKeys(newActiveKeys)
    }
    onChange?.(key, newActiveKeys, e)
  }

  return (
    <CollapseContext.Provider
      value={{
        activeKeys,
        mode,
        onToggle: onItemClick,
        expandIcon:
          "expandIcon" in props ? (
            expandIcon
          ) : expandIconPosition === "right" ? (
            <CaretLeftIcon />
          ) : (
            <CaretRightIcon />
          ),
        destroyOnHide,
        expandIconPosition,
      }}
    >
      <div
        ref={ref}
        css={[applyCollapseStyle(bordered), applyBoxStyle(props)]}
        {...deleteCssProps(otherProps)}
      >
        {children}
      </div>
    </CollapseContext.Provider>
  )
}) as CollapseComponent

Collapse.Item = CollapseItem
Collapse.displayName = "Collapse"
