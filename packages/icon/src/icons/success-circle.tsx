import { createIcon } from "../create-icon"

export const SuccessCircleIcon = createIcon({
  title: "SuccessCircleIcon",
  viewBox: "0 0 12 12",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.32 4.116a.5.5 0 0 1 .064.704l-2.5 3a.5.5 0 0 1-.738.034l-1.5-1.5a.5.5 0 1 1 .708-.708L5.466 6.76l2.15-2.58a.5.5 0 0 1 .704-.063z"
        fill="#fff"
      />
    </>
  ),
})

SuccessCircleIcon.displayName = "SuccessCircleIcon"
