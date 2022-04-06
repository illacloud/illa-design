import { forwardRef } from "react"
import { CollapseProps } from "./interface"

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
    destroyOnHide,
    accordion,
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
    onChange && onChange(key, newActiveKeys, e)
  }

  return (
    <CollapseContext.Provider
      value={{
        activeKeys,
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
      <div ref={ref} css={applyCollapse(bordered)} {...otherProps}>
        {children}
      </div>
    </CollapseContext.Provider>
  )
}) as CollapseComponent

Collapse.Item = CollapseItem
Collapse.displayName = "Collapse"
