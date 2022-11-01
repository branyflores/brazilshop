import React from 'react';

import Link from 'next/link';

import { GrShop } from 'react-icons/gr'
import { Cart } from './'
import { useStateContext } from '../context/StateContext';


const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>

      <p className='logo'>
        <Link href='/'> BSB Bikini</Link>

      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <GrShop />

        <span className='cart-item-qty'> {totalQuantities} </span>
      </button>
      
      {showCart && <Cart />}
      
    </div>
  )
}

export default Navbar