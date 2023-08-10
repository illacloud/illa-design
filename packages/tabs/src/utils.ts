import { TabPosition } from "./interface"

export const isHorizontalLayout = (tabPosition?: TabPosition) => {
  return tabPosition === "left" || tabPosition === "right"
}
