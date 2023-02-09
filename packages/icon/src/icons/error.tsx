import { createIcon } from "../create-icon"

export const ErrorIcon = createIcon({
  title: "ErrorIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7071 3.29289C13.0976 3.68342 13.0976 4.31658 12.7071 4.70711L4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071Z"
        fill="currentColor"
      />
    </>
  ),
})

ErrorIcon.displayName = "ErrorIcon"
