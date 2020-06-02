import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  FC,
} from "react"

const ParentContext = createContext<null | string>(null)

export const useParentContextState = () => {
  const [connection, setConnection] = useState<null | string>(null)
  useEffect(() => {
    setTimeout(() => {
      setConnection("foo")
    }, 1500)
  }, [])
  return connection
}

export const ParentContextProvider: FC<{}> = (props) => {
  const context = useParentContextState()
  return <ParentContext.Provider value={context} {...props} />
}

export const useParentContext = () => useContext(ParentContext)
export const ParentContextConsumer = ParentContext.Consumer
