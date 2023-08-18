import { createIcon } from "../create-icon"

export const LockIcon = createIcon({
  title: "LockIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        d="M10.5 6V7.5H5.5V6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6Z"
        stroke="currentColor"
      />
      <rect x="4" y="7" width="8" height="6" rx="1" fill="currentColor" />
    </>
  ),
})

LockIcon.displayName = "LockIcon"
