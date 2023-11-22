import React from 'react'
import { ImCart } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import Cart from '../pages/Cart';
import { useSelector } from 'react-redux';


export const Navbar = () => {

  const {cart} = useSelector((state) => state); 
  return (
      <div className='bg-slate-900 fixed top-0 w-full z-50'>
        <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
            <NavLink to="/">
              <div className='ml-5'>
                <img src="../src/assets/logo.png" className='h-14' alt="logo" />
              </div>
            </NavLink>
            <div className='flex items-center font-medium	text-slate-100 mr-5 space-x-6'>
              <NavLink to="/">
                <p>Home</p>
              </NavLink>
              <NavLink to="/cart">
                <div className='relative'>
                  <ImCart className='text-2xl'/>
                  {
                    cart.length > 0 &&
                  <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center itemss-center animate-bounce rounded-full texxt-white'>{cart.length}</span>
                  }
                </div>
              </NavLink>
            </div>
        </nav>
    </div>
  )
}
