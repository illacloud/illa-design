import { forwardRef, MouseEvent, ReactNode } from "react"
import { MenuProps, SubMenuProps } from "../interface"
import {
  applyHorizontalSubMenuItemContainer,
  horizontalMenuContainerStyle,
  horizontalSubMenuIcon,
  horizontalSubMenuLabel,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { MenuContext } from "../menu-context"
import { HorizontalSubMenu } from "./horizontal-sub-menu"
import { HorizontalMenuItem } from "./horizontal-menu-item"
import { DropList, DropListItem } from "@illa-design/dropdown"
import { useMergeValue } from "@illa-design/system"

export const HorizontalMenu = forwardRef<HTMLDivElement, MenuProps>(
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
                  css={applyHorizontalSubMenuItemContainer(
                    colorScheme,
                    subItem.selected ??
                      finalSelectedValues.some((v) => v === subItem.value),
                    subItem.disabled,
                  )}
                >
                  {subItem.icon && (
                    <span css={horizontalSubMenuIcon}>{subItem.icon}</span>
                  )}
                  {subItem.label && (
                    <span css={horizontalSubMenuLabel}>{subItem.label}</span>
                  )}
                </div>
              }
            />
          )
        })

        return (
          <HorizontalSubMenu
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
              w="100%"
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
          </HorizontalSubMenu>
        )
      } else {
        return (
          <HorizontalMenuItem
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
          css={[horizontalMenuContainerStyle, applyBoxStyle(otherProps)]}
          ref={ref}
          {...deleteCssProps(otherProps)}
        >
          {c}
        </div>
      </MenuContext.Provider>
    )
  },
)

HorizontalMenu.displayName = "HorizontalMenu"
