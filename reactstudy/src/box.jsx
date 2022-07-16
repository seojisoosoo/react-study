import React from 'react'
import styled from 'styled-components'

const Styledbox=styled.div`
border:1px solid blue;
`

const box = (props) => {
  return (
    <Styledbox>{props.name}
    <button>click!</button></Styledbox>
  )
}

export default box