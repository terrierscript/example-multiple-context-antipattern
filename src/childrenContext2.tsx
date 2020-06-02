import React, { createContext, useState, useEffect, FC } from "react"

const ChildContext = createContext(null)

export const useChildrenContextState = (parentValue: string) => {
  const [value, setValue] = useState<any>()
  useEffect(() => {
    setTimeout(() => {
      setValue(`${parentValue} + children`)
    }, 1500)
  }, [parentValue])
  return value
}

export const ChildContexttProvider: FC<{ parentValue: string }> = ({
  parentValue,
  ...props
}) => {
  const context = useChildrenContextState(parentValue)
  return <ChildContext.Provider value={context} {...props} />
}
