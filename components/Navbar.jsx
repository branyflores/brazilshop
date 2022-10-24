import React from 'react';

import Link from 'next/link';

import { GrShop } from 'react-icons/gr'


const Navbar = () => {
  return (
    <div className='navbar-container'>

      <p className='logo'>
        <Link href='/'> bsb bikini</Link>

      </p>

      <button type='button' className='cart-icon' onClick="">
        <GrShop />

        <span className='cart-item-qty'> + </span>
      </button>
    </div>
  )
}

export default Navbar