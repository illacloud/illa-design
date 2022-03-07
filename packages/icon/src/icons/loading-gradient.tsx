import { createIcon } from "../create-icon"

export const LoadingGradientIcon = createIcon({
  title: "LoadingGradientIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <path
        d="M6 .75A5.25 5.25 0 1 1 .75 6"
        stroke="url(#txgcjhzjxa)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient
          id="txgcjhzjxa"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 5.5 -5.5 0 6 6)"
        >
          <stop offset=".201" stopColor="#1E72FF" stopOpacity="0" />
          <stop offset=".279" stopColor="#1E72FF" stopOpacity="0" />
          <stop offset=".496" stopColor="#1E6FFF" />
        </radialGradient>
      </defs>
    </>
  ),
})

LoadingGradientIcon.displayName = "LoadingGradientIcon"
