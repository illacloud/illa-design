import { createIcon } from "../create-icon"

export const InfoCircleIcon = createIcon({
  title: "InfoCircleIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.833 4a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667zM6.667 6.667A.333.333 0 0 0 6.333 7v.667c0 .184.15.333.334.333h.666v2.666h-1A.333.333 0 0 0 6 11v.666c0 .185.15.334.333.334h3.334c.184 0 .333-.15.333-.334V11a.333.333 0 0 0-.333-.334h-1V7a.333.333 0 0 0-.334-.333H6.667z"
        fill="#fff"
      />
    </>
  ),
})

InfoCircleIcon.displayName = "InfoCircleIcon"
