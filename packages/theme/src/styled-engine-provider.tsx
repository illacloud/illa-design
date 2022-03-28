import { FC } from "react"
import { StyledEngineProviderProps } from "./interface"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"

const cache = createCache({ key: "custom", prepend: true })

export const StyledEngineProvider: FC<StyledEngineProviderProps> = (props) => {
  const { injectFirst, children } = props
  return injectFirst ? (
    <CacheProvider value={cache}>{children}</CacheProvider>
  ) : (
    <>{children}</>
  )
}
