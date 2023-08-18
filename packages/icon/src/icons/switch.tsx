import { createIcon } from "../create-icon"

export const SwitchIcon = createIcon({
  title: "SwitchIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        d="M5.5 4.5L3.5 6.5H12.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 11.5L12.5 9.5H3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
})

SwitchIcon.displayName = "SwitchIcon"
