import { ReactNode } from "react"

export class EllipsisConfig {
  expandable: boolean = false
  rows: number = -1
  suffix: string = ""
  expandLabel: string | ReactNode = "Expand"
  tooltip: boolean = true
}

export class EllipsisConfigBuilder {
  private config: EllipsisConfig = new EllipsisConfig()

  public expandable(expandable: boolean): EllipsisConfigBuilder {
    this.config.expandable = expandable
    return this
  }

  public rows(rows: number): EllipsisConfigBuilder {
    this.config.rows = rows
    return this
  }

  public suffix(suffix: string): EllipsisConfigBuilder {
    this.config.suffix = suffix
    return this
  }

  public expandLabel(expandLabel: string): EllipsisConfigBuilder {
    this.config.expandLabel = expandLabel
    return this
  }

  public tooltip(tooltip: boolean): EllipsisConfigBuilder {
    this.config.tooltip = tooltip
    return this
  }

  public create(): EllipsisConfig {
    return this.config
  }
}