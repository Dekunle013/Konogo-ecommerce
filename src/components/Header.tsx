import React from 'react'
import { logo } from '../assets';

function Header() {
  return (
    <header className='w-full bg-whiteText'>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header
