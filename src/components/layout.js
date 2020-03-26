import React, { useState } from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { reset, themes } from "react95"
import Navigation from "./header"
import "./layout.css"
import Sidebar from "./Globals/SideBar"
const ResetStyles = createGlobalStyle`
  ${reset}
  
`
const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <main>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <Navigation isOpen={isOpen} setOpen={setOpen} />
        <Sidebar isOpen={isOpen} />
        {children}
        <Sidebar isOpen={isOpen} />
      </ThemeProvider>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
