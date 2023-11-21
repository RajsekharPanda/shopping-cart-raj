import React from 'react'
import { ImCart } from "react-icons/im";
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='bg-red-300'>
        <div className='flex flex-row justify-between'>
            <NavLink to="/">
              <div>
                <img src="../logo.png" className='h-14' alt="logo" />
              </div>
            </NavLink>
            <div>
              <NavLink to="/">
                <p>Home</p>
              </NavLink>
              <NavLink to="/cart">
                <div>
                  <ImCart />
                </div>
              </NavLink>
            </div>
        </div>
    </div>
  )
}
