import React from 'react'
import Container from './Container'
import { payment } from '../assets'

function Footer() {
  return (
    <div className='mt-10'>
      <Container className='flex flex-col md:flex-row items-center gap-4 justify-between'>
        <p>
          @2024 E-commerce solution. All rights reserved.
        </p>

        <img src={payment} alt="payment-img"  className='object-cover'/>
      </Container>
    </div>
  )
}

export default Footer
