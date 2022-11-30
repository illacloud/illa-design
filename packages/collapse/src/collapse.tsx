import { forwardRef } from "react"
import { CollapseProps } from "./interface"
import { CollapseContext } from "./collapse-context"
import { useMergeValue } from "@illa-design/system"
import { applyCollapseStyle } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

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

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (props, ref) => {
    const {
      children,
      bordered,
      expandIcon,
      lazyload,
      expandIconPosition = "left",
      destroyOnHide,
      accordion,
      defaultActiveKey,
      activeKey,
      onChange,
      showExpandIcon,
      triggerRegion,
      ...otherProps
    } = props

    const [activeKeys, setActiveKeys] = useMergeValue<string[]>([], {
      defaultValue: defaultActiveKey
        ? getActiveKeys(defaultActiveKey, accordion)
        : undefined,
      value: activeKey ? getActiveKeys(activeKey, accordion) : undefined,
    })

    return (
      <CollapseContext.Provider value={{}}>
        <div
          ref={ref}
          css={[applyCollapseStyle(bordered), applyBoxStyle(props)]}
          {...deleteCssProps(otherProps)}
        >
          {children}
        </div>
      </CollapseContext.Provider>
    )
  },
)

Collapse.displayName = "Collapse"
