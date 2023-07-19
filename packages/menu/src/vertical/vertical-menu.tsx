import { forwardRef, ReactNode } from "react"
import { MenuProps, SubMenuProps } from "../interface"
import { useMergeValue } from "@illa-design/system"
import { MenuContext } from "../menu-context"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import {
  applyVerticalSubMenuItemContainer,
  verticalMenuContainerStyle,
  verticalSubMenuIcon,
  verticalSubMenuLabel,
} from "./style"
import { VerticalSubMenu } from "./vertical-sub-menu"
import { VerticalMenuItem } from "./vertical-menu-item"

export const VerticalMenu = forwardRef<HTMLDivElement, MenuProps>(
  (props, ref) => {
    const {
      defaultOpenedSubMenuValues,
      defaultSelectedValues,
      hoverColorScheme = "grayBlue",
      openedSubMenuValues,
      selectedValues,
      horizontalAlign,
      colorScheme = "blue",
      onClickSubMenu,
      onClickMenuItem,
      items,
      onMenuSelect,
      onlyShowIcon,
      ...otherProps
    } = props

    const [finalOpenedSubMenuValues, setFinalOpenedSubMenuValues] =
      useMergeValue<string[]>([], {
        defaultValue: defaultOpenedSubMenuValues,
        value: openedSubMenuValues,
      })

    const [finalSelectedValues, setFinalSelectedValues] = useMergeValue<
      string[]
    >([], {
      defaultValue: defaultSelectedValues,
      value: selectedValues,
    })

    const defaultSelectedSubMenu: string[] = []
    const selectedSubMenu: string[] = []

    items?.forEach((item) => {
      if ("children" in item || "subItems" in item || "opened" in item) {
        const subMenu = item as SubMenuProps
        subMenu.subItems?.forEach((subItem) => {
          if (defaultSelectedValues?.includes(subItem.value)) {
            defaultSelectedSubMenu.push(subMenu.value)
          }
          if (selectedValues?.includes(subItem.value)) {
            selectedSubMenu.push(subMenu.value)
          }
        })
      }
    })

    const [finalSelectedSubMenu, setFinalSelectedSubMenu] = useMergeValue<
      string[]
    >([], {
      defaultValue: defaultSelectedValues ? defaultSelectedSubMenu : undefined,
      value: selectedValues ? selectedSubMenu : undefined,
    })

    const c: ReactNode[] | undefined = items?.map((item, index, array) => {
      if ("children" in item || "subItems" in item || "opened" in item) {
        const subMenu = item as SubMenuProps

        const subItems = subMenu.subItems?.map((subItem, index, array) => {
          return (
            <VerticalMenuItem
              value={subItem.value}
              key={subItem.value}
              sub={true}
              disabled={subItem.disabled}
              hidden={subItem.hidden}
              onClick={(e) => {
                if (subItem.disabled) return
                onClickMenuItem?.(
                  subItem.value,
                  [subMenu.value, subItem.value],
                  e,
                )
                if (!finalSelectedValues.includes(subItem.value)) {
                  if (selectedValues === undefined) {
                    setFinalSelectedValues([subItem.value])
                  }
                  onMenuSelect?.(
                    subItem.value,
                    [subMenu.value, subItem.value],
                    [subItem.value],
                  )
                }
                if (!finalSelectedSubMenu.includes(subMenu.value)) {
                  if (selectedValues === undefined) {
                    setFinalSelectedSubMenu([subMenu.value])
                  }
                }
              }}
              label={
                <div
                  css={applyVerticalSubMenuItemContainer(
                    colorScheme,
                    subItem.selected ??
                      finalSelectedValues.some((v) => v === subItem.value),
                    subItem.disabled,
                  )}
                >
                  {subItem.icon && (
                    <span css={verticalSubMenuIcon}>{subItem.icon}</span>
                  )}
                  {subItem.label && (
                    <span css={verticalSubMenuLabel}>{subItem.label}</span>
                  )}
                </div>
              }
            />
          )
        })

        return (
          <VerticalSubMenu
            key={subMenu.value}
            value={subMenu.value}
            icon={subMenu.icon}
            label={subMenu.label}
            disabled={subMenu.disabled}
            hidden={subMenu.hidden}
            selected={
              subMenu.selected ??
              finalSelectedSubMenu.some((v) => v === subMenu.value)
            }
            opened={
              subMenu.opened ??
              finalOpenedSubMenuValues.some((v) => v === subMenu.value)
            }
            onClick={() => {
              if (subMenu.disabled) return
              const openedSet = new Set([
                ...items
                  ?.filter((i) => "opened" in i && i.opened === true)
                  .map((i) => i.value),
                ...finalOpenedSubMenuValues,
              ])
              onClickSubMenu?.(subMenu.value, [...openedSet], [item.value])
              if (openedSubMenuValues === undefined) {
                if (!finalOpenedSubMenuValues.includes(subMenu.value)) {
                  setFinalOpenedSubMenuValues([
                    ...finalOpenedSubMenuValues,
                    subMenu.value,
                  ])
                } else {
                  setFinalOpenedSubMenuValues(
                    finalOpenedSubMenuValues.filter((v) => v !== subMenu.value),
                  )
                }
              }
            }}
          >
            {subItems}
          </VerticalSubMenu>
        )
      } else {
        return (
          <VerticalMenuItem
            key={item.value}
            value={item.value}
            icon={item.icon}
            label={item.label}
            sub={false}
            disabled={item.disabled}
            hidden={item.hidden}
            selected={
              item.selected ?? finalSelectedValues.some((v) => v === item.value)
            }
            onClick={(e) => {
              if (item.disabled) return
              onClickMenuItem?.(item.value, [item.value], e)

              if (!finalSelectedValues.includes(item.value)) {
                if (selectedValues === undefined) {
                  setFinalSelectedValues([item.value])
                  setFinalSelectedSubMenu([])
                }
                onMenuSelect?.(item.value, [item.value], [item.value])
              }
            }}
          />
        )
      }
    })

    return (
      <MenuContext.Provider
        value={{
          colorScheme,
          hoverColorScheme,
          onlyShowIcon,
        }}
      >
        <div
          css={[verticalMenuContainerStyle, applyBoxStyle(otherProps)]}
          ref={ref}
          {...deleteCssProps(otherProps)}
        >
          {c}
        </div>
      </MenuContext.Provider>
    )
  },
)

VerticalMenu.displayName = "VerticalMenu"
