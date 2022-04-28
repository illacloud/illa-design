import { createIcon } from "../create-icon"

export const EmptyStateIcon = createIcon({
  title: "EmptyStateIcon",
  viewBox: "0 0 49 49",
  path: (
    <>
      <path
        d="m15.5 17.5 4 4M28.5 17.5l4 4M19.5 17.5l-4 4M32.5 17.5l-4 4M18.5 30.5s2.5-3 6-3 6 3 6 3"
        stroke="#86909C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M24.5 44.5c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
        stroke="#86909C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </>
  ),
})

EmptyStateIcon.displayName = "EmptyStateIcon"
