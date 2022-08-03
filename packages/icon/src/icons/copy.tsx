import { createIcon } from "../create-icon"

export const CopyIcon = createIcon({
  title: "CopyIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        key="CopyIconOne"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M11 4.5H2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zM2 3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H2z"
      />
      <path
        key="CopyIconTwo"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M3.996.75a.75.75 0 0 1 .75-.75h8.504A2.75 2.75 0 0 1 16 2.75v8.5a.75.75 0 0 1-1.5 0v-8.5c0-.69-.56-1.25-1.25-1.25H4.746a.75.75 0 0 1-.75-.75z"
      />
    </>
  ),
})

CopyIcon.displayName = "CopyIcon"
