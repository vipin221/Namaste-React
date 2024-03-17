import React from 'react';
import { Clock, MapPin } from 'react-feather';


const RestaurantDetail = (props) => {
    // const { name,  cuisines, locality, totalRatingsString, sla, costForTwoMessage, ratings } = props?.resDetail?.
    // console.log(props.resDetail);
    return (
        <>
            <h2 className="font-bold text-3xl my-5 p-4 ">{props?.resDetail?.name}</h2>
            <div className="flex justify-between border w-full p-4">
                <div  >
                    <h3 className="font-semibold text-xl">{props?.resDetail?.name}</h3>
                    <p className="text-gray-700 font-sans">{props?.resDetail?.cuisines.join(", ")}</p>
                    <p className=" flex justify-start items-center gap-2"> <MapPin className='w-4 h-4 '/>{props?.resDetail?.locality}</p>
                </div>
                <div>
                    {props?.resDetail?.ratings?.aggregatedRating?.rating}
                    {props?.resDetail?.totalRatingsString}
                </div>
            </div>
            <div className="flex justify-start items-center gap-4 w-full px-4 ">
                <h4 className='flex justify-center items-center gap-1 font-semibold text-s'><Clock className='w-4 h-4'/> {props?.resDetail?.sla.slaString}</h4>
                <h4 className='flex justify-center items-center gap-1 font-semibold text-s'>{props?.resDetail?.costForTwoMessage}</h4>
            </div>

        </>
    )
}

export default RestaurantDetail
