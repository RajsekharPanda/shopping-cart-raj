import React from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';


const Cartitem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }
  return (
    // <div className=''>

      <div className='flex border-b-2 gap-7'>


        <div className='h-[180px] p-4'>
          <img src={item.image} className='h-full w-full'/>
        </div>

        <div>
          <h2 className='text-gray-700 font-semibold text-lg text-left w-40 mt-1'>{item.title}</h2>
          <h2 className='w-40 text-gray-400 font-normal text-[10px] text-left '>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h2>
          <div className='flex justify-between'>
            <p className='text-green-600 font-semibold'>{item.price}</p>
            <div
            onClick={removeFromCart}
            >
            <RiDeleteBin2Fill />
            </div>
          </div>

        </div>


      </div>
      

    // </div>
  )
}


export default Cartitem