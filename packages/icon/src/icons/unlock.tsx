import { createIcon } from "../create-icon"

export const UnlockIcon = createIcon({
  title: "UnlockIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <rect x="3" y="7" width="8" height="6" rx="1" fill="currentColor" />
      <path
        d="M12 6V7H13V6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6V8H8V6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6Z"
        fill="currentColor"
      />
    </>
  ),
})

UnlockIcon.displayName = "UnlockIcon"
