export interface ConfigProviderProps {
  locale?: Locale
}

export interface Locale {
  typography: Record<string, any>
  trigger: Record<string, any>
}
