import {useState} from 'react'

import Product from './sections/Product'

function ProductsPage({productitems}) {
  return (
    <div className="container mx-auto px-6">
      <h3 className="text-gray-700 text-2xl font-medium">Gallery</h3>
      <span className="mt-3 text-sm text-gray-500"></span>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {productitems.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
