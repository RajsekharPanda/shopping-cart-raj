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
    <div>

      <div>


        <div>
          <img src={item.image} />
        </div>

        <div>
          <h2>{item.title}</h2>
          <h2>{item.description}</h2>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}
            >
            <RiDeleteBin2Fill />
            </div>
          </div>

        </div>


      </div>
      

    </div>
  )
}


export default Cartitem