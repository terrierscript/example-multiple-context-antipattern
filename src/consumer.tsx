import React, { FC } from "react"
import {
  ParentContextProvider,
  useParentContext,
  ParentContextConsumer,
} from "./parentContex"
import { ChildContexttProvider } from "./childrenContext"

export const Resolver: FC<{}> = (props) => {
  return (
    <ParentContextProvider>
      <ParentContextConsumer>
        {(value) => {
          if (!value) {
            return null
          }
          return <ChildContexttProvider parentValue={value} {...props} />
        }}
      </ParentContextConsumer>
    </ParentContextProvider>
  )
}
