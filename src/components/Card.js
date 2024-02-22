import { RES_IMG } from "../utils/constant";

const Card = (props) => {
    const { name, cuisines, costForTwo, resLogo, avgRating, sla, cloudinaryImageId } = props?.resData.info;
  
  
    return (
      <div className="res-card">
        <div className="res-image">
          <img alt="res-food-logo"
            className="res-food-image"
            src={RES_IMG+cloudinaryImageId}
  
          />
        </div>
        <div className="res-detail">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo} min</h4>
          <h4>{sla.deliveryTime} min</h4>
        </div>
  
      </div>
    )
  };

export default Card;