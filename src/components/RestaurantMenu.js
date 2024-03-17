import Shimmer from './Shimmer';
import MenuCotegory from "./MenuCotegory";
import RestaurantDetail from "./RestaurantDetail";
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

    const resItems = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => {
        return item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    resDetail = resInfo?.cards[0]?.card?.card?.info;


    return (
        <div className="w-full flex justify-center bg-slate-200">
            <div className="w-1/2 flex bg-white flex-col justify-center items-center ">
                <div>
                    <h2 className="font-bold text-3xl my-5 p-4 ">{resDetail?.name}</h2>
                    <div className="flex justify-between border w-full p-4">
                        <div  >
                            <h3 className="font-semibold text-xl">{resDetail?.name}</h3>
                            <p className="text-gray-700 font-sans">{resDetail?.cuisines.join(", ")}</p>
                            <p className=" flex justify-start items-center gap-2"> {resDetail?.locality}</p>
                        </div>
                        <div>
                            {resDetail?.ratings?.aggregatedRating?.rating}
                            {resDetail?.totalRatingsString}
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-4 w-full px-4 ">
                        <h4 className='flex justify-center items-center gap-1 font-semibold text-s'> {resDetail?.sla.slaString}</h4>
                        <h4 className='flex justify-center items-center gap-1 font-semibold text-s'>{resDetail?.costForTwoMessage}</h4>
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