/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { HeadingProps } from "./interface"
import { Base } from "./base"
import { Tooltip } from "@illa-design/tooltip"
import mergedToString from "./measure-element"

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
      return <Tooltip content={mergedToString(React.Children.toArray(props.children))}
                      disabled={disabled}>
        <h1 ref={ref} {...otherProps}>
          <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
                underline={underline} deleted={deleted} code={code} copyable={copyable}>
            {props.children}
          </Base>
        </h1>
      </Tooltip>
    case "h2":
      return <Tooltip content={mergedToString(React.Children.toArray(props.children))}
                      disabled={disabled}><h2 ref={ref} {...otherProps}>
        <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
              underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
      </h2></Tooltip>
    case "h3":
      return <Tooltip content={mergedToString(React.Children.toArray(props.children))}
                      disabled={disabled}><h3 ref={ref} {...otherProps}>
        <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
              underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
      </h3></Tooltip>
    case "h4":
      return <Tooltip content={mergedToString(React.Children.toArray(props.children))}
                      disabled={disabled}><h4 ref={ref} {...otherProps}>
        <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
              underline={underline} deleted={deleted} code={code} copyable={copyable}>
          {props.children}
        </Base>
      </h4></Tooltip>
    case "h5":
      return <Tooltip content={mergedToString(React.Children.toArray(props.children))}
                      disabled={disabled}>
        <h5 ref={ref} {...otherProps}>
          <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
                underline={underline} deleted={deleted} code={code} copyable={copyable}>
            {props.children}
          </Base>
        </h5>
      </Tooltip>
    case "h6":
      return <Tooltip content={mergedToString(React.Children.toArray(props.children))}
                      disabled={disabled}>
        <h6 ref={ref} {...otherProps}>
          <Base colorScheme={colorScheme} ellipsis={ellipsis} bold={bold} disabled={disabled} mark={mark}
                underline={underline} deleted={deleted} code={code} copyable={copyable}>
            {props.children}
          </Base>
        </h6>
      </Tooltip>
  }

})
