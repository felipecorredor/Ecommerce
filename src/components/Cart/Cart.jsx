import React from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyles from './styles'
import { FilledCart } from './FilledCart'
import { EmptyCart } from './EmptyCart'
import PropTypes from 'prop-types'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const classes = useStyles()
  const isEmpty = !cart.total_items

  return (
    <Container>
      <div className={classes.toolbar}/>
      <Typography className={classes.title} variant="h3" gutterBottom>Your shopping cart</Typography>
      { isEmpty ? <EmptyCart />
         :
        <FilledCart cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart} /> }
    </Container>
  )
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired
};

export default Cart
