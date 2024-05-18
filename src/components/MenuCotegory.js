import { ChevronDown, ChevronUp } from "react-feather";
import MenuItems from "./MenuItems";
import { useState } from "react";


const MenuCotegory = ({resData,showIndex, setShowIndex,index}) => {
    const { title, itemCards } =  resData?.card?.card;


    const handleClick = () => {
        if(showIndex === true) {
            setShowIndex(-1);
        }
        else{
            setShowIndex(index);
        }
      
    }

    return (
        
            <div className="shadow-lg w-full  shadow-gray-200">
                <div className="flex justify-between p-2 my-2 -t-2 mt-4 bg-slate-200 cursor-pointer w-full" onClick={handleClick}>
                    <h2 className="text-lg font-bold"> {title} <span className="text-gray-700">({itemCards.length})</span></h2>
                    {showIndex? <ChevronDown/>:<ChevronUp />}
                </div>
                {itemCards?.map((item, index) => {
                    return (showIndex && <MenuItems key={index} itemCards={item} />)
                }
                )}

            </div>
    )
};

export default MenuCotegory;