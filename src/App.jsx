import { useEffect, useState } from "react"
import CartSummary from "./components/CartSummary"
import Header from "./components/Header"
import ProductList from "./components/ProductList"


function App() {
  // ------ JS area ------
  // State
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  // const cart = {id, title, price, quantity}

  // Function
  useEffect( ()=> {
    fecthProducts()
  }, [])

  const fecthProducts = () => {
    fetch('http://localhost:8000/products')
    .then(resp => resp.json())
    .then(data => setProducts(data))
  }

  // const addToCard = (id, title, price) => {
  //   const isExist = carts.some(el => el.id === id)
  //   if(!isExist) {
  //     const newItem = {id, title, price, quantity: 1}
  //     setCarts([...carts, newItem])
  //   } else {
  //     const newCarts = carts.map(el => (
  //       el.id === id
  //       ? {...el, quantity: el.quantity + 1}
  //       : el
  //     ))
  //     setCarts(newCarts)
  //   }
  // }

  const addToCard = (id, title, price) => {
    setCarts(prev => {
      const isExist = prev.some(el => el.id === id)
      if(!isExist) {
        return[...prev, {id, title, price, quantity: 1}]
      }
      return prev.map(el =>
        el.id === id ? {...el, quantity: el.quantity + 1} : el
      )
    })
  }

  // const decQuantity = (id) => {
  //   const index = carts.findIndex( el => el.id === id)
  //   if(carts[index].quantity > 1) {
  //     const newCarts = [...carts]
  //     newCarts[index] = {...newCarts[index], quantity: newCarts[index].quantity-1}
  //     setCarts(newCarts)
  //   } else {
  //     const newCarts = carts.filter((el)=> el.id !== id) 
  //     setCarts(newCarts)
  //   }
  // }

  const decQuantity = (id) => {
    setCarts(prev => {
      const targetItem = prev.find(el => el.id === id)
      if(targetItem && targetItem.quantity > 1) {
        return prev.map(el => 
          el.id == id ? {...el, quantity: el.quantity - 1} : el
        )
      }
      return prev.filter(el => el.id !== id)
    })
  }


  // ------ JSX area
  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductList products={products} addToCard={addToCard}  />
        <CartSummary carts={carts} decQuantity={decQuantity} />
      </div>
    </div>
  )
}

export default App
