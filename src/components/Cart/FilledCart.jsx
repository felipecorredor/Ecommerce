import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import { CartItem } from './CartItem/CartItem'
import { Link } from 'react-router-dom'

export const FilledCart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            {item.is_valid &&
              <CartItem item={item}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart} />
            }
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography varaint="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
          <div>
            <Button className={classes.emptyButton}
              size="large" type="button"
              varaint="contained" color="secondary"
              onClick={handleEmptyCart}>
              Empty Cart
            </Button>

            <Button className={classes.checkoutButton}
              size="large" type="button"
              varaint="contained" color="primary"
              component={Link} to="/checkout">
              Checkout
            </Button>
          </div>
      </div>
    </>
  )
}
