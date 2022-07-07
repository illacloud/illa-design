import { createIcon } from "../create-icon"

export const SearchIcon = createIcon({
  title: "SearchIcon",
  viewBox: "0 0 16 16",
  path: (
    <>
      <g clipPath="url(.a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.873 10.058a4.667 4.667 0 1 1 .184-.184 1.008 1.008 0 0 0-.184.184zm.747 1.977a6.667 6.667 0 1 1 1.414-1.414l3.673 3.672a1 1 0 0 1-1.415 1.414l-3.672-3.672z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath className="a">
          <path fill="currentColor" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </>
  ),
})
