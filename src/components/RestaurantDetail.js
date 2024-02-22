import React from 'react';


const RestaurantDetail = (props) => {
    const {name,cuisines,locality,totalRatingsString,sla,costForTwoMessage} = props?.resDetail
  return (
    <>
        <h2 className="res_name">{name}</h2>
        <div className="RestaurantMenu_resData">
            <div >
                <h3 className="res-name-sub">{name}</h3>
                <p className="res-cuisines">{cuisines.join(", ")}</p>
                <p className="res-address">{locality}</p>
            </div>
        <div>{totalRatingsString}
        </div>
        </div>
        <div className="time-price">
            <h4>{sla.slaString}</h4>
            <h4>{costForTwoMessage}</h4>
        </div>
      
    </>
  )
}

export default RestaurantDetail
