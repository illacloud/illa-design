import { createIcon } from "../create-icon"

export const ExitIcon = createIcon({
  title: "ExitIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        d="M15 8H7.5M15 8l-2-2m2 2-2 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 5V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
})

ExitIcon.displayName = "ExitIcon"
