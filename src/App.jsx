import React from 'react'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx'

const App = () => {
  return (
    <div className = 'bg-gray-100 min-h-screen'>
      <Navbar />
      <Products />
    </div>
  )
}

export default App