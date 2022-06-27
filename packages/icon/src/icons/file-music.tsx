import { createIcon } from "../create-icon"

export const FileMusicIcon = createIcon({
  title: "FileMusicIcon",
  viewBox: "0 0 16 20",
  path: (
    <>
      <rect x="2" y="2" width="12" height="16" rx="1" fill="#A55BF5" />
      <path
        d="M9 12.833c0 .83-.896 1.5-2 1.5s-2-.67-2-1.5c0-.828.896-1.5 2-1.5s2 .672 2 1.5z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 8v5H8V8h1z"
        fill="#fff"
      />
      <path
        d="M8 6.88a.667.667 0 0 1 .536-.653l2-.4a.667.667 0 0 1 .797.653v1.187L8 8.333V6.88z"
        fill="#fff"
      />
    </>
  ),
})

FileMusicIcon.displayName = "FileMusicIcon"
