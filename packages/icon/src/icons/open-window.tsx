import { createIcon } from "../create-icon"

export const OpenWindowIcon = createIcon({
  title: "OpenWindowIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        d="M7.16667 3H4C3.44772 3 3 3.44772 3 4V7.16667M10.5 3H11C12.1046 3 13 3.89543 13 5V7.16667V8V8.83333V11C13 12.1046 12.1046 13 11 13H8.83333H7.16667H5C3.89543 13 3 12.1046 3 11V10.5"
        stroke="#0B0C0F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 4L8.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
})

OpenWindowIcon.displayName = "OpenWindowIcon"
