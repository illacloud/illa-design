export interface ConfigProviderProps {
  locale?: Locale
}

export interface Locale {
  typography: Record<string, string>
  trigger: Record<string, string>
}
