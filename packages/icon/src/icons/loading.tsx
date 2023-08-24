import { createIcon } from "../create-icon"

export const LoadingIcon = createIcon({
  title: "LoadingIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <g clipPath="url(#clip0_11183_1638)">
        <path
          d="M8 1C9.38447 1 10.7378 1.41054 11.889 2.17971C13.0401 2.94888 13.9373 4.04213 14.4672 5.32122C14.997 6.6003 15.1356 8.00777 14.8655 9.36563C14.5954 10.7235 13.9287 11.9708 12.9497 12.9497C11.9708 13.9287 10.7235 14.5954 9.36563 14.8655C8.00777 15.1356 6.6003 14.997 5.32122 14.4672C4.04213 13.9373 2.94888 13.0401 2.17971 11.889C1.41054 10.7378 1 9.38447 1 8"
          stroke="url(#paint0_angular_11183_1638)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_angular_11183_1638"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 8) rotate(90) scale(7.33333)"
        >
          <stop offset="0.200636" stopColor="#654AEC" stopOpacity="0" />
          <stop offset="0.278703" stopColor="#654AEC" stopOpacity="0" />
          <stop offset="0.496241" stopColor="#654AEC" />
        </radialGradient>
        <clipPath id="clip0_11183_1638">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </>
  ),
})

LoadingIcon.displayName = "LoadingIcon"
