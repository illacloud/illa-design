import { HeadingLevel } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@illa-design/theme"

export function getHeadingSize(level: HeadingLevel): string[] {
  // font-size line-height
  switch (level) {
    case "h1":
      return ["36px", "48px"]
    case "h2":
      return ["28px", "40px"]
    case "h3":
      return ["24px", "40px"]
    case "h4":
      return ["18px", "32px"]
    case "h5":
      return ["16px", "24px"]
    case "h6":
      return ["14px", "24px"]
  }
}

export function applyTypoContainer(): SerializedStyles {
  return css`
    word-break: break-all;

    h1 {
      margin: 0;
      font-weight: 700;
      font-size: ${getHeadingSize("h1")[0]};
      line-height: ${getHeadingSize("h1")[1]};
    }

    h2 {
      margin: 0;
      font-weight: 700;
      font-size: ${getHeadingSize("h2")[0]};
      line-height: ${getHeadingSize("h2")[1]};
    }

    h3 {
      margin: 0;
      font-weight: 700;
      font-size: ${getHeadingSize("h3")[0]};
      line-height: ${getHeadingSize("h3")[1]};
    }

    h4 {
      margin: 0;
      font-weight: 700;
      font-size: ${getHeadingSize("h4")[0]};
      line-height: ${getHeadingSize("h4")[1]};
    }

    h5 {
      margin: 0;
      font-weight: 600;
      font-size: ${getHeadingSize("h5")[0]};
      line-height: ${getHeadingSize("h5")[1]};
    }

    h6 {
      margin: 0;
      font-weight: 600;
      font-size: ${getHeadingSize("h6")[0]};
      line-height: ${getHeadingSize("h6")[1]};
    }

    code {
      display: block;
      padding: 16px;
      border-radius: 4px;
      background: ${getColor("grayBlue", "09")};
    }
  `
}
