import { createIcon } from "../create-icon"

export const WarningIcon = createIcon({
  title: "WarningIcon",
  viewBox: "0 0 16 16",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      fill="currentColor"
    />
  ),
})

WarningIcon.displayName = "WarningIcon"
