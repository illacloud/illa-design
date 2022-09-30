import { createIcon } from "../create-icon"

export const UnlockIcon = createIcon({
  title: "UnlockIcon",
  viewBox: "0 0 12 12",
  path: (
    <>
      <rect x="1" y="5" width="8" height="6" rx="1" fill="currentColor" />
      <path
        d="M10 4V5H11V4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4V6H6V4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
        fill="currentColor"
      />
    </>
  ),
})

UnlockIcon.displayName = "UnlockIcon"
