import { forwardRef, MouseEvent, useCallback } from "react"
import { CollapseProps } from "./interface"
import { CollapseContext } from "./collapse-context"
import { useMergeValue } from "@illa-design/system"
import { applyCollapseStyle } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

const getActiveKeys = (
  keys: string | string[],
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
      bordered = true,
      expandIcon,
      lazyload = true,
      expandIconPosition = "left",
      destroyOnHide,
      accordion,
      defaultActiveKey,
      activeKey,
      onChange,
      showExpandIcon = true,
      triggerRegion = "header",
      ...otherProps
    } = props

    const [activeKeys, setActiveKeys] = useMergeValue<string[]>([], {
      defaultValue: defaultActiveKey
        ? getActiveKeys(defaultActiveKey, accordion)
        : undefined,
      value: activeKey ? getActiveKeys(activeKey, accordion) : undefined,
    })

    const changeFun = useCallback(
      (key: string, keys: string[], e?: MouseEvent<HTMLDivElement>) => {
        let newKeys: string[] = []
        if (accordion) {
          if (keys.some((value) => value === key)) {
            newKeys = [key]
          } else {
            newKeys = []
          }
        } else {
          newKeys = keys
        }
        if (activeKey === undefined) {
          setActiveKeys(newKeys)
        }
        onChange?.(key, newKeys, e)
      },
      [accordion, activeKey, onChange, setActiveKeys],
    )

    return (
      <CollapseContext.Provider
        value={{
          destroyOnHide,
          lazyload,
          expandIconPosition,
          triggerRegion,
          expandIcon,
          showExpandIcon,
          activeKey: activeKeys,
          onToggle: changeFun,
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
  },
)

Collapse.displayName = "Collapse"
