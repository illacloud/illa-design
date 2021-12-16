/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { HeadingProps } from "./interface"
import { Base } from "./base"

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {

  // get props
  const {
    colorScheme = "blackAlpha",
    level = "h2",
    ellipsis,
    bold = false,
    disabled = false,
    mark = false,
    underline = false,
    deleted = false,
    code = false,
    copyable = false,
    ...otherProps
  } = props

  switch (level) {
    case "h1":
      return <h1 ref={ref} {...otherProps}>
        <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
              underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
      </h1>
    case "h2":
      return <h2 ref={ref} {...otherProps}>
        <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
              underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
      </h2>
    case "h3":
      return <h3 ref={ref} {...otherProps}>
        <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
              underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
      </h3>
    case "h4":
      return <h4 ref={ref} {...otherProps}>
        <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
              underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
      </h4>
    case "h5":
      return <h5 ref={ref} {...otherProps}>
        <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
              underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
      </h5>
    case "h6":
      return <h6 ref={ref} {...otherProps}>
        <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
              underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
      </h6>
  }

})
