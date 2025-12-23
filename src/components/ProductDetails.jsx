import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productdata } from '../data/productdata'

const ProductDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})

    useEffect(() => {
        // Fetch product details using the id
        const data = productdata.find(p=>p.id == id)
        if(data) {
          console.log(data)
          setProduct(data)
        }
    },[])
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails