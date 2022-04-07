import { forwardRef, useContext, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PreIcon } from "@illa-design/icon"
import { Indent } from "../indent"
import { SubMenuProps } from "../interface"


export const Inline = forwardRef<HTMLDivElement, SubMenuProps>(
  (props, ref) => {
    const {
      level
    } = props;

    const header = (
      <div>
        <Indent level={} />
      </div>
    );
    const content = ();

    return (
      <>
        {header}
        {content}
      </>)
  })
