import { createIcon } from "../create-icon"

export const SwitchIcon = createIcon({
  title: "SwitchIcon",
  viewBox: "0 0 12 12",
  path: (
    <>
      <path
        d="M3.5 2.5L1.5 4.5H10.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.5L10.5 7.5H1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
})

SwitchIcon.displayName = "SwitchIcon"
