import { createIcon } from "../create-icon"

export const PlusIcon = createIcon({
  title: "PlusIcon",
  viewBox: "0 0 12 12",
  path: (
    <>
      <path
        d="M11 6.75a.75.75 0 0 0 0-1.5v1.5zM1 5.25a.75.75 0 0 0 0 1.5v-1.5zm10 0H1v1.5h10v-1.5z"
        fill="currentColor"
      />
      <path
        d="M6.75 1a.75.75 0 0 0-1.5 0h1.5zm-1.5 10a.75.75 0 0 0 1.5 0h-1.5zm0-10v10h1.5V1h-1.5z"
        fill="currentColor"
      />
    </>
  ),
})

PlusIcon.displayName = "PlusIcon"
