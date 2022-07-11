import { createIcon } from "../create-icon"

export const FullScreenIcon = createIcon({
  title: "FullScreenIcon",
  viewBox: "0 0 16 16",
  path: (
    <path
      d="M3 3h3M3 3v3m0-3 3 3M13 13h-3m3 0v-3m0 3-3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
})

FullScreenIcon.displayName = "FullScreenIcon"
