import { useState } from "react";

const AboutUserCard = (props) => {
    const [count, setcount] = useState(0);
    const increment =() =>{
        setcount(prev => prev + 1);
    }
    return (
        <div>
            <h3 onMouseOver={increment}> {count}</h3>
            <h4> name :{props.name} </h4>
            <h5>Address: {props.location}</h5>
            <p> contact: mauryavipin30@gmail.com</p>
        </div>
    );


};
export default AboutUserCard;