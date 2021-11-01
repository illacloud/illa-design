import { FC } from "react"
import styles from "./tag.module.css"
import { TagProps } from "./interface"

export const Tag: FC<TagProps> = ((props) => {
  return <div className={props.className} style={props.style}>
    <div className={styles.red}>
      234
    </div>
  </div>
})