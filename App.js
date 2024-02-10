import React from "react";
import ReactDOM from "react-dom/client";

/*
  - Header
      -logo
      -nav-items


  -body
    -search option
    -restaurant container
      -> restuarant cards
          -img
          -restaunrant name, rating , 
          -

  -footer
    -copyright
    -links
    -Address
    -Contact*
*/


const Header = () => {
  return (
    <div className="header">
      <div className="App-logo">
        <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Customer Care</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const Card = (props) => {
  // console.log(props.name);
  const { name, cuisunes, costForTwo, resLogo, rating, deliveryTime } = props?.resData;


  return (
    <div className="res-card">
      <div className="res-image">
        <img alt="res-food-logo"
          className="res-food-image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"

        />
      </div>
      <div className="res-detail">
        <h3>{name}</h3>
        <h4>{cuisunes.join(", ")}</h4>
        <h4>{rating} stars</h4>
        <h4>{costForTwo} min</h4>
        <h4>{deliveryTime} min</h4>
      </div>

    </div>
  )
}
cardList = [
  {
    name: "KFC",
    cuisunes: ["BIryani", "Indian", "Southern", "Desert"],
    costForTwo: 50000,
    resLogo: "",
    rating: "4.5",
    deliveryTime: 30,


  },
  {
    name: "Mcdonald",
    cuisunes: ["Burger", "Indian", "Southern", "fastFood", "starter"],
    costForTwo: 35000,
    resLogo: "",
    rating: "4.5",
    deliveryTime: 50,


  },
  {
    name: "Kannur hot",
    cuisunes: ["Hot", "BIryani", "vegan", "Desert"],
    costForTwo: 40000,
    resLogo: "",
    rating: "4.5",
    deliveryTime: 30,


  },
  {
    name: "Meghna Food",
    cuisunes: ["Rice", "Pulao", "Southern", "Desert"],
    costForTwo: 45000,
    resLogo: "",
    rating: "3.5",
    deliveryTime: 60,


  },
  {
    name: "bikaner",
    cuisunes: ["Indian", "Southern", "Desert"],
    costForTwo: 22000,
    resLogo: "",
    rating: "4",
    deliveryTime: 77,


  },
  {
    name: "Moolchand Paratha",
    cuisunes: ["Breakfast", "Indian", "paratha", "Desert"],
    costForTwo: 40000,
    resLogo: "",
    rating: "4.5",
    deliveryTime: 20,
  },

  {
    name: "Red Chilli",
    cuisunes: ["chainese", "Indian", "Southern", "Desert"],
    costForTwo: 30000,
    resLogo: "",
    rating: "4",
    deliveryTime: 50,


  },
  {
    name: "Engineer Theka",
    cuisunes: ["Drink", "Popcorn", "Southern", "Desert"],
    costForTwo: 40000,
    resLogo: "",
    rating: "4.5",
    deliveryTime: 30,


  }
]


const Body = () => {
  return (
    <div className="container">
      <div className="search"> Search</div>
      <div className="card-container">
        {cardList.map(item => <Card resData={item} />)}




      </div>


    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

