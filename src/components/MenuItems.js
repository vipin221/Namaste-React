import React from 'react'
import { RES_IMG } from '../utils/constant';


const MenuItems = (props) => {
  console.log(props.itemCards?.card?.info);
    const {name, imageId, price} = props.itemCards?.card?.info;
  return (
        <div className="res-items">
            <div>
                <h3>{name}</h3>
                <h5> Rs. {price / 100} </h5>
            </div>
           {imageId? (<img src={RES_IMG + imageId}/>):<div></div>}
        </div>

  )
}

export default MenuItems
