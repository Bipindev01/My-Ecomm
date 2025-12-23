import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({title, price, image, id}) => {
  return (
    <div className='bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl shadow-xl p-4 flex flex-col h-full hover:translate-y-2 hover:shadow-purple-300 transition-all duration-300 gap-2'>

      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <Link to={`/products/${id}`}>
        <button className='mt-auto w-full rounded-lg bg-linear-to-r from-purple-600 to-pink-500 text-white'>View Details</button>
      </Link>
    </div>
  )
}

export default Product