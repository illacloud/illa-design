import { createIcon } from "../create-icon"

export const CopyIcon = createIcon({
  title: "CopyIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <rect
        x="3.5"
        y="5.5"
        width="7"
        height="7"
        rx="0.5"
        stroke="currentColor"
      />
      <path
        d="M5.5 3.5H11.5C12.0523 3.5 12.5 3.94772 12.5 4.5V10.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </>
  ),
})

CopyIcon.displayName = "CopyIcon"
