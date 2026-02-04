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

  const addToCard = (id, title, price) => {
    
    const index = carts.findIndex((el) => el.id === id)
    if(index === -1){
      let newItem = {id: id, title: title, price: price, quantity: 1}
      setCarts([...carts, newItem])
    } else {
      const newCarts = [...carts]
      newCarts[index] = {...newCarts[index], quantity: newCarts[index].quantity+1}
      setCarts(newCarts)
    }

  }


  // ------ JSX area
  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductList products={products} addToCard={addToCard} />
        <CartSummary carts={carts} />
      </div>
    </div>
  )
}

export default App
