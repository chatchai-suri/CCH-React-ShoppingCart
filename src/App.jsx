import { useEffect, useState } from "react"
import CartSummary from "./components/CartSummary"
import Header from "./components/Header"
import ProductList from "./components/ProductList"


function App() {
  // ------ JS area ------
  // State
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  // Function
  const fecthProducts = () => {
    fetch('http://localhost:8000/products')
    .then(resp => resp.json())
    .then(data => setProducts(data))
  }

  useEffect( ()=> {
    fecthProducts()
  }, [])

  // ------ JSX area
  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductList products={products} />
        <CartSummary carts={carts} />
      </div>
    </div>
  )
}

export default App
