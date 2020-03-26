import React, { useState, useEffect } from "react"
import moment from "moment"
import styled from "styled-components"
const Clock = () => {
  const [date, setDate] = useState(moment())

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timerID)
    }
  })

  function tick() {
    setDate(moment())
  }

  return (
    <Date>
      <Hour> {date.format("kk:mm:ss ")}</Hour>
      <Year>{date.format("L")}</Year>
    </Date>
  )
}
const Date = styled.ul`
  margin-right: 10px;
  padding: 2px;

  display: flex;
  flex-direction: column;
  justify-items: space-between;
  align-items: center;
`
const Hour = styled.li`
  margin: 0 auto;
  font-size: 20px;
`

const Year = styled.li`
  margin: 2px auto;

  font-size: 10px;
`

export default Clock
