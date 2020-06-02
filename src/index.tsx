import React from "react"
import { render } from "react-dom"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <div>hello</div>
    </ThemeProvider>
  )
}

render(<App />, document.querySelector("#root"))
