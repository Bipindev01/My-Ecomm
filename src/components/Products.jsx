import React from "react";
import {productdata} from '../data/productdata.js';
import Product from "./Product";

const Products = () => {
  return (
    <div className="px-10 py-8">
      <h1 className="text-4xl font-extrabold text-center bg-linear-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mb-8 ">
        Our Products
      </h1>

        {/* Grid */}
        <div className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                productdata.map( (p)=>( 
                    <Product key={p.id}
                    title={p.title}
                    price={p.price}
                    image={p.image}
                    id={p.id}
                    />
                )

                )
            }
        </div>

    </div>
  );
};

export default Products;
