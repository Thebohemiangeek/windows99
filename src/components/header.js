import PropTypes from "prop-types"
import React from "react"
import { Button } from "react95"
import styled from "styled-components"
import NavBar from "./Globals/Navbar"
import Clock from "./Globals/Clock"
import { ReactComponent as WindowsIcon } from "../images/windows-xp.svg"

const StyledWindows = styled(WindowsIcon)`
  height: 34px;
  margin-right: -10px;
`

const Navigation = props => {
  const toggleNav = () => {
    props.setOpen(isOpen => !isOpen)
  }
  return (
    <>
      <NavBar>
        <MainButton onClick={toggleNav}>
          <StyledWindows />
          Start
        </MainButton>

        <div>
          <Clock />
        </div>
      </NavBar>
    </>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export const MainButton = styled(Button)`
  width: 100px;
  height: 34px;
  padding: 2px 2px 2px 0px;
  align-items: center;
  justify-content: start;
`

export default Navigation
