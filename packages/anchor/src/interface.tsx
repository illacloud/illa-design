import { HTMLAttributes, ReactNode, CSSProperties, MouseEvent } from "react"

export interface AnchorProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "onSelect"> {
  animation?: boolean
  scrollContainer?: string | HTMLElement | Window
  boundary?: number | "start" | "center" | "end" | "nearest"
  hash?: boolean
  affix?: boolean
  affixStyle?: CSSProperties
  offsetTop?: number,
  offsetBottom?: number
  onChange?: (newLink: string, oldLink: string) => void
  onSelect?: (newLink: string, oldLink: string) => void
  lineless?: boolean
  /* targetOffset: number */
}

export interface AnchorLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, "title"> {
  href?: string,
  title?: string | ReactNode
}

export interface AnchorContextType {
  registerLink: (link: string, element: HTMLElement) => void
  unregisterLink: (link: string) => void
  currentLink: string
  onClickLink: (link: string, event: MouseEvent<HTMLAnchorElement>) => void
  lineless?: boolean
}
