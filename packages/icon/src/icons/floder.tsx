import { createIcon } from "../create-icon"

export const FolderIcon = createIcon({
  title: "FolderIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        d="M8.55279 5.22361C8.63748 5.393 8.81061 5.5 9 5.5H12C12.2761 5.5 12.5 5.72386 12.5 6V12C12.5 12.2761 12.2761 12.5 12 12.5H4C3.72386 12.5 3.5 12.2761 3.5 12V4C3.5 3.72386 3.72386 3.5 4 3.5H7.38197C7.57135 3.5 7.74448 3.607 7.82918 3.77639L8.55279 5.22361Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M3.5 5.5H9" stroke="#1D2129" />
    </>
  ),
})

FolderIcon.displayName = "FolderIcon"
