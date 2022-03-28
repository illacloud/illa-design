export interface ConfigProviderProps {
  locale?: Locale
}

export interface Locale {
  typography: Record<string, string>
  popover: Record<string, string>
  empty: Record<string, string>
  pagination: Record<string, string>
  upload: Record<string, string>
  popConfirm: Record<string, string>
  calendar: Record<string, string>
}
