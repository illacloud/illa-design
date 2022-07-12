import { createIcon } from "../create-icon"

export const FullScreenIcon = createIcon({
  title: "FullScreenIcon",
  viewBox: "0 0 12 12",
  path: (
    <>
      <path
        d="M0.5 0.5H3.5M0.5 0.5V3.5M0.5 0.5L4 4"
        stroke="#0B0C0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 11.5H8.5M11.5 11.5V8.5M11.5 11.5L8 8"
        stroke="#0B0C0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
})

FullScreenIcon.displayName = "FullScreenIcon"
