import _React from 'react'

function CartCount(props) {
  // ------ JS area ------
  const {carts} = props
  const itemCount = carts.reduce((acc, el) => (acc + el.quantity), 0) 

  // ------ JSX area ------
  return (
    <div>CartCount: {itemCount}</div>
  )
}

export default CartCount