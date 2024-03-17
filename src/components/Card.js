import { Star } from "react-feather";
import { RES_IMG } from "../utils/constant";

const Card = (props) => {
    const { name, cuisines, costForTwo, resLogo, avgRating, sla, cloudinaryImageId } = props?.resData.info;
  console.log(props?.resData);
  
  
    return (
      <div data-testid="resCard" className="w-60 h-72 overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-200 hover:shadow-lg">
        <div >
          <img alt="res-food-logo"
            className="w-full h-48 rounded-lg"
            src={RES_IMG+cloudinaryImageId}
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 line-clamp-1">{name}</h3>
          <div className="flex gap-2">
            <h4 className="flex justify-center items-center gap-1 bg-green-600 px-2 text-white rounded-md "><Star className="w-4 h-5 text-white" />{avgRating} </h4>
            <h4>{sla.deliveryTime} min</h4>
          </div>
          <h4 className="text-gray-500 text-sm">{cuisines.join(", ")}</h4>
        </div>
  
      </div>
    )
  };

  //higher Order Component 

  export const OpenRestuarantCard = (Card) =>{
    return (props) => {
      return (
        <div className="relative w-60 rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 hover:shadow-slate-600 hover:scale-[1.01]">
          <label className="absolute shadow-slate-700 bg-black px-2 py-1 text-white rounded-br-lg z-10 ">Open</label>
          <Card {...props}/>
        </div>

      );
    }
  }

export default Card;