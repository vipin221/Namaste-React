import Card, {OpenRestuarantCard} from "./Card";
import { useEffect, useState, useRef } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Search } from "react-feather";
import { RES_LISTS } from "../utils/constant";
import Banner from "./Banner";
import { options } from "../utils/constant";


const Body = () => {

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredReatuarants, setfilteredRestaurants] = useState([]);
  const [gridItems, setgridItems] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

   const fetchData = async () => {
    const data = await fetch(RES_LISTS, options);

    const json = await data.json();

    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

     setgridItems(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
   


  }

 
    const scrollRef = useRef(null);

    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= 100; // Adjust scroll speed as needed
      }
    };

    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 100; // Adjust scroll speed as needed
      }
    }
  

  

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Uh Oh! Seems Like you Are Offline!!!!!!!!!</h1>
  }

  const OpenRestuarant = OpenRestuarantCard(Card);

  return listOfRestaurants?.length === 0? <Shimmer/>:(
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
            onClick={() => { setfilteredRestaurants(listOfRestaurants.filter(item => item.info.avgRating > 4)); }}
          >High Rated Restaurants
          </button>
        </div>


      </div>

      <div className="relative overflow-hidden ">
        

        <div
          ref={scrollRef}
          className="flex items-center space-x-4 p-4"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
         
         >
          <button
            onClick={scrollLeft}
            className="absolute top-0 left-0 mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Scroll Left
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-0 right-0 mt-4 mr-4 bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Scroll Right
          </button>
          {gridItems.map((items) => <Banner key={items?.id} gridData={items} />)}

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

