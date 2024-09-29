import React from 'react'
import Container from "./Container"
import Title from "./Title"
import { Link } from "react-router-dom"

const ProductList = () => {
  return (
    <Container>
      <div>
        <div className="flex items-center justify-between">
          <Title text="Top Selling Products"/>
          <Link to={'/product'}>
            View All Products
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-2"/>
      </div>
    </Container>
  )
}

export default ProductList
