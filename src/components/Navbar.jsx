import React from 'react'
import { ImCart } from "react-icons/im";
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between'>
            <NavLink to="/">
              <div>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fcoding-logo&psig=AOvVaw186uwC8uE3a8U7tjjXVNtV&ust=1700638705559000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCDxIHL1IIDFQAAAAAdAAAAABAI" alt="logo" />
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
