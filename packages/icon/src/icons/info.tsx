import { createIcon } from "../create-icon"

export const InfoIcon = createIcon({
  title: "InfoIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.792 2a1.042 1.042 0 1 0 0 2.083 1.042 1.042 0 0 0 0-2.083zM6.334 5.333a.417.417 0 0 0-.417.417v.833c0 .23.187.417.417.417h.833v4h-1.25a.417.417 0 0 0-.417.417v.666c0 .23.187.417.417.417h4.166c.23 0 .417-.187.417-.417v-.666a.417.417 0 0 0-.417-.417h-1.25V5.75a.417.417 0 0 0-.416-.417H6.334z"
        fill="currentColor"
      />
    </>
  ),
})

InfoIcon.displayName = "InfoIcon"
