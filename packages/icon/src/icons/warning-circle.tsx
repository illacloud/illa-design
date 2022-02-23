import { createIcon } from "../create-icon"

export const WarningCircleIcon = createIcon({
  title: "WarningCircleIcon",
  viewBox: "0 0 12 12",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2A.75.75 0 0 0 6 3zm0 6a.75.75 0 1 0 0-1.5A.75.75 0 0 0 6 9z"
        fill="#fff"
      />
    </>
  ),
})

WarningCircleIcon.displayName = "WarningCircleIcon"
