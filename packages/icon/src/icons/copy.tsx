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
        d="M6 3.5H10.5C11.6046 3.5 12.5 4.39543 12.5 5.5V10"
        stroke="currentColor"
      />
    </>
  ),
})

CopyIcon.displayName = "CopyIcon"
