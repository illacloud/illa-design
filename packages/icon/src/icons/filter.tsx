import { createIcon } from "../create-icon"

export const FilterIcon = createIcon({
  title: "FilterIcon",
  viewBox: "0 0 16 16",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.667 2c.368 0 .666.298.666.667l.001 2.801a.641.641 0 0 1 0 .133v.066a.333.333 0 0 1-.142.272.639.639 0 0 1-.168.145l-3.69 2.203V13c0 .184-.15.333-.334.333h-.667A.333.333 0 0 1 9 13V8c0-.101.022-.197.063-.282.05-.123.14-.23.263-.304L13 5.22V3.333H3.333v1.911l3.565 2.13A.667.667 0 0 1 7.333 8v3.667c0 .184-.149.333-.333.333h-.667A.333.333 0 0 1 6 11.667V8.31L2.316 6.108a.64.64 0 0 1-.201-.19A.333.333 0 0 1 2 5.667v-3C2 2.298 2.298 2 2.667 2h11z"
      fill="currentColor"
    />
  ),
})

FilterIcon.displayName = "FilterIcon"
