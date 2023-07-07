import React from 'react'
import { ButtonStyle } from '../style/globalStyle'

const Button = (props) => {
  return (
    <ButtonStyle type={props.type} onClick={props.onClick}>{props.children}</ButtonStyle>
  )
}

export default Button