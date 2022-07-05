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
          saveNodeCache?.(data.key, node)
          return (
            // add Fragment to solve ref warning
            <>
              <AnimatePresence>
                {data._shouldMount && (
                  <motion.div
                    key={data.key}
                    variants={variants}
                    animate="enter"
                    initial="initial"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    {node}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )
        }}
        renderRaw
        bordered={false}
        renderKey={(data) => {
          return data.key
        }}
      />
    </div>
  )
}

TreeList.displayName = "TreeList"
