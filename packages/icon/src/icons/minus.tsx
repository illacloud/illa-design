import { createIcon } from "../create-icon"

export const MinusIcon = createIcon({
  title: "MinusIcon",
  viewBox: "0 0 12 12",
  path: (
    <path
      d="M11 6.75a.75.75 0 0 0 0-1.5v1.5zM1 5.25a.75.75 0 0 0 0 1.5v-1.5zm10 0H1v1.5h10v-1.5z"
      fill="currentColor"
    />
  ),
})

MinusIcon.displayName = "MinusIcon"
