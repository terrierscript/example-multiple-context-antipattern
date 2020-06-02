import React, { FC } from "react"
import { ParentContextProvider, useParentContext } from "./parentContex"
import { ChildContexttProvider } from "./childrenContext"

const ResolveInternal: FC<{}> = (props) => {
  const value = useParentContext()
  if (!value) {
    return null
  }
  return <ChildContexttProvider parentValue={value} {...props} />
}

export const UnwrapNull: FC<{ value: any }> = ({ value, children }) => {
  if (!value) {
    return null
  }
  return <>{children}</>
}
