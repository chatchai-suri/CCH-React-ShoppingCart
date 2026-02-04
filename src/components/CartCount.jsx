import _React from 'react'

function CartCount(props) {
  // ------ JS area ------
  const {itemCount} = props
  // State

  // ------ JSX area ------
  return (
    <div>CartCount: {itemCount}</div>
  )
}

export default CartCount