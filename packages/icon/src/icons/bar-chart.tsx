import { createIcon } from "../create-icon"

export const BarChartIcon = createIcon({
  title: "BarChartIcon",
  viewBox: "0 0 16 16",
  fill: "none",
  path: (
    <>
      <rect
        x="2"
        y="14"
        width="0.999999"
        height="12"
        rx="0.5"
        transform="rotate(-90 2 14)"
        fill="#0D6EFD"
      />
      <rect
        x="7"
        y="12"
        width="9"
        height="2"
        rx="0.5"
        transform="rotate(-90 7 12)"
        fill="#0D6EFD"
      />
      <rect
        x="10"
        y="12"
        width="5"
        height="2"
        rx="0.5"
        transform="rotate(-90 10 12)"
        fill="#14DDD9"
      />
      <rect
        x="4"
        y="12"
        width="7"
        height="2"
        rx="0.5"
        transform="rotate(-90 4 12)"
        fill="#14DDD9"
      />
    </>
  ),
})

BarChartIcon.displayName = "BarChartIcon"
