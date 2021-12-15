import { ReactNode } from "react"

export class Ellipsis {
  expandable: boolean = false
  rows: number = -1
  suffix: string | null = null
  expandLabel: string | ReactNode = "Expand"
  tooltip: boolean = true
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

  public expandLabel(expandLabel: string): EllipsisBuilder {
    this.config.expandLabel = expandLabel
    return this
  }

  public tooltip(tooltip: boolean): EllipsisBuilder {
    this.config.tooltip = tooltip
    return this
  }

  public create(): Ellipsis {
    return this.config
  }
}