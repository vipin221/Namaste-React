import Card, {OpenRestuarantCard} from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Search } from "react-feather";
import { RES_LISTS } from "../utils/constant";


const Body = () => {

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredReatuarants, setfilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

   const fetchData = async () => {
    const data = await fetch(RES_LISTS);

    const json = await data.json();

    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Uh Oh! Seems Like you Are Offline!!!!!!!!!</h1>
  }

  const OpenRestuarant = OpenRestuarantCard(Card);

if(!listOfRestaurants) return <Shimmer/>

  return (
    <div className="p-10">
      <div className="" >
        <div className="flex justify-center ">
          <input data-testid="searchInput" className='rounded-sm py-2 px-4 rounded-l-lg shadow-lg bg-slate-100 border transition duration-300 border-blue-400 focus:border-blue-500' type="text" onChange={(e) => {
            (setsearchText(e.target.value));

          }} value={searchText} />

          <button data-testid="searchbtn" className="bg-blue-400 py-2 px-4 shadow-lg rounded-r-lg" onClick={() => {

            setfilteredRestaurants(listOfRestaurants.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase())));
          }
          }><Search /> </button>
          <button
            className="bg-slate-400 py-2 px-4 mx-10 shadow-lg rounded-lg"
            onClick={() => { setlistOfRestaurants(listOfRestaurants.filter(item => item.info.avgRating > 4)); }}
          >High Rated Restaurants
          </button>
        </div>


      </div>

      <div className="px-4">
        <div className="m-4 p-4 flex flex-wrap gap-8 justify-center">
          {!(filteredReatuarants.length === 0) ? filteredReatuarants.map((item) =>
            <Link key={item.info.id} to={"restaurants/" + item.info.id}>
              {item.info?.isOpen ? <OpenRestuarant resData={item}/> : <Card resData={item} />}
            </Link>) : <>No Result found</>}
        </div>

      </div>



    </div>
  )
};

export default Body;

