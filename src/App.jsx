import React from 'react'
import Products from './components/Products.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './route/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetails from './components/ProductDetails.jsx'


const App = () => {
  return (
    <div className = 'bg-gray-100 min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />

            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='products/:id' element={<ProductDetails />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App