import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import MenuCotegory from "./Menucotegory";
import RestaurantDetail from "./RestaurantDetail";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";


const RestaurantsMenu = () => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setresInfo(json?.data);

    }

    const { resId } = useParams();


    if (resInfo === null) {
        return <Shimmer />
    }

    const resItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    resItems.shift();
    resItems.pop();
    resItems.pop();


    return (
        <div className="restaurants">
            <div className="restaurantMenu">
                <RestaurantDetail resDetail={resInfo?.cards[2]?.card?.card?.info} />
                <div className="res-menu">
                    {resItems?.map((items, index) => {
                        return < MenuCotegory key={index} resData={items} />
                    })}

                </div>

            </div>
        </div>
    )
};
export default RestaurantsMenu;