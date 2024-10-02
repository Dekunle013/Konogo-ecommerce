import React from 'react'
interface Props {
  item: ProductProps;
}

const ProductCard = ({ item }: Props) => {
  const percentage  = ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice)*100
  return (
    <div className="border border-gray-200 rounded-lg p-1 overflow-hidden hover:border-black duration-200 cursor-pointer ">
      <div className="w-full h-60 relative p-2 group">
        <span className="bg-black text-skyText absolute left-0 right=0 w-16 text-xs text-center py-1 rounded-md font-semibold inline-block z-10">
          save {percentage.toFixed(0)}%
        </span>
        <img src={item?.images[0]} alt="ProductImage" className="w-full h-full rounded-md object-cover group-hover:scale-110 duration-300"/>
      </div>
    </div>
  )
}

export default ProductCard
