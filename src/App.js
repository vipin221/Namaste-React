import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className="app">
      <Header />  
      <Outlet />
    </div>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <AboutUs/>,
        
      },
      {
        path: "/contact",
        element: <Contact/>,      
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu/>,      
      },
    ],
    errorElement: <Error/>,

  },
  
]);





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

