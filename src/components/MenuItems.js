import React from 'react'
import { RES_IMG } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { additems } from '../utils/cartSlice';


const MenuItems = (props) => {

    const {name, imageId, price,description, defaultPrice} = props.itemCards?.card?.info;
    const dispatch = useDispatch();

    const handleClick =()=>{
      dispatch(additems(props.itemCards)) ;
    }

  return (
        <div className="flex p-4 rounded-lg bg-slate-100 shadow-lg shadow-slate-200 m-2   border-slate-200 border-b-2 ">
            <div className='flex-1'>
                <h3 className='font-bold'>{name}</h3>
                <h5 className='font-thick'>  ₹ {price? price / 100: defaultPrice/100 } </h5>
                <p className='text-xs text-gray-500'> {description}</p>
            </div>
            <div className='relative w-3/12'>
            <button className="bg-blue-600 py-1 px-2 rounded-lg text-nowrap text-white font-semibold absolute left-1/2 transform -translate-x-1/2 bottom-[-8]" onClick={() =>handleClick(props.itemCards)}>Add + </button>
            {imageId? (<img className='h-32 w-full  rounded-xl' src={RES_IMG + imageId}/>):<div></div>}
            </div>
          
        </div>

  )
}

export default MenuItems
