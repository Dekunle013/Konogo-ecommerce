import React from 'react';

interface AddToCartButtonProps {
  className?: string;
  item?: {
    title?: string;
  };
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ className, item }) => {
  return (
    <button className={`bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 ${className || ''}`}>
      {item?.title || 'Add to cart'}
    </button>
  );
};

export default AddToCartButton;