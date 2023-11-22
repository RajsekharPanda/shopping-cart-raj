import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from '../components/Cartitem'
import { NavLink } from 'react-router-dom';

const Cart = () => {


  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0));
  },[cart])

  return (
    <div className='w-full mt-24'>
      {
        cart.length > 0 ? 
        (
          <div className='flex justify-center mx-auto max-w-6xl w-3xl gap-7 h-[42rem]'>
            <div className='w-[50%] overflow-auto h-[42rem]'>
              {
                cart.map( (item, index) => {
                  return <Cartitem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>

            <div className='flex flex-col justify-between w-3xl max-h-[36rem] '>

              <div className=''>
                <div className='font-semibold text-2xl text-green-800'>Your Cart</div>
                <div className='font-bold text-4xl text-green-700'>Summary</div>
                <p>
                  <span className='font-semibold'>Total Items: {cart.length}</span>
                </p>
              </div>

              <div>
                <p className='font-semibold'>Total Amount: <span className='font-extrabold'>${totalAmount}</span></p>
                <button className='rounded-md font-semibold text-[18px] py-1 px-16 bg-green-700 text-white'>Checkout Now</button>
              </div>

            </div>
            

          </div>
        ) :
        (
          <div className='flex flex-col w-full justify-center items-center h-[80vh] gap-8'>
            <h2 className='font-bold text-4xl text-slate-900'>Cart Empty</h2>
            <NavLink to={"/"}>
              <button className='rounded-md text-[1rem] py-1 px-8 bg-green-700 text-white'>
                Shop Now
              </button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart