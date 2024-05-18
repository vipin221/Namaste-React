import Shimmer from './Shimmer';
import MenuCotegory from "./MenuCotegory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from 'react';


const RestaurantsMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);


    if (resInfo === null) {
        return <Shimmer />
    }
    
    const groupedCardProperty = 'groupedCard';

    const cardHasResList = resInfo?.cards.find((card) => { return card.hasOwnProperty(groupedCardProperty)} )
    const resItems = cardHasResList?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => {
        return item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    const resDetail = resInfo?.cards[2]?.card?.card?.info;
   


    return (
        <div className="w-full flex justify-center">
            <div className="w-1/2 flex flex-col justify-center items-center ">
                <div className='w-full'>
                    <h2 className="font-bold text-3xl text-center my-5 p-4 ">{resDetail?.name}</h2>
                    <div className="flex justify-between  w-full p-4  border-b-2">
                        <div className='w-full'  >
                            <h3 className="font-semibold text-xl">{resDetail?.name}</h3>
                            <p className="text-gray-700 font-sans">{resDetail?.cuisines.join(", ")}</p>
                            <p className=" flex justify-start items-center gap-2"> {resDetail?.locality}</p>
                        </div>
                        <div className=' flex justify-center flex-col items-center text-center min-w-28' >
                            <h3 className='bg-green-600 px-3 py-1 text-white font-semibold rounded-lg'> {resDetail?.avgRating}</h3>
                            <h3> {resDetail?.totalRatingsString} </h3>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-4  px-4 border-b-2 py-3">
                        <h4 className='flex justify-center items-center gap-1 font-bold '> {resDetail?.sla.slaString}</h4>
                        <h4 className='flex justify-center items-center gap-1 font-bold '>{resDetail?.costForTwoMessage}</h4>
                    </div>
                </div>
                <div className="w-full  ">
                    {resItems?.map((items, index) => {
                        return < MenuCotegory
                            key={index}
                            resData={items}
                            showIndex={index === showIndex ? true:false}
                            setShowIndex={setShowIndex}
                            index={index}
                            

                        />
                    })}

                </div>

            </div>
        </div>
    )
};
export default RestaurantsMenu;