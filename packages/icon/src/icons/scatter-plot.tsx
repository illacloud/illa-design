import { createIcon } from "../create-icon"

export const ScatterPlotIcon = createIcon({
  title: "ScatterPlotIcon",
  viewBox: "0 0 16 16",
  fill: "none",
  path: (
    <>
      <circle cx="5.5" cy="4.5" r="2.5" fill="#0D6EFD" />
      <circle cx="11" cy="10" r="3" fill="#0D6EFD" />
      <circle cx="4" cy="12" r="2" fill="#14DDD9" />
    </>
  ),
})

ScatterPlotIcon.displayName = "ScatterPointChartIcon"
