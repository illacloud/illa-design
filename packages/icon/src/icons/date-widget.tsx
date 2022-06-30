import { createIcon } from "../create-icon"

export const DateWidgetIcon = createIcon({
  title: "DateWidgetIcon",
  viewBox: "0 0 72 54",
  path: (
    <>
      <rect
        x="12.5"
        y="17.5"
        width="47"
        height="19"
        rx="3.5"
        fill="#fff"
        stroke="currentColor"
      />
      <path d="M28 27h-8" stroke="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.125 22.5a.375.375 0 0 0-.375.375v.375h-1.5a.75.75 0 0 0-.75.75v6.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V24a.75.75 0 0 0-.75-.75h-1.5v-.375a.375.375 0 0 0-.375-.375H51.5a.375.375 0 0 0-.375.375v.375h-2.25v-.375a.375.375 0 0 0-.375-.375h-.375zm-1.5 1.875h1.125v.375c0 .207.168.375.375.375h.375a.375.375 0 0 0 .375-.375v-.375h2.25v.375c0 .207.168.375.375.375h.375a.375.375 0 0 0 .375-.375v-.375h1.125v1.5h-6.75v-1.5zm0 2.625v3.375h6.75V27h-6.75z"
        fill="currentColor"
      />
    </>
  ),
})

DateWidgetIcon.displayName = "DateWidgetIcon"
