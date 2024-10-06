import React, { useState } from 'react';
import { MdOutlineStarOutline } from 'react-icons/md';
import { Button, Dialog, Transition } from "@headlessui/react";
import AddToCartButton from "./AddToCartButton";
import ProductCardSideNav from "./ProductCardSideNav";

interface ProductProps {
  name: string;
  overView: string;
  regularPrice: number;
  discountedPrice: number;
  images: string[];
}

interface Props {
  item: ProductProps;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const discountPercentage = ((item.regularPrice - item.discountedPrice) / item.regularPrice) * 100;

  return (
    <div className="border border-gray-200 rounded-lg p-1 overflow-hidden hover:border-black duration-200 cursor-pointer">
      <div className="w-full h-60 relative p-2 group">
        <span onClick={openModal} className="bg-black text-skyText absolute left-0 top-0 w-16 text-xs text-center py-1 rounded-md font-semibold inline-block z-10">
          save {discountPercentage.toFixed(0)}%
        </span>
        <img src={item.images[0]} alt={item.name} className="w-full h-full rounded-md object-cover group-hover:scale-110 duration-300"/>
        <ProductCardSideNav />
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <h3 className="text-xs uppercase font-semibold text-lightText">
          {item.overView}
        </h3>
        <h2 className="text-lg font-bold line-clamp-2">
          {item.name}
        </h2>
        <div className="flex text-base text-lightText items-center">
          {[...Array(5)].map((_, index) => (
            <MdOutlineStarOutline key={index} />
          ))}
        </div>
        <AddToCartButton />
      </div>

      <Transition show={isOpen} as={React.Fragment}>
        <Dialog onClose={closeModal} className="relative z-10">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Hurry Up!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This is a limited time offer for {item.name}. Don't miss out!
                    </p>
                  </div>

                  <div className="mt-4">
                    <Button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductCard;