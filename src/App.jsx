import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import Product from './pages/Product'
import Layout from './componets/Layout'
import ProductDetail from './pages/ProductDetail'
import Signin from './pages/Signin'
import Register from './pages/Register'
import Order from './pages/Order'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<About />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="product" element={<Product />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="orders" element={<Order />} />
              <Route path="signin" element={<Signin />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  )
}

export default App
