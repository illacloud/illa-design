import { ReactNode } from "react"
import { CopyIcon } from "@illa-design/icon"

export class Copyable {
  copyIcon: ReactNode = <CopyIcon />
  copiedIcon: ReactNode = <CopyIcon />
  copiedToolTip: boolean | string | ReactNode
  copyTooltip: boolean | string | ReactNode
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

  public copiedTooltip(copiedTooltip: boolean | string | ReactNode): CopyableBuilder {
    this.config.copiedToolTip = copiedTooltip
    return this
  }

  public copyTooltip(copyTooltip: boolean | string | ReactNode): CopyableBuilder {
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
