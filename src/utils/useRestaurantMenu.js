import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constant";

const  useRestaurantMenu = (resId) =>{
    const [resInfo, setresInfo] = useState();
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData  =  async () =>{
        const data = await fetch(MENU_API_URL + resId);
        const  json = await data.json();
        setresInfo(json?.data);


    }
    return resInfo;


};
export default useRestaurantMenu;