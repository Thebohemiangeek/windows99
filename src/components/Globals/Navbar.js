import React from "react"
import { AppBar } from "react95"
import styled from "styled-components"

const Navbar = ({ children }) => {
  return <NavBarDiv>{children}</NavBarDiv>
}
const NavBarDiv = styled(AppBar)`
  height: 40px;
  justify-content: space-between;
  flex-direction: row;
  position: fixed;
  bottom: 0;
`
export default Navbar
