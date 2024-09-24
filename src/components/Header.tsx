import React, { useEffect, useState } from 'react'
import { logo } from '../assets'
import { IoClose, IoSearchOutline } from 'react-icons/io5'
import { FiShoppingBag, FiStar, FiUser } from 'react-icons/fi'
import { FaChevronDown } from 'react-icons/fa'
import Container from './Container'
import { Link } from 'react-router-dom'
import {config} from '../../config';
import { getData } from "../lib"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react"
import { CategoryProps } from '../../type';
import LinkButton from "./LinkButton"

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
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    const fetchData = async() => {
      const endpoint = `${config?.baseUrl}/categories`;
      try{
        const data = await getData(endpoint);
        setCategories(data)
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  },[])
  return (
    <header className='w-full bg-whiteText'>
      <div className='max-w-screen-xl mx-auto py-4 px-4 lg:px-0'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to={'/'}>
            <img src={logo} alt="logo" className='w-44' />
          </Link>

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
            <Link to={'/profile'}>
              <FiUser className='hover:text-skyText duration-200 cursor-pointer' />
            </Link>
            <Link to={'/favorite'}>
              <IconWithBadge icon={FiStar} count={0} />
            </Link>
            <Link to={'/cart'}>
             <IconWithBadge icon={FiShoppingBag} count={0} />
            </Link>
          </div>
        </div>
      </div>
      
      <nav className='w-full bg-darkText text-whiteText'>
        <Container className='py-2 max-w-4xl flex items-center gap-5 justify-between'>
          <Menu>
            <MenuButton className='inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 font-semibold text-gray-300 hover:text-whiteText'>
              Categories
              <FaChevronDown className='text-base mt-1' />
            </MenuButton>
            <Transition
              enter="transition duration-75 ease-out"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="transition duration-100 ease-in"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
            >
               <MenuItems anchor='bottom end' className="absolute mt-2 w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50">
                {categories.map((item: CategoryProps) => (
                  <MenuItem key={item?._id}>
                      <Link
                        to={`/category/${item?._base}`}
                        className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                      >
                        <img 
                          src={item?.image} 
                          alt={item?.name}
                          className="w-6 h-6 rounded mr-2"
                        />
                        {item?.name}
                      </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
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