import { createIcon } from "../create-icon"

export const LikeIcon = createIcon({
  title: "LikeIcon",
  viewBox: "0 0 16 16",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8.892.83.121.057c.811.391 1.988 1.18 1.988 2.447 0 .502-.223 1.168-.669 1.998h2.526c1.99 0 2.447 1.756 1.99 3.071l-1.99 5.237a1.414 1.414 0 0 1-1.366 1.032H3.328v-9.34h1.365l2.967-4.22C7.847.812 8.353.584 8.892.83zM2.333 5.333v9.333H1V5.333h1.333z"
      fill="currentColor"
    />
  ),
})

LikeIcon.displayName = "LikeIcon"
