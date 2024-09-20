import React, { useState } from 'react'
import { logo } from '../assets'
import { IoClose, IoSearchOutline } from 'react-icons/io5'
import { FiShoppingBag, FiStar, FiUser } from 'react-icons/fi'
import { FaChevronDown } from 'react-icons/fa'
import Container from './Container'

const bottomNavigation = [
  { title: 'Home', link: '/' },
  { title: 'Shop', link: '/product' },
  { title: 'Cart', link: '/cart' },
  { title: 'Orders', link: '/orders' },
  { title: 'My Account', link: '/profile' },
  { title: 'Blog', link: '/blog' },
]

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
            <IconWithBadge icon={FiStar} count={0} />
            <IconWithBadge icon={FiShoppingBag} count={0} />
          </div>
        </div>
      </div>
      
      <nav className='w-full bg-darkText text-whiteText'>
        <Container className='py-2 max-w-4xl flex items-center gap-5 justify-between'>
          <p className='flex items-center gap-1 cursor-pointer'>
            Select Category <FaChevronDown />
          </p>
          {bottomNavigation.map(({ title, link }) => (
            <NavLink key={title} title={title} link={link} />
          ))}
        </Container>
      </nav>
    </header>
  )
}

function IconWithBadge({ icon: Icon, count }) {
  return (
    <div className='relative'>
      <Icon className='hover:text-skyText duration-200 cursor-pointer' />
      <span className='inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4'>
        {count}
      </span>
    </div>
  )
}

function NavLink({ title, link }) {
  return (
    <a 
      href={link}
      className='uppercase hidden md:inline-flex text-sm font-sm text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group'
    >
      {title}
      <span className='absolute bottom-0 left-0 w-full h-[1px] bg-whiteText transform translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-300'></span>
    </a>
  )
}

export default Header