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
  //   setCarts(prev => {
  //     const isExist = prev.some(el => el.id === id)
  //     if(!isExist) {
  //       return[...prev, {id, title, price, quantity: 1}]
  //     }
  //     return prev.map(el =>
  //       el.id === id ? {...el, quantity: el.quantity + 1} : el
  //     )
  //   })
  // }

  // const decQuantity = (id) => {
  //   setCarts(prev => {
  //     const targetItem = prev.find(el => el.id === id)
  //     if(targetItem && targetItem.quantity > 1) {
  //       return prev.map(el => 
  //         el.id == id ? {...el, quantity: el.quantity - 1} : el
  //       )
  //     }
  //     return prev.filter(el => el.id !== id)
  //   })
  // }

  // const incQuantity = (id) => {
  //   setCarts(prev => {
  //     const targetItem = prev.find(el => el.id === id)
  //     if(targetItem) {
  //       return prev.map(el =>
  //         el.id === id ? {...el, quantity: el.quantity + 1} : el
  //       )
  //     }
  //   })
  // }

  // try to clean and reuse function among addToCard, decQualtity, incQuantity
  const updateQuantity = (id, amount) => {
    setCarts(prev => prev.map(el =>
      el.id === id ? {...el, quantity: el.quantity + amount} : el
    ))
  }

  const addToCard = (id, title, price) => {
    const isExist = carts.some(el => el.id === id)
    if(!isExist) {
      setCarts(prev => [...prev, {id, title, price, quantity: 1}])
    } else {
      updateQuantity(id, 1)
    }
  }

  const incQuantity = (id) => updateQuantity(id, 1)

  const decQuantity = (id) => {
    const targetItem = carts.find(el => el.id === id)
    if(targetItem && targetItem.quantity > 1) {
      updateQuantity(id, -1)
    } else {
      setCarts(prev => prev.filter(el => el.id !== id))
    }
  }


  // ------ JSX area
  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductList products={products} addToCard={addToCard}  />
        <CartSummary carts={carts} decQuantity={decQuantity} incQuantity={incQuantity} />
      </div>
    </div>
  )
}

export default App
