import { createIcon } from "../create-icon"

export const CopyIcon = createIcon({
  title: "CopyIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2.25C3.58579 2.25 3.25 2.58579 3.25 3C3.25 3.41421 3.58579 3.75 4 3.75H11C11.6904 3.75 12.25 4.30964 12.25 5V12C12.25 12.4142 12.5858 12.75 13 12.75C13.4142 12.75 13.75 12.4142 13.75 12V5C13.75 3.48122 12.5188 2.25 11 2.25H4ZM4 6.5H9C9.27614 6.5 9.5 6.72386 9.5 7V12C9.5 12.2761 9.27614 12.5 9 12.5H4C3.72386 12.5 3.5 12.2761 3.5 12V7C3.5 6.72386 3.72386 6.5 4 6.5ZM2 7C2 5.89543 2.89543 5 4 5H9C10.1046 5 11 5.89543 11 7V12C11 13.1046 10.1046 14 9 14H4C2.89543 14 2 13.1046 2 12V7Z"
        fill="currentColor"
      />
    </>
  ),
})

CopyIcon.displayName = "CopyIcon"
