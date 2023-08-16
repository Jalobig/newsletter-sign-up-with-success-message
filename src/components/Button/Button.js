import React from 'react'
import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <button type='submit' className={classes.button}>{props.children}</button>
  )
}

export default Button