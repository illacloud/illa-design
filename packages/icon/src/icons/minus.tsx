import { createIcon } from "../create-icon"

export const MinusIcon = createIcon({
  title: "MinusIcon",
  viewBox: "0 0 16 16",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 3a1 1 0 0 0-1 1v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 1 0 2 0V9h3a1 1 0 1 0 0-2h-3V4a1 1 0 0 0-1-1z"
      fill="currentColor"
    />
  ),
})

MinusIcon.displayName = "MinusIcon"
