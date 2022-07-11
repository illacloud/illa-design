import { createIcon } from "../create-icon"

export const FullScreenIcon = createIcon({
  title: "FullScreenIcon",
  viewBox: "0 0 12 12",
  path: (
    <path
      d="M1 1h3M1 1v3m0-3 3 3M11 11H8m3 0V8m0 3L8 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
})

FullScreenIcon.displayName = "FullScreenIcon"
