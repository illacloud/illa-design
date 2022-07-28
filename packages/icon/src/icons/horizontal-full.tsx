import { createIcon } from "../create-icon"

export const HorizontalFullIcon = createIcon({
  title: "HorizontalFullIcon",
  viewBox: "0 0 14 14",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 11.5C1 11.7761 1.22386 12 1.5 12C1.77614 12 2 11.7761 2 11.5L2 2.5C2 2.22386 1.77614 2 1.5 2C1.22386 2 1 2.22386 1 2.5L1 11.5ZM12 11.5C12 11.7761 12.2239 12 12.5 12C12.7761 12 13 11.7761 13 11.5L13 2.5C13 2.22386 12.7761 2 12.5 2C12.2239 2 12 2.22386 12 2.5L12 11.5Z"
        fill="currentColor"
      />
      <path
        d="M3 7L4.5 5.5M3 7L4.5 8.5M3 7H6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7L9.5 8.5M11 7L9.5 5.5M11 7H8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
})

HorizontalFullIcon.displayName = "HorizontalFullIcon"
