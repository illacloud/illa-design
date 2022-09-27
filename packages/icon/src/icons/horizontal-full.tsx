import { createIcon } from "../create-icon"

export const HorizontalFullIcon = createIcon({
  title: "HorizontalFullIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.5C2 12.7761 2.22386 13 2.5 13C2.77614 13 3 12.7761 3 12.5L3 3.5C3 3.22386 2.77614 3 2.5 3C2.22386 3 2 3.22386 2 3.5L2 12.5ZM13 12.5C13 12.7761 13.2239 13 13.5 13C13.7761 13 14 12.7761 14 12.5L14 3.5C14 3.22386 13.7761 3 13.5 3C13.2239 3 13 3.22386 13 3.5L13 12.5Z"
        fill="currentColor"
      />
      <path
        d="M4 8L5.5 6.5M4 8L5.5 9.5M4 8H7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8L10.5 9.5M12 8L10.5 6.5M12 8H9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
})

HorizontalFullIcon.displayName = "HorizontalFullIcon"
