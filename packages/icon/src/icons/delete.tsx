import { createIcon } from "../create-icon"

export const DeleteIcon = createIcon({
  title: "DeleteIcon",
  viewBox: "0 0 12 12",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1H10a1 1 0 1 1 0 2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 1 1 0-2h2.5zM4 5.5a.5.5 0 1 1 1 0v3a.5.5 0 0 1-1 0v-3zm3 0a.5.5 0 1 1 1 0v3a.5.5 0 0 1-1 0v-3z"
      fill="currentColor"
    />
  ),
})

DeleteIcon.displayName = "DeleteIcon"
