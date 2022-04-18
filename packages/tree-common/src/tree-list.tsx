import { FC } from "react"
import { TreeListProps, NodeInstance } from "./interface"
import { TreeNode } from "./tree-node"
import { List } from "@illa-design/list"
import { listCss } from "./style"
import { AnimatePresence, motion } from "framer-motion"

export const TreeList: FC<TreeListProps> = (props) => {
  const {
    listData = [],
    saveNodeCache,
    checkable,
    loadingMoreKeys,
    ...rest
  } = props

  const variants = {
    initial: {
      opacity: 0,
      height: 0,
    },
    enter: {
      opacity: 1,
      height: "auto",
    },
    exit: {
      opacity: 0,
      height: 0,
    },
  }

  return (
    <div>
      <AnimatePresence initial={false}>
        <List
          _css={listCss}
          data={listData}
          render={(data) => {
            let node: NodeInstance = (
              <TreeNode
                loadingMore={loadingMoreKeys && loadingMoreKeys.has(data.key)}
                _key={data.key}
                expanding={data?.expanding}
                {...data}
                checkable={data.checkable !== false && checkable}
                {...rest}
              />
            )
            saveNodeCache && saveNodeCache(data.key, node)
            return (
              <motion.div
                key={data.key}
                variants={variants}
                animate={"enter"}
                initial={"initial"}
                exit={"exit"}
                transition={{ duration: 0.2 }}
              >
                {node}
              </motion.div>
            )
          }}
          renderRaw={true}
          bordered={false}
          renderKey={(data) => {
            return data.key
          }}
        />
      </AnimatePresence>
    </div>
  )
}
