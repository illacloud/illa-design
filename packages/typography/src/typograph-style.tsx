import { HeadingLevel } from "./interface"
import { css, SerializedStyles } from "@emotion/react"

export function getHeadingSize(level: HeadingLevel): string[] {
  // font-size line-height
  switch (level) {
    case "h1":
      return ["36px", "normal"]
    case "h2":
      return ["32px", "normal"]
    case "h3":
      return ["28px", "normal"]
    case "h4":
      return ["24px", "normal"]
    case "h5":
      return ["20px", "normal"]
    case "h6":
      return ["16px", "normal"]
  }
}

export function applyTypoContainer(): SerializedStyles {
  return css`
    word-break: break-all;

    h1 {
      margin: 0;
      font-size: ${getHeadingSize("h1")[0]};
      line-height: ${getHeadingSize("h1")[1]};
    }

    h2 {
      margin: 0;
      font-size: ${getHeadingSize("h2")[0]};
      line-height: ${getHeadingSize("h2")[1]};
    }

    h3 {
      margin: 0;
      font-size: ${getHeadingSize("h3")[0]};
      line-height: ${getHeadingSize("h3")[1]};
    }

    h4 {
      margin: 0;
      font-size: ${getHeadingSize("h4")[0]};
      line-height: ${getHeadingSize("h4")[1]};
    }

    h5 {
      margin: 0;
      font-size: ${getHeadingSize("h5")[0]};
      line-height: ${getHeadingSize("h5")[1]};
    }

    h6 {
      margin: 0;
      font-size: ${getHeadingSize("h6")[0]};
      line-height: ${getHeadingSize("h6")[1]};
    }

    p {
      margin: 0;
    }
  `
}
