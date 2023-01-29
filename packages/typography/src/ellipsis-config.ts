import { ReactNode } from "react"

export class Ellipsis {
  expandable: boolean = true
  rows: number = 2
  suffix: string | null = null
  expandLabel: string | ReactNode
  tooltip: boolean = true
  onExpand?: () => void
}

export class EllipsisBuilder {
  private config: Ellipsis = new Ellipsis()

  public expandable(expandable: boolean): EllipsisBuilder {
    this.config.expandable = expandable
    return this
  }

  public rows(rows: number): EllipsisBuilder {
    this.config.rows = rows
    return this
  }

  public suffix(suffix: string): EllipsisBuilder {
    this.config.suffix = suffix
    return this
  }

  public expandLabel(expandLabel: string | ReactNode): EllipsisBuilder {
    this.config.expandLabel = expandLabel
    return this
  }

  public tooltip(tooltip: boolean): EllipsisBuilder {
    this.config.tooltip = tooltip
    return this
  }

  public onExpand(fun: () => void): EllipsisBuilder {
    this.config.onExpand = fun
    return this
  }

  public create(): Ellipsis {
    return this.config
  }
}
