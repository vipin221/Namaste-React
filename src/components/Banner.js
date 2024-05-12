import React from 'react';
import { Banner_URL } from '../utils/constant';

const Banner = (props) => {
  
  const {imageId, action} = props?.gridData;
  return (
    <div className='flex-shrink-0 w-44 h-44 bg-gray-300' >
    <img src={Banner_URL + imageId}></img>
      
    </div>
  )
}

export default Banner;
