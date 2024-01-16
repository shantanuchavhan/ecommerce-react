import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import Product from './pages/Product'
import Layout from './componets/Layout'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<About />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
