import React, { createContext, useState, useEffect, useContext } from "react"

const ParentContext = createContext(null)

export const useParentContextState = () => {
  const [connection, setConnection] = useState<any>()
  useEffect(() => {
    setTimeout(() => {
      setConnection("foo")
    }, 1500)
  }, [])
  return connection
}

export const ParentContextProvider = (props) => {
  const context = useParentContextState()
  return <ParentContext.Provider value={context} {...props} />
}

export const useParentContext = () => useContext(ParentContext)
