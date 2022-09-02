import { FC } from "react"
import { ShortcutsProps } from "./interface"
import { applyShortContainerCss, shortCutsCss } from "./style"

export const ShortcutsComp: FC<ShortcutsProps> = (props) => {
  const {
    shortcuts,
    shortcutsPlacementLeft,
    handleShortEnter,
    handleShortLeave,
    onClickShortcut,
  } = props
  return shortcuts ? (
    <div css={applyShortContainerCss(shortcutsPlacementLeft)}>
      {shortcuts.map((item, key) => {
        return (
          <div
            css={shortCutsCss}
            key={key}
            onMouseEnter={() => handleShortEnter?.(item)}
            onMouseLeave={() => handleShortLeave?.(item)}
            onClick={() => {
              onClickShortcut?.(item)
            }}
          >
            {item.text}
          </div>
        )
      })}
    </div>
  ) : null
}

ShortcutsComp.displayName = "ShortcutsComp"
