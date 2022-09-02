import { forwardRef, useEffect, useState } from "react"
import { ImageProps } from "./interface"
import { ImageDefaultIcon } from "@illa-design/icon"
import { applyDefaultFallback, applyImageCss, applyOuterCss } from "./style"
import {
  applyBoxStyle,
  deleteCssProps,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"

enum ImageState {
  Loading,
  Loaded,
  Error,
}

export const Image = forwardRef<HTMLDivElement, ImageProps>((props, ref) => {
  const {
    // origin
    src = "",
    width = "100px",
    height = "100px",
    alt = "",
    // custom
    objectFit = "cover",
    fallback = (
      <ImageDefaultIcon color={globalColor(`--${illaPrefix}-blackAlpha-06`)} />
    ),
    fallbackSrc = "",
    radius = "4px",
    // img
    crossOrigin,
    decoding,
    loading,
    referrerPolicy,
    sizes,
    srcSet,
    useMap,
    draggable = true,
    ...rest
  } = props

  const [imageState, setImageState] = useState<ImageState>()

  useEffect(() => {
    setImageState(ImageState.Loading)
  }, [src])

  return (
    <div
      css={[applyOuterCss, applyBoxStyle(props)]}
      ref={ref}
      {...deleteCssProps(rest)}
    >
      {src && src.length != 0 && imageState != ImageState.Error ? (
        <img
          css={applyImageCss(objectFit, radius)}
          alt={alt}
          src={src}
          width={width}
          height={height}
          onError={(e) => {
            setImageState(ImageState.Error)
            if (props.onError != undefined) {
              props.onError(e)
            }
          }}
          onLoad={(e) => {
            setImageState(ImageState.Loaded)
            if (props.onLoad != undefined) {
              props.onLoad(e)
            }
          }}
          crossOrigin={crossOrigin}
          decoding={decoding}
          loading={loading}
          referrerPolicy={referrerPolicy}
          sizes={sizes}
          srcSet={srcSet}
          useMap={useMap}
          draggable={draggable}
        />
      ) : fallbackSrc && fallbackSrc.length != 0 ? (
        <img
          css={applyImageCss(objectFit, radius)}
          alt={alt}
          src={fallbackSrc}
          width={width}
          height={height}
          crossOrigin={crossOrigin}
          decoding={decoding}
          loading={loading}
          referrerPolicy={referrerPolicy}
          sizes={sizes}
          srcSet={srcSet}
          useMap={useMap}
          draggable={draggable}
        />
      ) : (
        <div css={applyDefaultFallback(width, height, radius)}>{fallback}</div>
      )}
    </div>
  )
})

Image.displayName = "Image"
