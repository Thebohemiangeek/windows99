import React from "react"
import { List, Divider, ListItem } from "react95"
import styled from "styled-components"
const SideBar = props => {
  return (
    <SideMenu open={props.isOpen}>
      <Vertical>
        <h1 className="rotate">Windows</h1>
      </Vertical>
      <LinkWrapper>
        <ListItem>DOCS</ListItem>
        <ListItem>API</ListItem>
        <ListItem>HELP</ListItem>
        <Divider />
        <ListItem>asdsadasd</ListItem>
      </LinkWrapper>
    </SideMenu>
  )
}
const SideMenu = styled.div`
  display: ${props => (props.open ? "none" : "")};
`
const Vertical = styled.div`
  color: white;
  padding: 0;
  border-left-color: #ffffff;
  border-top-color: #ffffff;
  border-right-color: #050608;
  border-bottom-color: #050608;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.35), inset 1px 1px 0px 1px #dfe0e3,
    inset -1px -1px 0 1px #888c8f;
  box-sizing: border-box;
  display: inline-block;
  background: linear-gradient(to top, #000080, #1034a6);
  border-style: solid;
  border-width: 2px;
  border-bottom-color: #010601;
  height: 300px;
  width: 40px;
  position: fixed;
  bottom: 40px;
  left: 0px;
  .rotate {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: auto 10px;
    transform: rotate(-90deg);
    transform-origin: 0 0;
    font-weight: 800;
  }
`
const LinkWrapper = styled(List)`
  bottom: 40px;
  position: fixed;
  height: 300px;
  left: 40px;

  li {
    height: 40px;
    width: 200px;
  }
`
export default SideBar
