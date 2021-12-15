import { ReactNode } from "react"
import { CopyIcon } from "@illa-design/icon"

export class Copyable {
  icon: ReactNode | null = <CopyIcon />
  tooltips: boolean | string = false
  onCopy?: () => void
}

export class CopyableBuilder {
  private config: Copyable = new Copyable()

  public icon(icon: ReactNode): CopyableBuilder {
    this.config.icon = icon
    return this
  }

  public tooltips(tooltips: boolean | string): CopyableBuilder {
    this.config.tooltips = tooltips
    return this
  }

  public onCopy(onCopy: () => void): CopyableBuilder {
    this.config.onCopy = onCopy
    return this
  }

  public create(): Copyable {
    return this.config
  }
}
