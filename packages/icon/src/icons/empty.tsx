import { createIcon } from "../create-icon"

export const EmptyIcon = createIcon({
  title: "EmptyIcon",
  viewBox: "0 0 48 48",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.327 6a1 1 0 0 0-.79.386L1.217 18.38A.996.996 0 0 0 1 19v17.415C1 39.499 3.5 42 6.585 42h34.83C44.499 42 47 39.5 47 36.415V19a.996.996 0 0 0-.217-.622L37.418 6.385A1 1 0 0 0 36.63 6H11.327zM43.95 18 36.142 8H11.816L4.044 18H18a1 1 0 0 1 1 1 5 5 0 0 0 10 0 1 1 0 0 1 1-1h13.95zM3 36.415V20h14.072a7.001 7.001 0 0 0 13.858 0H45v16.415A3.585 3.585 0 0 1 41.415 40H6.585A3.585 3.585 0 0 1 3 36.415z"
      fill="currentColor"
    />
  ),
})

EmptyIcon.displayName = "EmptyIcon"
