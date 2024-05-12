import React from 'react'
import { RES_IMG } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { additems, clearItems, removeItem } from '../utils/cartSlice';

import { useSelector } from 'react-redux';
import { Trash } from 'react-feather';

const Cart = () => {

  const itemCards = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();


  return (
    <div className='flex w-full justify-center items-center flex-col'>
      <h2 className='text-2xl mt-4 font-semibold px-2'>Name Of Restaurant</h2>
      <p> location</p>

      <div className='w-1/2 flex justify-center items-center flex-col p-4'>
        {itemCards.length === 0 ? <div className='text-center m-4 w-full flex justify-end  rounded-lg text-white '>
          <button className='bg-red-500 rounded-xl p-2 font-semibold' onClick={() => dispatch(clearItems())}> Clear Cart </button>
        </div>: <></>}
        {itemCards.length === 0 ? <h1 className='text-lg font-semibold my-20'> Your Cart is Empty!!!!!!!!! Add Your Favourite Dishes </h1> : itemCards.map((items) => {
          return (
            <div key={items.card.info.id} className=' w-[400] border flex justify-start h-20 gap-3 items-center m-3 shadow-lg shadow-gray-400  rounded-lg overflow-hidden '>

              <div className=' w-3/12'>
                {items.card.info.imageId ? (<img className=' h-full w-full rounded-xl' src={RES_IMG + items.card.info.imageId} />) : <div></div>}
              </div>

              <div className='w-8/12 p-2'>
                <h3 className='font-semibold line-clamp-2'>{items.card.info.name}</h3>
                <h4 className='bg-green-500 w-[55] py-1 px-2 text-nowrap rounded-md text-white text-s'>₹ {items.card.info.price / 100 || items.card.info.defaultPrice / 100}</h4>

              </div>
              <div className='w-1/12 h-full bg-blue-600 '>
              <button className="w-full h-full text-white  flex justify-center items-center " onClick={() => dispatch(removeItem(items.card.info.id))}> <Trash  className=" w-4 h-4 "  /> </button>

              </div>
             

            </div>
          )
        })}


      </div>






    </div>
  )
}

export default Cart;
