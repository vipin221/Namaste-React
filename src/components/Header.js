import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import {LOGO_URL} from '../utils/constant'
import { Wifi, WifiOff } from "react-feather";



const Header = () => {
  const { loggedInUser } = useContext(userContext);

  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();


  const cartItem = useSelector((store) => store.cart.items);



  return (
    <div className="flex justify-between w-full  bg-orange-200 shadow-xl">
      <div >
        <Link to='/'> <img src={LOGO_URL} alt="logo" className="p-4 w-28 mix-blend-color-burn " /> </Link>
      </div>
      <ul className="flex  text-lg items-center  font-medium font-sans">
        <li className="m-2 p-2">{onlineStatus ? <Wifi className="text-green-600" /> : <WifiOff className="text-red-400"/>}</li>
        <li className="m-2 p-2 hover:bg-orange-300 rounded-lg transition duration-300" ><Link to="/about">About</Link></li>
        <li className="m-2 p-2 hover:bg-orange-300 rounded-lg transition duration-300" ><Link to="/contact">Contact</Link></li>
        <li className="m-2 p-2 hover:bg-orange-300 rounded-lg transition duration-300" ><Link to="/grocery">Grocery</Link></li>
        <li className="m-2 p-2 hover:bg-orange-300 rounded-lg transition duration-300 " ><Link to="/cart">Cart ({cartItem.length})</Link></li>
        <button onClick={() => btnName === "Login" ? setbtnName(loggedInUser) : setbtnName("Login")} className="bg-blue-100 opacity-95 rounded-lg m-2 p-2">{btnName}</button>
      </ul>
    </div>
  )
};

export default Header;
