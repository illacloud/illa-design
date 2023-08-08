import { createIcon } from "../create-icon"

export const PlusIcon = createIcon({
  title: "PlusIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        d="M12 8L4 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 4V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
})

PlusIcon.displayName = "PlusIcon"
