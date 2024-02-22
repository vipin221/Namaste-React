import Card from "./Card";
import cardList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredReatuarants, setfilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);


 
  fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
 
  }
 

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="container">
      <div>
        <div>
          <input type="text" onChange={(e) => {
            (setsearchText(e.target.value));

          }} className="search_text" value={searchText} />

          <button className="search-btn" onClick={() => {

            setfilteredRestaurants(listOfRestaurants.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase())));
          }
          }>Search </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => { setlistOfRestaurants(listOfRestaurants.filter(item => item.info.avgRating > 4)); }}
        >High Rated Restaurants
        </button>

      </div>

      <div className="card-container">
        { !(filteredReatuarants.length===0) ? filteredReatuarants.map((item) =>
        <Link  key={item.info.id} to={"restaurants/"+item.info.id}> <Card resData={item} /> </Link>): <>No Result found</>}
      </div>

    </div>
  )
};

export default Body;

