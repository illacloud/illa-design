import { ReactNode } from "react"
import { CopyIcon } from "@illa-design/icon"

export class Copyable {
  copyIcon: ReactNode = <CopyIcon />
  copiedIcon: ReactNode = <CopyIcon />
  copiedToolTip: boolean | string = "Copied"
  copyTooltip: boolean | string = "Copy"
  onCopy?: () => void
}

export class CopyableBuilder {
  private config: Copyable = new Copyable()

  public copyIcon(copyIcon: ReactNode): CopyableBuilder {
    this.config.copyIcon = copyIcon
    return this
  }

  public copiedIcon(copiedIcon: ReactNode): CopyableBuilder {
    this.config.copiedIcon = copiedIcon
    return this
  }

  public copiedTooltip(copiedTooltip: boolean | string): CopyableBuilder {
    this.config.copiedToolTip = copiedTooltip
    return this
  }

  public copyTooltip(copyTooltip: boolean | string): CopyableBuilder {
    this.config.copyTooltip = copyTooltip
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
