import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'

export const EmptyCart = () => {
  const classes = useStyles()

  return (
    <Typography varaint="subtitle1">
      You have no items in your shopping cart,
      <Link to="/" className={classes.link}> start adding some!</Link>
    </Typography>
  )
}
