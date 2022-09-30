import { createIcon } from "../create-icon"

export const LockIcon = createIcon({
  title: "LockIcon",
  viewBox: "0 0 12 12",
  path: (
    <>
      <path
        d="M8.5 4V5.5H3.5V4C3.5 2.61929 4.61929 1.5 6 1.5C7.38071 1.5 8.5 2.61929 8.5 4Z"
        stroke="currentColor"
      />
      <rect x="2" y="5" width="8" height="6" rx="1" fill="currentColor" />
    </>
  ),
})

LockIcon.displayName = "LockIcon"
