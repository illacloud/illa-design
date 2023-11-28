import { createIcon } from "../create-icon"

export const FullScreenIcon = createIcon({
  title: "FullScreenIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        d="M3 3H6M3 3V6M3 3L6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 13H10M13 13V10M13 13L10 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
})

FullScreenIcon.displayName = "FullScreenIcon"
