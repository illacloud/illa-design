import { forwardRef, MouseEvent, ReactNode } from "react"
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
import { DropList, DropListItem } from "@illa-design/dropdown"
import { VerticalSubMenu } from "./vertical-sub-menu"
import { VerticalMenuItem } from "./vertical-menu-item"

export const VerticalMenu = forwardRef<HTMLDivElement, MenuProps>(
  (props, ref) => {
    const {
      defaultOpenedSubMenuValues,
      defaultSelectedValues,
      openedSubMenuValues,
      selectedValues,
      colorScheme = "blue",
      onClickSubMenu,
      onClickMenuItem,
      items,
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
            <DropListItem
              value={subItem.value}
              key={subItem.value}
              disabled={subItem.disabled}
              title={
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
            selected={
              subMenu.selected ??
              finalSelectedSubMenu.some((v) => v === subMenu.value)
            }
            opened={
              subMenu.opened ??
              finalOpenedSubMenuValues.some((v) => v === subMenu.value)
            }
            onVisibleChange={(opened) => {
              if (openedSubMenuValues === undefined) {
                if (opened) {
                  if (!finalOpenedSubMenuValues.includes(subMenu.value)) {
                    setFinalOpenedSubMenuValues([
                      ...finalOpenedSubMenuValues,
                      subMenu.value,
                    ])
                  }
                } else {
                  setFinalOpenedSubMenuValues(
                    finalOpenedSubMenuValues.filter((v) => v !== subMenu.value),
                  )
                }
              }
            }}
            onClick={() => {
              const openedSet = new Set([
                ...items
                  ?.filter((i) => "opened" in i && i.opened === true)
                  .map((i) => i.value),
                ...finalOpenedSubMenuValues,
              ])
              onClickSubMenu?.(subMenu.value, [...openedSet], [item.value])
            }}
          >
            <DropList
              w="200px"
              bdRadius="2px"
              onClickItem={(
                value: string,
                clickedNode: ReactNode,
                event: MouseEvent,
              ) => {
                onClickMenuItem?.(value, [item.value, value], event)
                if (selectedValues === undefined) {
                  if (!finalSelectedValues.includes(value)) {
                    setFinalSelectedValues([value])
                  }
                  if (!finalSelectedSubMenu.includes(item.value)) {
                    setFinalSelectedSubMenu([item.value])
                  }
                }
              }}
            >
              {subItems}
            </DropList>
          </VerticalSubMenu>
        )
      } else {
        return (
          <VerticalMenuItem
            key={item.value}
            value={item.value}
            icon={item.icon}
            label={item.label}
            disabled={item.disabled}
            selected={
              item.selected ?? finalSelectedValues.some((v) => v === item.value)
            }
            onClick={(e) => {
              if (item.disabled) return
              onClickMenuItem?.(item.value, [item.value], e)
              if (selectedValues === undefined) {
                if (!finalSelectedValues.includes(item.value)) {
                  setFinalSelectedValues([item.value])
                  setFinalSelectedSubMenu([])
                }
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
