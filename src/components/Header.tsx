import React, { useState } from 'react'
import { logo } from '../assets'
import { IoClose, IoSearchOutline } from 'react-icons/io5'
import { FiShoppingBag, FiStar, FiUser } from 'react-icons/fi'

function Header() {
  const [searchText, setSearchText] = useState('')

  return (
    <header className='w-full bg-whiteText'>
      <div className='max-w-screen-xl mx-auto py-4 px-4 lg:px-0'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <img src={logo} alt="logo" className='w-44' />

          {/* Search bar */}
          <div className='hidden md:flex flex-1 max-w-3xl mx-8 relative'>
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              placeholder='Search Products..'
              className='w-full rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder-font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2'
            />
            {searchText ? (
              <IoClose
                className='absolute top-1/2 right-4 -translate-y-1/2 text-xl hover:text-red-500 cursor-pointer duration-200'
                onClick={() => setSearchText('')}
              />
            ) : (
              <IoSearchOutline className='absolute top-1/2 right-4 -translate-y-1/2 text-xl' />
            )}
          </div>

          {/* Menu bar */}
          <div className='flex items-center gap-x-6 text-2xl'>
            <FiUser className='hover:text-skyText duration-200 cursor-pointer' />
            <div className='relative block'>
              <FiStar className='hover:text-skyText duration-200 cursor-pointer' />
              <span className='inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4'>0</span>
            </div>
            <div className='relative block'>
              <FiShoppingBag className='hover:text-skyText duration-200 cursor-pointer' />
              <span className='inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4'>0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header