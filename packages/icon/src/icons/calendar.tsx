import { createIcon } from "../create-icon"

export const CalendarIcon = createIcon({
  title: "CalendarIcon",
  viewBox: "0 0 16 16",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 2a.5.5 0 0 0-.5.5V3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2v-.5a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0-.5.5V3h-3v-.5A.5.5 0 0 0 6 2h-.5zm-2 2.5H5V5a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 .5-.5v-.5h3V5a.5.5 0 0 0 .5.5h.5A.5.5 0 0 0 11 5v-.5h1.5v2h-9v-2zm0 3.5v4.5h9V8h-9z"
      fill="currentColor"
    />
  ),
})

CalendarIcon.displayName = "CalendarIcon"
